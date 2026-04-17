import {
  EventType,
  Status,
  type IReportPayload,
  type ICodeError,
  type IHttpData,
  type IRouteData,
  type IResourceError,
  type TEventHandler,
  type IBaseDataWithEvent,
  type IBatchErrorData,
} from "../types";

import {
  sentry,
  getBaseData,
  event2breadcrumb,
  base64v2,
  transformHttpData,
  dom2str,
  isIExtendedErrorEvent,
  isErrorEvent,
  isError,
  larkLogger,
} from "../utils";

import { UNKNOWN } from "../constants";

import reporter from "../reporter";

import breadcrumb from "./breadcrumb.js";
import checkWhiteScreen from "./white-screen.js";

const handleHttp: TEventHandler<IHttpData> = (data: IHttpData) => {
  data = transformHttpData(data);
  const { id, name, time, timestamp, message, status, type } = data;

  if (status === Status.Error) {
    larkLogger.error("lark Sentry HTTP", `Request Error: ${name}`, data);
  } else {
    larkLogger.info("lark Sentry HTTP", `Request Complete: ${name}`, data);
  }

  if (!data.api.includes(sentry.options.dsn)) {
    breadcrumb.push({
      id,
      name,
      time,
      timestamp,
      message,
      status,
      type,
      userAction: event2breadcrumb(type),
    });
  }
  if (status === Status.Error) {
    reporter.send(data);
  }
};

const handleError: TEventHandler<IBaseDataWithEvent> = ({
  extra: err,
  ...rest
}) => {
  larkLogger.error("lark Sentry Error", "Error Captured", err);

  if (isErrorEvent(err)) {
    handleCodeError(err);
    return;
  }

  if (isIExtendedErrorEvent(err)) {
    const { localName, src, href } = err.target;
    const { message } = err;
    const resourceError: IResourceError = {
      ...rest,
      type: EventType.Resource,
      status: Status.Error,
      name: localName,
      src,
      href,
      message,
    };
    breadcrumb.push({
      ...resourceError,
      userAction: event2breadcrumb(EventType.Resource),
    });

    const errorId = base64v2(
      `${EventType.Resource}-${localName}-${src || href}`,
    );
    if (sentry.options.repeatCodeError || !sentry.codeErrors.has(errorId)) {
      sentry.codeErrors.add(errorId);
      reporter.send(resourceError);
    }
    return;
  }

  if (isError(err)) {
    const { name, message, stack } = err;
    const data: IBaseDataWithEvent = {
      ...rest,
      type: EventType.Error,
      name,
      message,
      status: Status.Error,
      extra: stack || err,
    };
    breadcrumb.push({
      ...data,
      userAction: event2breadcrumb(EventType.Error),
    });

    const errorId = base64v2(`${EventType.Error}-${name}-${message}`);
    if (sentry.options.repeatCodeError || !sentry.codeErrors.has(errorId)) {
      sentry.codeErrors.add(errorId);
      reporter.send(data);
    }
    return;
  }

  // Unknown error
  const data: IBaseDataWithEvent = {
    ...rest,
    type: EventType.Error,
    name: "Unknown Error",
    message: typeof err === "string" ? err : JSON.stringify(err),
    status: Status.Error,
    extra: err,
  };
  breadcrumb.push({
    ...data,
    userAction: event2breadcrumb(EventType.Error),
  });

  const errorId = base64v2(`${EventType.Error}-Unknown-${data.message}`);
  if (sentry.options.repeatCodeError || !sentry.codeErrors.has(errorId)) {
    sentry.codeErrors.add(errorId);
    reporter.send(data);
  }
};

const handleHistory: TEventHandler<IRouteData> = ({
  from,
  to,
  ...rest
}: IRouteData) => {
  const routeChange = `${from} => ${to}`;
  const routeData: IRouteData = {
    ...rest,
    name: routeChange,
    message: routeChange,
    type: EventType.History,
    from,
    to,
  };
  breadcrumb.push({
    ...routeData,
    userAction: event2breadcrumb(EventType.History),
  });
  reporter.send({
    ...getBaseData(),
    type: EventType.PV,
    name: "HistoryChange",
    message: routeChange,
    extra: { from, to },
  });
};

