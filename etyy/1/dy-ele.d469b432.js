!function(t) {
  var e = {};
  function r(n) {
      if (e[n])
          return e[n].exports;
      var i = e[n] = {
          i: n,
          l: !1,
          exports: {
              __esModule: undefined
          }
      };
      return t[n].call(i.exports, i, i.exports, r),
      i.l = !0,
      i.exports
  }
  r.m = t,
  r.c = e,
  r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
      })
  }
  ,
  r.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(t, "__esModule", {
          value: !0
      })
  }
  ,
  r.t = function(t, e) {
      if (1 & e && (t = r(t)),
      8 & e)
          return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
      var n = Object.create(null);
      if (r.r(n),
      Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
      }),
      2 & e && "string" != typeof t)
          for (var i in t)
              r.d(n, i, function(e) {
                  return t[e]
              }
              .bind(null, i));
      return n
  }
  ,
  r.n = function(t) {
      var e = t && t.__esModule ? function() {
          return t["default"]
      }
      : function() {
          return t
      }
      ;
      return r.d(e, "a", e),
      e
  }
  ,
  r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }
  ,
  r.p = "",
  r(r.s = 90)
}([function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.addUrlParam = e.getQueryParam = e.getQueryMap = e.getQuery = e.cutUrl = e.getEntryUrl = e.getHref = void 0;
  e.getHref = function() {
      try {
          return location.href
      } catch (t) {
          try {
              return document.URL
          } catch (t) {}
      }
      return ""
  }
  ;
  e.getEntryUrl = function() {
      var t = e.getHref();
      try {
          if (t.indexOf("xui.ptlogin2.qq.com") > -1) {
              var r = t.match(/s_url=(.*?)&/);
              r && (t = decodeURIComponent(r[1]))
          }
      } catch (n) {}
      return t
  }
  ;
  e.cutUrl = function(t) {
      if (t) {
          var e = t.indexOf("?");
          if (e > 0)
              return t.substring(0, e)
      }
      return t
  }
  ;
  e.getQuery = function(t) {
      var e = t ? 1 : 0;
      try {
          return location.search.substr(e)
      } catch (i) {
          try {
              var r = document.URL
                , n = r.indexOf("?");
              if (n >= 0)
                  return r.substr(n + e)
          } catch (i) {}
      }
      return ""
  }
  ;
  e.getQueryMap = function() {
      for (var t = {}, r = e.getQuery(!0).split("&"), n = 0; n < r.length; n++) {
          var i = /(.*?)=(.*)/.exec(r[n]);
          i && (t[i[1]] = i[2])
      }
      return t
  }
  ;
  e.getQueryParam = function(t) {
      return e.getQueryMap()[t]
  }
  ;
  var n = function(t, e, r) {
      if (-1 != t.indexOf("?")) {
          var n = new RegExp("(\\?|&" + e + ")=[^&]*");
          t = n.test(t) ? t.replace(n, "$1=" + r) : t + "&" + e + "=" + r
      } else
          t = t + "?" + e + "=" + r;
      return t
  };
  e.addUrlParam = function(t, e) {
      var r;
      for (r in e)
          "undefined" != typeof e[r] && (t = n(t, encodeURIComponent(r), encodeURIComponent("" + e[r])));
      return t
  }
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.setVoiceOverFocus = e.bodyAriaHidden = e.addAriaModel = e.isTouchEventSupported = e.get$EventPosition = e.test$TouchEvent = e.supportsPassive = e.isWindow = e.getWindow = e.getOffset = e.isDarkMode = e.shakeEl = e.addOnceAnimationClass = e.animationEndName = e.removeClass = e.addClass = e.setCss = e.getCSS = e.supportsCSS = e.createGeneralIframe = void 0;
  var i = r(2)
    , o = n(r(5));
  e.createGeneralIframe = function(t) {
      var e = document.createElement("div");
      (null === t || void 0 === t ? void 0 : t.name) ? e.innerHTML = '<iframe name="' + (null === t || void 0 === t ? void 0 : t.name) + '" />' : e.innerHTML = "<iframe />";
      var r = e.childNodes[0];
      return (null === t || void 0 === t ? void 0 : t.id) && (r.id = t.id),
      (null === t || void 0 === t ? void 0 : t.className) && (r.className = t.className),
      r.setAttribute("frameborder", "0"),
      r.setAttribute("border", "0"),
      r.setAttribute("marginheight", "0"),
      r.setAttribute("marginwidth", "0"),
      r.setAttribute("scrolling", "no"),
      r
  }
  ;
  e.supportsCSS = function(t, e) {
      var r = document.createElement("div");
      return t in r.style && "length" !== t && "parentRule" !== t && (r.style[t] = e,
      r.style[t] === e)
  }
  ;
  e.getCSS = function(t, e) {
      return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle(t, null)[e]
  }
  ;
  e.setCss = function(t, e) {
      if (t && e && i.isObject(e)) {
          for (var r in e)
              try {
                  t.style[r] = e[r]
              } catch (n) {}
          return e
      }
  }
  ;
  e.addClass = function(t, e) {
      if (t.classList)
          t.classList.add(e);
      else {
          var r = t.className
            , n = r + ("" !== r ? " " : "") + e;
          t.className = n
      }
  }
  ;
  e.removeClass = function(t, e) {
      if (t.classList)
          return t.classList.remove(e);
      var r = " " + t.className + " "
        , n = (r = r.replace(/(\s+)/gi, " ")).replace(" " + e + " ", " ");
      n = n.replace(/(^\s+)|(\s+$)/g, ""),
      t.className = n
  }
  ,
  e.animationEndName = function() {
      var t, e = document.createElement("fake"), r = {
          animation: "animationend",
          mozAnimation: "mozAnimationEnd",
          webkitAnimation: "webkitAnimationEnd"
      };
      for (t in r)
          if (e.style[t] !== undefined)
              return r[t];
      return !1
  }();
  e.addOnceAnimationClass = function(t) {
      var r = t.el
        , n = t.className
        , a = t.callback
        , s = t.duration;
      s || (s = 400),
      i.isArray(r) || (r = [r]);
      for (var c = 0; c < r.length; c++) {
          var u = r[c];
          e.addClass(u, n)
      }
      var l = function() {
          i.isArray(r) || (r = [r]);
          for (var t = 0; t < r.length; t++) {
              var s = r[t];
              e.removeClass(s, n)
          }
          a(),
          e.animationEndName && o["default"].remove(r[0], e.animationEndName, l)
      };
      e.animationEndName ? o["default"].add(r[0], e.animationEndName, l) : setTimeout(l, s)
  }
  ;
  e.shakeEl = function(t, r) {
      e.addOnceAnimationClass({
          el: t,
          className: "shake",
          callback: r
      })
  }
  ;
  function a(t) {
      return s(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
  }
  function s(t) {
      return null != t && t == t.window
  }
  function c(t) {
      return /^touch/.test(t.type)
  }
  e.isDarkMode = function() {
      var t;
      return null === (t = window.matchMedia) || void 0 === t ? void 0 : t.call(window, "(prefers-color-scheme: dark)").matches
  }
  ,
  e.getOffset = function(t) {
      var e, r, n = {
          top: 0,
          left: 0
      }, i = null === t || void 0 === t ? void 0 : t.ownerDocument;
      if (i) {
          e = i.documentElement,
          "undefined" != typeof t.getBoundingClientRect && (n = t.getBoundingClientRect());
          var o = 0
            , s = 0;
          return (r = a(i)) && (o = (r.pageYOffset || e.scrollTop) - (e.clientTop || 0),
          s = (r.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)),
          {
              top: n.top + o,
              left: n.left + s
          }
      }
  }
  ,
  e.getWindow = a,
  e.isWindow = s,
  e.supportsPassive = function() {
      var t = !1;
      try {
          var e = Object.defineProperty({}, "passive", {
              get: function() {
                  t = !0
              }
          });
          window.addEventListener("testPassive", null, e),
          window.removeEventListener("testPassive", null, e)
      } catch (r) {}
      return t
  }(),
  e.test$TouchEvent = c,
  e.get$EventPosition = function(t) {
      if (c(t)) {
          var e;
          t.originalEvent && (e = t.originalEvent);
          var r = ((null === e || void 0 === e ? void 0 : e.touches) || [])[0];
          return r ? {
              x: r.clientX,
              y: r.clientY
          } : null
      }
      return {
          x: t.pageX,
          y: t.pageY
      }
  }
  ,
  e.isTouchEventSupported = function() {
      return "ontouchstart"in document.createElement("div")
  }
  ,
  e.addAriaModel = function(t) {
      try {
          t.setAttribute("role", "dialog"),
          t.setAttribute("aria-modal", "true"),
          t.setAttribute("aria-label", "\u9a8c\u8bc1\u7801")
      } catch (e) {}
  }
  ,
  e.bodyAriaHidden = {
      hide: function() {
          try {
              document.body.setAttribute("aria-hidden", "true")
          } catch (t) {}
      },
      unhide: function() {
          try {
              document.body.setAttribute("aria-hidden", "false")
          } catch (t) {}
      }
  },
  e.setVoiceOverFocus = function(t) {
      t.setAttribute("tabindex", "0"),
      t.blur();
      var e = 0
        , r = window.setInterval(function() {
          t.focus(),
          (e += 1) >= 10 && window.clearInterval(r)
      }, 10)
  }
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
      n === undefined && (n = r),
      Object.defineProperty(t, n, {
          enumerable: !0,
          get: function() {
              return e[r]
          }
      })
  }
  : function(t, e, r, n) {
      n === undefined && (n = r),
      t[n] = e[r]
  }
  )
    , i = this && this.__exportStar || function(t, e) {
      for (var r in t)
          "default" === r || Object.prototype.hasOwnProperty.call(e, r) || n(e, t, r)
  }
  ;
  e.__esModule = !0,
  i(r(1), e),
  i(r(4), e),
  i(r(0), e),
  i(r(10), e),
  i(r(11), e),
  i(r(12), e)
}
, function(t, e, r) {
  "use strict";
  var n = Object.prototype.hasOwnProperty
    , i = Object.prototype.toString
    , o = Object.defineProperty
    , a = Object.getOwnPropertyDescriptor
    , s = function(t) {
      return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t)
  }
    , c = function(t) {
      if (!t || "[object Object]" !== i.call(t))
          return !1;
      var e, r = n.call(t, "constructor"), o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
      if (t.constructor && !r && !o)
          return !1;
      for (e in t)
          ;
      return void 0 === e || n.call(t, e)
  }
    , u = function(t, e) {
      o && "__proto__" === e.name ? o(t, e.name, {
          enumerable: !0,
          configurable: !0,
          value: e.newValue,
          writable: !0
      }) : t[e.name] = e.newValue
  }
    , l = function(t, e) {
      if ("__proto__" === e) {
          if (!n.call(t, e))
              return;
          if (a)
              return a(t, e).value
      }
      return t[e]
  };
  t.exports = function d() {
      var t, e, r, n, i, o, a = arguments[0], p = 1, f = arguments.length, h = !1;
      for ("boolean" == typeof a && (h = a,
      a = arguments[1] || {},
      p = 2),
      (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); p < f; ++p)
          if (null != (t = arguments[p]))
              for (e in t)
                  r = l(a, e),
                  a !== (n = l(t, e)) && (h && n && (c(n) || (i = s(n))) ? (i ? (i = !1,
                  o = r && s(r) ? r : []) : o = r && c(r) ? r : {},
                  u(a, {
                      name: e,
                      newValue: d(h, o, n)
                  })) : void 0 !== n && u(a, {
                      name: e,
                      newValue: n
                  }));
      return a
  }
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.isArray = e.isObject = void 0;
  var n = function(t) {
      return function(e) {
          return Object.prototype.toString.call(e) === "[object " + t + "]"
      }
  };
  e.isObject = n("Object"),
  e.isArray = n("Array")
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0;
  e["default"] = {
      add: function(t, e, r) {
          t && (t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : t["on" + e] = r)
      },
      remove: function(t, e, r) {
          t && (t.removeEventListener ? t.removeEventListener(e, r, !1) : t.detachEvent ? t.detachEvent("on" + e, r) : t["on" + e] = null)
      }
  }
}
, function(t, e, r) {
  "use strict";
  function n(t, r, n) {
      return "terror_" + e.ErrorCode[t] + "_" + r + "_" + Math.floor((new Date).getTime() / 1e3) + (n ? "_" + n : "")
  }
  function i() {
      return "@" + Math.random().toString(36).substr(2)
  }
  e.__esModule = !0,
  e.getRandStr = e.getErrorRes = e.getErrorTicket = e.ErrorCode = void 0,
  e.ErrorCode = {
      ENTRYJS_LOAD_ERROR: 1001,
      CAPTCHA_SHOW_TIMEOUT: 1002,
      FRAMEJS_LOAD_TIMEOUT: 1003,
      FRAMEJS_LOAD_ERROR: 1004,
      FRAMEJS_RUN_ERROR: 1005,
      GET_CAPTCHA_CONFIG_REQUEST_ERROR: 1006,
      PRE_TEMPLATE_LOAD_TIMEOUT: 1007,
      IFRAME_LOAD_TIMEOUT: 1008,
      LIB_JQ_LOAD_ERROR: 1009,
      CAPTCHA_JS_LOAD_ERROR: 1010,
      CAPTCHA_JS_RUN_ERROR: 1011,
      REFRESH_ERROR: 1012,
      VERIFY_ERROR: 1013
  },
  e.getErrorTicket = n,
  e.getErrorRes = function(t, r, o) {
      return {
          ret: 0,
          randstr: i(),
          ticket: n(t, r || "", o),
          errorCode: e.ErrorCode[t],
          errorMessage: t.toLowerCase()
      }
  }
  ,
  e.getRandStr = i
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.all = e.keys = void 0;
  e.keys = ["frame-verification", "frame-back", "frame-simple", "frame-standard", "frame-ok", "aria-verification-simple", "aria-verification-standard", "aria-close", "aria-standard", "aria-simple", "aria-feedback", "aria-refresh", "note-img-load-failed", "note-verify-success", "note-verify-timeout", "note-verify-failed", "note-verify-error", "note-verify-failed-max", "note-verify-default", "note-appid-region-wrong"];
  var n = {
      "zh-cn": ["\u5b89\u5168\u9a8c\u8bc1", "\u8fd4\u56de", "\u6211\u4e0d\u4f1a", "\u5e38\u89c4\u9a8c\u8bc1", "\u786e\u5b9a", "\u65e0\u969c\u788d\u9a8c\u8bc1", "\u5e38\u89c4\u9a8c\u8bc1", "\u5173\u95ed\u9a8c\u8bc1", "\u5207\u6362\u4e3a\u5e38\u89c4\u9a8c\u8bc1\u65b9\u5f0f", "\u6211\u4e0d\u4f1a\uff0c\u6362\u4e00\u79cd\u9a8c\u8bc1\u65b9\u5f0f", "\u95ee\u9898\u53cd\u9988", "\u5237\u65b0\u9a8c\u8bc1", "\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u5237\u65b0", "\u9a8c\u8bc1\u6210\u529f\uff01", "\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5", "\u9a8c\u8bc1\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5", "\u60a8\u7684\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", "\u8fd9\u9898\u6709\u70b9\u96be\u5462\uff0c\u5df2\u4e3a\u60a8\u66f4\u6362\u9898\u76ee", "\u7f51\u7edc\u604d\u60da\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8bd5\u4e00\u6b21\u5427", "appid\u6240\u5c5e\u5730\u57df\u4e0e\u5b9e\u9645\u4f7f\u7528\u5730\u57df\u4e0d\u7b26\uff0c\u8bf7\u8054\u7cfb\u9a8c\u8bc1\u7801\u56e2\u961f\u5904\u7406"],
      "zh-hk": ["\u5b89\u5168\u9a57\u8b49", "\u8fd4\u56de", "\u7121\u969c\u7919\u65b9\u5f0f", "\u5e38\u898f\u9a57\u8b49", "\u78ba\u5b9a", "\u7121\u969c\u7919\u9a57\u8b49", "\u5e38\u898f\u9a57\u8b49", "\u95dc\u9589\u9a57\u8b49", "\u5207\u63db\u70ba\u5e38\u898f\u9a57\u8b49\u65b9\u5f0f", "\u6211\u4e0d\u6703\uff0c\u63db\u4e00\u7a2e\u9a57\u8b49\u65b9\u5f0f", "\u610f\u898b\u53cd\u6620", "\u5237\u65b0\u9a57\u8b49", "\u7121\u6cd5\u52a0\u8f09\u5716\u7247\uff0c\u8acb\u9ede\u64ca\u5237\u65b0", "\u9a57\u8b49\u6210\u529f\uff01", "\u7db2\u7d61\u903e\u6642\uff0c\u8acb\u91cd\u8a66", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66", "\u60a8\u7684\u64cd\u4f5c\u904e\u65bc\u983b\u7e41\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "\u9019\u984c\u6709\u9ede\u96e3\uff0c\u5df2\u70ba\u4f60\u66f4\u63db\u984c\u76ee", "\u7db2\u7d61\u505c\u9813\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8a66\u4e00\u6b21\u5427", "appid\u6240\u5c6c\u5730\u57df\u8207\u5be6\u969b\u4f7f\u7528\u5730\u57df\u4e0d\u7b26\uff0c\u8acb\u806f\u7cfb\u9a57\u8b49\u78bc\u5718\u968a\u8655\u7406"],
      "zh-tw": ["\u5b89\u5168\u9a57\u8b49", "\u8fd4\u56de", "\u7121\u969c\u7919\u65b9\u5f0f", "\u5e38\u898f\u9a57\u8b49", "\u78ba\u5b9a", "\u7121\u969c\u7919\u9a57\u8b49", "\u5e38\u898f\u9a57\u8b49", "\u95dc\u9589\u9a57\u8b49", "\u5207\u63db\u70ba\u5e38\u898f\u9a57\u8b49\u65b9\u5f0f", "\u6211\u4e0d\u6703\uff0c\u63db\u4e00\u7a2e\u9a57\u8b49\u65b9\u5f0f", "\u53cd\u6620\u610f\u898b", "\u5237\u65b0\u9a57\u8b49", "\u5716\u7247\u8f09\u5165\u5931\u6557\uff0c\u8acb\u9ede\u64ca\u91cd\u65b0\u6574\u7406", "\u9a57\u8b49\u6210\u529f\uff01", "\u7db2\u7d61\u903e\u6642\uff0c\u8acb\u91cd\u8a66", "\u9a57\u8b49\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66", "\u60a8\u7684\u64cd\u4f5c\u904e\u65bc\u983b\u7e41\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66", "\u9019\u984c\u6709\u9ede\u96e3\uff0c\u5df2\u70ba\u4f60\u66f4\u63db\u984c\u76ee", "\u7db2\u8def\u4e2d\u65b7\u4e86\u4e00\u4e0b(+)\uff0c\u518d\u8a66\u4e00\u6b21\u5427", "appid\u6240\u5c6c\u5730\u57df\u8207\u5be6\u969b\u4f7f\u7528\u5730\u57df\u4e0d\u7b26\uff0c\u8acb\u806f\u7cfb\u9a57\u8b49\u78bc\u5718\u968a\u8655\u7406"],
      en: ["Verification", "Back", "Simple mode", "Standard mode", "OK", "Simple mode", "Standard mode", "Quit verification", "Switch to Standard mode", "Too difficult? Switch to Simple mode", "Feedback", "Try a new captcha", "Image loading failed. Click to refresh", "Verification passed", "Network timed out. Please try again.", "Verification failed. Try again.", "Operation too often. Please retry later.", "Too hard? Try a new one", "Network error (+). Please try again.", "The AppID does not match the actual location. Please contact the Captcha team."],
      ja: ["\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a8d\u8a3c", "\u623b\u308b", "\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9", "\u4e00\u822c\u30e2\u30fc\u30c9", "OK", "\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9", "\u4e00\u822c\u30e2\u30fc\u30c9", "\u9589\u3058\u308b", "\u4e00\u822c\u30e2\u30fc\u30c9\u3078\u5207\u308a\u66ff\u3048\u308b", "\u30b7\u30f3\u30d7\u30eb\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u3048\u307e\u3059", "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af", "\u518d\u8aad\u307f\u8fbc\u307f", "\u753b\u50cf\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u30af\u30ea\u30c3\u30af\u3057\u3066\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u307e\u3057\u305f", "\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u63a5\u7d9a\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u8a8d\u8a3c\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u64cd\u4f5c\u304c\u983b\u5ea6\u306b\u884c\u308f\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u5f8c\u3067\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044", "\u3053\u306e\u30af\u30a4\u30ba\u306f\u96e3\u3057\u3044\u306e\u3067\u3001\u5225\u306e\u30af\u30a4\u30ba\u306b\u30c1\u30e3\u30ec\u30f3\u30b8\u3057\u307e\u3057\u3087\u3046", "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f(+)\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044", "appid\u306e\u6240\u5c5e\u30ea\u30fc\u30b8\u30e7\u30f3\u306f\u5b9f\u969b\u306e\u5229\u7528\u30ea\u30fc\u30b8\u30e7\u30f3\u3068\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002Captcha\u30c1\u30fc\u30e0\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044"],
      ko: ["\ubcf4\uc548 \uc778\uc99d", "\ub3cc\uc544\uac00\uae30", "\ub108\ubb34 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.", "\uc77c\ubc18 \uc778\uc99d", "\ud655\uc778", "\ub108\ubb34 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.", "\uc77c\ubc18 \uc778\uc99d", "\uc778\uc99d \ub05d\ub0b4\uae30", "\uc77c\ubc18 \uc778\uc99d \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud558\uae30", "\uc77c\ubc18 \uc778\uc99d \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud558\uae30", "\ud53c\ub4dc\ubc31", "\uc774\ubbf8\uc9c0 \uc0c8\ub85c\uace0\uce68", "\uc774\ubbf8\uc9c0 \ub85c\ub529\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uace0\uce68\ud558\uc138\uc694.", "\uc778\uc99d \uc131\uacf5", "\ub124\ud2b8\uc6cc\ud06c \uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "\uc778\uc99d \uc624\ub958\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "\uc2dc\ub3c4 \ud69f\uc218\uac00 \ub108\ubb34 \ub9ce\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "\uc880 \ub354 \uc26c\uc6b4 \ubb38\uc81c\ub85c \uc2dc\ub3c4\ud574\ubcf4\uc138\uc694.", "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uc785\ub2c8\ub2e4(+). \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", "AppID \ub9ac\uc804\uacfc \uc2e4\uc81c \uc704\uce58\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. Captcha\ud300\uc5d0 \ubb38\uc758\ud558\uc138\uc694."],
      pt: ["Verifica\xe7\xe3o", "Voltar", "Modo simples", "Modo padr\xe3o", "OK", "Modo simples", "Modo padr\xe3o", "Sair da verifica\xe7\xe3o", "Mudar para o modo padr\xe3o", "Muito dif\xedcil? Mude para o modo simples", "Feedback", "Tentar outro captcha", "Falha no carregamento da imagem. Clique para atualizar", "Verifica\xe7\xe3o conclu\xedda", "A rede expirou. Tente novamente.", "Falha na verifica\xe7\xe3o. Tente novamente.", "Opera\xe7\xe3o realizada com muita frequ\xeancia. Tente novamente mais tarde.", "Muito dif\xedcil? Tente outro", "Erro de rede (+). Tente novamente.", "O AppID n\xe3o corresponde ao local real. Entre em contato com a equipe do Captcha."],
      id: ["Verifikasi", "Kembali", "Mode sederhana", "Mode standar", "Oke", "Mode sederhana", "Mode standar", "Keluar verifikasi", "Beralih ke mode Standar", "Terlalu sulit? Beralih ke mode Sederhana", "Masukan", "Coba captcha baru", "Gambar gagal dimuat. Klik untuk merefresh", "Verifikasi berhasil", "Jaringan kehabisan waktu. Coba lagi.", "Verifikasi gagal. Coba lagi.", "Operasi terlalu sering. Coba lagi nanti.", "Terlalu sulit? Coba yang baru", "Kesalahan jaringan (+). Coba lagi.", "AppID tidak cocok dengan lokasi aktual. Harap hubungi tim Captcha."],
      ar: ["\u0627\u0644\u062a\u062d\u0642\u0642", "\u0631\u062c\u0648\u0639", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064a\u0627\u0633\u064a", "\u062d\u0633\u0646\u064b\u0627", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637", "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064a\u0627\u0633\u064a", "\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u062a\u062d\u0642\u0642", "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0642\u064a\u0627\u0633\u064a", "\u0635\u0639\u0628\u0629 \u0644\u0644\u063a\u0627\u064a\u0629\u061f \u0642\u0645 \u0628\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0628\u0633\u064a\u0637", "\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a", "\u062c\u0631\u0651\u0628 captcha \u062c\u062f\u064a\u062f\u0629", "\u0641\u0634\u0644 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0648\u0631\u0629. \u0627\u0646\u0642\u0631 \u0644\u0644\u062a\u062d\u062f\u064a\u062b", "\u0646\u062c\u062d \u0627\u0644\u062a\u062d\u0642\u0642", "\u0627\u0646\u062a\u0647\u062a \u0645\u0647\u0644\u0629 \u0627\u0644\u0634\u0628\u0643\u0629. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.", "\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0642\u0642. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.", "\u0645\u0631\u0627\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0643\u062b\u064a\u0631\u0629 \u062c\u062f\u064b\u0627. \u062d\u0627\u0648\u0644 \u0644\u0627\u062d\u0642\u064b\u0627.", "\u0635\u0639\u0628\u0629 \u0644\u0644\u063a\u0627\u064a\u0629\u061f \u062c\u0631\u0628 \u0648\u0627\u062d\u062f\u0629 \u0623\u062e\u0631\u0649", "\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0634\u0628\u0643\u0629 (+). \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.", "\u0644\u0627 \u064a\u062a\u0637\u0627\u0628\u0642 \u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0645\u0639 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0641\u0639\u0644\u064a. \u064a\u064f\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642 Captcha."],
      my: ["\u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1001\u103c\u1004\u103a\u1038", "\u1014\u1031\u102c\u1000\u103a\u2026", "\u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u1019\u102f\u1012\u103a", "\u1015\u102f\u1036\u1019\u103e\u1014\u103a\u1019\u102f\u1012\u103a", "\u1021\u102d\u102f\u1000\u1031", "\u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u1019\u102f\u1012\u103a", "\u1015\u102f\u1036\u1019\u103e\u1014\u103a\u1019\u102f\u1012\u103a", "\u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1001\u103c\u1004\u103a\u1038\u1019\u103e\u1011\u103d\u1000\u103a\u1015\u102b", "\u1015\u102f\u1036\u1019\u103e\u1014\u103a\u1019\u102f\u1012\u103a\u101e\u102d\u102f\u1037 \u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1015\u102b", "\u1001\u1000\u103a\u1001\u1032\u101c\u103d\u1014\u103a\u1038\u101e\u101c\u102c\u1038\u104b \u101b\u102d\u102f\u1038\u101b\u103e\u1004\u103a\u1038\u1019\u102f\u1012\u103a\u101e\u102d\u102f\u1037 \u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1015\u102b\u104b", "\u1010\u102f\u1036\u1037\u1015\u103c\u1014\u103a\u1019\u103e\u102f", "\u1000\u1000\u103a\u1015\u103a\u1001\u103b\u102c\u1021\u101e\u1005\u103a\u1016\u103c\u1004\u1037\u103a \u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b", "\u1015\u102f\u1036\u1019\u1010\u1004\u103a\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u104b \u101b\u102e\u1016\u101b\u1000\u103a\u101b\u103e\u103a\u101c\u102f\u1015\u103a\u101b\u1014\u103a\u1014\u103e\u102d\u1015\u103a", "\u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1001\u103c\u1004\u103a\u1038\u1021\u1031\u102c\u1004\u103a", "\u1000\u103d\u1014\u103a\u101b\u1000\u103a\u1021\u1001\u103b\u102d\u1014\u103a\u101c\u103d\u1014\u103a\u1015\u103c\u102e\u104b \u1011\u1015\u103a\u101c\u102f\u1015\u103a\u1015\u102b\u104b", "\u1021\u1010\u100a\u103a\u1019\u1015\u103c\u102f\u1014\u102d\u102f\u1004\u103a\u1015\u102b\u104b \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b", "\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1001\u103b\u1000\u103a\u1019\u103b\u102c\u1038\u101c\u103d\u1014\u103a\u1038\u101e\u100a\u103a\u104b \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u101c\u102f\u1015\u103a\u1015\u102b\u104b", "\u1001\u1000\u103a\u1001\u1032\u101c\u103d\u1014\u103a\u1038\u101e\u101c\u102c\u1038\u104b \u1021\u101e\u1005\u103a\u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1015\u102b", "\u1000\u103d\u1014\u103a\u101b\u1000\u103a\u1015\u103c\u103f\u1014\u102c (+)\u104b \u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1015\u102b\u104b", "AppID \u101e\u100a\u103a \u1021\u1019\u103e\u1014\u103a\u1010\u1000\u101a\u103a\u101b\u103e\u102d\u101e\u1031\u102c\u1014\u1031\u101b\u102c\u1014\u103e\u1004\u1037\u103a \u1019\u1000\u102d\u102f\u1000\u103a\u100a\u102e\u1015\u102b\u104b \u1000\u1000\u103a\u1015\u103a\u1001\u103b\u102c \u1021\u1016\u103d\u1032\u1037\u1000\u102d\u102f \u1006\u1000\u103a\u101e\u103d\u101a\u103a\u1015\u102b\u104b"],
      fr: ["V\xe9rification", "Retour", "Mode simple", "Mode standard", "OK", "Mode simple", "Mode standard", "Arr\xeater la v\xe9rification", "Passez en mode standard", "Trop difficile\xa0? Passez en mode simple", "Commentaires", "Essayez un nouveau captcha", "Image non charg\xe9e. Actualisez", "V\xe9rification faite", "R\xe9seau interrompu. R\xe9essayez.", "V\xe9rification \xe9chou\xe9e. R\xe9essayez", "Op\xe9ration trop fr\xe9quente. R\xe9essayez apr\xe8s.", "Trop dur\xa0? Essayez-en un autre", "Erreur r\xe9seau (+). R\xe9essayez.", "L'AppID ne correspond pas \xe0 l'emplacement r\xe9el. Contactez l'\xe9quipe Captcha."],
      de: ["\xdcberpr\xfcfung", "Zur\xfcck", "Leichtmodus", "Standardmodus", "OK", "Leichtmodus", "Standardmodus", "\xdcberpr\xfcfung beenden", "In Standardmodus wechseln", "Zu schwer? In Leichtmodus wechseln", "R\xfcckmeldung", "Versuchen Sie ein neues Captcha", "Bild n. geladen. F\xfcr Aktual. klicken", "\xdcberpr\xfcfung okay", "Netzw-Timeout. Erneut versuchen.", "\xdcberpr\xfcf. n. OK. Neu versuchen.", "Vorgang zu oft. Sp\xe4ter erneut versuchen.", "Zu schwer? Neuer Versuch", "Netzwerkfehler (+). Neu versuchen.", "AppID passt nicht zum aktuellen Standort. Wenden Sie sich an das Captcha-Team."],
      he: ["\u05d0\u05d9\u05de\u05d5\u05ea", "\u05d7\u05d6\u05e8\u05d4", "\u05de\u05e6\u05d1 \u05e4\u05e9\u05d5\u05d8", "\u05de\u05e6\u05d1 \u05e8\u05d2\u05d9\u05dc", "\u05d0\u05d9\u05e9\u05d5\u05e8", "\u05de\u05e6\u05d1 \u05e4\u05e9\u05d5\u05d8", "\u05de\u05e6\u05d1 \u05e8\u05d2\u05d9\u05dc", "\u05d9\u05e6\u05d9\u05d0\u05d4 \u05de\u05d0\u05d9\u05de\u05d5\u05ea", "\u05de\u05e2\u05d1\u05e8 \u05dc\u05de\u05e6\u05d1 \u05e8\u05d2\u05d9\u05dc", "\u05e7\u05e9\u05d4 \u05de\u05d3\u05d9? \u05e0\u05d9\u05ea\u05df \u05dc\u05e2\u05d1\u05d5\u05e8 \u05dc\u05de\u05e6\u05d1 \u05e4\u05e9\u05d5\u05d8", "\u05de\u05e9\u05d5\u05d1", "\u05d9\u05e9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05d0\u05d9\u05de\u05d5\u05ea \u05d0\u05e0\u05d5\u05e9 \u05d7\u05d3\u05e9", "\u05e0\u05db\u05e9\u05dc\u05d4 \u05d8\u05e2\u05d9\u05e0\u05ea \u05d4\u05ea\u05de\u05d5\u05e0\u05d4. \u05d9\u05e9 \u05dc\u05dc\u05d7\u05d5\u05e5 \u05db\u05d3\u05d9 \u05dc\u05e8\u05e2\u05e0\u05df", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05d4\u05e6\u05dc\u05d9\u05d7", "\u05e4\u05d2 \u05d6\u05de\u05df \u05d4\u05e8\u05e9\u05ea \u05d4\u05e7\u05e6\u05d5\u05d1. \u05e0\u05d0 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1.", "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e0\u05db\u05e9\u05dc. \u05d9\u05e9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1.", "\u05d4\u05e4\u05e2\u05dc\u05d4 \u05ea\u05d3\u05d9\u05e8\u05d4 \u05de\u05d3\u05d9. \u05e0\u05d0 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8.", "\u05e7\u05e9\u05d4 \u05de\u05d3\u05d9? \u05e0\u05d9\u05ea\u05df \u05dc\u05e0\u05e1\u05d5\u05ea \u05d7\u05d3\u05e9", "\u05e9\u05d2\u05d9\u05d0\u05ea \u05e8\u05e9\u05ea (+). \u05e0\u05d0 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1.", "\u05d4\u05de\u05d6\u05d4\u05d4 AppID \u05dc\u05d0 \u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05de\u05d9\u05e7\u05d5\u05dd \u05d4\u05de\u05de\u05e9\u05d9. \u05e0\u05d0 \u05dc\u05e4\u05e0\u05d5\u05ea \u05dc\u05e6\u05d5\u05d5\u05ea \u05d0\u05d9\u05de\u05d5\u05ea \u05d0\u05e0\u05d5\u05e9."],
      hi: ["\u0938\u0924\u094d\u092f\u093e\u092a\u0928", "\u092a\u0940\u091b\u0947", "\u0906\u0938\u093e\u0928 \u092e\u094b\u0921", "\u092e\u093e\u0928\u0915 \u092e\u094b\u0921", "\u0920\u0940\u0915", "\u0906\u0938\u093e\u0928 \u092e\u094b\u0921", "\u092e\u093e\u0928\u0915 \u092e\u094b\u0921", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u091b\u094b\u0921\u093c \u0926\u0947\u0902", "\u092e\u093e\u0928\u0915 \u092e\u094b\u0921 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0947\u0902", "\u0915\u093e\u092b\u093c\u0940 \u0915\u0920\u093f\u0928? \u0906\u0938\u093e\u0928 \u092e\u094b\u0921 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0947\u0902", "\u092b\u0940\u0921\u092c\u0948\u0915", "\u090f\u0915 \u0928\u092f\u093e \u0915\u0948\u092a\u094d\u091a\u093e \u0906\u091c\u092e\u093e\u090f\u0902", "\u091b\u0935\u093f \u0932\u094b\u0921 \u0928\u0939\u0940\u0902\u0964 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0915\u0947 \u0930\u093f\u092b\u094d\u0930\u0947\u0936  \u0915\u0930\u0947\u0902", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u092a\u093e\u0930\u093f\u0924", "\u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u0938\u092e\u092f \u0938\u092e\u093e\u092a\u094d\u0924\u0964 \u092b\u093f\u0930 \u0938\u0947 \u0915\u0930\u0947\u0902\u0964", "\u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0935\u093f\u092b\u0932\u0964 \u092b\u093f\u0930 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u092a\u094d\u0930\u091a\u093e\u0932\u0928 \u0915\u093e \u0905\u0915\u094d\u0938\u0930 \u0939\u094b\u0928\u093e\u0964 \u092c\u093e\u0926 \u092e\u0947\u0902 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u0915\u093e\u092b\u093c\u0940 \u0915\u0920\u094b\u0930? \u090f\u0915 \u0928\u092f\u093e \u0906\u091c\u092e\u093e\u090f\u0902", "\u0928\u0947\u091f\u0935\u0930\u094d\u0915 \u0924\u094d\u0930\u0941\u091f\u093f (+)\u0964 \u092b\u093f\u0930 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902\u0964", "\u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0938\u094d\u0925\u093e\u0928 \u0915\u0940 \u0910\u092a \u0906\u0908\u0921\u0940 \u0938\u0947 \u092e\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093e\u0924\u0940\u0964 \u0915\u0943\u092a\u092f\u093e \u0915\u0948\u092a\u094d\u091a\u093e \u091f\u0940\u092e \u0938\u0947 \u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902\u0964"],
      it: ["Verifica", "Indietro", "Mod. semplice", "Mod. standard", "OK", "Mod. semplice", "Mod. standard", "Esci dalla verifica", "Passa alla mod. standard", "Troppo diffic.? Passa alla mod. semplice", "Feedback", "Prova un altro captcha", "Imp. caric. imm. Clicc. per aggiorn.", "Verifica superata", "Timeout rete. Riprovare.", "Verif. non riusc. Riprovare.", "Oper. ripet. troppe volte. Riprovare dopo.", "Troppo diffic.? Prova un altro", "Errore rete ({{errore}}). Riprovare.", "L'ID dell'app non corrisp. alla posiz. corr. Contattare il team dei captcha."],
      lo: ["\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a", "\u0e81\u0eb1\u0e9a\u0e84\u0eb7\u0e99", "\u0ec2\u0edd\u0e94\u0e87\u0ec8\u0eb2\u0e8d", "\u0ec2\u0edd\u0e94\u0ea1\u0eb2\u0e94\u0e95\u0eb0\u0e96\u0eb2\u0e99", "\u0e95\u0ebb\u0e81\u0ea5\u0ebb\u0e87", "\u0ec2\u0edd\u0e94\u0e87\u0ec8\u0eb2\u0e8d", "\u0ec2\u0edd\u0e94\u0ea1\u0eb2\u0e94\u0e95\u0eb0\u0e96\u0eb2\u0e99", "\u0ead\u0ead\u0e81\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a", "\u0eaa\u0eb1\u0e9a\u0e9b\u0ec8\u0ebd\u0e99\u0ec0\u0e9b\u0eb1\u0e99\u0ec2\u0edd\u0e94\u0ea1\u0eb2\u0e94\u0e95\u0eb0\u0e96\u0eb2\u0e99", "\u0e8d\u0eb2\u0e81\u0ec0\u0e81\u0eb5\u0e99\u0ec4\u0e9b\u0e9a\u0ecd? \u0eaa\u0eb1\u0e9a\u0e9b\u0ec8\u0ebd\u0e99\u0ec0\u0e9b\u0eb1\u0e99\u0ec2\u0edd\u0e94\u0e87\u0ec8\u0eb2\u0e8d", "\u0e84\u0eb3\u0ec0\u0eab\u0eb1\u0e99\u0e95\u0eb4\u0e8a\u0ebb\u0ea1", "\u0ea5\u0ead\u0e87\u0ec3\u0e8a\u0ec9\u0ec1\u0e84\u0eb1\u0e9a\u0e88\u0eb2\u0ec3\u0edd\u0ec8", "\u0e81\u0eb2\u0e99\u0ec2\u0eab\u0ebc\u0e94\u0eae\u0eb9\u0e9a\u0e9a\u0ecd\u0ec8\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94. \u0e84\u0ea5\u0eb4\u0e81\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0ea3\u0eb5\u0ec0\u0e9f\u0ea3\u0e8a", "\u0e9c\u0ec8\u0eb2\u0e99\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a\u0ec1\u0ea5\u0ec9\u0ea7", "\u0edd\u0ebb\u0e94\u0ec0\u0ea7\u0ea5\u0eb2\u0ec0\u0e84\u0eb7\u0ead\u0e82\u0ec8\u0eb2\u0e8d. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8.", "\u0e81\u0eb2\u0e99\u0e81\u0ea7\u0e94\u0eaa\u0ead\u0e9a\u0e9a\u0ecd\u0ec8\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94. \u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0ead\u0eb5\u0e81.", "\u0e81\u0eb2\u0e99\u0e94\u0eb3\u0ec0\u0e99\u0eb5\u0e99\u0e81\u0eb2\u0e99\u0ec0\u0ea5\u0eb7\u0ec9\u0ead\u0ec6\u0ec0\u0e81\u0eb5\u0e99\u0ec4\u0e9b. \u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8\u0e9e\u0eb2\u0e8d\u0eab\u0ebc\u0eb1\u0e87.", "\u0e8d\u0eb2\u0e81\u0ec0\u0e81\u0eb5\u0e99\u0ec4\u0e9b\u0e9a\u0ecd? \u0ea5\u0ead\u0e87\u0ead\u0eb1\u0e99\u0ec3\u0edd\u0ec8", "\u0ec0\u0e84\u0eb7\u0ead\u0e82\u0ec8\u0eb2\u0e8d\u0e82\u0eb1\u0e94\u0e82\u0ec9\u0ead\u0e87 (+). \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea5\u0ead\u0e87\u0ec3\u0edd\u0ec8.", "AppID \u0e9a\u0ecd\u0ec8\u0e81\u0ebb\u0e87\u0e81\u0eb1\u0e9a\u0e88\u0eb8\u0e94\u0e97\u0eb5\u0ec8\u0e95\u0eb1\u0ec9\u0e87\u0e95\u0ebb\u0ea7\u0e88\u0eb4\u0e87. \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e95\u0eb4\u0e94\u0e95\u0ecd\u0ec8\u0e97\u0eb5\u0ea1\u0ec1\u0e84\u0eb1\u0e9a\u0e88\u0eb2."],
      ms: ["Pengesahan", "Kembali", "Mod mudah", "mod standard", "OK", "Mod mudah", "mod standard", "Hentikan pengesahan", "Tukar ke mod Standard", "Terlalu sukar? Tukar ke mod Mudah", "Maklum balas", "Cuba captcha baharu", "Imej gagal dimuat. Klik utk disegarkan", "Lulus pengesahan", "Rangkaian tamat masa. Cuba lagi.", "Pengesahan gagal. Cuba lagi", "Operasi terlalu kerap. Cuba lagi kemudian.", "Terlalu sukar? Cuba yang baharu", "Ralat rangkaian (+). Sila cuba lagi.", "AppID tidak sepadan dengan lokasi sebenar. Sila hubungi pasukan Captcha."],
      pl: ["Weryfikacja", "Wstecz", "Tryb prosty", "Tryb standar.", "OK", "Tryb prosty", "Tryb standar.", "Zako\u0144cz weryfikacj\u0119", "Prze\u0142\u0105cz do trybu standardowego", "Zbyt trudne? Prze\u0142\u0105cz do trybu prostego.", "Opinie", "Spr\xf3buj nowe captcha", "Nie pobrano obrazu. Od\u015bwie\u017c (kliknij).", "Zweryfikowano", "Limit czasu sieci. Pon\xf3w.", "Nie zweryfikowano. Pon\xf3w.", "Zbyt cz\u0119ste operacje. Spr\xf3buj p\xf3\u017aniej.", "Zbyt trudne? Spr\xf3buj ponownie.", "B\u0142\u0105d sieciowy (+). Spr\xf3buj ponownie.", "AppID nie pasuje do faktycznej lokalizacji. Skontaktuj si\u0119 z zespo\u0142em Captcha."],
      ru: ["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430", "\u041d\u0430\u0437\u0430\u0434", "\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0436\u0438\u043c", "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442", "OK", "\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0436\u0438\u043c", "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442", "\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438", "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u043e? \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0435\u0436\u0438\u043c", "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c", "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0430\u043f\u0447\u0443", "\u0421\u0431\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435.", "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430", "\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.", "\u0421\u0431\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435.", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043e\u0432. \u0412\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043f\u043e\u0437\u0436\u0435.", "\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u043e? \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439", "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438 (+). \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.", "AppID \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e. \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 Captcha."],
      es: ["Verificaci\xf3n", "Atr\xe1s", "Modo sencillo", "Modo normal", "Aceptar", "Modo sencillo", "Modo normal", "Verificaci\xf3n r\xe1pida", "Cambiar a modo normal", "\xbfDemasiado dif\xedcil? Cambiar a modo sencillo", "Comentarios", "Probar nuevo captcha", "Fallo al cargar imagen. Clic para actualizar", "Verificaci\xf3n aprobada", "Red caducada. Pruebe de nuevo.", "Fall\xf3 verificaci\xf3n. Pruebe de nuevo.", "Operaci\xf3n muy repetida. Pruebe m\xe1s tarde.", "\xbfDemasiado dif\xedcil? Pruebe otro", "Erro de la red (+). Pruebe de nuevo.", "El AppID no coincide con la posici\xf3n actual. Contacte con el equipo Captcha."],
      th: ["\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a", "\u0e42\u0e2b\u0e21\u0e14\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22", "\u0e42\u0e2b\u0e21\u0e14\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19", "\u0e15\u0e01\u0e25\u0e07", "\u0e42\u0e2b\u0e21\u0e14\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22", "\u0e42\u0e2b\u0e21\u0e14\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19", "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e2b\u0e21\u0e14\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19", "\u0e22\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 \u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e2b\u0e21\u0e14\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e48\u0e32\u0e22", "\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30", "\u0e25\u0e2d\u0e07 Captcha \u0e43\u0e2b\u0e21\u0e48", "\u0e42\u0e2b\u0e25\u0e14\u0e20\u0e32\u0e1e\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", "\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e48\u0e2d\u0e22\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07", "\u0e22\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 \u0e25\u0e2d\u0e07\u0e20\u0e32\u0e1e\u0e43\u0e2b\u0e21\u0e48", "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14 (+) \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07", "AppID \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e08\u0e23\u0e34\u0e07 \u0e42\u0e1b\u0e23\u0e14\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e21 Captcha"],
      tr: ["Do\u011frulama", "Geri", "Basit mod", "Standart mod", "Tamam", "Basit mod", "Standart mod", "Do\u011frulamadan \xe7\u0131k", "Standart moda ge\xe7", "\xc7ok mu zor? Basit moda ge\xe7in", "Geri bildirim", "Yeni bir captcha deneyin", "G\xf6r\xfcnt\xfc y\xfcklenmedi. T\u0131klay\u0131p yenileyin", "Do\u011frulama ba\u015far\u0131l\u0131", "A\u011f zaman a\u015f\u0131m\u0131. Tekrar deneyin.", "Do\u011frulanamad\u0131. Tekrar deneyin.", "\xc7ok s\u0131k i\u015flem yap\u0131ld\u0131. Daha sonra deneyin.", "\xc7ok mu zar? Yeni birini deneyin", "A\u011f hatas\u0131 (+). Tekrar deneyin.", "Uygulama kimli\u011fi ger\xe7ek konumla e\u015fle\u015fmiyor. L\xfctfen Captcha ekibine ula\u015f\u0131n."],
      vi: ["X\xe1c th\u1ef1c", "Quay l\u1ea1i", "Ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n", "Ch\u1ebf \u0111\u1ed9 chu\u1ea9n", "OK", "Ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n", "Ch\u1ebf \u0111\u1ed9 chu\u1ea9n", "H\u1ee7y x\xe1c th\u1ef1c", "Chuy\u1ec3n sang Ch\u1ebf \u0111\u1ed9 chu\u1ea9n", "G\u1eb7p kh\xf3 \u01b0? H\xe3y chuy\u1ec3n sang Ch\u1ebf \u0111\u1ed9 \u0111\u01a1n gi\u1ea3n xem", "G\xf3p \xfd", "Th\u1eed captcha m\u1edbi", "Kh\xf4ng th\u1ec3 t\u1ea3i \u1ea3nh. Nh\u1ea5n \u0111\u1ec3 l\xe0m m\u1edbi", "X\xe1c th\u1ef1c th\xe0nh c\xf4ng", "H\u1ebft phi\xean k\u1ebft n\u1ed1i. H\xe3y th\u1eed l\u1ea1i.", "Ch\u01b0a th\u1ec3 x\xe1c th\u1ef1c. H\xe3y th\u1eed l\u1ea1i.", "Thao t\xe1c qu\xe1 nhi\u1ec1u l\u1ea7n. Vui l\xf2ng th\u1eed l\u1ea1i.", "G\u1eb7p kh\xf3 \u01b0? H\xe3y th\u1eed c\xe1i m\u1edbi xem", "L\u1ed7i m\u1ea1ng (+). Vui l\xf2ng th\u1eed l\u1ea1i.", "AppID kh\xf4ng tr\xf9ng kh\u1edbp v\u1edbi v\u1ecb tr\xed th\u1ef1c t\u1ebf. Vui l\xf2ng li\xean h\u1ec7 \u0111\u1ed9i ng\u0169 Captcha."],
      fil: ["Pag-verify", "Bumalik", "Simple mode", "Standard mode", "OK", "Simple mode", "Standard mode", "Tapusin ang pagpapatunay", "Lumipat sa Standard mode", "Napakahirap? Lumipat sa Simpleng mode", "Feedback", "Subukan ang bagong captcha", "Hindi nag-load. I-click para i-refresh", "Na-verify", "Huminto ang network. Pakiulit.", "Hindi na-verify. Pakiulit.", "Madalas na operasyon.\nSubukan ulit mamaya.", "Napakahirap? Sumubok ng bago", "Network error (+). Pakiulit.", "Di tugma ang AppID sa tunay na lugar. Pakikontak ang Captcha team."],
      ur: ["\u062a\u0635\u062f\u06cc\u0642", "\u067e\u06cc\u0686\u06be\u06d2", "\u0633\u0627\u062f\u06c1 \u0645\u0648\u0688", "\u0645\u0639\u06cc\u0627\u0631\u06cc \u0645\u0648\u0688", "\u0679\u06be\u064a\u06a9\u06c1\u06d2", "\u0633\u0627\u062f\u06c1 \u0645\u0648\u0688", "\u0645\u0639\u06cc\u0627\u0631\u06cc \u0645\u0648\u0688", "\u062a\u0635\u062f\u06cc\u0642 \u0633\u06d2 \u062a\u0631\u06a9 \u06a9\u0631\u06cc\u06ba", "\u0645\u0639\u06cc\u0627\u0631\u06cc \u0645\u0648\u0688 \u067e\u0631 \u062c\u0627\u0626\u06cc\u06ba", "\u0645\u0634\u06a9\u0644 \u06c1\u06d2\u061f \u0633\u0627\u062f\u06c1 \u0645\u0648\u0688 \u067e\u0631 \u062c\u0627\u0626\u06cc\u06ba", "\u062a\u0627\u062b\u0631\u0627\u062a \u062f\u06cc\u06ba", "\u0646\u06cc\u0627 \u06a9\u06cc\u067e\u0686\u0627 \u062f\u0627\u062e\u0644 \u06a9\u0631\u06cc\u06ba", "\u062a\u0635\u0648\u06cc\u0631\u0644\u0648\u0688\u0646\u06c1\u06cc \u06c1\u0648\u0626\u06cc \u0631\u0641\u0631\u06cc\u0634 \u06a9\u0644\u06a9 \u06a9\u0631\u06cc\u06ba", "\u062a\u0635\u062f\u06cc\u0642 \u06c1\u0648 \u06af\u0626\u06cc", "\u0646\u06cc\u0679 \u0648\u0631\u06a9 \u06a9\u0627 \u0648\u0642\u062a \u062e\u062a\u0645 \u067e\u06be\u0631\u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06d2", "\u062a\u0635\u062f\u06cc\u0642 \u0646\u0627\u06a9\u0627\u0645 \u067e\u06be\u0631\u0633\u06d2 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba", "\u062a\u062c\u0627\u0648\u0632 \u06c1\u0648 \u06af\u06cc\u0627. \u0628\u0639\u062f\u0645\u06cc\u06ba \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba.", "\u0645\u0634\u06a9\u0644 \u06c1\u06d2\u061f\u067e\u06be\u0631 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba", "\u0646\u06cc\u0679 \u0648\u0631\u06a9 \u0641\u06cc\u0644 (+). \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba.", "\u0627\u06cc\u067e \u0622\u0626\u06cc \u0688\u06cc \u0627\u0635\u0644 \u0645\u062d\u0644 \u0648\u0642\u0648\u0639 \u0633\u06d2 \u0645\u06cc\u0644 \u0646\u06c1\u06cc\u06ba \u06a9\u06be\u0627\u062a\u0627.\u0628\u0631\u0627\u06c1 \u06a9\u0631\u0645 \u06a9\u06cc\u067e\u0686\u0627 \u0679\u06cc\u0645 \u0633\u06d2 \u0631\u0627\u0628\u0637\u06c1 \u06a9\u0631\u06cc\u06ba"]
  };
  e.all = n,
  n.iw = n.he,
  n["in"] = n.id,
  n.zh = n["zh-cn"]
}
, , function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.getScriptUrl = e.getScript = void 0,
  e.getScript = function n(t, e) {
      var r = 3
        , i = t.src
        , o = t.successCheck
        , a = t.success
        , s = t.error
        , c = t.crossOrigin
        , u = Boolean(t.inHead) ? document.getElementsByTagName("head").item(0) : document.getElementsByTagName("body").item(0)
        , l = !1
        , d = document.createElement("script");
      function p(t) {
          if (!l) {
              var e = !1;
              t && "type"in t && (e = "load" === t.type),
              "readyState"in this && /^(loaded|complete)$/.test(this.readyState) && (e = !0),
              e && (!o || o() ? (h(),
              l = !0,
              null === a || void 0 === a || a()) : f())
          }
      }
      function f() {
          l || (h(),
          l = !0,
          (e = e || 1) >= r ? null === s || void 0 === s || s() : n({
              src: i,
              successCheck: o,
              success: a,
              error: s
          }, e + 1))
      }
      function h() {
          try {
              u && d && u.removeChild(d)
          } catch (s) {}
      }
      d.type = "text/javascript",
      d.async = !0,
      d.src = i,
      c && d.setAttribute("crossorigin", c),
      "onload"in d ? d.onload = p : d.onreadystatechange = p,
      d.onerror = f,
      null === u || void 0 === u || u.appendChild(d)
  }
  ,
  e.getScriptUrl = function() {
      try {
          throw new Error("check own domain")
      } catch (r) {
          var t = null === r || void 0 === r ? void 0 : r.stack;
          if (!t)
              return;
          var e = ("" + t).match(/(https?:\/\/.*\.js)/);
          return {
              url: null === e || void 0 === e ? void 0 : e[1],
              stack: t
          }
      }
  }
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.shrinkArraySizeFromRuisun = e.shrinkArraySize = e.extend = void 0;
  var i = n(r(3));
  e.extend = Object.assign || i["default"],
  e.shrinkArraySize = function(t, e, r) {
      var n = t.length;
      if (n <= e)
          return t;
      var i = [];
      (r = r || {}).keepStart && (e -= 1,
      n -= 1,
      i.push(t[0])),
      r.keepLast && (n -= 1,
      e -= 1);
      for (var o = e / n, a = 0, s = 0; s < n; s++)
          (a += o) >= 1 && (i.push(t[s]),
          a -= 1);
      return r.keepLast && i.push(t[t.length - 1]),
      i
  }
  ,
  e.shrinkArraySizeFromRuisun = function(t, e, r) {
      var n = t.length;
      if (n <= e)
          return t;
      (r = r || {}).keepStart && (n -= 1),
      r.keepLast && (n -= 1,
      e -= 1);
      for (var i = Math.floor(n / (e - 1)), o = 0, a = []; a.length < e; )
          a.push(t[o]),
          o += i;
      return r.keepLast && a.push(t[t.length - 1]),
      a
  }
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.isWebWorkerSupport = e.setWebworkerSupportCache = e.getWebworkerSupportCache = void 0;
  var n = "captcha_webworker_supported";
  e.getWebworkerSupportCache = function() {
      try {
          return localStorage.getItem(n)
      } catch (t) {}
      return !1
  }
  ,
  e.setWebworkerSupportCache = function(t) {
      try {
          localStorage.setItem(n, t)
      } catch (e) {}
  }
  ,
  e.isWebWorkerSupport = function() {
      var t = self || window;
      try {
          try {
              var e = void 0;
              try {
                  e = new t.Blob([""])
              } catch (o) {
                  (e = new (t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder)).append(""),
                  e = e.getBlob()
              }
              var r = t.URL || t.webkitURL
                , n = r.createObjectURL(e)
                , i = new t.Worker(n);
              return r.revokeObjectURL(n),
              i
          } catch (o) {
              return new t.Worker("data:application/javascript,".concat(encodeURIComponent("")))
          }
      } catch (o) {
          return null
      }
  }
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.langTransform = e.getWxLang = e.getBrowserLang = void 0;
  var n = r(0)
    , i = r(7);
  function o() {
      var t = n.getQuery()
        , e = /(wehcat_real_lang|wechat_real_lang)=([a-zA-Z_-]+)/.exec(t);
      if (e)
          return e[2];
      for (var r = document.getElementsByTagName("script"), i = 0; i < r.length; i++) {
          var o = r[i].src;
          if (o && /TCapIframeApi/i.test(o)) {
              var a = /lang=([a-zA-Z_-]+)/.exec(o);
              if (a)
                  return a[1].toLowerCase()
          }
      }
      return n.getQueryParam("wxLang") || ""
  }
  e.getBrowserLang = function() {
      var t = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage || "";
      if (/MicroMessenger/.test(navigator.userAgent)) {
          var e = o();
          e && (t = e)
      }
      return t
  }
  ,
  e.getWxLang = o,
  e.langTransform = function(t) {
      var e = t.toLowerCase().replace(/_/, "-")
        , r = e;
      return /-/.test(r) && (r = r.split("-")[0]),
      i.all[e] ? e : r
  }
}
, , , , , , , , , , , , function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e["default"] = {
      loadState: {
          ready: 0,
          fail: 1,
          mixing: 2
      },
      messageType: {
          hybridVerify: 8,
          loadReady: 10,
          preloadReady: 30,
          checkPreLoadReady: 31,
          sendPreloadData: 32,
          goAged: 36,
          goNormalVerify: 37,
          windowChanged: 38,
          readyConfirm: 39
      },
      preloadMsgType: {
          capClose: 33,
          verifySuccess: 34,
          sessionTimeout: 35
      },
      templateKeys: ["drag", "dy"],
      retCode: {
          success: 0,
          errorWithTicket: 0,
          close: 2
      },
      defaultColorScheme: "#005ACF"
  }
}
, , function(t, e, r) {
  "use strict";
  var n = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
    , i = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.includeInPreoloadTemplate = e.injectTemplate = e.removeTemplateWrapper = e.markTypeTemplateUnloaded = e.markTypeTemplateLoaded = e.styledTypeTemplate = e.getHtmlTemplateGroup = e.htmlTemplateGroup = e.getTemplateDomain = void 0;
  var o = r(1)
    , a = i(r(24))
    , s = r(28)
    , c = r(4)
    , u = a["default"].templateKeys
    , l = {
      drag: {
          url: "template/drag_ele.html",
          id: "tcaptcha_iframe_drag",
          wrapId: "tcaptcha_transform_drag"
      },
      dy: {
          url: "template/drag_ele.html",
          id: "tcaptcha_iframe_dy",
          wrapId: "tcaptcha_transform_dy"
      }
  };
  e.getTemplateDomain = function() {
      var t, e, r = s.getIEVersion();
      if (-1 !== r && r <= 9)
          return window.AqSCodeCapDomain;
      if ("https://trpc-test.captcha.qq.com" === window.AqSCodeCapDomain)
          return window.AqSCodeCapDomain;
      if (navigator.userAgent.match(/miniprogram/i) || "miniprogram" === window.__wxjs_environment)
          return window.AqSCodeCapDomain;
      var i = document.querySelectorAll("meta");
      try {
          for (var o = n(i), a = o.next(); !a.done; a = o.next()) {
              var u = a.value;
              if (u.httpEquiv.match(/content-security-policy/i)) {
                  var l = u.content.match(/frame-src.*;/i);
                  if (c.isArray(l) && (!l[0].match(/127.0.0.1:8080/i) || !l[0].match(/\*.gtimg.com/i)))
                      return window.AqSCodeCapDomain
              }
          }
      } catch (d) {
          t = {
              error: d
          }
      } finally {
          try {
              a && !a.done && (e = o["return"]) && e.call(o)
          } finally {
              if (t)
                  throw t.error
          }
      }
      return window.AqSCodeCdnDomain
  }
  ,
  e.htmlTemplateGroup = {};
  e.getHtmlTemplateGroup = function() {
      return e.htmlTemplateGroup
  }
  ;
  e.styledTypeTemplate = function(t, r) {
      var n = null === e.htmlTemplateGroup || void 0 === e.htmlTemplateGroup ? void 0 : e.htmlTemplateGroup[t];
      n && (n.styled = !0,
      n.showType = r || "")
  }
  ;
  e.markTypeTemplateLoaded = function(t) {
      var r = null === e.htmlTemplateGroup || void 0 === e.htmlTemplateGroup ? void 0 : e.htmlTemplateGroup[t];
      r && (r.load = !0)
  }
  ;
  e.markTypeTemplateUnloaded = function(t) {
      var r = null === e.htmlTemplateGroup || void 0 === e.htmlTemplateGroup ? void 0 : e.htmlTemplateGroup[t];
      r && (r.load = !1,
      r.styled = !1,
      r.showType = undefined)
  }
  ;
  e.removeTemplateWrapper = function(t) {
      var e = l[t].wrapId
        , r = document.getElementById(e);
      (null === r || void 0 === r ? void 0 : r.parentNode) && r.parentNode.removeChild(r)
  }
  ;
  e.injectTemplate = function(t, r, n) {
      if (!document.body)
          return e.htmlTemplateGroup;
      var i = function(t, r, n) {
          e.removeTemplateWrapper(t);
          var i = document.createElement("div")
            , a = l[t]
            , s = a.id
            , c = a.wrapId;
          i.id = c;
          var u = o.createGeneralIframe({
              id: s,
              name: window.AqSCodeCapDomain
          });
          return window.TCaptchaGlobal ? u.src = r + "/template/drag_ele_global.html" : u.src = r + "/template/drag_ele.html",
          o.setCss(i, {
              opacity: "0",
              position: "absolute",
              transition: "opacity 0.3s linear 0s",
              top: "-1000000px"
          }),
          i.appendChild(u),
          n ? n.appendChild(i) : document.body.appendChild(i),
          {
              wrapper: i,
              iframe: u
          }
      }(t, r, n)
        , a = i.wrapper
        , s = i.iframe;
      return e.htmlTemplateGroup[t] = {
          ele: n || document.body,
          type: t,
          wrapper: a,
          iframe: s,
          load: !1,
          styled: !1
      },
      e.htmlTemplateGroup
  }
  ,
  e.includeInPreoloadTemplate = function(t) {
      var e, r;
      try {
          for (var i = n(u), o = i.next(); !o.done; o = i.next())
              if (o.value === t)
                  return !0
      } catch (a) {
          e = {
              error: a
          }
      } finally {
          try {
              o && !o.done && (r = i["return"]) && r.call(i)
          } finally {
              if (e)
                  throw e.error
          }
      }
      return !1
  }
}
, , function(t, e, r) {
  "use strict";
  var n = this && this.__assign || function() {
      return (n = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r])
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
      }
      ).apply(this, arguments)
  }
  ;
  e.__esModule = !0,
  e.isIos = e.getIEVersion = e.isLowIE = e.hexToRgb = e.setImageUrl = e.getSpriteEl = e.setSpriteUrl = e.getSpriteStyleStr = e.getSpriteStyle = void 0;
  var i = r(1);
  function o(t, e) {
      var r = t.size_2d
        , n = t.sprite_pos
        , i = t.init_pos
        , o = t.spriteSize
        , a = 0
        , s = 0;
      return i && (s = i[0] * e,
      a = i[1] * e),
      {
          bgPosLeft: -n[0] * e,
          bgPosTop: -n[1] * e,
          bgWidth: o[0] * e,
          bgHeight: o[1] * e,
          width: r[0] * e,
          height: r[1] * e,
          left: s,
          top: a
      }
  }
  function a(t, e) {
      var r = o(t, e);
      return {
          backgroundPosition: r.bgPosLeft + "px " + r.bgPosTop + "px",
          backgroundSize: r.bgWidth + "px " + r.bgHeight + "px",
          width: r.width + "px",
          height: r.height + "px",
          left: r.left + "px",
          top: r.top + "px"
      }
  }
  function s(t) {
      var e = t.data
        , r = t.rate
        , s = t.spriteUrl
        , c = t.zIndex
        , u = t.isPureGet
        , l = void 0 !== u && u
        , d = t.el || document.createElement("div");
      if ($(d).children().remove(),
      !i.supportsCSS("backgroundSize", "10px 10px") || l) {
          var p = document.createElement("img");
          p.src = "" + window.TCaptchaApiDomain + s;
          var f = o(e, r);
          return $(p).on("dragstart", function() {
              return !1
          }),
          i.setCss(d, {
              overflow: "hidden",
              width: f.width + "px",
              height: f.height + "px"
          }),
          l || (i.setCss(d, {
              position: "absolute",
              top: f.top + "px",
              left: f.left + "px"
          }),
          c !== undefined && i.setCss(d, {
              zIndex: "" + c
          })),
          i.setCss(p, {
              position: "absolute",
              width: f.bgWidth + "px",
              height: f.bgHeight + "px",
              top: f.bgPosTop + "px",
              left: f.bgPosLeft + "px"
          }),
          d.appendChild(p),
          d
      }
      return i.setCss(d, n({
          position: "absolute",
          backgroundImage: "url(" + window.TCaptchaApiDomain + s + ")"
      }, a(e, r))),
      c !== undefined && i.setCss(d, {
          zIndex: "" + c
      }),
      d
  }
  e.getSpriteStyle = o,
  e.getSpriteStyleStr = a,
  e.setSpriteUrl = s,
  e.getSpriteEl = s,
  e.setImageUrl = function(t, e, r, n) {
      if ($(t).children().remove(),
      !i.supportsCSS("backgroundSize", "10px 10px")) {
          var o = document.createElement("img");
          return o.src = "" + window.TCaptchaApiDomain + r,
          $(o).on("dragstart", function() {
              return !1
          }),
          i.setCss(t, {
              position: "absolute",
              zIndex: "1",
              overflow: "hidden",
              width: e[0] * n + "px",
              height: e[1] * n + "px",
              top: "0px",
              left: "0px"
          }),
          i.setCss(o, {
              position: "absolute",
              width: "100%",
              height: "auto",
              top: "0px",
              left: "0px"
          }),
          void t.appendChild(o)
      }
      i.setCss(t, {
          width: e[0] * n + "px",
          height: e[1] * n + "px",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundImage: "url(" + window.TCaptchaApiDomain + r + ")",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          zIndex: "1"
      })
  }
  ,
  e.hexToRgb = function(t) {
      return parseInt("0x" + t.slice(1, 3), 16) + " " + parseInt("0x" + t.slice(3, 5), 16) + " " + parseInt("0x" + t.slice(5, 7), 16)
  }
  ;
  e.isLowIE = function() {
      var t, e, r = navigator.userAgent.toLowerCase();
      if (r.indexOf("msie") > -1) {
          if (t = parseInt(r.match(/msie ([\d.]+)/)[1], 10),
          e = document.documentMode,
          t && t <= 8)
              return !0;
          if (e && e < 9)
              return !0
      }
      return !1
  }
  ;
  e.getIEVersion = function() {
      var t = navigator.userAgent
        , e = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1
        , r = t.indexOf("Trident") > -1 && t.indexOf("rv:11.0") > -1;
      if (e) {
          new RegExp("MSIE (\\d+\\.\\d+);").test(t);
          var n = parseFloat(RegExp.$1);
          return 7 === n ? 7 : 8 === n ? 8 : 9 === n ? 9 : 10 === n ? 10 : 6
      }
      return r ? 11 : -1
  }
  ;
  e.isIos = function() {
      return !!/iphone|ipad|ipod/gi.test(navigator.userAgent)
  }
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0;
  var n = "[CODE_VERIFY]"
    , i = "postMessage"in window
    , o = function() {
      function t(t, e, r) {
          var n = "";
          if (arguments.length < 2 ? n = "[Msger] error 1" : "object" != typeof t ? n = "[Msger] error 2" : "string" != typeof e && (n = "[Msger] error 3"),
          n)
              throw new Error(n);
          this.target = t,
          this.name = e,
          this.domain = r || "*"
      }
      return t.prototype.send = function(t) {
          if (i)
              this.target.postMessage(t, this.domain);
          else {
              var e = window.navigator[n + this.name];
              if ("function" != typeof e)
                  throw new Error("target callback function is not defined");
              e(t, window)
          }
      }
      ,
      t
  }()
    , a = function() {
      function t(t, e, r) {
          this.targets = {},
          this.name = t,
          this.listenFunc = [],
          this.domain = r || "",
          n = e || n,
          this.listenCb = this.initListen()
      }
      return t.prototype.addTarget = function(t, e, r) {
          var n = new o(t,e,r);
          this.targets[e] = n
      }
      ,
      t.prototype.initListen = function() {
          var t = this
            , e = function(e) {
              if (!t.domain || !e.origin || -1 !== e.origin.indexOf(t.domain) || "http://127.0.0.1:8080" === e.origin || "https://global.127.0.0.1:8080" === e.origin) {
                  "object" == typeof e && e.data && (e = e.data);
                  for (var r = 0; r < t.listenFunc.length; r++)
                      t.listenFunc[r](e)
              }
          };
          return i ? "addEventListener"in document ? window.addEventListener("message", e, !1) : "attachEvent"in document && window.attachEvent("onmessage", e) : window.navigator[n + this.name] = e,
          e
      }
      ,
      t.prototype.unlisten = function() {
          this.listenCb && (i ? "addEventListener"in document ? window.removeEventListener("message", this.listenCb) : "attachEvent"in document && window.detachEvent("onmessage", this.listenCb) : window.navigator[n + this.name] = null)
      }
      ,
      t.prototype.listen = function(t) {
          this.listenFunc.push(t)
      }
      ,
      t.prototype.clear = function() {
          this.listenFunc = []
      }
      ,
      t.prototype.send = function(t) {
          var e, r = this.targets;
          for (e in r)
              r.hasOwnProperty(e) && r[e].send(t)
      }
      ,
      t
  }();
  window.TCapMsg = a,
  e["default"] = a
}
, , function(t, e, r) {
  "use strict";
  var n = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
  ;
  e.__esModule = !0,
  e.ErrorHandler = e.ErrorTypes = void 0;
  var i = r(0);
  e.ErrorTypes = {
      FRAME_JS_LOAD_TIMEOUT: 40,
      DY_LOAD_FAIL: 39,
      OTHER_DOMAIN_MONITOR: 38,
      DRAG_JQUERY_FAIL: 37,
      DY_JQUERY_FAIL: 37,
      DRAG_WEBSERVER_JS_LOAD: 36,
      DY_WEBSERVER_JS_LOAD: 36,
      IFRAME_FULL_CREATE_ERROR: 35,
      NOT_NUMBER_TYPE: 34,
      IFRAME_CREATE_TIMEOUT: 33,
      PRELOAD_TEMPLATE_LOAD_ERROR: 32,
      DRAG_REFRESH_ERROR: 31,
      DY_REFRESH_ERROR: 31,
      DRAG_VERIFY_ERROR: 30,
      DY_VERIFY_ERROR: 30,
      DRAG_IMG_ERROR: 29,
      DY_IMG_ERROR: 29,
      DRAG_JS_ERROR: 28,
      DY_JS_ERROR: 28,
      DRAG_JS_DOWNLOAD_ERROR: 27,
      DY_JS_DOWNLOAD_ERROR: 27,
      IFRAME_POPUP_CREATE_ERROR: 26,
      IFRAME_CREATE_ERROR: 25,
      ERROR_TYPE_TDC_RUN_RETRY_SUCCESS: 23,
      ERROR_TYPE_TDC_DOWNLOAD_RETRY_SUCCESS: 22,
      ERROR_TYPE_TDC_RUN_FAIL: 21,
      ERROR_TYPE_TDC_DOWNLOAD_FAIL: 20,
      CALLBACK_NAME: 19,
      ERROR_TYPE_FRAMEJS_CODE_ERROR: 18,
      ERROR_TYPE_JSONP_PREHANDLE: 17,
      ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 16,
      ERROR_SLIDE_JS_DOWNLOAD_ERROR: 15,
      ERROR_TYPE_TOUCH_CANCEL: 14,
      ERROR_TYPE_TWICE_IMAGE_ONERROR: 13,
      ERROR_TYPE_CGI_IMAGE_ONERROR: 12,
      ERROR_TYPE_IMAGE_ONERROR: 11,
      ERROR_TYPE_AJAX_GETSIG: 9,
      ERROR_TYPE_AJAX_VERIFY: 8,
      ERROR_TYPE_IMAGE_BEYONDSIZE: 7,
      ERROR_TYPE_MB_FP_REGISTER_TIMEOUT: 6,
      ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL: 5,
      ERROR_TYPE_PC_FP_REGISTER_TIMEOUT: 4,
      ERROR_TYPE_PC_FPJS_DOWNLOAD_FAIL: 3,
      ERROR_TYPE_BADJS_DOWNLOAD_FAIL: 2,
      ERROR_TYPE_BADJS_REPORT: 1
  };
  var o = function() {
      function t() {
          this.sentMsg = {},
          this.sendQueue = [],
          this.initParam = "",
          this.isAllowToReport = !1
      }
      return t.prototype.init = function(t) {
          var e = this.getCommonParams()
            , r = ["appid=" + t.appid, "sid=" + (t.sid || ""), "uid=" + (t.uid || ""), "errType=" + (t.errType || ""), "tokenid" + (t.tokenid || "")];
          this.initParam = e.join("&") + "&" + r.join("&")
      }
      ,
      t.prototype.getCommonParams = function() {
          try {
              var t = document.referrer
                , e = i.getHref();
              return t = t.length > 512 ? t.substr(0, 512) : t,
              e = e.length > 1024 ? e.substr(0, 1024) : e,
              ["referer=" + encodeURIComponent(t), "href=" + encodeURIComponent(e)]
          } catch (r) {
              return e = (e = r.message).length > 1024 ? e.substr(0, 1024) : e,
              ["href=" + encodeURIComponent(e)]
          }
      }
      ,
      t.prototype.openReport = function() {
          var t, e;
          if (this.isAllowToReport = !0,
          this.isAllowToReport)
              try {
                  for (var r = n(this.sendQueue), i = r.next(); !i.done; i = r.next()) {
                      var o = i.value;
                      this.send(o)
                  }
              } catch (a) {
                  t = {
                      error: a
                  }
              } finally {
                  try {
                      i && !i.done && (e = r["return"]) && e.call(r)
                  } finally {
                      if (t)
                          throw t.error
                  }
              }
      }
      ,
      t.prototype.sendError = function(t, r) {
          if (this.isAllowToReport) {
              r = r || e.ErrorTypes.ERROR_TYPE_BADJS_REPORT;
              var n = this.getErrorMsg(t);
              this.sentMsg[n] || (this.sentMsg[n] = !0,
              this.send({
                  errorType: r,
                  reason: n
              }))
          }
      }
      ,
      t.prototype.send = function(t) {
          if (this.isAllowToReport) {
              var r = (t = t || {
                  errorType: e.ErrorTypes.NOT_NUMBER_TYPE
              }).reason && t.reason.length > 1024 ? t.reason.substr(0, 1024) : t.reason;
              r = encodeURIComponent(r || ""),
              "number" != typeof t.errorType && (r += "err origin type " + t.errorType,
              t.errorType = e.ErrorTypes.NOT_NUMBER_TYPE);
              var n = (window.AqSCodeCapDomain || window.TCaptchaApiDomain || "") + "/cap_monitor?type=" + t.errorType + "&reason=" + r + "&" + this.initParam;
              (new Image).src = n
          } else
              this.sendQueue.push(t)
      }
      ,
      t.prototype.getErrorMsg = function(t) {
          var e = "";
          (null === t || void 0 === t ? void 0 : t.stack) && (e = t.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));
          try {
              var r = t.toString();
              e.indexOf(r) < 0 && (e = r + "@" + e)
          } catch (n) {}
          return e
      }
      ,
      t.prototype.initGlobalListener = function(t) {
          var r = this;
          t = t || e.ErrorTypes.ERROR_TYPE_BADJS_REPORT,
          "function" == typeof window.addEventListener ? addEventListener("error", function(e) {
              r.sendError(e.error, t)
          }) : window.onerror = function(e, n, i, o, a) {
              if (null !== a && void 0 !== a && a.stack)
                  r.sendError(a, t);
              else if ("string" != typeof e) {
                  var s = (e.target || {
                      src: ""
                  }).src || "";
                  r.send({
                      errorType: t,
                      reason: s
                  })
              } else
                  r.send({
                      errorType: t,
                      reason: e
                  })
          }
      }
      ,
      t
  }();
  e.ErrorHandler = o
}
, , , , , , , , , , function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.dom = e.get$Dom = void 0;
  e.get$Dom = function() {
      return {
          docBody: $(document.body),
          tcWrap: $("#tcWrap"),
          bodyWrap: $("#bodyWrap"),
          fullScreenHead: $("#tcWrapHeader"),
          operation: $("#tcOperation"),
          tcStatus: $("#tcStatus"),
          slideBgWrap: $("#slideBgWrap"),
          slideBg: $("#slideBg"),
          imgSlide: $("#slideBlock"),
          close: $("#captcha_close"),
          btnBack: $("#btnBack"),
          instructionWrap: $("#instructionWrap"),
          instruction: $("#instruction"),
          instructionText: $("#instructionText"),
          title: $("#pHeaderTitle,#fsHeaderTitle"),
          statusFail: $("#statusFail"),
          txtSuccess: $("#statusSuccess"),
          txtError: $("#statusError"),
          txtErrorNote: $("#tcaptcha_note"),
          txtBack: $("#txtBack"),
          feedback: $(".show-FB"),
          site007: $("#tcaptcha_site_click"),
          btnReload: $(".show-reload"),
          btnCoverReload: $("#coverReload"),
          btnSlide: $("#tcaptcha_drag_button"),
          btnThumb: $("#tcaptcha_drag_thumb"),
          btnIconfont: $("#t_iconfont"),
          iconError: $("#errorIcon"),
          iconGoback: $("#iconGoback"),
          embedStatus: $(".tcaptcha-embed"),
          embedLab: $("#e_lab"),
          embedShowFb: $("#e_showFB"),
          embedRefresh: $("#e_reload"),
          coverReload: $("#coverReload"),
          aged: $(".aged-icon"),
          agedText: $("#agedText"),
          normalVerify: $(".normal-verify-icon"),
          normalVerifyText: $("#normalVerifyText"),
          btnVerify: $(".verify-btn"),
          btnVerifyText: $(".verify-btn-text"),
          slider: $(".tc-slide")
      }
  }
  ,
  e.dom = {
      tcStatus: document.getElementById("tcStatus")
  }
}
, , , , function(t, e, r) {
  "use strict";
  var n = this && this.__assign || function() {
      return (n = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r])
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
      }
      ).apply(this, arguments)
  }
    , i = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
    , o = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0;
  var a = o(r(46))
    , s = o(r(48))
    , c = r(49)
    , u = function() {
      function t() {
          this.useWebWorker = !1,
          this.workerReady = !1,
          this.taskQueue = [],
          this.taskId = 0,
          this.callbacks = [];
          try {
              this.worker = new a["default"],
              this.useWebWorker = this.worker && !window.setImmediate,
              this.bindListener()
          } catch (t) {}
      }
      return t.prototype.bindListener = function() {
          var t = this;
          this.useWebWorker && (this.worker.onmessage = function(e) {
              var r, n, o, a, c = e.data, u = c.type, l = c.data;
              switch (u) {
              case s["default"].WORKER_READY:
                  t.workerReady = !0;
                  try {
                      for (var d = i(t.taskQueue), p = d.next(); !p.done; p = d.next()) {
                          var f = p.value;
                          t.run(f.data, f.cb),
                          window.clearTimeout(f.timeout)
                      }
                  } catch (m) {
                      r = {
                          error: m
                      }
                  } finally {
                      try {
                          p && !p.done && (n = d["return"]) && n.call(d)
                      } finally {
                          if (r)
                              throw r.error
                      }
                  }
                  t.taskQueue = [];
                  break;
              case s["default"].TASK_RESULT:
                  try {
                      for (var h = i(t.callbacks), g = h.next(); !g.done; g = h.next()) {
                          var v = g.value;
                          v.taskId === l.taskId && v.cb(l)
                      }
                  } catch (y) {
                      o = {
                          error: y
                      }
                  } finally {
                      try {
                          g && !g.done && (a = h["return"]) && a.call(h)
                      } finally {
                          if (o)
                              throw o.error
                      }
                  }
              }
          }
          )
      }
      ,
      t.prototype.run = function(t, e, r) {
          var i = this;
          if (this.useWebWorker) {
              if (this.taskId += 1,
              !this.workerReady) {
                  var o = window.setTimeout(function() {
                      for (var t = 0; t < i.taskQueue.length; t++) {
                          var e = i.taskQueue[t];
                          if (o === e.timeout) {
                              i.taskQueue.splice(t, 1),
                              e.cb(c.getWorkloadResult(e.data, r));
                              break
                          }
                      }
                  }, 500);
                  return void this.taskQueue.push({
                      data: t,
                      cb: e,
                      timeout: o
                  })
              }
              return this.sendToWorker(s["default"].RUN_TASK, n(n({}, t), {
                  taskId: this.taskId
              })),
              void this.callbacks.push({
                  taskId: this.taskId,
                  cb: e
              })
          }
          window.setTimeout(function() {
              e(c.getWorkloadResult(t, r))
          }, 20)
      }
      ,
      t.prototype.sendToWorker = function(t, e) {
          var r;
          this.useWebWorker && (null === (r = this.worker) || void 0 === r || r.postMessage({
              type: t,
              data: e
          }))
      }
      ,
      t.prototype.terminate = function() {
          var t;
          this.useWebWorker && (null === (t = this.worker) || void 0 === t || t.terminate())
      }
      ,
      t
  }();
  e["default"] = u
}
, function(t, e, r) {
  var n = r(47);
  t.exports = function() {
      return n('!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{"default":t}};n.__esModule=!0;var f=e(1),a=u(e(2)),i=self;function c(t,n){i.postMessage({type:t,data:n})}c(a["default"].WORKER_READY),i.onmessage=function(t){var n=t.data;if(n.type===a["default"].RUN_TASK){var e=n.data,u=e.taskId,i=o(e,["taskId"]);c(a["default"].TASK_RESULT,r(r({},f.getWorkloadResult(i)),{taskId:u}))}},n["default"]=function(){}},function(t,n,e){"use strict";function r(t,n){var e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function o(t,n,e,o,u,f){return r(function(t,n){return t<<n|t>>>32-n}(r(r(n,t),r(o,f)),u),e)}function u(t,n,e,r,u,f,a){return o(n&e|~n&r,t,n,u,f,a)}function f(t,n,e,r,u,f,a){return o(n&r|e&~r,t,n,u,f,a)}function a(t,n,e,r,u,f,a){return o(n^e^r,t,n,u,f,a)}function i(t,n,e,r,u,f,a){return o(e^(n|~r),t,n,u,f,a)}function c(t,n){var e,o,c,l,s;t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;var d=1732584193,p=-271733879,g=-1732584194,_=271733878;for(e=0;e<t.length;e+=16)o=d,c=p,l=g,s=_,p=i(p=i(p=i(p=i(p=a(p=a(p=a(p=a(p=f(p=f(p=f(p=f(p=u(p=u(p=u(p=u(p,g=u(g,_=u(_,d=u(d,p,g,_,t[e],7,-680876936),p,g,t[e+1],12,-389564586),d,p,t[e+2],17,606105819),_,d,t[e+3],22,-1044525330),g=u(g,_=u(_,d=u(d,p,g,_,t[e+4],7,-176418897),p,g,t[e+5],12,1200080426),d,p,t[e+6],17,-1473231341),_,d,t[e+7],22,-45705983),g=u(g,_=u(_,d=u(d,p,g,_,t[e+8],7,1770035416),p,g,t[e+9],12,-1958414417),d,p,t[e+10],17,-42063),_,d,t[e+11],22,-1990404162),g=u(g,_=u(_,d=u(d,p,g,_,t[e+12],7,1804603682),p,g,t[e+13],12,-40341101),d,p,t[e+14],17,-1502002290),_,d,t[e+15],22,1236535329),g=f(g,_=f(_,d=f(d,p,g,_,t[e+1],5,-165796510),p,g,t[e+6],9,-1069501632),d,p,t[e+11],14,643717713),_,d,t[e],20,-373897302),g=f(g,_=f(_,d=f(d,p,g,_,t[e+5],5,-701558691),p,g,t[e+10],9,38016083),d,p,t[e+15],14,-660478335),_,d,t[e+4],20,-405537848),g=f(g,_=f(_,d=f(d,p,g,_,t[e+9],5,568446438),p,g,t[e+14],9,-1019803690),d,p,t[e+3],14,-187363961),_,d,t[e+8],20,1163531501),g=f(g,_=f(_,d=f(d,p,g,_,t[e+13],5,-1444681467),p,g,t[e+2],9,-51403784),d,p,t[e+7],14,1735328473),_,d,t[e+12],20,-1926607734),g=a(g,_=a(_,d=a(d,p,g,_,t[e+5],4,-378558),p,g,t[e+8],11,-2022574463),d,p,t[e+11],16,1839030562),_,d,t[e+14],23,-35309556),g=a(g,_=a(_,d=a(d,p,g,_,t[e+1],4,-1530992060),p,g,t[e+4],11,1272893353),d,p,t[e+7],16,-155497632),_,d,t[e+10],23,-1094730640),g=a(g,_=a(_,d=a(d,p,g,_,t[e+13],4,681279174),p,g,t[e],11,-358537222),d,p,t[e+3],16,-722521979),_,d,t[e+6],23,76029189),g=a(g,_=a(_,d=a(d,p,g,_,t[e+9],4,-640364487),p,g,t[e+12],11,-421815835),d,p,t[e+15],16,530742520),_,d,t[e+2],23,-995338651),g=i(g,_=i(_,d=i(d,p,g,_,t[e],6,-198630844),p,g,t[e+7],10,1126891415),d,p,t[e+14],15,-1416354905),_,d,t[e+5],21,-57434055),g=i(g,_=i(_,d=i(d,p,g,_,t[e+12],6,1700485571),p,g,t[e+3],10,-1894986606),d,p,t[e+10],15,-1051523),_,d,t[e+1],21,-2054922799),g=i(g,_=i(_,d=i(d,p,g,_,t[e+8],6,1873313359),p,g,t[e+15],10,-30611744),d,p,t[e+6],15,-1560198380),_,d,t[e+13],21,1309151649),g=i(g,_=i(_,d=i(d,p,g,_,t[e+4],6,-145523070),p,g,t[e+11],10,-1120210379),d,p,t[e+2],15,718787259),_,d,t[e+9],21,-343485551),d=r(d,o),p=r(p,c),g=r(g,l),_=r(_,s);return[d,p,g,_]}function l(t){var n,e="";for(n=0;n<32*t.length;n+=8)e+=String.fromCharCode(t[n>>5]>>>n%32&255);return e}function s(t){var n,e=[];for(e[(t.length>>2)-1]=void 0,n=0;n<e.length;n+=1)e[n]=0;for(n=0;n<8*t.length;n+=8)e[n>>5]|=(255&t.charCodeAt(n/8))<<n%32;return e}function d(t){var n,e,r="0123456789abcdef",o="";for(e=0;e<t.length;e+=1)n=t.charCodeAt(e),o+=r.charAt(n>>>4&15)+r.charAt(15&n);return o}function p(t){return unescape(encodeURIComponent(t))}function g(t){return function(t){return l(c(s(t),8*t.length))}(p(t))}function _(t,n){return function(t,n){var e,r,o=s(t),u=[],f=[];for(u[15]=f[15]=void 0,o.length>16&&(o=c(o,8*t.length)),e=0;e<16;e+=1)u[e]=909522486^o[e],f[e]=1549556828^o[e];return r=c(u.concat(s(n)),512+8*n.length),l(c(f.concat(r),640))}(p(t),p(n))}function v(t,n,e){return n?e?_(n,t):function(t,n){return d(_(t,n))}(n,t):e?g(t):function(t){return d(g(t))}(t)}n.__esModule=!0,n.getWorkloadResult=n.md5=void 0,n.md5=v,n.getWorkloadResult=function(t,n){for(var e=t.nonce,r=t.target,o=+new Date,u=0,f="number"==typeof n?n:3e4;v(""+e+u)!==r&&(u+=1,!(+new Date-o>f)););return{ans:u,duration:+new Date-o}}},function(t,n,e){"use strict";n.__esModule=!0;n["default"]={WORKER_READY:"WORKER_READY",RUN_TASK:"RUN_TASK",TASK_RESULT:"TASK_RESULT"}}]);', "Worker", undefined, undefined)
  }
}
, function(t, e, r) {
  "use strict";
  t.exports = function(t, e, r, n) {
      var i = self || window;
      try {
          try {
              var o;
              try {
                  o = new i.Blob([t])
              } catch (u) {
                  (o = new (i.BlobBuilder || i.WebKitBlobBuilder || i.MozBlobBuilder || i.MSBlobBuilder)).append(t),
                  o = o.getBlob()
              }
              var a = i.URL || i.webkitURL
                , s = a.createObjectURL(o)
                , c = new i[e](s,r);
              return a.revokeObjectURL(s),
              c
          } catch (u) {
              return new i[e]("data:application/javascript,".concat(encodeURIComponent(t)),r)
          }
      } catch (u) {
          if (!n)
              throw Error("Inline worker is not supported");
          return new i[e](n,r)
      }
  }
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0;
  e["default"] = {
      WORKER_READY: "WORKER_READY",
      RUN_TASK: "RUN_TASK",
      TASK_RESULT: "TASK_RESULT"
  }
}
, function(t, e, r) {
  "use strict";
  function n(t, e) {
      var r = (65535 & t) + (65535 & e);
      return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
  }
  function i(t, e, r, i, o, a) {
      return n(function(t, e) {
          return t << e | t >>> 32 - e
      }(n(n(e, t), n(i, a)), o), r)
  }
  function o(t, e, r, n, o, a, s) {
      return i(e & r | ~e & n, t, e, o, a, s)
  }
  function a(t, e, r, n, o, a, s) {
      return i(e & n | r & ~n, t, e, o, a, s)
  }
  function s(t, e, r, n, o, a, s) {
      return i(e ^ r ^ n, t, e, o, a, s)
  }
  function c(t, e, r, n, o, a, s) {
      return i(r ^ (e | ~n), t, e, o, a, s)
  }
  function u(t, e) {
      var r, i, u, l, d;
      t[e >> 5] |= 128 << e % 32,
      t[14 + (e + 64 >>> 9 << 4)] = e;
      var p = 1732584193
        , f = -271733879
        , h = -1732584194
        , g = 271733878;
      for (r = 0; r < t.length; r += 16)
          i = p,
          u = f,
          l = h,
          d = g,
          f = c(f = c(f = c(f = c(f = s(f = s(f = s(f = s(f = a(f = a(f = a(f = a(f = o(f = o(f = o(f = o(f, h = o(h, g = o(g, p = o(p, f, h, g, t[r], 7, -680876936), f, h, t[r + 1], 12, -389564586), p, f, t[r + 2], 17, 606105819), g, p, t[r + 3], 22, -1044525330), h = o(h, g = o(g, p = o(p, f, h, g, t[r + 4], 7, -176418897), f, h, t[r + 5], 12, 1200080426), p, f, t[r + 6], 17, -1473231341), g, p, t[r + 7], 22, -45705983), h = o(h, g = o(g, p = o(p, f, h, g, t[r + 8], 7, 1770035416), f, h, t[r + 9], 12, -1958414417), p, f, t[r + 10], 17, -42063), g, p, t[r + 11], 22, -1990404162), h = o(h, g = o(g, p = o(p, f, h, g, t[r + 12], 7, 1804603682), f, h, t[r + 13], 12, -40341101), p, f, t[r + 14], 17, -1502002290), g, p, t[r + 15], 22, 1236535329), h = a(h, g = a(g, p = a(p, f, h, g, t[r + 1], 5, -165796510), f, h, t[r + 6], 9, -1069501632), p, f, t[r + 11], 14, 643717713), g, p, t[r], 20, -373897302), h = a(h, g = a(g, p = a(p, f, h, g, t[r + 5], 5, -701558691), f, h, t[r + 10], 9, 38016083), p, f, t[r + 15], 14, -660478335), g, p, t[r + 4], 20, -405537848), h = a(h, g = a(g, p = a(p, f, h, g, t[r + 9], 5, 568446438), f, h, t[r + 14], 9, -1019803690), p, f, t[r + 3], 14, -187363961), g, p, t[r + 8], 20, 1163531501), h = a(h, g = a(g, p = a(p, f, h, g, t[r + 13], 5, -1444681467), f, h, t[r + 2], 9, -51403784), p, f, t[r + 7], 14, 1735328473), g, p, t[r + 12], 20, -1926607734), h = s(h, g = s(g, p = s(p, f, h, g, t[r + 5], 4, -378558), f, h, t[r + 8], 11, -2022574463), p, f, t[r + 11], 16, 1839030562), g, p, t[r + 14], 23, -35309556), h = s(h, g = s(g, p = s(p, f, h, g, t[r + 1], 4, -1530992060), f, h, t[r + 4], 11, 1272893353), p, f, t[r + 7], 16, -155497632), g, p, t[r + 10], 23, -1094730640), h = s(h, g = s(g, p = s(p, f, h, g, t[r + 13], 4, 681279174), f, h, t[r], 11, -358537222), p, f, t[r + 3], 16, -722521979), g, p, t[r + 6], 23, 76029189), h = s(h, g = s(g, p = s(p, f, h, g, t[r + 9], 4, -640364487), f, h, t[r + 12], 11, -421815835), p, f, t[r + 15], 16, 530742520), g, p, t[r + 2], 23, -995338651), h = c(h, g = c(g, p = c(p, f, h, g, t[r], 6, -198630844), f, h, t[r + 7], 10, 1126891415), p, f, t[r + 14], 15, -1416354905), g, p, t[r + 5], 21, -57434055), h = c(h, g = c(g, p = c(p, f, h, g, t[r + 12], 6, 1700485571), f, h, t[r + 3], 10, -1894986606), p, f, t[r + 10], 15, -1051523), g, p, t[r + 1], 21, -2054922799), h = c(h, g = c(g, p = c(p, f, h, g, t[r + 8], 6, 1873313359), f, h, t[r + 15], 10, -30611744), p, f, t[r + 6], 15, -1560198380), g, p, t[r + 13], 21, 1309151649), h = c(h, g = c(g, p = c(p, f, h, g, t[r + 4], 6, -145523070), f, h, t[r + 11], 10, -1120210379), p, f, t[r + 2], 15, 718787259), g, p, t[r + 9], 21, -343485551),
          p = n(p, i),
          f = n(f, u),
          h = n(h, l),
          g = n(g, d);
      return [p, f, h, g]
  }
  function l(t) {
      var e, r = "";
      for (e = 0; e < 32 * t.length; e += 8)
          r += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
      return r
  }
  function d(t) {
      var e, r = [];
      for (r[(t.length >> 2) - 1] = void 0,
      e = 0; e < r.length; e += 1)
          r[e] = 0;
      for (e = 0; e < 8 * t.length; e += 8)
          r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
      return r
  }
  function p(t) {
      var e, r, n = "0123456789abcdef", i = "";
      for (r = 0; r < t.length; r += 1)
          e = t.charCodeAt(r),
          i += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
      return i
  }
  function f(t) {
      return unescape(encodeURIComponent(t))
  }
  function h(t) {
      return function(t) {
          return l(u(d(t), 8 * t.length))
      }(f(t))
  }
  function g(t, e) {
      return function(t, e) {
          var r, n, i = d(t), o = [], a = [];
          for (o[15] = a[15] = void 0,
          i.length > 16 && (i = u(i, 8 * t.length)),
          r = 0; r < 16; r += 1)
              o[r] = 909522486 ^ i[r],
              a[r] = 1549556828 ^ i[r];
          return n = u(o.concat(d(e)), 512 + 8 * e.length),
          l(u(a.concat(n), 640))
      }(f(t), f(e))
  }
  function v(t, e, r) {
      return e ? r ? g(e, t) : function(t, e) {
          return p(g(t, e))
      }(e, t) : r ? h(t) : function(t) {
          return p(h(t))
      }(t)
  }
  e.__esModule = !0,
  e.getWorkloadResult = e.md5 = void 0,
  e.md5 = v,
  e.getWorkloadResult = function(t, e) {
      for (var r = t.nonce, n = t.target, i = +new Date, o = 0, a = "number" == typeof e ? e : 3e4; v("" + r + o) !== n && (o += 1,
      !(+new Date - i > a)); )
          ;
      return {
          ans: o,
          duration: +new Date - i
      }
  }
}
, , function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.loadImg = e.getImgNaturalDimension = void 0;
  e.getImgNaturalDimension = function(t, e) {
      if ("undefined" == typeof t.naturalWidth) {
          var r = new Image;
          r.onload = function() {
              e({
                  width: r.width,
                  height: r.height
              })
          }
          ,
          r.src = t.src
      } else
          e({
              width: t.naturalWidth,
              height: t.naturalHeight
          })
  }
  ,
  e.loadImg = function n(t, r) {
      var i = t.id
        , o = t.src
        , a = t.onSuccess
        , s = t.onError
        , c = t.maxRetryTimes
        , u = void 0 === c ? 3 : c
        , l = "undefined" == typeof t.el ? document.createElement("img") : t.el;
      if (null !== l) {
          var d, p = !1, f = function(t) {
              return function(e) {
                  p || (clearTimeout(d),
                  t(e))
              }
          }, h = function() {
              "number" != typeof r && (r = 0),
              (r += 1) < u ? n(t, r) : null === s || void 0 === s || s({
                  id: i,
                  src: o
              })
          };
          l.onload = f(function() {
              e.getImgNaturalDimension(l, function(t) {
                  null === a || void 0 === a || a(t)
              })
          }),
          l.onerror = f(function() {
              h()
          }),
          t.timeout && (d = window.setTimeout(function() {
              p = !0,
              h()
          }, t.timeout)),
          l.src = "" + window.TCaptchaApiDomain + t.src
      } else
          s(t)
  }
}
, , , , , , , function(t, e, r) {
  "use strict";
  var n = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.Notify = e.initFrameMessenger = void 0;
  var i, o, a = n(r(29)), s = n(r(24)), c = r(26);
  e.initFrameMessenger = function(t, r) {
      o = t,
      (i = new a["default"]("securityCode")).addTarget(window.parent, "parent"),
      i.listen(function(t) {
          var n;
          try {
              n = JSON.parse(t)
          } catch (o) {}
          if (void 0 !== n && n.message) {
              var i = n.message;
              if (!i || "undefined" != typeof i.type)
                  switch (i.type) {
                  case s["default"].messageType.checkPreLoadReady:
                      e.Notify.preloadReady();
                      break;
                  case s["default"].messageType.sendPreloadData:
                      r(i)
                  }
          }
      })
  }
  ;
  var u = function(t, e) {
      try {
          var r = e ? {
              message: t
          } : t;
          i.targets.parent.send(JSON.stringify(r))
      } catch (n) {}
  };
  e.Notify = {
      adjustStyle: function() {
          u({
              type: 7
          }, !0)
      },
      capClose: function() {
          u({
              type: s["default"].preloadMsgType.capClose
          }, !0)
      },
      loadMsg: function(t, e) {
          var r = {
              type: s["default"].messageType.loadReady,
              loadstate: t,
              info: e || ""
          };
          u(r, !0)
      },
      loadReady: function() {
          try {
              e.Notify.loadMsg(s["default"].loadState.ready)
          } catch (t) {}
      },
      preloadReady: function() {
          if (c.includeInPreoloadTemplate(o)) {
              var t = {
                  type: s["default"].messageType.preloadReady,
                  captype: o
              };
              u(t, !0)
          }
      },
      loadFailure: function(t) {
          e.Notify.loadMsg(s["default"].loadState.fail, t)
      },
      sessionTimeout: function() {
          u({
              type: s["default"].preloadMsgType.sessionTimeout
          }, !0)
      },
      verifySuccess: function(t) {
          var e = t.ticket
            , r = t.randstr
            , n = t.errorCode
            , i = t.errorMessage;
          u({
              type: s["default"].preloadMsgType.verifySuccess,
              ticket: e,
              randstr: r,
              errorCode: n,
              errorMessage: i
          }, !0)
      },
      frequencyLimit: function() {
          u({
              type: 11
          }, !0)
      },
      hybridVerify: function(t) {
          u({
              type: s["default"].messageType.hybridVerify,
              sess: t
          }, !0)
      },
      goBack: function() {
          u({
              type: s["default"].preloadMsgType.capClose
          }, !0)
      },
      goAged: function() {
          u({
              type: s["default"].messageType.goAged
          }, !0)
      },
      goNomralVerify: function() {
          u({
              type: s["default"].messageType.goNormalVerify
          }, !0)
      }
  }
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.getKeyInfo = e.getToken = e.getInfo = e.checkTdcSuccess = e.getTdcData = e.clearTdcData = e.setTdcData = e.loadDyJs = void 0;
  var i = n(r(93))
    , o = r(9);
  function a(t) {
      window.TDC && "function" == typeof window.TDC.setData && window.TDC.setData(t)
  }
  function s() {
      return "undefined" != typeof window.TDC && "function" == typeof window.TDC.getData
  }
  function c() {
      return window.TDC && "function" == typeof window.TDC.getInfo && window.TDC.getInfo() || {}
  }
  e.loadDyJs = function(t) {
      window.TDC = undefined,
      o.getScript({
          src: t,
          successCheck: function() {
              return s()
          }
      })
  }
  ,
  e.setTdcData = a,
  e.clearTdcData = function() {
      window.TDC && "function" == typeof window.TDC.clearTc && window.TDC.clearTc()
  }
  ,
  e.getTdcData = function() {
      return a({
          ft: i["default"]()
      }),
      window.TDC && "function" == typeof window.TDC.getData ? window.TDC.getData(!0) || "---" : "------"
  }
  ,
  e.checkTdcSuccess = s,
  e.getInfo = c,
  e.getToken = function() {
      return (c() || {}).tokenid || ""
  }
  ,
  e.getKeyInfo = function() {
      return (c() || {}).info || ""
  }
}
, function(t, e, r) {
  "use strict";
  function n(t) {
      return /^touch/.test(t.type)
  }
  e.__esModule = !0,
  e.getPosition = e.testTouchEvent = void 0,
  e.testTouchEvent = n,
  e.getPosition = function(t) {
      if (n(t)) {
          var e;
          t.originalEvent && (e = t.originalEvent);
          var r = ((null === e || void 0 === e ? void 0 : e.touches) || [])[0];
          return r ? {
              x: r.clientX,
              y: r.clientY
          } : null
      }
      return {
          x: t.pageX,
          y: t.pageY
      }
  }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
  "use strict";
  e.__esModule = !0;
  var n = r(58)
    , i = r(31)
    , o = r(9)
    , a = r(91);
  !function() {
      if (!window.TCaptchaLoaded) {
          window.TCaptchaLoaded = !0;
          var t = new i.ErrorHandler;
          t.init({
              appid: "0"
          }),
          t.initGlobalListener(i.ErrorTypes.DY_JS_ERROR),
          e = {
              errorHandler: t,
              success: function() {
                  var e = new a.Captcha(t);
                  n.initFrameMessenger("dy", function(t) {
                      window.TCaptchaReferrer = t.option.referrer,
                      e.show(t)
                  }),
                  n.Notify.preloadReady()
              }
          },
          window.$ ? e.success() : (e.errorHandler.send({
              errorType: i.ErrorTypes.DY_JQUERY_FAIL
          }),
          o.getScript({
              success: e.success,
              src: window.TCaptchaApiDomain + "/dy-jy.js",
              successCheck: function() {
                  return !!window.$
              }
          }))
      }
      var e
  }()
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
    , i = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.Captcha = void 0;
  var o = r(31)
    , a = r(41)
    , s = r(58)
    , c = r(92)
    , u = r(94)
    , l = r(95)
    , d = r(102)
    , p = r(6)
    , f = r(0)
    , h = r(1)
    , g = i(r(103))
    , v = r(104)
    , m = r(28)
    , y = r(4)
    , w = function() {
      function t() {
          this.actions = [],
          this.stopped = !1
      }
      return t.prototype.action = function(t) {
          var e = this;
          t(function() {
              return e.stopped
          })
      }
      ,
      t.prototype.stop = function() {
          this.stopped = !0
      }
      ,
      t
  }()
    , _ = function() {
      function t(t) {
          this.isFirstInit = !0,
          this.onceSwitchA = !0,
          this.onceSwitchB = !0,
          this.$domManager = new l.DomManager(this),
          this.dataManager = new d.DataManager(this),
          this.userEvent = new u.EventDelegator(this,a.get$Dom().operation),
          this.event = new u.EventEmitter,
          this.httpRequest = new c.RequestManager(this),
          this.multiStep = !1,
          this.sid = "",
          this.appid = "",
          this.uip = "",
          this.curCommonConfig = null,
          this.refreshHttpErrorCounter = 0,
          this.verifyHttpErrorCounter = 0,
          this.autoVerifyTimer = null,
          this.loading = !1,
          this.closed = !0,
          this.enableAged = !1,
          this.aged = !1,
          this.invisible = !1,
          this.isDyJsDone = null,
          this.isPowDone = null,
          this.asyncAction = new w,
          this.speedList = [],
          this.errorHandler = t
      }
      return t.prototype.show = function(t) {
          this.closed = !1,
          this.asyncAction = new w;
          var e = t.data
            , r = t.option;
          this.option = r,
          this.errorHandler.init({
              appid: r.aid,
              errType: "dy",
              sid: r.sid
          }),
          this.errorHandler.openReport();
          var n = m.getIEVersion();
          (-1 === n || n >= 10) && v.initAegis(this.option),
          this.sid = r.sid,
          this.appid = r.aid,
          this.uip = r.uip || "",
          this.curCommonConfig = e.comm_captcha_cfg,
          "point" !== r.type && "undefined" != typeof r.type || (r.type = "popup");
          try {
              this.initFirst(r.type),
              this.$domManager.addDocumentClass(r),
              this.initFb(r.fb),
              this.initAged(r),
              this.isDyJsDone = $.Deferred(),
              this.isPowDone = $.Deferred(),
              this.httpRequest.initCommonConfig(e.comm_captcha_cfg, this.isDyJsDone, this.isPowDone),
              h.bodyAriaHidden.unhide(),
              this.initNewCaptcha(r.sess, e.dyn_show_info),
              (-1 === n || n >= 10) && this.recordTime(t.speedList)
          } catch (a) {
              var i = a.stack ? a.stack : a.message;
              this.errorHandler.send({
                  errorType: o.ErrorTypes.DY_JS_ERROR,
                  reason: i
              }),
              this.onClose(),
              s.Notify.verifySuccess(p.getErrorRes("CAPTCHA_JS_RUN_ERROR", this.appid, this.sid))
          }
      }
      ,
      t.prototype.initNewCaptcha = function(t, e) {
          var r;
          this.invisible = !e.instruction,
          this.autoVerify((null === (r = e.verify_trigger_cfg) || void 0 === r ? void 0 : r.auto_verify_timer) || (this.invisible ? 0 : void 0)),
          this.initEls(e),
          this.httpRequest.refreshData(t)
      }
      ,
      t.prototype.initEls = function(t) {
          var e, r = this;
          this.$domManager.refreshDom(t),
          this.multiStep = !!(null === (e = t.verify_trigger_cfg) || void 0 === e ? void 0 : e.verify_icon),
          this.event.remove("setData"),
          this.event.on("setData", function(t) {
              var e = t.data
                , n = t.namespace;
              r.dataManager.setData(n, e),
              r.multiStep || r.verify()
          })
      }
      ,
      t.prototype.initFb = function(t) {
          var e = a.get$Dom();
          t ? (e.tcStatus.removeClass("hide-feedback"),
          e.embedStatus.removeClass("hide-feedback")) : (e.tcStatus.addClass("hide-feedback"),
          e.embedStatus.addClass("hide-feedback"))
      }
      ,
      t.prototype.initAged = function(t) {
          var e = a.get$Dom();
          e.aged.removeClass("show"),
          e.normalVerify.removeClass("show"),
          this.enableAged = t.enableAged,
          this.aged = !!t.aged,
          t.enableAged && (t.aged ? e.normalVerify.addClass("show") : e.aged.addClass("show"))
      }
      ,
      t.prototype.initFirst = function(t) {
          this.isFirstInit && (this.$domManager.initShowType(t),
          this.$domManager.addEmbedTip(),
          $("body")[0].style.zoom = "0",
          $("body")[0].style.zoom = "1",
          this.bindOperationEvent(),
          this.isFirstInit = !1)
      }
      ,
      t.prototype.onClose = function() {
          this.closed = !0,
          this.stopOngoingProcess(),
          this.isPowDone = null,
          this.isDyJsDone = null,
          this.verifyHttpErrorCounter = 0,
          h.bodyAriaHidden.hide()
      }
      ,
      t.prototype.autoVerify = function(t) {
          var e = this;
          "number" == typeof this.autoVerifyTimer && (clearTimeout(this.autoVerifyTimer),
          this.autoVerifyTimer = null),
          "number" == typeof t && this.event.one("initReady", function() {
              e.autoVerifyTimer = window.setTimeout(function() {
                  e.autoVerifyTimer = null,
                  e.dataManager.setData("autoVerify", [{
                      elem_id: 0,
                      type: "DynAnswerType_TIME",
                      data: ""
                  }]),
                  e.verify()
              }, 1e3 * t)
          })
      }
      ,
      t.prototype.verify = function() {
          var t = this;
          this.$domManager.changeOperationStatus("loading");
          var e = {
              0: "verifySuccess",
              9: "verifyFailRefresh",
              12: "verifyError",
              20: "verifySessionTimeout",
              50: "verifyFail",
              30: "verifyHybrid",
              51: "verifyHybrid",
              52: "verifyError",
              206: "verifySessionTimeout",
              "default": "verifyError",
              httpError: "verifyHttpError"
          }
            , r = this.dataManager.getData();
          this.asyncAction.action(function(n) {
              $.when(t.isDyJsDone, t.isPowDone).then(function() {
                  t.httpRequest.verify(r, function(r) {
                      if (!n()) {
                          t.$domManager.changeOperationStatus("");
                          var i, o = r.errorCode, a = e["default"];
                          for (i in "httpError" !== o && (t.verifyHttpErrorCounter = 0),
                          e)
                              if (i === o) {
                                  a = e[i];
                                  break
                              }
                          t[a](r)
                      }
                  }),
                  t.dataManager.initData()
              }, function(t) {})
          })
      }
      ,
      t.prototype.verifySuccess = function(t) {
          var e = this;
          this.$domManager.verifySuccess();
          var r = this.invisible ? 0 : this.aged ? 1200 : 500;
          setTimeout(function() {
              var r, n, i;
              if (e.onClose(),
              s.Notify.verifySuccess({
                  ticket: t.ticket,
                  randstr: t.randstr
              }),
              e.onceSwitchB && e.invisible) {
                  var o = null === (r = e.option) || void 0 === r ? void 0 : r.createTime;
                  if ("number" == typeof o) {
                      var a = (new Date).getTime() - o;
                      null === (n = window.aegis) || void 0 === n || n.reportTime({
                          name: "Invisible Captcha Duration",
                          duration: a,
                          ext3: "" + (null === (i = e.option) || void 0 === i ? void 0 : i.isPreload)
                      }),
                      e.onceSwitchB = !1
                  }
              }
          }, r)
      }
      ,
      t.prototype.verifyFailRefresh = function() {
          var t = this;
          this.$domManager.verifyFailRefresh(function() {
              t.refresh()
          })
      }
      ,
      t.prototype.verifyError = function(t) {
          var e = this;
          this.$domManager.verifyError(this.sid, t.errorCode, function() {
              e.refresh()
          })
      }
      ,
      t.prototype.verifySessionTimeout = function() {
          this.onClose(),
          s.Notify.sessionTimeout()
      }
      ,
      t.prototype.verifyFail = function() {
          this.$domManager.verifyFail()
      }
      ,
      t.prototype.verifyHybrid = function(t) {
          s.Notify.hybridVerify(t.sess)
      }
      ,
      t.prototype.verifyHttpError = function(t) {
          var e = this;
          this.errorHandler.send({
              errorType: o.ErrorTypes.DY_VERIFY_ERROR,
              reason: "verify http error(" + this.verifyHttpErrorCounter + "),reason:" + t.errorMessage + ";position:captcha/Captcha/verifyHttpError"
          }),
          this.verifyHttpErrorCounter += 1,
          this.verifyHttpErrorCounter < 3 ? this.$domManager.verifyHttpError(function() {
              e.refresh()
          }) : (this.$domManager.verifySuccess(),
          setTimeout(function() {
              e.onClose(),
              s.Notify.verifySuccess(p.getErrorRes("VERIFY_ERROR", e.appid, e.sid))
          }, 500))
      }
      ,
      t.prototype.stopOngoingProcess = function() {
          this.event.remove("initReady"),
          "number" == typeof this.autoVerifyTimer && (clearTimeout(this.autoVerifyTimer),
          this.autoVerifyTimer = null),
          this.asyncAction.stop()
      }
      ,
      t.prototype.refresh = function() {
          var t = this;
          this.stopOngoingProcess(),
          this.asyncAction = new w,
          this.$domManager.changeOperationStatus("loading");
          var e = {
              0: "refreshSuccess",
              httpError: "refreshHttpError",
              "default": "refreshError"
          };
          this.asyncAction.action(function(r) {
              t.httpRequest.refresh(function(n) {
                  if (!r()) {
                      var i, o = n.ret, a = e["default"];
                      for (i in "httpError" !== o && (t.refreshHttpErrorCounter = 0),
                      e)
                          if (i === o) {
                              a = e[i];
                              break
                          }
                      t[a](n)
                  }
              })
          })
      }
      ,
      t.prototype.refreshSuccess = function(t) {
          this.refreshHttpErrorCounter = 0,
          this.initNewCaptcha(t.sess, t.data)
      }
      ,
      t.prototype.refreshHttpError = function(t) {
          var e = this;
          this.errorHandler.send({
              errorType: o.ErrorTypes.DY_REFRESH_ERROR,
              reason: "refresh http error(" + this.refreshHttpErrorCounter + "),reason:" + t.errorMessage + ";position:captcha/Captcha/refresh"
          }),
          this.refreshHttpErrorCounter += 1,
          this.refreshHttpErrorCounter < 3 ? this.$domManager.showError() : (this.$domManager.verifySuccess(),
          setTimeout(function() {
              e.onClose(),
              s.Notify.verifySuccess(p.getErrorRes("REFRESH_ERROR", e.appid, e.sid))
          }, 500))
      }
      ,
      t.prototype.refreshError = function(t) {
          this.errorHandler.send({
              errorType: o.ErrorTypes.DY_REFRESH_ERROR,
              reason: "refresh error,ret:" + t.ret + ";position:captcha/Captcha/refresh"
          }),
          s.Notify.sessionTimeout()
      }
      ,
      t.prototype.recordTime = function(t) {
          var e = this;
          this.event.one("initReady", function() {
              var r, i, o, a, s, c, u, l;
              if (null === (o = window.aegis) || void 0 === o || o.reportTime({
                  name: "PreHandle Request Duration",
                  duration: null === (a = e.option) || void 0 === a ? void 0 : a.preHandleDuration
              }),
              e.onceSwitchA) {
                  var d = null === (s = e.option) || void 0 === s ? void 0 : s.createTime;
                  if ("number" != typeof d)
                      return;
                  var p = (new Date).getTime() - d;
                  if (null === (c = window.aegis) || void 0 === c || c.reportTime({
                      name: "Captcha Render Duration",
                      duration: p,
                      ext3: "" + (null === (u = e.option) || void 0 === u ? void 0 : u.isPreload)
                  }),
                  y.isArray(t)) {
                      e.speedList = t;
                      try {
                          for (var f = n(t), h = f.next(); !h.done; h = f.next()) {
                              var g = h.value;
                              null === (l = window.aegis) || void 0 === l || l.reportTime({
                                  name: g.name,
                                  duration: g.duration
                              })
                          }
                      } catch (v) {
                          r = {
                              error: v
                          }
                      } finally {
                          try {
                              h && !h.done && (i = f["return"]) && i.call(f)
                          } finally {
                              if (r)
                                  throw r.error
                          }
                      }
                  }
                  e.onceSwitchA = !1
              }
          })
      }
      ,
      t.prototype.bindOperationEvent = function() {
          var t = this
            , e = a.get$Dom();
          e.close.on("click", function() {
              t.onClose(),
              s.Notify.capClose()
          }),
          e.btnReload.on("click", function() {
              t.refresh()
          }),
          e.coverReload.on("click", function() {
              t.refresh()
          }),
          e.btnBack.on("click", function() {
              t.onClose(),
              s.Notify.capClose()
          }),
          e.aged.on("click", function() {
              t.onClose(),
              s.Notify.goAged()
          }),
          e.normalVerify.on("click", function() {
              t.onClose(),
              s.Notify.goNomralVerify()
          }),
          e.btnVerify.on("click", function() {
              t.verify()
          }),
          e.feedback.on("click", function() {
              var e, r;
              try {
                  var n = null === (e = t.curCommonConfig) || void 0 === e ? void 0 : e.feedback_url;
                  if (n) {
                      var i = f.addUrlParam(n, g["default"]({
                          sid: t.sid,
                          uip: t.uip,
                          aid: t.appid
                      }))
                        , o = null === (r = t.option) || void 0 === r ? void 0 : r.fbUrl;
                      "string" == typeof o && (i = decodeURIComponent(o)),
                      window.open(i)
                  }
              } catch (a) {}
          })
      }
      ,
      t
  }();
  e.Captcha = _
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.RequestManager = void 0;
  var i = r(9)
    , o = r(59)
    , a = n(r(45))
    , s = function() {
      function t(t) {
          this.sess = "",
          this.dyjsSrc = "",
          this.workerLoader = null,
          this.workLoadData = {
              workloadAns: null,
              workloadDuration: null,
              runWorkload: !1
          },
          this.workLoadLog = [],
          this.captcha = t
      }
      return t.prototype.initCommonConfig = function(t, e, r) {
          (null === t || void 0 === t ? void 0 : t.tdc_path) && this.refreshDyJs({
              src: t.tdc_path,
              callback: function() {
                  e.resolve()
              }
          }),
          (null === t || void 0 === t ? void 0 : t.pow_cfg) && this.refreshWorkload(t.pow_cfg, function() {
              r.resolve()
          })
      }
      ,
      t.prototype.refreshData = function(t) {
          this.sess = t,
          o.clearTdcData()
      }
      ,
      t.prototype.initVm = function(t) {
          i.getScript({
              src: t
          })
      }
      ,
      t.prototype.refreshDyJs = function(t) {
          var e = void 0 === t ? {
              src: undefined,
              callback: undefined
          } : t
            , r = e.src
            , n = e.callback;
          if (r && (this.dyjsSrc = "" + window.TCaptchaApiDomain + r),
          this.dyjsSrc) {
              window.TDC = undefined;
              var a = undefined;
              if (n) {
                  var s = setTimeout(function() {
                      n()
                  }, 3e3);
                  a = function() {
                      n(),
                      clearTimeout(s)
                  }
              }
              i.getScript({
                  src: this.dyjsSrc,
                  successCheck: function() {
                      return o.checkTdcSuccess()
                  },
                  success: a,
                  error: a
              })
          }
      }
      ,
      t.prototype.refreshWorkload = function(t, e) {
          var r = this;
          this.workLoadData = {
              workloadAns: null,
              workloadDuration: null,
              workloadTarget: null === t || void 0 === t ? void 0 : t.md5,
              workloadNonce: null === t || void 0 === t ? void 0 : t.prefix,
              runWorkload: !!((null === t || void 0 === t ? void 0 : t.md5) && (null === t || void 0 === t ? void 0 : t.prefix))
          },
          this.workLoadLog = [],
          this.workLoadData.runWorkload ? (this.workerLoader && this.workerLoader.terminate(),
          this.workerLoader = new a["default"],
          this.workLoadLog = [],
          this.workLoadLog.push("useWebWorker:" + this.workerLoader.useWebWorker),
          this.workerLoader.run({
              target: this.workLoadData.workloadTarget,
              nonce: this.workLoadData.workloadNonce
          }, function(t) {
              r.workLoadLog.push("web worker run cb: " + JSON.stringify(t)),
              r.workLoadData.workloadAns = "" + t.ans,
              r.workLoadData.workloadDuration = t.duration,
              e()
          })) : setTimeout(function() {
              e()
          })
      }
      ,
      t.prototype.refresh = function(t) {
          var e = this;
          o.checkTdcSuccess() || this.refreshDyJs();
          var r = {
              sess: this.sess
          }
            , n = window.TCaptchaApiDomain + "/cap_union_new_getsig";
          $.ajax({
              type: "POST",
              url: n,
              timeout: 15e3,
              data: r,
              dataType: "json",
              success: function(r) {
                  r.sess && (e.sess = r.sess),
                  t(r)
              },
              error: function(e, i, o) {
                  var a = n + ",";
                  a += (null === e || void 0 === e ? void 0 : e.status) ? e.status + "," : "",
                  a += i ? i + ":" : "",
                  t({
                      ret: "httpError",
                      errorMessage: a += o || "",
                      dragPos: [],
                      dragSrc: "",
                      bgSrc: "",
                      instruction: "",
                      sess: r.sess
                  })
              }
          })
      }
      ,
      t.prototype.verify = function(t, e) {
          var r, n, i, a = this, s = decodeURIComponent(o.getTdcData()), c = o.getKeyInfo(), u = {
              collect: s,
              tlg: s.length,
              eks: c,
              sess: this.sess,
              ans: JSON.stringify(t)
          };
          (null === (r = this.captcha.option) || void 0 === r ? void 0 : r.deviceID) && (u.deviceID = null === (n = this.captcha.option) || void 0 === n ? void 0 : n.deviceID);
          var l = this.workLoadData
            , d = l.workloadAns
            , p = l.workloadDuration
            , f = l.workloadNonce;
          l.runWorkload && (u.pow_answer = null !== d && d.length > 0 ? "" + f + d : d,
          u.pow_calc_time = p);
          var h = [];
          for (var g in u)
              Object.prototype.hasOwnProperty.call(u, g) && h.push(g + "=" + u[g]);
          var v = null === (i = window.getVData) || void 0 === i ? void 0 : i.call(window, h.join("&"));
          v && (u.vData = v);
          var m = window.TCaptchaApiDomain + "/cap_union_new_verify"
            , y = $.ajax({
              type: "POST",
              url: m,
              data: u,
              timeout: 15e3,
              dataType: "json",
              success: function(t) {
                  t && (t.sess && (a.sess = t.sess),
                  e(t))
              },
              error: function(t, r, n) {
                  y.abort();
                  var i = m + ",";
                  i += (null === t || void 0 === t ? void 0 : t.status) ? t.status + "," : "",
                  i += r ? r + ":" : "",
                  e({
                      errorMessage: i += n || "",
                      errorCode: "httpError",
                      randstr: "",
                      sess: "",
                      ticket: ""
                  })
              }
          })
      }
      ,
      t.prototype.preverify = function() {}
      ,
      t.prototype.callVerify = function() {}
      ,
      t
  }();
  e.RequestManager = s
}
, function(t, e, r) {
  "use strict";
  function n(t) {
      return document.createElement(t)
  }
  function i() {
      return "history"in window && "pushState"in history
  }
  e.__esModule = !0;
  var o, a, s = (o = [],
  a = [],
  {
      add: function(t) {
          Array.prototype.push.apply(o, t)
      },
      get: function() {
          for (var t = 0; t < o.length; t++)
              a[t] = o[t]();
          return a
      }
  });
  s.add([function() {
      return "matches"in n("div")
  }
  , function() {
      return "msMatchesSelector"in n("div")
  }
  , function() {
      return "webkitMatchesSelector"in n("div")
  }
  , function() {
      return !!(window.matchMedia && window.matchMedia("(min-width: 400px)") && window.matchMedia("(min-width: 400px)").matches)
  }
  , function() {
      return !!(window.CSS && CSS.supports && CSS.supports("display", "block"))
  }
  , function() {
      return !!document.createRange
  }
  , function() {
      return !!window.CustomEvent
  }
  , function() {
      return "scrollIntoView"in n("div")
  }
  , function() {
      return "getUserMedia"in window.navigator
  }
  , function() {
      return !!window.IntersectionObserver
  }
  , function() {
      return "ontouchstart"in n("div")
  }
  , function() {
      return "performance"in window
  }
  , function() {
      return !(!window.performance || !performance.timing)
  }
  , function() {
      return "MediaSource"in window
  }
  , function() {
      return "onpageshow"in window
  }
  , function() {
      return "onhashchange"in window
  }
  , function() {
      return !(!window.requestFileSystem && !window.webkitRequestFileSystem)
  }
  , function() {
      return !!window.screen.orientation
  }
  , function() {
      return "WebSocket"in window
  }
  , function() {
      return !1
  }
  , function() {
      return "FileReader"in window
  }
  , function() {
      return !!window.atob
  }
  , function() {
      return !(!window.JSON || !JSON.parse)
  }
  , function() {
      return "postMessage"in window
  }
  , function() {
      return "EventSource"in window
  }
  , function() {
      return "vibrate"in navigator
  }
  , function() {
      return "Promise"in window
  }
  , function() {
      return "setImmediate"in window
  }
  , function() {
      return "isInfinite"in Number
  }
  , function() {
      return "indexedDB"in window
  }
  , function() {
      return "Proxy"in window
  }
  , function() {
      return "serviceWorker"in navigator
  }
  , function() {
      return "postMessage"in window
  }
  , function() {
      return "Crypto"in window
  }
  , function() {
      return "openDatabase"in window
  }
  , function() {
      return "Notification"in window
  }
  , function() {
      return "currentScript"in document
  }
  , function() {
      var t = !1;
      return "number" == typeof window.screenX && ["webkit", "moz", "ms", "o", ""].forEach(function(e) {
          0 == t && document[e + (e ? "H" : "h") + "idden"] !== undefined && (t = !0)
      }),
      t
  }
  , function() {
      var t = !1;
      try {
          t = "localStorage"in window && "setItem"in localStorage
      } catch (e) {}
      return t
  }
  , function() {
      var t = !1;
      try {
          t = "sessionStorage"in window && "setItem"in sessionStorage
      } catch (e) {}
      return t
  }
  , function() {
      return "console"in window
  }
  , function() {
      return "requestAnimationFrame"in window
  }
  , function() {
      return "geolocation"in window.navigator
  }
  , function() {
      return "webkitSpeechRecognition"in window
  }
  , i, function() {
      return "TextEncoder"in window
  }
  , i, i, function() {
      var t = !1
        , e = "https://sv.aq.qq.com/";
      try {
          new URL("/",e).href == e && (t = !0)
      } catch (r) {}
      return t
  }
  , function() {
      try {
          "a".localeCompare("b", "i")
      } catch (t) {
          return "RangeError" === t.name
      }
      return !1
  }
  ]);
  for (var c, u = (c = [],
  {
      set: function(t) {
          c[t] = !0
      },
      encode: function() {
          for (var t = [], e = [], r = 0; r < c.length; r++)
              c[r] && (t[Math.floor(r / 6)] ^= 1 << r % 6);
          for (r = 0; r < t.length; r++)
              e[r] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[r] || 0);
          return e.join("")
      }
  }), l = s.get(), d = 0; d < l.length; d++)
      l[d] && u.set(d + 1);
  var p = u.encode();
  e["default"] = function() {
      return p
  }
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__read || function(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r)
          return t;
      var n, i, o = r.call(t), a = [];
      try {
          for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value)
      } catch (s) {
          i = {
              error: s
          }
      } finally {
          try {
              n && !n.done && (r = o["return"]) && r.call(o)
          } finally {
              if (i)
                  throw i.error
          }
      }
      return a
  }
    , i = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
  ;
  e.__esModule = !0,
  e.EventDelegator = e.EventEmitter = void 0;
  var o = r(60)
    , a = r(1)
    , s = function() {
      function t() {
          var t = this;
          this.emit = function(e, r) {
              if (t) {
                  var n, i = t.EventsList[e];
                  if (null === i || void 0 === i ? void 0 : i.length) {
                      i = i.slice();
                      for (var o = 0; o < i.length; o++) {
                          n = i[o];
                          try {
                              var a = n.callback.apply(t, [r]);
                              if (1 === n.type && t.remove(e, n.callback),
                              !1 === a)
                                  break
                          } catch (s) {
                              throw s
                          }
                      }
                  }
                  return t
              }
          }
          ,
          this.EventsList = {}
      }
      return t.prototype.indexOf = function(t, e) {
          for (var r = 0; r < t.length; r++)
              if (t[r].callback === e)
                  return r;
          return -1
      }
      ,
      t.prototype.on = function(t, e, r) {
          if (void 0 === r && (r = 0),
          this) {
              var n = this.EventsList[t];
              if (n || (this.EventsList[t] = [],
              n = this.EventsList[t]),
              -1 === this.indexOf(n, e)) {
                  var i = {
                      name: t,
                      type: r || 0,
                      callback: e
                  };
                  return n.push(i),
                  this
              }
              return this
          }
      }
      ,
      t.prototype.one = function(t, e) {
          this.on(t, e, 1)
      }
      ,
      t.prototype.remove = function(t, e) {
          if (this) {
              var r = this.EventsList[t];
              if (!r)
                  return null;
              if (!e) {
                  try {
                      delete this.EventsList[t]
                  } catch (i) {}
                  return null
              }
              if (r.length) {
                  var n = this.indexOf(r, e);
                  r.splice(n, 1)
              }
              return this
          }
      }
      ,
      t.prototype.clear = function() {
          this.EventsList = {}
      }
      ,
      t
  }();
  e.EventEmitter = s;
  var c = function() {
      function t(t, e) {
          this.boundEvent = {},
          this.EventsList = {},
          this.captcha = t,
          this.$wrapper = e,
          this.initTouchPrevent()
      }
      return t.prototype.indexOf = function(t, e, r, n) {
          for (var i = 0; i < t.length; i++)
              if (t[i].target === e && t[i].name === r && t[i].callback === n)
                  return i;
          return -1
      }
      ,
      t.prototype.initTouchPrevent = function() {
          var t = this.captcha;
          var e = !!a.supportsPassive && {
              passive: !1
          };
          document.addEventListener && document.addEventListener("touchmove", function(e) {
              var r;
              t.enableAged || null === (r = e.preventDefault) || void 0 === r || r.call(e)
          }, e)
      }
      ,
      t.prototype.on = function(t, e, r) {
          if (this) {
              var i, o, a;
              if ("string" == typeof t && "function" == typeof e) {
                  i = n(this.$wrapper, 1)[0],
                  o = t,
                  a = e
              } else {
                  if ("object" != typeof t || "string" != typeof e || "function" != typeof r)
                      throw new Error("wrong param in bound event");
                  i = t,
                  o = e,
                  a = r
              }
              var s = this.EventsList[o];
              if (s || (this.EventsList[o] = [],
              s = this.EventsList[o]),
              -1 === this.indexOf(s, i, o, a)) {
                  var c = {
                      target: i,
                      name: o,
                      type: 0,
                      callback: a
                  };
                  s.push(c)
              }
              this.bindEvent(o)
          }
      }
      ,
      t.prototype.bindEvent = function(t) {
          var e = this;
          this.boundEvent[t] || (this.$wrapper.on(t, function(r) {
              e.emit(t, r)
          }),
          this.boundEvent[t] = !0)
      }
      ,
      t.prototype.emit = function(t, e) {
          var r, n, o = this.EventsList[t];
          if (null === o || void 0 === o ? void 0 : o.length)
              try {
                  for (var a = i(o), s = a.next(); !s.done; s = a.next()) {
                      var c = s.value
                        , u = c.target
                        , l = c.callback;
                      this.checkIfTarget(u, e) && l.apply(u, [e])
                  }
              } catch (d) {
                  r = {
                      error: d
                  }
              } finally {
                  try {
                      s && !s.done && (n = a["return"]) && n.call(a)
                  } finally {
                      if (r)
                          throw r.error
                  }
              }
      }
      ,
      t.prototype.clear = function() {
          this.EventsList = {}
      }
      ,
      t.prototype.off = function(t, e, r) {
          var n = this.EventsList[e];
          if (!n)
              return null;
          if (n.length) {
              var i = this.indexOf(n, t, e, r);
              i > -1 && n.splice(i, 1)
          }
      }
      ,
      t.prototype.checkIfTarget = function(t, e) {
          if (!t || !e || !e.target)
              return !1;
          if (e.target === t)
              return !0;
          if ($(e.target).parents().index(t) > -1)
              return !0;
          var r = o.getPosition(e);
          return !!this.checkIfStartInElOffset(t, null === r || void 0 === r ? void 0 : r.x, null === r || void 0 === r ? void 0 : r.y) || void 0
      }
      ,
      t.prototype.checkIfStartInElOffset = function(t, e, r) {
          try {
              if (!e || !r)
                  return !1;
              var n = $(t).offset()
                , i = $(t).height()
                , o = $(t).width();
              if (!n || !i || !o)
                  return !1;
              var a = n.top
                , s = n.left;
              return !(e < s || e > s + o) && !(r < a || r > a + i)
          } catch (c) {
              return !1
          }
      }
      ,
      t
  }();
  e.EventDelegator = c
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
    , i = this && this.__read || function(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r)
          return t;
      var n, i, o = r.call(t), a = [];
      try {
          for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value)
      } catch (s) {
          i = {
              error: s
          }
      } finally {
          try {
              n && !n.done && (r = o["return"]) && r.call(o)
          } finally {
              if (i)
                  throw i.error
          }
      }
      return a
  }
    , o = this && this.__spreadArray || function(t, e) {
      for (var r = 0, n = e.length, i = t.length; r < n; r++,
      i++)
          t[i] = e[r];
      return t
  }
    , a = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.DomManager = void 0;
  var s = r(7)
    , c = a(r(96))
    , u = r(41)
    , l = r(1)
    , d = r(28)
    , p = r(97)
    , f = r(51)
    , h = r(31)
    , g = function() {
      function t(t) {
          this.instruction = "",
          this.errorTimeout = null,
          this.showType = "popup",
          this.spriteSize = [0, 0],
          this.allElTypes = [],
          this.operationDom = document.getElementById("tcOperation"),
          this.insIcons = {},
          this.addDocumentClass = function(t) {
              var e = t.type;
              "popup" !== e && "embed" !== e && (e = "full");
              var r = "type-" + e
                , n = document.getElementsByTagName("html")[0]
                , i = r;
              t.noHeader && (i += i ? " noHeader" : "noHeader"),
              t.inDarkMode && (i += i ? " dark-mode" : "dark-mode"),
              n.className = i
          }
          ,
          this.captcha = t,
          this.languageMgr = new c["default"](s.keys,s.all),
          this.bindResize()
      }
      return t.prototype.getRate = function() {
          return 1
      }
      ,
      t.prototype.initShowType = function(t) {
          this.showType = t
      }
      ,
      t.prototype.refreshDom = function(t) {
          var e, r, a, s, c = this;
          this.destroy(),
          this.changeOperationStatus("loading"),
          this.curShowInfo = t,
          this.instruction = t.instruction || "",
          this.languageMgr.init(t.lang ? t.lang : (null === (a = this.captcha.option) || void 0 === a ? void 0 : a.global) ? "en" : "zh-cn", "embed" === this.showType);
          var l = this.getBgSize(t);
          $.isArray(l) && (this.getRate = function() {
              return ($(c.operationDom).width() || 360) / l[0]
          }
          );
          var d = [];
          this.initVerifyBtn(Boolean(null === (s = t.verify_trigger_cfg) || void 0 === s ? void 0 : s.verify_icon)),
          this.initHeader(),
          this.initInstruction(),
          this.initFooter(),
          u.get$Dom().statusFail.text(this.languageMgr.getWord("note-img-load-failed")),
          this.initAriaAttr(this.showType);
          var f = {
              captcha: this.captcha,
              operationDom: this.operationDom,
              showInfo: t,
              getRate: this.getRate,
              bgSize: l
          }
            , g = function(e) {
              var r = $.Deferred();
              if (!e.dataCheck(t))
                  return "continue";
              var n = new e.el;
              n.init(f, function(t) {
                  t ? r.reject(t) : r.resolve()
              }),
              d.push(r),
              v.allElTypes.push(n)
          }
            , v = this;
          try {
              for (var m = n(p.CaptchaEls), y = m.next(); !y.done; y = m.next()) {
                  g(y.value)
              }
          } catch (w) {
              e = {
                  error: w
              }
          } finally {
              try {
                  y && !y.done && (r = m["return"]) && r.call(m)
              } finally {
                  if (e)
                      throw e.error
              }
          }
          $.when.apply($, o([], i(d))).then(function() {
              c.finishDomLoading()
          }, function(t) {
              var e = "CaptchaEl init error," + t;
              c.captcha.errorHandler.send({
                  errorType: h.ErrorTypes.DY_IMG_ERROR,
                  reason: e
              }),
              c.finishDomLoading("fail")
          })
      }
      ,
      t.prototype.getBgSize = function(t) {
          var e = t.bg_elem_cfg;
          return null === e || void 0 === e ? void 0 : e.size_2d
      }
      ,
      t.prototype.finishDomLoading = function(t) {
          void 0 === t && (t = ""),
          this.resizeElems(),
          this.changeOperationStatus(t),
          $(".tc-fg-item").css("opacity", "1"),
          this.captcha.invisible || l.setVoiceOverFocus($("#pHeaderTitle")[0]),
          this.captcha.event.emit("initReady", "")
      }
      ,
      t.prototype.reInitStatus = function() {
          var t, e;
          try {
              for (var r = n(this.allElTypes), i = r.next(); !i.done; i = r.next()) {
                  i.value.reInit()
              }
          } catch (o) {
              t = {
                  error: o
              }
          } finally {
              try {
                  i && !i.done && (e = r["return"]) && e.call(r)
              } finally {
                  if (t)
                      throw t.error
              }
          }
      }
      ,
      t.prototype.destroy = function() {
          var t, e;
          try {
              for (var r = n(this.allElTypes), i = r.next(); !i.done; i = r.next()) {
                  i.value.destroy()
              }
          } catch (o) {
              t = {
                  error: o
              }
          } finally {
              try {
                  i && !i.done && (e = r["return"]) && e.call(r)
              } finally {
                  if (t)
                      throw t.error
              }
          }
          this.allElTypes = [],
          this.captcha.userEvent.clear()
      }
      ,
      t.prototype.initHeader = function() {
          var t = u.get$Dom();
          d.isIos() || t.title.removeAttr("role"),
          t.title.text(this.languageMgr.getWord("frame-verification")),
          t.txtBack.text(this.languageMgr.getWord("frame-back")),
          this.resizeHeader()
      }
      ,
      t.prototype.initInstruction = function() {
          var t = this
            , e = u.get$Dom();
          e.instruction.children(".tc-instruction-icon").remove(),
          e.instruction.removeClass("error right-to-left"),
          e.instructionText.text("" + this.instruction || "\u8bf7\u62d6\u52a8\u7269\u4f53\u5b8c\u6210\u9a8c\u8bc1");
          var r = this.curShowInfo
            , i = r.ins_elem_cfg
            , o = void 0 === i ? [] : i
            , a = r.sprite_url;
          o.length > 0 && a && this.captcha.asyncAction.action(function(e) {
              e() || f.loadImg({
                  id: 0,
                  src: a,
                  el: document.createElement("img"),
                  onError: function() {
                      e()
                  },
                  onSuccess: function(r) {
                      var i, s;
                      if (!e()) {
                          var c = r.width
                            , u = r.height;
                          t.spriteSize = [c, u];
                          var l = function(e) {
                              var r = e.id
                                , n = e.size_2d
                                , i = e.sprite_pos
                                , o = $(document.createElement("div"));
                              o.addClass("tc-instruction-icon"),
                              d.setSpriteUrl({
                                  el: o[0],
                                  data: {
                                      size_2d: n,
                                      sprite_pos: i,
                                      spriteSize: t.spriteSize
                                  },
                                  rate: t.getRate(),
                                  spriteUrl: a,
                                  isPureGet: !0
                              }),
                              $(".tc-title").append(o),
                              t.insIcons[r] = {
                                  node: o,
                                  config: e
                              },
                              setTimeout(function() {
                                  $(o).css("opacity", "1")
                              }, 100)
                          };
                          try {
                              for (var p = n(o), f = p.next(); !f.done; f = p.next()) {
                                  l(f.value)
                              }
                          } catch (h) {
                              i = {
                                  error: h
                              }
                          } finally {
                              try {
                                  f && !f.done && (s = p["return"]) && s.call(p)
                              } finally {
                                  if (i)
                                      throw i.error
                              }
                          }
                      }
                  }
              })
          }),
          this.languageMgr.rightToLeft && e.instruction.addClass("right-to-left"),
          "embed" === this.showType && e.embedStatus.removeClass("hide"),
          this.resizeInstruction()
      }
      ,
      t.prototype.initFooter = function() {
          var t = u.get$Dom();
          this.errorTimeout && clearTimeout(this.errorTimeout),
          t.normalVerifyText.text(this.languageMgr.getWord("frame-standard")),
          t.agedText.text(this.languageMgr.getWord("frame-simple")),
          t.btnVerifyText.text(this.languageMgr.getWord("frame-ok")),
          window.open || t.feedback.hide(),
          this.resizeFooter()
      }
      ,
      t.prototype.initVerifyBtn = function(t) {
          var e, r, n = u.get$Dom();
          t ? (n.btnVerify.addClass("show"),
          (null === (e = this.captcha.option) || void 0 === e ? void 0 : e.fb) && "embed" === this.showType && n.embedStatus.addClass("hide-feedback")) : (n.btnVerify.removeClass("show"),
          (null === (r = this.captcha.option) || void 0 === r ? void 0 : r.fb) && "embed" === this.showType && n.embedStatus.removeClass("hide-feedback"))
      }
      ,
      t.prototype.initAriaAttr = function(t) {
          var e = u.get$Dom();
          try {
              "popup" === t && l.addAriaModel(e.tcWrap[0]),
              e.instructionText.attr("aria-label", "" + (this.instruction || "\u62d6\u52a8\u4e0b\u65b9\u6ed1\u5757\u5b8c\u6210\u62fc\u56fe")),
              e.title.attr("aria-label", this.captcha.aged ? this.languageMgr.getWord("aria-verification-simple") : this.languageMgr.getWord("aria-verification-standard")),
              e.coverReload.children("img").attr("alt", this.languageMgr.getWord("note-img-load-failed")).attr("aria-label", this.languageMgr.getWord("note-img-load-failed")),
              e.btnBack.children("img").attr("alt", this.languageMgr.getWord("frame-back")).attr("aria-label", this.languageMgr.getWord("frame-back")),
              e.close.children("img").attr("role", "button").attr("alt", this.languageMgr.getWord("aria-close")).attr("aria-label", this.languageMgr.getWord("aria-close")),
              e.btnReload.children("img").attr("role", "button").attr("alt", this.languageMgr.getWord("aria-refresh")).attr("aria-label", this.languageMgr.getWord("aria-refresh")),
              e.feedback.children("img").attr("role", "button").attr("alt", this.languageMgr.getWord("aria-feedback")).attr("aria-label", this.languageMgr.getWord("aria-feedback")),
              e.aged.attr("aria-atomic", "true").attr("role", "button").attr("aria-label", this.languageMgr.getWord("aria-simple")),
              e.normalVerify.attr("aria-atomic", "true").attr("role", "button").attr("aria-label", this.languageMgr.getWord("aria-standard"))
          } catch (r) {}
      }
      ,
      t.prototype.resizeHeader = function() {
          var t = u.get$Dom();
          t.title.removeClass("small-fontsize multi-line"),
          "full" === this.showType && t.title.height() > t.fullScreenHead.height() && (t.title.addClass("small-fontsize"),
          t.title.height() > t.fullScreenHead.height() && t.title.addClass("multi-line"))
      }
      ,
      t.prototype.resizeInstruction = function() {
          var t = u.get$Dom();
          t.instruction.removeClass("middle-fontsize small-fontsize multi-line");
          var e = t.instructionWrap.height() || 0;
          if ("embed" === this.showType) {
              var r = t.instructionWrap.width() - t.embedStatus.width();
              7 === d.getIEVersion() && (r = 164),
              t.instruction.width(r),
              t.instruction.height() > e && t.instruction.addClass("multi-line")
          } else
              t.instruction.height() > e && (t.instruction.addClass("middle-fontsize"),
              t.instruction.height() > e && (t.instruction.removeClass("middle-fontsize"),
              t.instruction.addClass("small-fontsize"),
              t.instruction.height() > e && t.instruction.addClass("multi-line")));
          for (var n in this.insIcons)
              this.resizeInstructionIcon(this.insIcons[n])
      }
      ,
      t.prototype.resizeFooter = function() {
          var t = u.get$Dom();
          if ("popup" === this.showType) {
              var e = ($(window).height() || 0) - ($("#popCtWrapHeader").outerHeight(!0) || 0) - (t.instructionWrap.outerHeight(!0) || 0) - (t.operation.outerHeight(!0) || 0);
              e <= 0 && (e = 36),
              t.tcStatus.height(e)
          }
      }
      ,
      t.prototype.resizeInstructionIcon = function(t) {
          var e = this.getRate()
            , r = t.config
            , n = {
              size_2d: r.size_2d,
              sprite_pos: r.sprite_pos,
              spriteSize: this.spriteSize
          }
            , i = d.getSpriteStyle(n, e);
          t.node.css({
              width: i.width + "px",
              height: i.height + "px"
          }),
          t.node.children("img").css({
              width: i.bgWidth + "px",
              height: i.bgHeight + "px"
          })
      }
      ,
      t.prototype.changeOperationStatus = function(t) {
          var e, r;
          try {
              for (var i = n(["success", "loading", "error", "fail"]), o = i.next(); !o.done; o = i.next()) {
                  var a = o.value;
                  l.removeClass(this.operationDom, "show-" + a),
                  a === t && l.addClass(this.operationDom, "show-" + t)
              }
          } catch (s) {
              e = {
                  error: s
              }
          } finally {
              try {
                  o && !o.done && (r = i["return"]) && r.call(i)
              } finally {
                  if (e)
                      throw e.error
              }
          }
      }
      ,
      t.prototype.bindResize = function() {
          var t = this;
          window.onresize = function() {
              t.curShowInfo && (t.resizeElems(),
              t.resizeHeader(),
              t.resizeInstruction(),
              t.resizeFooter())
          }
      }
      ,
      t.prototype.resizeElems = function() {
          var t, e;
          try {
              for (var r = n(this.allElTypes), i = r.next(); !i.done; i = r.next()) {
                  i.value.resize()
              }
          } catch (o) {
              t = {
                  error: o
              }
          } finally {
              try {
                  i && !i.done && (e = r["return"]) && e.call(r)
              } finally {
                  if (t)
                      throw t.error
              }
          }
      }
      ,
      t.prototype.verifySuccess = function() {
          this.showSuccessNote(),
          this.changeOperationStatus("success")
      }
      ,
      t.prototype.verifyFail = function() {
          var t = this;
          this.showErrorNoteByWording("note-verify-failed"),
          this.shakeEls(function() {
              t.reInitStatus()
          })
      }
      ,
      t.prototype.verifyFailRefresh = function(t) {
          this.showErrorNoteByWording("note-verify-failed-max"),
          this.shakeEls(function() {
              t()
          })
      }
      ,
      t.prototype.verifyError = function(t, e, r) {
          var n = "note-verify-default";
          "12" === e ? n = "note-verify-error" : "52" === e && (n = "note-appid-region-wrong"),
          this.showCoverErrorByWording({
              wording: n,
              errorCode: e,
              sid: t
          }),
          setTimeout(function() {
              r()
          }, 1e3)
      }
      ,
      t.prototype.verifyHttpError = function(t) {
          this.showErrorNoteByWording("note-verify-timeout"),
          this.shakeEls(t)
      }
      ,
      t.prototype.showError = function() {
          this.changeOperationStatus("fail")
      }
      ,
      t.prototype.showSuccessNote = function() {
          u.get$Dom().txtSuccess.text(this.languageMgr.getWord("note-verify-success"))
      }
      ,
      t.prototype.showCoverErrorByWording = function(t) {
          var e = t.wording
            , r = t.errorCode
            , n = t.sid
            , i = u.get$Dom()
            , o = this.languageMgr.getWord(e);
          r && (o = o.replace(/\+/g, r)),
          n && (o += '<div class="tc-token">' + $("<div>").text(n).html() + "</div>"),
          i.txtError.html(o),
          this.changeOperationStatus("error")
      }
      ,
      t.prototype.showErrorNoteByWording = function(t) {
          var e = this.languageMgr.getWord(t);
          this.showErrorNote(e)
      }
      ,
      t.prototype.showErrorNote = function(t) {
          var e = this;
          this.errorTimeout && clearTimeout(this.errorTimeout);
          var r = u.get$Dom();
          r.instructionText.text(t),
          r.instruction.addClass("error"),
          "embed" === this.showType && r.embedStatus.addClass("hide"),
          this.errorTimeout = window.setTimeout(function() {
              r.instructionText.text(e.instruction),
              r.instruction.removeClass("error"),
              "embed" === e.showType && r.embedStatus.removeClass("hide")
          }, 1500)
      }
      ,
      t.prototype.shakeEls = function(t) {
          l.shakeEl(this.operationDom, t)
      }
      ,
      t.prototype.addEmbedTip = function() {
          this.addHoverDom($("#e_showFB"), "aria-feedback"),
          this.addHoverDom($("#e_reload"), "aria-refresh"),
          this.addHoverDom($(".tcaptcha-embed .aged-icon"), "frame-simple"),
          this.addHoverDom($(".tcaptcha-embed .normal-verify-icon"), "frame-standard")
      }
      ,
      t.prototype.addHoverDom = function(t, e) {
          var r = this;
          l.isTouchEventSupported() || t.on("mouseenter", function() {
              t.css("border-color", "#007AFF"),
              t.children(".status-normal").removeClass("show"),
              t.children(".status-hover").addClass("show");
              var n = document.createElement("div");
              $(n).text(r.languageMgr.getWord(e)).addClass("hover-tip").appendTo($("body")),
              t.on("mousemove", function(t) {
                  $(n).css({
                      left: t.clientX - 10 + "px",
                      top: t.clientY + 20 + "px"
                  })
              }),
              t.on("mouseleave", function() {
                  t.css("border-color", "#999"),
                  t.children(".status-hover").removeClass("show"),
                  t.children(".status-normal").addClass("show"),
                  $(n).remove(),
                  $(n).off("mousemove mouseleave")
              })
          })
      }
      ,
      t
  }();
  e.DomManager = g
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0;
  var n = r(2)
    , i = function() {
      function t(t, e) {
          this.rightToLeft = !1,
          this.currentLanguage = "en",
          this.keys = t,
          this.content = e,
          this.curLanguagePack = {}
      }
      return t.prototype.init = function(t, e) {
          for (var r = n.langTransform(t), i = this.content[r], o = 0; o < this.keys.length; o++)
              this.curLanguagePack[this.keys[o]] = i[o];
          this.rightToLeft = "ar" === r || "he" === r || "iw" === r,
          this.currentLanguage = r
      }
      ,
      t.prototype.getWord = function(t) {
          var e = this.curLanguagePack[t];
          if (!e)
              for (var r = 0; r < this.keys.length; r++)
                  if (this.keys[r] === t) {
                      e = this.content.en[r];
                      break
                  }
          return n.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e
      }
      ,
      t
  }();
  e["default"] = i
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.CaptchaEls = void 0;
  var n = r(98)
    , i = r(100)
    , o = r(101);
  e.CaptchaEls = [{
      dataCheck: function(t) {
          return !!t.bg_elem_cfg
      },
      el: i.BgEl
  }, {
      dataCheck: function(t) {
          return !!t.fg_elem_list
      },
      el: n.DragEl
  }, {
      dataCheck: function(t) {
          var e;
          return !!(null === (e = t.bg_elem_cfg) || void 0 === e ? void 0 : e.click_cfg)
      },
      el: o.ClickEl
  }]
}
, function(t, e, r) {
  "use strict";
  var n, i = this && this.__extends || (n = function(t, e) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
      }instanceof Array && function(t, e) {
          t.__proto__ = e
      }
      || function(t, e) {
          for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      }
      )(t, e)
  }
  ,
  function(t, e) {
      if ("function" != typeof e && null !== e)
          throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
      function r() {
          this.constructor = t
      }
      n(t, e),
      t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
      new r)
  }
  ), o = this && this.__read || function(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r)
          return t;
      var n, i, o = r.call(t), a = [];
      try {
          for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value)
      } catch (s) {
          i = {
              error: s
          }
      } finally {
          try {
              n && !n.done && (r = o["return"]) && r.call(o)
          } finally {
              if (i)
                  throw i.error
          }
      }
      return a
  }
  , a = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
  , s = this && this.__spreadArray || function(t, e) {
      for (var r = 0, n = e.length, i = t.length; r < n; r++,
      i++)
          t[i] = e[r];
      return t
  }
  , c = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
          "default": t
      }
  }
  ;
  e.__esModule = !0,
  e.DragEl = void 0;
  var u = r(1)
    , l = r(60)
    , d = r(99)
    , p = r(31)
    , f = c(r(24))
    , h = function() {
      function t() {
          this.els = {},
          this.getRate = function() {
              return 1
          }
      }
      return t.prototype.init = function(t, e) {
          var r, n, i = t.showInfo, c = t.captcha, u = t.operationDom, l = t.bgSize, d = t.getRate;
          if (this.getRate = d,
          i) {
              var p = i.fg_elem_list
                , h = i.fg_binding_list
                , v = i.instruction
                , m = d()
                , y = [];
              if (p && 0 !== p.length) {
                  for (var w = o(l, 2), _ = w[0], b = w[1], E = function(t) {
                      var e = $.Deferred()
                        , r = new g(c,{
                          wrapper: u,
                          operationSize: [_, b],
                          rate: m,
                          fgItemData: p[t],
                          spriteUrl: i.sprite_url,
                          index: t,
                          colorScheme: i.color_scheme ? i.color_scheme : f["default"].defaultColorScheme
                      });
                      S.els["" + p[t].id] = r,
                      r.init(function(n) {
                          if (n)
                              e.reject(n);
                          else {
                              try {
                                  var i = p[t].describe_text ? p[t].describe_text : v;
                                  $(r.el).attr("aria-label", i).attr("alt", i)
                              } catch (o) {}
                              e.resolve()
                          }
                      }),
                      y.push(e)
                  }, S = this, T = 0; T < p.length; T++)
                      E(T);
                  if (h && h.length > 0)
                      try {
                          for (var R = a(h), k = R.next(); !k.done; k = R.next()) {
                              var C = k.value
                                , D = this.els["" + C.master]
                                , A = this.els["" + C.slave];
                              D && A && D.bindSlave(A)
                          }
                      } catch (O) {
                          r = {
                              error: O
                          }
                      } finally {
                          try {
                              k && !k.done && (n = R["return"]) && n.call(R)
                          } finally {
                              if (r)
                                  throw r.error
                          }
                      }
                  $.when.apply($, s([], o(y))).then(function() {
                      e()
                  }, function(t) {
                      e(t)
                  })
              } else
                  e()
          }
      }
      ,
      t.prototype.reInit = function() {
          for (var t in this.els) {
              if (Object.prototype.hasOwnProperty.call(this.els, t))
                  this.els[t].reInit()
          }
      }
      ,
      t.prototype.resize = function() {
          for (var t in this.els)
              Object.prototype.hasOwnProperty.call(this.els, t) && this.els[t].resize(this.getRate())
      }
      ,
      t.prototype.destroy = function() {
          for (var t in this.els)
              Object.prototype.hasOwnProperty.call(this.els, t) && this.els[t].destroy();
          this.els = {}
      }
      ,
      t
  }();
  e.DragEl = h;
  var g = function(t) {
      function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          return e.slaves = [],
          e.startPos = null,
          e.acting = !1,
          e.movePoints = [],
          e.boundEventStartFn = null,
          e.boundEventMoveFn = null,
          e.boundEventEndFn = null,
          e
      }
      return i(e, t),
      e.prototype.init = function(e) {
          var r = this;
          t.prototype.init.call(this, function(t) {
              t ? e(t) : (r.option.fgItemData.move_cfg && (r.addDragCss(),
              r.initStatusWithRate(r.option.rate),
              r.bindEvt()),
              e(null))
          })
      }
      ,
      e.prototype.addDragCss = function() {
          u.setCss(this.el, {
              cursor: "pointer"
          })
      }
      ,
      e.prototype.initStatusWithRate = function(t) {
          var e = this.option
            , r = e.fgItemData
            , n = e.operationSize
            , i = r.init_pos[0] * t
            , a = r.init_pos[1] * t;
          this.initCSSPosition = [i, a],
          this.curCSSPositoon = [i, a],
          this.startCSSPosition = [i, a];
          var s = o(r.size_2d, 2)
            , c = s[0]
            , u = s[1]
            , l = [n[0] - c, n[1] - u]
            , d = [l[0] * t, l[1] * t];
          this.boundary = d
      }
      ,
      e.prototype.bindEvt = function() {
          var t = this;
          this.boundEventStartFn = function(e) {
              var r;
              null === (r = e.preventDefault) || void 0 === r || r.call(e),
              t.onEventStart(e)
          }
          ,
          this.boundEventMoveFn = function(e) {
              var r;
              null === (r = e.preventDefault) || void 0 === r || r.call(e),
              t.onEventMove(e)
          }
          ,
          this.boundEventEndFn = function(e) {
              t.onEventEnd(e)
          }
          ,
          this.captcha.userEvent.on(this.el, "mousedown touchstart", this.boundEventStartFn),
          this.captcha.userEvent.on(this.option.wrapper, "mousemove touchmove", this.boundEventMoveFn),
          this.captcha.userEvent.on(this.option.wrapper, "mouseup touchend", this.boundEventEndFn)
      }
      ,
      e.prototype.onEventStart = function(t) {
          var e = l.getPosition(t);
          e && void 0 !== (null === e || void 0 === e ? void 0 : e.x) && void 0 !== (null === e || void 0 === e ? void 0 : e.y) ? this.startPos || this.acting || (this.startPos = [e.x, e.y],
          this.startCSSPosition = this.curCSSPositoon) : this.captcha.errorHandler.send({
              errorType: p.ErrorTypes.DY_JS_ERROR,
              reason: "errorMsg:unable to get touch/drag start pos;errorPos:drag-el/DragItem/onEventStart"
          })
      }
      ,
      e.prototype.onEventMove = function(t) {
          if (this.startPos) {
              var e = l.getPosition(t);
              if (e && void 0 !== (null === e || void 0 === e ? void 0 : e.x) && void 0 !== (null === e || void 0 === e ? void 0 : e.y)) {
                  var r = o(this.startPos, 2)
                    , n = r[0]
                    , i = r[1]
                    , a = e.x - n
                    , s = e.y - i;
                  this.onMove([a, s])
              }
          }
      }
      ,
      e.prototype.onEventEnd = function(t) {
          var e, r;
          if (this.startPos) {
              this.startPos = null,
              this.endAct();
              try {
                  for (var n = a(this.slaves), i = n.next(); !i.done; i = n.next()) {
                      i.value.endAct()
                  }
              } catch (o) {
                  e = {
                      error: o
                  }
              } finally {
                  try {
                      i && !i.done && (r = n["return"]) && r.call(n)
                  } finally {
                      if (e)
                          throw e.error
                  }
              }
          }
      }
      ,
      e.prototype.reInit = function() {
          if (this.initCSSPosition && this.curCSSPositoon) {
              this.curCSSPositoon = this.initCSSPosition,
              this.startCSSPosition = this.initCSSPosition;
              var t = o(this.curCSSPositoon, 2)
                , e = t[0]
                , r = t[1];
              u.setCss(this.el, {
                  left: e + "px",
                  top: r + "px"
              })
          }
      }
      ,
      e.prototype.resize = function(e) {
          t.prototype.resize.call(this, e),
          this.initStatusWithRate(e)
      }
      ,
      e.prototype.onMove = function(t) {
          var e, r, n, i, c = this.checkBoundary(s([], o(t)));
          this.act(c);
          try {
              for (var u = a(this.slaves), l = u.next(); !l.done; l = u.next())
                  for (var d = l.value.checkBoundary(c), p = 0; p < d.length; p++)
                      "undefined" == typeof d[p] && (c[p] = undefined)
          } catch (g) {
              e = {
                  error: g
              }
          } finally {
              try {
                  l && !l.done && (r = u["return"]) && r.call(u)
              } finally {
                  if (e)
                      throw e.error
              }
          }
          try {
              for (var f = a(this.slaves), h = f.next(); !h.done; h = f.next()) {
                  h.value.act(c)
              }
          } catch (v) {
              n = {
                  error: v
              }
          } finally {
              try {
                  h && !h.done && (i = f["return"]) && i.call(f)
              } finally {
                  if (n)
                      throw n.error
              }
          }
      }
      ,
      e.prototype.getTargetPos = function(t) {
          var e, r = o(t, 2), n = r[0], i = r[1], a = o(this.startCSSPosition, 2), s = a[0], c = a[1], u = null === (e = this.option.fgItemData.move_cfg) || void 0 === e ? void 0 : e.move_factor, l = 1, d = 1;
          return u && (l = u[0],
          d = u[1]),
          [void 0 !== n ? s + n * l : this.curCSSPositoon[0], void 0 !== i ? c + i * d : this.curCSSPositoon[1]]
      }
      ,
      e.prototype.act = function(t) {
          this.acting = !0;
          var e = this.getTargetPos(t)
            , r = o(e, 2)
            , n = r[0]
            , i = r[1];
          this.curCSSPositoon = [n, i],
          u.setCss(this.el, {
              top: i + "px",
              left: n + "px"
          })
      }
      ,
      e.prototype.endAct = function() {
          this.acting = !1,
          this.addData(),
          this.startCSSPosition = this.curCSSPositoon
      }
      ,
      e.prototype.addData = function() {
          var t, e, r, n = null === (r = this.option.fgItemData.move_cfg) || void 0 === r ? void 0 : r.data_type;
          if (n)
              try {
                  for (var i = a(n), s = i.next(); !s.done; s = i.next()) {
                      var c = s.value
                        , u = o(this.curCSSPositoon, 2)
                        , l = u[0]
                        , d = u[1]
                        , p = "";
                      if ("DynAnswerType_POS" === c && (p = Math.floor(l / this.rate) + "," + Math.floor(d / this.rate)),
                      "DynAnswerType_CENTER_POS" === c) {
                          var f = $(this.el)
                            , h = f.width()
                            , g = f.height();
                          p = Math.floor((l + h / 2) / this.rate) + "," + Math.floor((d + g / 2) / this.rate)
                      }
                      this.captcha.event.emit("setData", {
                          namespace: "dragEl",
                          data: [{
                              elem_id: this.id,
                              type: c,
                              data: p
                          }]
                      })
                  }
              } catch (v) {
                  t = {
                      error: v
                  }
              } finally {
                  try {
                      s && !s.done && (e = i["return"]) && e.call(i)
                  } finally {
                      if (t)
                          throw t.error
                  }
              }
      }
      ,
      e.prototype.bindSlave = function(t) {
          this.slaves.push(t)
      }
      ,
      e.prototype.destroy = function() {
          this.boundEventStartFn && this.captcha.userEvent.off(this.el, "mousedown touchstart", this.boundEventStartFn),
          this.boundEventMoveFn && this.captcha.userEvent.off(this.option.wrapper, "mousemove touchmove", this.boundEventMoveFn),
          this.boundEventEndFn && this.captcha.userEvent.off(this.option.wrapper, "mouseup touchend", this.boundEventEndFn);
          try {
              this.el && this.option.wrapper.removeChild(this.el)
          } catch (t) {}
      }
      ,
      e.prototype.checkBoundary = function(t) {
          var e = o(this.getTargetPos(t), 2)
            , r = e[0]
            , n = e[1]
            , i = o(this.boundary, 2)
            , a = i[0]
            , c = i[1]
            , u = s([], o(t));
          return (r < 0 || r > a) && (u[0] = undefined),
          (n < 0 || n > c) && (u[1] = undefined),
          u
      }
      ,
      e
  }(d.BaseEl)
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__assign || function() {
      return (n = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r])
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
      }
      ).apply(this, arguments)
  }
    , i = this && this.__read || function(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r)
          return t;
      var n, i, o = r.call(t), a = [];
      try {
          for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              a.push(n.value)
      } catch (s) {
          i = {
              error: s
          }
      } finally {
          try {
              n && !n.done && (r = o["return"]) && r.call(o)
          } finally {
              if (i)
                  throw i.error
          }
      }
      return a
  }
  ;
  e.__esModule = !0,
  e.BaseEl = void 0;
  var o = r(51)
    , a = r(1)
    , s = r(28)
    , c = function() {
      function t(t, e) {
          this.el = null,
          this.spriteSize = [0, 0],
          this.imgSize = [0, 0],
          this.rate = 1,
          this.index = 1,
          this.captcha = t,
          this.option = e,
          this.id = e.fgItemData.id,
          this.rate = e.rate,
          e.index && (this.index = e.index)
      }
      return t.prototype.init = function(t) {
          this.createEl(t)
      }
      ,
      t.prototype.createEl = function(t) {
          var e = this
            , r = this.option
            , i = r.wrapper
            , c = r.fgItemData
            , u = r.rate
            , l = r.spriteUrl
            , d = c.type
            , p = c.size_2d
            , f = c.init_pos
            , h = c.sprite_pos
            , g = c.img_url;
          if ("slider" === d)
              this.captcha.asyncAction.action(function(r) {
                  if (!r()) {
                      var n = e.option.colorScheme
                        , o = document.createElement("div");
                      $(o).addClass("tc-fg-item"),
                      a.setCss(o, {
                          left: f[0] * u + "px",
                          top: f[1] * u + "px",
                          zIndex: String(e.index)
                      });
                      var c = document.createElement("img");
                      if (c.alt = "slider",
                      c.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcAgMAAABuexVFAAAACVBMVEUAAADCwsL9/f1P0DqbAAAAAXRSTlMAQObYZgAAAB1JREFUGNNjCGVgYGANABKhyMwoEHMBkIgaZWIwAdyJJQnaJRg5AAAAAElFTkSuQmCC",
                      s.isLowIE()) {
                          $(o).addClass("tc-slider-ie"),
                          c.className = "tc-slider-bg unselectable";
                          var l = document.createElement("div");
                          l.className = "tc-iconfont-btn",
                          l.innerHTML = "&#xe900;",
                          a.setCss(l, {
                              color: n
                          }),
                          o.appendChild(l)
                      } else {
                          $(o).addClass("tc-slider-normal"),
                          a.setCss(o, {
                              width: p[0] * u + "px",
                              height: p[1] * u + "px",
                              lineHeight: p[1] * u + "px",
                              backgroundColor: n,
                              boxShadow: "0 0 " + 10 * u + "px " + u + "px rgb(" + s.hexToRgb(n) + " / 0.5)"
                          }),
                          c.className = "tc-slider-bg unselectable",
                          a.setCss(c, {
                              width: p[0] / 3.5 * u + "px",
                              height: p[0] / 3.5 * u / 10 * 7 + "px"
                          });
                          var d = document.createElement("i");
                          d.className = "tc-blank-text",
                          d.innerText = "&nbsp;",
                          o.appendChild(d)
                      }
                      o.appendChild(c),
                      i.appendChild(o),
                      e.el = o,
                      t(null)
                  }
              });
          else if (l && h)
              this.captcha.asyncAction.action(function(r) {
                  o.loadImg({
                      id: e.id,
                      src: l,
                      onError: function() {
                          r() || t("reason:load img " + l + " fail,pos:base-el/BaseEl/createEl/this.captcha.asyncAction.action/loadImg")
                      },
                      onSuccess: function(o) {
                          if (!r()) {
                              var a = [o.width, o.height];
                              e.spriteSize = a;
                              var d = s.getSpriteEl({
                                  data: n(n({
                                      spriteSize: a
                                  }, c), {
                                      sprite_pos: h
                                  }),
                                  rate: u,
                                  spriteUrl: l,
                                  zIndex: e.index
                              });
                              $(d).addClass("tc-fg-item"),
                              e.el = d,
                              i.appendChild(d),
                              t(null)
                          }
                      }
                  })
              });
          else if (g && f) {
              var v = document.createElement("img");
              this.el = v,
              this.captcha.asyncAction.action(function(r) {
                  o.loadImg({
                      id: e.id,
                      src: g + "",
                      el: v,
                      onError: function() {
                          r() || t("reason:load img " + g + " fail,pos:base-el/BaseEl/createEl/this.captcha.asyncAction.action/loadImg")
                      },
                      onSuccess: function(n) {
                          if (!r()) {
                              var o = n.width
                                , s = n.height;
                              e.imgSize = [o, s],
                              a.setCss(v, {
                                  position: "absolute",
                                  width: o * u + "px",
                                  height: s * u + "px",
                                  left: f[0] * u + "px",
                                  top: f[1] * u + "px",
                                  zIndex: String(e.index)
                              }),
                              $(v).addClass("tc-fg-item"),
                              i.appendChild(v),
                              t(null)
                          }
                      }
                  })
              })
          } else
              t("\u540e\u53f0\u53c2\u6570\u9519\u8bef")
      }
      ,
      t.prototype.resize = function(t) {
          this.rate = t,
          "slider" === this.option.fgItemData.type ? this.setSliderStyle(t) : (this.setElBgStyle(t),
          this.setImgStyle(t))
      }
      ,
      t.prototype.setImgStyle = function(t) {
          var e = this.option.fgItemData
            , r = e.img_url
            , n = e.init_pos;
          if (r && n && this.el) {
              var o = i(this.imgSize, 2)
                , s = o[0]
                , c = o[1];
              a.setCss(this.el, {
                  width: s * t + "px",
                  height: c * t + "px",
                  left: n[0] * t + "px",
                  top: n[1] * t + "px"
              })
          }
      }
      ,
      t.prototype.setElBgStyle = function(t) {
          var e = this.option
            , r = e.fgItemData
            , i = e.spriteUrl
            , o = r.sprite_pos;
          i && o && s.setSpriteUrl({
              el: this.el,
              data: n(n({
                  spriteSize: this.spriteSize
              }, r), {
                  sprite_pos: o
              }),
              rate: t,
              spriteUrl: i
          })
      }
      ,
      t.prototype.setSliderStyle = function(t) {
          var e = this.option.fgItemData
            , r = e.type
            , n = e.size_2d
            , i = e.init_pos;
          if ("slider" === r && this.el && (a.setCss(this.el, {
              left: i[0] * t + "px",
              top: i[1] * t + "px"
          }),
          !s.isLowIE())) {
              var o = this.option.colorScheme;
              a.setCss(this.el, {
                  width: n[0] * t + "px",
                  height: n[1] * t + "px",
                  lineHeight: n[1] * t + "px",
                  boxShadow: "0 0 " + 10 * t + "px " + t + "px rgb(" + s.hexToRgb(o) + " / 0.5)"
              }),
              a.setCss($(this.el).children("img")[0], {
                  width: n[0] / 3.5 * t + "px",
                  height: n[0] / 3.5 * t / 10 * 7 + "px"
              })
          }
      }
      ,
      t
  }();
  e.BaseEl = c
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__assign || function() {
      return (n = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r])
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
      }
      ).apply(this, arguments)
  }
  ;
  e.__esModule = !0,
  e.BgEl = void 0;
  var i = r(51)
    , o = r(41)
    , a = r(28)
    , s = r(1)
    , c = function() {
      function t() {
          this.spriteSize = [0, 0],
          this.getRate = function() {
              return 1
          }
      }
      return t.prototype.init = function(t, e) {
          var r = t.showInfo
            , n = t.getRate
            , i = t.captcha;
          this.option = {
              rate: n(),
              bgConfig: r.bg_elem_cfg,
              spriteUrl: r.sprite_url
          },
          this.captcha = i,
          this.getRate = n,
          this.loadBgImg(e)
      }
      ,
      t.prototype.loadBgImg = function(t) {
          var e = this
            , r = this.option
            , s = r.bgConfig
            , c = r.rate
            , u = r.spriteUrl
            , l = s.sprite_pos
            , d = s.img_url
            , p = s.size_2d
            , f = s.describe_text
            , h = o.get$Dom()
            , g = h.slideBg;
          h.operation.removeClass("opera-border"),
          this.captcha.asyncAction.action(function(r) {
              d ? i.loadImg({
                  src: d,
                  onError: function() {
                      r() || t("reason:load img " + d + " fail;pos:bg-el/BgEl/loadBgImg/this.captcha.asyncAction.action/loadImg")
                  },
                  onSuccess: function() {
                      r() || (a.setImageUrl(g[0], p, d, c),
                      f && $(g).attr("aria-label", f).attr("alt", f),
                      setTimeout(function() {
                          t(),
                          g.css("opacity", "1")
                      }, 100))
                  }
              }) : u && l ? i.loadImg({
                  id: 0,
                  src: u,
                  el: document.createElement("img"),
                  onError: function() {
                      r() || t("reason:load img " + u + " fail;pos:bg-el/BgEl/loadBgImg/this.captcha.asyncAction.action/loadImg")
                  },
                  onSuccess: function(i) {
                      if (!r()) {
                          var o = i.width
                            , d = i.height;
                          e.spriteSize = [o, d],
                          a.setSpriteUrl({
                              el: g[0],
                              data: n(n({}, s), {
                                  sprite_pos: l,
                                  spriteSize: e.spriteSize
                              }),
                              rate: c,
                              spriteUrl: u
                          }),
                          g.css("opacity", "0"),
                          setTimeout(function() {
                              t(),
                              g.css("opacity", "1")
                          }, 100)
                      }
                  }
              }) : (h.operation.addClass("opera-border"),
              t())
          })
      }
      ,
      t.prototype.getBgEl = function() {
          return o.get$Dom().slideBg[0]
      }
      ,
      t.prototype.reInit = function() {}
      ,
      t.prototype.resize = function() {
          var t = this.getRate()
            , e = this.option
            , r = e.bgConfig
            , i = e.spriteUrl
            , o = r.sprite_pos
            , s = r.img_url
            , c = r.size_2d;
          i && o && a.setSpriteUrl({
              el: this.getBgEl(),
              data: n(n({}, r), {
                  spriteSize: this.spriteSize,
                  sprite_pos: o
              }),
              rate: t,
              spriteUrl: i
          }),
          s && a.setImageUrl(this.getBgEl(), c, s, t)
      }
      ,
      t.prototype.destroy = function() {
          var t = this.getBgEl();
          s.supportsCSS("backgroundSize", "10px 10px") ? (s.setCss(t, {
              backgroundImage: ""
          }),
          $(t).css("opacity", "0")) : $(t).children("img").remove()
      }
      ,
      t
  }();
  e.BgEl = c
}
, function(t, e, r) {
  "use strict";
  var n = this && this.__values || function(t) {
      var e = "function" == typeof Symbol && Symbol.iterator
        , r = e && t[e]
        , n = 0;
      if (r)
          return r.call(t);
      if (t && "number" == typeof t.length)
          return {
              next: function() {
                  return t && n >= t.length && (t = void 0),
                  {
                      value: t && t[n++],
                      done: !t
                  }
              }
          };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
  ;
  e.__esModule = !0,
  e.ClickEl = void 0;
  var i = r(1)
    , o = r(41)
    , a = function() {
      function t() {
          this.marks = [],
          this.markClassName = "tc-click-mark",
          this.markSize = 24,
          this.standardWidth = 360,
          this.getRate = function() {
              return 1
          }
      }
      return t.prototype.init = function(t, e) {
          var r = this;
          try {
              this.clickCfg = t.showInfo.bg_elem_cfg.click_cfg,
              this.captcha = t.captcha,
              this.bgSize = t.bgSize,
              this.targetNode = $(t.operationDom),
              this.targetNode.addClass("pointer"),
              this.getRate = function() {
                  return Number(r.targetNode.css("width").slice(0, -2)) / r.standardWidth
              }
              ,
              this.captcha.userEvent.on("click", function(t) {
                  var e, i, a = t.target, s = r.getMarkIndex(a);
                  if (-1 !== s) {
                      try {
                          for (var c = n(r.marks.splice(s, r.marks.length - s)), u = c.next(); !u.done; u = c.next()) {
                              var l = u.value;
                              $(l).remove()
                          }
                      } catch (p) {
                          e = {
                              error: p
                          }
                      } finally {
                          try {
                              u && !u.done && (i = c["return"]) && i.call(c)
                          } finally {
                              if (e)
                                  throw e.error
                          }
                      }
                      r.addData()
                  } else if (a === o.get$Dom().slideBg[0] || a.parentNode === o.get$Dom().slideBg[0]) {
                      var d = void 0;
                      "inc_number" === r.clickCfg.mark_style ? d = String(r.marks.length + 1) : "icon" === r.clickCfg.mark_style || (d = undefined),
                      r.addNewMark(d, t.offsetX, t.offsetY),
                      r.addData()
                  }
              }),
              e()
          } catch (i) {
              e("reason:" + i.message + ";pos:click-el/ClickEl/init")
          }
      }
      ,
      t.prototype.getMarkIndex = function(t) {
          for (var e = t; e !== this.targetNode[0]; ) {
              var r = $.inArray(e, this.marks);
              if (-1 !== r)
                  return r;
              e = e.parentNode
          }
          return -1
      }
      ,
      t.prototype.addNewMark = function(t, e, r) {
          var n, o, a = $("<div class=" + this.markClassName + "></div>"), s = this.getRate(), c = this.markSize * s;
          if (i.setCss(a[0], {
              width: " " + c + "px",
              height: " " + c + "px",
              border: c / 10 + "px solid #fff",
              top: (r - c / 2) / Number(null === (n = this.targetNode.css("height")) || void 0 === n ? void 0 : n.slice(0, -2)) * 100 + "%",
              left: (e - c / 2) / Number(null === (o = this.targetNode.css("width")) || void 0 === o ? void 0 : o.slice(0, -2)) * 100 + "%"
          }),
          "string" == typeof t) {
              var u = $("<div class='" + this.markClassName + "-number'>" + t + "</div>");
              u.attr("unselectable", "on"),
              i.setCss(u[0], {
                  fontSize: c / 1.5 + "px",
                  lineHeight: c + "px"
              }),
              a.append(u)
          }
          this.targetNode.append(a),
          this.marks.push(a[0])
      }
      ,
      t.prototype.addData = function() {
          var t, e, r = this.clickCfg.data_type;
          if (r)
              try {
                  for (var i = n(r), o = i.next(); !o.done; o = i.next()) {
                      if ("DynAnswerType_POS" === o.value) {
                          for (var a = [], s = this.markSize, c = 0; c < this.marks.length; c++) {
                              var u = this.marks[c];
                              a.push({
                                  elem_id: c + 1,
                                  type: "DynAnswerType_POS",
                                  data: (this.bgSize[0] * (Number(u.style.left.slice(0, -1)) / 100) + s / 2).toFixed(0) + "," + (this.bgSize[1] * (Number(u.style.top.slice(0, -1)) / 100) + s / 2).toFixed(0)
                              })
                          }
                          this.captcha.event.emit("setData", {
                              namespace: "clickEl",
                              data: a
                          })
                      }
                  }
              } catch (l) {
                  t = {
                      error: l
                  }
              } finally {
                  try {
                      o && !o.done && (e = i["return"]) && e.call(i)
                  } finally {
                      if (t)
                          throw t.error
                  }
              }
      }
      ,
      t.prototype.reInit = function() {
          var t, e;
          try {
              for (var r = n(this.marks), i = r.next(); !i.done; i = r.next()) {
                  var o = i.value;
                  $(o).remove()
              }
          } catch (a) {
              t = {
                  error: a
              }
          } finally {
              try {
                  i && !i.done && (e = r["return"]) && e.call(r)
              } finally {
                  if (t)
                      throw t.error
              }
          }
          this.marks = []
      }
      ,
      t.prototype.resize = function() {
          var t, e, r = this.markSize * (0,
          this.getRate)();
          try {
              for (var o = n(this.marks), a = o.next(); !a.done; a = o.next()) {
                  var s = a.value;
                  i.setCss(s, {
                      width: " " + r + "px",
                      height: " " + r + "px",
                      border: r / 10 + "px solid #fff"
                  }),
                  i.setCss($(s).children("." + this.markClassName + "-number")[0], {
                      fontSize: " " + r / 1.5 + "px",
                      lineHeight: " " + r + "px"
                  })
              }
          } catch (c) {
              t = {
                  error: c
              }
          } finally {
              try {
                  a && !a.done && (e = o["return"]) && e.call(o)
              } finally {
                  if (t)
                      throw t.error
              }
          }
      }
      ,
      t.prototype.destroy = function() {
          var t, e;
          try {
              for (var r = n(this.marks), i = r.next(); !i.done; i = r.next()) {
                  var o = i.value;
                  $(o).remove()
              }
          } catch (a) {
              t = {
                  error: a
              }
          } finally {
              try {
                  i && !i.done && (e = r["return"]) && e.call(r)
              } finally {
                  if (t)
                      throw t.error
              }
          }
          this.marks = [],
          this.targetNode.removeClass("pointer")
      }
      ,
      t
  }();
  e.ClickEl = a
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.DataManager = void 0;
  var n = function() {
      function t(t) {
          this.userData = {},
          this.captcha = t
      }
      return t.prototype.initData = function() {
          this.userData = {}
      }
      ,
      t.prototype.refreshData = function() {}
      ,
      t.prototype.setData = function(t, e) {
          this.userData[t] = e
      }
      ,
      t.prototype.getData = function() {
          var t = [];
          for (var e in this.userData)
              if (Object.prototype.hasOwnProperty.call(this.userData, e)) {
                  var r = this.userData[e];
                  t = t.concat(r)
              }
          return t
      }
      ,
      t
  }();
  e.DataManager = n
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0;
  var n = r(59)
    , i = window.navigator.userAgent
    , o = function() {
      var t = {
          info: "unknown",
          version: "0"
      };
      try {
          if (/micromessenger/i.test(i))
              t.info = "micromessenger",
              (e = i.match(/micromessenger\/([\d.]+)/i)) && (t.version = e[1]);
          else if (/mqqbrowser/i.test(i)) {
              t.info = "qqbroswer",
              (e = i.match(/mqqbrowser\/([\d.]+)/i)) && (t.version = e[1])
          } else if (/ucbrowser/i.test(i)) {
              t.info = "UCbrowser",
              (e = i.match(/ucbrowser\/([\d.]+)/i)) && (t.version = e[1])
          } else if (/ucweb/i.test(i)) {
              t.info = "UCWeb",
              (e = i.match(/ucweb\/([\d.]+)/i)) && (t.version = e[1])
          } else if (/MiuiBrowser/i.test(i)) {
              t.info = "MiuiBrowser",
              (e = i.match(/miuibrowser\/([\d.]+)/i)) && (t.version = e[1])
          } else if (/hs-t929_td/i.test(i)) {
              t.info = "HS-T929_TD",
              (e = i.match(/hs-t929_td\/([\d.]+)/i)) && (t.version = e[1])
          } else if (/k-touch_tou_ch_2/i.test(i)) {
              t.info = "k-touch_tou_ch_2",
              (e = i.match(/k-touch_tou_ch_2\/([\s]+)/i)) && (t.version = e[1])
          } else if (/chrome/i.test(i)) {
              t.info = "chrome",
              (e = i.match(/chrome\/([\d.]+)/i)) && (t.version = e[1])
          } else if (/safari/i.test(i) && /iphone/i.test(i)) {
              var e;
              t.info = "safari",
              (e = i.match(/safari\/([\d.]+)/i)) && (t.version = e[1])
          } else
              t.info = "unknown",
              t.version = "0"
      } catch (r) {}
      return t
  };
  e["default"] = function(t) {
      return {
          clientInfo: o().info,
          clientVersion: o().version,
          os: function() {
              var t = "";
              try {
                  if (/android/i.test(i))
                      (e = i.match(/android\s+([^\s]*)/i)) && (t = "Android " + e[1]);
                  else if (/iphone/i.test(i)) {
                      var e;
                      (e = i.match(/iphone\s+os\s+([^\s]*)/i)) && (t = "IOS " + e[1].replace("_", "."))
                  }
              } catch (r) {}
              return t
          }(),
          osVersion: function() {
              try {
                  if (/android/i.test(i)) {
                      if (t = i.match(/([^;]+)\s+Build/i))
                          return t[1]
                  } else if (/iphone/i.test(i)) {
                      var t;
                      if (t = i.match(/([^(]*);/))
                          return t[1]
                  }
              } catch (e) {}
              return ""
          }(),
          netType: t.aid,
          customInfo: "custominfo:clientIP:" + t.uip + ",sid:" + t.sid,
          "d-wx-push": "1",
          imei: n.getToken()
      }
  }
}
, function(t, e, r) {
  "use strict";
  e.__esModule = !0,
  e.initAegis = void 0;
  var n = !1;
  e.initAegis = function(t) {
      if (window.Aegis)
          try {
              if (n)
                  return;
              n = !0,
              window.aegis = new window.Aegis({
                  id: t.global ? "aZ9jDfDQywl8EjvX22" : "qVYG7uLD7PVEk4XYOe",
                  hostUrl: t.global ? "https://rumt-sg.com" : "https://aegis.qq.com",
                  whiteListUrl: "",
                  repeat: 2,
                  reportApiSpeed: !0,
                  reportAssetSpeed: !0,
                  pagePerformance: !1,
                  onError: !1,
                  webVitals: !1,
                  random: "2053860784" === t.aid || "2052210005" === t.aid ? 1 : t.global ? .5 : .01,
                  ext1: t.aid,
                  ext2: t.sid
              })
          } catch (e) {}
  }
}
]);
