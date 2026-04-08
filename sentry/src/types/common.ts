import type { BreadcrumbType, EventType, HttpMethod, Status } from "./enums.js";

import type { Metric } from "web-vitals";
import type { IOptions } from "./options.js";

export interface ISentry {
  codeErrors: Set<string>;
  whiteScreenTimer: ReturnType<typeof setInterval> | null;
  options: IOptions;
  shouldRecordScreen: boolean;
  deviceInfo: IDeviceInfo;
  setOptions: (newOptions: Partial<IOptions>) => void;
}

export interface IBreadcrumbItem extends IReportPayload {
  userAction: BreadcrumbType;
}

export interface IDeviceInfo {
  browserName: string; // 例如 chrome
  browserVersion: string; // 浏览器版本
  osName: string; // 操作系统
  osVersion: string; // 操作系统版本
  userAgent: string; // 用户代理
  deviceType: string; // 设备种类, 例如 PC
  deviceModel: string; // 设备描述
}

export interface IReportPayload {
  id: string;
  type: EventType;
  name: string;
  time: string;
  timestamp: number;
  message: string;
  status: Status;
}

export interface IHttpData extends IReportPayload {
  method: HttpMethod | string;
  // 接口地址
  api: string;
  // 请求时长
  elapsedTime: number;
  // http 状态码
  statusCode: number;
  requestData?: unknown;
  responseData?: unknown;
}

export interface IResourceError extends IReportPayload {
  src: string;
  href: string;
}

interface IPerformanceMetricData extends IReportPayload {
  value: Metric["value"];
  rating?: Metric["rating"]; // "good" | "needs-improvement" | "poor"
}

interface IPerformanceResourceListData extends IReportPayload {
  resourceList: (PerformanceResourceTiming & {
    fromCache: boolean;
  })[];
}
interface IPerformanceLongTaskData extends IReportPayload {
  longTasks: PerformanceEntry[];
}

interface IPerformanceMemoryData extends IReportPayload {
  memory: unknown;
}

export type IPerformanceData =
  | IPerformanceMetricData
  | IPerformanceResourceListData
  | IPerformanceLongTaskData
  | IPerformanceMemoryData;

export interface ICodeError extends IReportPayload {
  column: number;
  line: number;
}

export interface IScreenRecordData extends IReportPayload {
  event: string;
}

export interface IRouteData extends IReportPayload {
  from: string;
  to: string;
}

export type IBaseDataWithEvent = IReportPayload & {
  extra: "WhiteScreen" | unknown;
};

export type TReportPayload =
  | IBaseDataWithEvent
  | IHttpData
  | IResourceError
  | IPerformanceData
  | ICodeError
  | IScreenRecordData
  | IRouteData;

export type TOnReportWhiteScreenData = (data: IReportPayload) => void;

export type TOnReportPerformanceData = (data: IPerformanceData) => void;

export interface IReportData<
  T extends TReportPayload = TReportPayload,
> extends IReportPayload {
  // 页面的地址
  url: string;
  // 用户 ID
  userId: string;
  // 前端项目的 ID
  projectId: string;
  // SDK 版本
  sdkVersion: string;
  breadcrumbs?: IBreadcrumbItem[];
  deviceInfo: IDeviceInfo;
  payload: T;
}

export interface IDataReporter {
  send(payload: TReportPayload): Promise<void>;
}

export interface IExtendedErrorEvent extends ErrorEvent {
  target: EventTarget & {
    src: string;
    href: string;
    localName: string;
  };
}

export type TUnknownError = IExtendedErrorEvent | Error /** React */ | unknown;

export type WithSentry<T, S extends IReportPayload = IReportPayload> = T & {
  __sentry__: S;
};

export abstract class SentryPlugin {
  public type: EventType;
  constructor(type: EventType) {
    this.type = type;
  }
  abstract init(): void;
}
