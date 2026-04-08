import { SDK_VERSION } from "../constants";

import type { IDataReporter, IReportData, TReportPayload } from "../types";

import { CallbackQueue, sentry, sonnetLogger } from "../utils";

export class DataReporter implements IDataReporter {
  cbQueue = new CallbackQueue();
  id = crypto.randomUUID();
  private events: IReportData[] = [];
  private timeoutID?: ReturnType<typeof setTimeout>;

  static #instance: DataReporter;

  static get instance() {
    if (!this.#instance) {
      this.#instance = new DataReporter();
    }
    return this.#instance;
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

  reportByFetch(data: any) {
    const cb = () => {
      fetch(sentry.options.dsn, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch((err) => {
        sonnetLogger.error("Sonnet Sentry Report", "Fetch report failed", err);
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
    const sendData = this.events.slice();
    this.events = [];

    const startTime = performance.now();
    // sendBeacon limit is around 64KB, we check 60KB to be safe
    const isOverSize = this.isObjectOverSizeLimit(sendData, 60);

    let ok = false;
    if (!isOverSize) {
      ok = this.sendBeacon(sendData);
    }

    if (!ok) {
      // Image has ~2KB URL limit. If over size, force fetch.
      if (sentry.options.useImageReport && !this.isObjectOverSizeLimit(sendData, 2)) {
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
  }

  async send(payload: TReportPayload, immediate = false) {
    const { dsn, screenRecordEventTypes, onBeforeReportData } = sentry.options;
    if (dsn === "") {
      sonnetLogger.error(
        "Sonnet Sentry",
        "DSN is empty, report cancelled",
        payload,
      );
      return;
    }
    if (screenRecordEventTypes.includes(payload.type)) {
      sentry.shouldRecordScreen = true;
    }
    let data = this.payload2reportData(payload);
    if (onBeforeReportData) {
      data = await onBeforeReportData(data);
    }

    sonnetLogger.info("Sonnet Sentry Report", `Type: ${payload.type}`, data);

    this.events.push(data);

    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }

    if (immediate || this.events.length >= 10) {
      this.flush();
    } else {
      this.timeoutID = setTimeout(() => this.flush(), 2000);
    }
  }
}

const reporter = DataReporter.instance;

export default reporter;
