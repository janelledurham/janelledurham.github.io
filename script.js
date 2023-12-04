/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Mi = u(() => {
    window.tram = (function (e) {
      function t(l, E) {
        var g = new X.Bare();
        return g.init(l, E);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (E) {
          return "-" + E.toLowerCase();
        });
      }
      function n(l) {
        var E = parseInt(l.slice(1), 16),
          g = (E >> 16) & 255,
          T = (E >> 8) & 255,
          h = 255 & E;
        return [g, T, h];
      }
      function a(l, E, g) {
        return (
          "#" + ((1 << 24) | (l << 16) | (E << 8) | g).toString(16).slice(1)
        );
      }
      function i() {}
      function o(l, E) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E);
      }
      function s(l, E, g) {
        f("Units do not match [" + l + "]: " + E + ", " + g);
      }
      function c(l, E, g) {
        if ((E !== void 0 && (g = E), l === void 0)) return g;
        var T = g;
        return (
          xi.test(l) || !tn.test(l)
            ? (T = parseInt(l, 10))
            : tn.test(l) && (T = 1e3 * parseFloat(l)),
          0 > T && (T = 0),
          T === T ? T : g
        );
      }
      function f(l) {
        _e.debug && window && window.console.warn(l);
      }
      function p(l) {
        for (var E = -1, g = l ? l.length : 0, T = []; ++E < g; ) {
          var h = l[E];
          h && T.push(h);
        }
        return T;
      }
      var d = (function (l, E, g) {
          function T(Q) {
            return typeof Q == "object";
          }
          function h(Q) {
            return typeof Q == "function";
          }
          function m() {}
          function W(Q, fe) {
            function U() {
              var Ce = new ne();
              return h(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function ne() {}
            fe === g && ((fe = Q), (Q = Object)), (U.Bare = ne);
            var ie,
              ye = (m[l] = Q[l]),
              Ze = (ne[l] = U[l] = new m());
            return (
              (Ze.constructor = U),
              (U.mixin = function (Ce) {
                return (ne[l] = U[l] = W(U, Ce)[l]), U;
              }),
              (U.open = function (Ce) {
                if (
                  ((ie = {}),
                  h(Ce) ? (ie = Ce.call(U, Ze, ye, U, Q)) : T(Ce) && (ie = Ce),
                  T(ie))
                )
                  for (var yr in ie) E.call(ie, yr) && (Ze[yr] = ie[yr]);
                return h(Ze.init) || (Ze.init = Q), U;
              }),
              U.open(fe)
            );
          }
          return W;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (l, E, g, T) {
              var h = (l /= T) * l,
                m = h * l;
              return (
                E +
                g * (-2.75 * m * h + 11 * h * h + -15.5 * m + 8 * h + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, E, g, T) {
              var h = (l /= T) * l,
                m = h * l;
              return E + g * (-1 * m * h + 3 * h * h + -3 * m + 2 * h);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, E, g, T) {
              var h = (l /= T) * l,
                m = h * l;
              return (
                E +
                g * (0.3 * m * h + -1.6 * h * h + 2.2 * m + -1.8 * h + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, E, g, T) {
              var h = (l /= T) * l,
                m = h * l;
              return E + g * (2 * m * h + -5 * h * h + 2 * m + 2 * h);
            },
          ],
          linear: [
            "linear",
            function (l, E, g, T) {
              return (g * l) / T + E;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, E, g, T) {
              return g * (l /= T) * l + E;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, E, g, T) {
              return -g * (l /= T) * (l - 2) + E;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, E, g, T) {
              return (l /= T / 2) < 1
                ? (g / 2) * l * l + E
                : (-g / 2) * (--l * (l - 2) - 1) + E;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, E, g, T) {
              return g * (l /= T) * l * l + E;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, E, g, T) {
              return g * ((l = l / T - 1) * l * l + 1) + E;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, E, g, T) {
              return (l /= T / 2) < 1
                ? (g / 2) * l * l * l + E
                : (g / 2) * ((l -= 2) * l * l + 2) + E;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, E, g, T) {
              return g * (l /= T) * l * l * l + E;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, E, g, T) {
              return -g * ((l = l / T - 1) * l * l * l - 1) + E;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, E, g, T) {
              return (l /= T / 2) < 1
                ? (g / 2) * l * l * l * l + E
                : (-g / 2) * ((l -= 2) * l * l * l - 2) + E;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, E, g, T) {
              return g * (l /= T) * l * l * l * l + E;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, E, g, T) {
              return g * ((l = l / T - 1) * l * l * l * l + 1) + E;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, E, g, T) {
              return (l /= T / 2) < 1
                ? (g / 2) * l * l * l * l * l + E
                : (g / 2) * ((l -= 2) * l * l * l * l + 2) + E;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, E, g, T) {
              return -g * Math.cos((l / T) * (Math.PI / 2)) + g + E;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, E, g, T) {
              return g * Math.sin((l / T) * (Math.PI / 2)) + E;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, E, g, T) {
              return (-g / 2) * (Math.cos((Math.PI * l) / T) - 1) + E;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, E, g, T) {
              return l === 0 ? E : g * Math.pow(2, 10 * (l / T - 1)) + E;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, E, g, T) {
              return l === T
                ? E + g
                : g * (-Math.pow(2, (-10 * l) / T) + 1) + E;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, E, g, T) {
              return l === 0
                ? E
                : l === T
                ? E + g
                : (l /= T / 2) < 1
                ? (g / 2) * Math.pow(2, 10 * (l - 1)) + E
                : (g / 2) * (-Math.pow(2, -10 * --l) + 2) + E;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, E, g, T) {
              return -g * (Math.sqrt(1 - (l /= T) * l) - 1) + E;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, E, g, T) {
              return g * Math.sqrt(1 - (l = l / T - 1) * l) + E;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, E, g, T) {
              return (l /= T / 2) < 1
                ? (-g / 2) * (Math.sqrt(1 - l * l) - 1) + E
                : (g / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + E;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, E, g, T, h) {
              return (
                h === void 0 && (h = 1.70158),
                g * (l /= T) * l * ((h + 1) * l - h) + E
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, E, g, T, h) {
              return (
                h === void 0 && (h = 1.70158),
                g * ((l = l / T - 1) * l * ((h + 1) * l + h) + 1) + E
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, E, g, T, h) {
              return (
                h === void 0 && (h = 1.70158),
                (l /= T / 2) < 1
                  ? (g / 2) * l * l * (((h *= 1.525) + 1) * l - h) + E
                  : (g / 2) *
                      ((l -= 2) * l * (((h *= 1.525) + 1) * l + h) + 2) +
                    E
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        O = document,
        S = window,
        N = "bkwld-tram",
        b = /[\-\.0-9]/g,
        R = /[A-Z]/,
        y = "number",
        q = /^(rgb|#)/,
        w = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        D = /(deg|rad|turn)$/,
        j = "unitless",
        H = /(all|none) 0s ease 0s/,
        re = /^(width|height)$/,
        $ = " ",
        x = O.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        M = function (l) {
          if (l in x.style) return { dom: l, css: l };
          var E,
            g,
            T = "",
            h = l.split("-");
          for (E = 0; E < h.length; E++)
            T += h[E].charAt(0).toUpperCase() + h[E].slice(1);
          for (E = 0; E < _.length; E++)
            if (((g = _[E] + T), g in x.style))
              return { dom: g, css: L[E] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: M("transform"),
          transition: M("transition"),
          backface: M("backface-visibility"),
          timing: M("transition-timing-function"),
        });
      if (G.transition) {
        var K = G.timing.dom;
        if (((x.style[K] = v["ease-in-back"][0]), !x.style[K]))
          for (var Z in I) v[Z][0] = I[Z];
      }
      var P = (t.frame = (function () {
          var l =
            S.requestAnimationFrame ||
            S.webkitRequestAnimationFrame ||
            S.mozRequestAnimationFrame ||
            S.oRequestAnimationFrame ||
            S.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(S)
            : function (E) {
                S.setTimeout(E, 16);
              };
        })()),
        V = (t.now = (function () {
          var l = S.performance,
            E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return E && G.bind
            ? E.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        B = d(function (l) {
          function E(k, se) {
            var Ee = p(("" + k).split($)),
              ue = Ee[0];
            se = se || {};
            var Ne = _r[ue];
            if (!Ne) return f("Unsupported property: " + ue);
            if (!se.weak || !this.props[ue]) {
              var Ve = Ne[0],
                xe = this.props[ue];
              return (
                xe || (xe = this.props[ue] = new Ve.Bare()),
                xe.init(this.$el, Ee, Ne, se),
                xe
              );
            }
          }
          function g(k, se, Ee) {
            if (k) {
              var ue = typeof k;
              if (
                (se ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ue == "number" && se)
              )
                return (
                  (this.timer = new pe({
                    duration: k,
                    context: this,
                    complete: m,
                  })),
                  void (this.active = !0)
                );
              if (ue == "string" && se) {
                switch (k) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    W.call(this);
                    break;
                  case "redraw":
                    ne.call(this);
                    break;
                  default:
                    E.call(this, k, Ee && Ee[1]);
                }
                return m.call(this);
              }
              if (ue == "function") return void k.call(this, this);
              if (ue == "object") {
                var Ne = 0;
                Ze.call(
                  this,
                  k,
                  function (Ie, lI) {
                    Ie.span > Ne && (Ne = Ie.span), Ie.stop(), Ie.animate(lI);
                  },
                  function (Ie) {
                    "wait" in Ie && (Ne = c(Ie.wait, 0));
                  }
                ),
                  ye.call(this),
                  Ne > 0 &&
                    ((this.timer = new pe({ duration: Ne, context: this })),
                    (this.active = !0),
                    se && (this.timer.complete = m));
                var Ve = this,
                  xe = !1,
                  rn = {};
                P(function () {
                  Ze.call(Ve, k, function (Ie) {
                    Ie.active && ((xe = !0), (rn[Ie.name] = Ie.nextStyle));
                  }),
                    xe && Ve.$el.css(rn);
                });
              }
            }
          }
          function T(k) {
            (k = c(k, 0)),
              this.active
                ? this.queue.push({ options: k })
                : ((this.timer = new pe({
                    duration: k,
                    context: this,
                    complete: m,
                  })),
                  (this.active = !0));
          }
          function h(k) {
            return this.active
              ? (this.queue.push({ options: k, args: arguments }),
                void (this.timer.complete = m))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function m() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var k = this.queue.shift();
              g.call(this, k.options, !0, k.args);
            }
          }
          function W(k) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var se;
            typeof k == "string"
              ? ((se = {}), (se[k] = 1))
              : (se = typeof k == "object" && k != null ? k : this.props),
              Ze.call(this, se, Ce),
              ye.call(this);
          }
          function Q(k) {
            W.call(this, k), Ze.call(this, k, yr, uI);
          }
          function fe(k) {
            typeof k != "string" && (k = "block"), (this.el.style.display = k);
          }
          function U() {
            W.call(this), (this.el.style.display = "none");
          }
          function ne() {
            this.el.offsetHeight;
          }
          function ie() {
            W.call(this), e.removeData(this.el, N), (this.$el = this.el = null);
          }
          function ye() {
            var k,
              se,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (k in this.props)
              (se = this.props[k]), se.active && Ee.push(se.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[G.transition.dom] = Ee));
          }
          function Ze(k, se, Ee) {
            var ue,
              Ne,
              Ve,
              xe,
              rn = se !== Ce,
              Ie = {};
            for (ue in k)
              (Ve = k[ue]),
                ue in Qe
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[ue] = Ve))
                  : (R.test(ue) && (ue = r(ue)),
                    ue in _r
                      ? (Ie[ue] = Ve)
                      : (xe || (xe = {}), (xe[ue] = Ve)));
            for (ue in Ie) {
              if (((Ve = Ie[ue]), (Ne = this.props[ue]), !Ne)) {
                if (!rn) continue;
                Ne = E.call(this, ue);
              }
              se.call(this, Ne, Ve);
            }
            Ee && xe && Ee.call(this, xe);
          }
          function Ce(k) {
            k.stop();
          }
          function yr(k, se) {
            k.set(se);
          }
          function uI(k) {
            this.$el.css(k);
          }
          function Ue(k, se) {
            l[k] = function () {
              return this.children
                ? cI.call(this, se, arguments)
                : (this.el && se.apply(this, arguments), this);
            };
          }
          function cI(k, se) {
            var Ee,
              ue = this.children.length;
            for (Ee = 0; ue > Ee; Ee++) k.apply(this.children[Ee], se);
            return this;
          }
          (l.init = function (k) {
            if (
              ((this.$el = e(k)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              _e.keepInherited && !_e.fallback)
            ) {
              var se = hr(this.el, "transition");
              se && !H.test(se) && (this.upstream = se);
            }
            G.backface &&
              _e.hideBackface &&
              vt(this.el, G.backface.css, "hidden");
          }),
            Ue("add", E),
            Ue("start", g),
            Ue("wait", T),
            Ue("then", h),
            Ue("next", m),
            Ue("stop", W),
            Ue("set", Q),
            Ue("show", fe),
            Ue("hide", U),
            Ue("redraw", ne),
            Ue("destroy", ie);
        }),
        X = d(B, function (l) {
          function E(g, T) {
            var h = e.data(g, N) || e.data(g, N, new B.Bare());
            return h.el || h.init(g), T ? h.start(T) : h;
          }
          l.init = function (g, T) {
            var h = e(g);
            if (!h.length) return this;
            if (h.length === 1) return E(h[0], T);
            var m = [];
            return (
              h.each(function (W, Q) {
                m.push(E(Q, T));
              }),
              (this.children = m),
              this
            );
          };
        }),
        F = d(function (l) {
          function E() {
            var m = this.get();
            this.update("auto");
            var W = this.get();
            return this.update(m), W;
          }
          function g(m, W, Q) {
            return W !== void 0 && (Q = W), m in v ? m : Q;
          }
          function T(m) {
            var W = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(m);
            return (W ? a(W[1], W[2], W[3]) : m).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var h = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (m, W, Q, fe) {
            (this.$el = m), (this.el = m[0]);
            var U = W[0];
            Q[2] && (U = Q[2]),
              gr[U] && (U = gr[U]),
              (this.name = U),
              (this.type = Q[1]),
              (this.duration = c(W[1], this.duration, h.duration)),
              (this.ease = g(W[2], this.ease, h.ease)),
              (this.delay = c(W[3], this.delay, h.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = re.test(this.name)),
              (this.unit = fe.unit || this.unit || _e.defaultUnit),
              (this.angle = fe.angle || this.angle || _e.defaultAngle),
              _e.fallback || fe.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    $ +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? $ + v[this.ease][0] : "") +
                    (this.delay ? $ + this.delay + "ms" : "")));
          }),
            (l.set = function (m) {
              (m = this.convert(m, this.type)), this.update(m), this.redraw();
            }),
            (l.transition = function (m) {
              (this.active = !0),
                (m = this.convert(m, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  m == "auto" && (m = E.call(this))),
                (this.nextStyle = m);
            }),
            (l.fallback = function (m) {
              var W =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (m = this.convert(m, this.type)),
                this.auto &&
                  (W == "auto" && (W = this.convert(this.get(), this.type)),
                  m == "auto" && (m = E.call(this))),
                (this.tween = new z({
                  from: W,
                  to: m,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return hr(this.el, this.name);
            }),
            (l.update = function (m) {
              vt(this.el, this.name, m);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                vt(this.el, this.name, this.get()));
              var m = this.tween;
              m && m.context && m.destroy();
            }),
            (l.convert = function (m, W) {
              if (m == "auto" && this.auto) return m;
              var Q,
                fe = typeof m == "number",
                U = typeof m == "string";
              switch (W) {
                case y:
                  if (fe) return m;
                  if (U && m.replace(b, "") === "") return +m;
                  Q = "number(unitless)";
                  break;
                case q:
                  if (U) {
                    if (m === "" && this.original) return this.original;
                    if (W.test(m))
                      return m.charAt(0) == "#" && m.length == 7 ? m : T(m);
                  }
                  Q = "hex or rgb string";
                  break;
                case w:
                  if (fe) return m + this.unit;
                  if (U && W.test(m)) return m;
                  Q = "number(px) or string(unit)";
                  break;
                case C:
                  if (fe) return m + this.unit;
                  if (U && W.test(m)) return m;
                  Q = "number(px) or string(unit or %)";
                  break;
                case D:
                  if (fe) return m + this.angle;
                  if (U && W.test(m)) return m;
                  Q = "number(deg) or string(angle)";
                  break;
                case j:
                  if (fe || (U && C.test(m))) return m;
                  Q = "number(unitless) or string(unit or %)";
              }
              return o(Q, m), m;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Y = d(F, function (l, E) {
          l.init = function () {
            E.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), q));
          };
        }),
        ae = d(F, function (l, E) {
          (l.init = function () {
            E.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (g) {
              this.$el[this.name](g);
            });
        }),
        oe = d(F, function (l, E) {
          function g(T, h) {
            var m, W, Q, fe, U;
            for (m in T)
              (fe = Qe[m]),
                (Q = fe[0]),
                (W = fe[1] || m),
                (U = this.convert(T[m], Q)),
                h.call(this, W, U, Q);
          }
          (l.init = function () {
            E.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Qe.perspective &&
                  _e.perspective &&
                  ((this.current.perspective = _e.perspective),
                  vt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (T) {
              g.call(this, T, function (h, m) {
                this.current[h] = m;
              }),
                vt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (T) {
              var h = this.values(T);
              this.tween = new Gt({
                current: this.current,
                values: h,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var m,
                W = {};
              for (m in this.current) W[m] = m in h ? h[m] : this.current[m];
              (this.active = !0), (this.nextStyle = this.style(W));
            }),
            (l.fallback = function (T) {
              var h = this.values(T);
              this.tween = new Gt({
                current: this.current,
                values: h,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              vt(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (T) {
              var h,
                m = "";
              for (h in T) m += h + "(" + T[h] + ") ";
              return m;
            }),
            (l.values = function (T) {
              var h,
                m = {};
              return (
                g.call(this, T, function (W, Q, fe) {
                  (m[W] = Q),
                    this.current[W] === void 0 &&
                      ((h = 0),
                      ~W.indexOf("scale") && (h = 1),
                      (this.current[W] = this.convert(h, fe)));
                }),
                m
              );
            });
        }),
        z = d(function (l) {
          function E(U) {
            Q.push(U) === 1 && P(g);
          }
          function g() {
            var U,
              ne,
              ie,
              ye = Q.length;
            if (ye)
              for (P(g), ne = V(), U = ye; U--; )
                (ie = Q[U]), ie && ie.render(ne);
          }
          function T(U) {
            var ne,
              ie = e.inArray(U, Q);
            ie >= 0 &&
              ((ne = Q.slice(ie + 1)),
              (Q.length = ie),
              ne.length && (Q = Q.concat(ne)));
          }
          function h(U) {
            return Math.round(U * fe) / fe;
          }
          function m(U, ne, ie) {
            return a(
              U[0] + ie * (ne[0] - U[0]),
              U[1] + ie * (ne[1] - U[1]),
              U[2] + ie * (ne[2] - U[2])
            );
          }
          var W = { ease: v.ease[1], from: 0, to: 1 };
          (l.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var ne = U.ease || W.ease;
            v[ne] && (ne = v[ne][1]),
              typeof ne != "function" && (ne = W.ease),
              (this.ease = ne),
              (this.update = U.update || i),
              (this.complete = U.complete || i),
              (this.context = U.context || this),
              (this.name = U.name);
            var ie = U.from,
              ye = U.to;
            ie === void 0 && (ie = W.from),
              ye === void 0 && (ye = W.to),
              (this.unit = U.unit || ""),
              typeof ie == "number" && typeof ye == "number"
                ? ((this.begin = ie), (this.change = ye - ie))
                : this.format(ye, ie),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              U.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), E(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), T(this));
            }),
            (l.render = function (U) {
              var ne,
                ie = U - this.start;
              if (this.delay) {
                if (ie <= this.delay) return;
                ie -= this.delay;
              }
              if (ie < this.duration) {
                var ye = this.ease(ie, 0, 1, this.duration);
                return (
                  (ne = this.startRGB
                    ? m(this.startRGB, this.endRGB, ye)
                    : h(this.begin + ye * this.change)),
                  (this.value = ne + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ne = this.endHex || this.begin + this.change),
                (this.value = ne + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (U, ne) {
              if (((ne += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ne)),
                  (this.endRGB = n(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ie = ne.replace(b, ""),
                  ye = U.replace(b, "");
                ie !== ye && s("tween", ne, U), (this.unit = ie);
              }
              (ne = parseFloat(ne)),
                (U = parseFloat(U)),
                (this.begin = this.value = ne),
                (this.change = U - ne);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var Q = [],
            fe = 1e3;
        }),
        pe = d(z, function (l) {
          (l.init = function (E) {
            (this.duration = E.duration || 0),
              (this.complete = E.complete || i),
              (this.context = E.context),
              this.play();
          }),
            (l.render = function (E) {
              var g = E - this.start;
              g < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Gt = d(z, function (l, E) {
          (l.init = function (g) {
            (this.context = g.context),
              (this.update = g.update),
              (this.tweens = []),
              (this.current = g.current);
            var T, h;
            for (T in g.values)
              (h = g.values[T]),
                this.current[T] !== h &&
                  this.tweens.push(
                    new z({
                      name: T,
                      from: this.current[T],
                      to: h,
                      duration: g.duration,
                      delay: g.delay,
                      ease: g.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (g) {
              var T,
                h,
                m = this.tweens.length,
                W = !1;
              for (T = m; T--; )
                (h = this.tweens[T]),
                  h.context &&
                    (h.render(g), (this.current[h.name] = h.value), (W = !0));
              return W
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((E.destroy.call(this), this.tweens)) {
                var g,
                  T = this.tweens.length;
                for (g = T; g--; ) this.tweens[g].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        _e = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (_e.fallback = !0);
        _e.agentTests.push("(" + l + ")");
        var E = new RegExp(_e.agentTests.join("|"), "i");
        _e.fallback = E.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new z(l);
        }),
        (t.delay = function (l, E, g) {
          return new pe({ complete: E, duration: l, context: g });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var vt = e.style,
        hr = e.css,
        gr = { transform: G.transform && G.transform.css },
        _r = {
          color: [Y, q],
          background: [Y, q, "background-color"],
          "outline-color": [Y, q],
          "border-color": [Y, q],
          "border-top-color": [Y, q],
          "border-right-color": [Y, q],
          "border-bottom-color": [Y, q],
          "border-left-color": [Y, q],
          "border-width": [F, w],
          "border-top-width": [F, w],
          "border-right-width": [F, w],
          "border-bottom-width": [F, w],
          "border-left-width": [F, w],
          "border-spacing": [F, w],
          "letter-spacing": [F, w],
          margin: [F, w],
          "margin-top": [F, w],
          "margin-right": [F, w],
          "margin-bottom": [F, w],
          "margin-left": [F, w],
          padding: [F, w],
          "padding-top": [F, w],
          "padding-right": [F, w],
          "padding-bottom": [F, w],
          "padding-left": [F, w],
          "outline-width": [F, w],
          opacity: [F, y],
          top: [F, C],
          right: [F, C],
          bottom: [F, C],
          left: [F, C],
          "font-size": [F, C],
          "text-indent": [F, C],
          "word-spacing": [F, C],
          width: [F, C],
          "min-width": [F, C],
          "max-width": [F, C],
          height: [F, C],
          "min-height": [F, C],
          "max-height": [F, C],
          "line-height": [F, j],
          "scroll-top": [ae, y, "scrollTop"],
          "scroll-left": [ae, y, "scrollLeft"],
        },
        Qe = {};
      G.transform &&
        ((_r.transform = [oe]),
        (Qe = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [D],
          rotateX: [D],
          rotateY: [D],
          scale: [y],
          scaleX: [y],
          scaleY: [y],
          skew: [D],
          skewX: [D],
          skewY: [D],
        })),
        G.transform &&
          G.backface &&
          ((Qe.z = [C, "translateZ"]),
          (Qe.rotateZ = [D]),
          (Qe.scaleZ = [y]),
          (Qe.perspective = [w]));
      var xi = /ms/,
        tn = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ys = u((yB, _s) => {
    var fI = window.$,
      dI = Mi() && fI.tram;
    _s.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        a = Function.prototype,
        i = r.push,
        o = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        p = r.forEach,
        d = r.map,
        v = r.reduce,
        I = r.reduceRight,
        O = r.filter,
        S = r.every,
        N = r.some,
        b = r.indexOf,
        R = r.lastIndexOf,
        y = Array.isArray,
        q = Object.keys,
        w = a.bind,
        C =
          (e.each =
          e.forEach =
            function (_, L, M) {
              if (_ == null) return _;
              if (p && _.forEach === p) _.forEach(L, M);
              else if (_.length === +_.length) {
                for (var G = 0, K = _.length; G < K; G++)
                  if (L.call(M, _[G], G, _) === t) return;
              } else
                for (var Z = e.keys(_), G = 0, K = Z.length; G < K; G++)
                  if (L.call(M, _[Z[G]], Z[G], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, L, M) {
          var G = [];
          return _ == null
            ? G
            : d && _.map === d
            ? _.map(L, M)
            : (C(_, function (K, Z, P) {
                G.push(L.call(M, K, Z, P));
              }),
              G);
        }),
        (e.find = e.detect =
          function (_, L, M) {
            var G;
            return (
              D(_, function (K, Z, P) {
                if (L.call(M, K, Z, P)) return (G = K), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (_, L, M) {
            var G = [];
            return _ == null
              ? G
              : O && _.filter === O
              ? _.filter(L, M)
              : (C(_, function (K, Z, P) {
                  L.call(M, K, Z, P) && G.push(K);
                }),
                G);
          });
      var D =
        (e.some =
        e.any =
          function (_, L, M) {
            L || (L = e.identity);
            var G = !1;
            return _ == null
              ? G
              : N && _.some === N
              ? _.some(L, M)
              : (C(_, function (K, Z, P) {
                  if (G || (G = L.call(M, K, Z, P))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (_, L) {
          return _ == null
            ? !1
            : b && _.indexOf === b
            ? _.indexOf(L) != -1
            : D(_, function (M) {
                return M === L;
              });
        }),
        (e.delay = function (_, L) {
          var M = o.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, M);
          }, L);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var L, M, G;
          return function () {
            L ||
              ((L = !0),
              (M = arguments),
              (G = this),
              dI.frame(function () {
                (L = !1), _.apply(G, M);
              }));
          };
        }),
        (e.debounce = function (_, L, M) {
          var G,
            K,
            Z,
            P,
            V,
            B = function () {
              var X = e.now() - P;
              X < L
                ? (G = setTimeout(B, L - X))
                : ((G = null), M || ((V = _.apply(Z, K)), (Z = K = null)));
            };
          return function () {
            (Z = this), (K = arguments), (P = e.now());
            var X = M && !G;
            return (
              G || (G = setTimeout(B, L)),
              X && ((V = _.apply(Z, K)), (Z = K = null)),
              V
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var L = 1, M = arguments.length; L < M; L++) {
            var G = arguments[L];
            for (var K in G) _[K] === void 0 && (_[K] = G[K]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (q) return q(_);
          var L = [];
          for (var M in _) e.has(_, M) && L.push(M);
          return L;
        }),
        (e.has = function (_, L) {
          return f.call(_, L);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        H = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        re = /\\|'|\r|\n|\u2028|\u2029/g,
        $ = function (_) {
          return "\\" + H[_];
        },
        x = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, L, M) {
          !L && M && (L = M), (L = e.defaults({}, L, e.templateSettings));
          var G = RegExp(
              [
                (L.escape || j).source,
                (L.interpolate || j).source,
                (L.evaluate || j).source,
              ].join("|") + "|$",
              "g"
            ),
            K = 0,
            Z = "__p+='";
          _.replace(G, function (X, F, Y, ae, oe) {
            return (
              (Z += _.slice(K, oe).replace(re, $)),
              (K = oe + X.length),
              F
                ? (Z +=
                    `'+
((__t=(` +
                    F +
                    `))==null?'':_.escape(__t))+
'`)
                : Y
                ? (Z +=
                    `'+
((__t=(` +
                    Y +
                    `))==null?'':__t)+
'`)
                : ae &&
                  (Z +=
                    `';
` +
                    ae +
                    `
__p+='`),
              X
            );
          }),
            (Z += `';
`);
          var P = L.variable;
          if (P) {
            if (!x.test(P))
              throw new Error("variable is not a bare identifier: " + P);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (P = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var V;
          try {
            V = new Function(L.variable || "obj", "_", Z);
          } catch (X) {
            throw ((X.source = Z), X);
          }
          var B = function (X) {
            return V.call(this, X, e);
          };
          return (
            (B.source =
              "function(" +
              P +
              `){
` +
              Z +
              "}"),
            B
          );
        }),
        e
      );
    })();
  });
  var et = u((IB, Rs) => {
    var ce = {},
      Xt = {},
      Ut = [],
      Fi = window.Webflow || [],
      Et = window.jQuery,
      We = Et(window),
      pI = Et(document),
      Je = Et.isFunction,
      Be = (ce._ = ys()),
      Ts = (ce.tram = Mi() && Et.tram),
      an = !1,
      Gi = !1;
    Ts.config.hideBackface = !1;
    Ts.config.keepInherited = !0;
    ce.define = function (e, t, r) {
      Xt[e] && Os(Xt[e]);
      var n = (Xt[e] = t(Et, Be, r) || {});
      return ms(n), n;
    };
    ce.require = function (e) {
      return Xt[e];
    };
    function ms(e) {
      ce.env() &&
        (Je(e.design) && We.on("__wf_design", e.design),
        Je(e.preview) && We.on("__wf_preview", e.preview)),
        Je(e.destroy) && We.on("__wf_destroy", e.destroy),
        e.ready && Je(e.ready) && vI(e);
    }
    function vI(e) {
      if (an) {
        e.ready();
        return;
      }
      Be.contains(Ut, e.ready) || Ut.push(e.ready);
    }
    function Os(e) {
      Je(e.design) && We.off("__wf_design", e.design),
        Je(e.preview) && We.off("__wf_preview", e.preview),
        Je(e.destroy) && We.off("__wf_destroy", e.destroy),
        e.ready && Je(e.ready) && EI(e);
    }
    function EI(e) {
      Ut = Be.filter(Ut, function (t) {
        return t !== e.ready;
      });
    }
    ce.push = function (e) {
      if (an) {
        Je(e) && e();
        return;
      }
      Fi.push(e);
    };
    ce.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var nn = navigator.userAgent.toLowerCase(),
      Ss = (ce.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      hI = (ce.env.chrome =
        /chrome/.test(nn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(nn.match(/chrome\/(\d+)\./)[1], 10)),
      gI = (ce.env.ios = /(ipod|iphone|ipad)/.test(nn));
    ce.env.safari = /safari/.test(nn) && !hI && !gI;
    var Di;
    Ss &&
      pI.on("touchstart mousedown", function (e) {
        Di = e.target;
      });
    ce.validClick = Ss
      ? function (e) {
          return e === Di || Et.contains(e, Di);
        }
      : function () {
          return !0;
        };
    var As = "resize.webflow orientationchange.webflow load.webflow",
      _I = "scroll.webflow " + As;
    ce.resize = Xi(We, As);
    ce.scroll = Xi(We, _I);
    ce.redraw = Xi();
    function Xi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Be.throttle(function (a) {
          Be.each(r, function (i) {
            i(a);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (a) {
          typeof a == "function" && (Be.contains(r, a) || r.push(a));
        }),
        (n.off = function (a) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Be.filter(r, function (i) {
            return i !== a;
          });
        }),
        n
      );
    }
    ce.location = function (e) {
      window.location = e;
    };
    ce.env() && (ce.location = function () {});
    ce.ready = function () {
      (an = !0), Gi ? yI() : Be.each(Ut, Is), Be.each(Fi, Is), ce.resize.up();
    };
    function Is(e) {
      Je(e) && e();
    }
    function yI() {
      (Gi = !1), Be.each(Xt, ms);
    }
    var At;
    ce.load = function (e) {
      At.then(e);
    };
    function bs() {
      At && (At.reject(), We.off("load", At.resolve)),
        (At = new Et.Deferred()),
        We.on("load", At.resolve);
    }
    ce.destroy = function (e) {
      (e = e || {}),
        (Gi = !0),
        We.triggerHandler("__wf_destroy"),
        e.domready != null && (an = e.domready),
        Be.each(Xt, Os),
        ce.resize.off(),
        ce.scroll.off(),
        ce.redraw.off(),
        (Ut = []),
        (Fi = []),
        At.state() === "pending" && bs();
    };
    Et(ce.ready);
    bs();
    Rs.exports = window.Webflow = ce;
  });
  var Ns = u((TB, Cs) => {
    var ws = et();
    ws.define(
      "brand",
      (Cs.exports = function (e) {})
    );
  });
  var Ps = u((mB, qs) => {
    var Ui = et();
    Ui.define(
      "edit",
      (qs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Ui.env("test") || Ui.env("frame")) && !r.fixture && !II())
        )
          return { exit: 1 };
        var n = {},
          a = e(window),
          i = e(document.documentElement),
          o = document.location,
          s = "hashchange",
          c,
          f = r.load || v,
          p = !1;
        try {
          p =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        p
          ? f()
          : o.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
              /\?edit$/.test(o.href)) &&
            f()
          : a.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(o.hash) && f());
        }
        function v() {
          (c = !0),
            (window.WebflowEditor = !0),
            a.off(s, d),
            R(function (q) {
              e.ajax({
                url: b("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: I(q),
              });
            });
        }
        function I(q) {
          return function (w) {
            if (!w) {
              console.error("Could not load editor data");
              return;
            }
            (w.thirdPartyCookiesSupported = q),
              O(N(w.bugReporterScriptPath), function () {
                O(N(w.scriptPath), function () {
                  window.WebflowEditor(w);
                });
              });
          };
        }
        function O(q, w) {
          e.ajax({ type: "GET", url: q, dataType: "script", cache: !0 }).then(
            w,
            S
          );
        }
        function S(q, w, C) {
          throw (console.error("Could not load editor script: " + w), C);
        }
        function N(q) {
          return q.indexOf("//") >= 0
            ? q
            : b("https://editor-api.webflow.com" + q);
        }
        function b(q) {
          return q.replace(/([^:])\/\//g, "$1/");
        }
        function R(q) {
          var w = window.document.createElement("iframe");
          (w.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (w.style.display = "none"),
            (w.sandbox = "allow-scripts allow-same-origin");
          var C = function (D) {
            D.data === "WF_third_party_cookies_unsupported"
              ? (y(w, C), q(!1))
              : D.data === "WF_third_party_cookies_supported" &&
                (y(w, C), q(!0));
          };
          (w.onerror = function () {
            y(w, C), q(!1);
          }),
            window.addEventListener("message", C, !1),
            window.document.body.appendChild(w);
        }
        function y(q, w) {
          window.removeEventListener("message", w, !1), q.remove();
        }
        return n;
      })
    );
    function II() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var xs = u((OB, Ls) => {
    var TI = et();
    TI.define(
      "focus-visible",
      (Ls.exports = function () {
        function e(r) {
          var n = !0,
            a = !1,
            i = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(y) {
            return !!(
              y &&
              y !== document &&
              y.nodeName !== "HTML" &&
              y.nodeName !== "BODY" &&
              "classList" in y &&
              "contains" in y.classList
            );
          }
          function c(y) {
            var q = y.type,
              w = y.tagName;
            return !!(
              (w === "INPUT" && o[q] && !y.readOnly) ||
              (w === "TEXTAREA" && !y.readOnly) ||
              y.isContentEditable
            );
          }
          function f(y) {
            y.getAttribute("data-wf-focus-visible") ||
              y.setAttribute("data-wf-focus-visible", "true");
          }
          function p(y) {
            y.getAttribute("data-wf-focus-visible") &&
              y.removeAttribute("data-wf-focus-visible");
          }
          function d(y) {
            y.metaKey ||
              y.altKey ||
              y.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function I(y) {
            s(y.target) && (n || c(y.target)) && f(y.target);
          }
          function O(y) {
            s(y.target) &&
              y.target.hasAttribute("data-wf-focus-visible") &&
              ((a = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                a = !1;
              }, 100)),
              p(y.target));
          }
          function S() {
            document.visibilityState === "hidden" && (a && (n = !0), N());
          }
          function N() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function b() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(y) {
            (y.target.nodeName && y.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), b());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", S, !0),
            N(),
            r.addEventListener("focus", I, !0),
            r.addEventListener("blur", O, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Fs = u((SB, Ds) => {
    var Ms = et();
    Ms.define(
      "focus",
      (Ds.exports = function () {
        var e = [],
          t = !1;
        function r(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function n(o) {
          var s = o.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function a(o) {
          n(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ms.env.safari &&
            (document.addEventListener("mousedown", a, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Us = u((AB, Xs) => {
    "use strict";
    var Vi = window.jQuery,
      tt = {},
      on = [],
      Gs = ".w-ix",
      sn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Vi(t).triggerHandler(tt.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Vi(t).triggerHandler(tt.types.OUTRO));
        },
      };
    tt.triggers = {};
    tt.types = { INTRO: "w-ix-intro" + Gs, OUTRO: "w-ix-outro" + Gs };
    tt.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Vi.extend(tt.triggers, sn);
    };
    tt.async = function () {
      for (var e in sn) {
        var t = sn[e];
        sn.hasOwnProperty(e) &&
          (tt.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    tt.async();
    Xs.exports = tt;
  });
  var js = u((bB, Ws) => {
    "use strict";
    var Bi = Us();
    function Vs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var mI = window.jQuery,
      un = {},
      Bs = ".w-ix",
      OI = {
        reset: function (e, t) {
          Bi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Bi.triggers.intro(e, t), Vs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Bi.triggers.outro(e, t), Vs(t, "COMPONENT_INACTIVE");
        },
      };
    un.triggers = {};
    un.types = { INTRO: "w-ix-intro" + Bs, OUTRO: "w-ix-outro" + Bs };
    mI.extend(un.triggers, OI);
    Ws.exports = un;
  });
  var Hs = u((RB, ct) => {
    function Wi(e) {
      return (
        (ct.exports = Wi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ct.exports.__esModule = !0),
        (ct.exports.default = ct.exports),
        Wi(e)
      );
    }
    (ct.exports = Wi),
      (ct.exports.__esModule = !0),
      (ct.exports.default = ct.exports);
  });
  var bt = u((wB, Ir) => {
    var SI = Hs().default;
    function ks(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (ks = function (a) {
        return a ? r : t;
      })(e);
    }
    function AI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (SI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = ks(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(n, i, o)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Ir.exports = AI),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var je = u((CB, Tr) => {
    function bI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Tr.exports = bI),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var ve = u((NB, Ks) => {
    var cn = function (e) {
      return e && e.Math == Math && e;
    };
    Ks.exports =
      cn(typeof globalThis == "object" && globalThis) ||
      cn(typeof window == "object" && window) ||
      cn(typeof self == "object" && self) ||
      cn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Vt = u((qB, zs) => {
    zs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Rt = u((PB, Ys) => {
    var RI = Vt();
    Ys.exports = !RI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var ln = u((LB, $s) => {
    var mr = Function.prototype.call;
    $s.exports = mr.bind
      ? mr.bind(mr)
      : function () {
          return mr.apply(mr, arguments);
        };
  });
  var eu = u((Js) => {
    "use strict";
    var Qs = {}.propertyIsEnumerable,
      Zs = Object.getOwnPropertyDescriptor,
      wI = Zs && !Qs.call({ 1: 2 }, 1);
    Js.f = wI
      ? function (t) {
          var r = Zs(this, t);
          return !!r && r.enumerable;
        }
      : Qs;
  });
  var ji = u((MB, tu) => {
    tu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var He = u((DB, nu) => {
    var ru = Function.prototype,
      Hi = ru.bind,
      ki = ru.call,
      CI = Hi && Hi.bind(ki);
    nu.exports = Hi
      ? function (e) {
          return e && CI(ki, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return ki.apply(e, arguments);
            }
          );
        };
  });
  var ou = u((FB, au) => {
    var iu = He(),
      NI = iu({}.toString),
      qI = iu("".slice);
    au.exports = function (e) {
      return qI(NI(e), 8, -1);
    };
  });
  var uu = u((GB, su) => {
    var PI = ve(),
      LI = He(),
      xI = Vt(),
      MI = ou(),
      Ki = PI.Object,
      DI = LI("".split);
    su.exports = xI(function () {
      return !Ki("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return MI(e) == "String" ? DI(e, "") : Ki(e);
        }
      : Ki;
  });
  var zi = u((XB, cu) => {
    var FI = ve(),
      GI = FI.TypeError;
    cu.exports = function (e) {
      if (e == null) throw GI("Can't call method on " + e);
      return e;
    };
  });
  var Or = u((UB, lu) => {
    var XI = uu(),
      UI = zi();
    lu.exports = function (e) {
      return XI(UI(e));
    };
  });
  var rt = u((VB, fu) => {
    fu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Bt = u((BB, du) => {
    var VI = rt();
    du.exports = function (e) {
      return typeof e == "object" ? e !== null : VI(e);
    };
  });
  var Sr = u((WB, pu) => {
    var Yi = ve(),
      BI = rt(),
      WI = function (e) {
        return BI(e) ? e : void 0;
      };
    pu.exports = function (e, t) {
      return arguments.length < 2 ? WI(Yi[e]) : Yi[e] && Yi[e][t];
    };
  });
  var Eu = u((jB, vu) => {
    var jI = He();
    vu.exports = jI({}.isPrototypeOf);
  });
  var gu = u((HB, hu) => {
    var HI = Sr();
    hu.exports = HI("navigator", "userAgent") || "";
  });
  var Su = u((kB, Ou) => {
    var mu = ve(),
      $i = gu(),
      _u = mu.process,
      yu = mu.Deno,
      Iu = (_u && _u.versions) || (yu && yu.version),
      Tu = Iu && Iu.v8,
      ke,
      fn;
    Tu &&
      ((ke = Tu.split(".")),
      (fn = ke[0] > 0 && ke[0] < 4 ? 1 : +(ke[0] + ke[1])));
    !fn &&
      $i &&
      ((ke = $i.match(/Edge\/(\d+)/)),
      (!ke || ke[1] >= 74) &&
        ((ke = $i.match(/Chrome\/(\d+)/)), ke && (fn = +ke[1])));
    Ou.exports = fn;
  });
  var Qi = u((KB, bu) => {
    var Au = Su(),
      kI = Vt();
    bu.exports =
      !!Object.getOwnPropertySymbols &&
      !kI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Au && Au < 41)
        );
      });
  });
  var Zi = u((zB, Ru) => {
    var KI = Qi();
    Ru.exports = KI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ji = u((YB, wu) => {
    var zI = ve(),
      YI = Sr(),
      $I = rt(),
      QI = Eu(),
      ZI = Zi(),
      JI = zI.Object;
    wu.exports = ZI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = YI("Symbol");
          return $I(t) && QI(t.prototype, JI(e));
        };
  });
  var Nu = u(($B, Cu) => {
    var eT = ve(),
      tT = eT.String;
    Cu.exports = function (e) {
      try {
        return tT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Pu = u((QB, qu) => {
    var rT = ve(),
      nT = rt(),
      iT = Nu(),
      aT = rT.TypeError;
    qu.exports = function (e) {
      if (nT(e)) return e;
      throw aT(iT(e) + " is not a function");
    };
  });
  var xu = u((ZB, Lu) => {
    var oT = Pu();
    Lu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : oT(r);
    };
  });
  var Du = u((JB, Mu) => {
    var sT = ve(),
      ea = ln(),
      ta = rt(),
      ra = Bt(),
      uT = sT.TypeError;
    Mu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ta((r = e.toString)) && !ra((n = ea(r, e)))) ||
        (ta((r = e.valueOf)) && !ra((n = ea(r, e)))) ||
        (t !== "string" && ta((r = e.toString)) && !ra((n = ea(r, e))))
      )
        return n;
      throw uT("Can't convert object to primitive value");
    };
  });
  var Gu = u((eW, Fu) => {
    Fu.exports = !1;
  });
  var dn = u((tW, Uu) => {
    var Xu = ve(),
      cT = Object.defineProperty;
    Uu.exports = function (e, t) {
      try {
        cT(Xu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Xu[e] = t;
      }
      return t;
    };
  });
  var pn = u((rW, Bu) => {
    var lT = ve(),
      fT = dn(),
      Vu = "__core-js_shared__",
      dT = lT[Vu] || fT(Vu, {});
    Bu.exports = dT;
  });
  var na = u((nW, ju) => {
    var pT = Gu(),
      Wu = pn();
    (ju.exports = function (e, t) {
      return Wu[e] || (Wu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: pT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ku = u((iW, Hu) => {
    var vT = ve(),
      ET = zi(),
      hT = vT.Object;
    Hu.exports = function (e) {
      return hT(ET(e));
    };
  });
  var ht = u((aW, Ku) => {
    var gT = He(),
      _T = ku(),
      yT = gT({}.hasOwnProperty);
    Ku.exports =
      Object.hasOwn ||
      function (t, r) {
        return yT(_T(t), r);
      };
  });
  var ia = u((oW, zu) => {
    var IT = He(),
      TT = 0,
      mT = Math.random(),
      OT = IT((1).toString);
    zu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + OT(++TT + mT, 36);
    };
  });
  var aa = u((sW, Ju) => {
    var ST = ve(),
      AT = na(),
      Yu = ht(),
      bT = ia(),
      $u = Qi(),
      Zu = Zi(),
      Wt = AT("wks"),
      wt = ST.Symbol,
      Qu = wt && wt.for,
      RT = Zu ? wt : (wt && wt.withoutSetter) || bT;
    Ju.exports = function (e) {
      if (!Yu(Wt, e) || !($u || typeof Wt[e] == "string")) {
        var t = "Symbol." + e;
        $u && Yu(wt, e)
          ? (Wt[e] = wt[e])
          : Zu && Qu
          ? (Wt[e] = Qu(t))
          : (Wt[e] = RT(t));
      }
      return Wt[e];
    };
  });
  var nc = u((uW, rc) => {
    var wT = ve(),
      CT = ln(),
      ec = Bt(),
      tc = Ji(),
      NT = xu(),
      qT = Du(),
      PT = aa(),
      LT = wT.TypeError,
      xT = PT("toPrimitive");
    rc.exports = function (e, t) {
      if (!ec(e) || tc(e)) return e;
      var r = NT(e, xT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = CT(r, e, t)), !ec(n) || tc(n))
        )
          return n;
        throw LT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), qT(e, t);
    };
  });
  var oa = u((cW, ic) => {
    var MT = nc(),
      DT = Ji();
    ic.exports = function (e) {
      var t = MT(e, "string");
      return DT(t) ? t : t + "";
    };
  });
  var ua = u((lW, oc) => {
    var FT = ve(),
      ac = Bt(),
      sa = FT.document,
      GT = ac(sa) && ac(sa.createElement);
    oc.exports = function (e) {
      return GT ? sa.createElement(e) : {};
    };
  });
  var ca = u((fW, sc) => {
    var XT = Rt(),
      UT = Vt(),
      VT = ua();
    sc.exports =
      !XT &&
      !UT(function () {
        return (
          Object.defineProperty(VT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var la = u((cc) => {
    var BT = Rt(),
      WT = ln(),
      jT = eu(),
      HT = ji(),
      kT = Or(),
      KT = oa(),
      zT = ht(),
      YT = ca(),
      uc = Object.getOwnPropertyDescriptor;
    cc.f = BT
      ? uc
      : function (t, r) {
          if (((t = kT(t)), (r = KT(r)), YT))
            try {
              return uc(t, r);
            } catch {}
          if (zT(t, r)) return HT(!WT(jT.f, t, r), t[r]);
        };
  });
  var Ar = u((pW, fc) => {
    var lc = ve(),
      $T = Bt(),
      QT = lc.String,
      ZT = lc.TypeError;
    fc.exports = function (e) {
      if ($T(e)) return e;
      throw ZT(QT(e) + " is not an object");
    };
  });
  var br = u((vc) => {
    var JT = ve(),
      em = Rt(),
      tm = ca(),
      dc = Ar(),
      rm = oa(),
      nm = JT.TypeError,
      pc = Object.defineProperty;
    vc.f = em
      ? pc
      : function (t, r, n) {
          if ((dc(t), (r = rm(r)), dc(n), tm))
            try {
              return pc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw nm("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var vn = u((EW, Ec) => {
    var im = Rt(),
      am = br(),
      om = ji();
    Ec.exports = im
      ? function (e, t, r) {
          return am.f(e, t, om(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var da = u((hW, hc) => {
    var sm = He(),
      um = rt(),
      fa = pn(),
      cm = sm(Function.toString);
    um(fa.inspectSource) ||
      (fa.inspectSource = function (e) {
        return cm(e);
      });
    hc.exports = fa.inspectSource;
  });
  var yc = u((gW, _c) => {
    var lm = ve(),
      fm = rt(),
      dm = da(),
      gc = lm.WeakMap;
    _c.exports = fm(gc) && /native code/.test(dm(gc));
  });
  var pa = u((_W, Tc) => {
    var pm = na(),
      vm = ia(),
      Ic = pm("keys");
    Tc.exports = function (e) {
      return Ic[e] || (Ic[e] = vm(e));
    };
  });
  var En = u((yW, mc) => {
    mc.exports = {};
  });
  var wc = u((IW, Rc) => {
    var Em = yc(),
      bc = ve(),
      va = He(),
      hm = Bt(),
      gm = vn(),
      Ea = ht(),
      ha = pn(),
      _m = pa(),
      ym = En(),
      Oc = "Object already initialized",
      _a = bc.TypeError,
      Im = bc.WeakMap,
      hn,
      Rr,
      gn,
      Tm = function (e) {
        return gn(e) ? Rr(e) : hn(e, {});
      },
      mm = function (e) {
        return function (t) {
          var r;
          if (!hm(t) || (r = Rr(t)).type !== e)
            throw _a("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    Em || ha.state
      ? ((gt = ha.state || (ha.state = new Im())),
        (Sc = va(gt.get)),
        (ga = va(gt.has)),
        (Ac = va(gt.set)),
        (hn = function (e, t) {
          if (ga(gt, e)) throw new _a(Oc);
          return (t.facade = e), Ac(gt, e, t), t;
        }),
        (Rr = function (e) {
          return Sc(gt, e) || {};
        }),
        (gn = function (e) {
          return ga(gt, e);
        }))
      : ((Ct = _m("state")),
        (ym[Ct] = !0),
        (hn = function (e, t) {
          if (Ea(e, Ct)) throw new _a(Oc);
          return (t.facade = e), gm(e, Ct, t), t;
        }),
        (Rr = function (e) {
          return Ea(e, Ct) ? e[Ct] : {};
        }),
        (gn = function (e) {
          return Ea(e, Ct);
        }));
    var gt, Sc, ga, Ac, Ct;
    Rc.exports = { set: hn, get: Rr, has: gn, enforce: Tm, getterFor: mm };
  });
  var qc = u((TW, Nc) => {
    var ya = Rt(),
      Om = ht(),
      Cc = Function.prototype,
      Sm = ya && Object.getOwnPropertyDescriptor,
      Ia = Om(Cc, "name"),
      Am = Ia && function () {}.name === "something",
      bm = Ia && (!ya || (ya && Sm(Cc, "name").configurable));
    Nc.exports = { EXISTS: Ia, PROPER: Am, CONFIGURABLE: bm };
  });
  var Dc = u((mW, Mc) => {
    var Rm = ve(),
      Pc = rt(),
      wm = ht(),
      Lc = vn(),
      Cm = dn(),
      Nm = da(),
      xc = wc(),
      qm = qc().CONFIGURABLE,
      Pm = xc.get,
      Lm = xc.enforce,
      xm = String(String).split("String");
    (Mc.exports = function (e, t, r, n) {
      var a = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        o = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Pc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!wm(r, "name") || (qm && r.name !== s)) && Lc(r, "name", s),
          (c = Lm(r)),
          c.source || (c.source = xm.join(typeof s == "string" ? s : ""))),
        e === Rm)
      ) {
        i ? (e[t] = r) : Cm(t, r);
        return;
      } else a ? !o && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Lc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Pc(this) && Pm(this).source) || Nm(this);
    });
  });
  var Ta = u((OW, Fc) => {
    var Mm = Math.ceil,
      Dm = Math.floor;
    Fc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? Dm : Mm)(t);
    };
  });
  var Xc = u((SW, Gc) => {
    var Fm = Ta(),
      Gm = Math.max,
      Xm = Math.min;
    Gc.exports = function (e, t) {
      var r = Fm(e);
      return r < 0 ? Gm(r + t, 0) : Xm(r, t);
    };
  });
  var Vc = u((AW, Uc) => {
    var Um = Ta(),
      Vm = Math.min;
    Uc.exports = function (e) {
      return e > 0 ? Vm(Um(e), 9007199254740991) : 0;
    };
  });
  var Wc = u((bW, Bc) => {
    var Bm = Vc();
    Bc.exports = function (e) {
      return Bm(e.length);
    };
  });
  var ma = u((RW, Hc) => {
    var Wm = Or(),
      jm = Xc(),
      Hm = Wc(),
      jc = function (e) {
        return function (t, r, n) {
          var a = Wm(t),
            i = Hm(a),
            o = jm(n, i),
            s;
          if (e && r != r) {
            for (; i > o; ) if (((s = a[o++]), s != s)) return !0;
          } else
            for (; i > o; o++)
              if ((e || o in a) && a[o] === r) return e || o || 0;
          return !e && -1;
        };
      };
    Hc.exports = { includes: jc(!0), indexOf: jc(!1) };
  });
  var Sa = u((wW, Kc) => {
    var km = He(),
      Oa = ht(),
      Km = Or(),
      zm = ma().indexOf,
      Ym = En(),
      kc = km([].push);
    Kc.exports = function (e, t) {
      var r = Km(e),
        n = 0,
        a = [],
        i;
      for (i in r) !Oa(Ym, i) && Oa(r, i) && kc(a, i);
      for (; t.length > n; ) Oa(r, (i = t[n++])) && (~zm(a, i) || kc(a, i));
      return a;
    };
  });
  var _n = u((CW, zc) => {
    zc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var $c = u((Yc) => {
    var $m = Sa(),
      Qm = _n(),
      Zm = Qm.concat("length", "prototype");
    Yc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return $m(t, Zm);
      };
  });
  var Zc = u((Qc) => {
    Qc.f = Object.getOwnPropertySymbols;
  });
  var el = u((PW, Jc) => {
    var Jm = Sr(),
      eO = He(),
      tO = $c(),
      rO = Zc(),
      nO = Ar(),
      iO = eO([].concat);
    Jc.exports =
      Jm("Reflect", "ownKeys") ||
      function (t) {
        var r = tO.f(nO(t)),
          n = rO.f;
        return n ? iO(r, n(t)) : r;
      };
  });
  var rl = u((LW, tl) => {
    var aO = ht(),
      oO = el(),
      sO = la(),
      uO = br();
    tl.exports = function (e, t) {
      for (var r = oO(t), n = uO.f, a = sO.f, i = 0; i < r.length; i++) {
        var o = r[i];
        aO(e, o) || n(e, o, a(t, o));
      }
    };
  });
  var il = u((xW, nl) => {
    var cO = Vt(),
      lO = rt(),
      fO = /#|\.prototype\./,
      wr = function (e, t) {
        var r = pO[dO(e)];
        return r == EO ? !0 : r == vO ? !1 : lO(t) ? cO(t) : !!t;
      },
      dO = (wr.normalize = function (e) {
        return String(e).replace(fO, ".").toLowerCase();
      }),
      pO = (wr.data = {}),
      vO = (wr.NATIVE = "N"),
      EO = (wr.POLYFILL = "P");
    nl.exports = wr;
  });
  var ol = u((MW, al) => {
    var Aa = ve(),
      hO = la().f,
      gO = vn(),
      _O = Dc(),
      yO = dn(),
      IO = rl(),
      TO = il();
    al.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        a = e.stat,
        i,
        o,
        s,
        c,
        f,
        p;
      if (
        (n
          ? (o = Aa)
          : a
          ? (o = Aa[r] || yO(r, {}))
          : (o = (Aa[r] || {}).prototype),
        o)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((p = hO(o, s)), (c = p && p.value)) : (c = o[s]),
            (i = TO(n ? s : r + (a ? "." : "#") + s, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            IO(f, c);
          }
          (e.sham || (c && c.sham)) && gO(f, "sham", !0), _O(o, s, f, e);
        }
    };
  });
  var ul = u((DW, sl) => {
    var mO = Sa(),
      OO = _n();
    sl.exports =
      Object.keys ||
      function (t) {
        return mO(t, OO);
      };
  });
  var ll = u((FW, cl) => {
    var SO = Rt(),
      AO = br(),
      bO = Ar(),
      RO = Or(),
      wO = ul();
    cl.exports = SO
      ? Object.defineProperties
      : function (t, r) {
          bO(t);
          for (var n = RO(r), a = wO(r), i = a.length, o = 0, s; i > o; )
            AO.f(t, (s = a[o++]), n[s]);
          return t;
        };
  });
  var dl = u((GW, fl) => {
    var CO = Sr();
    fl.exports = CO("document", "documentElement");
  });
  var Il = u((XW, yl) => {
    var NO = Ar(),
      qO = ll(),
      pl = _n(),
      PO = En(),
      LO = dl(),
      xO = ua(),
      MO = pa(),
      vl = ">",
      El = "<",
      Ra = "prototype",
      wa = "script",
      gl = MO("IE_PROTO"),
      ba = function () {},
      _l = function (e) {
        return El + wa + vl + e + El + "/" + wa + vl;
      },
      hl = function (e) {
        e.write(_l("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      DO = function () {
        var e = xO("iframe"),
          t = "java" + wa + ":",
          r;
        return (
          (e.style.display = "none"),
          LO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(_l("document.F=Object")),
          r.close(),
          r.F
        );
      },
      yn,
      In = function () {
        try {
          yn = new ActiveXObject("htmlfile");
        } catch {}
        In =
          typeof document < "u"
            ? document.domain && yn
              ? hl(yn)
              : DO()
            : hl(yn);
        for (var e = pl.length; e--; ) delete In[Ra][pl[e]];
        return In();
      };
    PO[gl] = !0;
    yl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((ba[Ra] = NO(t)), (n = new ba()), (ba[Ra] = null), (n[gl] = t))
            : (n = In()),
          r === void 0 ? n : qO(n, r)
        );
      };
  });
  var ml = u((UW, Tl) => {
    var FO = aa(),
      GO = Il(),
      XO = br(),
      Ca = FO("unscopables"),
      Na = Array.prototype;
    Na[Ca] == null && XO.f(Na, Ca, { configurable: !0, value: GO(null) });
    Tl.exports = function (e) {
      Na[Ca][e] = !0;
    };
  });
  var Ol = u(() => {
    "use strict";
    var UO = ol(),
      VO = ma().includes,
      BO = ml();
    UO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return VO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    BO("includes");
  });
  var Al = u((WW, Sl) => {
    var WO = ve(),
      jO = He();
    Sl.exports = function (e, t) {
      return jO(WO[e].prototype[t]);
    };
  });
  var Rl = u((jW, bl) => {
    Ol();
    var HO = Al();
    bl.exports = HO("Array", "includes");
  });
  var Cl = u((HW, wl) => {
    var kO = Rl();
    wl.exports = kO;
  });
  var ql = u((kW, Nl) => {
    var KO = Cl();
    Nl.exports = KO;
  });
  var qa = u((KW, Pl) => {
    var zO =
      typeof global == "object" && global && global.Object === Object && global;
    Pl.exports = zO;
  });
  var Ke = u((zW, Ll) => {
    var YO = qa(),
      $O = typeof self == "object" && self && self.Object === Object && self,
      QO = YO || $O || Function("return this")();
    Ll.exports = QO;
  });
  var jt = u((YW, xl) => {
    var ZO = Ke(),
      JO = ZO.Symbol;
    xl.exports = JO;
  });
  var Gl = u(($W, Fl) => {
    var Ml = jt(),
      Dl = Object.prototype,
      eS = Dl.hasOwnProperty,
      tS = Dl.toString,
      Cr = Ml ? Ml.toStringTag : void 0;
    function rS(e) {
      var t = eS.call(e, Cr),
        r = e[Cr];
      try {
        e[Cr] = void 0;
        var n = !0;
      } catch {}
      var a = tS.call(e);
      return n && (t ? (e[Cr] = r) : delete e[Cr]), a;
    }
    Fl.exports = rS;
  });
  var Ul = u((QW, Xl) => {
    var nS = Object.prototype,
      iS = nS.toString;
    function aS(e) {
      return iS.call(e);
    }
    Xl.exports = aS;
  });
  var _t = u((ZW, Wl) => {
    var Vl = jt(),
      oS = Gl(),
      sS = Ul(),
      uS = "[object Null]",
      cS = "[object Undefined]",
      Bl = Vl ? Vl.toStringTag : void 0;
    function lS(e) {
      return e == null
        ? e === void 0
          ? cS
          : uS
        : Bl && Bl in Object(e)
        ? oS(e)
        : sS(e);
    }
    Wl.exports = lS;
  });
  var Pa = u((JW, jl) => {
    function fS(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    jl.exports = fS;
  });
  var La = u((ej, Hl) => {
    var dS = Pa(),
      pS = dS(Object.getPrototypeOf, Object);
    Hl.exports = pS;
  });
  var lt = u((tj, kl) => {
    function vS(e) {
      return e != null && typeof e == "object";
    }
    kl.exports = vS;
  });
  var xa = u((rj, zl) => {
    var ES = _t(),
      hS = La(),
      gS = lt(),
      _S = "[object Object]",
      yS = Function.prototype,
      IS = Object.prototype,
      Kl = yS.toString,
      TS = IS.hasOwnProperty,
      mS = Kl.call(Object);
    function OS(e) {
      if (!gS(e) || ES(e) != _S) return !1;
      var t = hS(e);
      if (t === null) return !0;
      var r = TS.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Kl.call(r) == mS;
    }
    zl.exports = OS;
  });
  var Yl = u((Ma) => {
    "use strict";
    Object.defineProperty(Ma, "__esModule", { value: !0 });
    Ma.default = SS;
    function SS(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var $l = u((Fa, Da) => {
    "use strict";
    Object.defineProperty(Fa, "__esModule", { value: !0 });
    var AS = Yl(),
      bS = RS(AS);
    function RS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ht;
    typeof self < "u"
      ? (Ht = self)
      : typeof window < "u"
      ? (Ht = window)
      : typeof global < "u"
      ? (Ht = global)
      : typeof Da < "u"
      ? (Ht = Da)
      : (Ht = Function("return this")());
    var wS = (0, bS.default)(Ht);
    Fa.default = wS;
  });
  var Ga = u((Nr) => {
    "use strict";
    Nr.__esModule = !0;
    Nr.ActionTypes = void 0;
    Nr.default = ef;
    var CS = xa(),
      NS = Jl(CS),
      qS = $l(),
      Ql = Jl(qS);
    function Jl(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Zl = (Nr.ActionTypes = { INIT: "@@redux/INIT" });
    function ef(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(ef)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var a = e,
        i = t,
        o = [],
        s = o,
        c = !1;
      function f() {
        s === o && (s = o.slice());
      }
      function p() {
        return i;
      }
      function d(S) {
        if (typeof S != "function")
          throw new Error("Expected listener to be a function.");
        var N = !0;
        return (
          f(),
          s.push(S),
          function () {
            if (N) {
              (N = !1), f();
              var R = s.indexOf(S);
              s.splice(R, 1);
            }
          }
        );
      }
      function v(S) {
        if (!(0, NS.default)(S))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof S.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = a(i, S));
        } finally {
          c = !1;
        }
        for (var N = (o = s), b = 0; b < N.length; b++) N[b]();
        return S;
      }
      function I(S) {
        if (typeof S != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (a = S), v({ type: Zl.INIT });
      }
      function O() {
        var S,
          N = d;
        return (
          (S = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function y() {
                R.next && R.next(p());
              }
              y();
              var q = N(y);
              return { unsubscribe: q };
            },
          }),
          (S[Ql.default] = function () {
            return this;
          }),
          S
        );
      }
      return (
        v({ type: Zl.INIT }),
        (n = { dispatch: v, subscribe: d, getState: p, replaceReducer: I }),
        (n[Ql.default] = O),
        n
      );
    }
  });
  var Ua = u((Xa) => {
    "use strict";
    Xa.__esModule = !0;
    Xa.default = PS;
    function PS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var nf = u((Va) => {
    "use strict";
    Va.__esModule = !0;
    Va.default = FS;
    var tf = Ga(),
      LS = xa(),
      oj = rf(LS),
      xS = Ua(),
      sj = rf(xS);
    function rf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function MS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function DS(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: tf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: a }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                tf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function FS(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var a = t[n];
        typeof e[a] == "function" && (r[a] = e[a]);
      }
      var i = Object.keys(r);
      if (!1) var o;
      var s;
      try {
        DS(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          p = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var v = !1, I = {}, O = 0; O < i.length; O++) {
          var S = i[O],
            N = r[S],
            b = f[S],
            R = N(b, p);
          if (typeof R > "u") {
            var y = MS(S, p);
            throw new Error(y);
          }
          (I[S] = R), (v = v || R !== b);
        }
        return v ? I : f;
      };
    }
  });
  var of = u((Ba) => {
    "use strict";
    Ba.__esModule = !0;
    Ba.default = GS;
    function af(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function GS(e, t) {
      if (typeof e == "function") return af(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, a = 0; a < r.length; a++) {
        var i = r[a],
          o = e[i];
        typeof o == "function" && (n[i] = af(o, t));
      }
      return n;
    }
  });
  var ja = u((Wa) => {
    "use strict";
    Wa.__esModule = !0;
    Wa.default = XS;
    function XS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (i, o) {
          return o(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var sf = u((Ha) => {
    "use strict";
    Ha.__esModule = !0;
    var US =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ha.default = jS;
    var VS = ja(),
      BS = WS(VS);
    function WS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function jS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (a, i, o) {
          var s = n(a, i, o),
            c = s.dispatch,
            f = [],
            p = {
              getState: s.getState,
              dispatch: function (v) {
                return c(v);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(p);
            })),
            (c = BS.default.apply(void 0, f)(s.dispatch)),
            US({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var ka = u((Ge) => {
    "use strict";
    Ge.__esModule = !0;
    Ge.compose =
      Ge.applyMiddleware =
      Ge.bindActionCreators =
      Ge.combineReducers =
      Ge.createStore =
        void 0;
    var HS = Ga(),
      kS = kt(HS),
      KS = nf(),
      zS = kt(KS),
      YS = of(),
      $S = kt(YS),
      QS = sf(),
      ZS = kt(QS),
      JS = ja(),
      eA = kt(JS),
      tA = Ua(),
      dj = kt(tA);
    function kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ge.createStore = kS.default;
    Ge.combineReducers = zS.default;
    Ge.bindActionCreators = $S.default;
    Ge.applyMiddleware = ZS.default;
    Ge.compose = eA.default;
  });
  var uf = u((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.QuickEffectIds =
      Se.QuickEffectDirectionConsts =
      Se.EventTypeConsts =
      Se.EventLimitAffectedElements =
      Se.EventContinuousMouseAxes =
      Se.EventBasedOn =
      Se.EventAppliesTo =
        void 0;
    var rA = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Se.EventTypeConsts = rA;
    var nA = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Se.EventAppliesTo = nA;
    var iA = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Se.EventBasedOn = iA;
    var aA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Se.EventContinuousMouseAxes = aA;
    var oA = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Se.EventLimitAffectedElements = oA;
    var sA = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Se.QuickEffectIds = sA;
    var uA = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Se.QuickEffectDirectionConsts = uA;
  });
  var Ka = u((Kt) => {
    "use strict";
    Object.defineProperty(Kt, "__esModule", { value: !0 });
    Kt.ActionTypeConsts = Kt.ActionAppliesTo = void 0;
    var cA = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    Kt.ActionTypeConsts = cA;
    var lA = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    Kt.ActionAppliesTo = lA;
  });
  var cf = u((Tn) => {
    "use strict";
    Object.defineProperty(Tn, "__esModule", { value: !0 });
    Tn.InteractionTypeConsts = void 0;
    var fA = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Tn.InteractionTypeConsts = fA;
  });
  var lf = u((mn) => {
    "use strict";
    Object.defineProperty(mn, "__esModule", { value: !0 });
    mn.ReducedMotionTypes = void 0;
    var dA = Ka(),
      {
        TRANSFORM_MOVE: pA,
        TRANSFORM_SCALE: vA,
        TRANSFORM_ROTATE: EA,
        TRANSFORM_SKEW: hA,
        STYLE_SIZE: gA,
        STYLE_FILTER: _A,
        STYLE_FONT_VARIATION: yA,
      } = dA.ActionTypeConsts,
      IA = {
        [pA]: !0,
        [vA]: !0,
        [EA]: !0,
        [hA]: !0,
        [gA]: !0,
        [_A]: !0,
        [yA]: !0,
      };
    mn.ReducedMotionTypes = IA;
  });
  var ff = u((ee) => {
    "use strict";
    Object.defineProperty(ee, "__esModule", { value: !0 });
    ee.IX2_VIEWPORT_WIDTH_CHANGED =
      ee.IX2_TEST_FRAME_RENDERED =
      ee.IX2_STOP_REQUESTED =
      ee.IX2_SESSION_STOPPED =
      ee.IX2_SESSION_STARTED =
      ee.IX2_SESSION_INITIALIZED =
      ee.IX2_RAW_DATA_IMPORTED =
      ee.IX2_PREVIEW_REQUESTED =
      ee.IX2_PLAYBACK_REQUESTED =
      ee.IX2_PARAMETER_CHANGED =
      ee.IX2_MEDIA_QUERIES_DEFINED =
      ee.IX2_INSTANCE_STARTED =
      ee.IX2_INSTANCE_REMOVED =
      ee.IX2_INSTANCE_ADDED =
      ee.IX2_EVENT_STATE_CHANGED =
      ee.IX2_EVENT_LISTENER_ADDED =
      ee.IX2_ELEMENT_STATE_CHANGED =
      ee.IX2_CLEAR_REQUESTED =
      ee.IX2_ANIMATION_FRAME_CHANGED =
      ee.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var TA = "IX2_RAW_DATA_IMPORTED";
    ee.IX2_RAW_DATA_IMPORTED = TA;
    var mA = "IX2_SESSION_INITIALIZED";
    ee.IX2_SESSION_INITIALIZED = mA;
    var OA = "IX2_SESSION_STARTED";
    ee.IX2_SESSION_STARTED = OA;
    var SA = "IX2_SESSION_STOPPED";
    ee.IX2_SESSION_STOPPED = SA;
    var AA = "IX2_PREVIEW_REQUESTED";
    ee.IX2_PREVIEW_REQUESTED = AA;
    var bA = "IX2_PLAYBACK_REQUESTED";
    ee.IX2_PLAYBACK_REQUESTED = bA;
    var RA = "IX2_STOP_REQUESTED";
    ee.IX2_STOP_REQUESTED = RA;
    var wA = "IX2_CLEAR_REQUESTED";
    ee.IX2_CLEAR_REQUESTED = wA;
    var CA = "IX2_EVENT_LISTENER_ADDED";
    ee.IX2_EVENT_LISTENER_ADDED = CA;
    var NA = "IX2_EVENT_STATE_CHANGED";
    ee.IX2_EVENT_STATE_CHANGED = NA;
    var qA = "IX2_ANIMATION_FRAME_CHANGED";
    ee.IX2_ANIMATION_FRAME_CHANGED = qA;
    var PA = "IX2_PARAMETER_CHANGED";
    ee.IX2_PARAMETER_CHANGED = PA;
    var LA = "IX2_INSTANCE_ADDED";
    ee.IX2_INSTANCE_ADDED = LA;
    var xA = "IX2_INSTANCE_STARTED";
    ee.IX2_INSTANCE_STARTED = xA;
    var MA = "IX2_INSTANCE_REMOVED";
    ee.IX2_INSTANCE_REMOVED = MA;
    var DA = "IX2_ELEMENT_STATE_CHANGED";
    ee.IX2_ELEMENT_STATE_CHANGED = DA;
    var FA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ee.IX2_ACTION_LIST_PLAYBACK_CHANGED = FA;
    var GA = "IX2_VIEWPORT_WIDTH_CHANGED";
    ee.IX2_VIEWPORT_WIDTH_CHANGED = GA;
    var XA = "IX2_MEDIA_QUERIES_DEFINED";
    ee.IX2_MEDIA_QUERIES_DEFINED = XA;
    var UA = "IX2_TEST_FRAME_RENDERED";
    ee.IX2_TEST_FRAME_RENDERED = UA;
  });
  var df = u((A) => {
    "use strict";
    Object.defineProperty(A, "__esModule", { value: !0 });
    A.W_MOD_JS =
      A.W_MOD_IX =
      A.WILL_CHANGE =
      A.WIDTH =
      A.WF_PAGE =
      A.TRANSLATE_Z =
      A.TRANSLATE_Y =
      A.TRANSLATE_X =
      A.TRANSLATE_3D =
      A.TRANSFORM =
      A.SKEW_Y =
      A.SKEW_X =
      A.SKEW =
      A.SIBLINGS =
      A.SCALE_Z =
      A.SCALE_Y =
      A.SCALE_X =
      A.SCALE_3D =
      A.ROTATE_Z =
      A.ROTATE_Y =
      A.ROTATE_X =
      A.RENDER_TRANSFORM =
      A.RENDER_STYLE =
      A.RENDER_PLUGIN =
      A.RENDER_GENERAL =
      A.PRESERVE_3D =
      A.PLAIN_OBJECT =
      A.PARENT =
      A.OPACITY =
      A.IX2_ID_DELIMITER =
      A.IMMEDIATE_CHILDREN =
      A.HTML_ELEMENT =
      A.HEIGHT =
      A.FONT_VARIATION_SETTINGS =
      A.FLEX =
      A.FILTER =
      A.DISPLAY =
      A.CONFIG_Z_VALUE =
      A.CONFIG_Z_UNIT =
      A.CONFIG_Y_VALUE =
      A.CONFIG_Y_UNIT =
      A.CONFIG_X_VALUE =
      A.CONFIG_X_UNIT =
      A.CONFIG_VALUE =
      A.CONFIG_UNIT =
      A.COMMA_DELIMITER =
      A.COLOR =
      A.COLON_DELIMITER =
      A.CHILDREN =
      A.BOUNDARY_SELECTOR =
      A.BORDER_COLOR =
      A.BAR_DELIMITER =
      A.BACKGROUND_COLOR =
      A.BACKGROUND =
      A.AUTO =
      A.ABSTRACT_NODE =
        void 0;
    var VA = "|";
    A.IX2_ID_DELIMITER = VA;
    var BA = "data-wf-page";
    A.WF_PAGE = BA;
    var WA = "w-mod-js";
    A.W_MOD_JS = WA;
    var jA = "w-mod-ix";
    A.W_MOD_IX = jA;
    var HA = ".w-dyn-item";
    A.BOUNDARY_SELECTOR = HA;
    var kA = "xValue";
    A.CONFIG_X_VALUE = kA;
    var KA = "yValue";
    A.CONFIG_Y_VALUE = KA;
    var zA = "zValue";
    A.CONFIG_Z_VALUE = zA;
    var YA = "value";
    A.CONFIG_VALUE = YA;
    var $A = "xUnit";
    A.CONFIG_X_UNIT = $A;
    var QA = "yUnit";
    A.CONFIG_Y_UNIT = QA;
    var ZA = "zUnit";
    A.CONFIG_Z_UNIT = ZA;
    var JA = "unit";
    A.CONFIG_UNIT = JA;
    var eb = "transform";
    A.TRANSFORM = eb;
    var tb = "translateX";
    A.TRANSLATE_X = tb;
    var rb = "translateY";
    A.TRANSLATE_Y = rb;
    var nb = "translateZ";
    A.TRANSLATE_Z = nb;
    var ib = "translate3d";
    A.TRANSLATE_3D = ib;
    var ab = "scaleX";
    A.SCALE_X = ab;
    var ob = "scaleY";
    A.SCALE_Y = ob;
    var sb = "scaleZ";
    A.SCALE_Z = sb;
    var ub = "scale3d";
    A.SCALE_3D = ub;
    var cb = "rotateX";
    A.ROTATE_X = cb;
    var lb = "rotateY";
    A.ROTATE_Y = lb;
    var fb = "rotateZ";
    A.ROTATE_Z = fb;
    var db = "skew";
    A.SKEW = db;
    var pb = "skewX";
    A.SKEW_X = pb;
    var vb = "skewY";
    A.SKEW_Y = vb;
    var Eb = "opacity";
    A.OPACITY = Eb;
    var hb = "filter";
    A.FILTER = hb;
    var gb = "font-variation-settings";
    A.FONT_VARIATION_SETTINGS = gb;
    var _b = "width";
    A.WIDTH = _b;
    var yb = "height";
    A.HEIGHT = yb;
    var Ib = "backgroundColor";
    A.BACKGROUND_COLOR = Ib;
    var Tb = "background";
    A.BACKGROUND = Tb;
    var mb = "borderColor";
    A.BORDER_COLOR = mb;
    var Ob = "color";
    A.COLOR = Ob;
    var Sb = "display";
    A.DISPLAY = Sb;
    var Ab = "flex";
    A.FLEX = Ab;
    var bb = "willChange";
    A.WILL_CHANGE = bb;
    var Rb = "AUTO";
    A.AUTO = Rb;
    var wb = ",";
    A.COMMA_DELIMITER = wb;
    var Cb = ":";
    A.COLON_DELIMITER = Cb;
    var Nb = "|";
    A.BAR_DELIMITER = Nb;
    var qb = "CHILDREN";
    A.CHILDREN = qb;
    var Pb = "IMMEDIATE_CHILDREN";
    A.IMMEDIATE_CHILDREN = Pb;
    var Lb = "SIBLINGS";
    A.SIBLINGS = Lb;
    var xb = "PARENT";
    A.PARENT = xb;
    var Mb = "preserve-3d";
    A.PRESERVE_3D = Mb;
    var Db = "HTML_ELEMENT";
    A.HTML_ELEMENT = Db;
    var Fb = "PLAIN_OBJECT";
    A.PLAIN_OBJECT = Fb;
    var Gb = "ABSTRACT_NODE";
    A.ABSTRACT_NODE = Gb;
    var Xb = "RENDER_TRANSFORM";
    A.RENDER_TRANSFORM = Xb;
    var Ub = "RENDER_GENERAL";
    A.RENDER_GENERAL = Ub;
    var Vb = "RENDER_STYLE";
    A.RENDER_STYLE = Vb;
    var Bb = "RENDER_PLUGIN";
    A.RENDER_PLUGIN = Bb;
  });
  var Me = u((Te) => {
    "use strict";
    var pf = bt().default;
    Object.defineProperty(Te, "__esModule", { value: !0 });
    var On = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Te.IX2EngineConstants = Te.IX2EngineActionTypes = void 0;
    var za = uf();
    Object.keys(za).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === za[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return za[e];
          },
        });
    });
    var Ya = Ka();
    Object.keys(Ya).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === Ya[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return Ya[e];
          },
        });
    });
    var $a = cf();
    Object.keys($a).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === $a[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return $a[e];
          },
        });
    });
    var Qa = lf();
    Object.keys(Qa).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(On, e) ||
        (e in Te && Te[e] === Qa[e]) ||
        Object.defineProperty(Te, e, {
          enumerable: !0,
          get: function () {
            return Qa[e];
          },
        });
    });
    var Wb = pf(ff());
    Te.IX2EngineActionTypes = Wb;
    var jb = pf(df());
    Te.IX2EngineConstants = jb;
  });
  var vf = u((Sn) => {
    "use strict";
    Object.defineProperty(Sn, "__esModule", { value: !0 });
    Sn.ixData = void 0;
    var Hb = Me(),
      { IX2_RAW_DATA_IMPORTED: kb } = Hb.IX2EngineActionTypes,
      Kb = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case kb:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Sn.ixData = Kb;
  });
  var zt = u((mj, ft) => {
    function Za() {
      return (
        (ft.exports = Za =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (ft.exports.__esModule = !0),
        (ft.exports.default = ft.exports),
        Za.apply(this, arguments)
      );
    }
    (ft.exports = Za),
      (ft.exports.__esModule = !0),
      (ft.exports.default = ft.exports);
  });
  var Yt = u((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var zb =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = bn;
    he.addLast = gf;
    he.addFirst = _f;
    he.removeLast = yf;
    he.removeFirst = If;
    he.insert = Tf;
    he.removeAt = mf;
    he.replaceAt = Of;
    he.getIn = Rn;
    he.set = wn;
    he.setIn = Cn;
    he.update = Af;
    he.updateIn = bf;
    he.merge = Rf;
    he.mergeDeep = wf;
    he.mergeIn = Cf;
    he.omit = Nf;
    he.addDefaults = qf;
    var Ef = "INVALID_ARGS";
    function hf(e) {
      throw new Error(e);
    }
    function Ja(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Yb = {}.hasOwnProperty;
    function bn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ja(e), r = {}, n = 0; n < t.length; n++) {
        var a = t[n];
        r[a] = e[a];
      }
      return r;
    }
    function De(e, t, r) {
      var n = r;
      n == null && hf(Ef);
      for (
        var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        o[s - 3] = arguments[s];
      for (var c = 0; c < o.length; c++) {
        var f = o[c];
        if (f != null) {
          var p = Ja(f);
          if (p.length)
            for (var d = 0; d <= p.length; d++) {
              var v = p[d];
              if (!(e && n[v] !== void 0)) {
                var I = f[v];
                t && An(n[v]) && An(I) && (I = De(e, t, n[v], I)),
                  !(I === void 0 || I === n[v]) &&
                    (a || ((a = !0), (n = bn(n))), (n[v] = I));
              }
            }
        }
      }
      return n;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : zb(e);
      return e != null && (t === "object" || t === "function");
    }
    function gf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function _f(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function yf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function If(e) {
      return e.length ? e.slice(1) : e;
    }
    function Tf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function mf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Of(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, a = Array(n), i = 0; i < n; i++) a[i] = e[i];
      return (a[t] = r), a;
    }
    function Rn(e, t) {
      if ((!Array.isArray(t) && hf(Ef), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var a = t[n];
          if (((r = r?.[a]), r === void 0)) return r;
        }
        return r;
      }
    }
    function wn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        a = e ?? n;
      if (a[t] === r) return a;
      var i = bn(a);
      return (i[t] = r), i;
    }
    function Sf(e, t, r, n) {
      var a = void 0,
        i = t[n];
      if (n === t.length - 1) a = r;
      else {
        var o =
          An(e) && An(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        a = Sf(o, t, r, n + 1);
      }
      return wn(e, i, a);
    }
    function Cn(e, t, r) {
      return t.length ? Sf(e, t, r, 0) : r;
    }
    function Af(e, t, r) {
      var n = e?.[t],
        a = r(n);
      return wn(e, t, a);
    }
    function bf(e, t, r) {
      var n = Rn(e, t),
        a = r(n);
      return Cn(e, t, a);
    }
    function Rf(e, t, r, n, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6;
        c < o;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? De.call.apply(De, [null, !1, !1, e, t, r, n, a, i].concat(s))
        : De(!1, !1, e, t, r, n, a, i);
    }
    function wf(e, t, r, n, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6;
        c < o;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? De.call.apply(De, [null, !1, !0, e, t, r, n, a, i].concat(s))
        : De(!1, !0, e, t, r, n, a, i);
    }
    function Cf(e, t, r, n, a, i, o) {
      var s = Rn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          p = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        p[d - 7] = arguments[d];
      return (
        p.length
          ? (c = De.call.apply(De, [null, !1, !1, s, r, n, a, i, o].concat(p)))
          : (c = De(!1, !1, s, r, n, a, i, o)),
        Cn(e, t, c)
      );
    }
    function Nf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, a = 0; a < r.length; a++)
        if (Yb.call(e, r[a])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, o = Ja(e), s = 0; s < o.length; s++) {
        var c = o[s];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function qf(e, t, r, n, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6;
        c < o;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? De.call.apply(De, [null, !0, !1, e, t, r, n, a, i].concat(s))
        : De(!0, !1, e, t, r, n, a, i);
    }
    var $b = {
      clone: bn,
      addLast: gf,
      addFirst: _f,
      removeLast: yf,
      removeFirst: If,
      insert: Tf,
      removeAt: mf,
      replaceAt: Of,
      getIn: Rn,
      set: wn,
      setIn: Cn,
      update: Af,
      updateIn: bf,
      merge: Rf,
      mergeDeep: wf,
      mergeIn: Cf,
      omit: Nf,
      addDefaults: qf,
    };
    he.default = $b;
  });
  var Lf = u((Nn) => {
    "use strict";
    var Qb = je().default;
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ixRequest = void 0;
    var Zb = Qb(zt()),
      Jb = Me(),
      e0 = Yt(),
      {
        IX2_PREVIEW_REQUESTED: t0,
        IX2_PLAYBACK_REQUESTED: r0,
        IX2_STOP_REQUESTED: n0,
        IX2_CLEAR_REQUESTED: i0,
      } = Jb.IX2EngineActionTypes,
      a0 = { preview: {}, playback: {}, stop: {}, clear: {} },
      Pf = Object.create(null, {
        [t0]: { value: "preview" },
        [r0]: { value: "playback" },
        [n0]: { value: "stop" },
        [i0]: { value: "clear" },
      }),
      o0 = (e = a0, t) => {
        if (t.type in Pf) {
          let r = [Pf[t.type]];
          return (0, e0.setIn)(e, [r], (0, Zb.default)({}, t.payload));
        }
        return e;
      };
    Nn.ixRequest = o0;
  });
  var Mf = u((qn) => {
    "use strict";
    Object.defineProperty(qn, "__esModule", { value: !0 });
    qn.ixSession = void 0;
    var s0 = Me(),
      nt = Yt(),
      {
        IX2_SESSION_INITIALIZED: u0,
        IX2_SESSION_STARTED: c0,
        IX2_TEST_FRAME_RENDERED: l0,
        IX2_SESSION_STOPPED: f0,
        IX2_EVENT_LISTENER_ADDED: d0,
        IX2_EVENT_STATE_CHANGED: p0,
        IX2_ANIMATION_FRAME_CHANGED: v0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: E0,
        IX2_VIEWPORT_WIDTH_CHANGED: h0,
        IX2_MEDIA_QUERIES_DEFINED: g0,
      } = s0.IX2EngineActionTypes,
      xf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      _0 = 20,
      y0 = (e = xf, t) => {
        switch (t.type) {
          case u0: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, nt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case c0:
            return (0, nt.set)(e, "active", !0);
          case l0: {
            let {
              payload: { step: r = _0 },
            } = t;
            return (0, nt.set)(e, "tick", e.tick + r);
          }
          case f0:
            return xf;
          case v0: {
            let {
              payload: { now: r },
            } = t;
            return (0, nt.set)(e, "tick", r);
          }
          case d0: {
            let r = (0, nt.addLast)(e.eventListeners, t.payload);
            return (0, nt.set)(e, "eventListeners", r);
          }
          case p0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, nt.setIn)(e, ["eventState", r], n);
          }
          case E0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, nt.setIn)(e, ["playbackState", r], n);
          }
          case h0: {
            let { width: r, mediaQueries: n } = t.payload,
              a = n.length,
              i = null;
            for (let o = 0; o < a; o++) {
              let { key: s, min: c, max: f } = n[o];
              if (r >= c && r <= f) {
                i = s;
                break;
              }
            }
            return (0, nt.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case g0:
            return (0, nt.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    qn.ixSession = y0;
  });
  var Ff = u((bj, Df) => {
    function I0() {
      (this.__data__ = []), (this.size = 0);
    }
    Df.exports = I0;
  });
  var Pn = u((Rj, Gf) => {
    function T0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Gf.exports = T0;
  });
  var qr = u((wj, Xf) => {
    var m0 = Pn();
    function O0(e, t) {
      for (var r = e.length; r--; ) if (m0(e[r][0], t)) return r;
      return -1;
    }
    Xf.exports = O0;
  });
  var Vf = u((Cj, Uf) => {
    var S0 = qr(),
      A0 = Array.prototype,
      b0 = A0.splice;
    function R0(e) {
      var t = this.__data__,
        r = S0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : b0.call(t, r, 1), --this.size, !0;
    }
    Uf.exports = R0;
  });
  var Wf = u((Nj, Bf) => {
    var w0 = qr();
    function C0(e) {
      var t = this.__data__,
        r = w0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Bf.exports = C0;
  });
  var Hf = u((qj, jf) => {
    var N0 = qr();
    function q0(e) {
      return N0(this.__data__, e) > -1;
    }
    jf.exports = q0;
  });
  var Kf = u((Pj, kf) => {
    var P0 = qr();
    function L0(e, t) {
      var r = this.__data__,
        n = P0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    kf.exports = L0;
  });
  var Pr = u((Lj, zf) => {
    var x0 = Ff(),
      M0 = Vf(),
      D0 = Wf(),
      F0 = Hf(),
      G0 = Kf();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = x0;
    $t.prototype.delete = M0;
    $t.prototype.get = D0;
    $t.prototype.has = F0;
    $t.prototype.set = G0;
    zf.exports = $t;
  });
  var $f = u((xj, Yf) => {
    var X0 = Pr();
    function U0() {
      (this.__data__ = new X0()), (this.size = 0);
    }
    Yf.exports = U0;
  });
  var Zf = u((Mj, Qf) => {
    function V0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Qf.exports = V0;
  });
  var ed = u((Dj, Jf) => {
    function B0(e) {
      return this.__data__.get(e);
    }
    Jf.exports = B0;
  });
  var rd = u((Fj, td) => {
    function W0(e) {
      return this.__data__.has(e);
    }
    td.exports = W0;
  });
  var it = u((Gj, nd) => {
    function j0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    nd.exports = j0;
  });
  var eo = u((Xj, id) => {
    var H0 = _t(),
      k0 = it(),
      K0 = "[object AsyncFunction]",
      z0 = "[object Function]",
      Y0 = "[object GeneratorFunction]",
      $0 = "[object Proxy]";
    function Q0(e) {
      if (!k0(e)) return !1;
      var t = H0(e);
      return t == z0 || t == Y0 || t == K0 || t == $0;
    }
    id.exports = Q0;
  });
  var od = u((Uj, ad) => {
    var Z0 = Ke(),
      J0 = Z0["__core-js_shared__"];
    ad.exports = J0;
  });
  var cd = u((Vj, ud) => {
    var to = od(),
      sd = (function () {
        var e = /[^.]+$/.exec((to && to.keys && to.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function eR(e) {
      return !!sd && sd in e;
    }
    ud.exports = eR;
  });
  var ro = u((Bj, ld) => {
    var tR = Function.prototype,
      rR = tR.toString;
    function nR(e) {
      if (e != null) {
        try {
          return rR.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    ld.exports = nR;
  });
  var dd = u((Wj, fd) => {
    var iR = eo(),
      aR = cd(),
      oR = it(),
      sR = ro(),
      uR = /[\\^$.*+?()[\]{}|]/g,
      cR = /^\[object .+?Constructor\]$/,
      lR = Function.prototype,
      fR = Object.prototype,
      dR = lR.toString,
      pR = fR.hasOwnProperty,
      vR = RegExp(
        "^" +
          dR
            .call(pR)
            .replace(uR, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function ER(e) {
      if (!oR(e) || aR(e)) return !1;
      var t = iR(e) ? vR : cR;
      return t.test(sR(e));
    }
    fd.exports = ER;
  });
  var vd = u((jj, pd) => {
    function hR(e, t) {
      return e?.[t];
    }
    pd.exports = hR;
  });
  var yt = u((Hj, Ed) => {
    var gR = dd(),
      _R = vd();
    function yR(e, t) {
      var r = _R(e, t);
      return gR(r) ? r : void 0;
    }
    Ed.exports = yR;
  });
  var Ln = u((kj, hd) => {
    var IR = yt(),
      TR = Ke(),
      mR = IR(TR, "Map");
    hd.exports = mR;
  });
  var Lr = u((Kj, gd) => {
    var OR = yt(),
      SR = OR(Object, "create");
    gd.exports = SR;
  });
  var Id = u((zj, yd) => {
    var _d = Lr();
    function AR() {
      (this.__data__ = _d ? _d(null) : {}), (this.size = 0);
    }
    yd.exports = AR;
  });
  var md = u((Yj, Td) => {
    function bR(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Td.exports = bR;
  });
  var Sd = u(($j, Od) => {
    var RR = Lr(),
      wR = "__lodash_hash_undefined__",
      CR = Object.prototype,
      NR = CR.hasOwnProperty;
    function qR(e) {
      var t = this.__data__;
      if (RR) {
        var r = t[e];
        return r === wR ? void 0 : r;
      }
      return NR.call(t, e) ? t[e] : void 0;
    }
    Od.exports = qR;
  });
  var bd = u((Qj, Ad) => {
    var PR = Lr(),
      LR = Object.prototype,
      xR = LR.hasOwnProperty;
    function MR(e) {
      var t = this.__data__;
      return PR ? t[e] !== void 0 : xR.call(t, e);
    }
    Ad.exports = MR;
  });
  var wd = u((Zj, Rd) => {
    var DR = Lr(),
      FR = "__lodash_hash_undefined__";
    function GR(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = DR && t === void 0 ? FR : t),
        this
      );
    }
    Rd.exports = GR;
  });
  var Nd = u((Jj, Cd) => {
    var XR = Id(),
      UR = md(),
      VR = Sd(),
      BR = bd(),
      WR = wd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = XR;
    Qt.prototype.delete = UR;
    Qt.prototype.get = VR;
    Qt.prototype.has = BR;
    Qt.prototype.set = WR;
    Cd.exports = Qt;
  });
  var Ld = u((e5, Pd) => {
    var qd = Nd(),
      jR = Pr(),
      HR = Ln();
    function kR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new qd(),
          map: new (HR || jR)(),
          string: new qd(),
        });
    }
    Pd.exports = kR;
  });
  var Md = u((t5, xd) => {
    function KR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    xd.exports = KR;
  });
  var xr = u((r5, Dd) => {
    var zR = Md();
    function YR(e, t) {
      var r = e.__data__;
      return zR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Dd.exports = YR;
  });
  var Gd = u((n5, Fd) => {
    var $R = xr();
    function QR(e) {
      var t = $R(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Fd.exports = QR;
  });
  var Ud = u((i5, Xd) => {
    var ZR = xr();
    function JR(e) {
      return ZR(this, e).get(e);
    }
    Xd.exports = JR;
  });
  var Bd = u((a5, Vd) => {
    var ew = xr();
    function tw(e) {
      return ew(this, e).has(e);
    }
    Vd.exports = tw;
  });
  var jd = u((o5, Wd) => {
    var rw = xr();
    function nw(e, t) {
      var r = rw(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Wd.exports = nw;
  });
  var xn = u((s5, Hd) => {
    var iw = Ld(),
      aw = Gd(),
      ow = Ud(),
      sw = Bd(),
      uw = jd();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = iw;
    Zt.prototype.delete = aw;
    Zt.prototype.get = ow;
    Zt.prototype.has = sw;
    Zt.prototype.set = uw;
    Hd.exports = Zt;
  });
  var Kd = u((u5, kd) => {
    var cw = Pr(),
      lw = Ln(),
      fw = xn(),
      dw = 200;
    function pw(e, t) {
      var r = this.__data__;
      if (r instanceof cw) {
        var n = r.__data__;
        if (!lw || n.length < dw - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new fw(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    kd.exports = pw;
  });
  var no = u((c5, zd) => {
    var vw = Pr(),
      Ew = $f(),
      hw = Zf(),
      gw = ed(),
      _w = rd(),
      yw = Kd();
    function Jt(e) {
      var t = (this.__data__ = new vw(e));
      this.size = t.size;
    }
    Jt.prototype.clear = Ew;
    Jt.prototype.delete = hw;
    Jt.prototype.get = gw;
    Jt.prototype.has = _w;
    Jt.prototype.set = yw;
    zd.exports = Jt;
  });
  var $d = u((l5, Yd) => {
    var Iw = "__lodash_hash_undefined__";
    function Tw(e) {
      return this.__data__.set(e, Iw), this;
    }
    Yd.exports = Tw;
  });
  var Zd = u((f5, Qd) => {
    function mw(e) {
      return this.__data__.has(e);
    }
    Qd.exports = mw;
  });
  var ep = u((d5, Jd) => {
    var Ow = xn(),
      Sw = $d(),
      Aw = Zd();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Ow(); ++t < r; ) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = Sw;
    Mn.prototype.has = Aw;
    Jd.exports = Mn;
  });
  var rp = u((p5, tp) => {
    function bw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    tp.exports = bw;
  });
  var ip = u((v5, np) => {
    function Rw(e, t) {
      return e.has(t);
    }
    np.exports = Rw;
  });
  var io = u((E5, ap) => {
    var ww = ep(),
      Cw = rp(),
      Nw = ip(),
      qw = 1,
      Pw = 2;
    function Lw(e, t, r, n, a, i) {
      var o = r & qw,
        s = e.length,
        c = t.length;
      if (s != c && !(o && c > s)) return !1;
      var f = i.get(e),
        p = i.get(t);
      if (f && p) return f == t && p == e;
      var d = -1,
        v = !0,
        I = r & Pw ? new ww() : void 0;
      for (i.set(e, t), i.set(t, e); ++d < s; ) {
        var O = e[d],
          S = t[d];
        if (n) var N = o ? n(S, O, d, t, e, i) : n(O, S, d, e, t, i);
        if (N !== void 0) {
          if (N) continue;
          v = !1;
          break;
        }
        if (I) {
          if (
            !Cw(t, function (b, R) {
              if (!Nw(I, R) && (O === b || a(O, b, r, n, i))) return I.push(R);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(O === S || a(O, S, r, n, i))) {
          v = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), v;
    }
    ap.exports = Lw;
  });
  var sp = u((h5, op) => {
    var xw = Ke(),
      Mw = xw.Uint8Array;
    op.exports = Mw;
  });
  var cp = u((g5, up) => {
    function Dw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n];
        }),
        r
      );
    }
    up.exports = Dw;
  });
  var fp = u((_5, lp) => {
    function Fw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    lp.exports = Fw;
  });
  var hp = u((y5, Ep) => {
    var dp = jt(),
      pp = sp(),
      Gw = Pn(),
      Xw = io(),
      Uw = cp(),
      Vw = fp(),
      Bw = 1,
      Ww = 2,
      jw = "[object Boolean]",
      Hw = "[object Date]",
      kw = "[object Error]",
      Kw = "[object Map]",
      zw = "[object Number]",
      Yw = "[object RegExp]",
      $w = "[object Set]",
      Qw = "[object String]",
      Zw = "[object Symbol]",
      Jw = "[object ArrayBuffer]",
      eC = "[object DataView]",
      vp = dp ? dp.prototype : void 0,
      ao = vp ? vp.valueOf : void 0;
    function tC(e, t, r, n, a, i, o) {
      switch (r) {
        case eC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Jw:
          return !(e.byteLength != t.byteLength || !i(new pp(e), new pp(t)));
        case jw:
        case Hw:
        case zw:
          return Gw(+e, +t);
        case kw:
          return e.name == t.name && e.message == t.message;
        case Yw:
        case Qw:
          return e == t + "";
        case Kw:
          var s = Uw;
        case $w:
          var c = n & Bw;
          if ((s || (s = Vw), e.size != t.size && !c)) return !1;
          var f = o.get(e);
          if (f) return f == t;
          (n |= Ww), o.set(e, t);
          var p = Xw(s(e), s(t), n, a, i, o);
          return o.delete(e), p;
        case Zw:
          if (ao) return ao.call(e) == ao.call(t);
      }
      return !1;
    }
    Ep.exports = tC;
  });
  var Dn = u((I5, gp) => {
    function rC(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    gp.exports = rC;
  });
  var Ae = u((T5, _p) => {
    var nC = Array.isArray;
    _p.exports = nC;
  });
  var oo = u((m5, yp) => {
    var iC = Dn(),
      aC = Ae();
    function oC(e, t, r) {
      var n = t(e);
      return aC(e) ? n : iC(n, r(e));
    }
    yp.exports = oC;
  });
  var Tp = u((O5, Ip) => {
    function sC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
        var o = e[r];
        t(o, r, e) && (i[a++] = o);
      }
      return i;
    }
    Ip.exports = sC;
  });
  var so = u((S5, mp) => {
    function uC() {
      return [];
    }
    mp.exports = uC;
  });
  var uo = u((A5, Sp) => {
    var cC = Tp(),
      lC = so(),
      fC = Object.prototype,
      dC = fC.propertyIsEnumerable,
      Op = Object.getOwnPropertySymbols,
      pC = Op
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                cC(Op(e), function (t) {
                  return dC.call(e, t);
                }));
          }
        : lC;
    Sp.exports = pC;
  });
  var bp = u((b5, Ap) => {
    function vC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Ap.exports = vC;
  });
  var wp = u((R5, Rp) => {
    var EC = _t(),
      hC = lt(),
      gC = "[object Arguments]";
    function _C(e) {
      return hC(e) && EC(e) == gC;
    }
    Rp.exports = _C;
  });
  var Mr = u((w5, qp) => {
    var Cp = wp(),
      yC = lt(),
      Np = Object.prototype,
      IC = Np.hasOwnProperty,
      TC = Np.propertyIsEnumerable,
      mC = Cp(
        (function () {
          return arguments;
        })()
      )
        ? Cp
        : function (e) {
            return yC(e) && IC.call(e, "callee") && !TC.call(e, "callee");
          };
    qp.exports = mC;
  });
  var Lp = u((C5, Pp) => {
    function OC() {
      return !1;
    }
    Pp.exports = OC;
  });
  var Fn = u((Dr, er) => {
    var SC = Ke(),
      AC = Lp(),
      Dp = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      xp = Dp && typeof er == "object" && er && !er.nodeType && er,
      bC = xp && xp.exports === Dp,
      Mp = bC ? SC.Buffer : void 0,
      RC = Mp ? Mp.isBuffer : void 0,
      wC = RC || AC;
    er.exports = wC;
  });
  var Gn = u((N5, Fp) => {
    var CC = 9007199254740991,
      NC = /^(?:0|[1-9]\d*)$/;
    function qC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? CC),
        !!t &&
          (r == "number" || (r != "symbol" && NC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Fp.exports = qC;
  });
  var Xn = u((q5, Gp) => {
    var PC = 9007199254740991;
    function LC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= PC;
    }
    Gp.exports = LC;
  });
  var Up = u((P5, Xp) => {
    var xC = _t(),
      MC = Xn(),
      DC = lt(),
      FC = "[object Arguments]",
      GC = "[object Array]",
      XC = "[object Boolean]",
      UC = "[object Date]",
      VC = "[object Error]",
      BC = "[object Function]",
      WC = "[object Map]",
      jC = "[object Number]",
      HC = "[object Object]",
      kC = "[object RegExp]",
      KC = "[object Set]",
      zC = "[object String]",
      YC = "[object WeakMap]",
      $C = "[object ArrayBuffer]",
      QC = "[object DataView]",
      ZC = "[object Float32Array]",
      JC = "[object Float64Array]",
      eN = "[object Int8Array]",
      tN = "[object Int16Array]",
      rN = "[object Int32Array]",
      nN = "[object Uint8Array]",
      iN = "[object Uint8ClampedArray]",
      aN = "[object Uint16Array]",
      oN = "[object Uint32Array]",
      de = {};
    de[ZC] =
      de[JC] =
      de[eN] =
      de[tN] =
      de[rN] =
      de[nN] =
      de[iN] =
      de[aN] =
      de[oN] =
        !0;
    de[FC] =
      de[GC] =
      de[$C] =
      de[XC] =
      de[QC] =
      de[UC] =
      de[VC] =
      de[BC] =
      de[WC] =
      de[jC] =
      de[HC] =
      de[kC] =
      de[KC] =
      de[zC] =
      de[YC] =
        !1;
    function sN(e) {
      return DC(e) && MC(e.length) && !!de[xC(e)];
    }
    Xp.exports = sN;
  });
  var Bp = u((L5, Vp) => {
    function uN(e) {
      return function (t) {
        return e(t);
      };
    }
    Vp.exports = uN;
  });
  var jp = u((Fr, tr) => {
    var cN = qa(),
      Wp = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      Gr = Wp && typeof tr == "object" && tr && !tr.nodeType && tr,
      lN = Gr && Gr.exports === Wp,
      co = lN && cN.process,
      fN = (function () {
        try {
          var e = Gr && Gr.require && Gr.require("util").types;
          return e || (co && co.binding && co.binding("util"));
        } catch {}
      })();
    tr.exports = fN;
  });
  var Un = u((x5, Kp) => {
    var dN = Up(),
      pN = Bp(),
      Hp = jp(),
      kp = Hp && Hp.isTypedArray,
      vN = kp ? pN(kp) : dN;
    Kp.exports = vN;
  });
  var lo = u((M5, zp) => {
    var EN = bp(),
      hN = Mr(),
      gN = Ae(),
      _N = Fn(),
      yN = Gn(),
      IN = Un(),
      TN = Object.prototype,
      mN = TN.hasOwnProperty;
    function ON(e, t) {
      var r = gN(e),
        n = !r && hN(e),
        a = !r && !n && _N(e),
        i = !r && !n && !a && IN(e),
        o = r || n || a || i,
        s = o ? EN(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || mN.call(e, f)) &&
          !(
            o &&
            (f == "length" ||
              (a && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              yN(f, c))
          ) &&
          s.push(f);
      return s;
    }
    zp.exports = ON;
  });
  var Vn = u((D5, Yp) => {
    var SN = Object.prototype;
    function AN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || SN;
      return e === r;
    }
    Yp.exports = AN;
  });
  var Qp = u((F5, $p) => {
    var bN = Pa(),
      RN = bN(Object.keys, Object);
    $p.exports = RN;
  });
  var Bn = u((G5, Zp) => {
    var wN = Vn(),
      CN = Qp(),
      NN = Object.prototype,
      qN = NN.hasOwnProperty;
    function PN(e) {
      if (!wN(e)) return CN(e);
      var t = [];
      for (var r in Object(e)) qN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Zp.exports = PN;
  });
  var Nt = u((X5, Jp) => {
    var LN = eo(),
      xN = Xn();
    function MN(e) {
      return e != null && xN(e.length) && !LN(e);
    }
    Jp.exports = MN;
  });
  var Xr = u((U5, ev) => {
    var DN = lo(),
      FN = Bn(),
      GN = Nt();
    function XN(e) {
      return GN(e) ? DN(e) : FN(e);
    }
    ev.exports = XN;
  });
  var rv = u((V5, tv) => {
    var UN = oo(),
      VN = uo(),
      BN = Xr();
    function WN(e) {
      return UN(e, BN, VN);
    }
    tv.exports = WN;
  });
  var av = u((B5, iv) => {
    var nv = rv(),
      jN = 1,
      HN = Object.prototype,
      kN = HN.hasOwnProperty;
    function KN(e, t, r, n, a, i) {
      var o = r & jN,
        s = nv(e),
        c = s.length,
        f = nv(t),
        p = f.length;
      if (c != p && !o) return !1;
      for (var d = c; d--; ) {
        var v = s[d];
        if (!(o ? v in t : kN.call(t, v))) return !1;
      }
      var I = i.get(e),
        O = i.get(t);
      if (I && O) return I == t && O == e;
      var S = !0;
      i.set(e, t), i.set(t, e);
      for (var N = o; ++d < c; ) {
        v = s[d];
        var b = e[v],
          R = t[v];
        if (n) var y = o ? n(R, b, v, t, e, i) : n(b, R, v, e, t, i);
        if (!(y === void 0 ? b === R || a(b, R, r, n, i) : y)) {
          S = !1;
          break;
        }
        N || (N = v == "constructor");
      }
      if (S && !N) {
        var q = e.constructor,
          w = t.constructor;
        q != w &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof q == "function" &&
            q instanceof q &&
            typeof w == "function" &&
            w instanceof w
          ) &&
          (S = !1);
      }
      return i.delete(e), i.delete(t), S;
    }
    iv.exports = KN;
  });
  var sv = u((W5, ov) => {
    var zN = yt(),
      YN = Ke(),
      $N = zN(YN, "DataView");
    ov.exports = $N;
  });
  var cv = u((j5, uv) => {
    var QN = yt(),
      ZN = Ke(),
      JN = QN(ZN, "Promise");
    uv.exports = JN;
  });
  var fv = u((H5, lv) => {
    var eq = yt(),
      tq = Ke(),
      rq = eq(tq, "Set");
    lv.exports = rq;
  });
  var fo = u((k5, dv) => {
    var nq = yt(),
      iq = Ke(),
      aq = nq(iq, "WeakMap");
    dv.exports = aq;
  });
  var Wn = u((K5, yv) => {
    var po = sv(),
      vo = Ln(),
      Eo = cv(),
      ho = fv(),
      go = fo(),
      _v = _t(),
      rr = ro(),
      pv = "[object Map]",
      oq = "[object Object]",
      vv = "[object Promise]",
      Ev = "[object Set]",
      hv = "[object WeakMap]",
      gv = "[object DataView]",
      sq = rr(po),
      uq = rr(vo),
      cq = rr(Eo),
      lq = rr(ho),
      fq = rr(go),
      qt = _v;
    ((po && qt(new po(new ArrayBuffer(1))) != gv) ||
      (vo && qt(new vo()) != pv) ||
      (Eo && qt(Eo.resolve()) != vv) ||
      (ho && qt(new ho()) != Ev) ||
      (go && qt(new go()) != hv)) &&
      (qt = function (e) {
        var t = _v(e),
          r = t == oq ? e.constructor : void 0,
          n = r ? rr(r) : "";
        if (n)
          switch (n) {
            case sq:
              return gv;
            case uq:
              return pv;
            case cq:
              return vv;
            case lq:
              return Ev;
            case fq:
              return hv;
          }
        return t;
      });
    yv.exports = qt;
  });
  var Rv = u((z5, bv) => {
    var _o = no(),
      dq = io(),
      pq = hp(),
      vq = av(),
      Iv = Wn(),
      Tv = Ae(),
      mv = Fn(),
      Eq = Un(),
      hq = 1,
      Ov = "[object Arguments]",
      Sv = "[object Array]",
      jn = "[object Object]",
      gq = Object.prototype,
      Av = gq.hasOwnProperty;
    function _q(e, t, r, n, a, i) {
      var o = Tv(e),
        s = Tv(t),
        c = o ? Sv : Iv(e),
        f = s ? Sv : Iv(t);
      (c = c == Ov ? jn : c), (f = f == Ov ? jn : f);
      var p = c == jn,
        d = f == jn,
        v = c == f;
      if (v && mv(e)) {
        if (!mv(t)) return !1;
        (o = !0), (p = !1);
      }
      if (v && !p)
        return (
          i || (i = new _o()),
          o || Eq(e) ? dq(e, t, r, n, a, i) : pq(e, t, c, r, n, a, i)
        );
      if (!(r & hq)) {
        var I = p && Av.call(e, "__wrapped__"),
          O = d && Av.call(t, "__wrapped__");
        if (I || O) {
          var S = I ? e.value() : e,
            N = O ? t.value() : t;
          return i || (i = new _o()), a(S, N, r, n, i);
        }
      }
      return v ? (i || (i = new _o()), vq(e, t, r, n, a, i)) : !1;
    }
    bv.exports = _q;
  });
  var yo = u((Y5, Nv) => {
    var yq = Rv(),
      wv = lt();
    function Cv(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!wv(e) && !wv(t))
        ? e !== e && t !== t
        : yq(e, t, r, n, Cv, a);
    }
    Nv.exports = Cv;
  });
  var Pv = u(($5, qv) => {
    var Iq = no(),
      Tq = yo(),
      mq = 1,
      Oq = 2;
    function Sq(e, t, r, n) {
      var a = r.length,
        i = a,
        o = !n;
      if (e == null) return !i;
      for (e = Object(e); a--; ) {
        var s = r[a];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++a < i; ) {
        s = r[a];
        var c = s[0],
          f = e[c],
          p = s[1];
        if (o && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var d = new Iq();
          if (n) var v = n(f, p, c, e, t, d);
          if (!(v === void 0 ? Tq(p, f, mq | Oq, n, d) : v)) return !1;
        }
      }
      return !0;
    }
    qv.exports = Sq;
  });
  var Io = u((Q5, Lv) => {
    var Aq = it();
    function bq(e) {
      return e === e && !Aq(e);
    }
    Lv.exports = bq;
  });
  var Mv = u((Z5, xv) => {
    var Rq = Io(),
      wq = Xr();
    function Cq(e) {
      for (var t = wq(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n];
        t[r] = [n, a, Rq(a)];
      }
      return t;
    }
    xv.exports = Cq;
  });
  var To = u((J5, Dv) => {
    function Nq(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Dv.exports = Nq;
  });
  var Gv = u((eH, Fv) => {
    var qq = Pv(),
      Pq = Mv(),
      Lq = To();
    function xq(e) {
      var t = Pq(e);
      return t.length == 1 && t[0][2]
        ? Lq(t[0][0], t[0][1])
        : function (r) {
            return r === e || qq(r, e, t);
          };
    }
    Fv.exports = xq;
  });
  var Ur = u((tH, Xv) => {
    var Mq = _t(),
      Dq = lt(),
      Fq = "[object Symbol]";
    function Gq(e) {
      return typeof e == "symbol" || (Dq(e) && Mq(e) == Fq);
    }
    Xv.exports = Gq;
  });
  var Hn = u((rH, Uv) => {
    var Xq = Ae(),
      Uq = Ur(),
      Vq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Bq = /^\w*$/;
    function Wq(e, t) {
      if (Xq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        Uq(e)
        ? !0
        : Bq.test(e) || !Vq.test(e) || (t != null && e in Object(t));
    }
    Uv.exports = Wq;
  });
  var Wv = u((nH, Bv) => {
    var Vv = xn(),
      jq = "Expected a function";
    function mo(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(jq);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(a)) return i.get(a);
        var o = e.apply(this, n);
        return (r.cache = i.set(a, o) || i), o;
      };
      return (r.cache = new (mo.Cache || Vv)()), r;
    }
    mo.Cache = Vv;
    Bv.exports = mo;
  });
  var Hv = u((iH, jv) => {
    var Hq = Wv(),
      kq = 500;
    function Kq(e) {
      var t = Hq(e, function (n) {
          return r.size === kq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    jv.exports = Kq;
  });
  var Kv = u((aH, kv) => {
    var zq = Hv(),
      Yq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      $q = /\\(\\)?/g,
      Qq = zq(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Yq, function (r, n, a, i) {
            t.push(a ? i.replace($q, "$1") : n || r);
          }),
          t
        );
      });
    kv.exports = Qq;
  });
  var Oo = u((oH, zv) => {
    function Zq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    zv.exports = Zq;
  });
  var eE = u((sH, Jv) => {
    var Yv = jt(),
      Jq = Oo(),
      eP = Ae(),
      tP = Ur(),
      rP = 1 / 0,
      $v = Yv ? Yv.prototype : void 0,
      Qv = $v ? $v.toString : void 0;
    function Zv(e) {
      if (typeof e == "string") return e;
      if (eP(e)) return Jq(e, Zv) + "";
      if (tP(e)) return Qv ? Qv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -rP ? "-0" : t;
    }
    Jv.exports = Zv;
  });
  var rE = u((uH, tE) => {
    var nP = eE();
    function iP(e) {
      return e == null ? "" : nP(e);
    }
    tE.exports = iP;
  });
  var Vr = u((cH, nE) => {
    var aP = Ae(),
      oP = Hn(),
      sP = Kv(),
      uP = rE();
    function cP(e, t) {
      return aP(e) ? e : oP(e, t) ? [e] : sP(uP(e));
    }
    nE.exports = cP;
  });
  var nr = u((lH, iE) => {
    var lP = Ur(),
      fP = 1 / 0;
    function dP(e) {
      if (typeof e == "string" || lP(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -fP ? "-0" : t;
    }
    iE.exports = dP;
  });
  var kn = u((fH, aE) => {
    var pP = Vr(),
      vP = nr();
    function EP(e, t) {
      t = pP(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[vP(t[r++])];
      return r && r == n ? e : void 0;
    }
    aE.exports = EP;
  });
  var Kn = u((dH, oE) => {
    var hP = kn();
    function gP(e, t, r) {
      var n = e == null ? void 0 : hP(e, t);
      return n === void 0 ? r : n;
    }
    oE.exports = gP;
  });
  var uE = u((pH, sE) => {
    function _P(e, t) {
      return e != null && t in Object(e);
    }
    sE.exports = _P;
  });
  var lE = u((vH, cE) => {
    var yP = Vr(),
      IP = Mr(),
      TP = Ae(),
      mP = Gn(),
      OP = Xn(),
      SP = nr();
    function AP(e, t, r) {
      t = yP(t, e);
      for (var n = -1, a = t.length, i = !1; ++n < a; ) {
        var o = SP(t[n]);
        if (!(i = e != null && r(e, o))) break;
        e = e[o];
      }
      return i || ++n != a
        ? i
        : ((a = e == null ? 0 : e.length),
          !!a && OP(a) && mP(o, a) && (TP(e) || IP(e)));
    }
    cE.exports = AP;
  });
  var dE = u((EH, fE) => {
    var bP = uE(),
      RP = lE();
    function wP(e, t) {
      return e != null && RP(e, t, bP);
    }
    fE.exports = wP;
  });
  var vE = u((hH, pE) => {
    var CP = yo(),
      NP = Kn(),
      qP = dE(),
      PP = Hn(),
      LP = Io(),
      xP = To(),
      MP = nr(),
      DP = 1,
      FP = 2;
    function GP(e, t) {
      return PP(e) && LP(t)
        ? xP(MP(e), t)
        : function (r) {
            var n = NP(r, e);
            return n === void 0 && n === t ? qP(r, e) : CP(t, n, DP | FP);
          };
    }
    pE.exports = GP;
  });
  var zn = u((gH, EE) => {
    function XP(e) {
      return e;
    }
    EE.exports = XP;
  });
  var So = u((_H, hE) => {
    function UP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    hE.exports = UP;
  });
  var _E = u((yH, gE) => {
    var VP = kn();
    function BP(e) {
      return function (t) {
        return VP(t, e);
      };
    }
    gE.exports = BP;
  });
  var IE = u((IH, yE) => {
    var WP = So(),
      jP = _E(),
      HP = Hn(),
      kP = nr();
    function KP(e) {
      return HP(e) ? WP(kP(e)) : jP(e);
    }
    yE.exports = KP;
  });
  var It = u((TH, TE) => {
    var zP = Gv(),
      YP = vE(),
      $P = zn(),
      QP = Ae(),
      ZP = IE();
    function JP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? $P
        : typeof e == "object"
        ? QP(e)
          ? YP(e[0], e[1])
          : zP(e)
        : ZP(e);
    }
    TE.exports = JP;
  });
  var Ao = u((mH, mE) => {
    var eL = It(),
      tL = Nt(),
      rL = Xr();
    function nL(e) {
      return function (t, r, n) {
        var a = Object(t);
        if (!tL(t)) {
          var i = eL(r, 3);
          (t = rL(t)),
            (r = function (s) {
              return i(a[s], s, a);
            });
        }
        var o = e(t, r, n);
        return o > -1 ? a[i ? t[o] : o] : void 0;
      };
    }
    mE.exports = nL;
  });
  var bo = u((OH, OE) => {
    function iL(e, t, r, n) {
      for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    OE.exports = iL;
  });
  var AE = u((SH, SE) => {
    var aL = /\s/;
    function oL(e) {
      for (var t = e.length; t-- && aL.test(e.charAt(t)); );
      return t;
    }
    SE.exports = oL;
  });
  var RE = u((AH, bE) => {
    var sL = AE(),
      uL = /^\s+/;
    function cL(e) {
      return e && e.slice(0, sL(e) + 1).replace(uL, "");
    }
    bE.exports = cL;
  });
  var Yn = u((bH, NE) => {
    var lL = RE(),
      wE = it(),
      fL = Ur(),
      CE = 0 / 0,
      dL = /^[-+]0x[0-9a-f]+$/i,
      pL = /^0b[01]+$/i,
      vL = /^0o[0-7]+$/i,
      EL = parseInt;
    function hL(e) {
      if (typeof e == "number") return e;
      if (fL(e)) return CE;
      if (wE(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = wE(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = lL(e);
      var r = pL.test(e);
      return r || vL.test(e) ? EL(e.slice(2), r ? 2 : 8) : dL.test(e) ? CE : +e;
    }
    NE.exports = hL;
  });
  var LE = u((RH, PE) => {
    var gL = Yn(),
      qE = 1 / 0,
      _L = 17976931348623157e292;
    function yL(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = gL(e)), e === qE || e === -qE)) {
        var t = e < 0 ? -1 : 1;
        return t * _L;
      }
      return e === e ? e : 0;
    }
    PE.exports = yL;
  });
  var Ro = u((wH, xE) => {
    var IL = LE();
    function TL(e) {
      var t = IL(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    xE.exports = TL;
  });
  var DE = u((CH, ME) => {
    var mL = bo(),
      OL = It(),
      SL = Ro(),
      AL = Math.max;
    function bL(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var a = r == null ? 0 : SL(r);
      return a < 0 && (a = AL(n + a, 0)), mL(e, OL(t, 3), a);
    }
    ME.exports = bL;
  });
  var wo = u((NH, FE) => {
    var RL = Ao(),
      wL = DE(),
      CL = RL(wL);
    FE.exports = CL;
  });
  var Qn = u((qe) => {
    "use strict";
    var NL = je().default;
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.withBrowser =
      qe.TRANSFORM_STYLE_PREFIXED =
      qe.TRANSFORM_PREFIXED =
      qe.IS_BROWSER_ENV =
      qe.FLEX_PREFIXED =
      qe.ELEMENT_MATCHES =
        void 0;
    var qL = NL(wo()),
      XE = typeof window < "u";
    qe.IS_BROWSER_ENV = XE;
    var $n = (e, t) => (XE ? e() : t);
    qe.withBrowser = $n;
    var PL = $n(() =>
      (0, qL.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    qe.ELEMENT_MATCHES = PL;
    var LL = $n(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let a = 0; a < n; a++) {
          let i = t[a];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    qe.FLEX_PREFIXED = LL;
    var UE = $n(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let a = 0; a < n; a++) {
          let i = t[a] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    qe.TRANSFORM_PREFIXED = UE;
    var GE = UE.split("transform")[0],
      xL = GE ? GE + "TransformStyle" : "transformStyle";
    qe.TRANSFORM_STYLE_PREFIXED = xL;
  });
  var Co = u((PH, HE) => {
    var ML = 4,
      DL = 0.001,
      FL = 1e-7,
      GL = 10,
      Br = 11,
      Zn = 1 / (Br - 1),
      XL = typeof Float32Array == "function";
    function VE(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function BE(e, t) {
      return 3 * t - 6 * e;
    }
    function WE(e) {
      return 3 * e;
    }
    function Jn(e, t, r) {
      return ((VE(t, r) * e + BE(t, r)) * e + WE(t)) * e;
    }
    function jE(e, t, r) {
      return 3 * VE(t, r) * e * e + 2 * BE(t, r) * e + WE(t);
    }
    function UL(e, t, r, n, a) {
      var i,
        o,
        s = 0;
      do
        (o = t + (r - t) / 2), (i = Jn(o, n, a) - e), i > 0 ? (r = o) : (t = o);
      while (Math.abs(i) > FL && ++s < GL);
      return o;
    }
    function VL(e, t, r, n) {
      for (var a = 0; a < ML; ++a) {
        var i = jE(t, r, n);
        if (i === 0) return t;
        var o = Jn(t, r, n) - e;
        t -= o / i;
      }
      return t;
    }
    HE.exports = function (t, r, n, a) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = XL ? new Float32Array(Br) : new Array(Br);
      if (t !== r || n !== a)
        for (var o = 0; o < Br; ++o) i[o] = Jn(o * Zn, t, n);
      function s(c) {
        for (var f = 0, p = 1, d = Br - 1; p !== d && i[p] <= c; ++p) f += Zn;
        --p;
        var v = (c - i[p]) / (i[p + 1] - i[p]),
          I = f + v * Zn,
          O = jE(I, t, n);
        return O >= DL ? VL(c, I, t, n) : O === 0 ? I : UL(c, f, f + Zn, t, n);
      }
      return function (f) {
        return t === r && n === a
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Jn(s(f), r, a);
      };
    };
  });
  var No = u((J) => {
    "use strict";
    var BL = je().default;
    Object.defineProperty(J, "__esModule", { value: !0 });
    J.bounce = Sx;
    J.bouncePast = Ax;
    J.easeOut = J.easeInOut = J.easeIn = J.ease = void 0;
    J.inBack = Ex;
    J.inCirc = fx;
    J.inCubic = $L;
    J.inElastic = _x;
    J.inExpo = ux;
    J.inOutBack = gx;
    J.inOutCirc = px;
    J.inOutCubic = ZL;
    J.inOutElastic = Ix;
    J.inOutExpo = lx;
    J.inOutQuad = YL;
    J.inOutQuart = tx;
    J.inOutQuint = ix;
    J.inOutSine = sx;
    J.inQuad = KL;
    J.inQuart = JL;
    J.inQuint = rx;
    J.inSine = ax;
    J.outBack = hx;
    J.outBounce = vx;
    J.outCirc = dx;
    J.outCubic = QL;
    J.outElastic = yx;
    J.outExpo = cx;
    J.outQuad = zL;
    J.outQuart = ex;
    J.outQuint = nx;
    J.outSine = ox;
    J.swingFrom = mx;
    J.swingFromTo = Tx;
    J.swingTo = Ox;
    var ei = BL(Co()),
      dt = 1.70158,
      WL = (0, ei.default)(0.25, 0.1, 0.25, 1);
    J.ease = WL;
    var jL = (0, ei.default)(0.42, 0, 1, 1);
    J.easeIn = jL;
    var HL = (0, ei.default)(0, 0, 0.58, 1);
    J.easeOut = HL;
    var kL = (0, ei.default)(0.42, 0, 0.58, 1);
    J.easeInOut = kL;
    function KL(e) {
      return Math.pow(e, 2);
    }
    function zL(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function YL(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function $L(e) {
      return Math.pow(e, 3);
    }
    function QL(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function ZL(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function JL(e) {
      return Math.pow(e, 4);
    }
    function ex(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function tx(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function rx(e) {
      return Math.pow(e, 5);
    }
    function nx(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function ix(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function ax(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function ox(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function sx(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function ux(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function cx(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function lx(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function fx(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function dx(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function px(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function vx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function Ex(e) {
      let t = dt;
      return e * e * ((t + 1) * e - t);
    }
    function hx(e) {
      let t = dt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function gx(e) {
      let t = dt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function _x(e) {
      let t = dt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function yx(e) {
      let t = dt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function Ix(e) {
      let t = dt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function Tx(e) {
      let t = dt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function mx(e) {
      let t = dt;
      return e * e * ((t + 1) * e - t);
    }
    function Ox(e) {
      let t = dt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function Sx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function Ax(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Po = u((Wr) => {
    "use strict";
    var bx = je().default,
      Rx = bt().default;
    Object.defineProperty(Wr, "__esModule", { value: !0 });
    Wr.applyEasing = Nx;
    Wr.createBezierEasing = Cx;
    Wr.optimizeFloat = qo;
    var kE = Rx(No()),
      wx = bx(Co());
    function qo(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        a = Number(Math.round(e * n) / n);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function Cx(e) {
      return (0, wx.default)(...e);
    }
    function Nx(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : qo(r ? (t > 0 ? r(t) : t) : t > 0 && e && kE[e] ? kE[e](t) : t);
    }
  });
  var $E = u((ir) => {
    "use strict";
    Object.defineProperty(ir, "__esModule", { value: !0 });
    ir.createElementState = YE;
    ir.ixElements = void 0;
    ir.mergeActionState = Lo;
    var ti = Yt(),
      zE = Me(),
      {
        HTML_ELEMENT: MH,
        PLAIN_OBJECT: qx,
        ABSTRACT_NODE: DH,
        CONFIG_X_VALUE: Px,
        CONFIG_Y_VALUE: Lx,
        CONFIG_Z_VALUE: xx,
        CONFIG_VALUE: Mx,
        CONFIG_X_UNIT: Dx,
        CONFIG_Y_UNIT: Fx,
        CONFIG_Z_UNIT: Gx,
        CONFIG_UNIT: Xx,
      } = zE.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: Ux,
        IX2_INSTANCE_ADDED: Vx,
        IX2_ELEMENT_STATE_CHANGED: Bx,
      } = zE.IX2EngineActionTypes,
      KE = {},
      Wx = "refState",
      jx = (e = KE, t = {}) => {
        switch (t.type) {
          case Ux:
            return KE;
          case Vx: {
            let {
                elementId: r,
                element: n,
                origin: a,
                actionItem: i,
                refType: o,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, ti.getIn)(c, [r, n]) !== n && (c = YE(c, n, o, r, i)),
              Lo(c, r, s, a, i)
            );
          }
          case Bx: {
            let {
              elementId: r,
              actionTypeId: n,
              current: a,
              actionItem: i,
            } = t.payload;
            return Lo(e, r, n, a, i);
          }
          default:
            return e;
        }
      };
    ir.ixElements = jx;
    function YE(e, t, r, n, a) {
      let i =
        r === qx ? (0, ti.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, ti.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Lo(e, t, r, n, a) {
      let i = kx(a),
        o = [t, Wx, r];
      return (0, ti.mergeIn)(e, o, n, i);
    }
    var Hx = [
      [Px, Dx],
      [Lx, Fx],
      [xx, Gx],
      [Mx, Xx],
    ];
    function kx(e) {
      let { config: t } = e;
      return Hx.reduce((r, n) => {
        let a = n[0],
          i = n[1],
          o = t[a],
          s = t[i];
        return o != null && s != null && (r[i] = s), r;
      }, {});
    }
  });
  var QE = u((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.renderPlugin =
      be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
        void 0;
    var Kx = (e) => e.value;
    be.getPluginConfig = Kx;
    var zx = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    be.getPluginDuration = zx;
    var Yx = (e) => e || { value: 0 };
    be.getPluginOrigin = Yx;
    var $x = (e) => ({ value: e.value });
    be.getPluginDestination = $x;
    var Qx = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    be.createPluginInstance = Qx;
    var Zx = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    be.renderPlugin = Zx;
    var Jx = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    be.clearPlugin = Jx;
  });
  var JE = u((Re) => {
    "use strict";
    Object.defineProperty(Re, "__esModule", { value: !0 });
    Re.renderPlugin =
      Re.getPluginOrigin =
      Re.getPluginDuration =
      Re.getPluginDestination =
      Re.getPluginConfig =
      Re.createPluginInstance =
      Re.clearPlugin =
        void 0;
    var eM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      tM = () => window.Webflow.require("spline"),
      rM = (e, t) => e.filter((r) => !t.includes(r)),
      nM = (e, t) => e.value[t];
    Re.getPluginConfig = nM;
    var iM = () => null;
    Re.getPluginDuration = iM;
    var ZE = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      aM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            o = rM(n, i);
          return o.length ? o.reduce((c, f) => ((c[f] = ZE[f]), c), e) : e;
        }
        return n.reduce((i, o) => ((i[o] = ZE[o]), i), {});
      };
    Re.getPluginOrigin = aM;
    var oM = (e) => e.value;
    Re.getPluginDestination = oM;
    var sM = (e, t) => {
      var r, n;
      let a =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return a ? eM(a) : null;
    };
    Re.createPluginInstance = sM;
    var uM = (e, t, r) => {
      let n = tM().getInstance(e),
        a = r.config.target.objectId;
      if (!n || !a) return;
      let i = n.spline.findObjectById(a);
      if (!i) return;
      let { PLUGIN_SPLINE: o } = t;
      o.positionX != null && (i.position.x = o.positionX),
        o.positionY != null && (i.position.y = o.positionY),
        o.positionZ != null && (i.position.z = o.positionZ),
        o.rotationX != null && (i.rotation.x = o.rotationX),
        o.rotationY != null && (i.rotation.y = o.rotationY),
        o.rotationZ != null && (i.rotation.z = o.rotationZ),
        o.scaleX != null && (i.scale.x = o.scaleX),
        o.scaleY != null && (i.scale.y = o.scaleY),
        o.scaleZ != null && (i.scale.z = o.scaleZ);
    };
    Re.renderPlugin = uM;
    var cM = () => null;
    Re.clearPlugin = cM;
  });
  var nh = u((ri) => {
    "use strict";
    var rh = bt().default,
      lM = je().default;
    Object.defineProperty(ri, "__esModule", { value: !0 });
    ri.pluginMethodMap = void 0;
    var eh = lM(zt()),
      th = Me(),
      fM = rh(QE()),
      dM = rh(JE()),
      pM = new Map([
        [th.ActionTypeConsts.PLUGIN_LOTTIE, (0, eh.default)({}, fM)],
        [th.ActionTypeConsts.PLUGIN_SPLINE, (0, eh.default)({}, dM)],
      ]);
    ri.pluginMethodMap = pM;
  });
  var xo = u((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.isPluginType = EM;
    Oe.renderPlugin = void 0;
    var vM = Qn(),
      ih = nh();
    function EM(e) {
      return ih.pluginMethodMap.has(e);
    }
    var Pt = (e) => (t) => {
        if (!vM.IS_BROWSER_ENV) return () => null;
        let r = ih.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      hM = Pt("getPluginConfig");
    Oe.getPluginConfig = hM;
    var gM = Pt("getPluginOrigin");
    Oe.getPluginOrigin = gM;
    var _M = Pt("getPluginDuration");
    Oe.getPluginDuration = _M;
    var yM = Pt("getPluginDestination");
    Oe.getPluginDestination = yM;
    var IM = Pt("createPluginInstance");
    Oe.createPluginInstance = IM;
    var TM = Pt("renderPlugin");
    Oe.renderPlugin = TM;
    var mM = Pt("clearPlugin");
    Oe.clearPlugin = mM;
  });
  var oh = u((BH, ah) => {
    function OM(e, t) {
      return e == null || e !== e ? t : e;
    }
    ah.exports = OM;
  });
  var uh = u((WH, sh) => {
    function SM(e, t, r, n) {
      var a = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++a]); ++a < i; ) r = t(r, e[a], a, e);
      return r;
    }
    sh.exports = SM;
  });
  var lh = u((jH, ch) => {
    function AM(e) {
      return function (t, r, n) {
        for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
          var c = o[e ? s : ++a];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    ch.exports = AM;
  });
  var dh = u((HH, fh) => {
    var bM = lh(),
      RM = bM();
    fh.exports = RM;
  });
  var Mo = u((kH, ph) => {
    var wM = dh(),
      CM = Xr();
    function NM(e, t) {
      return e && wM(e, t, CM);
    }
    ph.exports = NM;
  });
  var Eh = u((KH, vh) => {
    var qM = Nt();
    function PM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!qM(r)) return e(r, n);
        for (
          var a = r.length, i = t ? a : -1, o = Object(r);
          (t ? i-- : ++i < a) && n(o[i], i, o) !== !1;

        );
        return r;
      };
    }
    vh.exports = PM;
  });
  var Do = u((zH, hh) => {
    var LM = Mo(),
      xM = Eh(),
      MM = xM(LM);
    hh.exports = MM;
  });
  var _h = u((YH, gh) => {
    function DM(e, t, r, n, a) {
      return (
        a(e, function (i, o, s) {
          r = n ? ((n = !1), i) : t(r, i, o, s);
        }),
        r
      );
    }
    gh.exports = DM;
  });
  var Ih = u(($H, yh) => {
    var FM = uh(),
      GM = Do(),
      XM = It(),
      UM = _h(),
      VM = Ae();
    function BM(e, t, r) {
      var n = VM(e) ? FM : UM,
        a = arguments.length < 3;
      return n(e, XM(t, 4), r, a, GM);
    }
    yh.exports = BM;
  });
  var mh = u((QH, Th) => {
    var WM = bo(),
      jM = It(),
      HM = Ro(),
      kM = Math.max,
      KM = Math.min;
    function zM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var a = n - 1;
      return (
        r !== void 0 &&
          ((a = HM(r)), (a = r < 0 ? kM(n + a, 0) : KM(a, n - 1))),
        WM(e, jM(t, 3), a, !0)
      );
    }
    Th.exports = zM;
  });
  var Sh = u((ZH, Oh) => {
    var YM = Ao(),
      $M = mh(),
      QM = YM($M);
    Oh.exports = QM;
  });
  var bh = u((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    ni.default = void 0;
    var ZM = Object.prototype.hasOwnProperty;
    function Ah(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function JM(e, t) {
      if (Ah(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let a = 0; a < r.length; a++)
        if (!ZM.call(t, r[a]) || !Ah(e[r[a]], t[r[a]])) return !1;
      return !0;
    }
    var eD = JM;
    ni.default = eD;
  });
  var Hh = u((le) => {
    "use strict";
    var si = je().default;
    Object.defineProperty(le, "__esModule", { value: !0 });
    le.cleanupHTMLElement = ZD;
    le.clearAllStyles = QD;
    le.clearObjectCache = _D;
    le.getActionListProgress = eF;
    le.getAffectedElements = Wo;
    le.getComputedStyle = bD;
    le.getDestinationValues = LD;
    le.getElementId = mD;
    le.getInstanceId = ID;
    le.getInstanceOrigin = CD;
    le.getItemConfigByKey = void 0;
    le.getMaxDurationItemIndex = jh;
    le.getNamespacedParameterId = nF;
    le.getRenderType = Vh;
    le.getStyleProp = xD;
    le.mediaQueriesEqual = aF;
    le.observeStore = AD;
    le.reduceListToGroup = tF;
    le.reifyState = OD;
    le.renderHTMLElement = MD;
    Object.defineProperty(le, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return xh.default;
      },
    });
    le.shouldAllowMediaQuery = iF;
    le.shouldNamespaceEventParameter = rF;
    le.stringifyTarget = oF;
    var Tt = si(oh()),
      Xo = si(Ih()),
      Go = si(Sh()),
      Rh = Yt(),
      Lt = Me(),
      xh = si(bh()),
      tD = Po(),
      st = xo(),
      Pe = Qn(),
      {
        BACKGROUND: rD,
        TRANSFORM: nD,
        TRANSLATE_3D: iD,
        SCALE_3D: aD,
        ROTATE_X: oD,
        ROTATE_Y: sD,
        ROTATE_Z: uD,
        SKEW: cD,
        PRESERVE_3D: lD,
        FLEX: fD,
        OPACITY: ai,
        FILTER: jr,
        FONT_VARIATION_SETTINGS: Hr,
        WIDTH: at,
        HEIGHT: ot,
        BACKGROUND_COLOR: Mh,
        BORDER_COLOR: dD,
        COLOR: pD,
        CHILDREN: wh,
        IMMEDIATE_CHILDREN: vD,
        SIBLINGS: Ch,
        PARENT: ED,
        DISPLAY: oi,
        WILL_CHANGE: ar,
        AUTO: mt,
        COMMA_DELIMITER: kr,
        COLON_DELIMITER: hD,
        BAR_DELIMITER: Fo,
        RENDER_TRANSFORM: Dh,
        RENDER_GENERAL: Uo,
        RENDER_STYLE: Vo,
        RENDER_PLUGIN: Fh,
      } = Lt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: or,
        TRANSFORM_SCALE: sr,
        TRANSFORM_ROTATE: ur,
        TRANSFORM_SKEW: Kr,
        STYLE_OPACITY: Gh,
        STYLE_FILTER: zr,
        STYLE_FONT_VARIATION: Yr,
        STYLE_SIZE: cr,
        STYLE_BACKGROUND_COLOR: lr,
        STYLE_BORDER: fr,
        STYLE_TEXT_COLOR: dr,
        GENERAL_DISPLAY: ui,
        OBJECT_VALUE: gD,
      } = Lt.ActionTypeConsts,
      Xh = (e) => e.trim(),
      Bo = Object.freeze({ [lr]: Mh, [fr]: dD, [dr]: pD }),
      Uh = Object.freeze({
        [Pe.TRANSFORM_PREFIXED]: nD,
        [Mh]: rD,
        [ai]: ai,
        [jr]: jr,
        [at]: at,
        [ot]: ot,
        [Hr]: Hr,
      }),
      ii = new Map();
    function _D() {
      ii.clear();
    }
    var yD = 1;
    function ID() {
      return "i" + yD++;
    }
    var TD = 1;
    function mD(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + TD++;
    }
    function OD({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Xo.default)(
          e,
          (o, s) => {
            let { eventTypeId: c } = s;
            return o[c] || (o[c] = {}), (o[c][s.id] = s), o;
          },
          {}
        ),
        a = r && r.mediaQueries,
        i = [];
      return (
        a
          ? (i = a.map((o) => o.key))
          : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: a,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var SD = (e, t) => e === t;
    function AD({ store: e, select: t, onChange: r, comparator: n = SD }) {
      let { getState: a, subscribe: i } = e,
        o = i(c),
        s = t(a());
      function c() {
        let f = t(a());
        if (f == null) {
          o();
          return;
        }
        n(f, s) || ((s = f), r(s, e));
      }
      return o;
    }
    function Nh(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Wo({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: a,
    }) {
      var i, o, s;
      if (!a) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (M, G) =>
            M.concat(
              Wo({
                config: { target: G },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: a,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: p,
          queryDocument: d,
          getChildElements: v,
          getSiblingElements: I,
          matchSelector: O,
          elementContains: S,
          isSiblingNode: N,
        } = a,
        { target: b } = e;
      if (!b) return [];
      let {
        id: R,
        objectId: y,
        selector: q,
        selectorGuids: w,
        appliesTo: C,
        useEventTarget: D,
      } = Nh(b);
      if (y) return [ii.has(y) ? ii.get(y) : ii.set(y, {}).get(y)];
      if (C === Lt.EventAppliesTo.PAGE) {
        let M = f(R);
        return M ? [M] : [];
      }
      let H =
          ((i =
            t == null ||
            (o = t.action) === null ||
            o === void 0 ||
            (s = o.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && i !== void 0
            ? i
            : {})[R || q] || {},
        re = !!(H.id || H.selector),
        $,
        x,
        _,
        L = t && p(Nh(t.target));
      if (
        (re
          ? (($ = H.limitAffectedElements), (x = L), (_ = p(H)))
          : (x = _ = p({ id: R, selector: q, selectorGuids: w })),
        t && D)
      ) {
        let M = r && (_ || D === !0) ? [r] : d(L);
        if (_) {
          if (D === ED) return d(_).filter((G) => M.some((K) => S(G, K)));
          if (D === wh) return d(_).filter((G) => M.some((K) => S(K, G)));
          if (D === Ch) return d(_).filter((G) => M.some((K) => N(K, G)));
        }
        return M;
      }
      return x == null || _ == null
        ? []
        : Pe.IS_BROWSER_ENV && n
        ? d(_).filter((M) => n.contains(M))
        : $ === wh
        ? d(x, _)
        : $ === vD
        ? v(d(x)).filter(O(_))
        : $ === Ch
        ? I(d(x)).filter(O(_))
        : d(_);
    }
    function bD({ element: e, actionItem: t }) {
      if (!Pe.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case cr:
        case lr:
        case fr:
        case dr:
        case ui:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var qh = /px/,
      RD = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = DD[n.type]), r),
          e || {}
        ),
      wD = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = FD[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function CD(e, t = {}, r = {}, n, a) {
      let { getStyle: i } = a,
        { actionTypeId: o } = n;
      if ((0, st.isPluginType)(o)) return (0, st.getPluginOrigin)(o)(t[o], n);
      switch (n.actionTypeId) {
        case or:
        case sr:
        case ur:
        case Kr:
          return t[n.actionTypeId] || jo[n.actionTypeId];
        case zr:
          return RD(t[n.actionTypeId], n.config.filters);
        case Yr:
          return wD(t[n.actionTypeId], n.config.fontVariations);
        case Gh:
          return { value: (0, Tt.default)(parseFloat(i(e, ai)), 1) };
        case cr: {
          let s = i(e, at),
            c = i(e, ot),
            f,
            p;
          return (
            n.config.widthUnit === mt
              ? (f = qh.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (f = (0, Tt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === mt
              ? (p = qh.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (p = (0, Tt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: f, heightValue: p }
          );
        }
        case lr:
        case fr:
        case dr:
          return zD({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case ui:
          return { value: (0, Tt.default)(i(e, oi), r.display) };
        case gD:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var ND = (e, t) => (t && (e[t.type] = t.value || 0), e),
      qD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      PD = (e, t, r) => {
        if ((0, st.isPluginType)(e)) return (0, st.getPluginConfig)(e)(r, t);
        switch (e) {
          case zr: {
            let n = (0, Go.default)(r.filters, ({ type: a }) => a === t);
            return n ? n.value : 0;
          }
          case Yr: {
            let n = (0, Go.default)(r.fontVariations, ({ type: a }) => a === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    le.getItemConfigByKey = PD;
    function LD({ element: e, actionItem: t, elementApi: r }) {
      if ((0, st.isPluginType)(t.actionTypeId))
        return (0, st.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case or:
        case sr:
        case ur:
        case Kr: {
          let { xValue: n, yValue: a, zValue: i } = t.config;
          return { xValue: n, yValue: a, zValue: i };
        }
        case cr: {
          let { getStyle: n, setStyle: a, getProperty: i } = r,
            { widthUnit: o, heightUnit: s } = t.config,
            { widthValue: c, heightValue: f } = t.config;
          if (!Pe.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
          if (o === mt) {
            let p = n(e, at);
            a(e, at, ""), (c = i(e, "offsetWidth")), a(e, at, p);
          }
          if (s === mt) {
            let p = n(e, ot);
            a(e, ot, ""), (f = i(e, "offsetHeight")), a(e, ot, p);
          }
          return { widthValue: c, heightValue: f };
        }
        case lr:
        case fr:
        case dr: {
          let { rValue: n, gValue: a, bValue: i, aValue: o } = t.config;
          return { rValue: n, gValue: a, bValue: i, aValue: o };
        }
        case zr:
          return t.config.filters.reduce(ND, {});
        case Yr:
          return t.config.fontVariations.reduce(qD, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Vh(e) {
      if (/^TRANSFORM_/.test(e)) return Dh;
      if (/^STYLE_/.test(e)) return Vo;
      if (/^GENERAL_/.test(e)) return Uo;
      if (/^PLUGIN_/.test(e)) return Fh;
    }
    function xD(e, t) {
      return e === Vo ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function MD(e, t, r, n, a, i, o, s, c) {
      switch (s) {
        case Dh:
          return UD(e, t, r, a, o);
        case Vo:
          return YD(e, t, r, a, i, o);
        case Uo:
          return $D(e, a, o);
        case Fh: {
          let { actionTypeId: f } = a;
          if ((0, st.isPluginType)(f)) return (0, st.renderPlugin)(f)(c, t, a);
        }
      }
    }
    var jo = {
        [or]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ur]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      DD = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      FD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      GD = (e, t) => {
        let r = (0, Go.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      XD = Object.keys(jo);
    function UD(e, t, r, n, a) {
      let i = XD.map((s) => {
          let c = jo[s],
            {
              xValue: f = c.xValue,
              yValue: p = c.yValue,
              zValue: d = c.zValue,
              xUnit: v = "",
              yUnit: I = "",
              zUnit: O = "",
            } = t[s] || {};
          switch (s) {
            case or:
              return `${iD}(${f}${v}, ${p}${I}, ${d}${O})`;
            case sr:
              return `${aD}(${f}${v}, ${p}${I}, ${d}${O})`;
            case ur:
              return `${oD}(${f}${v}) ${sD}(${p}${I}) ${uD}(${d}${O})`;
            case Kr:
              return `${cD}(${f}${v}, ${p}${I})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: o } = a;
      xt(e, Pe.TRANSFORM_PREFIXED, a),
        o(e, Pe.TRANSFORM_PREFIXED, i),
        WD(n, r) && o(e, Pe.TRANSFORM_STYLE_PREFIXED, lD);
    }
    function VD(e, t, r, n) {
      let a = (0, Xo.default)(t, (o, s, c) => `${o} ${c}(${s}${GD(c, r)})`, ""),
        { setStyle: i } = n;
      xt(e, jr, n), i(e, jr, a);
    }
    function BD(e, t, r, n) {
      let a = (0, Xo.default)(
          t,
          (o, s, c) => (o.push(`"${c}" ${s}`), o),
          []
        ).join(", "),
        { setStyle: i } = n;
      xt(e, Hr, n), i(e, Hr, a);
    }
    function WD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === or && n !== void 0) ||
        (e === sr && n !== void 0) ||
        (e === ur && (t !== void 0 || r !== void 0))
      );
    }
    var jD = "\\(([^)]+)\\)",
      HD = /^rgb/,
      kD = RegExp(`rgba?${jD}`);
    function KD(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function zD({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let a = Bo[t],
        i = n(e, a),
        o = HD.test(i) ? i : r[a],
        s = KD(kD, o).split(kr);
      return {
        rValue: (0, Tt.default)(parseInt(s[0], 10), 255),
        gValue: (0, Tt.default)(parseInt(s[1], 10), 255),
        bValue: (0, Tt.default)(parseInt(s[2], 10), 255),
        aValue: (0, Tt.default)(parseFloat(s[3]), 1),
      };
    }
    function YD(e, t, r, n, a, i) {
      let { setStyle: o } = i;
      switch (n.actionTypeId) {
        case cr: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: f, heightValue: p } = r;
          f !== void 0 &&
            (s === mt && (s = "px"), xt(e, at, i), o(e, at, f + s)),
            p !== void 0 &&
              (c === mt && (c = "px"), xt(e, ot, i), o(e, ot, p + c));
          break;
        }
        case zr: {
          VD(e, r, n.config, i);
          break;
        }
        case Yr: {
          BD(e, r, n.config, i);
          break;
        }
        case lr:
        case fr:
        case dr: {
          let s = Bo[n.actionTypeId],
            c = Math.round(r.rValue),
            f = Math.round(r.gValue),
            p = Math.round(r.bValue),
            d = r.aValue;
          xt(e, s, i),
            o(
              e,
              s,
              d >= 1 ? `rgb(${c},${f},${p})` : `rgba(${c},${f},${p},${d})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          xt(e, a, i), o(e, a, r.value + s);
          break;
        }
      }
    }
    function $D(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case ui: {
          let { value: a } = t.config;
          a === fD && Pe.IS_BROWSER_ENV
            ? n(e, oi, Pe.FLEX_PREFIXED)
            : n(e, oi, a);
          return;
        }
      }
    }
    function xt(e, t, r) {
      if (!Pe.IS_BROWSER_ENV) return;
      let n = Uh[t];
      if (!n) return;
      let { getStyle: a, setStyle: i } = r,
        o = a(e, ar);
      if (!o) {
        i(e, ar, n);
        return;
      }
      let s = o.split(kr).map(Xh);
      s.indexOf(n) === -1 && i(e, ar, s.concat(n).join(kr));
    }
    function Bh(e, t, r) {
      if (!Pe.IS_BROWSER_ENV) return;
      let n = Uh[t];
      if (!n) return;
      let { getStyle: a, setStyle: i } = r,
        o = a(e, ar);
      !o ||
        o.indexOf(n) === -1 ||
        i(
          e,
          ar,
          o
            .split(kr)
            .map(Xh)
            .filter((s) => s !== n)
            .join(kr)
        );
    }
    function QD({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: a = {} } = r;
      Object.keys(n).forEach((i) => {
        let o = n[i],
          { config: s } = o.action,
          { actionListId: c } = s,
          f = a[c];
        f && Ph({ actionList: f, event: o, elementApi: t });
      }),
        Object.keys(a).forEach((i) => {
          Ph({ actionList: a[i], elementApi: t });
        });
    }
    function Ph({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: a } = e;
      n &&
        n.forEach((i) => {
          Lh({ actionGroup: i, event: t, elementApi: r });
        }),
        a &&
          a.forEach((i) => {
            let { continuousActionGroups: o } = i;
            o.forEach((s) => {
              Lh({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function Lh({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: a, config: i }) => {
        let o;
        (0, st.isPluginType)(a)
          ? (o = (0, st.clearPlugin)(a))
          : (o = Wh({ effect: JD, actionTypeId: a, elementApi: r })),
          Wo({ config: i, event: t, elementApi: r }).forEach(o);
      });
    }
    function ZD(e, t, r) {
      let { setStyle: n, getStyle: a } = r,
        { actionTypeId: i } = t;
      if (i === cr) {
        let { config: o } = t;
        o.widthUnit === mt && n(e, at, ""), o.heightUnit === mt && n(e, ot, "");
      }
      a(e, ar) && Wh({ effect: Bh, actionTypeId: i, elementApi: r })(e);
    }
    var Wh =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case or:
          case sr:
          case ur:
          case Kr:
            e(n, Pe.TRANSFORM_PREFIXED, r);
            break;
          case zr:
            e(n, jr, r);
            break;
          case Yr:
            e(n, Hr, r);
            break;
          case Gh:
            e(n, ai, r);
            break;
          case cr:
            e(n, at, r), e(n, ot, r);
            break;
          case lr:
          case fr:
          case dr:
            e(n, Bo[t], r);
            break;
          case ui:
            e(n, oi, r);
            break;
        }
      };
    function JD(e, t, r) {
      let { setStyle: n } = r;
      Bh(e, t, r),
        n(e, t, ""),
        t === Pe.TRANSFORM_PREFIXED && n(e, Pe.TRANSFORM_STYLE_PREFIXED, "");
    }
    function jh(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, a) => {
          let { config: i } = n,
            o = i.delay + i.duration;
          o >= t && ((t = o), (r = a));
        }),
        r
      );
    }
    function eF(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: a, verboseTimeElapsed: i = 0 } = t,
        o = 0,
        s = 0;
      return (
        r.forEach((c, f) => {
          if (n && f === 0) return;
          let { actionItems: p } = c,
            d = p[jh(p)],
            { config: v, actionTypeId: I } = d;
          a.id === d.id && (s = o + i);
          let O = Vh(I) === Uo ? 0 : v.duration;
          o += v.delay + O;
        }),
        o > 0 ? (0, tD.optimizeFloat)(s / o) : 0
      );
    }
    function tF({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: a } = e,
        i = [],
        o = (s) => (
          i.push((0, Rh.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(o)),
        a &&
          a.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: f }) => f.some(o));
          }),
        (0, Rh.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function rF(e, { basedOn: t }) {
      return (
        (e === Lt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Lt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Lt.EventTypeConsts.MOUSE_MOVE && t === Lt.EventBasedOn.ELEMENT)
      );
    }
    function nF(e, t) {
      return e + hD + t;
    }
    function iF(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function aF(e, t) {
      return (0, xh.default)(e && e.sort(), t && t.sort());
    }
    function oF(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + Fo + e.objectId;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + Fo + r + Fo + n;
    }
  });
  var Mt = u((Le) => {
    "use strict";
    var pr = bt().default;
    Object.defineProperty(Le, "__esModule", { value: !0 });
    Le.IX2VanillaUtils =
      Le.IX2VanillaPlugins =
      Le.IX2ElementsReducer =
      Le.IX2Easings =
      Le.IX2EasingUtils =
      Le.IX2BrowserSupport =
        void 0;
    var sF = pr(Qn());
    Le.IX2BrowserSupport = sF;
    var uF = pr(No());
    Le.IX2Easings = uF;
    var cF = pr(Po());
    Le.IX2EasingUtils = cF;
    var lF = pr($E());
    Le.IX2ElementsReducer = lF;
    var fF = pr(xo());
    Le.IX2VanillaPlugins = fF;
    var dF = pr(Hh());
    Le.IX2VanillaUtils = dF;
  });
  var Yh = u((li) => {
    "use strict";
    Object.defineProperty(li, "__esModule", { value: !0 });
    li.ixInstances = void 0;
    var kh = Me(),
      Kh = Mt(),
      vr = Yt(),
      {
        IX2_RAW_DATA_IMPORTED: pF,
        IX2_SESSION_STOPPED: vF,
        IX2_INSTANCE_ADDED: EF,
        IX2_INSTANCE_STARTED: hF,
        IX2_INSTANCE_REMOVED: gF,
        IX2_ANIMATION_FRAME_CHANGED: _F,
      } = kh.IX2EngineActionTypes,
      {
        optimizeFloat: ci,
        applyEasing: zh,
        createBezierEasing: yF,
      } = Kh.IX2EasingUtils,
      { RENDER_GENERAL: IF } = kh.IX2EngineConstants,
      {
        getItemConfigByKey: Ho,
        getRenderType: TF,
        getStyleProp: mF,
      } = Kh.IX2VanillaUtils,
      OF = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: a,
            destinationKeys: i,
            smoothing: o,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: f,
            skipMotion: p,
            skipToValue: d,
          } = e,
          { parameters: v } = t.payload,
          I = Math.max(1 - o, 0.01),
          O = v[n];
        O == null && ((I = 1), (O = s));
        let S = Math.max(O, 0) || 0,
          N = ci(S - r),
          b = p ? d : ci(r + N * I),
          R = b * 100;
        if (b === r && e.current) return e;
        let y, q, w, C;
        for (let j = 0, { length: H } = a; j < H; j++) {
          let { keyframe: re, actionItems: $ } = a[j];
          if ((j === 0 && (y = $[0]), R >= re)) {
            y = $[0];
            let x = a[j + 1],
              _ = x && R !== re;
            (q = _ ? x.actionItems[0] : null),
              _ && ((w = re / 100), (C = (x.keyframe - re) / 100));
          }
        }
        let D = {};
        if (y && !q)
          for (let j = 0, { length: H } = i; j < H; j++) {
            let re = i[j];
            D[re] = Ho(c, re, y.config);
          }
        else if (y && q && w !== void 0 && C !== void 0) {
          let j = (b - w) / C,
            H = y.config.easing,
            re = zh(H, j, f);
          for (let $ = 0, { length: x } = i; $ < x; $++) {
            let _ = i[$],
              L = Ho(c, _, y.config),
              K = (Ho(c, _, q.config) - L) * re + L;
            D[_] = K;
          }
        }
        return (0, vr.merge)(e, { position: b, current: D });
      },
      SF = (e, t) => {
        let {
            active: r,
            origin: n,
            start: a,
            immediate: i,
            renderType: o,
            verbose: s,
            actionItem: c,
            destination: f,
            destinationKeys: p,
            pluginDuration: d,
            instanceDelay: v,
            customEasingFn: I,
            skipMotion: O,
          } = e,
          S = c.config.easing,
          { duration: N, delay: b } = c.config;
        d != null && (N = d),
          (b = v ?? b),
          o === IF ? (N = 0) : (i || O) && (N = b = 0);
        let { now: R } = t.payload;
        if (r && n) {
          let y = R - (a + b);
          if (s) {
            let j = R - a,
              H = N + b,
              re = ci(Math.min(Math.max(0, j / H), 1));
            e = (0, vr.set)(e, "verboseTimeElapsed", H * re);
          }
          if (y < 0) return e;
          let q = ci(Math.min(Math.max(0, y / N), 1)),
            w = zh(S, q, I),
            C = {},
            D = null;
          return (
            p.length &&
              (D = p.reduce((j, H) => {
                let re = f[H],
                  $ = parseFloat(n[H]) || 0,
                  _ = (parseFloat(re) - $) * w + $;
                return (j[H] = _), j;
              }, {})),
            (C.current = D),
            (C.position = q),
            q === 1 && ((C.active = !1), (C.complete = !0)),
            (0, vr.merge)(e, C)
          );
        }
        return e;
      },
      AF = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case pF:
            return t.payload.ixInstances || Object.freeze({});
          case vF:
            return Object.freeze({});
          case EF: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: a,
                eventId: i,
                eventTarget: o,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                isCarrier: p,
                origin: d,
                destination: v,
                immediate: I,
                verbose: O,
                continuous: S,
                parameterId: N,
                actionGroups: b,
                smoothing: R,
                restingValue: y,
                pluginInstance: q,
                pluginDuration: w,
                instanceDelay: C,
                skipMotion: D,
                skipToValue: j,
              } = t.payload,
              { actionTypeId: H } = a,
              re = TF(H),
              $ = mF(re, H),
              x = Object.keys(v).filter((L) => v[L] != null),
              { easing: _ } = a.config;
            return (0, vr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: v,
              destinationKeys: x,
              immediate: I,
              verbose: O,
              current: null,
              actionItem: a,
              actionTypeId: H,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: c,
              groupIndex: f,
              renderType: re,
              isCarrier: p,
              styleProp: $,
              continuous: S,
              parameterId: N,
              actionGroups: b,
              smoothing: R,
              restingValue: y,
              pluginInstance: q,
              pluginDuration: w,
              instanceDelay: C,
              skipMotion: D,
              skipToValue: j,
              customEasingFn:
                Array.isArray(_) && _.length === 4 ? yF(_) : void 0,
            });
          }
          case hF: {
            let { instanceId: r, time: n } = t.payload;
            return (0, vr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case gF: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              a = Object.keys(e),
              { length: i } = a;
            for (let o = 0; o < i; o++) {
              let s = a[o];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case _F: {
            let r = e,
              n = Object.keys(e),
              { length: a } = n;
            for (let i = 0; i < a; i++) {
              let o = n[i],
                s = e[o],
                c = s.continuous ? OF : SF;
              r = (0, vr.set)(r, o, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    li.ixInstances = AF;
  });
  var $h = u((fi) => {
    "use strict";
    Object.defineProperty(fi, "__esModule", { value: !0 });
    fi.ixParameters = void 0;
    var bF = Me(),
      {
        IX2_RAW_DATA_IMPORTED: RF,
        IX2_SESSION_STOPPED: wF,
        IX2_PARAMETER_CHANGED: CF,
      } = bF.IX2EngineActionTypes,
      NF = (e = {}, t) => {
        switch (t.type) {
          case RF:
            return t.payload.ixParameters || {};
          case wF:
            return {};
          case CF: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    fi.ixParameters = NF;
  });
  var Qh = u((di) => {
    "use strict";
    Object.defineProperty(di, "__esModule", { value: !0 });
    di.default = void 0;
    var qF = ka(),
      PF = vf(),
      LF = Lf(),
      xF = Mf(),
      MF = Mt(),
      DF = Yh(),
      FF = $h(),
      { ixElements: GF } = MF.IX2ElementsReducer,
      XF = (0, qF.combineReducers)({
        ixData: PF.ixData,
        ixRequest: LF.ixRequest,
        ixSession: xF.ixSession,
        ixElements: GF,
        ixInstances: DF.ixInstances,
        ixParameters: FF.ixParameters,
      });
    di.default = XF;
  });
  var Zh = u((ak, $r) => {
    function UF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        a,
        i;
      for (i = 0; i < n.length; i++)
        (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
      return r;
    }
    ($r.exports = UF),
      ($r.exports.__esModule = !0),
      ($r.exports.default = $r.exports);
  });
  var eg = u((ok, Jh) => {
    var VF = _t(),
      BF = Ae(),
      WF = lt(),
      jF = "[object String]";
    function HF(e) {
      return typeof e == "string" || (!BF(e) && WF(e) && VF(e) == jF);
    }
    Jh.exports = HF;
  });
  var rg = u((sk, tg) => {
    var kF = So(),
      KF = kF("length");
    tg.exports = KF;
  });
  var ig = u((uk, ng) => {
    var zF = "\\ud800-\\udfff",
      YF = "\\u0300-\\u036f",
      $F = "\\ufe20-\\ufe2f",
      QF = "\\u20d0-\\u20ff",
      ZF = YF + $F + QF,
      JF = "\\ufe0e\\ufe0f",
      e1 = "\\u200d",
      t1 = RegExp("[" + e1 + zF + ZF + JF + "]");
    function r1(e) {
      return t1.test(e);
    }
    ng.exports = r1;
  });
  var pg = u((ck, dg) => {
    var og = "\\ud800-\\udfff",
      n1 = "\\u0300-\\u036f",
      i1 = "\\ufe20-\\ufe2f",
      a1 = "\\u20d0-\\u20ff",
      o1 = n1 + i1 + a1,
      s1 = "\\ufe0e\\ufe0f",
      u1 = "[" + og + "]",
      ko = "[" + o1 + "]",
      Ko = "\\ud83c[\\udffb-\\udfff]",
      c1 = "(?:" + ko + "|" + Ko + ")",
      sg = "[^" + og + "]",
      ug = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      cg = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      l1 = "\\u200d",
      lg = c1 + "?",
      fg = "[" + s1 + "]?",
      f1 = "(?:" + l1 + "(?:" + [sg, ug, cg].join("|") + ")" + fg + lg + ")*",
      d1 = fg + lg + f1,
      p1 = "(?:" + [sg + ko + "?", ko, ug, cg, u1].join("|") + ")",
      ag = RegExp(Ko + "(?=" + Ko + ")|" + p1 + d1, "g");
    function v1(e) {
      for (var t = (ag.lastIndex = 0); ag.test(e); ) ++t;
      return t;
    }
    dg.exports = v1;
  });
  var Eg = u((lk, vg) => {
    var E1 = rg(),
      h1 = ig(),
      g1 = pg();
    function _1(e) {
      return h1(e) ? g1(e) : E1(e);
    }
    vg.exports = _1;
  });
  var gg = u((fk, hg) => {
    var y1 = Bn(),
      I1 = Wn(),
      T1 = Nt(),
      m1 = eg(),
      O1 = Eg(),
      S1 = "[object Map]",
      A1 = "[object Set]";
    function b1(e) {
      if (e == null) return 0;
      if (T1(e)) return m1(e) ? O1(e) : e.length;
      var t = I1(e);
      return t == S1 || t == A1 ? e.size : y1(e).length;
    }
    hg.exports = b1;
  });
  var yg = u((dk, _g) => {
    var R1 = "Expected a function";
    function w1(e) {
      if (typeof e != "function") throw new TypeError(R1);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    _g.exports = w1;
  });
  var zo = u((pk, Ig) => {
    var C1 = yt(),
      N1 = (function () {
        try {
          var e = C1(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Ig.exports = N1;
  });
  var Yo = u((vk, mg) => {
    var Tg = zo();
    function q1(e, t, r) {
      t == "__proto__" && Tg
        ? Tg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    mg.exports = q1;
  });
  var Sg = u((Ek, Og) => {
    var P1 = Yo(),
      L1 = Pn(),
      x1 = Object.prototype,
      M1 = x1.hasOwnProperty;
    function D1(e, t, r) {
      var n = e[t];
      (!(M1.call(e, t) && L1(n, r)) || (r === void 0 && !(t in e))) &&
        P1(e, t, r);
    }
    Og.exports = D1;
  });
  var Rg = u((hk, bg) => {
    var F1 = Sg(),
      G1 = Vr(),
      X1 = Gn(),
      Ag = it(),
      U1 = nr();
    function V1(e, t, r, n) {
      if (!Ag(e)) return e;
      t = G1(t, e);
      for (var a = -1, i = t.length, o = i - 1, s = e; s != null && ++a < i; ) {
        var c = U1(t[a]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (a != o) {
          var p = s[c];
          (f = n ? n(p, c, s) : void 0),
            f === void 0 && (f = Ag(p) ? p : X1(t[a + 1]) ? [] : {});
        }
        F1(s, c, f), (s = s[c]);
      }
      return e;
    }
    bg.exports = V1;
  });
  var Cg = u((gk, wg) => {
    var B1 = kn(),
      W1 = Rg(),
      j1 = Vr();
    function H1(e, t, r) {
      for (var n = -1, a = t.length, i = {}; ++n < a; ) {
        var o = t[n],
          s = B1(e, o);
        r(s, o) && W1(i, j1(o, e), s);
      }
      return i;
    }
    wg.exports = H1;
  });
  var qg = u((_k, Ng) => {
    var k1 = Dn(),
      K1 = La(),
      z1 = uo(),
      Y1 = so(),
      $1 = Object.getOwnPropertySymbols,
      Q1 = $1
        ? function (e) {
            for (var t = []; e; ) k1(t, z1(e)), (e = K1(e));
            return t;
          }
        : Y1;
    Ng.exports = Q1;
  });
  var Lg = u((yk, Pg) => {
    function Z1(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Pg.exports = Z1;
  });
  var Mg = u((Ik, xg) => {
    var J1 = it(),
      e2 = Vn(),
      t2 = Lg(),
      r2 = Object.prototype,
      n2 = r2.hasOwnProperty;
    function i2(e) {
      if (!J1(e)) return t2(e);
      var t = e2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !n2.call(e, n))) || r.push(n);
      return r;
    }
    xg.exports = i2;
  });
  var Fg = u((Tk, Dg) => {
    var a2 = lo(),
      o2 = Mg(),
      s2 = Nt();
    function u2(e) {
      return s2(e) ? a2(e, !0) : o2(e);
    }
    Dg.exports = u2;
  });
  var Xg = u((mk, Gg) => {
    var c2 = oo(),
      l2 = qg(),
      f2 = Fg();
    function d2(e) {
      return c2(e, f2, l2);
    }
    Gg.exports = d2;
  });
  var Vg = u((Ok, Ug) => {
    var p2 = Oo(),
      v2 = It(),
      E2 = Cg(),
      h2 = Xg();
    function g2(e, t) {
      if (e == null) return {};
      var r = p2(h2(e), function (n) {
        return [n];
      });
      return (
        (t = v2(t)),
        E2(e, r, function (n, a) {
          return t(n, a[0]);
        })
      );
    }
    Ug.exports = g2;
  });
  var Wg = u((Sk, Bg) => {
    var _2 = It(),
      y2 = yg(),
      I2 = Vg();
    function T2(e, t) {
      return I2(e, y2(_2(t)));
    }
    Bg.exports = T2;
  });
  var Hg = u((Ak, jg) => {
    var m2 = Bn(),
      O2 = Wn(),
      S2 = Mr(),
      A2 = Ae(),
      b2 = Nt(),
      R2 = Fn(),
      w2 = Vn(),
      C2 = Un(),
      N2 = "[object Map]",
      q2 = "[object Set]",
      P2 = Object.prototype,
      L2 = P2.hasOwnProperty;
    function x2(e) {
      if (e == null) return !0;
      if (
        b2(e) &&
        (A2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          R2(e) ||
          C2(e) ||
          S2(e))
      )
        return !e.length;
      var t = O2(e);
      if (t == N2 || t == q2) return !e.size;
      if (w2(e)) return !m2(e).length;
      for (var r in e) if (L2.call(e, r)) return !1;
      return !0;
    }
    jg.exports = x2;
  });
  var Kg = u((bk, kg) => {
    var M2 = Yo(),
      D2 = Mo(),
      F2 = It();
    function G2(e, t) {
      var r = {};
      return (
        (t = F2(t, 3)),
        D2(e, function (n, a, i) {
          M2(r, a, t(n, a, i));
        }),
        r
      );
    }
    kg.exports = G2;
  });
  var Yg = u((Rk, zg) => {
    function X2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    zg.exports = X2;
  });
  var Qg = u((wk, $g) => {
    var U2 = zn();
    function V2(e) {
      return typeof e == "function" ? e : U2;
    }
    $g.exports = V2;
  });
  var Jg = u((Ck, Zg) => {
    var B2 = Yg(),
      W2 = Do(),
      j2 = Qg(),
      H2 = Ae();
    function k2(e, t) {
      var r = H2(e) ? B2 : W2;
      return r(e, j2(t));
    }
    Zg.exports = k2;
  });
  var t_ = u((Nk, e_) => {
    var K2 = Ke(),
      z2 = function () {
        return K2.Date.now();
      };
    e_.exports = z2;
  });
  var i_ = u((qk, n_) => {
    var Y2 = it(),
      $o = t_(),
      r_ = Yn(),
      $2 = "Expected a function",
      Q2 = Math.max,
      Z2 = Math.min;
    function J2(e, t, r) {
      var n,
        a,
        i,
        o,
        s,
        c,
        f = 0,
        p = !1,
        d = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError($2);
      (t = r_(t) || 0),
        Y2(r) &&
          ((p = !!r.leading),
          (d = "maxWait" in r),
          (i = d ? Q2(r_(r.maxWait) || 0, t) : i),
          (v = "trailing" in r ? !!r.trailing : v));
      function I(C) {
        var D = n,
          j = a;
        return (n = a = void 0), (f = C), (o = e.apply(j, D)), o;
      }
      function O(C) {
        return (f = C), (s = setTimeout(b, t)), p ? I(C) : o;
      }
      function S(C) {
        var D = C - c,
          j = C - f,
          H = t - D;
        return d ? Z2(H, i - j) : H;
      }
      function N(C) {
        var D = C - c,
          j = C - f;
        return c === void 0 || D >= t || D < 0 || (d && j >= i);
      }
      function b() {
        var C = $o();
        if (N(C)) return R(C);
        s = setTimeout(b, S(C));
      }
      function R(C) {
        return (s = void 0), v && n ? I(C) : ((n = a = void 0), o);
      }
      function y() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = a = s = void 0);
      }
      function q() {
        return s === void 0 ? o : R($o());
      }
      function w() {
        var C = $o(),
          D = N(C);
        if (((n = arguments), (a = this), (c = C), D)) {
          if (s === void 0) return O(c);
          if (d) return clearTimeout(s), (s = setTimeout(b, t)), I(c);
        }
        return s === void 0 && (s = setTimeout(b, t)), o;
      }
      return (w.cancel = y), (w.flush = q), w;
    }
    n_.exports = J2;
  });
  var o_ = u((Pk, a_) => {
    var eG = i_(),
      tG = it(),
      rG = "Expected a function";
    function nG(e, t, r) {
      var n = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(rG);
      return (
        tG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (a = "trailing" in r ? !!r.trailing : a)),
        eG(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    a_.exports = nG;
  });
  var pi = u((te) => {
    "use strict";
    var iG = je().default;
    Object.defineProperty(te, "__esModule", { value: !0 });
    te.viewportWidthChanged =
      te.testFrameRendered =
      te.stopRequested =
      te.sessionStopped =
      te.sessionStarted =
      te.sessionInitialized =
      te.rawDataImported =
      te.previewRequested =
      te.playbackRequested =
      te.parameterChanged =
      te.mediaQueriesDefined =
      te.instanceStarted =
      te.instanceRemoved =
      te.instanceAdded =
      te.eventStateChanged =
      te.eventListenerAdded =
      te.elementStateChanged =
      te.clearRequested =
      te.animationFrameChanged =
      te.actionListPlaybackChanged =
        void 0;
    var s_ = iG(zt()),
      u_ = Me(),
      aG = Mt(),
      {
        IX2_RAW_DATA_IMPORTED: oG,
        IX2_SESSION_INITIALIZED: sG,
        IX2_SESSION_STARTED: uG,
        IX2_SESSION_STOPPED: cG,
        IX2_PREVIEW_REQUESTED: lG,
        IX2_PLAYBACK_REQUESTED: fG,
        IX2_STOP_REQUESTED: dG,
        IX2_CLEAR_REQUESTED: pG,
        IX2_EVENT_LISTENER_ADDED: vG,
        IX2_TEST_FRAME_RENDERED: EG,
        IX2_EVENT_STATE_CHANGED: hG,
        IX2_ANIMATION_FRAME_CHANGED: gG,
        IX2_PARAMETER_CHANGED: _G,
        IX2_INSTANCE_ADDED: yG,
        IX2_INSTANCE_STARTED: IG,
        IX2_INSTANCE_REMOVED: TG,
        IX2_ELEMENT_STATE_CHANGED: mG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: OG,
        IX2_VIEWPORT_WIDTH_CHANGED: SG,
        IX2_MEDIA_QUERIES_DEFINED: AG,
      } = u_.IX2EngineActionTypes,
      { reifyState: bG } = aG.IX2VanillaUtils,
      RG = (e) => ({ type: oG, payload: (0, s_.default)({}, bG(e)) });
    te.rawDataImported = RG;
    var wG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: sG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    te.sessionInitialized = wG;
    var CG = () => ({ type: uG });
    te.sessionStarted = CG;
    var NG = () => ({ type: cG });
    te.sessionStopped = NG;
    var qG = ({ rawData: e, defer: t }) => ({
      type: lG,
      payload: { defer: t, rawData: e },
    });
    te.previewRequested = qG;
    var PG = ({
      actionTypeId: e = u_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: a,
      immediate: i,
      testManual: o,
      verbose: s,
      rawData: c,
    }) => ({
      type: fG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: o,
        eventId: n,
        allowEvents: a,
        immediate: i,
        verbose: s,
        rawData: c,
      },
    });
    te.playbackRequested = PG;
    var LG = (e) => ({ type: dG, payload: { actionListId: e } });
    te.stopRequested = LG;
    var xG = () => ({ type: pG });
    te.clearRequested = xG;
    var MG = (e, t) => ({
      type: vG,
      payload: { target: e, listenerParams: t },
    });
    te.eventListenerAdded = MG;
    var DG = (e = 1) => ({ type: EG, payload: { step: e } });
    te.testFrameRendered = DG;
    var FG = (e, t) => ({ type: hG, payload: { stateKey: e, newState: t } });
    te.eventStateChanged = FG;
    var GG = (e, t) => ({ type: gG, payload: { now: e, parameters: t } });
    te.animationFrameChanged = GG;
    var XG = (e, t) => ({ type: _G, payload: { key: e, value: t } });
    te.parameterChanged = XG;
    var UG = (e) => ({ type: yG, payload: (0, s_.default)({}, e) });
    te.instanceAdded = UG;
    var VG = (e, t) => ({ type: IG, payload: { instanceId: e, time: t } });
    te.instanceStarted = VG;
    var BG = (e) => ({ type: TG, payload: { instanceId: e } });
    te.instanceRemoved = BG;
    var WG = (e, t, r, n) => ({
      type: mG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    te.elementStateChanged = WG;
    var jG = ({ actionListId: e, isPlaying: t }) => ({
      type: OG,
      payload: { actionListId: e, isPlaying: t },
    });
    te.actionListPlaybackChanged = jG;
    var HG = ({ width: e, mediaQueries: t }) => ({
      type: SG,
      payload: { width: e, mediaQueries: t },
    });
    te.viewportWidthChanged = HG;
    var kG = () => ({ type: AG });
    te.mediaQueriesDefined = kG;
  });
  var f_ = u((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.elementContains = iX;
    we.getChildElements = oX;
    we.getClosestElement = void 0;
    we.getProperty = JG;
    we.getQuerySelector = tX;
    we.getRefType = cX;
    we.getSiblingElements = sX;
    we.getStyle = ZG;
    we.getValidDocument = rX;
    we.isSiblingNode = aX;
    we.matchSelector = eX;
    we.queryDocument = nX;
    we.setStyle = QG;
    var KG = Mt(),
      zG = Me(),
      { ELEMENT_MATCHES: Qo } = KG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: c_,
        HTML_ELEMENT: YG,
        PLAIN_OBJECT: $G,
        WF_PAGE: l_,
      } = zG.IX2EngineConstants;
    function QG(e, t, r) {
      e.style[t] = r;
    }
    function ZG(e, t) {
      return e.style[t];
    }
    function JG(e, t) {
      return e[t];
    }
    function eX(e) {
      return (t) => t[Qo](e);
    }
    function tX({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(c_) !== -1) {
          let n = e.split(c_),
            a = n[0];
          if (((r = n[1]), a !== document.documentElement.getAttribute(l_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function rX(e) {
      return e == null || e === document.documentElement.getAttribute(l_)
        ? document
        : null;
    }
    function nX(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function iX(e, t) {
      return e.contains(t);
    }
    function aX(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function oX(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: a } = e[r],
          { length: i } = a;
        if (i) for (let o = 0; o < i; o++) t.push(a[o]);
      }
      return t;
    }
    function sX(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: a } = e; n < a; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let o = i.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var uX = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Qo] && r[Qo](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    we.getClosestElement = uX;
    function cX(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? YG
          : $G
        : null;
    }
  });
  var Zo = u((Mk, p_) => {
    var lX = it(),
      d_ = Object.create,
      fX = (function () {
        function e() {}
        return function (t) {
          if (!lX(t)) return {};
          if (d_) return d_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    p_.exports = fX;
  });
  var vi = u((Dk, v_) => {
    function dX() {}
    v_.exports = dX;
  });
  var hi = u((Fk, E_) => {
    var pX = Zo(),
      vX = vi();
    function Ei(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ei.prototype = pX(vX.prototype);
    Ei.prototype.constructor = Ei;
    E_.exports = Ei;
  });
  var y_ = u((Gk, __) => {
    var h_ = jt(),
      EX = Mr(),
      hX = Ae(),
      g_ = h_ ? h_.isConcatSpreadable : void 0;
    function gX(e) {
      return hX(e) || EX(e) || !!(g_ && e && e[g_]);
    }
    __.exports = gX;
  });
  var m_ = u((Xk, T_) => {
    var _X = Dn(),
      yX = y_();
    function I_(e, t, r, n, a) {
      var i = -1,
        o = e.length;
      for (r || (r = yX), a || (a = []); ++i < o; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? I_(s, t - 1, r, n, a)
            : _X(a, s)
          : n || (a[a.length] = s);
      }
      return a;
    }
    T_.exports = I_;
  });
  var S_ = u((Uk, O_) => {
    var IX = m_();
    function TX(e) {
      var t = e == null ? 0 : e.length;
      return t ? IX(e, 1) : [];
    }
    O_.exports = TX;
  });
  var b_ = u((Vk, A_) => {
    function mX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    A_.exports = mX;
  });
  var C_ = u((Bk, w_) => {
    var OX = b_(),
      R_ = Math.max;
    function SX(e, t, r) {
      return (
        (t = R_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, i = R_(n.length - t, 0), o = Array(i);
            ++a < i;

          )
            o[a] = n[t + a];
          a = -1;
          for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
          return (s[t] = r(o)), OX(e, this, s);
        }
      );
    }
    w_.exports = SX;
  });
  var q_ = u((Wk, N_) => {
    function AX(e) {
      return function () {
        return e;
      };
    }
    N_.exports = AX;
  });
  var x_ = u((jk, L_) => {
    var bX = q_(),
      P_ = zo(),
      RX = zn(),
      wX = P_
        ? function (e, t) {
            return P_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: bX(t),
              writable: !0,
            });
          }
        : RX;
    L_.exports = wX;
  });
  var D_ = u((Hk, M_) => {
    var CX = 800,
      NX = 16,
      qX = Date.now;
    function PX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = qX(),
          a = NX - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= CX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    M_.exports = PX;
  });
  var G_ = u((kk, F_) => {
    var LX = x_(),
      xX = D_(),
      MX = xX(LX);
    F_.exports = MX;
  });
  var U_ = u((Kk, X_) => {
    var DX = S_(),
      FX = C_(),
      GX = G_();
    function XX(e) {
      return GX(FX(e, void 0, DX), e + "");
    }
    X_.exports = XX;
  });
  var W_ = u((zk, B_) => {
    var V_ = fo(),
      UX = V_ && new V_();
    B_.exports = UX;
  });
  var H_ = u((Yk, j_) => {
    function VX() {}
    j_.exports = VX;
  });
  var Jo = u(($k, K_) => {
    var k_ = W_(),
      BX = H_(),
      WX = k_
        ? function (e) {
            return k_.get(e);
          }
        : BX;
    K_.exports = WX;
  });
  var Y_ = u((Qk, z_) => {
    var jX = {};
    z_.exports = jX;
  });
  var es = u((Zk, Q_) => {
    var $_ = Y_(),
      HX = Object.prototype,
      kX = HX.hasOwnProperty;
    function KX(e) {
      for (
        var t = e.name + "", r = $_[t], n = kX.call($_, t) ? r.length : 0;
        n--;

      ) {
        var a = r[n],
          i = a.func;
        if (i == null || i == e) return a.name;
      }
      return t;
    }
    Q_.exports = KX;
  });
  var _i = u((Jk, Z_) => {
    var zX = Zo(),
      YX = vi(),
      $X = 4294967295;
    function gi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = $X),
        (this.__views__ = []);
    }
    gi.prototype = zX(YX.prototype);
    gi.prototype.constructor = gi;
    Z_.exports = gi;
  });
  var ey = u((eK, J_) => {
    function QX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    J_.exports = QX;
  });
  var ry = u((tK, ty) => {
    var ZX = _i(),
      JX = hi(),
      eU = ey();
    function tU(e) {
      if (e instanceof ZX) return e.clone();
      var t = new JX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = eU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    ty.exports = tU;
  });
  var ay = u((rK, iy) => {
    var rU = _i(),
      ny = hi(),
      nU = vi(),
      iU = Ae(),
      aU = lt(),
      oU = ry(),
      sU = Object.prototype,
      uU = sU.hasOwnProperty;
    function yi(e) {
      if (aU(e) && !iU(e) && !(e instanceof rU)) {
        if (e instanceof ny) return e;
        if (uU.call(e, "__wrapped__")) return oU(e);
      }
      return new ny(e);
    }
    yi.prototype = nU.prototype;
    yi.prototype.constructor = yi;
    iy.exports = yi;
  });
  var sy = u((nK, oy) => {
    var cU = _i(),
      lU = Jo(),
      fU = es(),
      dU = ay();
    function pU(e) {
      var t = fU(e),
        r = dU[t];
      if (typeof r != "function" || !(t in cU.prototype)) return !1;
      if (e === r) return !0;
      var n = lU(r);
      return !!n && e === n[0];
    }
    oy.exports = pU;
  });
  var fy = u((iK, ly) => {
    var uy = hi(),
      vU = U_(),
      EU = Jo(),
      ts = es(),
      hU = Ae(),
      cy = sy(),
      gU = "Expected a function",
      _U = 8,
      yU = 32,
      IU = 128,
      TU = 256;
    function mU(e) {
      return vU(function (t) {
        var r = t.length,
          n = r,
          a = uy.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(gU);
          if (a && !o && ts(i) == "wrapper") var o = new uy([], !0);
        }
        for (n = o ? n : r; ++n < r; ) {
          i = t[n];
          var s = ts(i),
            c = s == "wrapper" ? EU(i) : void 0;
          c &&
          cy(c[0]) &&
          c[1] == (IU | _U | yU | TU) &&
          !c[4].length &&
          c[9] == 1
            ? (o = o[ts(c[0])].apply(o, c[3]))
            : (o = i.length == 1 && cy(i) ? o[s]() : o.thru(i));
        }
        return function () {
          var f = arguments,
            p = f[0];
          if (o && f.length == 1 && hU(p)) return o.plant(p).value();
          for (var d = 0, v = r ? t[d].apply(this, f) : p; ++d < r; )
            v = t[d].call(this, v);
          return v;
        };
      });
    }
    ly.exports = mU;
  });
  var py = u((aK, dy) => {
    var OU = fy(),
      SU = OU();
    dy.exports = SU;
  });
  var Ey = u((oK, vy) => {
    function AU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    vy.exports = AU;
  });
  var gy = u((sK, hy) => {
    var bU = Ey(),
      rs = Yn();
    function RU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = rs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = rs(t)), (t = t === t ? t : 0)),
        bU(rs(e), t, r)
      );
    }
    hy.exports = RU;
  });
  var My = u((Si) => {
    "use strict";
    var Oi = je().default;
    Object.defineProperty(Si, "__esModule", { value: !0 });
    Si.default = void 0;
    var Xe = Oi(zt()),
      wU = Oi(py()),
      CU = Oi(Kn()),
      NU = Oi(gy()),
      Dt = Me(),
      ns = ss(),
      Ii = pi(),
      qU = Mt(),
      {
        MOUSE_CLICK: PU,
        MOUSE_SECOND_CLICK: LU,
        MOUSE_DOWN: xU,
        MOUSE_UP: MU,
        MOUSE_OVER: DU,
        MOUSE_OUT: FU,
        DROPDOWN_CLOSE: GU,
        DROPDOWN_OPEN: XU,
        SLIDER_ACTIVE: UU,
        SLIDER_INACTIVE: VU,
        TAB_ACTIVE: BU,
        TAB_INACTIVE: WU,
        NAVBAR_CLOSE: jU,
        NAVBAR_OPEN: HU,
        MOUSE_MOVE: kU,
        PAGE_SCROLL_DOWN: by,
        SCROLL_INTO_VIEW: Ry,
        SCROLL_OUT_OF_VIEW: KU,
        PAGE_SCROLL_UP: zU,
        SCROLLING_IN_VIEW: YU,
        PAGE_FINISH: wy,
        ECOMMERCE_CART_CLOSE: $U,
        ECOMMERCE_CART_OPEN: QU,
        PAGE_START: Cy,
        PAGE_SCROLL: ZU,
      } = Dt.EventTypeConsts,
      is = "COMPONENT_ACTIVE",
      Ny = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: _y } = Dt.IX2EngineConstants,
      { getNamespacedParameterId: yy } = qU.IX2VanillaUtils,
      qy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      Zr = qy(({ element: e, nativeEvent: t }) => e === t.target),
      JU = qy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      ut = (0, wU.default)([Zr, JU]),
      Py = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            a = n[t];
          if (a && !tV[a.eventTypeId]) return a;
        }
        return null;
      },
      eV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Py(e, n);
      },
      Fe = ({ store: e, event: t, element: r, eventStateKey: n }, a) => {
        let { action: i, id: o } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          f = Py(e, c);
        return (
          f &&
            (0, ns.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + _y + n.split(_y)[1],
              actionListId: (0, CU.default)(f, "action.config.actionListId"),
            }),
          (0, ns.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, ns.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          a
        );
      },
      ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      Jr = { handler: ze(ut, Fe) },
      Ly = (0, Xe.default)({}, Jr, { types: [is, Ny].join(" ") }),
      as = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      Iy = "mouseover mouseout",
      os = { types: as },
      tV = { PAGE_START: Cy, PAGE_FINISH: wy },
      Qr = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, NU.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      rV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      nV = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: a } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let o = e.contains(a);
        return !!(r === "mouseout" && i && o);
      },
      iV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: a } = Qr(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (a * (i || 0)) / 100;
        return rV(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: a - c,
        });
      },
      xy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          a = [is, Ny].indexOf(n) !== -1 ? n === is : r.isActive,
          i = (0, Xe.default)({}, r, { isActive: a });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      Ty = (e) => (t, r) => {
        let n = { elementHovered: nV(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      aV = (e) => (t, r) => {
        let n = (0, Xe.default)({}, r, { elementVisible: iV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      my =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: a, innerHeight: i } = Qr(),
            {
              event: { config: o, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: f } = o,
            p = f === "PX",
            d = a - i,
            v = Number((n / d).toFixed(2));
          if (r && r.percentTop === v) return r;
          let I = (p ? c : (i * (c || 0)) / 100) / d,
            O,
            S,
            N = 0;
          r &&
            ((O = v > r.percentTop),
            (S = r.scrollingDown !== O),
            (N = S ? v : r.anchorTop));
          let b = s === by ? v >= N + I : v <= N - I,
            R = (0, Xe.default)({}, r, {
              percentTop: v,
              inBounds: b,
              anchorTop: N,
              scrollingDown: O,
            });
          return (r && b && (S || R.inBounds !== r.inBounds) && e(t, R)) || R;
        },
      oV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      sV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      uV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Oy =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Ti = (e = !0) =>
        (0, Xe.default)({}, Ly, {
          handler: ze(
            e ? ut : Zr,
            xy((t, r) => (r.isActive ? Jr.handler(t, r) : r))
          ),
        }),
      mi = (e = !0) =>
        (0, Xe.default)({}, Ly, {
          handler: ze(
            e ? ut : Zr,
            xy((t, r) => (r.isActive ? r : Jr.handler(t, r)))
          ),
        }),
      Sy = (0, Xe.default)({}, os, {
        handler: aV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: a } = e,
            { ixData: i } = a.getState(),
            { events: o } = i;
          return !o[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Ry) === r
            ? (Fe(e), (0, Xe.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Ay = 0.05,
      cV = {
        [UU]: Ti(),
        [VU]: mi(),
        [XU]: Ti(),
        [GU]: mi(),
        [HU]: Ti(!1),
        [jU]: mi(!1),
        [BU]: Ti(),
        [WU]: mi(),
        [QU]: { types: "ecommerce-cart-open", handler: ze(ut, Fe) },
        [$U]: { types: "ecommerce-cart-close", handler: ze(ut, Fe) },
        [PU]: {
          types: "click",
          handler: ze(
            ut,
            Oy((e, { clickCount: t }) => {
              eV(e) ? t === 1 && Fe(e) : Fe(e);
            })
          ),
        },
        [LU]: {
          types: "click",
          handler: ze(
            ut,
            Oy((e, { clickCount: t }) => {
              t === 2 && Fe(e);
            })
          ),
        },
        [xU]: (0, Xe.default)({}, Jr, { types: "mousedown" }),
        [MU]: (0, Xe.default)({}, Jr, { types: "mouseup" }),
        [DU]: {
          types: Iy,
          handler: ze(
            ut,
            Ty((e, t) => {
              t.elementHovered && Fe(e);
            })
          ),
        },
        [FU]: {
          types: Iy,
          handler: ze(
            ut,
            Ty((e, t) => {
              t.elementHovered || Fe(e);
            })
          ),
        },
        [kU]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: a,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: f,
                restingState: p = 0,
              } = r,
              {
                clientX: d = i.clientX,
                clientY: v = i.clientY,
                pageX: I = i.pageX,
                pageY: O = i.pageY,
              } = n,
              S = s === "X_AXIS",
              N = n.type === "mouseout",
              b = p / 100,
              R = c,
              y = !1;
            switch (o) {
              case Dt.EventBasedOn.VIEWPORT: {
                b = S
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(v, window.innerHeight) / window.innerHeight;
                break;
              }
              case Dt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: q,
                  scrollTop: w,
                  scrollWidth: C,
                  scrollHeight: D,
                } = Qr();
                b = S ? Math.min(q + I, C) / C : Math.min(w + O, D) / D;
                break;
              }
              case Dt.EventBasedOn.ELEMENT:
              default: {
                R = yy(a, c);
                let q = n.type.indexOf("mouse") === 0;
                if (q && ut({ element: t, nativeEvent: n }) !== !0) break;
                let w = t.getBoundingClientRect(),
                  { left: C, top: D, width: j, height: H } = w;
                if (!q && !oV({ left: d, top: v }, w)) break;
                (y = !0), (b = S ? (d - C) / j : (v - D) / H);
                break;
              }
            }
            return (
              N && (b > 1 - Ay || b < Ay) && (b = Math.round(b)),
              (o !== Dt.EventBasedOn.ELEMENT || y || y !== i.elementHovered) &&
                ((b = f ? 1 - b : b),
                e.dispatch((0, Ii.parameterChanged)(R, b))),
              { elementHovered: y, clientX: d, clientY: v, pageX: I, pageY: O }
            );
          },
        },
        [ZU]: {
          types: as,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: a, scrollHeight: i, clientHeight: o } = Qr(),
              s = a / (i - o);
            (s = n ? 1 - s : s), e.dispatch((0, Ii.parameterChanged)(r, s));
          },
        },
        [YU]: {
          types: as,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: o,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: f,
              } = Qr(),
              {
                basedOn: p,
                selectedAxis: d,
                continuousParameterGroupId: v,
                startsEntering: I,
                startsExiting: O,
                addEndOffset: S,
                addStartOffset: N,
                addOffsetValue: b = 0,
                endOffsetValue: R = 0,
              } = r,
              y = d === "X_AXIS";
            if (p === Dt.EventBasedOn.VIEWPORT) {
              let q = y ? i / s : o / c;
              return (
                q !== a.scrollPercent &&
                  t.dispatch((0, Ii.parameterChanged)(v, q)),
                { scrollPercent: q }
              );
            } else {
              let q = yy(n, v),
                w = e.getBoundingClientRect(),
                C = (N ? b : 0) / 100,
                D = (S ? R : 0) / 100;
              (C = I ? C : 1 - C), (D = O ? D : 1 - D);
              let j = w.top + Math.min(w.height * C, f),
                re = w.top + w.height * D - j,
                $ = Math.min(f + re, c),
                _ = Math.min(Math.max(0, f - j), $) / $;
              return (
                _ !== a.scrollPercent &&
                  t.dispatch((0, Ii.parameterChanged)(q, _)),
                { scrollPercent: _ }
              );
            }
          },
        },
        [Ry]: Sy,
        [KU]: Sy,
        [by]: (0, Xe.default)({}, os, {
          handler: my((e, t) => {
            t.scrollingDown && Fe(e);
          }),
        }),
        [zU]: (0, Xe.default)({}, os, {
          handler: my((e, t) => {
            t.scrollingDown || Fe(e);
          }),
        }),
        [wy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: ze(Zr, sV(Fe)),
        },
        [Cy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: ze(Zr, uV(Fe)),
        },
      };
    Si.default = cV;
  });
  var ss = u((St) => {
    "use strict";
    var $e = je().default,
      lV = bt().default;
    Object.defineProperty(St, "__esModule", { value: !0 });
    St.observeRequests = UV;
    St.startActionGroup = ps;
    St.startEngine = Ci;
    St.stopActionGroup = ds;
    St.stopAllActionGroups = jy;
    St.stopEngine = Ni;
    var fV = $e(zt()),
      dV = $e(Zh()),
      pV = $e(wo()),
      Ot = $e(Kn()),
      vV = $e(gg()),
      EV = $e(Wg()),
      hV = $e(Hg()),
      gV = $e(Kg()),
      en = $e(Jg()),
      _V = $e(o_()),
      Ye = Me(),
      Gy = Mt(),
      ge = pi(),
      me = lV(f_()),
      yV = $e(My()),
      IV = ["store", "computedStyle"],
      TV = Object.keys(Ye.QuickEffectIds),
      us = (e) => TV.includes(e),
      {
        COLON_DELIMITER: cs,
        BOUNDARY_SELECTOR: Ai,
        HTML_ELEMENT: Xy,
        RENDER_GENERAL: mV,
        W_MOD_IX: Dy,
      } = Ye.IX2EngineConstants,
      {
        getAffectedElements: bi,
        getElementId: OV,
        getDestinationValues: ls,
        observeStore: Ft,
        getInstanceId: SV,
        renderHTMLElement: AV,
        clearAllStyles: Uy,
        getMaxDurationItemIndex: bV,
        getComputedStyle: RV,
        getInstanceOrigin: wV,
        reduceListToGroup: CV,
        shouldNamespaceEventParameter: NV,
        getNamespacedParameterId: qV,
        shouldAllowMediaQuery: Ri,
        cleanupHTMLElement: PV,
        clearObjectCache: LV,
        stringifyTarget: xV,
        mediaQueriesEqual: MV,
        shallowEqual: DV,
      } = Gy.IX2VanillaUtils,
      {
        isPluginType: wi,
        createPluginInstance: fs,
        getPluginDuration: FV,
      } = Gy.IX2VanillaPlugins,
      Fy = navigator.userAgent,
      GV = Fy.match(/iPad/i) || Fy.match(/iPhone/),
      XV = 12;
    function UV(e) {
      Ft({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: WV }),
        Ft({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: jV,
        }),
        Ft({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: HV }),
        Ft({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: kV });
    }
    function VV(e) {
      Ft({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Ni(e),
            Uy({ store: e, elementApi: me }),
            Ci({ store: e, allowEvents: !0 }),
            Vy();
        },
      });
    }
    function BV(e, t) {
      let r = Ft({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function WV({ rawData: e, defer: t }, r) {
      let n = () => {
        Ci({ store: r, rawData: e, allowEvents: !0 }), Vy();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Vy() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function jV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: s,
          testManual: c,
          verbose: f = !0,
        } = e,
        { rawData: p } = e;
      if (n && a && p && s) {
        let d = p.actionLists[n];
        d && (p = CV({ actionList: d, actionItemId: a, rawData: p }));
      }
      if (
        (Ci({ store: t, rawData: p, allowEvents: o, testManual: c }),
        (n && r === Ye.ActionTypeConsts.GENERAL_START_ACTION) || us(r))
      ) {
        ds({ store: t, actionListId: n }),
          Wy({ store: t, actionListId: n, eventId: i });
        let d = ps({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: s,
          verbose: f,
        });
        f &&
          d &&
          t.dispatch(
            (0, ge.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function HV({ actionListId: e }, t) {
      e ? ds({ store: t, actionListId: e }) : jy({ store: t }), Ni(t);
    }
    function kV(e, t) {
      Ni(t), Uy({ store: t, elementApi: me });
    }
    function Ci({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: a } = e.getState();
      t && e.dispatch((0, ge.rawDataImported)(t)),
        a.active ||
          (e.dispatch(
            (0, ge.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Ai),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (ZV(e),
            KV(),
            e.getState().ixSession.hasDefinedMediaQueries && VV(e)),
          e.dispatch((0, ge.sessionStarted)()),
          zV(e, n));
    }
    function KV() {
      let { documentElement: e } = document;
      e.className.indexOf(Dy) === -1 && (e.className += ` ${Dy}`);
    }
    function zV(e, t) {
      let r = (n) => {
        let { ixSession: a, ixParameters: i } = e.getState();
        a.active &&
          (e.dispatch((0, ge.animationFrameChanged)(n, i)),
          t ? BV(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Ni(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(YV), LV(), e.dispatch((0, ge.sessionStopped)());
      }
    }
    function YV({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function $V({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: a,
      actionListId: i,
      parameterGroup: o,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: f, ixSession: p } = e.getState(),
        { events: d } = f,
        v = d[n],
        { eventTypeId: I } = v,
        O = {},
        S = {},
        N = [],
        { continuousActionGroups: b } = o,
        { id: R } = o;
      NV(I, a) && (R = qV(t, R));
      let y = p.hasBoundaryNodes && r ? me.getClosestElement(r, Ai) : null;
      b.forEach((q) => {
        let { keyframe: w, actionItems: C } = q;
        C.forEach((D) => {
          let { actionTypeId: j } = D,
            { target: H } = D.config;
          if (!H) return;
          let re = H.boundaryMode ? y : null,
            $ = xV(H) + cs + j;
          if (((S[$] = QV(S[$], w, D)), !O[$])) {
            O[$] = !0;
            let { config: x } = D;
            bi({
              config: x,
              event: v,
              eventTarget: r,
              elementRoot: re,
              elementApi: me,
            }).forEach((_) => {
              N.push({ element: _, key: $ });
            });
          }
        });
      }),
        N.forEach(({ element: q, key: w }) => {
          let C = S[w],
            D = (0, Ot.default)(C, "[0].actionItems[0]", {}),
            { actionTypeId: j } = D,
            H = wi(j) ? fs(j)(q, D) : null,
            re = ls({ element: q, actionItem: D, elementApi: me }, H);
          vs({
            store: e,
            element: q,
            eventId: n,
            actionListId: i,
            actionItem: D,
            destination: re,
            continuous: !0,
            parameterId: R,
            actionGroups: C,
            smoothing: s,
            restingValue: c,
            pluginInstance: H,
          });
        });
    }
    function QV(e = [], t, r) {
      let n = [...e],
        a;
      return (
        n.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
        a == null && ((a = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[a].actionItems.push(r),
        n
      );
    }
    function ZV(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      By(e),
        (0, en.default)(r, (a, i) => {
          let o = yV.default[i];
          if (!o) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          iB({ logic: o, store: e, events: a });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && eB(e);
    }
    var JV = ["resize", "orientationchange"];
    function eB(e) {
      let t = () => {
        By(e);
      };
      JV.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, ge.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function By(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: a } = r;
        e.dispatch((0, ge.viewportWidthChanged)({ width: n, mediaQueries: a }));
      }
    }
    var tB = (e, t) => (0, EV.default)((0, gV.default)(e, t), hV.default),
      rB = (e, t) => {
        (0, en.default)(e, (r, n) => {
          r.forEach((a, i) => {
            let o = n + cs + i;
            t(a, n, o);
          });
        });
      },
      nB = (e) => {
        let t = { target: e.target, targets: e.targets };
        return bi({ config: t, elementApi: me });
      };
    function iB({ logic: e, store: t, events: r }) {
      aB(r);
      let { types: n, handler: a } = e,
        { ixData: i } = t.getState(),
        { actionLists: o } = i,
        s = tB(r, nB);
      if (!(0, vV.default)(s)) return;
      (0, en.default)(s, (d, v) => {
        let I = r[v],
          { action: O, id: S, mediaQueries: N = i.mediaQueryKeys } = I,
          { actionListId: b } = O.config;
        MV(N, i.mediaQueryKeys) || t.dispatch((0, ge.mediaQueriesDefined)()),
          O.actionTypeId === Ye.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(I.config) ? I.config : [I.config]).forEach((y) => {
              let { continuousParameterGroupId: q } = y,
                w = (0, Ot.default)(o, `${b}.continuousParameterGroups`, []),
                C = (0, pV.default)(w, ({ id: H }) => H === q),
                D = (y.smoothing || 0) / 100,
                j = (y.restingState || 0) / 100;
              C &&
                d.forEach((H, re) => {
                  let $ = S + cs + re;
                  $V({
                    store: t,
                    eventStateKey: $,
                    eventTarget: H,
                    eventId: S,
                    eventConfig: y,
                    actionListId: b,
                    parameterGroup: C,
                    smoothing: D,
                    restingValue: j,
                  });
                });
            }),
          (O.actionTypeId === Ye.ActionTypeConsts.GENERAL_START_ACTION ||
            us(O.actionTypeId)) &&
            Wy({ store: t, actionListId: b, eventId: S });
      });
      let c = (d) => {
          let { ixSession: v } = t.getState();
          rB(s, (I, O, S) => {
            let N = r[O],
              b = v.eventState[S],
              { action: R, mediaQueries: y = i.mediaQueryKeys } = N;
            if (!Ri(y, v.mediaQueryKey)) return;
            let q = (w = {}) => {
              let C = a(
                {
                  store: t,
                  element: I,
                  event: N,
                  eventConfig: w,
                  nativeEvent: d,
                  eventStateKey: S,
                },
                b
              );
              DV(C, b) || t.dispatch((0, ge.eventStateChanged)(S, C));
            };
            R.actionTypeId === Ye.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(N.config) ? N.config : [N.config]).forEach(q)
              : q();
          });
        },
        f = (0, _V.default)(c, XV),
        p = ({ target: d = document, types: v, throttle: I }) => {
          v.split(" ")
            .filter(Boolean)
            .forEach((O) => {
              let S = I ? f : c;
              d.addEventListener(O, S),
                t.dispatch((0, ge.eventListenerAdded)(d, [O, S]));
            });
        };
      Array.isArray(n) ? n.forEach(p) : typeof n == "string" && p(e);
    }
    function aB(e) {
      if (!GV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: a, target: i } = e[n],
          o = me.getQuerySelector(i);
        t[o] ||
          ((a === Ye.EventTypeConsts.MOUSE_CLICK ||
            a === Ye.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (r += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Wy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: a } = e.getState(),
        { actionLists: i, events: o } = n,
        s = o[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let f = (0, Ot.default)(c, "actionItemGroups[0].actionItems", []),
          p = (0, Ot.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!Ri(p, a.mediaQueryKey)) return;
        f.forEach((d) => {
          var v;
          let { config: I, actionTypeId: O } = d,
            S =
              (I == null || (v = I.target) === null || v === void 0
                ? void 0
                : v.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : I,
            N = bi({ config: S, event: s, elementApi: me }),
            b = wi(O);
          N.forEach((R) => {
            let y = b ? fs(O)(R, d) : null;
            vs({
              destination: ls({ element: R, actionItem: d, elementApi: me }, y),
              immediate: !0,
              store: e,
              element: R,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: y,
            });
          });
        });
      }
    }
    function jy({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, en.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: a } = r;
          Es(r, e),
            a &&
              e.dispatch(
                (0, ge.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ds({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: a,
    }) {
      let { ixInstances: i, ixSession: o } = e.getState(),
        s = o.hasBoundaryNodes && r ? me.getClosestElement(r, Ai) : null;
      (0, en.default)(i, (c) => {
        let f = (0, Ot.default)(c, "actionItem.config.target.boundaryMode"),
          p = n ? c.eventStateKey === n : !0;
        if (c.actionListId === a && c.eventId === t && p) {
          if (s && f && !me.elementContains(s, c.element)) return;
          Es(c, e),
            c.verbose &&
              e.dispatch(
                (0, ge.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ps({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: a,
      groupIndex: i = 0,
      immediate: o,
      verbose: s,
    }) {
      var c;
      let { ixData: f, ixSession: p } = e.getState(),
        { events: d } = f,
        v = d[t] || {},
        { mediaQueries: I = f.mediaQueryKeys } = v,
        O = (0, Ot.default)(f, `actionLists.${a}`, {}),
        { actionItemGroups: S, useFirstGroupAsInitialState: N } = O;
      if (!S || !S.length) return !1;
      i >= S.length && (0, Ot.default)(v, "config.loop") && (i = 0),
        i === 0 && N && i++;
      let R =
          (i === 0 || (i === 1 && N)) &&
          us((c = v.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? v.config.delay
            : void 0,
        y = (0, Ot.default)(S, [i, "actionItems"], []);
      if (!y.length || !Ri(I, p.mediaQueryKey)) return !1;
      let q = p.hasBoundaryNodes && r ? me.getClosestElement(r, Ai) : null,
        w = bV(y),
        C = !1;
      return (
        y.forEach((D, j) => {
          let { config: H, actionTypeId: re } = D,
            $ = wi(re),
            { target: x } = H;
          if (!x) return;
          let _ = x.boundaryMode ? q : null;
          bi({
            config: H,
            event: v,
            eventTarget: r,
            elementRoot: _,
            elementApi: me,
          }).forEach((M, G) => {
            let K = $ ? fs(re)(M, D) : null,
              Z = $ ? FV(re)(M, D) : null;
            C = !0;
            let P = w === j && G === 0,
              V = RV({ element: M, actionItem: D }),
              B = ls({ element: M, actionItem: D, elementApi: me }, K);
            vs({
              store: e,
              element: M,
              actionItem: D,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a,
              groupIndex: i,
              isCarrier: P,
              computedStyle: V,
              destination: B,
              immediate: o,
              verbose: s,
              pluginInstance: K,
              pluginDuration: Z,
              instanceDelay: R,
            });
          });
        }),
        C
      );
    }
    function vs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        a = (0, dV.default)(e, IV),
        {
          element: i,
          actionItem: o,
          immediate: s,
          pluginInstance: c,
          continuous: f,
          restingValue: p,
          eventId: d,
        } = a,
        v = !f,
        I = SV(),
        { ixElements: O, ixSession: S, ixData: N } = r.getState(),
        b = OV(O, i),
        { refState: R } = O[b] || {},
        y = me.getRefType(i),
        q = S.reducedMotion && Ye.ReducedMotionTypes[o.actionTypeId],
        w;
      if (q && f)
        switch (
          (t = N.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case Ye.EventTypeConsts.MOUSE_MOVE:
          case Ye.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            w = p;
            break;
          default:
            w = 0.5;
            break;
        }
      let C = wV(i, R, n, o, me, c);
      if (
        (r.dispatch(
          (0, ge.instanceAdded)(
            (0, fV.default)(
              {
                instanceId: I,
                elementId: b,
                origin: C,
                refType: y,
                skipMotion: q,
                skipToValue: w,
              },
              a
            )
          )
        ),
        Hy(document.body, "ix2-animation-started", I),
        s)
      ) {
        oB(r, I);
        return;
      }
      Ft({ store: r, select: ({ ixInstances: D }) => D[I], onChange: ky }),
        v && r.dispatch((0, ge.instanceStarted)(I, S.tick));
    }
    function Es(e, t) {
      Hy(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: a } = t.getState(),
        { ref: i, refType: o } = a[r] || {};
      o === Xy && PV(i, n, me), t.dispatch((0, ge.instanceRemoved)(e.id));
    }
    function Hy(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function oB(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, ge.instanceStarted)(t, 0)),
        e.dispatch((0, ge.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      ky(n[t], e);
    }
    function ky(e, t) {
      let {
          active: r,
          continuous: n,
          complete: a,
          elementId: i,
          actionItem: o,
          actionTypeId: s,
          renderType: c,
          current: f,
          groupIndex: p,
          eventId: d,
          eventTarget: v,
          eventStateKey: I,
          actionListId: O,
          isCarrier: S,
          styleProp: N,
          verbose: b,
          pluginInstance: R,
        } = e,
        { ixData: y, ixSession: q } = t.getState(),
        { events: w } = y,
        C = w[d] || {},
        { mediaQueries: D = y.mediaQueryKeys } = C;
      if (Ri(D, q.mediaQueryKey) && (n || r || a)) {
        if (f || (c === mV && a)) {
          t.dispatch((0, ge.elementStateChanged)(i, s, f, o));
          let { ixElements: j } = t.getState(),
            { ref: H, refType: re, refState: $ } = j[i] || {},
            x = $ && $[s];
          (re === Xy || wi(s)) && AV(H, $, x, d, o, N, me, c, R);
        }
        if (a) {
          if (S) {
            let j = ps({
              store: t,
              eventId: d,
              eventTarget: v,
              eventStateKey: I,
              actionListId: O,
              groupIndex: p + 1,
              verbose: b,
            });
            b &&
              !j &&
              t.dispatch(
                (0, ge.actionListPlaybackChanged)({
                  actionListId: O,
                  isPlaying: !1,
                })
              );
          }
          Es(e, t);
        }
      }
    }
  });
  var zy = u((pt) => {
    "use strict";
    var sB = bt().default,
      uB = je().default;
    Object.defineProperty(pt, "__esModule", { value: !0 });
    pt.actions = void 0;
    pt.destroy = Ky;
    pt.init = pB;
    pt.setEnv = dB;
    pt.store = void 0;
    ql();
    var cB = ka(),
      lB = uB(Qh()),
      hs = ss(),
      fB = sB(pi());
    pt.actions = fB;
    var qi = (0, cB.createStore)(lB.default);
    pt.store = qi;
    function dB(e) {
      e() && (0, hs.observeRequests)(qi);
    }
    function pB(e) {
      Ky(), (0, hs.startEngine)({ store: qi, rawData: e, allowEvents: !0 });
    }
    function Ky() {
      (0, hs.stopEngine)(qi);
    }
  });
  var Zy = u((fK, Qy) => {
    var Yy = et(),
      $y = zy();
    $y.setEnv(Yy.env);
    Yy.define(
      "ix2",
      (Qy.exports = function () {
        return $y;
      })
    );
  });
  var eI = u((dK, Jy) => {
    var Er = et();
    Er.define(
      "links",
      (Jy.exports = function (e, t) {
        var r = {},
          n = e(window),
          a,
          i = Er.env(),
          o = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/,
          d,
          v;
        r.ready = r.design = r.preview = I;
        function I() {
          (a = i && Er.env("design")),
            (v = Er.env("slug") || o.pathname || ""),
            Er.scroll.off(S),
            (d = []);
          for (var b = document.links, R = 0; R < b.length; ++R) O(b[R]);
          d.length && (Er.scroll.on(S), S());
        }
        function O(b) {
          var R =
            (a && b.getAttribute("href-disabled")) || b.getAttribute("href");
          if (((s.href = R), !(R.indexOf(":") >= 0))) {
            var y = e(b);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === o.host + o.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var q = e(s.hash);
              q.length && d.push({ link: y, sec: q, active: !1 });
              return;
            }
            if (!(R === "#" || R === "")) {
              var w = s.href === o.href || R === v || (f.test(R) && p.test(v));
              N(y, c, w);
            }
          }
        }
        function S() {
          var b = n.scrollTop(),
            R = n.height();
          t.each(d, function (y) {
            var q = y.link,
              w = y.sec,
              C = w.offset().top,
              D = w.outerHeight(),
              j = R * 0.5,
              H = w.is(":visible") && C + D - j >= b && C + j <= b + R;
            y.active !== H && ((y.active = H), N(q, c, H));
          });
        }
        function N(b, R, y) {
          var q = b.hasClass(R);
          (y && q) || (!y && !q) || (y ? b.addClass(R) : b.removeClass(R));
        }
        return r;
      })
    );
  });
  var rI = u((pK, tI) => {
    var Pi = et();
    Pi.define(
      "scroll",
      (tI.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = O() ? null : window.history,
          a = e(window),
          i = e(document),
          o = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (x) {
              window.setTimeout(x, 15);
            },
          c = Pi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          p = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + p + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(v));
        function O() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var S = /^#[a-zA-Z0-9][\w:.-]*$/;
        function N(x) {
          return S.test(x.hash) && x.host + x.pathname === r.host + r.pathname;
        }
        let b =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            b.matches
          );
        }
        function y(x, _) {
          var L;
          switch (_) {
            case "add":
              (L = x.attr("tabindex")),
                L
                  ? x.attr("data-wf-tabindex-swap", L)
                  : x.attr("tabindex", "-1");
              break;
            case "remove":
              (L = x.attr("data-wf-tabindex-swap")),
                L
                  ? (x.attr("tabindex", L),
                    x.removeAttr("data-wf-tabindex-swap"))
                  : x.removeAttr("tabindex");
              break;
          }
          x.toggleClass("wf-force-outline-none", _ === "add");
        }
        function q(x) {
          var _ = x.currentTarget;
          if (
            !(
              Pi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var L = N(_) ? _.hash : "";
            if (L !== "") {
              var M = e(L);
              M.length &&
                (x && (x.preventDefault(), x.stopPropagation()),
                w(L, x),
                window.setTimeout(
                  function () {
                    C(M, function () {
                      y(M, "add"),
                        M.get(0).focus({ preventScroll: !0 }),
                        y(M, "remove");
                    });
                  },
                  x ? 0 : 300
                ));
            }
          }
        }
        function w(x) {
          if (
            r.hash !== x &&
            n &&
            n.pushState &&
            !(Pi.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== x && n.pushState({ hash: x }, "", x);
          }
        }
        function C(x, _) {
          var L = a.scrollTop(),
            M = D(x);
          if (L !== M) {
            var G = j(x, L, M),
              K = Date.now(),
              Z = function () {
                var P = Date.now() - K;
                window.scroll(0, H(L, M, P, G)),
                  P <= G ? s(Z) : typeof _ == "function" && _();
              };
            s(Z);
          }
        }
        function D(x) {
          var _ = e(f),
            L = _.css("position") === "fixed" ? _.outerHeight() : 0,
            M = x.offset().top - L;
          if (x.data("scroll") === "mid") {
            var G = a.height() - L,
              K = x.outerHeight();
            K < G && (M -= Math.round((G - K) / 2));
          }
          return M;
        }
        function j(x, _, L) {
          if (R()) return 0;
          var M = 1;
          return (
            o.add(x).each(function (G, K) {
              var Z = parseFloat(K.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (M = Z);
            }),
            (472.143 * Math.log(Math.abs(_ - L) + 125) - 2e3) * M
          );
        }
        function H(x, _, L, M) {
          return L > M ? _ : x + (_ - x) * re(L / M);
        }
        function re(x) {
          return x < 0.5
            ? 4 * x * x * x
            : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
        }
        function $() {
          var { WF_CLICK_EMPTY: x, WF_CLICK_SCROLL: _ } = t;
          i.on(_, d, q),
            i.on(x, p, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: $ };
      })
    );
  });
  var iI = u((vK, nI) => {
    var vB = et();
    vB.define(
      "touch",
      (nI.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var o = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            p;
          i.addEventListener("touchstart", d, !1),
            i.addEventListener("touchmove", v, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", O, !1),
            i.addEventListener("mousedown", d, !1),
            i.addEventListener("mousemove", v, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", O, !1);
          function d(N) {
            var b = N.touches;
            (b && b.length > 1) ||
              ((o = !0),
              b ? ((s = !0), (f = b[0].clientX)) : (f = N.clientX),
              (p = f));
          }
          function v(N) {
            if (o) {
              if (s && N.type === "mousemove") {
                N.preventDefault(), N.stopPropagation();
                return;
              }
              var b = N.touches,
                R = b ? b[0].clientX : N.clientX,
                y = R - p;
              (p = R),
                Math.abs(y) > c &&
                  r &&
                  String(r()) === "" &&
                  (a("swipe", N, { direction: y > 0 ? "right" : "left" }), O());
            }
          }
          function I(N) {
            if (o && ((o = !1), s && N.type === "mouseup")) {
              N.preventDefault(), N.stopPropagation(), (s = !1);
              return;
            }
          }
          function O() {
            o = !1;
          }
          function S() {
            i.removeEventListener("touchstart", d, !1),
              i.removeEventListener("touchmove", v, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", O, !1),
              i.removeEventListener("mousedown", d, !1),
              i.removeEventListener("mousemove", v, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", O, !1),
              (i = null);
          }
          this.destroy = S;
        }
        function a(i, o, s) {
          var c = e.Event(i, { originalEvent: o });
          e(o.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var aI = u((gs) => {
    "use strict";
    Object.defineProperty(gs, "__esModule", { value: !0 });
    gs.default = EB;
    function EB(e, t, r, n, a, i, o, s, c, f, p, d, v) {
      return function (I) {
        e(I);
        var O = I.form,
          S = {
            name: O.attr("data-name") || O.attr("name") || "Untitled Form",
            pageId: O.attr("data-wf-page-id") || "",
            elementId: O.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              O.html()
            ),
            trackingCookies: n(),
          };
        let N = O.attr("data-wf-flow");
        N && (S.wfFlow = N), a(I);
        var b = i(O, S.fields);
        if (b) return o(b);
        if (((S.fileUploads = s(O)), c(I), !f)) {
          p(I);
          return;
        }
        d.ajax({
          url: v,
          type: "POST",
          data: S,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (I.success = !0), p(I);
          })
          .fail(function () {
            p(I);
          });
      };
    }
  });
  var sI = u((hK, oI) => {
    var Li = et();
    Li.define(
      "forms",
      (oI.exports = function (e, t) {
        var r = {},
          n = e(document),
          a,
          i = window.location,
          o = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          f = /e(-)?mail/i,
          p = /^\S+@\S+$/,
          d = window.alert,
          v = Li.env(),
          I,
          O,
          S,
          N = /list-manage[1-9]?.com/i,
          b = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              R(), !v && !I && q();
            };
        function R() {
          (c = e("html").attr("data-wf-site")),
            (O = "https://webflow.com/api/v1/form/" + c),
            o &&
              O.indexOf("https://webflow.com") >= 0 &&
              (O = O.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (S = `${O}/signFile`),
            (a = e(s + " form")),
            a.length && a.each(y);
        }
        function y(P, V) {
          var B = e(V),
            X = e.data(V, s);
          X || (X = e.data(V, s, { form: B })), w(X);
          var F = B.closest("div.w-form");
          (X.done = F.find("> .w-form-done")),
            (X.fail = F.find("> .w-form-fail")),
            (X.fileUploads = F.find(".w-file-upload")),
            X.fileUploads.each(function (oe) {
              G(oe, X);
            });
          var Y =
            X.form.attr("aria-label") || X.form.attr("data-name") || "Form";
          X.done.attr("aria-label") || X.form.attr("aria-label", Y),
            X.done.attr("tabindex", "-1"),
            X.done.attr("role", "region"),
            X.done.attr("aria-label") ||
              X.done.attr("aria-label", Y + " success"),
            X.fail.attr("tabindex", "-1"),
            X.fail.attr("role", "region"),
            X.fail.attr("aria-label") ||
              X.fail.attr("aria-label", Y + " failure");
          var ae = (X.action = B.attr("action"));
          if (
            ((X.handler = null),
            (X.redirect = B.attr("data-redirect")),
            N.test(ae))
          ) {
            X.handler = _;
            return;
          }
          if (!ae) {
            if (c) {
              X.handler = (() => {
                let oe = aI().default;
                return oe(w, i, Li, re, M, D, d, j, C, c, L, e, O);
              })();
              return;
            }
            b();
          }
        }
        function q() {
          (I = !0),
            n.on("submit", s + " form", function (oe) {
              var z = e.data(this, s);
              z.handler && ((z.evt = oe), z.handler(z));
            });
          let P = ".w-checkbox-input",
            V = ".w-radio-input",
            B = "w--redirected-checked",
            X = "w--redirected-focus",
            F = "w--redirected-focus-visible",
            Y = ":focus-visible, [data-wf-focus-visible]",
            ae = [
              ["checkbox", P],
              ["radio", V],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + P + ")",
            (oe) => {
              e(oe.target).siblings(P).toggleClass(B);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (oe) => {
              e(`input[name="${oe.target.name}"]:not(${P})`).map((pe, Gt) =>
                e(Gt).siblings(V).removeClass(B)
              );
              let z = e(oe.target);
              z.hasClass("w-radio-input") || z.siblings(V).addClass(B);
            }),
            ae.forEach(([oe, z]) => {
              n.on(
                "focus",
                s + ` form input[type="${oe}"]:not(` + z + ")",
                (pe) => {
                  e(pe.target).siblings(z).addClass(X),
                    e(pe.target).filter(Y).siblings(z).addClass(F);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${oe}"]:not(` + z + ")",
                  (pe) => {
                    e(pe.target).siblings(z).removeClass(`${X} ${F}`);
                  }
                );
            });
        }
        function w(P) {
          var V = (P.btn = P.form.find(':input[type="submit"]'));
          (P.wait = P.btn.attr("data-wait") || null),
            (P.success = !1),
            V.prop("disabled", !1),
            P.label && V.val(P.label);
        }
        function C(P) {
          var V = P.btn,
            B = P.wait;
          V.prop("disabled", !0), B && ((P.label = V.val()), V.val(B));
        }
        function D(P, V) {
          var B = null;
          return (
            (V = V || {}),
            P.find(':input:not([type="submit"]):not([type="file"])').each(
              function (X, F) {
                var Y = e(F),
                  ae = Y.attr("type"),
                  oe =
                    Y.attr("data-name") || Y.attr("name") || "Field " + (X + 1),
                  z = Y.val();
                if (ae === "checkbox") z = Y.is(":checked");
                else if (ae === "radio") {
                  if (V[oe] === null || typeof V[oe] == "string") return;
                  z =
                    P.find(
                      'input[name="' + Y.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof z == "string" && (z = e.trim(z)),
                  (V[oe] = z),
                  (B = B || $(Y, ae, oe, z));
              }
            ),
            B
          );
        }
        function j(P) {
          var V = {};
          return (
            P.find(':input[type="file"]').each(function (B, X) {
              var F = e(X),
                Y = F.attr("data-name") || F.attr("name") || "File " + (B + 1),
                ae = F.attr("data-value");
              typeof ae == "string" && (ae = e.trim(ae)), (V[Y] = ae);
            }),
            V
          );
        }
        let H = { _mkto_trk: "marketo" };
        function re() {
          return document.cookie.split("; ").reduce(function (V, B) {
            let X = B.split("="),
              F = X[0];
            if (F in H) {
              let Y = H[F],
                ae = X.slice(1).join("=");
              V[Y] = ae;
            }
            return V;
          }, {});
        }
        function $(P, V, B, X) {
          var F = null;
          return (
            V === "password"
              ? (F = "Passwords cannot be submitted.")
              : P.attr("required")
              ? X
                ? f.test(P.attr("type")) &&
                  (p.test(X) ||
                    (F = "Please enter a valid email address for: " + B))
                : (F = "Please fill out the required field: " + B)
              : B === "g-recaptcha-response" &&
                !X &&
                (F = "Please confirm you\u2019re not a robot."),
            F
          );
        }
        function x(P) {
          M(P), L(P);
        }
        function _(P) {
          w(P);
          var V = P.form,
            B = {};
          if (/^https/.test(i.href) && !/^https/.test(P.action)) {
            V.attr("method", "post");
            return;
          }
          M(P);
          var X = D(V, B);
          if (X) return d(X);
          C(P);
          var F;
          t.each(B, function (z, pe) {
            f.test(pe) && (B.EMAIL = z),
              /^((full[ _-]?)?name)$/i.test(pe) && (F = z),
              /^(first[ _-]?name)$/i.test(pe) && (B.FNAME = z),
              /^(last[ _-]?name)$/i.test(pe) && (B.LNAME = z);
          }),
            F &&
              !B.FNAME &&
              ((F = F.split(" ")),
              (B.FNAME = F[0]),
              (B.LNAME = B.LNAME || F[1]));
          var Y = P.action.replace("/post?", "/post-json?") + "&c=?",
            ae = Y.indexOf("u=") + 2;
          ae = Y.substring(ae, Y.indexOf("&", ae));
          var oe = Y.indexOf("id=") + 3;
          (oe = Y.substring(oe, Y.indexOf("&", oe))),
            (B["b_" + ae + "_" + oe] = ""),
            e
              .ajax({ url: Y, data: B, dataType: "jsonp" })
              .done(function (z) {
                (P.success = z.result === "success" || /already/.test(z.msg)),
                  P.success || console.info("MailChimp error: " + z.msg),
                  L(P);
              })
              .fail(function () {
                L(P);
              });
        }
        function L(P) {
          var V = P.form,
            B = P.redirect,
            X = P.success;
          if (X && B) {
            Li.location(B);
            return;
          }
          P.done.toggle(X),
            P.fail.toggle(!X),
            X ? P.done.focus() : P.fail.focus(),
            V.toggle(!X),
            w(P);
        }
        function M(P) {
          P.evt && P.evt.preventDefault(), (P.evt = null);
        }
        function G(P, V) {
          if (!V.fileUploads || !V.fileUploads[P]) return;
          var B,
            X = e(V.fileUploads[P]),
            F = X.find("> .w-file-upload-default"),
            Y = X.find("> .w-file-upload-uploading"),
            ae = X.find("> .w-file-upload-success"),
            oe = X.find("> .w-file-upload-error"),
            z = F.find(".w-file-upload-input"),
            pe = F.find(".w-file-upload-label"),
            Gt = pe.children(),
            _e = oe.find(".w-file-upload-error-msg"),
            vt = ae.find(".w-file-upload-file"),
            hr = ae.find(".w-file-remove-link"),
            gr = vt.find(".w-file-upload-file-name"),
            _r = _e.attr("data-w-size-error"),
            Qe = _e.attr("data-w-type-error"),
            xi = _e.attr("data-w-generic-error");
          if (
            (v ||
              pe.on("click keydown", function (h) {
                (h.type === "keydown" && h.which !== 13 && h.which !== 32) ||
                  (h.preventDefault(), z.click());
              }),
            pe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            hr.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            v)
          )
            z.on("click", function (h) {
              h.preventDefault();
            }),
              pe.on("click", function (h) {
                h.preventDefault();
              }),
              Gt.on("click", function (h) {
                h.preventDefault();
              });
          else {
            hr.on("click keydown", function (h) {
              if (h.type === "keydown") {
                if (h.which !== 13 && h.which !== 32) return;
                h.preventDefault();
              }
              z.removeAttr("data-value"),
                z.val(""),
                gr.html(""),
                F.toggle(!0),
                ae.toggle(!1),
                pe.focus();
            }),
              z.on("change", function (h) {
                (B = h.target && h.target.files && h.target.files[0]),
                  B &&
                    (F.toggle(!1),
                    oe.toggle(!1),
                    Y.toggle(!0),
                    Y.focus(),
                    gr.text(B.name),
                    T() || C(V),
                    (V.fileUploads[P].uploading = !0),
                    K(B, E));
              });
            var tn = pe.outerHeight();
            z.height(tn), z.width(1);
          }
          function l(h) {
            var m = h.responseJSON && h.responseJSON.msg,
              W = xi;
            typeof m == "string" && m.indexOf("InvalidFileTypeError") === 0
              ? (W = Qe)
              : typeof m == "string" &&
                m.indexOf("MaxFileSizeError") === 0 &&
                (W = _r),
              _e.text(W),
              z.removeAttr("data-value"),
              z.val(""),
              Y.toggle(!1),
              F.toggle(!0),
              oe.toggle(!0),
              oe.focus(),
              (V.fileUploads[P].uploading = !1),
              T() || w(V);
          }
          function E(h, m) {
            if (h) return l(h);
            var W = m.fileName,
              Q = m.postData,
              fe = m.fileId,
              U = m.s3Url;
            z.attr("data-value", fe), Z(U, Q, B, W, g);
          }
          function g(h) {
            if (h) return l(h);
            Y.toggle(!1),
              ae.css("display", "inline-block"),
              ae.focus(),
              (V.fileUploads[P].uploading = !1),
              T() || w(V);
          }
          function T() {
            var h = (V.fileUploads && V.fileUploads.toArray()) || [];
            return h.some(function (m) {
              return m.uploading;
            });
          }
        }
        function K(P, V) {
          var B = new URLSearchParams({ name: P.name, size: P.size });
          e.ajax({ type: "GET", url: `${S}?${B}`, crossDomain: !0 })
            .done(function (X) {
              V(null, X);
            })
            .fail(function (X) {
              V(X);
            });
        }
        function Z(P, V, B, X, F) {
          var Y = new FormData();
          for (var ae in V) Y.append(ae, V[ae]);
          Y.append("file", B, X),
            e
              .ajax({
                type: "POST",
                url: P,
                data: Y,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                F(null);
              })
              .fail(function (oe) {
                F(oe);
              });
        }
        return r;
      })
    );
  });
  Ns();
  Ps();
  xs();
  Fs();
  js();
  Zy();
  eI();
  rI();
  iI();
  sI();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        selector: ".link-wrapper",
        originalId: "06ee49b0-1cf3-711a-3ec4-d4e1ab02faf7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-wrapper",
          originalId: "06ee49b0-1cf3-711a-3ec4-d4e1ab02faf7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677766802979,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        selector: ".link-wrapper",
        originalId: "06ee49b0-1cf3-711a-3ec4-d4e1ab02faf7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-wrapper",
          originalId: "06ee49b0-1cf3-711a-3ec4-d4e1ab02faf7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677766802979,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6486e366f96e22d43c36cbf3|30b6ff5a-684a-1d62-5d49-d42f0b88a98d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e366f96e22d43c36cbf3|30b6ff5a-684a-1d62-5d49-d42f0b88a98d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686578865495,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6486e366f96e22d43c36cbf3|6566d26a-bbe6-7161-3f27-2bb02639e2a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e366f96e22d43c36cbf3|6566d26a-bbe6-7161-3f27-2bb02639e2a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686578898277,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".polaroid-frame",
        originalId: "7a3c8823-e396-fe4d-deaf-c97d0e3e2b82",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".polaroid-frame",
          originalId: "7a3c8823-e396-fe4d-deaf-c97d0e3e2b82",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686820393976,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".image-cover.parallax",
        originalId:
          "647eededbbc452148431a7c7|aee12463-9b88-629c-5175-8e62859ab02a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".image-cover.parallax",
          originalId:
            "647eededbbc452148431a7c7|aee12463-9b88-629c-5175-8e62859ab02a",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686822162753,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".span",
        originalId:
          "647eededbbc452148431a7c7|e1f1febb-4008-8201-7679-520d03b99d6f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".span",
          originalId:
            "647eededbbc452148431a7c7|e1f1febb-4008-8201-7679-520d03b99d6f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686823794310,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6486e77105541685a26964d7|81cceab3-4b96-bc61-0b9a-6efee00799ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e77105541685a26964d7|81cceab3-4b96-bc61-0b9a-6efee00799ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 22,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686825503001,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64883e571e053a4ef92ab944|81cceab3-4b96-bc61-0b9a-6efee00799ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64883e571e053a4ef92ab944|81cceab3-4b96-bc61-0b9a-6efee00799ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 22,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686828134387,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6488338be4ef8372519db736|3df508f4-ee8c-9adf-d0b9-b27889823d1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6488338be4ef8372519db736|3df508f4-ee8c-9adf-d0b9-b27889823d1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 22,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686828160670,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7c7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7c7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1686994748117,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "648593f931e8ac270479bd58",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687336740093,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "89f03eb7-27dc-549a-6bff-c43236b659d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "89f03eb7-27dc-549a-6bff-c43236b659d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687526448329,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c82b7525-ecb7-fe2d-3431-3c8ad0e135ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c82b7525-ecb7-fe2d-3431-3c8ad0e135ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687526646495,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687527468828,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6486e366f96e22d43c36cbf3",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e366f96e22d43c36cbf3",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1687546618652,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".image-cover.is-hover-animation",
        originalId: "86e4f593-cecc-bd5d-a0f5-d8e06ce750ba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".image-cover.is-hover-animation",
          originalId: "86e4f593-cecc-bd5d-a0f5-d8e06ce750ba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688382195957,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".image-cover.is-hover-animation",
        originalId: "86e4f593-cecc-bd5d-a0f5-d8e06ce750ba",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".image-cover.is-hover-animation",
          originalId: "86e4f593-cecc-bd5d-a0f5-d8e06ce750ba",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688382195957,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "648593f931e8ac270479bd58",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688383362739,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "648593f931e8ac270479bd58|34ed53a7-5bec-bec9-f115-908b752118e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58|34ed53a7-5bec-bec9-f115-908b752118e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688390090610,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "648593f931e8ac270479bd58|34ed53a7-5bec-bec9-f115-908b752118e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58|34ed53a7-5bec-bec9-f115-908b752118e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688390090610,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "648593f931e8ac270479bd58|8c54829a-b7f7-517d-7e7a-1188794daffc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58|8c54829a-b7f7-517d-7e7a-1188794daffc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688394107715,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "648593f931e8ac270479bd58|8c54829a-b7f7-517d-7e7a-1188794daffc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58|8c54829a-b7f7-517d-7e7a-1188794daffc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688394107715,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "648593f931e8ac270479bd58|d0559ada-fa5b-07d1-e5b1-ec3ff3382d78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58|d0559ada-fa5b-07d1-e5b1-ec3ff3382d78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688394337661,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "648593f931e8ac270479bd58|d0559ada-fa5b-07d1-e5b1-ec3ff3382d78",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "648593f931e8ac270479bd58|d0559ada-fa5b-07d1-e5b1-ec3ff3382d78",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688394337662,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7c7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7c7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688399938330,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6485b2e025afd798f142e43b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688399971580,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b|a1705d7d-fe6d-2b8a-818e-f1a5f80be169",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b|a1705d7d-fe6d-2b8a-818e-f1a5f80be169",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688400671883,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b|a1705d7d-fe6d-2b8a-818e-f1a5f80be169",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b|a1705d7d-fe6d-2b8a-818e-f1a5f80be169",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688400671884,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b|7c5b41c9-c706-5cc4-0110-078b77d7cce3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b|7c5b41c9-c706-5cc4-0110-078b77d7cce3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688400719627,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b|7c5b41c9-c706-5cc4-0110-078b77d7cce3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b|7c5b41c9-c706-5cc4-0110-078b77d7cce3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688400719676,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b|d56eae07-6ab5-07c9-3cef-9bb435c227fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b|d56eae07-6ab5-07c9-3cef-9bb435c227fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688400755501,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6485b2e025afd798f142e43b|d56eae07-6ab5-07c9-3cef-9bb435c227fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6485b2e025afd798f142e43b|d56eae07-6ab5-07c9-3cef-9bb435c227fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688400755551,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cursor-animation",
        originalId:
          "647eededbbc452148431a7c7|f8fef5b2-88a8-e224-4431-2f74d0df3f34",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cursor-animation",
          originalId:
            "647eededbbc452148431a7c7|f8fef5b2-88a8-e224-4431-2f74d0df3f34",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688401287857,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".cursor-animation",
        originalId:
          "647eededbbc452148431a7c7|f8fef5b2-88a8-e224-4431-2f74d0df3f34",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".cursor-animation",
          originalId:
            "647eededbbc452148431a7c7|f8fef5b2-88a8-e224-4431-2f74d0df3f34",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688401287857,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6486e77105541685a26964d7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e77105541685a26964d7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688402209004,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64883e571e053a4ef92ab944",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64883e571e053a4ef92ab944",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688402349142,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6488338be4ef8372519db736",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6488338be4ef8372519db736",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688402468688,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7cb",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7cb",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688402507483,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7ca",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7ca",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688402557619,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7cc",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7cc",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688402695833,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7cd",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7cd",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688402724764,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6489669c25271d02cd2d1650",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6489669c25271d02cd2d1650",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688403157660,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "64896ab3b7a00eb374efb751",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64896ab3b7a00eb374efb751",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688403244475,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6489736457c8113a8733207b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6489736457c8113a8733207b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688403292483,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6486e366f96e22d43c36cbf3",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e366f96e22d43c36cbf3",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
      ],
      createdOn: 1688403430077,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7c8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7c8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688403490810,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7c8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7c8",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688403527956,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "647eededbbc452148431a7c9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7c9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 60,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-20-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1688403597201,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6489669c25271d02cd2d1650",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6489669c25271d02cd2d1650",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405470725,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6486e77105541685a26964d7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6486e77105541685a26964d7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405621084,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64883e571e053a4ef92ab944",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64883e571e053a4ef92ab944",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405720050,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6488338be4ef8372519db736",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6488338be4ef8372519db736",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405756781,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7cb",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7cb",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405817823,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7ca",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7ca",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405839944,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7cc",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7cc",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405869155,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7cd",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7cd",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688405890331,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "64896ab3b7a00eb374efb751",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "64896ab3b7a00eb374efb751",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688406081161,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6489736457c8113a8733207b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6489736457c8113a8733207b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688406110956,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647eededbbc452148431a7c9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647eededbbc452148431a7c9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1688406157611,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Link [hover]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                xValue: -105,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.19, 1, 0.22, 1],
                duration: 500,
                target: {},
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677764884355,
    },
    "a-2": {
      id: "a-2",
      title: "Link [out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.19, 1, 0.22, 1],
                duration: 500,
                target: {},
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677764884355,
    },
    "a-3": {
      id: "a-3",
      title: "Work banner [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".works-table",
                  selectorGuids: ["17f26584-6795-6559-5a3f-0b6fc3356d1a"],
                },
                value: "none",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6486e366f96e22d43c36cbf3|6566d26a-bbe6-7161-3f27-2bb02639e2a7",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6486e366f96e22d43c36cbf3|6566d26a-bbe6-7161-3f27-2bb02639e2a7",
                },
                value: "flex",
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  id: "6486e366f96e22d43c36cbf3|30b6ff5a-684a-1d62-5d49-d42f0b88a98d",
                },
                value: "none",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".works-table",
                  selectorGuids: ["17f26584-6795-6559-5a3f-0b6fc3356d1a"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686578721976,
    },
    "a-4": {
      id: "a-4",
      title: "Work banner [close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6486e366f96e22d43c36cbf3|6566d26a-bbe6-7161-3f27-2bb02639e2a7",
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  id: "6486e366f96e22d43c36cbf3|30b6ff5a-684a-1d62-5d49-d42f0b88a98d",
                },
                value: "flex",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".works-table",
                  selectorGuids: ["17f26584-6795-6559-5a3f-0b6fc3356d1a"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1686578721976,
    },
    "a-7": {
      id: "a-7",
      title: "Polaroid scroll in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "7a3c8823-e396-fe4d-deaf-c97d0e3e2b82",
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "em",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover",
                  selectorGuids: ["ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3"],
                },
                xValue: 1.05,
                yValue: 1.05,
                locked: true,
              },
            },
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover",
                  selectorGuids: ["ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".polaroid",
                  selectorGuids: ["7784bb9d-9c3f-4273-5233-9399ca37d39b"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 1],
                duration: 2000,
                target: {
                  useEventTarget: true,
                  id: "7a3c8823-e396-fe4d-deaf-c97d0e3e2b82",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "em",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 1],
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".polaroid",
                  selectorGuids: ["7784bb9d-9c3f-4273-5233-9399ca37d39b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: [0.31, 0, 0, 1],
                duration: 330,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover",
                  selectorGuids: ["ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 660,
                easing: [0.31, 0, 0, 1],
                duration: 2000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover",
                  selectorGuids: ["ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686820399599,
    },
    "a-8": {
      id: "a-8",
      title: "Image parallax",
      continuousParameterGroups: [
        {
          id: "a-8-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-8-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "647eededbbc452148431a7c7|aee12463-9b88-629c-5175-8e62859ab02a",
                    },
                    yValue: -8,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-8-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "647eededbbc452148431a7c7|aee12463-9b88-629c-5175-8e62859ab02a",
                    },
                    xValue: 1.05,
                    yValue: 1.05,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-8-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "647eededbbc452148431a7c7|aee12463-9b88-629c-5175-8e62859ab02a",
                    },
                    yValue: 8,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-8-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "647eededbbc452148431a7c7|aee12463-9b88-629c-5175-8e62859ab02a",
                    },
                    xValue: 1.08,
                    yValue: 1.08,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1686822180483,
    },
    "a-9": {
      id: "a-9",
      title: "Heading animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "647eededbbc452148431a7c7|e1f1febb-4008-8201-7679-520d03b99d6f",
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".big-heading",
                  selectorGuids: ["bd5b01dc-cacd-ecf6-c4d4-b233a0b070e9"],
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 1],
                duration: 660,
                target: {
                  useEventTarget: true,
                  id: "647eededbbc452148431a7c7|e1f1febb-4008-8201-7679-520d03b99d6f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 1],
                duration: 660,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".big-heading",
                  selectorGuids: ["bd5b01dc-cacd-ecf6-c4d4-b233a0b070e9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686823815876,
    },
    "a-10": {
      id: "a-10",
      title: "Heading animation CMS",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "647eededbbc452148431a7c7|e1f1febb-4008-8201-7679-520d03b99d6f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".big-heading",
                  selectorGuids: ["bd5b01dc-cacd-ecf6-c4d4-b233a0b070e9"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 1],
                duration: 660,
                target: {
                  useEventTarget: true,
                  id: "647eededbbc452148431a7c7|e1f1febb-4008-8201-7679-520d03b99d6f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 1],
                duration: 660,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".big-heading",
                  selectorGuids: ["bd5b01dc-cacd-ecf6-c4d4-b233a0b070e9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686823815876,
    },
    "a-12": {
      id: "a-12",
      title: "Preloader",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrapper-hero-flash.even",
                  selectorGuids: [
                    "9a9e9d74-ccd8-94f6-a9fe-1aa252fb7436",
                    "cba424e9-465d-c36e-5556-e0ab1295ab23",
                  ],
                },
                yValue: -110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "4adbe95e-ad88-39fa-4962-c0d80c9cb403" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-30",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "2f9c7ebd-95fd-26b6-9570-6a0819ea067d" },
                value: "none",
              },
            },
            {
              id: "a-12-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-cover.preloader-image",
                  selectorGuids: [
                    "ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3",
                    "9255dd94-d9ad-1694-26d4-d35480b699ce",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "9392a574-95c2-49f5-c7e2-f6e2dd9d475a" },
                value: "block",
              },
            },
            {
              id: "a-12-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-flash",
                  selectorGuids: ["4648113a-6b4c-d0b8-06ae-123fa0f24524"],
                },
                yValue: -300,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".main",
                  selectorGuids: ["825a26ff-8ef5-5a86-57eb-a3888a768ee7"],
                },
                yValue: -6,
                xUnit: "PX",
                yUnit: "em",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrapper-hero-flash.odd",
                  selectorGuids: [
                    "9a9e9d74-ccd8-94f6-a9fe-1aa252fb7436",
                    "b1628bf4-16db-3e2e-115d-6affc34cd9b0",
                  ],
                },
                yValue: -120,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inOutQuart",
                duration: 2500,
                target: {
                  selector: ".wrapper-hero-flash.even",
                  selectorGuids: [
                    "9a9e9d74-ccd8-94f6-a9fe-1aa252fb7436",
                    "cba424e9-465d-c36e-5556-e0ab1295ab23",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "inOutQuart",
                duration: 300,
                target: { id: "4adbe95e-ad88-39fa-4962-c0d80c9cb403" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-31",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 500,
                easing: "",
                duration: 0,
                target: { id: "2f9c7ebd-95fd-26b6-9570-6a0819ea067d" },
                value: "flex",
              },
            },
            {
              id: "a-12-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inOutQuart",
                duration: 2500,
                target: {
                  selector: ".image-cover.preloader-image",
                  selectorGuids: [
                    "ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3",
                    "9255dd94-d9ad-1694-26d4-d35480b699ce",
                  ],
                },
                yValue: -25,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inOutQuart",
                duration: 2500,
                target: {
                  selector: ".hero-flash",
                  selectorGuids: ["4648113a-6b4c-d0b8-06ae-123fa0f24524"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inOutQuart",
                duration: 2500,
                target: {
                  selector: ".wrapper-hero-flash.odd",
                  selectorGuids: [
                    "9a9e9d74-ccd8-94f6-a9fe-1aa252fb7436",
                    "b1628bf4-16db-3e2e-115d-6affc34cd9b0",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2500,
                easing: "inCubic",
                duration: 1000,
                target: { id: "9392a574-95c2-49f5-c7e2-f6e2dd9d475a" },
                yValue: -110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2500,
                easing: [0.55, 0.055, 0.675, 0.19],
                duration: 1000,
                target: { id: "9392a574-95c2-49f5-c7e2-f6e2dd9d475c" },
                yValue: 60,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2500,
                easing: "outCirc",
                duration: 1500,
                target: {
                  selector: ".main",
                  selectorGuids: ["825a26ff-8ef5-5a86-57eb-a3888a768ee7"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "em",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "9392a574-95c2-49f5-c7e2-f6e2dd9d475a" },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1686995769223,
    },
    "a-13": {
      id: "a-13",
      title: "Info [open]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".template-info",
                  selectorGuids: ["a0631cc2-1568-c89c-8cdf-d2436bd7b89c"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1687526458328,
    },
    "a-14": {
      id: "a-14",
      title: "Info [close]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".template-info",
                  selectorGuids: ["a0631cc2-1568-c89c-8cdf-d2436bd7b89c"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1687526458328,
    },
    "a-15": {
      id: "a-15",
      title: "Footer image [hover]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 0.95],
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover.is-hover-animation",
                  selectorGuids: [
                    "ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3",
                    "b93b9bc1-39d2-6763-5840-8519a9590bae",
                  ],
                },
                xValue: 1.02,
                yValue: 1.02,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1688382132176,
    },
    "a-16": {
      id: "a-16",
      title: "Footer image [out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.31, 0, 0, 0.95],
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-cover.is-hover-animation",
                  selectorGuids: [
                    "ebd3a6a6-e4b0-0ce2-6cd5-c1a17ea168e3",
                    "b93b9bc1-39d2-6763-5840-8519a9590bae",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1688382132176,
    },
    "a-20": {
      id: "a-20",
      title: "Cursor Follow",
      continuousParameterGroups: [
        {
          id: "a-20-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-20-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor",
                      selectorGuids: ["4a5c58f1-85a8-88d1-64da-a17c4d9bf502"],
                    },
                    xValue: 0,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-20-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor",
                      selectorGuids: ["4a5c58f1-85a8-88d1-64da-a17c4d9bf502"],
                    },
                    xValue: 100,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-20-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-20-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor",
                      selectorGuids: ["4a5c58f1-85a8-88d1-64da-a17c4d9bf502"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-20-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".cursor",
                      selectorGuids: ["4a5c58f1-85a8-88d1-64da-a17c4d9bf502"],
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1688385210916,
    },
    "a-18": {
      id: "a-18",
      title: "Gallery mouse 1 [hover]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-1",
                  selectorGuids: ["90386e3e-947f-e47e-76c1-f89af4057b79"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-2",
                  selectorGuids: ["84d3335f-d3c2-dd64-27df-6e3bb743af4f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-3",
                  selectorGuids: ["d07e1bdf-992b-102e-cdf8-0adc8c99cd19"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".collection-1",
                  selectorGuids: ["90386e3e-947f-e47e-76c1-f89af4057b79"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1688383631312,
    },
    "a-21": {
      id: "a-21",
      title: "Gallery mouse [out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".collection-1",
                  selectorGuids: ["90386e3e-947f-e47e-76c1-f89af4057b79"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".collection-3",
                  selectorGuids: ["d07e1bdf-992b-102e-cdf8-0adc8c99cd19"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".collection-2",
                  selectorGuids: ["84d3335f-d3c2-dd64-27df-6e3bb743af4f"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1688383631312,
    },
    "a-22": {
      id: "a-22",
      title: "Gallery mouse 2 [hover]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-1",
                  selectorGuids: ["90386e3e-947f-e47e-76c1-f89af4057b79"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-2",
                  selectorGuids: ["84d3335f-d3c2-dd64-27df-6e3bb743af4f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-3",
                  selectorGuids: ["d07e1bdf-992b-102e-cdf8-0adc8c99cd19"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".collection-2",
                  selectorGuids: ["84d3335f-d3c2-dd64-27df-6e3bb743af4f"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1688383631312,
    },
    "a-24": {
      id: "a-24",
      title: "Gallery mouse 3 [hover]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-1",
                  selectorGuids: ["90386e3e-947f-e47e-76c1-f89af4057b79"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-2",
                  selectorGuids: ["84d3335f-d3c2-dd64-27df-6e3bb743af4f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".collection-3",
                  selectorGuids: ["d07e1bdf-992b-102e-cdf8-0adc8c99cd19"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".collection-3",
                  selectorGuids: ["d07e1bdf-992b-102e-cdf8-0adc8c99cd19"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1688383631312,
    },
    "a-25": {
      id: "a-25",
      title: "Cursor animation [hover]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".dot",
                  selectorGuids: ["ceab6268-8517-f8db-a05a-e328afa30dcc"],
                },
                xValue: 2.5,
                yValue: 2.5,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1688401293669,
    },
    "a-26": {
      id: "a-26",
      title: "Cursor animation [out]",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".dot",
                  selectorGuids: ["ceab6268-8517-f8db-a05a-e328afa30dcc"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1688401293669,
    },
    "a-27": {
      id: "a-27",
      title: "Preloader 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "4adbe95e-ad88-39fa-4962-c0d80c9cb403" },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "d5e54198-c422-fca8-dec2-ab9c5f486439" },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outExpo",
                duration: 1000,
                target: { id: "d5e54198-c422-fca8-dec2-ab9c5f486439" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "inOutQuart",
                duration: 300,
                target: { id: "4adbe95e-ad88-39fa-4962-c0d80c9cb403" },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "d5e54198-c422-fca8-dec2-ab9c5f486439" },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1688405474172,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
