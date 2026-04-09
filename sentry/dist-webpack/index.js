/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.SonnetSentry = t())
        : (e.SonnetSentry = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {
        123(e, t) {
          (Symbol.for("react.transitional.element"),
            Symbol.for("react.portal"),
            Symbol.for("react.fragment"),
            Symbol.for("react.strict_mode"),
            Symbol.for("react.profiler"),
            Symbol.for("react.consumer"),
            Symbol.for("react.context"),
            Symbol.for("react.forward_ref"),
            Symbol.for("react.suspense"),
            Symbol.for("react.memo"),
            Symbol.for("react.lazy"),
            Symbol.for("react.activity"),
            Symbol.iterator);
          var i = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            o = Object.assign,
            r = {};
          function n(e, t, o) {
            ((this.props = e),
              (this.context = t),
              (this.refs = r),
              (this.updater = o || i));
          }
          function s() {}
          function a(e, t, o) {
            ((this.props = e),
              (this.context = t),
              (this.refs = r),
              (this.updater = o || i));
          }
          ((n.prototype.isReactComponent = {}),
            (n.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "takes an object of state variables to update or a function which returns an object of state variables.",
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (n.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (s.prototype = n.prototype));
          var c = (a.prototype = new s());
          ((c.constructor = a),
            o(c, n.prototype),
            (c.isPureReactComponent = !0));
          Array.isArray;
          Object.prototype.hasOwnProperty;
          "function" == typeof reportError && reportError;
          t.Component = n;
        },
        162(e, t, i) {
          e.exports = i(123);
        },
      },
      t = {};
    function i(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var n = (t[o] = { exports: {} });
      return (e[o](n, n.exports, i), n.exports);
    }
    ((i.d = (e, t) => {
      for (var o in t)
        i.o(t, o) &&
          !i.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
      (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (i.r = (e) => {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }));
    var o,
      r,
      n,
      s,
      a,
      c,
      l,
      h = {};
    function d(e) {
      const t = new TextEncoder().encode(e);
      let i = "";
      for (const e of t) i += String.fromCharCode(e);
      return btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    (i.r(h),
      i.d(h, {
        ReactErrorBoundary: () => ni,
        init: () => oi,
        sonnetEnable: () => si,
        vuePlugin: () => ri,
      }),
      (function (e) {
        ((e.OK = "OK"),
          (e.BadRequest = "Bad Request"),
          (e.Unauthorized = "Unauthorized"),
          (e.Forbidden = "Forbidden"),
          (e.NotFound = "NotFound"),
          (e.Conflict = "Conflict"),
          (e.PayloadTooLarge = "Payload Too Large"),
          (e.TooManyRequests = "Too Many Requests"),
          (e.InternalServerError = "Internal Server Error"),
          (e.NotImplemented = "Not Implemented"),
          (e.ServiceUnavailable = "Service Unavailable"),
          (e.GatewayTimeout = "Gateway Timeout"),
          (e.UnknownError = "Unknown Error"));
      })(o || (o = {})),
      (function (e) {
        ((e.Http = "Http"),
          (e.Click = "Click"),
          (e.Route = "Route"),
          (e.Resource = "Resource"),
          (e.CodeError = "Code Error"),
          (e.Custom = "Custom"));
      })(r || (r = {})),
      (function (e) {
        ((e.Error = "Error"), (e.OK = "OK"));
      })(n || (n = {})),
      (function (e) {
        ((e.Xhr = "XMLHttpRequest"),
          (e.Fetch = "fetch"),
          (e.Click = "Click"),
          (e.HashChange = "Event hashchange"),
          (e.History = "History"),
          (e.Resource = "Resource"),
          (e.UnhandledRejection = "Event unhandledrejection"),
          (e.Error = "Error"),
          (e.Vue = "Vue"),
          (e.React = "React"),
          (e.Performance = "Performance"),
          (e.ScreenRecord = "ScreenRecord"),
          (e.WhiteScreen = "WhiteScreen"),
          (e.Custom = "Custom"),
          (e.PV = "PV"));
      })(s || (s = {})),
      (function (e) {
        ((e.Xhr = "XMLHttpRequest"), (e.Fetch = "fetch"));
      })(a || (a = {})),
      (function (e) {
        ((e[(e.OK = 200)] = "OK"),
          (e[(e.BadRequest = 400)] = "BadRequest"),
          (e[(e.Unauthorized = 401)] = "Unauthorized"),
          (e[(e.Forbidden = 403)] = "Forbidden"),
          (e[(e.NotFound = 404)] = "NotFound"),
          (e[(e.Conflict = 409)] = "Conflict"),
          (e[(e.PayloadTooLarge = 413)] = "PayloadTooLarge"),
          (e[(e.TooManyRequests = 429)] = "TooManyRequests"),
          (e[(e.InternalServerError = 500)] = "InternalServerError"),
          (e[(e.NotImplemented = 501)] = "NotImplemented"),
          (e[(e.ServiceUnavailable = 503)] = "ServiceUnavailable"),
          (e[(e.GatewayTimeout = 504)] = "GatewayTimeout"));
      })(c || (c = {})),
      (function (e) {
        ((e.Get = "GET"),
          (e.Head = "HEAD"),
          (e.Post = "POST"),
          (e.Put = "PUT"),
          (e.Delete = "DELETE"),
          (e.Connect = "CONNECT"),
          (e.Options = "OPTIONS"),
          (e.Trace = "TRACE"),
          (e.Patch = "PATCH"));
      })(l || (l = {})));
    const u = JSON.parse('{"UU":"sonnet-sentry","rE":"1.0.0"}'),
      { UU: p, rE: f } = u,
      m = "unknown",
      w = {
        dsn: "",
        projectId: m,
        userId: m,
        disabled: !1,
        enableXhr: !0,
        enableFetch: !0,
        enableClick: !0,
        enableError: !0,
        enableUnhandledRejection: !0,
        enableHashChange: !0,
        enableHistory: !0,
        enablePerformance: !0,
        enableScreenRecord: !0,
        enableWhiteScreen: !0,
        maxBreadcrumbs: 30,
        useImageReport: !1,
        screenRecordEventTypes: [
          s.Error,
          s.Xhr,
          s.Fetch,
          s.Resource,
          s.UnhandledRejection,
        ],
        hasSkeleton: !1,
        rootCssSelectors: ["html", "body", "#app", "#root"],
        clickThrottleDelay: 0,
        requestTimeoutMilliseconds: 3e3,
        screenRecordDurationMs: 3e3,
        repeatCodeError: !1,
        excludeApis: [],
        cacheMaxLength: 10,
        cacheWaitingTime: 2e3,
        maxQueueLength: 200,
        offlineCacheKey: "sonnet_sentry_offline_cache",
        tracesSampleRate: 1,
      };
    class b {
      get size() {
        return this.heap.length;
      }
      constructor(e = 30, t = []) {
        if (
          ((this.capacity = 30),
          (this.heap = []),
          (this.capacity = e),
          (this.heap = t.slice(0, e)),
          this.buildHeap(),
          t.length > e)
        ) {
          const i = t.slice(e);
          for (const e of i)
            e.timestamp >= this.heap[0].timestamp &&
              ((this.heap[0] = e), this.heapifyDown(0));
        }
      }
      push(e) {
        return this.size < this.capacity
          ? (this.heap.push(e), this.heapifyUp(this.size - 1), !0)
          : e.timestamp >= this.heap[0].timestamp &&
              ((this.heap[0] = e), this.heapifyDown(0), !0);
      }
      peek() {
        return this.heap[0];
      }
      heapifyUp(e) {
        for (; e > 0; ) {
          const t = Math.floor((e - 1) / 2);
          if (this.heap[t].timestamp <= this.heap[e].timestamp) break;
          (([this.heap[e], this.heap[t]] = [this.heap[t], this.heap[e]]),
            (e = t));
        }
      }
      heapifyDown(e) {
        for (;;) {
          let t = e;
          const i = 2 * e + 1,
            o = 2 * e + 2;
          if (
            (i < this.size &&
              this.heap[i].timestamp < this.heap[t].timestamp &&
              (t = i),
            o < this.size &&
              this.heap[o].timestamp < this.heap[t].timestamp &&
              (t = o),
            t === e)
          )
            break;
          (([this.heap[e], this.heap[t]] = [this.heap[t], this.heap[e]]),
            (e = t));
        }
      }
      buildHeap() {
        const e = this.size - 1;
        for (let t = Math.floor((e - 1) / 2); t >= 0; t--) this.heapifyDown(t);
      }
      dump() {
        return this.heap;
      }
      clear() {
        this.heap = [];
      }
      pop() {
        if (0 === this.size) return;
        const e = this.heap[0];
        return (
          (this.heap[0] = this.heap[this.size - 1]),
          this.heap.pop(),
          this.size > 0 && this.heapifyDown(0),
          e
        );
      }
    }
    class g {
      constructor() {
        ((this.cbList = []), (this.isFlushing = !1));
      }
      push(e, t, ...i) {
        "function" == typeof e && this.callByRequestIdleCallback(e, t, ...i);
      }
      callByRequestIdleCallback(e, t, ...i) {
        (this.cbList.push(e.bind(t, ...i)),
          this.isFlushing ||
            ((this.isFlushing = !0),
            "function" == typeof requestIdleCallback
              ? requestIdleCallback(() => {
                  this.flushFuncList();
                })
              : Promise.resolve().then(() => {
                  this.flushFuncList();
                })));
      }
      clear() {
        ((this.cbList = []), (this.isFlushing = !1));
      }
      flushFuncList() {
        const e = this.cbList;
        ((this.cbList = []),
          (this.isFlushing = !1),
          e.forEach((e) => {
            e();
          }));
      }
    }
    const y = function (e, t, i) {
        const o = i(e[t]);
        e[t] = o;
      },
      v = function (e) {
        switch (e) {
          case s.Xhr:
          case s.Fetch:
            return r.Http;
          case s.Click:
            return r.Click;
          case s.HashChange:
          case s.History:
            return r.Route;
          case s.Resource:
            return r.Resource;
          case s.UnhandledRejection:
            return r.CodeError;
          case s.Error:
          case s.Vue:
          case s.React:
          case s.Performance:
          case s.ScreenRecord:
          case s.WhiteScreen:
          case s.Custom:
          default:
            return r.Custom;
        }
      },
      S = "sonnet_sentry_device_id",
      k = "sonnet_sentry_session_id";
    function x() {
      try {
        let e = localStorage.getItem(S);
        return (
          e || ((e = crypto.randomUUID()), localStorage.setItem(S, e)),
          e
        );
      } catch (e) {
        return crypto.randomUUID();
      }
    }
    function E() {
      try {
        let e = sessionStorage.getItem(k);
        return (
          e || ((e = crypto.randomUUID()), sessionStorage.setItem(k, e)),
          e
        );
      } catch (e) {
        return crypto.randomUUID();
      }
    }
    const C = function () {
      return {
        id: crypto.randomUUID ? crypto.randomUUID() : x(),
        deviceId: x(),
        sessionId: E(),
        message: "",
        timestamp: Date.now(),
        time: new Date().toISOString(),
        name: "",
        status: n.OK,
        type: s.Custom,
      };
    };
    var T,
      R = "user-agent",
      _ = "",
      I = "function",
      O = "object",
      U = "string",
      H = "undefined",
      P = "browser",
      j = "cpu",
      D = "device",
      L = "engine",
      q = "os",
      $ = "result",
      A = "name",
      N = "type",
      z = "vendor",
      F = "version",
      M = "architecture",
      B = "major",
      V = "model",
      W = "console",
      X = "mobile",
      G = "tablet",
      K = "smarttv",
      J = "wearable",
      Q = "xr",
      Y = "embedded",
      Z = "inapp",
      ee = "brands",
      te = "formFactors",
      ie = "fullVersionList",
      oe = "platform",
      re = "platformVersion",
      ne = "bitness",
      se = "sec-ch-ua",
      ae = se + "-full-version-list",
      ce = se + "-arch",
      le = se + "-" + ne,
      he = se + "-form-factors",
      de = se + "-" + X,
      ue = se + "-" + V,
      pe = se + "-" + oe,
      fe = pe + "-version",
      me = [ee, ie, X, V, oe, re, M, te, ne],
      we = "Amazon",
      be = "Apple",
      ge = "ASUS",
      ye = "BlackBerry",
      ve = "Google",
      Se = "Huawei",
      ke = "Lenovo",
      xe = "Honor",
      Ee = "LG",
      Ce = "Microsoft",
      Te = "Motorola",
      Re = "Nvidia",
      _e = "OnePlus",
      Ie = "OPPO",
      Oe = "Samsung",
      Ue = "Sharp",
      He = "Sony",
      Pe = "Xiaomi",
      je = "Zebra",
      De = "Chrome",
      Le = "Chromium",
      qe = "Chromecast",
      $e = "Edge",
      Ae = "Firefox",
      Ne = "Opera",
      ze = "Facebook",
      Fe = "Sogou",
      Me = "Mobile ",
      Be = " Browser",
      Ve = "Windows",
      We = typeof window !== H && window.navigator ? window.navigator : void 0,
      Xe = We && We.userAgentData ? We.userAgentData : void 0,
      Ge = function (e) {
        for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
        return t;
      },
      Ke = function (e, t) {
        if (typeof e === O && e.length > 0) {
          for (var i in e) if (Ze(t) == Ze(e[i])) return !0;
          return !1;
        }
        return !!Qe(e) && Ze(t) == Ze(e);
      },
      Je = function (e, t) {
        for (var i in e)
          return (
            /^(browser|cpu|device|engine|os)$/.test(i) || (!!t && Je(e[i]))
          );
      },
      Qe = function (e) {
        return typeof e === U;
      },
      Ye = function (e) {
        if (e) {
          for (
            var t = [], i = it(/\\?\"/g, e).split(","), o = 0;
            o < i.length;
            o++
          )
            if (i[o].indexOf(";") > -1) {
              var r = rt(i[o]).split(";v=");
              t[o] = { brand: r[0], version: r[1] };
            } else t[o] = rt(i[o]);
          return t;
        }
      },
      Ze = function (e) {
        return Qe(e) ? e.toLowerCase() : e;
      },
      et = function (e) {
        return Qe(e) ? it(/[^\d\.]/g, e).split(".")[0] : void 0;
      },
      tt = function (e) {
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var i = e[t];
            typeof i == O && 2 == i.length
              ? (this[i[0]] = i[1])
              : (this[i] = void 0);
          }
        return this;
      },
      it = function (e, t) {
        return Qe(t) ? t.replace(e, _) : t;
      },
      ot = function (e) {
        return it(/\\?\"/g, e);
      },
      rt = function (e, t) {
        return (
          (e = it(/^\s\s*/, String(e))),
          typeof t === H ? e : e.substring(0, t)
        );
      },
      nt = function (e, t) {
        if (e && t)
          for (var i, o, r, n, s, a, c = 0; c < t.length && !s; ) {
            var l = t[c],
              h = t[c + 1];
            for (i = o = 0; i < l.length && !s && l[i]; )
              if ((s = l[i++].exec(e)))
                for (r = 0; r < h.length; r++)
                  ((a = s[++o]),
                    typeof (n = h[r]) === O && n.length > 0
                      ? 2 === n.length
                        ? typeof n[1] == I
                          ? (this[n[0]] = n[1].call(this, a))
                          : (this[n[0]] = n[1])
                        : n.length >= 3 &&
                          (typeof n[1] !== I || (n[1].exec && n[1].test)
                            ? 3 == n.length
                              ? (this[n[0]] = a
                                  ? a.replace(n[1], n[2])
                                  : void 0)
                              : 4 == n.length
                                ? (this[n[0]] = a
                                    ? n[3].call(this, a.replace(n[1], n[2]))
                                    : void 0)
                                : n.length > 4 &&
                                  (this[n[0]] = a
                                    ? n[3].apply(
                                        this,
                                        [a.replace(n[1], n[2])].concat(
                                          n.slice(4),
                                        ),
                                      )
                                    : void 0)
                            : n.length > 3
                              ? (this[n[0]] = a
                                  ? n[1].apply(this, n.slice(2))
                                  : void 0)
                              : (this[n[0]] = a
                                  ? n[1].call(this, a, n[2])
                                  : void 0))
                      : (this[n] = a || void 0));
            c += 2;
          }
      },
      st = function (e, t) {
        for (var i in t)
          if (typeof t[i] === O && t[i].length > 0) {
            for (var o = 0; o < t[i].length; o++)
              if (Ke(t[i][o], e)) return "?" === i ? void 0 : i;
          } else if (Ke(t[i], e)) return "?" === i ? void 0 : i;
        return t.hasOwnProperty("*") ? t["*"] : e;
      },
      at = {
        ME: "4.90",
        "NT 3.51": "3.51",
        "NT 4.0": "4.0",
        2e3: ["5.0", "5.01"],
        XP: ["5.1", "5.2"],
        Vista: "6.0",
        7: "6.1",
        8: "6.2",
        8.1: "6.3",
        10: ["6.4", "10.0"],
        NT: "",
      },
      ct = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
      },
      lt = {
        Chrome: "Google Chrome",
        Edge: "Microsoft Edge",
        "Edge WebView2": "Microsoft Edge WebView2",
        "Chrome WebView": "Android WebView",
        "Chrome Headless": "HeadlessChrome",
        "Huawei Browser": "HuaweiBrowser",
        "MIUI Browser": "Miui Browser",
        "Opera Mobi": "OperaMobile",
        Yandex: "YaBrowser",
      },
      ht = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [F, [A, Me + "Chrome"]],
          [/webview.+edge\/([\w\.]+)/i],
          [F, [A, $e + " WebView"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [F, [A, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [A, F],
          [/opios[\/ ]+([\w\.]+)/i],
          [F, [A, Ne + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [F, [A, Ne + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [F, [A, Ne]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [F, [A, "Baidu"]],
          [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
          [F, [A, "Maxthon"]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
            /(brave)(?: chrome)?\/([\d\.]+)/i,
            /(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
            /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
            /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i,
          ],
          [A, F],
          [/quark(?:pc)?\/([-\w\.]+)/i],
          [F, [A, "Quark"]],
          [/\bddg\/([\w\.]+)/i],
          [F, [A, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [F, [A, "UCBrowser"]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i,
          ],
          [F, [A, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [F, [A, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [F, [A, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [F, [A, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [F, [A, "Smart " + ke + Be]],
          [/(av(?:ast|g|ira))\/([\w\.]+)/i],
          [[A, /(.+)/, "$1 Secure" + Be], F],
          [/norton\/([\w\.]+)/i],
          [F, [A, "Norton Private" + Be]],
          [/\bfocus\/([\w\.]+)/i],
          [F, [A, Ae + " Focus"]],
          [/ mms\/([\w\.]+)$/i],
          [F, [A, Ne + " Neon"]],
          [/ opt\/([\w\.]+)$/i],
          [F, [A, Ne + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [F, [A, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [F, [A, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [F, [A, Ne + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [F, [A, "MIUI" + Be]],
          [/fxios\/([\w\.-]+)/i],
          [F, [A, Me + Ae]],
          [/\bqihoobrowser\/?([\w\.]*)/i],
          [F, [A, "360"]],
          [/\b(qq)\/([\w\.]+)/i],
          [[A, /(.+)/, "$1Browser"], F],
          [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
          [[A, /(.+)/, "$1" + Be], F],
          [/samsungbrowser\/([\w\.]+)/i],
          [F, [A, Oe + " Internet"]],
          [/metasr[\/ ]?([\d\.]+)/i],
          [F, [A, Fe + " Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [[A, Fe + " Mobile"], F],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
          ],
          [A, F],
          [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
          [A],
          [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
          [F, A],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[A, ze], F, [N, Z]],
          [
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            /(daum)apps[\/ ]([\w\.]+)/i,
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(alipay)client\/([\w\.]+)/i,
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            /(bing)(?:web|sapphire)\/([\w\.]+)/i,
            /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i,
          ],
          [A, F, [N, Z]],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [F, [A, "GSA"], [N, Z]],
          [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
          [F, [A, "TikTok"], [N, Z]],
          [/\[(linkedin)app\]/i],
          [A, [N, Z]],
          [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
          [[A, /(.+)/, "Zalo"], F, [N, Z]],
          [/(chromium)[\/ ]([-\w\.]+)/i],
          [A, F],
          [/ome-(lighthouse)$/i],
          [A, [N, "fetcher"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [F, [A, De + " Headless"]],
          [/wv\).+chrome\/([\w\.]+).+edgw\//i],
          [F, [A, $e + " WebView2"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[A, De + " WebView"], F],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [F, [A, "Android" + Be]],
          [/chrome\/([\w\.]+) mobile/i],
          [F, [A, Me + "Chrome"]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [A, F],
          [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
          [F, [A, Me + "Safari"]],
          [/iphone .*mobile(?:\/\w+ | ?)safari/i],
          [[A, Me + "Safari"]],
          [/version\/([\w\.\,]+) .*(safari)/i],
          [F, A],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [A, [F, "1"]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [A, F],
          [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
          [[A, Me + Ae], F],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[A, "Netscape"], F],
          [/(wolvic|librewolf)\/([\w\.]+)/i],
          [A, F],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [F, [A, Ae + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /\b(links) \(([\w\.]+)/i,
          ],
          [A, [F, /_/g, "."]],
          [/(cobalt)\/([\w\.]+)/i],
          [A, [F, /[^\d\.]+./, _]],
        ],
        cpu: [
          [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
          [[M, "amd64"]],
          [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
          [[M, "ia32"]],
          [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
          [[M, "arm64"]],
          [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
          [[M, "armhf"]],
          [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
          [[M, "arm"]],
          [/ sun4\w[;\)]/i],
          [[M, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            /((ppc|powerpc)(64)?)( mac|;|\))/i,
            /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
          ],
          [[M, /ower/, _, Ze]],
          [/mc680.0/i],
          [[M, "68k"]],
          [/winnt.+\[axp/i],
          [[M, "alpha"]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [V, [z, Oe], [N, G]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [V, [z, Oe], [N, X]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
          [V, [z, be], [N, X]],
          [
            /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
            /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i,
          ],
          [V, [z, be], [N, G]],
          [/(macintosh);/i],
          [V, [z, be]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [V, [z, Ue], [N, X]],
          [
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
          ],
          [V, [z, xe], [N, G]],
          [/honor([-\w ]+)[;\)]/i],
          [V, [z, xe], [N, X]],
          [
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
          ],
          [V, [z, Se], [N, G]],
          [
            /(?:huawei) ?([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i,
          ],
          [V, [z, Se], [N, X]],
          [
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
          ],
          [
            [V, /_/g, " "],
            [z, Pe],
            [N, G],
          ],
          [
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
            / ([\w ]+) miui\/v?\d/i,
          ],
          [
            [V, /_/g, " "],
            [z, Pe],
            [N, X],
          ],
          [
            /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [V, [z, _e], [N, X]],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [V, [z, Ie], [N, X]],
          [/\b(opd2(\d{3}a?))(?: bui|\))/i],
          [
            V,
            [
              z,
              st,
              { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Ie },
            ],
            [N, G],
          ],
          [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
          [V, [z, "BLU"], [N, X]],
          [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [V, [z, "Vivo"], [N, X]],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [V, [z, "Realme"], [N, X]],
          [
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
          ],
          [V, [z, ke], [N, G]],
          [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
          [V, [z, ke], [N, X]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
            /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
          ],
          [V, [z, Te], [N, X]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [V, [z, Te], [N, G]],
          [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [V, [z, Ee], [N, G]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [V, [z, Ee], [N, X]],
          [/(nokia) (t[12][01])/i],
          [z, V, [N, G]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i,
          ],
          [
            [V, /_/g, " "],
            [N, X],
            [z, "Nokia"],
          ],
          [/(pixel (c|tablet))\b/i],
          [V, [z, ve], [N, G]],
          [
            /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
          ],
          [V, [z, ve], [N, X]],
          [/(google) (pixelbook( go)?)/i],
          [z, V],
          [
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [V, [z, He], [N, X]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [V, "Xperia Tablet"],
            [z, He],
            [N, G],
          ],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [V, [z, we], [N, G]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [V, /(.+)/g, "Fire Phone $1"],
            [z, we],
            [N, X],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [V, z, [N, G]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
          [V, [z, ye], [N, X]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [V, [z, ge], [N, G]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [V, [z, ge], [N, X]],
          [/(nexus 9)/i],
          [V, [z, "HTC"], [N, G]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [z, [V, /_/g, " "], [N, X]],
          [
            /tcl (xess p17aa)/i,
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [V, [z, "TCL"], [N, G]],
          [
            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [V, [z, "TCL"], [N, X]],
          [/(itel) ((\w+))/i],
          [
            [z, Ze],
            V,
            [N, st, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [V, [z, "Acer"], [N, G]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [V, [z, "Meizu"], [N, X]],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [V, [z, "Ulefone"], [N, X]],
          [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
          [V, [z, "Energizer"], [N, X]],
          [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
          [V, [z, "Cat"], [N, X]],
          [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
          [V, [z, "Smartfren"], [N, X]],
          [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
          [V, [z, "Nothing"], [N, X]],
          [
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
          ],
          [V, [z, "Archos"], [N, G]],
          [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
          [V, [z, "Archos"], [N, X]],
          [/; (n159v)/i],
          [V, [z, "HMD"], [N, X]],
          [
            /(imo) (tab \w+)/i,
            /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i,
          ],
          [z, V, [N, G]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
            /(hp) ([\w ]+\w)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(oppo) ?([\w ]+) bui/i,
            /(hisense) ([ehv][\w ]+)\)/i,
            /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
          ],
          [z, V, [N, X]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
          ],
          [z, V, [N, G]],
          [/(surface duo)/i],
          [V, [z, Ce], [N, G]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [V, [z, "Fairphone"], [N, X]],
          [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
          [V, [z, Re], [N, G]],
          [/(sprint) (\w+)/i],
          [z, V, [N, X]],
          [/(kin\.[onetw]{3})/i],
          [
            [V, /\./g, " "],
            [z, Ce],
            [N, X],
          ],
          [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [V, [z, je], [N, G]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [V, [z, je], [N, X]],
          [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
          [z, [N, K]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [V, /^/, "SmartTV"],
            [z, Oe],
            [N, K],
          ],
          [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
          [z, V, [N, K]],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [z, Ee],
            [N, K],
          ],
          [/(apple) ?tv/i],
          [z, [V, be + " TV"], [N, K]],
          [/crkey.*devicetype\/chromecast/i],
          [
            [V, qe + " Third Generation"],
            [z, ve],
            [N, K],
          ],
          [/crkey.*devicetype\/([^/]*)/i],
          [
            [V, /^/, "Chromecast "],
            [z, ve],
            [N, K],
          ],
          [/fuchsia.*crkey/i],
          [
            [V, qe + " Nest Hub"],
            [z, ve],
            [N, K],
          ],
          [/crkey/i],
          [
            [V, qe],
            [z, ve],
            [N, K],
          ],
          [/(portaltv)/i],
          [V, [z, ze], [N, K]],
          [/droid.+aft(\w+)( bui|\))/i],
          [V, [z, we], [N, K]],
          [/(shield \w+ tv)/i],
          [V, [z, Re], [N, K]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [V, [z, Ue], [N, K]],
          [/(bravia[\w ]+)( bui|\))/i],
          [V, [z, He], [N, K]],
          [/(mi(tv|box)-?\w+) bui/i],
          [V, [z, Pe], [N, K]],
          [/Hbbtv.*(technisat) (.*);/i],
          [z, V, [N, K]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
          ],
          [
            [z, /.+\/(\w+)/, "$1", st, { LG: "lge" }],
            [V, rt],
            [N, K],
          ],
          [/(playstation \w+)/i],
          [V, [z, He], [N, W]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [V, [z, Ce], [N, W]],
          [
            /(ouya)/i,
            /(nintendo) (\w+)/i,
            /(retroid) (pocket ([^\)]+))/i,
            /(valve).+(steam deck)/i,
            /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
          ],
          [
            [
              z,
              st,
              { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" },
            ],
            V,
            [N, W],
          ],
          [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
          [V, [z, Oe], [N, J]],
          [
            /((pebble))app/i,
            /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
          ],
          [z, V, [N, J]],
          [/(ow(?:19|20)?we?[1-3]{1,3})/i],
          [V, [z, Ie], [N, J]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [V, [z, be], [N, J]],
          [/(opwwe\d{3})/i],
          [V, [z, _e], [N, J]],
          [/(moto 360)/i],
          [V, [z, Te], [N, J]],
          [/(smartwatch 3)/i],
          [V, [z, He], [N, J]],
          [/(g watch r)/i],
          [V, [z, Ee], [N, J]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [V, [z, je], [N, J]],
          [/droid.+; (glass) \d/i],
          [V, [z, ve], [N, Q]],
          [/(pico) ([\w ]+) os\d/i],
          [z, V, [N, Q]],
          [/(quest( \d| pro)?s?).+vr/i],
          [V, [z, ze], [N, Q]],
          [/mobile vr; rv.+firefox/i],
          [[N, Q]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [z, [N, Y]],
          [/(aeobc)\b/i],
          [V, [z, we], [N, Y]],
          [/(homepod).+mac os/i],
          [V, [z, be], [N, Y]],
          [/windows iot/i],
          [[N, Y]],
          [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
          [V, [N, K]],
          [
            /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i,
          ],
          [[N, K]],
          [
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i,
          ],
          [V, [N, st, { mobile: "Mobile", xr: "VR", "*": G }]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[N, G]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[N, X]],
          [/droid .+?; ([\w\. -]+)( bui|\))/i],
          [V, [z, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [F, [A, $e + "HTML"]],
          [/(arkweb)\/([\w\.]+)/i],
          [A, F],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [F, [A, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [A, F],
          [/ladybird\//i],
          [[A, "LibWeb"]],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [F, A],
        ],
        os: [
          [/(windows nt) (6\.[23]); arm/i],
          [
            [A, /N/, "R"],
            [F, st, at],
          ],
          [
            /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
            /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
          ],
          [A, F],
          [
            /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
            /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i,
          ],
          [
            [F, /(;|\))/g, "", st, at],
            [A, Ve],
          ],
          [/(windows ce)\/?([\d\.]*)/i],
          [A, F],
          [
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
            /\btvos ?([\w\.]+)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [F, /_/g, "."],
            [A, "iOS"],
          ],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i,
          ],
          [
            [A, "macOS"],
            [F, /_/g, "."],
          ],
          [/android ([\d\.]+).*crkey/i],
          [F, [A, qe + " Android"]],
          [/fuchsia.*crkey\/([\d\.]+)/i],
          [F, [A, qe + " Fuchsia"]],
          [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
          [F, [A, qe + " SmartSpeaker"]],
          [/linux.*crkey\/([\d\.]+)/i],
          [F, [A, qe + " Linux"]],
          [/crkey\/([\d\.]+)/i],
          [F, [A, qe]],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [F, A],
          [/(ubuntu) ([\w\.]+) like android/i],
          [[A, /(.+)/, "$1 Touch"], F],
          [
            /(harmonyos)[\/ ]?([\d\.]*)/i,
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
          ],
          [A, F],
          [/\(bb(10);/i],
          [F, [A, ye]],
          [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
          [F, [A, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
          ],
          [F, [A, Ae + " OS"]],
          [
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
            /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i,
          ],
          [F, [A, "webOS"]],
          [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
          [
            [
              F,
              st,
              {
                25: "120",
                24: "108",
                23: "94",
                22: "87",
                6: "79",
                5: "68",
                4: "53",
                3: "38",
                2: "538",
                1: "537",
                "*": "TV",
              },
            ],
            [A, "webOS"],
          ],
          [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
          [F, [A, "watchOS"]],
          [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
          [F, [A, "Chrome OS"]],
          [/kepler ([\w\.]+); (aft|aeo)/i],
          [F, [A, "Vega OS"]],
          [
            /(netrange)mmh/i,
            /(nettv)\/(\d+\.[\w\.]+)/i,
            /(nintendo|playstation) (\w+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /(pico) .+os([\w\.]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
            /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /\b(aix)[; ]([1-9\.]{0,4})/i,
            /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) ?(r\d)?/i,
          ],
          [A, F],
          [/(sunos) ?([\d\.]*)/i],
          [[A, "Solaris"], F],
          [
            /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [A, F],
        ],
      },
      dt =
        (tt.call(
          (T = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }).init,
          [
            [P, [A, F, B, N]],
            [j, [M]],
            [D, [N, V, z]],
            [L, [A, F]],
            [q, [A, F]],
          ],
        ),
        tt.call(T.isIgnore, [
          [P, [F, B]],
          [L, [F]],
          [q, [F]],
        ]),
        tt.call(T.isIgnoreRgx, [
          [P, / ?browser$/i],
          [q, / ?os$/i],
        ]),
        tt.call(T.toString, [
          [P, [A, F]],
          [j, [M]],
          [D, [z, V]],
          [L, [A, F]],
          [q, [A, F]],
        ]),
        T),
      ut = function (e, t) {
        var i = dt.init[t],
          o = dt.isIgnore[t] || 0,
          r = dt.isIgnoreRgx[t] || 0,
          n = dt.toString[t] || 0;
        function s() {
          tt.call(this, i);
        }
        return (
          (s.prototype.getItem = function () {
            return e;
          }),
          (s.prototype.withClientHints = function () {
            return Xe
              ? Xe.getHighEntropyValues(me).then(function (t) {
                  return e.setCH(new pt(t, !1)).parseCH().get();
                })
              : e.parseCH().get();
          }),
          (s.prototype.withFeatureCheck = function () {
            return e.detectFeature().get();
          }),
          t != $ &&
            ((s.prototype.is = function (e) {
              var t = !1;
              for (var i in this)
                if (
                  this.hasOwnProperty(i) &&
                  !Ke(o, i) &&
                  Ze(r ? it(r, this[i]) : this[i]) == Ze(r ? it(r, e) : e)
                ) {
                  if (((t = !0), e != H)) break;
                } else if (e == H && t) {
                  t = !t;
                  break;
                }
              return t;
            }),
            (s.prototype.toString = function () {
              var e = _;
              for (var t in n)
                typeof this[n[t]] !== H && (e += (e ? " " : _) + this[n[t]]);
              return e || H;
            })),
          (s.prototype.then = function (e) {
            var t = this,
              i = function () {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
              };
            i.prototype = {
              is: s.prototype.is,
              toString: s.prototype.toString,
              withClientHints: s.prototype.withClientHints,
              withFeatureCheck: s.prototype.withFeatureCheck,
            };
            var o = new i();
            return (e(o), o);
          }),
          new s()
        );
      };
    function pt(e, t) {
      if (((e = e || {}), tt.call(this, me), t))
        tt.call(this, [
          [ee, Ye(e[se])],
          [ie, Ye(e[ae])],
          [X, /\?1/.test(e[de])],
          [V, ot(e[ue])],
          [oe, ot(e[pe])],
          [re, ot(e[fe])],
          [M, ot(e[ce])],
          [te, Ye(e[he])],
          [ne, ot(e[le])],
        ]);
      else
        for (var i in e)
          this.hasOwnProperty(i) && typeof e[i] !== H && (this[i] = e[i]);
    }
    function ft(e, t, i, o) {
      return (
        tt.call(this, [
          ["itemType", e],
          ["ua", t],
          ["uaCH", o],
          ["rgxMap", i],
          ["data", ut(this, e)],
        ]),
        this
      );
    }
    function mt(e, t, i) {
      if (
        (typeof e === O
          ? (Je(e, !0)
              ? (typeof t === O && (i = t), (t = e))
              : ((i = e), (t = void 0)),
            (e = void 0))
          : typeof e !== U || Je(t, !0) || ((i = t), (t = void 0)),
        i)
      )
        if (typeof i.append === I) {
          var o = {};
          (i.forEach(function (e, t) {
            o[String(t).toLowerCase()] = e;
          }),
            (i = o));
        } else {
          var r = {};
          for (var n in i)
            i.hasOwnProperty(n) && (r[String(n).toLowerCase()] = i[n]);
          i = r;
        }
      if (!(this instanceof mt)) return new mt(e, t, i).getResult();
      var s =
          typeof e === U
            ? e
            : i && i[R]
              ? i[R]
              : We && We.userAgent
                ? We.userAgent
                : _,
        a = new pt(i, !0),
        c = t
          ? (function (e, t) {
              var i = {},
                o = t;
              if (!Je(t))
                for (var r in ((o = {}), t))
                  for (var n in t[r]) o[n] = t[r][n].concat(o[n] ? o[n] : []);
              for (var s in e)
                i[s] = o[s] && o[s].length % 2 == 0 ? o[s].concat(e[s]) : e[s];
              return i;
            })(ht, t)
          : ht,
        l = function (e) {
          return e == $
            ? function () {
                return new ft(e, s, c, a)
                  .set("ua", s)
                  .set(P, this.getBrowser())
                  .set(j, this.getCPU())
                  .set(D, this.getDevice())
                  .set(L, this.getEngine())
                  .set(q, this.getOS())
                  .get();
              }
            : function () {
                return new ft(e, s, c[e], a).parseUA().get();
              };
        };
      return (
        tt
          .call(this, [
            ["getBrowser", l(P)],
            ["getCPU", l(j)],
            ["getDevice", l(D)],
            ["getEngine", l(L)],
            ["getOS", l(q)],
            ["getResult", l($)],
            [
              "getUA",
              function () {
                return s;
              },
            ],
            [
              "setUA",
              function (e) {
                return (Qe(e) && (s = rt(e, 500)), this);
              },
            ],
          ])
          .setUA(s),
        this
      );
    }
    ((ft.prototype.get = function (e) {
      return e
        ? this.data.hasOwnProperty(e)
          ? this.data[e]
          : void 0
        : this.data;
    }),
      (ft.prototype.set = function (e, t) {
        return ((this.data[e] = t), this);
      }),
      (ft.prototype.setCH = function (e) {
        return ((this.uaCH = e), this);
      }),
      (ft.prototype.detectFeature = function () {
        if (We && We.userAgent == this.ua)
          switch (this.itemType) {
            case P:
              We.brave && typeof We.brave.isBrave == I && this.set(A, "Brave");
              break;
            case D:
              (!this.get(N) && Xe && Xe[X] && this.set(N, X),
                "Macintosh" == this.get(V) &&
                  We &&
                  typeof We.standalone !== H &&
                  We.maxTouchPoints &&
                  We.maxTouchPoints > 2 &&
                  this.set(V, "iPad").set(N, G));
              break;
            case q:
              !this.get(A) && Xe && Xe[oe] && this.set(A, Xe[oe]);
              break;
            case $:
              var e = this.data,
                t = function (t) {
                  return e[t].getItem().detectFeature().get();
                };
              this.set(P, t(P))
                .set(j, t(j))
                .set(D, t(D))
                .set(L, t(L))
                .set(q, t(q));
          }
        return this;
      }),
      (ft.prototype.parseUA = function () {
        switch (
          (this.itemType != $ && nt.call(this.data, this.ua, this.rgxMap),
          this.itemType)
        ) {
          case P:
            this.set(B, et(this.get(F)));
            break;
          case q:
            if ("iOS" == this.get(A) && "18.6" == this.get(F)) {
              var e = /\) Version\/([\d\.]+)/.exec(this.ua);
              e &&
                parseInt(e[1].substring(0, 2), 10) >= 26 &&
                this.set(F, e[1]);
            }
        }
        return this;
      }),
      (ft.prototype.parseCH = function () {
        var e = this.uaCH,
          t = this.rgxMap;
        switch (this.itemType) {
          case P:
          case L:
            var i,
              o = e[ie] || e[ee];
            if (o)
              for (var r = 0; r < o.length; r++) {
                var n = o[r].brand || o[r],
                  s = o[r].version;
                (this.itemType == P &&
                  !/not.a.brand/i.test(n) &&
                  (!i ||
                    (/Chrom/.test(i) && n != Le) ||
                    (i == $e && /WebView2/.test(n))) &&
                  ((n = st(n, lt)),
                  ((i = this.get(A)) && !/Chrom/.test(i) && /Chrom/.test(n)) ||
                    this.set(A, n).set(F, s).set(B, et(s)),
                  (i = n)),
                  this.itemType == L && n == Le && this.set(F, s));
              }
            break;
          case j:
            var a = e[M];
            a &&
              (a && "64" == e[ne] && (a += "64"),
              nt.call(this.data, a + ";", t));
            break;
          case D:
            if (
              (e[X] && this.set(N, X),
              e[V] && (this.set(V, e[V]), !this.get(N) || !this.get(z)))
            ) {
              var c = {};
              (nt.call(c, "droid 9; " + e[V] + ")", t),
                !this.get(N) && c.type && this.set(N, c.type),
                !this.get(z) && c.vendor && this.set(z, c.vendor));
            }
            if (e[te]) {
              var l;
              if ("string" != typeof e[te])
                for (var h = 0; !l && h < e[te].length; )
                  l = st(e[te][h++], ct);
              else l = st(e[te], ct);
              this.set(N, l);
            }
            break;
          case q:
            var d = e[oe];
            if (d) {
              var u = e[re];
              (d == Ve && (u = parseInt(et(u), 10) >= 13 ? "11" : "10"),
                this.set(A, d).set(F, u));
            }
            this.get(A) == Ve &&
              "Xbox" == e[V] &&
              this.set(A, "Xbox").set(F, void 0);
            break;
          case $:
            var p = this.data,
              f = function (t) {
                return p[t].getItem().setCH(e).parseCH().get();
              };
            this.set(P, f(P))
              .set(j, f(j))
              .set(D, f(D))
              .set(L, f(L))
              .set(q, f(q));
        }
        return this;
      }),
      (mt.VERSION = "2.0.9"),
      (mt.BROWSER = Ge([A, F, B, N])),
      (mt.CPU = Ge([M])),
      (mt.DEVICE = Ge([V, z, N, W, X, K, G, J, Y])),
      (mt.ENGINE = mt.OS = Ge([A, F])));
    var wt,
      bt,
      gt = function (e, t, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === i ? o : "a" === i ? o.call(e) : o ? o.value : t.get(e);
      };
    function yt() {
      try {
        const e = document.createElement("canvas"),
          t = e.getContext("2d");
        if (t) {
          ((t.textBaseline = "top"),
            (t.font = "14px 'Arial'"),
            (t.fillStyle = "#f60"),
            t.fillRect(125, 1, 62, 20),
            (t.fillStyle = "#069"),
            t.fillText("sonnet-sentry", 2, 15),
            (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
            t.fillText("sonnet-sentry", 4, 17));
          const i = e.toDataURL().replace("data:image/png;base64,", ""),
            o = atob(i),
            r = function (e) {
              let t = -1;
              for (let i = 0; i < e.length; i++)
                t = (t >>> 8) ^ e.charCodeAt(i);
              return (-1 ^ t) >>> 0;
            };
          return r(o).toString(16);
        }
      } catch (e) {}
      return crypto.randomUUID();
    }
    class vt {
      static get instance() {
        return (
          gt(this, wt, "f", bt) ||
            ((function (e, t, i, o, r) {
              if ("m" === o)
                throw new TypeError("Private method is not writable");
              if ("a" === o && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === o ? r.call(e, i) : r ? (r.value = i) : t.set(e, i);
            })(this, wt, new wt(), "f", bt),
            (globalThis.__sentry__ = gt(this, wt, "f", bt))),
          gt(this, wt, "f", bt)
        );
      }
      constructor() {
        var e, t, i, o, r, n;
        ((this.codeErrors = new Set()),
          (this.whiteScreenTimer = null),
          (this.options = w),
          (this.shouldRecordScreen = !1));
        const s = new mt().getResult();
        this.deviceInfo = {
          browserName: null !== (e = s.browser.name) && void 0 !== e ? e : m,
          browserVersion:
            null !== (t = s.browser.version) && void 0 !== t ? t : m,
          osName: null !== (i = s.os.name) && void 0 !== i ? i : m,
          osVersion: null !== (o = s.os.version) && void 0 !== o ? o : m,
          userAgent: s.ua,
          deviceModel: null !== (r = s.device.model) && void 0 !== r ? r : m,
          deviceType: null !== (n = s.device.type) && void 0 !== n ? n : m,
          fingerprint: yt(),
          language: navigator.language || m,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        };
      }
      setOptions(e) {
        gt(wt, wt, "f", bt).options = { ...this.options, ...e };
      }
    }
    ((wt = vt), (bt = { value: void 0 }));
    const St = vt.instance,
      kt = function (e) {
        for (const t of St.options.excludeApis)
          if ("string" == typeof t) {
            if (e === t) return !0;
          } else if (t.test(e)) return !0;
        return !1;
      };
    function xt(e) {
      return (
        e instanceof ErrorEvent &&
        null !== e.target &&
        "src" in e.target &&
        "string" == typeof e.target.src &&
        "href" in e.target &&
        "string" == typeof e.target.href &&
        "localName" in e.target &&
        "string" == typeof e.target.localName
      );
    }
    const Et = "#74d4ff",
      Ct = "#bbf45",
      Tt = "#ffb869",
      Rt = "#ffa2a2",
      _t = (e) =>
        `color: #62748e; background: ${e}; padding: 2px 6px; border-radius: 4px; font-weight: 600;`,
      It = (e) => `color: ${e}; font-weight: 600;`,
      Ot = {
        info: { title: _t(Et), subtitle: It(Et) },
        success: { title: _t(Ct), subtitle: It(Ct) },
        warn: { title: _t(Tt), subtitle: It(Tt) },
        error: { title: _t(Rt), subtitle: It(Rt) },
        timestamp: { label: "color: #dab2ff;", value: It(Ct) },
      },
      Ut = {
        get isEnabled() {
          return !0;
        },
        info(e, t, i, o) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${t} `,
              Ot.info.title,
              Ot.info.subtitle,
            ),
            void 0 !== i &&
              (Array.isArray(i)
                ? o
                  ? console.table(i, o)
                  : console.table(i)
                : "object" == typeof i && null !== i
                  ? (console.group("Details"),
                    console.log(i),
                    console.groupEnd())
                  : console.log(i)),
            console.groupEnd());
        },
        success(e, t, i, o) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${t} `,
              Ot.success.title,
              Ot.success.subtitle,
            ),
            void 0 !== o &&
              console.log(
                "%cTime cost%c " + o + "ms",
                Ot.timestamp.label,
                Ot.timestamp.value,
              ),
            void 0 !== i &&
              (Array.isArray(i)
                ? console.table(i)
                : "object" == typeof i && null !== i
                  ? (console.group("Response Data"),
                    console.log(i),
                    console.groupEnd())
                  : console.log(i)),
            console.groupEnd());
        },
        warn(e, t, i) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${t} `,
              Ot.warn.title,
              Ot.warn.subtitle,
            ),
            void 0 !== i &&
              (Array.isArray(i)
                ? console.table(i)
                : "object" == typeof i && null !== i
                  ? (console.group("Warning Details"),
                    console.log(i),
                    console.groupEnd())
                  : console.log(i)),
            console.groupEnd());
        },
        error(e, t, i) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${t} `,
              Ot.error.title,
              Ot.error.subtitle,
            ),
            void 0 !== i &&
              (console.group("Error Details"),
              console.error(i),
              console.groupEnd()),
            console.groupEnd());
        },
      };
    var Ht,
      Pt,
      jt = function (e, t, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === i ? o : "a" === i ? o.call(e) : o ? o.value : t.get(e);
      };
    class Dt {
      constructor() {
        ((this.cbQueue = new g()),
          (this.id = crypto.randomUUID()),
          (this.events = []),
          (this.isOnline = !0));
      }
      static get instance() {
        return (
          jt(this, Ht, "f", Pt) ||
            ((function (e, t, i, o, r) {
              if ("m" === o)
                throw new TypeError("Private method is not writable");
              if ("a" === o && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === o ? r.call(e, i) : r ? (r.value = i) : t.set(e, i);
            })(this, Ht, new Ht(), "f", Pt),
            jt(this, Ht, "f", Pt).initNetworkListener()),
          jt(this, Ht, "f", Pt)
        );
      }
      initNetworkListener() {
        "undefined" != typeof window &&
          ((this.isOnline = !1 !== navigator.onLine),
          window.addEventListener("online", () => {
            ((this.isOnline = !0),
              Ut.info(
                "Sonnet Sentry",
                "Network is back online, flushing cache",
              ),
              this.loadOfflineCache(),
              this.flush());
          }),
          window.addEventListener("offline", () => {
            ((this.isOnline = !1),
              Ut.info("Sonnet Sentry", "Network is offline, caching events"));
          }));
      }
      loadOfflineCache() {
        try {
          const e = localStorage.getItem(St.options.offlineCacheKey);
          if (e) {
            const t = JSON.parse(e);
            (Array.isArray(t) && this.events.unshift(...t),
              localStorage.removeItem(St.options.offlineCacheKey));
          }
        } catch (e) {}
      }
      saveOfflineCache() {
        try {
          localStorage.setItem(
            St.options.offlineCacheKey,
            JSON.stringify(this.events),
          );
        } catch (e) {}
      }
      isObjectOverSizeLimit(e, t) {
        return new Blob([JSON.stringify(e)]).size > 1024 * t;
      }
      sendBeacon(e) {
        return (
          !("undefined" == typeof navigator || !navigator.sendBeacon) &&
          navigator.sendBeacon(St.options.dsn, JSON.stringify(e))
        );
      }
      handleServerError() {
        ((this.isOnline = !1),
          this.retryTimer && clearTimeout(this.retryTimer),
          (this.retryTimer = setTimeout(() => {
            this.testServerAvailable();
          }, 6e4)));
      }
      testServerAvailable() {
        fetch(St.options.dsn, { method: "HEAD" })
          .then((e) => {
            e.ok
              ? ((this.isOnline = !0),
                Ut.info(
                  "Sonnet Sentry",
                  "Server is back available, flushing cache",
                ),
                this.retryTimer && clearTimeout(this.retryTimer),
                this.loadOfflineCache(),
                this.flush())
              : this.handleServerError();
          })
          .catch(() => {
            this.handleServerError();
          });
      }
      reportByFetch(e) {
        this.cbQueue.push(() => {
          fetch(St.options.dsn, {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json" },
            keepalive: !0,
          })
            .then((e) => {
              e.ok || this.handleServerError();
            })
            .catch((e) => {
              (Ut.error("Sonnet Sentry Report", "Fetch report failed", e),
                this.handleServerError());
            });
        });
      }
      reportByImage(e) {
        const { dsn: t } = St.options;
        this.cbQueue.push(() => {
          const i = new Image(),
            o = t.includes("?") ? "&" : "?";
          i.src = `${t}${o}data=${encodeURIComponent(JSON.stringify(e))}`;
        });
      }
      payload2reportData(e) {
        const {
          type: t,
          name: i,
          time: o,
          timestamp: r,
          message: n,
          status: s,
        } = e;
        return {
          type: t,
          name: i,
          time: o,
          timestamp: r,
          message: n,
          status: s,
          id: this.id,
          url: location.href,
          userId: St.options.userId,
          projectId: St.options.projectId,
          sdkVersion: f,
          deviceInfo: St.deviceInfo,
          payload: e,
        };
      }
      flush() {
        if (0 === this.events.length) return;
        if (!this.isOnline)
          return (
            this.events.length > St.options.maxQueueLength &&
              (this.events = this.events.slice(-St.options.maxQueueLength)),
            void this.saveOfflineCache()
          );
        const e = St.options.cacheMaxLength,
          t = this.events.slice(0, e);
        this.events = this.events.slice(e);
        const i = performance.now(),
          o = this.isObjectOverSizeLimit(t, 60);
        let r = !1;
        (o || (r = this.sendBeacon(t)),
          r ||
            (St.options.useImageReport && !this.isObjectOverSizeLimit(t, 2)
              ? this.reportByImage(t)
              : this.reportByFetch(t)),
          Ut.success(
            "Sonnet Sentry Report",
            "Batch report queued or sent",
            { count: t.length, overSize: o },
            Math.round(performance.now() - i),
          ),
          this.events.length > 0 &&
            (this.timeoutID && clearTimeout(this.timeoutID),
            (this.timeoutID = setTimeout(() => this.flush(), 100))));
      }
      async send(e, t = !1) {
        const {
          dsn: i,
          screenRecordEventTypes: o,
          onBeforeReportData: r,
          cacheMaxLength: n,
          cacheWaitingTime: s,
          maxQueueLength: a,
          tracesSampleRate: c,
        } = St.options;
        if ("" === i)
          return void Ut.error(
            "Sonnet Sentry",
            "DSN is empty, report cancelled",
            e,
          );
        if (Math.random() > c)
          return void Ut.info(
            "Sonnet Sentry Report",
            `Dropped by sample rate: ${e.type}`,
          );
        o.includes(e.type) && (St.shouldRecordScreen = !0);
        let l = this.payload2reportData(e);
        if (!r || ((l = await r(l)), l)) {
          if (
            (Ut.info("Sonnet Sentry Report", `Type: ${e.type}`, l),
            this.events.push(l),
            !this.isOnline)
          )
            return (
              this.events.length > a && (this.events = this.events.slice(-a)),
              void this.saveOfflineCache()
            );
          (this.timeoutID && clearTimeout(this.timeoutID),
            t || this.events.length >= n
              ? this.flush()
              : (this.timeoutID = setTimeout(() => this.flush(), s)));
        }
      }
    }
    ((Ht = Dt), (Pt = { value: void 0 }));
    const Lt = Dt.instance;
    var qt,
      $t,
      At = function (e, t, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === i ? o : "a" === i ? o.call(e) : o ? o.value : t.get(e);
      };
    class Nt extends b {
      static get instance() {
        return (
          At(qt, qt, "f", $t) ||
            (function (e, t, i, o, r) {
              if ("m" === o)
                throw new TypeError("Private method is not writable");
              if ("a" === o && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === o ? r.call(e, i) : r ? (r.value = i) : t.set(e, i);
            })(qt, qt, new qt(), "f", $t),
          At(qt, qt, "f", $t)
        );
      }
      push(e) {
        const { onBeforePushBreadcrumb: t } = St.options;
        return (t && (e = t(e)), super.push(e));
      }
    }
    ((qt = Nt), ($t = { value: void 0 }));
    const zt = Nt.instance,
      Ft = function (e) {
        const { hasSkeleton: t, rootCssSelectors: i } = St.options;
        let o = 0;
        const r = new Set(),
          a = new Set(),
          c = (e) => {
            const n = (function (e) {
                if (!e || 1 !== e.nodeType) return ["", "", ""];
                const t = ["id", "class", "style"];
                return [
                  e.id ? `#${e.id}` : "",
                  Array.from(e.classList)
                    .map((e) => `.${e}`)
                    .join("") +
                    Array.from(e.attributes)
                      .filter((e) => !t.includes(e.name))
                      .map((e) => `[${e.name}="${e.value}"]`)
                      .join(""),
                  e.tagName.toLowerCase(),
                ];
              })(e),
              [s, c, l] = n;
            return (
              t &&
                (1 === o
                  ? n.forEach((e) => r.add(e))
                  : n.forEach((e) => a.add(e))),
              i.includes(s) || i.includes(c) || i.includes(l)
            );
          },
          l = () => {
            if ((o++, t && o > 0 && a.clear(), o > 10)) return void d();
            const { innerWidth: e, innerHeight: i } = globalThis;
            let n = 0;
            for (let t = 1; t <= 9; t++) {
              const o = document.elementFromPoint((e * t) / 10, i / 2),
                r = document.elementFromPoint(e / 2, (i * t) / 10);
              ((o && !c(o)) || n++, (r && !c(r)) || n++);
            }
            if (!t) {
              if (n >= 18) return void h();
              d();
            }
            if (t) {
              if (1 === o) return;
              if (
                Array.from(a).sort().join(",") ===
                Array.from(r).sort().join(",")
              )
                return void h();
              d();
            }
          },
          h = () => {
            const t = {
              ...C(),
              type: s.WhiteScreen,
              status: n.Error,
              name: "WhiteScreen",
              message: `sample count ${o}`,
              extra: "WhiteScreen",
            };
            (Ut.error("Sonnet Sentry WhiteScreen", "White screen detected", t),
              e(t),
              d());
          },
          d = () => {
            St.whiteScreenTimer &&
              (clearInterval(St.whiteScreenTimer),
              (St.whiteScreenTimer = null));
          },
          u = () => {
            St.whiteScreenTimer ||
              (St.whiteScreenTimer = globalThis.setInterval(() => {
                "requestIdleCallback" in globalThis
                  ? requestIdleCallback((e) => {
                      (e.timeRemaining() > 0 || e.didTimeout) && l();
                    })
                  : l();
              }, 1e3));
          };
        return (
          "complete" === document.readyState
            ? u()
            : globalThis.addEventListener("load", u, { once: !0 }),
          { stop: d }
        );
      },
      Mt = (e) => {
        e = (function (e) {
          const { statusCode: t } = e;
          return (
            (e.message =
              t >= 100 && t < 200
                ? "Informational response"
                : t >= 200 && t < 300
                  ? "Successful responses"
                  : t >= 300 && t < 400
                    ? "Redirection messages"
                    : t >= 400 && t < 500
                      ? "Client error responses"
                      : t >= 500 && t < 600
                        ? "Server error responses"
                        : "Invalid status code"),
            e
          );
        })(e);
        const {
          id: t,
          name: i,
          time: o,
          timestamp: r,
          message: s,
          status: a,
          type: c,
        } = e;
        (a === n.Error
          ? Ut.error("Sonnet Sentry HTTP", `Request Error: ${i}`, e)
          : Ut.info("Sonnet Sentry HTTP", `Request Complete: ${i}`, e),
          e.api.includes(St.options.dsn) ||
            zt.push({
              id: t,
              name: i,
              time: o,
              timestamp: r,
              message: s,
              status: a,
              type: c,
              userAction: v(c),
            }),
          a === n.Error && Lt.send(e));
      },
      Bt = ({ extra: e, ...t }) => {
        if (
          (Ut.error("Sonnet Sentry Error", "Error Captured", e),
          (function (e) {
            return e instanceof ErrorEvent;
          })(e))
        )
          return void Qt(e);
        if (xt(e)) {
          const { localName: i, src: o, href: r } = e.target,
            { message: a } = e,
            c = {
              ...t,
              type: s.Resource,
              status: n.Error,
              name: i,
              src: o,
              href: r,
              message: a,
            };
          zt.push({ ...c, userAction: v(s.Resource) });
          const l = d(`${s.Resource}-${i}-${o || r}`);
          return void (
            (!St.options.repeatCodeError && St.codeErrors.has(l)) ||
            (St.codeErrors.add(l), Lt.send(c))
          );
        }
        if (
          (function (e) {
            return e instanceof Error;
          })(e)
        ) {
          const { name: i, message: o, stack: r } = e,
            a = {
              ...t,
              type: s.Error,
              name: i,
              message: o,
              status: n.Error,
              extra: r || e,
            };
          zt.push({ ...a, userAction: v(s.Error) });
          const c = d(`${s.Error}-${i}-${o}`);
          return void (
            (!St.options.repeatCodeError && St.codeErrors.has(c)) ||
            (St.codeErrors.add(c), Lt.send(a))
          );
        }
        const i = {
          ...t,
          type: s.Error,
          name: "Unknown Error",
          message: "string" == typeof e ? e : JSON.stringify(e),
          status: n.Error,
          extra: e,
        };
        zt.push({ ...i, userAction: v(s.Error) });
        const o = d(`${s.Error}-Unknown-${i.message}`);
        (!St.options.repeatCodeError && St.codeErrors.has(o)) ||
          (St.codeErrors.add(o), Lt.send(i));
      },
      Vt = ({ from: e, to: t, ...i }) => {
        const o = `${e} => ${t}`,
          r = { ...i, name: o, message: o, type: s.History, from: e, to: t };
        (zt.push({ ...r, userAction: v(s.History) }),
          Lt.send({
            ...C(),
            type: s.PV,
            name: "HistoryChange",
            message: o,
            extra: { from: e, to: t },
          }));
      },
      Wt = ({ extra: e, ...t }) => {
        const { oldURL: i = m, newURL: o = m } = e,
          r = `${i} => ${o}`,
          n = { ...t, name: r, message: r, type: s.HashChange, from: i, to: o };
        (zt.push({ ...n, userAction: v(s.HashChange) }),
          Lt.send({
            ...C(),
            type: s.PV,
            name: "HashChange",
            message: r,
            extra: { from: i, to: o },
          }));
      },
      Xt = (e) => {
        (Ut.error(
          "Sonnet Sentry Error",
          "Unhandled Rejection Captured",
          e.extra,
        ),
          xt(e.extra) ? Qt(e.extra) : Bt(e));
      },
      Gt = (e) => {
        Ft(() => {
          Lt.send(e);
        });
      },
      Kt = ({ extra: e, ...t }) => {
        const i = e,
          o =
            i.target instanceof HTMLElement
              ? (function (e) {
                  let t = e;
                  const i = [];
                  for (
                    ;
                    t &&
                    t.tagName &&
                    "html" !== t.tagName.toLowerCase() &&
                    i.length < 5;
                  ) {
                    let e = t.tagName.toLowerCase();
                    (t.id
                      ? (e += `#${t.id}`)
                      : t.className &&
                        "string" == typeof t.className &&
                        (e += `.${t.className.split(/\s+/).join(".")}`),
                      i.unshift(e),
                      (t = t.parentElement));
                  }
                  return i.join(" > ");
                })(i.target)
              : "",
          r = {
            ...t,
            type: s.Click,
            name: o,
            message: o,
            status: n.OK,
            extra: o,
          };
        (zt.push({ ...r, userAction: v(s.Click) }),
          St.options.enableClick && Lt.send(r));
      },
      Jt = new (class {
        constructor() {
          this.cacheError = [];
        }
        push(e) {
          (this.cacheError.push(e),
            this.timeoutID && clearTimeout(this.timeoutID),
            (this.timeoutID = setTimeout(() => this.flush(), 2e3)));
        }
        flush() {
          if (0 === this.cacheError.length) return;
          const e = {};
          for (const t of this.cacheError) {
            const i = `${t.type}-${t.name}-${t.message}`;
            (e[i] || (e[i] = []), e[i].push(t));
          }
          this.cacheError = [];
          for (const [, t] of Object.entries(e))
            if (t.length < 5) t.forEach((e) => Lt.send(e));
            else {
              const e = {
                ...t[0],
                batchError: !0,
                batchErrorLength: t.length,
                batchErrorLastHappenTime: t[t.length - 1].timestamp,
              };
              Lt.send(e);
            }
        }
      })(),
      Qt = (e) => {
        const { filename: t, colno: i, lineno: o, message: r } = e,
          a = { ...C(), type: s.Error, name: t, message: r, status: n.Error },
          c = { ...a, column: i, line: o };
        zt.push({ ...a, userAction: v(s.Error) });
        const l = d(`${s.Error}-${r}-${t}-${o}-${i}`);
        (l.includes(m) ||
          St.options.repeatCodeError ||
          (!St.options.repeatCodeError && !St.codeErrors.has(l))) &&
          (St.codeErrors.add(l), Jt.push(c));
      },
      Yt = new Map(),
      Zt = (e, t) => {
        const i = Yt.get(e);
        if (i)
          try {
            for (const e of i) e(t);
          } catch (e) {
            Ut.error("Sonnet Sentry", "Error executing event handler", e);
          }
      };
    let ei = document.location.href;
    const ti = function () {
      Ut.info("Sonnet Sentry", "Initializing SDK Event Subscriptions...");
      const e = [
        { type: s.Xhr, handler: Mt, name: "Xhr" },
        { type: s.Fetch, handler: Mt, name: "Fetch" },
        { type: s.Error, handler: Bt, name: "Error" },
        { type: s.History, handler: Vt, name: "History" },
        { type: s.HashChange, handler: Wt, name: "HashChange" },
        { type: s.UnhandledRejection, handler: Xt, name: "UnhandledRejection" },
        { type: s.Click, handler: Kt, name: "Click" },
        { type: s.WhiteScreen, handler: Gt, name: "WhiteScreen" },
      ];
      e.forEach(({ type: e, handler: t }) => {
        (((e, t) => {
          const i = Yt.get(e);
          i ? i.add(t) : Yt.set(e, new Set([t]));
        })(e, t),
          (function (e) {
            switch (e) {
              case s.Click:
                !(function () {
                  const e = (function (e, t = 300) {
                    let i = 0;
                    return function (...o) {
                      if (Date.now() - i > t)
                        return ((i = Date.now()), void e.apply(this, o));
                    };
                  })(Zt, St.options.clickThrottleDelay);
                  document.addEventListener("click", function (t) {
                    e(s.Click, { ...C(), type: s.Click, extra: t });
                  });
                })();
                break;
              case s.Error:
                globalThis.addEventListener(
                  "error",
                  function (e) {
                    Zt(s.Error, { ...C(), type: s.Error, extra: e });
                  },
                  !0,
                );
                break;
              case s.Xhr:
                !(function () {
                  const e = XMLHttpRequest.prototype;
                  (y(
                    e,
                    "open",
                    (e) =>
                      function (t, i, o, ...r) {
                        const n = {
                          ...C(),
                          name: "XMLHttpRequest",
                          type: s.Xhr,
                          method: t.toUpperCase(),
                          api: i,
                          elapsedTime: 0,
                          statusCode: c.OK,
                        };
                        return (
                          (this.__sentry__ = n),
                          e.call(this, t, i, o, ...r)
                        );
                      },
                  ),
                    y(
                      e,
                      "send",
                      (e) =>
                        function (t) {
                          const { method: i, api: o } = this.__sentry__;
                          return (
                            this.addEventListener("loadend", () => {
                              if (
                                (i.toUpperCase() === l.Post &&
                                  o === St.options.dsn) ||
                                kt(o)
                              )
                                return;
                              const {
                                status: e,
                                responseType: r,
                                response: n,
                              } = this;
                              ((this.__sentry__.statusCode = e),
                                (this.__sentry__.requestData = { body: t }),
                                (this.__sentry__.responseData = {
                                  responseType: r,
                                  response: n,
                                }));
                              const a = Date.now();
                              ((this.__sentry__.elapsedTime =
                                a - this.__sentry__.timestamp),
                                Zt(s.Xhr, this.__sentry__));
                            }),
                            e.call(this, t)
                          );
                        },
                    ));
                })();
                break;
              case s.Fetch:
                y(
                  globalThis,
                  "fetch",
                  (e) =>
                    async function (t, i) {
                      var o, r;
                      const n =
                          null !==
                            (r =
                              null === (o = null == i ? void 0 : i.method) ||
                              void 0 === o
                                ? void 0
                                : o.toUpperCase()) && void 0 !== r
                            ? r
                            : l.Get,
                        a = {
                          ...C(),
                          type: s.Fetch,
                          method: n,
                          requestData: { body: null == i ? void 0 : i.body },
                          name: "Fetch",
                          api: t.toString(),
                          elapsedTime: 0,
                          statusCode: c.OK,
                        };
                      return e.call(globalThis, t, i).then((e) => {
                        const i = e.clone(),
                          o = Date.now();
                        return (
                          (a.elapsedTime = o - a.timestamp),
                          (a.statusCode = i.status),
                          i.text().then((e) => {
                            (n === l.Post && t.toString() === St.options.dsn) ||
                              kt(t.toString()) ||
                              ((a.responseData = e), Zt(s.Fetch, a));
                          }),
                          e
                        );
                      });
                    },
                );
                break;
              case s.History:
                !(function () {
                  const e = globalThis.onpopstate;
                  globalThis.onpopstate = function (t) {
                    const i = ei,
                      o = document.location.href;
                    if (
                      ((ei = o),
                      Zt(s.History, {
                        ...C(),
                        type: s.History,
                        from: i,
                        to: o,
                      }),
                      "function" == typeof e)
                    )
                      return e.call(this, t);
                  };
                  const t = (e) =>
                    function (t, i, o) {
                      if (o) {
                        const e = ei,
                          t = o.toString();
                        ((ei = t),
                          Zt(s.History, {
                            ...C(),
                            type: s.History,
                            from: e,
                            to: t,
                          }));
                      }
                      return e.call(this, t, i, o);
                    };
                  (y(globalThis.history, "pushState", t),
                    y(globalThis.history, "replaceState", t));
                })();
                break;
              case s.UnhandledRejection:
                globalThis.addEventListener("unhandledrejection", function (e) {
                  Zt(s.UnhandledRejection, {
                    ...C(),
                    type: s.UnhandledRejection,
                    extra: e,
                  });
                });
                break;
              case s.HashChange:
                globalThis.addEventListener("hashchange", function (e) {
                  Zt(s.HashChange, { ...C(), type: s.HashChange, extra: e });
                });
                break;
              case s.WhiteScreen:
                Zt(s.WhiteScreen, {
                  ...C(),
                  type: s.WhiteScreen,
                  extra: "WhiteScreen",
                });
            }
          })(e));
      });
      const t = Date.now();
      (Lt.send({
        ...C(),
        type: s.PV,
        name: "PageLoad",
        message: "Page Initial Load",
        extra: {
          url: location.href,
          referrer: document.referrer,
          entryTime: t,
        },
      }),
        window.addEventListener("beforeunload", () => {
          const e = Date.now() - t,
            { type: i } = performance.navigation,
            o =
              ["Navigate", "Reload", "Back_Forward", "Reserved"][i] ||
              "Unknown";
          Lt.send(
            {
              ...C(),
              type: s.PV,
              name: "PageUnload",
              message: "Page Unload / Dwell Time",
              extra: { duration: e, operateAction: o },
            },
            !0,
          );
        }),
        Ut.success(
          "Sonnet Sentry",
          "SDK Setup Completed",
          e.map((e) => ({ event: e.name, type: e.type })),
        ));
    };
    var ii = i(162);
    function oi(e) {
      St.setOptions({ ...w, ...e });
      const { dsn: t } = St.options;
      "" !== t
        ? (Ut.info("Sonnet Sentry", "SDK Initialized", { options: St.options }),
          ti())
        : Ut.error("Sonnet Sentry", "Initialization failed: DSN is empty");
    }
    const ri = (e, t) => {
      const i = e.config.errorHandler;
      ((e.config.errorHandler = (e, t, o) => {
        (Bt({ ...C(), type: s.Vue, status: n.Error, extra: e }),
          i && i.call(null, e, t, o));
      }),
        oi(t));
    };
    class ni extends ii.Component {
      componentDidCatch(e, t) {
        Bt({
          ...C(),
          type: s.React,
          status: n.Error,
          extra: { error: e, errorInfo: t },
        });
      }
    }
    function si(e, t) {
      new e(t).init();
    }
    return h;
  })(),
);
