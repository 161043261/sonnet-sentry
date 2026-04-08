import type { TReportPayload } from "./common.js";

import type { EventType } from "./enums.js";

export type TEventHandler<T extends TReportPayload = TReportPayload> = (
  data: T,
) => void;

export type IPub = (type: EventType, param: TReportPayload) => void;

export type ISub<T extends TReportPayload = TReportPayload> = (
  type: EventType,
  handler: TEventHandler<T>,
) => void;
