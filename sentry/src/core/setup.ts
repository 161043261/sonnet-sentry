import { EventType, type TEventHandler, type TReportPayload } from "../types";
import { larkLogger, getBaseData } from "../utils";
import reporter from "../reporter/index.js";

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
  larkLogger.info("lark Sentry", "Initializing SDK Event Subscriptions...");

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

  const pageStartTime = Date.now();
  reporter.send({
    ...getBaseData(),
    type: EventType.PV,
    name: "PageLoad",
    message: "Page Initial Load",
    extra: {
      url: location.href,
      referrer: document.referrer,
      entryTime: pageStartTime,
    },
  });

  window.addEventListener("beforeunload", () => {
    const duration = Date.now() - pageStartTime;
    const { type } = performance.navigation;
    const loadTypes = ["Navigate", "Reload", "Back_Forward", "Reserved"];
    const operateAction = loadTypes[type] || "Unknown";

    reporter.send(
      {
        ...getBaseData(),
        type: EventType.PV,
        name: "PageUnload",
        message: "Page Unload / Dwell Time",
        extra: {
          duration,
          operateAction,
        },
      },
      true,
    ); // immediate = true 立刻发送
  });

  larkLogger.success(
    "lark Sentry",
    "SDK Setup Completed",
    subscriptions.map((s) => ({ event: s.name, type: s.type })),
  );
}

export default setup;
