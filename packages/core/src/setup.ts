import {
  EventType,
  type TEventHandler,
  type TReportPayload,
} from "@sonnet-sentry/types";
import { sonnetLogger } from "@sonnet-sentry/utils";

import { sub } from "./bus.js";

import {
  handleClick,
  handleError,
  handleHashChange,
  handleHistory,
  handleHttp,
  handleUnhandledRejection,
  handleWhiteScreen,
} from "./handlers.js";

import decoratePublish from "./decorate-publish.js";

type THandler = TEventHandler<TReportPayload>;
function setup() {
  sonnetLogger.info("Sonnet Sentry", "Initializing SDK Event Subscriptions...");

  const subscriptions = [
    { type: EventType.Xhr, handler: handleHttp, name: "Xhr" },
    { type: EventType.Fetch, handler: handleHttp, name: "Fetch" },
    { type: EventType.Error, handler: handleError, name: "Error" },
    { type: EventType.History, handler: handleHistory, name: "History" },
    {
      type: EventType.HashChange,
      handler: handleHashChange,
      name: "HashChange",
    },
    {
      type: EventType.UnhandledRejection,
      handler: handleUnhandledRejection,
      name: "UnhandledRejection",
    },
    { type: EventType.Click, handler: handleClick, name: "Click" },
    {
      type: EventType.WhiteScreen,
      handler: handleWhiteScreen,
      name: "WhiteScreen",
    },
  ];

  subscriptions.forEach(({ type, handler }) => {
    sub(type, handler as THandler);
    decoratePublish(type);
  });

  sonnetLogger.success(
    "Sonnet Sentry",
    "SDK Setup Completed",
    subscriptions.map((s) => ({ event: s.name, type: s.type })),
  );
}

export default setup;
