import { SDK_VERSION } from "../constants";

import type { IDataReporter, IReportData, TReportPayload } from "../types";

import { CallbackQueue, sentry, sonnetLogger } from "../utils";

export class DataReporter implements IDataReporter {
  cbQueue = new CallbackQueue();
  id = crypto.randomUUID();

  static #instance: DataReporter;

  static get instance() {
    if (!this.#instance) {
      this.#instance = new DataReporter();
    }
    return this.#instance;
  }

  sendBeacon(data: IReportData) {
    return navigator.sendBeacon(sentry.options.dsn, JSON.stringify(data));
  }

  reportByFetch(data: IReportData) {
    const cb = () => {
      fetch(sentry.options.dsn, {
        method: "POST",
        body: JSON.stringify(data),
        // headers: [['Content-Type', 'application/json']]
        headers: { "Content-Type": "application/json" },
      }).catch((err) => {
        sonnetLogger.error("Sonnet Sentry Report", "Fetch report failed", err);
      });
    };
    this.cbQueue.push(cb);
  }

  reportByImage(data: IReportData) {
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

  async send(payload: TReportPayload) {
    const { dsn, screenRecordEventTypes, onBeforeReportData, useImageReport } =
      sentry.options;
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

    const startTime = performance.now();

    const ok = this.sendBeacon(data);
    if (!ok) {
      if (useImageReport) {
        this.reportByImage(data);
        sonnetLogger.success(
          "Sonnet Sentry Report",
          "Image report queued",
          { type: payload.type },
          Math.round(performance.now() - startTime),
        );
        return;
      } else {
        this.reportByFetch(data);
        sonnetLogger.success(
          "Sonnet Sentry Report",
          "Fetch report queued",
          { type: payload.type },
          Math.round(performance.now() - startTime),
        );
        return;
      }
    } else {
      sonnetLogger.success(
        "Sonnet Sentry Report",
        "Beacon report successful",
        { type: payload.type },
        Math.round(performance.now() - startTime),
      );
    }
  }
}

const reporter = DataReporter.instance;

export default reporter;
