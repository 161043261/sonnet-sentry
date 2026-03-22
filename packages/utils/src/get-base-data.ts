import { EventType, Status, type IReportPayload } from "@sonnet-sentry/types";

function getBaseData(): IReportPayload {
  return {
    id: crypto.randomUUID(),
    message: "",
    timestamp: Date.now(),
    time: new Date().toISOString(),
    name: "",
    status: Status.OK,
    type: EventType.Custom,
  };
}

export default getBaseData;
