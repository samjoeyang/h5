(window.webpack4Jsonp = window.webpack4Jsonp || []).push([[2], {
  112: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      (function(module) {
          var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__), _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12), _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__), _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13), _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__), _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75), _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__), _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54), _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__), _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51), _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__), _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3), lottie_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(188), lottie_web__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_8__), _const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1), _imageStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(190), _imgTpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(201), enterModule;
          function _createSuper(t) {
              var e = _isNativeReflectConstruct();
              return function() {
                  var i, s = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(t);
                  if (e) {
                      var r = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor;
                      i = Reflect.construct(s, arguments, r)
                  } else
                      i = s.apply(this, arguments);
                  return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, i)
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
              } catch (t) {
                  return !1
              }
          }
          enterModule = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0,
          enterModule && enterModule(module);
          var __signature__ = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(t) {
              return t
          }
            , stackBlurImage = __webpack_require__(208).stackBlurImage
            , initEffectImgPath = _utils__WEBPACK_IMPORTED_MODULE_7__.f.initEffectImgPath
            , loadImg = _utils__WEBPACK_IMPORTED_MODULE_7__.f.loadImg;
          function isSetFilter(t) {
              var e = t.brightness
                , i = void 0 === e ? 0 : e
                , s = t.contrast
                , r = void 0 === s ? 0 : s
                , a = t.saturate
                , n = void 0 === a ? 0 : a
                , o = t.hueRotate
                , g = void 0 === o ? 0 : o
                , h = t.blur;
              return !!(i || r || n || g | (void 0 === h ? 0 : h))
          }
          function creatImageClass(parent, options) {
              var EqxImage = function(_parent) {
                  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EqxImage, _parent);
                  var _super = _createSuper(EqxImage);
                  function EqxImage(t, e) {
                      var i;
                      return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EqxImage),
                      i = _super.call(this, t, e),
                      $.extend(!0, i.$ability, {
                          style: {
                              compStyle: {
                                  backgroundColor: !0
                              },
                              advanceStyle: {
                                  variable: !0,
                                  function: !0,
                                  filter: !0,
                                  border: !0,
                                  moreSetting: !0
                              },
                              functionStyle: {
                                  variableImg: !0,
                                  imgProto: !0,
                                  gSensor: !0,
                                  scratch: !0,
                                  replace: !1
                              }
                          },
                          link: !0
                      }),
                      i
                  }
                  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EqxImage, [{
                      key: "getFtEditableProps",
                      value: function() {
                          var t = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(EqxImage.prototype), "getFtEditableProps", this).call(this)
                            , e = this.FtEditableProps;
                          return t.concat([e.image.imageSrc, e.link.url, e.internalLink.internalLink, e.telephone.number, e.sound.soundSrc])
                      }
                  }, {
                      key: "getFtValue",
                      value: function(t) {
                          return t === this.FtEditableProps.image.imageSrc ? this.getProp("src") : _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(EqxImage.prototype), "getFtValue", this).call(this, t)
                      }
                  }, {
                      key: "getFilterList",
                      value: function() {
                          return _imgTpl__WEBPACK_IMPORTED_MODULE_11__.c
                      }
                  }, {
                      key: "getImgSrc",
                      value: function(t) {
                          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , i = arguments.length > 2 ? arguments[2] : void 0;
                          return this.eqxScene.config.mobileEdit && (e.width && (e.width *= 2),
                          e.height && (e.height *= 2)),
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(EqxImage.prototype), "getImgSrc", this).call(this, t, e, i)
                      }
                  }, {
                      key: "updatePadding",
                      value: function(t) {
                          var e = this.compJson.properties
                            , i = this.compJson.css
                            , s = parseInt(i.paddingLeft)
                            , r = parseInt(i.paddingRight)
                            , a = parseInt(i.paddingTop)
                            , n = parseInt(i.paddingBottom)
                            , o = parseInt(i.width)
                            , g = parseInt(i.height);
                          if ("paddingLeft" == t.padKey || "paddingRight" == t.padKey) {
                              var h = parseInt(e.imgStyle.width) / parseInt(e.imgStyle.height)
                                , l = (parseInt(t.padValue),
                              o - ("paddingLeft" == t.padKey ? parseInt(t.padValue) + r : parseInt(t.padValue) + s))
                                , C = l / h;
                              e.imgStyle.width = l,
                              e.imgStyle.height = C,
                              this.$context.css({
                                  width: l,
                                  height: C
                              }),
                              g = C + a + n
                          } else {
                              var A = i[t.padKey];
                              g += parseInt(t.padValue) - parseInt(A)
                          }
                          this.update$li(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
                              height: g
                          }, t.padKey, parseInt(t.padValue))),
                          this.autoSizeTopDown()
                      }
                  }, {
                      key: "updateSize",
                      value: function(t, e) {
                          if (this.$width && this.$height) {
                              var i = this.$width / this.$height;
                              this.updateImageSize(i, t, e)
                          }
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(EqxImage.prototype), "updateSize", this).call(this, t, e)
                      }
                  }, {
                      key: "updateTurnOver",
                      value: function(t) {
                          this.$boxContentDiv.css("transform", t)
                      }
                  }, {
                      key: "updateImageFilter",
                      value: function(t, e) {
                          var i = this;
                          return new Promise((function(s, r) {
                              var a = _imgTpl__WEBPACK_IMPORTED_MODULE_11__.c.find((function(t) {
                                  return t.type === e
                              }
                              ))
                                , n = _imgTpl__WEBPACK_IMPORTED_MODULE_11__.c.find((function(e) {
                                  return e.type === t
                              }
                              )) || {};
                              if (n.isDynamic = n.isDynamic || !1,
                              console.log("======================================="),
                              a && a.isDynamic && n && n.isDynamic || !0 === (a && !!a.isDynamic) && !1 === (n && !!n.isDynamic))
                                  return console.log("动态滤镜之间切换", a && !!a.isDynamic && n && !!n.isDynamic),
                                  console.log("当前选择了动态滤镜且上一个是静态滤镜", !0 === (a && !!a.isDynamic) && !1 === (n && !!n.isDynamic)),
                                  i.updateImgSrc(),
                                  s(null),
                                  void console.log("=======================================");
                              !1 === (a && !!a.isDynamic) && !0 === (n && !!n.isDynamic) && (console.log("当前选择了静态滤镜 且 上一个是动态滤镜， 需要重新渲染dom，然后应用新的静态滤镜", !1 === (a && !!a.isDynamic) && !0 === (n && !!n.isDynamic)),
                              i.updateImgSrc());
                              try {
                                  console.log("静态滤镜参数设置", !0, n.filterName, "=>", a.filterName),
                                  console.log("=======================================");
                                  var o = a.filter
                                    , g = o.brightness
                                    , h = o.contrast
                                    , l = o.saturate
                                    , C = o.hueRotate
                                    , A = o.blur;
                                  if (!e)
                                      return i.$context[0].style.removeProperty("filter"),
                                      i.$context[0].style.removeProperty("transform"),
                                      s({
                                          brightness: g,
                                          contrast: h,
                                          saturate: l,
                                          hueRotate: C,
                                          blur: A
                                      });
                                  i.compJson.properties.brightness = g,
                                  i.compJson.properties.contrast = h,
                                  i.compJson.properties.saturate = l,
                                  i.compJson.properties.hueRotate = C,
                                  i.compJson.properties.blur = A;
                                  var p = "brightness(".concat((100 + g) / 100, ")")
                                    , I = "contrast(".concat(h + 100, "%)")
                                    , m = "saturate(".concat(l + 100, "%)")
                                    , c = "hue-rotate(".concat(3.6 * C, "deg)")
                                    , u = "blur(".concat(Math.abs(A) / 10, "px)")
                                    , f = {
                                      filter: "".concat(p, " ").concat(I, " ").concat(m, " ").concat(c, " ").concat(u),
                                      transform: "translateZ(0)"
                                  };
                                  i.$context.css(f),
                                  s({
                                      brightness: g,
                                      contrast: h,
                                      saturate: l,
                                      hueRotate: C,
                                      blur: A
                                  })
                              } catch (t) {
                                  r(t)
                              }
                          }
                          ))
                      }
                  }, {
                      key: "pinchEnd",
                      value: function() {
                          var t = this.compJson
                            , e = t.properties
                            , i = t.css
                            , s = e.imgStyle
                            , r = this.$context[0]
                            , a = _utils__WEBPACK_IMPORTED_MODULE_7__.j.parseTransformInFloat(r.style.transform)
                            , n = a.scale.x
                            , o = a.scale.y
                            , g = s.width
                            , h = s.height
                            , l = s.marginTop
                            , C = s.marginLeft
                            , A = g * n
                            , p = h * o
                            , I = Math.max(i.height / p, i.width / A, 1)
                            , m = C - ((A *= I) - g) / 2
                            , c = l - ((p *= I) - h) / 2
                            , u = this.validateImgStyle({
                              width: A,
                              height: p,
                              marginTop: c,
                              marginLeft: m
                          }, i);
                          this.$context.css("transform", "").css(u),
                          e.imgStyle = u
                      }
                  }, {
                      key: "validateImgStyle",
                      value: function(t, e) {
                          var i = t.width
                            , s = t.height
                            , r = t.marginTop
                            , a = t.marginLeft;
                          return r < 0 ? r + s < e.height && (r = e.height - s) : r = 0,
                          a < 0 ? a + i < e.width && (a = e.width - i) : a = 0,
                          {
                              width: i,
                              height: s,
                              marginTop: r,
                              marginLeft: a
                          }
                      }
                  }, {
                      key: "moveEnd",
                      value: function() {
                          var t = this.compJson
                            , e = t.properties
                            , i = t.css
                            , s = e.imgStyle
                            , r = parseInt(this.$context.css("marginLeft"))
                            , a = parseInt(this.$context.css("marginTop"))
                            , n = this.validateImgStyle({
                              width: s.width,
                              height: s.height,
                              marginLeft: r,
                              marginTop: a
                          }, i);
                          this.$context.css(n),
                          e.imgStyle = n
                      }
                  }, {
                      key: "updateImageSize",
                      value: function(t, e, i) {
                          t || (this.$width && this.$height ? t = this.$width / this.$height : console.error("no imageRatio!")),
                          e || (e = this.compJson.css),
                          i || (i = this.compJson.css),
                          void 0 === i.height && (i.height = e.height),
                          void 0 === i.width && (i.width = e.width),
                          void 0 === i.borderWidth && (i.borderWidth = parseInt(e.borderWidth || this.compJson.css.borderWidth || 0));
                          var s = this.compJson.properties
                            , r = (i.width - 2 * i.borderWidth) / (i.height - 2 * i.borderWidth)
                            , a = s.imgStyle;
                          if (r > t) {
                              var n = i.width - 2 * i.borderWidth
                                , o = n / t;
                              a = {
                                  width: n,
                                  height: o,
                                  marginTop: -(o + 2 * i.borderWidth - i.height) / 2,
                                  marginLeft: 0
                              }
                          } else {
                              var g = i.height - 2 * i.borderWidth
                                , h = t * g;
                              a = {
                                  width: h,
                                  height: g,
                                  marginLeft: -(h + 2 * i.borderWidth - i.width) / 2,
                                  marginTop: 0
                              }
                          }
                          this.$context.css(a),
                          this.canvas && $(this.canvas).css(a),
                          this.$context.find(".filter-img").length && (this.$context.css({
                              width: "100%",
                              height: "100%",
                              marginLeft: 0,
                              marginTop: 0
                          }),
                          this.$context.find(".filter-img").css({
                              backgroundPositionX: a.marginLeft,
                              backgroundPositionY: a.marginTop
                          })),
                          s.imgStyle = a
                      }
                  }, {
                      key: "getContentHeight",
                      value: function() {
                          var t = this.compJson.css
                            , e = t.paddingTop
                            , i = void 0 === e ? 0 : e
                            , s = t.paddingBottom
                            , r = void 0 === s ? 0 : s
                            , a = t.borderBottomWidth
                            , n = void 0 === a ? 0 : a
                            , o = t.borderTopWidth
                            , g = void 0 === o ? 0 : o;
                          return parseInt(this.$boxDiv.css("height")) + parseInt(i) + parseInt(r) + parseInt(n) + parseInt(g)
                      }
                  }, {
                      key: "_getContextImgSrc",
                      value: function() {
                          var t = this.compJson.properties
                            , e = (t = void 0 === t ? {} : t).src
                            , i = t.imgStyle
                            , s = t.fileName;
                          if (e = initEffectImgPath(e),
                          i && !this.eqxPage.notImageCut) {
                              var r = /\.(gif)$/.test(s);
                              e = this.getImgSrc(e, {
                                  width: i.width,
                                  height: i.height
                              }, r)
                          }
                          return e
                      }
                  }, {
                      key: "create$context",
                      value: function() {
                          var t = this.eqxPage.pageJson.properties
                            , e = this.compJson
                            , i = e.id
                            , s = e.type
                            , r = e.properties
                            , a = r.scratch
                            , n = r.imagepreview
                            , o = r.imgStyle
                            , g = r.maskSrc
                            , h = r.filter
                            , l = (h = void 0 === h ? {} : h).type
                            , C = r.stationAd
                            , A = r.materialId
                            , p = r.adId;
                          e.properties.isReplace = e.properties.isReplace || !1;
                          var I, m, c, u = this._getContextImgSrc(), f = _imgTpl__WEBPACK_IMPORTED_MODULE_11__.c.find((function(t) {
                              return t.type === l
                          }
                          ));
                          if (Number.isInteger(l) && f && f.isDynamic) {
                              var d = (I = $(Object(_imgTpl__WEBPACK_IMPORTED_MODULE_11__.a)({
                                  id: i,
                                  type: s,
                                  src: u
                              }))).find(".lottie")[0];
                              $(d).empty(),
                              this._createLottie(d, f.jsonPath),
                              c = !0
                          } else if (I = $(Object(_imgTpl__WEBPACK_IMPORTED_MODULE_11__.b)({
                              id: i,
                              type: s,
                              src: u,
                              stationAd: C,
                              materialId: A,
                              adId: p
                          })),
                          isSetFilter(e.properties)) {
                              var y = e.properties
                                , M = y.brightness
                                , v = void 0 === M ? 0 : M
                                , D = y.contrast
                                , x = void 0 === D ? 0 : D
                                , w = y.saturate
                                , E = void 0 === w ? 0 : w
                                , b = y.hueRotate
                                , L = void 0 === b ? 0 : b
                                , _ = y.blur
                                , S = void 0 === _ ? 0 : _
                                , T = "brightness(".concat((100 + v) / 100, ")")
                                , P = "contrast(".concat(x + 100, "%)")
                                , k = "saturate(".concat(E + 100, "%)")
                                , N = "hue-rotate(".concat(3.6 * L, "deg)")
                                , j = "blur(".concat(Math.abs(S) / 10, "px)");
                              m = {
                                  filter: "".concat(T, " ").concat(P, " ").concat(k, " ").concat(N, " ").concat(j),
                                  transform: "translateZ(0)"
                              },
                              c = !1,
                              I.css(m)
                          }
                          if (_utils__WEBPACK_IMPORTED_MODULE_7__.b.isSupportStyle("WebkitMaskBoxImage") && g && this.$contentsDiv.addClass("img_mask").css({
                              "-webkit-mask-box-image": "url(".concat(g, ")")
                          }),
                          o && I && I.css(o),
                          c && (I.css({
                              width: "100%",
                              height: "100%",
                              marginLeft: 0,
                              marginTop: 0
                          }),
                          I.find(".filter-img").css({
                              backgroundPositionX: o.marginLeft,
                              backgroundPositionY: o.marginTop
                          })),
                          a && this.addScratch(),
                          n && !t.hasOwnProperty("pip") && !t.hasOwnProperty("flash")) {
                              var F = !0;
                              t.hasOwnProperty("oneShot") && !0 === t.oneShot.auto && (F = !1),
                              !F || t.pageScroll.canAutoFlip || this.eqxScene.meta.property.autoFlip || this.addImagePreview()
                          }
                          this.$boxContentDiv.css("overflow", "hidden");
                          var z = options.getForbiddenImages();
                          return z.length > 0 && e.properties.originSrc && z.includes(e.properties.originSrc) && this.$boxContentDiv.css({
                              display: "none"
                          }),
                          I
                      }
                  }, {
                      key: "_createLottie",
                      value: function(t, e) {
                          lottie_web__WEBPACK_IMPORTED_MODULE_8___default.a.loadAnimation({
                              container: t,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !0,
                              animationData: e,
                              assetsPath: "/@zqxiu/editor-plugin/dynamicFilter/dynamicImg/"
                          })
                      }
                  }, {
                      key: "eleShow",
                      value: function() {
                          var t = this
                            , e = this.compJson.properties.src;
                          e && /.gif/.test(e) && setTimeout((function() {
                              var e = t.$context.prop("src");
                              t.$context.show().each((function() {
                                  this.offsetHeight
                              }
                              )).prop("src", e)
                          }
                          ), 1),
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(EqxImage.prototype), "eleShow", this).call(this)
                      }
                  }, {
                      key: "updateImgSrc",
                      value: function() {
                          this.$context = this.create$context(),
                          this.$contentsDiv.empty(),
                          this.$contentsDiv.append(this.$context)
                      }
                  }, {
                      key: "updateImageSrc",
                      value: function(t, e, i) {
                          t = this.getImgSrc(_const__WEBPACK_IMPORTED_MODULE_9__.a.FILE + t, {
                              width: e,
                              height: i
                          }),
                          this.$context.attr("src", t)
                      }
                  }, {
                      key: "addImagePreview",
                      value: function() {
                          var t = this.eqxScene
                            , e = this.$contentsDiv;
                          "view" === t.config.mode && _utils__WEBPACK_IMPORTED_MODULE_7__.k.isWeixin() && this.$boxContentDiv.click((function() {
                              options.getWxJSSDK().then((function() {
                                  var t = e.find("img").attr("src");
                                  t && (t = t.split("?")[0]),
                                  _utils__WEBPACK_IMPORTED_MODULE_7__.a.$ajax({
                                      url: t + "?imageInfo"
                                  }).then((function(i) {
                                      if (!_utils__WEBPACK_IMPORTED_MODULE_7__.k.iphoneCheck() && ["jpeg", "jpg"].includes(i.format)) {
                                          var s = [];
                                          e.find("img").each((function(t) {
                                              var e = $(this).attr("src");
                                              e && (e = e.split("?")[0]),
                                              s.push(e)
                                          }
                                          )),
                                          t = t.replace("http://", "https://"),
                                          wx.previewImage({
                                              current: t,
                                              urls: s
                                          })
                                      } else
                                          t && wx.previewImage({
                                              urls: [t]
                                          })
                                  }
                                  )).catch((function(e) {
                                      wx.previewImage({
                                          urls: [t]
                                      })
                                  }
                                  ))
                              }
                              ))
                          }
                          ))
                      }
                  }, {
                      key: "addScratch",
                      value: function() {
                          var t = this;
                          this.$contentsDiv[0].style.position = "relative",
                          this.canvas = this.createCanvas(),
                          this.ctx = this.canvas.getContext("2d"),
                          this.$contentsDiv.prepend(this.canvas),
                          this.drawCanvas().then((function() {
                              "view" === t.eqxScene.config.mode && t.addCanvasEvent()
                          }
                          ))
                      }
                  }, {
                      key: "createCanvas",
                      value: function() {
                          var t = document.createElement("canvas");
                          return t.style.position = "absolute",
                          $(t).css(this.compJson.properties.imgStyle),
                          t
                      }
                  }, {
                      key: "drawCanvas",
                      value: function() {
                          var t = this
                            , e = this.compJson.properties
                            , i = e.src
                            , s = e.imgStyle;
                          return i = this.getImgSrc(i, {
                              width: s.width,
                              height: s.height
                          }),
                          loadImg(i, !0).then((function(e) {
                              t.ctx.globalCompositeOperation = "source-over",
                              t.canvas.width = e.width,
                              t.canvas.height = e.height,
                              t.ctx.drawImage(e, 0, 0),
                              t.ctx.globalCompositeOperation = "destination-out",
                              stackBlurImage(t.canvas, 30, !0)
                          }
                          ))
                      }
                  }, {
                      key: "addCanvasEvent",
                      value: function() {
                          this.ctx.lineCap = "round",
                          this.ctx.lineJoin = "round",
                          this.ctx.lineWidth = 40;
                          var t, e, i, s, r = 0, a = this, n = !1;
                          function o(o) {
                              r++,
                              setTimeout((function() {
                                  r >= 45 && !n && (n = !0,
                                  $(a.canvas).fadeOut(500, (function() {
                                      setTimeout((function() {
                                          a.deleScratch()
                                      }
                                      ), 500)
                                  }
                                  )))
                              }
                              ), 200),
                              o.preventDefault(),
                              o.stopPropagation();
                              var g = _utils__WEBPACK_IMPORTED_MODULE_7__.b.getEvent(o);
                              i = g.pageX - $(a.canvas).offset().left,
                              s = g.pageY - $(a.canvas).offset().top,
                              a.ctx.moveTo(t, e),
                              a.ctx.lineTo(i, s),
                              a.ctx.stroke(),
                              t = i,
                              e = s
                          }
                          $(this.canvas).on("mousedown touchstart", (function(i) {
                              i.preventDefault(),
                              i.stopPropagation();
                              var s = _utils__WEBPACK_IMPORTED_MODULE_7__.b.getEvent(i);
                              t = s.pageX - $(a.canvas).offset().left,
                              e = s.pageY - $(a.canvas).offset().top,
                              $(a.canvas).on("mousemove touchmove", o),
                              $(a.canvas).on("mouseup touchend mouseleave", (function() {
                                  $(a.canvas).off("mousemove touchmove", o)
                              }
                              ))
                          }
                          ))
                      }
                  }, {
                      key: "deleScratch",
                      value: function() {
                          $(this.canvas).off(),
                          $(this.canvas).remove(),
                          delete this.canvas
                      }
                  }, {
                      key: "updateLongCompHeight",
                      value: function(t) {
                          var e = t.width
                            , i = t.height
                            , s = this.compJson.properties.arrangeImageScale || 100
                            , r = this.eqxPage.getPageWidth();
                          if (!this.group && this.isBaseLayerElement) {
                              var a = e / i
                                , n = this.compJson.css
                                , o = n.paddingTop
                                , g = void 0 === o ? 0 : o
                                , h = n.paddingBottom
                                , l = void 0 === h ? 0 : h
                                , C = n.paddingLeft
                                , A = n.paddingRight
                                , p = r - parseFloat(C) - parseFloat(A);
                              this.isArrangEditor && this.compJson.properties.originCss && (p = this.compJson.properties.originCss.width - parseFloat(C) - parseFloat(A));
                              var I = parseFloat(p / a) + parseFloat(g) + parseFloat(l);
                              this.update$li({
                                  height: I * s / 100,
                                  width: r * s / 100
                              })
                          }
                      }
                  }, {
                      key: "editLongImage",
                      value: function(t, e) {
                          var i = this
                            , s = this.compJson;
                          if (e)
                              var r = Promise.resolve(e);
                          else
                              r = loadImg(this._getContextImgSrc()).then((function(t) {
                                  var e = t.width
                                    , i = t.height;
                                  return {
                                      width: e,
                                      height: i,
                                      ratio: e / i
                                  }
                              }
                              ));
                          function a(t) {
                              return JSON.parse(JSON.stringify(t))
                          }
                          var n = a(s);
                          t = a(t);
                          var o = n.properties;
                          o.imgStyle = t.imgStyle,
                          o.cropSize = t.cropSize,
                          o.src = t.src,
                          o.originSrc = t.originSrc,
                          o.maskSrc = t.maskSrc;
                          var g = this.updateJson(n);
                          return this.isSupportImgScroll() && (this.$supportScroll.remove(),
                          this.$supportScroll = null),
                          this.eqxPage.renderEqxComp(g, !0),
                          r.then((function(e) {
                              if (i.updateLongCompHeight(e),
                              t.originCss && i.group && i.isBaseLayerElement) {
                                  var s = t.originCss
                                    , r = s.width
                                    , a = s.height;
                                  i.compJson.css.width = r,
                                  i.compJson.css.height = a
                              }
                              if (i.isArrangEditor && t.originCss) {
                                  var n = t.originCss
                                    , o = n.width;
                                  n.height;
                                  i.compJson.css.width = o
                              }
                              var h = e.width
                                , l = e.height
                                , C = e.ratio;
                              if (g.$width = h,
                              g.$height = l,
                              g.updateImageSize(C),
                              g.isSupportImgScroll()) {
                                  var A = g.compJson.properties.imgStyle.height
                                    , p = g.compJson.properties.supportScrollH;
                                  A > p && g.update$li({
                                      height: p
                                  })
                              }
                              return g.findTopGroup().autoSizeTopDown(),
                              Promise.resolve(g)
                          }
                          ))
                      }
                  }, {
                      key: "editImage",
                      value: function(t, e) {
                          if ("long" === options.source)
                              return this.editLongImage(t, e);
                          var i = this.compJson;
                          if (e)
                              var s = Promise.resolve(e);
                          else
                              s = loadImg(this._getContextImgSrc()).then((function(t) {
                                  var e = t.width
                                    , i = t.height;
                                  return {
                                      width: e,
                                      height: i,
                                      ratio: e / i
                                  }
                              }
                              ));
                          function r(t) {
                              return JSON.parse(JSON.stringify(t))
                          }
                          var a = r(i);
                          t = r(t);
                          var n = a.properties;
                          n.imgStyle = t.imgStyle,
                          n.cropSize = t.cropSize,
                          n.src = t.src,
                          n.originSrc = t.originSrc,
                          n.maskSrc = t.maskSrc;
                          var o = this.updateJson(a);
                          return this.eqxPage.renderEqxComp(o, !0),
                          s.then((function(t) {
                              var e = t.width
                                , i = t.height
                                , s = t.ratio;
                              o.$width = e,
                              o.$height = i,
                              o.updateImageSize(s),
                              o.findTopGroup().autoSizeTopDown()
                          }
                          )),
                          o
                      }
                  }, {
                      key: "bindLongAfterRenderEvent",
                      value: function(t, e) {
                          var i = this;
                          if ("documentRender" == this.eqxScene.config.renderMode && this.$li.on("dblclick", (function() {
                              i.$ability.isCheckClickAndDblclick && clearTimeout(i.clickTimer);
                              var t = (i.isGroupItem() ? i.findTopGroup().$group.css("zoom") : i.$li.css("zoom")) || 1;
                              new DblclickImgView({
                                  comp: i,
                                  src: i.getViewImgSrc(),
                                  imgSize: {
                                      width: parseInt(i.$contentsDiv.width() * t),
                                      height: parseInt(i.$contentsDiv.height() * t)
                                  }
                              })
                          }
                          )),
                          e.properties.isViewBigPicture && !this.isHasTrigger() && !$._data(t[0], "events") && !e.properties.cropSize) {
                              var s = this;
                              this.$li.hasClass("supportScroll") && this.$li.on("touchmove", (function(t) {
                                  t.stopPropagation()
                              }
                              )),
                              _utils__WEBPACK_IMPORTED_MODULE_7__.k.isWeixin() && t.on("click.imgPreview", (function() {
                                  var t = function() {
                                      parseInt(e.css.width),
                                      parseInt(e.css.height),
                                      Math.abs(parseInt(e.properties.imgStyle.marginLeft)),
                                      Math.abs(parseInt(e.properties.imgStyle.marginTop));
                                      return s.$context.attr("src").replace(/\/format\/webp/g, "")
                                  }();
                                  wx.previewImage({
                                      current: t,
                                      urls: ["".concat(t)]
                                  })
                              }
                              ))
                          }
                      }
                  }, {
                      key: "bindAfterRenderEvent",
                      value: function(t, e) {
                          e.straightUrl && $(t).click((function() {
                              _utils__WEBPACK_IMPORTED_MODULE_7__.l.openUrl(e.straightUrl)
                          }
                          )),
                          "long" === options.source && this.bindLongAfterRenderEvent(t, e)
                      }
                  }, {
                      key: "imgScrollHover",
                      value: function(t) {
                          if (t)
                              var e = {
                                  height: "auto",
                                  zIndex: (i = this.eqxPage,
                                  s = 0,
                                  i.eqxLayerList[0].getEqxComps().forEach((function(t) {
                                      var e = t.getCss("zIndex");
                                      e > s && (s = e)
                                  }
                                  )),
                                  s + 1)
                              };
                          else
                              e = {
                                  height: this.compJson.properties.supportScrollH,
                                  zIndex: this.compJson.css.zIndex
                              };
                          var i, s;
                          this.$li.css(e)
                      }
                  }, {
                      key: "supportImgContentScroll",
                      value: function(t) {
                          this.organizeScrollDom(),
                          this.update$li({
                              height: t,
                              overflowY: "auto"
                          })
                      }
                  }, {
                      key: "isSupportImgScroll",
                      value: function() {
                          return this.findTopGroup() == this && !isNaN(this.compJson.properties.supportScrollH)
                      }
                  }, {
                      key: "organizeScrollDom",
                      value: function() {
                          this.$supportScroll || (this.$supportScroll = $('\n                    <div class="support-scroll-wrapper"></div>\n                ')),
                          this.$li.children().replaceWith(this.$supportScroll),
                          this.$supportScroll.append(this.$boxDiv)
                      }
                  }, {
                      key: "getViewImgSrc",
                      value: function() {
                          var t = this.compJson.properties
                            , e = t.zoom
                            , i = t.originSrc
                            , s = t.filter
                            , r = (s = void 0 === s ? {} : s).type
                            , a = this._getContextImgSrc();
                          return Number.isInteger(r) && r > 0 || "center" !== e || (a = _const__WEBPACK_IMPORTED_MODULE_9__.a.TENCENT_FILE + i),
                          a = a.replace(/\/thumbnail\/.+?x.+?(>|%3E)/, "").replace(/(\?imageMogr2)?\/format\/webp/, "")
                      }
                  }, {
                      key: "updateItemSizeByPage",
                      value: function(t, e) {
                          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(EqxImage.prototype), "updateItemSizeByPage", this).call(this, t, e);
                          var i = this.compJson
                            , s = i.css
                            , r = i.properties.imgStyle
                            , a = (s.paddingLeft,
                          s.paddingRight,
                          s.paddingTop,
                          s.paddingBottom,
                          s.left,
                          s.top,
                          s.width)
                            , n = s.height
                            , o = r = r || {}
                            , g = o.width
                            , h = void 0 === g ? a : g
                            , l = o.height
                            , C = void 0 === l ? n : l
                            , A = o.marginLeft
                            , p = void 0 === A ? 0 : A
                            , I = o.marginTop
                            , m = void 0 === I ? 0 : I
                            , c = e / t;
                          p *= c,
                          m *= c,
                          this.isSupportImgScroll() ? (h = parseFloat(h) * c,
                          C = parseFloat(C) * c) : (h = parseFloat(a) - 2 * parseFloat(p),
                          C = parseFloat(n) - 2 * parseFloat(m)),
                          Object.assign(r, {
                              width: h,
                              height: C,
                              marginTop: p,
                              marginLeft: m
                          }),
                          this.updateImageSize(h / C),
                          this.isSupportImgScroll() && (r.marginTop = 0,
                          this.$context.css("margin-top", 0))
                      }
                  }, {
                      key: "__reactstandin__regenerateByEval",
                      value: function __reactstandin__regenerateByEval(key, code) {
                          this[key] = eval(code)
                      }
                  }], [{
                      key: "getImageStyles",
                      value: function() {
                          return _imageStyles__WEBPACK_IMPORTED_MODULE_10__.a
                      }
                  }]),
                  EqxImage
              }(parent);
              return EqxImage
          }
          var _default = creatImageClass, reactHotLoader, leaveModule;
          __webpack_exports__.a = _default,
          reactHotLoader = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0,
          reactHotLoader && (reactHotLoader.register(stackBlurImage, "stackBlurImage", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\index.js"),
          reactHotLoader.register(initEffectImgPath, "initEffectImgPath", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\index.js"),
          reactHotLoader.register(loadImg, "loadImg", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\index.js"),
          reactHotLoader.register(isSetFilter, "isSetFilter", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\index.js"),
          reactHotLoader.register(creatImageClass, "creatImageClass", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\index.js"),
          reactHotLoader.register(_default, "default", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\index.js")),
          leaveModule = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0,
          leaveModule && leaveModule(module)
      }
      ).call(this, __webpack_require__(2)(module))
  },
  188: function(module, exports, __webpack_require__) {
      "undefined" != typeof navigator && function(t, e) {
          module.exports = e()
      }(0, (function() {
          "use strict";
          var svgNS = "http://www.w3.org/2000/svg"
            , locationHref = ""
            , _useWebWorker = !1
            , initialDefaultFrame = -999999
            , setWebWorker = function(t) {
              _useWebWorker = !!t
          }
            , getWebWorker = function() {
              return _useWebWorker
          }
            , setLocationHref = function(t) {
              locationHref = t
          }
            , getLocationHref = function() {
              return locationHref
          };
          function createTag(t) {
              return document.createElement(t)
          }
          function extendPrototype(t, e) {
              var i, s, r = t.length;
              for (i = 0; i < r; i += 1)
                  for (var a in s = t[i].prototype)
                      Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
          }
          function getDescriptor(t, e) {
              return Object.getOwnPropertyDescriptor(t, e)
          }
          function createProxyFunction(t) {
              function e() {}
              return e.prototype = t,
              e
          }
          var audioControllerFactory = function() {
              function t(t) {
                  this.audios = [],
                  this.audioFactory = t,
                  this._volume = 1,
                  this._isMuted = !1
              }
              return t.prototype = {
                  addAudio: function(t) {
                      this.audios.push(t)
                  },
                  pause: function() {
                      var t, e = this.audios.length;
                      for (t = 0; t < e; t += 1)
                          this.audios[t].pause()
                  },
                  resume: function() {
                      var t, e = this.audios.length;
                      for (t = 0; t < e; t += 1)
                          this.audios[t].resume()
                  },
                  setRate: function(t) {
                      var e, i = this.audios.length;
                      for (e = 0; e < i; e += 1)
                          this.audios[e].setRate(t)
                  },
                  createAudio: function(t) {
                      return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                          src: [t]
                      }) : {
                          isPlaying: !1,
                          play: function() {
                              this.isPlaying = !0
                          },
                          seek: function() {
                              this.isPlaying = !1
                          },
                          playing: function() {},
                          rate: function() {},
                          setVolume: function() {}
                      }
                  },
                  setAudioFactory: function(t) {
                      this.audioFactory = t
                  },
                  setVolume: function(t) {
                      this._volume = t,
                      this._updateVolume()
                  },
                  mute: function() {
                      this._isMuted = !0,
                      this._updateVolume()
                  },
                  unmute: function() {
                      this._isMuted = !1,
                      this._updateVolume()
                  },
                  getVolume: function() {
                      return this._volume
                  },
                  _updateVolume: function() {
                      var t, e = this.audios.length;
                      for (t = 0; t < e; t += 1)
                          this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                  }
              },
              function() {
                  return new t
              }
          }()
            , createTypedArray = function() {
              function t(t, e) {
                  var i, s = 0, r = [];
                  switch (t) {
                  case "int16":
                  case "uint8c":
                      i = 1;
                      break;
                  default:
                      i = 1.1
                  }
                  for (s = 0; s < e; s += 1)
                      r.push(i);
                  return r
              }
              return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                  return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
              }
              : t
          }();
          function createSizedArray(t) {
              return Array.apply(null, {
                  length: t
              })
          }
          function _typeof$6(t) {
              return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          var subframeEnabled = !0
            , expressionsPlugin = null
            , idPrefix$1 = ""
            , isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            , _shouldRoundValues = !1
            , bmPow = Math.pow
            , bmSqrt = Math.sqrt
            , bmFloor = Math.floor
            , bmMax = Math.max
            , bmMin = Math.min
            , BMMath = {};
          function ProjectInterface$1() {
              return {}
          }
          !function() {
              var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
              for (t = 0; t < i; t += 1)
                  BMMath[e[t]] = Math[e[t]]
          }(),
          BMMath.random = Math.random,
          BMMath.abs = function(t) {
              if ("object" === _typeof$6(t) && t.length) {
                  var e, i = createSizedArray(t.length), s = t.length;
                  for (e = 0; e < s; e += 1)
                      i[e] = Math.abs(t[e]);
                  return i
              }
              return Math.abs(t)
          }
          ;
          var defaultCurveSegments = 150
            , degToRads = Math.PI / 180
            , roundCorner = .5519;
          function roundValues(t) {
              _shouldRoundValues = !!t
          }
          function bmRnd(t) {
              return _shouldRoundValues ? Math.round(t) : t
          }
          function styleDiv(t) {
              t.style.position = "absolute",
              t.style.top = 0,
              t.style.left = 0,
              t.style.display = "block",
              t.style.transformOrigin = "0 0",
              t.style.webkitTransformOrigin = "0 0",
              t.style.backfaceVisibility = "visible",
              t.style.webkitBackfaceVisibility = "visible",
              t.style.transformStyle = "preserve-3d",
              t.style.webkitTransformStyle = "preserve-3d",
              t.style.mozTransformStyle = "preserve-3d"
          }
          function BMEnterFrameEvent(t, e, i, s) {
              this.type = t,
              this.currentTime = e,
              this.totalTime = i,
              this.direction = s < 0 ? -1 : 1
          }
          function BMCompleteEvent(t, e) {
              this.type = t,
              this.direction = e < 0 ? -1 : 1
          }
          function BMCompleteLoopEvent(t, e, i, s) {
              this.type = t,
              this.currentLoop = i,
              this.totalLoops = e,
              this.direction = s < 0 ? -1 : 1
          }
          function BMSegmentStartEvent(t, e, i) {
              this.type = t,
              this.firstFrame = e,
              this.totalFrames = i
          }
          function BMDestroyEvent(t, e) {
              this.type = t,
              this.target = e
          }
          function BMRenderFrameErrorEvent(t, e) {
              this.type = "renderFrameError",
              this.nativeError = t,
              this.currentTime = e
          }
          function BMConfigErrorEvent(t) {
              this.type = "configError",
              this.nativeError = t
          }
          function BMAnimationConfigErrorEvent(t, e) {
              this.type = t,
              this.nativeError = e
          }
          var createElementID = (_count = 0,
          function() {
              return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }
          ), _count;
          function HSVtoRGB(t, e, i) {
              var s, r, a, n, o, g, h, l;
              switch (g = i * (1 - e),
              h = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e),
              l = i * (1 - (1 - o) * e),
              n % 6) {
              case 0:
                  s = i,
                  r = l,
                  a = g;
                  break;
              case 1:
                  s = h,
                  r = i,
                  a = g;
                  break;
              case 2:
                  s = g,
                  r = i,
                  a = l;
                  break;
              case 3:
                  s = g,
                  r = h,
                  a = i;
                  break;
              case 4:
                  s = l,
                  r = g,
                  a = i;
                  break;
              case 5:
                  s = i,
                  r = g,
                  a = h
              }
              return [s, r, a]
          }
          function RGBtoHSV(t, e, i) {
              var s, r = Math.max(t, e, i), a = Math.min(t, e, i), n = r - a, o = 0 === r ? 0 : n / r, g = r / 255;
              switch (r) {
              case a:
                  s = 0;
                  break;
              case t:
                  s = e - i + n * (e < i ? 6 : 0),
                  s /= 6 * n;
                  break;
              case e:
                  s = i - t + 2 * n,
                  s /= 6 * n;
                  break;
              case i:
                  s = t - e + 4 * n,
                  s /= 6 * n
              }
              return [s, o, g]
          }
          function addSaturationToRGB(t, e) {
              var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return i[1] += e,
              i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0),
              HSVtoRGB(i[0], i[1], i[2])
          }
          function addBrightnessToRGB(t, e) {
              var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return i[2] += e,
              i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0),
              HSVtoRGB(i[0], i[1], i[2])
          }
          function addHueToRGB(t, e) {
              var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return i[0] += e / 360,
              i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1),
              HSVtoRGB(i[0], i[1], i[2])
          }
          var rgbToHex = function() {
              var t, e, i = [];
              for (t = 0; t < 256; t += 1)
                  e = t.toString(16),
                  i[t] = 1 === e.length ? "0" + e : e;
              return function(t, e, s) {
                  return t < 0 && (t = 0),
                  e < 0 && (e = 0),
                  s < 0 && (s = 0),
                  "#" + i[t] + i[e] + i[s]
              }
          }()
            , setSubframeEnabled = function(t) {
              subframeEnabled = !!t
          }
            , getSubframeEnabled = function() {
              return subframeEnabled
          }
            , setExpressionsPlugin = function(t) {
              expressionsPlugin = t
          }
            , getExpressionsPlugin = function() {
              return expressionsPlugin
          }
            , setDefaultCurveSegments = function(t) {
              defaultCurveSegments = t
          }
            , getDefaultCurveSegments = function() {
              return defaultCurveSegments
          }
            , setIdPrefix = function(t) {
              idPrefix$1 = t
          }
            , getIdPrefix = function() {
              return idPrefix$1
          };
          function createNS(t) {
              return document.createElementNS(svgNS, t)
          }
          function _typeof$5(t) {
              return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          var dataManager = function() {
              var t, e, i = 1, s = [], r = {
                  onmessage: function() {},
                  postMessage: function(e) {
                      t({
                          data: e
                      })
                  }
              }, a = {
                  postMessage: function(t) {
                      r.onmessage({
                          data: t
                      })
                  }
              };
              function n() {
                  e || ((e = function(e) {
                      if (window.Worker && window.Blob && getWebWorker()) {
                          var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()],{
                              type: "text/javascript"
                          })
                            , s = URL.createObjectURL(i);
                          return new Worker(s)
                      }
                      return t = e,
                      r
                  }((function(t) {
                      if (a.dataManager || (a.dataManager = function() {
                          function t(r, a) {
                              var n, o, g, h, l, A, p = r.length;
                              for (o = 0; o < p; o += 1)
                                  if ("ks"in (n = r[o]) && !n.completed) {
                                      if (n.completed = !0,
                                      n.tt && (r[o - 1].td = n.tt),
                                      n.hasMask) {
                                          var I = n.masksProperties;
                                          for (h = I.length,
                                          g = 0; g < h; g += 1)
                                              if (I[g].pt.k.i)
                                                  s(I[g].pt.k);
                                              else
                                                  for (A = I[g].pt.k.length,
                                                  l = 0; l < A; l += 1)
                                                      I[g].pt.k[l].s && s(I[g].pt.k[l].s[0]),
                                                      I[g].pt.k[l].e && s(I[g].pt.k[l].e[0])
                                      }
                                      0 === n.ty ? (n.layers = e(n.refId, a),
                                      t(n.layers, a)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && C(n)
                                  }
                          }
                          function e(t, e) {
                              var i = function(t, e) {
                                  for (var i = 0, s = e.length; i < s; ) {
                                      if (e[i].id === t)
                                          return e[i];
                                      i += 1
                                  }
                                  return null
                              }(t, e);
                              return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0,
                              i.layers) : null
                          }
                          function i(t) {
                              var e, r, a;
                              for (e = t.length - 1; e >= 0; e -= 1)
                                  if ("sh" === t[e].ty)
                                      if (t[e].ks.k.i)
                                          s(t[e].ks.k);
                                      else
                                          for (a = t[e].ks.k.length,
                                          r = 0; r < a; r += 1)
                                              t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]),
                                              t[e].ks.k[r].e && s(t[e].ks.k[r].e[0]);
                                  else
                                      "gr" === t[e].ty && i(t[e].it)
                          }
                          function s(t) {
                              var e, i = t.i.length;
                              for (e = 0; e < i; e += 1)
                                  t.i[e][0] += t.v[e][0],
                                  t.i[e][1] += t.v[e][1],
                                  t.o[e][0] += t.v[e][0],
                                  t.o[e][1] += t.v[e][1]
                          }
                          function r(t, e) {
                              var i = e ? e.split(".") : [100, 100, 100];
                              return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                          }
                          var a, n = function() {
                              var t = [4, 4, 14];
                              function e(t) {
                                  var e, i, s, r = t.length;
                                  for (e = 0; e < r; e += 1)
                                      5 === t[e].ty && (i = t[e],
                                      s = void 0,
                                      s = i.t.d,
                                      i.t.d = {
                                          k: [{
                                              s: s,
                                              t: 0
                                          }]
                                      })
                              }
                              return function(i) {
                                  if (r(t, i.v) && (e(i.layers),
                                  i.assets)) {
                                      var s, a = i.assets.length;
                                      for (s = 0; s < a; s += 1)
                                          i.assets[s].layers && e(i.assets[s].layers)
                                  }
                              }
                          }(), o = (a = [4, 7, 99],
                          function(t) {
                              if (t.chars && !r(a, t.v)) {
                                  var e, s = t.chars.length;
                                  for (e = 0; e < s; e += 1) {
                                      var n = t.chars[e];
                                      n.data && n.data.shapes && (i(n.data.shapes),
                                      n.data.ip = 0,
                                      n.data.op = 99999,
                                      n.data.st = 0,
                                      n.data.sr = 1,
                                      n.data.ks = {
                                          p: {
                                              k: [0, 0],
                                              a: 0
                                          },
                                          s: {
                                              k: [100, 100],
                                              a: 0
                                          },
                                          a: {
                                              k: [0, 0],
                                              a: 0
                                          },
                                          r: {
                                              k: 0,
                                              a: 0
                                          },
                                          o: {
                                              k: 100,
                                              a: 0
                                          }
                                      },
                                      t.chars[e].t || (n.data.shapes.push({
                                          ty: "no"
                                      }),
                                      n.data.shapes[0].it.push({
                                          p: {
                                              k: [0, 0],
                                              a: 0
                                          },
                                          s: {
                                              k: [100, 100],
                                              a: 0
                                          },
                                          a: {
                                              k: [0, 0],
                                              a: 0
                                          },
                                          r: {
                                              k: 0,
                                              a: 0
                                          },
                                          o: {
                                              k: 100,
                                              a: 0
                                          },
                                          sk: {
                                              k: 0,
                                              a: 0
                                          },
                                          sa: {
                                              k: 0,
                                              a: 0
                                          },
                                          ty: "tr"
                                      })))
                                  }
                              }
                          }
                          ), g = function() {
                              var t = [5, 7, 15];
                              function e(t) {
                                  var e, i, s, r = t.length;
                                  for (e = 0; e < r; e += 1)
                                      5 === t[e].ty && (i = t[e],
                                      s = void 0,
                                      "number" == typeof (s = i.t.p).a && (s.a = {
                                          a: 0,
                                          k: s.a
                                      }),
                                      "number" == typeof s.p && (s.p = {
                                          a: 0,
                                          k: s.p
                                      }),
                                      "number" == typeof s.r && (s.r = {
                                          a: 0,
                                          k: s.r
                                      }))
                              }
                              return function(i) {
                                  if (r(t, i.v) && (e(i.layers),
                                  i.assets)) {
                                      var s, a = i.assets.length;
                                      for (s = 0; s < a; s += 1)
                                          i.assets[s].layers && e(i.assets[s].layers)
                                  }
                              }
                          }(), h = function() {
                              var t = [4, 1, 9];
                              function e(t) {
                                  var i, s, r, a = t.length;
                                  for (i = 0; i < a; i += 1)
                                      if ("gr" === t[i].ty)
                                          e(t[i].it);
                                      else if ("fl" === t[i].ty || "st" === t[i].ty)
                                          if (t[i].c.k && t[i].c.k[0].i)
                                              for (r = t[i].c.k.length,
                                              s = 0; s < r; s += 1)
                                                  t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255,
                                                  t[i].c.k[s].s[1] /= 255,
                                                  t[i].c.k[s].s[2] /= 255,
                                                  t[i].c.k[s].s[3] /= 255),
                                                  t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255,
                                                  t[i].c.k[s].e[1] /= 255,
                                                  t[i].c.k[s].e[2] /= 255,
                                                  t[i].c.k[s].e[3] /= 255);
                                          else
                                              t[i].c.k[0] /= 255,
                                              t[i].c.k[1] /= 255,
                                              t[i].c.k[2] /= 255,
                                              t[i].c.k[3] /= 255
                              }
                              function i(t) {
                                  var i, s = t.length;
                                  for (i = 0; i < s; i += 1)
                                      4 === t[i].ty && e(t[i].shapes)
                              }
                              return function(e) {
                                  if (r(t, e.v) && (i(e.layers),
                                  e.assets)) {
                                      var s, a = e.assets.length;
                                      for (s = 0; s < a; s += 1)
                                          e.assets[s].layers && i(e.assets[s].layers)
                                  }
                              }
                          }(), l = function() {
                              var t = [4, 4, 18];
                              function e(t) {
                                  var i, s, r;
                                  for (i = t.length - 1; i >= 0; i -= 1)
                                      if ("sh" === t[i].ty)
                                          if (t[i].ks.k.i)
                                              t[i].ks.k.c = t[i].closed;
                                          else
                                              for (r = t[i].ks.k.length,
                                              s = 0; s < r; s += 1)
                                                  t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed),
                                                  t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                      else
                                          "gr" === t[i].ty && e(t[i].it)
                              }
                              function i(t) {
                                  var i, s, r, a, n, o, g = t.length;
                                  for (s = 0; s < g; s += 1) {
                                      if ((i = t[s]).hasMask) {
                                          var h = i.masksProperties;
                                          for (a = h.length,
                                          r = 0; r < a; r += 1)
                                              if (h[r].pt.k.i)
                                                  h[r].pt.k.c = h[r].cl;
                                              else
                                                  for (o = h[r].pt.k.length,
                                                  n = 0; n < o; n += 1)
                                                      h[r].pt.k[n].s && (h[r].pt.k[n].s[0].c = h[r].cl),
                                                      h[r].pt.k[n].e && (h[r].pt.k[n].e[0].c = h[r].cl)
                                      }
                                      4 === i.ty && e(i.shapes)
                                  }
                              }
                              return function(e) {
                                  if (r(t, e.v) && (i(e.layers),
                                  e.assets)) {
                                      var s, a = e.assets.length;
                                      for (s = 0; s < a; s += 1)
                                          e.assets[s].layers && i(e.assets[s].layers)
                                  }
                              }
                          }();
                          function C(t) {
                              0 === t.t.a.length && t.t.p
                          }
                          var A = {
                              completeData: function(i) {
                                  i.__complete || (h(i),
                                  n(i),
                                  o(i),
                                  g(i),
                                  l(i),
                                  t(i.layers, i.assets),
                                  function(i, s) {
                                      if (i) {
                                          var r = 0
                                            , a = i.length;
                                          for (r = 0; r < a; r += 1)
                                              1 === i[r].t && (i[r].data.layers = e(i[r].data.refId, s),
                                              t(i[r].data.layers, s))
                                      }
                                  }(i.chars, i.assets),
                                  i.__complete = !0)
                              }
                          };
                          return A.checkColors = h,
                          A.checkChars = o,
                          A.checkPathProperties = g,
                          A.checkShapes = l,
                          A.completeLayers = t,
                          A
                      }()),
                      a.assetLoader || (a.assetLoader = function() {
                          function t(t) {
                              var e = t.getResponseHeader("content-type");
                              return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                          }
                          return {
                              load: function(e, i, s, r) {
                                  var a, n = new XMLHttpRequest;
                                  try {
                                      n.responseType = "json"
                                  } catch (t) {}
                                  n.onreadystatechange = function() {
                                      if (4 === n.readyState)
                                          if (200 === n.status)
                                              a = t(n),
                                              s(a);
                                          else
                                              try {
                                                  a = t(n),
                                                  s(a)
                                              } catch (t) {
                                                  r && r(t)
                                              }
                                  }
                                  ;
                                  try {
                                      n.open("GET", e, !0)
                                  } catch (t) {
                                      n.open("GET", i + "/" + e, !0)
                                  }
                                  n.send()
                              }
                          }
                      }()),
                      "loadAnimation" === t.data.type)
                          a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                              a.dataManager.completeData(e),
                              a.postMessage({
                                  id: t.data.id,
                                  payload: e,
                                  status: "success"
                              })
                          }
                          ), (function() {
                              a.postMessage({
                                  id: t.data.id,
                                  status: "error"
                              })
                          }
                          ));
                      else if ("complete" === t.data.type) {
                          var e = t.data.animation;
                          a.dataManager.completeData(e),
                          a.postMessage({
                              id: t.data.id,
                              payload: e,
                              status: "success"
                          })
                      } else
                          "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                              a.postMessage({
                                  id: t.data.id,
                                  payload: e,
                                  status: "success"
                              })
                          }
                          ), (function() {
                              a.postMessage({
                                  id: t.data.id,
                                  status: "error"
                              })
                          }
                          ))
                  }
                  ))).onmessage = function(t) {
                      var e = t.data
                        , i = e.id
                        , r = s[i];
                      s[i] = null,
                      "success" === e.status ? r.onComplete(e.payload) : r.onError && r.onError()
                  }
                  )
              }
              function o(t, e) {
                  var r = "processId_" + (i += 1);
                  return s[r] = {
                      onComplete: t,
                      onError: e
                  },
                  r
              }
              return {
                  loadAnimation: function(t, i, s) {
                      n();
                      var r = o(i, s);
                      e.postMessage({
                          type: "loadAnimation",
                          path: t,
                          fullPath: window.location.origin + window.location.pathname,
                          id: r
                      })
                  },
                  loadData: function(t, i, s) {
                      n();
                      var r = o(i, s);
                      e.postMessage({
                          type: "loadData",
                          path: t,
                          fullPath: window.location.origin + window.location.pathname,
                          id: r
                      })
                  },
                  completeAnimation: function(t, i, s) {
                      n();
                      var r = o(i, s);
                      e.postMessage({
                          type: "complete",
                          animation: t,
                          id: r
                      })
                  }
              }
          }()
            , ImagePreloader = function() {
              var t = function() {
                  var t = createTag("canvas");
                  t.width = 1,
                  t.height = 1;
                  var e = t.getContext("2d");
                  return e.fillStyle = "rgba(0,0,0,0)",
                  e.fillRect(0, 0, 1, 1),
                  t
              }();
              function e() {
                  this.loadedAssets += 1,
                  this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
              }
              function i() {
                  this.loadedFootagesCount += 1,
                  this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
              }
              function s(t, e, i) {
                  var s = "";
                  if (t.e)
                      s = t.p;
                  else if (e) {
                      var r = t.p;
                      -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                      s = e + r
                  } else
                      s = i,
                      s += t.u ? t.u : "",
                      s += t.p;
                  return s
              }
              function r(t) {
                  var e = 0
                    , i = setInterval(function() {
                      (t.getBBox().width || e > 500) && (this._imageLoaded(),
                      clearInterval(i)),
                      e += 1
                  }
                  .bind(this), 50)
              }
              function a(t) {
                  var e = {
                      assetData: t
                  }
                    , i = s(t, this.assetsPath, this.path);
                  return dataManager.loadData(i, function(t) {
                      e.img = t,
                      this._footageLoaded()
                  }
                  .bind(this), function() {
                      e.img = {},
                      this._footageLoaded()
                  }
                  .bind(this)),
                  e
              }
              function n() {
                  this._imageLoaded = e.bind(this),
                  this._footageLoaded = i.bind(this),
                  this.testImageLoaded = r.bind(this),
                  this.createFootageData = a.bind(this),
                  this.assetsPath = "",
                  this.path = "",
                  this.totalImages = 0,
                  this.totalFootages = 0,
                  this.loadedAssets = 0,
                  this.loadedFootagesCount = 0,
                  this.imagesLoadedCb = null,
                  this.images = []
              }
              return n.prototype = {
                  loadAssets: function(t, e) {
                      var i;
                      this.imagesLoadedCb = e;
                      var s = t.length;
                      for (i = 0; i < s; i += 1)
                          t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1,
                          this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1,
                          this.images.push(this._createImageData(t[i]))))
                  },
                  setAssetsPath: function(t) {
                      this.assetsPath = t || ""
                  },
                  setPath: function(t) {
                      this.path = t || ""
                  },
                  loadedImages: function() {
                      return this.totalImages === this.loadedAssets
                  },
                  loadedFootages: function() {
                      return this.totalFootages === this.loadedFootagesCount
                  },
                  destroy: function() {
                      this.imagesLoadedCb = null,
                      this.images.length = 0
                  },
                  getAsset: function(t) {
                      for (var e = 0, i = this.images.length; e < i; ) {
                          if (this.images[e].assetData === t)
                              return this.images[e].img;
                          e += 1
                      }
                      return null
                  },
                  createImgData: function(e) {
                      var i = s(e, this.assetsPath, this.path)
                        , r = createTag("img");
                      r.crossOrigin = "anonymous",
                      r.addEventListener("load", this._imageLoaded, !1),
                      r.addEventListener("error", function() {
                          a.img = t,
                          this._imageLoaded()
                      }
                      .bind(this), !1),
                      r.src = i;
                      var a = {
                          img: r,
                          assetData: e
                      };
                      return a
                  },
                  createImageData: function(e) {
                      var i = s(e, this.assetsPath, this.path)
                        , r = createNS("image");
                      isSafari ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1),
                      r.addEventListener("error", function() {
                          a.img = t,
                          this._imageLoaded()
                      }
                      .bind(this), !1),
                      r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i),
                      this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                      var a = {
                          img: r,
                          assetData: e
                      };
                      return a
                  },
                  imageLoaded: e,
                  footageLoaded: i,
                  setCacheType: function(t, e) {
                      "svg" === t ? (this._elementHelper = e,
                      this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                  }
              },
              n
          }();
          function BaseEvent() {}
          BaseEvent.prototype = {
              triggerEvent: function(t, e) {
                  if (this._cbs[t])
                      for (var i = this._cbs[t], s = 0; s < i.length; s += 1)
                          i[s](e)
              },
              addEventListener: function(t, e) {
                  return this._cbs[t] || (this._cbs[t] = []),
                  this._cbs[t].push(e),
                  function() {
                      this.removeEventListener(t, e)
                  }
                  .bind(this)
              },
              removeEventListener: function(t, e) {
                  if (e) {
                      if (this._cbs[t]) {
                          for (var i = 0, s = this._cbs[t].length; i < s; )
                              this._cbs[t][i] === e && (this._cbs[t].splice(i, 1),
                              i -= 1,
                              s -= 1),
                              i += 1;
                          this._cbs[t].length || (this._cbs[t] = null)
                      }
                  } else
                      this._cbs[t] = null
              }
          };
          var markerParser = function() {
              function t(t) {
                  for (var e, i = t.split("\r\n"), s = {}, r = 0, a = 0; a < i.length; a += 1)
                      2 === (e = i[a].split(":")).length && (s[e[0]] = e[1].trim(),
                      r += 1);
                  if (0 === r)
                      throw new Error;
                  return s
              }
              return function(e) {
                  for (var i = [], s = 0; s < e.length; s += 1) {
                      var r = e[s]
                        , a = {
                          time: r.tm,
                          duration: r.dr
                      };
                      try {
                          a.payload = JSON.parse(e[s].cm)
                      } catch (i) {
                          try {
                              a.payload = t(e[s].cm)
                          } catch (t) {
                              a.payload = {
                                  name: e[s].cm
                              }
                          }
                      }
                      i.push(a)
                  }
                  return i
              }
          }()
            , ProjectInterface = function() {
              function t(t) {
                  this.compositions.push(t)
              }
              return function() {
                  function e(t) {
                      for (var e = 0, i = this.compositions.length; e < i; ) {
                          if (this.compositions[e].data && this.compositions[e].data.nm === t)
                              return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame),
                              this.compositions[e].compInterface;
                          e += 1
                      }
                      return null
                  }
                  return e.compositions = [],
                  e.currentFrame = 0,
                  e.registerComposition = t,
                  e
              }
          }()
            , renderers = {}
            , registerRenderer = function(t, e) {
              renderers[t] = e
          };
          function getRenderer(t) {
              return renderers[t]
          }
          function _typeof$4(t) {
              return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          var AnimationItem = function() {
              this._cbs = [],
              this.name = "",
              this.path = "",
              this.isLoaded = !1,
              this.currentFrame = 0,
              this.currentRawFrame = 0,
              this.firstFrame = 0,
              this.totalFrames = 0,
              this.frameRate = 0,
              this.frameMult = 0,
              this.playSpeed = 1,
              this.playDirection = 1,
              this.playCount = 0,
              this.animationData = {},
              this.assets = [],
              this.isPaused = !0,
              this.autoplay = !1,
              this.loop = !0,
              this.renderer = null,
              this.animationID = createElementID(),
              this.assetsPath = "",
              this.timeCompleted = 0,
              this.segmentPos = 0,
              this.isSubframeEnabled = getSubframeEnabled(),
              this.segments = [],
              this._idle = !0,
              this._completedLoop = !1,
              this.projectInterface = ProjectInterface(),
              this.imagePreloader = new ImagePreloader,
              this.audioController = audioControllerFactory(),
              this.markers = [],
              this.configAnimation = this.configAnimation.bind(this),
              this.onSetupError = this.onSetupError.bind(this),
              this.onSegmentComplete = this.onSegmentComplete.bind(this),
              this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame",0,0,0)
          };
          extendPrototype([BaseEvent], AnimationItem),
          AnimationItem.prototype.setParams = function(t) {
              (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
              var e = "svg";
              t.animType ? e = t.animType : t.renderer && (e = t.renderer);
              var i = getRenderer(e);
              this.renderer = new i(this,t.rendererSettings),
              this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
              this.renderer.setProjectInterface(this.projectInterface),
              this.animType = e,
              "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
              this.autoplay = !("autoplay"in t) || t.autoplay,
              this.name = t.name ? t.name : "",
              this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments,
              this.assetsPath = t.assetsPath,
              this.initialSegment = t.initialSegment,
              t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
              t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
              this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
              this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
              dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
          }
          ,
          AnimationItem.prototype.onSetupError = function() {
              this.trigger("data_failed")
          }
          ,
          AnimationItem.prototype.setupAnimation = function(t) {
              dataManager.completeAnimation(t, this.configAnimation)
          }
          ,
          AnimationItem.prototype.setData = function(t, e) {
              e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
              var i = {
                  wrapper: t,
                  animationData: e
              }
                , s = t.attributes;
              i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "",
              i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : "canvas";
              var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
              "false" === r ? i.loop = !1 : "true" === r ? i.loop = !0 : "" !== r && (i.loop = parseInt(r, 10));
              var a = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
              i.autoplay = "false" !== a,
              i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "",
              "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1),
              this.setParams(i)
          }
          ,
          AnimationItem.prototype.includeLayers = function(t) {
              t.op > this.animationData.op && (this.animationData.op = t.op,
              this.totalFrames = Math.floor(t.op - this.animationData.ip));
              var e, i, s = this.animationData.layers, r = s.length, a = t.layers, n = a.length;
              for (i = 0; i < n; i += 1)
                  for (e = 0; e < r; ) {
                      if (s[e].id === a[i].id) {
                          s[e] = a[i];
                          break
                      }
                      e += 1
                  }
              if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
              this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
              t.assets)
                  for (r = t.assets.length,
                  e = 0; e < r; e += 1)
                      this.animationData.assets.push(t.assets[e]);
              this.animationData.__complete = !1,
              dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
          }
          ,
          AnimationItem.prototype.onSegmentComplete = function(t) {
              this.animationData = t;
              var e = getExpressionsPlugin();
              e && e.initExpressions(this),
              this.loadNextSegment()
          }
          ,
          AnimationItem.prototype.loadNextSegment = function() {
              var t = this.animationData.segments;
              if (!t || 0 === t.length || !this.autoloadSegments)
                  return this.trigger("data_ready"),
                  void (this.timeCompleted = this.totalFrames);
              var e = t.shift();
              this.timeCompleted = e.time * this.frameRate;
              var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
              this.segmentPos += 1,
              dataManager.loadData(i, this.includeLayers.bind(this), function() {
                  this.trigger("data_failed")
              }
              .bind(this))
          }
          ,
          AnimationItem.prototype.loadSegments = function() {
              this.animationData.segments || (this.timeCompleted = this.totalFrames),
              this.loadNextSegment()
          }
          ,
          AnimationItem.prototype.imagesLoaded = function() {
              this.trigger("loaded_images"),
              this.checkLoaded()
          }
          ,
          AnimationItem.prototype.preloadImages = function() {
              this.imagePreloader.setAssetsPath(this.assetsPath),
              this.imagePreloader.setPath(this.path),
              this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
          }
          ,
          AnimationItem.prototype.configAnimation = function(t) {
              if (this.renderer)
                  try {
                      this.animationData = t,
                      this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                      this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                      this.firstFrame = Math.round(this.animationData.ip)),
                      this.renderer.configAnimation(t),
                      t.assets || (t.assets = []),
                      this.assets = this.animationData.assets,
                      this.frameRate = this.animationData.fr,
                      this.frameMult = this.animationData.fr / 1e3,
                      this.renderer.searchExtraCompositions(t.assets),
                      this.markers = markerParser(t.markers || []),
                      this.trigger("config_ready"),
                      this.preloadImages(),
                      this.loadSegments(),
                      this.updaFrameModifier(),
                      this.waitForFontsLoaded(),
                      this.isPaused && this.audioController.pause()
                  } catch (t) {
                      this.triggerConfigError(t)
                  }
          }
          ,
          AnimationItem.prototype.waitForFontsLoaded = function() {
              this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
          }
          ,
          AnimationItem.prototype.checkLoaded = function() {
              if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                  this.isLoaded = !0;
                  var t = getExpressionsPlugin();
                  t && t.initExpressions(this),
                  this.renderer.initItems(),
                  setTimeout(function() {
                      this.trigger("DOMLoaded")
                  }
                  .bind(this), 0),
                  this.gotoFrame(),
                  this.autoplay && this.play()
              }
          }
          ,
          AnimationItem.prototype.resize = function() {
              this.renderer.updateContainerSize()
          }
          ,
          AnimationItem.prototype.setSubframe = function(t) {
              this.isSubframeEnabled = !!t
          }
          ,
          AnimationItem.prototype.gotoFrame = function() {
              this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
              this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
              this.trigger("enterFrame"),
              this.renderFrame(),
              this.trigger("drawnFrame")
          }
          ,
          AnimationItem.prototype.renderFrame = function() {
              if (!1 !== this.isLoaded && this.renderer)
                  try {
                      this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                  } catch (t) {
                      this.triggerRenderFrameError(t)
                  }
          }
          ,
          AnimationItem.prototype.play = function(t) {
              t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1,
              this.trigger("_pause"),
              this.audioController.resume(),
              this._idle && (this._idle = !1,
              this.trigger("_active")))
          }
          ,
          AnimationItem.prototype.pause = function(t) {
              t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0,
              this.trigger("_play"),
              this._idle = !0,
              this.trigger("_idle"),
              this.audioController.pause())
          }
          ,
          AnimationItem.prototype.togglePause = function(t) {
              t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
          }
          ,
          AnimationItem.prototype.stop = function(t) {
              t && this.name !== t || (this.pause(),
              this.playCount = 0,
              this._completedLoop = !1,
              this.setCurrentRawFrameValue(0))
          }
          ,
          AnimationItem.prototype.getMarkerData = function(t) {
              for (var e, i = 0; i < this.markers.length; i += 1)
                  if ((e = this.markers[i]).payload && e.payload.name === t)
                      return e;
              return null
          }
          ,
          AnimationItem.prototype.goToAndStop = function(t, e, i) {
              if (!i || this.name === i) {
                  var s = Number(t);
                  if (isNaN(s)) {
                      var r = this.getMarkerData(t);
                      r && this.goToAndStop(r.time, !0)
                  } else
                      e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                  this.pause()
              }
          }
          ,
          AnimationItem.prototype.goToAndPlay = function(t, e, i) {
              if (!i || this.name === i) {
                  var s = Number(t);
                  if (isNaN(s)) {
                      var r = this.getMarkerData(t);
                      r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
                  } else
                      this.goToAndStop(s, e, i);
                  this.play()
              }
          }
          ,
          AnimationItem.prototype.advanceTime = function(t) {
              if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                  var e = this.currentRawFrame + t * this.frameModifier
                    , i = !1;
                  e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1,
                  this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
                  this._completedLoop = !0,
                  this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0,
                  e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0,
                  e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
                  this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
                  i && (this.setCurrentRawFrameValue(e),
                  this.pause(),
                  this.trigger("complete"))
              }
          }
          ,
          AnimationItem.prototype.adjustSegment = function(t, e) {
              this.playCount = 0,
              t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
              this.totalFrames = t[0] - t[1],
              this.timeCompleted = this.totalFrames,
              this.firstFrame = t[1],
              this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
              this.totalFrames = t[1] - t[0],
              this.timeCompleted = this.totalFrames,
              this.firstFrame = t[0],
              this.setCurrentRawFrameValue(.001 + e)),
              this.trigger("segmentStart")
          }
          ,
          AnimationItem.prototype.setSegment = function(t, e) {
              var i = -1;
              this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
              this.firstFrame = t,
              this.totalFrames = e - t,
              this.timeCompleted = this.totalFrames,
              -1 !== i && this.goToAndStop(i, !0)
          }
          ,
          AnimationItem.prototype.playSegments = function(t, e) {
              if (e && (this.segments.length = 0),
              "object" === _typeof$4(t[0])) {
                  var i, s = t.length;
                  for (i = 0; i < s; i += 1)
                      this.segments.push(t[i])
              } else
                  this.segments.push(t);
              this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
              this.isPaused && this.play()
          }
          ,
          AnimationItem.prototype.resetSegments = function(t) {
              this.segments.length = 0,
              this.segments.push([this.animationData.ip, this.animationData.op]),
              t && this.checkSegments(0)
          }
          ,
          AnimationItem.prototype.checkSegments = function(t) {
              return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t),
              !0)
          }
          ,
          AnimationItem.prototype.destroy = function(t) {
              t && this.name !== t || !this.renderer || (this.renderer.destroy(),
              this.imagePreloader.destroy(),
              this.trigger("destroy"),
              this._cbs = null,
              this.onEnterFrame = null,
              this.onLoopComplete = null,
              this.onComplete = null,
              this.onSegmentStart = null,
              this.onDestroy = null,
              this.renderer = null,
              this.renderer = null,
              this.imagePreloader = null,
              this.projectInterface = null)
          }
          ,
          AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
              this.currentRawFrame = t,
              this.gotoFrame()
          }
          ,
          AnimationItem.prototype.setSpeed = function(t) {
              this.playSpeed = t,
              this.updaFrameModifier()
          }
          ,
          AnimationItem.prototype.setDirection = function(t) {
              this.playDirection = t < 0 ? -1 : 1,
              this.updaFrameModifier()
          }
          ,
          AnimationItem.prototype.setVolume = function(t, e) {
              e && this.name !== e || this.audioController.setVolume(t)
          }
          ,
          AnimationItem.prototype.getVolume = function() {
              return this.audioController.getVolume()
          }
          ,
          AnimationItem.prototype.mute = function(t) {
              t && this.name !== t || this.audioController.mute()
          }
          ,
          AnimationItem.prototype.unmute = function(t) {
              t && this.name !== t || this.audioController.unmute()
          }
          ,
          AnimationItem.prototype.updaFrameModifier = function() {
              this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
              this.audioController.setRate(this.playSpeed * this.playDirection)
          }
          ,
          AnimationItem.prototype.getPath = function() {
              return this.path
          }
          ,
          AnimationItem.prototype.getAssetsPath = function(t) {
              var e = "";
              if (t.e)
                  e = t.p;
              else if (this.assetsPath) {
                  var i = t.p;
                  -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                  e = this.assetsPath + i
              } else
                  e = this.path,
                  e += t.u ? t.u : "",
                  e += t.p;
              return e
          }
          ,
          AnimationItem.prototype.getAssetData = function(t) {
              for (var e = 0, i = this.assets.length; e < i; ) {
                  if (t === this.assets[e].id)
                      return this.assets[e];
                  e += 1
              }
              return null
          }
          ,
          AnimationItem.prototype.hide = function() {
              this.renderer.hide()
          }
          ,
          AnimationItem.prototype.show = function() {
              this.renderer.show()
          }
          ,
          AnimationItem.prototype.getDuration = function(t) {
              return t ? this.totalFrames : this.totalFrames / this.frameRate
          }
          ,
          AnimationItem.prototype.updateDocumentData = function(t, e, i) {
              try {
                  this.renderer.getElementByPath(t).updateDocumentData(e, i)
              } catch (t) {}
          }
          ,
          AnimationItem.prototype.trigger = function(t) {
              if (this._cbs && this._cbs[t])
                  switch (t) {
                  case "enterFrame":
                      this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                      break;
                  case "drawnFrame":
                      this.drawnFrameEvent.currentTime = this.currentFrame,
                      this.drawnFrameEvent.totalTime = this.totalFrames,
                      this.drawnFrameEvent.direction = this.frameModifier,
                      this.triggerEvent(t, this.drawnFrameEvent);
                      break;
                  case "loopComplete":
                      this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                      break;
                  case "complete":
                      this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                      break;
                  case "segmentStart":
                      this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                      break;
                  case "destroy":
                      this.triggerEvent(t, new BMDestroyEvent(t,this));
                      break;
                  default:
                      this.triggerEvent(t)
                  }
              "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
              "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
              "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
              "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
              "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
          }
          ,
          AnimationItem.prototype.triggerRenderFrameError = function(t) {
              var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
              this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e)
          }
          ,
          AnimationItem.prototype.triggerConfigError = function(t) {
              var e = new BMConfigErrorEvent(t,this.currentFrame);
              this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e)
          }
          ;
          var animationManager = function() {
              var t = {}
                , e = []
                , i = 0
                , s = 0
                , r = 0
                , a = !0
                , n = !1;
              function o(t) {
                  for (var i = 0, r = t.target; i < s; )
                      e[i].animation === r && (e.splice(i, 1),
                      i -= 1,
                      s -= 1,
                      r.isPaused || l()),
                      i += 1
              }
              function g(t, i) {
                  if (!t)
                      return null;
                  for (var r = 0; r < s; ) {
                      if (e[r].elem === t && null !== e[r].elem)
                          return e[r].animation;
                      r += 1
                  }
                  var a = new AnimationItem;
                  return C(a, t),
                  a.setData(t, i),
                  a
              }
              function h() {
                  r += 1,
                  I()
              }
              function l() {
                  r -= 1
              }
              function C(t, i) {
                  t.addEventListener("destroy", o),
                  t.addEventListener("_active", h),
                  t.addEventListener("_idle", l),
                  e.push({
                      elem: i,
                      animation: t
                  }),
                  s += 1
              }
              function A(t) {
                  var o, g = t - i;
                  for (o = 0; o < s; o += 1)
                      e[o].animation.advanceTime(g);
                  i = t,
                  r && !n ? window.requestAnimationFrame(A) : a = !0
              }
              function p(t) {
                  i = t,
                  window.requestAnimationFrame(A)
              }
              function I() {
                  !n && r && a && (window.requestAnimationFrame(p),
                  a = !1)
              }
              return t.registerAnimation = g,
              t.loadAnimation = function(t) {
                  var e = new AnimationItem;
                  return C(e, null),
                  e.setParams(t),
                  e
              }
              ,
              t.setSpeed = function(t, i) {
                  var r;
                  for (r = 0; r < s; r += 1)
                      e[r].animation.setSpeed(t, i)
              }
              ,
              t.setDirection = function(t, i) {
                  var r;
                  for (r = 0; r < s; r += 1)
                      e[r].animation.setDirection(t, i)
              }
              ,
              t.play = function(t) {
                  var i;
                  for (i = 0; i < s; i += 1)
                      e[i].animation.play(t)
              }
              ,
              t.pause = function(t) {
                  var i;
                  for (i = 0; i < s; i += 1)
                      e[i].animation.pause(t)
              }
              ,
              t.stop = function(t) {
                  var i;
                  for (i = 0; i < s; i += 1)
                      e[i].animation.stop(t)
              }
              ,
              t.togglePause = function(t) {
                  var i;
                  for (i = 0; i < s; i += 1)
                      e[i].animation.togglePause(t)
              }
              ,
              t.searchAnimations = function(t, e, i) {
                  var s, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = r.length;
                  for (s = 0; s < a; s += 1)
                      i && r[s].setAttribute("data-bm-type", i),
                      g(r[s], t);
                  if (e && 0 === a) {
                      i || (i = "svg");
                      var n = document.getElementsByTagName("body")[0];
                      n.innerText = "";
                      var o = createTag("div");
                      o.style.width = "100%",
                      o.style.height = "100%",
                      o.setAttribute("data-bm-type", i),
                      n.appendChild(o),
                      g(o, t)
                  }
              }
              ,
              t.resize = function() {
                  var t;
                  for (t = 0; t < s; t += 1)
                      e[t].animation.resize()
              }
              ,
              t.goToAndStop = function(t, i, r) {
                  var a;
                  for (a = 0; a < s; a += 1)
                      e[a].animation.goToAndStop(t, i, r)
              }
              ,
              t.destroy = function(t) {
                  var i;
                  for (i = s - 1; i >= 0; i -= 1)
                      e[i].animation.destroy(t)
              }
              ,
              t.freeze = function() {
                  n = !0
              }
              ,
              t.unfreeze = function() {
                  n = !1,
                  I()
              }
              ,
              t.setVolume = function(t, i) {
                  var r;
                  for (r = 0; r < s; r += 1)
                      e[r].animation.setVolume(t, i)
              }
              ,
              t.mute = function(t) {
                  var i;
                  for (i = 0; i < s; i += 1)
                      e[i].animation.mute(t)
              }
              ,
              t.unmute = function(t) {
                  var i;
                  for (i = 0; i < s; i += 1)
                      e[i].animation.unmute(t)
              }
              ,
              t.getRegisteredAnimations = function() {
                  var t, i = e.length, s = [];
                  for (t = 0; t < i; t += 1)
                      s.push(e[t].animation);
                  return s
              }
              ,
              t
          }()
            , BezierFactory = function() {
              var t = {
                  getBezierEasing: function(t, i, s, r, a) {
                      var n = a || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
                      if (e[n])
                          return e[n];
                      var o = new g([t, i, s, r]);
                      return e[n] = o,
                      o
                  }
              }
                , e = {};
              var i = "function" == typeof Float32Array;
              function s(t, e) {
                  return 1 - 3 * e + 3 * t
              }
              function r(t, e) {
                  return 3 * e - 6 * t
              }
              function a(t) {
                  return 3 * t
              }
              function n(t, e, i) {
                  return ((s(e, i) * t + r(e, i)) * t + a(e)) * t
              }
              function o(t, e, i) {
                  return 3 * s(e, i) * t * t + 2 * r(e, i) * t + a(e)
              }
              function g(t) {
                  this._p = t,
                  this._mSampleValues = i ? new Float32Array(11) : new Array(11),
                  this._precomputed = !1,
                  this.get = this.get.bind(this)
              }
              return g.prototype = {
                  get: function(t) {
                      var e = this._p[0]
                        , i = this._p[1]
                        , s = this._p[2]
                        , r = this._p[3];
                      return this._precomputed || this._precompute(),
                      e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : n(this._getTForX(t), i, r)
                  },
                  _precompute: function() {
                      var t = this._p[0]
                        , e = this._p[1]
                        , i = this._p[2]
                        , s = this._p[3];
                      this._precomputed = !0,
                      t === e && i === s || this._calcSampleValues()
                  },
                  _calcSampleValues: function() {
                      for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i)
                          this._mSampleValues[i] = n(.1 * i, t, e)
                  },
                  _getTForX: function(t) {
                      for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, r = 0, a = 1; 10 !== a && s[a] <= t; ++a)
                          r += .1;
                      var g = r + .1 * ((t - s[--a]) / (s[a + 1] - s[a]))
                        , h = o(g, e, i);
                      return h >= .001 ? function(t, e, i, s) {
                          for (var r = 0; r < 4; ++r) {
                              var a = o(e, i, s);
                              if (0 === a)
                                  return e;
                              e -= (n(e, i, s) - t) / a
                          }
                          return e
                      }(t, g, e, i) : 0 === h ? g : function(t, e, i, s, r) {
                          var a, o, g = 0;
                          do {
                              (a = n(o = e + (i - e) / 2, s, r) - t) > 0 ? i = o : e = o
                          } while (Math.abs(a) > 1e-7 && ++g < 10);
                          return o
                      }(t, r, r + .1, e, i)
                  }
              },
              t
          }()
            , pooling = {
              double: function(t) {
                  return t.concat(createSizedArray(t.length))
              }
          }
            , poolFactory = function(t, e, i) {
              var s = 0
                , r = t
                , a = createSizedArray(r);
              return {
                  newElement: function() {
                      return s ? a[s -= 1] : e()
                  },
                  release: function(t) {
                      s === r && (a = pooling.double(a),
                      r *= 2),
                      i && i(t),
                      a[s] = t,
                      s += 1
                  }
              }
          }
            , bezierLengthPool = poolFactory(8, (function() {
              return {
                  addedLength: 0,
                  percents: createTypedArray("float32", getDefaultCurveSegments()),
                  lengths: createTypedArray("float32", getDefaultCurveSegments())
              }
          }
          ))
            , segmentsLengthPool = poolFactory(8, (function() {
              return {
                  lengths: [],
                  totalLength: 0
              }
          }
          ), (function(t) {
              var e, i = t.lengths.length;
              for (e = 0; e < i; e += 1)
                  bezierLengthPool.release(t.lengths[e]);
              t.lengths.length = 0
          }
          ));
          function bezFunction() {
              var t = Math;
              function e(t, e, i, s, r, a) {
                  var n = t * s + e * r + i * a - r * s - a * t - i * e;
                  return n > -.001 && n < .001
              }
              var i = function(t, e, i, s) {
                  var r, a, n, o, g, h, l = getDefaultCurveSegments(), C = 0, A = [], p = [], I = bezierLengthPool.newElement();
                  for (n = i.length,
                  r = 0; r < l; r += 1) {
                      for (g = r / (l - 1),
                      h = 0,
                      a = 0; a < n; a += 1)
                          o = bmPow(1 - g, 3) * t[a] + 3 * bmPow(1 - g, 2) * g * i[a] + 3 * (1 - g) * bmPow(g, 2) * s[a] + bmPow(g, 3) * e[a],
                          A[a] = o,
                          null !== p[a] && (h += bmPow(A[a] - p[a], 2)),
                          p[a] = A[a];
                      h && (C += h = bmSqrt(h)),
                      I.percents[r] = g,
                      I.lengths[r] = C
                  }
                  return I.addedLength = C,
                  I
              };
              function s(t) {
                  this.segmentLength = 0,
                  this.points = new Array(t)
              }
              function r(t, e) {
                  this.partialLength = t,
                  this.point = e
              }
              var a, n = (a = {},
              function(t, i, n, o) {
                  var g = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                  if (!a[g]) {
                      var h, l, C, A, p, I, m, c = getDefaultCurveSegments(), u = 0, f = null;
                      2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (c = 2);
                      var d = new s(c);
                      for (C = n.length,
                      h = 0; h < c; h += 1) {
                          for (m = createSizedArray(C),
                          p = h / (c - 1),
                          I = 0,
                          l = 0; l < C; l += 1)
                              A = bmPow(1 - p, 3) * t[l] + 3 * bmPow(1 - p, 2) * p * (t[l] + n[l]) + 3 * (1 - p) * bmPow(p, 2) * (i[l] + o[l]) + bmPow(p, 3) * i[l],
                              m[l] = A,
                              null !== f && (I += bmPow(m[l] - f[l], 2));
                          u += I = bmSqrt(I),
                          d.points[h] = new r(I,m),
                          f = m
                      }
                      d.segmentLength = u,
                      a[g] = d
                  }
                  return a[g]
              }
              );
              function o(t, e) {
                  var i = e.percents
                    , s = e.lengths
                    , r = i.length
                    , a = bmFloor((r - 1) * t)
                    , n = t * e.addedLength
                    , o = 0;
                  if (a === r - 1 || 0 === a || n === s[a])
                      return i[a];
                  for (var g = s[a] > n ? -1 : 1, h = !0; h; )
                      if (s[a] <= n && s[a + 1] > n ? (o = (n - s[a]) / (s[a + 1] - s[a]),
                      h = !1) : a += g,
                      a < 0 || a >= r - 1) {
                          if (a === r - 1)
                              return i[a];
                          h = !1
                      }
                  return i[a] + (i[a + 1] - i[a]) * o
              }
              var g = createTypedArray("float32", 8);
              return {
                  getSegmentsLength: function(t) {
                      var e, s = segmentsLengthPool.newElement(), r = t.c, a = t.v, n = t.o, o = t.i, g = t._length, h = s.lengths, l = 0;
                      for (e = 0; e < g - 1; e += 1)
                          h[e] = i(a[e], a[e + 1], n[e], o[e + 1]),
                          l += h[e].addedLength;
                      return r && g && (h[e] = i(a[e], a[0], n[e], o[0]),
                      l += h[e].addedLength),
                      s.totalLength = l,
                      s
                  },
                  getNewSegment: function(e, i, s, r, a, n, h) {
                      a < 0 ? a = 0 : a > 1 && (a = 1);
                      var l, C = o(a, h), A = o(n = n > 1 ? 1 : n, h), p = e.length, I = 1 - C, m = 1 - A, c = I * I * I, u = C * I * I * 3, f = C * C * I * 3, d = C * C * C, y = I * I * m, M = C * I * m + I * C * m + I * I * A, v = C * C * m + I * C * A + C * I * A, D = C * C * A, x = I * m * m, w = C * m * m + I * A * m + I * m * A, E = C * A * m + I * A * A + C * m * A, b = C * A * A, L = m * m * m, _ = A * m * m + m * A * m + m * m * A, S = A * A * m + m * A * A + A * m * A, T = A * A * A;
                      for (l = 0; l < p; l += 1)
                          g[4 * l] = t.round(1e3 * (c * e[l] + u * s[l] + f * r[l] + d * i[l])) / 1e3,
                          g[4 * l + 1] = t.round(1e3 * (y * e[l] + M * s[l] + v * r[l] + D * i[l])) / 1e3,
                          g[4 * l + 2] = t.round(1e3 * (x * e[l] + w * s[l] + E * r[l] + b * i[l])) / 1e3,
                          g[4 * l + 3] = t.round(1e3 * (L * e[l] + _ * s[l] + S * r[l] + T * i[l])) / 1e3;
                      return g
                  },
                  getPointInSegment: function(e, i, s, r, a, n) {
                      var g = o(a, n)
                        , h = 1 - g;
                      return [t.round(1e3 * (h * h * h * e[0] + (g * h * h + h * g * h + h * h * g) * s[0] + (g * g * h + h * g * g + g * h * g) * r[0] + g * g * g * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (g * h * h + h * g * h + h * h * g) * s[1] + (g * g * h + h * g * g + g * h * g) * r[1] + g * g * g * i[1])) / 1e3]
                  },
                  buildBezierData: n,
                  pointOnLine2D: e,
                  pointOnLine3D: function(i, s, r, a, n, o, g, h, l) {
                      if (0 === r && 0 === o && 0 === l)
                          return e(i, s, a, n, g, h);
                      var C, A = t.sqrt(t.pow(a - i, 2) + t.pow(n - s, 2) + t.pow(o - r, 2)), p = t.sqrt(t.pow(g - i, 2) + t.pow(h - s, 2) + t.pow(l - r, 2)), I = t.sqrt(t.pow(g - a, 2) + t.pow(h - n, 2) + t.pow(l - o, 2));
                      return (C = A > p ? A > I ? A - p - I : I - p - A : I > p ? I - p - A : p - A - I) > -1e-4 && C < 1e-4
                  }
              }
          }
          var bez = bezFunction()
            , PropertyFactory = function() {
              var t = initialDefaultFrame
                , e = Math.abs;
              function i(t, e) {
                  var i, r = this.offsetTime;
                  "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                  for (var a, n, o, g, h, l, C, A, p, I = e.lastIndex, m = I, c = this.keyframes.length - 1, u = !0; u; ) {
                      if (a = this.keyframes[m],
                      n = this.keyframes[m + 1],
                      m === c - 1 && t >= n.t - r) {
                          a.h && (a = n),
                          I = 0;
                          break
                      }
                      if (n.t - r > t) {
                          I = m;
                          break
                      }
                      m < c - 1 ? m += 1 : (I = 0,
                      u = !1)
                  }
                  o = this.keyframesMetadata[m] || {};
                  var f, d = n.t - r, y = a.t - r;
                  if (a.to) {
                      o.bezierData || (o.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
                      var M = o.bezierData;
                      if (t >= d || t < y) {
                          var v = t >= d ? M.points.length - 1 : 0;
                          for (h = M.points[v].point.length,
                          g = 0; g < h; g += 1)
                              i[g] = M.points[v].point[g]
                      } else {
                          o.__fnct ? p = o.__fnct : (p = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get,
                          o.__fnct = p),
                          l = p((t - y) / (d - y));
                          var D, x = M.segmentLength * l, w = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                          for (A = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0,
                          u = !0,
                          C = M.points.length; u; ) {
                              if (w += M.points[A].partialLength,
                              0 === x || 0 === l || A === M.points.length - 1) {
                                  for (h = M.points[A].point.length,
                                  g = 0; g < h; g += 1)
                                      i[g] = M.points[A].point[g];
                                  break
                              }
                              if (x >= w && x < w + M.points[A + 1].partialLength) {
                                  for (D = (x - w) / M.points[A + 1].partialLength,
                                  h = M.points[A].point.length,
                                  g = 0; g < h; g += 1)
                                      i[g] = M.points[A].point[g] + (M.points[A + 1].point[g] - M.points[A].point[g]) * D;
                                  break
                              }
                              A < C - 1 ? A += 1 : u = !1
                          }
                          e._lastPoint = A,
                          e._lastAddedLength = w - M.points[A].partialLength,
                          e._lastKeyframeIndex = m
                      }
                  } else {
                      var E, b, L, _, S;
                      if (c = a.s.length,
                      f = n.s || a.e,
                      this.sh && 1 !== a.h)
                          if (t >= d)
                              i[0] = f[0],
                              i[1] = f[1],
                              i[2] = f[2];
                          else if (t <= y)
                              i[0] = a.s[0],
                              i[1] = a.s[1],
                              i[2] = a.s[2];
                          else {
                              !function(t, e) {
                                  var i = e[0]
                                    , s = e[1]
                                    , r = e[2]
                                    , a = e[3]
                                    , n = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r)
                                    , o = Math.asin(2 * i * s + 2 * r * a)
                                    , g = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r);
                                  t[0] = n / degToRads,
                                  t[1] = o / degToRads,
                                  t[2] = g / degToRads
                              }(i, function(t, e, i) {
                                  var s, r, a, n, o, g = [], h = t[0], l = t[1], C = t[2], A = t[3], p = e[0], I = e[1], m = e[2], c = e[3];
                                  (r = h * p + l * I + C * m + A * c) < 0 && (r = -r,
                                  p = -p,
                                  I = -I,
                                  m = -m,
                                  c = -c);
                                  1 - r > 1e-6 ? (s = Math.acos(r),
                                  a = Math.sin(s),
                                  n = Math.sin((1 - i) * s) / a,
                                  o = Math.sin(i * s) / a) : (n = 1 - i,
                                  o = i);
                                  return g[0] = n * h + o * p,
                                  g[1] = n * l + o * I,
                                  g[2] = n * C + o * m,
                                  g[3] = n * A + o * c,
                                  g
                              }(s(a.s), s(f), (t - y) / (d - y)))
                          }
                      else
                          for (m = 0; m < c; m += 1)
                              1 !== a.h && (t >= d ? l = 1 : t < y ? l = 0 : (a.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []),
                              o.__fnct[m] ? p = o.__fnct[m] : (E = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m],
                              b = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m],
                              L = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m],
                              _ = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m],
                              p = BezierFactory.getBezierEasing(E, b, L, _).get,
                              o.__fnct[m] = p)) : o.__fnct ? p = o.__fnct : (E = a.o.x,
                              b = a.o.y,
                              L = a.i.x,
                              _ = a.i.y,
                              p = BezierFactory.getBezierEasing(E, b, L, _).get,
                              a.keyframeMetadata = p),
                              l = p((t - y) / (d - y)))),
                              f = n.s || a.e,
                              S = 1 === a.h ? a.s[m] : a.s[m] + (f[m] - a.s[m]) * l,
                              "multidimensional" === this.propType ? i[m] = S : i = S
                  }
                  return e.lastIndex = I,
                  i
              }
              function s(t) {
                  var e = t[0] * degToRads
                    , i = t[1] * degToRads
                    , s = t[2] * degToRads
                    , r = Math.cos(e / 2)
                    , a = Math.cos(i / 2)
                    , n = Math.cos(s / 2)
                    , o = Math.sin(e / 2)
                    , g = Math.sin(i / 2)
                    , h = Math.sin(s / 2);
                  return [o * g * n + r * a * h, o * a * n + r * g * h, r * g * n - o * a * h, r * a * n - o * g * h]
              }
              function r() {
                  var e = this.comp.renderedFrame - this.offsetTime
                    , i = this.keyframes[0].t - this.offsetTime
                    , s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                  if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= s && e >= s || this._caching.lastFrame < i && e < i))) {
                      this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1,
                      this._caching.lastIndex = 0);
                      var r = this.interpolateValue(e, this._caching);
                      this.pv = r
                  }
                  return this._caching.lastFrame = e,
                  this.pv
              }
              function a(t) {
                  var i;
                  if ("unidimensional" === this.propType)
                      i = t * this.mult,
                      e(this.v - i) > 1e-5 && (this.v = i,
                      this._mdf = !0);
                  else
                      for (var s = 0, r = this.v.length; s < r; )
                          i = t[s] * this.mult,
                          e(this.v[s] - i) > 1e-5 && (this.v[s] = i,
                          this._mdf = !0),
                          s += 1
              }
              function n() {
                  if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                      if (this.lock)
                          this.setVValue(this.pv);
                      else {
                          var t;
                          this.lock = !0,
                          this._mdf = this._isFirstFrame;
                          var e = this.effectsSequence.length
                            , i = this.kf ? this.pv : this.data.k;
                          for (t = 0; t < e; t += 1)
                              i = this.effectsSequence[t](i);
                          this.setVValue(i),
                          this._isFirstFrame = !1,
                          this.lock = !1,
                          this.frameId = this.elem.globalData.frameId
                      }
              }
              function o(t) {
                  this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this)
              }
              function g(t, e, i, s) {
                  this.propType = "unidimensional",
                  this.mult = i || 1,
                  this.data = e,
                  this.v = i ? e.k * i : e.k,
                  this.pv = e.k,
                  this._mdf = !1,
                  this.elem = t,
                  this.container = s,
                  this.comp = t.comp,
                  this.k = !1,
                  this.kf = !1,
                  this.vel = 0,
                  this.effectsSequence = [],
                  this._isFirstFrame = !0,
                  this.getValue = n,
                  this.setVValue = a,
                  this.addEffect = o
              }
              function h(t, e, i, s) {
                  var r;
                  this.propType = "multidimensional",
                  this.mult = i || 1,
                  this.data = e,
                  this._mdf = !1,
                  this.elem = t,
                  this.container = s,
                  this.comp = t.comp,
                  this.k = !1,
                  this.kf = !1,
                  this.frameId = -1;
                  var g = e.k.length;
                  for (this.v = createTypedArray("float32", g),
                  this.pv = createTypedArray("float32", g),
                  this.vel = createTypedArray("float32", g),
                  r = 0; r < g; r += 1)
                      this.v[r] = e.k[r] * this.mult,
                      this.pv[r] = e.k[r];
                  this._isFirstFrame = !0,
                  this.effectsSequence = [],
                  this.getValue = n,
                  this.setVValue = a,
                  this.addEffect = o
              }
              function l(e, s, g, h) {
                  this.propType = "unidimensional",
                  this.keyframes = s.k,
                  this.keyframesMetadata = [],
                  this.offsetTime = e.data.st,
                  this.frameId = -1,
                  this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: 0,
                      _lastKeyframeIndex: -1
                  },
                  this.k = !0,
                  this.kf = !0,
                  this.data = s,
                  this.mult = g || 1,
                  this.elem = e,
                  this.container = h,
                  this.comp = e.comp,
                  this.v = t,
                  this.pv = t,
                  this._isFirstFrame = !0,
                  this.getValue = n,
                  this.setVValue = a,
                  this.interpolateValue = i,
                  this.effectsSequence = [r.bind(this)],
                  this.addEffect = o
              }
              function C(e, s, g, h) {
                  var l;
                  this.propType = "multidimensional";
                  var C, A, p, I, m = s.k.length;
                  for (l = 0; l < m - 1; l += 1)
                      s.k[l].to && s.k[l].s && s.k[l + 1] && s.k[l + 1].s && (C = s.k[l].s,
                      A = s.k[l + 1].s,
                      p = s.k[l].to,
                      I = s.k[l].ti,
                      (2 === C.length && (C[0] !== A[0] || C[1] !== A[1]) && bez.pointOnLine2D(C[0], C[1], A[0], A[1], C[0] + p[0], C[1] + p[1]) && bez.pointOnLine2D(C[0], C[1], A[0], A[1], A[0] + I[0], A[1] + I[1]) || 3 === C.length && (C[0] !== A[0] || C[1] !== A[1] || C[2] !== A[2]) && bez.pointOnLine3D(C[0], C[1], C[2], A[0], A[1], A[2], C[0] + p[0], C[1] + p[1], C[2] + p[2]) && bez.pointOnLine3D(C[0], C[1], C[2], A[0], A[1], A[2], A[0] + I[0], A[1] + I[1], A[2] + I[2])) && (s.k[l].to = null,
                      s.k[l].ti = null),
                      C[0] === A[0] && C[1] === A[1] && 0 === p[0] && 0 === p[1] && 0 === I[0] && 0 === I[1] && (2 === C.length || C[2] === A[2] && 0 === p[2] && 0 === I[2]) && (s.k[l].to = null,
                      s.k[l].ti = null));
                  this.effectsSequence = [r.bind(this)],
                  this.data = s,
                  this.keyframes = s.k,
                  this.keyframesMetadata = [],
                  this.offsetTime = e.data.st,
                  this.k = !0,
                  this.kf = !0,
                  this._isFirstFrame = !0,
                  this.mult = g || 1,
                  this.elem = e,
                  this.container = h,
                  this.comp = e.comp,
                  this.getValue = n,
                  this.setVValue = a,
                  this.interpolateValue = i,
                  this.frameId = -1;
                  var c = s.k[0].s.length;
                  for (this.v = createTypedArray("float32", c),
                  this.pv = createTypedArray("float32", c),
                  l = 0; l < c; l += 1)
                      this.v[l] = t,
                      this.pv[l] = t;
                  this._caching = {
                      lastFrame: t,
                      lastIndex: 0,
                      value: createTypedArray("float32", c)
                  },
                  this.addEffect = o
              }
              return {
                  getProp: function(t, e, i, s, r) {
                      var a;
                      if (e.k.length)
                          if ("number" == typeof e.k[0])
                              a = new h(t,e,s,r);
                          else
                              switch (i) {
                              case 0:
                                  a = new l(t,e,s,r);
                                  break;
                              case 1:
                                  a = new C(t,e,s,r)
                              }
                      else
                          a = new g(t,e,s,r);
                      return a.effectsSequence.length && r.addDynamicProperty(a),
                      a
                  }
              }
          }();
          function DynamicPropertyContainer() {}
          DynamicPropertyContainer.prototype = {
              addDynamicProperty: function(t) {
                  -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t),
                  this.container.addDynamicProperty(this),
                  this._isAnimated = !0)
              },
              iterateDynamicProperties: function() {
                  var t;
                  this._mdf = !1;
                  var e = this.dynamicProperties.length;
                  for (t = 0; t < e; t += 1)
                      this.dynamicProperties[t].getValue(),
                      this.dynamicProperties[t]._mdf && (this._mdf = !0)
              },
              initDynamicPropertyContainer: function(t) {
                  this.container = t,
                  this.dynamicProperties = [],
                  this._mdf = !1,
                  this._isAnimated = !1
              }
          };
          var pointPool = poolFactory(8, (function() {
              return createTypedArray("float32", 2)
          }
          ));
          function ShapePath() {
              this.c = !1,
              this._length = 0,
              this._maxLength = 8,
              this.v = createSizedArray(this._maxLength),
              this.o = createSizedArray(this._maxLength),
              this.i = createSizedArray(this._maxLength)
          }
          ShapePath.prototype.setPathData = function(t, e) {
              this.c = t,
              this.setLength(e);
              for (var i = 0; i < e; )
                  this.v[i] = pointPool.newElement(),
                  this.o[i] = pointPool.newElement(),
                  this.i[i] = pointPool.newElement(),
                  i += 1
          }
          ,
          ShapePath.prototype.setLength = function(t) {
              for (; this._maxLength < t; )
                  this.doubleArrayLength();
              this._length = t
          }
          ,
          ShapePath.prototype.doubleArrayLength = function() {
              this.v = this.v.concat(createSizedArray(this._maxLength)),
              this.i = this.i.concat(createSizedArray(this._maxLength)),
              this.o = this.o.concat(createSizedArray(this._maxLength)),
              this._maxLength *= 2
          }
          ,
          ShapePath.prototype.setXYAt = function(t, e, i, s, r) {
              var a;
              switch (this._length = Math.max(this._length, s + 1),
              this._length >= this._maxLength && this.doubleArrayLength(),
              i) {
              case "v":
                  a = this.v;
                  break;
              case "i":
                  a = this.i;
                  break;
              case "o":
                  a = this.o;
                  break;
              default:
                  a = []
              }
              (!a[s] || a[s] && !r) && (a[s] = pointPool.newElement()),
              a[s][0] = t,
              a[s][1] = e
          }
          ,
          ShapePath.prototype.setTripleAt = function(t, e, i, s, r, a, n, o) {
              this.setXYAt(t, e, "v", n, o),
              this.setXYAt(i, s, "o", n, o),
              this.setXYAt(r, a, "i", n, o)
          }
          ,
          ShapePath.prototype.reverse = function() {
              var t = new ShapePath;
              t.setPathData(this.c, this._length);
              var e = this.v
                , i = this.o
                , s = this.i
                , r = 0;
              this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1),
              r = 1);
              var a, n = this._length - 1, o = this._length;
              for (a = r; a < o; a += 1)
                  t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], a, !1),
                  n -= 1;
              return t
          }
          ;
          var shapePool = (factory = poolFactory(4, (function() {
              return new ShapePath
          }
          ), (function(t) {
              var e, i = t._length;
              for (e = 0; e < i; e += 1)
                  pointPool.release(t.v[e]),
                  pointPool.release(t.i[e]),
                  pointPool.release(t.o[e]),
                  t.v[e] = null,
                  t.i[e] = null,
                  t.o[e] = null;
              t._length = 0,
              t.c = !1
          }
          )),
          factory.clone = function(t) {
              var e, i = factory.newElement(), s = void 0 === t._length ? t.v.length : t._length;
              for (i.setLength(s),
              i.c = t.c,
              e = 0; e < s; e += 1)
                  i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
              return i
          }
          ,
          factory), factory;
          function ShapeCollection() {
              this._length = 0,
              this._maxLength = 4,
              this.shapes = createSizedArray(this._maxLength)
          }
          ShapeCollection.prototype.addShape = function(t) {
              this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
              this._maxLength *= 2),
              this.shapes[this._length] = t,
              this._length += 1
          }
          ,
          ShapeCollection.prototype.releaseShapes = function() {
              var t;
              for (t = 0; t < this._length; t += 1)
                  shapePool.release(this.shapes[t]);
              this._length = 0
          }
          ;
          var shapeCollectionPool = (ob = {
              newShapeCollection: function() {
                  return _length ? pool[_length -= 1] : new ShapeCollection
              },
              release: function(t) {
                  var e, i = t._length;
                  for (e = 0; e < i; e += 1)
                      shapePool.release(t.shapes[e]);
                  t._length = 0,
                  _length === _maxLength && (pool = pooling.double(pool),
                  _maxLength *= 2),
                  pool[_length] = t,
                  _length += 1
              }
          },
          _length = 0,
          _maxLength = 4,
          pool = createSizedArray(_maxLength),
          ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
              function t(t, e, i) {
                  var s, r, a, n, o, g, h, l, C, A = i.lastIndex, p = this.keyframes;
                  if (t < p[0].t - this.offsetTime)
                      s = p[0].s[0],
                      a = !0,
                      A = 0;
                  else if (t >= p[p.length - 1].t - this.offsetTime)
                      s = p[p.length - 1].s ? p[p.length - 1].s[0] : p[p.length - 2].e[0],
                      a = !0;
                  else {
                      for (var I, m, c, u = A, f = p.length - 1, d = !0; d && (I = p[u],
                      !((m = p[u + 1]).t - this.offsetTime > t)); )
                          u < f - 1 ? u += 1 : d = !1;
                      if (c = this.keyframesMetadata[u] || {},
                      A = u,
                      !(a = 1 === I.h)) {
                          if (t >= m.t - this.offsetTime)
                              l = 1;
                          else if (t < I.t - this.offsetTime)
                              l = 0;
                          else {
                              var y;
                              c.__fnct ? y = c.__fnct : (y = BezierFactory.getBezierEasing(I.o.x, I.o.y, I.i.x, I.i.y).get,
                              c.__fnct = y),
                              l = y((t - (I.t - this.offsetTime)) / (m.t - this.offsetTime - (I.t - this.offsetTime)))
                          }
                          r = m.s ? m.s[0] : I.e[0]
                      }
                      s = I.s[0]
                  }
                  for (g = e._length,
                  h = s.i[0].length,
                  i.lastIndex = A,
                  n = 0; n < g; n += 1)
                      for (o = 0; o < h; o += 1)
                          C = a ? s.i[n][o] : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * l,
                          e.i[n][o] = C,
                          C = a ? s.o[n][o] : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * l,
                          e.o[n][o] = C,
                          C = a ? s.v[n][o] : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * l,
                          e.v[n][o] = C
              }
              function e() {
                  var t = this.comp.renderedFrame - this.offsetTime
                    , e = this.keyframes[0].t - this.offsetTime
                    , i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                    , s = this._caching.lastFrame;
                  return -999999 !== s && (s < e && t < e || s > i && t > i) || (this._caching.lastIndex = s < t ? this._caching.lastIndex : 0,
                  this.interpolateShape(t, this.pv, this._caching)),
                  this._caching.lastFrame = t,
                  this.pv
              }
              function i() {
                  this.paths = this.localShapeCollection
              }
              function s(t) {
                  (function(t, e) {
                      if (t._length !== e._length || t.c !== e.c)
                          return !1;
                      var i, s = t._length;
                      for (i = 0; i < s; i += 1)
                          if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1])
                              return !1;
                      return !0
                  }
                  )(this.v, t) || (this.v = shapePool.clone(t),
                  this.localShapeCollection.releaseShapes(),
                  this.localShapeCollection.addShape(this.v),
                  this._mdf = !0,
                  this.paths = this.localShapeCollection)
              }
              function r() {
                  if (this.elem.globalData.frameId !== this.frameId)
                      if (this.effectsSequence.length)
                          if (this.lock)
                              this.setVValue(this.pv);
                          else {
                              var t, e;
                              this.lock = !0,
                              this._mdf = !1,
                              t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                              var i = this.effectsSequence.length;
                              for (e = 0; e < i; e += 1)
                                  t = this.effectsSequence[e](t);
                              this.setVValue(t),
                              this.lock = !1,
                              this.frameId = this.elem.globalData.frameId
                          }
                      else
                          this._mdf = !1
              }
              function a(t, e, s) {
                  this.propType = "shape",
                  this.comp = t.comp,
                  this.container = t,
                  this.elem = t,
                  this.data = e,
                  this.k = !1,
                  this.kf = !1,
                  this._mdf = !1;
                  var r = 3 === s ? e.pt.k : e.ks.k;
                  this.v = shapePool.clone(r),
                  this.pv = shapePool.clone(this.v),
                  this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                  this.paths = this.localShapeCollection,
                  this.paths.addShape(this.v),
                  this.reset = i,
                  this.effectsSequence = []
              }
              function n(t) {
                  this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this)
              }
              function o(t, s, r) {
                  this.propType = "shape",
                  this.comp = t.comp,
                  this.elem = t,
                  this.container = t,
                  this.offsetTime = t.data.st,
                  this.keyframes = 3 === r ? s.pt.k : s.ks.k,
                  this.keyframesMetadata = [],
                  this.k = !0,
                  this.kf = !0;
                  var a = this.keyframes[0].s[0].i.length;
                  this.v = shapePool.newElement(),
                  this.v.setPathData(this.keyframes[0].s[0].c, a),
                  this.pv = shapePool.clone(this.v),
                  this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                  this.paths = this.localShapeCollection,
                  this.paths.addShape(this.v),
                  this.lastFrame = -999999,
                  this.reset = i,
                  this._caching = {
                      lastFrame: -999999,
                      lastIndex: 0
                  },
                  this.effectsSequence = [e.bind(this)]
              }
              a.prototype.interpolateShape = t,
              a.prototype.getValue = r,
              a.prototype.setVValue = s,
              a.prototype.addEffect = n,
              o.prototype.getValue = r,
              o.prototype.interpolateShape = t,
              o.prototype.setVValue = s,
              o.prototype.addEffect = n;
              var g = function() {
                  var t = roundCorner;
                  function e(t, e) {
                      this.v = shapePool.newElement(),
                      this.v.setPathData(!0, 4),
                      this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                      this.paths = this.localShapeCollection,
                      this.localShapeCollection.addShape(this.v),
                      this.d = e.d,
                      this.elem = t,
                      this.comp = t.comp,
                      this.frameId = -1,
                      this.initDynamicPropertyContainer(t),
                      this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                      this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                      this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                      this.convertEllToPath())
                  }
                  return e.prototype = {
                      reset: i,
                      getValue: function() {
                          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertEllToPath())
                      },
                      convertEllToPath: function() {
                          var e = this.p.v[0]
                            , i = this.p.v[1]
                            , s = this.s.v[0] / 2
                            , r = this.s.v[1] / 2
                            , a = 3 !== this.d
                            , n = this.v;
                          n.v[0][0] = e,
                          n.v[0][1] = i - r,
                          n.v[1][0] = a ? e + s : e - s,
                          n.v[1][1] = i,
                          n.v[2][0] = e,
                          n.v[2][1] = i + r,
                          n.v[3][0] = a ? e - s : e + s,
                          n.v[3][1] = i,
                          n.i[0][0] = a ? e - s * t : e + s * t,
                          n.i[0][1] = i - r,
                          n.i[1][0] = a ? e + s : e - s,
                          n.i[1][1] = i - r * t,
                          n.i[2][0] = a ? e + s * t : e - s * t,
                          n.i[2][1] = i + r,
                          n.i[3][0] = a ? e - s : e + s,
                          n.i[3][1] = i + r * t,
                          n.o[0][0] = a ? e + s * t : e - s * t,
                          n.o[0][1] = i - r,
                          n.o[1][0] = a ? e + s : e - s,
                          n.o[1][1] = i + r * t,
                          n.o[2][0] = a ? e - s * t : e + s * t,
                          n.o[2][1] = i + r,
                          n.o[3][0] = a ? e - s : e + s,
                          n.o[3][1] = i - r * t
                      }
                  },
                  extendPrototype([DynamicPropertyContainer], e),
                  e
              }()
                , h = function() {
                  function t(t, e) {
                      this.v = shapePool.newElement(),
                      this.v.setPathData(!0, 0),
                      this.elem = t,
                      this.comp = t.comp,
                      this.data = e,
                      this.frameId = -1,
                      this.d = e.d,
                      this.initDynamicPropertyContainer(t),
                      1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this),
                      this.is = PropertyFactory.getProp(t, e.is, 0, .01, this),
                      this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                      this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                      this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                      this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                      this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                      this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                      this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                      this.localShapeCollection.addShape(this.v),
                      this.paths = this.localShapeCollection,
                      this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                      this.convertToPath())
                  }
                  return t.prototype = {
                      reset: i,
                      getValue: function() {
                          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertToPath())
                      },
                      convertStarToPath: function() {
                          var t, e, i, s, r = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / r, n = !0, o = this.or.v, g = this.ir.v, h = this.os.v, l = this.is.v, C = 2 * Math.PI * o / (2 * r), A = 2 * Math.PI * g / (2 * r), p = -Math.PI / 2;
                          p += this.r.v;
                          var I = 3 === this.data.d ? -1 : 1;
                          for (this.v._length = 0,
                          t = 0; t < r; t += 1) {
                              i = n ? h : l,
                              s = n ? C : A;
                              var m = (e = n ? o : g) * Math.cos(p)
                                , c = e * Math.sin(p)
                                , u = 0 === m && 0 === c ? 0 : c / Math.sqrt(m * m + c * c)
                                , f = 0 === m && 0 === c ? 0 : -m / Math.sqrt(m * m + c * c);
                              m += +this.p.v[0],
                              c += +this.p.v[1],
                              this.v.setTripleAt(m, c, m - u * s * i * I, c - f * s * i * I, m + u * s * i * I, c + f * s * i * I, t, !0),
                              n = !n,
                              p += a * I
                          }
                      },
                      convertPolygonToPath: function() {
                          var t, e = Math.floor(this.pt.v), i = 2 * Math.PI / e, s = this.or.v, r = this.os.v, a = 2 * Math.PI * s / (4 * e), n = .5 * -Math.PI, o = 3 === this.data.d ? -1 : 1;
                          for (n += this.r.v,
                          this.v._length = 0,
                          t = 0; t < e; t += 1) {
                              var g = s * Math.cos(n)
                                , h = s * Math.sin(n)
                                , l = 0 === g && 0 === h ? 0 : h / Math.sqrt(g * g + h * h)
                                , C = 0 === g && 0 === h ? 0 : -g / Math.sqrt(g * g + h * h);
                              g += +this.p.v[0],
                              h += +this.p.v[1],
                              this.v.setTripleAt(g, h, g - l * a * r * o, h - C * a * r * o, g + l * a * r * o, h + C * a * r * o, t, !0),
                              n += i * o
                          }
                          this.paths.length = 0,
                          this.paths[0] = this.v
                      }
                  },
                  extendPrototype([DynamicPropertyContainer], t),
                  t
              }()
                , l = function() {
                  function t(t, e) {
                      this.v = shapePool.newElement(),
                      this.v.c = !0,
                      this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                      this.localShapeCollection.addShape(this.v),
                      this.paths = this.localShapeCollection,
                      this.elem = t,
                      this.comp = t.comp,
                      this.frameId = -1,
                      this.d = e.d,
                      this.initDynamicPropertyContainer(t),
                      this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                      this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                      this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                      this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                      this.convertRectToPath())
                  }
                  return t.prototype = {
                      convertRectToPath: function() {
                          var t = this.p.v[0]
                            , e = this.p.v[1]
                            , i = this.s.v[0] / 2
                            , s = this.s.v[1] / 2
                            , r = bmMin(i, s, this.r.v)
                            , a = r * (1 - roundCorner);
                          this.v._length = 0,
                          2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, !0),
                          this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, !0),
                          0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, !0),
                          this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, !0),
                          this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, !0),
                          this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, !0),
                          this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, !0),
                          this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2),
                          this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, !0),
                          0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, !0),
                          this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, !0),
                          this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, !0),
                          this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, !0),
                          this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, !0),
                          this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, !0),
                          this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, !0),
                          this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, !0),
                          this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, !0)))
                      },
                      getValue: function() {
                          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertRectToPath())
                      },
                      reset: i
                  },
                  extendPrototype([DynamicPropertyContainer], t),
                  t
              }();
              var C = {
                  getShapeProp: function(t, e, i) {
                      var s;
                      return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new o(t,e,i) : new a(t,e,i) : 5 === i ? s = new l(t,e) : 6 === i ? s = new g(t,e) : 7 === i && (s = new h(t,e)),
                      s.k && t.addDynamicProperty(s),
                      s
                  },
                  getConstructorFunction: function() {
                      return a
                  },
                  getKeyframedConstructorFunction: function() {
                      return o
                  }
              };
              return C
          }(), Matrix = function() {
              var t = Math.cos
                , e = Math.sin
                , i = Math.tan
                , s = Math.round;
              function r() {
                  return this.props[0] = 1,
                  this.props[1] = 0,
                  this.props[2] = 0,
                  this.props[3] = 0,
                  this.props[4] = 0,
                  this.props[5] = 1,
                  this.props[6] = 0,
                  this.props[7] = 0,
                  this.props[8] = 0,
                  this.props[9] = 0,
                  this.props[10] = 1,
                  this.props[11] = 0,
                  this.props[12] = 0,
                  this.props[13] = 0,
                  this.props[14] = 0,
                  this.props[15] = 1,
                  this
              }
              function a(i) {
                  if (0 === i)
                      return this;
                  var s = t(i)
                    , r = e(i);
                  return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              }
              function n(i) {
                  if (0 === i)
                      return this;
                  var s = t(i)
                    , r = e(i);
                  return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
              }
              function o(i) {
                  if (0 === i)
                      return this;
                  var s = t(i)
                    , r = e(i);
                  return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
              }
              function g(i) {
                  if (0 === i)
                      return this;
                  var s = t(i)
                    , r = e(i);
                  return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              }
              function h(t, e) {
                  return this._t(1, e, t, 1, 0, 0)
              }
              function l(t, e) {
                  return this.shear(i(t), i(e))
              }
              function C(s, r) {
                  var a = t(r)
                    , n = e(r);
                  return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              }
              function A(t, e, i) {
                  return i || 0 === i || (i = 1),
                  1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
              }
              function p(t, e, i, s, r, a, n, o, g, h, l, C, A, p, I, m) {
                  return this.props[0] = t,
                  this.props[1] = e,
                  this.props[2] = i,
                  this.props[3] = s,
                  this.props[4] = r,
                  this.props[5] = a,
                  this.props[6] = n,
                  this.props[7] = o,
                  this.props[8] = g,
                  this.props[9] = h,
                  this.props[10] = l,
                  this.props[11] = C,
                  this.props[12] = A,
                  this.props[13] = p,
                  this.props[14] = I,
                  this.props[15] = m,
                  this
              }
              function I(t, e, i) {
                  return i = i || 0,
                  0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
              }
              function m(t, e, i, s, r, a, n, o, g, h, l, C, A, p, I, m) {
                  var c = this.props;
                  if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === a && 0 === n && 0 === o && 0 === g && 0 === h && 1 === l && 0 === C)
                      return c[12] = c[12] * t + c[15] * A,
                      c[13] = c[13] * a + c[15] * p,
                      c[14] = c[14] * l + c[15] * I,
                      c[15] *= m,
                      this._identityCalculated = !1,
                      this;
                  var u = c[0]
                    , f = c[1]
                    , d = c[2]
                    , y = c[3]
                    , M = c[4]
                    , v = c[5]
                    , D = c[6]
                    , x = c[7]
                    , w = c[8]
                    , E = c[9]
                    , b = c[10]
                    , L = c[11]
                    , _ = c[12]
                    , S = c[13]
                    , T = c[14]
                    , P = c[15];
                  return c[0] = u * t + f * r + d * g + y * A,
                  c[1] = u * e + f * a + d * h + y * p,
                  c[2] = u * i + f * n + d * l + y * I,
                  c[3] = u * s + f * o + d * C + y * m,
                  c[4] = M * t + v * r + D * g + x * A,
                  c[5] = M * e + v * a + D * h + x * p,
                  c[6] = M * i + v * n + D * l + x * I,
                  c[7] = M * s + v * o + D * C + x * m,
                  c[8] = w * t + E * r + b * g + L * A,
                  c[9] = w * e + E * a + b * h + L * p,
                  c[10] = w * i + E * n + b * l + L * I,
                  c[11] = w * s + E * o + b * C + L * m,
                  c[12] = _ * t + S * r + T * g + P * A,
                  c[13] = _ * e + S * a + T * h + P * p,
                  c[14] = _ * i + S * n + T * l + P * I,
                  c[15] = _ * s + S * o + T * C + P * m,
                  this._identityCalculated = !1,
                  this
              }
              function c() {
                  return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]),
                  this._identityCalculated = !0),
                  this._identity
              }
              function u(t) {
                  for (var e = 0; e < 16; ) {
                      if (t.props[e] !== this.props[e])
                          return !1;
                      e += 1
                  }
                  return !0
              }
              function f(t) {
                  var e;
                  for (e = 0; e < 16; e += 1)
                      t.props[e] = this.props[e];
                  return t
              }
              function d(t) {
                  var e;
                  for (e = 0; e < 16; e += 1)
                      this.props[e] = t[e]
              }
              function y(t, e, i) {
                  return {
                      x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                      y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                      z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                  }
              }
              function M(t, e, i) {
                  return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
              }
              function v(t, e, i) {
                  return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
              }
              function D(t, e, i) {
                  return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
              }
              function x() {
                  var t = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                    , e = this.props[5] / t
                    , i = -this.props[1] / t
                    , s = -this.props[4] / t
                    , r = this.props[0] / t
                    , a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t
                    , n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t
                    , o = new Matrix;
                  return o.props[0] = e,
                  o.props[1] = i,
                  o.props[4] = s,
                  o.props[5] = r,
                  o.props[12] = a,
                  o.props[13] = n,
                  o
              }
              function w(t) {
                  return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
              }
              function E(t) {
                  var e, i = t.length, s = [];
                  for (e = 0; e < i; e += 1)
                      s[e] = w(t[e]);
                  return s
              }
              function b(t, e, i) {
                  var s = createTypedArray("float32", 6);
                  if (this.isIdentity())
                      s[0] = t[0],
                      s[1] = t[1],
                      s[2] = e[0],
                      s[3] = e[1],
                      s[4] = i[0],
                      s[5] = i[1];
                  else {
                      var r = this.props[0]
                        , a = this.props[1]
                        , n = this.props[4]
                        , o = this.props[5]
                        , g = this.props[12]
                        , h = this.props[13];
                      s[0] = t[0] * r + t[1] * n + g,
                      s[1] = t[0] * a + t[1] * o + h,
                      s[2] = e[0] * r + e[1] * n + g,
                      s[3] = e[0] * a + e[1] * o + h,
                      s[4] = i[0] * r + i[1] * n + g,
                      s[5] = i[0] * a + i[1] * o + h
                  }
                  return s
              }
              function L(t, e, i) {
                  return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
              }
              function _(t, e) {
                  if (this.isIdentity())
                      return t + "," + e;
                  var i = this.props;
                  return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
              }
              function S() {
                  for (var t = 0, e = this.props, i = "matrix3d("; t < 16; )
                      i += s(1e4 * e[t]) / 1e4,
                      i += 15 === t ? ")" : ",",
                      t += 1;
                  return i
              }
              function T(t) {
                  return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(1e4 * t) / 1e4 : t
              }
              function P() {
                  var t = this.props;
                  return "matrix(" + T(t[0]) + "," + T(t[1]) + "," + T(t[4]) + "," + T(t[5]) + "," + T(t[12]) + "," + T(t[13]) + ")"
              }
              return function() {
                  this.reset = r,
                  this.rotate = a,
                  this.rotateX = n,
                  this.rotateY = o,
                  this.rotateZ = g,
                  this.skew = l,
                  this.skewFromAxis = C,
                  this.shear = h,
                  this.scale = A,
                  this.setTransform = p,
                  this.translate = I,
                  this.transform = m,
                  this.applyToPoint = y,
                  this.applyToX = M,
                  this.applyToY = v,
                  this.applyToZ = D,
                  this.applyToPointArray = L,
                  this.applyToTriplePoints = b,
                  this.applyToPointStringified = _,
                  this.toCSS = S,
                  this.to2dCSS = P,
                  this.clone = f,
                  this.cloneFromProps = d,
                  this.equals = u,
                  this.inversePoints = E,
                  this.inversePoint = w,
                  this.getInverseMatrix = x,
                  this._t = this.transform,
                  this.isIdentity = c,
                  this._identity = !0,
                  this._identityCalculated = !1,
                  this.props = createTypedArray("float32", 16),
                  this.reset()
              }
          }();
          function _typeof$3(t) {
              return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          var lottie = {}
            , standalone = "__[STANDALONE]__"
            , animationData = "__[ANIMATIONDATA]__"
            , renderer = "";
          function setLocation(t) {
              setLocationHref(t)
          }
          function searchAnimations() {
              !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
          }
          function setSubframeRendering(t) {
              setSubframeEnabled(t)
          }
          function setPrefix(t) {
              setIdPrefix(t)
          }
          function loadAnimation(t) {
              return !0 === standalone && (t.animationData = JSON.parse(animationData)),
              animationManager.loadAnimation(t)
          }
          function setQuality(t) {
              if ("string" == typeof t)
                  switch (t) {
                  case "high":
                      setDefaultCurveSegments(200);
                      break;
                  default:
                  case "medium":
                      setDefaultCurveSegments(50);
                      break;
                  case "low":
                      setDefaultCurveSegments(10)
                  }
              else
                  !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
              getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
          }
          function inBrowser() {
              return "undefined" != typeof navigator
          }
          function installPlugin(t, e) {
              "expressions" === t && setExpressionsPlugin(e)
          }
          function getFactory(t) {
              switch (t) {
              case "propertyFactory":
                  return PropertyFactory;
              case "shapePropertyFactory":
                  return ShapePropertyFactory;
              case "matrix":
                  return Matrix;
              default:
                  return null
              }
          }
          function checkReady() {
              "complete" === document.readyState && (clearInterval(readyStateCheckInterval),
              searchAnimations())
          }
          function getQueryVariable(t) {
              for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                  var s = e[i].split("=");
                  if (decodeURIComponent(s[0]) == t)
                      return decodeURIComponent(s[1])
              }
              return null
          }
          lottie.play = animationManager.play,
          lottie.pause = animationManager.pause,
          lottie.setLocationHref = setLocation,
          lottie.togglePause = animationManager.togglePause,
          lottie.setSpeed = animationManager.setSpeed,
          lottie.setDirection = animationManager.setDirection,
          lottie.stop = animationManager.stop,
          lottie.searchAnimations = searchAnimations,
          lottie.registerAnimation = animationManager.registerAnimation,
          lottie.loadAnimation = loadAnimation,
          lottie.setSubframeRendering = setSubframeRendering,
          lottie.resize = animationManager.resize,
          lottie.goToAndStop = animationManager.goToAndStop,
          lottie.destroy = animationManager.destroy,
          lottie.setQuality = setQuality,
          lottie.inBrowser = inBrowser,
          lottie.installPlugin = installPlugin,
          lottie.freeze = animationManager.freeze,
          lottie.unfreeze = animationManager.unfreeze,
          lottie.setVolume = animationManager.setVolume,
          lottie.mute = animationManager.mute,
          lottie.unmute = animationManager.unmute,
          lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
          lottie.useWebWorker = setWebWorker,
          lottie.setIDPrefix = setPrefix,
          lottie.__getFactory = getFactory,
          lottie.version = "5.9.6";
          var queryString = "";
          if (standalone) {
              var scripts = document.getElementsByTagName("script")
                , index = scripts.length - 1
                , myScript = scripts[index] || {
                  src: ""
              };
              queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "",
              renderer = getQueryVariable("renderer")
          }
          var readyStateCheckInterval = setInterval(checkReady, 100);
          try {
              "object" === _typeof$3(exports) && void 0 !== module || __webpack_require__(189) || (window.bodymovin = lottie)
          } catch (t) {}
          var ShapeModifiers = function() {
              var t = {}
                , e = {};
              return t.registerModifier = function(t, i) {
                  e[t] || (e[t] = i)
              }
              ,
              t.getModifier = function(t, i, s) {
                  return new e[t](i,s)
              }
              ,
              t
          }();
          function ShapeModifier() {}
          function TrimModifier() {}
          function PuckerAndBloatModifier() {}
          ShapeModifier.prototype.initModifierProperties = function() {}
          ,
          ShapeModifier.prototype.addShapeToModifier = function() {}
          ,
          ShapeModifier.prototype.addShape = function(t) {
              if (!this.closed) {
                  t.sh.container.addDynamicProperty(t.sh);
                  var e = {
                      shape: t.sh,
                      data: t,
                      localShapeCollection: shapeCollectionPool.newShapeCollection()
                  };
                  this.shapes.push(e),
                  this.addShapeToModifier(e),
                  this._isAnimated && t.setAsAnimated()
              }
          }
          ,
          ShapeModifier.prototype.init = function(t, e) {
              this.shapes = [],
              this.elem = t,
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e),
              this.frameId = initialDefaultFrame,
              this.closed = !1,
              this.k = !1,
              this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
          }
          ,
          ShapeModifier.prototype.processKeys = function() {
              this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
              this.iterateDynamicProperties())
          }
          ,
          extendPrototype([DynamicPropertyContainer], ShapeModifier),
          extendPrototype([ShapeModifier], TrimModifier),
          TrimModifier.prototype.initModifierProperties = function(t, e) {
              this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
              this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
              this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
              this.sValue = 0,
              this.eValue = 0,
              this.getValue = this.processKeys,
              this.m = e.m,
              this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
          }
          ,
          TrimModifier.prototype.addShapeToModifier = function(t) {
              t.pathsData = []
          }
          ,
          TrimModifier.prototype.calculateShapeEdges = function(t, e, i, s, r) {
              var a = [];
              e <= 1 ? a.push({
                  s: t,
                  e: e
              }) : t >= 1 ? a.push({
                  s: t - 1,
                  e: e - 1
              }) : (a.push({
                  s: t,
                  e: 1
              }),
              a.push({
                  s: 0,
                  e: e - 1
              }));
              var n, o, g = [], h = a.length;
              for (n = 0; n < h; n += 1) {
                  var l, C;
                  if (!((o = a[n]).e * r < s || o.s * r > s + i))
                      l = o.s * r <= s ? 0 : (o.s * r - s) / i,
                      C = o.e * r >= s + i ? 1 : (o.e * r - s) / i,
                      g.push([l, C])
              }
              return g.length || g.push([0, 0]),
              g
          }
          ,
          TrimModifier.prototype.releasePathsData = function(t) {
              var e, i = t.length;
              for (e = 0; e < i; e += 1)
                  segmentsLengthPool.release(t[e]);
              return t.length = 0,
              t
          }
          ,
          TrimModifier.prototype.processShapes = function(t) {
              var e, i, s, r;
              if (this._mdf || t) {
                  var a = this.o.v % 360 / 360;
                  if (a < 0 && (a += 1),
                  (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                      var n = e;
                      e = i,
                      i = n
                  }
                  e = 1e-4 * Math.round(1e4 * e),
                  i = 1e-4 * Math.round(1e4 * i),
                  this.sValue = e,
                  this.eValue = i
              } else
                  e = this.sValue,
                  i = this.eValue;
              var o, g, h, l, C, A = this.shapes.length, p = 0;
              if (i === e)
                  for (r = 0; r < A; r += 1)
                      this.shapes[r].localShapeCollection.releaseShapes(),
                      this.shapes[r].shape._mdf = !0,
                      this.shapes[r].shape.paths = this.shapes[r].localShapeCollection,
                      this._mdf && (this.shapes[r].pathsData.length = 0);
              else if (1 === i && 0 === e || 0 === i && 1 === e) {
                  if (this._mdf)
                      for (r = 0; r < A; r += 1)
                          this.shapes[r].pathsData.length = 0,
                          this.shapes[r].shape._mdf = !0
              } else {
                  var I, m, c = [];
                  for (r = 0; r < A; r += 1)
                      if ((I = this.shapes[r]).shape._mdf || this._mdf || t || 2 === this.m) {
                          if (g = (s = I.shape.paths)._length,
                          C = 0,
                          !I.shape._mdf && I.pathsData.length)
                              C = I.totalShapeLength;
                          else {
                              for (h = this.releasePathsData(I.pathsData),
                              o = 0; o < g; o += 1)
                                  l = bez.getSegmentsLength(s.shapes[o]),
                                  h.push(l),
                                  C += l.totalLength;
                              I.totalShapeLength = C,
                              I.pathsData = h
                          }
                          p += C,
                          I.shape._mdf = !0
                      } else
                          I.shape.paths = I.localShapeCollection;
                  var u, f = e, d = i, y = 0;
                  for (r = A - 1; r >= 0; r -= 1)
                      if ((I = this.shapes[r]).shape._mdf) {
                          for ((m = I.localShapeCollection).releaseShapes(),
                          2 === this.m && A > 1 ? (u = this.calculateShapeEdges(e, i, I.totalShapeLength, y, p),
                          y += I.totalShapeLength) : u = [[f, d]],
                          g = u.length,
                          o = 0; o < g; o += 1) {
                              f = u[o][0],
                              d = u[o][1],
                              c.length = 0,
                              d <= 1 ? c.push({
                                  s: I.totalShapeLength * f,
                                  e: I.totalShapeLength * d
                              }) : f >= 1 ? c.push({
                                  s: I.totalShapeLength * (f - 1),
                                  e: I.totalShapeLength * (d - 1)
                              }) : (c.push({
                                  s: I.totalShapeLength * f,
                                  e: I.totalShapeLength
                              }),
                              c.push({
                                  s: 0,
                                  e: I.totalShapeLength * (d - 1)
                              }));
                              var M = this.addShapes(I, c[0]);
                              if (c[0].s !== c[0].e) {
                                  if (c.length > 1)
                                      if (I.shape.paths.shapes[I.shape.paths._length - 1].c) {
                                          var v = M.pop();
                                          this.addPaths(M, m),
                                          M = this.addShapes(I, c[1], v)
                                      } else
                                          this.addPaths(M, m),
                                          M = this.addShapes(I, c[1]);
                                  this.addPaths(M, m)
                              }
                          }
                          I.shape.paths = m
                      }
              }
          }
          ,
          TrimModifier.prototype.addPaths = function(t, e) {
              var i, s = t.length;
              for (i = 0; i < s; i += 1)
                  e.addShape(t[i])
          }
          ,
          TrimModifier.prototype.addSegment = function(t, e, i, s, r, a, n) {
              r.setXYAt(e[0], e[1], "o", a),
              r.setXYAt(i[0], i[1], "i", a + 1),
              n && r.setXYAt(t[0], t[1], "v", a),
              r.setXYAt(s[0], s[1], "v", a + 1)
          }
          ,
          TrimModifier.prototype.addSegmentFromArray = function(t, e, i, s) {
              e.setXYAt(t[1], t[5], "o", i),
              e.setXYAt(t[2], t[6], "i", i + 1),
              s && e.setXYAt(t[0], t[4], "v", i),
              e.setXYAt(t[3], t[7], "v", i + 1)
          }
          ,
          TrimModifier.prototype.addShapes = function(t, e, i) {
              var s, r, a, n, o, g, h, l, C = t.pathsData, A = t.shape.paths.shapes, p = t.shape.paths._length, I = 0, m = [], c = !0;
              for (i ? (o = i._length,
              l = i._length) : (i = shapePool.newElement(),
              o = 0,
              l = 0),
              m.push(i),
              s = 0; s < p; s += 1) {
                  for (g = C[s].lengths,
                  i.c = A[s].c,
                  a = A[s].c ? g.length : g.length + 1,
                  r = 1; r < a; r += 1)
                      if (I + (n = g[r - 1]).addedLength < e.s)
                          I += n.addedLength,
                          i.c = !1;
                      else {
                          if (I > e.e) {
                              i.c = !1;
                              break
                          }
                          e.s <= I && e.e >= I + n.addedLength ? (this.addSegment(A[s].v[r - 1], A[s].o[r - 1], A[s].i[r], A[s].v[r], i, o, c),
                          c = !1) : (h = bez.getNewSegment(A[s].v[r - 1], A[s].v[r], A[s].o[r - 1], A[s].i[r], (e.s - I) / n.addedLength, (e.e - I) / n.addedLength, g[r - 1]),
                          this.addSegmentFromArray(h, i, o, c),
                          c = !1,
                          i.c = !1),
                          I += n.addedLength,
                          o += 1
                      }
                  if (A[s].c && g.length) {
                      if (n = g[r - 1],
                      I <= e.e) {
                          var u = g[r - 1].addedLength;
                          e.s <= I && e.e >= I + u ? (this.addSegment(A[s].v[r - 1], A[s].o[r - 1], A[s].i[0], A[s].v[0], i, o, c),
                          c = !1) : (h = bez.getNewSegment(A[s].v[r - 1], A[s].v[0], A[s].o[r - 1], A[s].i[0], (e.s - I) / u, (e.e - I) / u, g[r - 1]),
                          this.addSegmentFromArray(h, i, o, c),
                          c = !1,
                          i.c = !1)
                      } else
                          i.c = !1;
                      I += n.addedLength,
                      o += 1
                  }
                  if (i._length && (i.setXYAt(i.v[l][0], i.v[l][1], "i", l),
                  i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)),
                  I > e.e)
                      break;
                  s < p - 1 && (i = shapePool.newElement(),
                  c = !0,
                  m.push(i),
                  o = 0)
              }
              return m
          }
          ,
          extendPrototype([ShapeModifier], PuckerAndBloatModifier),
          PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys,
              this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
              this._isAnimated = !!this.amount.effectsSequence.length
          }
          ,
          PuckerAndBloatModifier.prototype.processPath = function(t, e) {
              var i = e / 100
                , s = [0, 0]
                , r = t._length
                , a = 0;
              for (a = 0; a < r; a += 1)
                  s[0] += t.v[a][0],
                  s[1] += t.v[a][1];
              s[0] /= r,
              s[1] /= r;
              var n, o, g, h, l, C, A = shapePool.newElement();
              for (A.c = t.c,
              a = 0; a < r; a += 1)
                  n = t.v[a][0] + (s[0] - t.v[a][0]) * i,
                  o = t.v[a][1] + (s[1] - t.v[a][1]) * i,
                  g = t.o[a][0] + (s[0] - t.o[a][0]) * -i,
                  h = t.o[a][1] + (s[1] - t.o[a][1]) * -i,
                  l = t.i[a][0] + (s[0] - t.i[a][0]) * -i,
                  C = t.i[a][1] + (s[1] - t.i[a][1]) * -i,
                  A.setTripleAt(n, o, g, h, l, C, a);
              return A
          }
          ,
          PuckerAndBloatModifier.prototype.processShapes = function(t) {
              var e, i, s, r, a, n, o = this.shapes.length, g = this.amount.v;
              if (0 !== g)
                  for (i = 0; i < o; i += 1) {
                      if (n = (a = this.shapes[i]).localShapeCollection,
                      a.shape._mdf || this._mdf || t)
                          for (n.releaseShapes(),
                          a.shape._mdf = !0,
                          e = a.shape.paths.shapes,
                          r = a.shape.paths._length,
                          s = 0; s < r; s += 1)
                              n.addShape(this.processPath(e[s], g));
                      a.shape.paths = a.localShapeCollection
                  }
              this.dynamicProperties.length || (this._mdf = !1)
          }
          ;
          var TransformPropertyFactory = function() {
              var t = [0, 0];
              function e(t, e, i) {
                  if (this.elem = t,
                  this.frameId = -1,
                  this.propType = "transform",
                  this.data = e,
                  this.v = new Matrix,
                  this.pre = new Matrix,
                  this.appliedTransformations = 0,
                  this.initDynamicPropertyContainer(i || t),
                  e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this),
                  this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this),
                  e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                      k: [0, 0, 0]
                  }, 1, 0, this),
                  e.rx) {
                      if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this),
                      this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this),
                      this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this),
                      e.or.k[0].ti) {
                          var s, r = e.or.k.length;
                          for (s = 0; s < r; s += 1)
                              e.or.k[s].to = null,
                              e.or.k[s].ti = null
                      }
                      this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                      this.or.sh = !0
                  } else
                      this.r = PropertyFactory.getProp(t, e.r || {
                          k: 0
                      }, 0, degToRads, this);
                  e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this),
                  this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
                  this.a = PropertyFactory.getProp(t, e.a || {
                      k: [0, 0, 0]
                  }, 1, 0, this),
                  this.s = PropertyFactory.getProp(t, e.s || {
                      k: [100, 100, 100]
                  }, 1, .01, this),
                  e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                      _mdf: !1,
                      v: 1
                  },
                  this._isDirty = !0,
                  this.dynamicProperties.length || this.getValue(!0)
              }
              return e.prototype = {
                  applyToMatrix: function(t) {
                      var e = this._mdf;
                      this.iterateDynamicProperties(),
                      this._mdf = this._mdf || e,
                      this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                      this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                  },
                  getValue: function(e) {
                      if (this.elem.globalData.frameId !== this.frameId) {
                          if (this._isDirty && (this.precalculateMatrix(),
                          this._isDirty = !1),
                          this.iterateDynamicProperties(),
                          this._mdf || e) {
                              var i;
                              if (this.v.cloneFromProps(this.pre.props),
                              this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                              this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                              this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                              this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                              this.autoOriented) {
                                  var s, r;
                                  if (i = this.elem.globalData.frameRate,
                                  this.p && this.p.keyframes && this.p.getValueAtTime)
                                      this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0),
                                      r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0),
                                      r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv,
                                      r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                      s = [],
                                      r = [];
                                      var a = this.px
                                        , n = this.py;
                                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (s[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0),
                                      s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0),
                                      r[0] = a.getValueAtTime(a.keyframes[0].t / i, 0),
                                      r[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (s[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0),
                                      s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0),
                                      r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0),
                                      r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [a.pv, n.pv],
                                      r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime),
                                      r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                  } else
                                      s = r = t;
                                  this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                              }
                              this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                          }
                          this.frameId = this.elem.globalData.frameId
                      }
                  },
                  precalculateMatrix: function() {
                      if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      this.appliedTransformations = 1,
                      !this.s.effectsSequence.length)) {
                          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.appliedTransformations = 2,
                          this.sk) {
                              if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                                  return;
                              this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                              this.appliedTransformations = 3
                          }
                          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v),
                          this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                          this.appliedTransformations = 4)
                      }
                  },
                  autoOrient: function() {}
              },
              extendPrototype([DynamicPropertyContainer], e),
              e.prototype.addDynamicProperty = function(t) {
                  this._addDynamicProperty(t),
                  this.elem.addDynamicProperty(t),
                  this._isDirty = !0
              }
              ,
              e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty,
              {
                  getTransformProperty: function(t, i, s) {
                      return new e(t,i,s)
                  }
              }
          }();
          function RepeaterModifier() {}
          function RoundCornersModifier() {}
          function getFontProperties(t) {
              for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", r = e.length, a = 0; a < r; a += 1)
                  switch (e[a].toLowerCase()) {
                  case "italic":
                      s = "italic";
                      break;
                  case "bold":
                      i = "700";
                      break;
                  case "black":
                      i = "900";
                      break;
                  case "medium":
                      i = "500";
                      break;
                  case "regular":
                  case "normal":
                      i = "400";
                      break;
                  case "light":
                  case "thin":
                      i = "200"
                  }
              return {
                  style: s,
                  weight: t.fWeight || i
              }
          }
          extendPrototype([ShapeModifier], RepeaterModifier),
          RepeaterModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys,
              this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
              this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
              this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
              this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
              this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
              this.data = e,
              this.dynamicProperties.length || this.getValue(!0),
              this._isAnimated = !!this.dynamicProperties.length,
              this.pMatrix = new Matrix,
              this.rMatrix = new Matrix,
              this.sMatrix = new Matrix,
              this.tMatrix = new Matrix,
              this.matrix = new Matrix
          }
          ,
          RepeaterModifier.prototype.applyTransforms = function(t, e, i, s, r, a) {
              var n = a ? -1 : 1
                , o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r)
                , g = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
              t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]),
              e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
              e.rotate(-s.r.v * n * r),
              e.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
              i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
              i.scale(a ? 1 / o : o, a ? 1 / g : g),
              i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
          }
          ,
          RepeaterModifier.prototype.init = function(t, e, i, s) {
              for (this.elem = t,
              this.arr = e,
              this.pos = i,
              this.elemsData = s,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e[i]); i > 0; )
                  i -= 1,
                  this._elements.unshift(e[i]);
              this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
          }
          ,
          RepeaterModifier.prototype.resetElements = function(t) {
              var e, i = t.length;
              for (e = 0; e < i; e += 1)
                  t[e]._processed = !1,
                  "gr" === t[e].ty && this.resetElements(t[e].it)
          }
          ,
          RepeaterModifier.prototype.cloneElements = function(t) {
              var e = JSON.parse(JSON.stringify(t));
              return this.resetElements(e),
              e
          }
          ,
          RepeaterModifier.prototype.changeGroupRender = function(t, e) {
              var i, s = t.length;
              for (i = 0; i < s; i += 1)
                  t[i]._render = e,
                  "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
          }
          ,
          RepeaterModifier.prototype.processShapes = function(t) {
              var e, i, s, r, a, n = !1;
              if (this._mdf || t) {
                  var o, g = Math.ceil(this.c.v);
                  if (this._groups.length < g) {
                      for (; this._groups.length < g; ) {
                          var h = {
                              it: this.cloneElements(this._elements),
                              ty: "gr"
                          };
                          h.it.push({
                              a: {
                                  a: 0,
                                  ix: 1,
                                  k: [0, 0]
                              },
                              nm: "Transform",
                              o: {
                                  a: 0,
                                  ix: 7,
                                  k: 100
                              },
                              p: {
                                  a: 0,
                                  ix: 2,
                                  k: [0, 0]
                              },
                              r: {
                                  a: 1,
                                  ix: 6,
                                  k: [{
                                      s: 0,
                                      e: 0,
                                      t: 0
                                  }, {
                                      s: 0,
                                      e: 0,
                                      t: 1
                                  }]
                              },
                              s: {
                                  a: 0,
                                  ix: 3,
                                  k: [100, 100]
                              },
                              sa: {
                                  a: 0,
                                  ix: 5,
                                  k: 0
                              },
                              sk: {
                                  a: 0,
                                  ix: 4,
                                  k: 0
                              },
                              ty: "tr"
                          }),
                          this.arr.splice(0, 0, h),
                          this._groups.splice(0, 0, h),
                          this._currentCopies += 1
                      }
                      this.elem.reloadShapes(),
                      n = !0
                  }
                  for (a = 0,
                  s = 0; s <= this._groups.length - 1; s += 1) {
                      if (o = a < g,
                      this._groups[s]._render = o,
                      this.changeGroupRender(this._groups[s].it, o),
                      !o) {
                          var l = this.elemsData[s].it
                            , C = l[l.length - 1];
                          0 !== C.transform.op.v ? (C.transform.op._mdf = !0,
                          C.transform.op.v = 0) : C.transform.op._mdf = !1
                      }
                      a += 1
                  }
                  this._currentCopies = g;
                  var A = this.o.v
                    , p = A % 1
                    , I = A > 0 ? Math.floor(A) : Math.ceil(A)
                    , m = this.pMatrix.props
                    , c = this.rMatrix.props
                    , u = this.sMatrix.props;
                  this.pMatrix.reset(),
                  this.rMatrix.reset(),
                  this.sMatrix.reset(),
                  this.tMatrix.reset(),
                  this.matrix.reset();
                  var f, d, y = 0;
                  if (A > 0) {
                      for (; y < I; )
                          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                          y += 1;
                      p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1),
                      y += p)
                  } else if (A < 0) {
                      for (; y > I; )
                          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                          y -= 1;
                      p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0),
                      y -= p)
                  }
                  for (s = 1 === this.data.m ? 0 : this._currentCopies - 1,
                  r = 1 === this.data.m ? 1 : -1,
                  a = this._currentCopies; a; ) {
                      if (d = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length,
                      e[e.length - 1].transform.mProps._mdf = !0,
                      e[e.length - 1].transform.op._mdf = !0,
                      e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)),
                      0 !== y) {
                          for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                          this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]),
                          this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]),
                          this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]),
                          f = 0; f < d; f += 1)
                              i[f] = this.matrix.props[f];
                          this.matrix.reset()
                      } else
                          for (this.matrix.reset(),
                          f = 0; f < d; f += 1)
                              i[f] = this.matrix.props[f];
                      y += 1,
                      a -= 1,
                      s += r
                  }
              } else
                  for (a = this._currentCopies,
                  s = 0,
                  r = 1; a; )
                      i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props,
                      e[e.length - 1].transform.mProps._mdf = !1,
                      e[e.length - 1].transform.op._mdf = !1,
                      a -= 1,
                      s += r;
              return n
          }
          ,
          RepeaterModifier.prototype.addShape = function() {}
          ,
          extendPrototype([ShapeModifier], RoundCornersModifier),
          RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys,
              this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
              this._isAnimated = !!this.rd.effectsSequence.length
          }
          ,
          RoundCornersModifier.prototype.processPath = function(t, e) {
              var i, s = shapePool.newElement();
              s.c = t.c;
              var r, a, n, o, g, h, l, C, A, p, I, m, c = t._length, u = 0;
              for (i = 0; i < c; i += 1)
                  r = t.v[i],
                  n = t.o[i],
                  a = t.i[i],
                  r[0] === n[0] && r[1] === n[1] && r[0] === a[0] && r[1] === a[1] ? 0 !== i && i !== c - 1 || t.c ? (o = 0 === i ? t.v[c - 1] : t.v[i - 1],
                  h = (g = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(g / 2, e) / g : 0,
                  l = I = r[0] + (o[0] - r[0]) * h,
                  C = m = r[1] - (r[1] - o[1]) * h,
                  A = l - (l - r[0]) * roundCorner,
                  p = C - (C - r[1]) * roundCorner,
                  s.setTripleAt(l, C, A, p, I, m, u),
                  u += 1,
                  o = i === c - 1 ? t.v[0] : t.v[i + 1],
                  h = (g = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(g / 2, e) / g : 0,
                  l = A = r[0] + (o[0] - r[0]) * h,
                  C = p = r[1] + (o[1] - r[1]) * h,
                  I = l - (l - r[0]) * roundCorner,
                  m = C - (C - r[1]) * roundCorner,
                  s.setTripleAt(l, C, A, p, I, m, u),
                  u += 1) : (s.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], u),
                  u += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], u),
                  u += 1);
              return s
          }
          ,
          RoundCornersModifier.prototype.processShapes = function(t) {
              var e, i, s, r, a, n, o = this.shapes.length, g = this.rd.v;
              if (0 !== g)
                  for (i = 0; i < o; i += 1) {
                      if (n = (a = this.shapes[i]).localShapeCollection,
                      a.shape._mdf || this._mdf || t)
                          for (n.releaseShapes(),
                          a.shape._mdf = !0,
                          e = a.shape.paths.shapes,
                          r = a.shape.paths._length,
                          s = 0; s < r; s += 1)
                              n.addShape(this.processPath(e[s], g));
                      a.shape.paths = a.localShapeCollection
                  }
              this.dynamicProperties.length || (this._mdf = !1)
          }
          ;
          var FontManager = function() {
              var t = {
                  w: 0,
                  size: 0,
                  shapes: [],
                  data: {
                      shapes: []
                  }
              }
                , e = [];
              e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
              var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"]
                , s = [65039, 8205];
              function r(t, e) {
                  var i = createTag("span");
                  i.setAttribute("aria-hidden", !0),
                  i.style.fontFamily = e;
                  var s = createTag("span");
                  s.innerText = "giItT1WQy@!-/#",
                  i.style.position = "absolute",
                  i.style.left = "-10000px",
                  i.style.top = "-10000px",
                  i.style.fontSize = "300px",
                  i.style.fontVariant = "normal",
                  i.style.fontStyle = "normal",
                  i.style.fontWeight = "normal",
                  i.style.letterSpacing = "0",
                  i.appendChild(s),
                  document.body.appendChild(i);
                  var r = s.offsetWidth;
                  return s.style.fontFamily = function(t) {
                      var e, i = t.split(","), s = i.length, r = [];
                      for (e = 0; e < s; e += 1)
                          "sans-serif" !== i[e] && "monospace" !== i[e] && r.push(i[e]);
                      return r.join(",")
                  }(t) + ", " + e,
                  {
                      node: s,
                      w: r,
                      parent: i
                  }
              }
              function a(t, e) {
                  var i, s = document.body && e ? "svg" : "canvas", r = getFontProperties(t);
                  if ("svg" === s) {
                      var a = createNS("text");
                      a.style.fontSize = "100px",
                      a.setAttribute("font-family", t.fFamily),
                      a.setAttribute("font-style", r.style),
                      a.setAttribute("font-weight", r.weight),
                      a.textContent = "1",
                      t.fClass ? (a.style.fontFamily = "inherit",
                      a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily,
                      e.appendChild(a),
                      i = a
                  } else {
                      var n = new OffscreenCanvas(500,500).getContext("2d");
                      n.font = r.style + " " + r.weight + " 100px " + t.fFamily,
                      i = n
                  }
                  return {
                      measureText: function(t) {
                          return "svg" === s ? (i.textContent = t,
                          i.getComputedTextLength()) : i.measureText(t).width
                      }
                  }
              }
              var n = function() {
                  this.fonts = [],
                  this.chars = null,
                  this.typekitLoaded = 0,
                  this.isLoaded = !1,
                  this._warned = !1,
                  this.initTime = Date.now(),
                  this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                  this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
              };
              return n.isModifier = function(t, e) {
                  var s = t.toString(16) + e.toString(16);
                  return -1 !== i.indexOf(s)
              }
              ,
              n.isZeroWidthJoiner = function(t, e) {
                  return e ? t === s[0] && e === s[1] : t === s[1]
              }
              ,
              n.isCombinedCharacter = function(t) {
                  return -1 !== e.indexOf(t)
              }
              ,
              n.prototype = {
                  addChars: function(t) {
                      if (t) {
                          var e;
                          this.chars || (this.chars = []);
                          var i, s, r = t.length, a = this.chars.length;
                          for (e = 0; e < r; e += 1) {
                              for (i = 0,
                              s = !1; i < a; )
                                  this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0),
                                  i += 1;
                              s || (this.chars.push(t[e]),
                              a += 1)
                          }
                      }
                  },
                  addFonts: function(t, e) {
                      if (t) {
                          if (this.chars)
                              return this.isLoaded = !0,
                              void (this.fonts = t.list);
                          if (!document.body)
                              return this.isLoaded = !0,
                              t.list.forEach((function(t) {
                                  t.helper = a(t),
                                  t.cache = {}
                              }
                              )),
                              void (this.fonts = t.list);
                          var i, s = t.list, n = s.length, o = n;
                          for (i = 0; i < n; i += 1) {
                              var g, h, l = !0;
                              if (s[i].loaded = !1,
                              s[i].monoCase = r(s[i].fFamily, "monospace"),
                              s[i].sansCase = r(s[i].fFamily, "sans-serif"),
                              s[i].fPath) {
                                  if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                                      if ((g = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (l = !1),
                                      l) {
                                          var C = createTag("style");
                                          C.setAttribute("f-forigin", s[i].fOrigin),
                                          C.setAttribute("f-origin", s[i].origin),
                                          C.setAttribute("f-family", s[i].fFamily),
                                          C.type = "text/css",
                                          C.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}",
                                          e.appendChild(C)
                                      }
                                  } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                                      for (g = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                                      h = 0; h < g.length; h += 1)
                                          -1 !== g[h].href.indexOf(s[i].fPath) && (l = !1);
                                      if (l) {
                                          var A = createTag("link");
                                          A.setAttribute("f-forigin", s[i].fOrigin),
                                          A.setAttribute("f-origin", s[i].origin),
                                          A.type = "text/css",
                                          A.rel = "stylesheet",
                                          A.href = s[i].fPath,
                                          document.body.appendChild(A)
                                      }
                                  } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                                      for (g = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                                      h = 0; h < g.length; h += 1)
                                          s[i].fPath === g[h].src && (l = !1);
                                      if (l) {
                                          var p = createTag("link");
                                          p.setAttribute("f-forigin", s[i].fOrigin),
                                          p.setAttribute("f-origin", s[i].origin),
                                          p.setAttribute("rel", "stylesheet"),
                                          p.setAttribute("href", s[i].fPath),
                                          e.appendChild(p)
                                      }
                                  }
                              } else
                                  s[i].loaded = !0,
                                  o -= 1;
                              s[i].helper = a(s[i], e),
                              s[i].cache = {},
                              this.fonts.push(s[i])
                          }
                          0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                      } else
                          this.isLoaded = !0
                  },
                  getCharData: function(e, i, s) {
                      for (var r = 0, a = this.chars.length; r < a; ) {
                          if (this.chars[r].ch === e && this.chars[r].style === i && this.chars[r].fFamily === s)
                              return this.chars[r];
                          r += 1
                      }
                      return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0,
                      console.warn("Missing character from exported characters list: ", e, i, s)),
                      t
                  },
                  getFontByName: function(t) {
                      for (var e = 0, i = this.fonts.length; e < i; ) {
                          if (this.fonts[e].fName === t)
                              return this.fonts[e];
                          e += 1
                      }
                      return this.fonts[0]
                  },
                  measureText: function(t, e, i) {
                      var s = this.getFontByName(e)
                        , r = t.charCodeAt(0);
                      if (!s.cache[r + 1]) {
                          var a = s.helper;
                          if (" " === t) {
                              var n = a.measureText("|" + t + "|")
                                , o = a.measureText("||");
                              s.cache[r + 1] = (n - o) / 100
                          } else
                              s.cache[r + 1] = a.measureText(t) / 100
                      }
                      return s.cache[r + 1] * i
                  },
                  checkLoadedFonts: function() {
                      var t, e, i, s = this.fonts.length, r = s;
                      for (t = 0; t < s; t += 1)
                          this.fonts[t].loaded ? r -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node,
                          i = this.fonts[t].monoCase.w,
                          e.offsetWidth !== i ? (r -= 1,
                          this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node,
                          i = this.fonts[t].sansCase.w,
                          e.offsetWidth !== i && (r -= 1,
                          this.fonts[t].loaded = !0)),
                          this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),
                          this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                      0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                  },
                  setIsLoaded: function() {
                      this.isLoaded = !0
                  }
              },
              n
          }();
          function RenderableElement() {}
          RenderableElement.prototype = {
              initRenderable: function() {
                  this.isInRange = !1,
                  this.hidden = !1,
                  this.isTransparent = !1,
                  this.renderableComponents = []
              },
              addRenderableComponent: function(t) {
                  -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
              },
              removeRenderableComponent: function(t) {
                  -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
              },
              prepareRenderableFrame: function(t) {
                  this.checkLayerLimits(t)
              },
              checkTransparency: function() {
                  this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                  this.hide()) : this.isTransparent && (this.isTransparent = !1,
                  this.show())
              },
              checkLayerLimits: function(t) {
                  this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0,
                  this._mdf = !0,
                  this.isInRange = !0,
                  this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0,
                  this.isInRange = !1,
                  this.hide())
              },
              renderRenderable: function() {
                  var t, e = this.renderableComponents.length;
                  for (t = 0; t < e; t += 1)
                      this.renderableComponents[t].renderFrame(this._isFirstFrame)
              },
              sourceRectAtTime: function() {
                  return {
                      top: 0,
                      left: 0,
                      width: 100,
                      height: 100
                  }
              },
              getLayerSize: function() {
                  return 5 === this.data.ty ? {
                      w: this.data.textData.width,
                      h: this.data.textData.height
                  } : {
                      w: this.data.width,
                      h: this.data.height
                  }
              }
          };
          var MaskManagerInterface = function() {
              function t(t, e) {
                  this._mask = t,
                  this._data = e
              }
              Object.defineProperty(t.prototype, "maskPath", {
                  get: function() {
                      return this._mask.prop.k && this._mask.prop.getValue(),
                      this._mask.prop
                  }
              }),
              Object.defineProperty(t.prototype, "maskOpacity", {
                  get: function() {
                      return this._mask.op.k && this._mask.op.getValue(),
                      100 * this._mask.op.v
                  }
              });
              return function(e) {
                  var i, s = createSizedArray(e.viewData.length), r = e.viewData.length;
                  for (i = 0; i < r; i += 1)
                      s[i] = new t(e.viewData[i],e.masksProperties[i]);
                  return function(t) {
                      for (i = 0; i < r; ) {
                          if (e.masksProperties[i].nm === t)
                              return s[i];
                          i += 1
                      }
                      return null
                  }
              }
          }(), ExpressionPropertyInterface = function() {
              var t = {
                  pv: 0,
                  v: 0,
                  mult: 1
              }
                , e = {
                  pv: [0, 0, 0],
                  v: [0, 0, 0],
                  mult: 1
              };
              function i(t, e, i) {
                  Object.defineProperty(t, "velocity", {
                      get: function() {
                          return e.getVelocityAtTime(e.comp.currentFrame)
                      }
                  }),
                  t.numKeys = e.keyframes ? e.keyframes.length : 0,
                  t.key = function(s) {
                      if (!t.numKeys)
                          return 0;
                      var r = "";
                      r = "s"in e.keyframes[s - 1] ? e.keyframes[s - 1].s : "e"in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s;
                      var a = "unidimensional" === i ? new Number(r) : Object.assign({}, r);
                      return a.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate,
                      a.value = "unidimensional" === i ? r[0] : r,
                      a
                  }
                  ,
                  t.valueAtTime = e.getValueAtTime,
                  t.speedAtTime = e.getSpeedAtTime,
                  t.velocityAtTime = e.getVelocityAtTime,
                  t.propertyGroup = e.propertyGroup
              }
              function s() {
                  return t
              }
              return function(r) {
                  return r ? "unidimensional" === r.propType ? function(e) {
                      e && "pv"in e || (e = t);
                      var s = 1 / e.mult
                        , r = e.pv * s
                        , a = new Number(r);
                      return a.value = r,
                      i(a, e, "unidimensional"),
                      function() {
                          return e.k && e.getValue(),
                          r = e.v * s,
                          a.value !== r && ((a = new Number(r)).value = r,
                          i(a, e, "unidimensional")),
                          a
                      }
                  }(r) : function(t) {
                      t && "pv"in t || (t = e);
                      var s = 1 / t.mult
                        , r = t.data && t.data.l || t.pv.length
                        , a = createTypedArray("float32", r)
                        , n = createTypedArray("float32", r);
                      return a.value = n,
                      i(a, t, "multidimensional"),
                      function() {
                          t.k && t.getValue();
                          for (var e = 0; e < r; e += 1)
                              n[e] = t.v[e] * s,
                              a[e] = n[e];
                          return a
                      }
                  }(r) : s
              }
          }(), TransformExpressionInterface = function(t) {
              function e(t) {
                  switch (t) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                  case 6:
                      return e.scale;
                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                  case 10:
                      return e.rotation;
                  case "ADBE Rotate X":
                      return e.xRotation;
                  case "ADBE Rotate Y":
                      return e.yRotation;
                  case "position":
                  case "Position":
                  case "ADBE Position":
                  case 2:
                      return e.position;
                  case "ADBE Position_0":
                      return e.xPosition;
                  case "ADBE Position_1":
                      return e.yPosition;
                  case "ADBE Position_2":
                      return e.zPosition;
                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                  case 1:
                      return e.anchorPoint;
                  case "opacity":
                  case "Opacity":
                  case 11:
                      return e.opacity;
                  default:
                      return null
                  }
              }
              var i, s, r, a;
              return Object.defineProperty(e, "rotation", {
                  get: ExpressionPropertyInterface(t.r || t.rz)
              }),
              Object.defineProperty(e, "zRotation", {
                  get: ExpressionPropertyInterface(t.rz || t.r)
              }),
              Object.defineProperty(e, "xRotation", {
                  get: ExpressionPropertyInterface(t.rx)
              }),
              Object.defineProperty(e, "yRotation", {
                  get: ExpressionPropertyInterface(t.ry)
              }),
              Object.defineProperty(e, "scale", {
                  get: ExpressionPropertyInterface(t.s)
              }),
              t.p ? a = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px),
              s = ExpressionPropertyInterface(t.py),
              t.pz && (r = ExpressionPropertyInterface(t.pz))),
              Object.defineProperty(e, "position", {
                  get: function() {
                      return t.p ? a() : [i(), s(), r ? r() : 0]
                  }
              }),
              Object.defineProperty(e, "xPosition", {
                  get: ExpressionPropertyInterface(t.px)
              }),
              Object.defineProperty(e, "yPosition", {
                  get: ExpressionPropertyInterface(t.py)
              }),
              Object.defineProperty(e, "zPosition", {
                  get: ExpressionPropertyInterface(t.pz)
              }),
              Object.defineProperty(e, "anchorPoint", {
                  get: ExpressionPropertyInterface(t.a)
              }),
              Object.defineProperty(e, "opacity", {
                  get: ExpressionPropertyInterface(t.o)
              }),
              Object.defineProperty(e, "skew", {
                  get: ExpressionPropertyInterface(t.sk)
              }),
              Object.defineProperty(e, "skewAxis", {
                  get: ExpressionPropertyInterface(t.sa)
              }),
              Object.defineProperty(e, "orientation", {
                  get: ExpressionPropertyInterface(t.or)
              }),
              e
          }, LayerExpressionInterface = function() {
              function t(t) {
                  var e = new Matrix;
                  void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                  return e
              }
              function e(t, e) {
                  var i = this.getMatrix(e);
                  return i.props[12] = 0,
                  i.props[13] = 0,
                  i.props[14] = 0,
                  this.applyPoint(i, t)
              }
              function i(t, e) {
                  var i = this.getMatrix(e);
                  return this.applyPoint(i, t)
              }
              function s(t, e) {
                  var i = this.getMatrix(e);
                  return i.props[12] = 0,
                  i.props[13] = 0,
                  i.props[14] = 0,
                  this.invertPoint(i, t)
              }
              function r(t, e) {
                  var i = this.getMatrix(e);
                  return this.invertPoint(i, t)
              }
              function a(t, e) {
                  if (this._elem.hierarchy && this._elem.hierarchy.length) {
                      var i, s = this._elem.hierarchy.length;
                      for (i = 0; i < s; i += 1)
                          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                  }
                  return t.applyToPointArray(e[0], e[1], e[2] || 0)
              }
              function n(t, e) {
                  if (this._elem.hierarchy && this._elem.hierarchy.length) {
                      var i, s = this._elem.hierarchy.length;
                      for (i = 0; i < s; i += 1)
                          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                  }
                  return t.inversePoint(e)
              }
              function o(t) {
                  var e = new Matrix;
                  if (e.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(e),
                  this._elem.hierarchy && this._elem.hierarchy.length) {
                      var i, s = this._elem.hierarchy.length;
                      for (i = 0; i < s; i += 1)
                          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                      return e.inversePoint(t)
                  }
                  return e.inversePoint(t)
              }
              function g() {
                  return [1, 1, 1, 1]
              }
              return function(h) {
                  var l;
                  function C(t) {
                      switch (t) {
                      case "ADBE Root Vectors Group":
                      case "Contents":
                      case 2:
                          return C.shapeInterface;
                      case 1:
                      case 6:
                      case "Transform":
                      case "transform":
                      case "ADBE Transform Group":
                          return l;
                      case 4:
                      case "ADBE Effect Parade":
                      case "effects":
                      case "Effects":
                          return C.effect;
                      case "ADBE Text Properties":
                          return C.textInterface;
                      default:
                          return null
                      }
                  }
                  C.getMatrix = t,
                  C.invertPoint = n,
                  C.applyPoint = a,
                  C.toWorld = i,
                  C.toWorldVec = e,
                  C.fromWorld = r,
                  C.fromWorldVec = s,
                  C.toComp = i,
                  C.fromComp = o,
                  C.sampleImage = g,
                  C.sourceRectAtTime = h.sourceRectAtTime.bind(h),
                  C._elem = h;
                  var A = getDescriptor(l = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                  return Object.defineProperties(C, {
                      hasParent: {
                          get: function() {
                              return h.hierarchy.length
                          }
                      },
                      parent: {
                          get: function() {
                              return h.hierarchy[0].layerInterface
                          }
                      },
                      rotation: getDescriptor(l, "rotation"),
                      scale: getDescriptor(l, "scale"),
                      position: getDescriptor(l, "position"),
                      opacity: getDescriptor(l, "opacity"),
                      anchorPoint: A,
                      anchor_point: A,
                      transform: {
                          get: function() {
                              return l
                          }
                      },
                      active: {
                          get: function() {
                              return h.isInRange
                          }
                      }
                  }),
                  C.startTime = h.data.st,
                  C.index = h.data.ind,
                  C.source = h.data.refId,
                  C.height = 0 === h.data.ty ? h.data.h : 100,
                  C.width = 0 === h.data.ty ? h.data.w : 100,
                  C.inPoint = h.data.ip / h.comp.globalData.frameRate,
                  C.outPoint = h.data.op / h.comp.globalData.frameRate,
                  C._name = h.data.nm,
                  C.registerMaskInterface = function(t) {
                      C.mask = new MaskManagerInterface(t,h)
                  }
                  ,
                  C.registerEffectsInterface = function(t) {
                      C.effect = t
                  }
                  ,
                  C
              }
          }(), propertyGroupFactory = function(t, e) {
              return function(i) {
                  return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
              }
          }, PropertyInterface = function(t, e) {
              var i = {
                  _name: t
              };
              return function(t) {
                  return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
              }
          }, EffectsExpressionInterface = function() {
              function t(i, s, r, a) {
                  function n(t) {
                      for (var e = i.ef, s = 0, r = e.length; s < r; ) {
                          if (t === e[s].nm || t === e[s].mn || t === e[s].ix)
                              return 5 === e[s].ty ? h[s] : h[s]();
                          s += 1
                      }
                      throw new Error
                  }
                  var o, g = propertyGroupFactory(n, r), h = [], l = i.ef.length;
                  for (o = 0; o < l; o += 1)
                      5 === i.ef[o].ty ? h.push(t(i.ef[o], s.effectElements[o], s.effectElements[o].propertyGroup, a)) : h.push(e(s.effectElements[o], i.ef[o].ty, a, g));
                  return "ADBE Color Control" === i.mn && Object.defineProperty(n, "color", {
                      get: function() {
                          return h[0]()
                      }
                  }),
                  Object.defineProperties(n, {
                      numProperties: {
                          get: function() {
                              return i.np
                          }
                      },
                      _name: {
                          value: i.nm
                      },
                      propertyGroup: {
                          value: g
                      }
                  }),
                  n.enabled = 0 !== i.en,
                  n.active = n.enabled,
                  n
              }
              function e(t, e, i, s) {
                  var r = ExpressionPropertyInterface(t.p);
                  return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", s)),
                  function() {
                      return 10 === e ? i.comp.compInterface(t.p.v) : r()
                  }
              }
              return {
                  createEffectsInterface: function(e, i) {
                      if (e.effectsManager) {
                          var s, r = [], a = e.data.ef, n = e.effectsManager.effectElements.length;
                          for (s = 0; s < n; s += 1)
                              r.push(t(a[s], e.effectsManager.effectElements[s], i, e));
                          var o = e.data.ef || []
                            , g = function(t) {
                              for (s = 0,
                              n = o.length; s < n; ) {
                                  if (t === o[s].nm || t === o[s].mn || t === o[s].ix)
                                      return r[s];
                                  s += 1
                              }
                              return null
                          };
                          return Object.defineProperty(g, "numProperties", {
                              get: function() {
                                  return o.length
                              }
                          }),
                          g
                      }
                      return null
                  }
              }
          }(), CompExpressionInterface = function(t) {
              function e(e) {
                  for (var i = 0, s = t.layers.length; i < s; ) {
                      if (t.layers[i].nm === e || t.layers[i].ind === e)
                          return t.elements[i].layerInterface;
                      i += 1
                  }
                  return null
              }
              return Object.defineProperty(e, "_name", {
                  value: t.data.nm
              }),
              e.layer = e,
              e.pixelAspect = 1,
              e.height = t.data.h || t.globalData.compSize.h,
              e.width = t.data.w || t.globalData.compSize.w,
              e.pixelAspect = 1,
              e.frameDuration = 1 / t.globalData.frameRate,
              e.displayStartTime = 0,
              e.numLayers = t.layers.length,
              e
          }, ShapePathInterface = function(t, e, i) {
              var s = e.sh;
              function r(t) {
                  return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null
              }
              var a = propertyGroupFactory(r, i);
              return s.setGroupProperty(PropertyInterface("Path", a)),
              Object.defineProperties(r, {
                  path: {
                      get: function() {
                          return s.k && s.getValue(),
                          s
                      }
                  },
                  shape: {
                      get: function() {
                          return s.k && s.getValue(),
                          s
                      }
                  },
                  _name: {
                      value: t.nm
                  },
                  ix: {
                      value: t.ix
                  },
                  propertyIndex: {
                      value: t.ix
                  },
                  mn: {
                      value: t.mn
                  },
                  propertyGroup: {
                      value: i
                  }
              }),
              r
          }, ShapeExpressionInterface = function() {
              function t(t, o, p) {
                  var I, m = [], c = t ? t.length : 0;
                  for (I = 0; I < c; I += 1)
                      "gr" === t[I].ty ? m.push(e(t[I], o[I], p)) : "fl" === t[I].ty ? m.push(i(t[I], o[I], p)) : "st" === t[I].ty ? m.push(a(t[I], o[I], p)) : "tm" === t[I].ty ? m.push(n(t[I], o[I], p)) : "tr" === t[I].ty || ("el" === t[I].ty ? m.push(g(t[I], o[I], p)) : "sr" === t[I].ty ? m.push(h(t[I], o[I], p)) : "sh" === t[I].ty ? m.push(ShapePathInterface(t[I], o[I], p)) : "rc" === t[I].ty ? m.push(l(t[I], o[I], p)) : "rd" === t[I].ty ? m.push(C(t[I], o[I], p)) : "rp" === t[I].ty ? m.push(A(t[I], o[I], p)) : "gf" === t[I].ty ? m.push(s(t[I], o[I], p)) : m.push(r(t[I], o[I])));
                  return m
              }
              function e(e, i, s) {
                  var r = function(t) {
                      switch (t) {
                      case "ADBE Vectors Group":
                      case "Contents":
                      case 2:
                          return r.content;
                      default:
                          return r.transform
                      }
                  };
                  r.propertyGroup = propertyGroupFactory(r, s);
                  var a = function(e, i, s) {
                      var r, a = function(t) {
                          for (var e = 0, i = r.length; e < i; ) {
                              if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t)
                                  return r[e];
                              e += 1
                          }
                          return "number" == typeof t ? r[t - 1] : null
                      };
                      a.propertyGroup = propertyGroupFactory(a, s),
                      r = t(e.it, i.it, a.propertyGroup),
                      a.numProperties = r.length;
                      var n = o(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
                      return a.transform = n,
                      a.propertyIndex = e.cix,
                      a._name = e.nm,
                      a
                  }(e, i, r.propertyGroup)
                    , n = o(e.it[e.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
                  return r.content = a,
                  r.transform = n,
                  Object.defineProperty(r, "_name", {
                      get: function() {
                          return e.nm
                      }
                  }),
                  r.numProperties = e.np,
                  r.propertyIndex = e.ix,
                  r.nm = e.nm,
                  r.mn = e.mn,
                  r
              }
              function i(t, e, i) {
                  function s(t) {
                      return "Color" === t || "color" === t ? s.color : "Opacity" === t || "opacity" === t ? s.opacity : null
                  }
                  return Object.defineProperties(s, {
                      color: {
                          get: ExpressionPropertyInterface(e.c)
                      },
                      opacity: {
                          get: ExpressionPropertyInterface(e.o)
                      },
                      _name: {
                          value: t.nm
                      },
                      mn: {
                          value: t.mn
                      }
                  }),
                  e.c.setGroupProperty(PropertyInterface("Color", i)),
                  e.o.setGroupProperty(PropertyInterface("Opacity", i)),
                  s
              }
              function s(t, e, i) {
                  function s(t) {
                      return "Start Point" === t || "start point" === t ? s.startPoint : "End Point" === t || "end point" === t ? s.endPoint : "Opacity" === t || "opacity" === t ? s.opacity : null
                  }
                  return Object.defineProperties(s, {
                      startPoint: {
                          get: ExpressionPropertyInterface(e.s)
                      },
                      endPoint: {
                          get: ExpressionPropertyInterface(e.e)
                      },
                      opacity: {
                          get: ExpressionPropertyInterface(e.o)
                      },
                      type: {
                          get: function() {
                              return "a"
                          }
                      },
                      _name: {
                          value: t.nm
                      },
                      mn: {
                          value: t.mn
                      }
                  }),
                  e.s.setGroupProperty(PropertyInterface("Start Point", i)),
                  e.e.setGroupProperty(PropertyInterface("End Point", i)),
                  e.o.setGroupProperty(PropertyInterface("Opacity", i)),
                  s
              }
              function r() {
                  return function() {
                      return null
                  }
              }
              function a(t, e, i) {
                  var s, r = propertyGroupFactory(h, i), a = propertyGroupFactory(g, r);
                  function n(i) {
                      Object.defineProperty(g, t.d[i].nm, {
                          get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                      })
                  }
                  var o = t.d ? t.d.length : 0
                    , g = {};
                  for (s = 0; s < o; s += 1)
                      n(s),
                      e.d.dataProps[s].p.setGroupProperty(a);
                  function h(t) {
                      return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
                  }
                  return Object.defineProperties(h, {
                      color: {
                          get: ExpressionPropertyInterface(e.c)
                      },
                      opacity: {
                          get: ExpressionPropertyInterface(e.o)
                      },
                      strokeWidth: {
                          get: ExpressionPropertyInterface(e.w)
                      },
                      dash: {
                          get: function() {
                              return g
                          }
                      },
                      _name: {
                          value: t.nm
                      },
                      mn: {
                          value: t.mn
                      }
                  }),
                  e.c.setGroupProperty(PropertyInterface("Color", r)),
                  e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                  e.w.setGroupProperty(PropertyInterface("Stroke Width", r)),
                  h
              }
              function n(t, e, i) {
                  function s(e) {
                      return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : null
                  }
                  var r = propertyGroupFactory(s, i);
                  return s.propertyIndex = t.ix,
                  e.s.setGroupProperty(PropertyInterface("Start", r)),
                  e.e.setGroupProperty(PropertyInterface("End", r)),
                  e.o.setGroupProperty(PropertyInterface("Offset", r)),
                  s.propertyIndex = t.ix,
                  s.propertyGroup = i,
                  Object.defineProperties(s, {
                      start: {
                          get: ExpressionPropertyInterface(e.s)
                      },
                      end: {
                          get: ExpressionPropertyInterface(e.e)
                      },
                      offset: {
                          get: ExpressionPropertyInterface(e.o)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.mn = t.mn,
                  s
              }
              function o(t, e, i) {
                  function s(e) {
                      return t.a.ix === e || "Anchor Point" === e ? s.anchorPoint : t.o.ix === e || "Opacity" === e ? s.opacity : t.p.ix === e || "Position" === e ? s.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : t.s.ix === e || "Scale" === e ? s.scale : t.sk && t.sk.ix === e || "Skew" === e ? s.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? s.skewAxis : null
                  }
                  var r = propertyGroupFactory(s, i);
                  return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)),
                  e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)),
                  e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)),
                  e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)),
                  e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)),
                  e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)),
                  e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))),
                  e.transform.op.setGroupProperty(PropertyInterface("Opacity", r)),
                  Object.defineProperties(s, {
                      opacity: {
                          get: ExpressionPropertyInterface(e.transform.mProps.o)
                      },
                      position: {
                          get: ExpressionPropertyInterface(e.transform.mProps.p)
                      },
                      anchorPoint: {
                          get: ExpressionPropertyInterface(e.transform.mProps.a)
                      },
                      scale: {
                          get: ExpressionPropertyInterface(e.transform.mProps.s)
                      },
                      rotation: {
                          get: ExpressionPropertyInterface(e.transform.mProps.r)
                      },
                      skew: {
                          get: ExpressionPropertyInterface(e.transform.mProps.sk)
                      },
                      skewAxis: {
                          get: ExpressionPropertyInterface(e.transform.mProps.sa)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.ty = "tr",
                  s.mn = t.mn,
                  s.propertyGroup = i,
                  s
              }
              function g(t, e, i) {
                  function s(e) {
                      return t.p.ix === e ? s.position : t.s.ix === e ? s.size : null
                  }
                  var r = propertyGroupFactory(s, i);
                  s.propertyIndex = t.ix;
                  var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                  return a.s.setGroupProperty(PropertyInterface("Size", r)),
                  a.p.setGroupProperty(PropertyInterface("Position", r)),
                  Object.defineProperties(s, {
                      size: {
                          get: ExpressionPropertyInterface(a.s)
                      },
                      position: {
                          get: ExpressionPropertyInterface(a.p)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.mn = t.mn,
                  s
              }
              function h(t, e, i) {
                  function s(e) {
                      return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : null : s.innerRadius
                  }
                  var r = propertyGroupFactory(s, i)
                    , a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                  return s.propertyIndex = t.ix,
                  a.or.setGroupProperty(PropertyInterface("Outer Radius", r)),
                  a.os.setGroupProperty(PropertyInterface("Outer Roundness", r)),
                  a.pt.setGroupProperty(PropertyInterface("Points", r)),
                  a.p.setGroupProperty(PropertyInterface("Position", r)),
                  a.r.setGroupProperty(PropertyInterface("Rotation", r)),
                  t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", r)),
                  a.is.setGroupProperty(PropertyInterface("Inner Roundness", r))),
                  Object.defineProperties(s, {
                      position: {
                          get: ExpressionPropertyInterface(a.p)
                      },
                      rotation: {
                          get: ExpressionPropertyInterface(a.r)
                      },
                      points: {
                          get: ExpressionPropertyInterface(a.pt)
                      },
                      outerRadius: {
                          get: ExpressionPropertyInterface(a.or)
                      },
                      outerRoundness: {
                          get: ExpressionPropertyInterface(a.os)
                      },
                      innerRadius: {
                          get: ExpressionPropertyInterface(a.ir)
                      },
                      innerRoundness: {
                          get: ExpressionPropertyInterface(a.is)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.mn = t.mn,
                  s
              }
              function l(t, e, i) {
                  function s(e) {
                      return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : null
                  }
                  var r = propertyGroupFactory(s, i)
                    , a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                  return s.propertyIndex = t.ix,
                  a.p.setGroupProperty(PropertyInterface("Position", r)),
                  a.s.setGroupProperty(PropertyInterface("Size", r)),
                  a.r.setGroupProperty(PropertyInterface("Rotation", r)),
                  Object.defineProperties(s, {
                      position: {
                          get: ExpressionPropertyInterface(a.p)
                      },
                      roundness: {
                          get: ExpressionPropertyInterface(a.r)
                      },
                      size: {
                          get: ExpressionPropertyInterface(a.s)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.mn = t.mn,
                  s
              }
              function C(t, e, i) {
                  function s(e) {
                      return t.r.ix === e || "Round Corners 1" === e ? s.radius : null
                  }
                  var r = propertyGroupFactory(s, i)
                    , a = e;
                  return s.propertyIndex = t.ix,
                  a.rd.setGroupProperty(PropertyInterface("Radius", r)),
                  Object.defineProperties(s, {
                      radius: {
                          get: ExpressionPropertyInterface(a.rd)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.mn = t.mn,
                  s
              }
              function A(t, e, i) {
                  function s(e) {
                      return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : null
                  }
                  var r = propertyGroupFactory(s, i)
                    , a = e;
                  return s.propertyIndex = t.ix,
                  a.c.setGroupProperty(PropertyInterface("Copies", r)),
                  a.o.setGroupProperty(PropertyInterface("Offset", r)),
                  Object.defineProperties(s, {
                      copies: {
                          get: ExpressionPropertyInterface(a.c)
                      },
                      offset: {
                          get: ExpressionPropertyInterface(a.o)
                      },
                      _name: {
                          value: t.nm
                      }
                  }),
                  s.mn = t.mn,
                  s
              }
              return function(e, i, s) {
                  var r;
                  function a(t) {
                      if ("number" == typeof t)
                          return 0 === (t = void 0 === t ? 1 : t) ? s : r[t - 1];
                      for (var e = 0, i = r.length; e < i; ) {
                          if (r[e]._name === t)
                              return r[e];
                          e += 1
                      }
                      return null
                  }
                  return a.propertyGroup = propertyGroupFactory(a, (function() {
                      return s
                  }
                  )),
                  r = t(e, i, a.propertyGroup),
                  a.numProperties = r.length,
                  a._name = "Contents",
                  a
              }
          }(), TextExpressionInterface = function(t) {
              var e;
              function i(t) {
                  switch (t) {
                  case "ADBE Text Document":
                      return i.sourceText;
                  default:
                      return null
                  }
              }
              return Object.defineProperty(i, "sourceText", {
                  get: function() {
                      t.textProperty.getValue();
                      var i = t.textProperty.currentData.t;
                      return void 0 !== i && (t.textProperty.currentData.t = void 0,
                      (e = new String(i)).value = i || new String(i)),
                      e
                  }
              }),
              i
          }, getBlendMode = (blendModeEnums = {
              0: "source-over",
              1: "multiply",
              2: "screen",
              3: "overlay",
              4: "darken",
              5: "lighten",
              6: "color-dodge",
              7: "color-burn",
              8: "hard-light",
              9: "soft-light",
              10: "difference",
              11: "exclusion",
              12: "hue",
              13: "saturation",
              14: "color",
              15: "luminosity"
          },
          function(t) {
              return blendModeEnums[t] || ""
          }
          ), blendModeEnums;
          function SliderEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
          }
          function AngleEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
          }
          function ColorEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
          }
          function PointEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
          }
          function LayerIndexEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
          }
          function MaskIndexEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
          }
          function CheckboxEffect(t, e, i) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
          }
          function NoValueEffect() {
              this.p = {}
          }
          function EffectsManager(t, e) {
              var i, s = t.ef || [];
              this.effectElements = [];
              var r, a = s.length;
              for (i = 0; i < a; i += 1)
                  r = new GroupEffect(s[i],e),
                  this.effectElements.push(r)
          }
          function GroupEffect(t, e) {
              this.init(t, e)
          }
          function BaseElement() {}
          function FrameElement() {}
          function _typeof$2(t) {
              return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          extendPrototype([DynamicPropertyContainer], GroupEffect),
          GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
          GroupEffect.prototype.init = function(t, e) {
              var i;
              this.data = t,
              this.effectElements = [],
              this.initDynamicPropertyContainer(e);
              var s, r = this.data.ef.length, a = this.data.ef;
              for (i = 0; i < r; i += 1) {
                  switch (s = null,
                  a[i].ty) {
                  case 0:
                      s = new SliderEffect(a[i],e,this);
                      break;
                  case 1:
                      s = new AngleEffect(a[i],e,this);
                      break;
                  case 2:
                      s = new ColorEffect(a[i],e,this);
                      break;
                  case 3:
                      s = new PointEffect(a[i],e,this);
                      break;
                  case 4:
                  case 7:
                      s = new CheckboxEffect(a[i],e,this);
                      break;
                  case 10:
                      s = new LayerIndexEffect(a[i],e,this);
                      break;
                  case 11:
                      s = new MaskIndexEffect(a[i],e,this);
                      break;
                  case 5:
                      s = new EffectsManager(a[i],e,this);
                      break;
                  default:
                      s = new NoValueEffect(a[i],e,this)
                  }
                  s && this.effectElements.push(s)
              }
          }
          ,
          BaseElement.prototype = {
              checkMasks: function() {
                  if (!this.data.hasMask)
                      return !1;
                  for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                      if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                          return !0;
                      t += 1
                  }
                  return !1
              },
              initExpressions: function() {
                  this.layerInterface = LayerExpressionInterface(this),
                  this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                  var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                  this.layerInterface.registerEffectsInterface(t),
                  0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface),
                  this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this),
                  this.layerInterface.text = this.layerInterface.textInterface)
              },
              setBlendMode: function() {
                  var t = getBlendMode(this.data.bm);
                  (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
              },
              initBaseData: function(t, e, i) {
                  this.globalData = e,
                  this.comp = i,
                  this.data = t,
                  this.layerId = createElementID(),
                  this.data.sr || (this.data.sr = 1),
                  this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
              },
              getType: function() {
                  return this.type
              },
              sourceRectAtTime: function() {}
          },
          FrameElement.prototype = {
              initFrame: function() {
                  this._isFirstFrame = !1,
                  this.dynamicProperties = [],
                  this._mdf = !1
              },
              prepareProperties: function(t, e) {
                  var i, s = this.dynamicProperties.length;
                  for (i = 0; i < s; i += 1)
                      (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(),
                      this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0,
                      this._mdf = !0))
              },
              addDynamicProperty: function(t) {
                  -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
              }
          };
          var FootageInterface = (dataInterfaceFactory = function(t) {
              function e(t) {
                  return "Outline" === t ? e.outlineInterface() : null
              }
              return e._name = "Outline",
              e.outlineInterface = function(t) {
                  var e = ""
                    , i = t.getFootageData();
                  function s(t) {
                      if (i[t])
                          return e = t,
                          "object" === _typeof$2(i = i[t]) ? s : i;
                      var r = t.indexOf(e);
                      if (-1 !== r) {
                          var a = parseInt(t.substr(r + e.length), 10);
                          return "object" === _typeof$2(i = i[a]) ? s : i
                      }
                      return ""
                  }
                  return function() {
                      return e = "",
                      i = t.getFootageData(),
                      s
                  }
              }(t),
              e
          }
          ,
          function(t) {
              function e(t) {
                  return "Data" === t ? e.dataInterface : null
              }
              return e._name = "Data",
              e.dataInterface = dataInterfaceFactory(t),
              e
          }
          ), dataInterfaceFactory;
          function FootageElement(t, e, i) {
              this.initFrame(),
              this.initRenderable(),
              this.assetData = e.getAssetData(t.refId),
              this.footageData = e.imageLoader.getAsset(this.assetData),
              this.initBaseData(t, e, i)
          }
          function AudioElement(t, e, i) {
              this.initFrame(),
              this.initRenderable(),
              this.assetData = e.getAssetData(t.refId),
              this.initBaseData(t, e, i),
              this._isPlaying = !1,
              this._canPlay = !1;
              var s = this.globalData.getAssetsPath(this.assetData);
              this.audio = this.globalData.audioController.createAudio(s),
              this._currentTime = 0,
              this.globalData.audioController.addAudio(this),
              this._volumeMultiplier = 1,
              this._volume = 1,
              this._previousVolume = null,
              this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                  _placeholder: !0
              },
              this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                  k: [100]
              }, 1, .01, this)
          }
          function BaseRenderer() {}
          function TransformElement() {}
          function MaskElement(t, e, i) {
              this.data = t,
              this.element = e,
              this.globalData = i,
              this.storedData = [],
              this.masksProperties = this.data.masksProperties || [],
              this.maskElement = null;
              var s, r, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
              this.viewData = createSizedArray(n),
              this.solidPath = "";
              var o, g, h, l, C, A, p = this.masksProperties, I = 0, m = [], c = createElementID(), u = "clipPath", f = "clip-path";
              for (s = 0; s < n; s += 1)
                  if (("a" !== p[s].mode && "n" !== p[s].mode || p[s].inv || 100 !== p[s].o.k || p[s].o.x) && (u = "mask",
                  f = "mask"),
                  "s" !== p[s].mode && "i" !== p[s].mode || 0 !== I ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"),
                  h.setAttribute("width", this.element.comp.data.w || 0),
                  h.setAttribute("height", this.element.comp.data.h || 0),
                  m.push(h)),
                  r = createNS("path"),
                  "n" === p[s].mode)
                      this.viewData[s] = {
                          op: PropertyFactory.getProp(this.element, p[s].o, 0, .01, this.element),
                          prop: ShapePropertyFactory.getShapeProp(this.element, p[s], 3),
                          elem: r,
                          lastPath: ""
                      },
                      a.appendChild(r);
                  else {
                      var d;
                      if (I += 1,
                      r.setAttribute("fill", "s" === p[s].mode ? "#000000" : "#ffffff"),
                      r.setAttribute("clip-rule", "nonzero"),
                      0 !== p[s].x.k ? (u = "mask",
                      f = "mask",
                      A = PropertyFactory.getProp(this.element, p[s].x, 0, null, this.element),
                      d = createElementID(),
                      (l = createNS("filter")).setAttribute("id", d),
                      (C = createNS("feMorphology")).setAttribute("operator", "erode"),
                      C.setAttribute("in", "SourceGraphic"),
                      C.setAttribute("radius", "0"),
                      l.appendChild(C),
                      a.appendChild(l),
                      r.setAttribute("stroke", "s" === p[s].mode ? "#000000" : "#ffffff")) : (C = null,
                      A = null),
                      this.storedData[s] = {
                          elem: r,
                          x: A,
                          expan: C,
                          lastPath: "",
                          lastOperator: "",
                          filterId: d,
                          lastRadius: 0
                      },
                      "i" === p[s].mode) {
                          g = m.length;
                          var y = createNS("g");
                          for (o = 0; o < g; o += 1)
                              y.appendChild(m[o]);
                          var M = createNS("mask");
                          M.setAttribute("mask-type", "alpha"),
                          M.setAttribute("id", c + "_" + I),
                          M.appendChild(r),
                          a.appendChild(M),
                          y.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + I + ")"),
                          m.length = 0,
                          m.push(y)
                      } else
                          m.push(r);
                      p[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                      this.viewData[s] = {
                          elem: r,
                          lastPath: "",
                          op: PropertyFactory.getProp(this.element, p[s].o, 0, .01, this.element),
                          prop: ShapePropertyFactory.getShapeProp(this.element, p[s], 3),
                          invRect: h
                      },
                      this.viewData[s].prop.k || this.drawPath(p[s], this.viewData[s].prop.v, this.viewData[s])
                  }
              for (this.maskElement = createNS(u),
              n = m.length,
              s = 0; s < n; s += 1)
                  this.maskElement.appendChild(m[s]);
              I > 0 && (this.maskElement.setAttribute("id", c),
              this.element.maskedElement.setAttribute(f, "url(" + getLocationHref() + "#" + c + ")"),
              a.appendChild(this.maskElement)),
              this.viewData.length && this.element.addRenderableComponent(this)
          }
          FootageElement.prototype.prepareFrame = function() {}
          ,
          extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
          FootageElement.prototype.getBaseElement = function() {
              return null
          }
          ,
          FootageElement.prototype.renderFrame = function() {}
          ,
          FootageElement.prototype.destroy = function() {}
          ,
          FootageElement.prototype.initExpressions = function() {
              this.layerInterface = FootageInterface(this)
          }
          ,
          FootageElement.prototype.getFootageData = function() {
              return this.footageData
          }
          ,
          AudioElement.prototype.prepareFrame = function(t) {
              if (this.prepareRenderableFrame(t, !0),
              this.prepareProperties(t, !0),
              this.tm._placeholder)
                  this._currentTime = t / this.data.sr;
              else {
                  var e = this.tm.v;
                  this._currentTime = e
              }
              this._volume = this.lv.v[0];
              var i = this._volume * this._volumeMultiplier;
              this._previousVolume !== i && (this._previousVolume = i,
              this.audio.volume(i))
          }
          ,
          extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
          AudioElement.prototype.renderFrame = function() {
              this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(),
              this.audio.seek(this._currentTime / this.globalData.frameRate),
              this._isPlaying = !0))
          }
          ,
          AudioElement.prototype.show = function() {}
          ,
          AudioElement.prototype.hide = function() {
              this.audio.pause(),
              this._isPlaying = !1
          }
          ,
          AudioElement.prototype.pause = function() {
              this.audio.pause(),
              this._isPlaying = !1,
              this._canPlay = !1
          }
          ,
          AudioElement.prototype.resume = function() {
              this._canPlay = !0
          }
          ,
          AudioElement.prototype.setRate = function(t) {
              this.audio.rate(t)
          }
          ,
          AudioElement.prototype.volume = function(t) {
              this._volumeMultiplier = t,
              this._previousVolume = t * this._volume,
              this.audio.volume(this._previousVolume)
          }
          ,
          AudioElement.prototype.getBaseElement = function() {
              return null
          }
          ,
          AudioElement.prototype.destroy = function() {}
          ,
          AudioElement.prototype.sourceRectAtTime = function() {}
          ,
          AudioElement.prototype.initExpressions = function() {}
          ,
          BaseRenderer.prototype.checkLayers = function(t) {
              var e, i, s = this.layers.length;
              for (this.completeLayers = !0,
              e = s - 1; e >= 0; e -= 1)
                  this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e),
                  this.completeLayers = !!this.elements[e] && this.completeLayers;
              this.checkPendingElements()
          }
          ,
          BaseRenderer.prototype.createItem = function(t) {
              switch (t.ty) {
              case 2:
                  return this.createImage(t);
              case 0:
                  return this.createComp(t);
              case 1:
                  return this.createSolid(t);
              case 3:
                  return this.createNull(t);
              case 4:
                  return this.createShape(t);
              case 5:
                  return this.createText(t);
              case 6:
                  return this.createAudio(t);
              case 13:
                  return this.createCamera(t);
              case 15:
                  return this.createFootage(t);
              default:
                  return this.createNull(t)
              }
          }
          ,
          BaseRenderer.prototype.createCamera = function() {
              throw new Error("You're using a 3d camera. Try the html renderer.")
          }
          ,
          BaseRenderer.prototype.createAudio = function(t) {
              return new AudioElement(t,this.globalData,this)
          }
          ,
          BaseRenderer.prototype.createFootage = function(t) {
              return new FootageElement(t,this.globalData,this)
          }
          ,
          BaseRenderer.prototype.buildAllItems = function() {
              var t, e = this.layers.length;
              for (t = 0; t < e; t += 1)
                  this.buildItem(t);
              this.checkPendingElements()
          }
          ,
          BaseRenderer.prototype.includeLayers = function(t) {
              var e;
              this.completeLayers = !1;
              var i, s = t.length, r = this.layers.length;
              for (e = 0; e < s; e += 1)
                  for (i = 0; i < r; ) {
                      if (this.layers[i].id === t[e].id) {
                          this.layers[i] = t[e];
                          break
                      }
                      i += 1
                  }
          }
          ,
          BaseRenderer.prototype.setProjectInterface = function(t) {
              this.globalData.projectInterface = t
          }
          ,
          BaseRenderer.prototype.initItems = function() {
              this.globalData.progressiveLoad || this.buildAllItems()
          }
          ,
          BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
              for (var s = this.elements, r = this.layers, a = 0, n = r.length; a < n; )
                  r[a].ind == e && (s[a] && !0 !== s[a] ? (i.push(s[a]),
                  s[a].setAsParent(),
                  void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a),
                  this.addPendingElement(t))),
                  a += 1
          }
          ,
          BaseRenderer.prototype.addPendingElement = function(t) {
              this.pendingElements.push(t)
          }
          ,
          BaseRenderer.prototype.searchExtraCompositions = function(t) {
              var e, i = t.length;
              for (e = 0; e < i; e += 1)
                  if (t[e].xt) {
                      var s = this.createComp(t[e]);
                      s.initExpressions(),
                      this.globalData.projectInterface.registerComposition(s)
                  }
          }
          ,
          BaseRenderer.prototype.getElementByPath = function(t) {
              var e, i = t.shift();
              if ("number" == typeof i)
                  e = this.elements[i];
              else {
                  var s, r = this.elements.length;
                  for (s = 0; s < r; s += 1)
                      if (this.elements[s].data.nm === i) {
                          e = this.elements[s];
                          break
                      }
              }
              return 0 === t.length ? e : e.getElementByPath(t)
          }
          ,
          BaseRenderer.prototype.setupGlobalData = function(t, e) {
              this.globalData.fontManager = new FontManager,
              this.globalData.fontManager.addChars(t.chars),
              this.globalData.fontManager.addFonts(t.fonts, e),
              this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
              this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
              this.globalData.imageLoader = this.animationItem.imagePreloader,
              this.globalData.audioController = this.animationItem.audioController,
              this.globalData.frameId = 0,
              this.globalData.frameRate = t.fr,
              this.globalData.nm = t.nm,
              this.globalData.compSize = {
                  w: t.w,
                  h: t.h
              }
          }
          ,
          TransformElement.prototype = {
              initTransform: function() {
                  this.finalTransform = {
                      mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                          o: 0
                      },
                      _matMdf: !1,
                      _opMdf: !1,
                      mat: new Matrix
                  },
                  this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                  this.data.ty
              },
              renderTransform: function() {
                  if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                  this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                  this.hierarchy) {
                      var t, e = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
                      if (!this.finalTransform._matMdf)
                          for (; i < s; ) {
                              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                  this.finalTransform._matMdf = !0;
                                  break
                              }
                              i += 1
                          }
                      if (this.finalTransform._matMdf)
                          for (t = this.finalTransform.mProp.v.props,
                          e.cloneFromProps(t),
                          i = 0; i < s; i += 1)
                              t = this.hierarchy[i].finalTransform.mProp.v.props,
                              e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                  }
              },
              globalToLocal: function(t) {
                  var e = [];
                  e.push(this.finalTransform);
                  for (var i, s = !0, r = this.comp; s; )
                      r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform),
                      r = r.comp) : s = !1;
                  var a, n = e.length;
                  for (i = 0; i < n; i += 1)
                      a = e[i].mat.applyToPointArray(0, 0, 0),
                      t = [t[0] - a[0], t[1] - a[1], 0];
                  return t
              },
              mHelper: new Matrix
          },
          MaskElement.prototype.getMaskProperty = function(t) {
              return this.viewData[t].prop
          }
          ,
          MaskElement.prototype.renderFrame = function(t) {
              var e, i = this.element.finalTransform.mat, s = this.masksProperties.length;
              for (e = 0; e < s; e += 1)
                  if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                  (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v),
                  "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()),
                  this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                      var r = this.storedData[e].expan;
                      this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode",
                      this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")),
                      r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate",
                      this.storedData[e].elem.setAttribute("filter", null)),
                      this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                  }
          }
          ,
          MaskElement.prototype.getMaskelement = function() {
              return this.maskElement
          }
          ,
          MaskElement.prototype.createLayerSolidPath = function() {
              var t = "M0,0 ";
              return t += " h" + this.globalData.compSize.w,
              t += " v" + this.globalData.compSize.h,
              t += " h-" + this.globalData.compSize.w,
              t += " v-" + this.globalData.compSize.h + " "
          }
          ,
          MaskElement.prototype.drawPath = function(t, e, i) {
              var s, r, a = " M" + e.v[0][0] + "," + e.v[0][1];
              for (r = e._length,
              s = 1; s < r; s += 1)
                  a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
              if (e.c && r > 1 && (a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
              i.lastPath !== a) {
                  var n = "";
                  i.elem && (e.c && (n = t.inv ? this.solidPath + a : a),
                  i.elem.setAttribute("d", n)),
                  i.lastPath = a
              }
          }
          ,
          MaskElement.prototype.destroy = function() {
              this.element = null,
              this.globalData = null,
              this.maskElement = null,
              this.data = null,
              this.masksProperties = null
          }
          ;
          var filtersFactory = function() {
              var t = {};
              return t.createFilter = function(t, e) {
                  var i = createNS("filter");
                  i.setAttribute("id", t),
                  !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"),
                  i.setAttribute("x", "0%"),
                  i.setAttribute("y", "0%"),
                  i.setAttribute("width", "100%"),
                  i.setAttribute("height", "100%"));
                  return i
              }
              ,
              t.createAlphaToLuminanceFilter = function() {
                  var t = createNS("feColorMatrix");
                  return t.setAttribute("type", "matrix"),
                  t.setAttribute("color-interpolation-filters", "sRGB"),
                  t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                  t
              }
              ,
              t
          }()
            , featureSupport = function() {
              var t = {
                  maskType: !0
              };
              return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
              t
          }()
            , registeredEffects = {}
            , idPrefix = "filter_result_";
          function SVGEffects(t) {
              var e, i, s = "SourceGraphic", r = t.data.ef ? t.data.ef.length : 0, a = createElementID(), n = filtersFactory.createFilter(a, !0), o = 0;
              for (this.filters = [],
              e = 0; e < r; e += 1) {
                  i = null;
                  var g = t.data.ef[e].ty;
                  if (registeredEffects[g])
                      i = new (0,
                      registeredEffects[g].effect)(n,t.effectsManager.effectElements[e],t,idPrefix + o,s),
                      s = idPrefix + o,
                      registeredEffects[g].countsAsEffect && (o += 1);
                  i && this.filters.push(i)
              }
              o && (t.globalData.defs.appendChild(n),
              t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")),
              this.filters.length && t.addRenderableComponent(this)
          }
          function registerEffect(t, e, i) {
              registeredEffects[t] = {
                  effect: e,
                  countsAsEffect: i
              }
          }
          function SVGBaseElement() {}
          function HierarchyElement() {}
          function RenderableDOMElement() {}
          function IImageElement(t, e, i) {
              this.assetData = e.getAssetData(t.refId),
              this.initElement(t, e, i),
              this.sourceRect = {
                  top: 0,
                  left: 0,
                  width: this.assetData.w,
                  height: this.assetData.h
              }
          }
          function ProcessedElement(t, e) {
              this.elem = t,
              this.pos = e
          }
          function IShapeElement() {}
          SVGEffects.prototype.renderFrame = function(t) {
              var e, i = this.filters.length;
              for (e = 0; e < i; e += 1)
                  this.filters[e].renderFrame(t)
          }
          ,
          SVGBaseElement.prototype = {
              initRendererElement: function() {
                  this.layerElement = createNS("g")
              },
              createContainerElements: function() {
                  this.matteElement = createNS("g"),
                  this.transformedElement = this.layerElement,
                  this.maskedElement = this.layerElement,
                  this._sizeChanged = !1;
                  var t, e, i, s = null;
                  if (this.data.td) {
                      if (3 == this.data.td || 1 == this.data.td) {
                          var r = createNS("mask");
                          r.setAttribute("id", this.layerId),
                          r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"),
                          r.appendChild(this.layerElement),
                          s = r,
                          this.globalData.defs.appendChild(r),
                          featureSupport.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"),
                          t = createElementID(),
                          e = filtersFactory.createFilter(t),
                          this.globalData.defs.appendChild(e),
                          e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                          (i = createNS("g")).appendChild(this.layerElement),
                          s = i,
                          r.appendChild(i),
                          i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
                      } else if (2 == this.data.td) {
                          var a = createNS("mask");
                          a.setAttribute("id", this.layerId),
                          a.setAttribute("mask-type", "alpha");
                          var n = createNS("g");
                          a.appendChild(n),
                          t = createElementID(),
                          e = filtersFactory.createFilter(t);
                          var o = createNS("feComponentTransfer");
                          o.setAttribute("in", "SourceGraphic"),
                          e.appendChild(o);
                          var g = createNS("feFuncA");
                          g.setAttribute("type", "table"),
                          g.setAttribute("tableValues", "1.0 0.0"),
                          o.appendChild(g),
                          this.globalData.defs.appendChild(e);
                          var h = createNS("rect");
                          h.setAttribute("width", this.comp.data.w),
                          h.setAttribute("height", this.comp.data.h),
                          h.setAttribute("x", "0"),
                          h.setAttribute("y", "0"),
                          h.setAttribute("fill", "#ffffff"),
                          h.setAttribute("opacity", "0"),
                          n.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"),
                          n.appendChild(h),
                          n.appendChild(this.layerElement),
                          s = n,
                          featureSupport.maskType || (a.setAttribute("mask-type", "luminance"),
                          e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                          i = createNS("g"),
                          n.appendChild(h),
                          i.appendChild(this.layerElement),
                          s = i,
                          n.appendChild(i)),
                          this.globalData.defs.appendChild(a)
                      }
                  } else
                      this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                      s = this.matteElement,
                      this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                  if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                  0 === this.data.ty && !this.data.hd) {
                      var l = createNS("clipPath")
                        , C = createNS("path");
                      C.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                      var A = createElementID();
                      if (l.setAttribute("id", A),
                      l.appendChild(C),
                      this.globalData.defs.appendChild(l),
                      this.checkMasks()) {
                          var p = createNS("g");
                          p.setAttribute("clip-path", "url(" + getLocationHref() + "#" + A + ")"),
                          p.appendChild(this.layerElement),
                          this.transformedElement = p,
                          s ? s.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                      } else
                          this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + A + ")")
                  }
                  0 !== this.data.bm && this.setBlendMode()
              },
              renderElement: function() {
                  this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
                  this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
              },
              destroyBaseElement: function() {
                  this.layerElement = null,
                  this.matteElement = null,
                  this.maskManager.destroy()
              },
              getBaseElement: function() {
                  return this.data.hd ? null : this.baseElement
              },
              createRenderableComponents: function() {
                  this.maskManager = new MaskElement(this.data,this,this.globalData),
                  this.renderableEffectsManager = new SVGEffects(this)
              },
              setMatte: function(t) {
                  this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
              }
          },
          HierarchyElement.prototype = {
              initHierarchy: function() {
                  this.hierarchy = [],
                  this._isParent = !1,
                  this.checkParenting()
              },
              setHierarchy: function(t) {
                  this.hierarchy = t
              },
              setAsParent: function() {
                  this._isParent = !0
              },
              checkParenting: function() {
                  void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
              }
          },
          extendPrototype([RenderableElement, createProxyFunction({
              initElement: function(t, e, i) {
                  this.initFrame(),
                  this.initBaseData(t, e, i),
                  this.initTransform(t, e, i),
                  this.initHierarchy(),
                  this.initRenderable(),
                  this.initRendererElement(),
                  this.createContainerElements(),
                  this.createRenderableComponents(),
                  this.createContent(),
                  this.hide()
              },
              hide: function() {
                  this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none",
                  this.hidden = !0)
              },
              show: function() {
                  this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"),
                  this.hidden = !1,
                  this._isFirstFrame = !0)
              },
              renderFrame: function() {
                  this.data.hd || this.hidden || (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1))
              },
              renderInnerContent: function() {},
              prepareFrame: function(t) {
                  this._mdf = !1,
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange),
                  this.checkTransparency()
              },
              destroy: function() {
                  this.innerElem = null,
                  this.destroyBaseElement()
              }
          })], RenderableDOMElement),
          extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
          IImageElement.prototype.createContent = function() {
              var t = this.globalData.getAssetsPath(this.assetData);
              this.innerElem = createNS("image"),
              this.innerElem.setAttribute("width", this.assetData.w + "px"),
              this.innerElem.setAttribute("height", this.assetData.h + "px"),
              this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
              this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
              this.layerElement.appendChild(this.innerElem)
          }
          ,
          IImageElement.prototype.sourceRectAtTime = function() {
              return this.sourceRect
          }
          ,
          IShapeElement.prototype = {
              addShapeToModifiers: function(t) {
                  var e, i = this.shapeModifiers.length;
                  for (e = 0; e < i; e += 1)
                      this.shapeModifiers[e].addShape(t)
              },
              isShapeInAnimatedModifiers: function(t) {
                  for (var e = this.shapeModifiers.length; 0 < e; )
                      if (this.shapeModifiers[0].isAnimatedWithShape(t))
                          return !0;
                  return !1
              },
              renderModifiers: function() {
                  if (this.shapeModifiers.length) {
                      var t, e = this.shapes.length;
                      for (t = 0; t < e; t += 1)
                          this.shapes[t].sh.reset();
                      for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
                          ;
                  }
              },
              searchProcessedElement: function(t) {
                  for (var e = this.processedElements, i = 0, s = e.length; i < s; ) {
                      if (e[i].elem === t)
                          return e[i].pos;
                      i += 1
                  }
                  return 0
              },
              addProcessedElement: function(t, e) {
                  for (var i = this.processedElements, s = i.length; s; )
                      if (i[s -= 1].elem === t)
                          return void (i[s].pos = e);
                  i.push(new ProcessedElement(t,e))
              },
              prepareFrame: function(t) {
                  this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange)
              }
          };
          var lineCapEnum = {
              1: "butt",
              2: "round",
              3: "square"
          }
            , lineJoinEnum = {
              1: "miter",
              2: "round",
              3: "bevel"
          };
          function SVGShapeData(t, e, i) {
              this.caches = [],
              this.styles = [],
              this.transformers = t,
              this.lStr = "",
              this.sh = i,
              this.lvl = e,
              this._isAnimated = !!i.k;
              for (var s = 0, r = t.length; s < r; ) {
                  if (t[s].mProps.dynamicProperties.length) {
                      this._isAnimated = !0;
                      break
                  }
                  s += 1
              }
          }
          function SVGStyleData(t, e) {
              this.data = t,
              this.type = t.ty,
              this.d = "",
              this.lvl = e,
              this._mdf = !1,
              this.closed = !0 === t.hd,
              this.pElem = createNS("path"),
              this.msElem = null
          }
          function DashProperty(t, e, i, s) {
              var r;
              this.elem = t,
              this.frameId = -1,
              this.dataProps = createSizedArray(e.length),
              this.renderer = i,
              this.k = !1,
              this.dashStr = "",
              this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
              this.dashoffset = createTypedArray("float32", 1),
              this.initDynamicPropertyContainer(s);
              var a, n = e.length || 0;
              for (r = 0; r < n; r += 1)
                  a = PropertyFactory.getProp(t, e[r].v, 0, 0, this),
                  this.k = a.k || this.k,
                  this.dataProps[r] = {
                      n: e[r].n,
                      p: a
                  };
              this.k || this.getValue(!0),
              this._isAnimated = this.k
          }
          function SVGStrokeStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
              this.getValue = this.iterateDynamicProperties,
              this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
              this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
              this.d = new DashProperty(t,e.d || {},"svg",this),
              this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
              this.style = i,
              this._isAnimated = !!this._isAnimated
          }
          function SVGFillStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
              this.getValue = this.iterateDynamicProperties,
              this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
              this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
              this.style = i
          }
          function SVGNoStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
              this.getValue = this.iterateDynamicProperties,
              this.style = i
          }
          function GradientProperty(t, e, i) {
              this.data = e,
              this.c = createTypedArray("uint8c", 4 * e.p);
              var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
              this.o = createTypedArray("float32", s),
              this._cmdf = !1,
              this._omdf = !1,
              this._collapsable = this.checkCollapsable(),
              this._hasOpacity = s,
              this.initDynamicPropertyContainer(i),
              this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
              this.k = this.prop.k,
              this.getValue(!0)
          }
          function SVGGradientFillStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
              this.getValue = this.iterateDynamicProperties,
              this.initGradientData(t, e, i)
          }
          function SVGGradientStrokeStyleData(t, e, i) {
              this.initDynamicPropertyContainer(t),
              this.getValue = this.iterateDynamicProperties,
              this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
              this.d = new DashProperty(t,e.d || {},"svg",this),
              this.initGradientData(t, e, i),
              this._isAnimated = !!this._isAnimated
          }
          function ShapeGroupData() {
              this.it = [],
              this.prevViewData = [],
              this.gr = createNS("g")
          }
          function SVGTransformData(t, e, i) {
              this.transform = {
                  mProps: t,
                  op: e,
                  container: i
              },
              this.elements = [],
              this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
          }
          SVGShapeData.prototype.setAsAnimated = function() {
              this._isAnimated = !0
          }
          ,
          SVGStyleData.prototype.reset = function() {
              this.d = "",
              this._mdf = !1
          }
          ,
          DashProperty.prototype.getValue = function(t) {
              if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId,
              this.iterateDynamicProperties(),
              this._mdf = this._mdf || t,
              this._mdf)) {
                  var e = 0
                    , i = this.dataProps.length;
                  for ("svg" === this.renderer && (this.dashStr = ""),
                  e = 0; e < i; e += 1)
                      "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
              }
          }
          ,
          extendPrototype([DynamicPropertyContainer], DashProperty),
          extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
          extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
          extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
          GradientProperty.prototype.comparePoints = function(t, e) {
              for (var i = 0, s = this.o.length / 2; i < s; ) {
                  if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01)
                      return !1;
                  i += 1
              }
              return !0
          }
          ,
          GradientProperty.prototype.checkCollapsable = function() {
              if (this.o.length / 2 != this.c.length / 4)
                  return !1;
              if (this.data.k.k[0].s)
                  for (var t = 0, e = this.data.k.k.length; t < e; ) {
                      if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                          return !1;
                      t += 1
                  }
              else if (!this.comparePoints(this.data.k.k, this.data.p))
                  return !1;
              return !0
          }
          ,
          GradientProperty.prototype.getValue = function(t) {
              if (this.prop.getValue(),
              this._mdf = !1,
              this._cmdf = !1,
              this._omdf = !1,
              this.prop._mdf || t) {
                  var e, i, s, r = 4 * this.data.p;
                  for (e = 0; e < r; e += 1)
                      i = e % 4 == 0 ? 100 : 255,
                      s = Math.round(this.prop.v[e] * i),
                      this.c[e] !== s && (this.c[e] = s,
                      this._cmdf = !t);
                  if (this.o.length)
                      for (r = this.prop.v.length,
                      e = 4 * this.data.p; e < r; e += 1)
                          i = e % 2 == 0 ? 100 : 1,
                          s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                          this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s,
                          this._omdf = !t);
                  this._mdf = !t
              }
          }
          ,
          extendPrototype([DynamicPropertyContainer], GradientProperty),
          SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
              this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
              this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
              this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
              this.h = PropertyFactory.getProp(t, e.h || {
                  k: 0
              }, 0, .01, this),
              this.a = PropertyFactory.getProp(t, e.a || {
                  k: 0
              }, 0, degToRads, this),
              this.g = new GradientProperty(t,e.g,this),
              this.style = i,
              this.stops = [],
              this.setGradientData(i.pElem, e),
              this.setGradientOpacity(e, i),
              this._isAnimated = !!this._isAnimated
          }
          ,
          SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
              var i = createElementID()
                , s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
              s.setAttribute("id", i),
              s.setAttribute("spreadMethod", "pad"),
              s.setAttribute("gradientUnits", "userSpaceOnUse");
              var r, a, n, o = [];
              for (n = 4 * e.g.p,
              a = 0; a < n; a += 4)
                  r = createNS("stop"),
                  s.appendChild(r),
                  o.push(r);
              t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"),
              this.gf = s,
              this.cst = o
          }
          ,
          SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
              if (this.g._hasOpacity && !this.g._collapsable) {
                  var i, s, r, a = createNS("mask"), n = createNS("path");
                  a.appendChild(n);
                  var o = createElementID()
                    , g = createElementID();
                  a.setAttribute("id", g);
                  var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                  h.setAttribute("id", o),
                  h.setAttribute("spreadMethod", "pad"),
                  h.setAttribute("gradientUnits", "userSpaceOnUse"),
                  r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                  var l = this.stops;
                  for (s = 4 * t.g.p; s < r; s += 2)
                      (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                      h.appendChild(i),
                      l.push(i);
                  n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"),
                  "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                  n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                  1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
                  this.of = h,
                  this.ms = a,
                  this.ost = l,
                  this.maskId = g,
                  e.msElem = n
              }
          }
          ,
          extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
          extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
          var buildShapeString = function(t, e, i, s) {
              if (0 === e)
                  return "";
              var r, a = t.o, n = t.i, o = t.v, g = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
              for (r = 1; r < e; r += 1)
                  g += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[r][0], n[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
              return i && e && (g += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]),
              g += "z"),
              g
          }
            , SVGElementsRenderer = function() {
              var t = new Matrix
                , e = new Matrix;
              function i(t, e, i) {
                  (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
                  (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
              }
              function s() {}
              function r(i, s, r) {
                  var a, n, o, g, h, l, C, A, p, I, m, c = s.styles.length, u = s.lvl;
                  for (l = 0; l < c; l += 1) {
                      if (g = s.sh._mdf || r,
                      s.styles[l].lvl < u) {
                          for (A = e.reset(),
                          I = u - s.styles[l].lvl,
                          m = s.transformers.length - 1; !g && I > 0; )
                              g = s.transformers[m].mProps._mdf || g,
                              I -= 1,
                              m -= 1;
                          if (g)
                              for (I = u - s.styles[l].lvl,
                              m = s.transformers.length - 1; I > 0; )
                                  p = s.transformers[m].mProps.v.props,
                                  A.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]),
                                  I -= 1,
                                  m -= 1
                      } else
                          A = t;
                      if (n = (C = s.sh.paths)._length,
                      g) {
                          for (o = "",
                          a = 0; a < n; a += 1)
                              (h = C.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, A));
                          s.caches[l] = o
                      } else
                          o = s.caches[l];
                      s.styles[l].d += !0 === i.hd ? "" : o,
                      s.styles[l]._mdf = g || s.styles[l]._mdf
                  }
              }
              function a(t, e, i) {
                  var s = e.style;
                  (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                  (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
              }
              function n(t, e, i) {
                  o(t, e, i),
                  g(t, e, i)
              }
              function o(t, e, i) {
                  var s, r, a, n, o, g = e.gf, h = e.g._hasOpacity, l = e.s.v, C = e.e.v;
                  if (e.o._mdf || i) {
                      var A = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                      e.style.pElem.setAttribute(A, e.o.v)
                  }
                  if (e.s._mdf || i) {
                      var p = 1 === t.t ? "x1" : "cx"
                        , I = "x1" === p ? "y1" : "cy";
                      g.setAttribute(p, l[0]),
                      g.setAttribute(I, l[1]),
                      h && !e.g._collapsable && (e.of.setAttribute(p, l[0]),
                      e.of.setAttribute(I, l[1]))
                  }
                  if (e.g._cmdf || i) {
                      s = e.cst;
                      var m = e.g.c;
                      for (a = s.length,
                      r = 0; r < a; r += 1)
                          (n = s[r]).setAttribute("offset", m[4 * r] + "%"),
                          n.setAttribute("stop-color", "rgb(" + m[4 * r + 1] + "," + m[4 * r + 2] + "," + m[4 * r + 3] + ")")
                  }
                  if (h && (e.g._omdf || i)) {
                      var c = e.g.o;
                      for (a = (s = e.g._collapsable ? e.cst : e.ost).length,
                      r = 0; r < a; r += 1)
                          n = s[r],
                          e.g._collapsable || n.setAttribute("offset", c[2 * r] + "%"),
                          n.setAttribute("stop-opacity", c[2 * r + 1])
                  }
                  if (1 === t.t)
                      (e.e._mdf || i) && (g.setAttribute("x2", C[0]),
                      g.setAttribute("y2", C[1]),
                      h && !e.g._collapsable && (e.of.setAttribute("x2", C[0]),
                      e.of.setAttribute("y2", C[1])));
                  else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(l[0] - C[0], 2) + Math.pow(l[1] - C[1], 2)),
                  g.setAttribute("r", o),
                  h && !e.g._collapsable && e.of.setAttribute("r", o)),
                  e.e._mdf || e.h._mdf || e.a._mdf || i) {
                      o || (o = Math.sqrt(Math.pow(l[0] - C[0], 2) + Math.pow(l[1] - C[1], 2)));
                      var u = Math.atan2(C[1] - l[1], C[0] - l[0])
                        , f = e.h.v;
                      f >= 1 ? f = .99 : f <= -1 && (f = -.99);
                      var d = o * f
                        , y = Math.cos(u + e.a.v) * d + l[0]
                        , M = Math.sin(u + e.a.v) * d + l[1];
                      g.setAttribute("fx", y),
                      g.setAttribute("fy", M),
                      h && !e.g._collapsable && (e.of.setAttribute("fx", y),
                      e.of.setAttribute("fy", M))
                  }
              }
              function g(t, e, i) {
                  var s = e.style
                    , r = e.d;
                  r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute("stroke-dasharray", r.dashStr),
                  s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])),
                  e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                  (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v),
                  (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v),
                  s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
              }
              return {
                  createRenderFunction: function(t) {
                      switch (t.ty) {
                      case "fl":
                          return a;
                      case "gf":
                          return o;
                      case "gs":
                          return n;
                      case "st":
                          return g;
                      case "sh":
                      case "el":
                      case "rc":
                      case "sr":
                          return r;
                      case "tr":
                          return i;
                      case "no":
                          return s;
                      default:
                          return null
                      }
                  }
              }
          }();
          function SVGShapeElement(t, e, i) {
              this.shapes = [],
              this.shapesData = t.shapes,
              this.stylesList = [],
              this.shapeModifiers = [],
              this.itemsData = [],
              this.processedElements = [],
              this.animatedContents = [],
              this.initElement(t, e, i),
              this.prevViewData = []
          }
          function LetterProps(t, e, i, s, r, a) {
              this.o = t,
              this.sw = e,
              this.sc = i,
              this.fc = s,
              this.m = r,
              this.p = a,
              this._mdf = {
                  o: !0,
                  sw: !!e,
                  sc: !!i,
                  fc: !!s,
                  m: !0,
                  p: !0
              }
          }
          function TextProperty(t, e) {
              this._frameId = initialDefaultFrame,
              this.pv = "",
              this.v = "",
              this.kf = !1,
              this._isFirstFrame = !0,
              this._mdf = !1,
              this.data = e,
              this.elem = t,
              this.comp = this.elem.comp,
              this.keysIndex = 0,
              this.canResize = !1,
              this.minimumFontSize = 1,
              this.effectsSequence = [],
              this.currentData = {
                  ascent: 0,
                  boxWidth: this.defaultBoxWidth,
                  f: "",
                  fStyle: "",
                  fWeight: "",
                  fc: "",
                  j: "",
                  justifyOffset: "",
                  l: [],
                  lh: 0,
                  lineWidths: [],
                  ls: "",
                  of: "",
                  s: "",
                  sc: "",
                  sw: 0,
                  t: 0,
                  tr: 0,
                  sz: 0,
                  ps: null,
                  fillColorAnim: !1,
                  strokeColorAnim: !1,
                  strokeWidthAnim: !1,
                  yOffset: 0,
                  finalSize: 0,
                  finalText: [],
                  finalLineHeight: 0,
                  __complete: !1
              },
              this.copyData(this.currentData, this.data.d.k[0].s),
              this.searchProperty() || this.completeTextData(this.currentData)
          }
          extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
          SVGShapeElement.prototype.initSecondaryElement = function() {}
          ,
          SVGShapeElement.prototype.identityMatrix = new Matrix,
          SVGShapeElement.prototype.buildExpressionInterface = function() {}
          ,
          SVGShapeElement.prototype.createContent = function() {
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
              this.filterUniqueShapes()
          }
          ,
          SVGShapeElement.prototype.filterUniqueShapes = function() {
              var t, e, i, s, r = this.shapes.length, a = this.stylesList.length, n = [], o = !1;
              for (i = 0; i < a; i += 1) {
                  for (s = this.stylesList[i],
                  o = !1,
                  n.length = 0,
                  t = 0; t < r; t += 1)
                      -1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e),
                      o = e._isAnimated || o);
                  n.length > 1 && o && this.setShapesAsAnimated(n)
              }
          }
          ,
          SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
              var e, i = t.length;
              for (e = 0; e < i; e += 1)
                  t[e].setAsAnimated()
          }
          ,
          SVGShapeElement.prototype.createStyleElement = function(t, e) {
              var i, s = new SVGStyleData(t,e), r = s.pElem;
              if ("st" === t.ty)
                  i = new SVGStrokeStyleData(this,t,s);
              else if ("fl" === t.ty)
                  i = new SVGFillStyleData(this,t,s);
              else if ("gf" === t.ty || "gs" === t.ty) {
                  i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this,t,s),
                  this.globalData.defs.appendChild(i.gf),
                  i.maskId && (this.globalData.defs.appendChild(i.ms),
                  this.globalData.defs.appendChild(i.of),
                  r.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))
              } else
                  "no" === t.ty && (i = new SVGNoStyleData(this,t,s));
              return "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
              r.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
              r.setAttribute("fill-opacity", "0"),
              1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)),
              2 === t.r && r.setAttribute("fill-rule", "evenodd"),
              t.ln && r.setAttribute("id", t.ln),
              t.cl && r.setAttribute("class", t.cl),
              t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)),
              this.stylesList.push(s),
              this.addToAnimatedContents(t, i),
              i
          }
          ,
          SVGShapeElement.prototype.createGroupElement = function(t) {
              var e = new ShapeGroupData;
              return t.ln && e.gr.setAttribute("id", t.ln),
              t.cl && e.gr.setAttribute("class", t.cl),
              t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
              e
          }
          ,
          SVGShapeElement.prototype.createTransformElement = function(t, e) {
              var i = TransformPropertyFactory.getTransformProperty(this, t, this)
                , s = new SVGTransformData(i,i.o,e);
              return this.addToAnimatedContents(t, s),
              s
          }
          ,
          SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
              var s = 4;
              "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
              var r = new SVGShapeData(e,i,ShapePropertyFactory.getShapeProp(this, t, s, this));
              return this.shapes.push(r),
              this.addShapeToModifiers(r),
              this.addToAnimatedContents(t, r),
              r
          }
          ,
          SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
              for (var i = 0, s = this.animatedContents.length; i < s; ) {
                  if (this.animatedContents[i].element === e)
                      return;
                  i += 1
              }
              this.animatedContents.push({
                  fn: SVGElementsRenderer.createRenderFunction(t),
                  element: e,
                  data: t
              })
          }
          ,
          SVGShapeElement.prototype.setElementStyles = function(t) {
              var e, i = t.styles, s = this.stylesList.length;
              for (e = 0; e < s; e += 1)
                  this.stylesList[e].closed || i.push(this.stylesList[e])
          }
          ,
          SVGShapeElement.prototype.reloadShapes = function() {
              var t;
              this._isFirstFrame = !0;
              var e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                  this.prevViewData[t] = this.itemsData[t];
              for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
              this.filterUniqueShapes(),
              e = this.dynamicProperties.length,
              t = 0; t < e; t += 1)
                  this.dynamicProperties[t].getValue();
              this.renderModifiers()
          }
          ,
          SVGShapeElement.prototype.searchShapes = function(t, e, i, s, r, a, n) {
              var o, g, h, l, C, A, p = [].concat(a), I = t.length - 1, m = [], c = [];
              for (o = I; o >= 0; o -= 1) {
                  if ((A = this.searchProcessedElement(t[o])) ? e[o] = i[A - 1] : t[o]._render = n,
                  "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
                      A ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r),
                      t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem),
                      m.push(e[o].style);
                  else if ("gr" === t[o].ty) {
                      if (A)
                          for (h = e[o].it.length,
                          g = 0; g < h; g += 1)
                              e[o].prevViewData[g] = e[o].it[g];
                      else
                          e[o] = this.createGroupElement(t[o]);
                      this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, p, n),
                      t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
                  } else
                      "tr" === t[o].ty ? (A || (e[o] = this.createTransformElement(t[o], s)),
                      l = e[o].transform,
                      p.push(l)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (A || (e[o] = this.createShapeElement(t[o], p, r)),
                      this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (A ? (C = e[o]).closed = !1 : ((C = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                      e[o] = C,
                      this.shapeModifiers.push(C)),
                      c.push(C)) : "rp" === t[o].ty && (A ? (C = e[o]).closed = !0 : (C = ShapeModifiers.getModifier(t[o].ty),
                      e[o] = C,
                      C.init(this, t, o, e),
                      this.shapeModifiers.push(C),
                      n = !1),
                      c.push(C));
                  this.addProcessedElement(t[o], o + 1)
              }
              for (I = m.length,
              o = 0; o < I; o += 1)
                  m[o].closed = !0;
              for (I = c.length,
              o = 0; o < I; o += 1)
                  c[o].closed = !0
          }
          ,
          SVGShapeElement.prototype.renderInnerContent = function() {
              var t;
              this.renderModifiers();
              var e = this.stylesList.length;
              for (t = 0; t < e; t += 1)
                  this.stylesList[t].reset();
              for (this.renderShape(),
              t = 0; t < e; t += 1)
                  (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
                  this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
                  this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
          }
          ,
          SVGShapeElement.prototype.renderShape = function() {
              var t, e, i = this.animatedContents.length;
              for (t = 0; t < i; t += 1)
                  e = this.animatedContents[t],
                  (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
          }
          ,
          SVGShapeElement.prototype.destroy = function() {
              this.destroyBaseElement(),
              this.shapesData = null,
              this.itemsData = null
          }
          ,
          LetterProps.prototype.update = function(t, e, i, s, r, a) {
              this._mdf.o = !1,
              this._mdf.sw = !1,
              this._mdf.sc = !1,
              this._mdf.fc = !1,
              this._mdf.m = !1,
              this._mdf.p = !1;
              var n = !1;
              return this.o !== t && (this.o = t,
              this._mdf.o = !0,
              n = !0),
              this.sw !== e && (this.sw = e,
              this._mdf.sw = !0,
              n = !0),
              this.sc !== i && (this.sc = i,
              this._mdf.sc = !0,
              n = !0),
              this.fc !== s && (this.fc = s,
              this._mdf.fc = !0,
              n = !0),
              this.m !== r && (this.m = r,
              this._mdf.m = !0,
              n = !0),
              !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a,
              this._mdf.p = !0,
              n = !0),
              n
          }
          ,
          TextProperty.prototype.defaultBoxWidth = [0, 0],
          TextProperty.prototype.copyData = function(t, e) {
              for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t
          }
          ,
          TextProperty.prototype.setCurrentData = function(t) {
              t.__complete || this.completeTextData(t),
              this.currentData = t,
              this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
              this._mdf = !0
          }
          ,
          TextProperty.prototype.searchProperty = function() {
              return this.searchKeyframes()
          }
          ,
          TextProperty.prototype.searchKeyframes = function() {
              return this.kf = this.data.d.k.length > 1,
              this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
              this.kf
          }
          ,
          TextProperty.prototype.addEffect = function(t) {
              this.effectsSequence.push(t),
              this.elem.addDynamicProperty(this)
          }
          ,
          TextProperty.prototype.getValue = function(t) {
              if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                  var e = this.currentData
                    , i = this.keysIndex;
                  if (this.lock)
                      this.setCurrentData(this.currentData);
                  else {
                      var s;
                      this.lock = !0,
                      this._mdf = !1;
                      var r = this.effectsSequence.length
                        , a = t || this.data.d.k[this.keysIndex].s;
                      for (s = 0; s < r; s += 1)
                          a = i !== this.keysIndex ? this.effectsSequence[s](a, a.t) : this.effectsSequence[s](this.currentData, a.t);
                      e !== a && this.setCurrentData(a),
                      this.v = this.currentData,
                      this.pv = this.v,
                      this.lock = !1,
                      this.frameId = this.elem.globalData.frameId
                  }
              }
          }
          ,
          TextProperty.prototype.getKeyframeValue = function() {
              for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e); )
                  i += 1;
              return this.keysIndex !== i && (this.keysIndex = i),
              this.data.d.k[this.keysIndex].s
          }
          ,
          TextProperty.prototype.buildFinalText = function(t) {
              for (var e, i, s = [], r = 0, a = t.length, n = !1; r < a; )
                  e = t.charCodeAt(r),
                  FontManager.isCombinedCharacter(e) ? s[s.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343 ? (n || FontManager.isModifier(e, i) ? (s[s.length - 1] += t.substr(r, 2),
                  n = !1) : s.push(t.substr(r, 2)),
                  r += 1) : s.push(t.charAt(r)) : e > 56319 ? (i = t.charCodeAt(r + 1),
                  FontManager.isZeroWidthJoiner(e, i) ? (n = !0,
                  s[s.length - 1] += t.substr(r, 2),
                  r += 1) : s.push(t.charAt(r))) : FontManager.isZeroWidthJoiner(e) ? (s[s.length - 1] += t.charAt(r),
                  n = !0) : s.push(t.charAt(r)),
                  r += 1;
              return s
          }
          ,
          TextProperty.prototype.completeTextData = function(t) {
              t.__complete = !0;
              var e, i, s, r, a, n, o, g = this.elem.globalData.fontManager, h = this.data, l = [], C = 0, A = h.m.g, p = 0, I = 0, m = 0, c = [], u = 0, f = 0, d = g.getFontByName(t.f), y = 0, M = getFontProperties(d);
              t.fWeight = M.weight,
              t.fStyle = M.style,
              t.finalSize = t.s,
              t.finalText = this.buildFinalText(t.t),
              i = t.finalText.length,
              t.finalLineHeight = t.lh;
              var v, D = t.tr / 1e3 * t.finalSize;
              if (t.sz)
                  for (var x, w, E = !0, b = t.sz[0], L = t.sz[1]; E; ) {
                      x = 0,
                      u = 0,
                      i = (w = this.buildFinalText(t.t)).length,
                      D = t.tr / 1e3 * t.finalSize;
                      var _ = -1;
                      for (e = 0; e < i; e += 1)
                          v = w[e].charCodeAt(0),
                          s = !1,
                          " " === w[e] ? _ = e : 13 !== v && 3 !== v || (u = 0,
                          s = !0,
                          x += t.finalLineHeight || 1.2 * t.finalSize),
                          g.chars ? (o = g.getCharData(w[e], d.fStyle, d.fFamily),
                          y = s ? 0 : o.w * t.finalSize / 100) : y = g.measureText(w[e], t.f, t.finalSize),
                          u + y > b && " " !== w[e] ? (-1 === _ ? i += 1 : e = _,
                          x += t.finalLineHeight || 1.2 * t.finalSize,
                          w.splice(e, _ === e ? 1 : 0, "\r"),
                          _ = -1,
                          u = 0) : (u += y,
                          u += D);
                      x += d.ascent * t.finalSize / 100,
                      this.canResize && t.finalSize > this.minimumFontSize && L < x ? (t.finalSize -= 1,
                      t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w,
                      i = t.finalText.length,
                      E = !1)
                  }
              u = -D,
              y = 0;
              var S, T = 0;
              for (e = 0; e < i; e += 1)
                  if (s = !1,
                  13 === (v = (S = t.finalText[e]).charCodeAt(0)) || 3 === v ? (T = 0,
                  c.push(u),
                  f = u > f ? u : f,
                  u = -2 * D,
                  r = "",
                  s = !0,
                  m += 1) : r = S,
                  g.chars ? (o = g.getCharData(S, d.fStyle, g.getFontByName(t.f).fFamily),
                  y = s ? 0 : o.w * t.finalSize / 100) : y = g.measureText(r, t.f, t.finalSize),
                  " " === S ? T += y + D : (u += y + D + T,
                  T = 0),
                  l.push({
                      l: y,
                      an: y,
                      add: p,
                      n: s,
                      anIndexes: [],
                      val: r,
                      line: m,
                      animatorJustifyOffset: 0
                  }),
                  2 == A) {
                      if (p += y,
                      "" === r || " " === r || e === i - 1) {
                          for ("" !== r && " " !== r || (p -= y); I <= e; )
                              l[I].an = p,
                              l[I].ind = C,
                              l[I].extra = y,
                              I += 1;
                          C += 1,
                          p = 0
                      }
                  } else if (3 == A) {
                      if (p += y,
                      "" === r || e === i - 1) {
                          for ("" === r && (p -= y); I <= e; )
                              l[I].an = p,
                              l[I].ind = C,
                              l[I].extra = y,
                              I += 1;
                          p = 0,
                          C += 1
                      }
                  } else
                      l[C].ind = C,
                      l[C].extra = 0,
                      C += 1;
              if (t.l = l,
              f = u > f ? u : f,
              c.push(u),
              t.sz)
                  t.boxWidth = t.sz[0],
                  t.justifyOffset = 0;
              else
                  switch (t.boxWidth = f,
                  t.j) {
                  case 1:
                      t.justifyOffset = -t.boxWidth;
                      break;
                  case 2:
                      t.justifyOffset = -t.boxWidth / 2;
                      break;
                  default:
                      t.justifyOffset = 0
                  }
              t.lineWidths = c;
              var P, k, N, j, F = h.a;
              n = F.length;
              var z = [];
              for (a = 0; a < n; a += 1) {
                  for ((P = F[a]).a.sc && (t.strokeColorAnim = !0),
                  P.a.sw && (t.strokeWidthAnim = !0),
                  (P.a.fc || P.a.fh || P.a.fs || P.a.fb) && (t.fillColorAnim = !0),
                  j = 0,
                  N = P.s.b,
                  e = 0; e < i; e += 1)
                      (k = l[e]).anIndexes[a] = j,
                      (1 == N && "" !== k.val || 2 == N && "" !== k.val && " " !== k.val || 3 == N && (k.n || " " == k.val || e == i - 1) || 4 == N && (k.n || e == i - 1)) && (1 === P.s.rn && z.push(j),
                      j += 1);
                  h.a[a].s.totalChars = j;
                  var O, B = -1;
                  if (1 === P.s.rn)
                      for (e = 0; e < i; e += 1)
                          B != (k = l[e]).anIndexes[a] && (B = k.anIndexes[a],
                          O = z.splice(Math.floor(Math.random() * z.length), 1)[0]),
                          k.anIndexes[a] = O
              }
              t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
              t.ls = t.ls || 0,
              t.ascent = d.ascent * t.finalSize / 100
          }
          ,
          TextProperty.prototype.updateDocumentData = function(t, e) {
              e = void 0 === e ? this.keysIndex : e;
              var i = this.copyData({}, this.data.d.k[e].s);
              i = this.copyData(i, t),
              this.data.d.k[e].s = i,
              this.recalculate(e),
              this.elem.addDynamicProperty(this)
          }
          ,
          TextProperty.prototype.recalculate = function(t) {
              var e = this.data.d.k[t].s;
              e.__complete = !1,
              this.keysIndex = 0,
              this._isFirstFrame = !0,
              this.getValue(e)
          }
          ,
          TextProperty.prototype.canResizeFont = function(t) {
              this.canResize = t,
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this)
          }
          ,
          TextProperty.prototype.setMinimumFontSize = function(t) {
              this.minimumFontSize = Math.floor(t) || 1,
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this)
          }
          ;
          var TextSelectorProp = function() {
              var t = Math.max
                , e = Math.min
                , i = Math.floor;
              function s(t, e) {
                  this._currentTextLength = -1,
                  this.k = !1,
                  this.data = e,
                  this.elem = t,
                  this.comp = t.comp,
                  this.finalS = 0,
                  this.finalE = 0,
                  this.initDynamicPropertyContainer(t),
                  this.s = PropertyFactory.getProp(t, e.s || {
                      k: 0
                  }, 0, 0, this),
                  this.e = "e"in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                      v: 100
                  },
                  this.o = PropertyFactory.getProp(t, e.o || {
                      k: 0
                  }, 0, 0, this),
                  this.xe = PropertyFactory.getProp(t, e.xe || {
                      k: 0
                  }, 0, 0, this),
                  this.ne = PropertyFactory.getProp(t, e.ne || {
                      k: 0
                  }, 0, 0, this),
                  this.sm = PropertyFactory.getProp(t, e.sm || {
                      k: 100
                  }, 0, 0, this),
                  this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
                  this.dynamicProperties.length || this.getValue()
              }
              return s.prototype = {
                  getMult: function(s) {
                      this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                      var r = 0
                        , a = 0
                        , n = 1
                        , o = 1;
                      this.ne.v > 0 ? r = this.ne.v / 100 : a = -this.ne.v / 100,
                      this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                      var g = BezierFactory.getBezierEasing(r, a, n, o).get
                        , h = 0
                        , l = this.finalS
                        , C = this.finalE
                        , A = this.data.sh;
                      if (2 === A)
                          h = g(h = C === l ? s >= C ? 1 : 0 : t(0, e(.5 / (C - l) + (s - l) / (C - l), 1)));
                      else if (3 === A)
                          h = g(h = C === l ? s >= C ? 0 : 1 : 1 - t(0, e(.5 / (C - l) + (s - l) / (C - l), 1)));
                      else if (4 === A)
                          C === l ? h = 0 : (h = t(0, e(.5 / (C - l) + (s - l) / (C - l), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5),
                          h = g(h);
                      else if (5 === A) {
                          if (C === l)
                              h = 0;
                          else {
                              var p = C - l
                                , I = -p / 2 + (s = e(t(0, s + .5 - l), C - l))
                                , m = p / 2;
                              h = Math.sqrt(1 - I * I / (m * m))
                          }
                          h = g(h)
                      } else
                          6 === A ? (C === l ? h = 0 : (s = e(t(0, s + .5 - l), C - l),
                          h = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (C - l))) / 2),
                          h = g(h)) : (s >= i(l) && (h = t(0, e(s - l < 0 ? e(C, 1) - (l - s) : C - s, 1))),
                          h = g(h));
                      if (100 !== this.sm.v) {
                          var c = .01 * this.sm.v;
                          0 === c && (c = 1e-8);
                          var u = .5 - .5 * c;
                          h < u ? h = 0 : (h = (h - u) / c) > 1 && (h = 1)
                      }
                      return h * this.a.v
                  },
                  getValue: function(t) {
                      this.iterateDynamicProperties(),
                      this._mdf = t || this._mdf,
                      this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                      t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                      var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars
                        , i = this.o.v / e
                        , s = this.s.v / e + i
                        , r = this.e.v / e + i;
                      if (s > r) {
                          var a = s;
                          s = r,
                          r = a
                      }
                      this.finalS = s,
                      this.finalE = r
                  }
              },
              extendPrototype([DynamicPropertyContainer], s),
              {
                  getTextSelectorProp: function(t, e, i) {
                      return new s(t,e,i)
                  }
              }
          }();
          function TextAnimatorDataProperty(t, e, i) {
              var s = {
                  propType: !1
              }
                , r = PropertyFactory.getProp
                , a = e.a;
              this.a = {
                  r: a.r ? r(t, a.r, 0, degToRads, i) : s,
                  rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
                  ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
                  sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
                  sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
                  s: a.s ? r(t, a.s, 1, .01, i) : s,
                  a: a.a ? r(t, a.a, 1, 0, i) : s,
                  o: a.o ? r(t, a.o, 0, .01, i) : s,
                  p: a.p ? r(t, a.p, 1, 0, i) : s,
                  sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
                  sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
                  fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
                  fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
                  fs: a.fs ? r(t, a.fs, 0, .01, i) : s,
                  fb: a.fb ? r(t, a.fb, 0, .01, i) : s,
                  t: a.t ? r(t, a.t, 0, 0, i) : s
              },
              this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i),
              this.s.t = e.s.t
          }
          function TextAnimatorProperty(t, e, i) {
              this._isFirstFrame = !0,
              this._hasMaskedPath = !1,
              this._frameId = -1,
              this._textData = t,
              this._renderType = e,
              this._elem = i,
              this._animatorsData = createSizedArray(this._textData.a.length),
              this._pathData = {},
              this._moreOptions = {
                  alignment: {}
              },
              this.renderedLetters = [],
              this.lettersChangedFlag = !1,
              this.initDynamicPropertyContainer(i)
          }
          function ITextElement() {}
          TextAnimatorProperty.prototype.searchProperties = function() {
              var t, e, i = this._textData.a.length, s = PropertyFactory.getProp;
              for (t = 0; t < i; t += 1)
                  e = this._textData.a[t],
                  this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,e,this);
              this._textData.p && "m"in this._textData.p ? (this._pathData = {
                  a: s(this._elem, this._textData.p.a, 0, 0, this),
                  f: s(this._elem, this._textData.p.f, 0, 0, this),
                  l: s(this._elem, this._textData.p.l, 0, 0, this),
                  r: s(this._elem, this._textData.p.r, 0, 0, this),
                  p: s(this._elem, this._textData.p.p, 0, 0, this),
                  m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
              },
              this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
              this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
          }
          ,
          TextAnimatorProperty.prototype.getMeasures = function(t, e) {
              if (this.lettersChangedFlag = e,
              this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                  this._isFirstFrame = !1;
                  var i, s, r, a, n, o, g, h, l, C, A, p, I, m, c, u, f, d, y, M = this._moreOptions.alignment.v, v = this._animatorsData, D = this._textData, x = this.mHelper, w = this._renderType, E = this.renderedLetters.length, b = t.l;
                  if (this._hasMaskedPath) {
                      if (y = this._pathData.m,
                      !this._pathData.n || this._pathData._mdf) {
                          var L, _ = y.v;
                          for (this._pathData.r.v && (_ = _.reverse()),
                          n = {
                              tLength: 0,
                              segments: []
                          },
                          a = _._length - 1,
                          u = 0,
                          r = 0; r < a; r += 1)
                              L = bez.buildBezierData(_.v[r], _.v[r + 1], [_.o[r][0] - _.v[r][0], _.o[r][1] - _.v[r][1]], [_.i[r + 1][0] - _.v[r + 1][0], _.i[r + 1][1] - _.v[r + 1][1]]),
                              n.tLength += L.segmentLength,
                              n.segments.push(L),
                              u += L.segmentLength;
                          r = a,
                          y.v.c && (L = bez.buildBezierData(_.v[r], _.v[0], [_.o[r][0] - _.v[r][0], _.o[r][1] - _.v[r][1]], [_.i[0][0] - _.v[0][0], _.i[0][1] - _.v[0][1]]),
                          n.tLength += L.segmentLength,
                          n.segments.push(L),
                          u += L.segmentLength),
                          this._pathData.pi = n
                      }
                      if (n = this._pathData.pi,
                      o = this._pathData.f.v,
                      A = 0,
                      C = 1,
                      h = 0,
                      l = !0,
                      m = n.segments,
                      o < 0 && y.v.c)
                          for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                          C = (I = m[A = m.length - 1].points).length - 1; o < 0; )
                              o += I[C].partialLength,
                              (C -= 1) < 0 && (C = (I = m[A -= 1].points).length - 1);
                      p = (I = m[A].points)[C - 1],
                      c = (g = I[C]).partialLength
                  }
                  a = b.length,
                  i = 0,
                  s = 0;
                  var S, T, P, k, N, j = 1.2 * t.finalSize * .714, F = !0;
                  P = v.length;
                  var z, O, B, R, V, G, Q, Y, H, U, W, Z, q = -1, K = o, J = A, $ = C, X = -1, tt = "", et = this.defaultPropsArray;
                  if (2 === t.j || 1 === t.j) {
                      var it = 0
                        , st = 0
                        , rt = 2 === t.j ? -.5 : -1
                        , at = 0
                        , nt = !0;
                      for (r = 0; r < a; r += 1)
                          if (b[r].n) {
                              for (it && (it += st); at < r; )
                                  b[at].animatorJustifyOffset = it,
                                  at += 1;
                              it = 0,
                              nt = !0
                          } else {
                              for (T = 0; T < P; T += 1)
                                  (S = v[T].a).t.propType && (nt && 2 === t.j && (st += S.t.v * rt),
                                  (N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars)).length ? it += S.t.v * N[0] * rt : it += S.t.v * N * rt);
                              nt = !1
                          }
                      for (it && (it += st); at < r; )
                          b[at].animatorJustifyOffset = it,
                          at += 1
                  }
                  for (r = 0; r < a; r += 1) {
                      if (x.reset(),
                      R = 1,
                      b[r].n)
                          i = 0,
                          s += t.yOffset,
                          s += F ? 1 : 0,
                          o = K,
                          F = !1,
                          this._hasMaskedPath && (C = $,
                          p = (I = m[A = J].points)[C - 1],
                          c = (g = I[C]).partialLength,
                          h = 0),
                          tt = "",
                          W = "",
                          H = "",
                          Z = "",
                          et = this.defaultPropsArray;
                      else {
                          if (this._hasMaskedPath) {
                              if (X !== b[r].line) {
                                  switch (t.j) {
                                  case 1:
                                      o += u - t.lineWidths[b[r].line];
                                      break;
                                  case 2:
                                      o += (u - t.lineWidths[b[r].line]) / 2
                                  }
                                  X = b[r].line
                              }
                              q !== b[r].ind && (b[q] && (o += b[q].extra),
                              o += b[r].an / 2,
                              q = b[r].ind),
                              o += M[0] * b[r].an * .005;
                              var ot = 0;
                              for (T = 0; T < P; T += 1)
                                  (S = v[T].a).p.propType && ((N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars)).length ? ot += S.p.v[0] * N[0] : ot += S.p.v[0] * N),
                                  S.a.propType && ((N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars)).length ? ot += S.a.v[0] * N[0] : ot += S.a.v[0] * N);
                              for (l = !0,
                              this._pathData.a.v && (o = .5 * b[0].an + (u - this._pathData.f.v - .5 * b[0].an - .5 * b[b.length - 1].an) * q / (a - 1),
                              o += this._pathData.f.v); l; )
                                  h + c >= o + ot || !I ? (f = (o + ot - h) / g.partialLength,
                                  O = p.point[0] + (g.point[0] - p.point[0]) * f,
                                  B = p.point[1] + (g.point[1] - p.point[1]) * f,
                                  x.translate(-M[0] * b[r].an * .005, -M[1] * j * .01),
                                  l = !1) : I && (h += g.partialLength,
                                  (C += 1) >= I.length && (C = 0,
                                  m[A += 1] ? I = m[A].points : y.v.c ? (C = 0,
                                  I = m[A = 0].points) : (h -= g.partialLength,
                                  I = null)),
                                  I && (p = g,
                                  c = (g = I[C]).partialLength));
                              z = b[r].an / 2 - b[r].add,
                              x.translate(-z, 0, 0)
                          } else
                              z = b[r].an / 2 - b[r].add,
                              x.translate(-z, 0, 0),
                              x.translate(-M[0] * b[r].an * .005, -M[1] * j * .01, 0);
                          for (T = 0; T < P; T += 1)
                              (S = v[T].a).t.propType && (N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars),
                              0 === i && 0 === t.j || (this._hasMaskedPath ? N.length ? o += S.t.v * N[0] : o += S.t.v * N : N.length ? i += S.t.v * N[0] : i += S.t.v * N));
                          for (t.strokeWidthAnim && (G = t.sw || 0),
                          t.strokeColorAnim && (V = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                          t.fillColorAnim && t.fc && (Q = [t.fc[0], t.fc[1], t.fc[2]]),
                          T = 0; T < P; T += 1)
                              (S = v[T].a).a.propType && ((N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars)).length ? x.translate(-S.a.v[0] * N[0], -S.a.v[1] * N[1], S.a.v[2] * N[2]) : x.translate(-S.a.v[0] * N, -S.a.v[1] * N, S.a.v[2] * N));
                          for (T = 0; T < P; T += 1)
                              (S = v[T].a).s.propType && ((N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars)).length ? x.scale(1 + (S.s.v[0] - 1) * N[0], 1 + (S.s.v[1] - 1) * N[1], 1) : x.scale(1 + (S.s.v[0] - 1) * N, 1 + (S.s.v[1] - 1) * N, 1));
                          for (T = 0; T < P; T += 1) {
                              if (S = v[T].a,
                              N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars),
                              S.sk.propType && (N.length ? x.skewFromAxis(-S.sk.v * N[0], S.sa.v * N[1]) : x.skewFromAxis(-S.sk.v * N, S.sa.v * N)),
                              S.r.propType && (N.length ? x.rotateZ(-S.r.v * N[2]) : x.rotateZ(-S.r.v * N)),
                              S.ry.propType && (N.length ? x.rotateY(S.ry.v * N[1]) : x.rotateY(S.ry.v * N)),
                              S.rx.propType && (N.length ? x.rotateX(S.rx.v * N[0]) : x.rotateX(S.rx.v * N)),
                              S.o.propType && (N.length ? R += (S.o.v * N[0] - R) * N[0] : R += (S.o.v * N - R) * N),
                              t.strokeWidthAnim && S.sw.propType && (N.length ? G += S.sw.v * N[0] : G += S.sw.v * N),
                              t.strokeColorAnim && S.sc.propType)
                                  for (Y = 0; Y < 3; Y += 1)
                                      N.length ? V[Y] += (S.sc.v[Y] - V[Y]) * N[0] : V[Y] += (S.sc.v[Y] - V[Y]) * N;
                              if (t.fillColorAnim && t.fc) {
                                  if (S.fc.propType)
                                      for (Y = 0; Y < 3; Y += 1)
                                          N.length ? Q[Y] += (S.fc.v[Y] - Q[Y]) * N[0] : Q[Y] += (S.fc.v[Y] - Q[Y]) * N;
                                  S.fh.propType && (Q = N.length ? addHueToRGB(Q, S.fh.v * N[0]) : addHueToRGB(Q, S.fh.v * N)),
                                  S.fs.propType && (Q = N.length ? addSaturationToRGB(Q, S.fs.v * N[0]) : addSaturationToRGB(Q, S.fs.v * N)),
                                  S.fb.propType && (Q = N.length ? addBrightnessToRGB(Q, S.fb.v * N[0]) : addBrightnessToRGB(Q, S.fb.v * N))
                              }
                          }
                          for (T = 0; T < P; T += 1)
                              (S = v[T].a).p.propType && (N = v[T].s.getMult(b[r].anIndexes[T], D.a[T].s.totalChars),
                              this._hasMaskedPath ? N.length ? x.translate(0, S.p.v[1] * N[0], -S.p.v[2] * N[1]) : x.translate(0, S.p.v[1] * N, -S.p.v[2] * N) : N.length ? x.translate(S.p.v[0] * N[0], S.p.v[1] * N[1], -S.p.v[2] * N[2]) : x.translate(S.p.v[0] * N, S.p.v[1] * N, -S.p.v[2] * N));
                          if (t.strokeWidthAnim && (H = G < 0 ? 0 : G),
                          t.strokeColorAnim && (U = "rgb(" + Math.round(255 * V[0]) + "," + Math.round(255 * V[1]) + "," + Math.round(255 * V[2]) + ")"),
                          t.fillColorAnim && t.fc && (W = "rgb(" + Math.round(255 * Q[0]) + "," + Math.round(255 * Q[1]) + "," + Math.round(255 * Q[2]) + ")"),
                          this._hasMaskedPath) {
                              if (x.translate(0, -t.ls),
                              x.translate(0, M[1] * j * .01 + s, 0),
                              this._pathData.p.v) {
                                  d = (g.point[1] - p.point[1]) / (g.point[0] - p.point[0]);
                                  var gt = 180 * Math.atan(d) / Math.PI;
                                  g.point[0] < p.point[0] && (gt += 180),
                                  x.rotate(-gt * Math.PI / 180)
                              }
                              x.translate(O, B, 0),
                              o -= M[0] * b[r].an * .005,
                              b[r + 1] && q !== b[r + 1].ind && (o += b[r].an / 2,
                              o += .001 * t.tr * t.finalSize)
                          } else {
                              switch (x.translate(i, s, 0),
                              t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                              t.j) {
                              case 1:
                                  x.translate(b[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[b[r].line]), 0, 0);
                                  break;
                              case 2:
                                  x.translate(b[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[b[r].line]) / 2, 0, 0)
                              }
                              x.translate(0, -t.ls),
                              x.translate(z, 0, 0),
                              x.translate(M[0] * b[r].an * .005, M[1] * j * .01, 0),
                              i += b[r].l + .001 * t.tr * t.finalSize
                          }
                          "html" === w ? tt = x.toCSS() : "svg" === w ? tt = x.to2dCSS() : et = [x.props[0], x.props[1], x.props[2], x.props[3], x.props[4], x.props[5], x.props[6], x.props[7], x.props[8], x.props[9], x.props[10], x.props[11], x.props[12], x.props[13], x.props[14], x.props[15]],
                          Z = R
                      }
                      E <= r ? (k = new LetterProps(Z,H,U,W,tt,et),
                      this.renderedLetters.push(k),
                      E += 1,
                      this.lettersChangedFlag = !0) : (k = this.renderedLetters[r],
                      this.lettersChangedFlag = k.update(Z, H, U, W, tt, et) || this.lettersChangedFlag)
                  }
              }
          }
          ,
          TextAnimatorProperty.prototype.getValue = function() {
              this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
              this.iterateDynamicProperties())
          }
          ,
          TextAnimatorProperty.prototype.mHelper = new Matrix,
          TextAnimatorProperty.prototype.defaultPropsArray = [],
          extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
          ITextElement.prototype.initElement = function(t, e, i) {
              this.lettersChangedFlag = !0,
              this.initFrame(),
              this.initBaseData(t, e, i),
              this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
              this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
              this.initTransform(t, e, i),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide(),
              this.textAnimator.searchProperties(this.dynamicProperties)
          }
          ,
          ITextElement.prototype.prepareFrame = function(t) {
              this._mdf = !1,
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
              this.textProperty._isFirstFrame = !1,
              this.textProperty._mdf = !1)
          }
          ,
          ITextElement.prototype.createPathShape = function(t, e) {
              var i, s, r = e.length, a = "";
              for (i = 0; i < r; i += 1)
                  "sh" === e[i].ty && (s = e[i].ks.k,
                  a += buildShapeString(s, s.i.length, !0, t));
              return a
          }
          ,
          ITextElement.prototype.updateDocumentData = function(t, e) {
              this.textProperty.updateDocumentData(t, e)
          }
          ,
          ITextElement.prototype.canResizeFont = function(t) {
              this.textProperty.canResizeFont(t)
          }
          ,
          ITextElement.prototype.setMinimumFontSize = function(t) {
              this.textProperty.setMinimumFontSize(t)
          }
          ,
          ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, r) {
              switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
              e.translate(0, -t.ls, 0),
              t.j) {
              case 1:
                  e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                  break;
              case 2:
                  e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
              }
              e.translate(s, r, 0)
          }
          ,
          ITextElement.prototype.buildColor = function(t) {
              return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
          }
          ,
          ITextElement.prototype.emptyProp = new LetterProps,
          ITextElement.prototype.destroy = function() {}
          ;
          var emptyShapeData = {
              shapes: []
          };
          function SVGTextLottieElement(t, e, i) {
              this.textSpans = [],
              this.renderType = "svg",
              this.initElement(t, e, i)
          }
          function ISolidElement(t, e, i) {
              this.initElement(t, e, i)
          }
          function NullElement(t, e, i) {
              this.initFrame(),
              this.initBaseData(t, e, i),
              this.initFrame(),
              this.initTransform(t, e, i),
              this.initHierarchy()
          }
          function SVGRendererBase() {}
          function ICompElement() {}
          function SVGCompElement(t, e, i) {
              this.layers = t.layers,
              this.supports3d = !0,
              this.completeLayers = !1,
              this.pendingElements = [],
              this.elements = this.layers ? createSizedArray(this.layers.length) : [],
              this.initElement(t, e, i),
              this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                  _placeholder: !0
              }
          }
          function SVGRenderer(t, e) {
              this.animationItem = t,
              this.layers = null,
              this.renderedFrame = -1,
              this.svgElement = createNS("svg");
              var i = "";
              if (e && e.title) {
                  var s = createNS("title")
                    , r = createElementID();
                  s.setAttribute("id", r),
                  s.textContent = e.title,
                  this.svgElement.appendChild(s),
                  i += r
              }
              if (e && e.description) {
                  var a = createNS("desc")
                    , n = createElementID();
                  a.setAttribute("id", n),
                  a.textContent = e.description,
                  this.svgElement.appendChild(a),
                  i += " " + n
              }
              i && this.svgElement.setAttribute("aria-labelledby", i);
              var o = createNS("defs");
              this.svgElement.appendChild(o);
              var g = createNS("g");
              this.svgElement.appendChild(g),
              this.layerElement = g,
              this.renderConfig = {
                  preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                  imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                  contentVisibility: e && e.contentVisibility || "visible",
                  progressiveLoad: e && e.progressiveLoad || !1,
                  hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                  viewBoxOnly: e && e.viewBoxOnly || !1,
                  viewBoxSize: e && e.viewBoxSize || !1,
                  className: e && e.className || "",
                  id: e && e.id || "",
                  focusable: e && e.focusable,
                  filterSize: {
                      width: e && e.filterSize && e.filterSize.width || "100%",
                      height: e && e.filterSize && e.filterSize.height || "100%",
                      x: e && e.filterSize && e.filterSize.x || "0%",
                      y: e && e.filterSize && e.filterSize.y || "0%"
                  },
                  width: e && e.width,
                  height: e && e.height
              },
              this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  defs: o,
                  renderConfig: this.renderConfig
              },
              this.elements = [],
              this.pendingElements = [],
              this.destroyed = !1,
              this.rendererType = "svg"
          }
          function CVContextData() {
              var t;
              this.saved = [],
              this.cArrPos = 0,
              this.cTr = new Matrix,
              this.cO = 1;
              for (this.savedOp = createTypedArray("float32", 15),
              t = 0; t < 15; t += 1)
                  this.saved[t] = createTypedArray("float32", 16);
              this._length = 15
          }
          function ShapeTransformManager() {
              this.sequences = {},
              this.sequenceList = [],
              this.transform_key_count = 0
          }
          function CVEffects() {}
          function CVMaskElement(t, e) {
              var i;
              this.data = t,
              this.element = e,
              this.masksProperties = this.data.masksProperties || [],
              this.viewData = createSizedArray(this.masksProperties.length);
              var s = this.masksProperties.length
                , r = !1;
              for (i = 0; i < s; i += 1)
                  "n" !== this.masksProperties[i].mode && (r = !0),
                  this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
              this.hasMasks = r,
              r && this.element.addRenderableComponent(this)
          }
          function CVBaseElement() {}
          function CVShapeData(t, e, i, s) {
              this.styledShapes = [],
              this.tr = [0, 0, 0, 0, 0, 0];
              var r, a = 4;
              "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7),
              this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
              var n, o = i.length;
              for (r = 0; r < o; r += 1)
                  i[r].closed || (n = {
                      transforms: s.addTransformSequence(i[r].transforms),
                      trNodes: []
                  },
                  this.styledShapes.push(n),
                  i[r].elements.push(n))
          }
          function CVShapeElement(t, e, i) {
              this.shapes = [],
              this.shapesData = t.shapes,
              this.stylesList = [],
              this.itemsData = [],
              this.prevViewData = [],
              this.shapeModifiers = [],
              this.processedElements = [],
              this.transformsManager = new ShapeTransformManager,
              this.initElement(t, e, i)
          }
          function CVTextElement(t, e, i) {
              this.textSpans = [],
              this.yOffset = 0,
              this.fillColorAnim = !1,
              this.strokeColorAnim = !1,
              this.strokeWidthAnim = !1,
              this.stroke = !1,
              this.fill = !1,
              this.justifyOffset = 0,
              this.currentRender = null,
              this.renderType = "canvas",
              this.values = {
                  fill: "rgba(0,0,0,0)",
                  stroke: "rgba(0,0,0,0)",
                  sWidth: 0,
                  fValue: ""
              },
              this.initElement(t, e, i)
          }
          function CVImageElement(t, e, i) {
              this.assetData = e.getAssetData(t.refId),
              this.img = e.imageLoader.getAsset(this.assetData),
              this.initElement(t, e, i)
          }
          function CVSolidElement(t, e, i) {
              this.initElement(t, e, i)
          }
          function CanvasRendererBase(t, e) {
              this.animationItem = t,
              this.renderConfig = {
                  clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                  context: e && e.context || null,
                  progressiveLoad: e && e.progressiveLoad || !1,
                  preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                  imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                  contentVisibility: e && e.contentVisibility || "visible",
                  className: e && e.className || "",
                  id: e && e.id || ""
              },
              this.renderConfig.dpr = e && e.dpr || 1,
              this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
              this.renderedFrame = -1,
              this.globalData = {
                  frameNum: -1,
                  _mdf: !1,
                  renderConfig: this.renderConfig,
                  currentGlobalAlpha: -1
              },
              this.contextData = new CVContextData,
              this.elements = [],
              this.pendingElements = [],
              this.transformMat = new Matrix,
              this.completeLayers = !1,
              this.rendererType = "canvas"
          }
          function CVCompElement(t, e, i) {
              this.completeLayers = !1,
              this.layers = t.layers,
              this.pendingElements = [],
              this.elements = createSizedArray(this.layers.length),
              this.initElement(t, e, i),
              this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                  _placeholder: !0
              }
          }
          function CanvasRenderer(t, e) {
              this.animationItem = t,
              this.renderConfig = {
                  clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                  context: e && e.context || null,
                  progressiveLoad: e && e.progressiveLoad || !1,
                  preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                  imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                  contentVisibility: e && e.contentVisibility || "visible",
                  className: e && e.className || "",
                  id: e && e.id || ""
              },
              this.renderConfig.dpr = e && e.dpr || 1,
              this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
              this.renderedFrame = -1,
              this.globalData = {
                  frameNum: -1,
                  _mdf: !1,
                  renderConfig: this.renderConfig,
                  currentGlobalAlpha: -1
              },
              this.contextData = new CVContextData,
              this.elements = [],
              this.pendingElements = [],
              this.transformMat = new Matrix,
              this.completeLayers = !1,
              this.rendererType = "canvas"
          }
          function HBaseElement() {}
          function HSolidElement(t, e, i) {
              this.initElement(t, e, i)
          }
          function HShapeElement(t, e, i) {
              this.shapes = [],
              this.shapesData = t.shapes,
              this.stylesList = [],
              this.shapeModifiers = [],
              this.itemsData = [],
              this.processedElements = [],
              this.animatedContents = [],
              this.shapesContainer = createNS("g"),
              this.initElement(t, e, i),
              this.prevViewData = [],
              this.currentBBox = {
                  x: 999999,
                  y: -999999,
                  h: 0,
                  w: 0
              }
          }
          function HTextElement(t, e, i) {
              this.textSpans = [],
              this.textPaths = [],
              this.currentBBox = {
                  x: 999999,
                  y: -999999,
                  h: 0,
                  w: 0
              },
              this.renderType = "svg",
              this.isMasked = !1,
              this.initElement(t, e, i)
          }
          function HCameraElement(t, e, i) {
              this.initFrame(),
              this.initBaseData(t, e, i),
              this.initHierarchy();
              var s = PropertyFactory.getProp;
              if (this.pe = s(this, t.pe, 0, 0, this),
              t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this),
              this.py = s(this, t.ks.p.y, 1, 0, this),
              this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this),
              t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)),
              t.ks.or.k.length && t.ks.or.k[0].to) {
                  var r, a = t.ks.or.k.length;
                  for (r = 0; r < a; r += 1)
                      t.ks.or.k[r].to = null,
                      t.ks.or.k[r].ti = null
              }
              this.or = s(this, t.ks.or, 1, degToRads, this),
              this.or.sh = !0,
              this.rx = s(this, t.ks.rx, 0, degToRads, this),
              this.ry = s(this, t.ks.ry, 0, degToRads, this),
              this.rz = s(this, t.ks.rz, 0, degToRads, this),
              this.mat = new Matrix,
              this._prevMat = new Matrix,
              this._isFirstFrame = !0,
              this.finalTransform = {
                  mProp: this
              }
          }
          function HImageElement(t, e, i) {
              this.assetData = e.getAssetData(t.refId),
              this.initElement(t, e, i)
          }
          function HybridRendererBase(t, e) {
              this.animationItem = t,
              this.layers = null,
              this.renderedFrame = -1,
              this.renderConfig = {
                  className: e && e.className || "",
                  imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                  hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                  filterSize: {
                      width: e && e.filterSize && e.filterSize.width || "400%",
                      height: e && e.filterSize && e.filterSize.height || "400%",
                      x: e && e.filterSize && e.filterSize.x || "-100%",
                      y: e && e.filterSize && e.filterSize.y || "-100%"
                  }
              },
              this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  renderConfig: this.renderConfig
              },
              this.pendingElements = [],
              this.elements = [],
              this.threeDElements = [],
              this.destroyed = !1,
              this.camera = null,
              this.supports3d = !0,
              this.rendererType = "html"
          }
          function HCompElement(t, e, i) {
              this.layers = t.layers,
              this.supports3d = !t.hasMask,
              this.completeLayers = !1,
              this.pendingElements = [],
              this.elements = this.layers ? createSizedArray(this.layers.length) : [],
              this.initElement(t, e, i),
              this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                  _placeholder: !0
              }
          }
          function HybridRenderer(t, e) {
              this.animationItem = t,
              this.layers = null,
              this.renderedFrame = -1,
              this.renderConfig = {
                  className: e && e.className || "",
                  imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                  hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                  filterSize: {
                      width: e && e.filterSize && e.filterSize.width || "400%",
                      height: e && e.filterSize && e.filterSize.height || "400%",
                      x: e && e.filterSize && e.filterSize.x || "-100%",
                      y: e && e.filterSize && e.filterSize.y || "-100%"
                  }
              },
              this.globalData = {
                  _mdf: !1,
                  frameNum: -1,
                  renderConfig: this.renderConfig
              },
              this.pendingElements = [],
              this.elements = [],
              this.threeDElements = [],
              this.destroyed = !1,
              this.camera = null,
              this.supports3d = !0,
              this.rendererType = "html"
          }
          extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
          SVGTextLottieElement.prototype.createContent = function() {
              this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
          }
          ,
          SVGTextLottieElement.prototype.buildTextContents = function(t) {
              for (var e = 0, i = t.length, s = [], r = ""; e < i; )
                  t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(r),
                  r = "") : r += t[e],
                  e += 1;
              return s.push(r),
              s
          }
          ,
          SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
              if (t.shapes && t.shapes.length) {
                  var i = t.shapes[0];
                  if (i.it) {
                      var s = i.it[i.it.length - 1];
                      s.s && (s.s.k[0] = e,
                      s.s.k[1] = e)
                  }
              }
              return t
          }
          ,
          SVGTextLottieElement.prototype.buildNewText = function() {
              var t, e;
              this.addDynamicProperty(this);
              var i = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(i ? i.l.length : 0),
              i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
              i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)),
              this.layerElement.setAttribute("stroke-width", i.sw)),
              this.layerElement.setAttribute("font-size", i.finalSize);
              var s = this.globalData.fontManager.getFontByName(i.f);
              if (s.fClass)
                  this.layerElement.setAttribute("class", s.fClass);
              else {
                  this.layerElement.setAttribute("font-family", s.fFamily);
                  var r = i.fWeight
                    , a = i.fStyle;
                  this.layerElement.setAttribute("font-style", a),
                  this.layerElement.setAttribute("font-weight", r)
              }
              this.layerElement.setAttribute("aria-label", i.t);
              var n, o = i.l || [], g = !!this.globalData.fontManager.chars;
              e = o.length;
              var h = this.mHelper
                , l = this.data.singleShape
                , C = 0
                , A = 0
                , p = !0
                , I = .001 * i.tr * i.finalSize;
              if (!l || g || i.sz) {
                  var m, c = this.textSpans.length;
                  for (t = 0; t < e; t += 1) {
                      if (this.textSpans[t] || (this.textSpans[t] = {
                          span: null,
                          childSpan: null,
                          glyph: null
                      }),
                      !g || !l || 0 === t) {
                          if (n = c > t ? this.textSpans[t].span : createNS(g ? "g" : "text"),
                          c <= t) {
                              if (n.setAttribute("stroke-linecap", "butt"),
                              n.setAttribute("stroke-linejoin", "round"),
                              n.setAttribute("stroke-miterlimit", "4"),
                              this.textSpans[t].span = n,
                              g) {
                                  var u = createNS("g");
                                  n.appendChild(u),
                                  this.textSpans[t].childSpan = u
                              }
                              this.textSpans[t].span = n,
                              this.layerElement.appendChild(n)
                          }
                          n.style.display = "inherit"
                      }
                      if (h.reset(),
                      l && (o[t].n && (C = -I,
                      A += i.yOffset,
                      A += p ? 1 : 0,
                      p = !1),
                      this.applyTextPropertiesToMatrix(i, h, o[t].line, C, A),
                      C += o[t].l || 0,
                      C += I),
                      g) {
                          var f;
                          if (1 === (m = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t)
                              f = new SVGCompElement(m.data,this.globalData,this);
                          else {
                              var d = emptyShapeData;
                              m.data && m.data.shapes && (d = this.buildShapeData(m.data, i.finalSize)),
                              f = new SVGShapeElement(d,this.globalData,this)
                          }
                          if (this.textSpans[t].glyph) {
                              var y = this.textSpans[t].glyph;
                              this.textSpans[t].childSpan.removeChild(y.layerElement),
                              y.destroy()
                          }
                          this.textSpans[t].glyph = f,
                          f._debug = !0,
                          f.prepareFrame(0),
                          f.renderFrame(),
                          this.textSpans[t].childSpan.appendChild(f.layerElement),
                          1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                      } else
                          l && n.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"),
                          n.textContent = o[t].val,
                          n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                  }
                  l && n && n.setAttribute("d", "")
              } else {
                  var M = this.textContainer
                    , v = "start";
                  switch (i.j) {
                  case 1:
                      v = "end";
                      break;
                  case 2:
                      v = "middle";
                      break;
                  default:
                      v = "start"
                  }
                  M.setAttribute("text-anchor", v),
                  M.setAttribute("letter-spacing", I);
                  var D = this.buildTextContents(i.finalText);
                  for (e = D.length,
                  A = i.ps ? i.ps[1] + i.ascent : 0,
                  t = 0; t < e; t += 1)
                      (n = this.textSpans[t].span || createNS("tspan")).textContent = D[t],
                      n.setAttribute("x", 0),
                      n.setAttribute("y", A),
                      n.style.display = "inherit",
                      M.appendChild(n),
                      this.textSpans[t] || (this.textSpans[t] = {
                          span: null,
                          glyph: null
                      }),
                      this.textSpans[t].span = n,
                      A += i.finalLineHeight;
                  this.layerElement.appendChild(M)
              }
              for (; t < this.textSpans.length; )
                  this.textSpans[t].span.style.display = "none",
                  t += 1;
              this._sizeChanged = !0
          }
          ,
          SVGTextLottieElement.prototype.sourceRectAtTime = function() {
              if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
              this.renderInnerContent(),
              this._sizeChanged) {
                  this._sizeChanged = !1;
                  var t = this.layerElement.getBBox();
                  this.bbox = {
                      top: t.y,
                      left: t.x,
                      width: t.width,
                      height: t.height
                  }
              }
              return this.bbox
          }
          ,
          SVGTextLottieElement.prototype.getValue = function() {
              var t, e, i = this.textSpans.length;
              for (this.renderedFrame = this.comp.renderedFrame,
              t = 0; t < i; t += 1)
                  (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st),
                  e._mdf && (this._mdf = !0))
          }
          ,
          SVGTextLottieElement.prototype.renderInnerContent = function() {
              if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                  var t, e;
                  this._sizeChanged = !0;
                  var i, s, r, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                  for (e = n.length,
                  t = 0; t < e; t += 1)
                      n[t].n || (i = a[t],
                      s = this.textSpans[t].span,
                      (r = this.textSpans[t].glyph) && r.renderFrame(),
                      i._mdf.m && s.setAttribute("transform", i.m),
                      i._mdf.o && s.setAttribute("opacity", i.o),
                      i._mdf.sw && s.setAttribute("stroke-width", i.sw),
                      i._mdf.sc && s.setAttribute("stroke", i.sc),
                      i._mdf.fc && s.setAttribute("fill", i.fc))
              }
          }
          ,
          extendPrototype([IImageElement], ISolidElement),
          ISolidElement.prototype.createContent = function() {
              var t = createNS("rect");
              t.setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.layerElement.appendChild(t)
          }
          ,
          NullElement.prototype.prepareFrame = function(t) {
              this.prepareProperties(t, !0)
          }
          ,
          NullElement.prototype.renderFrame = function() {}
          ,
          NullElement.prototype.getBaseElement = function() {
              return null
          }
          ,
          NullElement.prototype.destroy = function() {}
          ,
          NullElement.prototype.sourceRectAtTime = function() {}
          ,
          NullElement.prototype.hide = function() {}
          ,
          extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
          extendPrototype([BaseRenderer], SVGRendererBase),
          SVGRendererBase.prototype.createNull = function(t) {
              return new NullElement(t,this.globalData,this)
          }
          ,
          SVGRendererBase.prototype.createShape = function(t) {
              return new SVGShapeElement(t,this.globalData,this)
          }
          ,
          SVGRendererBase.prototype.createText = function(t) {
              return new SVGTextLottieElement(t,this.globalData,this)
          }
          ,
          SVGRendererBase.prototype.createImage = function(t) {
              return new IImageElement(t,this.globalData,this)
          }
          ,
          SVGRendererBase.prototype.createSolid = function(t) {
              return new ISolidElement(t,this.globalData,this)
          }
          ,
          SVGRendererBase.prototype.configAnimation = function(t) {
              this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
              this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
              this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
              this.svgElement.setAttribute("height", t.h),
              this.svgElement.style.width = "100%",
              this.svgElement.style.height = "100%",
              this.svgElement.style.transform = "translate3d(0,0,0)",
              this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility),
              this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
              this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
              this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
              this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
              void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
              this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
              this.animationItem.wrapper.appendChild(this.svgElement);
              var e = this.globalData.defs;
              this.setupGlobalData(t, e),
              this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
              this.data = t;
              var i = createNS("clipPath")
                , s = createNS("rect");
              s.setAttribute("width", t.w),
              s.setAttribute("height", t.h),
              s.setAttribute("x", 0),
              s.setAttribute("y", 0);
              var r = createElementID();
              i.setAttribute("id", r),
              i.appendChild(s),
              this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")"),
              e.appendChild(i),
              this.layers = t.layers,
              this.elements = createSizedArray(t.layers.length)
          }
          ,
          SVGRendererBase.prototype.destroy = function() {
              var t;
              this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
              this.layerElement = null,
              this.globalData.defs = null;
              var e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t += 1)
                  this.elements[t] && this.elements[t].destroy();
              this.elements.length = 0,
              this.destroyed = !0,
              this.animationItem = null
          }
          ,
          SVGRendererBase.prototype.updateContainerSize = function() {}
          ,
          SVGRendererBase.prototype.buildItem = function(t) {
              var e = this.elements;
              if (!e[t] && 99 !== this.layers[t].ty) {
                  e[t] = !0;
                  var i = this.createItem(this.layers[t]);
                  e[t] = i,
                  getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i),
                  i.initExpressions()),
                  this.appendElementInPos(i, t),
                  this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1),
                  this.addPendingElement(i)))
              }
          }
          ,
          SVGRendererBase.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                  var t = this.pendingElements.pop();
                  if (t.checkParenting(),
                  t.data.tt)
                      for (var e = 0, i = this.elements.length; e < i; ) {
                          if (this.elements[e] === t) {
                              t.setMatte(this.elements[e - 1].layerId);
                              break
                          }
                          e += 1
                      }
              }
          }
          ,
          SVGRendererBase.prototype.renderFrame = function(t) {
              if (this.renderedFrame !== t && !this.destroyed) {
                  var e;
                  null === t ? t = this.renderedFrame : this.renderedFrame = t,
                  this.globalData.frameNum = t,
                  this.globalData.frameId += 1,
                  this.globalData.projectInterface.currentFrame = t,
                  this.globalData._mdf = !1;
                  var i = this.layers.length;
                  for (this.completeLayers || this.checkLayers(t),
                  e = i - 1; e >= 0; e -= 1)
                      (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                  if (this.globalData._mdf)
                      for (e = 0; e < i; e += 1)
                          (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
              }
          }
          ,
          SVGRendererBase.prototype.appendElementInPos = function(t, e) {
              var i = t.getBaseElement();
              if (i) {
                  for (var s, r = 0; r < e; )
                      this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()),
                      r += 1;
                  s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
              }
          }
          ,
          SVGRendererBase.prototype.hide = function() {
              this.layerElement.style.display = "none"
          }
          ,
          SVGRendererBase.prototype.show = function() {
              this.layerElement.style.display = "block"
          }
          ,
          extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
          ICompElement.prototype.initElement = function(t, e, i) {
              this.initFrame(),
              this.initBaseData(t, e, i),
              this.initTransform(t, e, i),
              this.initRenderable(),
              this.initHierarchy(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              !this.data.xt && e.progressiveLoad || this.buildAllItems(),
              this.hide()
          }
          ,
          ICompElement.prototype.prepareFrame = function(t) {
              if (this._mdf = !1,
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              this.isInRange || this.data.xt) {
                  if (this.tm._placeholder)
                      this.renderedFrame = t / this.data.sr;
                  else {
                      var e = this.tm.v;
                      e === this.data.op && (e = this.data.op - 1),
                      this.renderedFrame = e
                  }
                  var i, s = this.elements.length;
                  for (this.completeLayers || this.checkLayers(this.renderedFrame),
                  i = s - 1; i >= 0; i -= 1)
                      (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st),
                      this.elements[i]._mdf && (this._mdf = !0))
              }
          }
          ,
          ICompElement.prototype.renderInnerContent = function() {
              var t, e = this.layers.length;
              for (t = 0; t < e; t += 1)
                  (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
          }
          ,
          ICompElement.prototype.setElements = function(t) {
              this.elements = t
          }
          ,
          ICompElement.prototype.getElements = function() {
              return this.elements
          }
          ,
          ICompElement.prototype.destroyElements = function() {
              var t, e = this.layers.length;
              for (t = 0; t < e; t += 1)
                  this.elements[t] && this.elements[t].destroy()
          }
          ,
          ICompElement.prototype.destroy = function() {
              this.destroyElements(),
              this.destroyBaseElement()
          }
          ,
          extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
          SVGCompElement.prototype.createComp = function(t) {
              return new SVGCompElement(t,this.globalData,this)
          }
          ,
          extendPrototype([SVGRendererBase], SVGRenderer),
          SVGRenderer.prototype.createComp = function(t) {
              return new SVGCompElement(t,this.globalData,this)
          }
          ,
          CVContextData.prototype.duplicate = function() {
              var t = 2 * this._length
                , e = this.savedOp;
              this.savedOp = createTypedArray("float32", t),
              this.savedOp.set(e);
              var i = 0;
              for (i = this._length; i < t; i += 1)
                  this.saved[i] = createTypedArray("float32", 16);
              this._length = t
          }
          ,
          CVContextData.prototype.reset = function() {
              this.cArrPos = 0,
              this.cTr.reset(),
              this.cO = 1
          }
          ,
          ShapeTransformManager.prototype = {
              addTransformSequence: function(t) {
                  var e, i = t.length, s = "_";
                  for (e = 0; e < i; e += 1)
                      s += t[e].transform.key + "_";
                  var r = this.sequences[s];
                  return r || (r = {
                      transforms: [].concat(t),
                      finalTransform: new Matrix,
                      _mdf: !1
                  },
                  this.sequences[s] = r,
                  this.sequenceList.push(r)),
                  r
              },
              processSequence: function(t, e) {
                  for (var i, s = 0, r = t.transforms.length, a = e; s < r && !e; ) {
                      if (t.transforms[s].transform.mProps._mdf) {
                          a = !0;
                          break
                      }
                      s += 1
                  }
                  if (a)
                      for (t.finalTransform.reset(),
                      s = r - 1; s >= 0; s -= 1)
                          i = t.transforms[s].transform.mProps.v.props,
                          t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                  t._mdf = a
              },
              processSequences: function(t) {
                  var e, i = this.sequenceList.length;
                  for (e = 0; e < i; e += 1)
                      this.processSequence(this.sequenceList[e], t)
              },
              getNewKey: function() {
                  return this.transform_key_count += 1,
                  "_" + this.transform_key_count
              }
          },
          CVEffects.prototype.renderFrame = function() {}
          ,
          CVMaskElement.prototype.renderFrame = function() {
              if (this.hasMasks) {
                  var t, e, i, s, r = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
                  for (a.beginPath(),
                  t = 0; t < n; t += 1)
                      if ("n" !== this.masksProperties[t].mode) {
                          var o;
                          this.masksProperties[t].inv && (a.moveTo(0, 0),
                          a.lineTo(this.element.globalData.compSize.w, 0),
                          a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                          a.lineTo(0, this.element.globalData.compSize.h),
                          a.lineTo(0, 0)),
                          s = this.viewData[t].v,
                          e = r.applyToPointArray(s.v[0][0], s.v[0][1], 0),
                          a.moveTo(e[0], e[1]);
                          var g = s._length;
                          for (o = 1; o < g; o += 1)
                              i = r.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o]),
                              a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                          i = r.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0]),
                          a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                      }
                  this.element.globalData.renderer.save(!0),
                  a.clip()
              }
          }
          ,
          CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
          CVMaskElement.prototype.destroy = function() {
              this.element = null
          }
          ,
          CVBaseElement.prototype = {
              createElements: function() {},
              initRendererElement: function() {},
              createContainerElements: function() {
                  this.canvasContext = this.globalData.canvasContext,
                  this.renderableEffectsManager = new CVEffects(this)
              },
              createContent: function() {},
              setBlendMode: function() {
                  var t = this.globalData;
                  if (t.blendMode !== this.data.bm) {
                      t.blendMode = this.data.bm;
                      var e = getBlendMode(this.data.bm);
                      t.canvasContext.globalCompositeOperation = e
                  }
              },
              createRenderableComponents: function() {
                  this.maskManager = new CVMaskElement(this.data,this)
              },
              hideElement: function() {
                  this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
              },
              showElement: function() {
                  this.isInRange && !this.isTransparent && (this.hidden = !1,
                  this._isFirstFrame = !0,
                  this.maskManager._isFirstFrame = !0)
              },
              renderFrame: function() {
                  if (!this.hidden && !this.data.hd) {
                      this.renderTransform(),
                      this.renderRenderable(),
                      this.setBlendMode();
                      var t = 0 === this.data.ty;
                      this.globalData.renderer.save(t),
                      this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                      this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                      this.renderInnerContent(),
                      this.globalData.renderer.restore(t),
                      this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                      this._isFirstFrame && (this._isFirstFrame = !1)
                  }
              },
              destroy: function() {
                  this.canvasContext = null,
                  this.data = null,
                  this.globalData = null,
                  this.maskManager.destroy()
              },
              mHelper: new Matrix
          },
          CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
          CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
          CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
          extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
          CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
          CVShapeElement.prototype.transformHelper = {
              opacity: 1,
              _opMdf: !1
          },
          CVShapeElement.prototype.dashResetter = [],
          CVShapeElement.prototype.createContent = function() {
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
          }
          ,
          CVShapeElement.prototype.createStyleElement = function(t, e) {
              var i = {
                  data: t,
                  type: t.ty,
                  preTransforms: this.transformsManager.addTransformSequence(e),
                  transforms: [],
                  elements: [],
                  closed: !0 === t.hd
              }
                , s = {};
              if ("fl" === t.ty || "st" === t.ty ? (s.c = PropertyFactory.getProp(this, t.c, 1, 255, this),
              s.c.k || (i.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (s.s = PropertyFactory.getProp(this, t.s, 1, null, this),
              s.e = PropertyFactory.getProp(this, t.e, 1, null, this),
              s.h = PropertyFactory.getProp(this, t.h || {
                  k: 0
              }, 0, .01, this),
              s.a = PropertyFactory.getProp(this, t.a || {
                  k: 0
              }, 0, degToRads, this),
              s.g = new GradientProperty(this,t.g,this)),
              s.o = PropertyFactory.getProp(this, t.o, 0, .01, this),
              "st" === t.ty || "gs" === t.ty) {
                  if (i.lc = lineCapEnum[t.lc || 2],
                  i.lj = lineJoinEnum[t.lj || 2],
                  1 == t.lj && (i.ml = t.ml),
                  s.w = PropertyFactory.getProp(this, t.w, 0, null, this),
                  s.w.k || (i.wi = s.w.v),
                  t.d) {
                      var r = new DashProperty(this,t.d,"canvas",this);
                      s.d = r,
                      s.d.k || (i.da = s.d.dashArray,
                      i.do = s.d.dashoffset[0])
                  }
              } else
                  i.r = 2 === t.r ? "evenodd" : "nonzero";
              return this.stylesList.push(i),
              s.style = i,
              s
          }
          ,
          CVShapeElement.prototype.createGroupElement = function() {
              return {
                  it: [],
                  prevViewData: []
              }
          }
          ,
          CVShapeElement.prototype.createTransformElement = function(t) {
              return {
                  transform: {
                      opacity: 1,
                      _opMdf: !1,
                      key: this.transformsManager.getNewKey(),
                      op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                      mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                  }
              }
          }
          ,
          CVShapeElement.prototype.createShapeElement = function(t) {
              var e = new CVShapeData(this,t,this.stylesList,this.transformsManager);
              return this.shapes.push(e),
              this.addShapeToModifiers(e),
              e
          }
          ,
          CVShapeElement.prototype.reloadShapes = function() {
              var t;
              this._isFirstFrame = !0;
              var e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                  this.prevViewData[t] = this.itemsData[t];
              for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
              e = this.dynamicProperties.length,
              t = 0; t < e; t += 1)
                  this.dynamicProperties[t].getValue();
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame)
          }
          ,
          CVShapeElement.prototype.addTransformToStyleList = function(t) {
              var e, i = this.stylesList.length;
              for (e = 0; e < i; e += 1)
                  this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
          }
          ,
          CVShapeElement.prototype.removeTransformFromStyleList = function() {
              var t, e = this.stylesList.length;
              for (t = 0; t < e; t += 1)
                  this.stylesList[t].closed || this.stylesList[t].transforms.pop()
          }
          ,
          CVShapeElement.prototype.closeStyles = function(t) {
              var e, i = t.length;
              for (e = 0; e < i; e += 1)
                  t[e].closed = !0
          }
          ,
          CVShapeElement.prototype.searchShapes = function(t, e, i, s, r) {
              var a, n, o, g, h, l, C = t.length - 1, A = [], p = [], I = [].concat(r);
              for (a = C; a >= 0; a -= 1) {
                  if ((g = this.searchProcessedElement(t[a])) ? e[a] = i[g - 1] : t[a]._shouldRender = s,
                  "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty)
                      g ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], I),
                      A.push(e[a].style);
                  else if ("gr" === t[a].ty) {
                      if (g)
                          for (o = e[a].it.length,
                          n = 0; n < o; n += 1)
                              e[a].prevViewData[n] = e[a].it[n];
                      else
                          e[a] = this.createGroupElement(t[a]);
                      this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, I)
                  } else
                      "tr" === t[a].ty ? (g || (l = this.createTransformElement(t[a]),
                      e[a] = l),
                      I.push(e[a]),
                      this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? g || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (g ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]),
                      e[a] = h,
                      this.shapeModifiers.push(h)),
                      p.push(h)) : "rp" === t[a].ty && (g ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty),
                      e[a] = h,
                      h.init(this, t, a, e),
                      this.shapeModifiers.push(h),
                      s = !1),
                      p.push(h));
                  this.addProcessedElement(t[a], a + 1)
              }
              for (this.removeTransformFromStyleList(),
              this.closeStyles(A),
              C = p.length,
              a = 0; a < C; a += 1)
                  p[a].closed = !0
          }
          ,
          CVShapeElement.prototype.renderInnerContent = function() {
              this.transformHelper.opacity = 1,
              this.transformHelper._opMdf = !1,
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame),
              this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
          }
          ,
          CVShapeElement.prototype.renderShapeTransform = function(t, e) {
              (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity,
              e.opacity *= e.op.v,
              e._opMdf = !0)
          }
          ,
          CVShapeElement.prototype.drawLayer = function() {
              var t, e, i, s, r, a, n, o, g, h = this.stylesList.length, l = this.globalData.renderer, C = this.globalData.canvasContext;
              for (t = 0; t < h; t += 1)
                  if (("st" !== (o = (g = this.stylesList[t]).type) && "gs" !== o || 0 !== g.wi) && g.data._shouldRender && 0 !== g.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                      for (l.save(),
                      a = g.elements,
                      "st" === o || "gs" === o ? (C.strokeStyle = "st" === o ? g.co : g.grd,
                      C.lineWidth = g.wi,
                      C.lineCap = g.lc,
                      C.lineJoin = g.lj,
                      C.miterLimit = g.ml || 0) : C.fillStyle = "fl" === o ? g.co : g.grd,
                      l.ctxOpacity(g.coOp),
                      "st" !== o && "gs" !== o && C.beginPath(),
                      l.ctxTransform(g.preTransforms.finalTransform.props),
                      i = a.length,
                      e = 0; e < i; e += 1) {
                          for ("st" !== o && "gs" !== o || (C.beginPath(),
                          g.da && (C.setLineDash(g.da),
                          C.lineDashOffset = g.do)),
                          r = (n = a[e].trNodes).length,
                          s = 0; s < r; s += 1)
                              "m" === n[s].t ? C.moveTo(n[s].p[0], n[s].p[1]) : "c" === n[s].t ? C.bezierCurveTo(n[s].pts[0], n[s].pts[1], n[s].pts[2], n[s].pts[3], n[s].pts[4], n[s].pts[5]) : C.closePath();
                          "st" !== o && "gs" !== o || (C.stroke(),
                          g.da && C.setLineDash(this.dashResetter))
                      }
                      "st" !== o && "gs" !== o && C.fill(g.r),
                      l.restore()
                  }
          }
          ,
          CVShapeElement.prototype.renderShape = function(t, e, i, s) {
              var r, a;
              for (a = t,
              r = e.length - 1; r >= 0; r -= 1)
                  "tr" === e[r].ty ? (a = i[r].transform,
                  this.renderShapeTransform(t, a)) : "sh" === e[r].ty || "el" === e[r].ty || "rc" === e[r].ty || "sr" === e[r].ty ? this.renderPath(e[r], i[r]) : "fl" === e[r].ty ? this.renderFill(e[r], i[r], a) : "st" === e[r].ty ? this.renderStroke(e[r], i[r], a) : "gf" === e[r].ty || "gs" === e[r].ty ? this.renderGradientFill(e[r], i[r], a) : "gr" === e[r].ty ? this.renderShape(a, e[r].it, i[r].it) : e[r].ty;
              s && this.drawLayer()
          }
          ,
          CVShapeElement.prototype.renderStyledShape = function(t, e) {
              if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                  var i, s, r, a = t.trNodes, n = e.paths, o = n._length;
                  a.length = 0;
                  var g = t.transforms.finalTransform;
                  for (r = 0; r < o; r += 1) {
                      var h = n.shapes[r];
                      if (h && h.v) {
                          for (s = h._length,
                          i = 1; i < s; i += 1)
                              1 === i && a.push({
                                  t: "m",
                                  p: g.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                              }),
                              a.push({
                                  t: "c",
                                  pts: g.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i])
                              });
                          1 === s && a.push({
                              t: "m",
                              p: g.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                          }),
                          h.c && s && (a.push({
                              t: "c",
                              pts: g.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0])
                          }),
                          a.push({
                              t: "z"
                          }))
                      }
                  }
                  t.trNodes = a
              }
          }
          ,
          CVShapeElement.prototype.renderPath = function(t, e) {
              if (!0 !== t.hd && t._shouldRender) {
                  var i, s = e.styledShapes.length;
                  for (i = 0; i < s; i += 1)
                      this.renderStyledShape(e.styledShapes[i], e.sh)
              }
          }
          ,
          CVShapeElement.prototype.renderFill = function(t, e, i) {
              var s = e.style;
              (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
              (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity)
          }
          ,
          CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
              var s, r = e.style;
              if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                  var a, n = this.globalData.canvasContext, o = e.s.v, g = e.e.v;
                  if (1 === t.t)
                      s = n.createLinearGradient(o[0], o[1], g[0], g[1]);
                  else {
                      var h = Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2))
                        , l = Math.atan2(g[1] - o[1], g[0] - o[0])
                        , C = e.h.v;
                      C >= 1 ? C = .99 : C <= -1 && (C = -.99);
                      var A = h * C
                        , p = Math.cos(l + e.a.v) * A + o[0]
                        , I = Math.sin(l + e.a.v) * A + o[1];
                      s = n.createRadialGradient(p, I, 0, o[0], o[1], h)
                  }
                  var m = t.g.p
                    , c = e.g.c
                    , u = 1;
                  for (a = 0; a < m; a += 1)
                      e.g._hasOpacity && e.g._collapsable && (u = e.g.o[2 * a + 1]),
                      s.addColorStop(c[4 * a] / 100, "rgba(" + c[4 * a + 1] + "," + c[4 * a + 2] + "," + c[4 * a + 3] + "," + u + ")");
                  r.grd = s
              }
              r.coOp = e.o.v * i.opacity
          }
          ,
          CVShapeElement.prototype.renderStroke = function(t, e, i) {
              var s = e.style
                , r = e.d;
              r && (r._mdf || this._isFirstFrame) && (s.da = r.dashArray,
              s.do = r.dashoffset[0]),
              (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
              (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity),
              (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v)
          }
          ,
          CVShapeElement.prototype.destroy = function() {
              this.shapesData = null,
              this.globalData = null,
              this.canvasContext = null,
              this.stylesList.length = 0,
              this.itemsData.length = 0
          }
          ,
          extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
          CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
          CVTextElement.prototype.buildNewText = function() {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = !1;
              t.fc ? (e = !0,
              this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
              this.fill = e;
              var i = !1;
              t.sc && (i = !0,
              this.values.stroke = this.buildColor(t.sc),
              this.values.sWidth = t.sw);
              var s, r, a, n, o, g, h, l, C, A, p, I, m = this.globalData.fontManager.getFontByName(t.f), c = t.l, u = this.mHelper;
              this.stroke = i,
              this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
              r = t.finalText.length;
              var f = this.data.singleShape
                , d = .001 * t.tr * t.finalSize
                , y = 0
                , M = 0
                , v = !0
                , D = 0;
              for (s = 0; s < r; s += 1) {
                  n = (a = this.globalData.fontManager.getCharData(t.finalText[s], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {},
                  u.reset(),
                  f && c[s].n && (y = -d,
                  M += t.yOffset,
                  M += v ? 1 : 0,
                  v = !1),
                  C = (h = n.shapes ? n.shapes[0].it : []).length,
                  u.scale(t.finalSize / 100, t.finalSize / 100),
                  f && this.applyTextPropertiesToMatrix(t, u, c[s].line, y, M),
                  p = createSizedArray(C - 1);
                  var x = 0;
                  for (l = 0; l < C; l += 1)
                      if ("sh" === h[l].ty) {
                          for (g = h[l].ks.k.i.length,
                          A = h[l].ks.k,
                          I = [],
                          o = 1; o < g; o += 1)
                              1 === o && I.push(u.applyToX(A.v[0][0], A.v[0][1], 0), u.applyToY(A.v[0][0], A.v[0][1], 0)),
                              I.push(u.applyToX(A.o[o - 1][0], A.o[o - 1][1], 0), u.applyToY(A.o[o - 1][0], A.o[o - 1][1], 0), u.applyToX(A.i[o][0], A.i[o][1], 0), u.applyToY(A.i[o][0], A.i[o][1], 0), u.applyToX(A.v[o][0], A.v[o][1], 0), u.applyToY(A.v[o][0], A.v[o][1], 0));
                          I.push(u.applyToX(A.o[o - 1][0], A.o[o - 1][1], 0), u.applyToY(A.o[o - 1][0], A.o[o - 1][1], 0), u.applyToX(A.i[0][0], A.i[0][1], 0), u.applyToY(A.i[0][0], A.i[0][1], 0), u.applyToX(A.v[0][0], A.v[0][1], 0), u.applyToY(A.v[0][0], A.v[0][1], 0)),
                          p[x] = I,
                          x += 1
                      }
                  f && (y += c[s].l,
                  y += d),
                  this.textSpans[D] ? this.textSpans[D].elem = p : this.textSpans[D] = {
                      elem: p
                  },
                  D += 1
              }
          }
          ,
          CVTextElement.prototype.renderInnerContent = function() {
              var t, e, i, s, r, a, n = this.canvasContext;
              n.font = this.values.fValue,
              n.lineCap = "butt",
              n.lineJoin = "miter",
              n.miterLimit = 4,
              this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
              var o, g = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
              e = h.length;
              var l, C, A = null, p = null, I = null;
              for (t = 0; t < e; t += 1)
                  if (!h[t].n) {
                      if ((o = g[t]) && (this.globalData.renderer.save(),
                      this.globalData.renderer.ctxTransform(o.p),
                      this.globalData.renderer.ctxOpacity(o.o)),
                      this.fill) {
                          for (o && o.fc ? A !== o.fc && (A = o.fc,
                          n.fillStyle = o.fc) : A !== this.values.fill && (A = this.values.fill,
                          n.fillStyle = this.values.fill),
                          s = (l = this.textSpans[t].elem).length,
                          this.globalData.canvasContext.beginPath(),
                          i = 0; i < s; i += 1)
                              for (a = (C = l[i]).length,
                              this.globalData.canvasContext.moveTo(C[0], C[1]),
                              r = 2; r < a; r += 6)
                                  this.globalData.canvasContext.bezierCurveTo(C[r], C[r + 1], C[r + 2], C[r + 3], C[r + 4], C[r + 5]);
                          this.globalData.canvasContext.closePath(),
                          this.globalData.canvasContext.fill()
                      }
                      if (this.stroke) {
                          for (o && o.sw ? I !== o.sw && (I = o.sw,
                          n.lineWidth = o.sw) : I !== this.values.sWidth && (I = this.values.sWidth,
                          n.lineWidth = this.values.sWidth),
                          o && o.sc ? p !== o.sc && (p = o.sc,
                          n.strokeStyle = o.sc) : p !== this.values.stroke && (p = this.values.stroke,
                          n.strokeStyle = this.values.stroke),
                          s = (l = this.textSpans[t].elem).length,
                          this.globalData.canvasContext.beginPath(),
                          i = 0; i < s; i += 1)
                              for (a = (C = l[i]).length,
                              this.globalData.canvasContext.moveTo(C[0], C[1]),
                              r = 2; r < a; r += 6)
                                  this.globalData.canvasContext.bezierCurveTo(C[r], C[r + 1], C[r + 2], C[r + 3], C[r + 4], C[r + 5]);
                          this.globalData.canvasContext.closePath(),
                          this.globalData.canvasContext.stroke()
                      }
                      o && this.globalData.renderer.restore()
                  }
          }
          ,
          extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
          CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
          CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
          CVImageElement.prototype.createContent = function() {
              if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                  var t = createTag("canvas");
                  t.width = this.assetData.w,
                  t.height = this.assetData.h;
                  var e, i, s = t.getContext("2d"), r = this.img.width, a = this.img.height, n = r / a, o = this.assetData.w / this.assetData.h, g = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                  n > o && "xMidYMid slice" === g || n < o && "xMidYMid slice" !== g ? e = (i = a) * o : i = (e = r) / o,
                  s.drawImage(this.img, (r - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h),
                  this.img = t
              }
          }
          ,
          CVImageElement.prototype.renderInnerContent = function() {
              this.canvasContext.drawImage(this.img, 0, 0)
          }
          ,
          CVImageElement.prototype.destroy = function() {
              this.img = null
          }
          ,
          extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
          CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
          CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
          CVSolidElement.prototype.renderInnerContent = function() {
              var t = this.canvasContext;
              t.fillStyle = this.data.sc,
              t.fillRect(0, 0, this.data.sw, this.data.sh)
          }
          ,
          extendPrototype([BaseRenderer], CanvasRendererBase),
          CanvasRendererBase.prototype.createShape = function(t) {
              return new CVShapeElement(t,this.globalData,this)
          }
          ,
          CanvasRendererBase.prototype.createText = function(t) {
              return new CVTextElement(t,this.globalData,this)
          }
          ,
          CanvasRendererBase.prototype.createImage = function(t) {
              return new CVImageElement(t,this.globalData,this)
          }
          ,
          CanvasRendererBase.prototype.createSolid = function(t) {
              return new CVSolidElement(t,this.globalData,this)
          }
          ,
          CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
          CanvasRendererBase.prototype.ctxTransform = function(t) {
              if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                  if (this.renderConfig.clearCanvas) {
                      this.transformMat.cloneFromProps(t);
                      var e = this.contextData.cTr.props;
                      this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                      this.contextData.cTr.cloneFromProps(this.transformMat.props);
                      var i = this.contextData.cTr.props;
                      this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                  } else
                      this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
          }
          ,
          CanvasRendererBase.prototype.ctxOpacity = function(t) {
              if (!this.renderConfig.clearCanvas)
                  return this.canvasContext.globalAlpha *= t < 0 ? 0 : t,
                  void (this.globalData.currentGlobalAlpha = this.contextData.cO);
              this.contextData.cO *= t < 0 ? 0 : t,
              this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO,
              this.globalData.currentGlobalAlpha = this.contextData.cO)
          }
          ,
          CanvasRendererBase.prototype.reset = function() {
              this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
          }
          ,
          CanvasRendererBase.prototype.save = function(t) {
              if (this.renderConfig.clearCanvas) {
                  t && this.canvasContext.save();
                  var e, i = this.contextData.cTr.props;
                  this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                  var s = this.contextData.saved[this.contextData.cArrPos];
                  for (e = 0; e < 16; e += 1)
                      s[e] = i[e];
                  this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
                  this.contextData.cArrPos += 1
              } else
                  this.canvasContext.save()
          }
          ,
          CanvasRendererBase.prototype.restore = function(t) {
              if (this.renderConfig.clearCanvas) {
                  t && (this.canvasContext.restore(),
                  this.globalData.blendMode = "source-over"),
                  this.contextData.cArrPos -= 1;
                  var e, i = this.contextData.saved[this.contextData.cArrPos], s = this.contextData.cTr.props;
                  for (e = 0; e < 16; e += 1)
                      s[e] = i[e];
                  this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]),
                  i = this.contextData.savedOp[this.contextData.cArrPos],
                  this.contextData.cO = i,
                  this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i,
                  this.globalData.currentGlobalAlpha = i)
              } else
                  this.canvasContext.restore()
          }
          ,
          CanvasRendererBase.prototype.configAnimation = function(t) {
              if (this.animationItem.wrapper) {
                  this.animationItem.container = createTag("canvas");
                  var e = this.animationItem.container.style;
                  e.width = "100%",
                  e.height = "100%";
                  var i = "0px 0px 0px";
                  e.transformOrigin = i,
                  e.mozTransformOrigin = i,
                  e.webkitTransformOrigin = i,
                  e["-webkit-transform"] = i,
                  e.contentVisibility = this.renderConfig.contentVisibility,
                  this.animationItem.wrapper.appendChild(this.animationItem.container),
                  this.canvasContext = this.animationItem.container.getContext("2d"),
                  this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                  this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
              } else
                  this.canvasContext = this.renderConfig.context;
              this.data = t,
              this.layers = t.layers,
              this.transformCanvas = {
                  w: t.w,
                  h: t.h,
                  sx: 0,
                  sy: 0,
                  tx: 0,
                  ty: 0
              },
              this.setupGlobalData(t, document.body),
              this.globalData.canvasContext = this.canvasContext,
              this.globalData.renderer = this,
              this.globalData.isDashed = !1,
              this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
              this.globalData.transformCanvas = this.transformCanvas,
              this.elements = createSizedArray(t.layers.length),
              this.updateContainerSize()
          }
          ,
          CanvasRendererBase.prototype.updateContainerSize = function() {
              var t, e, i, s;
              if (this.reset(),
              this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth,
              e = this.animationItem.wrapper.offsetHeight,
              this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr),
              this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr,
              e = this.canvasContext.canvas.height * this.renderConfig.dpr),
              -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                  var r = this.renderConfig.preserveAspectRatio.split(" ")
                    , a = r[1] || "meet"
                    , n = r[0] || "xMidYMid"
                    , o = n.substr(0, 4)
                    , g = n.substr(4);
                  i = t / e,
                  (s = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === a || s < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                  this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr),
                  this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                  this.transformCanvas.tx = "xMid" === o && (s < i && "meet" === a || s > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (s < i && "meet" === a || s > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
                  this.transformCanvas.ty = "YMid" === g && (s > i && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === g && (s > i && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
              } else
                  "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                  this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr),
                  this.transformCanvas.tx = 0,
                  this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr,
                  this.transformCanvas.sy = this.renderConfig.dpr,
                  this.transformCanvas.tx = 0,
                  this.transformCanvas.ty = 0);
              this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
              this.ctxTransform(this.transformCanvas.props),
              this.canvasContext.beginPath(),
              this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
              this.canvasContext.closePath(),
              this.canvasContext.clip(),
              this.renderFrame(this.renderedFrame, !0)
          }
          ,
          CanvasRendererBase.prototype.destroy = function() {
              var t;
              for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
              t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
                  this.elements[t] && this.elements[t].destroy();
              this.elements.length = 0,
              this.globalData.canvasContext = null,
              this.animationItem.container = null,
              this.destroyed = !0
          }
          ,
          CanvasRendererBase.prototype.renderFrame = function(t, e) {
              if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                  var i;
                  this.renderedFrame = t,
                  this.globalData.frameNum = t - this.animationItem._isFirstFrame,
                  this.globalData.frameId += 1,
                  this.globalData._mdf = !this.renderConfig.clearCanvas || e,
                  this.globalData.projectInterface.currentFrame = t;
                  var s = this.layers.length;
                  for (this.completeLayers || this.checkLayers(t),
                  i = 0; i < s; i += 1)
                      (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                  if (this.globalData._mdf) {
                      for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                      i = s - 1; i >= 0; i -= 1)
                          (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                      !0 !== this.renderConfig.clearCanvas && this.restore()
                  }
              }
          }
          ,
          CanvasRendererBase.prototype.buildItem = function(t) {
              var e = this.elements;
              if (!e[t] && 99 !== this.layers[t].ty) {
                  var i = this.createItem(this.layers[t], this, this.globalData);
                  e[t] = i,
                  i.initExpressions()
              }
          }
          ,
          CanvasRendererBase.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                  this.pendingElements.pop().checkParenting()
              }
          }
          ,
          CanvasRendererBase.prototype.hide = function() {
              this.animationItem.container.style.display = "none"
          }
          ,
          CanvasRendererBase.prototype.show = function() {
              this.animationItem.container.style.display = "block"
          }
          ,
          extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
          CVCompElement.prototype.renderInnerContent = function() {
              var t, e = this.canvasContext;
              for (e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo(this.data.w, 0),
              e.lineTo(this.data.w, this.data.h),
              e.lineTo(0, this.data.h),
              e.lineTo(0, 0),
              e.clip(),
              t = this.layers.length - 1; t >= 0; t -= 1)
                  (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
          }
          ,
          CVCompElement.prototype.destroy = function() {
              var t;
              for (t = this.layers.length - 1; t >= 0; t -= 1)
                  this.elements[t] && this.elements[t].destroy();
              this.layers = null,
              this.elements = null
          }
          ,
          CVCompElement.prototype.createComp = function(t) {
              return new CVCompElement(t,this.globalData,this)
          }
          ,
          extendPrototype([CanvasRendererBase], CanvasRenderer),
          CanvasRenderer.prototype.createComp = function(t) {
              return new CVCompElement(t,this.globalData,this)
          }
          ,
          HBaseElement.prototype = {
              checkBlendMode: function() {},
              initRendererElement: function() {
                  this.baseElement = createTag(this.data.tg || "div"),
                  this.data.hasMask ? (this.svgElement = createNS("svg"),
                  this.layerElement = createNS("g"),
                  this.maskedElement = this.layerElement,
                  this.svgElement.appendChild(this.layerElement),
                  this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                  styleDiv(this.baseElement)
              },
              createContainerElements: function() {
                  this.renderableEffectsManager = new CVEffects(this),
                  this.transformedElement = this.baseElement,
                  this.maskedElement = this.layerElement,
                  this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                  0 !== this.data.bm && this.setBlendMode()
              },
              renderElement: function() {
                  var t = this.transformedElement ? this.transformedElement.style : {};
                  if (this.finalTransform._matMdf) {
                      var e = this.finalTransform.mat.toCSS();
                      t.transform = e,
                      t.webkitTransform = e
                  }
                  this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
              },
              renderFrame: function() {
                  this.data.hd || this.hidden || (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1))
              },
              destroy: function() {
                  this.layerElement = null,
                  this.transformedElement = null,
                  this.matteElement && (this.matteElement = null),
                  this.maskManager && (this.maskManager.destroy(),
                  this.maskManager = null)
              },
              createRenderableComponents: function() {
                  this.maskManager = new MaskElement(this.data,this,this.globalData)
              },
              addEffects: function() {},
              setMatte: function() {}
          },
          HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
          HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
          HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting,
          extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
          HSolidElement.prototype.createContent = function() {
              var t;
              this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.svgElement.setAttribute("width", this.data.sw),
              this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px",
              t.style.height = this.data.sh + "px",
              t.style.backgroundColor = this.data.sc),
              this.layerElement.appendChild(t)
          }
          ,
          extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
          HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
          HShapeElement.prototype.createContent = function() {
              var t;
              if (this.baseElement.style.fontSize = 0,
              this.data.hasMask)
                  this.layerElement.appendChild(this.shapesContainer),
                  t = this.svgElement;
              else {
                  t = createNS("svg");
                  var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                  t.setAttribute("width", e.w),
                  t.setAttribute("height", e.h),
                  t.appendChild(this.shapesContainer),
                  this.layerElement.appendChild(t)
              }
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
              this.filterUniqueShapes(),
              this.shapeCont = t
          }
          ,
          HShapeElement.prototype.getTransformedPoint = function(t, e) {
              var i, s = t.length;
              for (i = 0; i < s; i += 1)
                  e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
              return e
          }
          ,
          HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
              var i, s, r, a, n, o = t.sh.v, g = t.transformers, h = o._length;
              if (!(h <= 1)) {
                  for (i = 0; i < h - 1; i += 1)
                      s = this.getTransformedPoint(g, o.v[i]),
                      r = this.getTransformedPoint(g, o.o[i]),
                      a = this.getTransformedPoint(g, o.i[i + 1]),
                      n = this.getTransformedPoint(g, o.v[i + 1]),
                      this.checkBounds(s, r, a, n, e);
                  o.c && (s = this.getTransformedPoint(g, o.v[i]),
                  r = this.getTransformedPoint(g, o.o[i]),
                  a = this.getTransformedPoint(g, o.i[0]),
                  n = this.getTransformedPoint(g, o.v[0]),
                  this.checkBounds(s, r, a, n, e))
              }
          }
          ,
          HShapeElement.prototype.checkBounds = function(t, e, i, s, r) {
              this.getBoundsOfCurve(t, e, i, s);
              var a = this.shapeBoundingBox;
              r.x = bmMin(a.left, r.x),
              r.xMax = bmMax(a.right, r.xMax),
              r.y = bmMin(a.top, r.y),
              r.yMax = bmMax(a.bottom, r.yMax)
          }
          ,
          HShapeElement.prototype.shapeBoundingBox = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
          },
          HShapeElement.prototype.tempBoundingBox = {
              x: 0,
              xMax: 0,
              y: 0,
              yMax: 0,
              width: 0,
              height: 0
          },
          HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, s) {
              for (var r, a, n, o, g, h, l, C = [[t[0], s[0]], [t[1], s[1]]], A = 0; A < 2; ++A)
                  a = 6 * t[A] - 12 * e[A] + 6 * i[A],
                  r = -3 * t[A] + 9 * e[A] - 9 * i[A] + 3 * s[A],
                  n = 3 * e[A] - 3 * t[A],
                  a |= 0,
                  n |= 0,
                  0 === (r |= 0) && 0 === a || (0 === r ? (o = -n / a) > 0 && o < 1 && C[A].push(this.calculateF(o, t, e, i, s, A)) : (g = a * a - 4 * n * r) >= 0 && ((h = (-a + bmSqrt(g)) / (2 * r)) > 0 && h < 1 && C[A].push(this.calculateF(h, t, e, i, s, A)),
                  (l = (-a - bmSqrt(g)) / (2 * r)) > 0 && l < 1 && C[A].push(this.calculateF(l, t, e, i, s, A))));
              this.shapeBoundingBox.left = bmMin.apply(null, C[0]),
              this.shapeBoundingBox.top = bmMin.apply(null, C[1]),
              this.shapeBoundingBox.right = bmMax.apply(null, C[0]),
              this.shapeBoundingBox.bottom = bmMax.apply(null, C[1])
          }
          ,
          HShapeElement.prototype.calculateF = function(t, e, i, s, r, a) {
              return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * s[a] + bmPow(t, 3) * r[a]
          }
          ,
          HShapeElement.prototype.calculateBoundingBox = function(t, e) {
              var i, s = t.length;
              for (i = 0; i < s; i += 1)
                  t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
          }
          ,
          HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
              var i = 0;
              if (t.keyframes) {
                  for (var s = 0; s < t.keyframes.length; s += 1) {
                      var r = t.keyframes[s].s;
                      r > i && (i = r)
                  }
                  i *= t.mult
              } else
                  i = t.v * t.mult;
              e.x -= i,
              e.xMax += i,
              e.y -= i,
              e.yMax += i
          }
          ,
          HShapeElement.prototype.currentBoxContains = function(t) {
              return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
          }
          ,
          HShapeElement.prototype.renderInnerContent = function() {
              if (this._renderShapeFrame(),
              !this.hidden && (this._isFirstFrame || this._mdf)) {
                  var t = this.tempBoundingBox
                    , e = 999999;
                  if (t.x = e,
                  t.xMax = -e,
                  t.y = e,
                  t.yMax = -e,
                  this.calculateBoundingBox(this.itemsData, t),
                  t.width = t.xMax < t.x ? 0 : t.xMax - t.x,
                  t.height = t.yMax < t.y ? 0 : t.yMax - t.y,
                  this.currentBoxContains(t))
                      return;
                  var i = !1;
                  if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width,
                  this.shapeCont.setAttribute("width", t.width),
                  i = !0),
                  this.currentBBox.h !== t.height && (this.currentBBox.h = t.height,
                  this.shapeCont.setAttribute("height", t.height),
                  i = !0),
                  i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                      this.currentBBox.w = t.width,
                      this.currentBBox.h = t.height,
                      this.currentBBox.x = t.x,
                      this.currentBBox.y = t.y,
                      this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                      var s = this.shapeCont.style
                        , r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                      s.transform = r,
                      s.webkitTransform = r
                  }
              }
          }
          ,
          extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
          HTextElement.prototype.createContent = function() {
              if (this.isMasked = this.checkMasks(),
              this.isMasked) {
                  this.renderType = "svg",
                  this.compW = this.comp.data.w,
                  this.compH = this.comp.data.h,
                  this.svgElement.setAttribute("width", this.compW),
                  this.svgElement.setAttribute("height", this.compH);
                  var t = createNS("g");
                  this.maskedElement.appendChild(t),
                  this.innerElem = t
              } else
                  this.renderType = "html",
                  this.innerElem = this.layerElement;
              this.checkParenting()
          }
          ,
          HTextElement.prototype.buildNewText = function() {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = this.innerElem.style
                , i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
              e.fill = i,
              e.color = i,
              t.sc && (e.stroke = this.buildColor(t.sc),
              e.strokeWidth = t.sw + "px");
              var s, r, a = this.globalData.fontManager.getFontByName(t.f);
              if (!this.globalData.fontManager.chars)
                  if (e.fontSize = t.finalSize + "px",
                  e.lineHeight = t.finalSize + "px",
                  a.fClass)
                      this.innerElem.className = a.fClass;
                  else {
                      e.fontFamily = a.fFamily;
                      var n = t.fWeight
                        , o = t.fStyle;
                      e.fontStyle = o,
                      e.fontWeight = n
                  }
              var g, h, l, C = t.l;
              r = C.length;
              var A, p = this.mHelper, I = "", m = 0;
              for (s = 0; s < r; s += 1) {
                  if (this.globalData.fontManager.chars ? (this.textPaths[m] ? g = this.textPaths[m] : ((g = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]),
                  g.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                  g.setAttribute("stroke-miterlimit", "4")),
                  this.isMasked || (this.textSpans[m] ? l = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0,
                  (l = createNS("svg")).appendChild(g),
                  styleDiv(h)))) : this.isMasked ? g = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m],
                  g = this.textPaths[m]) : (styleDiv(h = createTag("span")),
                  styleDiv(g = createTag("span")),
                  h.appendChild(g)),
                  this.globalData.fontManager.chars) {
                      var c, u = this.globalData.fontManager.getCharData(t.finalText[s], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                      if (c = u ? u.data : null,
                      p.reset(),
                      c && c.shapes && c.shapes.length && (A = c.shapes[0].it,
                      p.scale(t.finalSize / 100, t.finalSize / 100),
                      I = this.createPathShape(p, A),
                      g.setAttribute("d", I)),
                      this.isMasked)
                          this.innerElem.appendChild(g);
                      else {
                          if (this.innerElem.appendChild(h),
                          c && c.shapes) {
                              document.body.appendChild(l);
                              var f = l.getBBox();
                              l.setAttribute("width", f.width + 2),
                              l.setAttribute("height", f.height + 2),
                              l.setAttribute("viewBox", f.x - 1 + " " + (f.y - 1) + " " + (f.width + 2) + " " + (f.height + 2));
                              var d = l.style
                                , y = "translate(" + (f.x - 1) + "px," + (f.y - 1) + "px)";
                              d.transform = y,
                              d.webkitTransform = y,
                              C[s].yOffset = f.y - 1
                          } else
                              l.setAttribute("width", 1),
                              l.setAttribute("height", 1);
                          h.appendChild(l)
                      }
                  } else if (g.textContent = C[s].val,
                  g.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                  this.isMasked)
                      this.innerElem.appendChild(g);
                  else {
                      this.innerElem.appendChild(h);
                      var M = g.style
                        , v = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                      M.transform = v,
                      M.webkitTransform = v
                  }
                  this.isMasked ? this.textSpans[m] = g : this.textSpans[m] = h,
                  this.textSpans[m].style.display = "block",
                  this.textPaths[m] = g,
                  m += 1
              }
              for (; m < this.textSpans.length; )
                  this.textSpans[m].style.display = "none",
                  m += 1
          }
          ,
          HTextElement.prototype.renderInnerContent = function() {
              var t;
              if (this.data.singleShape) {
                  if (!this._isFirstFrame && !this.lettersChangedFlag)
                      return;
                  if (this.isMasked && this.finalTransform._matMdf) {
                      this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                      t = this.svgElement.style;
                      var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                      t.transform = e,
                      t.webkitTransform = e
                  }
              }
              if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                  var i, s, r, a, n, o = 0, g = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
                  for (s = h.length,
                  i = 0; i < s; i += 1)
                      h[i].n ? o += 1 : (a = this.textSpans[i],
                      n = this.textPaths[i],
                      r = g[o],
                      o += 1,
                      r._mdf.m && (this.isMasked ? a.setAttribute("transform", r.m) : (a.style.webkitTransform = r.m,
                      a.style.transform = r.m)),
                      a.style.opacity = r.o,
                      r.sw && r._mdf.sw && n.setAttribute("stroke-width", r.sw),
                      r.sc && r._mdf.sc && n.setAttribute("stroke", r.sc),
                      r.fc && r._mdf.fc && (n.setAttribute("fill", r.fc),
                      n.style.color = r.fc));
                  if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                      var l = this.innerElem.getBBox();
                      this.currentBBox.w !== l.width && (this.currentBBox.w = l.width,
                      this.svgElement.setAttribute("width", l.width)),
                      this.currentBBox.h !== l.height && (this.currentBBox.h = l.height,
                      this.svgElement.setAttribute("height", l.height));
                      if (this.currentBBox.w !== l.width + 2 || this.currentBBox.h !== l.height + 2 || this.currentBBox.x !== l.x - 1 || this.currentBBox.y !== l.y - 1) {
                          this.currentBBox.w = l.width + 2,
                          this.currentBBox.h = l.height + 2,
                          this.currentBBox.x = l.x - 1,
                          this.currentBBox.y = l.y - 1,
                          this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                          t = this.svgElement.style;
                          var C = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                          t.transform = C,
                          t.webkitTransform = C
                      }
                  }
              }
          }
          ,
          extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
          HCameraElement.prototype.setup = function() {
              var t, e, i, s, r = this.comp.threeDElements.length;
              for (t = 0; t < r; t += 1)
                  if ("3d" === (e = this.comp.threeDElements[t]).type) {
                      i = e.perspectiveElem.style,
                      s = e.container.style;
                      var a = this.pe.v + "px"
                        , n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                      i.perspective = a,
                      i.webkitPerspective = a,
                      s.transformOrigin = "0px 0px 0px",
                      s.mozTransformOrigin = "0px 0px 0px",
                      s.webkitTransformOrigin = "0px 0px 0px",
                      i.transform = n,
                      i.webkitTransform = n
                  }
          }
          ,
          HCameraElement.prototype.createElements = function() {}
          ,
          HCameraElement.prototype.hide = function() {}
          ,
          HCameraElement.prototype.renderFrame = function() {
              var t, e, i = this._isFirstFrame;
              if (this.hierarchy)
                  for (e = this.hierarchy.length,
                  t = 0; t < e; t += 1)
                      i = this.hierarchy[t].finalTransform.mProp._mdf || i;
              if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                  if (this.mat.reset(),
                  this.hierarchy)
                      for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                          var s = this.hierarchy[t].finalTransform.mProp;
                          this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]),
                          this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]),
                          this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v),
                          this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]),
                          this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                      }
                  if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                  this.a) {
                      var r;
                      r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                      var a = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2))
                        , n = [r[0] / a, r[1] / a, r[2] / a]
                        , o = Math.sqrt(n[2] * n[2] + n[0] * n[0])
                        , g = Math.atan2(n[1], o)
                        , h = Math.atan2(n[0], -n[2]);
                      this.mat.rotateY(h).rotateX(-g)
                  }
                  this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                  this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                  this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                  this.mat.translate(0, 0, this.pe.v);
                  var l = !this._prevMat.equals(this.mat);
                  if ((l || this.pe._mdf) && this.comp.threeDElements) {
                      var C, A, p;
                      for (e = this.comp.threeDElements.length,
                      t = 0; t < e; t += 1)
                          if ("3d" === (C = this.comp.threeDElements[t]).type) {
                              if (l) {
                                  var I = this.mat.toCSS();
                                  (p = C.container.style).transform = I,
                                  p.webkitTransform = I
                              }
                              this.pe._mdf && ((A = C.perspectiveElem.style).perspective = this.pe.v + "px",
                              A.webkitPerspective = this.pe.v + "px")
                          }
                      this.mat.clone(this._prevMat)
                  }
              }
              this._isFirstFrame = !1
          }
          ,
          HCameraElement.prototype.prepareFrame = function(t) {
              this.prepareProperties(t, !0)
          }
          ,
          HCameraElement.prototype.destroy = function() {}
          ,
          HCameraElement.prototype.getBaseElement = function() {
              return null
          }
          ,
          extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
          HImageElement.prototype.createContent = function() {
              var t = this.globalData.getAssetsPath(this.assetData)
                , e = new Image;
              this.data.hasMask ? (this.imageElem = createNS("image"),
              this.imageElem.setAttribute("width", this.assetData.w + "px"),
              this.imageElem.setAttribute("height", this.assetData.h + "px"),
              this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
              this.layerElement.appendChild(this.imageElem),
              this.baseElement.setAttribute("width", this.assetData.w),
              this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
              e.crossOrigin = "anonymous",
              e.src = t,
              this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
          }
          ,
          extendPrototype([BaseRenderer], HybridRendererBase),
          HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,
          HybridRendererBase.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                  this.pendingElements.pop().checkParenting()
              }
          }
          ,
          HybridRendererBase.prototype.appendElementInPos = function(t, e) {
              var i = t.getBaseElement();
              if (i) {
                  var s = this.layers[e];
                  if (s.ddd && this.supports3d)
                      this.addTo3dContainer(i, e);
                  else if (this.threeDElements)
                      this.addTo3dContainer(i, e);
                  else {
                      for (var r, a, n = 0; n < e; )
                          this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n],
                          r = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || r),
                          n += 1;
                      r ? s.ddd && this.supports3d || this.layerElement.insertBefore(i, r) : s.ddd && this.supports3d || this.layerElement.appendChild(i)
                  }
              }
          }
          ,
          HybridRendererBase.prototype.createShape = function(t) {
              return this.supports3d ? new HShapeElement(t,this.globalData,this) : new SVGShapeElement(t,this.globalData,this)
          }
          ,
          HybridRendererBase.prototype.createText = function(t) {
              return this.supports3d ? new HTextElement(t,this.globalData,this) : new SVGTextLottieElement(t,this.globalData,this)
          }
          ,
          HybridRendererBase.prototype.createCamera = function(t) {
              return this.camera = new HCameraElement(t,this.globalData,this),
              this.camera
          }
          ,
          HybridRendererBase.prototype.createImage = function(t) {
              return this.supports3d ? new HImageElement(t,this.globalData,this) : new IImageElement(t,this.globalData,this)
          }
          ,
          HybridRendererBase.prototype.createSolid = function(t) {
              return this.supports3d ? new HSolidElement(t,this.globalData,this) : new ISolidElement(t,this.globalData,this)
          }
          ,
          HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
          HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
              for (var e = 0, i = this.threeDElements.length; e < i; ) {
                  if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                      return this.threeDElements[e].perspectiveElem;
                  e += 1
              }
              return null
          }
          ,
          HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
              var i, s, r = createTag("div");
              styleDiv(r);
              var a = createTag("div");
              if (styleDiv(a),
              "3d" === e) {
                  (i = r.style).width = this.globalData.compSize.w + "px",
                  i.height = this.globalData.compSize.h + "px";
                  i.webkitTransformOrigin = "50% 50%",
                  i.mozTransformOrigin = "50% 50%",
                  i.transformOrigin = "50% 50%";
                  var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                  (s = a.style).transform = n,
                  s.webkitTransform = n
              }
              r.appendChild(a);
              var o = {
                  container: a,
                  perspectiveElem: r,
                  startPos: t,
                  endPos: t,
                  type: e
              };
              return this.threeDElements.push(o),
              o
          }
          ,
          HybridRendererBase.prototype.build3dContainers = function() {
              var t, e, i = this.layers.length, s = "";
              for (t = 0; t < i; t += 1)
                  this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== s && (s = "3d",
                  e = this.createThreeDContainer(t, "3d")),
                  e.endPos = Math.max(e.endPos, t)) : ("2d" !== s && (s = "2d",
                  e = this.createThreeDContainer(t, "2d")),
                  e.endPos = Math.max(e.endPos, t));
              for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1)
                  this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
          }
          ,
          HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
              for (var i = 0, s = this.threeDElements.length; i < s; ) {
                  if (e <= this.threeDElements[i].endPos) {
                      for (var r, a = this.threeDElements[i].startPos; a < e; )
                          this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()),
                          a += 1;
                      r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t);
                      break
                  }
                  i += 1
              }
          }
          ,
          HybridRendererBase.prototype.configAnimation = function(t) {
              var e = createTag("div")
                , i = this.animationItem.wrapper
                , s = e.style;
              s.width = t.w + "px",
              s.height = t.h + "px",
              this.resizerElem = e,
              styleDiv(e),
              s.transformStyle = "flat",
              s.mozTransformStyle = "flat",
              s.webkitTransformStyle = "flat",
              this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
              i.appendChild(e),
              s.overflow = "hidden";
              var r = createNS("svg");
              r.setAttribute("width", "1"),
              r.setAttribute("height", "1"),
              styleDiv(r),
              this.resizerElem.appendChild(r);
              var a = createNS("defs");
              r.appendChild(a),
              this.data = t,
              this.setupGlobalData(t, r),
              this.globalData.defs = a,
              this.layers = t.layers,
              this.layerElement = this.resizerElem,
              this.build3dContainers(),
              this.updateContainerSize()
          }
          ,
          HybridRendererBase.prototype.destroy = function() {
              var t;
              this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
              this.animationItem.container = null,
              this.globalData.defs = null;
              var e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t += 1)
                  this.elements[t].destroy();
              this.elements.length = 0,
              this.destroyed = !0,
              this.animationItem = null
          }
          ,
          HybridRendererBase.prototype.updateContainerSize = function() {
              var t, e, i, s, r = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = r / a;
              this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = r / this.globalData.compSize.w,
              e = r / this.globalData.compSize.w,
              i = 0,
              s = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h,
              e = a / this.globalData.compSize.h,
              i = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2,
              s = 0);
              var o = this.resizerElem.style;
              o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + s + ",0,1)",
              o.transform = o.webkitTransform
          }
          ,
          HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
          HybridRendererBase.prototype.hide = function() {
              this.resizerElem.style.display = "none"
          }
          ,
          HybridRendererBase.prototype.show = function() {
              this.resizerElem.style.display = "block"
          }
          ,
          HybridRendererBase.prototype.initItems = function() {
              if (this.buildAllItems(),
              this.camera)
                  this.camera.setup();
              else {
                  var t, e = this.globalData.compSize.w, i = this.globalData.compSize.h, s = this.threeDElements.length;
                  for (t = 0; t < s; t += 1) {
                      var r = this.threeDElements[t].perspectiveElem.style;
                      r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px",
                      r.perspective = r.webkitPerspective
                  }
              }
          }
          ,
          HybridRendererBase.prototype.searchExtraCompositions = function(t) {
              var e, i = t.length, s = createTag("div");
              for (e = 0; e < i; e += 1)
                  if (t[e].xt) {
                      var r = this.createComp(t[e], s, this.globalData.comp, null);
                      r.initExpressions(),
                      this.globalData.projectInterface.registerComposition(r)
                  }
          }
          ,
          extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
          HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
          HCompElement.prototype.createContainerElements = function() {
              this._createBaseContainerElements(),
              this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
              this.svgElement.setAttribute("height", this.data.h),
              this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
          }
          ,
          HCompElement.prototype.addTo3dContainer = function(t, e) {
              for (var i, s = 0; s < e; )
                  this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()),
                  s += 1;
              i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
          }
          ,
          HCompElement.prototype.createComp = function(t) {
              return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
          }
          ,
          extendPrototype([HybridRendererBase], HybridRenderer),
          HybridRenderer.prototype.createComp = function(t) {
              return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
          }
          ;
          var Expressions = function() {
              var t = {};
              return t.initExpressions = function(t) {
                  var e = 0
                    , i = [];
                  t.renderer.compInterface = CompExpressionInterface(t.renderer),
                  t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                  t.renderer.globalData.pushExpression = function() {
                      e += 1
                  }
                  ,
                  t.renderer.globalData.popExpression = function() {
                      0 === (e -= 1) && function() {
                          var t, e = i.length;
                          for (t = 0; t < e; t += 1)
                              i[t].release();
                          i.length = 0
                      }()
                  }
                  ,
                  t.renderer.globalData.registerExpressionProperty = function(t) {
                      -1 === i.indexOf(t) && i.push(t)
                  }
              }
              ,
              t
          }();
          function _typeof$1(t) {
              return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          function seedRandom(t, e) {
              var i = this
                , s = e.pow(256, 6)
                , r = e.pow(2, 52)
                , a = 2 * r;
              function n(t) {
                  var e, i = t.length, s = this, r = 0, a = s.i = s.j = 0, n = s.S = [];
                  for (i || (t = [i++]); r < 256; )
                      n[r] = r++;
                  for (r = 0; r < 256; r++)
                      n[r] = n[a = 255 & a + t[r % i] + (e = n[r])],
                      n[a] = e;
                  s.g = function(t) {
                      for (var e, i = 0, r = s.i, a = s.j, n = s.S; t--; )
                          e = n[r = 255 & r + 1],
                          i = 256 * i + n[255 & (n[r] = n[a = 255 & a + e]) + (n[a] = e)];
                      return s.i = r,
                      s.j = a,
                      i
                  }
              }
              function o(t, e) {
                  return e.i = t.i,
                  e.j = t.j,
                  e.S = t.S.slice(),
                  e
              }
              function g(t, e) {
                  for (var i, s = t + "", r = 0; r < s.length; )
                      e[255 & r] = 255 & (i ^= 19 * e[255 & r]) + s.charCodeAt(r++);
                  return h(e)
              }
              function h(t) {
                  return String.fromCharCode.apply(0, t)
              }
              e.seedrandom = function(l, C, A) {
                  var p = []
                    , I = g(function t(e, i) {
                      var s, r = [], a = _typeof$1(e);
                      if (i && "object" == a)
                          for (s in e)
                              try {
                                  r.push(t(e[s], i - 1))
                              } catch (t) {}
                      return r.length ? r : "string" == a ? e : e + "\0"
                  }((C = !0 === C ? {
                      entropy: !0
                  } : C || {}).entropy ? [l, h(t)] : null === l ? function() {
                      try {
                          void 0;
                          var e = new Uint8Array(256);
                          return (i.crypto || i.msCrypto).getRandomValues(e),
                          h(e)
                      } catch (e) {
                          var s = i.navigator
                            , r = s && s.plugins;
                          return [+new Date, i, r, i.screen, h(t)]
                      }
                  }() : l, 3), p)
                    , m = new n(p)
                    , c = function() {
                      for (var t = m.g(6), e = s, i = 0; t < r; )
                          t = 256 * (t + i),
                          e *= 256,
                          i = m.g(1);
                      for (; t >= a; )
                          t /= 2,
                          e /= 2,
                          i >>>= 1;
                      return (t + i) / e
                  };
                  return c.int32 = function() {
                      return 0 | m.g(4)
                  }
                  ,
                  c.quick = function() {
                      return m.g(4) / 4294967296
                  }
                  ,
                  c.double = c,
                  g(h(m.S), t),
                  (C.pass || A || function(t, i, s, r) {
                      return r && (r.S && o(r, m),
                      t.state = function() {
                          return o(m, {})
                      }
                      ),
                      s ? (e.random = t,
                      i) : t
                  }
                  )(c, I, "global"in C ? C.global : this == e, C.state)
              }
              ,
              g(e.random(), t)
          }
          function initialize$2(t) {
              seedRandom([], t)
          }
          var propTypes = {
              SHAPE: "shape"
          };
          function _typeof(t) {
              return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              )(t)
          }
          var ExpressionManager = function() {
              var ob = {}
                , Math = BMMath
                , window = null
                , document = null
                , XMLHttpRequest = null
                , fetch = null
                , frames = null;
              function $bm_isInstanceOfArray(t) {
                  return t.constructor === Array || t.constructor === Float32Array
              }
              function isNumerable(t, e) {
                  return "number" === t || "boolean" === t || "string" === t || e instanceof Number
              }
              function $bm_neg(t) {
                  var e = _typeof(t);
                  if ("number" === e || "boolean" === e || t instanceof Number)
                      return -t;
                  if ($bm_isInstanceOfArray(t)) {
                      var i, s = t.length, r = [];
                      for (i = 0; i < s; i += 1)
                          r[i] = -t[i];
                      return r
                  }
                  return t.propType ? t.v : -t
              }
              initialize$2(BMMath);
              var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
                , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
                , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
              function sum(t, e) {
                  var i = _typeof(t)
                    , s = _typeof(e);
                  if ("string" === i || "string" === s)
                      return t + e;
                  if (isNumerable(i, t) && isNumerable(s, e))
                      return t + e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                      return (t = t.slice(0))[0] += e,
                      t;
                  if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                      return (e = e.slice(0))[0] = t + e[0],
                      e;
                  if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                      for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n; )
                          ("number" == typeof t[r] || t[r]instanceof Number) && ("number" == typeof e[r] || e[r]instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r],
                          r += 1;
                      return o
                  }
                  return 0
              }
              var add = sum;
              function sub(t, e) {
                  var i = _typeof(t)
                    , s = _typeof(e);
                  if (isNumerable(i, t) && isNumerable(s, e))
                      return "string" === i && (t = parseInt(t, 10)),
                      "string" === s && (e = parseInt(e, 10)),
                      t - e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                      return (t = t.slice(0))[0] -= e,
                      t;
                  if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                      return (e = e.slice(0))[0] = t - e[0],
                      e;
                  if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                      for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n; )
                          ("number" == typeof t[r] || t[r]instanceof Number) && ("number" == typeof e[r] || e[r]instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r],
                          r += 1;
                      return o
                  }
                  return 0
              }
              function mul(t, e) {
                  var i, s, r, a = _typeof(t), n = _typeof(e);
                  if (isNumerable(a, t) && isNumerable(n, e))
                      return t * e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                      for (r = t.length,
                      i = createTypedArray("float32", r),
                      s = 0; s < r; s += 1)
                          i[s] = t[s] * e;
                      return i
                  }
                  if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                      for (r = e.length,
                      i = createTypedArray("float32", r),
                      s = 0; s < r; s += 1)
                          i[s] = t * e[s];
                      return i
                  }
                  return 0
              }
              function div(t, e) {
                  var i, s, r, a = _typeof(t), n = _typeof(e);
                  if (isNumerable(a, t) && isNumerable(n, e))
                      return t / e;
                  if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                      for (r = t.length,
                      i = createTypedArray("float32", r),
                      s = 0; s < r; s += 1)
                          i[s] = t[s] / e;
                      return i
                  }
                  if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                      for (r = e.length,
                      i = createTypedArray("float32", r),
                      s = 0; s < r; s += 1)
                          i[s] = t / e[s];
                      return i
                  }
                  return 0
              }
              function mod(t, e) {
                  return "string" == typeof t && (t = parseInt(t, 10)),
                  "string" == typeof e && (e = parseInt(e, 10)),
                  t % e
              }
              var $bm_sum = sum
                , $bm_sub = sub
                , $bm_mul = mul
                , $bm_div = div
                , $bm_mod = mod;
              function clamp(t, e, i) {
                  if (e > i) {
                      var s = i;
                      i = e,
                      e = s
                  }
                  return Math.min(Math.max(t, e), i)
              }
              function radiansToDegrees(t) {
                  return t / degToRads
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                  return t * degToRads
              }
              var degrees_to_radians = radiansToDegrees
                , helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                  if ("number" == typeof t || t instanceof Number)
                      return e = e || 0,
                      Math.abs(t - e);
                  var i;
                  e || (e = helperLengthArray);
                  var s = Math.min(t.length, e.length)
                    , r = 0;
                  for (i = 0; i < s; i += 1)
                      r += Math.pow(e[i] - t[i], 2);
                  return Math.sqrt(r)
              }
              function normalize(t) {
                  return div(t, length(t))
              }
              function rgbToHsl(t) {
                  var e, i, s = t[0], r = t[1], a = t[2], n = Math.max(s, r, a), o = Math.min(s, r, a), g = (n + o) / 2;
                  if (n === o)
                      e = 0,
                      i = 0;
                  else {
                      var h = n - o;
                      switch (i = g > .5 ? h / (2 - n - o) : h / (n + o),
                      n) {
                      case s:
                          e = (r - a) / h + (r < a ? 6 : 0);
                          break;
                      case r:
                          e = (a - s) / h + 2;
                          break;
                      case a:
                          e = (s - r) / h + 4
                      }
                      e /= 6
                  }
                  return [e, i, g, t[3]]
              }
              function hue2rgb(t, e, i) {
                  return i < 0 && (i += 1),
                  i > 1 && (i -= 1),
                  i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
              }
              function hslToRgb(t) {
                  var e, i, s, r = t[0], a = t[1], n = t[2];
                  if (0 === a)
                      e = n,
                      s = n,
                      i = n;
                  else {
                      var o = n < .5 ? n * (1 + a) : n + a - n * a
                        , g = 2 * n - o;
                      e = hue2rgb(g, o, r + 1 / 3),
                      i = hue2rgb(g, o, r),
                      s = hue2rgb(g, o, r - 1 / 3)
                  }
                  return [e, i, s, t[3]]
              }
              function linear(t, e, i, s, r) {
                  if (void 0 !== s && void 0 !== r || (s = e,
                  r = i,
                  e = 0,
                  i = 1),
                  i < e) {
                      var a = i;
                      i = e,
                      e = a
                  }
                  if (t <= e)
                      return s;
                  if (t >= i)
                      return r;
                  var n, o = i === e ? 0 : (t - e) / (i - e);
                  if (!s.length)
                      return s + (r - s) * o;
                  var g = s.length
                    , h = createTypedArray("float32", g);
                  for (n = 0; n < g; n += 1)
                      h[n] = s[n] + (r[n] - s[n]) * o;
                  return h
              }
              function random(t, e) {
                  if (void 0 === e && (void 0 === t ? (t = 0,
                  e = 1) : (e = t,
                  t = void 0)),
                  e.length) {
                      var i, s = e.length;
                      t || (t = createTypedArray("float32", s));
                      var r = createTypedArray("float32", s)
                        , a = BMMath.random();
                      for (i = 0; i < s; i += 1)
                          r[i] = t[i] + a * (e[i] - t[i]);
                      return r
                  }
                  return void 0 === t && (t = 0),
                  t + BMMath.random() * (e - t)
              }
              function createPath(t, e, i, s) {
                  var r, a = t.length, n = shapePool.newElement();
                  n.setPathData(!!s, a);
                  var o, g, h = [0, 0];
                  for (r = 0; r < a; r += 1)
                      o = e && e[r] ? e[r] : h,
                      g = i && i[r] ? i[r] : h,
                      n.setTripleAt(t[r][0], t[r][1], g[0] + t[r][0], g[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
                  return n
              }
              function initiateExpression(elem, data, property) {
                  var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                  thisProperty.valueAtTime = thisProperty.getValueAtTime,
                  Object.defineProperty(thisProperty, "value", {
                      get: function() {
                          return thisProperty.v
                      }
                  }),
                  elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                  elem.comp.displayStartTime = 0;
                  var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = function(t, e) {
                      var i, s, r = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", r);
                      var n = Math.floor(5 * time);
                      for (i = 0,
                      s = 0; i < n; ) {
                          for (s = 0; s < r; s += 1)
                              a[s] += -e + 2 * e * BMMath.random();
                          i += 1
                      }
                      var o = 5 * time
                        , g = o - Math.floor(o)
                        , h = createTypedArray("float32", r);
                      if (r > 1) {
                          for (s = 0; s < r; s += 1)
                              h[s] = this.pv[s] + a[s] + (-e + 2 * e * BMMath.random()) * g;
                          return h
                      }
                      return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * g
                  }
                  .bind(this);
                  function loopInDuration(t, e) {
                      return loopIn(t, e, !0)
                  }
                  function loopOutDuration(t, e) {
                      return loopOut(t, e, !0)
                  }
                  thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                  loop_in = loopIn),
                  thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                  loop_out = loopOut),
                  thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                  this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                  this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                  var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                  function lookAt(t, e) {
                      var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                        , s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                      return [-Math.atan2(i[1], i[2]) / degToRads, s, 0]
                  }
                  function easeOut(t, e, i, s, r) {
                      return applyEase(easeOutBez, t, e, i, s, r)
                  }
                  function easeIn(t, e, i, s, r) {
                      return applyEase(easeInBez, t, e, i, s, r)
                  }
                  function ease(t, e, i, s, r) {
                      return applyEase(easeInOutBez, t, e, i, s, r)
                  }
                  function applyEase(t, e, i, s, r, a) {
                      void 0 === r ? (r = i,
                      a = s) : e = (e - i) / (s - i),
                      e > 1 ? e = 1 : e < 0 && (e = 0);
                      var n = t(e);
                      if ($bm_isInstanceOfArray(r)) {
                          var o, g = r.length, h = createTypedArray("float32", g);
                          for (o = 0; o < g; o += 1)
                              h[o] = (a[o] - r[o]) * n + r[o];
                          return h
                      }
                      return (a - r) * n + r
                  }
                  function nearestKey(t) {
                      var e, i, s, r = data.k.length;
                      if (data.k.length && "number" != typeof data.k[0])
                          if (i = -1,
                          (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                              i = 1,
                              s = data.k[0].t;
                          else {
                              for (e = 0; e < r - 1; e += 1) {
                                  if (t === data.k[e].t) {
                                      i = e + 1,
                                      s = data.k[e].t;
                                      break
                                  }
                                  if (t > data.k[e].t && t < data.k[e + 1].t) {
                                      t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2,
                                      s = data.k[e + 1].t) : (i = e + 1,
                                      s = data.k[e].t);
                                      break
                                  }
                              }
                              -1 === i && (i = e + 1,
                              s = data.k[e].t)
                          }
                      else
                          i = 0,
                          s = 0;
                      var a = {};
                      return a.index = i,
                      a.time = s / elem.comp.globalData.frameRate,
                      a
                  }
                  function key(t) {
                      var e, i, s;
                      if (!data.k.length || "number" == typeof data.k[0])
                          throw new Error("The property has no keyframe at index " + t);
                      t -= 1,
                      e = {
                          time: data.k[t].t / elem.comp.globalData.frameRate,
                          value: []
                      };
                      var r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                      for (s = r.length,
                      i = 0; i < s; i += 1)
                          e[i] = r[i],
                          e.value[i] = r[i];
                      return e
                  }
                  function framesToTime(t, e) {
                      return e || (e = elem.comp.globalData.frameRate),
                      t / e
                  }
                  function timeToFrames(t, e) {
                      return t || 0 === t || (t = time),
                      e || (e = elem.comp.globalData.frameRate),
                      t * e
                  }
                  function seedRandom(t) {
                      BMMath.seedrandom(randSeed + t)
                  }
                  function sourceRectAtTime() {
                      return elem.sourceRectAtTime()
                  }
                  function substring(t, e) {
                      return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                  }
                  function substr(t, e) {
                      return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                  }
                  function posterizeTime(t) {
                      time = 0 === t ? 0 : Math.floor(time * t) / t,
                      value = valueAtTime(time)
                  }
                  var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                  function executeExpression(t) {
                      return value = t,
                      this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex,
                      textTotal = this.textTotal,
                      selectorValue = this.selectorValue),
                      thisLayer || (text = elem.layerInterface.text,
                      thisLayer = elem.layerInterface,
                      thisComp = elem.comp.compInterface,
                      toWorld = thisLayer.toWorld.bind(thisLayer),
                      fromWorld = thisLayer.fromWorld.bind(thisLayer),
                      fromComp = thisLayer.fromComp.bind(thisLayer),
                      toComp = thisLayer.toComp.bind(thisLayer),
                      mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                      fromCompToSurface = fromComp),
                      transform || (transform = elem.layerInterface("ADBE Transform Group"),
                      $bm_transform = transform,
                      transform && (anchorPoint = transform.anchorPoint)),
                      4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                      effect || (effect = thisLayer(4)),
                      (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface),
                      time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                      _needsRandom && seedRandom(randSeed + time),
                      needsVelocity && (velocity = velocityAtTime(time)),
                      expression_function(),
                      this.frameExpressionId = elem.globalData.frameId,
                      scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                  }
                  return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData],
                  executeExpression
              }
              return ob.initiateExpression = initiateExpression,
              ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath],
              ob
          }()
            , expressionHelpers = {
              searchExpressions: function(t, e, i) {
                  e.x && (i.k = !0,
                  i.x = !0,
                  i.initiateExpression = ExpressionManager.initiateExpression,
                  i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
              },
              getSpeedAtTime: function(t) {
                  var e = this.getValueAtTime(t)
                    , i = this.getValueAtTime(t + -.01)
                    , s = 0;
                  if (e.length) {
                      var r;
                      for (r = 0; r < e.length; r += 1)
                          s += Math.pow(i[r] - e[r], 2);
                      s = 100 * Math.sqrt(s)
                  } else
                      s = 0;
                  return s
              },
              getVelocityAtTime: function(t) {
                  if (void 0 !== this.vel)
                      return this.vel;
                  var e, i, s = this.getValueAtTime(t), r = this.getValueAtTime(t + -.001);
                  if (s.length)
                      for (e = createTypedArray("float32", s.length),
                      i = 0; i < s.length; i += 1)
                          e[i] = (r[i] - s[i]) / -.001;
                  else
                      e = (r - s) / -.001;
                  return e
              },
              getValueAtTime: function(t) {
                  return t *= this.elem.globalData.frameRate,
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0,
                  this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime),
                  this._cachingAtTime.lastFrame = t),
                  this._cachingAtTime.value
              },
              getStaticValueAtTime: function() {
                  return this.pv
              },
              setGroupProperty: function(t) {
                  this.propertyGroup = t
              }
          };
          function addPropertyDecorator() {
              function t(t, e, i) {
                  if (!this.k || !this.keyframes)
                      return this.pv;
                  t = t ? t.toLowerCase() : "";
                  var s, r, a, n, o, g = this.comp.renderedFrame, h = this.keyframes, l = h[h.length - 1].t;
                  if (g <= l)
                      return this.pv;
                  if (i ? r = l - (s = e ? Math.abs(l - this.elem.comp.globalData.frameRate * e) : Math.max(0, l - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1),
                  s = l - (r = h[h.length - 1 - e].t)),
                  "pingpong" === t) {
                      if (Math.floor((g - r) / s) % 2 != 0)
                          return this.getValueAtTime((s - (g - r) % s + r) / this.comp.globalData.frameRate, 0)
                  } else {
                      if ("offset" === t) {
                          var C = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                            , A = this.getValueAtTime(l / this.comp.globalData.frameRate, 0)
                            , p = this.getValueAtTime(((g - r) % s + r) / this.comp.globalData.frameRate, 0)
                            , I = Math.floor((g - r) / s);
                          if (this.pv.length) {
                              for (n = (o = new Array(C.length)).length,
                              a = 0; a < n; a += 1)
                                  o[a] = (A[a] - C[a]) * I + p[a];
                              return o
                          }
                          return (A - C) * I + p
                      }
                      if ("continue" === t) {
                          var m = this.getValueAtTime(l / this.comp.globalData.frameRate, 0)
                            , c = this.getValueAtTime((l - .001) / this.comp.globalData.frameRate, 0);
                          if (this.pv.length) {
                              for (n = (o = new Array(m.length)).length,
                              a = 0; a < n; a += 1)
                                  o[a] = m[a] + (m[a] - c[a]) * ((g - l) / this.comp.globalData.frameRate) / 5e-4;
                              return o
                          }
                          return m + (g - l) / .001 * (m - c)
                      }
                  }
                  return this.getValueAtTime(((g - r) % s + r) / this.comp.globalData.frameRate, 0)
              }
              function e(t, e, i) {
                  if (!this.k)
                      return this.pv;
                  t = t ? t.toLowerCase() : "";
                  var s, r, a, n, o, g = this.comp.renderedFrame, h = this.keyframes, l = h[0].t;
                  if (g >= l)
                      return this.pv;
                  if (i ? r = l + (s = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - l)) : ((!e || e > h.length - 1) && (e = h.length - 1),
                  s = (r = h[e].t) - l),
                  "pingpong" === t) {
                      if (Math.floor((l - g) / s) % 2 == 0)
                          return this.getValueAtTime(((l - g) % s + l) / this.comp.globalData.frameRate, 0)
                  } else {
                      if ("offset" === t) {
                          var C = this.getValueAtTime(l / this.comp.globalData.frameRate, 0)
                            , A = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                            , p = this.getValueAtTime((s - (l - g) % s + l) / this.comp.globalData.frameRate, 0)
                            , I = Math.floor((l - g) / s) + 1;
                          if (this.pv.length) {
                              for (n = (o = new Array(C.length)).length,
                              a = 0; a < n; a += 1)
                                  o[a] = p[a] - (A[a] - C[a]) * I;
                              return o
                          }
                          return p - (A - C) * I
                      }
                      if ("continue" === t) {
                          var m = this.getValueAtTime(l / this.comp.globalData.frameRate, 0)
                            , c = this.getValueAtTime((l + .001) / this.comp.globalData.frameRate, 0);
                          if (this.pv.length) {
                              for (n = (o = new Array(m.length)).length,
                              a = 0; a < n; a += 1)
                                  o[a] = m[a] + (m[a] - c[a]) * (l - g) / .001;
                              return o
                          }
                          return m + (m - c) * (l - g) / .001
                      }
                  }
                  return this.getValueAtTime((s - ((l - g) % s + l)) / this.comp.globalData.frameRate, 0)
              }
              function i(t, e) {
                  if (!this.k)
                      return this.pv;
                  if (t = .5 * (t || .4),
                  (e = Math.floor(e || 5)) <= 1)
                      return this.pv;
                  var i, s, r = this.comp.renderedFrame / this.comp.globalData.frameRate, a = r - t, n = e > 1 ? (r + t - a) / (e - 1) : 1, o = 0, g = 0;
                  for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e; ) {
                      if (s = this.getValueAtTime(a + o * n),
                      this.pv.length)
                          for (g = 0; g < this.pv.length; g += 1)
                              i[g] += s[g];
                      else
                          i += s;
                      o += 1
                  }
                  if (this.pv.length)
                      for (g = 0; g < this.pv.length; g += 1)
                          i[g] /= e;
                  else
                      i /= e;
                  return i
              }
              function s(t) {
                  this._transformCachingAtTime || (this._transformCachingAtTime = {
                      v: new Matrix
                  });
                  var e = this._transformCachingAtTime.v;
                  if (e.cloneFromProps(this.pre.props),
                  this.appliedTransformations < 1) {
                      var i = this.a.getValueAtTime(t);
                      e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                  }
                  if (this.appliedTransformations < 2) {
                      var s = this.s.getValueAtTime(t);
                      e.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult)
                  }
                  if (this.sk && this.appliedTransformations < 3) {
                      var r = this.sk.getValueAtTime(t)
                        , a = this.sa.getValueAtTime(t);
                      e.skewFromAxis(-r * this.sk.mult, a * this.sa.mult)
                  }
                  if (this.r && this.appliedTransformations < 4) {
                      var n = this.r.getValueAtTime(t);
                      e.rotate(-n * this.r.mult)
                  } else if (!this.r && this.appliedTransformations < 4) {
                      var o = this.rz.getValueAtTime(t)
                        , g = this.ry.getValueAtTime(t)
                        , h = this.rx.getValueAtTime(t)
                        , l = this.or.getValueAtTime(t);
                      e.rotateZ(-o * this.rz.mult).rotateY(g * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-l[2] * this.or.mult).rotateY(l[1] * this.or.mult).rotateX(l[0] * this.or.mult)
                  }
                  if (this.data.p && this.data.p.s) {
                      var C = this.px.getValueAtTime(t)
                        , A = this.py.getValueAtTime(t);
                      if (this.data.p.z) {
                          var p = this.pz.getValueAtTime(t);
                          e.translate(C * this.px.mult, A * this.py.mult, -p * this.pz.mult)
                      } else
                          e.translate(C * this.px.mult, A * this.py.mult, 0)
                  } else {
                      var I = this.p.getValueAtTime(t);
                      e.translate(I[0] * this.p.mult, I[1] * this.p.mult, -I[2] * this.p.mult)
                  }
                  return e
              }
              function r() {
                  return this.v.clone(new Matrix)
              }
              var a = TransformPropertyFactory.getTransformProperty;
              TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                  var n = a(t, e, i);
                  return n.dynamicProperties.length ? n.getValueAtTime = s.bind(n) : n.getValueAtTime = r.bind(n),
                  n.setGroupProperty = expressionHelpers.setGroupProperty,
                  n
              }
              ;
              var n = PropertyFactory.getProp;
              PropertyFactory.getProp = function(s, r, a, o, g) {
                  var h = n(s, r, a, o, g);
                  h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h),
                  h.setGroupProperty = expressionHelpers.setGroupProperty,
                  h.loopOut = t,
                  h.loopIn = e,
                  h.smooth = i,
                  h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h),
                  h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h),
                  h.numKeys = 1 === r.a ? r.k.length : 0,
                  h.propertyIndex = r.ix;
                  var l = 0;
                  return 0 !== a && (l = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)),
                  h._cachingAtTime = {
                      lastFrame: initialDefaultFrame,
                      lastIndex: 0,
                      value: l
                  },
                  expressionHelpers.searchExpressions(s, r, h),
                  h.k && g.addDynamicProperty(h),
                  h
              }
              ;
              var o = ShapePropertyFactory.getConstructorFunction()
                , g = ShapePropertyFactory.getKeyframedConstructorFunction();
              function h() {}
              h.prototype = {
                  vertices: function(t, e) {
                      this.k && this.getValue();
                      var i, s = this.v;
                      void 0 !== e && (s = this.getValueAtTime(e, 0));
                      var r = s._length
                        , a = s[t]
                        , n = s.v
                        , o = createSizedArray(r);
                      for (i = 0; i < r; i += 1)
                          o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
                      return o
                  },
                  points: function(t) {
                      return this.vertices("v", t)
                  },
                  inTangents: function(t) {
                      return this.vertices("i", t)
                  },
                  outTangents: function(t) {
                      return this.vertices("o", t)
                  },
                  isClosed: function() {
                      return this.v.c
                  },
                  pointOnPath: function(t, e) {
                      var i = this.v;
                      void 0 !== e && (i = this.getValueAtTime(e, 0)),
                      this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                      for (var s, r = this._segmentsLength, a = r.lengths, n = r.totalLength * t, o = 0, g = a.length, h = 0; o < g; ) {
                          if (h + a[o].addedLength > n) {
                              var l = o
                                , C = i.c && o === g - 1 ? 0 : o + 1
                                , A = (n - h) / a[o].addedLength;
                              s = bez.getPointInSegment(i.v[l], i.v[C], i.o[l], i.i[C], A, a[o]);
                              break
                          }
                          h += a[o].addedLength,
                          o += 1
                      }
                      return s || (s = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                      s
                  },
                  vectorOnPath: function(t, e, i) {
                      1 == t ? t = this.v.c : 0 == t && (t = .999);
                      var s = this.pointOnPath(t, e)
                        , r = this.pointOnPath(t + .001, e)
                        , a = r[0] - s[0]
                        , n = r[1] - s[1]
                        , o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                      return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o]
                  },
                  tangentOnPath: function(t, e) {
                      return this.vectorOnPath(t, e, "tangent")
                  },
                  normalOnPath: function(t, e) {
                      return this.vectorOnPath(t, e, "normal")
                  },
                  setGroupProperty: expressionHelpers.setGroupProperty,
                  getValueAtTime: expressionHelpers.getStaticValueAtTime
              },
              extendPrototype([h], o),
              extendPrototype([h], g),
              g.prototype.getValueAtTime = function(t) {
                  return this._cachingAtTime || (this._cachingAtTime = {
                      shapeValue: shapePool.clone(this.pv),
                      lastIndex: 0,
                      lastTime: initialDefaultFrame
                  }),
                  t *= this.elem.globalData.frameRate,
                  (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0,
                  this._cachingAtTime.lastTime = t,
                  this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                  this._cachingAtTime.shapeValue
              }
              ,
              g.prototype.initiateExpression = ExpressionManager.initiateExpression;
              var l = ShapePropertyFactory.getShapeProp;
              ShapePropertyFactory.getShapeProp = function(t, e, i, s, r) {
                  var a = l(t, e, i, s, r);
                  return a.propertyIndex = e.ix,
                  a.lock = !1,
                  3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a),
                  a.k && t.addDynamicProperty(a),
                  a
              }
          }
          function initialize$1() {
              addPropertyDecorator()
          }
          function addDecorator() {
              TextProperty.prototype.getExpressionValue = function(t, e) {
                  var i = this.calculateExpression(e);
                  if (t.t !== i) {
                      var s = {};
                      return this.copyData(s, t),
                      s.t = i.toString(),
                      s.__complete = !1,
                      s
                  }
                  return t
              }
              ,
              TextProperty.prototype.searchProperty = function() {
                  var t = this.searchKeyframes()
                    , e = this.searchExpressions();
                  return this.kf = t || e,
                  this.kf
              }
              ,
              TextProperty.prototype.searchExpressions = function() {
                  return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0) : null
              }
          }
          function initialize() {
              addDecorator()
          }
          function SVGComposableEffect() {}
          function SVGTintFilter(t, e, i, s, r) {
              this.filterManager = e;
              var a = createNS("feColorMatrix");
              a.setAttribute("type", "matrix"),
              a.setAttribute("color-interpolation-filters", "linearRGB"),
              a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
              a.setAttribute("result", s + "_tint_1"),
              t.appendChild(a),
              (a = createNS("feColorMatrix")).setAttribute("type", "matrix"),
              a.setAttribute("color-interpolation-filters", "sRGB"),
              a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
              a.setAttribute("result", s + "_tint_2"),
              t.appendChild(a),
              this.matrixFilter = a;
              var n = this.createMergeNode(s, [r, s + "_tint_1", s + "_tint_2"]);
              t.appendChild(n)
          }
          function SVGFillFilter(t, e, i, s) {
              this.filterManager = e;
              var r = createNS("feColorMatrix");
              r.setAttribute("type", "matrix"),
              r.setAttribute("color-interpolation-filters", "sRGB"),
              r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
              r.setAttribute("result", s),
              t.appendChild(r),
              this.matrixFilter = r
          }
          function SVGStrokeEffect(t, e, i) {
              this.initialized = !1,
              this.filterManager = e,
              this.elem = i,
              this.paths = []
          }
          function SVGTritoneFilter(t, e, i, s) {
              this.filterManager = e;
              var r = createNS("feColorMatrix");
              r.setAttribute("type", "matrix"),
              r.setAttribute("color-interpolation-filters", "linearRGB"),
              r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
              t.appendChild(r);
              var a = createNS("feComponentTransfer");
              a.setAttribute("color-interpolation-filters", "sRGB"),
              a.setAttribute("result", s),
              this.matrixFilter = a;
              var n = createNS("feFuncR");
              n.setAttribute("type", "table"),
              a.appendChild(n),
              this.feFuncR = n;
              var o = createNS("feFuncG");
              o.setAttribute("type", "table"),
              a.appendChild(o),
              this.feFuncG = o;
              var g = createNS("feFuncB");
              g.setAttribute("type", "table"),
              a.appendChild(g),
              this.feFuncB = g,
              t.appendChild(a)
          }
          function SVGProLevelsFilter(t, e, i, s) {
              this.filterManager = e;
              var r = this.filterManager.effectElements
                , a = createNS("feComponentTransfer");
              (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)),
              (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)),
              (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)),
              (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)),
              (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(a)),
              (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"),
              a.setAttribute("result", s),
              t.appendChild(a),
              this.feFuncRComposed = this.createFeFunc("feFuncR", a),
              this.feFuncGComposed = this.createFeFunc("feFuncG", a),
              this.feFuncBComposed = this.createFeFunc("feFuncB", a))
          }
          function SVGDropShadowEffect(t, e, i, s, r) {
              var a = e.container.globalData.renderConfig.filterSize
                , n = e.data.fs || a;
              t.setAttribute("x", n.x || a.x),
              t.setAttribute("y", n.y || a.y),
              t.setAttribute("width", n.width || a.width),
              t.setAttribute("height", n.height || a.height),
              this.filterManager = e;
              var o = createNS("feGaussianBlur");
              o.setAttribute("in", "SourceAlpha"),
              o.setAttribute("result", s + "_drop_shadow_1"),
              o.setAttribute("stdDeviation", "0"),
              this.feGaussianBlur = o,
              t.appendChild(o);
              var g = createNS("feOffset");
              g.setAttribute("dx", "25"),
              g.setAttribute("dy", "0"),
              g.setAttribute("in", s + "_drop_shadow_1"),
              g.setAttribute("result", s + "_drop_shadow_2"),
              this.feOffset = g,
              t.appendChild(g);
              var h = createNS("feFlood");
              h.setAttribute("flood-color", "#00ff00"),
              h.setAttribute("flood-opacity", "1"),
              h.setAttribute("result", s + "_drop_shadow_3"),
              this.feFlood = h,
              t.appendChild(h);
              var l = createNS("feComposite");
              l.setAttribute("in", s + "_drop_shadow_3"),
              l.setAttribute("in2", s + "_drop_shadow_2"),
              l.setAttribute("operator", "in"),
              l.setAttribute("result", s + "_drop_shadow_4"),
              t.appendChild(l);
              var C = this.createMergeNode(s, [s + "_drop_shadow_4", r]);
              t.appendChild(C)
          }
          SVGComposableEffect.prototype = {
              createMergeNode: function(t, e) {
                  var i, s, r = createNS("feMerge");
                  for (r.setAttribute("result", t),
                  s = 0; s < e.length; s += 1)
                      (i = createNS("feMergeNode")).setAttribute("in", e[s]),
                      r.appendChild(i),
                      r.appendChild(i);
                  return r
              }
          },
          extendPrototype([SVGComposableEffect], SVGTintFilter),
          SVGTintFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[0].p.v
                    , i = this.filterManager.effectElements[1].p.v
                    , s = this.filterManager.effectElements[2].p.v / 100;
                  this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
              }
          }
          ,
          SVGFillFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[2].p.v
                    , i = this.filterManager.effectElements[6].p.v;
                  this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
              }
          }
          ,
          SVGStrokeEffect.prototype.initialize = function() {
              var t, e, i, s, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
              for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length,
              i = 0) : s = (i = this.filterManager.effectElements[0].p.v - 1) + 1,
              (e = createNS("g")).setAttribute("fill", "none"),
              e.setAttribute("stroke-linecap", "round"),
              e.setAttribute("stroke-dashoffset", 1); i < s; i += 1)
                  t = createNS("path"),
                  e.appendChild(t),
                  this.paths.push({
                      p: t,
                      m: i
                  });
              if (3 === this.filterManager.effectElements[10].p.v) {
                  var a = createNS("mask")
                    , n = createElementID();
                  a.setAttribute("id", n),
                  a.setAttribute("mask-type", "alpha"),
                  a.appendChild(e),
                  this.elem.globalData.defs.appendChild(a);
                  var o = createNS("g");
                  for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); r[0]; )
                      o.appendChild(r[0]);
                  this.elem.layerElement.appendChild(o),
                  this.masker = a,
                  e.setAttribute("stroke", "#fff")
              } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                  if (2 === this.filterManager.effectElements[10].p.v)
                      for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length; )
                          this.elem.layerElement.removeChild(r[0]);
                  this.elem.layerElement.appendChild(e),
                  this.elem.layerElement.removeAttribute("mask"),
                  e.setAttribute("stroke", "#fff")
              }
              this.initialized = !0,
              this.pathMasker = e
          }
          ,
          SVGStrokeEffect.prototype.renderFrame = function(t) {
              var e;
              this.initialized || this.initialize();
              var i, s, r = this.paths.length;
              for (e = 0; e < r; e += 1)
                  if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m],
                  s = this.paths[e].p,
                  (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath),
                  t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                      var a;
                      if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                          var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                            , o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                            , g = s.getTotalLength();
                          a = "0 0 0 " + g * n + " ";
                          var h, l = g * (o - n), C = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01, A = Math.floor(l / C);
                          for (h = 0; h < A; h += 1)
                              a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                          a += "0 " + 10 * g + " 0 0"
                      } else
                          a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                      s.setAttribute("stroke-dasharray", a)
                  }
              if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
              (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
              (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                  var p = this.filterManager.effectElements[3].p.v;
                  this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * p[0]) + "," + bmFloor(255 * p[1]) + "," + bmFloor(255 * p[2]) + ")")
              }
          }
          ,
          SVGTritoneFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                  var e = this.filterManager.effectElements[0].p.v
                    , i = this.filterManager.effectElements[1].p.v
                    , s = this.filterManager.effectElements[2].p.v
                    , r = s[0] + " " + i[0] + " " + e[0]
                    , a = s[1] + " " + i[1] + " " + e[1]
                    , n = s[2] + " " + i[2] + " " + e[2];
                  this.feFuncR.setAttribute("tableValues", r),
                  this.feFuncG.setAttribute("tableValues", a),
                  this.feFuncB.setAttribute("tableValues", n)
              }
          }
          ,
          SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
              var i = createNS(t);
              return i.setAttribute("type", "table"),
              e.appendChild(i),
              i
          }
          ,
          SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, s, r) {
              for (var a, n, o = 0, g = Math.min(t, e), h = Math.max(t, e), l = Array.call(null, {
                  length: 256
              }), C = 0, A = r - s, p = e - t; o <= 256; )
                  n = (a = o / 256) <= g ? p < 0 ? r : s : a >= h ? p < 0 ? s : r : s + A * Math.pow((a - t) / p, 1 / i),
                  l[C] = n,
                  C += 1,
                  o += 256 / 255;
              return l.join(" ")
          }
          ,
          SVGProLevelsFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                  var e, i = this.filterManager.effectElements;
                  this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v),
                  this.feFuncRComposed.setAttribute("tableValues", e),
                  this.feFuncGComposed.setAttribute("tableValues", e),
                  this.feFuncBComposed.setAttribute("tableValues", e)),
                  this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v),
                  this.feFuncR.setAttribute("tableValues", e)),
                  this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v),
                  this.feFuncG.setAttribute("tableValues", e)),
                  this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v),
                  this.feFuncB.setAttribute("tableValues", e)),
                  this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v),
                  this.feFuncA.setAttribute("tableValues", e))
              }
          }
          ,
          extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
          SVGDropShadowEffect.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                  if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                  t || this.filterManager.effectElements[0].p._mdf) {
                      var e = this.filterManager.effectElements[0].p.v;
                      this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                  }
                  if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                  t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                      var i = this.filterManager.effectElements[3].p.v
                        , s = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                        , r = i * Math.cos(s)
                        , a = i * Math.sin(s);
                      this.feOffset.setAttribute("dx", r),
                      this.feOffset.setAttribute("dy", a)
                  }
              }
          }
          ;
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, i) {
              this.initialized = !1,
              this.filterManager = e,
              this.filterElem = t,
              this.elem = i,
              i.matteElement = createNS("g"),
              i.matteElement.appendChild(i.layerElement),
              i.matteElement.appendChild(i.transformedElement),
              i.baseElement = i.matteElement
          }
          function SVGGaussianBlurEffect(t, e, i, s) {
              t.setAttribute("x", "-100%"),
              t.setAttribute("y", "-100%"),
              t.setAttribute("width", "300%"),
              t.setAttribute("height", "300%"),
              this.filterManager = e;
              var r = createNS("feGaussianBlur");
              r.setAttribute("result", s),
              t.appendChild(r),
              this.feGaussianBlur = r
          }
          return SVGMatte3Effect.prototype.findSymbol = function(t) {
              for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
                  if (_svgMatteSymbols[e] === t)
                      return _svgMatteSymbols[e];
                  e += 1
              }
              return null
          }
          ,
          SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
              var i = t.layerElement.parentNode;
              if (i) {
                  for (var s, r = i.children, a = 0, n = r.length; a < n && r[a] !== t.layerElement; )
                      a += 1;
                  a <= n - 2 && (s = r[a + 1]);
                  var o = createNS("use");
                  o.setAttribute("href", "#" + e),
                  s ? i.insertBefore(o, s) : i.appendChild(o)
              }
          }
          ,
          SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
              if (!this.findSymbol(e)) {
                  var i = createElementID()
                    , s = createNS("mask");
                  s.setAttribute("id", e.layerId),
                  s.setAttribute("mask-type", "alpha"),
                  _svgMatteSymbols.push(e);
                  var r = t.globalData.defs;
                  r.appendChild(s);
                  var a = createNS("symbol");
                  a.setAttribute("id", i),
                  this.replaceInParent(e, i),
                  a.appendChild(e.layerElement),
                  r.appendChild(a);
                  var n = createNS("use");
                  n.setAttribute("href", "#" + i),
                  s.appendChild(n),
                  e.data.hd = !1,
                  e.show()
              }
              t.setMatte(e.layerId)
          }
          ,
          SVGMatte3Effect.prototype.initialize = function() {
              for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s; )
                  e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]),
                  i += 1;
              this.initialized = !0
          }
          ,
          SVGMatte3Effect.prototype.renderFrame = function() {
              this.initialized || this.initialize()
          }
          ,
          SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                  var e = .3 * this.filterManager.effectElements[0].p.v
                    , i = this.filterManager.effectElements[1].p.v
                    , s = 3 == i ? 0 : e
                    , r = 2 == i ? 0 : e;
                  this.feGaussianBlur.setAttribute("stdDeviation", s + " " + r);
                  var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                  this.feGaussianBlur.setAttribute("edgeMode", a)
              }
          }
          ,
          registerRenderer("canvas", CanvasRenderer),
          registerRenderer("html", HybridRenderer),
          registerRenderer("svg", SVGRenderer),
          ShapeModifiers.registerModifier("tm", TrimModifier),
          ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
          ShapeModifiers.registerModifier("rp", RepeaterModifier),
          ShapeModifiers.registerModifier("rd", RoundCornersModifier),
          setExpressionsPlugin(Expressions),
          initialize$1(),
          initialize(),
          registerEffect(20, SVGTintFilter, !0),
          registerEffect(21, SVGFillFilter, !0),
          registerEffect(22, SVGStrokeEffect, !1),
          registerEffect(23, SVGTritoneFilter, !0),
          registerEffect(24, SVGProLevelsFilter, !0),
          registerEffect(25, SVGDropShadowEffect, !0),
          registerEffect(28, SVGMatte3Effect, !1),
          registerEffect(29, SVGGaussianBlurEffect, !0),
          lottie
      }
      ))
  },
  189: function(t, e) {
      (function(e) {
          t.exports = e
      }
      ).call(this, {})
  },
  190: function(t, e, i) {
      "use strict";
      (function(t) {
          var s;
          i.d(e, "a", (function() {
              return n
          }
          )),
          (s = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && s(t);
          "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
          var r, a, n = [{
              name: "圆形",
              path: i(191)
          }, {
              name: "菱形",
              path: i(192)
          }, {
              name: "心形",
              path: i(193)
          }, {
              name: "矩形2",
              path: i(194)
          }, {
              name: "矩形3",
              path: i(195)
          }, {
              name: "矩形4",
              path: i(196)
          }, {
              name: "星形1",
              path: i(197)
          }, {
              name: "星形2",
              path: i(198)
          }, {
              name: "星形3",
              path: i(199)
          }, {
              name: "三角形",
              path: i(200)
          }];
          (r = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && r.register(n, "imageStyles", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\imageStyles.js"),
          (a = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && a(t)
      }
      ).call(this, i(2)(t))
  },
  191: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICA8L2RlZnM+DQogIDxjaXJjbGUgaWQ9IuakreWchl8xIiBkYXRhLW5hbWU9IuakreWchiAxIiBjbGFzcz0iY2xzLTEiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPg0KPC9zdmc+DQo="
  },
  192: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDMyIDI4Ij4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuW9oueKtl8yIiBkYXRhLW5hbWU9IuW9oueKtiAyIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTAwLDQ0N2wtOC0xNCw4LTE0aDE2bDgsMTQtOCwxNGgtMTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ5MiAtNDE5KSIvPg0KPC9zdmc+DQo="
  },
  193: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDMwIDI2Ij4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuW9oueKtl8zIiBkYXRhLW5hbWU9IuW9oueKtiAzIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzMzLjk5LDQ4MS42OGMtMy44OC05LjAxNi0xNC45Mi02LjkxMi0xNC45OSwzLjU1MS0wLjA0LDUuNzQ3LDUuMjUsNy45LDguNzgsMTAuMTkzLDMuNDIsMi4yMjgsNS44NSw1LjI3Niw2LjI0LDYuNTc0LDAuMzItMS4yNzIsMy4wMy00LjQwNiw2LjItNi42MzYsMy40Ni0yLjQzOSw4LjgyLTQuNDQ2LDguNzgtMTAuMTkzQzEzNDguOTMsNDc0LjY3OSwxMzM3LjcsNDczLjAyNCwxMzMzLjk5LDQ4MS42OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzE5IC00NzYpIi8+DQo8L3N2Zz4NCg=="
  },
  194: function(t, e) {
      t.exports = "../../rect2-b95021fc.svg"
  },
  195: function(t, e) {
      t.exports = "../../rect3-d2d6503b.svg"
  },
  196: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzOSIgdmlld0JveD0iMCAwIDMwIDM5Ij4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuefqeW9ol83IiBkYXRhLW5hbWU9IuefqeW9oiA3IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTExLjM3LDU4Mi44NzljMC4zMiwwLjA1Mi4yNiwwLjc4LS4xMSwwLjcyOUEwLjc1LDAuNzUsMCwwLDEsMTUxMS4zNyw1ODIuODc5Wm0xLjYsMi42MzVjLTAuMTQtLjg5My41Ni0xLjAwOSwwLjgxLTAuNjE3QzE1MTQuMDcsNTg1LjM2NiwxNTEzLjM4LDU4Ni4wOTIsMTUxMi45Nyw1ODUuNTE0Wm0tMy4yMSwxLjE3OGExLjQ0NywxLjQ0NywwLDAsMS0uMTEsMS4zNDQsNS41NjIsNS41NjIsMCwwLDAtLjU5LjIyNUMxNTA3LjQ5LDU4OC4yNzgsMTUwOC42Miw1ODUuMjk1LDE1MDkuNzYsNTg2LjY5MlptLTYuNTQsNS4wNDRjLTEuMDgtLjQzMy0xLjM5LTEuOTA4LTEuNzEtMy4yNTFhMi40MzMsMi40MzMsMCwwLDEtLjE2LTAuOTUzYzAuMTYtLjc3NSwxLjE5LTAuNDg4LDEuMjguMjgxYTIuOTMyLDIuOTMyLDAsMCwwLS4wNS40NDgsMTAuNDQ2LDEwLjQ0NiwwLDAsMSwuNDMsMS4wNjVjMC4wNCwwLjI1My0uMDUuNTYsMCwwLjg0MUMxNTAzLjExLDU5MC43MjcsMTUwMy41Niw1OTEuMywxNTAzLjIyLDU5MS43MzZabTguMzEtMi40NjdhMS42MzEsMS42MzEsMCwwLDEtLjA2LTEuMDA4QzE1MTIuOTQsNTg3LjA5LDE1MTMuMDIsNTkwLjMxNiwxNTExLjUzLDU4OS4yNjlabS03LjYxLS41NmEwLjc2OCwwLjc2OCwwLDAsMS0uNDgsMS4xMjJBMC43OTMsMC43OTMsMCwwLDEsMTUwMy45Miw1ODguNzA5Wm00LjYxLDMuMzA3YzAuMTYsMC4wNy4xNywwLjE2MywwLjA1LDAuMjgxQzE1MDguNDEsNTkyLjI1OSwxNTA4LjUxLDU5Mi4xNDgsMTUwOC41Myw1OTIuMDE2Wm0wLjg1LDIuMDE5YTEuMzM4LDEuMzM4LDAsMCwxLC4yNywxLjUxNCwzLjgyMSwzLjgyMSwwLDAsMS0uOC4zMzYsMC45ODcsMC45ODcsMCwwLDEtLjM4LTEuNzM4LDEsMSwwLDAsMSwuMTEtMS40QTAuNzcsMC43NywwLDAsMSwxNTA5LjM4LDU5NC4wMzVabTAuNzUtLjMzNmEwLjM0OCwwLjM0OCwwLDAsMSwuMzMuMTY4LDAuMzEsMC4zMSwwLDAsMS0uMzguMzM2QTAuNjM5LDAuNjM5LDAsMCwxLDE1MTAuMTMsNTkzLjdabS03LjE4LDIuMTg2YTAuNDcsMC40NywwLDAsMS0uMzIuNjczQzE1MDIuNTYsNTk2LjM0OSwxNTAyLjYxLDU5NS44MzksMTUwMi45NSw1OTUuODg1Wm0zLjg2LDAuMzM2YTAuODYxLDAuODYxLDAsMCwxLS4zNy4xMTNDMTUwNi4xNSw1OTUuOTI4LDE1MDYuODksNTk1LjY3MSwxNTA2LjgxLDU5Ni4yMjFabS05Ljk2LjE2OWEwLjc4LDAuNzgsMCwwLDEtLjU0LjlBMC42NjgsMC42NjgsMCwwLDEsMTQ5Ni44NSw1OTYuMzlabTE0LjUyLDEuMTIxYTAuNjMxLDAuNjMxLDAsMCwxLS4xNy0wLjVDMTUxMS41OCw1OTYuMywxNTEyLjMsNTk3LjYxNywxNTExLjM3LDU5Ny41MTFabS0yLjktLjYxN2gwLjExdjAuMTEyaC0wLjExdi0wLjExMlptMy45NywwLjI4YzAuMTMsMC4wMDkuMDEsMC4xOSwwLC4yMjVDMTUxMi4zLDU5Ny4zOSwxNTEyLjQyLDU5Ny4yMDksMTUxMi40NCw1OTcuMTc0Wm0tNS40Ny40NDljMC4yMi0uMDU1LjIyLDAuMzM0LDAsMC4yOEMxNTA2Ljk3LDU5Ny43NjQsMTUwNi44Nyw1OTcuNzI5LDE1MDYuOTcsNTk3LjYyM1ptLTMuMTYsMS4zNDZjLTAuMTIuNSwwLjY1LDAuNTM4LDAuNDgsMS4wNjRhNS41NzMsNS41NzMsMCwwLDEtMi4xOS0xLjA2NEMxNTAyLjMzLDU5Ny42NiwxNTAzLjI1LDU5OS40MTYsMTUwMy44MSw1OTguOTY5Wm0tNy44Ny0uMjgxYzAuMTgtLjA1Ny4wOCwwLjE3NCwwLjEsMC4yODFDMTQ5NS44Niw1OTkuMDA4LDE0OTUuODUsNTk4Ljc3MiwxNDk1Ljk0LDU5OC42ODhabTIuOTQsMi4wNzRjLTAuNDQtLjA0OC0xLjM0LDAtMS4zOS0wLjVDMTQ5Ny40MSw1OTkuNDUzLDE0OTguODcsNjAwLjE2MiwxNDk4Ljg4LDYwMC43NjJabTEuOTMsMC45YTAuNCwwLjQsMCwwLDEsLjExLjQ0OSwwLjUyNywwLjUyNywwLDAsMS0uNTktMC4yMjVDMTUwMC4zMiw2MDEuNjMyLDE1MDAuNTcsNjAxLjY1LDE1MDAuODEsNjAxLjY1OVptLTIuNzgsMS40NThoMC4xdjAuMTEyaC0wLjF2LTAuMTEyWm0wLjQyLDEuMTIxYy0wLjIuNDI4LTEuMywwLjIzMi0xLjU1LDBDMTQ5Ni45Miw2MDMuMjkzLDE0OTguMzUsNjAzLjUxNywxNDk4LjQ1LDYwNC4yMzhabTAuMjIsMy45OGEwLjQ3NCwwLjQ3NCwwLDAsMS0uNTQuMjhsMC4wMy0uMjY1LTAuMTktLjE4M2MtMC4wMS0uMjczLjI5LTAuMjI1LDAuNTQtMC4yMjRsLTAuMDMuMjQ1Wm0yNC4xMSwyLjEzYzAuMTQtLjA0LjEsMC4xMTIsMC4yMSwwLjExMkMxNTIyLjk2LDYxMC42NTcsMTUyMi43Nyw2MTAuNTEsMTUyMi43OCw2MTAuMzQ4Wm0tMS42NiwxLjI5YzAuMTksMC4wODEuNTEsMC4yNTksMC4zNywwLjVBMC42MTgsMC42MTgsMCwwLDEsMTUyMS4xMiw2MTEuNjM4Wm0tMjYuNzQsMi4xM2ExLjM1NywxLjM1NywwLDAsMS0uOTEtMC41LDAuOTIyLDAuOTIyLDAsMCwxLC43NS0wLjQ0OSwwLjcsMC43LDAsMSwxLDEuMzktLjExMiwwLjg0LDAuODQsMCwwLDEtLjk2Ljc4NUEyLjE1OCwyLjE1OCwwLDAsMSwxNDk0LjM4LDYxMy43NjhabTIuMi0uMTY4YzAuMjIsMC44NjQtMS4xLDEtMS4wNy4yOEMxNDk1LjUzLDYxMy4zOTQsMTQ5Ni4yMyw2MTMuMzY1LDE0OTYuNTgsNjEzLjZabTIuNjIsMC4yMjRjLTAuMDMuMzc2LS4zOSwwLjc1LTAuNjksMC41QTAuNTE2LDAuNTE2LDAsMCwxLDE0OTkuMiw2MTMuODI0Wm0xOC4yMiwwLjQ0OWEwLjQ5MiwwLjQ5MiwwLDAsMS0uNTkuNjE2QTAuNDU0LDAuNDU0LDAsMCwxLDE1MTcuNDIsNjE0LjI3M1ptLTMuMDUsMi41NzljLTAuNDUtLjg1OC44LTAuOTk0LDAuNzUtMC4yODFBMC40NTgsMC40NTgsMCwwLDEsMTUxNC4zNyw2MTYuODUyWm0zLjIxLDEuMzQ0YTAuNTU1LDAuNTU1LDAsMCwwLDAsLjYxOGMtMC4yMy4yMTEtLjQxLDAuNDcxLTAuNjQsMC42NzJhMC45ODYsMC45ODYsMCwwLDEtMS4yOS0uOUExLjA0MywxLjA0MywwLDAsMSwxNTE3LjU4LDYxOC4yWm0tNC4yOSwyLjhjLTAuMi0uNDc5LjE3LTEuMSwwLjQ5LTAuNjczQTAuNTg2LDAuNTg2LDAsMCwxLDE1MTMuMjksNjIxWm0wLjU1LTM3Ljg4MmE4LjQ3NCw4LjQ3NCwwLDAsMSwuMTYtMC44NTgsMC4yMjEsMC4yMjEsMCwwLDAtLjE0LTAuMjY5LDAuNDU3LDAuNDU3LDAsMCwwLS40Mi4xODIsOC4yMTIsOC4yMTIsMCwwLDAsMCwuODYsMS44MjUsMS44MjUsMCwwLDAsLjA1Ljg1NSwxLjcyNiwxLjcyNiwwLDAsMCwuMzUtMC43N2gwWm0tMTAuMjUsMi45ODdxMC4yLS40NDMuMzYtMC45YTAuMTQ2LDAuMTQ2LDAsMCwwLS4wOC0wLjE4NywwLjEzOCwwLjEzOCwwLDAsMC0uMTguMDgzYy0wLjExLjMtLjIzLDAuNi0wLjM1LDAuODkxYTAuMTQxLDAuMTQxLDAsMCwwLC4wNy4xOTJBMC4xMzMsMC4xMzMsMCwwLDAsMTUwMy41OSw1ODYuMTA1Wm0tNC4yNS45NDRjLTAuMjItLjM1Mi0wLjE0LTAuNjEtMC4zNS0xLjAyOWEwLjY3MiwwLjY3MiwwLDAsMC0uNTEtMC4yNTgsMC40NywwLjQ3LDAsMCwwLS4yOS4zNWMwLjE5LDAuMzc4LjU1LDAuNzYyLDAuOCwxLjE3NGEwLjk2OCwwLjk2OCwwLDAsMCwuNDcuNDQ5QTEuMDkyLDEuMDkyLDAsMCwwLDE0OTkuMzQsNTg3LjA0OVptMi4wNSwyLjY3M2MtMC4wOS0uMjMxLTAuMi0wLjQzNi0wLjI5LTAuNjMyYTIuMzQxLDIuMzQxLDAsMCwxLS4yMi0wLjU2NiwwLjIwOSwwLjIwOSwwLDAsMC0uMjUtMC4xNzksMC4zNjksMC4zNjksMCwwLDAtLjMyLjI3LDMuMDk0LDMuMDk0LDAsMCwwLC40LjY4NGMwLjEsMC4yMDYuMzMsMC4yODcsMC40LDAuNDc1LDAuMDQsMC4xMTguMDMsMC4yODcsMC4xNSwwLjI0M0EwLjIzOSwwLjIzOSwwLDAsMCwxNTAxLjM5LDU4OS43MjJabTE1LjI5LDIuNzRjMC4yNC0uNzA4LDEuMDktMS4yNzMsMS40Ny0xLjk5M2ExLjE3NywxLjE3NywwLDAsMC0uMjgtMC42NDksMC45MDYsMC45MDYsMCwwLDAtLjM2LjQ1NCwxMy44NjgsMTMuODY4LDAsMCwwLTEuMTYsMi4wNjQsMC43ODMsMC43ODMsMCwwLDAtLjA4LjVBMC43NjUsMC43NjUsMCwwLDAsMTUxNi42OCw1OTIuNDYyWm0tMC42NywzLjkzOWMwLjQ1LS42NDEuOTItMS4yOSwxLjQxLTEuOWEwLjEyLDAuMTIsMCwwLDAtLjAxLTAuMTU5LDAuMSwwLjEsMCwwLDAtLjE1LjAxNGMtMC40OS42MTctLjk3LDEuMjY5LTEuNDMsMS45MTFhMi42MzUsMi42MzUsMCwwLDAtLjM2LjZBMi4zMzgsMi4zMzgsMCwwLDAsMTUxNi4wMSw1OTYuNFptLTkuNDktMS4wNjljLTAuMDYtLjI5LTAuMTQtMC41NzEtMC4yMS0wLjg1N2EwLjA5MSwwLjA5MSwwLDAsMC0uMTEtMC4wNjQsMC4wODcsMC4wODcsMCwwLDAtLjA2LjEwOWMwLjA3LDAuMjg5LjE1LDAuNTcsMC4yMSwwLjg1M2EwLjA5MSwwLjA5MSwwLDAsMCwuMTEuMDY3QTAuMDk0LDAuMDk0LDAsMCwwLDE1MDYuNTIsNTk1LjMzMlptLTEwLjQuNjkzYTEwLjMyMSwxMC4zMjEsMCwwLDAtMS40NC0uNzgsMC4xLDAuMSwwLDAsMC0uMDguMTgyLDkuODc4LDkuODc4LDAsMCwxLDEuNDIuNzY2LDAuMDkxLDAuMDkxLDAsMCwwLC4xMy0wLjAzMUEwLjEsMC4xLDAsMCwwLDE0OTYuMTIsNTk2LjAyNVptNi42NiwzLjc2NWMwLjIyLDAuMTYyLjQzLDAuMzM5LDAuNjUsMC41MTZhMC4xLDAuMSwwLDAsMCwuMTUtMC4wMjEsMC4xMTMsMC4xMTMsMCwwLDAtLjAyLTAuMTZjLTAuMjEtLjE3My0wLjQyLTAuMzUyLTAuNjUtMC41MmEwLjEsMC4xLDAsMCwwLS4xNS4wMjZBMC4xMjEsMC4xMjEsMCwwLDAsMTUwMi43OCw1OTkuNzlabS0yLjExLDMuMTczYTEuMzQzLDEuMzQzLDAsMCwxLC4yMy4wNDcsMS4yMDgsMS4yMDgsMCwwLDAsLjI5LjA0NSwwLjUzNywwLjUzNywwLDAsMCwuMDgsMCwwLjE1NiwwLjE1NiwwLDAsMCwuMTMtMC4xNzMsMC4xNTQsMC4xNTQsMCwwLDAtLjE3LTAuMTM0bC0wLjA0LDBhMC44NDksMC44NDksMCwwLDEtLjIyLTAuMDM2LDEuNjM0LDEuNjM0LDAsMCwwLS4yOC0wLjA1NSwwLjE1NiwwLjE1NiwwLDAsMC0uMTYuMTQ0LDAuMTUzLDAuMTUzLDAsMCwwLC4xNC4xNjVoMFptLTcuNDYsMS40MzNhMi4zODEsMi4zODEsMCwwLDEsLjU4LTAuMDU1aDAuMjhhMi43MTQsMi43MTQsMCwwLDAsLjY0LTAuMDU4LDAuMTM0LDAuMTM0LDAsMCwwLC4wOS0wLjE2LDAuMTIyLDAuMTIyLDAsMCwwLS4xNS0wLjEsMi40MzMsMi40MzMsMCwwLDEtLjU4LjA1MmgtMC4yOGEyLjU3LDIuNTcsMCwwLDAtLjY0LjA2MSwwLjE0MiwwLjE0MiwwLDAsMC0uMS4xNjFBMC4xMzYsMC4xMzYsMCwwLDAsMTQ5My4yMSw2MDQuNFptNC40NSw0LjI1N2EzLjIyMSwzLjIyMSwwLDAsMCwuNTgtMC4yMTMsMC4yMywwLjIzLDAsMCwwLC4xMi0wLjI5LDAuMjE2LDAuMjE2LDAsMCwwLS4yOC0wLjEyNSwyLjkwOCwyLjkwOCwwLDAsMS0uNS4xODksMC4yMjgsMC4yMjgsMCwwLDAtLjE3LjI2QTAuMjIzLDAuMjIzLDAsMCwwLDE0OTcuNjYsNjA4LjY1M1ptMC44Ny0uNDE3YTEwLjc4MSwxMC43ODEsMCwwLDAsMS41OC0uNTksMC4xNzQsMC4xNzQsMCwwLDAsLjA3LTAuMjM2LDAuMTU4LDAuMTU4LDAsMCwwLS4yMi0wLjA3NywxMC44NywxMC44NywwLDAsMS0xLjUzLjU3MSwwLjE3NywwLjE3NywwLDAsMC0uMTEuMjIyQTAuMTY3LDAuMTY3LDAsMCwwLDE0OTguNTMsNjA4LjIzNlptLTIuOTgtLjA4MWMwLjQ0LS4wNzguODYtMC4xODksMS4yOS0wLjI2NmEwLjExNCwwLjExNCwwLDAsMCwuMDktMC4xNCwwLjExMiwwLjExMiwwLDAsMC0uMTMtMC4xYy0wLjQ0LjA3OS0uODYsMC4xODktMS4yOCwwLjI2NmEwLjExOSwwLjExOSwwLDAsMC0uMS4xMzlBMC4xMTQsMC4xMTQsMCwwLDAsMTQ5NS41NSw2MDguMTU1Wm0zLjI3LDEuMTY3YTMuMTI5LDMuMTI5LDAsMCwxLC41LTAuMjQsMS4zLDEuMywwLDAsMCwuNTEtMC4zNjQsMC4xNzUsMC4xNzUsMCwwLDAtLjAxLTAuMjM0LDAuMTYxLDAuMTYxLDAsMCwwLS4yMy4wMTksMC45MzUsMC45MzUsMCwwLDEtLjQuMjczLDMuMjcxLDMuMjcxLDAsMCwwLS41NC4yNjcsMC4xNjIsMC4xNjIsMCwwLDAtLjA1LjIyOUEwLjE1NCwwLjE1NCwwLDAsMCwxNDk4LjgyLDYwOS4zMjJabS0wLjk5LDEuNjU3YTEwLjIxOSwxMC4yMTksMCwwLDEsMS4wNS0uNTcyLDAuMTYzLDAuMTYzLDAsMCwwLC4wOS0wLjE5MSwwLjE0OSwwLjE0OSwwLDAsMC0uMTktMC4wOTQsOS4xNDgsOS4xNDgsMCwwLDAtMS4wNy41ODYsMC4xNDMsMC4xNDMsMCwwLDAtLjA3LjJBMC4xMzgsMC4xMzgsMCwwLDAsMTQ5Ny44Myw2MTAuOTc5Wm0tNC40NSw0LjI3OWEwLjc2NCwwLjc2NCwwLDAsMC0uMDMtMC4xNywwLjUyNCwwLjUyNCwwLDAsMS0uMDEtMC4xMTMsMC4wNTIsMC4wNTIsMCwwLDEsLjAxLTAuMDQzbC0wLjE1LS4wODQsMC4wNywwLjE2YzAuMzQtLjE3My42Ny0wLjM2MywwLjk4LTAuNTUzYTAuMTkzLDAuMTkzLDAsMCwwLC4wNy0wLjI0MywwLjE3MywwLjE3MywwLDAsMC0uMjQtMC4wNjZjLTAuMzEuMTg4LS42NCwwLjM3NS0wLjk2LDAuNTQybC0wLjA1LjAyNS0wLjAyLjA1MWEwLjQyMywwLjQyMywwLDAsMC0uMDUuMjExLDAuOTYyLDAuOTYyLDAsMCwwLC4wMi4xODYsMC44NiwwLjg2LDAsMCwxLC4wMi4xMjUsMC4xNzYsMC4xNzYsMCwwLDAsLjE5LjE2NEEwLjE3MywwLjE3MywwLDAsMCwxNDkzLjM4LDYxNS4yNThabTI2LjY0LTQuNDcyYTAuODI4LDAuODI4LDAsMCwwLC4xNC0wLjIsMC4zNjgsMC4zNjgsMCwwLDEsLjA3LTAuMTFsLTAuMS0uMTMsMC4wMiwwLjE2OCwwLjA1LDBhMC45MDksMC45MDksMCwwLDEsLjIxLjAzNCwwLjE1NywwLjE1NywwLDAsMCwuMTktMC4xMjIsMC4xNjYsMC4xNjYsMCwwLDAtLjExLTAuMjA3LDEuMjA4LDEuMjA4LDAsMCwwLS4yOS0wLjA0NSwwLjU0NiwwLjU0NiwwLDAsMC0uMDkuMDA3bC0wLjA1LjAwNy0wLjA0LjAzMWEwLjgsMC44LDAsMCwwLS4xNC4yMDUsMC4zNjgsMC4zNjgsMCwwLDEtLjA3LjExLDAuMTcyLDAuMTcyLDAsMCwwLS4wMi4yMzlBMC4xNTgsMC4xNTgsMCwwLDAsMTUyMC4wMiw2MTAuNzg2Wm0tMjIuNDYsMS43ODVhMi4yODIsMi4yODIsMCwwLDAsLjgtMC41MTMsMC4xOSwwLjE5LDAsMCwwLS4wMS0wLjI3LDAuMTc4LDAuMTc4LDAsMCwwLS4yNiwwLDEuNzkxLDEuNzkxLDAsMCwxLS42Ny40MjYsMC4yLDAuMiwwLDAsMC0uMS4yNTFBMC4xODEsMC4xODEsMCwwLDAsMTQ5Ny41Niw2MTIuNTcxWm0yMi4zMi0xLjMyNmEwLjgzNiwwLjgzNiwwLDAsMS0uNzUtMC41NiwxLjE5MywxLjE5MywwLDAsMCwuOTcuMjhjMC4wMS0uMDg3LjItMC4yNjEsMC4wNS0wLjMzNmwtMC4yNC4wMjgsMC4wMy0uMjUyYTEyLjM4MSwxMi4zODEsMCwwLDEtMS4zOS0uMjI1Yy0wLjIzLS4yMTYtMC4yNS0wLjYzOC0wLjQ5LTAuODQxaDAuNTlhMC42NDEsMC42NDEsMCwwLDAsLjExLjMzNywwLjkxNywwLjkxNywwLDAsMCwuOTEtMC45LDAuNTM4LDAuNTM4LDAsMCwwLS40OC0wLjIyNGMtMC4zMi0uNzg0LTEuODktMC44LTEuNzItMS43MzgsMC4zNC0uMDE5LjU2LDAuMTg0LDAuODYsMC4xNjhhMy41MiwzLjUyLDAsMCwwLDEuNS0uNzI5YzAuMTQtLjY5My43Ni0xLjE2OCwwLjQ4LTEuOTYzYTIuNjExLDIuNjExLDAsMCwwLC4yMi0wLjcyN2MwLjEzLS4wNDcuNDYsMC4xMDgsMC40My0wLjExM2EyLjUzNSwyLjUzNSwwLDAsMC0uNTQsMGMwLjExLS4zODUtMC4zLTAuNzEtMC4xNi0xLjEyMS0wLjI5LS41NzEtMC44NS0wLjUxMy0xLjA3LTEuMTIxYTMuMDEsMy4wMSwwLDAsMC0yLjY4LS4wNTdjLTEuMTMtLjEzMy0xLjM0LTEuNjk0LTIuMDktMi40MWEwLjY0MiwwLjY0MiwwLDAsMC0uMzItMC44NDFsLTAuMDEuMDEzYTQuMzI5LDQuMzI5LDAsMCwxLC41MS0xLjE2LDAuMTIxLDAuMTIxLDAsMCwwLS4wNS0wLjE2MywwLjEwNywwLjEwNywwLDAsMC0uMTUuMDQ2LDQuNCw0LjQsMCwwLDAtLjUzLDEuMjE0LDEuMTM1LDEuMTM1LDAsMCwwLS4zLjEsMC43ODMsMC43ODMsMCwwLDEsLjAzLTAuMTM4YzAuMDQtLjEuMS0wLjIxMSwwLjE0LTAuMzQyYTAuMTg1LDAuMTg1LDAsMCwwLS4xMS0wLjIxNCwwLjE2OSwwLjE2OSwwLDAsMC0uMjEuMTE1LDEuOTY1LDEuOTY1LDAsMCwxLS4xMi4zMDksMS4yOTIsMS4yOTIsMCwwLDAtLjA4LjNsLTAuMDMtLjAzMmMtMC44OS42LTEuNzgtLjY1MS0yLjg0LTAuNTZhMi43LDIuNywwLDAsMSwuMzItMC4xNjhjMC45Mi0yLjA5NC0yLjM1LTItMS42MS4yOGEyLjE3OSwyLjE3OSwwLDAsMC0uOTYuNDQ4Yy0wLjQ0LjUtMS42Ni0uMTUzLTIuMDksMC4wNTZhNSw1LDAsMCwwLS41OS0wLjYxNiwxLjg2NSwxLjg2NSwwLDAsMC0uNTQtMS4xMjJjLTAuMTgtMS4xMTItMS4wMy0xLjUzMi0xLjE4LTIuNjkxLTAuMzItLjQ0Mi0wLjM2LTEuMTg2LTEuMDEtMS4yODktMC44OSwxLjA4NC43NiwyLjIsMC44NSwzLjEzOWExLjg0OCwxLjg0OCwwLDAsMSwuNTksMS40NTgsMTAuNTA4LDEwLjUwOCwwLDAsMCwuNTksMS43MzgsOC4yOTEsOC4yOTEsMCwwLDAsLjIyLDEuMDA5LDIuNzE1LDIuNzE1LDAsMCwwLS40OC41NjEsMC45NjksMC45NjksMCwwLDAtLjcuNjcyYy0wLjcyLjE2My0uNywwLjg2LTEuMTMsMS4yMzQtMC4xOC4xNjQtMS4xMS0uMDQ5LTAuOTEsMC43MjlhMS40MjQsMS40MjQsMCwwLDEsLjcuNDQ3Yy0wLjIuMjgtLjA5LDEuMTU5LTAuNDgsMS40LDAuMDYsMC42LS4xMSwxLjIyMiwwLDEuNjgxLTAuMDQuMDg5LS4yNy0wLjAxMy0wLjIyLDAuMTY4LDAuMzctLjA2NS4yLDAuMzg3LDAuMjcsMC43M2ExLjcyOSwxLjcyOSwwLDAsMC0uNTkuOSwxLjczNywxLjczNywwLDAsMSwuMjIuMjI1Yy0wLjIuOC0uOTEsMS4wNzEtMS4yOSwxLjY4MWE2LjIsNi4yLDAsMCwwLTIuMzYsMS43OTRsMC4yNiwwLjA2NCwwLjAxLDAuMjcyYTQuNzk0LDQuNzk0LDAsMCwxLDEuMTgtLjExMiwwLjY2NiwwLjY2NiwwLDAsMSwuMjctMC4zMzdjMC41NS0uMjM1LDEuMDQtMC4wNjksMS41LTAuMjhhMi4xNzksMi4xNzksMCwwLDEsLjgtMC41LDIuOCwyLjgsMCwwLDAtLjIuNzU4LDIuMDMsMi4wMywwLDAsMC0uNjguNDkxLDUuOTU5LDUuOTU5LDAsMCwxLS41Ni41NTEsMC4yMzQsMC4yMzQsMCwwLDAtLjA1LjMxOSwwLjIwNywwLjIwNywwLDAsMCwuMy4wNTMsNS4wMTYsNS4wMTYsMCwwLDAsLjYxLTAuNiwxLjYxNiwxLjYxNiwwLDAsMSwuNTYtMC40LDEuMSwxLjEsMCwwLDAsLjkzLjE3M2MwLjExLDAuNzg0Ljk1LDAuOCwxLjIzLDEuNGEwLjY2NiwwLjY2NiwwLDAsMSwuNzUuMjIzLDAuNTE4LDAuNTE4LDAsMCwwLS4yMS4yMjRsMC4wMywwLjAxNGMtMC4zOC40OS0uODcsMC45LTEuMjcsMS4zOTJhMC4wODQsMC4wODQsMCwwLDAsLjAxLjExNCwwLjA3NywwLjA3NywwLDAsMCwuMTEtMC4wMDljMC4zNy0uNDU4Ljg0LTAuODYzLDEuMjMtMS4zNDh2MGEwLjc0MSwwLjc0MSwwLDAsMSwuODUtMC4xNjhjMC44NSwwLjExNiwxLjgxLS4xNDYsMi41Ny4yMjVhMC4zODIsMC4zODIsMCwwLDEtLjA1LjExMmwwLjAyLDAuMDA2YTQuOSw0LjksMCwwLDEtLjY2LjU4NSwwLjA3MSwwLjA3MSwwLDAsMC0uMDMuMDg0LDAuMDU5LDAuMDU5LDAsMCwwLC4wOC4wMjMsNC41MjQsNC41MjQsMCwwLDAsLjY5LTAuNjA2bDAuMDEsMC4wMmEwLjksMC45LDAsMCwxLC44Ni0wLjA1NiwwLjgxMSwwLjgxMSwwLDAsMSwuMzItMC4yOCwwLjk3NCwwLjk3NCwwLDAsMCwuOTEuMzM2LDAuNzcyLDAuNzcyLDAsMCwwLS4yNy40NDgsOC4zMDUsOC4zMDUsMCwwLDAsLjc1LTAuMzkyLDEuMDQzLDEuMDQzLDAsMCwwLC41NC42MTdjMC41Mi0uMDI1LjE4LTAuNzMzLDAuMTYtMS4yODksMC4xNi0uMDkyLjQzLTAuMDY5LDAuNTktMC4xNjlsMC4wMi0uMDYzYTIuMjQ5LDIuMjQ5LDAsMCwxLC41My42NzUsNS45NjUsNS45NjUsMCwwLDEsLjQ3LDEuMzMyLDUuOTkxLDUuOTkxLDAsMCwwLC41LDEuNDMxLDAuMTc2LDAuMTc2LDAsMCwwLC4yNS4wNzYsMC4yLDAuMiwwLDAsMCwuMDgtMC4yNjgsOS4xLDkuMSwwLDAsMS0uNi0xLjgyNCw1LjQ5Myw1LjQ5MywwLDAsMC0uMzctMC45NCwyLjU3NSwyLjU3NSwwLDAsMC0uNTEtMC42NzN2LTAuMDgyYzAuNjYtLjIuNjQsMC43ODcsMS4yMywwLjg0YTAuMDg1LDAuMDg1LDAsMCwxLC4xMS0wLjA1NWMtMC4wMi0uNDE5LjE2LTAuNDc0LDAuMTYtMC45NTRhMC42NzQsMC42NzQsMCwwLDAsLjQzLjE2OSwwLjcyNCwwLjcyNCwwLDAsMCwuMTYtMC41MDUsMC44OTEsMC44OTEsMCwwLDEsLjY0LDBsMC4wMy0uMDRhMS45NzcsMS45NzcsMCwwLDAsLjEyLjIwNiwwLjc1MywwLjc1MywwLDAsMSwuMTEuMjA3LDAuMjA2LDAuMjA2LDAsMSwwLC4zOS0wLjEyOSwxLjAzNSwxLjAzNSwwLDAsMC0uMTctMC4zMjhjLTAuMDQtLjA1Ni0wLjA1LTAuMS0wLjA4LTAuMTRoMC4wM3YtMC4yMjRhMy40NzIsMy40NzIsMCwwLDEsLjU5LjA1NSw1LjMyMSw1LjMyMSwwLDAsMSwyLjA5LDAsMS4wODYsMS4wODYsMCwwLDAsLjcuNDQ5YzAuNDksMC4zMjIuNjQsMC42NzEsMS4xMiwwLjIyNSwwLjI1LS42NzQtMC4zNi0wLjg3NS0wLjU5LTEuMjM0LDAuNzEsMC4wODYuOTcsMC42MjgsMS42MSwwLjc4NSwwLjExLS4xMTMuMjEtMC4yMjYsMC4zMi0wLjMzN0MxNTIxLjMxLDYxMS42OTMsMTUyMC4yMiw2MTEuODYyLDE1MTkuODgsNjExLjI0NVptMi40Mi0xLjRhMC45LDAuOSwwLDAsMS0uMzguMDU2djAuMjI1bDAuMDEsMC4wMDdhMi41ODYsMi41ODYsMCwwLDEtLjQ1LTAuMDc3LDIuMzI2LDIuMzI2LDAsMCwwLS41NS0wLjA5MywwLjc1NSwwLjc1NSwwLDAsMC0uMzMuMDcsMC42NjMsMC42NjMsMCwwLDAtLjE2LjE0NiwwLjE4NiwwLjE4NiwwLDAsMC0uMTUuMDcxLDAuMjIyLDAuMjIyLDAsMCwwLC4wMy4yODYsNC43OTEsNC43OTEsMCwwLDAsMS4yOS42NDgsMC4xOTEsMC4xOTEsMCwwLDAsLjI1LTAuMTEzLDAuMjEsMC4yMSwwLDAsMC0uMTEtMC4yNjYsNi41NjMsNi41NjMsMCwwLDEtMS4wMS0uNDg1LDAuNTE0LDAuNTE0LDAsMCwxLC4xOS0wLjAzNiwyLjA2MywyLjA2MywwLDAsMSwuNDguMDgyLDIuNTcxLDIuNTcxLDAsMCwwLC41Mi4wODlsLTAuMDEuMDA2YTAuNTIzLDAuNTIzLDAsMCwwLC43NSwwQTAuOTcsMC45NywwLDAsMCwxNTIyLjMsNjA5Ljg0NFptLTI0LjM4LDMuNDJhMS4xLDEuMSwwLDAsMS0uMjItMC45bC0wLjIxLjAyOCwwLjExLS4yYTAuODg1LDAuODg1LDAsMCwwLS43NS0wLjU2Yy0wLjA3LjMxOC0uMzEsMC4xMTktMC40MywwLjE2OGExLjIsMS4yLDAsMCwwLS4xMSwxLjQ1OCwwLjQ4NSwwLjQ4NSwwLDAsMSwuMzIuMTY4LDAuNTczLDAuNTczLDAsMCwwLC4zOC0wLjA1NiwyLjg1LDIuODUsMCwwLDAsLjMyLjYxNywwLjM1NCwwLjM1NCwwLDAsMC0uMTYuMzkyLDAuNDI2LDAuNDI2LDAsMSwwLC44LTAuMjhjMC42Ni0uNzM1LDIuMjEtMC41MjYsMi4zNi0xLjhDMTQ5OS4yMyw2MTIuMSwxNDk4Ljc5LDYxMy4wNTQsMTQ5Ny45Miw2MTMuMjY0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0OTMgLTU4MikiLz4NCjwvc3ZnPg0K"
  },
  197: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMyIDMwIj4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuW9oueKtl80IiBkYXRhLW5hbWU9IuW9oueKtiA0IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzkyLDQ3NGw1LjI3LDkuNDI3LDEwLjczLDIuMDMxLTcuNDcsNy44NThMMTQwMS44OSw1MDRsLTkuODktNC41NzFMMTM4Mi4xMSw1MDRsMS4zNi0xMC42ODItNy40Ny03Ljg1OCwxMC43My0yLjAzMUwxMzkyLDQ3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNzYgLTQ3NCkiLz4NCjwvc3ZnPg0K"
  },
  198: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuW9oueKtl81IiBkYXRhLW5hbWU9IuW9oueKtiA1IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDYwLjYxLDQ5My4zOTRMMTQ2NSw0ODlsLTQuMzktNC4zOTR2LTYuMjE1aC02LjIyTDE0NTAsNDc0bC00LjM5LDQuMzk0aC02LjIydjYuMjE1TDE0MzUsNDg5bDQuMzksNC4zOTR2Ni4yMTVoNi4yMkwxNDUwLDUwNGw0LjM5LTQuMzk0aDYuMjJ2LTYuMjE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MzUgLTQ3NCkiLz4NCjwvc3ZnPg0K"
  },
  199: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMwIDMyIj4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuW9oueKtl82IiBkYXRhLW5hbWU9IuW9oueKtiA2IiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTA4LDQ3M2wyLjYsNy44ODQsNi42Ny00LjgyOS0yLjQ3LDcuOTI4LDguMiwwLjA3MkwxNTE2LjQxLDQ4OWw2LjU5LDQuOTQ0LTguMi4wNzIsMi40Nyw3LjkyOC02LjY3LTQuODI4TDE1MDgsNTA1bC0yLjYtNy44ODQtNi42Nyw0LjgyOCwyLjQ3LTcuOTI4LTguMi0uMDcyLDYuNTktNC45NDQtNi41OS00Ljk0NCw4LjItLjA3Mi0yLjQ3LTcuOTI4LDYuNjcsNC44MjlMMTUwOCw0NzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDkzIC00NzMpIi8+DQo8L3N2Zz4NCg=="
  },
  200: function(t, e) {
      t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDM1IDMwIj4NCiAgPG1ldGFkYXRhPjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+DQogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIvPg0KICAgPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICANCjw/eHBhY2tldCBlbmQ9InciPz48L21ldGFkYXRhPg0KPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xIHsNCiAgICAgICAgZmlsbDogIzc2ODM4ZjsNCiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IuW9oueKtl8xIiBkYXRhLW5hbWU9IuW9oueKtiAxIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDUwLjUsNDE4TDE0MzMsNDQ4aDM1TDE0NTAuNSw0MTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDMzIC00MTgpIi8+DQo8L3N2Zz4NCg=="
  },
  201: function(t, e, i) {
      "use strict";
      (function(t) {
          i.d(e, "c", (function() {
              return g
          }
          )),
          i.d(e, "b", (function() {
              return l
          }
          )),
          i.d(e, "a", (function() {
              return C
          }
          ));
          var s, r = i(3);
          (s = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && s(t);
          "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
          i(202);
          var a, n, o = i(203), g = [{
              type: 0,
              filterName: "原图",
              filter: {
                  brightness: 0,
                  contrast: 0,
                  saturate: 0,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1) contrast(100%) saturate(100%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 1,
              filterName: "清新",
              filter: {
                  brightness: 24,
                  contrast: 4,
                  saturate: 8,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1.24) contrast(104%) saturate(108%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 2,
              filterName: "鲜明",
              filter: {
                  brightness: 20,
                  contrast: 20,
                  saturate: 32,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1.2) contrast(120%) saturate(132%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 24,
              filterName: "星光闪闪",
              isDynamic: !0,
              jsonPath: i(204),
              opacity: 1,
              isFree: !1
          }, {
              type: 3,
              filterName: "鲜暖色",
              filter: {
                  brightness: 20,
                  contrast: 20,
                  saturate: 32,
                  hueRotate: 95,
                  blur: 0
              },
              filterCss: "brightness(1.2) contrast(120%) saturate(132%) hue-rotate(342deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 5,
              filterName: "质感",
              filter: {
                  brightness: 4,
                  contrast: 20,
                  saturate: 0,
                  hueRotate: -2,
                  blur: 0
              },
              filterCss: "brightness(1.04) contrast(120%) saturate(100%) hue-rotate(-7.2deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 25,
              filterName: "落樱",
              isDynamic: !0,
              jsonPath: i(205),
              opacity: 1,
              isFree: !1
          }, {
              type: 6,
              filterName: "暗调",
              filter: {
                  brightness: 0,
                  contrast: 8,
                  saturate: -16,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1) contrast(108%) saturate(84%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 7,
              filterName: "轻胶片",
              filter: {
                  brightness: 12,
                  contrast: 4,
                  saturate: -8,
                  hueRotate: 4,
                  blur: 0
              },
              filterCss: "brightness(1.12) contrast(104%) saturate(92%) hue-rotate(14.4deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 26,
              filterName: "星河",
              isDynamic: !0,
              jsonPath: i(206),
              opacity: 1,
              isFree: !1
          }, {
              type: 8,
              filterName: "珍珠白",
              filter: {
                  brightness: 32,
                  contrast: -8,
                  saturate: -8,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1.32) contrast(92%) saturate(92%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 15,
              filterName: "复古",
              filter: {
                  brightness: 4,
                  contrast: 28,
                  saturate: -12,
                  hueRotate: 4,
                  blur: 0
              },
              filterCss: "brightness(1.04) contrast(128%) saturate(88%) hue-rotate(14.4deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 23,
              filterName: "热气腾腾",
              isDynamic: !0,
              jsonPath: i(207),
              opacity: 1,
              isFree: !0
          }, {
              type: 20,
              filterName: "高级灰",
              filter: {
                  brightness: 12,
                  contrast: 12,
                  saturate: -20,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1.12) contrast(112%) saturate(80%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !1
          }, {
              type: 21,
              filterName: "黑白",
              filter: {
                  brightness: 0,
                  contrast: 0,
                  saturate: -100,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1) contrast(100%) saturate(0%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 22,
              filterName: "强黑白",
              filter: {
                  brightness: 12,
                  contrast: 40,
                  saturate: -100,
                  hueRotate: 0,
                  blur: 0
              },
              filterCss: "brightness(1.12) contrast(140%) saturate(0%) hue-rotate(0deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }, {
              type: 4,
              filterName: "鲜冷色",
              filter: {
                  brightness: 20,
                  contrast: 20,
                  saturate: 32,
                  hueRotate: -96,
                  blur: 0
              },
              filterCss: "brightness(1.2) contrast(120%) saturate(132%) hue-rotate(-345.6deg) blur(0px)",
              opacity: 1,
              isFree: !0
          }];
          function h(t) {
              var e = t.id
                , i = t.type
                , s = t.src
                , a = t.filterType
                , n = void 0 === a ? filterArr[0].value : a
                , g = "filter-" + e
                , h = (filterArr.find((function(t) {
                  return t.value === n
              }
              )) || n[0]).path;
              return r.i.parse(o, {
                  id: e,
                  type: i,
                  filterId: g,
                  src: s,
                  path: h
              })
          }
          function l(t) {
              var e = t.id
                , i = t.type
                , s = t.src
                , r = t.stationAd
                , a = t.materialId
                , n = t.adId;
              return r ? '<img id="'.concat(e, '" ctype="').concat(i, '" class="element comp_image editable-image bdc" bigdata_view="0" bd_attr="cat=尾页广告&act=').concat(r, "&material_id=").concat(a, "&activity_id=").concat(n, '" style="display:block;" draggable="false" src="').concat(s, '">') : '<img id="'.concat(e, '" ctype="').concat(i, '" class="element comp_image editable-image" style="display:block;" draggable="false" src="').concat(s, '">')
          }
          function C(t) {
              var e = t.id
                , i = t.type
                , s = t.src;
              return '<div id="'.concat(e, '" ctype="').concat(i, '" style="position: relative">\n        <div class="element comp_image editable-image filter-img" style="width: 100%; height: 100%; background-image: url(\'').concat(s, '\'); background-repeat: no-repeat; background-size: cover; position: absolute; top: 0; left: 0; z-index: 1"></div>\n        <div class="lottie" style="width: 120%;height: 120%;position: absolute; left: -10%; top: -10%; z-index: 4;"></div>\n    </div>')
          }
          (a = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && (a.register(g, "newFilterList", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\imgTpl.js"),
          a.register(h, "filterImg", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\imgTpl.js"),
          a.register(l, "img", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\imgTpl.js"),
          a.register(C, "dynamicFilterImg", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\components\\core\\image\\imgTpl.js")),
          (n = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && n(t)
      }
      ).call(this, i(2)(t))
  },
  202: function(t, e, i) {},
  203: function(t, e) {
      t.exports = '<div id=#{id} ctype=#{type} class="element comp_image editable-image"> <svg width=100% height=100% version=1.1 xmlns=http://www.w3.org/2000/svg> <g> <image width=100% height=100% xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#{src} filter=url(##{filterId}) draggable=false></image> <defs> <filter id=#{filterId}> <feColorMatrix class=saturation color-interpolation-filters=sRGB type=matrix values=#{path}></feColorMatrix> </filter> </defs> </g> </svg> </div>'
  },
  204: function(t) {
      t.exports = JSON.parse('{"v":"5.6.10","fr":25,"ip":0,"op":150,"w":640,"h":972,"nm":"合成 1","ddd":0,"assets":[{"id":"image_2","w":1354,"h":2424,"u":"images/","p":"img_2.png","e":0},{"id":"image_3","w":1376,"h":2604,"u":"images/","p":"img_3.png","e":0},{"id":"image_4","w":1326,"h":1262,"u":"images/","p":"img_4.png","e":0},{"id":"image_5","w":1434,"h":2486,"u":"images/","p":"img_5.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"星3.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[100]},{"t":141,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,486,0],"to":[0.833,1.333,0],"ti":[-0.833,-1.333,0]},{"t":149,"s":[325,494,0]}],"ix":2},"a":{"a":0,"k":[677,1212,0],"ix":1},"s":{"a":0,"k":[50.562,50.562,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"星2.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":125,"s":[100]},{"t":149,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[320,486,0],"ix":2},"a":{"a":0,"k":[688,1302,0],"ix":1},"s":{"a":0,"k":[50.562,50.562,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"星1.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[23]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":126,"s":[50]},{"t":149,"s":[23]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,486,0],"to":[2.217,3.694,0],"ti":[-5.305,-8.842,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":99,"s":[325,494,0],"to":[3.072,5.119,0],"ti":[-1.283,-2.139,0]},{"t":149,"s":[320,486,0]}],"ix":2},"a":{"a":0,"k":[663,631,0],"ix":1},"s":{"a":0,"k":[50.562,50.562,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"椭圆1.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":35,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":71,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":105,"s":[100]},{"t":149,"s":[50]}],"ix":11},"r":{"a":0,"k":10,"ix":10},"p":{"a":0,"k":[320,486,0],"ix":2},"a":{"a":0,"k":[717,1243,0],"ix":1},"s":{"a":0,"k":[52.022,52.022,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0}],"markers":[]}')
  },
  205: function(t) {
      t.exports = JSON.parse('{"v":"5.6.10","fr":25,"ip":0,"op":150,"w":640,"h":972,"nm":"合成 1","ddd":0,"assets":[{"id":"image_0","w":1068,"h":1944,"u":"images/","p":"img_0.png","e":0},{"id":"image_1","w":640,"h":740,"u":"images/","p":"img_1.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"花瓣1.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[80]},{"t":149,"s":[80]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-276,-106,0],"to":[185.333,140.667,0],"ti":[-185.333,-140.667,0]},{"t":149,"s":[836,738,0]}],"ix":2},"a":{"a":0,"k":[534,972,0],"ix":1},"s":{"a":0,"k":[50.562,50.562,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"花瓣2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[90]},{"t":49,"s":[30]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[494,428,0],"to":[48.667,31.333,0],"ti":[-48.667,-31.333,0]},{"t":49,"s":[786,616,0]}],"ix":2},"a":{"a":0,"k":[320,370,0],"ix":1},"s":{"a":0,"k":[-45.1,50.562,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"花瓣2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[60]},{"t":149,"s":[90]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-150,200,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[-150,200,0],"to":[107.333,38,0],"ti":[-107.333,-38,0]},{"t":149,"s":[494,428,0]}],"ix":2},"a":{"a":0,"k":[320,370,0],"ix":1},"s":{"a":0,"k":[-45.1,50.562,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"花瓣2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[90]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[50]},{"t":149,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":149,"s":[-10]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-164,-90,0],"to":[82.667,91.333,0],"ti":[-230.424,-95.24,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[332,458,0],"to":[204.455,84.507,0],"ti":[-74,-72.667,0]},{"t":149,"s":[776,894,0]}],"ix":2},"a":{"a":0,"k":[320,370,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[50.562,50.562,100]},{"t":126,"s":[-52.459,50.562,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0}],"markers":[]}')
  },
  206: function(t) {
      t.exports = JSON.parse('{"v":"5.6.10","fr":25,"ip":0,"op":150,"w":640,"h":972,"nm":"合成 1","ddd":0,"assets":[{"id":"image_10","w":360,"h":360,"u":"images/","p":"img_10.png","e":0},{"id":"image_11","w":1424,"h":2652,"u":"images/","p":"img_11.png","e":0},{"id":"image_12","w":1326,"h":1262,"u":"images/","p":"img_12.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"光环.png","cl":"png","refId":"image_10","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":116,"s":[50]},{"t":149,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-232,446,0],"to":[42.167,10.333,0],"ti":[-98.833,-25.167,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[21,508,0],"to":[98.833,25.167,0],"ti":[-56.667,-14.833,0]},{"t":149,"s":[361,597,0]}],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[40,40,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"光环.png","cl":"png","refId":"image_10","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[10]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"t":149,"s":[60]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[248,207,0],"to":[20,-3.333,0],"ti":[-87,-9.833,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[368,187,0],"to":[87,9.833,0],"ti":[-67,-13.167,0]},{"t":149,"s":[770,266,0]}],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[25,25,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"光环.png","cl":"png","refId":"image_10","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[60]},{"t":149,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[160,274,0],"to":[63.5,11.167,0],"ti":[-87.5,-72.5,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[541,341,0],"to":[87.5,72.5,0],"ti":[-24,-61.333,0]},{"t":149,"s":[685,709,0]}],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[40,40,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"光环.png","cl":"png","refId":"image_10","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[100]},{"t":103,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[36,886,0],"to":[56.167,-45.5,0],"ti":[-114.167,48.833,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[373,613,0],"to":[114.167,-48.833,0],"ti":[-58,3.333,0]},{"t":149,"s":[721,593,0]}],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[40,40,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"光环.png","cl":"png","refId":"image_10","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":149,"s":[20]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-56,-42,0],"to":[62.833,49.167,0],"ti":[-124.833,-25.167,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[321,253,0],"to":[124.833,25.167,0],"ti":[-62,24,0]},{"t":149,"s":[693,109,0]}],"ix":2},"a":{"a":0,"k":[180,180,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"星河2.png","cl":"png","refId":"image_11","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-7,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[100]},{"t":148,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":-7,"s":[-472,510,0],"to":[61.83,0,0],"ti":[-42.573,4,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":74,"s":[-160.523,334,0],"to":[152.251,-14.305,0],"ti":[-61.17,0,0]},{"t":148,"s":[102,470,0]}],"ix":2},"a":{"a":0,"k":[712,1326,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":-7,"op":143,"st":-7,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"星河2.png","cl":"png","refId":"image_11","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-7,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[100]},{"t":142,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":-7,"s":[296,486,0],"to":[61.83,0,0],"ti":[-154.573,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":68,"s":[667.477,522,0],"to":[152.922,0,0],"ti":[-61.17,0,0]},{"t":142,"s":[1034,486,0]}],"ix":2},"a":{"a":0,"k":[712,1326,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":-7,"op":143,"st":-7,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"星河1.png","cl":"png","refId":"image_12","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"t":149,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[320,834,0],"ix":2},"a":{"a":0,"k":[663,631,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"星河1.png","cl":"png","refId":"image_12","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"t":149,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[320,146,0],"ix":2},"a":{"a":0,"k":[663,631,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0}],"markers":[]}')
  },
  207: function(t) {
      t.exports = JSON.parse('{"v":"5.6.10","fr":25,"ip":0,"op":150,"w":640,"h":972,"nm":"合成 1","ddd":0,"assets":[{"id":"image_0","w":1484,"h":2060,"u":"images/","p":"hot_0.png","e":0},{"id":"image_1","w":1720,"h":1732,"u":"images/","p":"hot_1.png","e":0},{"id":"image_2","w":1232,"h":1238,"u":"images/","p":"hot_2.png","e":0}],"layers":[{"ddd":0,"ind":3,"ty":2,"nm":"主图复制","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":76,"s":[90]},{"t":149,"s":[40]}],"ix":11},"r":{"a":0,"k":177,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[242,529,0],"to":[0,-4.585,0],"ti":[0,36.022,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":54,"s":[199,-295.396,0],"to":[0,-96.152,0],"ti":[0,7.805,0]},{"t":149,"s":[394,-981,0]}],"ix":2},"a":{"a":0,"k":[742,1030,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[35.296,35.296,100]},{"t":149,"s":[82.296,82.296,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"2.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[15]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":76,"s":[80]},{"t":149,"s":[35]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[408,146,0],"to":[0,-4.585,0],"ti":[0,2.709,0]},{"t":149,"s":[593,-1063,0]}],"ix":2},"a":{"a":0,"k":[742,1030,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[80,80,100]},{"t":149,"s":[100,100,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"2.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[51.694]},{"t":149,"s":[4]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[408,-158,0],"to":[4.5,-118.667,0],"ti":[-4.5,118.667,0]},{"t":149,"s":[435,-870,0]}],"ix":2},"a":{"a":0,"k":[742,1030,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[41.779,41.779,100]},{"t":149,"s":[84.779,84.779,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"00.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":150,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":223,"s":[100]},{"t":224,"s":[80.713]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":150,"s":[0]},{"t":224,"s":[16]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[320,1233,0],"to":[0,0,0],"ti":[32.138,229.869,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":150,"s":[255.323,122.989,0],"to":[-0.323,-2.311,0],"ti":[0.785,55.489,0]},{"t":224,"s":[187.196,-399.715,0]}],"ix":2},"a":{"a":0,"k":[860,866,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":26,"s":[20,20,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":150,"s":[49.401,49.401,100]},{"t":224,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"00.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[21]},{"t":150,"s":[50]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":150,"s":[16]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,656,0],"to":[-1.843,-122.43,0],"ti":[2.335,162.088,0]},{"t":150,"s":[411.664,-610.286,0]}],"ix":2},"a":{"a":0,"k":[860,866,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[35,35,100]},{"t":150,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":2,"nm":"01.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":26,"s":[20]},{"t":149,"s":[60]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[320,1076,0],"to":[-32.333,-360.833,0],"ti":[32.333,360.833,0]},{"t":149,"s":[126,-1089,0]}],"ix":2},"a":{"a":0,"k":[616,619,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":26,"s":[40,40,100]},{"t":149,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":2,"nm":"01.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":149,"s":[60]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[418,1478,0],"to":[-5.667,-438.333,0],"ti":[5.667,438.333,0]},{"t":149,"s":[384,-1152,0]}],"ix":2},"a":{"a":0,"k":[616,619,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":23,"s":[13,13,100]},{"t":149,"s":[32,32,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":2,"nm":"00.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[50]},{"t":149,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":149,"s":[38]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,777,0],"to":[13.333,-129.5,0],"ti":[-13.333,129.5,0]},{"t":149,"s":[400,0,0]}],"ix":2},"a":{"a":0,"k":[860,866,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[35,35,100]},{"t":149,"s":[43,43,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":2,"nm":"00.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[50]},{"t":149,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":149,"s":[38]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,777,0],"to":[13.333,-129.5,0],"ti":[-13.333,129.5,0]},{"t":149,"s":[400,0,0]}],"ix":2},"a":{"a":0,"k":[860,866,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[35,35,100]},{"t":149,"s":[43,43,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":2,"nm":"01.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":149,"s":[80]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[418,673,0],"to":[50.5,-263.167,0],"ti":[-50.5,263.167,0]},{"t":149,"s":[721,-906,0]}],"ix":2},"a":{"a":0,"k":[616,619,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[20,20,100]},{"t":149,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":2,"nm":"01.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":100,"s":[100]},{"t":149,"s":[80]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,486,0],"to":[-3.167,-232,0],"ti":[3.167,232,0]},{"t":149,"s":[301,-906,0]}],"ix":2},"a":{"a":0,"k":[616,619,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[40,40,100]},{"t":149,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0},{"ddd":0,"ind":20,"ty":2,"nm":"00.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[21]},{"t":150,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":150,"s":[16]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[320,656,0],"to":[-1.878,-124.747,0],"ti":[6.236,134,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[105.424,-392.623,0],"to":[-0.122,-2.617,0],"ti":[0.03,2.107,0]},{"t":150,"s":[187.196,-399.715,0]}],"ix":2},"a":{"a":0,"k":[860,866,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[35,35,100]},{"t":150,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":150,"st":0,"bm":0}],"markers":[]}')
  },
  208: function(t, e, i) {
      (function(t) {
          var e;
          (e = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) && e(t);
          "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
          var i, s, r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], a = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
          function n(t, e, i) {
              var s = t.width
                , r = t.height;
              isNaN(e) || e < 1 || (i ? o(t, 0, 0, s, r, e) : g(t, 0, 0, s, r, e))
          }
          function o(t, e, i, s, n, o) {
              if (!(isNaN(o) || o < 1)) {
                  o |= 0;
                  var g, l = t.getContext("2d");
                  try {
                      try {
                          g = l.getImageData(e, i, s, n)
                      } catch (t) {
                          try {
                              netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),
                              g = l.getImageData(e, i, s, n)
                          } catch (t) {
                              throw new Error("unable to access local image data: " + t)
                          }
                      }
                  } catch (t) {
                      throw new Error("unable to access image data: " + t)
                  }
                  var C, A, p, I, m, c, u, f, d, y, M, v, D, x, w, E, b, L, _, S, T, P, k, N, j = g.data, F = o + o + 1, z = s - 1, O = n - 1, B = o + 1, R = B * (B + 1) / 2, V = new h, G = V;
                  for (p = 1; p < F; p++)
                      if (G = G.next = new h,
                      p == B)
                          var Q = G;
                  G.next = V;
                  var Y = null
                    , H = null;
                  u = c = 0;
                  var U = r[o]
                    , W = a[o];
                  for (A = 0; A < n; A++) {
                      for (E = b = L = _ = f = d = y = M = 0,
                      v = B * (S = j[c]),
                      D = B * (T = j[c + 1]),
                      x = B * (P = j[c + 2]),
                      w = B * (k = j[c + 3]),
                      f += R * S,
                      d += R * T,
                      y += R * P,
                      M += R * k,
                      G = V,
                      p = 0; p < B; p++)
                          G.r = S,
                          G.g = T,
                          G.b = P,
                          G.a = k,
                          G = G.next;
                      for (p = 1; p < B; p++)
                          I = c + ((z < p ? z : p) << 2),
                          f += (G.r = S = j[I]) * (N = B - p),
                          d += (G.g = T = j[I + 1]) * N,
                          y += (G.b = P = j[I + 2]) * N,
                          M += (G.a = k = j[I + 3]) * N,
                          E += S,
                          b += T,
                          L += P,
                          _ += k,
                          G = G.next;
                      for (Y = V,
                      H = Q,
                      C = 0; C < s; C++)
                          j[c + 3] = k = M * U >> W,
                          0 != k ? (k = 255 / k,
                          j[c] = (f * U >> W) * k,
                          j[c + 1] = (d * U >> W) * k,
                          j[c + 2] = (y * U >> W) * k) : j[c] = j[c + 1] = j[c + 2] = 0,
                          f -= v,
                          d -= D,
                          y -= x,
                          M -= w,
                          v -= Y.r,
                          D -= Y.g,
                          x -= Y.b,
                          w -= Y.a,
                          I = u + ((I = C + o + 1) < z ? I : z) << 2,
                          f += E += Y.r = j[I],
                          d += b += Y.g = j[I + 1],
                          y += L += Y.b = j[I + 2],
                          M += _ += Y.a = j[I + 3],
                          Y = Y.next,
                          v += S = H.r,
                          D += T = H.g,
                          x += P = H.b,
                          w += k = H.a,
                          E -= S,
                          b -= T,
                          L -= P,
                          _ -= k,
                          H = H.next,
                          c += 4;
                      u += s
                  }
                  for (C = 0; C < s; C++) {
                      for (b = L = _ = E = d = y = M = f = 0,
                      v = B * (S = j[c = C << 2]),
                      D = B * (T = j[c + 1]),
                      x = B * (P = j[c + 2]),
                      w = B * (k = j[c + 3]),
                      f += R * S,
                      d += R * T,
                      y += R * P,
                      M += R * k,
                      G = V,
                      p = 0; p < B; p++)
                          G.r = S,
                          G.g = T,
                          G.b = P,
                          G.a = k,
                          G = G.next;
                      for (m = s,
                      p = 1; p <= o; p++)
                          c = m + C << 2,
                          f += (G.r = S = j[c]) * (N = B - p),
                          d += (G.g = T = j[c + 1]) * N,
                          y += (G.b = P = j[c + 2]) * N,
                          M += (G.a = k = j[c + 3]) * N,
                          E += S,
                          b += T,
                          L += P,
                          _ += k,
                          G = G.next,
                          p < O && (m += s);
                      for (c = C,
                      Y = V,
                      H = Q,
                      A = 0; A < n; A++)
                          j[(I = c << 2) + 3] = k = M * U >> W,
                          k > 0 ? (k = 255 / k,
                          j[I] = (f * U >> W) * k,
                          j[I + 1] = (d * U >> W) * k,
                          j[I + 2] = (y * U >> W) * k) : j[I] = j[I + 1] = j[I + 2] = 0,
                          f -= v,
                          d -= D,
                          y -= x,
                          M -= w,
                          v -= Y.r,
                          D -= Y.g,
                          x -= Y.b,
                          w -= Y.a,
                          I = C + ((I = A + B) < O ? I : O) * s << 2,
                          f += E += Y.r = j[I],
                          d += b += Y.g = j[I + 1],
                          y += L += Y.b = j[I + 2],
                          M += _ += Y.a = j[I + 3],
                          Y = Y.next,
                          v += S = H.r,
                          D += T = H.g,
                          x += P = H.b,
                          w += k = H.a,
                          E -= S,
                          b -= T,
                          L -= P,
                          _ -= k,
                          H = H.next,
                          c += s
                  }
                  l.putImageData(g, e, i)
              }
          }
          function g(t, e, i, s, n, o) {
              if (!(isNaN(o) || o < 1)) {
                  o |= 0;
                  var g, l = t.getContext("2d");
                  try {
                      try {
                          g = l.getImageData(e, i, s, n)
                      } catch (t) {
                          try {
                              netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),
                              g = l.getImageData(e, i, s, n)
                          } catch (t) {
                              throw alert("Cannot access local image"),
                              new Error("unable to access local image data: " + t)
                          }
                      }
                  } catch (t) {
                      throw alert("Cannot access image"),
                      new Error("unable to access image data: " + t)
                  }
                  var C, A, p, I, m, c, u, f, d, y, M, v, D, x, w, E, b, L, _, S, T = g.data, P = o + o + 1, k = s - 1, N = n - 1, j = o + 1, F = j * (j + 1) / 2, z = new h, O = z;
                  for (p = 1; p < P; p++)
                      if (O = O.next = new h,
                      p == j)
                          var B = O;
                  O.next = z;
                  var R = null
                    , V = null;
                  u = c = 0;
                  var G = r[o]
                    , Q = a[o];
                  for (A = 0; A < n; A++) {
                      for (x = w = E = f = d = y = 0,
                      M = j * (b = T[c]),
                      v = j * (L = T[c + 1]),
                      D = j * (_ = T[c + 2]),
                      f += F * b,
                      d += F * L,
                      y += F * _,
                      O = z,
                      p = 0; p < j; p++)
                          O.r = b,
                          O.g = L,
                          O.b = _,
                          O = O.next;
                      for (p = 1; p < j; p++)
                          I = c + ((k < p ? k : p) << 2),
                          f += (O.r = b = T[I]) * (S = j - p),
                          d += (O.g = L = T[I + 1]) * S,
                          y += (O.b = _ = T[I + 2]) * S,
                          x += b,
                          w += L,
                          E += _,
                          O = O.next;
                      for (R = z,
                      V = B,
                      C = 0; C < s; C++)
                          T[c] = f * G >> Q,
                          T[c + 1] = d * G >> Q,
                          T[c + 2] = y * G >> Q,
                          f -= M,
                          d -= v,
                          y -= D,
                          M -= R.r,
                          v -= R.g,
                          D -= R.b,
                          I = u + ((I = C + o + 1) < k ? I : k) << 2,
                          f += x += R.r = T[I],
                          d += w += R.g = T[I + 1],
                          y += E += R.b = T[I + 2],
                          R = R.next,
                          M += b = V.r,
                          v += L = V.g,
                          D += _ = V.b,
                          x -= b,
                          w -= L,
                          E -= _,
                          V = V.next,
                          c += 4;
                      u += s
                  }
                  for (C = 0; C < s; C++) {
                      for (w = E = x = d = y = f = 0,
                      M = j * (b = T[c = C << 2]),
                      v = j * (L = T[c + 1]),
                      D = j * (_ = T[c + 2]),
                      f += F * b,
                      d += F * L,
                      y += F * _,
                      O = z,
                      p = 0; p < j; p++)
                          O.r = b,
                          O.g = L,
                          O.b = _,
                          O = O.next;
                      for (m = s,
                      p = 1; p <= o; p++)
                          c = m + C << 2,
                          f += (O.r = b = T[c]) * (S = j - p),
                          d += (O.g = L = T[c + 1]) * S,
                          y += (O.b = _ = T[c + 2]) * S,
                          x += b,
                          w += L,
                          E += _,
                          O = O.next,
                          p < N && (m += s);
                      for (c = C,
                      R = z,
                      V = B,
                      A = 0; A < n; A++)
                          T[I = c << 2] = f * G >> Q,
                          T[I + 1] = d * G >> Q,
                          T[I + 2] = y * G >> Q,
                          f -= M,
                          d -= v,
                          y -= D,
                          M -= R.r,
                          v -= R.g,
                          D -= R.b,
                          I = C + ((I = A + j) < N ? I : N) * s << 2,
                          f += x += R.r = T[I],
                          d += w += R.g = T[I + 1],
                          y += E += R.b = T[I + 2],
                          R = R.next,
                          M += b = V.r,
                          v += L = V.g,
                          D += _ = V.b,
                          x -= b,
                          w -= L,
                          E -= _,
                          V = V.next,
                          c += s
                  }
                  l.putImageData(g, e, i)
              }
          }
          function h() {
              this.r = 0,
              this.g = 0,
              this.b = 0,
              this.a = 0,
              this.next = null
          }
          t.exports = {
              stackBlurImage: n
          },
          (i = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) && (i.register(r, "mulTable", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\common\\thirdFiles\\stackBlur.js"),
          i.register(a, "shgTable", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\common\\thirdFiles\\stackBlur.js"),
          i.register(n, "stackBlurImage", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\common\\thirdFiles\\stackBlur.js"),
          i.register(o, "stackBlurCanvasRGBA", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\common\\thirdFiles\\stackBlur.js"),
          i.register(g, "stackBlurCanvasRGB", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\common\\thirdFiles\\stackBlur.js"),
          i.register(h, "BlurStack", "D:\\code\\eqx-editor-plugin\\eqx-editor-plugin\\src\\common\\thirdFiles\\stackBlur.js")),
          (s = "undefined" != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) && s(t)
      }
      ).call(this, i(14)(t))
  },
  43: function(t, e, i) {
      "use strict";
      i.r(e);
      var s = i(112);
      i.d(e, "default", (function() {
          return s.a
      }
      ));
      "undefined" != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature
  }
}]);
