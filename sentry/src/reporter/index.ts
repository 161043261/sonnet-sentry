import { SDK_VERSION } from "../constants";

import type { IDataReporter, IReportData, TReportPayload } from "../types";

import { CallbackQueue, sentry, sonnetLogger } from "../utils";

export class DataReporter implements IDataReporter {
  cbQueue = new CallbackQueue();
  id = crypto.randomUUID();
  private events: IReportData[] = [];
  private timeoutID?: ReturnType<typeof setTimeout>;
  private isOnline: boolean = true;

  static #instance: DataReporter;

  static get instance() {
    if (!this.#instance) {
      this.#instance = new DataReporter();
      this.#instance.initNetworkListener();
    }
    return this.#instance;
  }

  private initNetworkListener() {
    if (typeof window !== "undefined") {
      this.isOnline = navigator.onLine !== false;
      window.addEventListener("online", () => {
        this.isOnline = true;
        sonnetLogger.info(
          "Sonnet Sentry",
          "Network is back online, flushing cache",
        );
        this.loadOfflineCache();
        this.flush();
      });
      window.addEventListener("offline", () => {
        this.isOnline = false;
        sonnetLogger.info(
          "Sonnet Sentry",
          "Network is offline, caching events",
        );
      });
    }
  }

  private loadOfflineCache() {
    try {
      const cache = localStorage.getItem(sentry.options.offlineCacheKey);
      if (cache) {
        const parsed = JSON.parse(cache);
        if (Array.isArray(parsed)) {
          this.events.unshift(...parsed);
        }
        localStorage.removeItem(sentry.options.offlineCacheKey);
      }
    } catch (e) {}
  }

  private saveOfflineCache() {
    try {
      localStorage.setItem(
        sentry.options.offlineCacheKey,
        JSON.stringify(this.events),
      );
    } catch (e) {}
  }

  private isObjectOverSizeLimit(obj: any, limitInKB: number): boolean {
    const size = new Blob([JSON.stringify(obj)]).size;
    return size > limitInKB * 1024;
  }

  sendBeacon(data: any) {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      return navigator.sendBeacon(sentry.options.dsn, JSON.stringify(data));
    }
    return false;
  }

  private retryTimer?: ReturnType<typeof setTimeout>;

  private handleServerError() {
    this.isOnline = false;
    if (this.retryTimer) clearTimeout(this.retryTimer);

    // 定时重试，直到接口恢复
    const interval = 60 * 1000; // 1 min
    this.retryTimer = setTimeout(() => {
      this.testServerAvailable();
    }, interval);
  }

  private testServerAvailable() {
    fetch(sentry.options.dsn, {
      method: "HEAD",
    })
      .then((res) => {
        if (res.ok) {
          this.isOnline = true;
          sonnetLogger.info(
            "Sonnet Sentry",
            "Server is back available, flushing cache",
          );
          if (this.retryTimer) clearTimeout(this.retryTimer);
          this.loadOfflineCache();
          this.flush();
        } else {
          this.handleServerError();
        }
      })
      .catch(() => {
        this.handleServerError();
      });
  }

  reportByFetch(data: any) {
    const cb = () => {
      fetch(sentry.options.dsn, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      })
        .then((res) => {
          if (!res.ok) {
            this.handleServerError();
          }
        })
        .catch((err) => {
          sonnetLogger.error(
            "Sonnet Sentry Report",
            "Fetch report failed",
            err,
          );
          this.handleServerError();
        });
    };
    this.cbQueue.push(cb);
  }

  reportByImage(data: any) {
    const { dsn } = sentry.options;
    const cb = () => {
      const image = new Image();
      const sep = dsn.includes("?") ? "&" : "?";
      image.src = `${dsn}${sep}data=${encodeURIComponent(
        JSON.stringify(data),
      )}`;
    };
    this.cbQueue.push(cb);
  }

  payload2reportData<T extends TReportPayload = TReportPayload>(
    payload: T,
  ): IReportData<T> {
    const { type, name, time, timestamp, message, status } = payload;
    const reportData: IReportData<T> = {
      type,
      name,
      time,
      timestamp,
      message,
      status,
      id: this.id,
      url: location.href,
      userId: sentry.options.userId,
      projectId: sentry.options.projectId,
      sdkVersion: SDK_VERSION,
      deviceInfo: sentry.deviceInfo,
      payload,
    };
    return reportData;
  }

  private flush() {
    if (this.events.length === 0) return;

    if (!this.isOnline) {
      if (this.events.length > sentry.options.maxQueueLength) {
        this.events = this.events.slice(-sentry.options.maxQueueLength);
      }
      this.saveOfflineCache();
      return;
    }

    const maxItems = sentry.options.cacheMaxLength;
    const sendData = this.events.slice(0, maxItems);
    this.events = this.events.slice(maxItems);

    const startTime = performance.now();
    // sendBeacon limit is around 64KB, we check 60KB to be safe
    const isOverSize = this.isObjectOverSizeLimit(sendData, 60);

    let ok = false;
    if (!isOverSize) {
      ok = this.sendBeacon(sendData);
    }

    if (!ok) {
      // Image has ~2KB URL limit. If over size, force fetch.
      if (
        sentry.options.useImageReport &&
        !this.isObjectOverSizeLimit(sendData, 2)
      ) {
        this.reportByImage(sendData);
      } else {
        this.reportByFetch(sendData);
      }
    }

    sonnetLogger.success(
      "Sonnet Sentry Report",
      "Batch report queued or sent",
      { count: sendData.length, overSize: isOverSize },
      Math.round(performance.now() - startTime),
    );

    if (this.events.length > 0) {
      if (this.timeoutID) clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => this.flush(), 100);
    }
  }

  async send(payload: TReportPayload, immediate = false) {
    const {
      dsn,
      screenRecordEventTypes,
      onBeforeReportData,
      cacheMaxLength,
      cacheWaitingTime,
      maxQueueLength,
      tracesSampleRate,
    } = sentry.options;
    if (dsn === "") {
      sonnetLogger.error(
        "Sonnet Sentry",
        "DSN is empty, report cancelled",
        payload,
      );
      return;
    }

    if (Math.random() > tracesSampleRate) {
      sonnetLogger.info(
        "Sonnet Sentry Report",
        `Dropped by sample rate: ${payload.type}`,
      );
      return;
    }
    if (screenRecordEventTypes.includes(payload.type)) {
      sentry.shouldRecordScreen = true;
    }
    let data = this.payload2reportData(payload);
    if (onBeforeReportData) {
      data = await onBeforeReportData(data);
      if (!data) return; // User dropped the data
    }

    sonnetLogger.info("Sonnet Sentry Report", `Type: ${payload.type}`, data);

    this.events.push(data);

    if (!this.isOnline) {
      if (this.events.length > maxQueueLength) {
        this.events = this.events.slice(-maxQueueLength);
      }
      this.saveOfflineCache();
      return;
    }

    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }

    if (immediate || this.events.length >= cacheMaxLength) {
      this.flush();
    } else {
      this.timeoutID = setTimeout(() => this.flush(), cacheWaitingTime);
    }
  }
}

const reporter = DataReporter.instance;

export default reporter;