const handleHashChange: TEventHandler<IBaseDataWithEvent> = ({
  extra,
  ...rest
}: IBaseDataWithEvent) => {
  const { oldURL: from = UNKNOWN, newURL: to = UNKNOWN } =
    extra as HashChangeEvent;
  const pathChange = `${from} => ${to}`;
  const routeData: IRouteData = {
    ...rest,
    name: pathChange,
    message: pathChange,
    type: EventType.HashChange,
    from,
    to,
  };
  breadcrumb.push({
    ...routeData,
    userAction: event2breadcrumb(EventType.HashChange),
  });
  reporter.send({
    ...getBaseData(),
    type: EventType.PV,
    name: "HashChange",
    message: pathChange,
    extra: { from, to },
  });
};

const handleUnhandledRejection: TEventHandler<IBaseDataWithEvent> = (
  data: IBaseDataWithEvent,
) => {
  larkLogger.error(
    "lark Sentry Error",
    "Unhandled Rejection Captured",
    data.extra,
  );
  if (!isIExtendedErrorEvent(data.extra)) {
    handleError(data);
    return;
  }
  handleCodeError(data.extra);
};

const handleWhiteScreen: TEventHandler<IBaseDataWithEvent> = (
  data: IBaseDataWithEvent,
) => {
  checkWhiteScreen(() => {
    reporter.send(data);
  });
  return;
};

const handleClick: TEventHandler<IBaseDataWithEvent> = ({
  extra,
  ...rest
}: IBaseDataWithEvent) => {
  const typedEvent = extra as PointerEvent;
  const str =
    typedEvent.target instanceof HTMLElement ? dom2str(typedEvent.target) : "";
  const data: IBaseDataWithEvent = {
    ...rest,
    type: EventType.Click,
    name: str,
    message: str,
    status: Status.OK,
    extra: str,
  };
  breadcrumb.push({
    ...data,
    userAction: event2breadcrumb(EventType.Click),
  });
  if (sentry.options.enableClick) {
    reporter.send(data);
  }
};

export {
  handleError,
  handleHistory,
  handleHashChange,
  handleHttp,
  handleUnhandledRejection,
  handleWhiteScreen,
  handleClick,
};

class BatchErrorManager {
  private cacheError: IReportPayload[] = [];
  private timeoutID?: ReturnType<typeof setTimeout>;

  public push(error: IReportPayload) {
    this.cacheError.push(error);

    if (this.timeoutID) clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => this.flush(), 2000); // 2s debounce
  }

  private flush() {
    if (this.cacheError.length === 0) return;

    // Group errors by their name and message
    const groups: Record<string, IReportPayload[]> = {};
    for (const err of this.cacheError) {
      const key = `${err.type}-${err.name}-${err.message}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(err);
    }

    this.cacheError = [];

    const MAX_LENGTH = 5;
    for (const [, items] of Object.entries(groups)) {
      if (items.length < MAX_LENGTH) {
        items.forEach((item) => reporter.send(item as any));
      } else {
        const sumItem = items[0];
        const batchErrorData: IBatchErrorData = {
          ...sumItem,
          batchError: true,
          batchErrorLength: items.length,
          batchErrorLastHappenTime: items[items.length - 1].timestamp,
        };
        reporter.send(batchErrorData as any);
      }
    }
  }
}

const batchErrorManager = new BatchErrorManager();

const handleCodeError = (err: ErrorEvent) => {
  const { filename, colno: column, lineno: line, message } = err;
  const data: IReportPayload = {
    ...getBaseData(),
    type: EventType.Error,
    name: filename,
    message,
    status: Status.Error,
  };
  const codeError: ICodeError = {
    ...data,
    column,
    line,
  };
  breadcrumb.push({
    ...data,
    userAction: event2breadcrumb(EventType.Error),
  });

  const errorId = base64v2(
    `${EventType.Error}-${message}-${filename}-${line}-${column}`,
  );
  if (
    errorId.includes(UNKNOWN) ||
    sentry.options.repeatCodeError ||
    (!sentry.options.repeatCodeError && !sentry.codeErrors.has(errorId))
  ) {
    sentry.codeErrors.add(errorId);
    batchErrorManager.push(codeError);
  }
};
