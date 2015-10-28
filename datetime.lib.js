(function(a) {
    function F(b, l) {
        function f(b) {
            return a.isArray(g.readonly) ? (b = a(".dwwl", r).index(b), g.readonly[b]) : g.readonly
        }
        function m(b) {
            var a = '<div class="dw-bf">',
                d = 1,
                g;
            for (g in ga[b]) 0 == d % 20 && (a += '</div><div class="dw-bf">'), a += '<div class="dw-li dw-v" data-val="' + g + '" style="height:' + O + "px;line-height:" + O + 'px;"><div class="dw-i">' + ga[b][g] + "</div></div>", d++;
            return a + "</div>"
        }
        function n(b) {
            c = a(".dw-li", b).index(a(".dw-v", b).eq(0));
            k = a(".dw-li", b).index(a(".dw-v", b).eq(-1));
            E = a(".dw-ul", r).index(b);
            e = O;
            A = h
        }
        function w(b) {
            var a = g.headerText;
            return a ? "function" == typeof a ? a.call(X, b) : a.replace(/\{value\}/i, b) : ""
        }
        function qa() {
            h.temp = ea && null !== h.val && h.val != G.val() || null === h.values ? g.parseValue(G.val() || "", h) : h.values.slice(0);
            h.setValue(!0)
        }
        function B(b, g, d, c, e) {
            !1 !== Q("validate", [r, g, b]) && (a(".dw-ul", r).each(function(d) {
                var y = a(this),
                    l = a('.dw-li[data-val="' + h.temp[d] + '"]', y),
                    f = a(".dw-li", y),
                    x = f.index(l),
                    m = f.length,
                    n = d == g || void 0 === g;
                if (!l.hasClass("dw-v")) {
                    for (var r = l, W = 0, K = 0; 0 <= x - W && !r.hasClass("dw-v");) W++, r = f.eq(x - W);
                    for (; x + K < m && !l.hasClass("dw-v");) K++, l = f.eq(x + K);
                    (K < W && K && 2 !== c || !W || 0 > x - W || 1 == c) && l.hasClass("dw-v") ? x += K : (l = r, x -= W)
                }
                if (!l.hasClass("dw-sel") || n) h.temp[d] = l.attr("data-val"), a(".dw-sel", y).removeClass("dw-sel"), l.addClass("dw-sel"), h.scroll(y, d, x, n ? b : .1, n ? e : void 0)
            }), h.change(d))
        }
        function ka(b) {
            if (!("inline" == g.display || Y === a(window).width() && la === a(window).height() && b)) {
                var d, c, l, e, y, h, x, f, n, m = 0,
                    K = 0;
                b = a(window).scrollTop();
                e = a(".dwwr", r);
                var k = a(".dw", r),
                    ha = {};
                y = void 0 === g.anchor ? G : g.anchor;
                Y = a(window).width();
                la = a(window).height();
                R = (R = window.innerHeight) || la;
                /modal|bubble/.test(g.display) && (a(".dwc", r).each(function() {
                    d = a(this).outerWidth(!0);
                    m += d;
                    K = d > K ? d : K
                }), d = m > Y ? K : m, e.width(d));
                aa = k.outerWidth();
                S = k.outerHeight(!0);
                "modal" == g.display ? (c = (Y - aa) / 2, l = b + (R - S) / 2) : "bubble" == g.display ? (n = !0, f = a(".dw-arrw-i", r), c = y.offset(), h = c.top, x = c.left, e = y.outerWidth(), y = y.outerHeight(), c = x - (k.outerWidth(!0) - e) / 2, c = c > Y - aa ? Y - (aa + 20) : c, c = 0 <= c ? c : 20, l = h - S, l < b || h > b + R ? (k.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), l = h + y) : k.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), f = f.outerWidth(), e = x + e / 2 - (c + (aa - f) / 2), a(".dw-arr", r).css({
                    left: e > f ? f : e
                })) : (ha.width = "100%", "top" == g.display ? l = b : "bottom" == g.display && (l = b + R - S));
                ha.top = 0 > l ? 0 : l;
                ha.left = c;
                k.css(ha);
                a(".dw-persp", r).height(0).height(l + S > a(document).height() ? l + S : a(document).height());
                n && (l + S > b + R || h > b + R) && a(window).scrollTop(l + S - R)
            }
        }
        function F(b) {
            if ("touchstart" === b.type) P = !0, setTimeout(function() {
                P = !1
            }, 500);
            else if (P) return P = !1;
            return !0
        }
        function Q(b, d) {
            var c;
            d.push(h);
            a.each([ia, l], function(a, l) {
                l[b] && (c = l[b].apply(X, d))
            });
            return c
        }
        function ua(b) {
            var a = +b.data("pos") + 1;
            p(b, a > k ? c : a, 1, !0)
        }
        function N(b) {
            var a = +b.data("pos") - 1;
            p(b, a < c ? k : a, 2, !0)
        }
        var V, O, U, r, Y, R, la, aa, S, Z, ra, h = this,
            ma = a.mobiscroll,
            X = b,
            G = a(X),
            na, sa, g = H({}, ta),
            ia = {},
            ga = [],
            ba = {},
            oa = {},
            ea = G.is("input"),
            ca = !1;
        h.enable = function() {
            g.disabled = !1;
            ea && G.prop("disabled", !1)
        };
        h.disable = function() {
            g.disabled = !0;
            ea && G.prop("disabled", !0)
        };
        h.scroll = function(b, a, d, c, l) {
            function e(b, a, d, c) {
                return d * Math.sin(b / c * (Math.PI / 2)) + a
            }
            function g() {
                clearInterval(ba[a]);
                delete ba[a];
                b.data("pos", d).closest(".dwwl").removeClass("dwa")
            }
            var y = (V - d) * O,
                h;
            y == oa[a] && ba[a] || (oa[a] = y, b.attr("style", da + "-transition:all " + (c ? c.toFixed(3) : 0) + "s ease-out;" + (va ? da + "-transform:translate3d(0," + y + "px,0);" : "top:" + y + "px;")), ba[a] && g(), c && void 0 !== l ? (h = 0, b.closest(".dwwl").addClass("dwa"), ba[a] = setInterval(function() {
                h += .1;
                b.data("pos", Math.round(e(h, l, d - l, c)));
                h >= c && g()
            }, 100)) : b.data("pos", d))
        };
        h.setValue = function(b, d, c, l) {
            a.isArray(h.temp) || (h.temp = g.parseValue(h.temp + "", h));
            ca && b && B(c);
            U = g.formatResult(h.temp);
            l || (h.values = h.temp.slice(0), h.val = U);
            d && ea && G.val(U).trigger("change")
        };
        h.getValues = function() {
            var b = [],
                a;
            for (a in h._selectedValues) b.push(h._selectedValues[a]);
            return b
        };
        h.validate = function(b, a, d, c) {
            B(d, b, !0, a, c)
        };
        h.change = function(b) {
            U = g.formatResult(h.temp);
            "inline" == g.display ? h.setValue(!1, b) : a(".dwv", r).html(w(U));
            b && Q("onChange", [U])
        };
        h.changeWheel = function(b, d) {
            if (r) {
                var c = 0,
                    l, y, e = b.length;
                for (l in g.wheels) for (y in g.wheels[l]) {
                    if (-1 < a.inArray(c, b) && (ga[c] = g.wheels[l][y], a(".dw-ul", r).eq(c).html(m(c)), e--, !e)) {
                        ka();
                        B(d, void 0, !0);
                        return
                    }
                    c++
                }
            }
        };
        h.isVisible = function() {
            return ca
        };
        h.tap = function(b, a) {
            var c, d;
            g.tap && b.bind("touchstart", function(b) {
                b.preventDefault();
                c = L(b, "X");
                d = L(b, "Y")
            }).bind("touchend", function(b) {
                20 > Math.abs(L(b, "X") - c) && 20 > Math.abs(L(b, "Y") - d) && a.call(this, b);
                M = !0;
                setTimeout(function() {
                    M = !1
                }, 300)
            });
            b.bind("click", function(b) {
                M || a.call(this, b)
            })
        };
        h.show = function(b) {
            if (g.disabled || ca) return !1;
            "top" == g.display && (Z = "slidedown");
            "bottom" == g.display && (Z = "slideup");
            qa();
            Q("onBeforeShow", [r]);
            var c = 0,
                l, e = "";
            Z && !b && (e = "dw-" + Z + " dw-in");
            var k = '<div class="dw-trans ' + g.theme + " dw-" + g.display + '">' + ("inline" == g.display ? '<div class="dw dwbg dwi"><div class="dwwr">' : '<div class="dw-persp"><div class="dwo"></div><div class="dw dwbg ' + e + '"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr">' + (g.headerText ? '<div class="dwv"></div>' : ""));
            for (b = 0; b < g.wheels.length; b++) {
                k += '<div class="dwc' + ("scroller" != g.mode ? " dwpm" : " dwsc") + (g.showLabel ? "" : " dwhl") + '"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';
                for (l in g.wheels[b]) ga[c] = g.wheels[b][l], k += '<td><div class="dwwl dwrc dwwl' + c + '">' + ("scroller" != g.mode ? '<div class="dwwb dwwbp" style="height:' + O + "px;line-height:" + O + 'px;"><span>+</span></div><div class="dwwb dwwbm" style="height:' + O + "px;line-height:" + O + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + l + '</div><div class="dww" style="height:' + g.rows * O + "px;min-width:" + g.width + 'px;"><div class="dw-ul">', k += m(c), k += '</div><div class="dwwo"></div></div><div class="dwwol"></div></div></td>', c++;
                k += "</tr></table></div></div>"
            }
            k += ("inline" != g.display ? '<div class="dwbc' + (g.button3 ? " dwbc-p" : "") + '"><span class="dwbw dwb-c"><span class="dwb">' + g.cancelText + "</span></span>" + (g.button3 ? '<span class="dwbw dwb-n"><span class="dwb">' + g.button3Text + "</span></span>" : "") + '<span class="dwbw dwb-s"><span class="dwb">' + g.setText + "</span></span></div></div>" : '<div class="dwcc"></div>') + "</div></div></div>";
            r = a(k);
            B();
            Q("onMarkupReady", [r]);
            "inline" != g.display ? (r.appendTo("body"), setTimeout(function() {
                r.removeClass("dw-trans").find(".dw").removeClass(e)
            }, 350)) : G.is("div") ? G.html(r) : r.insertAfter(G);
            ca = !0;
            na.init(r, h);
            "inline" != g.display && (h.tap(a(".dwb-s span", r), function() {
                !1 !== h.hide(!1, "set") && (h.setValue(!1, !0), Q("onSelect", [h.val]))
            }), h.tap(a(".dwb-c span", r), function() {
                h.cancel()
            }), g.button3 && h.tap(a(".dwb-n span", r), g.button3), g.scrollLock && r.bind("touchmove", function(b) {
                S <= R && aa <= Y && b.preventDefault()
            }), a("input,select,button").each(function() {
                a(this).prop("disabled") || a(this).addClass("dwtd").prop("disabled", !0)
            }), ka(), a(window).bind("resize.dw", function() {
                clearTimeout(ra);
                ra = setTimeout(function() {
                    ka(!0)
                }, 100)
            }));
            r.delegate(".dwwl", "DOMMouseScroll mousewheel", function(b) {
                if (!f(this)) {
                    b.preventDefault();
                    b = b.originalEvent;
                    b = b.wheelDelta ? b.wheelDelta / 120 : b.detail ? -b.detail / 3 : 0;
                    var c = a(".dw-ul", this),
                        d = +c.data("pos"),
                        d = Math.round(d - b);
                    n(c);
                    p(c, d, 0 > b ? 1 : 2)
                }
            }).delegate(".dwb, .dwwb", fa, function(b) {
                a(this).addClass("dwb-a")
            }).delegate(".dwwb", fa, function(b) {
                b.stopPropagation();
                b.preventDefault();
                var c = a(this).closest(".dwwl");
                if (F(b) && !f(c) && !c.hasClass("dwa")) {
                    z = !0;
                    var d = c.find(".dw-ul"),
                        l = a(this).hasClass("dwwbp") ? ua : N;
                    n(d);
                    clearInterval(C);
                    C = setInterval(function() {
                        l(d)
                    }, g.delay);
                    l(d)
                }
            }).delegate(".dwwl", fa, function(b) {
                b.preventDefault();
                !F(b) || d || f(this) || z || (d = !0, a(document).bind(y, x), v = a(".dw-ul", this), T = "clickpick" != g.mode, I = +v.data("pos"), n(v), pa = void 0 !== ba[E], u = L(b, "Y"), J = new Date, D = u, h.scroll(v, E, I, .001), T && v.closest(".dwwl").addClass("dwa"))
            });
            Q("onShow", [r, U])
        };
        h.hide = function(b, c) {
            if (!1 === Q("onClose", [U, c])) return !1;
            a(".dwtd").prop("disabled", !1).removeClass("dwtd");
            G.blur();
            r && ("inline" != g.display && Z && !b ? (r.addClass("dw-trans").find(".dw").addClass("dw-" + Z + " dw-out"), setTimeout(function() {
                r.remove();
                r = null
            }, 350)) : (r.remove(), r = null), ca = !1, oa = {}, a(window).unbind(".dw"))
        };
        h.cancel = function() {
            !1 !== h.hide(!1, "cancel") && Q("onCancel", [h.val])
        };
        h.init = function(b) {
            na = H({
                defaults: {},
                init: q
            }, ma.themes[b.theme || g.theme]);
            sa = ma.i18n[b.lang || g.lang];
            H(l, b);
            H(g, na.defaults, sa, l);
            h.settings = g;
            G.unbind(".dw");
            if (b = ma.presets[g.preset]) ia = b.call(X, h), H(g, ia, l), H(ja, ia.methods);
            V = Math.floor(g.rows / 2);
            O = g.height;
            Z = g.animate;
            void 0 !== G.data("dwro") && (X.readOnly = t(G.data("dwro")));
            ca && h.hide();
            "inline" == g.display ? h.show() : (qa(), ea && g.showOnFocus && (G.data("dwro", X.readOnly), X.readOnly = !0, G.bind("focus.dw", function() {
                h.show()
            })))
        };
        h.trigger = function(b, a) {
            return Q(b, a)
        };
        h.values = null;
        h.val = null;
        h.temp = null;
        h._selectedValues = {};
        h.init(l)
    }
    function N(b) {
        for (var a in b) if (void 0 !== V[b[a]]) return !0;
        return !1
    }
    function B(b) {
        return f[b.id]
    }
    function L(b, a) {
        var c = b.originalEvent,
            d = b.changedTouches;
        return d || c && c.changedTouches ? c ? c.changedTouches[0]["page" + a] : d[0]["page" + a] : b["page" + a]
    }
    function t(b) {
        return !0 === b || "true" == b
    }
    function m(b, a, c) {
        b = b > c ? c : b;
        return b < a ? a : b
    }
    function p(b, d, e, y, f) {
        d = m(d, c, k);
        var x = a(".dw-li", b).eq(d),
            n = void 0 === f ? d : f,
            q = E,
            p = y ? d == n ? .1 : Math.abs(.1 * (d - n)) : 0;
        A.temp[q] = x.attr("data-val");
        A.scroll(b, q, d, p, f);
        setTimeout(function() {
            A.validate(q, e, p, f)
        }, 10)
    }
    function w(b, a, c) {
        return ja[a] ? ja[a].apply(b, Array.prototype.slice.call(c, 1)) : "object" === typeof a ? ja.init.call(b, a) : b
    }
    var f = {},
        C, q = function() {},
        e, c, k, A, n = (new Date).getTime(),
        d, z, v, E, u, D, J, I, pa, T, V = document.createElement("modernizr").style,
        va = N(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
        da = function() {
            var b = ["Webkit", "Moz", "O", "ms"],
                a;
            for (a in b) if (N([b[a] + "Transform"])) return "-" + b[a].toLowerCase();
            return ""
        }(),
        H = a.extend,
        M, P, fa = "touchstart mousedown",
        y = "touchmove mousemove",
        x = function(b) {
            T && (b.preventDefault(), D = L(b, "Y"), A.scroll(v, E, m(I + (u - D) / e, c - 1, k + 1)));
            pa = !0
        },
        ta = {
            width: 70,
            height: 40,
            rows: 3,
            delay: 300,
            disabled: !1,
            readonly: !1,
            showOnFocus: !0,
            showLabel: !0,
            wheels: [],
            theme: "",
            headerText: "{value}",
            display: "modal",
            mode: "scroller",
            preset: "",
            lang: "en-US",
            setText: "Set",
            cancelText: "Cancel",
            scrollLock: !0,
            tap: !0,
            formatResult: function(b) {
                return b.join(" ")
            },
            parseValue: function(b, a) {
                var c = a.settings.wheels,
                    d = b.split(" "),
                    e = [],
                    y = 0,
                    f, x, k;
                for (f = 0; f < c.length; f++) for (x in c[f]) {
                    if (void 0 !== c[f][x][d[y]]) e.push(d[y]);
                    else for (k in c[f][x]) {
                        e.push(k);
                        break
                    }
                    y++
                }
                return e
            }
        },
        ja = {
            init: function(b) {
                void 0 === b && (b = {});
                return this.each(function() {
                    this.id || (n += 1, this.id = "scoller" + n);
                    f[this.id] = new F(this, b)
                })
            },
            enable: function() {
                return this.each(function() {
                    var b = B(this);
                    b && b.enable()
                })
            },
            disable: function() {
                return this.each(function() {
                    var b = B(this);
                    b && b.disable()
                })
            },
            isDisabled: function() {
                var b = B(this[0]);
                if (b) return b.settings.disabled
            },
            isVisible: function() {
                var b = B(this[0]);
                if (b) return b.isVisible()
            },
            option: function(b, a) {
                return this.each(function() {
                    var c = B(this);
                    if (c) {
                        var d = {};
                        "object" === typeof b ? d = b : d[b] = a;
                        c.init(d)
                    }
                })
            },
            setValue: function(b, a, c, d) {
                return this.each(function() {
                    var e = B(this);
                    e && (e.temp = b, e.setValue(!0, a, c, d))
                })
            },
            getInst: function() {
                return B(this[0])
            },
            getValue: function() {
                var b = B(this[0]);
                if (b) return b.values
            },
            getValues: function() {
                var b = B(this[0]);
                if (b) return b.getValues()
            },
            show: function() {
                var b = B(this[0]);
                if (b) return b.show()
            },
            hide: function() {
                return this.each(function() {
                    var b = B(this);
                    b && b.hide()
                })
            },
            destroy: function() {
                return this.each(function() {
                    var b = B(this);
                    b && (b.hide(), a(this).unbind(".dw"), delete f[this.id], a(this).is("input") && (this.readOnly = t(a(this).data("dwro"))))
                })
            }
        };
    a(document).bind("touchend mouseup", function(b) {
        if (d) {
            var f = new Date - J;
            b = m(I + (u - D) / e, c - 1, k + 1);
            var n, q = v.offset().top;
            300 > f ? (f = (D - u) / f, n = f * f / .0012, 0 > D - u && (n = -n)) : n = D - u;
            f = Math.round(I - n / e);
            if (!n && !pa) {
                var q = Math.floor((D - q) / e),
                    t = a(".dw-li", v).eq(q);
                n = T;
                !1 !== A.trigger("onValueTap", [t]) ? f = q : n = !0;
                n && (t.addClass("dw-hl"), setTimeout(function() {
                    t.removeClass("dw-hl")
                }, 200))
            }
            T && p(v, f, 0, !0, Math.round(b));
            d = !1;
            v = null;
            a(document).unbind(y, x)
        }
        z && (clearInterval(C), z = !1);
        a(".dwb-a").removeClass("dwb-a")
    }).bind("mouseover mouseup mousedown click", function(b) {
        if (M) return b.stopPropagation(), b.preventDefault(), !1
    });
    a.fn.mobiscroll = function(b) {
        H(this, a.mobiscroll.shorts);
        return w(this, b, arguments)
    };
    a.mobiscroll = a.mobiscroll || {
        setDefaults: function(b) {
            H(ta, b)
        },
        presetShort: function(b) {
            this.shorts[b] = function(a) {
                return w(this, H(a, {
                    preset: b
                }), arguments)
            }
        },
        shorts: {},
        presets: {},
        themes: {},
        i18n: {}
    };
    a.scroller = a.scroller || a.mobiscroll;
    a.fn.scroller = a.fn.scroller || a.fn.mobiscroll
})(jQuery);
(function(a) {
    var F = a.mobiscroll,
        N = new Date,
        B = {
            dateFormat: "yy\u5e74mm\u6708dd\u65e5",
            dateOrder: "mmddy",
            timeWheels: "HHii",
            timeFormat: "HH:ii",
            startYear: N.getFullYear() - 100,
            endYear: N.getFullYear() + 1,
            monthNames: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
            monthNamesShort: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
            dayNames: "\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
            dayNamesShort: "\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
            shortYearCutoff: "+10",
            monthText: "\u6708",
            dayText: "\u65e5",
            yearText: "\u5e74",
            hourText: "\u5c0f\u65f6",
            minuteText: "\u5206\u949f",
            secText: "Seconds",
            ampmText: "&nbsp;",
            nowText: "\u4eca\u5929",
            showNow: !1,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            separator: " "
        },
        L = function(t) {
            function m(a, c, d) {
                return void 0 !== n[c] ? +a[n[c]] : void 0 !== d ? d : T[z[c]] ? T[z[c]]() : z[c](T)
            }
            function p(a, c) {
                return Math.floor(a / c) * c
            }
            function w(a) {
                var c = m(a, "h", 0);
                return new Date(m(a, "y"), m(a, "m"), m(a, "d", 1), m(a, "a") ? c + 12 : c, m(a, "i", 0), m(a, "s", 0))
            }
            var f = a(this),
                C = {},
                q;
            if (f.is("input")) {
                switch (f.attr("type")) {
                case "date":
                    q = "yy-mm-dd";
                    break;
                case "datetime":
                    q = "yy-mm-ddTHH:ii:ssZ";
                    break;
                case "datetime-local":
                    q = "yy-mm-ddTHH:ii:ss";
                    break;
                case "month":
                    q = "yy-mm";
                    C.dateOrder = "mmyy";
                    break;
                case "time":
                    q = "HH:ii:ss"
                }
                var e = f.attr("min"),
                    f = f.attr("max");
                e && (C.minDate = F.parseDate(q, e));
                f && (C.maxDate = F.parseDate(q, f))
            }
            var c = a.extend({}, B, C, t.settings),
                k = 0,
                C = [],
                A = [],
                n = {},
                d, z = {
                    y: "getFullYear",
                    m: "getMonth",
                    d: "getDate",
                    h: function(a) {
                        a = a.getHours();
                        a = I && 12 <= a ? a - 12 : a;
                        return p(a, V)
                    },
                    i: function(a) {
                        return p(a.getMinutes(), N)
                    },
                    s: function(a) {
                        return p(a.getSeconds(), da)
                    },
                    a: function(a) {
                        return J && 11 < a.getHours() ? 1 : 0
                    }
                },
                v = c.preset,
                E = c.dateOrder,
                u = c.timeWheels,
                D = E.match(/D/),
                J = u.match(/a/i),
                I = u.match(/h/),
                L = "datetime" == v ? c.dateFormat + c.separator + c.timeFormat : "time" == v ? c.timeFormat : c.dateFormat,
                T = new Date,
                V = c.stepHour,
                N = c.stepMinute,
                da = c.stepSecond,
                H = c.minDate || new Date(c.startYear, 0, 1),
                M = c.maxDate || new Date(c.endYear, 11, 31, 23, 59, 59);
            t.settings = c;
            q = q || L;
            if (v.match(/date/i)) {
                a.each(["y", "m", "d"], function(a, c) {
                    d = E.search(new RegExp(c, "i")); - 1 < d && A.push({
                        o: d,
                        v: c
                    })
                });
                A.sort(function(a, c) {
                    return a.o > c.o ? 1 : -1
                });
                a.each(A, function(a, c) {
                    n[c.v] = a
                });
                f = {};
                for (e = 0; 3 > e; e++) if (e == n.y) {
                    k++;
                    f[c.yearText] = {};
                    var P = H.getFullYear(),
                        fa = M.getFullYear();
                    for (d = P; d <= fa; d++) f[c.yearText][d] = E.match(/yy/i) ? d : (d + "").substr(2, 2)
                } else if (e == n.m) for (k++, f[c.monthText] = {}, d = 0; 12 > d; d++) P = E.replace(/[dy]/gi, "").replace(/mm/, 9 > d ? "0" + (d + 1) : d + 1).replace(/m/, d + 1), f[c.monthText][d] = P.match(/MM/) ? P.replace(/MM/, '<span class="dw-mon">' + c.monthNames[d] + "</span>") : P.replace(/M/, '<span class="dw-mon">' + c.monthNamesShort[d] + "</span>");
                else if (e == n.d) for (k++, f[c.dayText] = {}, d = 1; 32 > d; d++) f[c.dayText][d] = E.match(/dd/i) && 10 > d ? "0" + d : d;
                C.push(f)
            }
            if (v.match(/time/i)) {
                A = [];
                a.each(["h", "i", "s", "a"], function(a, c) {
                    a = u.search(new RegExp(c, "i")); - 1 < a && A.push({
                        o: a,
                        v: c
                    })
                });
                A.sort(function(a, c) {
                    return a.o > c.o ? 1 : -1
                });
                a.each(A, function(a, c) {
                    n[c.v] = k + a
                });
                f = {};
                for (e = k; e < k + 4; e++) if (e == n.h) for (k++, f[c.hourText] = {}, d = 0; d < (I ? 12 : 24); d += V) f[c.hourText][d] = I && 0 == d ? 12 : u.match(/hh/i) && 10 > d ? "0" + d : d;
                else if (e == n.i) for (k++, f[c.minuteText] = {}, d = 0; 60 > d; d += N) f[c.minuteText][d] = u.match(/ii/) && 10 > d ? "0" + d : d;
                else if (e == n.s) for (k++, f[c.secText] = {}, d = 0; 60 > d; d += da) f[c.secText][d] = u.match(/ss/) && 10 > d ? "0" + d : d;
                else e == n.a && (k++, v = u.match(/A/), f[c.ampmText] = {
                    0: v ? "AM" : "am",
                    1: v ? "PM" : "pm"
                });
                C.push(f)
            }
            t.setDate = function(a, c, d, e) {
                for (var b in n) this.temp[n[b]] = a[z[b]] ? a[z[b]]() : z[b](a);
                this.setValue(!0, c, d, e)
            };
            t.getDate = function(a) {
                return w(a)
            };
            return {
                button3Text: c.showNow ? c.nowText : void 0,
                button3: c.showNow ?
                function() {
                    t.setDate(new Date, !1, .3, !0)
                } : void 0,
                wheels: C,
                headerText: function(a) {
                    return F.formatDate(L, w(t.temp), c)
                },
                formatResult: function(a) {
                    return F.formatDate(q, w(a), c)
                },
                parseValue: function(a) {
                    var d = new Date,
                        e, f = [];
                    try {
                        d = F.parseDate(q, a, c)
                    } catch (b) {}
                    for (e in n) f[n[e]] = d[z[e]] ? d[z[e]]() : z[e](d);
                    return f
                },
                validate: function(d, e) {
                    var f = t.temp,
                        k = {
                            y: H.getFullYear(),
                            m: 0,
                            d: 1,
                            h: 0,
                            i: 0,
                            s: 0,
                            a: 0
                        },
                        b = {
                            y: M.getFullYear(),
                            m: 11,
                            d: 31,
                            h: p(I ? 11 : 23, V),
                            i: p(59, N),
                            s: p(59, da),
                            a: 1
                        },
                        l = !0,
                        q = !0;
                    a.each("ymdahis".split(""), function(e, p) {
                        if (void 0 !== n[p]) {
                            var x = k[p],
                                t = b[p],
                                v = 31,
                                J = m(f, p),
                                u = a(".dw-ul", d).eq(n[p]),
                                w, A;
                            "d" == p && (w = m(f, "y"), A = m(f, "m"), t = v = 32 - (new Date(w, A, 32)).getDate(), D && a(".dw-li", u).each(function() {
                                var b = a(this),
                                    d = b.data("val"),
                                    e = (new Date(w, A, d)).getDay(),
                                    d = E.replace(/[my]/gi, "").replace(/dd/, 10 > d ? "0" + d : d).replace(/d/, d);
                                a(".dw-i", b).html(d.match(/DD/) ? d.replace(/DD/, '<span class="dw-day">' + c.dayNames[e] + "</span>") : d.replace(/D/, '<span class="dw-day">' + c.dayNamesShort[e] + "</span>"))
                            }));
                            l && H && (x = H[z[p]] ? H[z[p]]() : z[p](H));
                            q && M && (t = M[z[p]] ? M[z[p]]() : z[p](M));
                            if ("y" != p) {
                                var B = a(".dw-li", u).index(a('.dw-li[data-val="' + x + '"]', u)),
                                    C = a(".dw-li", u).index(a('.dw-li[data-val="' + t + '"]', u));
                                a(".dw-li", u).removeClass("dw-v").slice(B, C + 1).addClass("dw-v");
                                "d" == p && a(".dw-li", u).removeClass("dw-h").slice(v).addClass("dw-h")
                            }
                            J < x && (J = x);
                            J > t && (J = t);
                            l && (l = J == x);
                            q && (q = J == t);
                            if (c.invalid && "d" == p) {
                                var I = [];
                                c.invalid.dates && a.each(c.invalid.dates, function(b, a) {
                                    a.getFullYear() == w && a.getMonth() == A && I.push(a.getDate() - 1)
                                });
                                if (c.invalid.daysOfWeek) {
                                    var F = (new Date(w, A, 1)).getDay(),
                                        r;
                                    a.each(c.invalid.daysOfWeek, function(a, b) {
                                        for (r = b - F; r < v; r += 7) 0 <= r && I.push(r)
                                    })
                                }
                                c.invalid.daysOfMonth && a.each(c.invalid.daysOfMonth, function(a, b) {
                                    b = (b + "").split("/");
                                    b[1] ? b[0] - 1 == A && I.push(b[1] - 1) : I.push(b[0] - 1)
                                });
                                a.each(I, function(b, c) {
                                    a(".dw-li", u).eq(c).removeClass("dw-v")
                                })
                            }
                            f[n[p]] = J
                        }
                    })
                },
                methods: {
                    getDate: function(c) {
                        var d = a(this).mobiscroll("getInst");
                        if (d) return d.getDate(c ? d.temp : d.values)
                    },
                    setDate: function(c, d, e, f) {
                        void 0 == d && (d = !1);
                        return this.each(function() {
                            var b = a(this).mobiscroll("getInst");
                            b && b.setDate(c, d, e, f)
                        })
                    }
                }
            }
        };
    a.each(["date", "time", "datetime"], function(a, m) {
        F.presets[m] = L;
        F.presetShort(m)
    });
    F.formatDate = function(t, m, p) {
        if (!m) return null;
        p = a.extend({}, B, p);
        var w = function(a) {
                for (var c = 0; q + 1 < t.length && t.charAt(q + 1) == a;) c++, q++;
                return c
            },
            f = function(a, c, d) {
                c = "" + c;
                if (w(a)) for (; c.length < d;) c = "0" + c;
                return c
            },
            C = function(a, c, d, e) {
                return w(a) ? e[c] : d[c]
            },
            q, e = "",
            c = !1;
        for (q = 0; q < t.length; q++) if (c)"'" != t.charAt(q) || w("'") ? e += t.charAt(q) : c = !1;
        else switch (t.charAt(q)) {
        case "d":
            e += f("d", m.getDate(), 2);
            break;
        case "D":
            e += C("D", m.getDay(), p.dayNamesShort, p.dayNames);
            break;
        case "o":
            e += f("o", (m.getTime() - (new Date(m.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
            break;
        case "m":
            e += f("m", m.getMonth() + 1, 2);
            break;
        case "M":
            e += C("M", m.getMonth(), p.monthNamesShort, p.monthNames);
            break;
        case "y":
            e += w("y") ? m.getFullYear() : (10 > m.getYear() % 100 ? "0" : "") + m.getYear() % 100;
            break;
        case "h":
            var k = m.getHours(),
                e = e + f("h", 12 < k ? k - 12 : 0 == k ? 12 : k, 2);
            break;
        case "H":
            e += f("H", m.getHours(), 2);
            break;
        case "i":
            e += f("i", m.getMinutes(), 2);
            break;
        case "s":
            e += f("s", m.getSeconds(), 2);
            break;
        case "a":
            e += 11 < m.getHours() ? "pm" : "am";
            break;
        case "A":
            e += 11 < m.getHours() ? "PM" : "AM";
            break;
        case "'":
            w("'") ? e += "'" : c = !0;
            break;
        default:
            e += t.charAt(q)
        }
        return e
    };
    F.parseDate = function(t, m, p) {
        var w = new Date;
        if (!t || !m) return w;
        m = "object" == typeof m ? m.toString() : m + "";
        var f = a.extend({}, B, p),
            C = f.shortYearCutoff;
        p = w.getFullYear();
        var q = w.getMonth() + 1,
            e = w.getDate(),
            c = -1,
            k = w.getHours(),
            w = w.getMinutes(),
            A = 0,
            n = -1,
            d = !1,
            z = function(a) {
                (a = D + 1 < t.length && t.charAt(D + 1) == a) && D++;
                return a
            },
            v = function(a) {
                z(a);
                a = new RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}");
                a = m.substr(u).match(a);
                if (!a) return 0;
                u += a[0].length;
                return parseInt(a[0], 10)
            },
            E = function(a, c, d) {
                a = z(a) ? d : c;
                for (c = 0; c < a.length; c++) if (m.substr(u, a[c].length).toLowerCase() == a[c].toLowerCase()) return u += a[c].length, c + 1;
                return 0
            },
            u = 0,
            D;
        for (D = 0; D < t.length; D++) if (d)"'" != t.charAt(D) || z("'") ? u++ : d = !1;
        else switch (t.charAt(D)) {
        case "d":
            e = v("d");
            break;
        case "D":
            E("D", f.dayNamesShort, f.dayNames);
            break;
        case "o":
            c = v("o");
            break;
        case "m":
            q = v("m");
            break;
        case "M":
            q = E("M", f.monthNamesShort, f.monthNames);
            break;
        case "y":
            p = v("y");
            break;
        case "H":
            k = v("H");
            break;
        case "h":
            k = v("h");
            break;
        case "i":
            w = v("i");
            break;
        case "s":
            A = v("s");
            break;
        case "a":
            n = E("a", ["am", "pm"], ["am", "pm"]) - 1;
            break;
        case "A":
            n = E("A", ["am", "pm"], ["am", "pm"]) - 1;
            break;
        case "'":
            z("'") ? u++ : d = !0;
            break;
        default:
            u++
        }
        100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= ("string" != typeof C ? C : (new Date).getFullYear() % 100 + parseInt(C, 10)) ? 0 : -100));
        if (-1 < c) {
            q = 1;
            e = c;
            do {
                f = 32 - (new Date(p, q - 1, 32)).getDate();
                if (e <= f) break;
                q++;
                e -= f
            } while (1)
        }
        k = new Date(p, q - 1, e, -1 == n ? k : n && 12 > k ? k + 12 : n || 12 != k ? k : 0, w, A);
        if (k.getFullYear() != p || k.getMonth() + 1 != q || k.getDate() != e) throw "Invalid date";
        return k
    }
})(jQuery);