import {
  EventType,
  HttpMethod,
  HttpStatusCode,
  type IHttpData,
  type WithSentry,
} from "../types";

import {
  throttle,
  sentry,
  decorateProp,
  getBaseData,
  isExcludedApi,
} from "../utils";

import { pub } from "./bus.js";

function decoratePublish(type: EventType) {
  switch (type) {
    case EventType.Click: {
      pubClick();
      break;
    }

    case EventType.Error: {
      pubError();
      break;
    }

    case EventType.Xhr: {
      pubXhr();
      break;
    }

    case EventType.Fetch: {
      pubFetch();
      break;
    }

    case EventType.History: {
      pubHistory();
      break;
    }

    case EventType.UnhandledRejection: {
      pubUnhandledRejection();
      break;
    }

    case EventType.HashChange: {
      pubHashChange();
      break;
    }

    case EventType.WhiteScreen: {
      pubWhiteScreen();
      break;
    }

    default: {
      break;
    }
  }
}

function pubClick() {
  const throttledPub = throttle(pub, sentry.options.clickThrottleDelay);
  document.addEventListener("click", function (ctx: MouseEvent) {
    // publish
    throttledPub(EventType.Click, {
      ...getBaseData(),
      type: EventType.Click,
      extra: ctx,
    });
  });
}

function pubError() {
  globalThis.addEventListener(
    "error",
    function (ctx: ErrorEvent) {
      // publish
      pub(EventType.Error, {
        ...getBaseData(),
        type: EventType.Error,
        extra: ctx,
      });
    },
    true,
  );
}

function pubXhr() {
  type TXhrProtoOpen = (
    method: string,
    url: string,
    async?: boolean,
    ...rest: string[]
  ) => void;

  const xhrProto = XMLHttpRequest.prototype;

  decorateProp(xhrProto, "open", (oldPropVal: TXhrProtoOpen) => {
    return function (
      this: WithSentry<XMLHttpRequest, IHttpData>,
      method: string,
      url: string,
      async?: boolean,
      ...rest: string[]
    ) {
      const httpData: IHttpData = {
        ...getBaseData(),
        name: "XMLHttpRequest",
        type: EventType.Xhr,
        method: method.toUpperCase(),
        api: url,
        elapsedTime: 0,
        statusCode: HttpStatusCode.OK,
      };
      this.__sentry__ = httpData;
      return oldPropVal.call(this, method, url, async, ...rest);
    };
  });

  decorateProp(xhrProto, "send", (oldPropVal) => {
    return function (
      this: WithSentry<XMLHttpRequest, IHttpData>,
      body?: Document | XMLHttpRequestBodyInit | null | undefined,
    ) {
      const { method, api } = this.__sentry__;
      this.addEventListener("loadend", () => {
        if (
          (method.toUpperCase() === HttpMethod.Post &&
            api === sentry.options.dsn) ||
          isExcludedApi(api)
        ) {
          return;
        }
        const { status, responseType, response } = this;
        this.__sentry__.statusCode = status;
        this.__sentry__.requestData = { body };
        this.__sentry__.responseData = {
          responseType,
          response,
        };
        const endTime = Date.now();
        this.__sentry__.elapsedTime = endTime - this.__sentry__.timestamp;

        // publish
        pub(EventType.Xhr, this.__sentry__);
      });
      return oldPropVal.call(this, body);
    };
  });
}

function pubFetch() {
  decorateProp(globalThis, "fetch", (oldPropVal) => {
    return async function (
      url: RequestInfo | URL,
      options?: RequestInit | undefined,
    ) {
      const method = options?.method?.toUpperCase() ?? HttpMethod.Get;
      const httpData: IHttpData = {
        ...getBaseData(),
        type: EventType.Fetch,
        method,
        requestData: { body: options?.body },
        name: "Fetch",
        api: url.toString(),
        elapsedTime: 0,
        statusCode: HttpStatusCode.OK,
      };
      return oldPropVal.call(globalThis, url, options).then((res: Response) => {
        const resClone = res.clone();
        const endTime = Date.now();
        httpData.elapsedTime = endTime - httpData.timestamp;
        httpData.statusCode = resClone.status;
        resClone.text().then((res: string) => {
          if (
            (method === HttpMethod.Post &&
              url.toString() === sentry.options.dsn) ||
            isExcludedApi(url.toString())
          ) {
            return;
          }
          httpData.responseData = res;

          // publish
          pub(EventType.Fetch, httpData);
        });
        return res;
      });
    };
  });
}

let latestHref = document.location.href;
function pubHistory() {
  const oldOnpopstate = globalThis.onpopstate;

  globalThis.onpopstate = function (this: Window, ev: PopStateEvent) {
    const from = latestHref;
    const to = document.location.href;
    latestHref = to;
    pub(EventType.History, {
      ...getBaseData(),
      type: EventType.History,
      from,
      to,
    });
    if (typeof oldOnpopstate === "function") {
      return oldOnpopstate.call(this, ev);
    }
  };

  const historyDecorator = (oldPropsVal: History["pushState"]) => {
    return function (
      this: History,
      data: unknown,
      unused: string,
      url?: string | URL | null,
    ) {
      if (url) {
        const from = latestHref;
        const to = url.toString();
        latestHref = to;

        // publish
        pub(EventType.History, {
          ...getBaseData(),
          type: EventType.History,
          from,
          to,
        });
      }
      return oldPropsVal.call(this, data, unused, url);
    };
  };
  decorateProp(globalThis.history, "pushState", historyDecorator);
  decorateProp(globalThis.history, "replaceState", historyDecorator);
}

function pubUnhandledRejection() {
  globalThis.addEventListener(
    "unhandledrejection",
    function (ctx: PromiseRejectionEvent) {
      // publish
      pub(EventType.UnhandledRejection, {
        ...getBaseData(),
        type: EventType.UnhandledRejection,
        extra: ctx,
      });
    },
  );
}

function pubHashChange() {
  globalThis.addEventListener("hashchange", function (ctx: HashChangeEvent) {
    // publish
    pub(EventType.HashChange, {
      ...getBaseData(),
      type: EventType.HashChange,
      extra: ctx,
    });
  });
}

function pubWhiteScreen() {
  // publish
  pub(EventType.WhiteScreen, {
    ...getBaseData(),
    type: EventType.WhiteScreen,
    extra: "WhiteScreen",
  });
}

export default decoratePublish;
