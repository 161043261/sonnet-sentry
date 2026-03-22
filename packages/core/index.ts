import {
  Status,
  type IOptions,
  type SentryPlugin,
  EventType,
} from "@sonnet-sentry/types";

import { getBaseData, sentry, sonnetLogger } from "@sonnet-sentry/utils";

import { DEFAULT_OPTIONS } from "@sonnet-sentry/constants";

import { handleError } from "./src/handlers.js";
import setup from "./src/setup.js";

import { type Plugin, type ComponentPublicInstance } from "vue";
import { Component, type ErrorInfo } from "react";

function init(
  options: Partial<Omit<IOptions, "dsn">> & NonNullable<Pick<IOptions, "dsn">>,
) {
  sentry.setOptions({ ...DEFAULT_OPTIONS, ...options });
  const { dsn } = sentry.options;
  if (dsn === "") {
    sonnetLogger.error("Sonnet Sentry", "Initialization failed: DSN is empty");
    return;
  }
  sonnetLogger.info("Sonnet Sentry", "SDK Initialized", {
    options: sentry.options,
  });
  setup();
}

const vuePlugin: Plugin = (app, options: IOptions) => {
  const handler = app.config.errorHandler;
  app.config.errorHandler = (
    err: unknown,
    vueInstance: ComponentPublicInstance | null,
    info: string,
  ) => {
    handleError({
      ...getBaseData(),
      type: EventType.Vue,
      status: Status.Error,
      extra: err,
    });
    if (handler) {
      handler.call(null, err, vueInstance, info);
    }
  };
  init(options);
};

class ReactErrorBoundary extends Component {
  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    handleError({
      ...getBaseData(),
      type: EventType.React,
      status: Status.Error,
      extra: {
        error,
        errorInfo,
      },
    });
  }
}

function sonnetEnable<T extends SentryPlugin, U = unknown>(
  Plugin: new (options?: U) => T,
  options?: U,
) {
  const plugin = new Plugin(options);
  plugin.init();
}

export { init, vuePlugin, sonnetEnable, ReactErrorBoundary };

// init({ dsn: "http://localhost:3000" });
