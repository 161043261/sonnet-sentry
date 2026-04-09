!(function (e, i) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
      ? define([], i)
      : "object" == typeof exports
        ? (exports.SonnetSentry = i())
        : (e.SonnetSentry = i());
})(this, () =>
  (() => {
    "use strict";
    var e,
      i,
      t = {},
      o = {};
    function r(e) {
      var i = o[e];
      if (void 0 !== i) return i.exports;
      var n = (o[e] = { exports: {} });
      return (t[e](n, n.exports, r), n.exports);
    }
    ((r.m = t),
      (r.d = (e, i) => {
        for (var t in i)
          r.o(i, t) &&
            !r.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
      }),
      (r.f = {}),
      (r.e = (e) =>
        Promise.all(Object.keys(r.f).reduce((i, t) => (r.f[t](e, i), i), []))),
      (r.u = (e) => e + ".js"),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i)),
      (e = {}),
      (i = "SonnetSentry:"),
      (r.l = (t, o, n, s) => {
        if (e[t]) e[t].push(o);
        else {
          var a, c;
          if (void 0 !== n)
            for (
              var l = document.getElementsByTagName("script"), d = 0;
              d < l.length;
              d++
            ) {
              var h = l[d];
              if (
                h.getAttribute("src") == t ||
                h.getAttribute("data-webpack") == i + n
              ) {
                a = h;
                break;
              }
            }
          (a ||
            ((c = !0),
            ((a = document.createElement("script")).charset = "utf-8"),
            r.nc && a.setAttribute("nonce", r.nc),
            a.setAttribute("data-webpack", i + n),
            (a.src = t)),
            (e[t] = [o]));
          var u = (i, o) => {
              ((a.onerror = a.onload = null), clearTimeout(p));
              var r = e[t];
              if (
                (delete e[t],
                a.parentNode && a.parentNode.removeChild(a),
                r && r.forEach((e) => e(o)),
                i)
              )
                return i(o);
            },
            p = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: a }),
              12e4,
            );
          ((a.onerror = u.bind(null, a.onerror)),
            (a.onload = u.bind(null, a.onload)),
            c && document.head.appendChild(a));
        }
      }),
      (r.r = (e) => {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }),
      (() => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var i = r.g.document;
        if (
          !e &&
          i &&
          (i.currentScript &&
            "SCRIPT" === i.currentScript.tagName.toUpperCase() &&
            (e = i.currentScript.src),
          !e)
        ) {
          var t = i.getElementsByTagName("script");
          if (t.length)
            for (
              var o = t.length - 1;
              o > -1 && (!e || !/^http(s?):/.test(e));
            )
              e = t[o--].src;
        }
        if (!e)
          throw new Error(
            "Automatic publicPath is not supported in this browser",
          );
        ((e = e
          .replace(/^blob:/, "")
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (r.p = e + "../../"));
      })(),
      (() => {
        var e = { 714: 0 };
        r.f.j = (i, t) => {
          var o = r.o(e, i) ? e[i] : void 0;
          if (0 !== o)
            if (o) t.push(o[2]);
            else {
              var n = new Promise((t, r) => (o = e[i] = [t, r]));
              t.push((o[2] = n));
              var s = r.p + r.u(i),
                a = new Error();
              r.l(
                s,
                (t) => {
                  if (r.o(e, i) && (0 !== (o = e[i]) && (e[i] = void 0), o)) {
                    var n = t && ("load" === t.type ? "missing" : t.type),
                      s = t && t.target && t.target.src;
                    ((a.message =
                      "Loading chunk " +
                      i +
                      " failed.\n(" +
                      n +
                      ": " +
                      s +
                      ")"),
                      (a.name = "ChunkLoadError"),
                      (a.type = n),
                      (a.request = s),
                      o[1](a));
                  }
                },
                "chunk-" + i,
                i,
              );
            }
        };
        var i = (i, t) => {
            var o,
              n,
              [s, a, c] = t,
              l = 0;
            if (s.some((i) => 0 !== e[i])) {
              for (o in a) r.o(a, o) && (r.m[o] = a[o]);
              c && c(r);
            }
            for (i && i(t); l < s.length; l++)
              ((n = s[l]), r.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
          },
          t = (this.webpackChunkSonnetSentry =
            this.webpackChunkSonnetSentry || []);
        (t.forEach(i.bind(null, 0)), (t.push = i.bind(null, t.push.bind(t))));
      })());
    var n,
      s,
      a,
      c,
      l,
      d,
      h,
      u = {};
    (r.r(u), r.d(u, { default: () => qi }));
    class p {
      constructor(e) {
        this.type = e;
      }
    }
    (!(function (e) {
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
    })(n || (n = {})),
      (function (e) {
        ((e.Http = "Http"),
          (e.Click = "Click"),
          (e.Route = "Route"),
          (e.Resource = "Resource"),
          (e.CodeError = "Code Error"),
          (e.Custom = "Custom"));
      })(s || (s = {})),
      (function (e) {
        ((e.Error = "Error"), (e.OK = "OK"));
      })(a || (a = {})),
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
      })(c || (c = {})),
      (function (e) {
        ((e.Xhr = "XMLHttpRequest"), (e.Fetch = "fetch"));
      })(l || (l = {})),
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
      })(d || (d = {})),
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
      })(h || (h = {})));
    const w = JSON.parse('{"UU":"sonnet-sentry","rE":"1.0.0"}'),
      { UU: b, rE: f } = w,
      m = "unknown",
      g = {
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
          c.Error,
          c.Xhr,
          c.Fetch,
          c.Resource,
          c.UnhandledRejection,
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
    class v {
      get size() {
        return this.heap.length;
      }
      constructor(e = 30, i = []) {
        if (
          ((this.capacity = 30),
          (this.heap = []),
          (this.capacity = e),
          (this.heap = i.slice(0, e)),
          this.buildHeap(),
          i.length > e)
        ) {
          const t = i.slice(e);
          for (const e of t)
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
          const i = Math.floor((e - 1) / 2);
          if (this.heap[i].timestamp <= this.heap[e].timestamp) break;
          (([this.heap[e], this.heap[i]] = [this.heap[i], this.heap[e]]),
            (e = i));
        }
      }
      heapifyDown(e) {
        for (;;) {
          let i = e;
          const t = 2 * e + 1,
            o = 2 * e + 2;
          if (
            (t < this.size &&
              this.heap[t].timestamp < this.heap[i].timestamp &&
              (i = t),
            o < this.size &&
              this.heap[o].timestamp < this.heap[i].timestamp &&
              (i = o),
            i === e)
          )
            break;
          (([this.heap[e], this.heap[i]] = [this.heap[i], this.heap[e]]),
            (e = i));
        }
      }
      buildHeap() {
        const e = this.size - 1;
        for (let i = Math.floor((e - 1) / 2); i >= 0; i--) this.heapifyDown(i);
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
    class y {
      constructor() {
        ((this.cbList = []), (this.isFlushing = !1));
      }
      push(e, i, ...t) {
        "function" == typeof e && this.callByRequestIdleCallback(e, i, ...t);
      }
      callByRequestIdleCallback(e, i, ...t) {
        (this.cbList.push(e.bind(i, ...t)),
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
    const k = "sonnet_sentry_device_id",
      S = "sonnet_sentry_session_id";
    function x() {
      try {
        let e = localStorage.getItem(k);
        return (
          e || ((e = crypto.randomUUID()), localStorage.setItem(k, e)),
          e
        );
      } catch (e) {
        return crypto.randomUUID();
      }
    }
    function C() {
      try {
        let e = sessionStorage.getItem(S);
        return (
          e || ((e = crypto.randomUUID()), sessionStorage.setItem(S, e)),
          e
        );
      } catch (e) {
        return crypto.randomUUID();
      }
    }
    var T,
      E = "user-agent",
      R = "",
      O = "function",
      I = "object",
      U = "string",
      P = "undefined",
      D = "browser",
      _ = "cpu",
      M = "device",
      j = "engine",
      q = "os",
      z = "result",
      L = "name",
      N = "type",
      A = "vendor",
      H = "version",
      B = "architecture",
      F = "major",
      $ = "model",
      V = "console",
      W = "mobile",
      G = "tablet",
      X = "smarttv",
      K = "wearable",
      J = "xr",
      Q = "embedded",
      Y = "inapp",
      Z = "brands",
      ee = "formFactors",
      ie = "fullVersionList",
      te = "platform",
      oe = "platformVersion",
      re = "bitness",
      ne = "sec-ch-ua",
      se = ne + "-full-version-list",
      ae = ne + "-arch",
      ce = ne + "-" + re,
      le = ne + "-form-factors",
      de = ne + "-" + W,
      he = ne + "-" + $,
      ue = ne + "-" + te,
      pe = ue + "-version",
      we = [Z, ie, W, $, te, oe, B, ee, re],
      be = "Amazon",
      fe = "Apple",
      me = "ASUS",
      ge = "BlackBerry",
      ve = "Google",
      ye = "Huawei",
      ke = "Lenovo",
      Se = "Honor",
      xe = "LG",
      Ce = "Microsoft",
      Te = "Motorola",
      Ee = "Nvidia",
      Re = "OnePlus",
      Oe = "OPPO",
      Ie = "Samsung",
      Ue = "Sharp",
      Pe = "Sony",
      De = "Xiaomi",
      _e = "Zebra",
      Me = "Chrome",
      je = "Chromium",
      qe = "Chromecast",
      ze = "Edge",
      Le = "Firefox",
      Ne = "Opera",
      Ae = "Facebook",
      He = "Sogou",
      Be = "Mobile ",
      Fe = " Browser",
      $e = "Windows",
      Ve = typeof window !== P && window.navigator ? window.navigator : void 0,
      We = Ve && Ve.userAgentData ? Ve.userAgentData : void 0,
      Ge = function (e) {
        for (var i = {}, t = 0; t < e.length; t++) i[e[t].toUpperCase()] = e[t];
        return i;
      },
      Xe = function (e, i) {
        if (typeof e === I && e.length > 0) {
          for (var t in e) if (Ye(i) == Ye(e[t])) return !0;
          return !1;
        }
        return !!Je(e) && Ye(i) == Ye(e);
      },
      Ke = function (e, i) {
        for (var t in e)
          return (
            /^(browser|cpu|device|engine|os)$/.test(t) || (!!i && Ke(e[t]))
          );
      },
      Je = function (e) {
        return typeof e === U;
      },
      Qe = function (e) {
        if (e) {
          for (
            var i = [], t = ii(/\\?\"/g, e).split(","), o = 0;
            o < t.length;
            o++
          )
            if (t[o].indexOf(";") > -1) {
              var r = oi(t[o]).split(";v=");
              i[o] = { brand: r[0], version: r[1] };
            } else i[o] = oi(t[o]);
          return i;
        }
      },
      Ye = function (e) {
        return Je(e) ? e.toLowerCase() : e;
      },
      Ze = function (e) {
        return Je(e) ? ii(/[^\d\.]/g, e).split(".")[0] : void 0;
      },
      ei = function (e) {
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var t = e[i];
            typeof t == I && 2 == t.length
              ? (this[t[0]] = t[1])
              : (this[t] = void 0);
          }
        return this;
      },
      ii = function (e, i) {
        return Je(i) ? i.replace(e, R) : i;
      },
      ti = function (e) {
        return ii(/\\?\"/g, e);
      },
      oi = function (e, i) {
        return (
          (e = ii(/^\s\s*/, String(e))),
          typeof i === P ? e : e.substring(0, i)
        );
      },
      ri = function (e, i) {
        if (e && i)
          for (var t, o, r, n, s, a, c = 0; c < i.length && !s; ) {
            var l = i[c],
              d = i[c + 1];
            for (t = o = 0; t < l.length && !s && l[t]; )
              if ((s = l[t++].exec(e)))
                for (r = 0; r < d.length; r++)
                  ((a = s[++o]),
                    typeof (n = d[r]) === I && n.length > 0
                      ? 2 === n.length
                        ? typeof n[1] == O
                          ? (this[n[0]] = n[1].call(this, a))
                          : (this[n[0]] = n[1])
                        : n.length >= 3 &&
                          (typeof n[1] !== O || (n[1].exec && n[1].test)
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
      ni = function (e, i) {
        for (var t in i)
          if (typeof i[t] === I && i[t].length > 0) {
            for (var o = 0; o < i[t].length; o++)
              if (Xe(i[t][o], e)) return "?" === t ? void 0 : t;
          } else if (Xe(i[t], e)) return "?" === t ? void 0 : t;
        return i.hasOwnProperty("*") ? i["*"] : e;
      },
      si = {
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
      ai = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
      },
      ci = {
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
      li = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [H, [L, Be + "Chrome"]],
          [/webview.+edge\/([\w\.]+)/i],
          [H, [L, ze + " WebView"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [H, [L, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [L, H],
          [/opios[\/ ]+([\w\.]+)/i],
          [H, [L, Ne + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [H, [L, Ne + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [H, [L, Ne]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [H, [L, "Baidu"]],
          [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
          [H, [L, "Maxthon"]],
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
          [L, H],
          [/quark(?:pc)?\/([-\w\.]+)/i],
          [H, [L, "Quark"]],
          [/\bddg\/([\w\.]+)/i],
          [H, [L, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [H, [L, "UCBrowser"]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i,
          ],
          [H, [L, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [H, [L, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [H, [L, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [H, [L, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [H, [L, "Smart " + ke + Fe]],
          [/(av(?:ast|g|ira))\/([\w\.]+)/i],
          [[L, /(.+)/, "$1 Secure" + Fe], H],
          [/norton\/([\w\.]+)/i],
          [H, [L, "Norton Private" + Fe]],
          [/\bfocus\/([\w\.]+)/i],
          [H, [L, Le + " Focus"]],
          [/ mms\/([\w\.]+)$/i],
          [H, [L, Ne + " Neon"]],
          [/ opt\/([\w\.]+)$/i],
          [H, [L, Ne + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [H, [L, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [H, [L, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [H, [L, Ne + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [H, [L, "MIUI" + Fe]],
          [/fxios\/([\w\.-]+)/i],
          [H, [L, Be + Le]],
          [/\bqihoobrowser\/?([\w\.]*)/i],
          [H, [L, "360"]],
          [/\b(qq)\/([\w\.]+)/i],
          [[L, /(.+)/, "$1Browser"], H],
          [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
          [[L, /(.+)/, "$1" + Fe], H],
          [/samsungbrowser\/([\w\.]+)/i],
          [H, [L, Ie + " Internet"]],
          [/metasr[\/ ]?([\d\.]+)/i],
          [H, [L, He + " Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [[L, He + " Mobile"], H],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
          ],
          [L, H],
          [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
          [L],
          [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
          [H, L],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[L, Ae], H, [N, Y]],
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
          [L, H, [N, Y]],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [H, [L, "GSA"], [N, Y]],
          [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
          [H, [L, "TikTok"], [N, Y]],
          [/\[(linkedin)app\]/i],
          [L, [N, Y]],
          [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
          [[L, /(.+)/, "Zalo"], H, [N, Y]],
          [/(chromium)[\/ ]([-\w\.]+)/i],
          [L, H],
          [/ome-(lighthouse)$/i],
          [L, [N, "fetcher"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [H, [L, Me + " Headless"]],
          [/wv\).+chrome\/([\w\.]+).+edgw\//i],
          [H, [L, ze + " WebView2"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[L, Me + " WebView"], H],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [H, [L, "Android" + Fe]],
          [/chrome\/([\w\.]+) mobile/i],
          [H, [L, Be + "Chrome"]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [L, H],
          [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
          [H, [L, Be + "Safari"]],
          [/iphone .*mobile(?:\/\w+ | ?)safari/i],
          [[L, Be + "Safari"]],
          [/version\/([\w\.\,]+) .*(safari)/i],
          [H, L],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [L, [H, "1"]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [L, H],
          [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
          [[L, Be + Le], H],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[L, "Netscape"], H],
          [/(wolvic|librewolf)\/([\w\.]+)/i],
          [L, H],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [H, [L, Le + " Reality"]],
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
          [L, [H, /_/g, "."]],
          [/(cobalt)\/([\w\.]+)/i],
          [L, [H, /[^\d\.]+./, R]],
        ],
        cpu: [
          [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
          [[B, "amd64"]],
          [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
          [[B, "ia32"]],
          [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
          [[B, "arm64"]],
          [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
          [[B, "armhf"]],
          [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
          [[B, "arm"]],
          [/ sun4\w[;\)]/i],
          [[B, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            /((ppc|powerpc)(64)?)( mac|;|\))/i,
            /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
          ],
          [[B, /ower/, R, Ye]],
          [/mc680.0/i],
          [[B, "68k"]],
          [/winnt.+\[axp/i],
          [[B, "alpha"]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [$, [A, Ie], [N, G]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [$, [A, Ie], [N, W]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
          [$, [A, fe], [N, W]],
          [
            /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
            /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i,
          ],
          [$, [A, fe], [N, G]],
          [/(macintosh);/i],
          [$, [A, fe]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [$, [A, Ue], [N, W]],
          [
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
          ],
          [$, [A, Se], [N, G]],
          [/honor([-\w ]+)[;\)]/i],
          [$, [A, Se], [N, W]],
          [
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
          ],
          [$, [A, ye], [N, G]],
          [
            /(?:huawei) ?([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i,
          ],
          [$, [A, ye], [N, W]],
          [
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
          ],
          [
            [$, /_/g, " "],
            [A, De],
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
            [$, /_/g, " "],
            [A, De],
            [N, W],
          ],
          [
            /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [$, [A, Re], [N, W]],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [$, [A, Oe], [N, W]],
          [/\b(opd2(\d{3}a?))(?: bui|\))/i],
          [
            $,
            [
              A,
              ni,
              { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Oe },
            ],
            [N, G],
          ],
          [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
          [$, [A, "BLU"], [N, W]],
          [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [$, [A, "Vivo"], [N, W]],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [$, [A, "Realme"], [N, W]],
          [
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
          ],
          [$, [A, ke], [N, G]],
          [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
          [$, [A, ke], [N, W]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
            /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
          ],
          [$, [A, Te], [N, W]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [$, [A, Te], [N, G]],
          [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [$, [A, xe], [N, G]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [$, [A, xe], [N, W]],
          [/(nokia) (t[12][01])/i],
          [A, $, [N, G]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i,
          ],
          [
            [$, /_/g, " "],
            [N, W],
            [A, "Nokia"],
          ],
          [/(pixel (c|tablet))\b/i],
          [$, [A, ve], [N, G]],
          [
            /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
          ],
          [$, [A, ve], [N, W]],
          [/(google) (pixelbook( go)?)/i],
          [A, $],
          [
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [$, [A, Pe], [N, W]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [$, "Xperia Tablet"],
            [A, Pe],
            [N, G],
          ],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [$, [A, be], [N, G]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [$, /(.+)/g, "Fire Phone $1"],
            [A, be],
            [N, W],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [$, A, [N, G]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
          [$, [A, ge], [N, W]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [$, [A, me], [N, G]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [$, [A, me], [N, W]],
          [/(nexus 9)/i],
          [$, [A, "HTC"], [N, G]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [A, [$, /_/g, " "], [N, W]],
          [
            /tcl (xess p17aa)/i,
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [$, [A, "TCL"], [N, G]],
          [
            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [$, [A, "TCL"], [N, W]],
          [/(itel) ((\w+))/i],
          [
            [A, Ye],
            $,
            [N, ni, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [$, [A, "Acer"], [N, G]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [$, [A, "Meizu"], [N, W]],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [$, [A, "Ulefone"], [N, W]],
          [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
          [$, [A, "Energizer"], [N, W]],
          [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
          [$, [A, "Cat"], [N, W]],
          [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
          [$, [A, "Smartfren"], [N, W]],
          [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
          [$, [A, "Nothing"], [N, W]],
          [
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
          ],
          [$, [A, "Archos"], [N, G]],
          [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
          [$, [A, "Archos"], [N, W]],
          [/; (n159v)/i],
          [$, [A, "HMD"], [N, W]],
          [
            /(imo) (tab \w+)/i,
            /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i,
          ],
          [A, $, [N, G]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
            /(hp) ([\w ]+\w)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(oppo) ?([\w ]+) bui/i,
            /(hisense) ([ehv][\w ]+)\)/i,
            /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
          ],
          [A, $, [N, W]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
          ],
          [A, $, [N, G]],
          [/(surface duo)/i],
          [$, [A, Ce], [N, G]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [$, [A, "Fairphone"], [N, W]],
          [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
          [$, [A, Ee], [N, G]],
          [/(sprint) (\w+)/i],
          [A, $, [N, W]],
          [/(kin\.[onetw]{3})/i],
          [
            [$, /\./g, " "],
            [A, Ce],
            [N, W],
          ],
          [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [$, [A, _e], [N, G]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [$, [A, _e], [N, W]],
          [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
          [A, [N, X]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [$, /^/, "SmartTV"],
            [A, Ie],
            [N, X],
          ],
          [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
          [A, $, [N, X]],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [A, xe],
            [N, X],
          ],
          [/(apple) ?tv/i],
          [A, [$, fe + " TV"], [N, X]],
          [/crkey.*devicetype\/chromecast/i],
          [
            [$, qe + " Third Generation"],
            [A, ve],
            [N, X],
          ],
          [/crkey.*devicetype\/([^/]*)/i],
          [
            [$, /^/, "Chromecast "],
            [A, ve],
            [N, X],
          ],
          [/fuchsia.*crkey/i],
          [
            [$, qe + " Nest Hub"],
            [A, ve],
            [N, X],
          ],
          [/crkey/i],
          [
            [$, qe],
            [A, ve],
            [N, X],
          ],
          [/(portaltv)/i],
          [$, [A, Ae], [N, X]],
          [/droid.+aft(\w+)( bui|\))/i],
          [$, [A, be], [N, X]],
          [/(shield \w+ tv)/i],
          [$, [A, Ee], [N, X]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [$, [A, Ue], [N, X]],
          [/(bravia[\w ]+)( bui|\))/i],
          [$, [A, Pe], [N, X]],
          [/(mi(tv|box)-?\w+) bui/i],
          [$, [A, De], [N, X]],
          [/Hbbtv.*(technisat) (.*);/i],
          [A, $, [N, X]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
          ],
          [
            [A, /.+\/(\w+)/, "$1", ni, { LG: "lge" }],
            [$, oi],
            [N, X],
          ],
          [/(playstation \w+)/i],
          [$, [A, Pe], [N, V]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [$, [A, Ce], [N, V]],
          [
            /(ouya)/i,
            /(nintendo) (\w+)/i,
            /(retroid) (pocket ([^\)]+))/i,
            /(valve).+(steam deck)/i,
            /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
          ],
          [
            [
              A,
              ni,
              { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" },
            ],
            $,
            [N, V],
          ],
          [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
          [$, [A, Ie], [N, K]],
          [
            /((pebble))app/i,
            /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
          ],
          [A, $, [N, K]],
          [/(ow(?:19|20)?we?[1-3]{1,3})/i],
          [$, [A, Oe], [N, K]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [$, [A, fe], [N, K]],
          [/(opwwe\d{3})/i],
          [$, [A, Re], [N, K]],
          [/(moto 360)/i],
          [$, [A, Te], [N, K]],
          [/(smartwatch 3)/i],
          [$, [A, Pe], [N, K]],
          [/(g watch r)/i],
          [$, [A, xe], [N, K]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [$, [A, _e], [N, K]],
          [/droid.+; (glass) \d/i],
          [$, [A, ve], [N, J]],
          [/(pico) ([\w ]+) os\d/i],
          [A, $, [N, J]],
          [/(quest( \d| pro)?s?).+vr/i],
          [$, [A, Ae], [N, J]],
          [/mobile vr; rv.+firefox/i],
          [[N, J]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [A, [N, Q]],
          [/(aeobc)\b/i],
          [$, [A, be], [N, Q]],
          [/(homepod).+mac os/i],
          [$, [A, fe], [N, Q]],
          [/windows iot/i],
          [[N, Q]],
          [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
          [$, [N, X]],
          [
            /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i,
          ],
          [[N, X]],
          [
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i,
          ],
          [$, [N, ni, { mobile: "Mobile", xr: "VR", "*": G }]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[N, G]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[N, W]],
          [/droid .+?; ([\w\. -]+)( bui|\))/i],
          [$, [A, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [H, [L, ze + "HTML"]],
          [/(arkweb)\/([\w\.]+)/i],
          [L, H],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [H, [L, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [L, H],
          [/ladybird\//i],
          [[L, "LibWeb"]],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [H, L],
        ],
        os: [
          [/(windows nt) (6\.[23]); arm/i],
          [
            [L, /N/, "R"],
            [H, ni, si],
          ],
          [
            /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
            /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
          ],
          [L, H],
          [
            /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
            /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i,
          ],
          [
            [H, /(;|\))/g, "", ni, si],
            [L, $e],
          ],
          [/(windows ce)\/?([\d\.]*)/i],
          [L, H],
          [
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
            /\btvos ?([\w\.]+)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [H, /_/g, "."],
            [L, "iOS"],
          ],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i,
          ],
          [
            [L, "macOS"],
            [H, /_/g, "."],
          ],
          [/android ([\d\.]+).*crkey/i],
          [H, [L, qe + " Android"]],
          [/fuchsia.*crkey\/([\d\.]+)/i],
          [H, [L, qe + " Fuchsia"]],
          [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
          [H, [L, qe + " SmartSpeaker"]],
          [/linux.*crkey\/([\d\.]+)/i],
          [H, [L, qe + " Linux"]],
          [/crkey\/([\d\.]+)/i],
          [H, [L, qe]],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [H, L],
          [/(ubuntu) ([\w\.]+) like android/i],
          [[L, /(.+)/, "$1 Touch"], H],
          [
            /(harmonyos)[\/ ]?([\d\.]*)/i,
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
          ],
          [L, H],
          [/\(bb(10);/i],
          [H, [L, ge]],
          [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
          [H, [L, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
          ],
          [H, [L, Le + " OS"]],
          [
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
            /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i,
          ],
          [H, [L, "webOS"]],
          [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
          [
            [
              H,
              ni,
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
            [L, "webOS"],
          ],
          [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
          [H, [L, "watchOS"]],
          [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
          [H, [L, "Chrome OS"]],
          [/kepler ([\w\.]+); (aft|aeo)/i],
          [H, [L, "Vega OS"]],
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
          [L, H],
          [/(sunos) ?([\d\.]*)/i],
          [[L, "Solaris"], H],
          [
            /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [L, H],
        ],
      },
      di =
        (ei.call(
          (T = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }).init,
          [
            [D, [L, H, F, N]],
            [_, [B]],
            [M, [N, $, A]],
            [j, [L, H]],
            [q, [L, H]],
          ],
        ),
        ei.call(T.isIgnore, [
          [D, [H, F]],
          [j, [H]],
          [q, [H]],
        ]),
        ei.call(T.isIgnoreRgx, [
          [D, / ?browser$/i],
          [q, / ?os$/i],
        ]),
        ei.call(T.toString, [
          [D, [L, H]],
          [_, [B]],
          [M, [A, $]],
          [j, [L, H]],
          [q, [L, H]],
        ]),
        T),
      hi = function (e, i) {
        var t = di.init[i],
          o = di.isIgnore[i] || 0,
          r = di.isIgnoreRgx[i] || 0,
          n = di.toString[i] || 0;
        function s() {
          ei.call(this, t);
        }
        return (
          (s.prototype.getItem = function () {
            return e;
          }),
          (s.prototype.withClientHints = function () {
            return We
              ? We.getHighEntropyValues(we).then(function (i) {
                  return e.setCH(new ui(i, !1)).parseCH().get();
                })
              : e.parseCH().get();
          }),
          (s.prototype.withFeatureCheck = function () {
            return e.detectFeature().get();
          }),
          i != z &&
            ((s.prototype.is = function (e) {
              var i = !1;
              for (var t in this)
                if (
                  this.hasOwnProperty(t) &&
                  !Xe(o, t) &&
                  Ye(r ? ii(r, this[t]) : this[t]) == Ye(r ? ii(r, e) : e)
                ) {
                  if (((i = !0), e != P)) break;
                } else if (e == P && i) {
                  i = !i;
                  break;
                }
              return i;
            }),
            (s.prototype.toString = function () {
              var e = R;
              for (var i in n)
                typeof this[n[i]] !== P && (e += (e ? " " : R) + this[n[i]]);
              return e || P;
            })),
          (s.prototype.then = function (e) {
            var i = this,
              t = function () {
                for (var e in i) i.hasOwnProperty(e) && (this[e] = i[e]);
              };
            t.prototype = {
              is: s.prototype.is,
              toString: s.prototype.toString,
              withClientHints: s.prototype.withClientHints,
              withFeatureCheck: s.prototype.withFeatureCheck,
            };
            var o = new t();
            return (e(o), o);
          }),
          new s()
        );
      };
    function ui(e, i) {
      if (((e = e || {}), ei.call(this, we), i))
        ei.call(this, [
          [Z, Qe(e[ne])],
          [ie, Qe(e[se])],
          [W, /\?1/.test(e[de])],
          [$, ti(e[he])],
          [te, ti(e[ue])],
          [oe, ti(e[pe])],
          [B, ti(e[ae])],
          [ee, Qe(e[le])],
          [re, ti(e[ce])],
        ]);
      else
        for (var t in e)
          this.hasOwnProperty(t) && typeof e[t] !== P && (this[t] = e[t]);
    }
    function pi(e, i, t, o) {
      return (
        ei.call(this, [
          ["itemType", e],
          ["ua", i],
          ["uaCH", o],
          ["rgxMap", t],
          ["data", hi(this, e)],
        ]),
        this
      );
    }
    function wi(e, i, t) {
      if (
        (typeof e === I
          ? (Ke(e, !0)
              ? (typeof i === I && (t = i), (i = e))
              : ((t = e), (i = void 0)),
            (e = void 0))
          : typeof e !== U || Ke(i, !0) || ((t = i), (i = void 0)),
        t)
      )
        if (typeof t.append === O) {
          var o = {};
          (t.forEach(function (e, i) {
            o[String(i).toLowerCase()] = e;
          }),
            (t = o));
        } else {
          var r = {};
          for (var n in t)
            t.hasOwnProperty(n) && (r[String(n).toLowerCase()] = t[n]);
          t = r;
        }
      if (!(this instanceof wi)) return new wi(e, i, t).getResult();
      var s =
          typeof e === U
            ? e
            : t && t[E]
              ? t[E]
              : Ve && Ve.userAgent
                ? Ve.userAgent
                : R,
        a = new ui(t, !0),
        c = i
          ? (function (e, i) {
              var t = {},
                o = i;
              if (!Ke(i))
                for (var r in ((o = {}), i))
                  for (var n in i[r]) o[n] = i[r][n].concat(o[n] ? o[n] : []);
              for (var s in e)
                t[s] = o[s] && o[s].length % 2 == 0 ? o[s].concat(e[s]) : e[s];
              return t;
            })(li, i)
          : li,
        l = function (e) {
          return e == z
            ? function () {
                return new pi(e, s, c, a)
                  .set("ua", s)
                  .set(D, this.getBrowser())
                  .set(_, this.getCPU())
                  .set(M, this.getDevice())
                  .set(j, this.getEngine())
                  .set(q, this.getOS())
                  .get();
              }
            : function () {
                return new pi(e, s, c[e], a).parseUA().get();
              };
        };
      return (
        ei
          .call(this, [
            ["getBrowser", l(D)],
            ["getCPU", l(_)],
            ["getDevice", l(M)],
            ["getEngine", l(j)],
            ["getOS", l(q)],
            ["getResult", l(z)],
            [
              "getUA",
              function () {
                return s;
              },
            ],
            [
              "setUA",
              function (e) {
                return (Je(e) && (s = oi(e, 500)), this);
              },
            ],
          ])
          .setUA(s),
        this
      );
    }
    ((pi.prototype.get = function (e) {
      return e
        ? this.data.hasOwnProperty(e)
          ? this.data[e]
          : void 0
        : this.data;
    }),
      (pi.prototype.set = function (e, i) {
        return ((this.data[e] = i), this);
      }),
      (pi.prototype.setCH = function (e) {
        return ((this.uaCH = e), this);
      }),
      (pi.prototype.detectFeature = function () {
        if (Ve && Ve.userAgent == this.ua)
          switch (this.itemType) {
            case D:
              Ve.brave && typeof Ve.brave.isBrave == O && this.set(L, "Brave");
              break;
            case M:
              (!this.get(N) && We && We[W] && this.set(N, W),
                "Macintosh" == this.get($) &&
                  Ve &&
                  typeof Ve.standalone !== P &&
                  Ve.maxTouchPoints &&
                  Ve.maxTouchPoints > 2 &&
                  this.set($, "iPad").set(N, G));
              break;
            case q:
              !this.get(L) && We && We[te] && this.set(L, We[te]);
              break;
            case z:
              var e = this.data,
                i = function (i) {
                  return e[i].getItem().detectFeature().get();
                };
              this.set(D, i(D))
                .set(_, i(_))
                .set(M, i(M))
                .set(j, i(j))
                .set(q, i(q));
          }
        return this;
      }),
      (pi.prototype.parseUA = function () {
        switch (
          (this.itemType != z && ri.call(this.data, this.ua, this.rgxMap),
          this.itemType)
        ) {
          case D:
            this.set(F, Ze(this.get(H)));
            break;
          case q:
            if ("iOS" == this.get(L) && "18.6" == this.get(H)) {
              var e = /\) Version\/([\d\.]+)/.exec(this.ua);
              e &&
                parseInt(e[1].substring(0, 2), 10) >= 26 &&
                this.set(H, e[1]);
            }
        }
        return this;
      }),
      (pi.prototype.parseCH = function () {
        var e = this.uaCH,
          i = this.rgxMap;
        switch (this.itemType) {
          case D:
          case j:
            var t,
              o = e[ie] || e[Z];
            if (o)
              for (var r = 0; r < o.length; r++) {
                var n = o[r].brand || o[r],
                  s = o[r].version;
                (this.itemType == D &&
                  !/not.a.brand/i.test(n) &&
                  (!t ||
                    (/Chrom/.test(t) && n != je) ||
                    (t == ze && /WebView2/.test(n))) &&
                  ((n = ni(n, ci)),
                  ((t = this.get(L)) && !/Chrom/.test(t) && /Chrom/.test(n)) ||
                    this.set(L, n).set(H, s).set(F, Ze(s)),
                  (t = n)),
                  this.itemType == j && n == je && this.set(H, s));
              }
            break;
          case _:
            var a = e[B];
            a &&
              (a && "64" == e[re] && (a += "64"),
              ri.call(this.data, a + ";", i));
            break;
          case M:
            if (
              (e[W] && this.set(N, W),
              e[$] && (this.set($, e[$]), !this.get(N) || !this.get(A)))
            ) {
              var c = {};
              (ri.call(c, "droid 9; " + e[$] + ")", i),
                !this.get(N) && c.type && this.set(N, c.type),
                !this.get(A) && c.vendor && this.set(A, c.vendor));
            }
            if (e[ee]) {
              var l;
              if ("string" != typeof e[ee])
                for (var d = 0; !l && d < e[ee].length; )
                  l = ni(e[ee][d++], ai);
              else l = ni(e[ee], ai);
              this.set(N, l);
            }
            break;
          case q:
            var h = e[te];
            if (h) {
              var u = e[oe];
              (h == $e && (u = parseInt(Ze(u), 10) >= 13 ? "11" : "10"),
                this.set(L, h).set(H, u));
            }
            this.get(L) == $e &&
              "Xbox" == e[$] &&
              this.set(L, "Xbox").set(H, void 0);
            break;
          case z:
            var p = this.data,
              w = function (i) {
                return p[i].getItem().setCH(e).parseCH().get();
              };
            this.set(D, w(D))
              .set(_, w(_))
              .set(M, w(M))
              .set(j, w(j))
              .set(q, w(q));
        }
        return this;
      }),
      (wi.VERSION = "2.0.9"),
      (wi.BROWSER = Ge([L, H, F, N])),
      (wi.CPU = Ge([B])),
      (wi.DEVICE = Ge([$, A, N, V, W, X, G, K, Q])),
      (wi.ENGINE = wi.OS = Ge([L, H])));
    var bi,
      fi,
      mi = function (e, i, t, o) {
        if ("a" === t && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof i ? e !== i || !o : !i.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : i.get(e);
      };
    function gi() {
      try {
        const e = document.createElement("canvas"),
          i = e.getContext("2d");
        if (i) {
          ((i.textBaseline = "top"),
            (i.font = "14px 'Arial'"),
            (i.fillStyle = "#f60"),
            i.fillRect(125, 1, 62, 20),
            (i.fillStyle = "#069"),
            i.fillText("sonnet-sentry", 2, 15),
            (i.fillStyle = "rgba(102, 204, 0, 0.7)"),
            i.fillText("sonnet-sentry", 4, 17));
          const t = e.toDataURL().replace("data:image/png;base64,", ""),
            o = atob(t),
            r = function (e) {
              let i = -1;
              for (let t = 0; t < e.length; t++)
                i = (i >>> 8) ^ e.charCodeAt(t);
              return (-1 ^ i) >>> 0;
            };
          return r(o).toString(16);
        }
      } catch (e) {}
      return crypto.randomUUID();
    }
    class vi {
      static get instance() {
        return (
          mi(this, bi, "f", fi) ||
            ((function (e, i, t, o, r) {
              if ("m" === o)
                throw new TypeError("Private method is not writable");
              if ("a" === o && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof i ? e !== i || !r : !i.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === o ? r.call(e, t) : r ? (r.value = t) : i.set(e, t);
            })(this, bi, new bi(), "f", fi),
            (globalThis.__sentry__ = mi(this, bi, "f", fi))),
          mi(this, bi, "f", fi)
        );
      }
      constructor() {
        var e, i, t, o, r, n;
        ((this.codeErrors = new Set()),
          (this.whiteScreenTimer = null),
          (this.options = g),
          (this.shouldRecordScreen = !1));
        const s = new wi().getResult();
        this.deviceInfo = {
          browserName: null !== (e = s.browser.name) && void 0 !== e ? e : m,
          browserVersion:
            null !== (i = s.browser.version) && void 0 !== i ? i : m,
          osName: null !== (t = s.os.name) && void 0 !== t ? t : m,
          osVersion: null !== (o = s.os.version) && void 0 !== o ? o : m,
          userAgent: s.ua,
          deviceModel: null !== (r = s.device.model) && void 0 !== r ? r : m,
          deviceType: null !== (n = s.device.type) && void 0 !== n ? n : m,
          fingerprint: gi(),
          language: navigator.language || m,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        };
      }
      setOptions(e) {
        mi(bi, bi, "f", fi).options = { ...this.options, ...e };
      }
    }
    ((bi = vi), (fi = { value: void 0 }));
    const yi = vi.instance,
      ki = "#74d4ff",
      Si = "#bbf45",
      xi = "#ffb869",
      Ci = "#ffa2a2",
      Ti = (e) =>
        `color: #62748e; background: ${e}; padding: 2px 6px; border-radius: 4px; font-weight: 600;`,
      Ei = (e) => `color: ${e}; font-weight: 600;`,
      Ri = {
        info: { title: Ti(ki), subtitle: Ei(ki) },
        success: { title: Ti(Si), subtitle: Ei(Si) },
        warn: { title: Ti(xi), subtitle: Ei(xi) },
        error: { title: Ti(Ci), subtitle: Ei(Ci) },
        timestamp: { label: "color: #dab2ff;", value: Ei(Si) },
      },
      Oi = {
        get isEnabled() {
          return !0;
        },
        info(e, i, t, o) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${i} `,
              Ri.info.title,
              Ri.info.subtitle,
            ),
            void 0 !== t &&
              (Array.isArray(t)
                ? o
                  ? console.table(t, o)
                  : console.table(t)
                : "object" == typeof t && null !== t
                  ? (console.group("Details"),
                    console.log(t),
                    console.groupEnd())
                  : console.log(t)),
            console.groupEnd());
        },
        success(e, i, t, o) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${i} `,
              Ri.success.title,
              Ri.success.subtitle,
            ),
            void 0 !== o &&
              console.log(
                "%cTime cost%c " + o + "ms",
                Ri.timestamp.label,
                Ri.timestamp.value,
              ),
            void 0 !== t &&
              (Array.isArray(t)
                ? console.table(t)
                : "object" == typeof t && null !== t
                  ? (console.group("Response Data"),
                    console.log(t),
                    console.groupEnd())
                  : console.log(t)),
            console.groupEnd());
        },
        warn(e, i, t) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${i} `,
              Ri.warn.title,
              Ri.warn.subtitle,
            ),
            void 0 !== t &&
              (Array.isArray(t)
                ? console.table(t)
                : "object" == typeof t && null !== t
                  ? (console.group("Warning Details"),
                    console.log(t),
                    console.groupEnd())
                  : console.log(t)),
            console.groupEnd());
        },
        error(e, i, t) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${i} `,
              Ri.error.title,
              Ri.error.subtitle,
            ),
            void 0 !== t &&
              (console.group("Error Details"),
              console.error(t),
              console.groupEnd()),
            console.groupEnd());
        },
      };
    var Ii,
      Ui,
      Pi = function (e, i, t, o) {
        if ("a" === t && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof i ? e !== i || !o : !i.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : i.get(e);
      };
    class Di {
      constructor() {
        ((this.cbQueue = new y()),
          (this.id = crypto.randomUUID()),
          (this.events = []),
          (this.isOnline = !0));
      }
      static get instance() {
        return (
          Pi(this, Ii, "f", Ui) ||
            ((function (e, i, t, o, r) {
              if ("m" === o)
                throw new TypeError("Private method is not writable");
              if ("a" === o && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof i ? e !== i || !r : !i.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === o ? r.call(e, t) : r ? (r.value = t) : i.set(e, t);
            })(this, Ii, new Ii(), "f", Ui),
            Pi(this, Ii, "f", Ui).initNetworkListener()),
          Pi(this, Ii, "f", Ui)
        );
      }
      initNetworkListener() {
        "undefined" != typeof window &&
          ((this.isOnline = !1 !== navigator.onLine),
          window.addEventListener("online", () => {
            ((this.isOnline = !0),
              Oi.info(
                "Sonnet Sentry",
                "Network is back online, flushing cache",
              ),
              this.loadOfflineCache(),
              this.flush());
          }),
          window.addEventListener("offline", () => {
            ((this.isOnline = !1),
              Oi.info("Sonnet Sentry", "Network is offline, caching events"));
          }));
      }
      loadOfflineCache() {
        try {
          const e = localStorage.getItem(yi.options.offlineCacheKey);
          if (e) {
            const i = JSON.parse(e);
            (Array.isArray(i) && this.events.unshift(...i),
              localStorage.removeItem(yi.options.offlineCacheKey));
          }
        } catch (e) {}
      }
      saveOfflineCache() {
        try {
          localStorage.setItem(
            yi.options.offlineCacheKey,
            JSON.stringify(this.events),
          );
        } catch (e) {}
      }
      isObjectOverSizeLimit(e, i) {
        return new Blob([JSON.stringify(e)]).size > 1024 * i;
      }
      sendBeacon(e) {
        return (
          !("undefined" == typeof navigator || !navigator.sendBeacon) &&
          navigator.sendBeacon(yi.options.dsn, JSON.stringify(e))
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
        fetch(yi.options.dsn, { method: "HEAD" })
          .then((e) => {
            e.ok
              ? ((this.isOnline = !0),
                Oi.info(
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
          fetch(yi.options.dsn, {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json" },
            keepalive: !0,
          })
            .then((e) => {
              e.ok || this.handleServerError();
            })
            .catch((e) => {
              (Oi.error("Sonnet Sentry Report", "Fetch report failed", e),
                this.handleServerError());
            });
        });
      }
      reportByImage(e) {
        const { dsn: i } = yi.options;
        this.cbQueue.push(() => {
          const t = new Image(),
            o = i.includes("?") ? "&" : "?";
          t.src = `${i}${o}data=${encodeURIComponent(JSON.stringify(e))}`;
        });
      }
      payload2reportData(e) {
        const {
          type: i,
          name: t,
          time: o,
          timestamp: r,
          message: n,
          status: s,
        } = e;
        return {
          type: i,
          name: t,
          time: o,
          timestamp: r,
          message: n,
          status: s,
          id: this.id,
          url: location.href,
          userId: yi.options.userId,
          projectId: yi.options.projectId,
          sdkVersion: f,
          deviceInfo: yi.deviceInfo,
          payload: e,
        };
      }
      flush() {
        if (0 === this.events.length) return;
        if (!this.isOnline)
          return (
            this.events.length > yi.options.maxQueueLength &&
              (this.events = this.events.slice(-yi.options.maxQueueLength)),
            void this.saveOfflineCache()
          );
        const e = yi.options.cacheMaxLength,
          i = this.events.slice(0, e);
        this.events = this.events.slice(e);
        const t = performance.now(),
          o = this.isObjectOverSizeLimit(i, 60);
        let r = !1;
        (o || (r = this.sendBeacon(i)),
          r ||
            (yi.options.useImageReport && !this.isObjectOverSizeLimit(i, 2)
              ? this.reportByImage(i)
              : this.reportByFetch(i)),
          Oi.success(
            "Sonnet Sentry Report",
            "Batch report queued or sent",
            { count: i.length, overSize: o },
            Math.round(performance.now() - t),
          ),
          this.events.length > 0 &&
            (this.timeoutID && clearTimeout(this.timeoutID),
            (this.timeoutID = setTimeout(() => this.flush(), 100))));
      }
      async send(e, i = !1) {
        const {
          dsn: t,
          screenRecordEventTypes: o,
          onBeforeReportData: r,
          cacheMaxLength: n,
          cacheWaitingTime: s,
          maxQueueLength: a,
          tracesSampleRate: c,
        } = yi.options;
        if ("" === t)
          return void Oi.error(
            "Sonnet Sentry",
            "DSN is empty, report cancelled",
            e,
          );
        if (Math.random() > c)
          return void Oi.info(
            "Sonnet Sentry Report",
            `Dropped by sample rate: ${e.type}`,
          );
        o.includes(e.type) && (yi.shouldRecordScreen = !0);
        let l = this.payload2reportData(e);
        if (!r || ((l = await r(l)), l)) {
          if (
            (Oi.info("Sonnet Sentry Report", `Type: ${e.type}`, l),
            this.events.push(l),
            !this.isOnline)
          )
            return (
              this.events.length > a && (this.events = this.events.slice(-a)),
              void this.saveOfflineCache()
            );
          (this.timeoutID && clearTimeout(this.timeoutID),
            i || this.events.length >= n
              ? this.flush()
              : (this.timeoutID = setTimeout(() => this.flush(), s)));
        }
      }
    }
    ((Ii = Di), (Ui = { value: void 0 }));
    const _i = Di.instance;
    let Mi = null;
    function ji(e) {
      if (!e || !Mi) return "";
      const i = JSON.stringify(e),
        t = Mi.gzip(i);
      return btoa(String.fromCharCode(...t));
    }
    const qi = class extends p {
      constructor(
        e = {
          durationMs: g.screenRecordDurationMs,
          eventTypes: g.screenRecordEventTypes,
        },
      ) {
        (super(c.ScreenRecord),
          (this.durationMs = g.screenRecordDurationMs),
          (this.eventTypes = g.screenRecordEventTypes));
        const {
          durationMs: i = g.screenRecordDurationMs,
          eventTypes: t = g.screenRecordEventTypes,
        } = e;
        ((this.durationMs = i), (this.eventTypes = t));
      }
      init() {
        ((yi.options.enableScreenRecord = !0),
          (yi.options.screenRecordEventTypes = this.eventTypes),
          (yi.options.screenRecordDurationMs = this.durationMs),
          (async function (e) {
            Oi.info(
              "Sonnet Sentry ScreenRecord",
              "Initializing rrweb recorder...",
            );
            try {
              const [{ record: i }, t] = await Promise.all([
                r.e(936).then(r.bind(r, 936)),
                r.e(973).then(r.bind(r, 973)),
              ]);
              Mi = t.default || t;
              const o = new v();
              i({
                emit(i, t) {
                  if (t)
                    if (yi.shouldRecordScreen) {
                      const t = {
                        id: crypto.randomUUID ? crypto.randomUUID() : x(),
                        deviceId: x(),
                        sessionId: C(),
                        message: "",
                        timestamp: Date.now(),
                        time: new Date().toISOString(),
                        name: "",
                        status: a.OK,
                        type: c.Custom,
                        name: "ScreenRecord",
                        type: c.ScreenRecord,
                        event: ji(i),
                      };
                      (Oi.success(
                        "Sonnet Sentry ScreenRecord",
                        "Screen record packaged and sent",
                        { eventLength: t.event.length },
                      ),
                        e.send(t),
                        (yi.shouldRecordScreen = !1));
                    } else o.clear();
                  o.push(i);
                },
                recordCanvas: !0,
                checkoutEveryNms: yi.options.screenRecordDurationMs,
              });
            } catch (e) {
              Oi.error(
                "Sonnet Sentry ScreenRecord",
                "Failed to load rrweb/pako",
                e,
              );
            }
          })(_i));
      }
    };
    return u;
  })(),
);
