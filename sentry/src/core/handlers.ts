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
  sonnetLogger,
} from "../utils";

import { UNKNOWN } from "../constants";

import reporter from "../reporter";

import breadcrumb from "./breadcrumb.js";
import checkWhiteScreen from "./white-screen.js";

const handleHttp: TEventHandler<IHttpData> = (data: IHttpData) => {
  data = transformHttpData(data);
  const { id, name, time, timestamp, message, status, type } = data;

  if (status === Status.Error) {
    sonnetLogger.error("Sonnet Sentry HTTP", `Request Error: ${name}`, data);
  } else {
    sonnetLogger.info("Sonnet Sentry HTTP", `Request Complete: ${name}`, data);
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
  sonnetLogger.error("Sonnet Sentry Error", "Error Captured", err);

  if (isErrorEvent(err)) {
    handleCodeError(err);
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
    reporter.send(resourceError);
    return;
  }

  if (isError(err)) {
    const { name, message } = err;
    const data: IBaseDataWithEvent = {
      ...rest,
      type: EventType.Error,
      name,
      message,
      status: Status.Error,
      extra: err,
    };
    breadcrumb.push({
      ...data,
      userAction: event2breadcrumb(EventType.Error),
    });
    reporter.send(data);
    return;
  }

  // Unknown error
  const data: IBaseDataWithEvent = {
    ...rest,
    type: EventType.Error,
    name: "Unknown Error",
    message: JSON.stringify(err),
    status: Status.Error,
    extra: err,
  };
  breadcrumb.push({
    ...data,
    userAction: event2breadcrumb(EventType.Error),
  });
  reporter.send(data);
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
  // 发送 PV
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
  // 发送 PV
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
  sonnetLogger.error(
    "Sonnet Sentry Error",
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
  breadcrumb.push({
    ...rest,
    type: EventType.Click,
    name: str,
    message: str,
    userAction: event2breadcrumb(EventType.Click),
  });
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
    reporter.send(codeError);
  }
};
