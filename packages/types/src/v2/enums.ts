export enum EventType {
  Error = "error",
  ConsoleError = "console.error",
  UnhandledRejection = "unhandledrejection",
  Click = "click",
  BeforeUnload = "beforeunload",
  Fetch = "fetch",
  XhrOpen = "XMLHttpRequest.open",
  XhrSend = "XMLHttpRequest.send",
  Hashchange = "hashchange",
  HistoryPushState = "history.pushState",
  HistoryReplaceState = "history.replaceState",
  Popstate = "popstate",
  Readystatechange = "readystatechange",
  Online = "online",
  Offline = "offline",
}

export enum SendEventType {
  RouteNavigate = "route-navigate",
  PageViewDuration = "page-view-duration",
  Error = "error",
  Performance = "performance",
  PageUnmount = "page-unmount",
  Custom = "custom",
  Intersection = "intersection",
}

export enum SendId {
  Page = "page",
  Resource = "resource",
  Server = "server",
  Code = "code",
  Reject = "reject",
  ConsoleError = "consoleError",
}
