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
      t,
      o,
      r,
      s,
      n,
      a = {
        d: (e, i) => {
          for (var t in i)
            a.o(i, t) &&
              !a.o(e, t) &&
              Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
        },
        o: (e, i) => Object.prototype.hasOwnProperty.call(e, i),
        r: (e) => {
          ("undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 }));
        },
      },
      l = {};
    (a.r(l), a.d(l, { default: () => Ri }));
    class c {
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
      })(i || (i = {})),
      (function (e) {
        ((e.Error = "Error"), (e.OK = "OK"));
      })(t || (t = {})),
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
      })(s || (s = {})),
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
      })(n || (n = {})));
    const d = JSON.parse('{"UU":"sonnet-sentry","rE":"1.0.0"}'),
      { UU: h, rE: u } = d,
      w = "unknown",
      p = {
        dsn: "",
        projectId: w,
        userId: w,
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
    const m = "sonnet_sentry_device_id",
      f = "sonnet_sentry_session_id";
    function g() {
      try {
        let e = localStorage.getItem(m);
        return (
          e || ((e = crypto.randomUUID()), localStorage.setItem(m, e)),
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
    var y,
      k = "user-agent",
      x = "",
      S = "function",
      C = "object",
      T = "string",
      E = "undefined",
      O = "browser",
      I = "cpu",
      R = "device",
      U = "engine",
      M = "os",
      _ = "result",
      q = "name",
      P = "type",
      j = "vendor",
      D = "version",
      L = "architecture",
      A = "major",
      N = "model",
      z = "console",
      H = "mobile",
      B = "tablet",
      F = "smarttv",
      $ = "wearable",
      V = "xr",
      W = "embedded",
      G = "inapp",
      K = "brands",
      X = "formFactors",
      Q = "fullVersionList",
      J = "platform",
      Y = "platformVersion",
      Z = "bitness",
      ee = "sec-ch-ua",
      ie = ee + "-full-version-list",
      te = ee + "-arch",
      oe = ee + "-" + Z,
      re = ee + "-form-factors",
      se = ee + "-" + H,
      ne = ee + "-" + N,
      ae = ee + "-" + J,
      le = ae + "-version",
      ce = [K, Q, H, N, J, Y, L, X, Z],
      de = "Amazon",
      he = "Apple",
      ue = "ASUS",
      we = "BlackBerry",
      pe = "Google",
      be = "Huawei",
      me = "Lenovo",
      fe = "Honor",
      ge = "LG",
      ve = "Microsoft",
      ye = "Motorola",
      ke = "Nvidia",
      xe = "OnePlus",
      Se = "OPPO",
      Ce = "Samsung",
      Te = "Sharp",
      Ee = "Sony",
      Oe = "Xiaomi",
      Ie = "Zebra",
      Re = "Chrome",
      Ue = "Chromium",
      Me = "Chromecast",
      _e = "Edge",
      qe = "Firefox",
      Pe = "Opera",
      je = "Facebook",
      De = "Sogou",
      Le = "Mobile ",
      Ae = " Browser",
      Ne = "Windows",
      ze = typeof window !== E && window.navigator ? window.navigator : void 0,
      He = ze && ze.userAgentData ? ze.userAgentData : void 0,
      Be = function (e) {
        for (var i = {}, t = 0; t < e.length; t++) i[e[t].toUpperCase()] = e[t];
        return i;
      },
      Fe = function (e, i) {
        if (typeof e === C && e.length > 0) {
          for (var t in e) if (Ge(i) == Ge(e[t])) return !0;
          return !1;
        }
        return !!Ve(e) && Ge(i) == Ge(e);
      },
      $e = function (e, i) {
        for (var t in e)
          return (
            /^(browser|cpu|device|engine|os)$/.test(t) || (!!i && $e(e[t]))
          );
      },
      Ve = function (e) {
        return typeof e === T;
      },
      We = function (e) {
        if (e) {
          for (
            var i = [], t = Qe(/\\?\"/g, e).split(","), o = 0;
            o < t.length;
            o++
          )
            if (t[o].indexOf(";") > -1) {
              var r = Ye(t[o]).split(";v=");
              i[o] = { brand: r[0], version: r[1] };
            } else i[o] = Ye(t[o]);
          return i;
        }
      },
      Ge = function (e) {
        return Ve(e) ? e.toLowerCase() : e;
      },
      Ke = function (e) {
        return Ve(e) ? Qe(/[^\d\.]/g, e).split(".")[0] : void 0;
      },
      Xe = function (e) {
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var t = e[i];
            typeof t == C && 2 == t.length
              ? (this[t[0]] = t[1])
              : (this[t] = void 0);
          }
        return this;
      },
      Qe = function (e, i) {
        return Ve(i) ? i.replace(e, x) : i;
      },
      Je = function (e) {
        return Qe(/\\?\"/g, e);
      },
      Ye = function (e, i) {
        return (
          (e = Qe(/^\s\s*/, String(e))),
          typeof i === E ? e : e.substring(0, i)
        );
      },
      Ze = function (e, i) {
        if (e && i)
          for (var t, o, r, s, n, a, l = 0; l < i.length && !n; ) {
            var c = i[l],
              d = i[l + 1];
            for (t = o = 0; t < c.length && !n && c[t]; )
              if ((n = c[t++].exec(e)))
                for (r = 0; r < d.length; r++)
                  ((a = n[++o]),
                    typeof (s = d[r]) === C && s.length > 0
                      ? 2 === s.length
                        ? typeof s[1] == S
                          ? (this[s[0]] = s[1].call(this, a))
                          : (this[s[0]] = s[1])
                        : s.length >= 3 &&
                          (typeof s[1] !== S || (s[1].exec && s[1].test)
                            ? 3 == s.length
                              ? (this[s[0]] = a
                                  ? a.replace(s[1], s[2])
                                  : void 0)
                              : 4 == s.length
                                ? (this[s[0]] = a
                                    ? s[3].call(this, a.replace(s[1], s[2]))
                                    : void 0)
                                : s.length > 4 &&
                                  (this[s[0]] = a
                                    ? s[3].apply(
                                        this,
                                        [a.replace(s[1], s[2])].concat(
                                          s.slice(4),
                                        ),
                                      )
                                    : void 0)
                            : s.length > 3
                              ? (this[s[0]] = a
                                  ? s[1].apply(this, s.slice(2))
                                  : void 0)
                              : (this[s[0]] = a
                                  ? s[1].call(this, a, s[2])
                                  : void 0))
                      : (this[s] = a || void 0));
            l += 2;
          }
      },
      ei = function (e, i) {
        for (var t in i)
          if (typeof i[t] === C && i[t].length > 0) {
            for (var o = 0; o < i[t].length; o++)
              if (Fe(i[t][o], e)) return "?" === t ? void 0 : t;
          } else if (Fe(i[t], e)) return "?" === t ? void 0 : t;
        return i.hasOwnProperty("*") ? i["*"] : e;
      },
      ii = {
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
      ti = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
      },
      oi = {
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
      ri = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [D, [q, Le + "Chrome"]],
          [/webview.+edge\/([\w\.]+)/i],
          [D, [q, _e + " WebView"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [D, [q, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [q, D],
          [/opios[\/ ]+([\w\.]+)/i],
          [D, [q, Pe + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [D, [q, Pe + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [D, [q, Pe]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [D, [q, "Baidu"]],
          [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
          [D, [q, "Maxthon"]],
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
          [q, D],
          [/quark(?:pc)?\/([-\w\.]+)/i],
          [D, [q, "Quark"]],
          [/\bddg\/([\w\.]+)/i],
          [D, [q, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [D, [q, "UCBrowser"]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i,
          ],
          [D, [q, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [D, [q, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [D, [q, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [D, [q, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [D, [q, "Smart " + me + Ae]],
          [/(av(?:ast|g|ira))\/([\w\.]+)/i],
          [[q, /(.+)/, "$1 Secure" + Ae], D],
          [/norton\/([\w\.]+)/i],
          [D, [q, "Norton Private" + Ae]],
          [/\bfocus\/([\w\.]+)/i],
          [D, [q, qe + " Focus"]],
          [/ mms\/([\w\.]+)$/i],
          [D, [q, Pe + " Neon"]],
          [/ opt\/([\w\.]+)$/i],
          [D, [q, Pe + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [D, [q, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [D, [q, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [D, [q, Pe + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [D, [q, "MIUI" + Ae]],
          [/fxios\/([\w\.-]+)/i],
          [D, [q, Le + qe]],
          [/\bqihoobrowser\/?([\w\.]*)/i],
          [D, [q, "360"]],
          [/\b(qq)\/([\w\.]+)/i],
          [[q, /(.+)/, "$1Browser"], D],
          [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
          [[q, /(.+)/, "$1" + Ae], D],
          [/samsungbrowser\/([\w\.]+)/i],
          [D, [q, Ce + " Internet"]],
          [/metasr[\/ ]?([\d\.]+)/i],
          [D, [q, De + " Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [[q, De + " Mobile"], D],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
          ],
          [q, D],
          [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
          [q],
          [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
          [D, q],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[q, je], D, [P, G]],
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
          [q, D, [P, G]],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [D, [q, "GSA"], [P, G]],
          [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
          [D, [q, "TikTok"], [P, G]],
          [/\[(linkedin)app\]/i],
          [q, [P, G]],
          [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
          [[q, /(.+)/, "Zalo"], D, [P, G]],
          [/(chromium)[\/ ]([-\w\.]+)/i],
          [q, D],
          [/ome-(lighthouse)$/i],
          [q, [P, "fetcher"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [D, [q, Re + " Headless"]],
          [/wv\).+chrome\/([\w\.]+).+edgw\//i],
          [D, [q, _e + " WebView2"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[q, Re + " WebView"], D],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [D, [q, "Android" + Ae]],
          [/chrome\/([\w\.]+) mobile/i],
          [D, [q, Le + "Chrome"]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [q, D],
          [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
          [D, [q, Le + "Safari"]],
          [/iphone .*mobile(?:\/\w+ | ?)safari/i],
          [[q, Le + "Safari"]],
          [/version\/([\w\.\,]+) .*(safari)/i],
          [D, q],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [q, [D, "1"]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [q, D],
          [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
          [[q, Le + qe], D],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[q, "Netscape"], D],
          [/(wolvic|librewolf)\/([\w\.]+)/i],
          [q, D],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [D, [q, qe + " Reality"]],
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
          [q, [D, /_/g, "."]],
          [/(cobalt)\/([\w\.]+)/i],
          [q, [D, /[^\d\.]+./, x]],
        ],
        cpu: [
          [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
          [[L, "amd64"]],
          [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
          [[L, "ia32"]],
          [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
          [[L, "arm64"]],
          [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
          [[L, "armhf"]],
          [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
          [[L, "arm"]],
          [/ sun4\w[;\)]/i],
          [[L, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            /((ppc|powerpc)(64)?)( mac|;|\))/i,
            /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
          ],
          [[L, /ower/, x, Ge]],
          [/mc680.0/i],
          [[L, "68k"]],
          [/winnt.+\[axp/i],
          [[L, "alpha"]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [N, [j, Ce], [P, B]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [N, [j, Ce], [P, H]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
          [N, [j, he], [P, H]],
          [
            /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
            /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i,
          ],
          [N, [j, he], [P, B]],
          [/(macintosh);/i],
          [N, [j, he]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [N, [j, Te], [P, H]],
          [
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
          ],
          [N, [j, fe], [P, B]],
          [/honor([-\w ]+)[;\)]/i],
          [N, [j, fe], [P, H]],
          [
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
          ],
          [N, [j, be], [P, B]],
          [
            /(?:huawei) ?([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i,
          ],
          [N, [j, be], [P, H]],
          [
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
          ],
          [
            [N, /_/g, " "],
            [j, Oe],
            [P, B],
          ],
          [
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
            / ([\w ]+) miui\/v?\d/i,
          ],
          [
            [N, /_/g, " "],
            [j, Oe],
            [P, H],
          ],
          [
            /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [N, [j, xe], [P, H]],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [N, [j, Se], [P, H]],
          [/\b(opd2(\d{3}a?))(?: bui|\))/i],
          [
            N,
            [
              j,
              ei,
              { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": Se },
            ],
            [P, B],
          ],
          [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
          [N, [j, "BLU"], [P, H]],
          [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [N, [j, "Vivo"], [P, H]],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [N, [j, "Realme"], [P, H]],
          [
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
          ],
          [N, [j, me], [P, B]],
          [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
          [N, [j, me], [P, H]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
            /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
          ],
          [N, [j, ye], [P, H]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [N, [j, ye], [P, B]],
          [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [N, [j, ge], [P, B]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [N, [j, ge], [P, H]],
          [/(nokia) (t[12][01])/i],
          [j, N, [P, B]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i,
          ],
          [
            [N, /_/g, " "],
            [P, H],
            [j, "Nokia"],
          ],
          [/(pixel (c|tablet))\b/i],
          [N, [j, pe], [P, B]],
          [
            /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
          ],
          [N, [j, pe], [P, H]],
          [/(google) (pixelbook( go)?)/i],
          [j, N],
          [
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [N, [j, Ee], [P, H]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [N, "Xperia Tablet"],
            [j, Ee],
            [P, B],
          ],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [N, [j, de], [P, B]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [N, /(.+)/g, "Fire Phone $1"],
            [j, de],
            [P, H],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [N, j, [P, B]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
          [N, [j, we], [P, H]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [N, [j, ue], [P, B]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [N, [j, ue], [P, H]],
          [/(nexus 9)/i],
          [N, [j, "HTC"], [P, B]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [j, [N, /_/g, " "], [P, H]],
          [
            /tcl (xess p17aa)/i,
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [N, [j, "TCL"], [P, B]],
          [
            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
          ],
          [N, [j, "TCL"], [P, H]],
          [/(itel) ((\w+))/i],
          [
            [j, Ge],
            N,
            [P, ei, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [N, [j, "Acer"], [P, B]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [N, [j, "Meizu"], [P, H]],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [N, [j, "Ulefone"], [P, H]],
          [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
          [N, [j, "Energizer"], [P, H]],
          [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
          [N, [j, "Cat"], [P, H]],
          [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
          [N, [j, "Smartfren"], [P, H]],
          [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
          [N, [j, "Nothing"], [P, H]],
          [
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
          ],
          [N, [j, "Archos"], [P, B]],
          [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
          [N, [j, "Archos"], [P, H]],
          [/; (n159v)/i],
          [N, [j, "HMD"], [P, H]],
          [
            /(imo) (tab \w+)/i,
            /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i,
          ],
          [j, N, [P, B]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
            /(hp) ([\w ]+\w)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(oppo) ?([\w ]+) bui/i,
            /(hisense) ([ehv][\w ]+)\)/i,
            /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
          ],
          [j, N, [P, H]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
          ],
          [j, N, [P, B]],
          [/(surface duo)/i],
          [N, [j, ve], [P, B]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [N, [j, "Fairphone"], [P, H]],
          [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
          [N, [j, ke], [P, B]],
          [/(sprint) (\w+)/i],
          [j, N, [P, H]],
          [/(kin\.[onetw]{3})/i],
          [
            [N, /\./g, " "],
            [j, ve],
            [P, H],
          ],
          [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [N, [j, Ie], [P, B]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [N, [j, Ie], [P, H]],
          [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
          [j, [P, F]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [N, /^/, "SmartTV"],
            [j, Ce],
            [P, F],
          ],
          [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
          [j, N, [P, F]],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [j, ge],
            [P, F],
          ],
          [/(apple) ?tv/i],
          [j, [N, he + " TV"], [P, F]],
          [/crkey.*devicetype\/chromecast/i],
          [
            [N, Me + " Third Generation"],
            [j, pe],
            [P, F],
          ],
          [/crkey.*devicetype\/([^/]*)/i],
          [
            [N, /^/, "Chromecast "],
            [j, pe],
            [P, F],
          ],
          [/fuchsia.*crkey/i],
          [
            [N, Me + " Nest Hub"],
            [j, pe],
            [P, F],
          ],
          [/crkey/i],
          [
            [N, Me],
            [j, pe],
            [P, F],
          ],
          [/(portaltv)/i],
          [N, [j, je], [P, F]],
          [/droid.+aft(\w+)( bui|\))/i],
          [N, [j, de], [P, F]],
          [/(shield \w+ tv)/i],
          [N, [j, ke], [P, F]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [N, [j, Te], [P, F]],
          [/(bravia[\w ]+)( bui|\))/i],
          [N, [j, Ee], [P, F]],
          [/(mi(tv|box)-?\w+) bui/i],
          [N, [j, Oe], [P, F]],
          [/Hbbtv.*(technisat) (.*);/i],
          [j, N, [P, F]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
          ],
          [
            [j, /.+\/(\w+)/, "$1", ei, { LG: "lge" }],
            [N, Ye],
            [P, F],
          ],
          [/(playstation \w+)/i],
          [N, [j, Ee], [P, z]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [N, [j, ve], [P, z]],
          [
            /(ouya)/i,
            /(nintendo) (\w+)/i,
            /(retroid) (pocket ([^\)]+))/i,
            /(valve).+(steam deck)/i,
            /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
          ],
          [
            [
              j,
              ei,
              { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" },
            ],
            N,
            [P, z],
          ],
          [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
          [N, [j, Ce], [P, $]],
          [
            /((pebble))app/i,
            /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
          ],
          [j, N, [P, $]],
          [/(ow(?:19|20)?we?[1-3]{1,3})/i],
          [N, [j, Se], [P, $]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [N, [j, he], [P, $]],
          [/(opwwe\d{3})/i],
          [N, [j, xe], [P, $]],
          [/(moto 360)/i],
          [N, [j, ye], [P, $]],
          [/(smartwatch 3)/i],
          [N, [j, Ee], [P, $]],
          [/(g watch r)/i],
          [N, [j, ge], [P, $]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [N, [j, Ie], [P, $]],
          [/droid.+; (glass) \d/i],
          [N, [j, pe], [P, V]],
          [/(pico) ([\w ]+) os\d/i],
          [j, N, [P, V]],
          [/(quest( \d| pro)?s?).+vr/i],
          [N, [j, je], [P, V]],
          [/mobile vr; rv.+firefox/i],
          [[P, V]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [j, [P, W]],
          [/(aeobc)\b/i],
          [N, [j, de], [P, W]],
          [/(homepod).+mac os/i],
          [N, [j, he], [P, W]],
          [/windows iot/i],
          [[P, W]],
          [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
          [N, [P, F]],
          [
            /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i,
          ],
          [[P, F]],
          [
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i,
          ],
          [N, [P, ei, { mobile: "Mobile", xr: "VR", "*": B }]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[P, B]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[P, H]],
          [/droid .+?; ([\w\. -]+)( bui|\))/i],
          [N, [j, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [D, [q, _e + "HTML"]],
          [/(arkweb)\/([\w\.]+)/i],
          [q, D],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [D, [q, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [q, D],
          [/ladybird\//i],
          [[q, "LibWeb"]],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [D, q],
        ],
        os: [
          [/(windows nt) (6\.[23]); arm/i],
          [
            [q, /N/, "R"],
            [D, ei, ii],
          ],
          [
            /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
            /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
          ],
          [q, D],
          [
            /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
            /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i,
          ],
          [
            [D, /(;|\))/g, "", ei, ii],
            [q, Ne],
          ],
          [/(windows ce)\/?([\d\.]*)/i],
          [q, D],
          [
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
            /\btvos ?([\w\.]+)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [D, /_/g, "."],
            [q, "iOS"],
          ],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i,
          ],
          [
            [q, "macOS"],
            [D, /_/g, "."],
          ],
          [/android ([\d\.]+).*crkey/i],
          [D, [q, Me + " Android"]],
          [/fuchsia.*crkey\/([\d\.]+)/i],
          [D, [q, Me + " Fuchsia"]],
          [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
          [D, [q, Me + " SmartSpeaker"]],
          [/linux.*crkey\/([\d\.]+)/i],
          [D, [q, Me + " Linux"]],
          [/crkey\/([\d\.]+)/i],
          [D, [q, Me]],
          [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
          [D, q],
          [/(ubuntu) ([\w\.]+) like android/i],
          [[q, /(.+)/, "$1 Touch"], D],
          [
            /(harmonyos)[\/ ]?([\d\.]*)/i,
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
          ],
          [q, D],
          [/\(bb(10);/i],
          [D, [q, we]],
          [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
          [D, [q, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
          ],
          [D, [q, qe + " OS"]],
          [
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
            /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i,
          ],
          [D, [q, "webOS"]],
          [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
          [
            [
              D,
              ei,
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
            [q, "webOS"],
          ],
          [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
          [D, [q, "watchOS"]],
          [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
          [D, [q, "Chrome OS"]],
          [/kepler ([\w\.]+); (aft|aeo)/i],
          [D, [q, "Vega OS"]],
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
          [q, D],
          [/(sunos) ?([\d\.]*)/i],
          [[q, "Solaris"], D],
          [
            /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [q, D],
        ],
      },
      si =
        (Xe.call(
          (y = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }).init,
          [
            [O, [q, D, A, P]],
            [I, [L]],
            [R, [P, N, j]],
            [U, [q, D]],
            [M, [q, D]],
          ],
        ),
        Xe.call(y.isIgnore, [
          [O, [D, A]],
          [U, [D]],
          [M, [D]],
        ]),
        Xe.call(y.isIgnoreRgx, [
          [O, / ?browser$/i],
          [M, / ?os$/i],
        ]),
        Xe.call(y.toString, [
          [O, [q, D]],
          [I, [L]],
          [R, [j, N]],
          [U, [q, D]],
          [M, [q, D]],
        ]),
        y),
      ni = function (e, i) {
        var t = si.init[i],
          o = si.isIgnore[i] || 0,
          r = si.isIgnoreRgx[i] || 0,
          s = si.toString[i] || 0;
        function n() {
          Xe.call(this, t);
        }
        return (
          (n.prototype.getItem = function () {
            return e;
          }),
          (n.prototype.withClientHints = function () {
            return He
              ? He.getHighEntropyValues(ce).then(function (i) {
                  return e.setCH(new ai(i, !1)).parseCH().get();
                })
              : e.parseCH().get();
          }),
          (n.prototype.withFeatureCheck = function () {
            return e.detectFeature().get();
          }),
          i != _ &&
            ((n.prototype.is = function (e) {
              var i = !1;
              for (var t in this)
                if (
                  this.hasOwnProperty(t) &&
                  !Fe(o, t) &&
                  Ge(r ? Qe(r, this[t]) : this[t]) == Ge(r ? Qe(r, e) : e)
                ) {
                  if (((i = !0), e != E)) break;
                } else if (e == E && i) {
                  i = !i;
                  break;
                }
              return i;
            }),
            (n.prototype.toString = function () {
              var e = x;
              for (var i in s)
                typeof this[s[i]] !== E && (e += (e ? " " : x) + this[s[i]]);
              return e || E;
            })),
          (n.prototype.then = function (e) {
            var i = this,
              t = function () {
                for (var e in i) i.hasOwnProperty(e) && (this[e] = i[e]);
              };
            t.prototype = {
              is: n.prototype.is,
              toString: n.prototype.toString,
              withClientHints: n.prototype.withClientHints,
              withFeatureCheck: n.prototype.withFeatureCheck,
            };
            var o = new t();
            return (e(o), o);
          }),
          new n()
        );
      };
    function ai(e, i) {
      if (((e = e || {}), Xe.call(this, ce), i))
        Xe.call(this, [
          [K, We(e[ee])],
          [Q, We(e[ie])],
          [H, /\?1/.test(e[se])],
          [N, Je(e[ne])],
          [J, Je(e[ae])],
          [Y, Je(e[le])],
          [L, Je(e[te])],
          [X, We(e[re])],
          [Z, Je(e[oe])],
        ]);
      else
        for (var t in e)
          this.hasOwnProperty(t) && typeof e[t] !== E && (this[t] = e[t]);
    }
    function li(e, i, t, o) {
      return (
        Xe.call(this, [
          ["itemType", e],
          ["ua", i],
          ["uaCH", o],
          ["rgxMap", t],
          ["data", ni(this, e)],
        ]),
        this
      );
    }
    function ci(e, i, t) {
      if (
        (typeof e === C
          ? ($e(e, !0)
              ? (typeof i === C && (t = i), (i = e))
              : ((t = e), (i = void 0)),
            (e = void 0))
          : typeof e !== T || $e(i, !0) || ((t = i), (i = void 0)),
        t)
      )
        if (typeof t.append === S) {
          var o = {};
          (t.forEach(function (e, i) {
            o[String(i).toLowerCase()] = e;
          }),
            (t = o));
        } else {
          var r = {};
          for (var s in t)
            t.hasOwnProperty(s) && (r[String(s).toLowerCase()] = t[s]);
          t = r;
        }
      if (!(this instanceof ci)) return new ci(e, i, t).getResult();
      var n =
          typeof e === T
            ? e
            : t && t[k]
              ? t[k]
              : ze && ze.userAgent
                ? ze.userAgent
                : x,
        a = new ai(t, !0),
        l = i
          ? (function (e, i) {
              var t = {},
                o = i;
              if (!$e(i))
                for (var r in ((o = {}), i))
                  for (var s in i[r]) o[s] = i[r][s].concat(o[s] ? o[s] : []);
              for (var n in e)
                t[n] = o[n] && o[n].length % 2 == 0 ? o[n].concat(e[n]) : e[n];
              return t;
            })(ri, i)
          : ri,
        c = function (e) {
          return e == _
            ? function () {
                return new li(e, n, l, a)
                  .set("ua", n)
                  .set(O, this.getBrowser())
                  .set(I, this.getCPU())
                  .set(R, this.getDevice())
                  .set(U, this.getEngine())
                  .set(M, this.getOS())
                  .get();
              }
            : function () {
                return new li(e, n, l[e], a).parseUA().get();
              };
        };
      return (
        Xe.call(this, [
          ["getBrowser", c(O)],
          ["getCPU", c(I)],
          ["getDevice", c(R)],
          ["getEngine", c(U)],
          ["getOS", c(M)],
          ["getResult", c(_)],
          [
            "getUA",
            function () {
              return n;
            },
          ],
          [
            "setUA",
            function (e) {
              return (Ve(e) && (n = Ye(e, 500)), this);
            },
          ],
        ]).setUA(n),
        this
      );
    }
    ((li.prototype.get = function (e) {
      return e
        ? this.data.hasOwnProperty(e)
          ? this.data[e]
          : void 0
        : this.data;
    }),
      (li.prototype.set = function (e, i) {
        return ((this.data[e] = i), this);
      }),
      (li.prototype.setCH = function (e) {
        return ((this.uaCH = e), this);
      }),
      (li.prototype.detectFeature = function () {
        if (ze && ze.userAgent == this.ua)
          switch (this.itemType) {
            case O:
              ze.brave && typeof ze.brave.isBrave == S && this.set(q, "Brave");
              break;
            case R:
              (!this.get(P) && He && He[H] && this.set(P, H),
                "Macintosh" == this.get(N) &&
                  ze &&
                  typeof ze.standalone !== E &&
                  ze.maxTouchPoints &&
                  ze.maxTouchPoints > 2 &&
                  this.set(N, "iPad").set(P, B));
              break;
            case M:
              !this.get(q) && He && He[J] && this.set(q, He[J]);
              break;
            case _:
              var e = this.data,
                i = function (i) {
                  return e[i].getItem().detectFeature().get();
                };
              this.set(O, i(O))
                .set(I, i(I))
                .set(R, i(R))
                .set(U, i(U))
                .set(M, i(M));
          }
        return this;
      }),
      (li.prototype.parseUA = function () {
        switch (
          (this.itemType != _ && Ze.call(this.data, this.ua, this.rgxMap),
          this.itemType)
        ) {
          case O:
            this.set(A, Ke(this.get(D)));
            break;
          case M:
            if ("iOS" == this.get(q) && "18.6" == this.get(D)) {
              var e = /\) Version\/([\d\.]+)/.exec(this.ua);
              e &&
                parseInt(e[1].substring(0, 2), 10) >= 26 &&
                this.set(D, e[1]);
            }
        }
        return this;
      }),
      (li.prototype.parseCH = function () {
        var e = this.uaCH,
          i = this.rgxMap;
        switch (this.itemType) {
          case O:
          case U:
            var t,
              o = e[Q] || e[K];
            if (o)
              for (var r = 0; r < o.length; r++) {
                var s = o[r].brand || o[r],
                  n = o[r].version;
                (this.itemType == O &&
                  !/not.a.brand/i.test(s) &&
                  (!t ||
                    (/Chrom/.test(t) && s != Ue) ||
                    (t == _e && /WebView2/.test(s))) &&
                  ((s = ei(s, oi)),
                  ((t = this.get(q)) && !/Chrom/.test(t) && /Chrom/.test(s)) ||
                    this.set(q, s).set(D, n).set(A, Ke(n)),
                  (t = s)),
                  this.itemType == U && s == Ue && this.set(D, n));
              }
            break;
          case I:
            var a = e[L];
            a &&
              (a && "64" == e[Z] && (a += "64"),
              Ze.call(this.data, a + ";", i));
            break;
          case R:
            if (
              (e[H] && this.set(P, H),
              e[N] && (this.set(N, e[N]), !this.get(P) || !this.get(j)))
            ) {
              var l = {};
              (Ze.call(l, "droid 9; " + e[N] + ")", i),
                !this.get(P) && l.type && this.set(P, l.type),
                !this.get(j) && l.vendor && this.set(j, l.vendor));
            }
            if (e[X]) {
              var c;
              if ("string" != typeof e[X])
                for (var d = 0; !c && d < e[X].length; ) c = ei(e[X][d++], ti);
              else c = ei(e[X], ti);
              this.set(P, c);
            }
            break;
          case M:
            var h = e[J];
            if (h) {
              var u = e[Y];
              (h == Ne && (u = parseInt(Ke(u), 10) >= 13 ? "11" : "10"),
                this.set(q, h).set(D, u));
            }
            this.get(q) == Ne &&
              "Xbox" == e[N] &&
              this.set(q, "Xbox").set(D, void 0);
            break;
          case _:
            var w = this.data,
              p = function (i) {
                return w[i].getItem().setCH(e).parseCH().get();
              };
            this.set(O, p(O))
              .set(I, p(I))
              .set(R, p(R))
              .set(U, p(U))
              .set(M, p(M));
        }
        return this;
      }),
      (ci.VERSION = "2.0.9"),
      (ci.BROWSER = Be([q, D, A, P])),
      (ci.CPU = Be([L])),
      (ci.DEVICE = Be([N, j, P, z, H, F, B, $, W])),
      (ci.ENGINE = ci.OS = Be([q, D])));
    var di,
      hi,
      ui = function (e, i, t, o) {
        if ("a" === t && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof i ? e !== i || !o : !i.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : i.get(e);
      };
    function wi() {
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
    class pi {
      static get instance() {
        return (
          ui(this, di, "f", hi) ||
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
            })(this, di, new di(), "f", hi),
            (globalThis.__sentry__ = ui(this, di, "f", hi))),
          ui(this, di, "f", hi)
        );
      }
      constructor() {
        var e, i, t, o, r, s;
        ((this.codeErrors = new Set()),
          (this.whiteScreenTimer = null),
          (this.options = p),
          (this.shouldRecordScreen = !1));
        const n = new ci().getResult();
        this.deviceInfo = {
          browserName: null !== (e = n.browser.name) && void 0 !== e ? e : w,
          browserVersion:
            null !== (i = n.browser.version) && void 0 !== i ? i : w,
          osName: null !== (t = n.os.name) && void 0 !== t ? t : w,
          osVersion: null !== (o = n.os.version) && void 0 !== o ? o : w,
          userAgent: n.ua,
          deviceModel: null !== (r = n.device.model) && void 0 !== r ? r : w,
          deviceType: null !== (s = n.device.type) && void 0 !== s ? s : w,
          fingerprint: wi(),
          language: navigator.language || w,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        };
      }
      setOptions(e) {
        ui(di, di, "f", hi).options = { ...this.options, ...e };
      }
    }
    ((di = pi), (hi = { value: void 0 }));
    const bi = pi.instance,
      mi = "#74d4ff",
      fi = "#bbf45",
      gi = "#ffb869",
      vi = "#ffa2a2",
      yi = (e) =>
        `color: #62748e; background: ${e}; padding: 2px 6px; border-radius: 4px; font-weight: 600;`,
      ki = (e) => `color: ${e}; font-weight: 600;`,
      xi = {
        info: { title: yi(mi), subtitle: ki(mi) },
        success: { title: yi(fi), subtitle: ki(fi) },
        warn: { title: yi(gi), subtitle: ki(gi) },
        error: { title: yi(vi), subtitle: ki(vi) },
        timestamp: { label: "color: #dab2ff;", value: ki(fi) },
      },
      Si = {
        get isEnabled() {
          return !0;
        },
        info(e, i, t, o) {
          this.isEnabled &&
            (console.groupCollapsed(
              `%c ${e} %c ${i} `,
              xi.info.title,
              xi.info.subtitle,
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
              xi.success.title,
              xi.success.subtitle,
            ),
            void 0 !== o &&
              console.log(
                "%cTime cost%c " + o + "ms",
                xi.timestamp.label,
                xi.timestamp.value,
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
              xi.warn.title,
              xi.warn.subtitle,
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
              xi.error.title,
              xi.error.subtitle,
            ),
            void 0 !== t &&
              (console.group("Error Details"),
              console.error(t),
              console.groupEnd()),
            console.groupEnd());
        },
      };
    var Ci,
      Ti,
      Ei = function (e, i, t, o) {
        if ("a" === t && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof i ? e !== i || !o : !i.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : i.get(e);
      };
    class Oi {
      constructor() {
        ((this.cbQueue = new b()),
          (this.id = crypto.randomUUID()),
          (this.events = []),
          (this.isOnline = !0));
      }
      static get instance() {
        return (
          Ei(this, Ci, "f", Ti) ||
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
            })(this, Ci, new Ci(), "f", Ti),
            Ei(this, Ci, "f", Ti).initNetworkListener()),
          Ei(this, Ci, "f", Ti)
        );
      }
      initNetworkListener() {
        "undefined" != typeof window &&
          ((this.isOnline = !1 !== navigator.onLine),
          window.addEventListener("online", () => {
            ((this.isOnline = !0),
              Si.info(
                "Sonnet Sentry",
                "Network is back online, flushing cache",
              ),
              this.loadOfflineCache(),
              this.flush());
          }),
          window.addEventListener("offline", () => {
            ((this.isOnline = !1),
              Si.info("Sonnet Sentry", "Network is offline, caching events"));
          }));
      }
      loadOfflineCache() {
        try {
          const e = localStorage.getItem(bi.options.offlineCacheKey);
          if (e) {
            const i = JSON.parse(e);
            (Array.isArray(i) && this.events.unshift(...i),
              localStorage.removeItem(bi.options.offlineCacheKey));
          }
        } catch (e) {}
      }
      saveOfflineCache() {
        try {
          localStorage.setItem(
            bi.options.offlineCacheKey,
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
          navigator.sendBeacon(bi.options.dsn, JSON.stringify(e))
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
        fetch(bi.options.dsn, { method: "HEAD" })
          .then((e) => {
            e.ok
              ? ((this.isOnline = !0),
                Si.info(
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
          fetch(bi.options.dsn, {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json" },
            keepalive: !0,
          })
            .then((e) => {
              e.ok || this.handleServerError();
            })
            .catch((e) => {
              (Si.error("Sonnet Sentry Report", "Fetch report failed", e),
                this.handleServerError());
            });
        });
      }
      reportByImage(e) {
        const { dsn: i } = bi.options;
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
          message: s,
          status: n,
        } = e;
        return {
          type: i,
          name: t,
          time: o,
          timestamp: r,
          message: s,
          status: n,
          id: this.id,
          url: location.href,
          userId: bi.options.userId,
          projectId: bi.options.projectId,
          sdkVersion: u,
          deviceInfo: bi.deviceInfo,
          payload: e,
        };
      }
      flush() {
        if (0 === this.events.length) return;
        if (!this.isOnline)
          return (
            this.events.length > bi.options.maxQueueLength &&
              (this.events = this.events.slice(-bi.options.maxQueueLength)),
            void this.saveOfflineCache()
          );
        const e = bi.options.cacheMaxLength,
          i = this.events.slice(0, e);
        this.events = this.events.slice(e);
        const t = performance.now(),
          o = this.isObjectOverSizeLimit(i, 60);
        let r = !1;
        (o || (r = this.sendBeacon(i)),
          r ||
            (bi.options.useImageReport && !this.isObjectOverSizeLimit(i, 2)
              ? this.reportByImage(i)
              : this.reportByFetch(i)),
          Si.success(
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
          cacheMaxLength: s,
          cacheWaitingTime: n,
          maxQueueLength: a,
          tracesSampleRate: l,
        } = bi.options;
        if ("" === t)
          return void Si.error(
            "Sonnet Sentry",
            "DSN is empty, report cancelled",
            e,
          );
        if (Math.random() > l)
          return void Si.info(
            "Sonnet Sentry Report",
            `Dropped by sample rate: ${e.type}`,
          );
        o.includes(e.type) && (bi.shouldRecordScreen = !0);
        let c = this.payload2reportData(e);
        if (!r || ((c = await r(c)), c)) {
          if (
            (Si.info("Sonnet Sentry Report", `Type: ${e.type}`, c),
            this.events.push(c),
            !this.isOnline)
          )
            return (
              this.events.length > a && (this.events = this.events.slice(-a)),
              void this.saveOfflineCache()
            );
          (this.timeoutID && clearTimeout(this.timeoutID),
            i || this.events.length >= s
              ? this.flush()
              : (this.timeoutID = setTimeout(() => this.flush(), n)));
        }
      }
    }
    ((Ci = Oi), (Ti = { value: void 0 }));
    const Ii = Oi.instance,
      Ri = class extends c {
        constructor() {
          (super(o.Custom),
            (this.ioMap = new Map()),
            (this.targetMap = new Map()));
        }
        init() {
          Si.info("Sonnet Sentry Exposure", "Exposure plugin initialized");
        }
        initObserver(e) {
          return new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                const i = this.targetMap.get(e.target);
                if (i)
                  if (e.isIntersecting) i.showTime = Date.now();
                  else {
                    if (!i.showTime) return;
                    const e = Date.now();
                    (this.sendEvent(i, e), delete i.showTime);
                  }
              });
            },
            { threshold: e },
          );
        }
        sendEvent(e, i) {
          Ii.send({
            id: crypto.randomUUID ? crypto.randomUUID() : g(),
            deviceId: g(),
            sessionId: v(),
            message: "",
            timestamp: Date.now(),
            time: new Date().toISOString(),
            name: "",
            status: t.OK,
            type: o.Custom,
            type: o.Custom,
            name: "Exposure",
            message: "Element Exposure",
            status: t.OK,
            extra: {
              threshold: e.threshold,
              observeTime: e.observeTime,
              showTime: e.showTime,
              showEndTime: i,
              duration: i - e.showTime,
              params: e.params,
            },
          });
        }
        observe(e) {
          (Array.isArray(e) ? e : [e]).forEach((e) => {
            const i = e.threshold || 0.5;
            (this.ioMap.has(i) || this.ioMap.set(i, this.initObserver(i)),
              this.targetMap.has(e.target) ||
                (this.ioMap.get(i).observe(e.target),
                this.targetMap.set(e.target, {
                  threshold: i,
                  observeTime: Date.now(),
                  params: e.params,
                })));
          });
        }
        unobserve(e) {
          const i = this.targetMap.get(e);
          if (!i) return;
          const t = this.ioMap.get(i.threshold);
          (t && t.unobserve(e), this.targetMap.delete(e));
        }
      };
    return l;
  })(),
);
