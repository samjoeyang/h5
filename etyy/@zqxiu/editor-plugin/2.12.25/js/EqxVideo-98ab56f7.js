(window.webpack4Jsonp = window.webpack4Jsonp || []).push([[4], {
  114: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      (function(module) {
          var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12), _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__), _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13), _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__), _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75), _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__), _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54), _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__), _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51), _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__), _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3), _videoTpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(216), enterModule;
          function _createSuper(e) {
              var t = _isNativeReflectConstruct();
              return function() {
                  var o, i = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(e);
                  if (t) {
                      var r = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor;
                      o = Reflect.construct(i, arguments, r)
                  } else
                      o = i.apply(this, arguments);
                  return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, o)
              }
          }
          function _isNativeReflectConstruct() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }
          enterModule = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0,
          enterModule && enterModule(module);
          var __signature__ = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
              return e
          }
          ;
          __webpack_require__(217);
          var videoTpl = {
              compDiv: _videoTpl__WEBPACK_IMPORTED_MODULE_7__.b,
              videoDiv: _videoTpl__WEBPACK_IMPORTED_MODULE_7__.c,
              close: _videoTpl__WEBPACK_IMPORTED_MODULE_7__.a,
              videoWrapper: _videoTpl__WEBPACK_IMPORTED_MODULE_7__.d
          }
            , inlineVideoHtml = __webpack_require__(218)
            , popVideoHtml = __webpack_require__(220)
            , parse = _utils__WEBPACK_IMPORTED_MODULE_6__.i.parse
            , mobileCheck = _utils__WEBPACK_IMPORTED_MODULE_6__.k.mobileCheck
            , getDangerousStr = _utils__WEBPACK_IMPORTED_MODULE_6__.m.getDangerousStr
            , QQVpicHost = "vpic.video.qq.com";
          function createVideoClass(parent, options) {
              var EqxVideo = function(_parent) {
                  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EqxVideo, _parent);
                  var _super = _createSuper(EqxVideo);
                  function EqxVideo(e, t) {
                      var o;
                      return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EqxVideo),
                      console.log("".concat(e.name, ":").concat(e.id, " created by comps plugin 'EqxVideo'")),
                      (o = _super.call(this, e, t)).bgm = o.eqxScene.bgm,
                      o.$close = null,
                      o.$video = null,
                      $.extend(!0, o.$ability, {
                          style: {
                              compStyle: {
                                  backgroundColor: !1
                              }
                          },
                          trigger: {
                              self: !1
                          },
                          sound: !1,
                          link: !1,
                          flexLine: "r,ne,se,sw,nw"
                      }),
                      o
                  }
                  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EqxVideo, [{
                      key: "create$context",
                      value: function() {
                          var e, t = this.compJson, o = t.id, i = t.type, r = t.properties, _ = r.cover, s = r.popBtnColor, n = r.popBtnStyle, a = r.style, c = r.src, l = t.css, d = l.width, p = l.height, u = l.borderWidth, h = void 0 === u ? "0px" : u;
                          if (t.properties.src = getDangerousStr(c.replace(/('|")?allowfullscreen\1(=('|")?\3)?/, "")),
                          d = this.computedSize(d, h),
                          p = this.computedSize(p, h),
                          this.compJson.properties.style = a = a || options.videoConst.STYLE.POP,
                          n || (this.compJson.properties.popBtnStyle = n = _ ? options.videoConst.POP_PLAY_BTN_STYLE_MAP.CUSTOM : options.videoConst.POP_PLAY_BTN_STYLE_MAP.DEFAULT),
                          a == options.videoConst.STYLE.INLINE)
                              _ = _ ? _.indexOf(QQVpicHost) > -1 ? _ : this.getImgSrc(_, {
                                  width: d,
                                  height: p
                              }) : "",
                              e = $(parse(inlineVideoHtml, {
                                  id: o,
                                  type: i,
                                  cover: _
                              })),
                              _ || (e.addClass("no-cover"),
                              e.find(".cover").hide());
                          else
                              switch (s = s || "rgba(0,0,0,0.6)",
                              n) {
                              case options.videoConst.POP_PLAY_BTN_STYLE_MAP.CUSTOM:
                                  _ ? (_ = _.indexOf(QQVpicHost) > -1 ? _ : this.getImgSrc(_, {
                                      width: d,
                                      height: p
                                  }),
                                  e = $(parse(inlineVideoHtml, {
                                      id: o,
                                      type: i,
                                      cover: _
                                  }))) : e = this.create$PopContext({
                                      color: s,
                                      className: "default",
                                      icon: "eqf-play-f"
                                  });
                                  break;
                              case options.videoConst.POP_PLAY_BTN_STYLE_MAP.DEFAULT:
                                  e = this.create$PopContext({
                                      color: s,
                                      className: "default",
                                      icon: "eqf-play-f"
                                  });
                                  break;
                              case options.videoConst.POP_PLAY_BTN_STYLE_MAP.FILMSTYLE:
                                  e = this.create$PopContext({
                                      color: s,
                                      className: "film-style",
                                      icon: "eqf-livetow-f"
                                  });
                                  break;
                              case options.videoConst.POP_PLAY_BTN_STYLE_MAP.TVSTYLE:
                                  e = this.create$PopContext({
                                      color: s,
                                      className: "tv-style",
                                      icon: "eqf-live-f"
                                  })
                              }
                          return e
                      }
                  }, {
                      key: "create$PopContext",
                      value: function(e) {
                          var t = e.color
                            , o = e.icon
                            , i = e.className
                            , r = this.compJson
                            , _ = r.id
                            , s = r.type
                            , n = r.css
                            , a = n.width
                            , c = n.borderWidth
                            , l = void 0 === c ? "0px" : c
                            , d = '<i class="pop-video-btn-icon '.concat(o, '"><i class="eqf-play play-mask"></i></i>')
                            , p = $(parse(popVideoHtml, {
                              id: _,
                              type: s,
                              i: d
                          }));
                          return p.addClass(i),
                          p.css({
                              color: t,
                              fontSize: this.computedSize(a, l)
                          }),
                          p
                      }
                  }, {
                      key: "removeCoverImg",
                      value: function() {
                          this.$context.addClass("no-cover").find(".cover").css("background-image", "").hide()
                      }
                  }, {
                      key: "changeCoverImg",
                      value: function(e) {
                          if (-1 == e.indexOf(QQVpicHost)) {
                              var t = this.compJson.css
                                , o = t.width
                                , i = t.height
                                , r = t.borderWidth
                                , _ = void 0 === r ? "0px" : r;
                              e = this.getImgSrc(e, {
                                  width: this.computedSize(o, _),
                                  height: this.computedSize(i, _)
                              })
                          }
                          this.$context.removeClass("no-cover").find(".cover").css("background-image", "url(".concat(e, ")")).show()
                      }
                  }, {
                      key: "removeBtnImg",
                      value: function() {
                          var e = this.compJson.properties.popBtnColor;
                          e = e || "rgba(0,0,0,0.6)",
                          this.update$li({
                              width: 48,
                              height: 48
                          }),
                          this.$context.remove(),
                          this.$context = this.create$PopContext({
                              color: e,
                              className: "default",
                              icon: "eqf-play-f"
                          }),
                          this.$boxContentDiv.append(this.$context)
                      }
                  }, {
                      key: "changeBtnImg",
                      value: function(e) {
                          var t = this.compJson.properties.cover;
                          t || this.update$li({
                              width: 240,
                              height: 180
                          });
                          var o = this.compJson
                            , i = o.id
                            , r = o.type
                            , _ = o.css
                            , s = _.width
                            , n = _.height
                            , a = _.borderWidth
                            , c = void 0 === a ? "0px" : a;
                          this.compJson.properties.cover = e,
                          -1 == e.indexOf(QQVpicHost) && (e = this.getImgSrc(e, {
                              width: this.computedSize(s, c),
                              height: this.computedSize(n, c)
                          })),
                          t ? this.$context.find(".cover").css("background-image", "url(".concat(e, ")")) : (this.$context.remove(),
                          this.$context = $(parse(inlineVideoHtml, {
                              id: i,
                              type: r,
                              cover: e
                          })),
                          this.$boxContentDiv.append(this.$context))
                      }
                  }, {
                      key: "updatePopBtnIconColor",
                      value: function(e) {
                          this.compJson.properties.popBtnColor = e,
                          this.$context.css("color", e)
                      }
                  }, {
                      key: "updatePopBtnFontSize",
                      value: function() {
                          var e = this.compJson
                            , t = e.css
                            , o = t.width
                            , i = t.borderWidth
                            , r = void 0 === i ? "0px" : i
                            , _ = e.properties
                            , s = _.style
                            , n = _.cover
                            , a = _.popBtnStyle;
                          s != options.videoConst.STYLE.POP || n && a == options.videoConst.POP_PLAY_BTN_STYLE_MAP.CUSTOM || this.$context.css({
                              fontSize: this.computedSize(o, r)
                          })
                      }
                  }, {
                      key: "update$li",
                      value: function(e) {
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EqxVideo.prototype), "update$li", this).call(this, e),
                          this.updatePopBtnFontSize()
                      }
                  }, {
                      key: "update$boxDiv",
                      value: function(e) {
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EqxVideo.prototype), "update$boxDiv", this).call(this, e),
                          this.updatePopBtnFontSize()
                      }
                  }, {
                      key: "computedSize",
                      value: function(e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0px";
                          if (!e)
                              return 0;
                          var o = parseInt(e) - 2 * parseInt(t);
                          return o > 0 ? o : 0
                      }
                  }, {
                      key: "validateIframeSrcHost",
                      value: function(e) {
                          var t = e.substring(e.indexOf("://") + 3);
                          return t.substring(0, t.indexOf("/")).indexOf("v.qq") >= 0
                      }
                  }, {
                      key: "getIframeSrc",
                      value: function() {
                          var e = this.compJson.properties.src
                            , t = e.substring(e.indexOf("src=") + 5);
                          return t.substring(0, t.search(/'|"/))
                      }
                  }, {
                      key: "addClassToLi",
                      value: function(e) {
                          e.addClass("wsite-video")
                      }
                  }, {
                      key: "eleHide",
                      value: function() {
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(EqxVideo.prototype), "eleHide", this).call(this),
                          this.hide()
                      }
                  }, {
                      key: "update",
                      value: function(e) {
                          switch (e.type) {
                          case "hide":
                              this.hide()
                          }
                      }
                  }, {
                      key: "bindAfterRenderEvent",
                      value: function(e, t) {
                          var o = this
                            , i = t.properties.style;
                          return e.click((function() {
                              if (o.validateIframeSrcHost(o.getIframeSrc()))
                                  switch (o._isPlayingVideo = !0,
                                  o.bgm && o.bgm.hide && o.bgm.hide(),
                                  o.eqxScene.soundManager.stopAll(),
                                  i) {
                                  case options.videoConst.STYLE.INLINE:
                                      o.initInlineVideo();
                                      break;
                                  case options.videoConst.STYLE.POP:
                                  default:
                                      o.initPopVideo()
                                  }
                          }
                          )),
                          !0
                      }
                  }, {
                      key: "initInlineVideo",
                      value: function() {
                          var e = this.compJson.css
                            , t = this.$iframe = $('<iframe frameborder="0" src="'.concat(this.getIframeSrc(), '" allowFullScreen="true"></iframe>')).css({
                              width: e.width,
                              height: e.height,
                              zIndex: 3,
                              position: "fixed",
                              top: 0
                          });
                          mobileCheck() || t.css("position", "absolute"),
                          this.$context.find("img, .cover").hide(),
                          this.$li.find(".inline-video").append(t)
                      }
                  }, {
                      key: "initPopVideo",
                      value: function() {
                          var e = this
                            , t = this.compJson.id
                            , o = this.$li;
                          o.hide();
                          var i = o.parent().css("transform").match(/-?[\d.]+/g) || o.parents(".edit_wrapper").css("transform").match(/-?[\d.]+/g)
                            , r = 0;
                          i && (r = -parseInt(i[5]));
                          var _ = this.$video = $(videoTpl.videoDiv(t))
                            , s = this.$videoWrapper = $(videoTpl.videoWrapper());
                          mobileCheck() || _.css("position", "absolute");
                          var n = this.$close = $(videoTpl.close(t))
                            , a = $('<iframe frameborder="0" src="'.concat(this.getIframeSrc(), '" allowFullScreen="true"></iframe>')).css({
                              position: "absolute",
                              top: "20%",
                              width: "100%",
                              minHeight: "45%",
                              maxHeight: "100%"
                          }).removeAttr("height");
                          _.append(a),
                          s.append(_, n),
                          o.parent().append(s),
                          _.css({
                              top: r
                          }),
                          n.css({
                              top: r + 15
                          }),
                          this.eqxScene.getOrientation().isLandScape() && (s.css({
                              position: "absolute",
                              transform: "rotate(90deg) translate3d(0px, 0px, 0px)",
                              top: "83px",
                              left: "-85px",
                              height: 320,
                              zIndex: 1e3,
                              width: 486
                          }),
                          n.css({
                              transform: "translate3d(0px, 0px, 0px)",
                              top: 15
                          }),
                          a.css({
                              top: "0px",
                              height: "100%"
                          }),
                          _.css({
                              top: 0
                          }),
                          this.eqxPage.isLongPage() && s.css({
                              top: r + 83
                          })),
                          n.bind("click", (function() {
                              e.hide()
                          }
                          ))
                      }
                  }, {
                      key: "hide",
                      value: function() {
                          if (this._isPlayingVideo) {
                              this._isPlayingVideo = !1,
                              this.bgm && this.bgm.show && this.bgm.show(),
                              this.eqxScene.soundManager.restoreAll();
                              var e = this.compJson.properties
                                , t = e.style
                                , o = void 0 === t ? 0 : t
                                , i = e.cover;
                              switch (o) {
                              case options.videoConst.STYLE.INLINE:
                                  this.$iframe && (this.$iframe.remove(),
                                  this.$iframe = null,
                                  i ? this.$context.find("img, .cover").show() : this.$context.find("img").not(".cover").show());
                                  break;
                              case options.videoConst.STYLE.POP:
                                  this.$close && (this.$li.show(),
                                  this.$close.unbind("click"),
                                  this.$video.remove(),
                                  this.$close.remove(),
                                  this.$videoWrapper.remove(),
                                  this.$video = null,
                                  this.$close = null,
                                  this.$videoWrapper = null)
                              }
                          }
                      }
                  }, {
                      key: "__reactstandin__regenerateByEval",
                      value: function __reactstandin__regenerateByEval(key, code) {
                          this[key] = eval(code)
                      }
                  }]),
                  EqxVideo
              }(parent);
              return EqxVideo.STYLE = options.videoConst.STYLE,
              EqxVideo
          }
          var _default = createVideoClass, reactHotLoader, leaveModule;
          __webpack_exports__.a = _default,
          reactHotLoader = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0,
          reactHotLoader && (reactHotLoader.register(videoTpl, "videoTpl", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js"),
          reactHotLoader.register(parse, "parse", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js"),
          reactHotLoader.register(mobileCheck, "mobileCheck", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js"),
          reactHotLoader.register(getDangerousStr, "getDangerousStr", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js"),
          reactHotLoader.register(QQVpicHost, "QQVpicHost", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js"),
          reactHotLoader.register(createVideoClass, "createVideoClass", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js"),
          reactHotLoader.register(_default, "default", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\index.js")),
          leaveModule = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0,
          leaveModule && leaveModule(module)
      }
      ).call(this, __webpack_require__(2)(module))
  },
  216: function(e, t, o) {
      "use strict";
      (function(e) {
          var i;
          o.d(t, "b", (function() {
              return s
          }
          )),
          o.d(t, "c", (function() {
              return a
          }
          )),
          o.d(t, "a", (function() {
              return c
          }
          )),
          o.d(t, "d", (function() {
              return n
          }
          )),
          (i = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && i(e);
          var r, _;
          "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
          function s(e) {
              var t = e.id
                , o = e.type;
              return '<a class="element video_area" id="'.concat(t, '" ctype="').concat(o, '" style="width:100%;height:100%;"></a>')
          }
          function n() {
              return '<div style="height: 100%; width: 100%"></div>'
          }
          function a(e) {
              return '<div class="video_mask page_effect lock" id="mask_'.concat(e, '"></div>')
          }
          function c(e) {
              return '<a class="close_mask eqf-no" id="close_'.concat(e, '"></a>')
          }
          (r = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && (r.register(s, "compDiv", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\videoTpl.js"),
          r.register(n, "videoWrapper", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\videoTpl.js"),
          r.register(a, "videoDiv", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\videoTpl.js"),
          r.register(c, "close", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\video\\videoTpl.js")),
          (_ = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && _(e)
      }
      ).call(this, o(2)(e))
  },
  217: function(e, t, o) {},
  218: function(e, t, o) {
      e.exports = '<div class=inline-video id=#{id} ctype=#{type} style=width:100%;height:100%> <div class=cover style=background-image:url(#{cover})></div> <img class="center play" src=' + o(219) + " alt=video-play-button> </div>"
  },
  219: function(e, t) {
      e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADnUlEQVRoQ9WaS2gTQRjH/z0pHowH9a7YgAcVUTzpxaMePAh6UVgatOlFJakK0hxKQEhEUKFEAt4s1FBBKfVSCJimPlpj8ygWzAvUg2kk8ZEutTGNfHW3btdNMjubTd2BQEjne/xmvm++ebQLFm9dFvcf7QIgPbsA7AOwHcA26WOTBugbgK/S5wuAFIA8gLrRATQKsBfAIQAHAGzV6cx3AAkAMQDzOmXXuvMC7AZwGsAeXsMquQyAxwByevXpBdghOX5QryHG/rMSSJGxv64coHC5CGALq3LOfiKAIGtYsc7AcQBnAF3AnP6vilFyhwCEWylhATgLgAA2ohHAo2aGWwGQ4wSwkY0AGs5EMwCK+csdDJtGg0ThdLdRTjQCoNXmRgcSlnVmKbFvAvhndWoE4ARg1lLJ6rS6Hy2x99U/agFQkbrOa8VkOZ+62GkBXOWpsKlU6qTNZtvscrmio6OjBZNAqGLfUupWA1DiXuExXq/XL0gJXx8bG3vncDimi8VilUdXC5k7yoRWA5wHcJTHqAJgVbxUKlUGBgaigUDgA4++JjKTAB7Kf1cC0Hc/x67yT+n8OwPrbEcikYwgCC/y+fxSm0BoF3tN3oorAQwlbyMAcnpxcXHJ5/O99Hq96TZBrCWzEuAUgBO8BpoByDoTicRHQRAm4/F4hdeOJPcMwFP6rgRwADjCq5gFgHQvLy9XA4HAjNvtnqvVarzmpgE8UAO4Adh5NbICyPozmcxCb2/v83A4XOaw+R7AbTWAF8BODmVNk7iZvlqttjI8PDzb19c3K4riig7bCwA8aoB7ADbpULKuq94ZUAqn0+mC3W5fjWnG9hPApf8GgMKpu7v7CaPz1E0TYENCaGRkJO50Ot9WKhXDIdTRJM7lcgtOpzMyMTFR0jHyclfNJO7UMvorGAzOuFyuuWq1ynuxpbmMml7Iksnkp56enslYLPaDY9SVIpqFzLSthCiKS36//9Xg4CBNfTua5lbClM1cNBrNCoIwlc1mTd/M0cicA3CMZ4jUdaBcLlc8Hk90aGioY9tp8rstB5rx8fF5h8PxulAodPxAQxCGjpT9/f1ToVDoM88sMsi0PFKSDkPJzOCEkS5Mh3oyYOlrFQKw/MWWnNCWvVqU49TSl7syhKWv15UzYdkHDhnC0k9MMoSlH/mUBciyz6zqKkphdRjAfo4rSboiTAJ4w/oiqVXCW72RsZZ9y/6rASugaf3aNQOmOdhK8W/5Q2VAMCnHoAAAAABJRU5ErkJggg=="
  },
  220: function(e, t) {
      e.exports = '<a class="element video_area" id=#{id} ctype=#{type} style=width:100%;height:100%;display:inline-block> #{i} </a>'
  },
  45: function(e, t, o) {
      "use strict";
      o.r(t);
      var i = o(114);
      o.d(t, "default", (function() {
          return i.a
      }
      ));
      "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature
  }
}]);
