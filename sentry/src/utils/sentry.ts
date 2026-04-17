import type { IDeviceInfo, IOptions, ISentry } from "../types";

import { DEFAULT_OPTIONS, UNKNOWN } from "../constants";

import { UAParser } from "ua-parser-js";

declare global {
  var __sentry__: ISentry | undefined;
}

function getClientFingerprint(): string {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      ctx.fillText("lark-sentry", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText("lark-sentry", 4, 17);
      const b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
      const bin = atob(b64);
      const crc = function (bin: string) {
        let crc = 0 ^ -1;
        for (let i = 0; i < bin.length; i++) {
          crc = (crc >>> 8) ^ bin.charCodeAt(i);
        }
        return (crc ^ -1) >>> 0;
      };
      return crc(bin).toString(16);
    }
  } catch (e) {
    // fallback
  }
  return crypto.randomUUID();
}

class Sentry implements ISentry {
  static #instance: Sentry;

  static get instance() {
    if (!this.#instance) {
      this.#instance = new Sentry();
      globalThis.__sentry__ = this.#instance;
    }
    return this.#instance;
  }

  codeErrors = new Set<string>();

  whiteScreenTimer: ReturnType<typeof setInterval> | null = null;

  options: IOptions = DEFAULT_OPTIONS;

  deviceInfo: IDeviceInfo;

  shouldRecordScreen = false;

  constructor() {
    const res = new UAParser().getResult();
    this.deviceInfo = {
      browserName: res.browser.name ?? UNKNOWN,
      browserVersion: res.browser.version ?? UNKNOWN,
      osName: res.os.name ?? UNKNOWN,
      osVersion: res.os.version ?? UNKNOWN,
      userAgent: res.ua,
      deviceModel: res.device.model ?? UNKNOWN,
      deviceType: res.device.type ?? UNKNOWN,
      fingerprint: getClientFingerprint(),
      language: navigator.language || UNKNOWN,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
    };
  }

  setOptions(newOptions: Partial<IOptions>) {
    Sentry.#instance.options = {
      ...this.options,
      ...newOptions,
    };
  }
}

export default Sentry.instance;
