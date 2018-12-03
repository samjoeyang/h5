var baList, f, y, d, ff, l, submit;
!function (t) {
    function n(i) {
        if (e[i])return e[i].exports;
        var o = e[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }

    var e = {};
    return n.m = t, n.c = e, n.p = "built/", n(0)
}([function (t, n, e) {
    (function (t, n) {
        e(3), e(1), e(2), e(6);
        var i = e(4), o = 16748073, r = t.extend({}, t.Events, {
            init: function () {
                var t = this;
                this.bgm = $("#bgm")[0], this.$body = $("body"), this.$main = $("#main"), n.set(this.$main, {transformOrigin: "0px 0px"}), this.pos0 = {
                    x: -257,
                    y: 0,
                    z: 410
                }, this.scene = new THREE.Scene, this.scene.fog = new THREE.Fog(o, 350, 900), this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 5e3), this.camera.position.set(this.pos0.x, this.pos0.y, this.pos0.z), this.scene.add(this.camera);
                var r = new THREE.AmbientLight(16777215, 1);
                this.scene.add(r), this.renderer = new THREE.WebGLRenderer({antialias: !0}), this.renderer.setClearColor(o), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), $("#three").append(this.renderer.domElement), $(window).on("resize", function () {
                    t.resize()
                }).on("touchmove", function () {
                    return !1
                }), this.resize(), setTimeout(function () {
                    t.resize()
                }, 500);
                var a = new THREE.Mesh(new THREE.PlaneGeometry(512, 819), new THREE.MeshPhongMaterial({
                    map: (new THREE.TextureLoader).load(e(7)),
                    fog: !1
                }));
                a.scale.set(7, 7, 1), a.position.set(0, 0, -2e3), this.scene.add(a), this.book = new i(512, 819), this.scene.add(this.book.el), this.drag0 = {
                    x: 0,
                    y: 0
                }, this.drag = {x: 0, y: 0};
                var s = new Gesturer({el: this.$body[0]});
                s.onTouchStart = function (e) {
                    t.isVinish || (n.to("#tip", .3, {
                        opacity: 0, onEnd: function () {
                            this.target.style.display = "none"
                        }
                    })), t.drag0.x = e.touches[0].pageX, n.to("#tip2", .3, {
                        opacity: 0, onEnd: function () {
                            this.target.style.display = "none"
                        }
                    })
                }, s.onTouchMove = function (n) {
                    t.drag.x = Math.max(-.02, Math.min(.02, 3e-4 * (n.touches[0].pageX - t.drag0.x))), t.book.el.rotation.y < .1 && t.drag.x < 0 && (t.drag.x = 0), t.book.el.rotation.y > t.book.angleMax - .08 && t.drag.x > 0 && (t.drag.x = 0);
                    (t.book.el.rotation.y > 26) && $("#tip2").css({
                        opacity: 1,
                        display: 'block'
                    });
                }, s.onTouchEnd = function (n) {
                    t.drag.x = Math.max(-.02, Math.min(.02, 3e-4 * (n.changedTouches[0].pageX - t.drag0.x))), t.book.el.rotation.y < .1 && t.drag.x < 0 && (t.drag.x = 0), t.book.el.rotation.y > t.book.angleMax - .08 && t.drag.x > 0 && (t.drag.x = 0);
                    if (t.book.el.children) {
                        var baArr = [];
                        for (var ba in t.book.el.children) {
                            if (t.book.el.children[ba].name.indexOf(".png") !== -1) {
                                baArr.push(t.book.el.children[ba].name);
                            }
                        }
                        baList = baArr;
                    }
                }, this.is1of3 = !1, this.is2of3 = !1, this.animate = this.animate.bind(this), this.animate(), this.initOther(),
                    this.book.on("preloadProgress", function (t) {

                    }), this.book.on("preloadComplete", function () {
                    n.to("#preload", 0.3, {
                        opacity: 0, onEnd: function () {
                            this.target.style.display = "none"
                        }
                    }), n.to(".group", 0.3, {
                        ease: n.Quad.InOut
                    }), t.playBgm(), n.to("#tip", 1, {
                        opacity: 1, onEnd: function () {
                            this.target.style.display = "block"
                        }
                    }), $(".lantern").css({display: "block"})
                }), this.isEnd = !1, this.isVinish = !0, this.isActive = !1, n.from(this.book.el.rotation, 5, {
                    y: 20,
                    ease: n.Quad.InOut,
                    onEnd: function () {
                        t.isActive = !0, t.isVinish = !1, s.on()
                    }
                })
            }, resize: function () {
                if ($("#success").is(":visible"))return;
                var t = Math.min(window.innerWidth / 640, window.innerHeight / 1004), e = Math.floor(window.innerWidth / t), i = Math.floor(window.innerHeight / t);
                n.set(this.$main, {scale: t, width: e, height: i}),
                    this.camera.aspect = window.innerWidth / window.innerHeight,
                    this.camera.updateProjectionMatrix(),
                    this.renderer.setSize(window.innerWidth, window.innerHeight),
                    $(".btnMuteOn").css({display: "block"})
            }, animate: function () {
                requestAnimationFrame(this.animate),
                this.isActive && (this.book.el.rotation.y < .1 && this.drag.x < 0 && (this.drag.x *= .8), this.book.el.rotation.y > this.book.angleMax - .08 && this.drag.x > 0 && (this.drag.x *= .8), this.book.el.rotation.y = this.drag.x + this.book.el.rotation.y),
                    this.book.angleMax - this.book.el.rotation.y < .1 ? this.isEnd || (this.isEnd = !0, $(".btnShare").css({display: "block"})) : this.isEnd && (this.isEnd = !1, $(".btnShare").css({display: "none"})),
                    this.book.el.rotation.y < this.book.angleMax / 3 ? this.is1of3 && (this.is1of3 = !1) : this.book.el.rotation.y < this.book.angleMax / 3 * 2 ? (this.is1of3 || (this.is1of3 = !0),
                            this.is2of3 && (this.is2of3 = !1)) : this.is2of3 || (this.is2of3 = !0),
                    this.book.checkPlane(),
                    this.renderer.render(this.scene, this.camera)
            }, initOther: function () {
                var t = this;
                $(".btnShare").on("touchend", function () {
                    t.book.angleMax - t.book.el.rotation.y < .1 && (t.shareOn())
                }), $("#start").on("click", function () {
                    t.book.trigger("preloadComplete");
                }), $(".btnMuteOn").on("touchend", function () {
                    $(".btnMuteOn").css({display: "none"}), $(".btnMuteOff").css({display: "block"}), t.bgm.pause()
                }), $(".btnMuteOff").on("touchend", function () {
                    $(".btnMuteOn").css({display: "block"}), $(".btnMuteOff").css({display: "none"}), t.bgm.play()
                }), $(".n3").on("touchend", function () {
                    $("#preload").css({display: "none"}), $("#rule").css({display: "block"})
                }), $("#rule").on("touchend", function () {
                    $("#preload").css({display: "block"}), $("#rule").css({display: "none"})
                }), $(".sub").on("touchend", function () {
                    var nickname = $('#nickname').val();
                    var mobile = $('#mobile').val();
                    if (nickname && mobile) {
                        submit = 1, $.post('db.php', {
                            nickname: nickname,
                            mobile: mobile
                        }), $("#success").css({display: "none"}), $("#share").css({display: "block"})
                    }
                })
            }, playBgm: function () {
                var t = this, e = function (i) {
                    n.kill(t.drag), "btnMuteOn" != i.target.className && $("#bgm")[0].play(), t.$main.off("touchend", e)
                };
                this.$main.on("touchend", e), $("#bgm")[0].play()
            }
        });
        r.init()
    }).call(n, e(1), e(2))
}, function (t, n, e) {
    var i, o;
    (function (r) {/*!
     * VERSION: 0.2.0
     * DATE: 2015-03-31
     * GIT:https://github.com/shrekshrek/bone
     *
     * @author: Shrek.wang, shrekshrek@gmail.com
     **/
        !function (a) {
            var s = "object" == typeof self && self.self == self && self || "object" == typeof r && r.global == r && r;
            i = [e(3), n], o = function (t, n) {
                s.Bone = a(s, n, t)
            }.apply(n, i), !(void 0 !== o && (t.exports = o))
        }(function (t, n, e) {
            var i = t.Bone, o = [].slice;
            n.VERSION = "0.2.0", n.$ = e, n.noConflict = function () {
                return t.Bone = i, this
            };
            var r = function (t) {
                return "function" == typeof t || !1
            }, a = function (t, n, e) {
                var i = null == t ? void 0 : t[n];
                return void 0 === i && (i = e), r(i) ? i.call(t) : i
            }, s = function (t) {
                return Function.prototype.bind.apply(t, o.call(arguments, 1))
            };
            n.bind = s;
            var c = function (t) {
                var n = arguments.length;
                if (2 > n || null == t)return t;
                for (var e = 1; n > e; e++)for (var i = arguments[e], o = u(i), r = o.length, a = 0; r > a; a++) {
                    var s = o[a];
                    t[s] = i[s]
                }
                return t
            };
            n.extend = c;
            var u = function (t) {
                var n = [];
                for (var e in t)n.push(e);
                return n
            }, h = function (t) {
                return null == t ? 0 : void 0 !== t.length ? t.length : u(t).length
            }, l = function (t) {
                return null == t || (void 0 !== t.length ? 0 === t.length : 0 === u(t).length)
            }, f = 0, p = function (t) {
                var n = ++f + "";
                return t ? t + n : n
            }, g = n.Events = {}, d = /\s+/, m = function (t, n, e, i, o) {
                var r, a = 0;
                if (e && "object" == typeof e) {
                    void 0 !== i && "context" in o && void 0 === o.context && (o.context = i);
                    for (r = u(e); a < r.length; a++)n = t(n, r[a], e[r[a]], o)
                } else if (e && d.test(e))for (r = e.split(d); a < r.length; a++)n = t(n, r[a], i, o); else n = t(n, e, i, o);
                return n
            };
            g.on = function (t, n, e) {
                return b(this, t, n, e)
            };
            var b = function (t, n, e, i, o) {
                if (t._events = m(v, t._events || {}, n, e, {context: i, ctx: t, listening: o}), o) {
                    var r = t._listeners || (t._listeners = {});
                    r[o.id] = o
                }
                return t
            };
            g.listenTo = function (t, n, e) {
                if (!t)return this;
                var i = t._listenId || (t._listenId = p("l")), o = this._listeningTo || (this._listeningTo = {}), r = o[i];
                if (!r) {
                    var a = this._listenId || (this._listenId = p("l"));
                    r = o[i] = {obj: t, objId: i, id: a, listeningTo: o, count: 0}
                }
                return b(t, n, e, this, r), this
            };
            var v = function (t, n, e, i) {
                if (e) {
                    var o = t[n] || (t[n] = []), r = i.context, a = i.ctx, s = i.listening;
                    s && s.count++, o.push({callback: e, context: r, ctx: r || a, listening: s})
                }
                return t
            };
            g.off = function (t, n, e) {
                return this._events ? (this._events = m(A, this._events, t, n, {
                        context: e,
                        listeners: this._listeners
                    }), this) : this
            }, g.stopListening = function (t, n, e) {
                var i = this._listeningTo;
                if (!i)return this;
                for (var o = t ? [t._listenId] : u(i), r = 0; r < o.length; r++) {
                    var a = i[o[r]];
                    if (!a)break;
                    a.obj.off(n, e, this)
                }
                return l(i) && (this._listeningTo = void 0), this
            };
            var A = function (t, n, e, i) {
                if (t) {
                    var o, r = 0, a = i.context, s = i.listeners;
                    if (n || e || a) {
                        for (var c = n ? [n] : u(t); r < c.length; r++) {
                            n = c[r];
                            var l = t[n];
                            if (!l)break;
                            for (var f = [], p = 0; p < l.length; p++) {
                                var g = l[p];
                                e && e !== g.callback && e !== g.callback._callback || a && a !== g.context ? f.push(g) : (o = g.listening, o && 0 === --o.count && (delete s[o.id], delete o.listeningTo[o.objId]))
                            }
                            f.length ? t[n] = f : delete t[n]
                        }
                        return h(t) ? t : void 0
                    }
                    for (var d = u(s); r < d.length; r++)o = s[d[r]], delete s[o.id], delete o.listeningTo[o.objId]
                }
            };
            g.once = function (t, n, e) {
                var i = m(E, {}, t, n, s(this.off, this));
                return this.on(i, void 0, e)
            }, g.listenToOnce = function (t, n, e) {
                var i = m(E, {}, n, e, s(this.stopListening, this, t));
                return this.listenTo(t, i)
            };
            var E = function (t, n, e, i) {
                if (e) {
                    var o = t[n] = function () {
                        i(n, o), e.apply(this, arguments)
                    };
                    o._callback = e
                }
                return t
            };
            g.trigger = function (t) {
                if (!this._events)return this;
                for (var n = Math.max(0, arguments.length - 1), e = Array(n), i = 0; n > i; i++)e[i] = arguments[i + 1];
                return m(y, this._events, t, void 0, e), this
            };
            var y = function (t, n, e, i) {
                if (t) {
                    var o = t[n], r = t.all;
                    o && r && (r = r.slice()), o && C(o, i), r && C(r, [n].concat(i))
                }
                return t
            }, C = function (t, n) {
                var e, i = -1, o = t.length, r = n[0], a = n[1], s = n[2];
                switch (n.length) {
                    case 0:
                        for (; ++i < o;)(e = t[i]).callback.call(e.ctx);
                        return;
                    case 1:
                        for (; ++i < o;)(e = t[i]).callback.call(e.ctx, r);
                        return;
                    case 2:
                        for (; ++i < o;)(e = t[i]).callback.call(e.ctx, r, a);
                        return;
                    case 3:
                        for (; ++i < o;)(e = t[i]).callback.call(e.ctx, r, a, s);
                        return;
                    default:
                        for (; ++i < o;)(e = t[i]).callback.apply(e.ctx, n);
                        return
                }
            };
            c(n, g);
            var B = n.Class = function () {
                this.initialize.apply(this, arguments)
            };
            c(B.prototype, g, {
                initialize: function () {
                }
            });
            var I = n.View = function (t) {
                this.cid = p("view"), t || (t = {});
                for (var n in w)t[w[n]] && (this[w[n]] = t[w[n]]);
                this._ensureElement(), this.initialize.apply(this, arguments)
            }, Q = /^(\S+)\s*(.*)$/, w = ["el", "id", "attributes", "className", "tagName", "events"];
            c(I.prototype, g, {
                tagName: "div", $: function (t) {
                    return this.$el.find(t)
                }, initialize: function () {
                }, render: function () {
                    return this
                }, remove: function () {
                    return this._removeElement(), this.stopListening(), this
                }, _removeElement: function () {
                    this.$el.remove()
                }, setElement: function (t) {
                    return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
                }, _setElement: function (t) {
                    this.$el = t instanceof n.$ ? t : n.$(t), this.el = this.$el[0]
                }, delegateEvents: function (t) {
                    if (t || (t = a(this, "events")), !t)return this;
                    this.undelegateEvents();
                    for (var n in t) {
                        var e = t[n];
                        if (r(e) || (e = this[e]), e) {
                            var i = n.match(Q);
                            this.delegate(i[1], i[2], s(e, this))
                        }
                    }
                    return this
                }, delegate: function (t, n, e) {
                    return this.$el.on(t + ".delegateEvents" + this.cid, n, e), this
                }, undelegateEvents: function () {
                    return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                }, undelegate: function (t, n, e) {
                    return this.$el.off(t + ".delegateEvents" + this.cid, n, e), this
                }, _createElement: function (t) {
                    return document.createElement(t)
                }, _ensureElement: function () {
                    if (this.el) this.setElement(a(this, "el")); else {
                        var t = c({}, a(this, "attributes"));
                        this.id && (t.id = a(this, "id")), this.className && (t.class = a(this, "className")), this.setElement(this._createElement(a(this, "tagName"))), this._setAttributes(t)
                    }
                }, _setAttributes: function (t) {
                    this.$el.attr(t)
                }
            });
            var F = n.Router = function (t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            }, x = /\((.*?)\)/g, U = /(\(\?)?:\w+/g, T = /\*\w+/g, M = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            c(F.prototype, g, {
                initialize: function () {
                }, route: function (t, e, i) {
                    t = this._routeToRegExp(t), r(e) && (i = e, e = ""), i || (i = this[e]);
                    var o = this;
                    return n.history.route(t, function (r) {
                        var a = o._extractParameters(t, r);
                        o.execute(i, a, e) !== !1 && (o.trigger.apply(o, ["route:" + e].concat(a)), o.trigger("route", e, a), n.history.trigger("route", o, e, a))
                    }), this
                }, execute: function (t, n) {
                    t && t.apply(this, n)
                }, navigate: function (t, e) {
                    return n.history.navigate(t, e), this
                }, _bindRoutes: function () {
                    if (this.routes)for (var t, n = u(this.routes); null != (t = n.pop());)this.route(t, this.routes[t])
                }, _routeToRegExp: function (t) {
                    return t = t.replace(M, "\\$&").replace(x, "(?:$1)?").replace(U, function (t, n) {
                        return n ? t : "([^/?]+)"
                    }).replace(T, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                }, _extractParameters: function (t, n) {
                    var e = t.exec(n).slice(1), i = [];
                    for (var o in e) {
                        var r = e[o];
                        i[o] = o === e.length - 1 ? r || null : r ? decodeURIComponent(r) : null
                    }
                    return i
                }
            });
            var R = n.History = function () {
                this.handlers = [], this.checkUrl = s(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            }, L = /^[#\/]|\s+$/g, S = /^\/+|\/+$/g, W = /#.*$/;
            R.started = !1, c(R.prototype, g, {
                atRoot: function () {
                    var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                    return t === this.root && !this.getSearch()
                }, matchRoot: function () {
                    var t = this.decodeFragment(this.location.pathname), n = t.slice(0, this.root.length - 1) + "/";
                    return n === this.root
                }, decodeFragment: function (t) {
                    return decodeURI(t.replace(/%25/g, "%2525"))
                }, getSearch: function () {
                    var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                    return t ? t[0] : ""
                }, getHash: function (t) {
                    var n = (t || this).location.href.match(/#(.*)$/);
                    return n ? n[1] : ""
                }, getPath: function () {
                    var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === t.charAt(0) ? t.slice(1) : t
                }, getFragment: function (t) {
                    return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(L, "")
                }, start: function (t) {
                    if (R.started)throw new Error("Bone.history has already been started");
                    if (R.started = !0, this.options = c({root: "/"}, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(S, "/"), this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) {
                            var n = this.root.slice(0, -1) || "/";
                            return this.location.replace(n + "#" + this.getPath()), !0
                        }
                        this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {replace: !0})
                    }
                    var e = window.addEventListener || function (t, n) {
                            return attachEvent("on" + t, n)
                        };
                    return this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && e("hashchange", this.checkUrl, !1), this.options.silent ? void 0 : this.loadUrl()
                }, stop: function () {
                    var t = window.removeEventListener || function (t, n) {
                            return detachEvent("on" + t, n)
                        };
                    this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && t("hashchange", this.checkUrl, !1), this._checkUrlInterval && clearInterval(this._checkUrlInterval), R.started = !1
                }, route: function (t, n) {
                    this.handlers.unshift({route: t, callback: n})
                }, checkUrl: function () {
                    var t = this.getFragment();
                    return t !== this.fragment && void this.loadUrl()
                }, loadUrl: function (t) {
                    if (!this.matchRoot())return !1;
                    t = this.fragment = this.getFragment(t);
                    for (var n in this.handlers) {
                        var e = this.handlers[n];
                        if (e.route.test(t))return e.callback(t), !0
                    }
                }, navigate: function (t, n) {
                    if (!R.started)return !1;
                    n && n !== !0 || (n = {trigger: !!n}), t = t.replace(W, "");
                    var e = this.root;
                    ("" === t || "?" === t.charAt(0)) && (e = e.slice(0, -1) || "/");
                    var i = e + t;
                    if (t = this.decodeFragment(t.replace(W, "")), this.fragment !== t) {
                        if (this.fragment = t, this._usePushState) this.history[n.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                            if (!this._wantsHashChange)return this.location.assign(i);
                            this._updateHash(this.location, t, n.replace)
                        }
                        return n.trigger ? this.loadUrl(t) : void 0
                    }
                }, _updateHash: function (t, n, e) {
                    if (e) {
                        var i = t.href.replace(/(javascript:|#).*$/, "");
                        t.replace(i + "#" + n)
                    } else t.hash = "#" + n
                }
            }), n.history = new R;
            var Y = function (t, n) {
                var e, i = this;
                e = t && Object.prototype.hasOwnProperty.call(t, "constructor") ? t.constructor : function () {
                        return i.apply(this, arguments)
                    }, c(e, i, n);
                var o = function () {
                    this.constructor = e
                };
                return o.prototype = i.prototype, e.prototype = new o, t && c(e.prototype, t), e.__super__ = i.prototype, e
            };
            return F.extend = R.extend = B.extend = I.extend = Y, n
        })
    }).call(n, function () {
        return this
    }())
}, function (t, n, e) {
    var i, o;
    /*!
     * VERSION: 0.7.0
     * DATE: 2016-8-17
     * GIT: https://github.com/shrekshrek/jstween
     * @author: Shrek.wang
     **/
    !function (e) {
        i = [n], o = function (t) {
            window.JT = e(t)
        }.apply(n, i), !(void 0 !== o && (t.exports = o))
    }(function (t) {
        function n(t, n) {
            for (var e in n)t[e] = n[e]
        }

        function e(t, n) {
            if (t.length && t.length > 0)for (var e = 0; e < t.length; e++)n.call(t[e], e, t[e]); else n.call(t, 0, t)
        }

        function i(t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
        }

        function o(t) {
            return t.replace(/\b(\w)|\s(\w)/g, function (t) {
                return t.toUpperCase()
            })
        }

        function r(t) {
            return Math.round(1e3 * t) / 1e3
        }

        function a(t) {
            return t ? Y + o(t) : Y
        }

        function s(t) {
            if (!t)throw"target is undefined, can't tween!!!";
            return "string" == typeof t ? "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        }

        function c(t, n) {
            return "rotation" == n || "scale" == n ? n : void 0 !== t._jt_obj[n] ? n : void 0 !== t.style[n] ? n : (n = a(n), void 0 !== t.style[n] ? n : void 0)
        }

        function u(t, n, e, i) {
            var o = {};
            if (n instanceof Array) {
                o.num = [];
                for (var r in n) {
                    var a = h(t, n[r]);
                    o.num[r] = a.num, o.unit = a.unit
                }
                void 0 != e && (i ? o.num.push(e.num) : o.num.unshift(e.num))
            } else o = h(t, n);
            return o
        }

        function h(t, n) {
            var e = f(n);
            "rem" == t.unit && "rem" != e.unit ? (y(), t.num = r(t.num * j), t.unit = "px") : "rem" != t.unit && "rem" == e.unit && (y(), t.num = r(t.num / j), t.unit = "rem");
            var i;
            switch (e.ext) {
                case"+=":
                    i = t.num + e.num;
                    break;
                case"-=":
                    i = t.num - e.num;
                    break;
                default:
                    i = e.num
            }
            return {num: i, unit: e.unit || t.unit}
        }

        function l(t) {
            void 0 == t._jt_obj && (t._jt_obj = {
                perspective: 0,
                x: 0,
                y: 0,
                z: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                skewX: 0,
                skewY: 0
            })
        }

        function f(t) {
            var n = /(\+=|-=|)(-|)(\d+\.\d+|\d+)(e[+-]?[0-9]{0,2}|)(rem|px|%|)/i, e = n.exec(t);
            return e ? {num: r(e[2] + e[3] + e[4]), unit: e[5], ext: e[1]} : {num: 0, unit: "px", ext: ""}
        }

        function p(t) {
            return /\S\s+\S/g.test(t) || !/\d/g.test(t)
        }

        function g(t, n) {
            switch (n) {
                case"perspective":
                case"x":
                case"y":
                case"z":
                case"rotationX":
                case"rotationY":
                case"rotationZ":
                case"scaleX":
                case"scaleY":
                case"scaleZ":
                case"skewX":
                case"skewY":
                    return t._jt_obj[n];
                case"rotation":
                    return t._jt_obj.rotationZ;
                case"scale":
                    return t._jt_obj.scaleX;
                default:
                    return d(t, n)
            }
        }

        function d(t, n) {
            if (t.style[n])return t.style[n];
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var e = i(n), o = document.defaultView.getComputedStyle(t, "");
                return o && o.getPropertyValue(e)
            }
            return t.currentStyle ? t.currentStyle[n] : null
        }

        function m(t, n, e) {
            switch (n) {
                case"perspective":
                case"x":
                case"y":
                case"z":
                case"rotationX":
                case"rotationY":
                case"rotationZ":
                case"scaleX":
                case"scaleY":
                case"scaleZ":
                case"skewX":
                case"skewY":
                    return t._jt_obj[n] = e, !0;
                case"rotation":
                    return t._jt_obj.rotationZ = e, !0;
                case"scale":
                    return t._jt_obj.scaleX = e, t._jt_obj.scaleY = e, !0;
                default:
                    return b(t, n, e), !1
            }
        }

        function b(t, n, e) {
            t.style[n] = e
        }

        function v(t) {
            return "object" == typeof t && 1 === t.nodeType
        }

        function A(t) {
            var n = "";
            t._jt_obj.perspective && (n += "perspective(" + t._jt_obj.perspective + ") "), (t._jt_obj.x || t._jt_obj.y || t._jt_obj.z) && (n += "translate3d(" + E(t._jt_obj.x) + "," + E(t._jt_obj.y) + "," + E(t._jt_obj.z) + ") "), t._jt_obj.rotationX && (n += "rotateX(" + t._jt_obj.rotationX % 360 + "deg) "), t._jt_obj.rotationY && (n += "rotateY(" + t._jt_obj.rotationY % 360 + "deg) "), t._jt_obj.rotationZ && (n += "rotateZ(" + t._jt_obj.rotationZ % 360 + "deg) "), (1 != t._jt_obj.scaleX || 1 != t._jt_obj.scaleY || 1 != t._jt_obj.scaleZ) && (n += "scale3d(" + t._jt_obj.scaleX + ", " + t._jt_obj.scaleY + ", " + t._jt_obj.scaleZ + ") "), (t._jt_obj.skewX || t._jt_obj.skewY) && (n += "skew(" + t._jt_obj.skewX + "deg," + t._jt_obj.skewY + "deg) "), t.style[a("transform")] = n
        }

        function E(t) {
            return t + ("number" == typeof t ? "px" : "")
        }

        function y() {
            V || (V = document.createElement("div"), V.style.cssText = "border:0 solid; position:absolute; line-height:0px;"), k || (k = document.getElementsByTagName("body")[0]), k.appendChild(V), V.style.borderLeftWidth = "1rem", j = parseFloat(V.offsetWidth), k.removeChild(V)
        }

        function C() {
            O = !0;
            var t = N.length, n = D.length;
            if (0 === t && 0 === n)return void(O = !1);
            var e = W(), i = e - q;
            q = e;
            for (var o = 0; t > o; o++) {
                var r = N[o];
                r && !r._update(i) && (r.isActive && (r.isActive = !1, N.splice(o, 1), r.onEnd && r.onEnd.apply(r, r.onEndParams)), o--, t--)
            }
            for (var a = 0; n > a; a++) {
                var s = D[a];
                s && !s._update(i) && (D.splice(a, 1), s.onEnd && s.onEnd.apply(s, s.onEndParams), a--, n--)
            }
            K(C)
        }

        function B() {
            this.initialize.apply(this, arguments)
        }

        function I(t, n) {
            var i = s(t), o = N.length;
            e(i, function (t, e) {
                for (var i = o - 1; i >= 0; i--) {
                    var r = N[i];
                    r.target === e && r[n]()
                }
            })
        }

        function Q(t) {
            for (var n = N.length, e = n - 1; e >= 0; e--) {
                var i = N[e];
                i[t]()
            }
        }

        function w() {
            this.initialize.apply(this, arguments)
        }

        function F(t, n) {
            var i = t, o = D.length;
            e(i, function (t, e) {
                for (var i = o - 1; i >= 0; i--) {
                    var r = D[i];
                    r.onEnd === e && r[n]()
                }
            })
        }

        function x(t) {
            for (var n = D.length, e = n - 1; e >= 0; e--) {
                var i = D[e];
                i[t]()
            }
        }

        function U(t) {
            t.bezier && (T(t, t.bezier), t.interpolation = R, delete t.bezier), t.through && (T(t, t.through), t.interpolation = L, delete t.through), t.linear && (T(t, t.linear), t.interpolation = M, delete t.linear)
        }

        function T(t, n) {
            for (var e in n)for (var i in n[e])0 == e ? t[i] = [n[e][i]] : t[i].push(n[e][i])
        }

        function M(t, n) {
            var e = t.length - 1, i = e * n, o = Math.floor(i), r = P.Linear;
            return 0 > n ? r(t[0], t[1], i) : n > 1 ? r(t[e], t[e - 1], e - i) : r(t[o], t[o + 1 > e ? e : o + 1], i - o)
        }

        function R(t, n) {
            var e, i = 0, o = t.length - 1, r = Math.pow, a = P.Bernstein;
            for (e = 0; o >= e; e++)i += r(1 - n, o - e) * r(n, e) * t[e] * a(o, e);
            return i
        }

        function L(t, n) {
            var e = t.length - 1, i = e * n, o = Math.floor(i), r = P.Through;
            return t[0] === t[e] ? (0 > n && (o = Math.floor(i = e * (1 + n))), r(t[(o - 1 + e) % e], t[o], t[(o + 1) % e], t[(o + 2) % e], i - o)) : 0 > n ? t[0] - (r(t[0], t[0], t[1], t[1], -i) - t[0]) : n > 1 ? t[e] - (r(t[e], t[e], t[e - 1], t[e - 1], i - e) - t[e]) : r(t[o ? o - 1 : 0], t[o], t[o + 1 > e ? e : o + 1], t[o + 2 > e ? e : o + 2], i - o)
        }

        Date.now = Date.now || function () {
                return (new Date).getTime()
            };
        var S = Date.now(), W = function () {
            return Date.now() - S
        }, Y = "";
        !function () {
            var t = document.createElement("div"), n = ["Webkit", "Moz", "Ms", "O"];
            for (var e in n)if (n[e] + "Transform" in t.style) {
                Y = n[e];
                break
            }
        }();
        var k, V, j, K = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                window.setTimeout(t, 1e3 / 60)
            }, N = [], O = !1, q = 0;
        n(B.prototype, {
            initialize: function (n, e, i, o, r) {
                this.fromVars = i, this.curVars = {}, this.toVars = o, this.target = n, this.duration = 1e3 * Math.max(e, 0), this.ease = o.ease || t.Linear.None, this.delay = 1e3 * Math.max(o.delay || 0, 0), this.yoyo = o.yoyo || !1, this.repeat = this.curRepeat = Math.floor(o.repeat || 0), this.repeatDelay = 1e3 * Math.max(o.repeatDelay || 0, 0), this.onStart = o.onStart || null, this.onStartParams = o.onStartParams || [], this.onRepeat = o.onRepeat || null, this.onRepeatParams = o.onRepeatParams || [], this.onEnd = o.onEnd || null, this.onEndParams = o.onEndParams || [], this.onUpdate = o.onUpdate || null, this.onUpdateParams = o.onUpdateParams || [], this.isPlaying = o.isPlaying || !0, this.interpolation = o.interpolation || null, this.isActive = o.isActive || !0, this.isReverse = !1, this.isDom = r, this.curTime = 0, this.isStart = !1, this.startTime = this.delay, this.endTime = this.startTime + this.repeatDelay + this.duration, 0 != this.delay && (this._updateProp(), this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams)), this.isActive && this._addSelf()
            }, _update: function (t) {
                if (!this.isPlaying)return !0;
                if (this.curTime += t, this.curTime < this.startTime)return !0;
                if (this.isStart || (this.curTime += this.repeatDelay), this.curTime < this.startTime + this.repeatDelay)return !0;
                if (this.curTime < this.endTime) this._updateProp(), this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams); else {
                    if (0 == this.curRepeat)return this._updateProp(), this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams), this._checkStart(), !1;
                    this.yoyo && (this.isReverse = !this.isReverse);
                    var n = (this.curTime - this.endTime) % (this.duration + this.repeatDelay);
                    0 == this.repeatDelay ? (this.curTime = this.startTime + n, this._updateProp()) : (this._updateProp(), this.curTime = this.startTime + n), this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams), this.onRepeat && this.onRepeat.apply(this, this.onRepeatParams), this.curRepeat > 0 && this.curRepeat--
                }
                return this._checkStart(), !0
            }, _checkStart: function () {
                this.isStart || (this.isStart = !0, this.onStart && this.onStart.apply(this, this.onStartParams))
            }, _updateProp: function () {
                var t = 0 == this.duration ? 1 : (this.curTime - this.startTime - this.repeatDelay) / this.duration;
                t = Math.max(0, Math.min(1, t)), this.isReverse && (t = 1 - t);
                var n = this.ease(t), e = !1;
                for (var i in this.fromVars) {
                    var o, a = this.fromVars[i], s = this.toVars[i];
                    o = s.num instanceof Array ? this.interpolation(s.num, n) : a.num + (s.num - a.num) * n, o = r(o), this.curVars[i] = {
                        num: o,
                        unit: s.unit
                    }, this.isDom ? (Math.abs(s.num - a.num) > 20 && (o = Math.round(o)), m(this.target, i, o + (s.unit || 0)) && (e = !0)) : this.target[i] = o + (s.unit || 0)
                }
                e && A(this.target)
            }, _toEnd: function () {
                var t = !1;
                for (var n in this.fromVars) {
                    var e = this.toVars[n], i = r(e.num);
                    this.curVars[n] = {
                        num: i,
                        unit: e.unit
                    }, this.isDom ? m(this.target, n, i + (e.unit || 0)) && (t = !0) : this.target[n] = i + (e.unit || 0)
                }
                t && A(this.target)
            }, _addSelf: function () {
                this.isActive = !0, N.push(this), O || (q = t.now(), C())
            }, _removeSelf: function () {
                this.isActive = !1;
                var t = N.indexOf(this);
                -1 !== t && N.splice(t, 1)
            }, active: function () {
                this._addSelf()
            }, play: function () {
                this.isPlaying = !0
            }, pause: function () {
                this.isPlaying = !1
            }, kill: function (t) {
                this._removeSelf(), t && (this._toEnd(), this.onEnd && this.onEnd.apply(this, this.onEndParams))
            }
        }), n(t, {
            get: function (t, n) {
                var e = s(t);
                if (void 0 !== e.length && (e = e[0]), v(e)) {
                    l(e);
                    var i = c(e, n);
                    return i ? g(e, i) : null
                }
                return e[n]
            }, set: function (t, n) {
                var i = s(t);
                e(i, function (t, e) {
                    if (v(e)) {
                        l(e);
                        var i = !1;
                        for (var o in n) {
                            var r = c(e, o);
                            if (r)if (p(n[o])) m(e, r, n[o]); else {
                                var a = u(f(g(e, r)), n[o]);
                                m(e, r, a.num + (a.unit || 0)) && (i = !0)
                            }
                        }
                        i && A(e)
                    } else for (var s in n) {
                        var a = u(f(e[s]), n[s]);
                        e[s] = a.num + (a.unit || 0)
                    }
                })
            }, fromTo: function (t, n, i, o) {
                U(o);
                var r = s(t), a = [];
                return e(r, function (t, e) {
                    var r = {}, s = {}, h = v(e);
                    if (h) {
                        l(e);
                        for (var p in o) {
                            var d = c(e, p);
                            if (d) {
                                var m = f(g(e, d));
                                r[d] = u(m, i[p]), s[d] = u(m, o[p], r[d], !1)
                            } else s[p] = o[p]
                        }
                    } else for (var p in o)if (void 0 !== e[p]) {
                        var m = f(e[p]);
                        r[p] = u(m, i[p]), s[p] = u(m, o[p], r[p], !1)
                    } else s[p] = o[p];
                    var b = new B(e, n, r, s, h);
                    a.push(b)
                }), 1 == a.length ? a[0] : a
            }, from: function (t, n, i) {
                U(i);
                var o = s(t), r = [];
                return e(o, function (t, e) {
                    var o = {}, a = {}, s = v(e);
                    if (s) {
                        l(e);
                        for (var h in i) {
                            var p = c(e, h);
                            if (p) {
                                var d = f(g(e, p));
                                o[p] = u(d, i[h], d, !0), a[p] = d
                            } else a[h] = i[h]
                        }
                    } else for (var h in i)if (void 0 !== e[h]) {
                        var d = f(e[h]);
                        o[h] = u(d, i[h], d, !0), a[h] = d
                    } else a[h] = i[h];
                    var m = new B(e, n, o, a, s);
                    r.push(m)
                }), 1 == r.length ? r[0] : r
            }, to: function (t, n, i) {
                U(i);
                var o = s(t), r = [];
                return e(o, function (t, e) {
                    var o = {}, a = {}, s = v(e);
                    if (s) {
                        l(e);
                        for (var h in i) {
                            var p = c(e, h);
                            if (p) {
                                var d = f(g(e, p));
                                o[p] = d, a[p] = u(d, i[h], d, !1)
                            } else a[h] = i[h]
                        }
                    } else for (var h in i)if (void 0 !== e[h]) {
                        var d = f(e[h]);
                        o[h] = d, a[h] = u(d, i[h], d, !1)
                    } else a[h] = i[h];
                    var m = new B(e, n, o, a, s);
                    r.push(m)
                }), 1 == r.length ? r[0] : r
            }, kill: function (t, n) {
                var i = s(t);
                e(i, function (t, e) {
                    for (var i = N.length, o = i - 1; o >= 0; o--) {
                        var r = N[o];
                        r.target === e && r.kill(n)
                    }
                })
            }, killAll: function (t) {
                for (var n = N.length, e = n - 1; e >= 0; e--) {
                    var i = N[e];
                    i.kill(t)
                }
            }, play: function (t) {
                I(t, "play")
            }, playAll: function () {
                Q("play")
            }, pause: function (t) {
                I(t, "pause")
            }, pauseAll: function () {
                Q("pause")
            }, isTweening: function (t) {
                var n = s(t);
                n = n[0] || n;
                for (var e = N.length, i = e - 1; i >= 0; i--) {
                    var o = N[i];
                    if (o.target === n)return !0
                }
                return !1
            }
        });
        var D = [];
        n(w.prototype, {
            initialize: function (t, n, e, i) {
                this.delay = 1e3 * t, this.onEnd = n || null, this.onEndParams = e || [], this.curTime = 0, this.endTime = this.delay, this.isPlaying = i || !0, 0 != this.delay ? this._addSelf() : this.onEnd && this.onEnd.apply(this, this.onEndParams)
            }, _update: function (t) {
                return !this.isPlaying || (this.curTime += t, this.curTime < this.endTime)
            }, _addSelf: function () {
                D.push(this), O || (q = t.now(), C())
            }, _removeSelf: function () {
                var t = D.indexOf(this);
                -1 !== t && D.splice(t, 1)
            }, play: function () {
                this.isPlaying = !0
            }, pause: function () {
                this.isPlaying = !1
            }, kill: function (t) {
                this._removeSelf(), t && (this._toEnd(), this.onEnd && this.onEnd.apply(this, this.onEndParams))
            }
        }), n(t, {
            call: function (t, n, e, i) {
                return new w(t, n, e, i)
            }, killCall: function (t, n) {
                var i = t, o = D.length;
                e(i, function (t, e) {
                    for (var i = o - 1; i >= 0; i--) {
                        var r = D[i];
                        r.onEnd === e && r.kill(n)
                    }
                })
            }, killAllCalls: function (t) {
                for (var n = D.length, e = n - 1; e >= 0; e--) {
                    var i = D[e];
                    i.kill(t)
                }
            }, playCall: function (t) {
                F(t, "play")
            }, playAllCalls: function () {
                x("play")
            }, pauseCall: function (t) {
                F(t, "pause")
            }, pauseAllCalls: function () {
                x("pause")
            }
        }), n(t, {
            path: function (n) {
                U(n);
                for (var e, i = n.ease || t.Linear.None, o = n.step || 1, r = [], a = 0; o >= a; a++) {
                    e = i(a / o);
                    var s = {};
                    for (var c in n)n[c] instanceof Array && (s[c] = n.interpolation(n[c], e));
                    r.push(s)
                }
                return r
            }
        });
        var P = {
            Linear: function (t, n, e) {
                return (n - t) * e + t
            }, Bernstein: function (t, n) {
                var e = P.Factorial;
                return e(t) / e(n) / e(t - n)
            }, Factorial: function () {
                var t = [1];
                return function (n) {
                    var e, i = 1;
                    if (t[n])return t[n];
                    for (e = n; e > 1; e--)i *= e;
                    return t[n] = i
                }
            }(), Through: function (t, n, e, i, o) {
                var r = .5 * (e - t), a = .5 * (i - n), s = o * o, c = o * s;
                return (2 * n - 2 * e + r + a) * c + (-3 * n + 3 * e - 2 * r - a) * s + r * o + n
            }
        };
        return n(t, {
            Linear: {
                None: function (t) {
                    return t
                }
            }, Quad: {
                In: function (t) {
                    return t * t
                }, Out: function (t) {
                    return t * (2 - t)
                }, InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }
            }, Cubic: {
                In: function (t) {
                    return t * t * t
                }, Out: function (t) {
                    return --t * t * t + 1
                }, InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }
            }, Quart: {
                In: function (t) {
                    return t * t * t * t
                }, Out: function (t) {
                    return 1 - --t * t * t * t
                }, InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }
            }, Quint: {
                In: function (t) {
                    return t * t * t * t * t
                }, Out: function (t) {
                    return --t * t * t * t * t + 1
                }, InOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }
            }, Sine: {
                In: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }, Out: function (t) {
                    return Math.sin(t * Math.PI / 2)
                }, InOut: function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }
            }, Expo: {
                In: function (t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                }, Out: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }, InOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                }
            }, Circ: {
                In: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }, Out: function (t) {
                    return Math.sqrt(1 - --t * t)
                }, InOut: function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }
            }, Elastic: {
                In: function (t) {
                    var n, e = .1, i = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, n = i / 4) : n = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / i)))
                }, Out: function (t) {
                    var n, e = .1, i = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, n = i / 4) : n = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin(2 * (t - n) * Math.PI / i) + 1)
                }, InOut: function (t) {
                    var n, e = .1, i = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, n = i / 4) : n = i * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / i) : e * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - n) * Math.PI / i) * .5 + 1)
                }
            }, Back: {
                In: function (t) {
                    var n = 1.70158;
                    return t * t * ((n + 1) * t - n)
                }, Out: function (t) {
                    var n = 1.70158;
                    return --t * t * ((n + 1) * t + n) + 1
                }, InOut: function (t) {
                    var n = 2.5949095;
                    return (t *= 2) < 1 ? .5 * t * t * ((n + 1) * t - n) : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2)
                }
            }, Bounce: {
                In: function (n) {
                    return 1 - t.Bounce.Out(1 - n)
                }, Out: function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }, InOut: function (n) {
                    return .5 > n ? .5 * t.Bounce.In(2 * n) : .5 * t.Bounce.Out(2 * n - 1) + .5
                }
            }
        }), t.now = W, t
    })
}, function (t, n) {
    var e = function () {
        function t(t) {
            return null == t ? String(t) : Z[H.call(t)] || "object"
        }

        function n(n) {
            return "function" == t(n)
        }

        function e(t) {
            return null != t && t == t.window
        }

        function i(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function o(n) {
            return "object" == t(n)
        }

        function r(t) {
            return o(t) && !e(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function a(t) {
            return "number" == typeof t.length
        }

        function s(t) {
            return U.call(t, function (t) {
                return null != t
            })
        }

        function c(t) {
            return t.length > 0 ? B.fn.concat.apply([], t) : t
        }

        function u(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function h(t) {
            return t in R ? R[t] : R[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function l(t, n) {
            return "number" != typeof n || L[u(t)] ? n : n + "px"
        }

        function f(t) {
            var n, e;
            return M[t] || (n = T.createElement(t), T.body.appendChild(n), e = getComputedStyle(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), M[t] = e), M[t]
        }

        function p(t) {
            return "children" in t ? x.call(t.children) : B.map(t.childNodes, function (t) {
                    return 1 == t.nodeType ? t : void 0
                })
        }

        function g(t, n, e) {
            for (C in n)e && (r(n[C]) || X(n[C])) ? (r(n[C]) && !r(t[C]) && (t[C] = {}), X(n[C]) && !X(t[C]) && (t[C] = []), g(t[C], n[C], e)) : n[C] !== y && (t[C] = n[C])
        }

        function d(t, n) {
            return null == n ? B(t) : B(t).filter(n)
        }

        function m(t, e, i, o) {
            return n(e) ? e.call(t, i, o) : e
        }

        function b(t, n, e) {
            null == e ? t.removeAttribute(n) : t.setAttribute(n, e)
        }

        function v(t, n) {
            var e = t.className, i = e && e.baseVal !== y;
            return n === y ? i ? e.baseVal : e : void(i ? e.baseVal = n : t.className = n)
        }

        function A(t) {
            var n;
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? B.parseJSON(t) : t : n) : t
            } catch (n) {
                return t
            }
        }

        function E(t, n) {
            n(t);
            for (var e = 0, i = t.childNodes.length; i > e; e++)E(t.childNodes[e], n)
        }

        var y, C, B, I, Q, w, F = [], x = F.slice, U = F.filter, T = window.document, M = {}, R = {}, L = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, S = /^\s*<(\w+|!)[^>]*>/, W = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, k = /^(?:body|html)$/i, V = /([A-Z])/g, j = ["val", "css", "html", "text", "data", "width", "height", "offset"], K = ["after", "prepend", "before", "append"], N = T.createElement("table"), O = T.createElement("tr"), q = {
            tr: T.createElement("tbody"),
            tbody: N,
            thead: N,
            tfoot: N,
            td: O,
            th: O,
            "*": T.createElement("div")
        }, D = /complete|loaded|interactive/, P = /^[\w-]*$/, Z = {}, H = Z.toString, z = {}, _ = T.createElement("div"), G = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, X = Array.isArray || function (t) {
                return t instanceof Array
            };
        return z.matches = function (t, n) {
            if (!n || !t || 1 !== t.nodeType)return !1;
            var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (e)return e.call(t, n);
            var i, o = t.parentNode, r = !o;
            return r && (o = _).appendChild(t), i = ~z.qsa(o, n).indexOf(t), r && _.removeChild(t), i
        }, Q = function (t) {
            return t.replace(/-+(.)?/g, function (t, n) {
                return n ? n.toUpperCase() : ""
            })
        }, w = function (t) {
            return U.call(t, function (n, e) {
                return t.indexOf(n) == e
            })
        }, z.fragment = function (t, n, e) {
            var i, o, a;
            return W.test(t) && (i = B(T.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(Y, "<$1></$2>")), n === y && (n = S.test(t) && RegExp.$1), n in q || (n = "*"), a = q[n], a.innerHTML = "" + t, i = B.each(x.call(a.childNodes), function () {
                a.removeChild(this)
            })), r(e) && (o = B(i), B.each(e, function (t, n) {
                j.indexOf(t) > -1 ? o[t](n) : o.attr(t, n)
            })), i
        }, z.Z = function (t, n) {
            return t = t || [], t.__proto__ = B.fn, t.selector = n || "", t
        }, z.isZ = function (t) {
            return t instanceof z.Z
        }, z.init = function (t, e) {
            var i;
            if (!t)return z.Z();
            if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && S.test(t)) i = z.fragment(t, RegExp.$1, e), t = null; else {
                if (e !== y)return B(e).find(t);
                i = z.qsa(T, t)
            } else {
                if (n(t))return B(T).ready(t);
                if (z.isZ(t))return t;
                if (X(t)) i = s(t); else if (o(t)) i = [t], t = null; else if (S.test(t)) i = z.fragment(t.trim(), RegExp.$1, e), t = null; else {
                    if (e !== y)return B(e).find(t);
                    i = z.qsa(T, t)
                }
            }
            return z.Z(i, t)
        }, B = function (t, n) {
            return z.init(t, n)
        }, B.extend = function (t) {
            var n, e = x.call(arguments, 1);
            return "boolean" == typeof t && (n = t, t = e.shift()), e.forEach(function (e) {
                g(t, e, n)
            }), t
        }, z.qsa = function (t, n) {
            var e, o = "#" == n[0], r = !o && "." == n[0], a = o || r ? n.slice(1) : n, s = P.test(a);
            return i(t) && s && o ? (e = t.getElementById(a)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : x.call(s && !o ? r ? t.getElementsByClassName(a) : t.getElementsByTagName(n) : t.querySelectorAll(n))
        }, B.contains = T.documentElement.contains ? function (t, n) {
                return t !== n && t.contains(n)
            } : function (t, n) {
                for (; n && (n = n.parentNode);)if (n === t)return !0;
                return !1
            }, B.type = t, B.isFunction = n, B.isWindow = e, B.isArray = X, B.isPlainObject = r, B.isEmptyObject = function (t) {
            var n;
            for (n in t)return !1;
            return !0
        }, B.inArray = function (t, n, e) {
            return F.indexOf.call(n, t, e)
        }, B.camelCase = Q, B.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, B.uuid = 0, B.support = {}, B.expr = {}, B.map = function (t, n) {
            var e, i, o, r = [];
            if (a(t))for (i = 0; i < t.length; i++)e = n(t[i], i), null != e && r.push(e); else for (o in t)e = n(t[o], o), null != e && r.push(e);
            return c(r)
        }, B.each = function (t, n) {
            var e, i;
            if (a(t)) {
                for (e = 0; e < t.length; e++)if (n.call(t[e], e, t[e]) === !1)return t
            } else for (i in t)if (n.call(t[i], i, t[i]) === !1)return t;
            return t
        }, B.grep = function (t, n) {
            return U.call(t, n)
        }, window.JSON && (B.parseJSON = JSON.parse), B.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, n) {
            Z["[object " + n + "]"] = n.toLowerCase()
        }), B.fn = {
            forEach: F.forEach,
            reduce: F.reduce,
            push: F.push,
            sort: F.sort,
            indexOf: F.indexOf,
            concat: F.concat,
            map: function (t) {
                return B(B.map(this, function (n, e) {
                    return t.call(n, e, n)
                }))
            },
            slice: function () {
                return B(x.apply(this, arguments))
            },
            ready: function (t) {
                return D.test(T.readyState) && T.body ? t(B) : T.addEventListener("DOMContentLoaded", function () {
                        t(B)
                    }, !1), this
            },
            get: function (t) {
                return t === y ? x.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (t) {
                return F.every.call(this, function (n, e) {
                    return t.call(n, e, n) !== !1
                }), this
            },
            filter: function (t) {
                return n(t) ? this.not(this.not(t)) : B(U.call(this, function (n) {
                        return z.matches(n, t)
                    }))
            },
            add: function (t, n) {
                return B(w(this.concat(B(t, n))))
            },
            is: function (t) {
                return this.length > 0 && z.matches(this[0], t)
            },
            not: function (t) {
                var e = [];
                if (n(t) && t.call !== y) this.each(function (n) {
                    t.call(this, n) || e.push(this)
                }); else {
                    var i = "string" == typeof t ? this.filter(t) : a(t) && n(t.item) ? x.call(t) : B(t);
                    this.forEach(function (t) {
                        i.indexOf(t) < 0 && e.push(t)
                    })
                }
                return B(e)
            },
            has: function (t) {
                return this.filter(function () {
                    return o(t) ? B.contains(this, t) : B(this).find(t).size()
                })
            },
            eq: function (t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function () {
                var t = this[0];
                return t && !o(t) ? t : B(t)
            },
            last: function () {
                var t = this[this.length - 1];
                return t && !o(t) ? t : B(t)
            },
            find: function (t) {
                var n, e = this;
                return n = t ? "object" == typeof t ? B(t).filter(function () {
                            var t = this;
                            return F.some.call(e, function (n) {
                                return B.contains(n, t)
                            })
                        }) : 1 == this.length ? B(z.qsa(this[0], t)) : this.map(function () {
                                return z.qsa(this, t)
                            }) : []
            },
            closest: function (t, n) {
                var e = this[0], o = !1;
                for ("object" == typeof t && (o = B(t)); e && !(o ? o.indexOf(e) >= 0 : z.matches(e, t));)e = e !== n && !i(e) && e.parentNode;
                return B(e)
            },
            parents: function (t) {
                for (var n = [], e = this; e.length > 0;)e = B.map(e, function (t) {
                    return (t = t.parentNode) && !i(t) && n.indexOf(t) < 0 ? (n.push(t), t) : void 0
                });
                return d(n, t)
            },
            parent: function (t) {
                return d(w(this.pluck("parentNode")), t)
            },
            children: function (t) {
                return d(this.map(function () {
                    return p(this)
                }), t)
            },
            contents: function () {
                return this.map(function () {
                    return x.call(this.childNodes)
                })
            },
            siblings: function (t) {
                return d(this.map(function (t, n) {
                    return U.call(p(n.parentNode), function (t) {
                        return t !== n
                    })
                }), t)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (t) {
                return B.map(this, function (n) {
                    return n[t]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = f(this.nodeName))
                })
            },
            replaceWith: function (t) {
                return this.before(t).remove()
            },
            wrap: function (t) {
                var e = n(t);
                if (this[0] && !e)var i = B(t).get(0), o = i.parentNode || this.length > 1;
                return this.each(function (n) {
                    B(this).wrapAll(e ? t.call(this, n) : o ? i.cloneNode(!0) : i)
                })
            },
            wrapAll: function (t) {
                if (this[0]) {
                    B(this[0]).before(t = B(t));
                    for (var n; (n = t.children()).length;)t = n.first();
                    B(t).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                var e = n(t);
                return this.each(function (n) {
                    var i = B(this), o = i.contents(), r = e ? t.call(this, n) : t;
                    o.length ? o.wrapAll(r) : i.append(r)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    B(this).replaceWith(B(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (t) {
                return this.each(function () {
                    var n = B(this);
                    (t === y ? "none" == n.css("display") : t) ? n.show() : n.hide()
                })
            },
            prev: function (t) {
                return B(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function (t) {
                return B(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function (t) {
                return 0 in arguments ? this.each(function (n) {
                        var e = this.innerHTML;
                        B(this).empty().append(m(this, t, n, e))
                    }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (t) {
                return 0 in arguments ? this.each(function (n) {
                        var e = m(this, t, n, this.textContent);
                        this.textContent = null == e ? "" : "" + e
                    }) : 0 in this ? this[0].textContent : null
            },
            attr: function (t, n) {
                var e;
                return "string" != typeof t || 1 in arguments ? this.each(function (e) {
                        if (1 === this.nodeType)if (o(t))for (C in t)b(this, C, t[C]); else b(this, t, m(this, n, e, this.getAttribute(t)))
                    }) : this.length && 1 === this[0].nodeType ? !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e : y
            },
            removeAttr: function (t) {
                return this.each(function () {
                    1 === this.nodeType && b(this, t)
                })
            },
            prop: function (t, n) {
                return t = G[t] || t, 1 in arguments ? this.each(function (e) {
                        this[t] = m(this, n, e, this[t])
                    }) : this[0] && this[0][t]
            },
            data: function (t, n) {
                var e = "data-" + t.replace(V, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(e, n) : this.attr(e);
                return null !== i ? A(i) : y
            },
            val: function (t) {
                return 0 in arguments ? this.each(function (n) {
                        this.value = m(this, t, n, this.value)
                    }) : this[0] && (this[0].multiple ? B(this[0]).find("option").filter(function () {
                            return this.selected
                        }).pluck("value") : this[0].value)
            },
            offset: function (t) {
                if (t)return this.each(function (n) {
                    var e = B(this), i = m(this, t, n, e.offset()), o = e.offsetParent().offset(), r = {
                        top: i.top - o.top,
                        left: i.left - o.left
                    };
                    "static" == e.css("position") && (r.position = "relative"), e.css(r)
                });
                if (!this.length)return null;
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + window.pageXOffset,
                    top: n.top + window.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function (n, e) {
                if (arguments.length < 2) {
                    var i = this[0], o = getComputedStyle(i, "");
                    if (!i)return;
                    if ("string" == typeof n)return i.style[Q(n)] || o.getPropertyValue(n);
                    if (X(n)) {
                        var r = {};
                        return B.each(X(n) ? n : [n], function (t, n) {
                            r[n] = i.style[Q(n)] || o.getPropertyValue(n)
                        }), r
                    }
                }
                var a = "";
                if ("string" == t(n)) e || 0 === e ? a = u(n) + ":" + l(n, e) : this.each(function () {
                        this.style.removeProperty(u(n))
                    }); else for (C in n)n[C] || 0 === n[C] ? a += u(C) + ":" + l(C, n[C]) + ";" : this.each(function () {
                        this.style.removeProperty(u(C))
                    });
                return this.each(function () {
                    this.style.cssText += ";" + a
                })
            },
            index: function (t) {
                return t ? this.indexOf(B(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (t) {
                return !!t && F.some.call(this, function (t) {
                        return this.test(v(t))
                    }, h(t))
            },
            addClass: function (t) {
                return t ? this.each(function (n) {
                        I = [];
                        var e = v(this), i = m(this, t, n, e);
                        i.split(/\s+/g).forEach(function (t) {
                            B(this).hasClass(t) || I.push(t)
                        }, this), I.length && v(this, e + (e ? " " : "") + I.join(" "))
                    }) : this
            },
            removeClass: function (t) {
                return this.each(function (n) {
                    return t === y ? v(this, "") : (I = v(this), m(this, t, n, I).split(/\s+/g).forEach(function (t) {
                            I = I.replace(h(t), " ")
                        }), void v(this, I.trim()))
                })
            },
            toggleClass: function (t, n) {
                return t ? this.each(function (e) {
                        var i = B(this), o = m(this, t, e, v(this));
                        o.split(/\s+/g).forEach(function (t) {
                            (n === y ? !i.hasClass(t) : n) ? i.addClass(t) : i.removeClass(t)
                        })
                    }) : this
            },
            scrollTop: function (t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === y ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                                this.scrollTop = t
                            } : function () {
                                this.scrollTo(this.scrollX, t)
                            })
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === y ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                                this.scrollLeft = t
                            } : function () {
                                this.scrollTo(t, this.scrollY)
                            })
                }
            },
            position: function () {
                if (this.length) {
                    var t = this[0], n = this.offsetParent(), e = this.offset(), i = k.test(n[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : n.offset();
                    return e.top -= parseFloat(B(t).css("margin-top")) || 0, e.left -= parseFloat(B(t).css("margin-left")) || 0, i.top += parseFloat(B(n[0]).css("border-top-width")) || 0, i.left += parseFloat(B(n[0]).css("border-left-width")) || 0, {
                        top: e.top - i.top,
                        left: e.left - i.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || T.body; t && !k.test(t.nodeName) && "static" == B(t).css("position");)t = t.offsetParent;
                    return t
                })
            }
        }, B.fn.detach = B.fn.remove, ["width", "height"].forEach(function (t) {
            var n = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            B.fn[t] = function (o) {
                var r, a = this[0];
                return o === y ? e(a) ? a["inner" + n] : i(a) ? a.documentElement["scroll" + n] : (r = this.offset()) && r[t] : this.each(function (n) {
                        a = B(this), a.css(t, m(this, o, n, a[t]()))
                    })
            }
        }), K.forEach(function (n, e) {
            var i = e % 2;
            B.fn[n] = function () {
                var n, o, r = B.map(arguments, function (e) {
                    return n = t(e), "object" == n || "array" == n || null == e ? e : z.fragment(e)
                }), a = this.length > 1;
                return r.length < 1 ? this : this.each(function (t, n) {
                        o = i ? n : n.parentNode, n = 0 == e ? n.nextSibling : 1 == e ? n.firstChild : 2 == e ? n : null;
                        var s = B.contains(T.documentElement, o);
                        r.forEach(function (t) {
                            if (a) t = t.cloneNode(!0); else if (!o)return B(t).remove();
                            o.insertBefore(t, n), s && E(t, function (t) {
                                null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                            })
                        })
                    })
            }, B.fn[i ? n + "To" : "insert" + (e ? "Before" : "After")] = function (t) {
                return B(t)[n](this), this
            }
        }), z.Z.prototype = B.fn, z.uniq = w, z.deserializeValue = A, B.zepto = z, B
    }();
    window.Zepto = e, void 0 === window.$ && (window.$ = e), function (t) {
        function n(t) {
            return t._zid || (t._zid = f++)
        }

        function e(t, e, r, a) {
            if (e = i(e), e.ns)var s = o(e.ns);
            return (m[n(t)] || []).filter(function (t) {
                return !(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || r && n(t.fn) !== n(r) || a && t.sel != a)
            })
        }

        function i(t) {
            var n = ("" + t).split(".");
            return {e: n[0], ns: n.slice(1).sort().join(" ")}
        }

        function o(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function r(t, n) {
            return t.del && !v && t.e in A || !!n
        }

        function a(t) {
            return E[t] || v && A[t] || t
        }

        function s(e, o, s, c, h, f, p) {
            var g = n(e), d = m[g] || (m[g] = []);
            o.split(/\s/).forEach(function (n) {
                if ("ready" == n)return t(document).ready(s);
                var o = i(n);
                o.fn = s, o.sel = h, o.e in E && (s = function (n) {
                    var e = n.relatedTarget;
                    return !e || e !== this && !t.contains(this, e) ? o.fn.apply(this, arguments) : void 0
                }), o.del = f;
                var g = f || s;
                o.proxy = function (t) {
                    if (t = u(t), !t.isImmediatePropagationStopped()) {
                        t.data = c;
                        var n = g.apply(e, t._args == l ? [t] : [t].concat(t._args));
                        return n === !1 && (t.preventDefault(), t.stopPropagation()), n
                    }
                }, o.i = d.length, d.push(o), "addEventListener" in e && e.addEventListener(a(o.e), o.proxy, r(o, p))
            })
        }

        function c(t, i, o, s, c) {
            var u = n(t);
            (i || "").split(/\s/).forEach(function (n) {
                e(t, n, o, s).forEach(function (n) {
                    delete m[u][n.i], "removeEventListener" in t && t.removeEventListener(a(n.e), n.proxy, r(n, c))
                })
            })
        }

        function u(n, e) {
            return (e || !n.isDefaultPrevented) && (e || (e = n), t.each(I, function (t, i) {
                var o = e[t];
                n[t] = function () {
                    return this[i] = y, o && o.apply(e, arguments)
                }, n[i] = C
            }), (e.defaultPrevented !== l ? e.defaultPrevented : "returnValue" in e ? e.returnValue === !1 : e.getPreventDefault && e.getPreventDefault()) && (n.isDefaultPrevented = y)), n
        }

        function h(t) {
            var n, e = {originalEvent: t};
            for (n in t)B.test(n) || t[n] === l || (e[n] = t[n]);
            return u(e, t)
        }

        var l, f = 1, p = Array.prototype.slice, g = t.isFunction, d = function (t) {
            return "string" == typeof t
        }, m = {}, b = {}, v = "onfocusin" in window, A = {
            focus: "focusin",
            blur: "focusout"
        }, E = {mouseenter: "mouseover", mouseleave: "mouseout"};
        b.click = b.mousedown = b.mouseup = b.mousemove = "MouseEvents", t.event = {
            add: s,
            remove: c
        }, t.proxy = function (e, i) {
            var o = 2 in arguments && p.call(arguments, 2);
            if (g(e)) {
                var r = function () {
                    return e.apply(i, o ? o.concat(p.call(arguments)) : arguments)
                };
                return r._zid = n(e), r
            }
            if (d(i))return o ? (o.unshift(e[i], e), t.proxy.apply(null, o)) : t.proxy(e[i], e);
            throw new TypeError("expected function")
        }, t.fn.bind = function (t, n, e) {
            return this.on(t, n, e)
        }, t.fn.unbind = function (t, n) {
            return this.off(t, n)
        }, t.fn.one = function (t, n, e, i) {
            return this.on(t, n, e, i, 1)
        };
        var y = function () {
            return !0
        }, C = function () {
            return !1
        }, B = /^([A-Z]|returnValue$|layer[XY]$)/, I = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        t.fn.delegate = function (t, n, e) {
            return this.on(n, t, e)
        }, t.fn.undelegate = function (t, n, e) {
            return this.off(n, t, e)
        }, t.fn.live = function (n, e) {
            return t(document.body).delegate(this.selector, n, e), this
        }, t.fn.die = function (n, e) {
            return t(document.body).undelegate(this.selector, n, e), this
        }, t.fn.on = function (n, e, i, o, r) {
            var a, u, f = this;
            return n && !d(n) ? (t.each(n, function (t, n) {
                    f.on(t, e, i, n, r)
                }), f) : (d(e) || g(o) || o === !1 || (o = i, i = e, e = l), (g(i) || i === !1) && (o = i, i = l), o === !1 && (o = C), f.each(function (l, f) {
                    r && (a = function (t) {
                        return c(f, t.type, o), o.apply(this, arguments)
                    }), e && (u = function (n) {
                        var i, r = t(n.target).closest(e, f).get(0);
                        return r && r !== f ? (i = t.extend(h(n), {
                                currentTarget: r,
                                liveFired: f
                            }), (a || o).apply(r, [i].concat(p.call(arguments, 1)))) : void 0;
                    }), s(f, n, o, i, e, u || a)
                }))
        }, t.fn.off = function (n, e, i) {
            var o = this;
            return n && !d(n) ? (t.each(n, function (t, n) {
                    o.off(t, e, n)
                }), o) : (d(e) || g(i) || i === !1 || (i = e, e = l), i === !1 && (i = C), o.each(function () {
                    c(this, n, i, e)
                }))
        }, t.fn.trigger = function (n, e) {
            return n = d(n) || t.isPlainObject(n) ? t.Event(n) : u(n), n._args = e, this.each(function () {
                "dispatchEvent" in this ? this.dispatchEvent(n) : t(this).triggerHandler(n, e)
            })
        }, t.fn.triggerHandler = function (n, i) {
            var o, r;
            return this.each(function (a, s) {
                o = h(d(n) ? t.Event(n) : n), o._args = i, o.target = s, t.each(e(s, n.type || n), function (t, n) {
                    return r = n.proxy(o), !o.isImmediatePropagationStopped() && void 0
                })
            }), r
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (n) {
            t.fn[n] = function (t) {
                return t ? this.bind(n, t) : this.trigger(n)
            }
        }), ["focus", "blur"].forEach(function (n) {
            t.fn[n] = function (t) {
                return t ? this.bind(n, t) : this.each(function () {
                        try {
                            this[n]()
                        } catch (t) {
                        }
                    }), this
            }
        }), t.Event = function (t, n) {
            d(t) || (n = t, t = n.type);
            var e = document.createEvent(b[t] || "Events"), i = !0;
            if (n)for (var o in n)"bubbles" == o ? i = !!n[o] : e[o] = n[o];
            return e.initEvent(t, i, !0), u(e)
        }
    }(e), function (t) {
        function n(n, e, i) {
            var o = t.Event(e);
            return t(n).trigger(o, i), !o.isDefaultPrevented()
        }

        function e(t, e, i, o) {
            return t.global ? n(e || v, i, o) : void 0
        }

        function i(n) {
            n.global && 0 === t.active++ && e(n, null, "ajaxStart")
        }

        function o(n) {
            n.global && !--t.active && e(n, null, "ajaxStop")
        }

        function r(t, n) {
            var i = n.context;
            return n.beforeSend.call(i, t, n) !== !1 && e(n, i, "ajaxBeforeSend", [t, n]) !== !1 && void e(n, i, "ajaxSend", [t, n])
        }

        function a(t, n, i, o) {
            var r = i.context, a = "success";
            i.success.call(r, t, a, n), o && o.resolveWith(r, [t, a, n]), e(i, r, "ajaxSuccess", [n, i, t]), c(a, n, i)
        }

        function s(t, n, i, o, r) {
            var a = o.context;
            o.error.call(a, i, n, t), r && r.rejectWith(a, [i, n, t]), e(o, a, "ajaxError", [i, o, t || n]), c(n, i, o)
        }

        function c(t, n, i) {
            var r = i.context;
            i.complete.call(r, n, t), e(i, r, "ajaxComplete", [n, i]), o(i)
        }

        function u() {
        }

        function h(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == B ? "html" : t == C ? "json" : E.test(t) ? "script" : y.test(t) && "xml") || "text"
        }

        function l(t, n) {
            return "" == n ? t : (t + "&" + n).replace(/[&?]{1,2}/, "?")
        }

        function f(n) {
            n.processData && n.data && "string" != t.type(n.data) && (n.data = t.param(n.data, n.traditional)), !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = l(n.url, n.data), n.data = void 0)
        }

        function p(n, e, i, o) {
            return t.isFunction(e) && (o = i, i = e, e = void 0), t.isFunction(i) || (o = i, i = void 0), {
                url: n,
                data: e,
                success: i,
                dataType: o
            }
        }

        function g(n, e, i, o) {
            var r, a = t.isArray(e), s = t.isPlainObject(e);
            t.each(e, function (e, c) {
                r = t.type(c), o && (e = i ? o : o + "[" + (s || "object" == r || "array" == r ? e : "") + "]"), !o && a ? n.add(c.name, c.value) : "array" == r || !i && "object" == r ? g(n, c, i, e) : n.add(e, c)
            })
        }

        var d, m, b = 0, v = window.document, A = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, E = /^(?:text|application)\/javascript/i, y = /^(?:text|application)\/xml/i, C = "application/json", B = "text/html", I = /^\s*$/;
        t.active = 0, t.ajaxJSONP = function (n, e) {
            if (!("type" in n))return t.ajax(n);
            var i, o, c = n.jsonpCallback, u = (t.isFunction(c) ? c() : c) || "jsonp" + ++b, h = v.createElement("script"), l = window[u], f = function (n) {
                t(h).triggerHandler("error", n || "abort")
            }, p = {abort: f};
            return e && e.promise(p), t(h).on("load error", function (r, c) {
                clearTimeout(o), t(h).off().remove(), "error" != r.type && i ? a(i[0], p, n, e) : s(null, c || "error", p, n, e), window[u] = l, i && t.isFunction(l) && l(i[0]), l = i = void 0
            }), r(p, n) === !1 ? (f("abort"), p) : (window[u] = function () {
                    i = arguments
                }, h.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u), v.head.appendChild(h), n.timeout > 0 && (o = setTimeout(function () {
                    f("timeout")
                }, n.timeout)), p)
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: u,
            success: u,
            error: u,
            complete: u,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: C,
                xml: "application/xml, text/xml",
                html: B,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function (n) {
            var e = t.extend({}, n || {}), o = t.Deferred && t.Deferred();
            for (d in t.ajaxSettings)void 0 === e[d] && (e[d] = t.ajaxSettings[d]);
            i(e), e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host), e.url || (e.url = window.location.toString()), f(e);
            var c = e.dataType, p = /\?.+=\?/.test(e.url);
            if (p && (c = "jsonp"), e.cache !== !1 && (n && n.cache === !0 || "script" != c && "jsonp" != c) || (e.url = l(e.url, "_=" + Date.now())), "jsonp" == c)return p || (e.url = l(e.url, e.jsonp ? e.jsonp + "=?" : e.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(e, o);
            var g, b = e.accepts[c], v = {}, A = function (t, n) {
                v[t.toLowerCase()] = [t, n]
            }, E = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol, y = e.xhr(), C = y.setRequestHeader;
            if (o && o.promise(y), e.crossDomain || A("X-Requested-With", "XMLHttpRequest"), A("Accept", b || "*/*"), (b = e.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), y.overrideMimeType && y.overrideMimeType(b)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && A("Content-Type", e.contentType || "application/x-www-form-urlencoded"), e.headers)for (m in e.headers)A(m, e.headers[m]);
            if (y.setRequestHeader = A, y.onreadystatechange = function () {
                    if (4 == y.readyState) {
                        y.onreadystatechange = u, clearTimeout(g);
                        var n, i = !1;
                        if (y.status >= 200 && y.status < 300 || 304 == y.status || 0 == y.status && "file:" == E) {
                            c = c || h(e.mimeType || y.getResponseHeader("content-type")), n = y.responseText;
                            try {
                                "script" == c ? (0, eval)(n) : "xml" == c ? n = y.responseXML : "json" == c && (n = I.test(n) ? null : t.parseJSON(n))
                            } catch (t) {
                                i = t
                            }
                            i ? s(i, "parsererror", y, e, o) : a(n, y, e, o)
                        } else s(y.statusText || null, y.status ? "error" : "abort", y, e, o)
                    }
                }, r(y, e) === !1)return y.abort(), s(null, "abort", y, e, o), y;
            if (e.xhrFields)for (m in e.xhrFields)y[m] = e.xhrFields[m];
            var B = !("async" in e) || e.async;
            y.open(e.type, e.url, B, e.username, e.password);
            for (m in v)C.apply(y, v[m]);
            return e.timeout > 0 && (g = setTimeout(function () {
                y.onreadystatechange = u, y.abort(), s(null, "timeout", y, e, o)
            }, e.timeout)), y.send(e.data ? e.data : null), y
        }, t.get = function () {
            return t.ajax(p.apply(null, arguments))
        }, t.post = function () {
            var n = p.apply(null, arguments);
            return n.type = "POST", t.ajax(n)
        }, t.getJSON = function () {
            var n = p.apply(null, arguments);
            return n.dataType = "json", t.ajax(n)
        }, t.fn.load = function (n, e, i) {
            if (!this.length)return this;
            var o, r = this, a = n.split(/\s/), s = p(n, e, i), c = s.success;
            return a.length > 1 && (s.url = a[0], o = a[1]), s.success = function (n) {
                r.html(o ? t("<div>").html(n.replace(A, "")).find(o) : n), c && c.apply(r, arguments)
            }, t.ajax(s), this
        };
        var Q = encodeURIComponent;
        t.param = function (t, n) {
            var e = [];
            return e.add = function (t, n) {
                this.push(Q(t) + "=" + Q(n))
            }, g(e, t, n), e.join("&").replace(/%20/g, "+")
        }
    }(e), function (t) {
        t.fn.serializeArray = function () {
            var n, e = [];
            return t([].slice.call(this.get(0).elements)).each(function () {
                n = t(this);
                var i = n.attr("type");
                "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                    name: n.attr("name"),
                    value: n.val()
                })
            }), e
        }, t.fn.serialize = function () {
            var t = [];
            return this.serializeArray().forEach(function (n) {
                t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
            }), t.join("&")
        }, t.fn.submit = function (n) {
            if (n) this.bind("submit", n); else if (this.length) {
                var e = t.Event("submit");
                this.eq(0).trigger(e), e.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(e), function (t) {
        "__proto__" in {} || t.extend(t.zepto, {
            Z: function (n, e) {
                return n = n || [], t.extend(n, t.fn), n.selector = e || "", n.__Z = !0, n
            }, isZ: function (n) {
                return "array" === t.type(n) && "__Z" in n
            }
        });
        try {
            getComputedStyle(void 0)
        } catch (t) {
            var n = getComputedStyle;
            window.getComputedStyle = function (t) {
                try {
                    return n(t)
                } catch (t) {
                    return null
                }
            }
        }
    }(e)
}, function (t, n, e) {
    (function (n) {
        var i = e(5), o = n.Class.extend({
            initialize: function (t, n) {
                this.preloadMax = 0, this.preloadId = 0, this.angleStep = 15, this.angleMax = this.angleStep * (i.page.length - 1) / 180 * Math.PI, this.geo = new THREE.PlaneGeometry(t, n), this.geo.translate(-t / 2, 0, 0), this.initBasic(), this.initPlane()
            }, checkPreload: function () {
                this.trigger("preloadProgress", Math.floor(this.preloadId / this.preloadMax * 100)), this.preloadId >= this.preloadMax
                //&& this.trigger("preloadComplete")
            }, initBasic: function () {
                this.basic = {};
                for (var t = 0, n = i.basic.length; t < n; t++) {
                    var e = i.basic[t];
                    this.basic[e.id] = new THREE.MeshPhongMaterial({
                        map: (new THREE.TextureLoader).load(i.root + e.img),
                        alphaTest: .5,
                        transparent: !0
                    })
                }
            }, initPlane: function () {
                var t = this, n = new THREE.Group;
                this.planes = [];
                for (var e = 0, o = i.page.length; e < o; e++) {

                    var r = i.page[e], a = null, s = null;

                    r.basic && (a = this.basic[r.basic]), r.img && (this.preloadMax++, s = new THREE.MeshPhongMaterial({
                        map: (new THREE.TextureLoader).load(i.root + r.img, function () {
                            t.preloadId++, t.checkPreload()
                        }), alphaTest: .5, transparent: !0
                    }));
                    var c;
                    if (a) {
                        if (c = new THREE.Mesh(this.geo, a), c.rotation.set(0, -this.angleStep * e / 180 * Math.PI, 0), s) {
                            var u = new THREE.Mesh(this.geo, s);
                            c.add(u)
                        }
                    } else s && (c = new THREE.Mesh(this.geo, s), c.rotation.set(0, -this.angleStep * e / 180 * Math.PI, 0));
                    c.name = r.img ? r.img : r.basic;
                    n.add(c), this.planes.push(c)
                }
                this.el = n
            }, checkPlane: function () {
                for (var t = this.planes.length, n = 0; n < t; n++) {
                    var e = this.planes[n];
                    Math.abs(-e.rotation.y - this.el.rotation.y) < .7 * Math.PI ? e.parent || this.el.add(e) : e.parent && this.el.remove(e)
                }
            }
        });
        t.exports = o
    }).call(n, e(1))
}, function (t, n) {
    t.exports = {
        root: "images/page4/",
        basic: [{id: "b1", img: "1-0.png"}, {id: "b2", img: "4-0.png"}],
        page: [
            {basic: "b1"},
            {basic: "b2", img: "1.png"},
            {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"},
            {basic: "b2", img: "2.png"},
            {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"},
            {basic: "b2", img: "3.png"},
            {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"},
            {basic: "b2", img: "4.png"},
            {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"},
            {basic: "b2", img: "5.png"},
            {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"},
            {basic: "b2", img: "6.png"},
            {basic: "b1"}, {basic: "b1"}, {basic: "b1"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "7.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "8.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "9.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "10.png"},
            {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "11.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "12.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "13.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "14.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "15.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "16.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "17.png"},
            {basic: "b2"}, {basic: "b1"}, {basic: "b2"}, {basic: "b1"}, {basic: "b2"},
            {basic: "b1", img: "18.png"},
            {basic: "b1"}, {basic: "b1"}, {basic: "b2"}]
    }
}, function (t, n, e) {
    var i, o;
    /*!
     * VERSION: 0.1.0
     * DATE: 2016-7-7
     * GIT: https://github.com/shrekshrek/components
     * @author: Shrek.wang
     **/
    !function (e) {
        i = [n], o = function (t) {
            window.Gesturer = e(t)
        }.apply(n, i), !(void 0 !== o && (t.exports = o))
    }(function (t) {
        function n(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y)
        }

        function e(t, n) {
            return t.x * n.x + t.y * n.y
        }

        function i(t, i) {
            var o = n(t) * n(i);
            if (0 === o)return 0;
            var r = e(t, i) / o;
            return r > 1 && (r = 1), Math.acos(r)
        }

        function o(t, n) {
            return t.x * n.y - n.x * t.y
        }

        function r(t, n) {
            var e = i(t, n);
            return o(t, n) > 0 && (e *= -1), 180 * e / Math.PI
        }

        return t = function () {
            this.initialize.apply(this, arguments)
        }, t.prototype = {
            initialize: function (t) {
                this.el = t.el, this.preV = {
                    x: null,
                    y: null
                }, this.pinchStartLen = null, this.scale = 1, this.isDoubleTap = !1, this.onRotate = t.onRotate || function () {
                    }, this.onTouchStart = t.onTouchStart || function () {
                    }, this.onMultipointStart = t.onMultipointStart || function () {
                    }, this.onMultipointEnd = t.onMultipointEnd || function () {
                    }, this.onPinch = t.onPinch || function () {
                    }, this.onSwipe = t.onSwipe || function () {
                    }, this.onTap = t.onTap || function () {
                    }, this.onDoubleTap = t.onDoubleTap || function () {
                    }, this.onLongTap = t.onLongTap || function () {
                    }, this.onSingleTap = t.onSingleTap || function () {
                    }, this.onPressMove = t.onPressMove || function () {
                    }, this.onTouchMove = t.onTouchMove || function () {
                    }, this.onTouchEnd = t.onTouchEnd || function () {
                    }, this.onTouchCancel = t.onTouchCancel || function () {
                    }, this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.touchTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                    x: null,
                    y: null
                }, this._touchStart = this._touchStart.bind(this), this._touchMove = this._touchMove.bind(this), this._touchEnd = this._touchEnd.bind(this), this._touchCancel = this._touchCancel.bind(this)
                $('#main').on('click', this._click);
            }, on: function () {
                this.el.addEventListener("touchstart", this._touchStart, !1), this.el.addEventListener("touchmove", this._touchMove, !1), this.el.addEventListener("touchend", this._touchEnd, !1), this.el.addEventListener("touchcancel", this._touchCancel, !1)
            }, off: function () {
                this.el.removeEventListener("touchstart", this._touchStart, !1), this.el.removeEventListener("touchmove", this._touchMove, !1), this.el.removeEventListener("touchend", this._touchEnd, !1), this.el.removeEventListener("touchcancel", this._touchCancel, !1)
            }, destroy: function () {
            }, _click: function (t) {
                if (baList.indexOf("18.png") < 2 && baList.indexOf("18.png") !== -1) {
                    f = 1, $(".f").show(), $(".f").animate({
                        top: '115px',
                        left: '15px',
                        width: '45px',
                        height: '40px'
                    }, 1000, function () {
                        f && y && d && ff && l && !submit && $("#success").css({display: "block"});
                    });
                }
                if (baList.indexOf("9.png") < 2 && baList.indexOf("9.png") !== -1) {
                    y = 1, $(".y").show(), $(".y").animate({
                        top: '190px',
                        left: '15px',
                        width: '45px',
                        height: '40px'
                    }, 1000, function () {
                        f && y && d && ff && l && !submit && $("#success").css({display: "block"});
                    });
                }
                if (baList.indexOf("4.png") < 2 && baList.indexOf("4.png") !== -1) {
                    d = 1, $(".d").show(), $(".d").animate({
                        top: '261px',
                        left: '22px',
                        width: '45px',
                        height: '45px'
                    }, 1000, function () {
                        f && y && d && ff && l && !submit && $("#success").css({display: "block"});
                    });
                }
                if (baList.indexOf("7.png") < 2 && baList.indexOf("7.png") !== -1) {
                    ff = 1, $(".ff").show(), $(".ff").animate({
                        top: '338px',
                        left: '20px',
                        width: '45px',
                        height: '40px'
                    }, 1000, function () {
                        f && y && d && ff && l && !submit && $("#success").css({display: "block"});
                    });
                }
                if (baList.indexOf("16.png") < 2 && baList.indexOf("16.png") !== -1) {
                    l = 1, $(".l").show(), $(".l").animate({
                        top: '415px',
                        left: '19px',
                        width: '45px',
                        height: '40px'
                    }, 1000, function () {
                        f && y && d && ff && l && !submit && $("#success").css({display: "block"});
                    });
                }
            }, _touchStart: function (t) {
                if (t.touches) {
                    this.now = Date.now(), this.x1 = t.touches[0].pageX, this.y1 = t.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.onTouchStart(t), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                    var e = this.preV, i = t.touches.length;
                    if (i > 1) {
                        this._cancelLongTap();
                        var o = {x: t.touches[1].pageX - this.x1, y: t.touches[1].pageY - this.y1};
                        e.x = o.x, e.y = o.y, this.pinchStartLen = this.pinchLen = n(e), this.onMultipointStart(t)
                    }
                    this.longTapTimeout = setTimeout(function () {
                        this.onLongTap(t)
                    }.bind(this), 750)
                }
            }, _touchMove: function (t) {
                if (t.touches) {
                    var e = this.preV, i = t.touches.length, o = t.touches[0].pageX, a = t.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var s = {x: t.touches[1].pageX - o, y: t.touches[1].pageY - a};
                        if (null !== e.x) {
                            if (this.pinchStartLen > 0) {
                                var c = n(s);
                                t.scale = c / this.pinchStartLen, t.deltaLen = c - this.pinchLen, this.pinchLen = c, this.onPinch(t)
                            }
                            t.angle = r(s, e), this.onRotate(t)
                        }
                        e.x = s.x, e.y = s.y
                    } else null !== this.x2 ? (t.deltaX = o - this.x2, t.deltaY = a - this.y2) : (t.deltaX = 0, t.deltaY = 0), this.onPressMove(t);
                    this.onTouchMove(t), this._cancelLongTap(), this.x2 = o, this.y2 = a, t.touches.length > 1 && (this._cancelLongTap(), t.preventDefault())
                }
            }, _touchEnd: function (t) {
                if (t.changedTouches) {
                    this._cancelLongTap();
                    var n = this;
                    t.touches.length < 2 && this.onMultipointEnd(t), this.onTouchEnd(t), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.preV.y - this.y2) > 30 ? (t.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function () {
                            n.onSwipe(t)
                        }, 0)) : this.tapTimeout = setTimeout(function () {
                            n.onTap(t), n.isDoubleTap ? (n.onDoubleTap(t), clearTimeout(n.touchTimeout), n.isDoubleTap = !1) : n.touchTimeout = setTimeout(function () {
                                    n.onSingleTap(t)
                                }, 250)
                        }, 0), this.preV.x = 0, this.preV.y = 0, this.scale = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }, _touchCancel: function (t) {
                clearTimeout(this.touchTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout), this.onTouchCancel(t)
            }, _cancelLongTap: function () {
                clearTimeout(this.longTapTimeout)
            }, _swipeDirection: function (t, n, e, i) {
                return Math.abs(t - n) >= Math.abs(e - i) ? t - n > 0 ? "Left" : "Right" : e - i > 0 ? "Up" : "Down"
            }
        }, t
    })
}, function (t, n) {
    t.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjgwZDlmN2YtM2E1Zi00NmI4LWEzMjgtN2MwMTdjMWMxOWYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM3QTUzQjM1Q0M0RjExRTY4NkRDOUQ0NjRGM0YzMUVFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM3QTUzQjM0Q0M0RjExRTY4NkRDOUQ0NjRGM0YzMUVFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MWRiZGJiNjItODQ0Ny00YWVmLTg1NmUtM2VmYTY4NmE2OWVhIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YjcxNWI0NmYtMTQ3OS0xMTdhLWJkMDgtYmM2ODkzNThkZGY2Ii8+IDwv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"
}]);