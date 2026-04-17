import { EventType, type IPub, type ISub, type TEventHandler } from "../types";
import { larkLogger } from "../utils";

const event2handlers = new Map<EventType, Set<TEventHandler>>();

export const pub: IPub = (type, data) => {
  const handlers = event2handlers.get(type);
  if (!handlers) {
    return;
  }
  try {
    for (const handler of handlers) {
      handler(data);
    }
  } catch (err) {
    larkLogger.error("lark Sentry", "Error executing event handler", err);
  }
};

export const sub: ISub = (type, handler) => {
  const handlers = event2handlers.get(type);
  if (!handlers) {
    event2handlers.set(type, new Set([handler]));
    return;
  }
  handlers.add(handler);
};
