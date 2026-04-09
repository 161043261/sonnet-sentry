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
    var e,
      t,
      i,
      o,
      r,
      n,
      s,
      a = {
        d: (e, t) => {
          for (var i in t)
            a.o(t, i) &&
              !a.o(e, i) &&
              Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          ("undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 }));
        },
      },
      c = {};
    (a.r(c), a.d(c, { default: () => Si }));
    class l {
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
    })(e || (e = {})),
      (function (e) {
        ((e.Http = "Http"),
          (e.Click = "Click"),
          (e.Route = "Route"),
          (e.Resource = "Resource"),
          (e.CodeError = "Code Error"),
          (e.Custom = "Custom"));
      })(t || (t = {})),
      (function (e) {
        ((e.Error = "Error"), (e.OK = "OK"));
      })(i || (i = {})),
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
      })(o || (o = {})),
      (function (e) {
        ((e.Xhr = "XMLHttpRequest"), (e.Fetch = "fetch"));
      })(r || (r = {})),
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
      })(n || (n = {})),
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
      })(s || (s = {})));
    const d = JSON.parse('{"UU":"sonnet-sentry","rE":"1.0.0"}'),
      { UU: u, rE: h } = d,
      p = "unknown",
      m = {
        dsn: "",
        projectId: p,
        userId: p,
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
          o.Error,
          o.Xhr,
          o.Fetch,
          o.Resource,
          o.UnhandledRejection,
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
    const w = "sonnet_sentry_device_id",
      f = "sonnet_sentry_session_id";
    function g() {
      try {
        let e = localStorage.getItem(w);
        return (
          e || ((e = crypto.randomUUID()), localStorage.setItem(w, e)),
          e
        );
      } catch (e) {
        return crypto.randomUUID();
      }
    }
    function v() {
      try {
        let e = sessionStorage.getItem(f);
        return (
          e || ((e = crypto.randomUUID()), sessionStorage.setItem(f, e)),
          e
        );
      } catch (e) {
        return crypto.randomUUID();
      }
    }
    const y = function () {
      return {
        id: crypto.randomUUID ? crypto.randomUUID() : g(),
        deviceId: g(),
        sessionId: v(),
        message: "",
        timestamp: Date.now(),
        time: new Date().toISOString(),
        name: "",
        status: i.OK,
        type: o.Custom,
      };
    };
    var k,
      x = "user-agent",
      S = "",
      T = "function",
      C = "object",
      E = "string",
      I = "undefined",
      O = "browser",
      L = "cpu",
      R = "device",
      P = "engine",
      M = "os",
      A = "result",
      U = "name",
      q = "type",
      _ = "vendor",
      N = "version",
      F = "architecture",
      D = "major",
      H = "model",
      j = "console",
      B = "mobile",
      z = "tablet",
      $ = "smarttv",
      V = "wearable",
      W = "xr",
      G = "embedded",
      X = "inapp",
      K = "brands",
      Q = "formFactors",
      J = "fullVersionList",
      Y = "platform",
      Z = "platformVersion",
      ee = "bitness",
      te = "sec-ch-ua",
      ie = te + "-full-version-list",
      oe = te + "-arch",
      re = te + "-" + ee,
      ne = te + "-form-factors",
      se = te + "-" + B,
      ae = te + "-" + H,
      ce = te + "-" + Y,
      le = ce + "-version",
      de = [K, J, B, H, Y, Z, F, Q, ee],
      ue = "Amazon",
      he = "Apple",
      pe = "ASUS",
      me = "BlackBerry",
      be = "Google",
      we = "Huawei",
      fe = "Lenovo",
      ge = "Honor",
      ve = "LG",
      ye = "Microsoft",
      ke = "Motorola",
      xe = "Nvidia",
      Se = "OnePlus",
      Te = "OPPO",
      Ce = "Samsung",
      Ee = "Sharp",
      Ie = "Sony",
      Oe = "Xiaomi",
      Le = "Zebra",
      Re = "Chrome",
      Pe = "Chromium",
      Me = "Chromecast",
      Ae = "Edge",
      Ue = "Firefox",
      qe = "Opera",
      _e = "Facebook",
      Ne = "Sogou",
      Fe = "Mobile ",
      De = " Browser",
      He = "Windows",
      je = typeof window !== I && window.navigator ? window.navigator : void 0,
      Be = je && je.userAgentData ? je.userAgentData : void 0,
      ze = function (e) {
        for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
        return t;
      },
      $e = function (e, t) {
        if (typeof e === C && e.length > 0) {
          for (var i in e) if (Xe(t) == Xe(e[i])) return !0;
          return !1;
        }
        return !!We(e) && Xe(t) == Xe(e);
      },
      Ve = function (e, t) {
        for (var i in e)
          return (
            /^(browser|cpu|device|engine|os)$/.test(i) || (!!t && Ve(e[i]))
          );
      },
      We = function (e) {
        return typeof e === E;
      },
      Ge = function (e) {
        if (e) {
          for (
            var t = [], i = Je(/\\?\"/g, e).split(","), o = 0;
            o < i.length;
            o++
          )
            if (i[o].indexOf(";") > -1) {
              var r = Ze(i[o]).split(";v=");
              t[o] = { brand: r[0], version: r[1] };
            } else t[o] = Ze(i[o]);
          return t;
        }
      },
      Xe = function (e) {
        return We(e) ? e.toLowerCase() : e;
      },
      Ke = function (e) {
        return We(e) ? Je(/[^\d\.]/g, e).split(".")[0] : void 0;
      },
      Qe = function (e) {
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var i = e[t];
            typeof i == C && 2 == i.length
              ? (this[i[0]] = i[1])
              : (this[i] = void 0);
          }
        return this;
      },
      Je = function (e, t) {
        return We(t) ? t.replace(e, S) : t;
      },
      Ye = function (e) {
        return Je(/\\?\"/g, e);
      },
      Ze = function (e, t) {
        return (
          (e = Je(/^\s\s*/, String(e))),
          typeof t === I ? e : e.substring(0, t)
        );
      },
      et = function (e, t) {
        if (e && t)
          for (var i, o, r, n, s, a, c = 0; c < t.length && !s; ) {
            var l = t[c],
              d = t[c + 1];
            for (i = o = 0; i < l.length && !s && l[i]; )
              if ((s = l[i++].exec(e)))
                for (r = 0; r < d.length; r++)
                  ((a = s[++o]),
                    typeof (n = d[r]) === C && n.length > 0
                      ? 2 === n.length
                        ? typeof n[1] == T
                          ? (this[n[0]] = n[1].call(this, a))
                          : (this[n[0]] = n[1])
                        : n.length >= 3 &&
                          (typeof n[1] !== T || (n[1].exec && n[1].test)
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
      tt = function (e, t) {
        for (var i in t)
          if (typeof t[i] === C && t[i].length > 0) {
            for (var o = 0; o < t[i].length; o++)
              if ($e(t[i][o], e)) return "?" === i ? void 0 : i;
          } else if ($e(t[i], e)) return "?" === i ? void 0 : i;
        return t.hasOwnProperty("*") ? t["*"] : e;
      },
      it = {
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
      ot = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
      },
      rt = {
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
      nt = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [N, [U, Fe + "Chrome"]],
          [/webview.+edge\/([\w\.]+)/i],
          [N, [U, Ae + " WebView"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [N, [U, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [U, N],
          [/opios[\/ ]+([\w\.]+)/i],
          [N, [U, qe + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [N, [U, qe + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [N, [U, qe]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [N, [U, "Baidu"]],
          [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
          [N, [U, "Maxthon"]],
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
          [U, N],
          [/quark(?:pc)?\/([-\w\.]+)/i],
          [N, [U, "Quark"]],
          [/\bddg\/([\w\.]+)/i],
          [N, [U, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [N, [U, "UCBrowser"]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i,
          ],
          [N, [U, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [N, [U, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [N, [U, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [N, [U, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [N, [U, "Smart " + fe + De]],
          [/(av(?:ast|g|ira))\/([\w\.]+)/i],
          [[U, /(.+)/, "$1 Secure" + De], N],
          [/norton\/([\w\.]+)/i],
          [N, [U, "Norton Private" + De]],
          [/\bfocus\/([\w\.]+)/i],
          [N, [U, Ue + " Focus"]],
          [/ mms\/([\w\.]+)$/i],
          [N, [U, qe + " Neon"]],
          [/ opt\/([\w\.]+)$/i],
          [N, [U, qe + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [N, [U, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [N, [U, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [N, [U, qe + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [N, [U, "MIUI" + De]],
          [/fxios\/([\w\.-]+)/i],
          [N, [U, Fe + Ue]],
          [/\bqihoobrowser\/?([\w\.]*)/i],
          [N, [U, "360"]],
          [/\b(qq)\/([\w\.]+)/i],
          [[U, /(.+)/, "$1Browser"], N],
          [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
          [[U, /(.+)/, "$1" + De], N],
          [/samsungbrowser\/([\w\.]+)/i],
          [N, [U, Ce + " Internet"]],
          [/metasr[\/ ]?([\d\.]+)/i],
          [N, [U, Ne + " Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [[U, Ne + " Mobile"], N],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
          ],
          [U, N],
          [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
          [U],
          [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
          [N, U],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[U, _e], N, [q, X]],
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
          [U, N, [q, X]],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [N, [U, "GSA"], [q, X]],
          [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
          [N, [U, "TikTok"], [q, X]],
          [/\[(linkedin)app\]/i],
          [U, [q, X]],
          [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
          [[U, /(.+)/, "Zalo"], N, [q, X]],
          [/(chromium)[\/ ]([-\w\.]+)/i],
          [U, N],
          [/ome-(lighthouse)$/i],
          [U, [q, "fetcher"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [N, [U, Re + " Headless"]],
          [/wv\).+chrome\/([\w\.]+).+edgw\//i],
          [N, [U, Ae + " WebView2"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[U, Re + " WebView"], N],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [N, [U, "Android" + De]],
          [/chrome\/([\w\.]+) mobile/i],
          [N, [U, Fe + "Chrome"]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [U, N],
          [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
          [N, [U, Fe + "Safari"]],
          [/iphone .*mobile(?:\/\w+ | ?)safari/i],
          [[U, Fe + "Safari"]],
          [/version\/([\w\.\,]+) .*(safari)/i],
          [N, U],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [U, [N, "1"]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [U, N],
          [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
          [[U, Fe + Ue], N],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[U, "Netscape"], N],
          [/(wolvic|librewolf)\/([\w\.]+)/i],
          [U, N],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [N, [U, Ue + " Reality"]],
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
          [U, [N, /_/g, "."]],
          [/(cobalt)\/([\w\.]+)/i],
          [U, [N, /[^\d\.]+./, S]],
        ],
        cpu: [
          [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
          [[F, "amd64"]],
          [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
          [[F, "ia32"]],
          [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
          [[F, "arm64"]],
          [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
          [[F, "armhf"]],
          [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
          [[F, "arm"]],
          [/ sun4\w[;\)]/i],
          [[F, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            /((ppc|powerpc)(64)?)( mac|;|\))/i,
            /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
          ],
          [[F, /ower/, S, Xe]],
          [/mc680.0/i],
          [[F, "68k"]],
          [/winnt.+\[axp/i],
          [[F, "alpha"]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [H, [_, Ce], [q, z]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [H, [_, Ce], [q, B]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
          [H, [_, he], [q, B]],
          [
            /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
            /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i,
          ],
          [H, [_, he], [q, z]],
          [/(macintosh);/i],
          [H, [_, he]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [H, [_, Ee], [q, B]],
          [
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
          ],
          [H, [_, ge], [q, z]],
          [/honor([-\w ]+)[;\)]/i],
          [H, [_, ge], [q, B]],
          [
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
          ],
          [H, [_, we], [q, z]],
          [
            /(?:huawei) ?([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i,
          ],
          [H, [_, we], [q, B]],
          [
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
          ],
          [
            [H, /_/g, " "],
            [_, Oe],
            [q, z],
          ],
          [
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
            / ([\w ]+) miui\/v?\d/i,
          ],
          [
            [H, /_/g, " "],
            [_, Oe],
            [q, B],
          ],
          [
            /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [H, [_, Se], [q, B]],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [H, [_, Te], [q, B]],
          [/\b(opd2(\d{3}a?))(?: bui|\))/i],
          [
            H,
            [
              _,
              tt,
              { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Te },
            ],
            [q, z],
          ],
          [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
          [H, [_, "BLU"], [q, B]],
          [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [H, [_, "Vivo"], [q, B]],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [H, [_, "Realme"], [q, B]],
          [
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
          ],
          [H, [_, fe], [q, z]],
          [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
          [H, [_, fe], [q, B]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
            /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
          ],
          [H, [_, ke], [q, B]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [H, [_, ke], [q, z]],
          [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [H, [_, ve], [q, z]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [H, [_, ve], [q, B]],
          [/(nokia) (t[12][01])/i],
          [_, H, [q, z]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i,
          ],
          [
            [H, /_/g, " "],
            [q, B],
            [_, "Nokia"],
          ],
          [/(pixel (c|tablet))\b/i],
          [H, [_, be], [q, z]],
          [
            /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
          ],
          [H, [_, be], [q, B]],
          [/(google) (pixelbook( go)?)/i],
          [_, H],
          [
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [H, [_, Ie], [q, B]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [H, "Xperia Tablet"],
            [_, Ie],
            [q, z],
          ],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [H, [_, ue], [q, z]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [H, /(.+)/g, "Fire Phone $1"],
            [_, ue],
            [q, B],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [H, _, [q, z]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
          [H, [_, me], [q, B]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [H, [_, pe], [q, z]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [H, [_, pe], [q, B]],
          [/(nexus 9)/i],
          [H, [_, "HTC"], [q, z]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [_, [H, /_/g, " "], [q, B]],
          [
            /tcl (xess p17aa)/i,
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [H, [_, "TCL"], [q, z]],
          [
            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [H, [_, "TCL"], [q, B]],
          [/(itel) ((\w+))/i],
          [
            [_, Xe],
            H,
            [q, tt, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [H, [_, "Acer"], [q, z]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [H, [_, "Meizu"], [q, B]],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [H, [_, "Ulefone"], [q, B]],
          [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
          [H, [_, "Energizer"], [q, B]],
          [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
          [H, [_, "Cat"], [q, B]],
          [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
          [H, [_, "Smartfren"], [q, B]],
          [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
          [H, [_, "Nothing"], [q, B]],
          [
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
          ],
          [H, [_, "Archos"], [q, z]],
          [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
          [H, [_, "Archos"], [q, B]],
          [/; (n159v)/i],
          [H, [_, "HMD"], [q, B]],
          [
            /(imo) (tab \w+)/i,
            /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i,
          ],
          [_, H, [q, z]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
            /(hp) ([\w ]+\w)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(oppo) ?([\w ]+) bui/i,
            /(hisense) ([ehv][\w ]+)\)/i,
            /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
          ],
          [_, H, [q, B]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
          ],
          [_, H, [q, z]],
          [/(surface duo)/i],
          [H, [_, ye], [q, z]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [H, [_, "Fairphone"], [q, B]],
          [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
          [H, [_, xe], [q, z]],
          [/(sprint) (\w+)/i],
          [_, H, [q, B]],
          [/(kin\.[onetw]{3})/i],
          [
            [H, /\./g, " "],
            [_, ye],
            [q, B],
          ],
          [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [H, [_, Le], [q, z]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [H, [_, Le], [q, B]],
          [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
          [_, [q, $]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [H, /^/, "SmartTV"],
            [_, Ce],
            [q, $],
          ],
          [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
          [_, H, [q, $]],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [_, ve],
            [q, $],
          ],
          [/(apple) ?tv/i],
          [_, [H, he + " TV"], [q, $]],
          [/crkey.*devicetype\/chromecast/i],
          [
            [H, Me + " Third Generation"],
            [_, be],
            [q, $],
          ],
          [/crkey.*devicetype\/([^/]*)/i],
          [
            [H, /^/, "Chromecast "],
            [_, be],
            [q, $],
          ],
          [/fuchsia.*crkey/i],
          [
            [H, Me + " Nest Hub"],
            [_, be],
            [q, $],
          ],
          [/crkey/i],
          [
            [H, Me],
            [_, be],
            [q, $],
          ],
          [/(portaltv)/i],
          [H, [_, _e], [q, $]],
          [/droid.+aft(\w+)( bui|\))/i],
          [H, [_, ue], [q, $]],
          [/(shield \w+ tv)/i],
          [H, [_, xe], [q, $]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [H, [_, Ee], [q, $]],
          [/(bravia[\w ]+)( bui|\))/i],
          [H, [_, Ie], [q, $]],
          [/(mi(tv|box)-?\w+) bui/i],
          [H, [_, Oe], [q, $]],
          [/Hbbtv.*(technisat) (.*);/i],
          [_, H, [q, $]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
          ],
          [
            [_, /.+\/(\w+)/, "$1", tt, { LG: "lge" }],
            [H, Ze],
            [q, $],
          ],
          [/(playstation \w+)/i],
          [H, [_, Ie], [q, j]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [H, [_, ye], [q, j]],
          [
            /(ouya)/i,
            /(nintendo) (\w+)/i,
            /(retroid) (pocket ([^\)]+))/i,
            /(valve).+(steam deck)/i,
            /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
          ],
          [
            [
              _,
              tt,
              { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" },
            ],
            H,
            [q, j],
          ],
          [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
          [H, [_, Ce], [q, V]],
          [
            /((pebble))app/i,
            /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
          ],
          [_, H, [q, V]],
          [/(ow(?:19|20)?we?[1-3]{1,3})/i],
          [H, [_, Te], [q, V]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [H, [_, he], [q, V]],
          [/(opwwe\d{3})/i],
          [H, [_, Se], [q, V]],
          [/(moto 360)/i],
          [H, [_, ke], [q, V]],
          [/(smartwatch 3)/i],
          [H, [_, Ie], [q, V]],
          [/(g watch r)/i],
          [H, [_, ve], [q, V]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [H, [_, Le], [q, V]],
          [/droid.+; (glass) \d/i],
          [H, [_, be], [q, W]],
          [/(pico) ([\w ]+) os\d/i],
          [_, H, [q, W]],
          [/(quest( \d| pro)?s?).+vr/i],
          [H, [_, _e], [q, W]],
          [/mobile vr; rv.+firefox/i],
          [[q, W]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [_, [q, G]],
          [/(aeobc)\b/i],
          [H, [_, ue], [q, G]],
          [/(homepod).+mac os/i],
          [H, [_, he], [q, G]],
          [/windows iot/i],
          [[q, G]],
          [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
          [H, [q, $]],
          [
            /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i,
          ],
          [[q, $]],
          [
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i,
          ],
          [H, [q, tt, { mobile: "Mobile", xr: "VR", "*": z }]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[q, z]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[q, B]],
          [/droid .+?; ([\w\. -]+)( bui|\))/i],
          [H, [_, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [N, [U, Ae + "HTML"]],
          [/(arkweb)\/([\w\.]+)/i],
          [U, N],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [N, [U, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [U, N],
          [/ladybird\//i],
          [[U, "LibWeb"]],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [N, U],
        ],
        os: [
          [/(windows nt) (6\.[23]); arm/i],
          [
            [U, /N/, "R"],
            [N, tt, it],
          ],
          [
            /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
            /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
          ],
          [U, N],
          [
            /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
            /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i,
          ],
          [
            [N, /(;|\))/g, "", tt, it],
            [U, He],
          ],
          [/(windows ce)\/?([\d\.]*)/i],
          [U, N],
          [
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
            /\btvos ?([\w\.]+)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [N, /_/g, "."],
            [U, "iOS"],
          ],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i,
          ],
          [
            [U, "macOS"],
            [N, /_/g, "."],
          ],
          [/android ([\d\.]+).*crkey/i],
          [N, [U, Me + " Android"]],
          [/fuchsia.*crkey\/([\d\.]+)/i],
          [N, [U, Me + " Fuchsia"]],
          [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
          [N, [U, Me + " SmartSpeaker"]],
          [/linux.*crkey\/([\d\.]+)/i],
          [N, [U, Me + " Linux"]],
          [/crkey\/([\d\.]+)/i],
          [N, [U, Me]],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [N, U],
          [/(ubuntu) ([\w\.]+) like android/i],
          [[U, /(.+)/, "$1 Touch"], N],
          [
            /(harmonyos)[\/ ]?([\d\.]*)/i,
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
          ],
          [U, N],
          [/\(bb(10);/i],
          [N, [U, me]],
          [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
          [N, [U, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
          ],
          [N, [U, Ue + " OS"]],
          [
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
            /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i,
          ],
          [N, [U, "webOS"]],
          [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
          [
            [
              N,
              tt,
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
            [U, "webOS"],
          ],
          [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
          [N, [U, "watchOS"]],
          [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
          [N, [U, "Chrome OS"]],
          [/kepler ([\w\.]+); (aft|aeo)/i],
          [N, [U, "Vega OS"]],
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
          [U, N],
          [/(sunos) ?([\d\.]*)/i],
          [[U, "Solaris"], N],
          [
            /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [U, N],
        ],
      },
      st =
        (Qe.call(
          (k = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }).init,
          [
            [O, [U, N, D, q]],
            [L, [F]],
            [R, [q, H, _]],
            [P, [U, N]],
            [M, [U, N]],
          ],
        ),
        Qe.call(k.isIgnore, [
          [O, [N, D]],
          [P, [N]],
          [M, [N]],
        ]),
        Qe.call(k.isIgnoreRgx, [
          [O, / ?browser$/i],
          [M, / ?os$/i],
        ]),
        Qe.call(k.toString, [
          [O, [U, N]],
          [L, [F]],
          [R, [_, H]],
          [P, [U, N]],
          [M, [U, N]],
        ]),
        k),
      at = function (e, t) {
        var i = st.init[t],
          o = st.isIgnore[t] || 0,
          r = st.isIgnoreRgx[t] || 0,
          n = st.toString[t] || 0;
        function s() {
          Qe.call(this, i);
        }
        return (
          (s.prototype.getItem = function () {
            return e;
          }),
          (s.prototype.withClientHints = function () {
            return Be
              ? Be.getHighEntropyValues(de).then(function (t) {
                  return e.setCH(new ct(t, !1)).parseCH().get();
                })
              : e.parseCH().get();
          }),
          (s.prototype.withFeatureCheck = function () {
            return e.detectFeature().get();
          }),
          t != A &&
            ((s.prototype.is = function (e) {
              var t = !1;
              for (var i in this)
                if (
                  this.hasOwnProperty(i) &&
                  !$e(o, i) &&
                  Xe(r ? Je(r, this[i]) : this[i]) == Xe(r ? Je(r, e) : e)
                ) {
                  if (((t = !0), e != I)) break;
                } else if (e == I && t) {
                  t = !t;
                  break;
                }
              return t;
            }),
            (s.prototype.toString = function () {
              var e = S;
              for (var t in n)
                typeof this[n[t]] !== I && (e += (e ? " " : S) + this[n[t]]);
              return e || I;
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
    function ct(e, t) {
      if (((e = e || {}), Qe.call(this, de), t))
        Qe.call(this, [
          [K, Ge(e[te])],
          [J, Ge(e[ie])],
          [B, /\?1/.test(e[se])],
          [H, Ye(e[ae])],
          [Y, Ye(e[ce])],
          [Z, Ye(e[le])],
          [F, Ye(e[oe])],
          [Q, Ge(e[ne])],
          [ee, Ye(e[re])],
        ]);
      else
        for (var i in e)
          this.hasOwnProperty(i) && typeof e[i] !== I && (this[i] = e[i]);
    }
    function lt(e, t, i, o) {
      return (
        Qe.call(this, [
          ["itemType", e],
          ["ua", t],
          ["uaCH", o],
          ["rgxMap", i],
          ["data", at(this, e)],
        ]),
        this
      );
    }
    function dt(e, t, i) {
      if (
        (typeof e === C
          ? (Ve(e, !0)
              ? (typeof t === C && (i = t), (t = e))
              : ((i = e), (t = void 0)),
            (e = void 0))
          : typeof e !== E || Ve(t, !0) || ((i = t), (t = void 0)),
        i)
      )
        if (typeof i.append === T) {
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
      if (!(this instanceof dt)) return new dt(e, t, i).getResult();
      var s =
          typeof e === E
            ? e
            : i && i[x]
              ? i[x]
              : je && je.userAgent
                ? je.userAgent
                : S,
        a = new ct(i, !0),
        c = t
          ? (function (e, t) {
              var i = {},
                o = t;
              if (!Ve(t))
                for (var r in ((o = {}), t))
                  for (var n in t[r]) o[n] = t[r][n].concat(o[n] ? o[n] : []);
              for (var s in e)
                i[s] = o[s] && o[s].length % 2 == 0 ? o[s].concat(e[s]) : e[s];
              return i;
            })(nt, t)
          : nt,
        l = function (e) {
          return e == A
            ? function () {
                return new lt(e, s, c, a)
                  .set("ua", s)
                  .set(O, this.getBrowser())
                  .set(L, this.getCPU())
                  .set(R, this.getDevice())
                  .set(P, this.getEngine())
                  .set(M, this.getOS())
                  .get();
              }
            : function () {
                return new lt(e, s, c[e], a).parseUA().get();
              };
        };
      return (
        Qe.call(this, [
          ["getBrowser", l(O)],
          ["getCPU", l(L)],
          ["getDevice", l(R)],
          ["getEngine", l(P)],
          ["getOS", l(M)],
          ["getResult", l(A)],
          [
            "getUA",
            function () {
              return s;
            },
          ],
          [
            "setUA",
            function (e) {
              return (We(e) && (s = Ze(e, 500)), this);
            },
          ],
        ]).setUA(s),
        this
      );
    }
    ((lt.prototype.get = function (e) {
      return e
        ? this.data.hasOwnProperty(e)
          ? this.data[e]
          : void 0
        : this.data;
    }),
      (lt.prototype.set = function (e, t) {
        return ((this.data[e] = t), this);
      }),
      (lt.prototype.setCH = function (e) {
        return ((this.uaCH = e), this);
      }),
      (lt.prototype.detectFeature = function () {
        if (je && je.userAgent == this.ua)
          switch (this.itemType) {
            case O:
              je.brave && typeof je.brave.isBrave == T && this.set(U, "Brave");
              break;
            case R:
              (!this.get(q) && Be && Be[B] && this.set(q, B),
                "Macintosh" == this.get(H) &&
                  je &&
                  typeof je.standalone !== I &&
                  je.maxTouchPoints &&
                  je.maxTouchPoints > 2 &&
                  this.set(H, "iPad").set(q, z));
              break;
            case M:
              !this.get(U) && Be && Be[Y] && this.set(U, Be[Y]);
              break;
            case A:
              var e = this.data,
                t = function (t) {
                  return e[t].getItem().detectFeature().get();
                };
              this.set(O, t(O))
                .set(L, t(L))
                .set(R, t(R))
                .set(P, t(P))
                .set(M, t(M));
          }
        return this;
      }),
      (lt.prototype.parseUA = function () {
        switch (
          (this.itemType != A && et.call(this.data, this.ua, this.rgxMap),
          this.itemType)
        ) {
          case O:
            this.set(D, Ke(this.get(N)));
            break;
          case M:
            if ("iOS" == this.get(U) && "18.6" == this.get(N)) {
              var e = /\) Version\/([\d\.]+)/.exec(this.ua);
              e &&
                parseInt(e[1].substring(0, 2), 10) >= 26 &&
                this.set(N, e[1]);
            }
        }
        return this;
      }),
      (lt.prototype.parseCH = function () {
        var e = this.uaCH,
          t = this.rgxMap;
        switch (this.itemType) {
          case O:
          case P:
            var i,
              o = e[J] || e[K];
            if (o)
              for (var r = 0; r < o.length; r++) {
                var n = o[r].brand || o[r],
                  s = o[r].version;
                (this.itemType == O &&
                  !/not.a.brand/i.test(n) &&
                  (!i ||
                    (/Chrom/.test(i) && n != Pe) ||
                    (i == Ae && /WebView2/.test(n))) &&
                  ((n = tt(n, rt)),
                  ((i = this.get(U)) && !/Chrom/.test(i) && /Chrom/.test(n)) ||
                    this.set(U, n).set(N, s).set(D, Ke(s)),
                  (i = n)),
                  this.itemType == P && n == Pe && this.set(N, s));
              }
            break;
          case L:
            var a = e[F];
            a &&
              (a && "64" == e[ee] && (a += "64"),
              et.call(this.data, a + ";", t));
            break;
          case R:
            if (
              (e[B] && this.set(q, B),
              e[H] && (this.set(H, e[H]), !this.get(q) || !this.get(_)))
            ) {
              var c = {};
              (et.call(c, "droid 9; " + e[H] + ")", t),
                !this.get(q) && c.type && this.set(q, c.type),
                !this.get(_) && c.vendor && this.set(_, c.vendor));
            }
            if (e[Q]) {
              var l;
              if ("string" != typeof e[Q])
                for (var d = 0; !l && d < e[Q].length; ) l = tt(e[Q][d++], ot);
              else l = tt(e[Q], ot);
              this.set(q, l);
            }
            break;
          case M:
            var u = e[Y];
            if (u) {
              var h = e[Z];
              (u == He && (h = parseInt(Ke(h), 10) >= 13 ? "11" : "10"),
                this.set(U, u).set(N, h));
            }
            this.get(U) == He &&
              "Xbox" == e[H] &&
              this.set(U, "Xbox").set(N, void 0);
            break;
          case A:
            var p = this.data,
              m = function (t) {
                return p[t].getItem().setCH(e).parseCH().get();
              };
            this.set(O, m(O))
              .set(L, m(L))
              .set(R, m(R))
              .set(P, m(P))
              .set(M, m(M));
        }
        return this;
      }),
      (dt.VERSION = "2.0.9"),
      (dt.BROWSER = ze([U, N, D, q])),
      (dt.CPU = ze([F])),
      (dt.DEVICE = ze([H, _, q, j, B, $, z, V, G])),
      (dt.ENGINE = dt.OS = ze([U, N])));
    var ut,
      ht,
      pt = function (e, t, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === i ? o : "a" === i ? o.call(e) : o ? o.value : t.get(e);
      };
    function mt() {
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
    class bt {
      static get instance() {
        return (
          pt(this, ut, "f", ht) ||
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
            })(this, ut, new ut(), "f", ht),
            (globalThis.__sentry__ = pt(this, ut, "f", ht))),
          pt(this, ut, "f", ht)
        );
      }
      constructor() {
        var e, t, i, o, r, n;
        ((this.codeErrors = new Set()),
          (this.whiteScreenTimer = null),
          (this.options = m),
          (this.shouldRecordScreen = !1));
        const s = new dt().getResult();
        this.deviceInfo = {
          browserName: null !== (e = s.browser.name) && void 0 !== e ? e : p,
          browserVersion:
            null !== (t = s.browser.version) && void 0 !== t ? t : p,
          osName: null !== (i = s.os.name) && void 0 !== i ? i : p,
          osVersion: null !== (o = s.os.version) && void 0 !== o ? o : p,
          userAgent: s.ua,
          deviceModel: null !== (r = s.device.model) && void 0 !== r ? r : p,
          deviceType: null !== (n = s.device.type) && void 0 !== n ? n : p,
          fingerprint: mt(),
          language: navigator.language || p,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        };
      }
      setOptions(e) {
        pt(ut, ut, "f", ht).options = { ...this.options, ...e };
      }
    }
    ((ut = bt), (ht = { value: void 0 }));
    const wt = bt.instance;
    function ft(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    const gt = function (e) {
        const { id: t, name: i, value: r, rating: n } = e;
        return {
          ...y(),
          id: t,
          name: i,
          value: r,
          rating: n,
          type: o.Performance,
        };
      },
      vt = "#74d4ff",
      yt = "#bbf45",
      kt = "#ffb869",
      xt = "#ffa2a2",
      St = (e) =>
        `color: #62748e; background: ${e}; padding: 2px 6px; border-radius: 4px; font-weight: 600;`,
      Tt = (e) => `color: ${e}; font-weight: 600;`,
      Ct = {
        info: { title: St(vt), subtitle: Tt(vt) },
        success: { title: St(yt), subtitle: Tt(yt) },
        warn: { title: St(kt), subtitle: Tt(kt) },
        error: { title: St(xt), subtitle: Tt(xt) },
        timestamp: { label: "color: #dab2ff;", value: Tt(yt) },
      },
      Et = {
        get isEnabled() {
          return !0;
        },
        info(e, t, i, o) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${t} `,
              Ct.info.title,
              Ct.info.subtitle,
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
              Ct.success.title,
              Ct.success.subtitle,
            ),
            void 0 !== o &&
              console.log(
                "%cTime cost%c " + o + "ms",
                Ct.timestamp.label,
                Ct.timestamp.value,
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
              Ct.warn.title,
              Ct.warn.subtitle,
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
              Ct.error.title,
              Ct.error.subtitle,
            ),
            void 0 !== i &&
              (console.group("Error Details"),
              console.error(i),
              console.groupEnd()),
            console.groupEnd());
        },
      };
    var It,
      Ot,
      Lt = function (e, t, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === i ? o : "a" === i ? o.call(e) : o ? o.value : t.get(e);
      };
    class Rt {
      constructor() {
        ((this.cbQueue = new b()),
          (this.id = crypto.randomUUID()),
          (this.events = []),
          (this.isOnline = !0));
      }
      static get instance() {
        return (
          Lt(this, It, "f", Ot) ||
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
            })(this, It, new It(), "f", Ot),
            Lt(this, It, "f", Ot).initNetworkListener()),
          Lt(this, It, "f", Ot)
        );
      }
      initNetworkListener() {
        "undefined" != typeof window &&
          ((this.isOnline = !1 !== navigator.onLine),
          window.addEventListener("online", () => {
            ((this.isOnline = !0),
              Et.info(
                "Sonnet Sentry",
                "Network is back online, flushing cache",
              ),
              this.loadOfflineCache(),
              this.flush());
          }),
          window.addEventListener("offline", () => {
            ((this.isOnline = !1),
              Et.info("Sonnet Sentry", "Network is offline, caching events"));
          }));
      }
      loadOfflineCache() {
        try {
          const e = localStorage.getItem(wt.options.offlineCacheKey);
          if (e) {
            const t = JSON.parse(e);
            (Array.isArray(t) && this.events.unshift(...t),
              localStorage.removeItem(wt.options.offlineCacheKey));
          }
        } catch (e) {}
      }
      saveOfflineCache() {
        try {
          localStorage.setItem(
            wt.options.offlineCacheKey,
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
          navigator.sendBeacon(wt.options.dsn, JSON.stringify(e))
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
        fetch(wt.options.dsn, { method: "HEAD" })
          .then((e) => {
            e.ok
              ? ((this.isOnline = !0),
                Et.info(
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
          fetch(wt.options.dsn, {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json" },
            keepalive: !0,
          })
            .then((e) => {
              e.ok || this.handleServerError();
            })
            .catch((e) => {
              (Et.error("Sonnet Sentry Report", "Fetch report failed", e),
                this.handleServerError());
            });
        });
      }
      reportByImage(e) {
        const { dsn: t } = wt.options;
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
          userId: wt.options.userId,
          projectId: wt.options.projectId,
          sdkVersion: h,
          deviceInfo: wt.deviceInfo,
          payload: e,
        };
      }
      flush() {
        if (0 === this.events.length) return;
        if (!this.isOnline)
          return (
            this.events.length > wt.options.maxQueueLength &&
              (this.events = this.events.slice(-wt.options.maxQueueLength)),
            void this.saveOfflineCache()
          );
        const e = wt.options.cacheMaxLength,
          t = this.events.slice(0, e);
        this.events = this.events.slice(e);
        const i = performance.now(),
          o = this.isObjectOverSizeLimit(t, 60);
        let r = !1;
        (o || (r = this.sendBeacon(t)),
          r ||
            (wt.options.useImageReport && !this.isObjectOverSizeLimit(t, 2)
              ? this.reportByImage(t)
              : this.reportByFetch(t)),
          Et.success(
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
        } = wt.options;
        if ("" === i)
          return void Et.error(
            "Sonnet Sentry",
            "DSN is empty, report cancelled",
            e,
          );
        if (Math.random() > c)
          return void Et.info(
            "Sonnet Sentry Report",
            `Dropped by sample rate: ${e.type}`,
          );
        o.includes(e.type) && (wt.shouldRecordScreen = !0);
        let l = this.payload2reportData(e);
        if (!r || ((l = await r(l)), l)) {
          if (
            (Et.info("Sonnet Sentry Report", `Type: ${e.type}`, l),
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
    ((It = Rt), (Ot = { value: void 0 }));
    const Pt = Rt.instance;
    let Mt = -1;
    const At = (e) => {
        addEventListener(
          "pageshow",
          (t) => {
            t.persisted && ((Mt = t.timeStamp), e(t));
          },
          !0,
        );
      },
      Ut = (e, t, i, o) => {
        let r, n;
        return (s) => {
          t.value >= 0 &&
            (s || o) &&
            ((n = t.value - (r ?? 0)),
            (n || void 0 === r) &&
              ((r = t.value),
              (t.delta = n),
              (t.rating = ((e, t) =>
                e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(
                t.value,
                i,
              )),
              e(t)));
        };
      },
      qt = (e) => {
        requestAnimationFrame(() => requestAnimationFrame(e));
      },
      _t = () => {
        const e = performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now())
          return e;
      },
      Nt = () => _t()?.activationStart ?? 0,
      Ft = (e, t = -1) => {
        const i = _t();
        let o = "navigate";
        return (
          Mt >= 0
            ? (o = "back-forward-cache")
            : i &&
              (document.prerendering || Nt() > 0
                ? (o = "prerender")
                : document.wasDiscarded
                  ? (o = "restore")
                  : i.type && (o = i.type.replace(/_/g, "-"))),
          {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
            navigationType: o,
          }
        );
      },
      Dt = new WeakMap();
    function Ht(e, t) {
      return (Dt.get(e) || Dt.set(e, new t()), Dt.get(e));
    }
    class jt {
      t;
      i = 0;
      o = [];
      h(e) {
        if (e.hadRecentInput) return;
        const t = this.o[0],
          i = this.o.at(-1);
        (this.i &&
        t &&
        i &&
        e.startTime - i.startTime < 1e3 &&
        e.startTime - t.startTime < 5e3
          ? ((this.i += e.value), this.o.push(e))
          : ((this.i = e.value), (this.o = [e])),
          this.t?.(e));
      }
    }
    const Bt = (e, t, i = {}) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const o = new PerformanceObserver((e) => {
              queueMicrotask(() => {
                t(e.getEntries());
              });
            });
            return (o.observe({ type: e, buffered: !0, ...i }), o);
          }
        } catch {}
      },
      zt = (e) => {
        let t = !1;
        return () => {
          t || (e(), (t = !0));
        };
      };
    let $t = -1;
    const Vt = new Set(),
      Wt = () =>
        "hidden" !== document.visibilityState || document.prerendering
          ? 1 / 0
          : 0,
      Gt = (e) => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === e.type) for (const e of Vt) e();
          isFinite($t) ||
            (($t = "visibilitychange" === e.type ? e.timeStamp : 0),
            removeEventListener("prerenderingchange", Gt, !0));
        }
      },
      Xt = () => {
        if ($t < 0) {
          const e = Nt(),
            t = document.prerendering
              ? void 0
              : globalThis.performance
                  .getEntriesByType("visibility-state")
                  .find((t) => "hidden" === t.name && t.startTime >= e)
                  ?.startTime;
          (($t = t ?? Wt()),
            addEventListener("visibilitychange", Gt, !0),
            addEventListener("prerenderingchange", Gt, !0),
            At(() => {
              setTimeout(() => {
                $t = Wt();
              });
            }));
        }
        return {
          get firstHiddenTime() {
            return $t;
          },
          onHidden(e) {
            Vt.add(e);
          },
        };
      },
      Kt = (e) => {
        document.prerendering
          ? addEventListener("prerenderingchange", e, !0)
          : e();
      },
      Qt = [1800, 3e3],
      Jt = (e, t = {}) => {
        Kt(() => {
          const i = Xt();
          let o,
            r = Ft("FCP");
          const n = Bt("paint", (e) => {
            for (const t of e)
              "first-contentful-paint" === t.name &&
                (n.disconnect(),
                t.startTime < i.firstHiddenTime &&
                  ((r.value = Math.max(t.startTime - Nt(), 0)),
                  r.entries.push(t),
                  o(!0)));
          });
          n &&
            ((o = Ut(e, r, Qt, t.reportAllChanges)),
            At((i) => {
              ((r = Ft("FCP")),
                (o = Ut(e, r, Qt, t.reportAllChanges)),
                qt(() => {
                  ((r.value = performance.now() - i.timeStamp), o(!0));
                }));
            }));
        });
      },
      Yt = [0.1, 0.25];
    let Zt = 0,
      ei = 1 / 0,
      ti = 0;
    const ii = (e) => {
      for (const t of e)
        t.interactionId &&
          ((ei = Math.min(ei, t.interactionId)),
          (ti = Math.max(ti, t.interactionId)),
          (Zt = ti ? (ti - ei) / 7 + 1 : 0));
    };
    let oi;
    const ri = () => (oi ? Zt : (performance.interactionCount ?? 0));
    let ni = 0;
    class si {
      l = [];
      u = new Map();
      m;
      p;
      v() {
        ((ni = ri()), (this.l.length = 0), this.u.clear());
      }
      T() {
        const e = Math.min(this.l.length - 1, Math.floor((ri() - ni) / 50));
        return this.l[e];
      }
      h(e) {
        if ((this.m?.(e), !e.interactionId && "first-input" !== e.entryType))
          return;
        const t = this.l.at(-1);
        let i = this.u.get(e.interactionId);
        if (i || this.l.length < 10 || e.duration > t.L) {
          if (
            (i
              ? e.duration > i.L
                ? ((i.entries = [e]), (i.L = e.duration))
                : e.duration === i.L &&
                  e.startTime === i.entries[0].startTime &&
                  i.entries.push(e)
              : ((i = { id: e.interactionId, entries: [e], L: e.duration }),
                this.u.set(i.id, i),
                this.l.push(i)),
            this.l.sort((e, t) => t.L - e.L),
            this.l.length > 10)
          ) {
            const e = this.l.splice(10);
            for (const t of e) this.u.delete(t.id);
          }
          this.p?.(i);
        }
      }
    }
    const ai = (e) => {
        const t = globalThis.requestIdleCallback || setTimeout,
          i = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) e();
        else {
          const o = zt(e);
          let r = -1;
          const n = () => {
            (i(r), o());
          };
          (addEventListener("visibilitychange", n, { once: !0, capture: !0 }),
            (r = t(() => {
              (removeEventListener("visibilitychange", n, { capture: !0 }),
                o());
            })));
        }
      },
      ci = [200, 500];
    class li {
      m;
      h(e) {
        this.m?.(e);
      }
    }
    const di = [2500, 4e3],
      ui = [800, 1800],
      hi = (e) => {
        document.prerendering
          ? Kt(() => hi(e))
          : "complete" !== document.readyState
            ? addEventListener("load", () => hi(e), !0)
            : setTimeout(e);
      };
    let pi = 0,
      mi = [],
      bi = null,
      wi = 0;
    function fi(e) {
      const t = e.getBoundingClientRect();
      return (
        t.right > 0 &&
        t.bottom > 0 &&
        t.left < globalThis.innerWidth &&
        t.top < globalThis.innerHeight
      );
    }
    function gi(e) {
      (cancelAnimationFrame(wi),
        (wi = requestAnimationFrame(() => {
          "complete" === document.readyState
            ? (null == bi || bi.disconnect(),
              (pi =
                0 === mi.length ? 0 : Math.max(...mi.map((e) => e.startTime))),
              (mi = []),
              e(pi))
            : gi(e);
        })));
    }
    function vi(e) {
      const t = ["link", "script", "style"];
      ((bi = new MutationObserver((i) => {
        gi(e);
        const o = { startTime: 0, children: [] };
        for (const e of i)
          if (ft(e.target) && e.addedNodes.length && fi(e.target))
            for (const i of Array.from(e.addedNodes))
              ft(i) &&
                !t.includes(i.tagName.toLowerCase()) &&
                fi(i) &&
                o.children.push(i);
        o.children.length && (mi.push(o), (o.startTime = performance.now()));
      })),
        bi.observe(document, {
          childList: !0,
          subtree: !0,
          characterData: !0,
          attributes: !0,
        }));
    }
    function yi() {
      const e = performance.getEntriesByType("resource"),
        t = ["fetch", "xmlhttprequest", "beacon"];
      return e
        .filter((e) => !t.includes(e.initiatorType))
        .map((e) => ({ ...e, fromCache: ki(e) }));
    }
    function ki(e) {
      return (
        0 === e.transferSize ||
        (0 !== e.transferSize && 0 === e.encodedBodySize)
      );
    }
    function xi(e) {
      Et.info("Sonnet Sentry Performance", "Starting Web Vitals monitoring...");
      const t = (t) => {
        const i = "value" in t ? Math.round(t.value) : void 0;
        (Et.success("Sonnet Sentry Performance", `Metric: ${t.name}`, t, i),
          e(t));
      };
      var i;
      (((e, t = {}) => {
        Kt(() => {
          const i = Xt();
          let o,
            r = Ft("LCP");
          const n = Ht(t, li),
            s = (e) => {
              t.reportAllChanges || (e = e.slice(-1));
              for (const t of e)
                (n.h(t),
                  t.startTime < i.firstHiddenTime &&
                    ((r.value = Math.max(t.startTime - Nt(), 0)),
                    (r.entries = [t]),
                    o()));
            },
            a = Bt("largest-contentful-paint", s);
          if (a) {
            o = Ut(e, r, di, t.reportAllChanges);
            const i = zt(() => {
                (s(a.takeRecords()), a.disconnect(), o(!0));
              }),
              n = (e) => {
                e.isTrusted &&
                  (ai(i), removeEventListener(e.type, n, { capture: !0 }));
              };
            for (const e of ["keydown", "click", "visibilitychange"])
              addEventListener(e, n, { capture: !0 });
            At((i) => {
              ((r = Ft("LCP")),
                (o = Ut(e, r, di, t.reportAllChanges)),
                qt(() => {
                  ((r.value = performance.now() - i.timeStamp), o(!0));
                }));
            });
          }
        });
      })((e) => {
        t(gt(e));
      }),
        Jt((e) => {
          t(gt(e));
        }),
        ((e, t = {}) => {
          const i = Xt();
          Jt(
            zt(() => {
              let o,
                r = Ft("CLS", 0);
              const n = Ht(t, jt),
                s = (e) => {
                  for (const t of e) n.h(t);
                  n.i > r.value && ((r.value = n.i), (r.entries = n.o), o());
                },
                a = Bt("layout-shift", s);
              a &&
                ((o = Ut(e, r, Yt, t.reportAllChanges)),
                i.onHidden(() => {
                  (s(a.takeRecords()), o(!0));
                }),
                At(() => {
                  ((n.i = 0),
                    (r = Ft("CLS", 0)),
                    (o = Ut(e, r, Yt, t.reportAllChanges)),
                    qt(o));
                }),
                setTimeout(o));
            }),
          );
        })((e) => {
          t(gt(e));
        }),
        ((e, t = {}) => {
          if (
            !globalThis.PerformanceEventTiming ||
            !("interactionId" in PerformanceEventTiming.prototype)
          )
            return;
          const i = Xt();
          Kt(() => {
            "interactionCount" in performance ||
              oi ||
              (oi = Bt("event", ii, { durationThreshold: 0 }));
            let o,
              r = Ft("INP");
            const n = Ht(t, si),
              s = (e) => {
                ai(() => {
                  for (const t of e) n.h(t);
                  const t = n.T();
                  t &&
                    t.L !== r.value &&
                    ((r.value = t.L), (r.entries = t.entries), o());
                });
              },
              a = Bt("event", s, {
                durationThreshold: t.durationThreshold ?? 40,
              });
            ((o = Ut(e, r, ci, t.reportAllChanges)),
              a &&
                (a.observe({ type: "first-input", buffered: !0 }),
                i.onHidden(() => {
                  (s(a.takeRecords()), o(!0));
                }),
                At(() => {
                  (n.v(),
                    (r = Ft("INP")),
                    (o = Ut(e, r, ci, t.reportAllChanges)));
                })));
          });
        })((e) => {
          t(gt(e));
        }),
        ((e, t = {}) => {
          let i = Ft("TTFB"),
            o = Ut(e, i, ui, t.reportAllChanges);
          hi(() => {
            const r = _t();
            r &&
              ((i.value = Math.max(r.responseStart - Nt(), 0)),
              (i.entries = [r]),
              o(!0),
              At(() => {
                ((i = Ft("TTFB", 0)),
                  (o = Ut(e, i, ui, t.reportAllChanges)),
                  o(!0));
              }));
          });
        })((e) => {
          t(gt(e));
        }),
        (i = (e) => {
          const i = {
            ...y(),
            name: "FSP",
            value: e,
            type: o.Performance,
            message: "First Screen Paint",
          };
          t(i);
        }),
        "requestIdleCallback" in globalThis
          ? requestIdleCallback((e) => {
              e.timeRemaining() > 0 && vi(i);
            })
          : vi(i));
    }
    const Si = class extends l {
      constructor() {
        super(o.Performance);
      }
      async init() {
        if (
          (xi((e) => {
            Pt.send(e);
          }),
          new PerformanceObserver((e) => {
            const t = {
              ...y(),
              name: "LongTask",
              type: o.Performance,
              longTasks: e.getEntries(),
            };
            Pt.send(t);
          }).observe({ entryTypes: ["longTask".toLowerCase()] }),
          globalThis.addEventListener("load", () => {
            const e = {
              ...y(),
              name: "ResourceList",
              type: o.Performance,
              resourceList: yi(),
            };
            Pt.send(e);
          }),
          "measureUserAgentSpecificMemory" in performance &&
            "function" == typeof performance.measureUserAgentSpecificMemory)
        ) {
          const e = {
            ...y(),
            name: "Memory",
            type: o.Performance,
            message: "performance.measureUserAgentSpecificMemory",
            memory: await performance.measureUserAgentSpecificMemory(),
          };
          Pt.send(e);
        }
      }
    };
    return c;
  })(),
);
