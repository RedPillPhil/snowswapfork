(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [0], {
        101: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(86),
                i = n(161),
                r = Object(i.a)(),
                o = new a.a.providers.StaticJsonRpcProvider(r)
        },
        106: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "b", (function() {
                return y
            }));
            var a, i = n(11),
                r = n(7),
                o = n(0),
                s = n(229),
                c = n(130),
                l = n(26),
                u = n(49),
                d = n(48),
                p = new c.b(s.a);

            function b(e) {
                var t = Object(l.a)().chainId,
                    n = Object(o.useMemo)((function() {
                        return e.map((function(e) {
                            var n = Object(i.a)(e, 2),
                                a = n[0],
                                r = n[1];
                            return [Object(d.b)(a, t), Object(d.b)(r, t)]
                        }))
                    }), [t, e]),
                    s = Object(o.useMemo)((function() {
                        return n.map((function(e) {
                            var t = Object(i.a)(e, 2),
                                n = t[0],
                                a = t[1];
                            return n && a && !n.equals(a) ? r.f.getAddress(n, a) : void 0
                        }))
                    }), [n]),
                    c = Object(u.b)(s, p, "getReserves");
                return Object(o.useMemo)((function() {
                    return c.map((function(e, t) {
                        var o = e.result,
                            s = e.loading,
                            c = n[t][0],
                            l = n[t][1];
                        if (s) return [a.LOADING, null];
                        if (!c || !l || c.equals(l)) return [a.INVALID, null];
                        if (!o) return [a.NOT_EXISTS, null];
                        var u = o.reserve0,
                            d = o.reserve1,
                            p = c.sortsBefore(l) ? [c, l] : [l, c],
                            b = Object(i.a)(p, 2),
                            y = b[0],
                            m = b[1];
                        return [a.EXISTS, new r.f(new r.k(y, u.toString()), new r.k(m, d.toString()))]
                    }))
                }), [c, n])
            }

            function y(e, t) {
                return b([
                    [e, t]
                ])[0]
            }! function(e) {
                e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
            }(a || (a = {}))
        },
        108: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a, i = n(40),
                r = n(10),
                o = n(7),
                s = n(0),
                c = n(4),
                l = n(252),
                u = n(59),
                d = function(e) {
                    return "/images/tokens/".concat(e, ".png")
                },
                p = n(246),
                b = n(1),
                y = Object(c.e)(p.a)(a || (a = Object(r.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }));

            function m(e) {
                var t, n, a = e.currency,
                    r = e.size,
                    c = void 0 === r ? "24px" : r,
                    p = e.style,
                    m = Object(l.a)(a instanceof u.a ? a.logoURI : void 0),
                    f = Object(s.useMemo)((function() {
                        return a === o.d ? [] : a instanceof o.j ? a instanceof u.a ? [].concat(Object(i.a)(m), [d(a.address)]) : [d(a.address)] : []
                    }), [a, m]);
                return a === o.d ? Object(b.jsx)(y, {
                    size: c,
                    srcs: ["/images/tokens/crab.svg"],
                    alt: "".concat(null !== (n = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== n ? n : "token", " logo"),
                    style: p
                }) : Object(b.jsx)(y, {
                    size: c,
                    srcs: f,
                    alt: "".concat(null !== (t = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== t ? t : "token", " logo"),
                    style: p
                })
            }
        },
        109: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            }));
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(224),
                s = n(225),
                c = n(25),
                l = n(132),
                u = n(101),
                d = n(226),
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e3,
                        t = Object(l.b)(),
                        n = Object(s.a)();
                    Object(o.a)((function() {
                        (function() {
                            var e = Object(r.a)(i.a.mark((function e() {
                                var n;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, u.a.getBlockNumber();
                                        case 2:
                                            n = e.sent, t(Object(d.b)(n));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), n ? e : null, !0)
                },
                b = function() {
                    return Object(c.c)((function(e) {
                        return e.block
                    }))
                }
        },
        112: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            })), n.d(t, "d", (function() {
                return d
            }));
            var a, i = n(16),
                r = n(7),
                o = n(389),
                s = n(135);
            o.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var c = (a = {}, Object(i.a)(a, r.a.MAINNET, "https://crab.subview.xyz"), Object(i.a)(a, r.a.TESTNET, "https://testnet.hecoinfo.com"), a),
                l = "https://snowswap.xyz",
                u = ("".concat(l, "/add"), c[r.a.MAINNET]),
                d = (s.a.pow(18), 2e5)
        },
        119: function(e, t, n) {
            "use strict";

            function a(e) {
                return /^0x0*$/.test(e)
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        120: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return g
            }));
            var a, i = n(5),
                r = n.n(i),
                o = n(9),
                s = n(31),
                c = n(11),
                l = n(0),
                u = n(86),
                d = n(84),
                p = n.n(d),
                b = n(73),
                y = (n(47), n(96)),
                m = n(135),
                f = n(101),
                h = n(241),
                j = n(243),
                v = function() {
                    var e = Object(l.useState)(Date.now()),
                        t = Object(c.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    return {
                        lastUpdated: n,
                        previousLastUpdated: Object(j.a)(n),
                        setLastUpdated: Object(l.useCallback)((function() {
                            a(Date.now())
                        }), [a])
                    }
                };
            ! function(e) {
                e.NOT_FETCHED = "not-fetched", e.SUCCESS = "success", e.FAILED = "failed"
            }(a || (a = {}));
            var O = function(e) {
                    var t = a.NOT_FETCHED,
                        n = a.SUCCESS,
                        i = a.FAILED,
                        u = Object(l.useState)({
                            balance: m.b,
                            fetchStatus: t
                        }),
                        d = Object(c.a)(u, 2),
                        f = d[0],
                        j = d[1],
                        v = Object(b.c)().account,
                        O = Object(h.a)().fastRefresh;
                    return Object(l.useEffect)((function() {
                        v && function() {
                            var t = Object(s.a)(r.a.mark((function t() {
                                var a, s;
                                return r.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a = Object(y.a)(e), t.prev = 1, t.next = 4, a.balanceOf(v);
                                        case 4:
                                            s = t.sent, j({
                                                balance: new p.a(s.toString()),
                                                fetchStatus: n
                                            }), t.next = 12;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), j((function(e) {
                                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                                    fetchStatus: i
                                                })
                                            }));
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, 8]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()()
                    }), [v, e, O, n, i]), f
                },
                g = function() {
                    var e = Object(l.useState)(a.NOT_FETCHED),
                        t = Object(c.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        o = Object(l.useState)(u.a.BigNumber.from(0)),
                        d = Object(c.a)(o, 2),
                        p = d[0],
                        y = d[1],
                        m = Object(b.c)().account,
                        h = v(),
                        j = h.lastUpdated,
                        O = h.setLastUpdated;
                    return Object(l.useEffect)((function() {
                        m && function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, f.a.getBalance(m);
                                        case 3:
                                            t = e.sent, y(t), i(a.SUCCESS), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), i(a.FAILED);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [m, j, y, i]), {
                        balance: p,
                        fetchStatus: n,
                        refresh: O
                    }
                };
            t.b = O
        },
        122: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            })), n.d(t, "b", (function() {
                return h
            }));
            n(5), n(31);
            var a, i = n(16),
                r = n(192),
                o = n(193),
                s = n(234),
                c = n(2),
                l = n(86),
                u = n(161),
                d = Object(u.a)(),
                p = parseInt("44", 10),
                b = new r.a({
                    supportedChainIds: [p]
                }),
                y = new o.b({
                    rpc: Object(i.a)({}, p, d),
                    qrcode: !0,
                    pollingInterval: 12e3
                }),
                m = new s.BscConnector({
                    supportedChainIds: [p]
                }),
                f = (a = {}, Object(i.a)(a, c.w.Injected, b), Object(i.a)(a, c.w.WalletConnect, y), Object(i.a)(a, c.w.BSC, m), a),
                h = function(e) {
                    var t = new l.a.providers.Web3Provider(e);
                    return t.pollingInterval = 12e3, t
                }
        },
        123: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return h
            })), n.d(t, "c", (function() {
                return j
            })), n.d(t, "a", (function() {
                return v
            }));
            var a = n(40),
                i = n(11),
                r = n(7),
                o = n(34);

            function s(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.v;
                if (e && !t) return !1;
                if (t && !e) return !0;
                if (e && t) {
                    if (e.tradeType !== t.tradeType || !Object(r.o)(e.inputAmount.currency, t.inputAmount.currency) || !Object(r.o)(t.outputAmount.currency, t.outputAmount.currency)) throw new Error("Trades are not comparable");
                    return n.equalTo(o.v) ? e.executionPrice.lessThan(t.executionPrice) : e.executionPrice.raw.multiply(n.add(o.q)).lessThan(t.executionPrice)
                }
            }
            var c = n(240),
                l = n.n(c),
                u = n(0),
                d = n(26),
                p = n(35),
                b = n(106),
                y = n(48),
                m = n(42);

            function f(e, t) {
                var n = Object(d.a)().chainId,
                    r = n ? [Object(y.b)(e, n), Object(y.b)(t, n)] : [void 0, void 0],
                    s = Object(i.a)(r, 2),
                    c = s[0],
                    p = s[1],
                    m = Object(u.useMemo)((function() {
                        var e, t, i, r, s;
                        if (!n) return [];
                        var l = null !== (e = o.e[n]) && void 0 !== e ? e : [],
                            u = c && null !== (t = null === (i = o.a[n]) || void 0 === i ? void 0 : i[c.address]) && void 0 !== t ? t : [],
                            d = p && null !== (r = null === (s = o.a[n]) || void 0 === s ? void 0 : s[p.address]) && void 0 !== r ? r : [];
                        return [].concat(Object(a.a)(l), Object(a.a)(u), Object(a.a)(d))
                    }), [n, c, p]),
                    f = Object(u.useMemo)((function() {
                        return l()(m, (function(e) {
                            return m.map((function(t) {
                                return [e, t]
                            }))
                        }))
                    }), [m]),
                    h = Object(u.useMemo)((function() {
                        return c && p ? [
                            [c, p]
                        ].concat(Object(a.a)(m.map((function(e) {
                            return [c, e]
                        }))), Object(a.a)(m.map((function(e) {
                            return [p, e]
                        }))), Object(a.a)(f)).filter((function(e) {
                            return Boolean(e[0] && e[1])
                        })).filter((function(e) {
                            var t = Object(i.a)(e, 2),
                                n = t[0],
                                a = t[1];
                            return n.address !== a.address
                        })).filter((function(e) {
                            var t = Object(i.a)(e, 2),
                                a = t[0],
                                r = t[1];
                            if (!n) return !0;
                            var s = o.l[n],
                                c = null === s || void 0 === s ? void 0 : s[a.address],
                                l = null === s || void 0 === s ? void 0 : s[r.address];
                            return !c && !l || !(c && !c.find((function(e) {
                                return r.equals(e)
                            }))) && !(l && !l.find((function(e) {
                                return a.equals(e)
                            })))
                        })) : []
                    }), [c, p, m, f, n]),
                    j = Object(b.c)(h);
                return Object(u.useMemo)((function() {
                    return Object.values(j.filter((function(e) {
                        return Boolean(e[0] === b.a.EXISTS && e[1])
                    })).reduce((function(e, t) {
                        var n, a = Object(i.a)(t, 2)[1];
                        return e[a.liquidityToken.address] = null !== (n = e[a.liquidityToken.address]) && void 0 !== n ? n : a, e
                    }), {}))
                }), [j])
            }

            function h(e, t) {
                var n = f(null === e || void 0 === e ? void 0 : e.currency, t),
                    a = Object(p.o)(),
                    c = Object(i.a)(a, 1)[0];
                return Object(u.useMemo)((function() {
                    if (e && t && n.length > 0) {
                        var a;
                        if (c) return null !== (a = r.l.bestTradeExactIn(n, e, t, {
                            maxHops: 1,
                            maxNumResults: 1
                        })[0]) && void 0 !== a ? a : null;
                        for (var i = null, l = 1; l <= 3; l++) {
                            var u, d = null !== (u = r.l.bestTradeExactIn(n, e, t, {
                                maxHops: l,
                                maxNumResults: 1
                            })[0]) && void 0 !== u ? u : null;
                            s(i, d, o.g) && (i = d)
                        }
                        return i
                    }
                    return null
                }), [n, e, t, c])
            }

            function j(e, t) {
                var n = f(e, null === t || void 0 === t ? void 0 : t.currency),
                    a = Object(p.o)(),
                    c = Object(i.a)(a, 1)[0];
                return Object(u.useMemo)((function() {
                    if (e && t && n.length > 0) {
                        var a;
                        if (c) return null !== (a = r.l.bestTradeExactOut(n, e, t, {
                            maxHops: 1,
                            maxNumResults: 1
                        })[0]) && void 0 !== a ? a : null;
                        for (var i = null, l = 1; l <= 3; l++) {
                            var u, d = null !== (u = r.l.bestTradeExactOut(n, e, t, {
                                maxHops: l,
                                maxNumResults: 1
                            })[0]) && void 0 !== u ? u : null;
                            s(i, d, o.g) && (i = d)
                        }
                        return i
                    }
                    return null
                }), [e, t, n, c])
            }

            function v(e, t) {
                var n = Object(m.h)(),
                    a = Object(d.a)().chainId,
                    i = Object(y.b)(e, a),
                    r = Object(y.b)(t, a);
                if (n) {
                    if (i && Object.keys(n).includes(i.address)) return !0;
                    if (r && Object.keys(n).includes(r.address)) return !0
                }
                return !1
            }
        },
        125: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            }));
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(91),
                s = "pancakeswap_language",
                c = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat("", "/locales/").concat(t, ".json"));
                                case 2:
                                    return n = e.sent, e.next = 5, n.json();
                                case 5:
                                    return a = e.sent, e.abrupt("return", a);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    try {
                        return localStorage.getItem(s) || o.a.locale
                    } catch (e) {
                        return o.a.locale
                    }
                }
        },
        131: function(e, t, n) {
            "use strict";
            var a = n(9),
                i = (n(0), n(2)),
                r = n(138),
                o = n(23),
                s = n(1);
            t.a = function(e) {
                var t = Object(o.b)().t,
                    n = Object(r.a)(),
                    c = n.login,
                    l = n.logout,
                    u = Object(i.wb)(c, l, t).onPresentConnectModal;
                return Object(s.jsx)(i.i, Object(a.a)(Object(a.a)({
                    onClick: u
                }, e), {}, {
                    children: t("Connect Wallet")
                }))
            }
        },
        132: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return re
            }));
            var a = n(40),
                i = n(24),
                r = n(312),
                o = n(257),
                s = n.n(o),
                c = n(25),
                l = n(226),
                u = n(16),
                d = n(9),
                p = Object(i.b)("info/protocol/updateProtocolData"),
                b = Object(i.b)("info/protocol/updateProtocolChartData"),
                y = Object(i.b)("info/protocol/updateProtocolTransactions"),
                m = Object(i.b)("info/pools/updatePoolData"),
                f = Object(i.b)("info/pools/addPoolKeys"),
                h = Object(i.b)("info/pools/updatePoolChartData"),
                j = Object(i.b)("info/pools/updatePoolTransactions"),
                v = Object(i.b)("info/tokens/updateTokenData"),
                O = Object(i.b)("info/tokens/addTokenKeys"),
                g = Object(i.b)("info/tokens/addTokenPoolAddresses"),
                w = Object(i.b)("info/tokens/updateTokenChartData"),
                x = Object(i.b)("info/tokens/updateTokenTransactions"),
                k = Object(i.b)("info/tokens/updateTokenPriceData"),
                T = {
                    protocol: {
                        overview: void 0,
                        chartData: void 0,
                        transactions: void 0
                    },
                    pools: {
                        byAddress: {}
                    },
                    tokens: {
                        byAddress: {}
                    }
                },
                C = Object(i.c)(T, (function(e) {
                    return e.addCase(p, (function(e, t) {
                        var n = t.payload.protocolData;
                        e.protocol.overview = n
                    })).addCase(b, (function(e, t) {
                        var n = t.payload.chartData;
                        e.protocol.chartData = n
                    })).addCase(y, (function(e, t) {
                        var n = t.payload.transactions;
                        e.protocol.transactions = n
                    })).addCase(m, (function(e, t) {
                        t.payload.pools.forEach((function(t) {
                            e.pools.byAddress[t.address] = Object(d.a)(Object(d.a)({}, e.pools.byAddress[t.address]), {}, {
                                data: t
                            })
                        }))
                    })).addCase(f, (function(e, t) {
                        t.payload.poolAddresses.forEach((function(t) {
                            e.pools.byAddress[t] || (e.pools.byAddress[t] = {
                                data: void 0,
                                chartData: void 0,
                                transactions: void 0
                            })
                        }))
                    })).addCase(h, (function(e, t) {
                        var n = t.payload,
                            a = n.poolAddress,
                            i = n.chartData;
                        e.pools.byAddress[a] = Object(d.a)(Object(d.a)({}, e.pools.byAddress[a]), {}, {
                            chartData: i
                        })
                    })).addCase(j, (function(e, t) {
                        var n = t.payload,
                            a = n.poolAddress,
                            i = n.transactions;
                        e.pools.byAddress[a] = Object(d.a)(Object(d.a)({}, e.pools.byAddress[a]), {}, {
                            transactions: i
                        })
                    })).addCase(v, (function(e, t) {
                        t.payload.tokens.forEach((function(t) {
                            e.tokens.byAddress[t.address] = Object(d.a)(Object(d.a)({}, e.tokens.byAddress[t.address]), {}, {
                                data: t
                            })
                        }))
                    })).addCase(O, (function(e, t) {
                        t.payload.tokenAddresses.forEach((function(t) {
                            e.tokens.byAddress[t] || (e.tokens.byAddress[t] = {
                                poolAddresses: void 0,
                                data: void 0,
                                chartData: void 0,
                                priceData: {},
                                transactions: void 0
                            })
                        }))
                    })).addCase(g, (function(e, t) {
                        var n = t.payload,
                            a = n.tokenAddress,
                            i = n.poolAddresses;
                        e.tokens.byAddress[a] = Object(d.a)(Object(d.a)({}, e.tokens.byAddress[a]), {}, {
                            poolAddresses: i
                        })
                    })).addCase(w, (function(e, t) {
                        var n = t.payload,
                            a = n.tokenAddress,
                            i = n.chartData;
                        e.tokens.byAddress[a] = Object(d.a)(Object(d.a)({}, e.tokens.byAddress[a]), {}, {
                            chartData: i
                        })
                    })).addCase(x, (function(e, t) {
                        var n = t.payload,
                            a = n.tokenAddress,
                            i = n.transactions;
                        e.tokens.byAddress[a] = Object(d.a)(Object(d.a)({}, e.tokens.byAddress[a]), {}, {
                            transactions: i
                        })
                    })).addCase(k, (function(e, t) {
                        var n, a, i = t.payload,
                            r = i.tokenAddress,
                            o = i.secondsInterval,
                            s = i.priceData,
                            c = i.oldestFetchedTimestamp;
                        e.tokens.byAddress[r] = Object(d.a)(Object(d.a)({}, e.tokens.byAddress[r]), {}, {
                            priceData: Object(d.a)(Object(d.a)({}, null === (n = e.tokens.byAddress[r]) || void 0 === n ? void 0 : n.priceData), {}, (a = {}, Object(u.a)(a, o, s), Object(u.a)(a, "oldestFetchedTimestamp", c), a))
                        })
                    }))
                })),
                A = Object(i.b)("global/updateVersion"),
                S = n(34),
                E = n(33),
                I = n(63),
                P = function() {
                    return (new Date).getTime()
                };

            function N(e, t) {
                return "".concat(e, ";").concat(t)
            }
            var B, R = {
                    userExpertMode: !1,
                    userSingleHopOnly: !1,
                    userSlippageTolerance: S.n,
                    userDeadline: S.m,
                    tokens: {},
                    pairs: {},
                    timestamp: P(),
                    audioPlay: !0,
                    isDark: !1,
                    isExchangeChartDisplayed: !0,
                    userChartViewMode: E.a.BASIC,
                    userFarmStakedOnly: E.b.ON_FINISHED,
                    userPoolStakedOnly: !1,
                    userPoolsViewMode: E.c.TABLE,
                    userFarmsViewMode: E.c.TABLE,
                    userPredictionAcceptedRisk: !1,
                    userPredictionChartDisclaimerShow: !0,
                    userExpertModeAcknowledgementShow: !0,
                    userUsernameVisibility: !1,
                    gasPrice: I.b.default,
                    watchlistTokens: [],
                    watchlistPools: [],
                    showPhishingWarningBanner: !0
                },
                F = Object(i.c)(R, (function(e) {
                    return e.addCase(A, (function(e) {
                        "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = S.n), "number" !== typeof e.userDeadline && (e.userDeadline = S.m), e.lastUpdateVersionTimestamp = P()
                    })).addCase(E.r, (function(e, t) {
                        e.userExpertMode = t.payload.userExpertMode, e.timestamp = P()
                    })).addCase(E.A, (function(e, t) {
                        e.userSlippageTolerance = t.payload.userSlippageTolerance, e.timestamp = P()
                    })).addCase(E.q, (function(e, t) {
                        e.userDeadline = t.payload.userDeadline, e.timestamp = P()
                    })).addCase(E.z, (function(e, t) {
                        e.userSingleHopOnly = t.payload.userSingleHopOnly
                    })).addCase(E.e, (function(e, t) {
                        var n = t.payload.serializedToken;
                        e.tokens || (e.tokens = {}), e.tokens[n.chainId] = e.tokens[n.chainId] || {}, e.tokens[n.chainId][n.address] = n, e.timestamp = P()
                    })).addCase(E.k, (function(e, t) {
                        var n = t.payload,
                            a = n.address,
                            i = n.chainId;
                        e.tokens || (e.tokens = {}), e.tokens[i] = e.tokens[i] || {}, delete e.tokens[i][a], e.timestamp = P()
                    })).addCase(E.d, (function(e, t) {
                        var n = t.payload.serializedPair;
                        if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
                            var a = n.token0.chainId;
                            e.pairs[a] = e.pairs[a] || {}, e.pairs[a][N(n.token0.address, n.token1.address)] = n
                        }
                        e.timestamp = P()
                    })).addCase(E.j, (function(e, t) {
                        var n = t.payload,
                            a = n.chainId,
                            i = n.tokenAAddress,
                            r = n.tokenBAddress;
                        e.pairs[a] && (delete e.pairs[a][N(i, r)], delete e.pairs[a][N(r, i)]), e.timestamp = P()
                    })).addCase(E.i, (function(e) {
                        e.audioPlay = !1
                    })).addCase(E.o, (function(e) {
                        e.audioPlay = !0
                    })).addCase(E.n, (function(e) {
                        e.isDark = !e.isDark
                    })).addCase(E.t, (function(e, t) {
                        var n = t.payload.userFarmStakedOnly;
                        e.userFarmStakedOnly = n
                    })).addCase(E.v, (function(e, t) {
                        var n = t.payload.userPoolStakedOnly;
                        e.userPoolStakedOnly = n
                    })).addCase(E.w, (function(e, t) {
                        var n = t.payload.userPoolsViewMode;
                        e.userPoolsViewMode = n
                    })).addCase(E.u, (function(e, t) {
                        var n = t.payload.userFarmsViewMode;
                        e.userFarmsViewMode = n
                    })).addCase(E.x, (function(e, t) {
                        var n = t.payload.userAcceptedRisk;
                        e.userPredictionAcceptedRisk = n
                    })).addCase(E.y, (function(e, t) {
                        var n = t.payload.userShowDisclaimer;
                        e.userPredictionChartDisclaimerShow = n
                    })).addCase(E.s, (function(e, t) {
                        var n = t.payload.userExpertModeAcknowledgementShow;
                        e.userExpertModeAcknowledgementShow = n
                    })).addCase(E.B, (function(e, t) {
                        var n = t.payload.userUsernameVisibility;
                        e.userUsernameVisibility = n
                    })).addCase(E.p, (function(e, t) {
                        e.gasPrice = t.payload.gasPrice
                    })).addCase(E.g, (function(e, t) {
                        var n, i = t.payload.address,
                            r = null !== (n = e.watchlistTokens) && void 0 !== n ? n : [];
                        if (r.includes(i)) {
                            var o = e.watchlistTokens.filter((function(e) {
                                return e !== i
                            }));
                            e.watchlistTokens = o
                        } else e.watchlistTokens = [].concat(Object(a.a)(r), [i])
                    })).addCase(E.f, (function(e, t) {
                        var n, i = t.payload.address,
                            r = null !== (n = e.watchlistPools) && void 0 !== n ? n : [];
                        if (r.includes(i)) {
                            var o = e.watchlistPools.filter((function(e) {
                                return e !== i
                            }));
                            e.watchlistPools = o
                        } else e.watchlistPools = [].concat(Object(a.a)(r), [i])
                    })).addCase(E.h, (function(e) {
                        e.showPhishingWarningBanner = !1
                    })).addCase(E.m, (function(e, t) {
                        var n = t.payload;
                        e.isExchangeChartDisplayed = n
                    })).addCase(E.l, (function(e, t) {
                        var n = t.payload;
                        e.userChartViewMode = n
                    }))
                })),
                M = n(76),
                U = function() {
                    return (new Date).getTime()
                },
                D = {},
                L = Object(i.c)(D, (function(e) {
                    return e.addCase(M.a, (function(e, t) {
                        var n, a, i = t.payload,
                            r = i.chainId,
                            o = i.from,
                            s = i.hash,
                            c = i.approval,
                            l = i.summary,
                            u = i.claim;
                        if (null === (n = e[r]) || void 0 === n ? void 0 : n[s]) throw Error("Attempted to add existing transaction.");
                        var d = null !== (a = e[r]) && void 0 !== a ? a : {};
                        d[s] = {
                            hash: s,
                            approval: c,
                            summary: l,
                            claim: u,
                            from: o,
                            addedTime: U()
                        }, e[r] = d
                    })).addCase(M.c, (function(e, t) {
                        var n = t.payload.chainId;
                        e[n] && (e[n] = {})
                    })).addCase(M.b, (function(e, t) {
                        var n, a = t.payload,
                            i = a.chainId,
                            r = a.hash,
                            o = a.blockNumber,
                            s = null === (n = e[i]) || void 0 === n ? void 0 : n[r];
                        s && (s.lastCheckedBlockNumber ? s.lastCheckedBlockNumber = Math.max(o, s.lastCheckedBlockNumber) : s.lastCheckedBlockNumber = o)
                    })).addCase(M.d, (function(e, t) {
                        var n, a = t.payload,
                            i = a.hash,
                            r = a.chainId,
                            o = a.receipt,
                            s = null === (n = e[r]) || void 0 === n ? void 0 : n[i];
                        s && (s.receipt = o, s.confirmedTime = U())
                    }))
                })),
                Y = n(17),
                K = (B = {
                    independentField: Y.a.INPUT,
                    typedValue: ""
                }, Object(u.a)(B, Y.a.INPUT, {
                    currencyId: ""
                }), Object(u.a)(B, Y.a.OUTPUT, {
                    currencyId: ""
                }), Object(u.a)(B, "pairDataById", {}), Object(u.a)(B, "derivedPairDataById", {}), Object(u.a)(B, "recipient", null), B),
                _ = Object(i.c)(K, (function(e) {
                    return e.addCase(Y.b, (function(e, t) {
                        var n, a = t.payload,
                            i = a.typedValue,
                            r = a.recipient,
                            o = a.field,
                            s = a.inputCurrencyId,
                            c = a.outputCurrencyId;
                        return n = {}, Object(u.a)(n, Y.a.INPUT, {
                            currencyId: s
                        }), Object(u.a)(n, Y.a.OUTPUT, {
                            currencyId: c
                        }), Object(u.a)(n, "independentField", o), Object(u.a)(n, "typedValue", i), Object(u.a)(n, "recipient", r), Object(u.a)(n, "pairDataById", e.pairDataById), Object(u.a)(n, "derivedPairDataById", e.derivedPairDataById), n
                    })).addCase(Y.c, (function(e, t) {
                        var n, a = t.payload,
                            i = a.currencyId,
                            r = a.field,
                            o = r === Y.a.INPUT ? Y.a.OUTPUT : Y.a.INPUT;
                        return i === e[o].currencyId ? Object(d.a)(Object(d.a)({}, e), {}, (n = {
                            independentField: e.independentField === Y.a.INPUT ? Y.a.OUTPUT : Y.a.INPUT
                        }, Object(u.a)(n, r, {
                            currencyId: i
                        }), Object(u.a)(n, o, {
                            currencyId: e[r].currencyId
                        }), n)) : Object(d.a)(Object(d.a)({}, e), {}, Object(u.a)({}, r, {
                            currencyId: i
                        }))
                    })).addCase(Y.e, (function(e) {
                        var t;
                        return Object(d.a)(Object(d.a)({}, e), {}, (t = {
                            independentField: e.independentField === Y.a.INPUT ? Y.a.OUTPUT : Y.a.INPUT
                        }, Object(u.a)(t, Y.a.INPUT, {
                            currencyId: e[Y.a.OUTPUT].currencyId
                        }), Object(u.a)(t, Y.a.OUTPUT, {
                            currencyId: e[Y.a.INPUT].currencyId
                        }), t))
                    })).addCase(Y.f, (function(e, t) {
                        var n = t.payload,
                            a = n.field,
                            i = n.typedValue;
                        return Object(d.a)(Object(d.a)({}, e), {}, {
                            independentField: a,
                            typedValue: i
                        })
                    })).addCase(Y.d, (function(e, t) {
                        var n = t.payload.recipient;
                        e.recipient = n
                    })).addCase(Y.h, (function(e, t) {
                        var n = t.payload,
                            a = n.pairData,
                            i = n.pairId,
                            r = n.timeWindow;
                        e.pairDataById[i] || (e.pairDataById[i] = {}), e.pairDataById[i][r] = a
                    })).addCase(Y.g, (function(e, t) {
                        var n = t.payload,
                            a = n.pairData,
                            i = n.pairId,
                            r = n.timeWindow;
                        e.derivedPairDataById[i] || (e.derivedPairDataById[i] = {}), e.derivedPairDataById[i][r] = a
                    }))
                })),
                W = n(18),
                z = {
                    independentField: W.a.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: ""
                },
                q = Object(i.c)(z, (function(e) {
                    return e.addCase(W.b, (function() {
                        return z
                    })).addCase(W.c, (function(e, t) {
                        var n = t.payload,
                            a = n.field,
                            i = n.typedValue;
                        return n.noLiquidity ? a === e.independentField ? Object(d.a)(Object(d.a)({}, e), {}, {
                            independentField: a,
                            typedValue: i
                        }) : Object(d.a)(Object(d.a)({}, e), {}, {
                            independentField: a,
                            typedValue: i,
                            otherTypedValue: e.typedValue
                        }) : Object(d.a)(Object(d.a)({}, e), {}, {
                            independentField: a,
                            typedValue: i,
                            otherTypedValue: ""
                        })
                    }))
                })),
                V = n(124),
                H = n(58),
                G = n(64),
                $ = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null
                },
                J = {
                    lastInitializedDefaultListOfLists: H.b,
                    byUrl: Object(d.a)({}, H.b.concat.apply(H.b, Object(a.a)(H.c)).reduce((function(e, t) {
                        return e[t] = $, e
                    }), {})),
                    activeListUrls: H.a
                },
                Q = Object(i.c)(J, (function(e) {
                    return e.addCase(G.e.pending, (function(e, t) {
                        var n = t.payload,
                            a = n.requestId,
                            i = n.url;
                        e.byUrl[i] = Object(d.a)(Object(d.a)({
                            current: null,
                            pendingUpdate: null
                        }, e.byUrl[i]), {}, {
                            loadingRequestId: a,
                            error: null
                        })
                    })).addCase(G.e.fulfilled, (function(e, t) {
                        var n, a, i = t.payload,
                            r = i.requestId,
                            o = i.tokenList,
                            s = i.url,
                            c = null === (n = e.byUrl[s]) || void 0 === n ? void 0 : n.current,
                            l = null === (a = e.byUrl[s]) || void 0 === a ? void 0 : a.loadingRequestId;
                        if (c) {
                            if (Object(V.b)(c.version, o.version) === V.a.NONE) return;
                            null !== l && l !== r || (e.byUrl[s] = Object(d.a)(Object(d.a)({}, e.byUrl[s]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: c,
                                pendingUpdate: o
                            }))
                        } else {
                            var u;
                            if (H.a.includes(s)) null === (u = e.activeListUrls) || void 0 === u || u.push(s);
                            e.byUrl[s] = Object(d.a)(Object(d.a)({}, e.byUrl[s]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: o,
                                pendingUpdate: null
                            })
                        }
                    })).addCase(G.e.rejected, (function(e, t) {
                        var n, a = t.payload,
                            i = a.url,
                            r = a.requestId,
                            o = a.errorMessage;
                        (null === (n = e.byUrl[i]) || void 0 === n ? void 0 : n.loadingRequestId) === r && (e.byUrl[i] = Object(d.a)(Object(d.a)({}, e.byUrl[i]), {}, {
                            loadingRequestId: null,
                            error: o,
                            current: null,
                            pendingUpdate: null
                        }))
                    })).addCase(G.b, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = $)
                    })).addCase(G.f, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] && delete e.byUrl[n], e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) {
                            return e !== n
                        })))
                    })).addCase(G.d, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = $), e.activeListUrls && !e.activeListUrls.includes(n) && e.activeListUrls.push(n), e.activeListUrls || (e.activeListUrls = [n])
                    })).addCase(G.c, (function(e, t) {
                        var n = t.payload;
                        e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) {
                            return e !== n
                        })))
                    })).addCase(G.a, (function(e, t) {
                        var n, a = t.payload;
                        if (!(null === (n = e.byUrl[a]) || void 0 === n ? void 0 : n.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[a] = Object(d.a)(Object(d.a)({}, e.byUrl[a]), {}, {
                            pendingUpdate: null,
                            current: e.byUrl[a].pendingUpdate
                        })
                    })).addCase(A, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var t = e.lastInitializedDefaultListOfLists.reduce((function(e, t) {
                                        return e.add(t)
                                    }), new Set),
                                    n = H.b.reduce((function(e, t) {
                                        return e.add(t)
                                    }), new Set);
                                H.b.forEach((function(n) {
                                    t.has(n) || (e.byUrl[n] = $)
                                })), e.lastInitializedDefaultListOfLists.forEach((function(t) {
                                    n.has(t) || delete e.byUrl[t]
                                }))
                            }
                        } else e.byUrl = J.byUrl, e.activeListUrls = J.activeListUrls;
                        e.lastInitializedDefaultListOfLists = H.b, e.activeListUrls || (e.activeListUrls = H.a, H.a.map((function(t) {
                            return e.byUrl[t] || (e.byUrl[t] = $), !0
                        })))
                    }))
                })),
                Z = n(279),
                X = {
                    independentField: Z.a.LIQUIDITY_PERCENT,
                    typedValue: "0"
                },
                ee = Object(i.c)(X, (function(e) {
                    return e.addCase(Z.b, (function(e, t) {
                        var n = t.payload,
                            a = n.field,
                            i = n.typedValue;
                        return Object(d.a)(Object(d.a)({}, e), {}, {
                            independentField: a,
                            typedValue: i
                        })
                    }))
                })),
                te = n(70),
                ne = Object(i.c)({
                    callResults: {}
                }, (function(e) {
                    return e.addCase(te.a, (function(e, t) {
                        var n, a = t.payload,
                            i = a.calls,
                            r = a.chainId,
                            o = a.options,
                            s = (o = void 0 === o ? {} : o).blocksPerFetch,
                            c = void 0 === s ? 1 : s,
                            l = e.callListeners ? e.callListeners : e.callListeners = {};
                        l[r] = null !== (n = l[r]) && void 0 !== n ? n : {}, i.forEach((function(e) {
                            var t, n, a = Object(te.f)(e);
                            l[r][a] = null !== (t = l[r][a]) && void 0 !== t ? t : {}, l[r][a][c] = (null !== (n = l[r][a][c]) && void 0 !== n ? n : 0) + 1
                        }))
                    })).addCase(te.e, (function(e, t) {
                        var n = t.payload,
                            a = n.chainId,
                            i = n.calls,
                            r = n.options,
                            o = (r = void 0 === r ? {} : r).blocksPerFetch,
                            s = void 0 === o ? 1 : o,
                            c = e.callListeners ? e.callListeners : e.callListeners = {};
                        c[a] && i.forEach((function(e) {
                            var t = Object(te.f)(e);
                            c[a][t] && c[a][t][s] && (1 === c[a][t][s] ? delete c[a][t][s] : c[a][t][s]--)
                        }))
                    })).addCase(te.c, (function(e, t) {
                        var n, a = t.payload,
                            i = a.chainId,
                            r = a.fetchingBlockNumber,
                            o = a.calls;
                        e.callResults[i] = null !== (n = e.callResults[i]) && void 0 !== n ? n : {}, o.forEach((function(t) {
                            var n = Object(te.f)(t),
                                a = e.callResults[i][n];
                            if (a) {
                                var o;
                                if ((null !== (o = a.fetchingBlockNumber) && void 0 !== o ? o : 0) >= r) return;
                                e.callResults[i][n].fetchingBlockNumber = r
                            } else e.callResults[i][n] = {
                                fetchingBlockNumber: r
                            }
                        }))
                    })).addCase(te.b, (function(e, t) {
                        var n, a = t.payload,
                            i = a.fetchingBlockNumber,
                            r = a.chainId,
                            o = a.calls;
                        e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}, o.forEach((function(t) {
                            var n = Object(te.f)(t),
                                a = e.callResults[r][n];
                            a && a.fetchingBlockNumber === i && (delete a.fetchingBlockNumber, a.data = null, a.blockNumber = i)
                        }))
                    })).addCase(te.g, (function(e, t) {
                        var n, a = t.payload,
                            i = a.chainId,
                            r = a.results,
                            o = a.blockNumber;
                        e.callResults[i] = null !== (n = e.callResults[i]) && void 0 !== n ? n : {}, Object.keys(r).forEach((function(t) {
                            var n, a = e.callResults[i][t];
                            (null !== (n = null === a || void 0 === a ? void 0 : a.blockNumber) && void 0 !== n ? n : 0) > o || (e.callResults[i][t] = {
                                data: r[t],
                                blockNumber: o
                            })
                        }))
                    }))
                })),
                ae = ["user", "transactions", "lists", "profile"],
                ie = Object(i.a)({
                    devTools: !1,
                    reducer: {
                        block: l.a,
                        info: C,
                        user: F,
                        transactions: L,
                        swap: _,
                        mint: q,
                        burn: ee,
                        multicall: ne,
                        lists: Q
                    },
                    middleware: [].concat(Object(a.a)(Object(i.e)({
                        thunk: !0
                    })), [Object(r.save)({
                        states: ae
                    })]),
                    preloadedState: Object(r.load)({
                        states: ae,
                        preloadedState: {
                            user: s()(R),
                            transactions: s()(D),
                            lists: s()(J)
                        }
                    })
                });
            ie.dispatch(A());
            var re = function() {
                return Object(c.b)()
            };
            t.a = ie
        },
        135: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "c", (function() {
                return s
            }));
            var a = n(84),
                i = n.n(a),
                r = new i.a(0),
                o = (new i.a(1), new i.a(9), new i.a(10)),
                s = function(e) {
                    return new i.a(e.toString())
                }
        },
        136: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(11),
                i = n(0);

            function r(e, t) {
                var n = Object(i.useState)(e),
                    r = Object(a.a)(n, 2),
                    o = r[0],
                    s = r[1];
                return Object(i.useEffect)((function() {
                    var n = setTimeout((function() {
                        s(e)
                    }), t);
                    return function() {
                        clearTimeout(n)
                    }
                }), [e, t]), o
            }
        },
        137: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                return "".concat(e.substring(0, t), "...").concat(e.substring(e.length - n))
            }
        },
        138: function(e, t, n) {
            "use strict";
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(0),
                s = n(73),
                c = n(234),
                l = n(192),
                u = n(193),
                d = n(2),
                p = n(122),
                b = n(235),
                y = n(160),
                m = n(132),
                f = n(23),
                h = n(76);
            t.a = function() {
                var e = Object(f.b)().t,
                    t = Object(m.b)(),
                    n = Object(s.c)(),
                    a = n.chainId,
                    j = n.activate,
                    v = n.deactivate,
                    O = Object(y.a)().toastError;
                return {
                    login: Object(o.useCallback)((function(t) {
                        var n = p.a[t];
                        n ? j(n, function() {
                            var t = Object(r.a)(i.a.mark((function t(a) {
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!(a instanceof s.a)) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 3, Object(b.b)();
                                        case 3:
                                            t.sent && j(n), t.next = 9;
                                            break;
                                        case 7:
                                            window.localStorage.removeItem(d.ob), a instanceof l.b || a instanceof c.NoBscProviderError ? O(e("Provider Error"), e("No provider was found")) : a instanceof l.c || a instanceof u.a ? (n instanceof u.b && (n.walletConnectProvider = null), O(e("Authorization Error"), e("Please authorize to access your account"))) : O(a.name, a.message);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()) : O(e("Unable to find connector"), e("The connector config is wrong"))
                    }), [e, j, O]),
                    logout: Object(o.useCallback)((function() {
                        v(), window.localStorage.getItem("walletconnect") && (p.a.walletconnect.close(), p.a.walletconnect.walletConnectProvider = null), window.localStorage.removeItem(d.ob), a && t(Object(h.c)({
                            chainId: a
                        }))
                    }), [v, t, a])
                }
            }
        },
        139: function(e, t, n) {
            "use strict";
            var a = n(11),
                i = n(0),
                r = n(4),
                o = n(35);
            t.a = function() {
                var e = Object(o.l)(),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    s = t[1];
                return {
                    isDark: n,
                    theme: Object(i.useContext)(r.a),
                    toggleTheme: s
                }
            }
        },
        140: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n(7);

            function i(e) {
                if (e === a.d) return "CRAB";
                if (e instanceof a.j) return e.address;
                throw new Error("invalid currency")
            }
        },
        143: function(e, t, n) {
            "use strict";

            function a(e) {
                var t, n;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var a = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(a, "/"), "https://ipfs.io/ipfs/".concat(a, "/")];
                    case "ipns":
                        var i = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(i, "/"), "https://ipfs.io/ipns/".concat(i, "/")];
                    default:
                        return []
                }
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        150: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        152: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return x
            })), n.d(t, "b", (function() {
                return k
            }));
            var a, i, r, o = n(10),
                s = n(0),
                c = n(4),
                l = n(2),
                u = n(235),
                d = n(23),
                p = n(26),
                b = n(48),
                y = n(21),
                m = n(29),
                f = n(30),
                h = n(1),
                j = c.e.div(a || (a = Object(o.a)(["\n  width: 100%;\n"]))),
                v = Object(c.e)(m.a)(i || (i = Object(o.a)(["\n  padding: 24px;\n"]))),
                O = Object(c.e)(m.b)(r || (r = Object(o.a)(["\n  padding: 24px 0;\n"])));

            function g(e) {
                var t = e.pendingText,
                    n = Object(d.b)().t;
                return Object(h.jsxs)(j, {
                    children: [Object(h.jsx)(O, {
                        children: Object(h.jsx)(l.cb, {})
                    }), Object(h.jsxs)(m.a, {
                        gap: "12px",
                        justify: "center",
                        children: [Object(h.jsx)(l.eb, {
                            fontSize: "20px",
                            children: n("Waiting For Confirmation")
                        }), Object(h.jsx)(m.a, {
                            gap: "12px",
                            justify: "center",
                            children: Object(h.jsx)(l.eb, {
                                bold: !0,
                                small: !0,
                                textAlign: "center",
                                children: t
                            })
                        }), Object(h.jsx)(l.eb, {
                            small: !0,
                            color: "textSubtle",
                            textAlign: "center",
                            children: n("Confirm this transaction in your wallet")
                        })]
                    })]
                })
            }

            function w(e) {
                var t, n = e.onDismiss,
                    a = e.chainId,
                    i = e.hash,
                    r = e.currencyToAdd,
                    o = Object(p.a)().library,
                    s = Object(d.b)().t,
                    c = Object(b.b)(r, a);
                return Object(h.jsx)(j, {
                    children: Object(h.jsxs)(v, {
                        children: [Object(h.jsx)(O, {
                            children: Object(h.jsx)(l.e, {
                                strokeWidth: .5,
                                width: "90px",
                                color: "primary"
                            })
                        }), Object(h.jsxs)(m.a, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(h.jsx)(l.eb, {
                                fontSize: "20px",
                                children: s("Transaction Submitted")
                            }), a && i && Object(h.jsx)(l.H, {
                                external: !0,
                                small: !0,
                                href: Object(f.e)(i, "transaction", a),
                                children: s("View on Subview")
                            }), r && (null === o || void 0 === o || null === (t = o.provider) || void 0 === t ? void 0 : t.isMetaMask) && Object(h.jsx)(l.i, {
                                variant: "tertiary",
                                mt: "12px",
                                width: "fit-content",
                                onClick: function() {
                                    return Object(u.a)(c.address, c.symbol, c.decimals)
                                },
                                children: Object(h.jsxs)(y.c, {
                                    children: [s("Add %asset% to Metamask", {
                                        asset: r.symbol
                                    }), Object(h.jsx)(l.N, {
                                        width: "16px",
                                        ml: "6px"
                                    })]
                                })
                            }), Object(h.jsx)(l.i, {
                                onClick: n,
                                mt: "20px",
                                children: s("Close")
                            })]
                        })]
                    })
                })
            }

            function x(e) {
                var t = e.bottomContent,
                    n = e.topContent;
                return Object(h.jsxs)(j, {
                    children: [Object(h.jsx)(l.h, {
                        children: n()
                    }), Object(h.jsx)(l.h, {
                        children: t()
                    })]
                })
            }

            function k(e) {
                var t = e.message,
                    n = e.onDismiss,
                    a = Object(d.b)().t;
                return Object(h.jsxs)(j, {
                    children: [Object(h.jsxs)(m.a, {
                        justify: "center",
                        children: [Object(h.jsx)(l.y, {
                            color: "failure",
                            width: "64px"
                        }), Object(h.jsx)(l.eb, {
                            color: "failure",
                            style: {
                                textAlign: "center",
                                width: "85%"
                            },
                            children: t
                        })]
                    }), Object(h.jsx)(l.A, {
                        justifyContent: "center",
                        pt: "24px",
                        children: Object(h.jsx)(l.i, {
                            onClick: n,
                            children: a("Dismiss")
                        })
                    })]
                })
            }
            t.c = function(e) {
                var t = e.title,
                    n = e.onDismiss,
                    a = e.customOnDismiss,
                    i = e.attemptingTxn,
                    r = e.hash,
                    o = e.pendingText,
                    c = e.content,
                    u = e.currencyToAdd,
                    d = Object(p.a)().chainId,
                    b = Object(s.useCallback)((function() {
                        a && a(), n()
                    }), [a, n]);
                return d ? Object(h.jsx)(l.O, {
                    title: t,
                    headerBackground: "gradients.cardHeader",
                    onDismiss: b,
                    children: i ? Object(h.jsx)(g, {
                        pendingText: o
                    }) : r ? Object(h.jsx)(w, {
                        chainId: d,
                        hash: r,
                        onDismiss: n,
                        currencyToAdd: u
                    }) : c()
                }) : null
            }
        },
        153: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "b", (function() {
                return A
            }));
            var a, i, r, o = n(10),
                s = n(0),
                c = n(695),
                l = n(4),
                u = n(9),
                d = n(52),
                p = n(16),
                b = n(694),
                y = n(2),
                m = {
                    SUCCESS: "success",
                    DANGER: "danger",
                    WARNING: "warning",
                    INFO: "info"
                },
                f = n(1),
                h = ["toast", "onRemove", "style", "ttl"],
                j = (a = {}, Object(p.a)(a, m.INFO, y.nb.INFO), Object(p.a)(a, m.SUCCESS, y.nb.SUCCESS), Object(p.a)(a, m.DANGER, y.nb.DANGER), Object(p.a)(a, m.WARNING, y.nb.WARNING), a),
                v = l.e.div(i || (i = Object(o.a)(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                O = function(e) {
                    var t = e.toast,
                        n = e.onRemove,
                        a = e.style,
                        i = e.ttl,
                        r = Object(d.a)(e, h),
                        o = Object(s.useRef)(),
                        c = Object(s.useRef)(null),
                        l = Object(s.useRef)(n),
                        p = t.id,
                        m = t.title,
                        O = t.description,
                        g = t.type,
                        w = Object(s.useCallback)((function() {
                            return l.current(p)
                        }), [p, l]);
                    return Object(s.useEffect)((function() {
                        return o.current && clearTimeout(o.current), o.current = window.setTimeout((function() {
                                w()
                            }), i),
                            function() {
                                clearTimeout(o.current)
                            }
                    }), [o, i, w]), Object(f.jsx)(b.a, Object(u.a)(Object(u.a)({
                        nodeRef: c,
                        timeout: 250,
                        style: a
                    }, r), {}, {
                        children: Object(f.jsx)(v, {
                            ref: c,
                            onMouseEnter: function() {
                                clearTimeout(o.current)
                            },
                            onMouseLeave: function() {
                                o.current && clearTimeout(o.current), o.current = window.setTimeout((function() {
                                    w()
                                }), i)
                            },
                            children: Object(f.jsx)(y.b, {
                                title: m,
                                variant: j[g],
                                onClick: w,
                                children: O
                            })
                        })
                    }))
                },
                g = l.e.div(r || (r = Object(o.a)(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"]))),
                w = function(e) {
                    var t = e.toasts,
                        n = e.onRemove,
                        a = e.ttl,
                        i = void 0 === a ? 6e3 : a,
                        r = e.stackSpacing,
                        o = void 0 === r ? 24 : r;
                    return Object(f.jsx)(g, {
                        children: Object(f.jsx)(c.a, {
                            children: t.map((function(e, t) {
                                var a = (1e3 - t).toString(),
                                    r = 80 + t * o;
                                return Object(f.jsx)(O, {
                                    toast: e,
                                    onRemove: n,
                                    ttl: i,
                                    style: {
                                        top: "".concat(r, "px"),
                                        zIndex: a
                                    }
                                }, e.id)
                            }))
                        })
                    })
                },
                x = n(30),
                k = n(26),
                T = n(23),
                C = n(137),
                A = function(e) {
                    var t = e.txHash,
                        n = e.children,
                        a = Object(k.a)().chainId,
                        i = Object(T.b)().t;
                    return Object(f.jsxs)(f.Fragment, {
                        children: ["string" === typeof n ? Object(f.jsx)(y.eb, {
                            as: "p",
                            children: n
                        }) : n, t && Object(f.jsxs)(y.H, {
                            external: !0,
                            href: Object(x.e)(t, "transaction", a),
                            children: [i("View on Subview"), ": ", Object(C.a)(t, 8, 0)]
                        })]
                    })
                }
        },
        154: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n(30),
                i = n(74),
                r = n(0),
                o = n(49),
                s = n(119),
                c = n(55),
                l = n(136);

            function u(e) {
                var t = Object(a.i)(e),
                    n = function(e) {
                        var t, n, u, d = Object(l.a)(e, 200),
                            p = Object(r.useMemo)((function() {
                                if (!d || !Object(a.i)(d)) return [void 0];
                                try {
                                    return d ? [Object(i.namehash)("".concat(d.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                                } catch (e) {
                                    return [void 0]
                                }
                            }), [d]),
                            b = Object(c.b)(!1),
                            y = Object(o.c)(b, "resolver", p),
                            m = null === (t = y.result) || void 0 === t ? void 0 : t[0],
                            f = Object(c.c)(m && !Object(s.a)(m) ? m : void 0, !1),
                            h = Object(o.c)(f, "name", p),
                            j = d !== e;
                        return {
                            ENSName: j ? null : null !== (n = null === (u = h.result) || void 0 === u ? void 0 : u[0]) && void 0 !== n ? n : null,
                            loading: j || y.loading || h.loading
                        }
                    }(t || void 0),
                    u = function(e) {
                        var t, n, a, u = Object(l.a)(e, 200),
                            d = Object(r.useMemo)((function() {
                                if (!u) return [void 0];
                                try {
                                    return u ? [Object(i.namehash)(u)] : [void 0]
                                } catch (e) {
                                    return [void 0]
                                }
                            }), [u]),
                            p = Object(c.b)(!1),
                            b = Object(o.c)(p, "resolver", d),
                            y = null === (t = b.result) || void 0 === t ? void 0 : t[0],
                            m = Object(c.c)(y && !Object(s.a)(y) ? y : void 0, !1),
                            f = Object(o.c)(m, "addr", d),
                            h = u !== e;
                        return {
                            address: h ? null : null !== (n = null === (a = f.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null,
                            loading: h || b.loading || f.loading
                        }
                    }(e);
                return {
                    loading: n.loading || u.loading,
                    address: t || u.address,
                    name: n.ENSName ? n.ENSName : !t && u.address && e || null
                }
            }
        },
        160: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(170);
            t.a = function() {
                var e = Object(a.useContext)(i.b);
                if (void 0 === e) throw new Error("Toasts context undefined");
                return e
            }
        },
        161: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            var a = n(382),
                i = n.n(a);
            var r = ["https://crab-rpc.darwinia.network", "https://darwinia-crab.api.onfinality.io/public", "https://darwiniacrab-rpc.dwellir.com"];
            t.a = function() {
                return i()(r)
            }
        },
        163: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;

            function i(e) {
                var t = e.match(a);
                if (t) return {
                    ensName: "".concat(t[1].toLowerCase(), "eth"),
                    ensPath: t[4]
                }
            }
        },
        167: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a, i, r = n(9),
                o = n(52),
                s = n(10),
                c = (n(0), n(4)),
                l = n(1),
                u = ["size", "stroke"],
                d = Object(c.f)(a || (a = Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                p = c.e.svg(i || (i = Object(s.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), d, (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    var t = e.stroke,
                        n = e.theme;
                    return null !== t && void 0 !== t ? t : n.colors.primary
                }));

            function b(e) {
                var t = e.size,
                    n = void 0 === t ? "16px" : t,
                    a = e.stroke,
                    i = Object(o.a)(e, u);
                return Object(l.jsx)(p, Object(r.a)(Object(r.a)({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: n,
                    stroke: a
                }, i), {}, {
                    children: Object(l.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }
        },
        168: function(e, t, n) {
            "use strict";
            var a, i, r = n(11),
                o = n(0),
                s = n(2),
                c = n(10),
                l = n(4),
                u = n(35),
                d = n(23),
                p = n(85),
                b = n(139),
                y = n(60),
                m = n(30),
                f = n(1);
            ! function(e) {
                e.InvalidInput = "InvalidInput", e.RiskyLow = "RiskyLow", e.RiskyHigh = "RiskyHigh"
            }(a || (a = {})),
            function(e) {
                e.InvalidInput = "InvalidInput"
            }(i || (i = {}));
            var h, j = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                v = function() {
                    var e, t, n = Object(u.p)(),
                        c = Object(r.a)(n, 2),
                        l = c[0],
                        p = c[1],
                        b = Object(u.q)(),
                        h = Object(r.a)(b, 2),
                        v = h[0],
                        O = h[1],
                        g = Object(o.useState)(""),
                        w = Object(r.a)(g, 2),
                        x = w[0],
                        k = w[1],
                        T = Object(o.useState)(""),
                        C = Object(r.a)(T, 2),
                        A = C[0],
                        S = C[1],
                        E = Object(d.b)().t,
                        I = "" === x || (l / 100).toFixed(2) === Number.parseFloat(x).toFixed(2),
                        P = "" === A || (v / 60).toString() === A;
                    e = "" === x || I ? I && l < 50 ? a.RiskyLow : I && l > 500 ? a.RiskyHigh : void 0 : a.InvalidInput, t = "" === A || P ? void 0 : i.InvalidInput;
                    var N = function(e) {
                            if ("" === e || j.test(Object(m.d)(e))) {
                                k(e);
                                try {
                                    var t = Number.parseInt((100 * Number.parseFloat(e)).toString());
                                    !Number.isNaN(t) && t < 5e3 && p(t)
                                } catch (n) {
                                    console.error(n)
                                }
                            }
                        },
                        B = function(e) {
                            S(e);
                            try {
                                var t = 60 * Number.parseInt(e);
                                !Number.isNaN(t) && t > 0 && O(t)
                            } catch (n) {
                                console.error(n)
                            }
                        };
                    return Object(f.jsxs)(s.A, {
                        flexDirection: "column",
                        children: [Object(f.jsxs)(s.A, {
                            flexDirection: "column",
                            mb: "24px",
                            children: [Object(f.jsxs)(s.A, {
                                mb: "12px",
                                children: [Object(f.jsx)(s.eb, {
                                    children: E("Slippage Tolerance")
                                }), Object(f.jsx)(y.a, {
                                    text: E("Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."),
                                    placement: "top-start",
                                    ml: "4px"
                                })]
                            }), Object(f.jsxs)(s.A, {
                                flexWrap: "wrap",
                                children: [Object(f.jsx)(s.i, {
                                    mt: "4px",
                                    mr: "4px",
                                    scale: "sm",
                                    onClick: function() {
                                        k(""), p(10)
                                    },
                                    variant: 10 === l ? "primary" : "tertiary",
                                    children: "0.1%"
                                }), Object(f.jsx)(s.i, {
                                    mt: "4px",
                                    mr: "4px",
                                    scale: "sm",
                                    onClick: function() {
                                        k(""), p(50)
                                    },
                                    variant: 50 === l ? "primary" : "tertiary",
                                    children: "0.5%"
                                }), Object(f.jsx)(s.i, {
                                    mr: "4px",
                                    mt: "4px",
                                    scale: "sm",
                                    onClick: function() {
                                        k(""), p(100)
                                    },
                                    variant: 100 === l ? "primary" : "tertiary",
                                    children: "1.0%"
                                }), Object(f.jsxs)(s.A, {
                                    alignItems: "center",
                                    children: [Object(f.jsx)(s.h, {
                                        width: "76px",
                                        mt: "4px",
                                        children: Object(f.jsx)(s.G, {
                                            scale: "sm",
                                            inputMode: "decimal",
                                            pattern: "^[0-9]*[.,]?[0-9]{0,2}$",
                                            placeholder: (l / 100).toFixed(2),
                                            value: x,
                                            onBlur: function() {
                                                N((l / 100).toFixed(2))
                                            },
                                            onChange: function(e) {
                                                e.currentTarget.validity.valid && N(e.target.value.replace(/,/g, "."))
                                            },
                                            isWarning: !I,
                                            isSuccess: ![10, 50, 100].includes(l)
                                        })
                                    }), Object(f.jsx)(s.eb, {
                                        color: "primary",
                                        bold: !0,
                                        ml: "2px",
                                        children: "%"
                                    })]
                                })]
                            }), !!e && Object(f.jsx)(s.eb, {
                                fontSize: "14px",
                                color: e === a.InvalidInput ? "red" : "#F3841E",
                                mt: "8px",
                                children: e === a.InvalidInput ? E("Enter a valid slippage percentage") : e === a.RiskyLow ? E("Your transaction may fail") : E("Your transaction may be frontrun")
                            })]
                        }), Object(f.jsxs)(s.A, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "24px",
                            children: [Object(f.jsxs)(s.A, {
                                alignItems: "center",
                                children: [Object(f.jsx)(s.eb, {
                                    children: E("Tx deadline (mins)")
                                }), Object(f.jsx)(y.a, {
                                    text: E("Your transaction will revert if it is left confirming for longer than this time."),
                                    placement: "top-start",
                                    ml: "4px"
                                })]
                            }), Object(f.jsx)(s.A, {
                                children: Object(f.jsx)(s.h, {
                                    width: "52px",
                                    mt: "4px",
                                    children: Object(f.jsx)(s.G, {
                                        scale: "sm",
                                        inputMode: "numeric",
                                        pattern: "^[0-9]+$",
                                        color: t ? "red" : void 0,
                                        onBlur: function() {
                                            B((v / 60).toString())
                                        },
                                        placeholder: (v / 60).toString(),
                                        value: A,
                                        onChange: function(e) {
                                            e.currentTarget.validity.valid && B(e.target.value)
                                        }
                                    })
                                })
                            })]
                        })]
                    })
                },
                O = function(e) {
                    var t = e.setShowConfirmExpertModal,
                        n = e.setShowExpertModeAcknowledgement,
                        a = Object(u.e)(),
                        i = Object(r.a)(a, 2)[1],
                        c = Object(o.useState)(!1),
                        l = Object(r.a)(c, 2),
                        p = l[0],
                        b = l[1],
                        y = Object(d.b)().t;
                    return Object(f.jsxs)(s.O, {
                        title: y("Expert Mode"),
                        onBack: function() {
                            return t(!1)
                        },
                        onDismiss: function() {
                            return t(!1)
                        },
                        headerBackground: "gradients.cardHeader",
                        style: {
                            maxWidth: "360px"
                        },
                        children: [Object(f.jsx)(s.M, {
                            variant: "warning",
                            mb: "24px",
                            children: Object(f.jsx)(s.eb, {
                                children: y("Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.")
                            })
                        }), Object(f.jsx)(s.eb, {
                            mb: "24px",
                            children: y("Only use this mode if you know what you\u2019re doing.")
                        }), Object(f.jsxs)(s.A, {
                            alignItems: "center",
                            mb: "24px",
                            children: [Object(f.jsx)(s.o, {
                                name: "confirmed",
                                type: "checkbox",
                                checked: p,
                                onChange: function() {
                                    return b(!p)
                                },
                                scale: "sm"
                            }), Object(f.jsx)(s.eb, {
                                ml: "10px",
                                color: "textSubtle",
                                style: {
                                    userSelect: "none"
                                },
                                children: y("Don\u2019t show this again")
                            })]
                        }), Object(f.jsx)(s.i, {
                            mb: "8px",
                            id: "confirm-expert-mode",
                            onClick: function() {
                                "confirm" === window.prompt('Please type the word "confirm" to enable expert mode.') && (i(), t(!1), p && n(!1))
                            },
                            children: y("Turn On Expert Mode")
                        }), Object(f.jsx)(s.i, {
                            variant: "secondary",
                            onClick: function() {
                                t(!1)
                            },
                            children: y("Cancel")
                        })]
                    })
                },
                g = n(63),
                w = function() {
                    var e = Object(d.b)().t,
                        t = Object(u.g)(),
                        n = Object(r.a)(t, 2),
                        a = n[0],
                        i = n[1];
                    return Object(f.jsxs)(s.A, {
                        flexDirection: "column",
                        children: [Object(f.jsxs)(s.A, {
                            mb: "12px",
                            alignItems: "center",
                            children: [Object(f.jsx)(s.eb, {
                                children: e("Default Transaction Speed (GWEI)")
                            }), Object(f.jsx)(y.a, {
                                text: e("Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees"),
                                placement: "top-start",
                                ml: "4px"
                            })]
                        }), Object(f.jsxs)(s.A, {
                            flexWrap: "wrap",
                            children: [Object(f.jsx)(s.i, {
                                mt: "4px",
                                mr: "4px",
                                scale: "sm",
                                onClick: function() {
                                    i(g.b.default)
                                },
                                variant: a === g.b.default ? "primary" : "tertiary",
                                children: e("Standard (%gasPrice%)", {
                                    gasPrice: g.a.default
                                })
                            }), Object(f.jsx)(s.i, {
                                mt: "4px",
                                mr: "4px",
                                scale: "sm",
                                onClick: function() {
                                    i(g.b.fast)
                                },
                                variant: a === g.b.fast ? "primary" : "tertiary",
                                children: e("Fast (%gasPrice%)", {
                                    gasPrice: g.a.fast
                                })
                            }), Object(f.jsx)(s.i, {
                                mr: "4px",
                                mt: "4px",
                                scale: "sm",
                                onClick: function() {
                                    i(g.b.instant)
                                },
                                variant: a === g.b.instant ? "primary" : "tertiary",
                                children: e("Instant (%gasPrice%)", {
                                    gasPrice: g.a.instant
                                })
                            })]
                        })]
                    })
                },
                x = Object(l.e)(s.A)(h || (h = Object(c.a)(["\n  flex-direction: column;\n  max-height: 400px;\n  ", " {\n    max-height: none;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                k = function(e) {
                    var t = e.onDismiss,
                        n = Object(o.useState)(!1),
                        a = Object(r.a)(n, 2),
                        i = a[0],
                        c = a[1],
                        l = Object(u.n)(),
                        m = Object(r.a)(l, 2),
                        h = m[0],
                        j = m[1],
                        g = Object(u.e)(),
                        k = Object(r.a)(g, 2),
                        T = k[0],
                        C = k[1],
                        A = Object(u.o)(),
                        S = Object(r.a)(A, 2),
                        E = S[0],
                        I = S[1],
                        P = Object(u.c)(),
                        N = Object(r.a)(P, 2),
                        B = N[0],
                        R = N[1],
                        F = Object(p.f)().onChangeRecipient,
                        M = Object(d.b)().t,
                        U = Object(b.a)(),
                        D = U.theme,
                        L = U.isDark,
                        Y = U.toggleTheme;
                    if (i) return Object(f.jsx)(O, {
                        setShowConfirmExpertModal: c,
                        onDismiss: t,
                        setShowExpertModeAcknowledgement: j
                    });
                    return Object(f.jsx)(s.O, {
                        title: M("Settings"),
                        headerBackground: "gradients.cardHeader",
                        onDismiss: t,
                        style: {
                            maxWidth: "420px"
                        },
                        children: Object(f.jsxs)(x, {
                            children: [Object(f.jsxs)(s.A, {
                                pb: "24px",
                                flexDirection: "column",
                                children: [Object(f.jsx)(s.eb, {
                                    bold: !0,
                                    textTransform: "uppercase",
                                    fontSize: "12px",
                                    color: "secondary",
                                    mb: "24px",
                                    children: M("Global")
                                }), Object(f.jsxs)(s.A, {
                                    justifyContent: "space-between",
                                    children: [Object(f.jsx)(s.eb, {
                                        mb: "24px",
                                        children: M("Dark mode")
                                    }), Object(f.jsx)(s.fb, {
                                        isDark: L,
                                        toggleTheme: Y
                                    })]
                                }), Object(f.jsx)(w, {})]
                            }), Object(f.jsxs)(s.A, {
                                pt: "24px",
                                flexDirection: "column",
                                borderTop: "1px ".concat(D.colors.cardBorder, " solid"),
                                children: [Object(f.jsx)(s.eb, {
                                    bold: !0,
                                    textTransform: "uppercase",
                                    fontSize: "12px",
                                    color: "secondary",
                                    mb: "24px",
                                    children: M("Swaps & Liquidity")
                                }), Object(f.jsx)(v, {})]
                            }), Object(f.jsxs)(s.A, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: "24px",
                                children: [Object(f.jsxs)(s.A, {
                                    alignItems: "center",
                                    children: [Object(f.jsx)(s.eb, {
                                        children: M("Expert Mode")
                                    }), Object(f.jsx)(y.a, {
                                        text: M("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."),
                                        placement: "top-start",
                                        ml: "4px"
                                    })]
                                }), Object(f.jsx)(s.gb, {
                                    id: "toggle-expert-mode-button",
                                    scale: "md",
                                    checked: T,
                                    onChange: function() {
                                        T ? (F(null), C()) : h ? c(!0) : (F(null), C())
                                    }
                                })]
                            }), Object(f.jsxs)(s.A, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: "24px",
                                children: [Object(f.jsxs)(s.A, {
                                    alignItems: "center",
                                    children: [Object(f.jsx)(s.eb, {
                                        children: M("Disable Multihops")
                                    }), Object(f.jsx)(y.a, {
                                        text: M("Restricts swaps to direct pairs only."),
                                        placement: "top-start",
                                        ml: "4px"
                                    })]
                                }), Object(f.jsx)(s.gb, {
                                    id: "toggle-disable-multihop-button",
                                    checked: E,
                                    scale: "md",
                                    onChange: function() {
                                        I(!E)
                                    }
                                })]
                            }), Object(f.jsxs)(s.A, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [Object(f.jsxs)(s.A, {
                                    alignItems: "center",
                                    children: [Object(f.jsx)(s.eb, {
                                        children: M("Flippy sounds")
                                    }), Object(f.jsx)(y.a, {
                                        text: M("Fun sounds to make a truly immersive pancake-flipping trading experience"),
                                        placement: "top-start",
                                        ml: "4px"
                                    })]
                                }), Object(f.jsx)(s.gb, {
                                    checked: B,
                                    onChange: R,
                                    scale: "md"
                                })]
                            })]
                        })
                    })
                };
            t.a = function(e) {
                var t = e.color,
                    n = e.mr,
                    a = void 0 === n ? "8px" : n,
                    i = Object(s.ub)(Object(f.jsx)(k, {})),
                    o = Object(r.a)(i, 1)[0];
                return Object(f.jsx)(s.A, {
                    children: Object(f.jsx)(s.F, {
                        onClick: o,
                        variant: "text",
                        scale: "sm",
                        mr: a,
                        id: "open-settings-dialog-button",
                        children: Object(f.jsx)(s.v, {
                            height: 24,
                            width: 24,
                            color: t || "textSubtle"
                        })
                    })
                })
            }
        },
        169: function(e, t, n) {
            "use strict";
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(24),
                s = n(7),
                c = n(0),
                l = n(25),
                u = n(26),
                d = n(64),
                p = n(400),
                b = n(401),
                y = n.n(b),
                m = n(231),
                f = n(163),
                h = n(143),
                j = new y.a({
                    allErrors: !0
                }).compile(p);

            function v(e, t) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = Object(r.a)(i.a.mark((function e(t, n) {
                    var a, r, o, s, c, l, u, d, p, b, y, v, O;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(a = Object(f.a)(t))) {
                                    e.next = 23;
                                    break
                                }
                                return e.prev = 2, e.next = 5, n(a.ensName);
                            case 5:
                                s = e.sent, e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(2), console.error("Failed to resolve ENS name: ".concat(a.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(a.ensName));
                            case 12:
                                e.prev = 12, c = Object(m.a)(s), e.next = 20;
                                break;
                            case 16:
                                throw e.prev = 16, e.t1 = e.catch(12), console.error("Failed to translate contenthash to URI", s), new Error("Failed to translate contenthash to URI: ".concat(s));
                            case 20:
                                r = Object(h.a)("".concat(c).concat(null !== (o = a.ensPath) && void 0 !== o ? o : "")), e.next = 24;
                                break;
                            case 23:
                                r = Object(h.a)(t);
                            case 24:
                                l = 0;
                            case 25:
                                if (!(l < r.length)) {
                                    e.next = 55;
                                    break
                                }
                                return u = r[l], d = l === r.length - 1, p = void 0, e.prev = 29, e.next = 32, fetch(u);
                            case 32:
                                p = e.sent, e.next = 41;
                                break;
                            case 35:
                                if (e.prev = 35, e.t2 = e.catch(29), console.error("Failed to fetch list", t, e.t2), !d) {
                                    e.next = 40;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(t));
                            case 40:
                                return e.abrupt("continue", 52);
                            case 41:
                                if (p.ok) {
                                    e.next = 45;
                                    break
                                }
                                if (!d) {
                                    e.next = 44;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(t));
                            case 44:
                                return e.abrupt("continue", 52);
                            case 45:
                                return e.next = 47, p.json();
                            case 47:
                                if (b = e.sent, j(b)) {
                                    e.next = 51;
                                    break
                                }
                                throw O = null !== (y = null === (v = j.errors) || void 0 === v ? void 0 : v.reduce((function(e, t) {
                                    var n, a = "".concat(t.dataPath, " ").concat(null !== (n = t.message) && void 0 !== n ? n : "");
                                    return e.length > 0 ? "".concat(e, "; ").concat(a) : "".concat(a)
                                }), "")) && void 0 !== y ? y : "unknown error", new Error("Token list failed validation: ".concat(O));
                            case 51:
                                return e.abrupt("return", b);
                            case 52:
                                l++, e.next = 25;
                                break;
                            case 55:
                                throw new Error("Unrecognized list URL protocol.");
                            case 56:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8],
                        [12, 16],
                        [29, 35]
                    ])
                })))).apply(this, arguments)
            }
            var g = n(93),
                w = n(74),
                x = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                k = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                T = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }];

            function C(e, t) {
                return new g.b(e, T, t)
            }

            function A() {
                return (A = Object(r.a)(i.a.mark((function e(t, n) {
                    var a, r, o;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = new g.b(k, x, n), r = Object(w.namehash)(t), e.next = 4, a.resolver(r);
                            case 4:
                                return o = e.sent, e.abrupt("return", C(o, n).contenthash(r));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.a = function() {
                var e = Object(u.a)().library,
                    t = Object(u.a)().chainId,
                    n = Object(l.b)(),
                    a = Object(c.useCallback)((function(n) {
                        if (t !== s.a.MAINNET) throw new Error("Could not construct mainnet ENS resolver");
                        return function(e, t) {
                            return A.apply(this, arguments)
                        }(n, e)
                    }), [t, e]);
                return Object(c.useCallback)(function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var r, s, c = arguments;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = !(c.length > 1 && void 0 !== c[1]) || c[1], s = Object(o.f)(), r && n(d.e.pending({
                                        requestId: s,
                                        url: t
                                    })), e.abrupt("return", v(t, a).then((function(e) {
                                        return r && n(d.e.fulfilled({
                                            url: t,
                                            tokenList: e,
                                            requestId: s
                                        })), e
                                    })).catch((function(e) {
                                        throw console.error("Failed to get list at url ".concat(t), e), r && n(d.e.rejected({
                                            url: t,
                                            requestId: s,
                                            errorMessage: e.message
                                        })), e
                                    })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [n, a])
            }
        },
        17: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "e", (function() {
                return o
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "g", (function() {
                return d
            }));
            var a, i = n(24);
            ! function(e) {
                e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
            }(a || (a = {}));
            var r = Object(i.b)("swap/selectCurrency"),
                o = Object(i.b)("swap/switchCurrencies"),
                s = Object(i.b)("swap/typeInput"),
                c = Object(i.b)("swap/replaceSwapState"),
                l = Object(i.b)("swap/setRecipient"),
                u = Object(i.b)("swap/updatePairData"),
                d = Object(i.b)("swap/updateDerivedPairData")
        },
        170: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "a", (function() {
                return p
            }));
            var a = n(40),
                i = n(11),
                r = n(0),
                o = n(95),
                s = n(153),
                c = n(1),
                l = Object(r.createContext)(void 0),
                u = function(e) {
                    var t = e.children,
                        n = Object(r.useState)([]),
                        u = Object(i.a)(n, 2),
                        d = u[0],
                        p = u[1],
                        b = Object(r.useCallback)((function(e) {
                            var t = e.title,
                                n = e.description,
                                i = e.type;
                            p((function(e) {
                                var r = Object(o.kebabCase)(t),
                                    s = e.filter((function(e) {
                                        return e.id !== r
                                    }));
                                return [{
                                    id: r,
                                    title: t,
                                    description: n,
                                    type: i
                                }].concat(Object(a.a)(s))
                            }))
                        }), [p]);
                    return Object(c.jsx)(l.Provider, {
                        value: {
                            toasts: d,
                            clear: function() {
                                return p([])
                            },
                            remove: function(e) {
                                p((function(t) {
                                    return t.filter((function(t) {
                                        return t.id !== e
                                    }))
                                }))
                            },
                            toastError: function(e, t) {
                                return b({
                                    title: e,
                                    description: t,
                                    type: s.c.DANGER
                                })
                            },
                            toastInfo: function(e, t) {
                                return b({
                                    title: e,
                                    description: t,
                                    type: s.c.INFO
                                })
                            },
                            toastSuccess: function(e, t) {
                                return b({
                                    title: e,
                                    description: t,
                                    type: s.c.SUCCESS
                                })
                            },
                            toastWarning: function(e, t) {
                                return b({
                                    title: e,
                                    description: t,
                                    type: s.c.WARNING
                                })
                            }
                        },
                        children: t
                    })
                },
                d = n(160),
                p = function() {
                    var e = Object(d.a)(),
                        t = e.toasts,
                        n = e.remove;
                    return Object(c.jsx)(s.a, {
                        toasts: t,
                        onRemove: function(e) {
                            return n(e)
                        }
                    })
                }
        },
        171: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return R
            }));
            var a, i, r, o, s, c, l = n(11),
                u = n(10),
                d = n(0),
                p = n.n(d),
                b = n(2),
                y = n(4),
                m = n(23),
                f = n(26),
                h = n(79),
                j = n(379),
                v = n(46),
                O = n(21),
                g = n(9),
                w = n(52),
                x = n(30),
                k = n(1),
                T = ["value", "onUserInput", "placeholder"],
                C = y.e.input(a || (a = Object(u.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  text-align: right;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.colors.failure : n.colors.text
                }), (function(e) {
                    var t = e.align;
                    return t && t
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                A = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                S = p.a.memo((function(e) {
                    var t = e.value,
                        n = e.onUserInput,
                        a = e.placeholder,
                        i = Object(w.a)(e, T),
                        r = Object(m.b)().t;
                    return Object(k.jsx)(C, Object(g.a)(Object(g.a)({}, i), {}, {
                        value: t,
                        onChange: function(e) {
                            var t;
                            ("" === (t = e.target.value.replace(/,/g, ".")) || A.test(Object(x.d)(t))) && n(t)
                        },
                        inputMode: "decimal",
                        title: r("Token Amount"),
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: a || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                })),
                E = y.e.div(i || (i = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: ", ";\n"])), (function(e) {
                    return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"
                })),
                I = Object(y.e)(b.i).attrs({
                    variant: "text",
                    scale: "sm"
                })(r || (r = Object(u.a)(["\n  padding: 0 0.5rem;\n"]))),
                P = y.e.div(o || (o = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n"])), (function(e) {
                    return e.theme.colors.text
                })),
                N = y.e.div(s || (s = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: '20px';\n  background-color: ", ";\n  z-index: 1;\n"])), (function(e) {
                    return e.theme.colors.backgroundAlt
                })),
                B = y.e.div(c || (c = Object(u.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"])), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.shadows.inset
                }));

            function R(e) {
                var t, n = e.value,
                    a = e.onUserInput,
                    i = e.onMax,
                    r = e.showMaxButton,
                    o = e.label,
                    s = e.onCurrencySelect,
                    c = e.currency,
                    u = e.disableCurrencySelect,
                    d = void 0 !== u && u,
                    p = e.hideBalance,
                    y = void 0 !== p && p,
                    g = e.pair,
                    w = void 0 === g ? null : g,
                    x = e.otherCurrency,
                    T = e.id,
                    C = e.showCommonBases,
                    A = Object(f.a)().account,
                    R = Object(h.b)(null !== A && void 0 !== A ? A : void 0, null !== c && void 0 !== c ? c : void 0),
                    F = Object(m.b)().t,
                    M = Object(b.ub)(Object(k.jsx)(j.a, {
                        onCurrencySelect: s,
                        selectedCurrency: c,
                        otherSelectedCurrency: x,
                        showCommonBases: C
                    })),
                    U = Object(l.a)(M, 1)[0];
                return Object(k.jsxs)(b.h, {
                    id: T,
                    children: [Object(k.jsxs)(b.A, {
                        mb: "6px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [Object(k.jsx)(I, {
                            className: "open-currency-select-button",
                            selected: !!c,
                            onClick: function() {
                                d || U()
                            },
                            children: Object(k.jsxs)(b.A, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [w ? Object(k.jsx)(v.b, {
                                    currency0: w.token0,
                                    currency1: w.token1,
                                    size: 16,
                                    margin: !0
                                }) : c ? Object(k.jsx)(v.a, {
                                    currency: c,
                                    size: "24px",
                                    style: {
                                        marginRight: "8px"
                                    }
                                }) : null, w ? Object(k.jsxs)(b.eb, {
                                    id: "pair",
                                    bold: !0,
                                    children: [null === w || void 0 === w ? void 0 : w.token0.symbol, ":", null === w || void 0 === w ? void 0 : w.token1.symbol]
                                }) : Object(k.jsx)(b.eb, {
                                    id: "pair",
                                    bold: !0,
                                    children: (c && c.symbol && c.symbol.length > 20 ? "".concat(c.symbol.slice(0, 4), "...").concat(c.symbol.slice(c.symbol.length - 5, c.symbol.length)) : null === c || void 0 === c ? void 0 : c.symbol) || F("Select a currency")
                                }), !d && Object(k.jsx)(b.r, {})]
                            })
                        }), A && Object(k.jsx)(b.eb, {
                            onClick: i,
                            color: "textSubtle",
                            fontSize: "14px",
                            style: {
                                display: "inline",
                                cursor: "pointer"
                            },
                            children: !y && c ? F("Balance: %balance%", {
                                balance: null !== (t = null === R || void 0 === R ? void 0 : R.toSignificant(6)) && void 0 !== t ? t : F("Loading")
                            }) : " -"
                        })]
                    }), Object(k.jsx)(N, {
                        children: Object(k.jsxs)(B, {
                            children: [Object(k.jsx)(P, {
                                children: Object(k.jsx)(O.b, {
                                    children: Object(k.jsx)(S, {
                                        className: "token-amount-input",
                                        value: n,
                                        onUserInput: function(e) {
                                            a(e)
                                        }
                                    })
                                })
                            }), Object(k.jsx)(E, {
                                selected: d,
                                children: A && c && r && "To" !== o && Object(k.jsx)(b.i, {
                                    onClick: i,
                                    scale: "xs",
                                    variant: "secondary",
                                    children: "MAX"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        173: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return o
            }));
            var a = n(0),
                i = n(30);

            function r(e, t) {
                if (0 === t.length) return e;
                var n = Object(i.i)(t);
                if (n) return e.filter((function(e) {
                    return e.address === n
                }));
                var a = t.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }));
                if (0 === a.length) return e;
                var r = function(e) {
                    var t = e.toLowerCase().split(/\s+/).filter((function(e) {
                        return e.length > 0
                    }));
                    return a.every((function(e) {
                        return 0 === e.length || t.some((function(t) {
                            return t.startsWith(e) || t.endsWith(e)
                        }))
                    }))
                };
                return e.filter((function(e) {
                    var t = e.symbol,
                        n = e.name;
                    return t && r(t) || n && r(n)
                }))
            }

            function o(e, t) {
                return Object(a.useMemo)((function() {
                    if (!e) return [];
                    var n = t.toLowerCase().split(/\s+/).filter((function(e) {
                        return e.length > 0
                    }));
                    if (n.length > 1) return e;
                    var a = [],
                        i = [],
                        r = [];
                    return e.map((function(e) {
                        var o, s;
                        return (null === (o = e.symbol) || void 0 === o ? void 0 : o.toLowerCase()) === n[0] ? a.push(e) : (null === (s = e.symbol) || void 0 === s ? void 0 : s.toLowerCase().startsWith(t.toLowerCase().trim())) ? i.push(e) : r.push(e)
                    })), [].concat(a, i, r)
                }), [e, t])
            }
        },
        18: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return o
            }));
            var a, i = n(24);
            ! function(e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(a || (a = {}));
            var r = Object(i.b)("mint/typeInputMint"),
                o = Object(i.b)("mint/resetMintState")
        },
        181: function(e, t, n) {
            "use strict";
            var a, i = n(10),
                r = n(4).e.span(a || (a = Object(i.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"])));
            t.a = r
        },
        182: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return h
            })), n.d(t, "a", (function() {
                return v
            }));
            var a, i, r = n(11),
                o = n(10),
                s = (n(0), n(4)),
                c = n(2),
                l = n(78),
                u = n(35),
                d = n(168),
                p = n(251),
                b = n(1),
                y = function() {
                    var e = Object(c.ub)(Object(b.jsx)(p.a, {})),
                        t = Object(r.a)(e, 1)[0];
                    return Object(b.jsx)(b.Fragment, {
                        children: Object(b.jsx)(c.i, {
                            variant: "text",
                            p: 0,
                            onClick: t,
                            ml: "16px",
                            children: Object(b.jsx)(c.E, {
                                color: "textSubtle",
                                width: "24px"
                            })
                        })
                    })
                },
                m = n(60),
                f = Object(s.e)(c.A)(a || (a = Object(o.a)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"])), (function(e) {
                    return e.theme.colors.cardBorder
                })),
                h = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        a = e.helper,
                        i = e.backTo,
                        o = e.noConfig,
                        s = void 0 !== o && o,
                        p = Object(u.e)(),
                        h = Object(r.a)(p, 1)[0];
                    return Object(b.jsxs)(f, {
                        children: [Object(b.jsxs)(c.A, {
                            alignItems: "center",
                            mr: s ? 0 : "16px",
                            children: [i && Object(b.jsx)(c.F, {
                                as: l.a,
                                to: i,
                                children: Object(b.jsx)(c.c, {
                                    width: "32px"
                                })
                            }), Object(b.jsxs)(c.A, {
                                flexDirection: "column",
                                children: [Object(b.jsx)(c.C, {
                                    as: "h2",
                                    mb: "8px",
                                    children: t
                                }), Object(b.jsxs)(c.A, {
                                    alignItems: "center",
                                    children: [a && Object(b.jsx)(m.a, {
                                        text: a,
                                        mr: "4px",
                                        placement: "top-start"
                                    }), Object(b.jsx)(c.eb, {
                                        color: "textSubtle",
                                        fontSize: "14px",
                                        children: n
                                    })]
                                })]
                            })]
                        }), !s && Object(b.jsxs)(c.A, {
                            alignItems: "center",
                            children: [Object(b.jsx)(c.W, {
                                show: h,
                                children: Object(b.jsx)(d.a, {})
                            }), Object(b.jsx)(y, {})]
                        })]
                    })
                },
                j = Object(s.e)(c.l)(i || (i = Object(o.a)(["\n  border-radius: 24px;\n  max-width: 436px;\n  width: 100%;\n  z-index: 1;\n"])));

            function v(e) {
                var t = e.children;
                return Object(b.jsx)(j, {
                    children: t
                })
            }
        },
        183: function(e, t, n) {
            "use strict";
            var a = n(7),
                i = n(55),
                r = n(49);
            t.a = function(e) {
                var t, n, o = Object(i.g)(null === e || void 0 === e ? void 0 : e.address, !1),
                    s = null === (t = Object(r.c)(o, "totalSupply")) || void 0 === t || null === (n = t.result) || void 0 === n ? void 0 : n[0];
                return e && s ? new a.k(e, s.toString()) : void 0
            }
        },
        188: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            }));
            var a = n(7),
                i = {
                    multiCall: {
                        44: "0x7de04a7596958D44baB52F4e5D0c9e79cB16ef8B",
                        256: "0x04E6966EafD3246e9577F0921b62db1A11657e34"
                    },
                    farmChef: {
                        44: "0xA28cdA09c494EFD480d5Fe4755b50d443cE6A419",
                        256: "0xcA713F138149245e915e67C525B19769dce5c1f9"
                    }
                },
                r = function(e) {
                    return e[44] ? e[44] : e[a.a.MAINNET]
                },
                o = function() {
                    return r(i.multiCall)
                },
                s = function() {
                    return r(i.farmChef)
                }
        },
        191: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(0),
                i = n(25),
                r = n(26),
                o = n(63);

            function s() {
                var e = Object(r.a)().chainId,
                    t = Object(i.c)((function(e) {
                        return e.user.tokens
                    }));
                return Object(a.useMemo)((function() {
                    var n;
                    return e ? Object.values(null !== (n = null === t || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : {}).map(o.c) : []
                }), [t, e])
            }
        },
        199: function(e, t, n) {
            "use strict";
            var a, i = n(9),
                r = n(52),
                o = n(10),
                s = (n(0), n(4)),
                c = n(2),
                l = n(247),
                u = n(200),
                d = n(1),
                p = ["children", "removePadding", "hideFooterOnDesktop"],
                b = s.e.div(a || (a = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: ", ";\n  padding-bottom: 0;\n  min-height: calc(100vh - 64px);\n  background: ", ";\n\n  ", " {\n    background-size: auto;\n  }\n\n  ", " {\n    padding: ", ";\n    padding-bottom: 0;\n  }\n\n  ", " {\n    padding: ", ";\n    padding-bottom: 0;\n    min-height: calc(100vh - 100px);\n  }\n"])), (function(e) {
                    return e.$removePadding ? "0" : "16px"
                }), (function(e) {
                    return e.theme.colors.gradients.bubblegum
                }), (function(e) {
                    return e.theme.mediaQueries.xs
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.$removePadding ? "0" : "24px"
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }), (function(e) {
                    return e.$removePadding ? "0" : "32px"
                }));
            t.a = function(e) {
                var t = e.children,
                    n = e.removePadding,
                    a = void 0 !== n && n,
                    o = e.hideFooterOnDesktop,
                    s = void 0 !== o && o,
                    y = Object(r.a)(e, p);
                return Object(d.jsxs)(d.Fragment, {
                    children: [Object(d.jsx)(u.a, {}), Object(d.jsxs)(b, Object(i.a)(Object(i.a)({
                        $removePadding: a
                    }, y), {}, {
                        children: [t, Object(d.jsx)(c.A, {
                            flexGrow: 1
                        }), Object(d.jsx)(c.h, {
                            display: ["block", null, null, s ? "none" : "block"],
                            width: "100%",
                            children: Object(d.jsx)(l.a, {})
                        })]
                    }))]
                })
            }
        },
        200: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            }));
            var a, i = n(52),
                r = n(9),
                o = n(10),
                s = (n(0), n(4)),
                c = n(23),
                l = n(244),
                u = n(56),
                d = {
                    title: "Snowswap",
                    description: "The most popular AMM on CRAB by user count! ",
                    image: "https://snowswap.xyz/images/hero.png"
                },
                p = n(2),
                b = n(1),
                y = ["children"],
                m = function(e) {
                    var t = e.children,
                        n = Object(i.a)(e, y);
                    return Object(b.jsx)(p.h, Object(r.a)(Object(r.a)({
                        px: ["16px", "24px"],
                        mx: "auto",
                        maxWidth: "1200px"
                    }, n), {}, {
                        children: t
                    }))
                },
                f = ["children", "symbol"],
                h = Object(s.e)(m)(a || (a = Object(o.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                j = function(e) {
                    var t = e.symbol,
                        n = Object(c.b)().t,
                        a = function(e, t) {
                            switch (e.startsWith("/swap") ? "/swap" : e.startsWith("/add") ? "/add" : e.startsWith("/remove") ? "/remove" : e.startsWith("/teams") ? "/teams" : e.startsWith("/voting/proposal") && "/voting/proposal/create" !== e ? "/voting/proposal" : e.startsWith("/nfts/collections") ? "/nfts/collections" : e.startsWith("/nfts/profile") ? "/nfts/profile" : e.startsWith("/pancake-squad") ? "/pancake-squad" : e) {
                                case "/":
                                    return {
                                        title: "".concat(t("Home"), " | ").concat(t("Snowswap"))
                                    };
                                case "/swap":
                                    return {
                                        title: "".concat(t("Exchange"), " | ").concat(t("Snowswap"))
                                    };
                                case "/add":
                                    return {
                                        title: "".concat(t("Add Liquidity"), " | ").concat(t("Snowswap"))
                                    };
                                case "/remove":
                                    return {
                                        title: "".concat(t("Remove Liquidity"), " | ").concat(t("Snowswap"))
                                    };
                                case "/liquidity":
                                    return {
                                        title: "".concat(t("Liquidity"), " | ").concat(t("Snowswap"))
                                    };
                                case "/find":
                                    return {
                                        title: "".concat(t("Import Pool"), " | ").concat(t("Snowswap"))
                                    };
                                case "/farms":
                                    return {
                                        title: "".concat(t("Farms"), " | ").concat(t("Snowswap"))
                                    };
                                case "/farms/auction":
                                    return {
                                        title: "".concat(t("Farm Auctions"), " | ").concat(t("Snowswap"))
                                    };
                                case "/pools":
                                    return {
                                        title: "".concat(t("Pools"), " | ").concat(t("Snowswap"))
                                    };
                                default:
                                    return null
                            }
                        }(Object(u.g)().pathname, n) || {},
                        i = Object(r.a)(Object(r.a)({}, d), a),
                        o = i.title,
                        s = i.description,
                        p = i.image,
                        y = o;
                    return t && (y = [t, o].join(" - ")), Object(b.jsxs)(l.a, {
                        children: [Object(b.jsx)("title", {
                            children: y
                        }), Object(b.jsx)("meta", {
                            property: "og:title",
                            content: o
                        }), Object(b.jsx)("meta", {
                            property: "og:description",
                            content: s
                        }), Object(b.jsx)("meta", {
                            property: "og:image",
                            content: p
                        })]
                    })
                };
            t.b = function(e) {
                var t = e.children,
                    n = e.symbol,
                    a = Object(i.a)(e, f);
                return Object(b.jsxs)(b.Fragment, {
                    children: [Object(b.jsx)(j, {
                        symbol: n
                    }), Object(b.jsx)(h, Object(r.a)(Object(r.a)({}, a), {}, {
                        children: t
                    }))]
                })
            }
        },
        21: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "c", (function() {
                return y
            }));
            var a, i, r, o, s, c = n(10),
                l = n(4),
                u = n(2),
                d = Object(l.e)(u.h)(a || (a = Object(c.a)(["\n  width: ", ";\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), (function(e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function(e) {
                    var t = e.align;
                    return null !== t && void 0 !== t ? t : "center"
                }), (function(e) {
                    var t = e.justify;
                    return null !== t && void 0 !== t ? t : "flex-start"
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                p = Object(l.e)(d)(i || (i = Object(c.a)(["\n  justify-content: space-between;\n"]))),
                b = (l.e.div(r || (r = Object(c.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))), Object(l.e)(d)(o || (o = Object(c.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"])), (function(e) {
                    var t = e.gap;
                    return t && "-".concat(t)
                }), (function(e) {
                    var t = e.justify;
                    return t && t
                }), (function(e) {
                    return e.gap
                }))),
                y = Object(l.e)(d)(s || (s = Object(c.a)(["\n  width: fit-content;\n  margin: ", ";\n"])), (function(e) {
                    var t = e.gap;
                    return t && "-".concat(t)
                }));
            t.d = d
        },
        215: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n(5),
                i = n.n(a),
                r = n(9),
                o = n(40),
                s = n(31),
                c = n(0),
                l = n(35),
                u = n(95);

            function d() {
                var e = Object(l.f)();
                return {
                    callWithGasPrice: Object(c.useCallback)(function() {
                        var t = Object(s.a)(i.a.mark((function t(n, a) {
                            var s, c, l, d, p, b = arguments;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return s = b.length > 2 && void 0 !== b[2] ? b[2] : [], c = b.length > 3 && void 0 !== b[3] ? b[3] : null, l = Object(u.get)(n, a), d = null === c || void 0 === c ? void 0 : c.gasPrice, t.next = 6, l.apply(void 0, Object(o.a)(s).concat([d ? Object(r.a)({}, c) : Object(r.a)(Object(r.a)({}, c), {}, {
                                            gasPrice: e
                                        })]));
                                    case 6:
                                        return p = t.sent, t.abrupt("return", p);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }(), [e])
                }
            }
        },
        217: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(0),
                i = n(25),
                r = n(49),
                o = n(55);

            function s() {
                var e = Object(i.c)((function(e) {
                        return e.user.userDeadline
                    })),
                    t = function() {
                        var e, t, n = Object(o.e)();
                        return null === (e = Object(r.c)(n, "getCurrentBlockTimestamp")) || void 0 === e || null === (t = e.result) || void 0 === t ? void 0 : t[0]
                    }();
                return Object(a.useMemo)((function() {
                    if (t && e) return t.add(e)
                }), [t, e])
            }
        },
        224: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n(0);

            function i(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = Object(a.useRef)();
                Object(a.useEffect)((function() {
                    i.current = e
                }), [e]), Object(a.useEffect)((function() {
                    function e() {
                        var e = i.current;
                        e && e()
                    }
                    if (null !== t) {
                        n && e();
                        var a = setInterval(e, t);
                        return function() {
                            return clearInterval(a)
                        }
                    }
                }), [t, n])
            }
        },
        225: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(11),
                i = n(0),
                r = "visibilityState" in document;

            function o() {
                return !r || "visible" === document.visibilityState
            }

            function s() {
                var e = Object(i.useState)(o()),
                    t = Object(a.a)(e, 2),
                    n = t[0],
                    s = t[1];
                return Object(i.useEffect)((function() {
                    if (r) {
                        var e = function() {
                            s(o())
                        };
                        return document.addEventListener("visibilitychange", e),
                            function() {
                                document.removeEventListener("visibilitychange", e)
                            }
                    }
                }), [s]), n
            }
        },
        226: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            var a = n(24),
                i = Object(a.d)({
                    name: "Block",
                    initialState: {
                        currentBlock: 0,
                        initialBlock: 0
                    },
                    reducers: {
                        setBlock: function(e, t) {
                            0 === e.initialBlock && (e.initialBlock = t.payload), e.currentBlock = t.payload
                        }
                    }
                }),
                r = i.actions.setBlock;
            t.a = i.reducer
        },
        227: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"blockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryAggregate","outputs":[{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"requireSuccess","type":"bool"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall2.Call[]","name":"calls","type":"tuple[]"}],"name":"tryBlockAndAggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"blockHash","type":"bytes32"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct Multicall2.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]')
        },
        228: function(e) {
            e.exports = JSON.parse('[{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"stakeWithPermit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        23: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            })), n.d(t, "b", (function() {
                return h
            }));
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(9),
                s = n(11),
                c = n(0),
                l = n(91),
                u = n(405),
                d = n(125),
                p = n(1),
                b = {
                    isFetching: !0,
                    currentLanguage: l.a
                },
                y = new Map;
            y.set(l.a.locale, u);
            var m = Object(c.createContext)(void 0),
                f = function(e) {
                    var t = e.children,
                        n = Object(c.useState)((function() {
                            var e = Object(d.c)();
                            return Object(o.a)(Object(o.a)({}, b), {}, {
                                currentLanguage: l.c[e]
                            })
                        })),
                        a = Object(s.a)(n, 2),
                        u = a[0],
                        f = a[1],
                        h = u.currentLanguage;
                    Object(c.useEffect)((function() {
                        (function() {
                            var e = Object(r.a)(i.a.mark((function e() {
                                var t, n, a;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((t = Object(d.c)()) === l.a.locale) {
                                                e.next = 7;
                                                break
                                            }
                                            return n = y.get(l.a.locale), e.next = 5, Object(d.b)(t);
                                        case 5:
                                            a = e.sent, y.set(t, Object(o.a)(Object(o.a)({}, n), a));
                                        case 7:
                                            f((function(e) {
                                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                                    isFetching: !1
                                                })
                                            }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [f]);
                    var j = function() {
                            var e = Object(r.a)(i.a.mark((function e(t) {
                                var n, a;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (y.has(t.locale)) {
                                                e.next = 11;
                                                break
                                            }
                                            return f((function(e) {
                                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                                    isFetching: !0
                                                })
                                            })), e.next = 4, Object(d.b)(t.locale);
                                        case 4:
                                            n = e.sent, a = y.get(l.a.locale), y.set(t.locale, Object(o.a)(Object(o.a)({}, a), n)), localStorage.setItem(d.a, t.locale), f((function(e) {
                                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                                    isFetching: !1,
                                                    currentLanguage: t
                                                })
                                            })), e.next = 13;
                                            break;
                                        case 11:
                                            localStorage.setItem(d.a, t.locale), f((function(e) {
                                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                                    isFetching: !1,
                                                    currentLanguage: t
                                                })
                                            }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        v = Object(c.useCallback)((function(e, t) {
                            var n = (y.has(h.locale) ? y.get(h.locale) : y.get(l.a.locale))[e] || e;
                            if (n.match(/%\S+?%/gm) && t) {
                                var a = n;
                                return Object.keys(t).forEach((function(e) {
                                    var n = new RegExp("%".concat(e, "%"), "g");
                                    a = a.replace(n, t[e].toString())
                                })), a
                            }
                            return n
                        }), [h]);
                    return Object(p.jsx)(m.Provider, {
                        value: Object(o.a)(Object(o.a)({}, u), {}, {
                            setLanguage: j,
                            t: v
                        }),
                        children: t
                    })
                },
                h = function() {
                    var e = Object(c.useContext)(m);
                    if (void 0 === e) throw new Error("Language context is undefined");
                    return e
                }
        },
        230: function(e, t, n) {
            "use strict";
            var a = n(130),
                i = n(150),
                r = n(298);
            n.d(t, "a", (function() {
                return r
            }));
            var o = new a.b(i);
            new a.b(r);
            t.b = o
        },
        231: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n(313),
                i = n.n(a),
                r = n(258),
                o = n(259);
            var s = new TextDecoder;

            function c(e) {
                var t = function(e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16);
                        return t
                    }(e),
                    n = Object(r.getCodec)(t);
                switch (n) {
                    case "ipfs-ns":
                        var a = Object(r.rmPrefix)(t),
                            c = new i.a(a);
                        return "ipfs://".concat(Object(o.toB58String)(c.multihash));
                    case "ipns-ns":
                        var l = Object(r.rmPrefix)(t),
                            u = new i.a(l),
                            d = Object(o.decode)(u.multihash);
                        return "identity" === d.name ? "ipns://".concat(s.decode(d.digest).trim()) : "ipns://".concat(Object(o.toB58String)(u.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(n))
                }
            }
        },
        235: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            }));
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(112),
                s = n(161),
                c = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t, n;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t = window.ethereum)) {
                                        e.next = 15;
                                        break
                                    }
                                    return n = parseInt("44", 10), e.prev = 3, e.next = 6, t.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: "0x".concat(n.toString(16)),
                                            chainName: "Crab Network Mainnet",
                                            nativeCurrency: {
                                                name: "CRAB",
                                                symbol: "crab",
                                                decimals: 18
                                            },
                                            rpcUrls: s.b,
                                            blockExplorerUrls: ["".concat(o.a, "/")]
                                        }]
                                    });
                                case 6:
                                    return e.abrupt("return", !0);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(3), console.error("Failed to setup the network in Metamask:", e.t0), e.abrupt("return", !1);
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    return console.error("Can't setup the CRAB network on metamask because window.ethereum is undefined"), e.abrupt("return", !1);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n, a) {
                        var r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, window.ethereum.request({
                                        method: "wallet_watchAsset",
                                        params: {
                                            type: "ERC20",
                                            options: {
                                                address: t,
                                                symbol: n,
                                                decimals: a,
                                                image: "".concat(o.c, "/images/tokens/").concat(t, ".png")
                                            }
                                        }
                                    });
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        241: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(242);
            t.a = function() {
                var e = Object(a.useContext)(i.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        242: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            }));
            var a = n(5),
                i = n.n(a),
                r = n(31),
                o = n(11),
                s = n(0),
                c = n.n(s),
                l = n(1),
                u = c.a.createContext({
                    slow: 0,
                    fast: 0
                }),
                d = function(e) {
                    var t = e.children,
                        n = Object(s.useState)(0),
                        a = Object(o.a)(n, 2),
                        c = a[0],
                        d = a[1],
                        p = Object(s.useState)(0),
                        b = Object(o.a)(p, 2),
                        y = b[0],
                        m = b[1],
                        f = function() {
                            var e = Object(s.useRef)(!0);
                            return Object(s.useEffect)((function() {
                                var t = function() {
                                    e.current = !document.hidden
                                };
                                return window.addEventListener("visibilitychange", t),
                                    function() {
                                        window.removeEventListener("visibilitychange", t)
                                    }
                            }), []), e
                        }();
                    return Object(s.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f.current && m((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), [f]), Object(s.useEffect)((function() {
                        var e = setInterval(Object(r.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f.current && d((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), [f]), Object(l.jsx)(u.Provider, {
                        value: {
                            slow: c,
                            fast: y
                        },
                        children: t
                    })
                }
        },
        243: function(e, t, n) {
            "use strict";
            var a = n(0);
            t.a = function(e) {
                var t = Object(a.useRef)();
                return Object(a.useEffect)((function() {
                    t.current = e
                }), [e]), t.current
            }
        },
        245: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            }));
            var a, i = n(11),
                r = n(10),
                o = (n(0), n(2)),
                s = n(4),
                c = n(21),
                l = n(29),
                u = n(46),
                d = n(26),
                p = n(30),
                b = n(48),
                y = n(42),
                m = n(1),
                f = s.e.div(a || (a = Object(r.a)(["\n  padding: 8px 0;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  background-color: ", ";\n  text-align: center;\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                h = function(e) {
                    var t = e.currencies,
                        n = e.onDismiss,
                        a = Object(d.a)().chainId,
                        i = a && t ? t.map((function(e) {
                            return Object(b.b)(e, a)
                        })) : [],
                        r = Object(y.h)();
                    return Object(m.jsx)(o.O, {
                        title: "Unsupported Assets",
                        maxWidth: "420px",
                        onDismiss: n,
                        children: Object(m.jsxs)(l.a, {
                            gap: "lg",
                            children: [i.map((function(e) {
                                var t;
                                return e && r && Object.keys(r).includes(e.address) && Object(m.jsxs)(l.a, {
                                    gap: "10px",
                                    children: [Object(m.jsxs)(c.a, {
                                        gap: "5px",
                                        align: "center",
                                        children: [Object(m.jsx)(u.a, {
                                            currency: e,
                                            size: "24px"
                                        }), Object(m.jsx)(o.eb, {
                                            children: e.symbol
                                        })]
                                    }), a && Object(m.jsx)(o.H, {
                                        external: !0,
                                        small: !0,
                                        color: "primaryDark",
                                        href: Object(p.e)(e.address, "address", a),
                                        children: e.address
                                    })]
                                }, null === (t = e.address) || void 0 === t ? void 0 : t.concat("not-supported"))
                            })), Object(m.jsx)(l.a, {
                                gap: "lg",
                                children: Object(m.jsx)(o.eb, {
                                    children: "Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons."
                                })
                            })]
                        })
                    })
                };

            function j(e) {
                var t = e.currencies,
                    n = Object(o.ub)(Object(m.jsx)(h, {
                        currencies: t
                    })),
                    a = Object(i.a)(n, 1)[0];
                return Object(m.jsx)(f, {
                    children: Object(m.jsx)(o.i, {
                        variant: "text",
                        onClick: a,
                        children: "Read more about unsupported assets"
                    })
                })
            }
        },
        246: function(e, t, n) {
            "use strict";
            var a = n(9),
                i = n(11),
                r = n(52),
                o = n(0),
                s = n(2),
                c = n(1),
                l = ["srcs", "alt"],
                u = {};
            t.a = function(e) {
                var t = e.srcs,
                    n = e.alt,
                    d = Object(r.a)(e, l),
                    p = Object(o.useState)(0),
                    b = Object(i.a)(p, 2)[1],
                    y = t.find((function(e) {
                        return !u[e]
                    }));
                return y ? Object(c.jsx)("img", Object(a.a)(Object(a.a)({}, d), {}, {
                    alt: n,
                    src: y,
                    onError: function() {
                        y && (u[y] = !0), b((function(e) {
                            return e + 1
                        }))
                    }
                })) : Object(c.jsx)(s.D, Object(a.a)({}, d))
            }
        },
        247: function(e, t, n) {
            "use strict";
            var a, i, r = n(10),
                o = (n(0), n(4)),
                s = n(2),
                c = n(23),
                l = n(1),
                u = o.e.div(a || (a = Object(r.a)(["\n  width: 100%;\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  padding-top: 16px;\n  padding-right: ", ";\n  ", " {\n    justify-content: space-between;\n    flex-direction: ", ";\n  }\n"])), (function(e) {
                    return e.$isSide ? "100%" : "auto"
                }), (function(e) {
                    return e.$isSide ? "32px" : "0px"
                }), (function(e) {
                    return e.theme.mediaQueries.md
                }), (function(e) {
                    return e.$isSide ? "column" : "row"
                }));
            Object(o.e)(s.A)(i || (i = Object(r.a)(["\n  svg {\n    fill: ", ";\n    transition: background-color 0.2s, opacity 0.2s;\n  }\n  &:hover {\n    svg {\n      opacity: 0.65;\n    }\n  }\n  &:active {\n    svg {\n      opacity: 0.85;\n    }\n  }\n"])), (function(e) {
                return e.theme.colors.textSubtle
            }));
            t.a = function(e) {
                var t = e.variant,
                    n = void 0 === t ? "default" : t,
                    a = Object(c.b)().t,
                    i = "side" === n;
                return Object(l.jsxs)(u, {
                    $isSide: i,
                    children: [Object(l.jsxs)(s.A, {
                        flexDirection: i ? "column" : ["column", "column", "row"],
                        alignItems: "center",
                        children: [Object(l.jsx)(s.I, {
                            id: "darwiniaBridge",
                            href: "https://docs.darwinia.network/tutorials/wiki-tut-wormhole",
                            ml: [0, 0, "40px"],
                            mt: ["20px", "20px", i ? "20px" : 0],
                            mb: ["8px", "8px", 0],
                            children: a("How to use Wormhole Bridger (xRING, KTON)")
                        }), Object(l.jsx)(s.I, {
                            id: "darwiniaBridge",
                            href: "https://cbridge.celer.network/",
                            ml: [0, 0, "40px"],
                            mt: ["20px", "20px", i ? "20px" : 0],
                            mb: ["8px", "8px", 0],
                            children: a("How to use Celer cBridge (USDC, USDT)")
                        })]
                    }), i && Object(l.jsx)(s.A, {
                        flexGrow: 1
                    }), Object(l.jsx)(s.h, {
                        height: 100,
                        width: 10
                    })]
                })
            }
        },
        248: function(e, t, n) {
            "use strict";
            var a = n(11),
                i = n(0),
                r = n(2),
                o = n(29),
                s = n(35),
                c = n(30),
                l = n(137),
                u = n(26),
                d = n(59),
                p = n(46),
                b = n(23),
                y = n(1);
            t.a = function(e) {
                var t = e.tokens,
                    n = e.handleCurrencySelect,
                    m = Object(u.a)().chainId,
                    f = Object(b.b)().t,
                    h = Object(i.useState)(!1),
                    j = Object(a.a)(h, 2),
                    v = j[0],
                    O = j[1],
                    g = Object(s.b)(),
                    w = Object(d.e)();
                return Object(y.jsxs)(o.a, {
                    gap: "lg",
                    children: [Object(y.jsx)(r.M, {
                        variant: "warning",
                        children: Object(y.jsxs)(r.eb, {
                            children: [f("Anyone can create a ERC20 token on CRAB with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."), Object(y.jsx)("br", {}), Object(y.jsx)("br", {}), f("If you purchase an arbitrary token, you may be unable to sell it back.")]
                        })
                    }), t.map((function(e) {
                        var t, n, a = m && (null === w || void 0 === w || null === (t = w[m]) || void 0 === t || null === (n = t[e.address]) || void 0 === n ? void 0 : n.list),
                            i = e.address ? "".concat(Object(l.a)(e.address)) : null;
                        return Object(y.jsxs)(r.B, {
                            gridTemplateRows: "1fr 1fr 1fr",
                            gridGap: "4px",
                            children: [void 0 !== a ? Object(y.jsxs)(r.db, {
                                variant: "success",
                                outline: !0,
                                scale: "sm",
                                startIcon: a.logoURI && Object(y.jsx)(p.c, {
                                    logoURI: a.logoURI,
                                    size: "12px"
                                }),
                                children: [f("via"), " ", a.name]
                            }) : Object(y.jsx)(r.db, {
                                variant: "failure",
                                outline: !0,
                                scale: "sm",
                                startIcon: Object(y.jsx)(r.y, {
                                    color: "failure"
                                }),
                                children: f("Unknown Source")
                            }), Object(y.jsxs)(r.A, {
                                alignItems: "center",
                                children: [Object(y.jsx)(r.eb, {
                                    mr: "8px",
                                    children: e.name
                                }), Object(y.jsxs)(r.eb, {
                                    children: ["(", e.symbol, ")"]
                                })]
                            }), m && Object(y.jsxs)(r.A, {
                                justifyContent: "space-between",
                                width: "100%",
                                children: [Object(y.jsx)(r.eb, {
                                    mr: "4px",
                                    children: i
                                }), Object(y.jsxs)(r.H, {
                                    href: Object(c.e)(e.address, "address", m),
                                    external: !0,
                                    children: ["(", f("View on Subview"), ")"]
                                })]
                            })]
                        }, e.address)
                    })), Object(y.jsxs)(r.A, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(y.jsxs)(r.A, {
                            alignItems: "center",
                            onClick: function() {
                                return O(!v)
                            },
                            children: [Object(y.jsx)(r.o, {
                                scale: "sm",
                                name: "confirmed",
                                type: "checkbox",
                                checked: v,
                                onChange: function() {
                                    return O(!v)
                                }
                            }), Object(y.jsx)(r.eb, {
                                ml: "8px",
                                style: {
                                    userSelect: "none"
                                },
                                children: f("I understand")
                            })]
                        }), Object(y.jsx)(r.i, {
                            variant: "danger",
                            disabled: !v,
                            onClick: function() {
                                t.map((function(e) {
                                    return g(e)
                                })), n && n(t[0])
                            },
                            className: ".token-dismiss-button",
                            children: f("Import")
                        })]
                    })]
                })
            }
        },
        249: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(7),
                i = n(34);

            function r(e) {
                if (e) return e.currency === a.d ? a.e.greaterThan(e.raw, i.o) ? a.c.ether(a.e.subtract(e.raw, i.o)) : a.c.ether(a.e.BigInt(0)) : e
            }
        },
        251: function(e, t, n) {
            "use strict";
            var a, i, r = n(0),
                o = n(26),
                s = n(25),
                c = n(2),
                l = n(23),
                u = n(95),
                d = n(82),
                p = n(76),
                b = n(21),
                y = n(10),
                m = n(4),
                f = n(30),
                h = n(167),
                j = n(1),
                v = m.e.div(a || (a = Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                O = m.e.div(i || (i = Object(y.a)(["\n  color: ", ";\n"])), (function(e) {
                    var t = e.pending,
                        n = e.success,
                        a = e.theme;
                    return t ? a.colors.primary : n ? a.colors.success : a.colors.failure
                }));

            function g(e) {
                var t, n, a = e.tx,
                    i = Object(o.a)().chainId,
                    r = null === a || void 0 === a ? void 0 : a.summary,
                    s = !(null === a || void 0 === a ? void 0 : a.receipt),
                    l = !s && a && (1 === (null === (t = a.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof(null === (n = a.receipt) || void 0 === n ? void 0 : n.status));
                return i ? Object(j.jsxs)(v, {
                    pending: s,
                    success: l,
                    children: [Object(j.jsx)(c.I, {
                        href: Object(f.e)(a.hash, "transaction", i),
                        children: null !== r && void 0 !== r ? r : a.hash
                    }), Object(j.jsx)(O, {
                        pending: s,
                        success: l,
                        children: s ? Object(j.jsx)(h.a, {}) : l ? Object(j.jsx)(c.q, {
                            color: "success"
                        }) : Object(j.jsx)(c.u, {
                            color: "failure"
                        })
                    })]
                }) : null
            }
            var w = n(131);

            function x(e) {
                return Object(j.jsx)(c.A, {
                    flexDirection: "column",
                    children: e.map((function(e) {
                        return Object(j.jsx)(g, {
                            tx: e
                        }, e.hash + e.addedTime)
                    }))
                })
            }
            t.a = function(e) {
                var t = e.onDismiss,
                    n = Object(o.a)(),
                    a = n.account,
                    i = n.chainId,
                    y = Object(s.b)(),
                    m = Object(d.b)(),
                    f = Object(l.b)().t,
                    h = Object(u.orderBy)(Object.values(m).filter(d.a), "addedTime", "desc"),
                    v = h.filter((function(e) {
                        return !e.receipt
                    })),
                    O = h.filter((function(e) {
                        return e.receipt
                    })),
                    g = Object(r.useCallback)((function() {
                        i && y(Object(p.c)({
                            chainId: i
                        }))
                    }), [y, i]);
                return Object(j.jsx)(c.O, {
                    title: f("Recent Transactions"),
                    headerBackground: "gradients.cardHeader",
                    onDismiss: t,
                    children: a ? Object(j.jsx)(c.Q, {
                        children: v.length || O.length ? Object(j.jsxs)(j.Fragment, {
                            children: [Object(j.jsxs)(b.a, {
                                mb: "1rem",
                                style: {
                                    justifyContent: "space-between"
                                },
                                children: [Object(j.jsx)(c.eb, {
                                    children: f("Recent Transactions")
                                }), Object(j.jsx)(c.i, {
                                    variant: "tertiary",
                                    scale: "xs",
                                    onClick: g,
                                    children: f("clear all")
                                })]
                            }), x(v), x(O)]
                        }) : Object(j.jsx)(c.eb, {
                            children: f("No recent transactions")
                        })
                    }) : Object(j.jsx)(w.a, {})
                })
            }
        },
        252: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n(0),
                i = n(231),
                r = n(163),
                o = n(143),
                s = n(74),
                c = n(49),
                l = n(119),
                u = n(55);

            function d(e) {
                var t = Object(a.useMemo)((function() {
                        return e ? Object(r.a)(e) : void 0
                    }), [e]),
                    n = function(e) {
                        var t, n, i, r = Object(a.useMemo)((function() {
                                if (!e) return [void 0];
                                try {
                                    return e ? [Object(s.namehash)(e)] : [void 0]
                                } catch (t) {
                                    return [void 0]
                                }
                            }), [e]),
                            o = Object(u.b)(!1),
                            d = Object(c.c)(o, "resolver", r),
                            p = null === (t = d.result) || void 0 === t ? void 0 : t[0],
                            b = Object(u.c)(p && Object(l.a)(p) ? void 0 : p, !1),
                            y = Object(c.c)(b, "contenthash", r);
                        return {
                            contenthash: null !== (n = null === (i = y.result) || void 0 === i ? void 0 : i[0]) && void 0 !== n ? n : null,
                            loading: d.loading || y.loading
                        }
                    }(null === t || void 0 === t ? void 0 : t.ensName);
                return Object(a.useMemo)((function() {
                    return t ? n.contenthash ? Object(o.a)(Object(i.a)(n.contenthash)) : [] : e ? Object(o.a)(e) : []
                }), [t, n.contenthash, e])
            }
        },
        26: function(e, t, n) {
            "use strict";
            var a = n(9),
                i = n(11),
                r = n(52),
                o = n(0),
                s = n(73),
                c = n(101),
                l = ["library", "chainId"];
            t.a = function() {
                var e = Object(s.c)(),
                    t = e.library,
                    n = e.chainId,
                    u = Object(r.a)(e, l),
                    d = Object(o.useRef)(t),
                    p = Object(o.useState)(t || c.a),
                    b = Object(i.a)(p, 2),
                    y = b[0],
                    m = b[1];
                return Object(o.useEffect)((function() {
                    t !== d.current && (m(t || c.a), d.current = t)
                }), [t]), Object(a.a)({
                    library: y,
                    chainId: null !== n && void 0 !== n ? n : parseInt("44", 10)
                }, u)
            }
        },
        279: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            }));
            var a, i = n(24);
            ! function(e) {
                e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(a || (a = {}));
            var r = Object(i.b)("burn/typeInputBurn")
        },
        29: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            }));
            var a, i, r, o = n(10),
                s = n(4),
                c = s.e.div(a || (a = Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),
                l = Object(s.e)(c)(i || (i = Object(o.a)(["\n  width: 100%;\n  align-items: center;\n"]))),
                u = s.e.div(r || (r = Object(o.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])), (function(e) {
                    var t = e.gap;
                    return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
                }), (function(e) {
                    var t = e.justify;
                    return t && t
                }));
            t.c = c
        },
        298: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        30: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return p
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "a", (function() {
                return m
            })), n.d(t, "c", (function() {
                return f
            })), n.d(t, "g", (function() {
                return h
            })), n.d(t, "f", (function() {
                return j
            })), n.d(t, "h", (function() {
                return v
            })), n.d(t, "d", (function() {
                return O
            })), n.d(t, "j", (function() {
                return g
            }));
            var a = n(93),
                i = n(36),
                r = n(297),
                o = n(45),
                s = n(388),
                c = n(7),
                l = n(34),
                u = n(112),
                d = n(101);

            function p(e) {
                try {
                    return Object(i.getAddress)(e)
                } catch (t) {
                    return !1
                }
            }

            function b(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.a.MAINNET;
                switch (t) {
                    case "transaction":
                        return "".concat(u.b[n], "/tx/").concat(e);
                    case "token":
                        return "".concat(u.b[n], "/token/").concat(e);
                    case "block":
                        return "".concat(u.b[n], "/block/").concat(e);
                    case "countdown":
                        return "".concat(u.b[n], "/block/countdown/").concat(e);
                    default:
                        return "".concat(u.b[n], "/address/").concat(e)
                }
            }

            function y(e) {
                return e.mul(o.a.from(1e4).add(o.a.from(1e3))).div(o.a.from(1e4))
            }

            function m(e) {
                return new c.g(c.e.BigInt(e), c.e.BigInt(1e4))
            }

            function f(e, t) {
                if (t < 0 || t > 1e4) throw Error("Unexpected slippage value: ".concat(t));
                return [c.e.divide(c.e.multiply(e.raw, c.e.BigInt(1e4 - t)), c.e.BigInt(1e4)), c.e.divide(c.e.multiply(e.raw, c.e.BigInt(1e4 + t)), c.e.BigInt(1e4))]
            }

            function h(e, t) {
                return t ? function(e, t) {
                    return e.getSigner(t).connectUnchecked()
                }(e, t) : e
            }

            function j(e, t, n) {
                if (!p(e) || e === r.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new a.b(e, t, null !== n && void 0 !== n ? n : d.a)
            }

            function v(e, t, n) {
                return j(l.t, s.a, h(t, n))
            }

            function O(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }

            function g(e, t) {
                var n;
                return t === c.d || Boolean(t instanceof c.j && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address]))
            }
        },
        311: function(e) {
            e.exports = JSON.parse('{"name":"Snow Swap Default List","timestamp":"2021-05-06T00:00:00Z","version":{"major":3,"minor":0,"patch":0},"tags":{},"logoURI":"https://snowswap.xyz/logo.png","keywords":["snowswap","default"],"tokens":[{"name":"WCRAB Token","symbol":"WCRAB","address":"0xF436Ae756f46F2ac547A870c71898eA5915F2F9E","chainId":256,"decimals":18,"logoURI":"/images/tokens/0xF436Ae756f46F2ac547A870c71898eA5915F2F9E.svg"},{"name":"Darwinia Network Native Token","symbol":"xRING","address":"0xc8F2eC4c01AD7cDF27431983546da0c35E40237c","chainId":256,"decimals":18,"logoURI":"/images/tokens/0xc8F2eC4c01AD7cDF27431983546da0c35E40237c.svg"},{"name":"WCRAB Token","symbol":"WCRAB","address":"0x2d2b97ea380b0185e9fdf8271d1afb5d2bf18329","chainId":44,"decimals":18,"logoURI":"/images/tokens/0x2d2b97ea380b0185e9fdf8271d1afb5d2bf18329.svg"},{"name":"Darwinia Network Native Token (From Darwinia Network)","symbol":"xRING","address":"0x7399Ea6C9d35124d893B8d9808930e9d3F211501","chainId":44,"decimals":9,"logoURI":"/images/tokens/0x7399Ea6C9d35124d893B8d9808930e9d3F211501.svg"},{"name":"Wrapped CKTON","symbol":"WCKTON","address":"0x159933C635570D5042723359fbD1619dFe83D3f3","chainId":44,"decimals":18,"logoURI":"/images/tokens/0x159933C635570D5042723359fbD1619dFe83D3f3.svg"},{"name":"cBridge - USD Coin","symbol":"USDT","address":"0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98","chainId":44,"decimals":6,"logoURI":"/images/tokens/0x159933C635570D5042723359fbD1619dFe83D3f3.svg"},{"name":"cBridge - USD Coin","symbol":"USDC","address":"0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c","chainId":44,"decimals":6,"logoURI":"/images/tokens/0x159933C635570D5042723359fbD1619dFe83D3f3.svg"}]}')
        },
        317: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return J
            }));
            var a = n(5),
                i = n.n(a),
                r = n(40),
                o = n(31),
                s = n(9),
                c = n(16),
                l = n(11),
                u = n(0),
                d = n(45),
                p = n(7),
                b = n(2),
                y = n(123),
                m = n(23),
                f = n(245),
                h = n(26),
                j = n(25),
                v = n(89),
                O = n(29),
                g = n(152),
                w = n(171),
                x = n(46),
                k = n(182),
                T = n(323),
                C = n(21),
                A = n(131),
                S = n(34),
                E = n(106),
                I = n(42),
                P = n(51),
                N = n(217),
                B = n(18),
                R = n(183),
                F = n(48),
                M = n(85),
                U = n(79),
                D = p.e.BigInt(0);

            function L() {
                return Object(j.c)((function(e) {
                    return e.mint
                }))
            }
            var Y = n(82),
                K = n(35),
                _ = n(30),
                W = n(249),
                z = n(181),
                q = n(1);
            var V = function(e) {
                    var t, n, a, i, r, o, s, c, l = e.noLiquidity,
                        u = e.price,
                        d = e.currencies,
                        p = e.parsedAmounts,
                        y = e.poolTokenPercentage,
                        f = e.onAdd,
                        h = Object(m.b)().t;
                    return Object(q.jsxs)(q.Fragment, {
                        children: [Object(q.jsxs)(C.b, {
                            children: [Object(q.jsx)(b.eb, {
                                children: h("%asset% Deposited", {
                                    asset: null === (t = d[B.a.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol
                                })
                            }), Object(q.jsxs)(C.c, {
                                children: [Object(q.jsx)(x.a, {
                                    currency: d[B.a.CURRENCY_A],
                                    style: {
                                        marginRight: "8px"
                                    }
                                }), Object(q.jsx)(b.eb, {
                                    children: null === (n = p[B.a.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(6)
                                })]
                            })]
                        }), Object(q.jsxs)(C.b, {
                            children: [Object(q.jsx)(b.eb, {
                                children: h("%asset% Deposited", {
                                    asset: null === (a = d[B.a.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol
                                })
                            }), Object(q.jsxs)(C.c, {
                                children: [Object(q.jsx)(x.a, {
                                    currency: d[B.a.CURRENCY_B],
                                    style: {
                                        marginRight: "8px"
                                    }
                                }), Object(q.jsx)(b.eb, {
                                    children: null === (i = p[B.a.CURRENCY_B]) || void 0 === i ? void 0 : i.toSignificant(6)
                                })]
                            })]
                        }), Object(q.jsxs)(C.b, {
                            children: [Object(q.jsx)(b.eb, {
                                children: h("Rates")
                            }), Object(q.jsx)(b.eb, {
                                children: "1 ".concat(null === (r = d[B.a.CURRENCY_A]) || void 0 === r ? void 0 : r.symbol, " = ").concat(null === u || void 0 === u ? void 0 : u.toSignificant(4), " ").concat(null === (o = d[B.a.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol)
                            })]
                        }), Object(q.jsx)(C.b, {
                            style: {
                                justifyContent: "flex-end"
                            },
                            children: Object(q.jsx)(b.eb, {
                                children: "1 ".concat(null === (s = d[B.a.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol, " = ").concat(null === u || void 0 === u ? void 0 : u.invert().toSignificant(4), " ").concat(null === (c = d[B.a.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol)
                            })
                        }), Object(q.jsxs)(C.b, {
                            children: [Object(q.jsxs)(b.eb, {
                                children: [h("Share of Pool"), ":"]
                            }), Object(q.jsxs)(b.eb, {
                                children: [l ? "100" : null === y || void 0 === y ? void 0 : y.toSignificant(4), "%"]
                            })]
                        }), Object(q.jsx)(b.i, {
                            onClick: f,
                            mt: "20px",
                            children: h(l ? "Create Pool & Supply" : "Confirm Supply")
                        })]
                    })
                },
                H = n(140);
            var G = function(e) {
                    var t, n, a, i, r, o, s, c, l, u, d, p, y = e.currencies,
                        f = e.noLiquidity,
                        h = e.poolTokenPercentage,
                        j = e.price,
                        v = Object(m.b)().t;
                    return Object(q.jsx)(O.a, {
                        gap: "md",
                        children: Object(q.jsxs)(C.a, {
                            justify: "space-around",
                            gap: "4px",
                            children: [Object(q.jsxs)(O.a, {
                                justify: "center",
                                children: [Object(q.jsx)(b.eb, {
                                    children: null !== (t = null === j || void 0 === j ? void 0 : j.toSignificant(6)) && void 0 !== t ? t : "-"
                                }), Object(q.jsx)(b.eb, {
                                    fontSize: "14px",
                                    pt: 1,
                                    children: v("%assetA% per %assetB%", {
                                        assetA: null !== (n = null === (a = y[B.a.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol) && void 0 !== n ? n : "",
                                        assetB: null !== (i = null === (r = y[B.a.CURRENCY_A]) || void 0 === r ? void 0 : r.symbol) && void 0 !== i ? i : ""
                                    })
                                })]
                            }), Object(q.jsxs)(O.a, {
                                justify: "center",
                                children: [Object(q.jsx)(b.eb, {
                                    children: null !== (o = null === j || void 0 === j || null === (s = j.invert()) || void 0 === s ? void 0 : s.toSignificant(6)) && void 0 !== o ? o : "-"
                                }), Object(q.jsx)(b.eb, {
                                    fontSize: "14px",
                                    pt: 1,
                                    children: v("%assetA% per %assetB%", {
                                        assetA: null !== (c = null === (l = y[B.a.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol) && void 0 !== c ? c : "",
                                        assetB: null !== (u = null === (d = y[B.a.CURRENCY_B]) || void 0 === d ? void 0 : d.symbol) && void 0 !== u ? u : ""
                                    })
                                })]
                            }), Object(q.jsxs)(O.a, {
                                justify: "center",
                                children: [Object(q.jsxs)(b.eb, {
                                    children: [f && j ? "100" : null !== (p = (null === h || void 0 === h ? void 0 : h.lessThan(S.p)) ? "<0.01" : null === h || void 0 === h ? void 0 : h.toFixed(2)) && void 0 !== p ? p : "0", "%"]
                                }), Object(q.jsx)(b.eb, {
                                    fontSize: "14px",
                                    pt: 1,
                                    children: v("Share of Pool")
                                })]
                            })]
                        })
                    })
                },
                $ = n(199);

            function J(e) {
                var t, n, a, J, Q, Z, X, ee, te, ne, ae, ie, re, oe, se, ce = e.match.params,
                    le = ce.currencyIdA,
                    ue = ce.currencyIdB,
                    de = e.history,
                    pe = Object(h.a)(),
                    be = pe.account,
                    ye = pe.chainId,
                    me = pe.library,
                    fe = Object(j.b)(),
                    he = Object(m.b)().t,
                    je = Object(K.f)(),
                    ve = Object(I.c)(le),
                    Oe = Object(I.c)(ue);
                Object(u.useEffect)((function() {
                    le || ue || fe(Object(B.b)())
                }), [fe, le, ue]);
                var ge = Boolean(ye && (ve && Object(p.o)(ve, p.n[ye]) || Oe && Object(p.o)(Oe, p.n[ye]))),
                    we = Object(K.h)(),
                    xe = L(),
                    ke = xe.independentField,
                    Te = xe.typedValue,
                    Ce = xe.otherTypedValue,
                    Ae = function(e, t) {
                        var n, a, i, r, o, s, d = Object(h.a)(),
                            b = d.account,
                            y = d.chainId,
                            f = Object(m.b)().t,
                            j = L(),
                            v = j.independentField,
                            O = j.typedValue,
                            g = j.otherTypedValue,
                            w = v === B.a.CURRENCY_A ? B.a.CURRENCY_B : B.a.CURRENCY_A,
                            x = Object(u.useMemo)((function() {
                                var n;
                                return n = {}, Object(c.a)(n, B.a.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(c.a)(n, B.a.CURRENCY_B, null !== t && void 0 !== t ? t : void 0), n
                            }), [e, t]),
                            k = Object(E.b)(x[B.a.CURRENCY_A], x[B.a.CURRENCY_B]),
                            T = Object(l.a)(k, 2),
                            C = T[0],
                            A = T[1],
                            S = Object(R.a)(null === A || void 0 === A ? void 0 : A.liquidityToken),
                            I = C === E.a.NOT_EXISTS || Boolean(S && p.e.equal(S.raw, D)),
                            P = Object(U.c)(null !== b && void 0 !== b ? b : void 0, [x[B.a.CURRENCY_A], x[B.a.CURRENCY_B]]),
                            N = (n = {}, Object(c.a)(n, B.a.CURRENCY_A, P[0]), Object(c.a)(n, B.a.CURRENCY_B, P[1]), n),
                            Y = Object(M.a)(O, x[v]),
                            K = Object(u.useMemo)((function() {
                                if (I) return g && x[w] ? Object(M.a)(g, x[w]) : void 0;
                                if (Y) {
                                    var n = Object(F.c)(Y, y),
                                        a = [Object(F.b)(e, y), Object(F.b)(t, y)],
                                        i = a[0],
                                        r = a[1];
                                    if (i && r && n && A) {
                                        var o = w === B.a.CURRENCY_B ? t : e,
                                            s = w === B.a.CURRENCY_B ? A.priceOf(i).quote(n) : A.priceOf(r).quote(n);
                                        return o === p.d ? p.c.ether(s.raw) : s
                                    }
                                }
                            }), [I, g, x, w, Y, e, y, t, A]),
                            _ = Object(u.useMemo)((function() {
                                var e;
                                return e = {}, Object(c.a)(e, B.a.CURRENCY_A, v === B.a.CURRENCY_A ? Y : K), Object(c.a)(e, B.a.CURRENCY_B, v === B.a.CURRENCY_A ? K : Y), e
                            }), [K, Y, v]),
                            W = Object(u.useMemo)((function() {
                                if (I) {
                                    var t = _[B.a.CURRENCY_A],
                                        n = _[B.a.CURRENCY_B];
                                    return t && n ? new p.h(t.currency, n.currency, t.raw, n.raw) : void 0
                                }
                                var a = Object(F.b)(e, y);
                                return A && a ? A.priceOf(a) : void 0
                            }), [y, e, I, A, _]),
                            z = Object(u.useMemo)((function() {
                                var e = _[B.a.CURRENCY_A],
                                    t = _[B.a.CURRENCY_B],
                                    n = [Object(F.c)(e, y), Object(F.c)(t, y)],
                                    a = n[0],
                                    i = n[1];
                                if (A && S && a && i) return A.getLiquidityMinted(S, a, i)
                            }), [_, y, A, S]),
                            q = Object(u.useMemo)((function() {
                                if (z && S) return new p.g(z.raw, S.add(z).raw)
                            }), [z, S]);
                        b || (r = f("Connect Wallet")), C === E.a.INVALID && (r = null !== (o = r) && void 0 !== o ? o : f("Invalid pair")), _[B.a.CURRENCY_A] && _[B.a.CURRENCY_B] || (r = null !== (s = r) && void 0 !== s ? s : f("Enter an amount"));
                        var V, H, G = _[B.a.CURRENCY_A],
                            $ = _[B.a.CURRENCY_B];
                        return G && (null === N || void 0 === N || null === (a = N[B.a.CURRENCY_A]) || void 0 === a ? void 0 : a.lessThan(G)) && (r = f("Insufficient %symbol% balance", {
                            symbol: null === (V = x[B.a.CURRENCY_A]) || void 0 === V ? void 0 : V.symbol
                        })), $ && (null === N || void 0 === N || null === (i = N[B.a.CURRENCY_B]) || void 0 === i ? void 0 : i.lessThan($)) && (r = f("Insufficient %symbol% balance", {
                            symbol: null === (H = x[B.a.CURRENCY_B]) || void 0 === H ? void 0 : H.symbol
                        })), {
                            dependentField: w,
                            currencies: x,
                            pair: A,
                            pairState: C,
                            currencyBalances: N,
                            parsedAmounts: _,
                            price: W,
                            noLiquidity: I,
                            liquidityMinted: z,
                            poolTokenPercentage: q,
                            error: r
                        }
                    }(null !== ve && void 0 !== ve ? ve : void 0, null !== Oe && void 0 !== Oe ? Oe : void 0),
                    Se = Ae.dependentField,
                    Ee = Ae.currencies,
                    Ie = Ae.pair,
                    Pe = Ae.pairState,
                    Ne = Ae.currencyBalances,
                    Be = Ae.parsedAmounts,
                    Re = Ae.price,
                    Fe = Ae.noLiquidity,
                    Me = Ae.liquidityMinted,
                    Ue = Ae.poolTokenPercentage,
                    De = Ae.error,
                    Le = function(e) {
                        var t = Object(j.b)();
                        return {
                            onFieldAInput: Object(u.useCallback)((function(n) {
                                t(Object(B.c)({
                                    field: B.a.CURRENCY_A,
                                    typedValue: n,
                                    noLiquidity: !0 === e
                                }))
                            }), [t, e]),
                            onFieldBInput: Object(u.useCallback)((function(n) {
                                t(Object(B.c)({
                                    field: B.a.CURRENCY_B,
                                    typedValue: n,
                                    noLiquidity: !0 === e
                                }))
                            }), [t, e])
                        }
                    }(Fe),
                    Ye = Le.onFieldAInput,
                    Ke = Le.onFieldBInput,
                    _e = !De,
                    We = Object(u.useState)(!1),
                    ze = Object(l.a)(We, 2),
                    qe = ze[0],
                    Ve = ze[1],
                    He = Object(N.a)(),
                    Ge = Object(K.p)(),
                    $e = Object(l.a)(Ge, 1)[0],
                    Je = Object(u.useState)(""),
                    Qe = Object(l.a)(Je, 2),
                    Ze = Qe[0],
                    Xe = Qe[1],
                    et = (a = {}, Object(c.a)(a, ke, Te), Object(c.a)(a, Se, Fe ? Ce : null !== (t = null === (n = Be[Se]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : ""), a),
                    tt = [B.a.CURRENCY_A, B.a.CURRENCY_B].reduce((function(e, t) {
                        return Object(s.a)(Object(s.a)({}, e), {}, Object(c.a)({}, t, Object(W.a)(Ne[t])))
                    }), {}),
                    nt = [B.a.CURRENCY_A, B.a.CURRENCY_B].reduce((function(e, t) {
                        var n, a;
                        return Object(s.a)(Object(s.a)({}, e), {}, Object(c.a)({}, t, null === (n = tt[t]) || void 0 === n ? void 0 : n.equalTo(null !== (a = Be[t]) && void 0 !== a ? a : "0")))
                    }), {}),
                    at = Object(P.b)(Be[B.a.CURRENCY_A], S.t),
                    it = Object(l.a)(at, 2),
                    rt = it[0],
                    ot = it[1],
                    st = Object(P.b)(Be[B.a.CURRENCY_B], S.t),
                    ct = Object(l.a)(st, 2),
                    lt = ct[0],
                    ut = ct[1],
                    dt = Object(Y.d)();

                function pt() {
                    return bt.apply(this, arguments)
                }

                function bt() {
                    return (bt = Object(o.a)(i.a.mark((function e() {
                        var t, n, a, o, l, u, b, y, m, f, h, j, v, O, g, w;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ye && me && be) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (n = Object(_.h)(ye, me, be), a = Be[B.a.CURRENCY_A], o = Be[B.a.CURRENCY_B], a && o && ve && Oe && He) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return t = {}, Object(c.a)(t, B.a.CURRENCY_A, Object(_.c)(a, Fe ? 0 : $e)[0]), Object(c.a)(t, B.a.CURRENCY_B, Object(_.c)(o, Fe ? 0 : $e)[0]), l = t, ve === p.d || Oe === p.d ? (j = Oe === p.d, u = n.estimateGas.addLiquidityETH, b = n.addLiquidityETH, y = [null !== (f = null === (h = Object(F.b)(j ? ve : Oe, ye)) || void 0 === h ? void 0 : h.address) && void 0 !== f ? f : "", (j ? a : o).raw.toString(), l[j ? B.a.CURRENCY_A : B.a.CURRENCY_B].toString(), l[j ? B.a.CURRENCY_B : B.a.CURRENCY_A].toString(), be, He.toHexString()], m = d.a.from((j ? o : a).raw.toString())) : (u = n.estimateGas.addLiquidity, b = n.addLiquidity, y = [null !== (v = null === (O = Object(F.b)(ve, ye)) || void 0 === O ? void 0 : O.address) && void 0 !== v ? v : "", null !== (g = null === (w = Object(F.b)(Oe, ye)) || void 0 === w ? void 0 : w.address) && void 0 !== g ? g : "", a.raw.toString(), o.raw.toString(), l[B.a.CURRENCY_A].toString(), l[B.a.CURRENCY_B].toString(), be, He.toHexString()], m = null), Ve(!0), e.next = 11, u.apply(void 0, Object(r.a)(y).concat([m ? {
                                        value: m
                                    } : {}])).then((function(e) {
                                        return b.apply(void 0, Object(r.a)(y).concat([Object(s.a)(Object(s.a)({}, m ? {
                                            value: m
                                        } : {}), {}, {
                                            gasLimit: Object(_.b)(e),
                                            gasPrice: je
                                        })])).then((function(e) {
                                            var t, n, a, i;
                                            Ve(!1), dt(e, {
                                                summary: "Add ".concat(null === (t = Be[B.a.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === (n = Ee[B.a.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " and ").concat(null === (a = Be[B.a.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(3), " ").concat(null === (i = Ee[B.a.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol)
                                            }), Xe(e.hash)
                                        }))
                                    })).catch((function(e) {
                                        Ve(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var yt = function() {
                        var e, t, n, a;
                        return Fe ? Object(q.jsxs)(b.A, {
                            alignItems: "center",
                            children: [Object(q.jsx)(b.eb, {
                                fontSize: "48px",
                                marginRight: "10px",
                                children: "".concat(null === (e = Ee[B.a.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (t = Ee[B.a.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol)
                            }), Object(q.jsx)(x.b, {
                                currency0: Ee[B.a.CURRENCY_A],
                                currency1: Ee[B.a.CURRENCY_B],
                                size: 30
                            })]
                        }) : Object(q.jsxs)(O.a, {
                            children: [Object(q.jsxs)(b.A, {
                                alignItems: "center",
                                children: [Object(q.jsx)(b.eb, {
                                    fontSize: "48px",
                                    marginRight: "10px",
                                    children: null === Me || void 0 === Me ? void 0 : Me.toSignificant(6)
                                }), Object(q.jsx)(x.b, {
                                    currency0: Ee[B.a.CURRENCY_A],
                                    currency1: Ee[B.a.CURRENCY_B],
                                    size: 30
                                })]
                            }), Object(q.jsx)(C.d, {
                                children: Object(q.jsx)(b.eb, {
                                    fontSize: "24px",
                                    children: "".concat(null === (n = Ee[B.a.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, "/").concat(null === (a = Ee[B.a.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Pool Tokens")
                                })
                            }), Object(q.jsx)(b.eb, {
                                small: !0,
                                textAlign: "left",
                                my: "24px",
                                children: he("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.", {
                                    slippage: $e / 100
                                })
                            })]
                        })
                    },
                    mt = function() {
                        return Object(q.jsx)(V, {
                            price: Re,
                            currencies: Ee,
                            parsedAmounts: Be,
                            noLiquidity: Fe,
                            onAdd: pt,
                            poolTokenPercentage: Ue
                        })
                    },
                    ft = he("Supplying %amountA% %symbolA% and %amountB% %symbolB%", {
                        amountA: null !== (J = null === (Q = Be[B.a.CURRENCY_A]) || void 0 === Q ? void 0 : Q.toSignificant(6)) && void 0 !== J ? J : "",
                        symbolA: null !== (Z = null === (X = Ee[B.a.CURRENCY_A]) || void 0 === X ? void 0 : X.symbol) && void 0 !== Z ? Z : "",
                        amountB: null !== (ee = null === (te = Be[B.a.CURRENCY_B]) || void 0 === te ? void 0 : te.toSignificant(6)) && void 0 !== ee ? ee : "",
                        symbolB: null !== (ne = null === (ae = Ee[B.a.CURRENCY_B]) || void 0 === ae ? void 0 : ae.symbol) && void 0 !== ne ? ne : ""
                    }),
                    ht = Object(u.useCallback)((function(e) {
                        var t = Object(H.a)(e);
                        t === ue ? de.push("/add/".concat(ue, "/").concat(le)) : ue ? de.push("/add/".concat(t, "/").concat(ue)) : de.push("/add/".concat(t))
                    }), [ue, de, le]),
                    jt = Object(u.useCallback)((function(e) {
                        var t = Object(H.a)(e);
                        le === t ? ue ? de.push("/add/".concat(ue, "/").concat(t)) : de.push("/add/".concat(t)) : de.push("/add/".concat(le || "CRAB", "/").concat(t))
                    }), [le, de, ue]),
                    vt = Object(u.useCallback)((function() {
                        Ze && Ye(""), Xe("")
                    }), [Ye, Ze]),
                    Ot = Object(y.a)(null === Ee || void 0 === Ee ? void 0 : Ee.CURRENCY_A, null === Ee || void 0 === Ee ? void 0 : Ee.CURRENCY_B),
                    gt = Object(b.ub)(Object(q.jsx)(g.c, {
                        title: he(Fe ? "You are creating a pool" : "You will receive"),
                        customOnDismiss: vt,
                        attemptingTxn: qe,
                        hash: Ze,
                        content: function() {
                            return Object(q.jsx)(g.a, {
                                topContent: yt,
                                bottomContent: mt
                            })
                        },
                        pendingText: ft,
                        currencyToAdd: null === Ie || void 0 === Ie ? void 0 : Ie.liquidityToken
                    }), !0, !0, "addLiquidityModal"),
                    wt = Object(l.a)(gt, 1)[0];
                return Object(q.jsxs)($.a, {
                    children: [Object(q.jsxs)(k.a, {
                        children: [Object(q.jsx)(k.b, {
                            title: he("Add Liquidity"),
                            subtitle: he("Add liquidity to receive LP tokens"),
                            helper: he("Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool."),
                            backTo: "/pool"
                        }), Object(q.jsx)(b.m, {
                            children: Object(q.jsxs)(O.a, {
                                gap: "20px",
                                children: [Fe && Object(q.jsx)(O.b, {
                                    children: Object(q.jsx)(b.M, {
                                        variant: "warning",
                                        children: Object(q.jsxs)("div", {
                                            children: [Object(q.jsx)(b.eb, {
                                                bold: !0,
                                                mb: "8px",
                                                children: he("You are the first liquidity provider.")
                                            }), Object(q.jsx)(b.eb, {
                                                mb: "8px",
                                                children: he("The ratio of tokens you add will set the price of this pool.")
                                            }), Object(q.jsx)(b.eb, {
                                                children: he("Once you are happy with the rate click supply to review.")
                                            })]
                                        })
                                    })
                                }), Object(q.jsx)(w.a, {
                                    value: et[B.a.CURRENCY_A],
                                    onUserInput: Ye,
                                    onMax: function() {
                                        var e, t;
                                        Ye(null !== (e = null === (t = tt[B.a.CURRENCY_A]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                                    },
                                    onCurrencySelect: ht,
                                    showMaxButton: !nt[B.a.CURRENCY_A],
                                    currency: Ee[B.a.CURRENCY_A],
                                    id: "add-liquidity-input-tokena",
                                    showCommonBases: !0
                                }), Object(q.jsx)(O.b, {
                                    children: Object(q.jsx)(b.a, {
                                        width: "16px"
                                    })
                                }), Object(q.jsx)(w.a, {
                                    value: et[B.a.CURRENCY_B],
                                    onUserInput: Ke,
                                    onCurrencySelect: jt,
                                    onMax: function() {
                                        var e, t;
                                        Ke(null !== (e = null === (t = tt[B.a.CURRENCY_B]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                                    },
                                    showMaxButton: !nt[B.a.CURRENCY_B],
                                    currency: Ee[B.a.CURRENCY_B],
                                    id: "add-liquidity-input-tokenb",
                                    showCommonBases: !0
                                }), Ee[B.a.CURRENCY_A] && Ee[B.a.CURRENCY_B] && Pe !== E.a.INVALID && Object(q.jsx)(q.Fragment, {
                                    children: Object(q.jsxs)(v.b, {
                                        padding: "0px",
                                        borderRadius: "20px",
                                        children: [Object(q.jsx)(C.b, {
                                            padding: "1rem",
                                            children: Object(q.jsx)(b.eb, {
                                                fontSize: "14px",
                                                children: he(Fe ? "Initial prices and pool share" : "Prices and pool share")
                                            })
                                        }), " ", Object(q.jsx)(v.b, {
                                            padding: "1rem",
                                            borderRadius: "20px",
                                            children: Object(q.jsx)(G, {
                                                currencies: Ee,
                                                poolTokenPercentage: Ue,
                                                noLiquidity: Fe,
                                                price: Re
                                            })
                                        })]
                                    })
                                }), Ot ? Object(q.jsx)(b.i, {
                                    disabled: !0,
                                    mb: "4px",
                                    children: he("Unsupported Asset")
                                }) : be ? Object(q.jsxs)(O.a, {
                                    gap: "md",
                                    children: [(rt === P.a.NOT_APPROVED || rt === P.a.PENDING || lt === P.a.NOT_APPROVED || lt === P.a.PENDING) && _e && Object(q.jsxs)(C.b, {
                                        children: [rt !== P.a.APPROVED && Object(q.jsx)(b.i, {
                                            onClick: ot,
                                            disabled: rt === P.a.PENDING,
                                            width: lt !== P.a.APPROVED ? "48%" : "100%",
                                            children: rt === P.a.PENDING ? Object(q.jsx)(z.a, {
                                                children: he("Enabling %asset%", {
                                                    asset: null === (ie = Ee[B.a.CURRENCY_A]) || void 0 === ie ? void 0 : ie.symbol
                                                })
                                            }) : he("Enable %asset%", {
                                                asset: null === (re = Ee[B.a.CURRENCY_A]) || void 0 === re ? void 0 : re.symbol
                                            })
                                        }), lt !== P.a.APPROVED && Object(q.jsx)(b.i, {
                                            onClick: ut,
                                            disabled: lt === P.a.PENDING,
                                            width: rt !== P.a.APPROVED ? "48%" : "100%",
                                            children: lt === P.a.PENDING ? Object(q.jsx)(z.a, {
                                                children: he("Enabling %asset%", {
                                                    asset: null === (oe = Ee[B.a.CURRENCY_B]) || void 0 === oe ? void 0 : oe.symbol
                                                })
                                            }) : he("Enable %asset%", {
                                                asset: null === (se = Ee[B.a.CURRENCY_B]) || void 0 === se ? void 0 : se.symbol
                                            })
                                        })]
                                    }), Object(q.jsx)(b.i, {
                                        variant: !_e && Be[B.a.CURRENCY_A] && Be[B.a.CURRENCY_B] ? "danger" : "primary",
                                        onClick: function() {
                                            we ? pt() : wt()
                                        },
                                        disabled: !_e || rt !== P.a.APPROVED || lt !== P.a.APPROVED,
                                        children: null !== De && void 0 !== De ? De : he("Supply")
                                    })]
                                }) : Object(q.jsx)(A.a, {})]
                            })
                        })]
                    }), Ot ? Object(q.jsx)(f.a, {
                        currencies: [Ee.CURRENCY_A, Ee.CURRENCY_B]
                    }) : Ie && !Fe && Pe !== E.a.INVALID ? Object(q.jsx)(O.a, {
                        style: {
                            minWidth: "20rem",
                            width: "100%",
                            maxWidth: "400px",
                            marginTop: "1rem"
                        },
                        children: Object(q.jsx)(T.a, {
                            showUnwrapped: ge,
                            pair: Ie
                        })
                    }) : null]
                })
            }
        },
        323: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return E
            })), n.d(t, "b", (function() {
                return I
            }));
            var a, i = n(9),
                r = n(52),
                o = n(11),
                s = n(10),
                c = n(0),
                l = n(7),
                u = n(2),
                d = n(78),
                p = n(4),
                b = n(23),
                y = n(26),
                m = n(183),
                f = n(79),
                h = n(140),
                j = n(48),
                v = n(89),
                O = n(29),
                g = n(108),
                w = n(46),
                x = n(21),
                k = n(34),
                T = n(181),
                C = n(1),
                A = ["pair"],
                S = Object(p.e)(x.b)(a || (a = Object(s.a)(["\n  height: 24px;\n"])));

            function E(e) {
                var t = e.pair,
                    n = e.showUnwrapped,
                    a = void 0 !== n && n,
                    i = Object(y.a)().account,
                    r = Object(b.b)().t,
                    s = a ? t.token0 : Object(j.a)(t.token0),
                    d = a ? t.token1 : Object(j.a)(t.token1),
                    p = Object(c.useState)(!1),
                    h = Object(o.a)(p, 2),
                    g = h[0],
                    k = h[1],
                    T = Object(f.d)(null !== i && void 0 !== i ? i : void 0, t.liquidityToken),
                    A = Object(m.a)(t.liquidityToken),
                    E = T && A && l.e.greaterThanOrEqual(A.raw, T.raw) ? new l.g(T.raw, A.raw) : void 0,
                    I = t && A && T && l.e.greaterThanOrEqual(A.raw, T.raw) ? [t.getLiquidityValue(t.token0, A, T, !1), t.getLiquidityValue(t.token1, A, T, !1)] : [void 0, void 0],
                    P = Object(o.a)(I, 2),
                    N = P[0],
                    B = P[1];
                return Object(C.jsx)(C.Fragment, {
                    children: T && l.e.greaterThan(T.raw, l.e.BigInt(0)) ? Object(C.jsx)(u.l, {
                        children: Object(C.jsx)(u.m, {
                            children: Object(C.jsxs)(O.a, {
                                gap: "16px",
                                children: [Object(C.jsx)(S, {
                                    children: Object(C.jsx)(x.c, {
                                        children: Object(C.jsx)(u.eb, {
                                            color: "secondary",
                                            bold: !0,
                                            children: r("LP tokens in your wallet")
                                        })
                                    })
                                }), Object(C.jsxs)(S, {
                                    onClick: function() {
                                        return k(!g)
                                    },
                                    children: [Object(C.jsxs)(x.c, {
                                        children: [Object(C.jsx)(w.b, {
                                            currency0: s,
                                            currency1: d,
                                            margin: !0,
                                            size: 20
                                        }), Object(C.jsxs)(u.eb, {
                                            small: !0,
                                            color: "textSubtle",
                                            children: [s.symbol, "-", d.symbol, " LP"]
                                        })]
                                    }), Object(C.jsx)(x.c, {
                                        children: Object(C.jsx)(u.eb, {
                                            children: T ? T.toSignificant(4) : "-"
                                        })
                                    })]
                                }), Object(C.jsxs)(O.a, {
                                    gap: "4px",
                                    children: [Object(C.jsxs)(S, {
                                        children: [Object(C.jsxs)(u.eb, {
                                            color: "textSubtle",
                                            small: !0,
                                            children: [r("Share of Pool"), ":"]
                                        }), Object(C.jsx)(u.eb, {
                                            children: E ? "".concat(E.toFixed(6), "%") : "-"
                                        })]
                                    }), Object(C.jsxs)(S, {
                                        children: [Object(C.jsxs)(u.eb, {
                                            color: "textSubtle",
                                            small: !0,
                                            children: [r("Pooled %asset%", {
                                                asset: s.symbol
                                            }), ":"]
                                        }), N ? Object(C.jsx)(x.c, {
                                            children: Object(C.jsx)(u.eb, {
                                                ml: "6px",
                                                children: null === N || void 0 === N ? void 0 : N.toSignificant(6)
                                            })
                                        }) : "-"]
                                    }), Object(C.jsxs)(S, {
                                        children: [Object(C.jsxs)(u.eb, {
                                            color: "textSubtle",
                                            small: !0,
                                            children: [r("Pooled %asset%", {
                                                asset: d.symbol
                                            }), ":"]
                                        }), B ? Object(C.jsx)(x.c, {
                                            children: Object(C.jsx)(u.eb, {
                                                ml: "6px",
                                                children: null === B || void 0 === B ? void 0 : B.toSignificant(6)
                                            })
                                        }) : "-"]
                                    })]
                                })]
                            })
                        })
                    }) : Object(C.jsx)(v.b, {
                        children: Object(C.jsxs)(u.eb, {
                            fontSize: "14px",
                            style: {
                                textAlign: "center"
                            },
                            children: [Object(C.jsx)("span", {
                                role: "img",
                                "aria-label": "pancake-icon",
                                children: "\ud83e\udd5e"
                            }), " ", r("By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.")]
                        })
                    })
                })
            }

            function I(e) {
                var t = e.pair,
                    n = Object(r.a)(e, A),
                    a = Object(y.a)().account,
                    s = Object(j.a)(t.token0),
                    p = Object(j.a)(t.token1),
                    b = Object(c.useState)(!1),
                    v = Object(o.a)(b, 2),
                    E = v[0],
                    I = v[1],
                    P = Object(f.d)(null !== a && void 0 !== a ? a : void 0, t.liquidityToken),
                    N = Object(m.a)(t.liquidityToken),
                    B = P && N && l.e.greaterThanOrEqual(N.raw, P.raw) ? new l.g(P.raw, N.raw) : void 0,
                    R = t && N && P && l.e.greaterThanOrEqual(N.raw, P.raw) ? [t.getLiquidityValue(t.token0, N, P, !1), t.getLiquidityValue(t.token1, N, P, !1)] : [void 0, void 0],
                    F = Object(o.a)(R, 2),
                    M = F[0],
                    U = F[1];
                return Object(C.jsxs)(u.l, Object(i.a)(Object(i.a)({
                    style: {
                        borderRadius: "12px"
                    }
                }, n), {}, {
                    children: [Object(C.jsxs)(u.A, {
                        justifyContent: "space-between",
                        role: "button",
                        onClick: function() {
                            return I(!E)
                        },
                        p: "16px",
                        children: [Object(C.jsxs)(u.A, {
                            flexDirection: "column",
                            children: [Object(C.jsxs)(u.A, {
                                alignItems: "center",
                                mb: "4px",
                                children: [Object(C.jsx)(w.b, {
                                    currency0: s,
                                    currency1: p,
                                    size: 20
                                }), Object(C.jsx)(u.eb, {
                                    bold: !0,
                                    ml: "8px",
                                    children: s && p ? "".concat(s.symbol, "/").concat(p.symbol) : Object(C.jsx)(T.a, {
                                        children: "Loading"
                                    })
                                })]
                            }), Object(C.jsx)(u.eb, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: null === P || void 0 === P ? void 0 : P.toSignificant(4)
                            })]
                        }), E ? Object(C.jsx)(u.t, {}) : Object(C.jsx)(u.r, {})]
                    }), E && Object(C.jsxs)(O.a, {
                        gap: "8px",
                        style: {
                            padding: "16px"
                        },
                        children: [Object(C.jsxs)(S, {
                            children: [Object(C.jsxs)(x.c, {
                                children: [Object(C.jsx)(g.a, {
                                    size: "20px",
                                    currency: s
                                }), Object(C.jsxs)(u.eb, {
                                    color: "textSubtle",
                                    ml: "4px",
                                    children: ["Pooled ", s.symbol]
                                })]
                            }), M ? Object(C.jsx)(x.c, {
                                children: Object(C.jsx)(u.eb, {
                                    ml: "6px",
                                    children: null === M || void 0 === M ? void 0 : M.toSignificant(6)
                                })
                            }) : "-"]
                        }), Object(C.jsxs)(S, {
                            children: [Object(C.jsxs)(x.c, {
                                children: [Object(C.jsx)(g.a, {
                                    size: "20px",
                                    currency: p
                                }), Object(C.jsxs)(u.eb, {
                                    color: "textSubtle",
                                    ml: "4px",
                                    children: ["Pooled ", p.symbol]
                                })]
                            }), U ? Object(C.jsx)(x.c, {
                                children: Object(C.jsx)(u.eb, {
                                    ml: "6px",
                                    children: null === U || void 0 === U ? void 0 : U.toSignificant(6)
                                })
                            }) : "-"]
                        }), Object(C.jsxs)(S, {
                            children: [Object(C.jsx)(u.eb, {
                                color: "textSubtle",
                                children: "Share of pool"
                            }), Object(C.jsx)(u.eb, {
                                children: B ? "".concat("0.00" === B.toFixed(2) ? "<0.01" : B.toFixed(2), "%") : "-"
                            })]
                        }), P && l.e.greaterThan(P.raw, k.h) && Object(C.jsxs)(u.A, {
                            flexDirection: "column",
                            children: [Object(C.jsx)(u.i, {
                                as: d.a,
                                to: "/remove/".concat(Object(h.a)(s), "/").concat(Object(h.a)(p)),
                                variant: "primary",
                                width: "100%",
                                mb: "8px",
                                children: "Remove"
                            }), Object(C.jsx)(u.i, {
                                as: d.a,
                                to: "/add/".concat(Object(h.a)(s), "/").concat(Object(h.a)(p)),
                                variant: "text",
                                startIcon: Object(C.jsx)(u.a, {
                                    color: "primary"
                                }),
                                width: "100%",
                                children: "Add liquidity instead"
                            })]
                        })]
                    })]
                }))
            }
        },
        33: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "r", (function() {
                return s
            })), n.d(t, "z", (function() {
                return c
            })), n.d(t, "A", (function() {
                return l
            })), n.d(t, "q", (function() {
                return u
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "k", (function() {
                return p
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "j", (function() {
                return y
            })), n.d(t, "i", (function() {
                return m
            })), n.d(t, "o", (function() {
                return f
            })), n.d(t, "n", (function() {
                return h
            })), n.d(t, "t", (function() {
                return j
            })), n.d(t, "v", (function() {
                return v
            })), n.d(t, "w", (function() {
                return O
            })), n.d(t, "u", (function() {
                return g
            })), n.d(t, "x", (function() {
                return w
            })), n.d(t, "y", (function() {
                return x
            })), n.d(t, "s", (function() {
                return k
            })), n.d(t, "B", (function() {
                return T
            })), n.d(t, "p", (function() {
                return C
            })), n.d(t, "g", (function() {
                return A
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "h", (function() {
                return E
            })), n.d(t, "m", (function() {
                return I
            })), n.d(t, "l", (function() {
                return P
            }));
            var a, i, r, o = n(24);
            ! function(e) {
                e.ON_FINISHED = "onFinished", e.TRUE = "true", e.FALSE = "false"
            }(a || (a = {})),
            function(e) {
                e.TABLE = "TABLE", e.CARD = "CARD"
            }(i || (i = {})),
            function(e) {
                e.BASIC = "BASIC", e.TRADING_VIEW = "TRADING_VIEW"
            }(r || (r = {}));
            var s = Object(o.b)("user/updateUserExpertMode"),
                c = Object(o.b)("user/updateUserSingleHopOnly"),
                l = Object(o.b)("user/updateUserSlippageTolerance"),
                u = Object(o.b)("user/updateUserDeadline"),
                d = Object(o.b)("user/addSerializedToken"),
                p = Object(o.b)("user/removeSerializedToken"),
                b = Object(o.b)("user/addSerializedPair"),
                y = Object(o.b)("user/removeSerializedPair"),
                m = Object(o.b)("user/muteAudio"),
                f = Object(o.b)("user/unmuteAudio"),
                h = Object(o.b)("user/toggleTheme"),
                j = Object(o.b)("user/updateUserFarmStakedOnly"),
                v = Object(o.b)("user/updateUserPoolStakedOnly"),
                O = Object(o.b)("user/updateUserPoolsViewMode"),
                g = Object(o.b)("user/updateUserFarmsViewMode"),
                w = Object(o.b)("user/updateUserPredictionAcceptedRisk"),
                x = Object(o.b)("user/updateUserPredictionChartDisclaimerShow"),
                k = Object(o.b)("user/updateUserExpertModeAcknowledgementShow"),
                T = Object(o.b)("user/updateUserUsernameVisibility"),
                C = Object(o.b)("user/updateGasPrice"),
                A = Object(o.b)("user/addWatchlistToken"),
                S = Object(o.b)("user/addWatchlistPool"),
                E = Object(o.b)("user/hidePhishingWarningBanner"),
                I = Object(o.b)("user/toggleIsExchangeChartDisplayed"),
                P = Object(o.b)("user/setChartViewMode")
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "t", (function() {
                return p
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "a", (function() {
                return y
            })), n.d(t, "l", (function() {
                return m
            })), n.d(t, "u", (function() {
                return f
            })), n.d(t, "f", (function() {
                return h
            })), n.d(t, "r", (function() {
                return j
            })), n.d(t, "n", (function() {
                return v
            })), n.d(t, "m", (function() {
                return O
            })), n.d(t, "h", (function() {
                return g
            })), n.d(t, "p", (function() {
                return w
            })), n.d(t, "i", (function() {
                return x
            })), n.d(t, "c", (function() {
                return k
            })), n.d(t, "d", (function() {
                return T
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "s", (function() {
                return A
            })), n.d(t, "k", (function() {
                return S
            })), n.d(t, "o", (function() {
                return E
            })), n.d(t, "g", (function() {
                return I
            })), n.d(t, "v", (function() {
                return P
            })), n.d(t, "q", (function() {
                return N
            })), n.d(t, "j", (function() {
                return B
            })), n.d(t, "w", (function() {
                return d
            }));
            var a, i, r, o, s = n(16),
                c = n(7),
                l = n(47),
                u = Object(l.c)(),
                d = [{
                    pid: 1,
                    lpSymbol: "USDT-xRING LP",
                    lpAddresses: {
                        44: "0x29BF15B31029c889E397Cc153C1F225e200581BC",
                        256: "0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4"
                    },
                    token: u.usdt,
                    quoteToken: u.ring,
                    rewardToken: u.ring,
                    poolAddress: "0x85A1b1c1f8Fc999E8497b62b130aAe8f3B15Cf86",
                    startTime: 1650438e6,
                    rewardsDuration: 15552e3,
                    rewardsAmount: "1000000000000000"
                }, {
                    pid: 2,
                    lpSymbol: "USDC-CRAB LP",
                    lpAddresses: {
                        44: "0x75D4D59991D388Dd0e1c5224AF605a3E79e1f17e",
                        256: "0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4"
                    },
                    token: u.usdc,
                    quoteToken: u.wbnb,
                    rewardToken: u.wbnb,
                    poolAddress: "0x426C4cd3C890AD717351550b7Ec221b36cbA0D72",
                    startTime: 1650438e6,
                    rewardsDuration: 15552e3,
                    rewardsAmount: "7000000000000000000000000"
                }],
                p = "0xB90e76BA912Fa4284789E3aa3DFCCB9Bf1934A46",
                b = (a = {}, Object(s.a)(a, c.a.MAINNET, [l.b.wbnb, l.b.ring, l.b.usdt, l.b.usdc]), Object(s.a)(a, c.a.TESTNET, [l.d.wbnb, l.d.ring]), a),
                y = Object(s.a)({}, c.a.MAINNET, {}),
                m = Object(s.a)({}, c.a.MAINNET, {}),
                f = (i = {}, Object(s.a)(i, c.a.MAINNET, [l.b.wbnb, l.b.ring, l.b.usdt, l.b.usdc]), Object(s.a)(i, c.a.TESTNET, [l.d.ring, l.d.wbnb]), i),
                h = (r = {}, Object(s.a)(r, c.a.MAINNET, [l.b.ring, l.b.wbnb, l.b.usdt, l.b.usdc]), Object(s.a)(r, c.a.TESTNET, [l.d.ring, l.d.wbnb]), r),
                j = (o = {}, Object(s.a)(o, c.a.MAINNET, [
                    [l.b.ring, l.b.wbnb]
                ]), Object(s.a)(o, c.a.TESTNET, [
                    [l.d.ring, l.d.wbnb]
                ]), o),
                v = 50,
                O = 1200,
                g = c.e.BigInt(0),
                w = new c.g(c.e.BigInt(1), c.e.BigInt(1e4)),
                x = c.e.BigInt(1e4),
                k = new c.g(c.e.BigInt(100), x),
                T = new c.g(c.e.BigInt(300), x),
                C = new c.g(c.e.BigInt(500), x),
                A = new c.g(c.e.BigInt(1e3), x),
                S = new c.g(c.e.BigInt(1500), x),
                E = c.e.exponentiate(c.e.BigInt(10), c.e.BigInt(16)),
                I = new c.g(c.e.BigInt(50), c.e.BigInt(1e4)),
                P = new c.g("0"),
                N = new c.g("1"),
                B = ["0x7F367cC41522cE07553e823bf3be79A889DEbe1B", "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b", "0x901bb9583b24D97e995513C6778dc6888AB6870e", "0xA7e5d5A720f06526557c513402f2e6B5fA20b008", "0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C"]
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return y
            })), n.d(t, "j", (function() {
                return m
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "h", (function() {
                return h
            })), n.d(t, "e", (function() {
                return j
            })), n.d(t, "l", (function() {
                return v
            })), n.d(t, "o", (function() {
                return O
            })), n.d(t, "p", (function() {
                return g
            })), n.d(t, "n", (function() {
                return w
            })), n.d(t, "q", (function() {
                return x
            })), n.d(t, "b", (function() {
                return k
            })), n.d(t, "k", (function() {
                return T
            })), n.d(t, "f", (function() {
                return C
            })), n.d(t, "g", (function() {
                return A
            })), n.d(t, "i", (function() {
                return E
            })), n.d(t, "a", (function() {
                return I
            })), n.d(t, "m", (function() {
                return P
            }));
            var a = n(11),
                i = n(7),
                r = n(240),
                o = n.n(r),
                s = n(0),
                c = n(25),
                l = n(34),
                u = n(26),
                d = n(42),
                p = n(33),
                b = n(63);

            function y() {
                var e = Object(c.b)(),
                    t = Object(c.c)((function(e) {
                        return e.user.audioPlay
                    })),
                    n = Object(s.useCallback)((function() {
                        e(t ? Object(p.i)() : Object(p.o)())
                    }), [t, e]);
                return [t, n]
            }

            function m() {
                var e = Object(c.b)();
                return [Object(c.c)((function(e) {
                    return e.user.showPhishingWarningBanner
                })), Object(s.useCallback)((function() {
                    e(Object(p.h)())
                }), [e])]
            }

            function f(e) {
                var t = Object(c.b)(),
                    n = Object(c.c)((function(e) {
                        return e.user.isExchangeChartDisplayed
                    }));
                return [!e && n, Object(s.useCallback)((function(e) {
                    t(Object(p.m)(e))
                }), [t])]
            }

            function h() {
                return Object(c.c)((function(e) {
                    return e.user.userExpertMode
                }))
            }

            function j() {
                var e = Object(c.b)(),
                    t = h(),
                    n = Object(s.useCallback)((function() {
                        e(Object(p.r)({
                            userExpertMode: !t
                        }))
                    }), [t, e]);
                return [t, n]
            }

            function v() {
                var e = Object(c.b)();
                return [Object(c.c)((function(e) {
                    return e.user.isDark
                })), Object(s.useCallback)((function() {
                    e(Object(p.n)())
                }), [e])]
            }

            function O() {
                var e = Object(c.b)();
                return [Object(c.c)((function(e) {
                    return e.user.userSingleHopOnly
                })), Object(s.useCallback)((function(t) {
                    e(Object(p.z)({
                        userSingleHopOnly: t
                    }))
                }), [e])]
            }

            function g() {
                var e = Object(c.b)();
                return [Object(c.c)((function(e) {
                    return e.user.userSlippageTolerance
                })), Object(s.useCallback)((function(t) {
                    e(Object(p.A)({
                        userSlippageTolerance: t
                    }))
                }), [e])]
            }

            function w() {
                var e = Object(c.b)();
                return [Object(c.c)((function(e) {
                    return e.user.userExpertModeAcknowledgementShow
                })), Object(s.useCallback)((function(t) {
                    e(Object(p.s)({
                        userExpertModeAcknowledgementShow: t
                    }))
                }), [e])]
            }

            function x() {
                var e = Object(c.b)();
                return [Object(c.c)((function(e) {
                    return e.user.userDeadline
                })), Object(s.useCallback)((function(t) {
                    e(Object(p.q)({
                        userDeadline: t
                    }))
                }), [e])]
            }

            function k() {
                var e = Object(c.b)();
                return Object(s.useCallback)((function(t) {
                    e(Object(p.e)({
                        serializedToken: Object(b.d)(t)
                    }))
                }), [e])
            }

            function T() {
                var e = Object(c.b)();
                return Object(s.useCallback)((function(t, n) {
                    e(Object(p.k)({
                        chainId: t,
                        address: n
                    }))
                }), [e])
            }

            function C() {
                var e = Object(c.c)((function(e) {
                    return e.user.gasPrice
                }));
                return "44" === i.a.MAINNET.toString() ? e : b.b.testnet
            }

            function A() {
                var e = Object(c.b)();
                return [C(), Object(s.useCallback)((function(t) {
                    e(Object(p.p)({
                        gasPrice: t
                    }))
                }), [e])]
            }

            function S(e) {
                return {
                    token0: Object(b.d)(e.token0),
                    token1: Object(b.d)(e.token1)
                }
            }

            function E() {
                var e = Object(c.b)();
                return Object(s.useCallback)((function(t) {
                    e(Object(p.d)({
                        serializedPair: S(t)
                    }))
                }), [e])
            }

            function I(e) {
                var t = Object(a.a)(e, 2),
                    n = t[0],
                    r = t[1];
                return new i.j(n.chainId, i.f.getAddress(n, r), 18, "Snow-LP", "Snowswap LPs")
            }

            function P() {
                var e = Object(u.a)().chainId,
                    t = Object(d.b)(),
                    n = Object(s.useMemo)((function() {
                        var t;
                        return e && null !== (t = l.r[e]) && void 0 !== t ? t : []
                    }), [e]),
                    i = Object(s.useMemo)((function() {
                        return e ? o()(Object.keys(t), (function(n) {
                            var a, i = t[n];
                            return (null !== (a = l.f[e]) && void 0 !== a ? a : []).map((function(e) {
                                return e.address === i.address ? null : [e, i]
                            })).filter((function(e) {
                                return null !== e
                            }))
                        })) : []
                    }), [t, e]),
                    r = Object(c.c)((function(e) {
                        return e.user.pairs
                    })),
                    p = Object(s.useMemo)((function() {
                        if (!e || !r) return [];
                        var t = r[e];
                        return t ? Object.keys(t).map((function(e) {
                            return [Object(b.c)(t[e].token0), Object(b.c)(t[e].token1)]
                        })) : []
                    }), [r, e]),
                    y = Object(s.useMemo)((function() {
                        return p.concat(i).concat(n)
                    }), [i, n, p]);
                return Object(s.useMemo)((function() {
                    var e = y.reduce((function(e, t) {
                        var n = Object(a.a)(t, 2),
                            i = n[0],
                            r = n[1],
                            o = i.sortsBefore(r),
                            s = o ? "".concat(i.address, ":").concat(r.address) : "".concat(r.address, ":").concat(i.address);
                        return e[s] || (e[s] = o ? [i, r] : [r, i]), e
                    }), {});
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                }), [y])
            }
        },
        374: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            }));
            n(11);
            var a = n(84),
                i = n.n(a),
                r = n(86),
                o = n(74),
                s = (n(125), n(135)),
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return new i.a(e).dividedBy(s.a.pow(t))
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return c(e, t).toFixed(n)
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18,
                        a = e.mod(r.a.BigNumber.from(10).pow(n - t));
                    return Object(o.formatUnits)(e.sub(a), n)
                }
        },
        378: function(e, t, n) {
            "use strict";
            var a = n(7),
                i = n(0),
                r = n(55),
                o = n(49);
            t.a = function(e, t, n) {
                var s = Object(r.g)(null === e || void 0 === e ? void 0 : e.address, !1),
                    c = Object(i.useMemo)((function() {
                        return [t, n]
                    }), [t, n]),
                    l = Object(o.c)(s, "allowance", c).result;
                return Object(i.useMemo)((function() {
                    return e && l ? new a.k(e, l.toString()) : void 0
                }), [e, l])
            }
        },
        379: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _e
            }));
            var a, i = n(16),
                r = n(11),
                o = n(10),
                s = n(0),
                c = n(2),
                l = n(4),
                u = n(243),
                d = n(23),
                p = n(7),
                b = n(35),
                y = n(136),
                m = n(26),
                f = n(42),
                h = n(30),
                j = n(29),
                v = n(21),
                O = n(34),
                g = n(60),
                w = n(46),
                x = n(1),
                k = l.e.div(a || (a = Object(o.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"])), (function(e) {
                    var t = e.theme;
                    return e.disable ? "transparent" : t.colors.dropdown
                }), (function(e) {
                    return !e.disable && "pointer"
                }), (function(e) {
                    var t = e.theme;
                    return !e.disable && t.colors.background
                }), (function(e) {
                    var t = e.theme;
                    return e.disable && t.colors.dropdown
                }), (function(e) {
                    return e.disable && "0.4"
                }));

            function T(e) {
                var t = e.chainId,
                    n = e.onSelect,
                    a = e.selectedCurrency,
                    i = Object(d.b)().t;
                return Object(x.jsxs)(j.a, {
                    gap: "md",
                    children: [Object(x.jsxs)(v.a, {
                        children: [Object(x.jsx)(c.eb, {
                            fontSize: "14px",
                            children: i("Common bases")
                        }), Object(x.jsx)(g.a, {
                            text: i("These tokens are commonly paired with other tokens."),
                            ml: "4px"
                        })]
                    }), Object(x.jsxs)(v.a, {
                        gap: "auto",
                        children: [Object(x.jsxs)(k, {
                            onClick: function() {
                                a && Object(p.o)(a, p.d) || n(p.d)
                            },
                            disable: a === p.d,
                            children: [Object(x.jsx)(w.a, {
                                currency: p.d,
                                style: {
                                    marginRight: 8
                                }
                            }), Object(x.jsx)(c.eb, {
                                children: "CRAB"
                            })]
                        }), (t ? O.u[t] : []).map((function(e) {
                            var t = a instanceof p.j && a.address === e.address;
                            return Object(x.jsxs)(k, {
                                onClick: function() {
                                    return !t && n(e)
                                },
                                disable: t,
                                children: [Object(x.jsx)(w.a, {
                                    currency: e,
                                    style: {
                                        marginRight: 8
                                    }
                                }), Object(x.jsx)(c.eb, {
                                    children: e.symbol
                                })]
                            }, e.address)
                        }))]
                    })]
                })
            }
            var C, A, S, E, I, P, N = n(40),
                B = n(410),
                R = n(48),
                F = n(89),
                M = n(59),
                U = n(79),
                D = n(167),
                L = n(108),
                Y = l.e.div(C || (C = Object(o.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 16px;\n  align-items: center;\n\n  opacity: ", ";\n"])), (function(e) {
                    return e.dim ? "0.4" : "1"
                })),
                K = Object(l.e)(c.p)(A || (A = Object(o.a)(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ", ";\n"])), (function(e) {
                    return e.theme.colors.success
                })),
                _ = l.e.div(S || (S = Object(o.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n"])));

            function W(e) {
                var t, n, a = e.token,
                    i = e.style,
                    r = e.dim,
                    o = e.showImportView,
                    s = e.setImportToken,
                    l = Object(m.a)().chainId,
                    u = Object(d.b)().t,
                    p = Object(M.e)(),
                    b = l && (null === p || void 0 === p || null === (t = p[l]) || void 0 === t || null === (n = t[a.address]) || void 0 === n ? void 0 : n.list),
                    y = Object(f.f)(a),
                    h = Object(f.e)(a);
                return Object(x.jsxs)(Y, {
                    style: i,
                    children: [Object(x.jsx)(L.a, {
                        currency: a,
                        size: "24px",
                        style: {
                            opacity: r ? "0.6" : "1"
                        }
                    }), Object(x.jsxs)(j.a, {
                        gap: "4px",
                        style: {
                            opacity: r ? "0.6" : "1"
                        },
                        children: [Object(x.jsxs)(v.a, {
                            children: [Object(x.jsx)(c.eb, {
                                children: a.symbol
                            }), Object(x.jsx)(c.eb, {
                                color: "textDisabled",
                                ml: "8px",
                                children: Object(x.jsx)(_, {
                                    title: a.name,
                                    children: a.name
                                })
                            })]
                        }), b && b.logoURI && Object(x.jsxs)(v.c, {
                            children: [Object(x.jsxs)(c.eb, {
                                small: !0,
                                mr: "4px",
                                color: "textSubtle",
                                children: [u("via"), " ", b.name]
                            }), Object(x.jsx)(w.c, {
                                logoURI: b.logoURI,
                                size: "12px"
                            })]
                        })]
                    }), h || y ? Object(x.jsxs)(v.c, {
                        style: {
                            minWidth: "fit-content"
                        },
                        children: [Object(x.jsx)(K, {}), Object(x.jsx)(c.eb, {
                            color: "success",
                            children: "Active"
                        })]
                    }) : Object(x.jsx)(c.i, {
                        width: "fit-content",
                        onClick: function() {
                            s && s(a), o()
                        },
                        children: u("Import")
                    })]
                })
            }

            function z(e) {
                return e instanceof p.j ? e.address : e === p.d ? "ETHER" : ""
            }
            var q = Object(l.e)(c.eb)(E || (E = Object(o.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]))),
                V = l.e.div(I || (I = Object(o.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-gap: 16px;\n  align-items: center;\n"])));

            function H(e) {
                var t = e.balance;
                return Object(x.jsx)(q, {
                    title: t.toExact(),
                    children: t.toSignificant(4)
                })
            }
            var G = Object(l.e)(v.b)(P || (P = Object(o.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);\n  grid-gap: 8px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"])), (function(e) {
                return !e.disabled && "pointer"
            }), (function(e) {
                return e.disabled && "none"
            }), (function(e) {
                var t = e.theme;
                return !e.disabled && t.colors.background
            }), (function(e) {
                var t = e.disabled,
                    n = e.selected;
                return t || n ? .5 : 1
            }));

            function $(e) {
                var t = e.currency,
                    n = e.onSelect,
                    a = e.isSelected,
                    i = e.otherSelected,
                    r = e.style,
                    o = Object(m.a)().account,
                    s = z(t),
                    l = Object(M.d)(),
                    u = Object(h.j)(l, t),
                    d = Object(f.f)(t),
                    p = Object(U.b)(null !== o && void 0 !== o ? o : void 0, t);
                return Object(x.jsxs)(G, {
                    style: r,
                    className: "token-item-".concat(s),
                    onClick: function() {
                        return a ? null : n()
                    },
                    disabled: a,
                    selected: i,
                    children: [Object(x.jsx)(w.a, {
                        currency: t,
                        size: "24px"
                    }), Object(x.jsxs)(j.c, {
                        children: [Object(x.jsx)(c.eb, {
                            bold: !0,
                            children: t.symbol
                        }), Object(x.jsxs)(c.eb, {
                            color: "textSubtle",
                            small: !0,
                            ellipsis: !0,
                            maxWidth: "200px",
                            children: [!u && d && "Added by user \u2022", " ", t.name]
                        })]
                    }), Object(x.jsx)(v.c, {
                        style: {
                            justifySelf: "flex-end"
                        },
                        children: p ? Object(x.jsx)(H, {
                            balance: p
                        }) : o ? Object(x.jsx)(D.a, {}) : null
                    })]
                })
            }

            function J(e) {
                var t = e.height,
                    n = e.currencies,
                    a = e.selectedCurrency,
                    i = e.onCurrencySelect,
                    r = e.otherCurrency,
                    o = e.fixedListRef,
                    l = e.showETH,
                    u = e.showImportView,
                    b = e.setImportToken,
                    y = e.breakIndex,
                    h = Object(s.useMemo)((function() {
                        var e = l ? [p.b.ETHER].concat(Object(N.a)(n)) : n;
                        return void 0 !== y && (e = [].concat(Object(N.a)(e.slice(0, y)), [void 0], Object(N.a)(e.slice(y, e.length)))), e
                    }), [y, n, l]),
                    j = Object(m.a)().chainId,
                    O = Object(d.b)().t,
                    w = Object(f.a)(),
                    k = Object(s.useCallback)((function(e) {
                        var t = e.data,
                            n = e.index,
                            o = e.style,
                            s = t[n],
                            l = Boolean(a && Object(p.o)(a, s)),
                            d = Boolean(r && Object(p.o)(r, s)),
                            m = Object(R.b)(s, j),
                            f = w && m && Object.keys(w).includes(m.address);
                        return n !== y && t ? f && m ? Object(x.jsx)(W, {
                            style: o,
                            token: m,
                            showImportView: u,
                            setImportToken: b,
                            dim: !0
                        }) : Object(x.jsx)($, {
                            style: o,
                            currency: s,
                            isSelected: l,
                            onSelect: function() {
                                return i(s)
                            },
                            otherSelected: d
                        }) : Object(x.jsx)(V, {
                            style: o,
                            children: Object(x.jsx)(F.c, {
                                padding: "8px 12px",
                                borderRadius: "8px",
                                children: Object(x.jsxs)(v.b, {
                                    children: [Object(x.jsx)(c.eb, {
                                        small: !0,
                                        children: O("Expanded results from inactive Token Lists")
                                    }), Object(x.jsx)(g.a, {
                                        text: O("Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."),
                                        ml: "4px"
                                    })]
                                })
                            })
                        })
                    }), [j, w, i, r, a, b, u, y, O]),
                    T = Object(s.useCallback)((function(e, t) {
                        return z(t[e])
                    }), []);
                return Object(x.jsx)(B.a, {
                    height: t,
                    ref: o,
                    width: "100%",
                    itemData: h,
                    itemCount: h.length,
                    itemSize: 56,
                    itemKey: T,
                    children: k
                })
            }
            var Q = n(173);
            var Z = function(e) {
                    var t = Object(U.a)(),
                        n = Object(s.useMemo)((function() {
                            return function(e) {
                                return function(t, n) {
                                    var a, i, r = (a = e[t.address], i = e[n.address], a && i ? a.greaterThan(i) ? -1 : a.equalTo(i) ? 0 : 1 : a && a.greaterThan("0") ? -1 : i && i.greaterThan("0") ? 1 : 0);
                                    return 0 !== r ? r : t.symbol && n.symbol ? t.symbol.toLowerCase() < n.symbol.toLowerCase() ? -1 : 1 : t.symbol || n.symbol ? -1 : 0
                                }
                            }(null !== t && void 0 !== t ? t : {})
                        }), [t]);
                    return Object(s.useMemo)((function() {
                        return e ? function(e, t) {
                            return -1 * n(e, t)
                        } : n
                    }), [e, n])
                },
                X = new Audio("swap.mp3");
            var ee, te = function(e) {
                    var t = e.selectedCurrency,
                        n = e.onCurrencySelect,
                        a = e.otherSelectedCurrency,
                        i = e.showCommonBases,
                        o = e.showImportView,
                        l = e.setImportToken,
                        u = Object(d.b)().t,
                        O = Object(m.a)().chainId,
                        g = Object(s.useRef)(),
                        w = Object(s.useState)(""),
                        k = Object(r.a)(w, 2),
                        C = k[0],
                        A = k[1],
                        S = Object(y.a)(C, 200),
                        E = Object(s.useState)(!1),
                        I = Object(r.a)(E, 1)[0],
                        P = Object(f.b)(),
                        N = Object(f.g)(S),
                        B = Object(f.f)(N),
                        R = Object(b.c)(),
                        F = Object(r.a)(R, 1)[0],
                        M = Object(s.useMemo)((function() {
                            var e = S.toLowerCase().trim();
                            return "" === e || "c" === e || "cr" === e || "cra" === e || "crab" === e
                        }), [S]),
                        U = Z(I),
                        D = Object(s.useMemo)((function() {
                            return Object(Q.a)(Object.values(P), S)
                        }), [P, S]),
                        L = Object(s.useMemo)((function() {
                            return D.sort(U)
                        }), [D, U]),
                        Y = Object(Q.b)(L, S),
                        K = Object(s.useCallback)((function(e) {
                            n(e), F && X.play()
                        }), [F, n]),
                        _ = Object(s.useRef)();
                    Object(s.useEffect)((function() {
                        _.current.focus()
                    }), []);
                    var z = Object(s.useCallback)((function(e) {
                            var t, n = e.target.value,
                                a = Object(h.i)(n);
                            A(a || n), null === (t = g.current) || void 0 === t || t.scrollTo(0)
                        }), []),
                        q = Object(s.useCallback)((function(e) {
                            if ("Enter" === e.key)
                                if ("crab" === S.toLowerCase().trim()) K(p.d);
                                else if (Y.length > 0) {
                                var t;
                                (null === (t = Y[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== S.trim().toLowerCase() && 1 !== Y.length || K(Y[0])
                            }
                        }), [Y, K, S]),
                        V = Object(f.d)(S),
                        H = Object(Q.b)(V, S);
                    return Object(x.jsx)(x.Fragment, {
                        children: Object(x.jsxs)("div", {
                            children: [Object(x.jsxs)(j.a, {
                                gap: "16px",
                                children: [Object(x.jsx)(v.d, {
                                    children: Object(x.jsx)(c.G, {
                                        id: "token-search-input",
                                        placeholder: u("Search name or paste address"),
                                        scale: "lg",
                                        autoComplete: "off",
                                        value: C,
                                        ref: _,
                                        onChange: z,
                                        onKeyDown: q
                                    })
                                }), i && Object(x.jsx)(T, {
                                    chainId: O,
                                    onSelect: K,
                                    selectedCurrency: t
                                })]
                            }), N && !B ? Object(x.jsx)(j.c, {
                                style: {
                                    padding: "20px 0",
                                    height: "100%"
                                },
                                children: Object(x.jsx)(W, {
                                    token: N,
                                    showImportView: o,
                                    setImportToken: l
                                })
                            }) : (null === Y || void 0 === Y ? void 0 : Y.length) > 0 || (null === H || void 0 === H ? void 0 : H.length) > 0 ? Object(x.jsx)(c.h, {
                                margin: "24px -24px",
                                children: Object(x.jsx)(J, {
                                    height: 390,
                                    showETH: M,
                                    currencies: H ? Y.concat(H) : Y,
                                    breakIndex: V && Y ? Y.length : void 0,
                                    onCurrencySelect: K,
                                    otherCurrency: a,
                                    selectedCurrency: t,
                                    fixedListRef: g,
                                    showImportView: o,
                                    setImportToken: l
                                })
                            }) : Object(x.jsx)(j.c, {
                                style: {
                                    padding: "20px",
                                    height: "100%"
                                },
                                children: Object(x.jsx)(c.eb, {
                                    color: "textSubtle",
                                    textAlign: "center",
                                    mb: "20px",
                                    children: u("No results found.")
                                })
                            })]
                        })
                    })
                },
                ne = n(248),
                ae = n(5),
                ie = n.n(ae),
                re = n(31),
                oe = n(25),
                se = n(58),
                ce = n(163),
                le = n(169),
                ue = n(64),
                de = n(143);
            ! function(e) {
                e[e.search = 0] = "search", e[e.manage = 1] = "manage", e[e.importToken = 2] = "importToken", e[e.importList = 3] = "importList"
            }(ee || (ee = {}));
            var pe, be, ye;
            var me = Object(l.e)(j.c)(pe || (pe = Object(o.a)(["\n  width: 100%;\n  height: 100%;\n"]))),
                fe = Object(l.e)(v.d)(be || (be = Object(o.a)(["\n  background-color: ", ";\n  border: solid 1px;\n  border-color: ", ";\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n"])), (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t ? "".concat(n.colors.success, "19") : "transparent"
                }), (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t ? n.colors.success : n.colors.tertiary
                }));

            function he(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var je = Object(s.memo)((function(e) {
                    var t, n = e.listUrl,
                        a = Object(oe.c)((function(e) {
                            return e.lists.byUrl
                        })),
                        i = Object(oe.b)(),
                        r = a[n],
                        o = r.current,
                        l = r.pendingUpdate,
                        u = Object(M.g)(n),
                        p = Object(d.b)().t,
                        b = Object(s.useCallback)((function() {
                            l && i(Object(ue.a)(n))
                        }), [i, n, l]),
                        y = Object(s.useCallback)((function() {
                            window.confirm("Please confirm you would like to remove this list") && i(Object(ue.f)(n))
                        }), [i, n]),
                        m = Object(s.useCallback)((function() {
                            i(Object(ue.d)(n))
                        }), [i, n]),
                        f = Object(s.useCallback)((function() {
                            i(Object(ue.c)(n))
                        }), [i, n]),
                        h = Object(c.vb)(Object(x.jsxs)("div", {
                            children: [Object(x.jsx)(c.eb, {
                                children: o && (t = o.version, "v".concat(t.major, ".").concat(t.minor, ".").concat(t.patch))
                            }), Object(x.jsx)(c.I, {
                                external: !0,
                                href: "https://tokenlists.org/token-list?url=".concat(n),
                                children: p("See")
                            }), Object(x.jsx)(c.i, {
                                variant: "danger",
                                scale: "xs",
                                onClick: y,
                                disabled: 1 === Object.keys(a).length,
                                children: p("Remove")
                            }), l && Object(x.jsx)(c.i, {
                                variant: "text",
                                onClick: b,
                                style: {
                                    fontSize: "12px"
                                },
                                children: p("Update list")
                            })]
                        }), {
                            placement: "right-end",
                            trigger: "click"
                        }),
                        O = h.targetRef,
                        g = h.tooltip,
                        k = h.tooltipVisible;
                    return o ? Object(x.jsxs)(fe, {
                        active: u,
                        id: he(n),
                        children: [k && g, o.logoURI ? Object(x.jsx)(w.c, {
                            size: "40px",
                            style: {
                                marginRight: "1rem"
                            },
                            logoURI: o.logoURI,
                            alt: "".concat(o.name, " list logo")
                        }) : Object(x.jsx)("div", {
                            style: {
                                width: "24px",
                                height: "24px",
                                marginRight: "1rem"
                            }
                        }), Object(x.jsxs)(j.c, {
                            style: {
                                flex: "1"
                            },
                            children: [Object(x.jsx)(v.d, {
                                children: Object(x.jsx)(c.eb, {
                                    bold: !0,
                                    children: o.name
                                })
                            }), Object(x.jsxs)(v.c, {
                                mt: "4px",
                                children: [Object(x.jsxs)(c.eb, {
                                    fontSize: "12px",
                                    mr: "6px",
                                    textTransform: "lowercase",
                                    children: [o.tokens.length, " ", p("Tokens")]
                                }), Object(x.jsx)("span", {
                                    ref: O,
                                    children: Object(x.jsx)(c.v, {
                                        color: "text",
                                        width: "12px"
                                    })
                                })]
                            })]
                        }), Object(x.jsx)(c.gb, {
                            checked: u,
                            onChange: function() {
                                u ? f() : m()
                            }
                        })]
                    }, n) : null
                })),
                ve = l.e.div(ye || (ye = Object(o.a)(["\n  padding: 1rem 0;\n  height: 100%;\n  overflow: auto;\n"])));
            var Oe, ge, we, xe = function(e) {
                    var t = e.setModalView,
                        n = e.setImportList,
                        a = e.setListUrl,
                        i = Object(s.useState)(""),
                        o = Object(r.a)(i, 2),
                        l = o[0],
                        u = o[1],
                        p = Object(d.b)().t,
                        b = Object(M.c)(),
                        y = Object(M.b)(),
                        m = Object(s.useState)(),
                        f = Object(r.a)(m, 2),
                        h = f[0],
                        O = f[1];
                    Object(s.useEffect)((function() {
                        !h && y && O(y)
                    }), [h, y]);
                    var g = Object(s.useCallback)((function(e) {
                            u(e.target.value)
                        }), []),
                        k = Object(le.a)(),
                        T = Object(s.useMemo)((function() {
                            return Object(de.a)(l).length > 0 || Boolean(Object(ce.a)(l))
                        }), [l]),
                        C = Object(s.useMemo)((function() {
                            return Object.keys(b).filter((function(e) {
                                return Boolean(b[e].current) && !se.c.includes(e)
                            })).sort((function(e, t) {
                                var n = b[e].current,
                                    a = b[t].current;
                                return (null === h || void 0 === h ? void 0 : h.includes(e)) && !(null === h || void 0 === h ? void 0 : h.includes(t)) ? -1 : !(null === h || void 0 === h ? void 0 : h.includes(e)) && (null === h || void 0 === h ? void 0 : h.includes(t)) ? 1 : n && a ? n.name.toLowerCase() < a.name.toLowerCase() ? -1 : n.name.toLowerCase() === a.name.toLowerCase() ? 0 : 1 : n ? -1 : a ? 1 : 0
                            }))
                        }), [b, h]),
                        A = Object(s.useState)(),
                        S = Object(r.a)(A, 2),
                        E = S[0],
                        I = S[1],
                        P = Object(s.useState)(),
                        N = Object(r.a)(P, 2),
                        B = N[0],
                        R = N[1];
                    Object(s.useEffect)((function() {
                        function e() {
                            return (e = Object(re.a)(ie.a.mark((function e() {
                                return ie.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            k(l, !1).then((function(e) {
                                                return I(e)
                                            })).catch((function() {
                                                return R("Error importing list")
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        T ? function() {
                            e.apply(this, arguments)
                        }() : (I(void 0), "" !== l && R("Enter valid list location")), "" === l && R(void 0)
                    }), [k, l, T]);
                    var U = Object.keys(b).includes(l),
                        D = Object(s.useCallback)((function() {
                            E && (n(E), t(ee.importList), a(l))
                        }), [l, n, a, t, E]);
                    return Object(x.jsxs)(me, {
                        children: [Object(x.jsxs)(j.a, {
                            gap: "14px",
                            children: [Object(x.jsx)(v.d, {
                                children: Object(x.jsx)(c.G, {
                                    id: "list-add-input",
                                    scale: "lg",
                                    placeholder: p("https:// or ipfs:// or ENS name"),
                                    value: l,
                                    onChange: g
                                })
                            }), B ? Object(x.jsx)(c.eb, {
                                color: "failure",
                                style: {
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                children: B
                            }) : null]
                        }), E && Object(x.jsx)(j.a, {
                            style: {
                                paddingTop: 0
                            },
                            children: Object(x.jsx)(F.d, {
                                padding: "12px 20px",
                                children: Object(x.jsxs)(v.b, {
                                    children: [Object(x.jsxs)(v.c, {
                                        children: [E.logoURI && Object(x.jsx)(w.c, {
                                            logoURI: E.logoURI,
                                            size: "40px"
                                        }), Object(x.jsxs)(j.a, {
                                            gap: "4px",
                                            style: {
                                                marginLeft: "20px"
                                            },
                                            children: [Object(x.jsx)(c.eb, {
                                                bold: !0,
                                                children: E.name
                                            }), Object(x.jsxs)(c.eb, {
                                                color: "textSubtle",
                                                small: !0,
                                                textTransform: "lowercase",
                                                children: [E.tokens.length, " ", p("Tokens")]
                                            })]
                                        })]
                                    }), U ? Object(x.jsxs)(v.c, {
                                        children: [Object(x.jsx)(c.q, {
                                            width: "16px",
                                            mr: "10px"
                                        }), Object(x.jsx)(c.eb, {
                                            children: p("Loaded")
                                        })]
                                    }) : Object(x.jsx)(c.i, {
                                        width: "fit-content",
                                        onClick: D,
                                        children: p("Import")
                                    })]
                                })
                            })
                        }), Object(x.jsx)(ve, {
                            children: Object(x.jsx)(j.a, {
                                gap: "md",
                                children: C.map((function(e) {
                                    return Object(x.jsx)(je, {
                                        listUrl: e
                                    }, e)
                                }))
                            })
                        })]
                    })
                },
                ke = n(191),
                Te = l.e.div(Oe || (Oe = Object(o.a)(["\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n"]))),
                Ce = l.e.div(ge || (ge = Object(o.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));

            function Ae(e) {
                var t = e.setModalView,
                    n = e.setImportToken,
                    a = Object(m.a)().chainId,
                    i = Object(d.b)().t,
                    o = Object(s.useState)(""),
                    l = Object(r.a)(o, 2),
                    u = l[0],
                    p = l[1],
                    y = Object(s.useRef)(),
                    O = Object(s.useCallback)((function(e) {
                        var t = e.target.value,
                            n = Object(h.i)(t);
                        p(n || t)
                    }), []),
                    g = Object(f.g)(u),
                    k = Object(ke.a)(),
                    T = Object(b.k)(),
                    C = Object(s.useCallback)((function() {
                        a && k && k.map((function(e) {
                            return T(a, e.address)
                        }))
                    }), [T, k, a]),
                    A = Object(s.useMemo)((function() {
                        return a && k.map((function(e) {
                            return Object(x.jsxs)(v.b, {
                                width: "100%",
                                children: [Object(x.jsxs)(v.c, {
                                    children: [Object(x.jsx)(w.a, {
                                        currency: e,
                                        size: "20px"
                                    }), Object(x.jsx)(c.H, {
                                        external: !0,
                                        href: Object(h.e)(e.address, "address", a),
                                        color: "textSubtle",
                                        ml: "10px",
                                        children: e.symbol
                                    })]
                                }), Object(x.jsxs)(v.c, {
                                    children: [Object(x.jsx)(c.F, {
                                        variant: "text",
                                        onClick: function() {
                                            return T(a, e.address)
                                        },
                                        children: Object(x.jsx)(c.u, {})
                                    }), Object(x.jsx)(c.I, {
                                        href: Object(h.e)(e.address, "address", a)
                                    })]
                                })]
                            }, e.address)
                        }))
                    }), [k, a, T]),
                    S = "" === u || Object(h.i)(u);
                return Object(x.jsx)(Te, {
                    children: Object(x.jsxs)(j.c, {
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: [Object(x.jsxs)(j.a, {
                            gap: "14px",
                            children: [Object(x.jsx)(v.d, {
                                children: Object(x.jsx)(c.G, {
                                    id: "token-search-input",
                                    scale: "lg",
                                    placeholder: "0x0000",
                                    value: u,
                                    autoComplete: "off",
                                    ref: y,
                                    onChange: O,
                                    isWarning: !S
                                })
                            }), !S && Object(x.jsx)(c.eb, {
                                color: "failure",
                                children: i("Enter valid token address")
                            }), g && Object(x.jsx)(W, {
                                token: g,
                                showImportView: function() {
                                    return t(ee.importToken)
                                },
                                setImportToken: n,
                                style: {
                                    height: "fit-content"
                                }
                            })]
                        }), A, Object(x.jsxs)(Ce, {
                            children: [Object(x.jsxs)(c.eb, {
                                bold: !0,
                                color: "textSubtle",
                                children: [null === k || void 0 === k ? void 0 : k.length, " ", 1 === k.length ? i("Custom Token") : i("Custom Tokens")]
                            }), k.length > 0 && Object(x.jsx)(c.i, {
                                variant: "tertiary",
                                onClick: C,
                                children: i("Clear all")
                            })]
                        })]
                    })
                })
            }
            var Se = Object(l.e)(c.j)(we || (we = Object(o.a)(["\n  width: 100%;\n"])));

            function Ee(e) {
                var t = e.setModalView,
                    n = e.setImportList,
                    a = e.setImportToken,
                    i = e.setListUrl,
                    o = Object(s.useState)(!0),
                    l = Object(r.a)(o, 2),
                    u = l[0],
                    p = l[1],
                    b = Object(d.b)().t;
                return Object(x.jsxs)(c.Q, {
                    children: [Object(x.jsxs)(Se, {
                        activeIndex: u ? 0 : 1,
                        onItemClick: function() {
                            return p((function(e) {
                                return !e
                            }))
                        },
                        scale: "sm",
                        variant: "subtle",
                        mb: "32px",
                        children: [Object(x.jsx)(c.k, {
                            width: "50%",
                            children: b("Lists")
                        }), Object(x.jsx)(c.k, {
                            width: "50%",
                            children: b("Tokens")
                        })]
                    }), u ? Object(x.jsx)(xe, {
                        setModalView: t,
                        setImportList: n,
                        setListUrl: i
                    }) : Object(x.jsx)(Ae, {
                        setModalView: t,
                        setImportToken: a
                    })]
                })
            }
            var Ie, Pe, Ne = n(139),
                Be = l.e.div(Ie || (Ie = Object(o.a)(["\n  position: relative;\n  width: 100%;\n"]))),
                Re = l.e.div(Pe || (Pe = Object(o.a)(["\n  height: 3px;\n  width: 3px;\n  background-color: ", ";\n  border-radius: 50%;\n"])), (function(e) {
                    return e.theme.colors.text
                }));
            var Fe, Me, Ue, De = function(e) {
                    var t, n = e.listURL,
                        a = e.list,
                        i = e.onImport,
                        o = Object(Ne.a)().theme,
                        l = Object(oe.b)(),
                        u = Object(d.b)().t,
                        p = Object(s.useState)(!1),
                        b = Object(r.a)(p, 2),
                        y = b[0],
                        m = b[1],
                        f = Object(M.c)(),
                        h = Object(le.a)(),
                        O = Boolean(null === (t = f[n]) || void 0 === t ? void 0 : t.loadingRequestId),
                        g = Object(s.useState)(null),
                        k = Object(r.a)(g, 2),
                        T = k[0],
                        C = k[1],
                        A = Object(s.useCallback)((function() {
                            O || (C(null), h(n).then((function() {
                                l(Object(ue.d)(n)), i()
                            })).catch((function(e) {
                                C(e.message), l(Object(ue.f)(n))
                            })))
                        }), [O, l, h, n, i]);
                    return Object(x.jsx)(Be, {
                        children: Object(x.jsx)(j.a, {
                            gap: "md",
                            children: Object(x.jsxs)(j.a, {
                                gap: "md",
                                children: [Object(x.jsx)(F.d, {
                                    padding: "12px 20px",
                                    children: Object(x.jsx)(v.b, {
                                        children: Object(x.jsxs)(v.c, {
                                            children: [a.logoURI && Object(x.jsx)(w.c, {
                                                logoURI: a.logoURI,
                                                size: "40px"
                                            }), Object(x.jsxs)(j.a, {
                                                gap: "sm",
                                                style: {
                                                    marginLeft: "20px"
                                                },
                                                children: [Object(x.jsxs)(v.c, {
                                                    children: [Object(x.jsx)(c.eb, {
                                                        bold: !0,
                                                        mr: "6px",
                                                        children: a.name
                                                    }), Object(x.jsx)(Re, {}), Object(x.jsxs)(c.eb, {
                                                        small: !0,
                                                        color: "textSubtle",
                                                        ml: "6px",
                                                        children: [a.tokens.length, " tokens"]
                                                    })]
                                                }), Object(x.jsx)(c.H, {
                                                    small: !0,
                                                    external: !0,
                                                    ellipsis: !0,
                                                    maxWidth: "90%",
                                                    href: "https://tokenlists.org/token-list?url=".concat(n),
                                                    children: n
                                                })]
                                            })]
                                        })
                                    })
                                }), Object(x.jsx)(c.M, {
                                    variant: "danger",
                                    children: Object(x.jsxs)(c.A, {
                                        flexDirection: "column",
                                        children: [Object(x.jsx)(c.eb, {
                                            fontSize: "20px",
                                            textAlign: "center",
                                            color: o.colors.failure,
                                            mb: "16px",
                                            children: u("Import at your own risk")
                                        }), Object(x.jsx)(c.eb, {
                                            color: o.colors.failure,
                                            mb: "8px",
                                            children: u("By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.")
                                        }), Object(x.jsx)(c.eb, {
                                            bold: !0,
                                            color: o.colors.failure,
                                            mb: "16px",
                                            children: "string"
                                        }), Object(x.jsxs)(c.A, {
                                            alignItems: "center",
                                            children: [Object(x.jsx)(c.o, {
                                                name: "confirmed",
                                                type: "checkbox",
                                                checked: y,
                                                onChange: function() {
                                                    return m(!y)
                                                },
                                                scale: "sm"
                                            }), Object(x.jsx)(c.eb, {
                                                ml: "10px",
                                                style: {
                                                    userSelect: "none"
                                                },
                                                children: u("I understand")
                                            })]
                                        })]
                                    })
                                }), Object(x.jsx)(c.i, {
                                    disabled: !y,
                                    onClick: A,
                                    children: u("Import")
                                }), T ? Object(x.jsx)(c.eb, {
                                    color: "failure",
                                    style: {
                                        textOverflow: "ellipsis",
                                        overflow: "hidden"
                                    },
                                    children: T
                                }) : null]
                            })
                        })
                    })
                },
                Le = l.e.div(Fe || (Fe = Object(o.a)(["\n  width: 100%;\n  background-color: ", ";\n  text-align: center;\n"])), (function(e) {
                    return e.theme.colors.backgroundAlt
                })),
                Ye = Object(l.e)(c.S)(Me || (Me = Object(o.a)(["\n  max-width: 420px;\n  width: 100%;\n"]))),
                Ke = Object(l.e)(c.Q)(Ue || (Ue = Object(o.a)(["\n  padding: 24px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));

            function _e(e) {
                var t, n = e.onDismiss,
                    a = void 0 === n ? function() {
                        return null
                    } : n,
                    o = e.onCurrencySelect,
                    l = e.selectedCurrency,
                    p = e.otherSelectedCurrency,
                    b = e.showCommonBases,
                    y = void 0 !== b && b,
                    m = Object(s.useState)(ee.search),
                    f = Object(r.a)(m, 2),
                    h = f[0],
                    j = f[1],
                    v = Object(s.useCallback)((function(e) {
                        a(), o(e)
                    }), [a, o]),
                    O = Object(u.a)(h),
                    g = Object(s.useState)(),
                    w = Object(r.a)(g, 2),
                    k = w[0],
                    T = w[1],
                    C = Object(s.useState)(),
                    A = Object(r.a)(C, 2),
                    S = A[0],
                    E = A[1],
                    I = Object(s.useState)(),
                    P = Object(r.a)(I, 2),
                    N = P[0],
                    B = P[1],
                    R = Object(d.b)().t,
                    F = (t = {}, Object(i.a)(t, ee.search, {
                        title: R("Select a Token"),
                        onBack: void 0
                    }), Object(i.a)(t, ee.manage, {
                        title: R("Manage"),
                        onBack: function() {
                            return j(ee.search)
                        }
                    }), Object(i.a)(t, ee.importToken, {
                        title: R("Import Tokens"),
                        onBack: function() {
                            return j(O && O !== ee.importToken ? O : ee.search)
                        }
                    }), Object(i.a)(t, ee.importList, {
                        title: R("Import List"),
                        onBack: function() {
                            return j(ee.search)
                        }
                    }), t);
                return Object(x.jsxs)(Ye, {
                    minWidth: "320px",
                    children: [Object(x.jsxs)(c.T, {
                        children: [Object(x.jsxs)(c.V, {
                            children: [F[h].onBack && Object(x.jsx)(c.P, {
                                onBack: F[h].onBack
                            }), Object(x.jsx)(c.C, {
                                children: F[h].title
                            })]
                        }), Object(x.jsx)(c.R, {
                            onDismiss: a
                        })]
                    }), Object(x.jsxs)(Ke, {
                        children: [h === ee.search ? Object(x.jsx)(te, {
                            onCurrencySelect: v,
                            selectedCurrency: l,
                            otherSelectedCurrency: p,
                            showCommonBases: y,
                            showImportView: function() {
                                return j(ee.importToken)
                            },
                            setImportToken: T
                        }) : h === ee.importToken && k ? Object(x.jsx)(ne.a, {
                            tokens: [k],
                            handleCurrencySelect: v
                        }) : h === ee.importList && S && N ? Object(x.jsx)(De, {
                            list: S,
                            listURL: N,
                            onImport: function() {
                                return j(ee.manage)
                            }
                        }) : h === ee.manage ? Object(x.jsx)(Ee, {
                            setModalView: j,
                            setImportToken: T,
                            setImportList: E,
                            setListUrl: B
                        }) : "", h === ee.search && Object(x.jsx)(Le, {
                            children: Object(x.jsx)(c.i, {
                                scale: "sm",
                                variant: "text",
                                onClick: function() {
                                    return j(ee.manage)
                                },
                                className: "list-token-manage-button",
                                children: R("Manage Tokens")
                            })
                        })]
                    })]
                })
            }
        },
        387: function(e) {
            e.exports = JSON.parse('{"name":"Pancake Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["pancake","unsupported"],"tokens":[]}')
        },
        390: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implementsERC721","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"_tokenId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenMetadata","outputs":[{"name":"_infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_approvedAddress","type":"address"},{"name":"_metadata","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numTokensTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"getOwnerTokens","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')
        },
        391: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        392: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        393: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]')
        },
        394: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"address","name":"_pancakeProfileAddress","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"campaignId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"thresholdPoints","type":"uint256"}],"name":"PointParametersSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"offeringAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"raisingAmountPool","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"pid","type":"uint8"}],"name":"PoolParametersSet","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"campaignId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"depositPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"harvestPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberPools","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract PancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_offeringAmountPool","type":"uint256"},{"internalType":"uint256","name":"_raisingAmountPool","type":"uint256"},{"internalType":"uint256","name":"_limitPerUserInLP","type":"uint256"},{"internalType":"bool","name":"_hasTax","type":"bool"},{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"thresholdPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_thresholdPoints","type":"uint256"}],"name":"updatePointParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolInformation","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"viewPoolTaxRateOverflow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserAllocationPools","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint8[]","name":"_pids","type":"uint8[]"}],"name":"viewUserOfferingAndRefundingAmountsForPools","outputs":[{"internalType":"uint256[3][]","name":"","type":"uint256[3][]"}],"stateMutability":"view","type":"function"}]')
        },
        395: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[],"name":"Lock","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NonFungibleTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"recoverNonFungibleToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"recoverToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"tokensOfOwnerBySize","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        396: function(e) {
            e.exports = JSON.parse('[{"constant":false,"inputs":[{"internalType":"address","name":"rewardsToken","type":"address"},{"internalType":"address","name":"stakingToken","type":"address"},{"internalType":"uint256","name":"rewardsDuration","type":"uint256"},{"internalType":"uint256","name":"rewardsAmount","type":"uint256"},{"internalType":"uint256","name":"rewardsTime","type":"uint256"}],"name":"deploy","outputs":[{"internalType":"address","name":"pool","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"address","name":"rewardsToken","type":"address"},{"indexed":false,"internalType":"address","name":"stakingToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardsDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardsTime","type":"uint256"}],"name":"Deployed","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pool","type":"address"}],"name":"Started","type":"event"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolsInfo","outputs":[{"internalType":"uint256","name":"rewardsTime","type":"uint256"},{"internalType":"uint256","name":"rewardsAmount","type":"uint256"},{"internalType":"address","name":"rewardsToken","type":"address"},{"internalType":"bool","name":"started","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"poolsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        397: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        398: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        399: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        405: function(e) {
            e.exports = JSON.parse('{"Farm":"Farm","Staking":"Staking","Syrup Pool":"Syrup Pool","Exchange":"Exchange","Docs":"Docs","Voting":"Voting","Lottery":"Lottery","Connect Wallet":"Connect Wallet","Your %asset% Balance":"Your %asset% Balance","Total %asset% Supply":"Total %asset% Supply","Locked":"Locked","Pending harvest":"Pending harvest","New rewards per block":"New rewards per block","Total CAKE burned since launch":"Total CAKE burned since launch","See the Kitchen":"See the Kitchen","Telegram":"Telegram","Blog":"Blog","Github":"Github","Twitter":"Twitter","Deposit":"Deposit","Earn":"Earn","Stake LP tokens to stack CAKE":"Stake LP tokens to stack CAKE","You can swap back anytime":"You can swap back anytime","%asset% Earned":"%asset% Earned","Tokens Staked":"Tokens Staked","Every time you stake and unstake CAKE tokens, the contract will automagically harvest CAKE rewards for you!":"Every time you stake and unstake CAKE tokens, the contract will automagically harvest CAKE rewards for you!","XVS Tokens Earned":"XVS Tokens Earned","Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.":"Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.","Pool":"Pool","Coming Soon":"Coming Soon","APY":"APY","Total Liquidity":"Total Liquidity","View on Subview":"View on Subview","Cake price":"Cake price","%asset% Tokens Earned":"%asset% Tokens Earned","%num% blocks until farming ends":"%num% blocks until farming ends","Coming Soon...":"Coming Soon...","Your Stake":"Your Stake","Farming starts in %num% Blocks":"Farming starts in %num% Blocks","Finished":"Finished","Farming ends in %num% Blocks":"Farming ends in %num% Blocks","Project site":"Project site","Project Site":"Project Site","See Token Info":"See Token Info","You can unstake at any time.":"You can unstake at any time.","Rewards are calculated per block.":"Rewards are calculated per block.","Total":"Total","End":"End","View Project Site":"View Project Site","Your Project? \ud83d\udc40":"Your Project? \ud83d\udc40","Create a pool for your token":"Create a pool for your token","Apply now":"Apply now","Round 1: BUYING":"Round 1: BUYING","%num% CAKE":"%num% CAKE","Spend CAKE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!":"Spend CAKE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!","Your total tickets for this round":"Your total tickets for this round","Buy ticket":"Buy ticket","View your tickets":"View your tickets","Approx. time left to buy tickets":"Approx. time left to buy tickets","My Tickets (Total: %TICKETS%)":"My Tickets (Total: %TICKETS%)","Close":"Close","Latest Winning Numbers":"Latest Winning Numbers","Ticket":"Ticket","Tickets matching 4 numbers:":"Tickets matching 4 numbers:","Tickets matching 3 numbers:":"Tickets matching 3 numbers:","Tickets matching 2 numbers:":"Tickets matching 2 numbers:","Export recent winning numbers":"Export recent winning numbers","Enter amount of tickets to buy":"Enter amount of tickets to buy","Max":"Max","%num% CAKE Available":"%num% CAKE Available","%num% %symbol% Available":"%num% %symbol% Available","Your amount must be a multiple of 10 CAKE":"Your amount must be a multiple of 10 CAKE","1 Ticket = %lotteryPrice% CAKE":"1 Ticket = %lotteryPrice% CAKE","Until ticket sale:":"Until ticket sale:","You will spend: %num% CAKE":"You will spend: %num% CAKE","Cancel":"Cancel","Confirm":"Confirm","Warning":"Warning","Lottery ticket purchases are final.":"Lottery ticket purchases are final.","Your CAKE will not be returned to you after you spend it to buy tickets.":"Your CAKE will not be returned to you after you spend it to buy tickets.","Tickets are only valid for one lottery draw, and will be burned after the draw.":"Tickets are only valid for one lottery draw, and will be burned after the draw.","Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.":"Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.","I understand":"I understand","Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.":"Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.","Claim prizes":"Claim prizes","CAKE prizes to be claimed":"CAKE prizes to be claimed","Round 2: CLAIMING":"Round 2: CLAIMING","Pending Confirmation":"Pending Confirmation","Approx. time before next lottery start":"Approx. time before next lottery start","Enable CAKE":"Enable CAKE","IFO: Initial Farm Offerings":"IFO: Initial Farm Offerings","Buy new tokens launching on Binance Smart Chain":"Buy new tokens launching on Binance Smart Chain","You\u2019ll pay for the new tokens using CAKE-BNB LP tokens, which means you need to stake equal amounts of CAKE and BNB in a liquidity pool to take part.":"You\u2019ll pay for the new tokens using CAKE-BNB LP tokens, which means you need to stake equal amounts of CAKE and BNB in a liquidity pool to take part.","Get CAKE-BNB LP >":"Get CAKE-BNB LP >","The project gets the BNB, PancakeSwap burns the CAKE.":"The project gets the BNB, PancakeSwap burns the CAKE.","You get the tokens.":"You get the tokens.","Want to launch your own IFO?":"Want to launch your own IFO?","Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on CRAB.":"Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on CRAB.","Apply to launch":"Apply to launch","Community":"Community","Core":"Core","Available":"Available","My Wallet":"My Wallet","Sign out":"Sign out","Harvest all (%count%)":"Harvest all (%count%)","Cake Stats":"Cake Stats","Total CAKE Supply":"Total CAKE Supply","Total CAKE Burned":"Total CAKE Burned","New CAKE/block":"New CAKE/block","Farms & Staking":"Farms & Staking","CAKE to Harvest":"CAKE to Harvest","CAKE in Wallet":"CAKE in Wallet","Collecting CAKE":"Collecting CAKE","Your Lottery Winnings":"Your Lottery Winnings","CAKE to Collect":"CAKE to Collect","Total jackpot this round":"Total jackpot this round","Collect Winnings":"Collect Winnings","Buy Tickets":"Buy Tickets","Harvest":"Harvest","Select":"Select","Winning Numbers This Round":"Winning Numbers This Round","Winning numbers":"Winning numbers","Total prizes":"Total prizes","Round #%num%":"Round #%num%","Total Pot:":"Total Pot:","Staking Pool":"Staking Pool","PancakeSwap":"PancakeSwap","The #1 AMM and yield farm on Binance Smart Chain.":"The #1 AMM and yield farm on Binance Smart Chain.","Stake CAKE to earn new tokens.":"Stake CAKE to earn new tokens.","Launch Time":"Launch Time","For Sale":"For Sale","CAKE to burn (USD)":"CAKE to burn (USD)","CAKE to burn:":"CAKE to burn:","Unstake":"Unstake","\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest CAKE rewards for you!":"\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest CAKE rewards for you!","How to take part":"How to take part","Before Sale":"Before Sale","Buy CAKE and BNB tokens":"Buy CAKE and BNB tokens","Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity":"Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity","During Sale":"During Sale","While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens":"While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens","After Sale":"After Sale","Claim the tokens you bought, along with any unspent funds.":"Claim the tokens you bought, along with any unspent funds.","Done!":"Done!","Read more":"Read more","Connect":"Connect","Trade in for CAKE, or keep for your collection!":"Trade in for CAKE, or keep for your collection!","Register your interest in winning an NFT below.":"Register your interest in winning an NFT below.","Register for a chance to win":"Register for a chance to win","Learn more":"Learn more","Trade in NFT":"Trade in NFT","Trade in":"Trade in","You will receive":"You will receive","When you trade in this NFT to receive CAKE, you will lose access to it forever!":"When you trade in this NFT to receive CAKE, you will lose access to it forever!","Claim NFT":"Claim NFT","How it works":"How it works","Winners will be able to claim an NFT on this page once the claiming period starts.":"Winners will be able to claim an NFT on this page once the claiming period starts.","If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!":"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!","Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!":"Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!","How are winners selected?":"How are winners selected?","Winners are selected at random! Good luck!":"Winners are selected at random! Good luck!","Value if traded in":"Value if traded in","Number minted":"Number minted","Number burned":"Number burned","Claim this NFT":"Claim this NFT","Trade in for CAKE":"Trade in for CAKE","Loading\u2026":"Loading\u2026","Details":"Details","You won!":"You won!","Claim an NFT from the options below!":"Claim an NFT from the options below!","Can be traded until":"Can be traded until","Wallet Disconnected":"Wallet Disconnected","Connect to see if you have won an NFT!":"Connect to see if you have won an NFT!","Home":"Home","Trade":"Trade","Farms":"Farms","Pools":"Pools","NFT":"NFT","Info":"Info","IFO":"IFO","More":"More","Liquidity":"Liquidity","Overview":"Overview","Token":"Token","Pairs":"Pairs","Accounts":"Accounts","Stake LP tokens to earn CAKE":"Stake LP tokens to earn CAKE","Active":"Active","Inactive":"Inactive","Dual":"Dual","Compound":"Compound","Unstake %asset%":"Unstake %asset%","The CAKE Lottery":"The CAKE Lottery","Buy tickets with CAKE":"Buy tickets with CAKE","Win if 2, 3 or 4 of your ticket numbers match!":"Win if 2, 3 or 4 of your ticket numbers match!","%time% Until lottery draw":"%time% Until lottery draw","Next draw":"Next draw","Past draws":"Past draws","Round %num%":"Round %num%","Total Pot":"Total Pot","Your tickets for this round":"Your tickets for this round","Sorry, no prizes to collect":"Sorry, no prizes to collect","In Wallet":"In Wallet","Loading...":"Loading...","Next IFO":"Next IFO","Past IFOs":"Past IFOs","APR":"APR","APR (incl. LP rewards)":"APR (incl. LP rewards)","Select lottery number:":"Select lottery number:","Search":"Search","History":"History","Pool Size":"Pool Size","Burned":"Burned","To burn":"To burn","Show Last":"Show Last","Prize Pot":"Prize Pot","Winners":"Winners","No. Matched":"No. Matched","Enable Contract":"Enable Contract","%asset% staked":"%asset% staked","Total Value Locked":"Total Value Locked","Across all LPs and Syrup Pools":"Across all LPs and Syrup Pools","Your wallet":"Your wallet","Logout":"Logout","Profile Setup":"Profile Setup","Show off your stats and collectibles with your unique profile.":"Show off your stats and collectibles with your unique profile.","Total cost: 10 CAKE":"Total cost: 10 CAKE","Get Starter Collectible":"Get Starter Collectible","Set Profile Picture":"Set Profile Picture","Join Team":"Join Team","Set Name":"Set Name","Step 1":"Step 1","Every profile starts by making a \\"starter\\" collectible (NFT).":"Every profile starts by making a \\"starter\\" collectible (NFT).","This starter will also become your first profile picture.":"This starter will also become your first profile picture.","You can change your profile pic later if you get another approved Pancake Collectible,":"You can change your profile pic later if you get another approved Pancake Collectible,","Choose your Starter!":"Choose your Starter!","Choose wisely: you can only ever make one starter collectible!":"Choose wisely: you can only ever make one starter collectible!","Cost: 5 CAKE":"Cost: 5 CAKE","Next Step":"Next Step","Confirming":"Confirming","Enabled":"Enabled","Confirmed":"Confirmed","Insufficient CAKE balance":"Insufficient CAKE balance","Step 2":"Step 2","Choose collectible":"Choose collectible","Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.":"Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.","Only approved Pancake Collectibles can be used.":"Only approved Pancake Collectibles can be used.","Allow collectible to be locked":"Allow collectible to be locked","The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ":"The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ","Don\'t worry - you\'ll be able to get it back at any time.":"Don\'t worry - you\'ll be able to get it back at any time.","Step 3":"Step 3","Join a Team":"Join a Team","It won\'t be possible to undo the choice you make for the foreseeable future!":"It won\'t be possible to undo the choice you make for the foreseeable future!","There\'s currently no big difference between teams, and no benefit of joining one team over another for now.":"There\'s currently no big difference between teams, and no benefit of joining one team over another for now.","So pick whichever you like!":"So pick whichever you like!","%count% Members":"%count% Members","Step 4":"Step 4","This name will be shown in team leaderboards and search results as long as your profile is active.":"This name will be shown in team leaderboards and search results as long as your profile is active.","Your name must be at least 3 and at most 15 standards letters and numbers long.":"Your name must be at least 3 and at most 15 standards letters and numbers long.","Complete Profile":"Complete Profile","Maximum length: 15 characters":"Maximum length: 15 characters","Minimum length: 3 characters":"Minimum length: 3 characters","No spaces or special characters":"No spaces or special characters","Submitting NFT to contract and confirming User Name and Team":"Submitting NFT to contract and confirming User Name and Team","Oops!":"Oops!","We couldn\'t find any Pancake Collectibles in your wallet.":"We couldn\'t find any Pancake Collectibles in your wallet.","You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.":"You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.","ROI Calculator":"ROI Calculator","Timeframe":"Timeframe","CAKE per $1000":"CAKE per $1000","Calculated based on current rates.":"Calculated based on current rates.","Compounding %freq%x daily.":"Compounding %freq%x daily.","All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.":"All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.","You can\'t change this once you click Confirm.":"You can\'t change this once you click Confirm.","Until ticket sale":"Until ticket sale","To burn:":"To burn:","On sale soon":"On sale soon","On sale":"On sale","Teams Overview":"Teams Overview","Teams":"Teams","See More":"See More","Team Achievements":"Team Achievements","Team Points":"Team Points","Active Members":"Active Members","Set up now":"Set up now","You haven\u2019t set up your profile yet!":"You haven\u2019t set up your profile yet!","You can do this at any time by clicking on your profile picture in the menu":"You can do this at any time by clicking on your profile picture in the menu","Collect":"Collect","Compounding":"Compounding","Harvesting":"Harvesting","Buy CAKE":"Buy CAKE","Show":"Show","Hide":"Hide","Stake LP tokens":"Stake LP tokens","Stake":"Stake","Earned":"Earned","Staked":"Staked","The lottery number you provided does not exist":"The lottery number you provided does not exist","Error fetching data":"Error fetching data","Teams & Profiles":"Teams & Profiles","Earn more points for completing larger quests!":"Earn more points for completing larger quests!","Collecting points for these tasks makes them available again.":"Collecting points for these tasks makes them available again.","Earn points by completing regular tasks!":"Earn points by completing regular tasks!","Task Center":"Task Center","Achievements":"Achievements","Enter your name...":"Enter your name...","I understand that people can view my wallet if they know my username":"I understand that people can view my wallet if they know my username","A minimum of %num% CAKE is required":"A minimum of %num% CAKE is required","Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.":"Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.","Please connect your wallet to continue":"Please connect your wallet to continue","Public Profile":"Public Profile","Show off your stats and collectibles with your unique profile. Team features will be revealed soon!":"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!","Points":"Points","Set Your Name":"Set Your Name","Step %num%":"Step %num%","See the list >":"See the list >","Staked only":"Staked only","Get %symbol%":"Get %symbol%","Get %symbol1% or %symbol2%":"Get %symbol1% or %symbol2%","Balance":"Balance","Oops, page not found.":"Oops, page not found.","Back Home":"Back Home","Unstake LP tokens":"Unstake LP tokens","Get ready":"Get ready","Live":"Live","Start":"Start","Finish":"Finish","Connect wallet to view":"Connect wallet to view","Sorry, you needed to register during the \u201centry\u201d period!":"Sorry, you needed to register during the \u201centry\u201d period!","Check your Rank":"Check your Rank","You\u2019re not participating this time.":"You\u2019re not participating this time.","Rank in team":"Rank in team","Your volume":"Your volume","Since start":"Since start","Your Score":"Your Score","Enable":"Enable","Enabling":"Enabling","%amount% CAKE":"%amount% CAKE","IFO Shopper: %title%":"IFO Shopper: %title%","%num% of total":"%num% of total","All estimated rates take into account this pool\u2019s %fee%% performance fee":"All estimated rates take into account this pool\u2019s %fee%% performance fee","Sorry, you didn\u2019t contribute enough CAKE to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your CAKE.":"Sorry, you didn\u2019t contribute enough CAKE to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your CAKE.","Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new CAKE in the pool.":"Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new CAKE in the pool.","Unstaking Fee":"Unstaking Fee","unstaking fee until":"unstaking fee until","unstaking fee if withdrawn within 72h":"unstaking fee if withdrawn within 72h","Unstaking fee: %fee%%":"Unstaking fee: %fee%%","Performance Fee":"Performance Fee","Compound: collect and restake CAKE into pool.":"Compound: collect and restake CAKE into pool.","Harvest: collect CAKE and send to wallet":"Harvest: collect CAKE and send to wallet","%position% Entered":"%position% Entered","Sort by":"Sort by","Expired":"Expired","Calculating":"Calculating","Next":"Next","Later":"Later","Up":"Up","Down":"Down","%multiplier% Payout":"%multiplier% Payout","Enter %direction%":"Enter %direction%","Prize Pool:":"Prize Pool:","Charts":"Charts","Your history":"Your history","All":"All","Collected":"Collected","Uncollected":"Uncollected","Round":"Round","Rounds":"Rounds","PNL":"PNL","Your Result":"Your Result","Your direction":"Your direction","Your position":"Your position","Lose":"Lose","Entry starts":"Entry starts","Locked Price":"Locked Price","Last Price":"Last Price","Closed Price":"Closed Price","Win":"Win","Opening Block":"Opening Block","Closing Block":"Closing Block","Total Value Locked (TVL)":"Total Value Locked (TVL)","Automatic restaking":"Automatic restaking","Manual CAKE":"Manual CAKE","Auto CAKE":"Auto CAKE","Auto CAKE Bounty":"Auto CAKE Bounty","Claim":"Claim","Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.":"Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.","Total staked":"Total staked","Just stake some tokens to earn.":"Just stake some tokens to earn.","High APR, low risk.":"High APR, low risk.","Stake LP tokens to earn.":"Stake LP tokens to earn.","Basic Sale":"Basic Sale","Everyone can only commit a limited amount, but may expect a higher return per token committed.":"Everyone can only commit a limited amount, but may expect a higher return per token committed.","Unlimited Sale":"Unlimited Sale","No limits on the amount you can commit. Additional fee applies when claiming.":"No limits on the amount you can commit. Additional fee applies when claiming.","Every person can only commit a limited amount, but may expect a higher return per token committed.":"Every person can only commit a limited amount, but may expect a higher return per token committed.","You didn\u2019t participate in this sale!":"You didn\u2019t participate in this sale!","Max. token entry":"Max. token entry","Max. CAKE entry":"Max. CAKE entry","How to Take Part":"How to Take Part","Activate your Profile":"Activate your Profile","You\u2019ll need an active PancakeSwap Profile to take part in an IFO!":"You\u2019ll need an active PancakeSwap Profile to take part in an IFO!","Profile Active!":"Profile Active!","Get CAKE Tokens":"Get CAKE Tokens","Stake CAKE and BNB in the liquidity pool to get LP tokens.":"Stake CAKE and BNB in the liquidity pool to get LP tokens.","You\u2019ll spend them to buy IFO sale tokens.":"You\u2019ll spend them to buy IFO sale tokens.","Commit CAKE":"Commit CAKE","When the IFO sales are live, you can \u201ccommit\u201d your CAKE to buy the tokens being sold.":"When the IFO sales are live, you can \u201ccommit\u201d your CAKE to buy the tokens being sold.","We recommend committing to the Basic Sale first, but you can do both if you like.":"We recommend committing to the Basic Sale first, but you can do both if you like.","Claim your tokens and achievement":"Claim your tokens and achievement","After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE tokens will be returned to your wallet.":"After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE tokens will be returned to your wallet.","This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.":"This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.","No prediction history available":"No prediction history available","If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.":"If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.","Last price from Chainlink Oracle":"Last price from Chainlink Oracle","%num% Points to Collect":"%num% Points to Collect","Net results":"Net results","Average return / round":"Average return / round","Average position entered / round":"Average position entered / round","Won":"Won","Lost":"Lost","Entered":"Entered","Connect your wallet to view your prediction history":"Connect your wallet to view your prediction history","Best round: %roundId%":"Best round: %roundId%","You\u2019ve already staked the maximum amount you can stake in this pool!":"You\u2019ve already staked the maximum amount you can stake in this pool!","Markets Paused":"Markets Paused","Prediction markets have been paused due to an error.":"Prediction markets have been paused due to an error.","All open positions have been canceled.":"All open positions have been canceled.","You can reclaim any funds entered into existing positions via the History tab on this page.":"You can reclaim any funds entered into existing positions via the History tab on this page.","Show History":"Show History","Welcome!":"Welcome!","This product is still in beta (testing) phase.":"This product is still in beta (testing) phase.","Before you use this product, make sure you fully understand the risks involved.":"Before you use this product, make sure you fully understand the risks involved.","Once you enter a position, you cannot cancel or adjust it.":"Once you enter a position, you cannot cancel or adjust it.","All losses are final.":"All losses are final.","I understand that I am using this product at my own risk. Any loss incurred due to my actions are my own responsibility.":"I understand that I am using this product at my own risk. Any loss incurred due to my actions are my own responsibility.","You\u2019ll spend CAKE to buy IFO sale tokens.":"You\u2019ll spend CAKE to buy IFO sale tokens.","You\'ll need an active PancakeSwap Profile to take part in an IFO!":"You\'ll need an active PancakeSwap Profile to take part in an IFO!","Your LP tokens committed":"Your LP tokens committed","Max. Committed":"Max. Committed","Total committed:":"Total committed:","Additional fee:":"Additional fee:","Learn more about %symbol%":"Learn more about %symbol%","Earned since your last action":"Earned since your last action","Commit ~%amount% %symbol% in total to earn!":"Commit ~%amount% %symbol% in total to earn!","Learn more about %title%":"Learn more about %title%","365d (APY)":"365d (APY)","%num%d":"%num%d","d":"d","h":"h","m":"m","Hide or show expandable content":"Hide or show expandable content","No tokens to stake":"No tokens to stake","Successfully claimed!":"Successfully claimed!","Unable to claim NFT":"Unable to claim NFT","Unable to claim NFT, please try again.":"Unable to claim NFT, please try again.","Error":"Error","1x %nftName% Collectible":"1x %nftName% Collectible","1x %nftName% NFT":"1x %nftName% NFT","NFT successfully transferred!":"NFT successfully transferred!","View Contract":"View Contract","View IFO Contract":"View IFO Contract","See Pair Info":"See Pair Info","Stake LP":"Stake LP","Multiplier":"Multiplier","Start Farming":"Start Farming","Farming":"Farming","Enable Farm":"Enable Farm","Search Farms":"Search Farms","To Top":"To Top","Total value of the funds in this farm\u2019s liquidity pool":"Total value of the funds in this farm\u2019s liquidity pool","The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.":"The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.","For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.":"For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.","This amount is already included in all APR calculations for the farm.":"This amount is already included in all APR calculations for the farm.","Hot":"Hot","Success!":"Success!","You have successfully claimed your rewards.":"You have successfully claimed your rewards.","Commit":"Commit","If you don\u2019t commit enough CAKE, you may not receive any IFO tokens at all and will only receive a full refund of your CAKE.":"If you don\u2019t commit enough CAKE, you may not receive any IFO tokens at all and will only receive a full refund of your CAKE.","CAKE required":"CAKE required","Get CAKE, or make sure your tokens aren\u2019t staked somewhere else.":"Get CAKE, or make sure your tokens aren\u2019t staked somewhere else.","Funds to raise:":"Funds to raise:","Price per %symbol%:":"Price per %symbol%:","Price per %symbol% with fee:":"Price per %symbol% with fee:","You need an active PancakeSwap Profile to take part in an IFO!":"You need an active PancakeSwap Profile to take part in an IFO!","Achievement":"Achievement","Commit ~%minLp% LP in total to earn!":"Commit ~%minLp% LP in total to earn!","What\u2019s the difference between a Basic Sale and Unlimited Sale?":"What\u2019s the difference between a Basic Sale and Unlimited Sale?","In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE. We calculate the maximum CAKE amount about 30 minutes before each IFO. The Basic Sale has no participation fee.":"In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE. We calculate the maximum CAKE amount about 30 minutes before each IFO. The Basic Sale has no participation fee.","In the Unlimited Sale, there\u2019s no limit to the amount of CAKE you can commit. However, there\u2019s a fee for participation: see below.":"In the Unlimited Sale, there\u2019s no limit to the amount of CAKE you can commit. However, there\u2019s a fee for participation: see below.","Which sale should I commit to? Can I do both?":"Which sale should I commit to? Can I do both?","You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate.":"You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate.","How much is the participation fee?":"How much is the participation fee?","There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.":"There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.","The fee will start at 1%.":"The fee will start at 1%.","The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale.":"The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale.","Where does the participation fee go?":"Where does the participation fee go?","The CAKE from the participation fee will be thrown into the weekly token burn.":"The CAKE from the participation fee will be thrown into the weekly token burn.","How can I get an achievement for participating in the IFO?":"How can I get an achievement for participating in the IFO?","You need to contribute a minimum of about 10 USD worth of CAKE to either sale.":"You need to contribute a minimum of about 10 USD worth of CAKE to either sale.","You can contribute to one or both, it doesn\u2019t matter. Only your overall contribution is counted for the achievement.":"You can contribute to one or both, it doesn\u2019t matter. Only your overall contribution is counted for the achievement.","The Lottery Is Changing!":"The Lottery Is Changing!","Come back soon!":"Come back soon!","Staked (compounding)":"Staked (compounding)","Contract Enabled":"Contract Enabled","You can now stake in the %symbol% vault!":"You can now stake in the %symbol% vault!","You can now stake in the %symbol% pool!":"You can now stake in the %symbol% pool!","Please try again. Confirm the transaction and make sure you are paying enough gas!":"Please try again. Confirm the transaction and make sure you are paying enough gas!","Start earning":"Start earning","Recent CAKE profit":"Recent CAKE profit","Unstaked!":"Unstaked!","Unstaked":"Unstaked","Staked!":"Staked!","Your funds have been staked in the pool":"Your funds have been staked in the pool","Your earnings have also been harvested to your wallet":"Your earnings have also been harvested to your wallet","%error% - Please try again.":"%error% - Please try again.","Stake in Pool":"Stake in Pool","Balance: %balance%":"Balance: %balance%","%day%d : %hour%h : %minute%m":"%day%d : %hour%h : %minute%m","%day%d %hour%h %minute%m":"%day%d %hour%h %minute%m","Subtracted automatically from each yield harvest and burned.":"Subtracted automatically from each yield harvest and burned.","Blocks":"Blocks","Add to Metamask":"Add to Metamask","Compounded":"Compounded","Canceled":"Canceled","Please try again and confirm the transaction.":"Please try again and confirm the transaction.","Harvested":"Harvested","Close Window":"Close Window","Insufficient %symbol% balance":"Insufficient %symbol% balance","You\u2019ll need %symbol% to stake in this pool!":"You\u2019ll need %symbol% to stake in this pool!","Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.":"Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.","Buy":"Buy","Locate Assets":"Locate Assets","%symbol% required":"%symbol% required","Your %symbol% earnings have also been harvested to your wallet!":"Your %symbol% earnings have also been harvested to your wallet!","Your %symbol% funds have been staked in the pool!":"Your %symbol% funds have been staked in the pool!","Max stake for this pool: %amount% %token%":"Max stake for this pool: %amount% %token%","Maximum total stake: %amount% %token%":"Maximum total stake: %amount% %token%","APY includes compounding, APR doesn\u2019t. This pool\u2019s CAKE is compounded automatically, so we show APY.":"APY includes compounding, APR doesn\u2019t. This pool\u2019s CAKE is compounded automatically, so we show APY.","This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR":"This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR","Auto":"Auto","Manual":"Manual","Earn CAKE, stake CAKE":"Earn CAKE, stake CAKE","This bounty is given as a reward for providing a service to other users.":"This bounty is given as a reward for providing a service to other users.","Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto CAKE Pool\u2019s compounding function for everyone.":"Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto CAKE Pool\u2019s compounding function for everyone.","Auto-Compound Bounty: %fee%% of all Auto CAKE pool users pending yield":"Auto-Compound Bounty: %fee%% of all Auto CAKE pool users pending yield","Bounty collected!":"Bounty collected!","CAKE bounty has been sent to your wallet.":"CAKE bounty has been sent to your wallet.","Could not be collected":"Could not be collected","There may be an issue with your transaction, or another user claimed the bounty first.":"There may be an issue with your transaction, or another user claimed the bounty first.","Claim Bounty":"Claim Bounty","You\u2019ll claim":"You\u2019ll claim","Pool total pending yield":"Pool total pending yield","Bounty":"Bounty","What\u2019s this?":"What\u2019s this?","Help":"Help","Syrup Pools":"Syrup Pools","Best round: #%roundId%":"Best round: #%roundId%","View Reclaimed & Won":"View Reclaimed & Won","This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.":"This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.","Round History":"Round History","Your History":"Your History","Filter":"Filter","Starting Soon":"Starting Soon","Live Now":"Live Now","Reclaim":"Reclaim","This page can\u2019t be displayed right now due to an error. Please check back soon.":"This page can\u2019t be displayed right now due to an error. Please check back soon.","Round Canceled":"Round Canceled","Learn More":"Learn More","Payout":"Payout","%position% position entered":"%position% position entered","Enter UP":"Enter UP","Enter DOWN":"Enter DOWN","An error occurred, unable to enter your position":"An error occurred, unable to enter your position","Set Position":"Set Position","Insufficient CRAB Balance":"Insufficient CRAB Balance","A minimum amount of %num% %token% is required":"A minimum amount of %num% %token% is required","Enter an amount":"Enter an amount","You won\u2019t be able to remove or change your position once you enter it.":"You won\u2019t be able to remove or change your position once you enter it.","Prize Pool":"Prize Pool","Winnings collected!":"Winnings collected!","Your prizes have been sent to your wallet":"Your prizes have been sent to your wallet","Collecting":"Collecting","Closing":"Closing","Position reclaimed!":"Position reclaimed!","Reclaim Position":"Reclaim Position","This Product is in beta.":"This Product is in beta.","I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.":"I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.","I understand that this product is still in beta. I am participating at my own risk":"I understand that this product is still in beta. I am participating at my own risk","Continue":"Continue","Points Collected!":"Points Collected!","%num% points":"%num% points","Cost to update:":"Cost to update:","Cost to reactivate:":"Cost to reactivate:","Profile Updated!":"Profile Updated!","Choose a new Collectible to use as your profile pic.":"Choose a new Collectible to use as your profile pic.","Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!":"Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!","Make sure you have a Pancake Collectible in your wallet and try again!":"Make sure you have a Pancake Collectible in your wallet and try again!","Edit Profile":"Edit Profile","Change Profile Pic":"Change Profile Pic","Remove Profile Pic":"Remove Profile Pic","Profile Paused!":"Profile Paused!","This will suspend your profile and send your Collectible back to your wallet":"This will suspend your profile and send your Collectible back to your wallet","While your profile is suspended, you won\'t be able to earn points, but your achievements and points will stay associated with your profile":"While your profile is suspended, you won\'t be able to earn points, but your achievements and points will stay associated with your profile","Cost to reactivate in the future: %cost% CAKE":"Cost to reactivate in the future: %cost% CAKE","%minimum% CAKE required to change profile pic":"%minimum% CAKE required to change profile pic","Reactivate Profile":"Reactivate Profile","No achievements yet!":"No achievements yet!","Claim your Gift!":"Claim your Gift!","Thank you for being a day-one user of Pancake Profiles!":"Thank you for being a day-one user of Pancake Profiles!","If you haven\'t already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!":"If you haven\'t already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!","To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.":"To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.","We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.":"We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.","Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.":"Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.","Claim Your CAKE":"Claim Your CAKE","Pancake Collectibles":"Pancake Collectibles","Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.":"Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.","NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.":"NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.","No NFTs Found":"No NFTs Found","See all approved Pancake Collectibles":"See all approved Pancake Collectibles","Coming Soon!":"Coming Soon!","Profile created!":"Profile created!","Submitting NFT to contract and confirming User Name and Team.":"Submitting NFT to contract and confirming User Name and Team.","Cost":"Cost","Your Profile":"Your Profile","Check your stats and collect achievements":"Check your stats and collect achievements","You\u2019ve got a gift to claim!":"You\u2019ve got a gift to claim!","Show off your stats and collectibles with your unique profile":"Show off your stats and collectibles with your unique profile","Total cost: 1.5 CAKE":"Total cost: 1.5 CAKE","Cost: %num% CAKE":"Cost: %num% CAKE","You can change your profile pic later if you get another approved Pancake Collectible.":"You can change your profile pic later if you get another approved Pancake Collectible.","Every profile starts by making a \u201cstarter\u201d collectible (NFT).":"Every profile starts by making a \u201cstarter\u201d collectible (NFT).","We couldn\u2019t find any Pancake Collectibles in your wallet.":"We couldn\u2019t find any Pancake Collectibles in your wallet.","You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.":"You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.","The collectible you\'ve chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don\'t worry - you\'ll be able to get it back at any time.":"The collectible you\'ve chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don\'t worry - you\'ll be able to get it back at any time.","It won\u2019t be possible to undo the choice you make for the foreseeable future!":"It won\u2019t be possible to undo the choice you make for the foreseeable future!","There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!":"There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!","Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.":"Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.","Unable to verify username":"Unable to verify username","Created %dateCreated% ago":"Created %dateCreated% ago","Paused":"Paused","April":"April","Easter Battle":"Easter Battle","$120,000 in Prizes!":"$120,000 in Prizes!","Compete with other teams to win CAKE, collectible NFTs, achievements & more!":"Compete with other teams to win CAKE, collectible NFTs, achievements & more!","Now Live!":"Now Live!","Calculating prizes":"Calculating prizes","I want to Battle!":"I want to Battle!","Trade Now":"Trade Now","Claim period over":"Claim period over","Prizes Claimed!":"Prizes Claimed!","Nothing to claim":"Nothing to claim","Registered!":"Registered!","Congratulations! You won":"Congratulations! You won","Collectible NFT":"Collectible NFT","All prizes will be sent directly to your wallet and user account.":"All prizes will be sent directly to your wallet and user account.","How Can I Join?":"How Can I Join?","Set up your":"Set up your","Pancake Profile":"Pancake Profile","then register for the competition by clicking \u201cI WANT TO BATTLE\u201d button above.":"then register for the competition by clicking \u201cI WANT TO BATTLE\u201d button above.","Battle Time":"Battle Time","Trade BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.":"Trade BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.","Prize Claim":"Prize Claim","Teams and traders will be ranked in the order of trading volume. Collect your prizes and celebrate!":"Teams and traders will be ranked in the order of trading volume. Collect your prizes and celebrate!","Registration starting April 5":"Registration starting April 5","Tier":"Tier","Token Prizes (Split)":"Token Prizes (Split)","Gold":"Gold","Silver":"Silver","Bronze":"Bronze","Purple":"Purple","Teal":"Teal","#%team% Team":"#%team% Team","Prizes by Team":"Prizes by Team","Higher trading volume = higher rank!":"Higher trading volume = higher rank!","Prizes to be distributed in CAKE and shared by all members of a tier. CAKE price in USD to be determined on the day of distribution. Details below.":"Prizes to be distributed in CAKE and shared by all members of a tier. CAKE price in USD to be determined on the day of distribution. Details below.","Every eligible participant will win prizes at the end of the competition.":"Every eligible participant will win prizes at the end of the competition.","The better your team performs, the better prizes you will get!":"The better your team performs, the better prizes you will get!","The final winning team will be the team with the highest total volume score at the end of the competition period.":"The final winning team will be the team with the highest total volume score at the end of the competition period.","Make a profile!":"Make a profile!","It looks like you\u2019ve disabled your account by removing your Pancake Collectible (NFT) profile picture.":"It looks like you\u2019ve disabled your account by removing your Pancake Collectible (NFT) profile picture.","Reactivate your profile!":"Reactivate your profile!","You need to reactivate your profile by replacing your profile picture in order to join the competition.":"You need to reactivate your profile by replacing your profile picture in order to join the competition.","Go to my profile":"Go to my profile","You have registered for the competition!":"You have registered for the competition!","Registering for the competition will make your wallet address publicly visible on the leaderboard.":"Registering for the competition will make your wallet address publicly visible on the leaderboard.","This decision cannot be reversed.":"This decision cannot be reversed.","I understand that my address may be displayed publicly throughout the competition.":"I understand that my address may be displayed publicly throughout the competition.","Eligible trading pairs":"Eligible trading pairs","Only trades on SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CAKE/BNB and CAKE/BUSD pairs will be included in volume calculations.":"Only trades on SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CAKE/BNB and CAKE/BUSD pairs will be included in volume calculations.","Calculating team ranks and winners":"Calculating team ranks and winners","Team ranks are calculated by the total combined volume of the top 500 members of each respective team.":"Team ranks are calculated by the total combined volume of the top 500 members of each respective team.","Prize distribution":"Prize distribution","Prizes to be distributed in CAKE, LAZIO, PORTO and SANTOS in a distribution of 3:1:1:1 and shared by all members of each respective tier.":"Prizes to be distributed in CAKE, LAZIO, PORTO and SANTOS in a distribution of 3:1:1:1 and shared by all members of each respective tier.","The price of token prizes (CAKE, LAZIO, PORTO and SANTOS) in USD will be determined as per their BUSD pair price during the tally period.":"The price of token prizes (CAKE, LAZIO, PORTO and SANTOS) in USD will be determined as per their BUSD pair price during the tally period.","Every participant will win at least one prize at the end of the competition.":"Every participant will win at least one prize at the end of the competition.","Fine print":"Fine print","In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.":"In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.","PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to \u201ccheat\u201d in any way.":"PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to \u201ccheat\u201d in any way.","Can I join the battle after it starts?":"Can I join the battle after it starts?","Sorry, no. You need to register during the registration period, before the start of the event.":"Sorry, no. You need to register during the registration period, before the start of the event.","How do I know if I successfully registered?":"How do I know if I successfully registered?","At the top of the page, the text in the button \u201cI Want to Battle\u201d will change to \u201cRegistered\u201d.":"At the top of the page, the text in the button \u201cI Want to Battle\u201d will change to \u201cRegistered\u201d.","How can I see my current rank?":"How can I see my current rank?","Check Your Score section on the event page. You\u2019ll need to connect your wallet, of course.":"Check Your Score section on the event page. You\u2019ll need to connect your wallet, of course.","How do I claim my prize(s)?":"How do I claim my prize(s)?","After the battle ends, visit the event page and click the \u201cClaim Prizes\u201d button in the top section or in \u201cYour Score\u201d section. Once you claim your prizes successfully, the button text will change to \u201cPrizes Claimed\u201d.":"After the battle ends, visit the event page and click the \u201cClaim Prizes\u201d button in the top section or in \u201cYour Score\u201d section. Once you claim your prizes successfully, the button text will change to \u201cPrizes Claimed\u201d.","Trade to increase your rank":"Trade to increase your rank","Eligible pairs: SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CAKE/BNB and CAKE/BUSD":"Eligible pairs: SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CAKE/BNB and CAKE/BUSD","Play as a team":"Play as a team","The higher your team\u2019s rank, the better your prizes":"The higher your team\u2019s rank, the better your prizes","Top Traders":"Top Traders","Since start of the competition":"Since start of the competition","Show More":"Show More","Share Score":"Share Score","Your tier: gold":"Your tier: gold","Love, The Chefs x":"Love, The Chefs x","HECK YEAH!":"HECK YEAH!","Next tier":"Next tier","to become #%rank% in team":"to become #%rank% in team","#%global% Overall":"#%global% Overall","Token Prizes":"Token Prizes","Share Your Score":"Share Your Score","Brag to your friends and annoy your rivals with your custom scorecard!":"Brag to your friends and annoy your rivals with your custom scorecard!","Download Image":"Download Image","Screenshot or press & hold the image to share!":"Screenshot or press & hold the image to share!","Block %num%":"Block %num%","%max% %symbol% Available":"%max% %symbol% Available","Profile Pic":"Profile Pic","Transfer":"Transfer","Congratulations!":"Congratulations!","You won a collectible!":"You won a collectible!","Claim now":"Claim now","Claiming...":"Claiming...","NFT in wallet":"NFT in wallet","Trade in your NFT for CAKE, or just keep it for your collection.":"Trade in your NFT for CAKE, or just keep it for your collection.","No NFTs to claim":"No NFTs to claim","You have no NFTs to claim at this time, but you can still see the NFTs in this series below.":"You have no NFTs to claim at this time, but you can still see the NFTs in this series below.","Please wait...":"Please wait...","The claiming period hasn\u2019t started yet. Check back soon.":"The claiming period hasn\u2019t started yet. Check back soon.","Please enter a valid wallet address":"Please enter a valid wallet address","Unable to transfer NFT":"Unable to transfer NFT","Transfer NFT":"Transfer NFT","Transferring":"Transferring","Receiving address":"Receiving address","Paste address":"Paste address","Could not retrieve CAKE costs for profile":"Could not retrieve CAKE costs for profile","An error occurred approving transaction":"An error occurred approving transaction","Provider Error":"Provider Error","No provider was found":"No provider was found","Authorization Error":"Authorization Error","Please authorize to access your account":"Please authorize to access your account","Unable to find connector":"Unable to find connector","The connector config is wrong":"The connector config is wrong","You have contributed %amount% CAKE to this IFO!":"You have contributed %amount% CAKE to this IFO!","You\u2019ll need CAKE tokens to participate in the IFO!":"You\u2019ll need CAKE tokens to participate in the IFO!","Your %symbol% committed":"Your %symbol% committed","Your %symbol% RECLAIMED":"Your %symbol% RECLAIMED","Your %symbol% TO RECLAIM":"Your %symbol% TO RECLAIM","%symbol% received":"%symbol% received","%symbol% to receive":"%symbol% to receive","Stories were told, and songs were sung about Chef Mixie\u2019s pancakes and her big Syrup gun.":"Stories were told, and songs were sung about Chef Mixie\u2019s pancakes and her big Syrup gun.","Eggscellent! Celebrating Syrup Storm winning the Easter Battle!":"Eggscellent! Celebrating Syrup Storm winning the Easter Battle!","Melting Easter eggs and melting hearts!":"Melting Easter eggs and melting hearts!","Watch out for Flipsie\u2019s spatula smash!":"Watch out for Flipsie\u2019s spatula smash!","Do you like chocolate with your syrup? Go long!":"Do you like chocolate with your syrup? Go long!","Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)":"Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)","Oopsie daisy! Hiccup\'s had a bit of an accident. Poor little fella.":"Oopsie daisy! Hiccup\'s had a bit of an accident. Poor little fella.","Aww, looks like eating pancakes all day is not easy. Sweet dreams!":"Aww, looks like eating pancakes all day is not easy. Sweet dreams!","Sunny is always cheerful when there are pancakes around. Smile!":"Sunny is always cheerful when there are pancakes around. Smile!","Don\'t let that dopey smile deceive you... Churro\'s a master CAKE chef!":"Don\'t let that dopey smile deceive you... Churro\'s a master CAKE chef!","Nommm... Oh hi, I\'m just meditating on the meaning of CAKE.":"Nommm... Oh hi, I\'m just meditating on the meaning of CAKE.","Three guesses what\'s put that twinkle in those eyes! (Hint: it\'s CAKE)":"Three guesses what\'s put that twinkle in those eyes! (Hint: it\'s CAKE)","These bunnies love nothing more than swapping pancakes. Especially on CRAB.":"These bunnies love nothing more than swapping pancakes. Especially on CRAB.","It\'s raining syrup on this bunny, but he doesn\'t seem to mind. Can you blame him?":"It\'s raining syrup on this bunny, but he doesn\'t seem to mind. Can you blame him?","These bunnies like their pancakes with blueberries. What\'s your favorite topping?":"These bunnies like their pancakes with blueberries. What\'s your favorite topping?","Love makes the world go \'round... but so do pancakes. And these bunnies know it.":"Love makes the world go \'round... but so do pancakes. And these bunnies know it.","It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.":"It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.","The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!":"The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!","The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!":"The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!","Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!":"Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!","%ratio%% of total sale":"%ratio%% of total sale","Your %symbol% earnings have been sent to your wallet!":"Your %symbol% earnings have been sent to your wallet!","Your %symbol% earnings have been re-invested into the pool!":"Your %symbol% earnings have been re-invested into the pool!","Stake %symbol%":"Stake %symbol%","You must harvest and compound your earnings from this pool manually.":"You must harvest and compound your earnings from this pool manually.","Register":"Register","Contribute %symbol%":"Contribute %symbol%","Volume":"Volume","%symbol% per $1,000":"%symbol% per $1,000","Prediction (BETA)":"Prediction (BETA)","Collectibles":"Collectibles","Team Battle":"Team Battle","Teams & Profile":"Teams & Profile","Leaderboard":"Leaderboard","Tokens":"Tokens","Contact":"Contact","Merch":"Merch","LP Migration":"LP Migration","V1 Liquidity (Old)":"V1 Liquidity (Old)","Claim Collectible":"Claim Collectible","The higher your team\u2019s rank, the better your prizes!":"The higher your team\u2019s rank, the better your prizes!","Get Ready":"Get Ready","Earn up to %highestApr% APR in Farms":"Earn up to %highestApr% APR in Farms","Earn %assets% in Pools":"Earn %assets% in Pools","Activate PancakeSwap Profile to take part in next IFO\u2018s!":"Activate PancakeSwap Profile to take part in next IFO\u2018s!","Trading Battle":"Trading Battle","Prediction":"Prediction","Initial Farm Offering":"Initial Farm Offering","An error occurred confirming transaction":"An error occurred confirming transaction","Successfully Enabled!":"Successfully Enabled!","You can now participate in the %symbol% IFO.":"You can now participate in the %symbol% IFO.","Team Ranks":"Team Ranks","Prizes":"Prizes","Rules":"Rules","Entry":"Entry","Enable pool":"Enable pool","Start staking":"Start staking","Search Pools":"Search Pools","Ends in":"Ends in","Starts in":"Starts in","Total amount of %symbol% staked in this pool":"Total amount of %symbol% staked in this pool","These pools are no longer distributing rewards. Please unstake your tokens.":"These pools are no longer distributing rewards. Please unstake your tokens.","Max. stake per user":"Max. stake per user","You have claimed your rewards!":"You have claimed your rewards!","Already Collected":"Already Collected","Predictions Now Live":"Predictions Now Live","Beta Version":"Beta Version","Over %amount% in BNB won so far":"Over %amount% in BNB won so far","Try Now":"Try Now","New":"New","LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.":"LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.","CAKE + Fees":"CAKE + Fees","Prediction Markets":"Prediction Markets","Now Live":"Now Live","in Beta":"in Beta","Ended %date%":"Ended %date%","Starts %date%":"Starts %date%","Ends %date%":"Ends %date%","Closed":"Closed","Vote Now":"Vote Now","Soon":"Soon","No proposals found":"No proposals found","Creator":"Creator","Proposals":"Proposals","Make a Proposal":"Make a Proposal","Have your say in the future of the PancakeSwap Ecosystem":"Have your say in the future of the PancakeSwap Ecosystem","Got a suggestion?":"Got a suggestion?","Community proposals are a great way to see how the community feels about your ideas.":"Community proposals are a great way to see how the community feels about your ideas.","They won\'t necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.":"They won\'t necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.","%field% is required":"%field% is required","Please create a minimum of %num% choices":"Please create a minimum of %num% choices","Choices must not be empty":"Choices must not be empty","Please select a valid date":"Please select a valid date","Please select a valid time":"Please select a valid time","End date must be after the start date":"End date must be after the start date","Invalid snapshot":"Invalid snapshot","Proposal created!":"Proposal created!","Voted":"Voted","Time":"Time","Input choice text":"Input choice text","Start Time":"Start Time","Back to Vote Overview":"Back to Vote Overview","Voting For":"Voting For","Your Voting Power":"Your Voting Power","Confirm Vote":"Confirm Vote","Add Choice":"Add Choice","Title":"Title","Content":"Content","End Date":"End Date","Start Date":"Start Date","Actions":"Actions","End Time":"End Time","Publish":"Publish","No votes found":"No votes found","Vote Weight":"Vote Weight","Decision":"Decision","Voter":"Voter","Votes (%count%)":"Votes (%count%)","Snapshot":"Snapshot","Choices":"Choices","Unable to sign payload":"Unable to sign payload","Identifier":"Identifier","Current Results":"Current Results","Vote cast!":"Vote cast!","Are you sure you want to vote for the above choice? This action cannot be undone.":"Are you sure you want to vote for the above choice? This action cannot be undone.","Tip: write in Markdown!":"Tip: write in Markdown!","Cast your vote":"Cast your vote","Preview":"Preview","%total% Votes":"%total% Votes","Cast Vote":"Cast Vote","See All":"See All","Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.":"Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.","Your Cake Held Now":"Your Cake Held Now","Wallet":"Wallet","Manual CAKE Pool":"Manual CAKE Pool","Auto CAKE Pool":"Auto CAKE Pool","CAKE BNB LP":"CAKE BNB LP","Other Syrup Pools":"Other Syrup Pools","Voting Power":"Voting Power","You need at least %count% voting power to publish a proposal.":"You need at least %count% voting power to publish a proposal.","Check voting power":"Check voting power","Amount to collect":"Amount to collect","Your winnings":"Your winnings","Includes your original position and your winnings, minus the %fee% fee.":"Includes your original position and your winnings, minus the %fee% fee.","Your funds have been staked in the farm":"Your funds have been staked in the farm","Base APR (CAKE yield only)":"Base APR (CAKE yield only)","View/Edit Numbers":"View/Edit Numbers","Edit Numbers":"Edit Numbers","Total cost":"Total cost","Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Available digits: 0-9":"Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Available digits: 0-9","Randomize":"Randomize","Confirm and buy":"Confirm and buy","Go back":"Go back","Duplicate":"Duplicate","Get your tickets now!":"Get your tickets now!","Finished Rounds":"Finished Rounds","Only showing data for Lottery V2":"Only showing data for Lottery V2","Connect your wallet":"Connect your wallet","to check if you\'ve won":"to check if you\'ve won","No prizes to collect":"No prizes to collect","Better luck next time!":"Better luck next time!","Why not play again":"Why not play again","Are you a winner?":"Are you a winner?","Checking":"Checking","Check Now":"Check Now","On sale soon!":"On sale soon!","Date":"Date","Your Tickets":"Your Tickets","in prizes!":"in prizes!","Tickets on sale soon":"Tickets on sale soon","The PancakeSwap Lottery":"The PancakeSwap Lottery","All History":"All History","Winning Number":"Winning Number","tickets":"tickets","Prize pot":"Prize pot","Total players this round":"Total players this round","Draw":"Draw","Next Draw":"Next Draw","Your tickets":"Your tickets","Match the winning number in the same order to share prizes.":"Match the winning number in the same order to share prizes.","Current prizes up for grabs:":"Current prizes up for grabs:","Burn":"Burn","Match all %numberMatch%":"Match all %numberMatch%","Match first %numberMatch%":"Match first %numberMatch%","Matched first":"Matched first","Drawn":"Drawn","Connect your wallet to check your history":"Connect your wallet to check your history","Buy tickets for the next round!":"Buy tickets for the next round!","No lottery history found":"No lottery history found","Contract enabled - you can now purchase tickets":"Contract enabled - you can now purchase tickets","Lottery tickets purchased!":"Lottery tickets purchased!","The maximum number of tickets you can buy in one transaction is %maxTickets%":"The maximum number of tickets you can buy in one transaction is %maxTickets%","Bulk discount":"Bulk discount","Buy Instantly":"Buy Instantly","\\"Buy Instantly\\" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.":"\\"Buy Instantly\\" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.","Prizes Collected!":"Prizes Collected!","Your CAKE prizes for round %lotteryId% have been sent to your wallet":"Your CAKE prizes for round %lotteryId% have been sent to your wallet","Claim %claimNum% of %claimTotal% for round %lotteryId% was successful. Please confirm the next transaction":"Claim %claimNum% of %claimTotal% for round %lotteryId% was successful. Please confirm the next transaction","Claiming":"Claiming","Tickets must match the winning number in the exact same order, starting from the first digit.":"Tickets must match the winning number in the exact same order, starting from the first digit.","If the winning number is \u201c123456\u201d:":"If the winning number is \u201c123456\u201d:","\u201c120000\u201d matches the first 2 digits.":"\u201c120000\u201d matches the first 2 digits.","\u201c000006\u201d matches the last digit, but since the first five digits are wrong, it doesn\u2019t win any prizes.":"\u201c000006\u201d matches the last digit, but since the first five digits are wrong, it doesn\u2019t win any prizes.","Winning number":"Winning number","Total tickets":"Total tickets","Winning tickets":"Winning tickets","until the draw":"until the draw","Winners announced in":"Winners announced in","Tickets on sale in":"Tickets on sale in","to check if you\'ve won!":"to check if you\'ve won!","Why didn\'t I win?":"Why didn\'t I win?","How to Play":"How to Play","If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.":"If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.","Simple!":"Simple!","Prices are set when the round starts, equal to 5 USD in CAKE per ticket.":"Prices are set when the round starts, equal to 5 USD in CAKE per ticket.","Wait for the Draw":"Wait for the Draw","There are two draws every day: one every 12 hours.":"There are two draws every day: one every 12 hours.","Check for Prizes":"Check for Prizes","Once the round\u2019s over, come back to the page and check to see if you\u2019ve won!":"Once the round\u2019s over, come back to the page and check to see if you\u2019ve won!","Step %number%":"Step %number%","Winning Criteria":"Winning Criteria","The digits on your ticket must match in the correct order to win.":"The digits on your ticket must match in the correct order to win.","Here\u2019s an example lottery draw, with two tickets, A and B.":"Here\u2019s an example lottery draw, with two tickets, A and B.","Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a \u201cMatch first 3\u201d prize.":"Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a \u201cMatch first 3\u201d prize.","A":"A","Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn\u2019t win a prize.":"Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn\u2019t win a prize.","B":"B","Prize Funds":"Prize Funds","The prizes for each lottery round come from three sources:":"The prizes for each lottery round come from three sources:","Ticket Purchases":"Ticket Purchases","100% of the CAKE paid by people buying tickets that round goes back into the prize pools.":"100% of the CAKE paid by people buying tickets that round goes back into the prize pools.","Rollover Prizes":"Rollover Prizes","After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.":"After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket rolls over into the next round and are redistributed among the prize pools.","CAKE Injections":"CAKE Injections","An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to ":"An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week. This CAKE is of course also included in rollovers! Read more in our guide to ","CAKE Tokenomics":"CAKE Tokenomics","Digits matched":"Digits matched","Prize pool allocation":"Prize pool allocation","Matches first %digits%":"Matches first %digits%","Matches all 6":"Matches all 6","Burn Pool":"Burn Pool","Still got questions?":"Still got questions?","Check our in-depth guide on":"Check our in-depth guide on","how to play the PancakeSwap lottery!":"how to play the PancakeSwap lottery!","Prize brackets don\u2019t \u2018stack\u2019: if you match the first 3 digits in order, you\u2019ll only win prizes from the \u2018Match 3\u2019 bracket, and not from \u2018Match 1\u2019 and \u2018Match 2\u2019.":"Prize brackets don\u2019t \u2018stack\u2019: if you match the first 3 digits in order, you\u2019ll only win prizes from the \u2018Match 3\u2019 bracket, and not from \u2018Match 1\u2019 and \u2018Match 2\u2019.","Coming soon!":"Coming soon!","Tickets":"Tickets","Edit numbers":"Edit numbers","each":"each","Collect Prizes":"Collect Prizes","You won":"You won","Calculating rewards":"Calculating rewards","Buying multiple tickets in a single transaction gives a discount. The discount increases in a linear way, up to the maximum of 100 tickets:":"Buying multiple tickets in a single transaction gives a discount. The discount increases in a linear way, up to the maximum of 100 tickets:","2 tickets: 0.05%":"2 tickets: 0.05%","50 tickets: 2.45%":"50 tickets: 2.45%","100 tickets: 4.95%":"100 tickets: 4.95%","You pay":"You pay","Lottery Now Live":"Lottery Now Live","Play Now":"Play Now","Over %amount% in Prizes!":"Over %amount% in Prizes!","Next Auction":"Next Auction","Auction Schedule":"Auction Schedule","%numHours% hours":"%numHours% hours","To be announced":"To be announced","Auction Leaderboard":"Auction Leaderboard","How does it work?":"How does it work?","Step 1: Submit application":"Step 1: Submit application","Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the ":"Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the ","Application Form":"Application Form","Step 2: Await whitelisting":"Step 2: Await whitelisting","The PancakeSwap team will try to respond within a week.":"The PancakeSwap team will try to respond within a week.","Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding CAKE in the auction.":"Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding CAKE in the auction.","Core Farm/Pool qualifiers will receive further directions separately.":"Core Farm/Pool qualifiers will receive further directions separately.","Step 3: During the auction":"Step 3: During the auction","During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.":"During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.","You can then commit CAKE to bid during the auction, competing against other project for one of the available farms.":"You can then commit CAKE to bid during the auction, competing against other project for one of the available farms.","Step 4: After the auction":"Step 4: After the auction","If your bid was not successful, you can reclaim your CAKE on this page.":"If your bid was not successful, you can reclaim your CAKE on this page.","If your bid was successful, your farm will begin at the specified time. The CAKE you bid will not be returned to you and will be added to our weekly CAKE burn.":"If your bid was successful, your farm will begin at the specified time. The CAKE you bid will not be returned to you and will be added to our weekly CAKE burn.","So long as you are whitelisted, you\u2019ll be able to participate in each new auction.":"So long as you are whitelisted, you\u2019ll be able to participate in each new auction.","If two or more projects bid the exact same CAKE amount and are contending for a spot in the winning bidders, their bids may be invalidated.":"If two or more projects bid the exact same CAKE amount and are contending for a spot in the winning bidders, their bids may be invalidated.","Community Farm Auction":"Community Farm Auction","Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on PancakeSwap.":"Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on PancakeSwap.","Apply for a Farm/Pool":"Apply for a Farm/Pool","Community Auctions":"Community Auctions","FAQs":"FAQs","Auction duration":"Auction duration","Terms & Conditions":"Terms & Conditions","in Prizes!":"in Prizes!","Output is estimated. If the price changes by more than %slippage%% your transaction will revert.":"Output is estimated. If the price changes by more than %slippage%% your transaction will revert.","Supplying %amountA% %symbolA% and %amountB% %symbolB%":"Supplying %amountA% %symbolA% and %amountB% %symbolB%","Removing %amountA% %symbolA% and %amountB% %symbolB%":"Removing %amountA% %symbolA% and %amountB% %symbolB%","Swapping %amountA% %symbolA% for %amountB% %symbolB%":"Swapping %amountA% %symbolA% for %amountB% %symbolB%","Add Liquidity":"Add Liquidity","Add liquidity to receive LP tokens":"Add liquidity to receive LP tokens","Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool.":"Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool.","You are creating a pool":"You are creating a pool","You are the first liquidity provider.":"You are the first liquidity provider.","The ratio of tokens you add will set the price of this pool.":"The ratio of tokens you add will set the price of this pool.","Once you are happy with the rate click supply to review.":"Once you are happy with the rate click supply to review.","Initial prices and pool share":"Initial prices and pool share","Prices and pool share":"Prices and pool share","Unsupported Asset":"Unsupported Asset","Enabling %asset%":"Enabling %asset%","Enable %asset%":"Enable %asset%","Share of Pool":"Share of Pool","%assetA% per %assetB%":"%assetA% per %assetB%","%asset% Deposited":"%asset% Deposited","Rates":"Rates","Create Pool & Supply":"Create Pool & Supply","Confirm Supply":"Confirm Supply","Confirm Swap":"Confirm Swap","Connect to a wallet to view your liquidity.":"Connect to a wallet to view your liquidity.","Connect to a wallet to find pools":"Connect to a wallet to find pools","Select a token to find your liquidity.":"Select a token to find your liquidity.","No liquidity found.":"No liquidity found.","Don\'t see a pool you joined?":"Don\'t see a pool you joined?","Find other LP tokens":"Find other LP tokens","Import Pool":"Import Pool","Import an existing pool":"Import an existing pool","Select a Token":"Select a Token","Pool Found!":"Pool Found!","No pool found.":"No pool found.","Create pool.":"Create pool.","Manage this pool.":"Manage this pool.","Invalid pair.":"Invalid pair.","You don\u2019t have liquidity in this pool yet.":"You don\u2019t have liquidity in this pool yet.","%assetA%/%assetB% Burned":"%assetA%/%assetB% Burned","Price":"Price","Prices":"Prices","Remove %assetA%-%assetB% liquidity":"Remove %assetA%-%assetB% liquidity","Amount":"Amount","Simple":"Simple","Detailed":"Detailed","Receive WBNB":"Receive WBNB","Receive BNB":"Receive BNB","Remove":"Remove","Input":"Input","Output":"Output","Trade tokens in an instant":"Trade tokens in an instant","From (estimated)":"From (estimated)","From":"From","To (estimated)":"To (estimated)","To":"To","+ Add a send (optional)":"+ Add a send (optional)","- Remove send":"- Remove send","Slippage Tolerance":"Slippage Tolerance","Insufficient liquidity for this trade.":"Insufficient liquidity for this trade.","Try enabling multi-hop trades.":"Try enabling multi-hop trades.","Price Impact High":"Price Impact High","Swap":"Swap","Swap Anyway":"Swap Anyway","Recent Transactions":"Recent Transactions","clear all":"clear all","Clear all":"Clear all","No recent transactions":"No recent transactions","Are you sure?":"Are you sure?","Expert mode turns off the \'Confirm\' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.":"Expert mode turns off the \'Confirm\' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.","Only use this mode if you know what you\u2019re doing.":"Only use this mode if you know what you\u2019re doing.","Turn On Expert Mode":"Turn On Expert Mode","Disable Multihops":"Disable Multihops","Restricts swaps to direct pairs only.":"Restricts swaps to direct pairs only.","Enter a valid slippage percentage":"Enter a valid slippage percentage","Your transaction may fail":"Your transaction may fail","Your transaction may be frontrun":"Your transaction may be frontrun","Your transaction will revert if it is pending for more than this long.":"Your transaction will revert if it is pending for more than this long.","minutes":"minutes","Token Amount":"Token Amount","LP tokens in your wallet":"LP tokens in your wallet","Pooled %asset%":"Pooled %asset%","By adding liquidity you\'ll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.":"By adding liquidity you\'ll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.","Common bases":"Common bases","These tokens are commonly paired with other tokens.":"These tokens are commonly paired with other tokens.","Expanded results from inactive Token Lists":"Expanded results from inactive Token Lists","Tokens from inactive lists. Import specific tokens below or click \'Manage\' to activate more lists.":"Tokens from inactive lists. Import specific tokens below or click \'Manage\' to activate more lists.","No results found.":"No results found.","Manage":"Manage","Manage Tokens":"Manage Tokens","Import Tokens":"Import Tokens","Import List":"Import List","Import at your own risk":"Import at your own risk","By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.":"By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.","If you purchase a token from this list, you may not be able to sell it back.":"If you purchase a token from this list, you may not be able to sell it back.","Import":"Import","via":"via","Anyone can create a ERC20 token on CRAB with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.":"Anyone can create a ERC20 token on CRAB with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.","If you purchase an arbitrary token, you may be unable to sell it back.":"If you purchase an arbitrary token, you may be unable to sell it back.","Unknown Source":"Unknown Source","Lists":"Lists","See":"See","Update list":"Update list","https:// or ipfs:// or ENS name":"https:// or ipfs:// or ENS name","Loaded":"Loaded","Loading":"Loading","Enter valid token address":"Enter valid token address","Custom Token":"Custom Token","Custom Tokens":"Custom Tokens","Unknown Error":"Unknown Error","Select a currency":"Select a currency","Search name or paste address":"Search name or paste address","Add %asset% to Metamask":"Add %asset% to Metamask","Added %asset%":"Added %asset%","Transaction Submitted":"Transaction Submitted","Wallet Address or ENS name":"Wallet Address or ENS name","Recipient":"Recipient","Waiting For Confirmation":"Waiting For Confirmation","Confirm this transaction in your wallet":"Confirm this transaction in your wallet","Dismiss":"Dismiss","Latest":"Latest","Notice for trading %symbol%":"Notice for trading %symbol%","To trade SAFEMOON, you must:":"To trade SAFEMOON, you must:","Click on the settings icon":"Click on the settings icon","Set your slippage tolerance to 12%+":"Set your slippage tolerance to 12%+","This is because SafeMoon taxes a 10% fee on each transaction:":"This is because SafeMoon taxes a 10% fee on each transaction:","5% fee = redistributed to all existing holders":"5% fee = redistributed to all existing holders","5% fee = used to add liquidity":"5% fee = used to add liquidity","Warning: BONDLY has been compromised. Please remove liquidity until further notice.":"Warning: BONDLY has been compromised. Please remove liquidity until further notice.","Claimed":"Claimed","Settings":"Settings","Transaction deadline":"Transaction deadline","Convert ERC-20 to BEP-20":"Convert ERC-20 to BEP-20","Need help ?":"Need help ?","Select a token":"Select a token","Enter a recipient":"Enter a recipient","Invalid recipient":"Invalid recipient","Supply":"Supply","Your Liquidity":"Your Liquidity","Remove liquidity to receive tokens back":"Remove liquidity to receive tokens back","Trade anything. No registration, no hassle.":"Trade anything. No registration, no hassle.","Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.":"Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.","Learn":"Learn","BNB token":"BNB token","CAKE token":"CAKE token","BTC token":"BTC token","Earn passive income with crypto.":"Earn passive income with crypto.","PancakeSwap makes it easy to make your crypto work for you.":"PancakeSwap makes it easy to make your crypto work for you.","Explore":"Explore","Pie chart":"Pie chart","Stocks chart":"Stocks chart","Folder with cake token":"Folder with cake token","CAKE makes our world go round.":"CAKE makes our world go round.","CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!":"CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!","Small 3d pancake":"Small 3d pancake","%cakePrizeInUsd% in CAKE prizes this round":"%cakePrizeInUsd% in CAKE prizes this round","Buy tickets with CAKE, win CAKE if your numbers match":"Buy tickets with CAKE, win CAKE if your numbers match","$%bnbWonInUsd% in BNB won so far":"$%bnbWonInUsd% in BNB won so far","Will BNB price rise or fall? guess correctly to win!":"Will BNB price rise or fall? guess correctly to win!","And those users are now entrusting the platform with over $%tvl% in funds.":"And those users are now entrusting the platform with over $%tvl% in funds.","Trusted with billions.":"Trusted with billions.","PancakeSwap has the most users of any decentralized platform, ever.":"PancakeSwap has the most users of any decentralized platform, ever.","Will you join them?":"Will you join them?","$%tvl% staked":"$%tvl% staked","The moon is made of pancakes.":"The moon is made of pancakes.","Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.":"Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.","Lunar bunny":"Lunar bunny","Total supply":"Total supply","Burned to date":"Burned to date","Market cap":"Market cap","Current emissions":"Current emissions","$%marketCap%":"$%marketCap%","%cakeEmissions%/block":"%cakeEmissions%/block","%earningsBusd% to collect from %count% farm":"%earningsBusd% to collect from %count% farm","%earningsBusd% to collect from %count% farms":"%earningsBusd% to collect from %count% farms","%earningsBusd% to collect from %count% farm and CAKE pool":"%earningsBusd% to collect from %count% farm and CAKE pool","%earningsBusd% to collect from %count% farms and CAKE pool":"%earningsBusd% to collect from %count% farms and CAKE pool","%earningsBusd% to collect from CAKE pool":"%earningsBusd% to collect from CAKE pool","%earningsBusd% to collect":"%earningsBusd% to collect","Harvest all":"Harvest all","Start in seconds.":"Start in seconds.","Used by millions.":"Used by millions.","Hi, %userName%!":"Hi, %userName%!","Play":"Play","Connected with %address%":"Connected with %address%","Win millions in prizes":"Win millions in prizes","%users% users":"%users% users","Connect your crypto wallet to start using the app in seconds.":"Connect your crypto wallet to start using the app in seconds.","in the last 30 days":"in the last 30 days","No registration needed.":"No registration needed.","Learn how to start":"Learn how to start","%trades% trades":"%trades% trades","Provably fair, on-chain games.":"Provably fair, on-chain games.","made in the last 30 days":"made in the last 30 days","Win big with PancakeSwap.":"Win big with PancakeSwap.","Copied":"Copied","Make a Profile":"Make a Profile","Your Address":"Your Address","Your Wallet":"Your Wallet","Transactions":"Transactions","CRAB Balance Low":"CRAB Balance Low","CRAB Balance":"CRAB Balance","CAKE Balance":"CAKE Balance","You need BNB for transaction fees.":"You need BNB for transaction fees.","Disconnect":"Disconnect","Disconnect Wallet":"Disconnect Wallet","Ending in":"Ending in","Next auction":"Next auction","Contract approved - you can now place your bid!":"Contract approved - you can now place your bid!","Contract approved - you can now reclaim your bid!":"Contract approved - you can now reclaim your bid!","Bid placed!":"Bid placed!","Bid reclaimed!":"Bid reclaimed!","Reclaim Bid":"Reclaim Bid","Place a Bid":"Place a Bid","Reclaim your CAKE now.":"Reclaim your CAKE now.","Your total bid":"Your total bid","Your bid in Auction #%auctionId% was unsuccessful.":"Your bid in Auction #%auctionId% was unsuccessful.","Current Auction":"Current Auction","Farm schedule":"Farm schedule","Farm duration":"Farm duration","%num% days":"%num% days","Only whitelisted project wallets can bid in the auction to create Community Farms.":"Only whitelisted project wallets can bid in the auction to create Community Farms.","Bidding is only possible while the auction is live.":"Bidding is only possible while the auction is live.","If you\u2019re sure your project should be able to bid in this auction, make sure you\u2019re connected with the correct (whitelisted) wallet.":"If you\u2019re sure your project should be able to bid in this auction, make sure you\u2019re connected with the correct (whitelisted) wallet.","Why cant I bid for a farm?":"Why cant I bid for a farm?","Archive":"Archive","Auction #":"Auction #","Auction #%auctionId%":"Auction #%auctionId%","LP Info":"LP Info","Bidder Address":"Bidder Address","Top %num% bidders at the end of the auction will successfully create a community farm.":"Top %num% bidders at the end of the auction will successfully create a community farm.","Position":"Position","CAKE bid":"CAKE bid","Showing top 10 bids only.":"Showing top 10 bids only.","See all whitelisted bidders":"See all whitelisted bidders","Your existing bid":"Your existing bid","Bid a multiple of 10":"Bid a multiple of 10","Bid must be a multiple of 10":"Bid must be a multiple of 10","First bid must be %initialBidAmount% CAKE or more.":"First bid must be %initialBidAmount% CAKE or more.","If your bid is unsuccessful, you\u2019ll be able to reclaim your CAKE after the auction.":"If your bid is unsuccessful, you\u2019ll be able to reclaim your CAKE after the auction.","Notice":"Notice","This page is a functional page, for projects to bid for farms.":"This page is a functional page, for projects to bid for farms.","If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view the auction bids in real time!":"If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view the auction bids in real time!","Connect a whitelisted project wallet to participate in Auctions.":"Connect a whitelisted project wallet to participate in Auctions.","Your bid in Auction #%auctionId% was successful.":"Your bid in Auction #%auctionId% was successful.","Your Farm will be launched as follows:":"Your Farm will be launched as follows:","Multiplier per farm":"Multiplier per farm","Total whitelisted bidders":"Total whitelisted bidders","Please specify auction ID":"Please specify auction ID","No history yet":"No history yet","Connected as %projectName%":"Connected as %projectName%","Place bid":"Place bid","Farms available":"Farms available","top %num% bidders":"top %num% bidders","All Whitelisted Project Wallets":"All Whitelisted Project Wallets","Search address or token":"Search address or token","This page is for projects to bid for farms.":"This page is for projects to bid for farms.","If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view what\u2019s going on!":"If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view what\u2019s going on!","through community auctions so far!":"through community auctions so far!","%num% Winners":"%num% Winners","%num% Contenders...":"%num% Contenders...","Farm Auctions":"Farm Auctions","auction bunny":"auction bunny","Burnt CAKE":"Burnt CAKE","Stake %stakingSymbol% - Earn %earningSymbol%":"Stake %stakingSymbol% - Earn %earningSymbol%","Top Farms":"Top Farms","Top Syrup Pools":"Top Syrup Pools","Expert Mode":"Expert Mode","Don\u2019t show this again":"Don\u2019t show this again","Global":"Global","Tx deadline (mins)":"Tx deadline (mins)","Flippy sounds":"Flippy sounds","Your transaction will revert if it is left confirming for longer than this time.":"Your transaction will revert if it is left confirming for longer than this time.","Fun sounds to make a truly immersive pancake-flipping trading":"Fun sounds to make a truly immersive pancake-flipping trading","Found unknown key Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.":"Found unknown key Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.","Swaps & Liquidity":"Swaps & Liquidity","Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.":"Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.","Bypasses confirmation modals and allows high slippage trades. Use at your own risk.":"Bypasses confirmation modals and allows high slippage trades. Use at your own risk.","Fun sounds to make a truly immersive pancake-flipping trading experience":"Fun sounds to make a truly immersive pancake-flipping trading experience","ROI at current rates":"ROI at current rates","Farm Multiplier":"Farm Multiplier","\u201cMy Balance\u201d here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.":"\u201cMy Balance\u201d here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.","\u201cMy Balance\u201d here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.":"\u201cMy Balance\u201d here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.","APY (%compoundTimes%x daily compound)":"APY (%compoundTimes%x daily compound)","My Balance":"My Balance","Staked for":"Staked for","Compounding every":"Compounding every","1D":"1D","7D":"7D","14D":"14D","30D":"30D","1Y":"1Y","5Y":"5Y","Annual ROI at current rates":"Annual ROI at current rates","Calling all CRAB projects":"Calling all CRAB projects","Apply for whitelisting now!":"Apply for whitelisting now!","Default Transaction Speed (GWEI)":"Default Transaction Speed (GWEI)","Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees":"Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees","Standard (%gasPrice%)":"Standard (%gasPrice%)","Fast (%gasPrice%)":"Fast (%gasPrice%)","Instant (%gasPrice%)":"Instant (%gasPrice%)","You won multiple collectibles!":"You won multiple collectibles!","Prices shown on cards and charts are different":"Prices shown on cards and charts are different","The price you see come from difference places":"The price you see come from difference places","Prices on cards come from Chainlink\u2019s verifiable price oracle.":"Prices on cards come from Chainlink\u2019s verifiable price oracle.","Prices on charts come from Binance.com. Chart\'s are provided for your reference only.":"Prices on charts come from Binance.com. Chart\'s are provided for your reference only.","Only the price from Chainlink (shown on the cards) determines the round\'s result.":"Only the price from Chainlink (shown on the cards) determines the round\'s result.","Showing history for Prediction v0.2":"Showing history for Prediction v0.2","Check for unclaimed v0.1 winnings":"Check for unclaimed v0.1 winnings","You have no unclaimed v0.1 prizes.":"You have no unclaimed v0.1 prizes.","Nothing to collect":"Nothing to collect","Download .CSV":"Download .CSV","Download your v0.1 Prediction history below.":"Download your v0.1 Prediction history below.","Nothing to Collect":"Nothing to Collect","From round %round%":"From round %round%","From rounds %rounds%":"From rounds %rounds%","View More":"View More","User":"User","Net Winnings (BNB)":"Net Winnings (BNB)","Win Rate":"Win Rate","Rounds Won":"Rounds Won","Rank By":"Rank By","Net Winnings":"Net Winnings","Total BNB":"Total BNB","%num%m":"%num%m","Rounds Played":"Rounds Played","Winnings (BNB)":"Winnings (BNB)","Direction":"Direction","My Rankings":"My Rankings","View Stats":"View Stats","Last %num% Bets":"Last %num% Bets","Search %subject%":"Search %subject%","Address":"Address","Learn How to Connect":"Learn How to Connect","Haven\u2019t got a crypto wallet yet?":"Haven\u2019t got a crypto wallet yet?","Neither side wins this round":"Neither side wins this round","The Locked Price & Closed Price are exactly the same (within 8 decimals), so neither side wins. All funds entered into UP and DOWN positions will go to the weekly CAKE burn.":"The Locked Price & Closed Price are exactly the same (within 8 decimals), so neither side wins. All funds entered into UP and DOWN positions will go to the weekly CAKE burn.","To Burn":"To Burn","Account":"Account","PancakeSwap Info & Analytics":"PancakeSwap Info & Analytics","Top Tokens":"Top Tokens","Top Pools":"Top Pools","Your Watchlist":"Your Watchlist","Saved pools will appear here":"Saved pools will appear here","All Pools":"All Pools","All Tokens":"All Tokens","Saved tokens will appear here":"Saved tokens will appear here","Transactions 24H":"Transactions 24H","Volume 24H":"Volume 24H","Volume 7D":"Volume 7D","Total Tokens Locked":"Total Tokens Locked","LP reward fees 24H":"LP reward fees 24H","LP reward fees 7D":"LP reward fees 7D","No pool has been created with this token yet. Create one":"No pool has been created with this token yet. Create one","here.":"here.","Price Change":"Price Change","Page %page% of %maxPage%":"Page %page% of %maxPage%","Name":"Name","Swaps":"Swaps","Adds":"Adds","Removes":"Removes","No Transactions":"No Transactions","Action":"Action","Total Value":"Total Value","Add %token0% and %token1%":"Add %token0% and %token1%","Remove %token0% and %token1%":"Remove %token0% and %token1%","Swap %token0% for %token1%":"Swap %token0% for %token1%","Search pools or tokens":"Search pools or tokens","Watchlist":"Watchlist","See more...":"See more...","No results":"No results","Error occurred, please try again":"Error occurred, please try again","LP reward APR":"LP reward APR","out of $%totalFees% total fees":"out of $%totalFees% total fees","24H":"24H","7D performance":"7D performance","Based on last 7 days\' performance. Does not account for impermanent loss":"Based on last 7 days\' performance. Does not account for impermanent loss","View token on CoinMarketCap":"View token on CoinMarketCap","Top Movers":"Top Movers","Loading chart data...":"Loading chart data...","You have %amount% tickets this round":"You have %amount% tickets this round","You have %amount% ticket this round":"You have %amount% ticket this round","You had %amount% tickets this round":"You had %amount% tickets this round","You had %amount% ticket this round":"You had %amount% ticket this round","Remove Liquidity":"Remove Liquidity","Minimum received":"Minimum received","Maximum sold":"Maximum sold","The difference between the market price and estimated price due to trade size.":"The difference between the market price and estimated price due to trade size.","The difference between the market price and your price due to trade size.":"The difference between the market price and your price due to trade size.","Liquidity Provider Fee":"Liquidity Provider Fee","Import Token":"Import Token","Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.":"Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.","Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.":"Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.","Output will be sent to %recipient%":"Output will be sent to %recipient%","Price Updated":"Price Updated","Accept":"Accept","For each trade a %amount% fee is paid":"For each trade a %amount% fee is paid","%amount% to LP token holders":"%amount% to LP token holders","%amount% to the Treasury":"%amount% to the Treasury","%amount% towards Community":"%amount% towards Community","Routing through these tokens resulted in the best price for your trade.":"Routing through these tokens resulted in the best price for your trade.","Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.":"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.","Route":"Route","Price Impact":"Price Impact","This swap has a price impact of at least %amount%%. Please type the word \\"%word%\\" to continue with this swap.":"This swap has a price impact of at least %amount%%. Please type the word \\"%word%\\" to continue with this swap.","This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.":"This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.","To receive %assetA% and %assetB%":"To receive %assetA% and %assetB%","Price Impact Too High":"Price Impact Too High","About":"About","Online Store":"Online Store","Customer Support":"Customer Support","Troubleshooting":"Troubleshooting","Guides":"Guides","Developers":"Developers","Documentation":"Documentation","Bug Bounty":"Bug Bounty","Audits":"Audits","Careers":"Careers","Dark mode":"Dark mode","Invalid pair":"Invalid pair","V1 (old)":"V1 (old)","Transaction receipt":"Transaction receipt","You won points for joining PancakeSwap during the first year of our journey!":"You won points for joining PancakeSwap during the first year of our journey!","NFT Collected":"NFT Collected","User profile picture":"User profile picture","User team banner":"User team banner","Items":"Items","Items listed":"Items listed","Lowest (%symbol%)":"Lowest (%symbol%)","Vol. (%symbol%)":"Vol. (%symbol%)","Profile":"Profile","Selling":"Selling","View Subview for user address":"View Subview for user address","Back to profile":"Back to profile","Activate Profile":"Activate Profile","Lowest price":"Lowest price","Your price":"Your price","Not on sale":"Not on sale","For Sale (%num%)":"For Sale (%num%)","Owner":"Owner","Contract address":"Contract address","Token id":"Token id","Token ID":"Token ID","Manage Yours":"Manage Yours","Properties":"Properties","Bunny id":"Bunny id","More from this collection":"More from this collection","Apply (%num%)":"Apply (%num%)","Apply":"Apply","Attributes":"Attributes","Min":"Min","Not enough %symbol% to purchase this NFT":"Not enough %symbol% to purchase this NFT","Convert between BNB and WBNB for free":"Convert between BNB and WBNB for free","Convert":"Convert","Checkout":"Checkout","%symbol% in wallet":"%symbol% in wallet","Total payment":"Total payment","Pay with":"Pay with","Please enable WBNB spending in your wallet":"Please enable WBNB spending in your wallet","Please confirm the transaction in your wallet":"Please confirm the transaction in your wallet","Your NFTs":"Your NFTs","Contract approved - you can now buy NFT with WBNB!":"Contract approved - you can now buy NFT with WBNB!","Your NFT has been sent to your wallet":"Your NFT has been sent to your wallet","Transaction Confirmed":"Transaction Confirmed","Activity":"Activity","For sale":"For sale","View Item":"View Item","The NFT will be removed from your wallet and put on sale at this price.":"The NFT will be removed from your wallet and put on sale at this price.","Sales are in WBNB. You can swap WBNB to BNB 1:1 for free with PancakeSwap.":"Sales are in WBNB. You can swap WBNB to BNB 1:1 for free with PancakeSwap.","Enable Listing":"Enable Listing","Please enable your NFT to be sent to the market":"Please enable your NFT to be sent to the market","Contract approved - you can now put your NFT for sale!":"Contract approved - you can now put your NFT for sale!","Adjust Sale Price":"Adjust Sale Price","Set Price":"Set Price","Input New Sale Price":"Input New Sale Price","Your NFT has been listed for sale!":"Your NFT has been listed for sale!","Your NFT listing has been changed.":"Your NFT listing has been changed.","Your NFT has been returned to your wallet":"Your NFT has been returned to your wallet","Removing this NFT from the marketplace will return it to your wallet.":"Removing this NFT from the marketplace will return it to your wallet.","Continue?":"Continue?","Paste CRAB address":"Paste CRAB address","That\u2019s not a Binance Smart Chain wallet address.":"That\u2019s not a Binance Smart Chain wallet address.","This action will send your NFT to the address you have indicated above. Make sure it\u2019s the correct":"This action will send your NFT to the address you have indicated above. Make sure it\u2019s the correct","This address is the one that is currently connected":"This address is the one that is currently connected","Recently Listed":"Recently Listed","Please progress to the next step.":"Please progress to the next step.","Press \'confirm\' to mint this NFT":"Press \'confirm\' to mint this NFT","You have minted your starter NFT":"You have minted your starter NFT","Go to your profile page to continue.":"Go to your profile page to continue.","Select All":"Select All","Clear":"Clear","Clear All":"Clear All","All Items":"All Items","Sort By":"Sort By","Collections":"Collections","View All":"View All","All Collections":"All Collections","Recently listed":"Recently listed","Hot Collections":"Hot Collections","Remove from Market":"Remove from Market","Lowest price on market":"Lowest price on market","Transfer to New Wallet":"Transfer to New Wallet","Less":"Less","No results found":"No results found","More Collections are on their way!":"More Collections are on their way!","Removing it will suspend your profile, and you won\u2019t be able to earn points, participate in team activities, or be eligible for new NFT drops.":"Removing it will suspend your profile, and you won\u2019t be able to earn points, participate in team activities, or be eligible for new NFT drops.","Traits":"Traits","Trait":"Trait","Count":"Count","Rarity":"Rarity","Lowest":"Lowest","You don\u2019t have any of this item.":"You don\u2019t have any of this item.","You don\u2019t have this item.":"You don\u2019t have this item.","Manage/Sell":"Manage/Sell","NFT Market":"NFT Market","Delisted":"Delisted","No NFTs found":"No NFTs found","Listed":"Listed","Transaction Details":"Transaction Details","Buy and Sell NFTs on Binance Smart Chain":"Buy and Sell NFTs on Binance Smart Chain","Modified":"Modified","From/To":"From/To","Item":"Item","Bought":"Bought","Event":"Event","Sold":"Sold","No NFT market history found":"No NFT market history found","Edit":"Edit","Token ID:":"Token ID:","Token ID: %id%":"Token ID: %id%","When selling NFTs from this collection, a portion of the BNB paid will be diverted before reaching the seller:":"When selling NFTs from this collection, a portion of the BNB paid will be diverted before reaching the seller:","%percentage%% royalties to the collection owner":"%percentage%% royalties to the collection owner","%percentage%% trading fee will be used to buy & burn CAKE":"%percentage%% trading fee will be used to buy & burn CAKE","Sell":"Sell","Set as Profile Pic":"Set as Profile Pic","Allowed price range is between %minPrice% and %maxPrice% WBNB":"Allowed price range is between %minPrice% and %maxPrice% WBNB","Seller pays %percentage%% platform fee on sale":"Seller pays %percentage%% platform fee on sale","Platform fee if sold":"Platform fee if sold","Click to view NFT":"Click to view NFT","Asking price":"Asking price","Please enter a valid address, or connect your wallet to view your profile":"Please enter a valid address, or connect your wallet to view your profile","No items for sale":"No items for sale","Load more":"Load more","Your NFT has been transferred to another wallet":"Your NFT has been transferred to another wallet","Back":"Back","Confirm transaction":"Confirm transaction","Collection":"Collection","Items in the table update every 10 seconds":"Items in the table update every 10 seconds","Pancake Squad":"Pancake Squad","Meet the Artist":"Meet the Artist","Please confirm your transaction in wallet.":"Please confirm your transaction in wallet.","View market":"View market","Mint":"Mint","Max purchased":"Max purchased","Fair, Random, Rare":"Fair, Random, Rare","Activate your profile":"Activate your profile","Sounds great, how can I get one?":"Sounds great, how can I get one?","View the smart contract address on Subview":"View the smart contract address on Subview","Your Claim Tickets: ":"Your Claim Tickets: ","Claiming Complete!":"Claiming Complete!","Buy how many?":"Buy how many?","Activate your profile and make sure you have at least the cost of 1 NFT in your wallet to buy a Squad Ticket.":"Activate your profile and make sure you have at least the cost of 1 NFT in your wallet to buy a Squad Ticket.","Sold Out!":"Sold Out!","Follow on Twitter":"Follow on Twitter","Confirming...":"Confirming...","Your Squad (%tokens%)":"Your Squad (%tokens%)","Minting...":"Minting...","Not eligible":"Not eligible","Out of the 10,000 total NFTs in the squad,":"Out of the 10,000 total NFTs in the squad,","You\u2019ll need an active PancakeSwap Profile to buy Minting Tickets and mint a Pancake Squad NFT!":"You\u2019ll need an active PancakeSwap Profile to buy Minting Tickets and mint a Pancake Squad NFT!","The minting period is now over: all 10,000 bunnies have now been minted.":"The minting period is now over: all 10,000 bunnies have now been minted.","View the":"View the","All 10,000 Pancake Squad NFTs have now been minted!":"All 10,000 Pancake Squad NFTs have now been minted!","Mint Cost: %minCost% CAKE each":"Mint Cost: %minCost% CAKE each","Cost per Ticket":"Cost per Ticket","Follow on Instagram":"Follow on Instagram","Please enable CAKE spending in your wallet":"Please enable CAKE spending in your wallet","Mint NFTs (%tickets%)":"Mint NFTs (%tickets%)","490 are available in the pre-sale for owners of Gen 0 Pancake Bunnies (bunnyID 0, 1, 2, 3, 4)":"490 are available in the pre-sale for owners of Gen 0 Pancake Bunnies (bunnyID 0, 1, 2, 3, 4)","Hold CAKE":"Hold CAKE","Head to the NFT Market to buy!":"Head to the NFT Market to buy!","documentation on our site":"documentation on our site","Max per wallet: %maxPerWallet%":"Max per wallet: %maxPerWallet%","Your CAKE Balance":"Your CAKE Balance","Public Sale: Any wallet with an active Pancake Profile can purchase up to 10 Squad Tickets, while stocks last.":"Public Sale: Any wallet with an active Pancake Profile can purchase up to 10 Squad Tickets, while stocks last.","Enabling...":"Enabling...","Gen 0 Pancake Bunnies":"Gen 0 Pancake Bunnies","Each NFT costs CAKE to mint. Remember you also need BNB to cover transaction fees too!":"Each NFT costs CAKE to mint. Remember you also need BNB to cover transaction fees too!","Check the rarity of each NFT\u2019s traits on the":"Check the rarity of each NFT\u2019s traits on the","PancakeSwap\u2019s first official generative NFT collection.":"PancakeSwap\u2019s first official generative NFT collection.","Your remaining limit":"Your remaining limit","During this phase, any wallet holding a Squad Ticket can redeem their ticket to mint a Pancake Squad NFT.":"During this phase, any wallet holding a Squad Ticket can redeem their ticket to mint a Pancake Squad NFT.","120 are reserved by the team for community giveaways, etc;":"120 are reserved by the team for community giveaways, etc;","Buy Squad Tickets":"Buy Squad Tickets","Pancake Squad page in the NFT Market":"Pancake Squad page in the NFT Market","Join the squad.":"Join the squad.","Total Cost":"Total Cost","Buy Minting Tickets":"Buy Minting Tickets","and the remaining NFTs can be minted by anyone with a ":"and the remaining NFTs can be minted by anyone with a ","Buy Squad Tickets, while stocks last. You\u2019ll use them in step 4.":"Buy Squad Tickets, while stocks last. You\u2019ll use them in step 4.","For more details, check the":"For more details, check the","The network may become busy during the sale period. Consider setting a high gas fee (GWEI).":"The network may become busy during the sale period. Consider setting a high gas fee (GWEI).","Pancake Profile!":"Pancake Profile!","Phase Complete!":"Phase Complete!","randomization documentation on our docs site":"randomization documentation on our docs site","All Pancake Squad NFTs are allocated to Minting Ticket holders through a provably-fair system based on ChainLink at the time of minting.":"All Pancake Squad NFTs are allocated to Minting Ticket holders through a provably-fair system based on ChainLink at the time of minting.","Claim Phase":"Claim Phase","by clicking the \u201cFilter\u201d view. The number of bunnies with a specific trait is displayed next to the trait name.":"by clicking the \u201cFilter\u201d view. The number of bunnies with a specific trait is displayed next to the trait name.","During this phase, any wallet holding a Squad Ticket can redeem their ticket to claim a Pancake Squad NFT.":"During this phase, any wallet holding a Squad Ticket can redeem their ticket to claim a Pancake Squad NFT.","Wait for the Reveal":"Wait for the Reveal","It\u2019ll take a few days before your bunny\u2019s image is revealed. Just hold tight and wait for the final image!":"It\u2019ll take a few days before your bunny\u2019s image is revealed. Just hold tight and wait for the final image!","Trading will open before the images are live, but you\u2019ll still be able to check the bunnies\u2019 stats.":"Trading will open before the images are live, but you\u2019ll still be able to check the bunnies\u2019 stats.","Pre-sale: Wallets which held \u201cGen 0\u201d Pancake Bunnies NFTs (bunnyID 0,1,2,3,4) at a snapshot taken some time between 12 and 2 hours before the presale begins can purchase one Squad Ticket per Gen 0 NFT.":"Pre-sale: Wallets which held \u201cGen 0\u201d Pancake Bunnies NFTs (bunnyID 0,1,2,3,4) at a snapshot taken some time between 12 and 2 hours before the presale begins can purchase one Squad Ticket per Gen 0 NFT.","Transaction has succeeded!":"Transaction has succeeded!","Gen 0 Pancake Bunnies (bunnyID 0, 1, 2, 3, 4)":"Gen 0 Pancake Bunnies (bunnyID 0, 1, 2, 3, 4)","The birthplace of Cecy is truly unknown":"The birthplace of Cecy is truly unknown","But legend tells us, she was sailing alone":"But legend tells us, she was sailing alone","Beyond the mountains, across the sea":"Beyond the mountains, across the sea","When she found an island, said \u201cthis is for me!\u201d":"When she found an island, said \u201cthis is for me!\u201d","\u2018Twas full of rabbits, who caught her attention":"\u2018Twas full of rabbits, who caught her attention","Making neat stuff beyond her comprehension":"Making neat stuff beyond her comprehension","The bunnies were working in a big ol\u2019 kitchen":"The bunnies were working in a big ol\u2019 kitchen","Cooking hot pancakes for their big ol\u2019 mission:":"Cooking hot pancakes for their big ol\u2019 mission:","To drizzle in syrup and hand them out soon":"To drizzle in syrup and hand them out soon","So that bunnies worldwide may fly to the moon.":"So that bunnies worldwide may fly to the moon.","All Pancake Squad NFTs are allocated to Squad Ticket holders through a provably-fair system based on ChainLink at the time of minting.":"All Pancake Squad NFTs are allocated to Squad Ticket holders through a provably-fair system based on ChainLink at the time of minting.","Coming Oct. 7":"Coming Oct. 7","Presale:":"Presale:","Public Sale:":"Public Sale:","Review":"Review","Not for sale":"Not for sale","This NFT is your profile picture, you must change it to some other NFT if you want to sell this one.":"This NFT is your profile picture, you must change it to some other NFT if you want to sell this one.","Owner information is not available for this item":"Owner information is not available for this item","List for sale":"List for sale","Adjust price":"Adjust price","starts in":"starts in","Presale max purchased":"Presale max purchased","end in":"end in","Insufficient Balance":"Insufficient Balance","Bunnies":"Bunnies","Squad":"Squad","Highest price":"Highest price","10,000 bunnies":"10,000 bunnies","10,000 bunnies.":"10,000 bunnies.","ZERO duplicates.":"ZERO duplicates.","Every Pancake Squad bunny is different.":"Every Pancake Squad bunny is different.","On top of that, there are a very small number of ultra-rare special unique bunnies as well...!":"On top of that, there are a very small number of ultra-rare special unique bunnies as well...!","View in Market":"View in Market","They\u2019re all randomly generated from over 200 different features, with over eight BILLION possible combinations, so that no bunny is ever exactly alike.":"They\u2019re all randomly generated from over 200 different features, with over eight BILLION possible combinations, so that no bunny is ever exactly alike.","View Documentation":"View Documentation","What\u2019s the Smart Contract?":"What\u2019s the Smart Contract?","Redeem Tickets to claim NFTs":"Redeem Tickets to claim NFTs","Are you ready?":"Are you ready?","%remaining% of %total% remaining":"%remaining% of %total% remaining","%remaining% of %total% claimed":"%remaining% of %total% claimed","Presale":"Presale","Ready for Pre-Sale!":"Ready for Pre-Sale!","I can\u2019t see my NFT\u2019s picture!":"I can\u2019t see my NFT\u2019s picture!","Sorry, you can\u2019t claim any NFTs! Better luck next time.":"Sorry, you can\u2019t claim any NFTs! Better luck next time.","You need a profile to participate!":"You need a profile to participate!","Randomizing NFT allocation with Chainlink":"Randomizing NFT allocation with Chainlink","Public Sale":"Public Sale","You\u2019re all set!":"You\u2019re all set!","How many can I mint?":"How many can I mint?","Ready for Public Sale!":"Ready for Public Sale!","The max limit per wallet is 10 NFTs.":"The max limit per wallet is 10 NFTs.","Where do the fees go?":"Where do the fees go?","100% of CAKE spent on Pancake Squad NFTs will be burned as part of our weekly CAKE burn.":"100% of CAKE spent on Pancake Squad NFTs will be burned as part of our weekly CAKE burn.","How are the NFTs randomly distributed?":"How are the NFTs randomly distributed?","What\u2019s the value of each NFT?":"What\u2019s the value of each NFT?","Wait for the reveal! After all 10,000 members of the Pancake Squad have been minted, their images will remain hidden for a few days. Just be patient :)":"Wait for the reveal! After all 10,000 members of the Pancake Squad have been minted, their images will remain hidden for a few days. Just be patient :)","Users holding Gen 0 Pancake Bunny NFTs at the snapshot may also purchase one additional Pancake Squad NFT in the presale for each Pancake Bunny they hold.":"Users holding Gen 0 Pancake Bunny NFTs at the snapshot may also purchase one additional Pancake Squad NFT in the presale for each Pancake Bunny they hold.","For example, if you have 5 Gen 0 bunnies, you can buy 5 minting tickets in the presale, then max. 10 in the public sale.":"For example, if you have 5 Gen 0 bunnies, you can buy 5 minting tickets in the presale, then max. 10 in the public sale.","Once all 10,000 Squad Tickets have been bought, Chainlink VRF will be used to randomly allocate the pre-generated NFTs to the purchased Tickets. Squad Tickets are allocated IDs numbered in order of their purchase.":"Once all 10,000 Squad Tickets have been bought, Chainlink VRF will be used to randomly allocate the pre-generated NFTs to the purchased Tickets. Squad Tickets are allocated IDs numbered in order of their purchase.","Once all 10,000 have been sold, VRF will pick numbers from 0 to 9999, which will be used to shift the Squad Ticket ID. This will ensure that the distribution of rare NFTs will be randomized, and prevents \u201csniping\u201d of specific NFTs during the pre-sale or public sale phases.":"Once all 10,000 have been sold, VRF will pick numbers from 0 to 9999, which will be used to shift the Squad Ticket ID. This will ensure that the distribution of rare NFTs will be randomized, and prevents \u201csniping\u201d of specific NFTs during the pre-sale or public sale phases.","Value is subjective, but since different traits have different levels of rarity, you can expect bunnies with rarer traits to trade for higher prices than others. If you\u2019re planning to sell, check the NFT market for the price of bunnies with a similarly rare traits to yours.":"Value is subjective, but since different traits have different levels of rarity, you can expect bunnies with rarer traits to trade for higher prices than others. If you\u2019re planning to sell, check the NFT market for the price of bunnies with a similarly rare traits to yours.","Bunny Id":"Bunny Id","Filter by":"Filter by","On Sale":"On Sale","Results":"Results","Newest Arrivals":"Newest Arrivals","I sold an NFT, where\u2019s my BNB?":"I sold an NFT, where\u2019s my BNB?","Trades are settled in WBNB, which is a wrapped version of BNB used on Binance Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB.":"Trades are settled in WBNB, which is a wrapped version of BNB used on Binance Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB.","You can instantly swap your WBNB for BNB with no trading fees on PancakeSwap.":"You can instantly swap your WBNB for BNB with no trading fees on PancakeSwap.","When can I trade other NFT Collections?":"When can I trade other NFT Collections?","Soon! The current NFT Market is a basic version (phase 1), with early access to trading PancakeSwap NFTs only.":"Soon! The current NFT Market is a basic version (phase 1), with early access to trading PancakeSwap NFTs only.","Other collections will be coming soon. We\u2019ll make an announcement soon about the launch of the V2 Market.":"Other collections will be coming soon. We\u2019ll make an announcement soon about the launch of the V2 Market.","How can I list my NFT collection on the Market?":"How can I list my NFT collection on the Market?","In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.":"In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.","We are now accepting applications from NFT collection owners seeking to list their collections. Please apply here: https://docs.pancakeswap.finance/contact-us/nft-market-applications":"We are now accepting applications from NFT collection owners seeking to list their collections. Please apply here: https://docs.pancakeswap.finance/contact-us/nft-market-applications","What are the fees?":"What are the fees?","100% of all platform fees taken by PancakeSwap from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns.":"100% of all platform fees taken by PancakeSwap from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns.","Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.":"Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.","Mint Cost: To Be Announced":"Mint Cost: To Be Announced","The smart contract address will be released soon before the sale starts.":"The smart contract address will be released soon before the sale starts.","Supply Count":"Supply Count","Brand":"Brand","Success":"Success","Wrap":"Wrap","Unwrap":"Unwrap","Go to IFO":"Go to IFO","Phishing warning: ":"Phishing warning: ","please make sure you\'re visiting https://snowswap.xyz - check the URL carefully.":"please make sure you\'re visiting https://snowswap.xyz - check the URL carefully.","No bids yet":"No bids yet","Please specify Round":"Please specify Round","1W":"1W","1M":"1M","Failed to load price chart for this pair":"Failed to load price chart for this pair","You can swap WBNB for BNB (and vice versa) with no trading fees.":"You can swap WBNB for BNB (and vice versa) with no trading fees.","Exchange rate is always 1 to 1.":"Exchange rate is always 1 to 1.","You can contribute to one or both, it doesn\u2019t matter: only your overall contribution is counted for the achievement.":"You can contribute to one or both, it doesn\u2019t matter: only your overall contribution is counted for the achievement.","You\u2019ll need %symbol% tokens to participate in the IFO!":"You\u2019ll need %symbol% tokens to participate in the IFO!","Get %symbol%, or make sure your tokens aren\u2019t staked somewhere else.":"Get %symbol%, or make sure your tokens aren\u2019t staked somewhere else.","Refresh":"Refresh","Basic":"Basic","TradingView chart not available":"TradingView chart not available","Everyone\u2019s a winner!":"Everyone\u2019s a winner!","Sign up for battle and you\u2019re guaranteed a prize!":"Sign up for battle and you\u2019re guaranteed a prize!","Binance Fan token Trading Competition":"Binance Fan token Trading Competition","Compete with other teams for the highest trading volume!":"Compete with other teams for the highest trading volume!","Trading Competition":"Trading Competition","Trade SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CAKE/BNB and CAKE/BUSD during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.":"Trade SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CAKE/BNB and CAKE/BUSD during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.","To participate in the next IFO, stake some CAKE in the IFO CAKE pool!":"To participate in the next IFO, stake some CAKE in the IFO CAKE pool!","Average":"Average","Pool Balance":"Pool Balance","Stake CAKE in IFO pool":"Stake CAKE in IFO pool","The maximum amount of CAKE user can commit to all the sales combined, is equal to the average CAKE balance in the IFO CAKE pool prior to the IFO. Stake more CAKE to increase the maximum CAKE you can commit to the sale. Missed this IFO? You can keep IFO CAKE staking pool balance for the next IFO sale.":"The maximum amount of CAKE user can commit to all the sales combined, is equal to the average CAKE balance in the IFO CAKE pool prior to the IFO. Stake more CAKE to increase the maximum CAKE you can commit to the sale. Missed this IFO? You can keep IFO CAKE staking pool balance for the next IFO sale.","How does the average balance calculated?":"How does the average balance calculated?","Average pool balance is calculated by average block balance in the IFO pool in over the staking period announced with each IFO proposal.":"Average pool balance is calculated by average block balance in the IFO pool in over the staking period announced with each IFO proposal.","Please refer to our blog post for more details.":"Please refer to our blog post for more details.","Your max CAKE entry":"Your max CAKE entry","For the basic sale, Max CAKE entry is capped by minimum between your average CAKE balance in the IFO CAKE pool, or the pool\u2019s hard cap. To increase the max entry, Stake more CAKE into the IFO CAKE pool":"For the basic sale, Max CAKE entry is capped by minimum between your average CAKE balance in the IFO CAKE pool, or the pool\u2019s hard cap. To increase the max entry, Stake more CAKE into the IFO CAKE pool","For the unlimited sale, Max CAKE entry is capped by your average CAKE balance in the IFO CAKE pool. To increase the max entry, Stake more CAKE into the IFO CAEK pool":"For the unlimited sale, Max CAKE entry is capped by your average CAKE balance in the IFO CAKE pool. To increase the max entry, Stake more CAKE into the IFO CAEK pool","You don\u2019t have any average CAKE balance available to commit in IFO CAKE pool.":"You don\u2019t have any average CAKE balance available to commit in IFO CAKE pool.","Sale Finished!":"Sale Finished!","Start in":"Start in","Max CAKE entry for both IFO sale is capped by average pool balance in this pool. This is calculated by the average block balance in the IFO pool in the past blocks prior to cut-off block.":"Max CAKE entry for both IFO sale is capped by average pool balance in this pool. This is calculated by the average block balance in the IFO pool in the past blocks prior to cut-off block.","Avg Balance":"Avg Balance","Exceeded max CAKE entry":"Exceeded max CAKE entry","Only applies within %num% days of staking. Unstaking after %num% days will not include a fee. Timer resets every time you stake new CAKE in the pool.":"Only applies within %num% days of staking. Unstaking after %num% days will not include a fee. Timer resets every time you stake new CAKE in the pool.","unstaking fee if withdrawn within %num%h":"unstaking fee if withdrawn within %num%h","Earn %asset%":"Earn %asset%","Credit calculation starts:":"Credit calculation starts:","The start block of the current calculation period. Your average IFO CAKE Pool staking balance is calculated throughout this period.":"The start block of the current calculation period. Your average IFO CAKE Pool staking balance is calculated throughout this period.","Check out our Medium article for more detail.":"Check out our Medium article for more detail."}')
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "a", (function() {
                return h
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "e", (function() {
                return v
            })), n.d(t, "d", (function() {
                return O
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return k
            })), n.d(t, "c", (function() {
                return T
            }));
            var a = n(9),
                i = n(214),
                r = n(7),
                o = n(0),
                s = n(74),
                c = n(26),
                l = n(59),
                u = n(49),
                d = n(191),
                p = n(30),
                b = n(55),
                y = n(173);

            function m(e, t) {
                var n = Object(c.a)().chainId,
                    i = Object(d.a)();
                return Object(o.useMemo)((function() {
                    if (!n) return {};
                    var r = Object.keys(e[n]).reduce((function(t, a) {
                        return t[a] = e[n][a].token, t
                    }), {});
                    return t ? i.reduce((function(e, t) {
                        return e[t.address] = t, e
                    }), Object(a.a)({}, r)) : r
                }), [n, i, e, t])
            }

            function f() {
                return m(Object(l.d)(), !0)
            }

            function h() {
                var e = m(Object(l.e)(), !1),
                    t = Object.keys(f());
                return t ? Object.keys(e).reduce((function(n, a) {
                    return t.includes(a) || (n[a] = e[a]), n
                }), {}) : e
            }

            function j() {
                return m(Object(l.h)(), !1)
            }

            function v(e) {
                var t = f();
                return !(!t || !e) && !!t[e.address]
            }

            function O(e) {
                var t = Object(c.a)().chainId,
                    n = h();
                return Object(o.useMemo)((function() {
                    if (t && "" !== e) return Object(y.a)(Object.values(n), e)
                }), [t, n, e])
            }

            function g(e) {
                var t = Object(d.a)();
                return !!e && !!t.find((function(t) {
                    return Object(r.o)(e, t)
                }))
            }
            var w = /^0x[a-fA-F0-9]{64}$/;

            function x(e, t, n) {
                return e && e.length > 0 ? e : t && w.test(t) && 0 === Object(s.arrayify)(t)[31] ? Object(i.b)(t) : n
            }

            function k(e) {
                var t = Object(c.a)().chainId,
                    n = f(),
                    a = Object(p.i)(e),
                    i = Object(b.g)(a || void 0, !1),
                    s = Object(b.a)(a || void 0, !1),
                    l = a ? n[a] : void 0,
                    d = Object(u.c)(l ? void 0 : i, "name", void 0, u.a),
                    y = Object(u.c)(l ? void 0 : s, "name", void 0, u.a),
                    m = Object(u.c)(l ? void 0 : i, "symbol", void 0, u.a),
                    h = Object(u.c)(l ? void 0 : s, "symbol", void 0, u.a),
                    j = Object(u.c)(l ? void 0 : i, "decimals", void 0, u.a);
                return Object(o.useMemo)((function() {
                    if (l) return l;
                    if (t && a) {
                        if (j.loading || m.loading || d.loading) return null;
                        var e, n, i, o;
                        if (j.result) return new r.j(t, a, j.result[0], x(null === (e = m.result) || void 0 === e ? void 0 : e[0], null === (n = h.result) || void 0 === n ? void 0 : n[0], "UNKNOWN"), x(null === (i = d.result) || void 0 === i ? void 0 : i[0], null === (o = y.result) || void 0 === o ? void 0 : o[0], "Unknown Token"))
                    }
                }), [a, t, j.loading, j.result, m.loading, m.result, h.result, l, d.loading, d.result, y.result])
            }

            function T(e) {
                var t = "CRAB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    n = k(t ? void 0 : e);
                return t ? r.d : n
            }
        },
        435: function(e, t) {},
        46: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i.a
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "c", (function() {
                return y
            }));
            var a, i = n(108),
                r = n(10),
                o = (n(0), n(4)),
                s = n(1),
                c = o.e.div(a || (a = Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"])), (function(e) {
                    return e.margin && "4px"
                }));

            function l(e) {
                var t = e.currency0,
                    n = e.currency1,
                    a = e.size,
                    r = void 0 === a ? 20 : a,
                    o = e.margin,
                    l = void 0 !== o && o;
                return Object(s.jsxs)(c, {
                    margin: l,
                    children: [t && Object(s.jsx)(i.a, {
                        currency: t,
                        size: "".concat(r.toString(), "px"),
                        style: {
                            marginRight: "4px"
                        }
                    }), n && Object(s.jsx)(i.a, {
                        currency: n,
                        size: "".concat(r.toString(), "px")
                    })]
                })
            }
            var u, d = n(252),
                p = n(246),
                b = Object(o.e)(p.a)(u || (u = Object(r.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }));

            function y(e) {
                var t = e.logoURI,
                    n = e.style,
                    a = e.size,
                    i = void 0 === a ? "24px" : a,
                    r = e.alt,
                    o = Object(d.a)(t);
                return Object(s.jsx)(b, {
                    alt: r,
                    size: i,
                    srcs: o,
                    style: n
                })
            }
        },
        47: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "c", (function() {
                return p
            }));
            var a = n(16),
                i = n(9),
                r = n(7),
                o = n(63),
                s = r.a.MAINNET,
                c = r.a.TESTNET,
                l = {
                    wbnb: new r.j(s, "0x2D2b97EA380b0185e9fDF8271d1AFB5d2Bf18329", 18, "WCRAB", "Wrapped CRAB", "https://crab.network/"),
                    bnb: new r.j(s, "0x2D2b97EA380b0185e9fDF8271d1AFB5d2Bf18329", 18, "CRAB", "CRAB", "https://crab.network/"),
                    ring: new r.j(s, "0x7399Ea6C9d35124d893B8d9808930e9d3F211501", 9, "xRING", "Darwinia Network Native Token", "https://darwinia.network/"),
                    usdt: new r.j(s, "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98", 6, "USDT", "cBridge - USD Coin", "https://cbridge.celer.network"),
                    usdc: new r.j(s, "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c", 6, "USDC", "cBridge - USD Coin", "https://cbridge.celer.network"),
                    testring: new r.j(s, "0x9aC276FBcb568Eb9f4679B238efd1b6eA1898435", 9, "testRING", "testRING", "")
                },
                u = {
                    wbnb: new r.j(c, "0xF436Ae756f46F2ac547A870c71898eA5915F2F9E", 18, "WCRAB", "Wrapped CRAB", "https://crab.network/"),
                    ring: new r.j(c, "0xc8F2eC4c01AD7cDF27431983546da0c35E40237c", 18, "RING", "Darwinia Network Native Token", "https://darwinia.network/")
                },
                d = function() {
                    return parseInt("44", 10) === r.a.TESTNET ? Object.keys(l).reduce((function(e, t) {
                        return Object(i.a)(Object(i.a)({}, e), {}, Object(a.a)({}, t, u[t] || l[t]))
                    }), {}) : l
                },
                p = function() {
                    var e = d();
                    return Object.keys(e).reduce((function(t, n) {
                        return Object(i.a)(Object(i.a)({}, t), {}, Object(a.a)({}, n, Object(o.d)(e[n])))
                    }), {})
                };
            t.a = d()
        },
        48: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = n(7);

            function i(e, t) {
                return t && e === a.d ? a.n[t] : e instanceof a.j ? e : void 0
            }

            function r(e, t) {
                var n = e && t ? i(e.currency, t) : void 0;
                return n && e ? new a.k(n, e.raw) : void 0
            }

            function o(e) {
                return e.equals(a.n[e.chainId]) ? a.d : e
            }
        },
        49: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "c", (function() {
                return j
            }));
            var a = n(0),
                i = n(25),
                r = n(26),
                o = n(109),
                s = n(70);

            function c(e) {
                return -1 !== ["string", "number"].indexOf(typeof e)
            }

            function l(e) {
                return void 0 === e || Array.isArray(e) && e.every((function(e) {
                    return c(e) || Array.isArray(e) && e.every(c)
                }))
            }
            var u = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0
                },
                d = {
                    blocksPerFetch: 1 / 0
                };

            function p(e, t) {
                var n = Object(r.a)().chainId,
                    o = Object(i.c)((function(e) {
                        return e.multicall.callResults
                    })),
                    c = Object(i.b)(),
                    l = Object(a.useMemo)((function() {
                        var t, n, a;
                        return JSON.stringify(null !== (t = null === e || void 0 === e || null === (n = e.filter((function(e) {
                            return Boolean(e)
                        }))) || void 0 === n || null === (a = n.map(s.f)) || void 0 === a ? void 0 : a.sort()) && void 0 !== t ? t : [])
                    }), [e]);
                return Object(a.useEffect)((function() {
                    var e = JSON.parse(l);
                    if (n && 0 !== e.length) {
                        var a = e.map((function(e) {
                            return Object(s.d)(e)
                        }));
                        return c(Object(s.a)({
                                chainId: n,
                                calls: a,
                                options: t
                            })),
                            function() {
                                c(Object(s.e)({
                                    chainId: n,
                                    calls: a,
                                    options: t
                                }))
                            }
                    }
                }), [n, c, t, l]), Object(a.useMemo)((function() {
                    return e.map((function(e) {
                        var t;
                        if (!n || !e) return u;
                        var a, i = null === (t = o[n]) || void 0 === t ? void 0 : t[Object(s.f)(e)];
                        return (null === i || void 0 === i ? void 0 : i.data) && "0x" !== (null === i || void 0 === i ? void 0 : i.data) && (a = i.data), {
                            valid: !0,
                            data: a,
                            blockNumber: null === i || void 0 === i ? void 0 : i.blockNumber
                        }
                    }))
                }), [o, e, n])
            }
            var b = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1
                },
                y = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1
                };

            function m(e, t, n, a) {
                if (!e) return b;
                var i = e.valid,
                    r = e.data,
                    o = e.blockNumber;
                if (!i) return b;
                if (i && !o) return y;
                if (!t || !n || !a) return y;
                var s, c = r && r.length > 2,
                    l = (null !== o && void 0 !== o ? o : 0) < a;
                if (c && r) try {
                    s = t.decodeFunctionResult(n, r)
                } catch (u) {
                    return console.debug("Result data parsing failed", n, r), {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: l,
                        result: s
                    }
                }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: l,
                    result: s,
                    error: !c
                }
            }

            function f(e, t, n, i) {
                var r = Object(a.useMemo)((function() {
                        var n;
                        return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                    }), [e, t]),
                    s = p(Object(a.useMemo)((function() {
                        return e && r && n && n.length > 0 ? n.map((function(t) {
                            return {
                                address: e.address,
                                callData: e.interface.encodeFunctionData(r, t)
                            }
                        })) : []
                    }), [n, e, r]), i),
                    c = Object(o.a)().currentBlock;
                return Object(a.useMemo)((function() {
                    return s.map((function(t) {
                        return m(t, null === e || void 0 === e ? void 0 : e.interface, r, c)
                    }))
                }), [r, e, s, c])
            }

            function h(e, t, n, i, r) {
                var s = Object(a.useMemo)((function() {
                        return t.getFunction(n)
                    }), [t, n]),
                    c = Object(a.useMemo)((function() {
                        return s && l(i) ? t.encodeFunctionData(s, i) : void 0
                    }), [i, t, s]),
                    u = p(Object(a.useMemo)((function() {
                        return s && e && e.length > 0 && c ? e.map((function(e) {
                            return e && c ? {
                                address: e,
                                callData: c
                            } : void 0
                        })) : []
                    }), [e, c, s]), r),
                    d = Object(o.a)().currentBlock;
                return Object(a.useMemo)((function() {
                    return u.map((function(e) {
                        return m(e, t, s, d)
                    }))
                }), [s, u, t, d])
            }

            function j(e, t, n, i) {
                var r = Object(a.useMemo)((function() {
                        var n;
                        return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                    }), [e, t]),
                    s = p(Object(a.useMemo)((function() {
                        return e && r && l(n) ? [{
                            address: e.address,
                            callData: e.interface.encodeFunctionData(r, n)
                        }] : []
                    }), [e, r, n]), i)[0],
                    c = Object(o.a)().currentBlock;
                return Object(a.useMemo)((function() {
                    return m(s, null === e || void 0 === e ? void 0 : e.interface, r, c)
                }), [s, e, r, c])
            }
        },
        51: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return v
            })), n.d(t, "c", (function() {
                return O
            }));
            var a, i = n(5),
                r = n.n(i),
                o = n(31),
                s = n(99),
                c = n(7),
                l = n(0),
                u = n(26),
                d = n(34),
                p = n(378),
                b = n(17),
                y = n(82),
                m = n(69),
                f = n(30),
                h = n(55),
                j = n(215);

            function v(e, t) {
                var n = Object(u.a)().account,
                    i = Object(j.a)().callWithGasPrice,
                    d = e instanceof c.k ? e.token : void 0,
                    b = Object(p.a)(d, null !== n && void 0 !== n ? n : void 0, t),
                    m = Object(y.c)(null === d || void 0 === d ? void 0 : d.address, t),
                    v = Object(l.useMemo)((function() {
                        return e && t ? e.currency === c.d ? a.APPROVED : b ? b.lessThan(e) ? m ? a.PENDING : a.NOT_APPROVED : a.APPROVED : a.UNKNOWN : a.UNKNOWN
                    }), [e, b, m, t]),
                    O = Object(h.g)(null === d || void 0 === d ? void 0 : d.address),
                    g = Object(y.d)(),
                    w = Object(l.useCallback)(Object(o.a)(r.a.mark((function n() {
                        var o, c;
                        return r.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (v === a.NOT_APPROVED) {
                                        n.next = 3;
                                        break
                                    }
                                    return console.error("approve was called unnecessarily"), n.abrupt("return");
                                case 3:
                                    if (d) {
                                        n.next = 6;
                                        break
                                    }
                                    return console.error("no token"), n.abrupt("return");
                                case 6:
                                    if (O) {
                                        n.next = 9;
                                        break
                                    }
                                    return console.error("tokenContract is null"), n.abrupt("return");
                                case 9:
                                    if (e) {
                                        n.next = 12;
                                        break
                                    }
                                    return console.error("missing amount to approve"), n.abrupt("return");
                                case 12:
                                    if (t) {
                                        n.next = 15;
                                        break
                                    }
                                    return console.error("no spender"), n.abrupt("return");
                                case 15:
                                    return o = !1, n.next = 18, O.estimateGas.approve(t, s.b).catch((function() {
                                        return o = !0, O.estimateGas.approve(t, e.raw.toString())
                                    }));
                                case 18:
                                    return c = n.sent, n.abrupt("return", i(O, "approve", [t, o ? e.raw.toString() : s.b], {
                                        gasLimit: Object(f.b)(c)
                                    }).then((function(n) {
                                        g(n, {
                                            summary: "Approve ".concat(e.currency.symbol),
                                            approval: {
                                                tokenAddress: d.address,
                                                spender: t
                                            }
                                        })
                                    })).catch((function(e) {
                                        throw console.error("Failed to approve token", e), e
                                    })));
                                case 20:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))), [v, d, O, e, t, g, i]);
                return [v, w]
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = Object(l.useMemo)((function() {
                        return e ? Object(m.a)(e, t)[b.a.INPUT] : void 0
                    }), [e, t]);
                return v(n, d.t)
            }! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
            }(a || (a = {}))
        },
        55: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return h
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "b", (function() {
                return v
            })), n.d(t, "c", (function() {
                return O
            })), n.d(t, "a", (function() {
                return g
            })), n.d(t, "f", (function() {
                return w
            })), n.d(t, "e", (function() {
                return x
            })), n.d(t, "d", (function() {
                return k
            }));
            var a = n(0),
                i = n(26),
                r = (n(96), n(188)),
                o = n(7),
                s = n(229),
                c = n(397),
                l = n(398),
                u = n(230),
                d = n(150),
                p = n(399),
                b = n(227),
                y = n(30),
                m = n(228);

            function f(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Object(i.a)(),
                    o = r.library,
                    s = r.account;
                return Object(a.useMemo)((function() {
                    if (!e || !t || !o) return null;
                    try {
                        return Object(y.f)(e, t, n ? Object(y.g)(o, s) : null)
                    } catch (a) {
                        return console.error("Failed to get contract", a), null
                    }
                }), [e, t, o, n, s])
            }

            function h(e, t) {
                return f(e, d, t)
            }

            function j(e) {
                var t = Object(i.a)().chainId;
                return f(t ? o.n[t].address : void 0, p, e)
            }

            function v(e) {
                var t, n = Object(i.a)().chainId;
                if (n) switch (n) {
                    case o.a.MAINNET:
                    case o.a.TESTNET:
                        t = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                }
                return f(t, l, e)
            }

            function O(e, t) {
                return f(e, c, t)
            }

            function g(e, t) {
                return f(e, u.a, t)
            }

            function w(e, t) {
                return f(e, s.a, t)
            }

            function x() {
                return f(Object(r.c)(), b, !1)
            }
            var k = function(e, t) {
                return f(e, m, t)
            }
        },
        58: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return r
            }));
            var a = [],
                i = ["https://www.evolution.land/tokenlists/crab.evolutionland.tokenlist.json"].concat(a),
                r = []
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            })), n.d(t, "c", (function() {
                return g
            })), n.d(t, "b", (function() {
                return k
            })), n.d(t, "d", (function() {
                return T
            })), n.d(t, "e", (function() {
                return C
            })), n.d(t, "f", (function() {
                return A
            })), n.d(t, "h", (function() {
                return S
            })), n.d(t, "g", (function() {
                return E
            }));
            var a, i = n(9),
                r = n(16),
                o = n(13),
                s = n(14),
                c = n(19),
                l = n(20),
                u = n(7),
                d = n(0),
                p = n(25),
                b = n(58),
                y = n(311),
                m = n(387);

            function f(e, t) {
                var n = b.b.includes(e) ? b.b.indexOf(e) : Number.MAX_SAFE_INTEGER,
                    a = b.b.includes(t) ? b.b.indexOf(t) : Number.MAX_SAFE_INTEGER;
                return n < a ? 1 : n > a ? -1 : 0
            }
            var h = function(e) {
                    Object(c.a)(n, e);
                    var t = Object(l.a)(n);

                    function n(e, a) {
                        var i;
                        return Object(o.a)(this, n), (i = t.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, i.tags = void 0, i.tokenInfo = e, i.tags = a, i
                    }
                    return Object(s.a)(n, [{
                        key: "logoURI",
                        get: function() {
                            return this.tokenInfo.logoURI
                        }
                    }]), n
                }(u.j),
                j = (a = {}, Object(r.a)(a, u.a.MAINNET, {}), Object(r.a)(a, u.a.TESTNET, {}), a),
                v = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function O(e) {
                var t = null === v || void 0 === v ? void 0 : v.get(e);
                if (t) return t;
                var n = e.tokens.reduce((function(t, n) {
                    var a, o, s, c = null !== (a = null === (o = n.tags) || void 0 === o || null === (s = o.map((function(t) {
                            var n;
                            if (null === (n = e.tags) || void 0 === n ? void 0 : n[t]) return Object(i.a)(Object(i.a)({}, e.tags[t]), {}, {
                                id: t
                            })
                        }))) || void 0 === s ? void 0 : s.filter((function(e) {
                            return Boolean(e)
                        }))) && void 0 !== a ? a : [],
                        l = new h(n, c);
                    if (void 0 !== t[l.chainId][l.address]) throw Error("Duplicate tokens.");
                    return Object(i.a)(Object(i.a)({}, t), {}, Object(r.a)({}, l.chainId, Object(i.a)(Object(i.a)({}, t[l.chainId]), {}, Object(r.a)({}, l.address, {
                        token: l,
                        list: e
                    }))))
                }), Object(i.a)({}, j));
                return null === v || void 0 === v || v.set(e, n), n
            }

            function g() {
                return Object(p.c)((function(e) {
                    return e.lists.byUrl
                }))
            }

            function w(e, t) {
                var n;
                return n = {}, Object(r.a)(n, u.a.MAINNET, Object(i.a)(Object(i.a)({}, e[u.a.MAINNET]), t[u.a.MAINNET])), Object(r.a)(n, u.a.TESTNET, Object(i.a)(Object(i.a)({}, e[u.a.TESTNET]), t[u.a.TESTNET])), n
            }

            function x(e) {
                var t = g();
                return Object(d.useMemo)((function() {
                    return e ? e.slice().sort(f).reduce((function(e, n) {
                        var a, i = null === (a = t[n]) || void 0 === a ? void 0 : a.current;
                        if (!i) return e;
                        try {
                            return w(e, Object.assign(O(i)))
                        } catch (r) {
                            return console.error("Could not show token list due to error", r), e
                        }
                    }), j) : j
                }), [t, e])
            }

            function k() {
                var e;
                return null === (e = Object(p.c)((function(e) {
                    return e.lists.activeListUrls
                }))) || void 0 === e ? void 0 : e.filter((function(e) {
                    return !b.c.includes(e)
                }))
            }

            function T() {
                return w(x(k()), O(y))
            }

            function C() {
                return x(function() {
                    var e = g(),
                        t = k();
                    return Object.keys(e).filter((function(e) {
                        return !(null === t || void 0 === t ? void 0 : t.includes(e)) && !b.c.includes(e)
                    }))
                }())
            }

            function A() {
                return O(y)
            }

            function S() {
                return w(O(m), x(b.c))
            }

            function E(e) {
                var t = k();
                return Boolean(null === t || void 0 === t ? void 0 : t.includes(e))
            }
        },
        60: function(e, t, n) {
            "use strict";
            var a, i = n(9),
                r = n(52),
                o = n(10),
                s = (n(0), n(2)),
                c = n(4),
                l = n(1),
                u = ["text", "placement", "size"],
                d = c.e.div(a || (a = Object(o.a)(["\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"])));
            t.a = function(e) {
                var t = e.text,
                    n = e.placement,
                    a = void 0 === n ? "right-end" : n,
                    o = e.size,
                    c = void 0 === o ? "16px" : o,
                    p = Object(r.a)(e, u),
                    b = Object(s.vb)(t, {
                        placement: a,
                        trigger: "hover"
                    }),
                    y = b.targetRef,
                    m = b.tooltip,
                    f = b.tooltipVisible;
                return Object(l.jsxs)(s.h, Object(i.a)(Object(i.a)({}, p), {}, {
                    children: [f && m, Object(l.jsx)(d, {
                        ref: y,
                        children: Object(l.jsx)(s.D, {
                            color: "textSubtle",
                            width: c
                        })
                    })]
                }))
            }
        },
        63: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            }));
            var a, i = n(7),
                r = n(74);

            function o(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name,
                    projectLink: e.projectLink
                }
            }

            function s(e) {
                return new i.j(e.chainId, e.address, e.decimals, e.symbol, e.name, e.projectLink)
            }! function(e) {
                e.default = "10", e.fast = "11", e.instant = "15", e.testnet = "11"
            }(a || (a = {}));
            var c = {
                default: Object(r.parseUnits)(a.default, "gwei").toString(),
                fast: Object(r.parseUnits)(a.fast, "gwei").toString(),
                instant: Object(r.parseUnits)(a.instant, "gwei").toString(),
                testnet: Object(r.parseUnits)(a.testnet, "gwei").toString()
            }
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return i
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            }));
            var a = n(24),
                i = {
                    pending: Object(a.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(a.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(a.b)("lists/fetchTokenList/rejected")
                },
                r = Object(a.b)("lists/addList"),
                o = Object(a.b)("lists/removeList"),
                s = Object(a.b)("lists/enableList"),
                c = Object(a.b)("lists/disableList"),
                l = Object(a.b)("lists/acceptListUpdate");
            Object(a.b)("lists/rejectVersionUpdate")
        },
        668: function(e, t) {},
        677: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                i = n.n(a),
                r = n(81),
                o = n.n(r),
                s = n(26),
                c = n(34),
                l = n(59),
                u = n(124),
                d = n(25),
                p = n(42),
                b = n(58),
                y = n(169),
                m = n(224),
                f = n(225),
                h = n(64);

            function j() {
                var e = Object(s.a)().library,
                    t = Object(d.b)(),
                    n = Object(f.a)(),
                    i = Object(l.c)(),
                    r = Object(l.b)();
                Object(p.a)();
                var o = Object(y.a)(),
                    c = Object(a.useCallback)((function() {
                        n && Object.keys(i).forEach((function(e) {
                            return o(e).catch((function(e) {
                                return console.debug("interval list fetching error", e)
                            }))
                        }))
                    }), [o, n, i]);
                return Object(m.a)(c, e ? 6e5 : null), Object(a.useEffect)((function() {
                    Object.keys(i).forEach((function(e) {
                        var t = i[e];
                        t.current || t.loadingRequestId || t.error || o(e).catch((function(e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [t, o, e, i]), Object(a.useEffect)((function() {
                    Object.keys(b.c).forEach((function(e) {
                        var t = i[e];
                        t && (t.current || t.loadingRequestId || t.error) || o(e).catch((function(e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [t, o, e, i]), Object(a.useEffect)((function() {
                    Object.keys(i).forEach((function(e) {
                        var n = i[e];
                        if (n.current && n.pendingUpdate) switch (Object(u.b)(n.current.version, n.pendingUpdate.version)) {
                            case u.a.NONE:
                                throw new Error("unexpected no version bump");
                            case u.a.PATCH:
                            case u.a.MINOR:
                            case u.a.MAJOR:
                                t(Object(h.a)(e))
                        }
                    }))
                }), [t, i, r]), null
            }
            var v = n(5),
                O = n.n(v),
                g = n(11),
                w = n(31),
                x = n(109),
                k = n(55),
                T = n(136),
                C = n(13),
                A = n(19),
                S = n(20),
                E = n(318);

            function I(e, t) {
                return n = e + Math.round(Math.random() * Math.max(0, t - e)), new Promise((function(e) {
                    return setTimeout(e, n)
                }));
                var n
            }
            var P = function(e) {
                    Object(A.a)(n, e);
                    var t = Object(S.a)(n);

                    function n() {
                        return Object(C.a)(this, n), t.call(this, "Cancelled")
                    }
                    return n
                }(Object(E.a)(Error)),
                N = function(e) {
                    Object(A.a)(n, e);
                    var t = Object(S.a)(n);

                    function n() {
                        return Object(C.a)(this, n), t.apply(this, arguments)
                    }
                    return n
                }(Object(E.a)(Error));
            var B = n(70),
                R = n(40);

            function F(e, t, n) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = Object(w.a)(O.a.mark((function e(t, n, a) {
                    var i, r, o, s, c, l, u, d, p, b, y, m, f, h, j;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.debug("Fetching chunk", t, n, a), e.prev = 1, e.next = 4, t.aggregate(n.map((function(e) {
                                    return [e.address, e.callData]
                                })), {
                                    blockTag: a
                                });
                            case 4:
                                o = e.sent, s = Object(g.a)(o, 2), i = s[0], r = s[1], e.next = 30;
                                break;
                            case 10:
                                if (e.prev = 10, e.t0 = e.catch(1), !(-32e3 === (b = e.t0).code || (null === b || void 0 === b || null === (c = b.data) || void 0 === c ? void 0 : c.message) && -1 !== (null === b || void 0 === b || null === (l = b.data) || void 0 === l || null === (u = l.message) || void 0 === u ? void 0 : u.indexOf("header not found")) || -1 !== (null === (d = b.message) || void 0 === d ? void 0 : d.indexOf("header not found")))) {
                                    e.next = 17;
                                    break
                                }
                                throw new N("header not found for block number ".concat(a));
                            case 17:
                                if (-32603 !== b.code && -1 === (null === (p = b.message) || void 0 === p ? void 0 : p.indexOf("execution ran out of gas"))) {
                                    e.next = 28;
                                    break
                                }
                                if (!(n.length > 1)) {
                                    e.next = 28;
                                    break
                                }
                                return y = Math.floor(n.length / 2), e.next = 23, Promise.all([F(t, n.slice(0, y), a), F(t, n.slice(y, n.length), a)]);
                            case 23:
                                return m = e.sent, f = Object(g.a)(m, 2), h = f[0], j = f[1], e.abrupt("return", {
                                    results: h.results.concat(j.results),
                                    blockNumber: j.blockNumber
                                });
                            case 28:
                                throw console.debug("Failed to fetch chunk inside retry", b), b;
                            case 30:
                                return i.toNumber() < a && console.debug("Fetched results for old block number: ".concat(i.toString(), " vs. ").concat(a)), e.abrupt("return", {
                                    results: r,
                                    blockNumber: i.toNumber()
                                });
                            case 32:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))).apply(this, arguments)
            }

            function U() {
                var e = Object(d.b)(),
                    t = Object(d.c)((function(e) {
                        return e.multicall
                    })),
                    n = Object(T.a)(t.callListeners, 100),
                    i = Object(x.a)().currentBlock,
                    r = Object(s.a)().chainId,
                    o = Object(k.e)(),
                    c = Object(a.useRef)(),
                    l = Object(a.useMemo)((function() {
                        return function(e, t) {
                            if (!e || !t) return {};
                            var n = e[t];
                            return n ? Object.keys(n).reduce((function(e, t) {
                                var a = n[t];
                                return e[t] = Object.keys(a).filter((function(e) {
                                    var t = parseInt(e);
                                    return !(t <= 0) && a[t] > 0
                                })).reduce((function(e, t) {
                                    return Math.min(e, parseInt(t))
                                }), 1 / 0), e
                            }), {}) : {}
                        }(n, r)
                    }), [n, r]),
                    u = Object(a.useMemo)((function() {
                        return function(e, t, n, a) {
                            return n && a ? e[n] ? Object.keys(t).filter((function(i) {
                                var r = t[i],
                                    o = e[n][i];
                                if (!o) return !0;
                                var s = a - (r - 1);
                                return !(o.fetchingBlockNumber && o.fetchingBlockNumber >= s) && (!o.blockNumber || o.blockNumber < s)
                            })) : Object.keys(t) : []
                        }(t.callResults, l, r, i)
                    }), [r, t.callResults, l, i]),
                    p = Object(a.useMemo)((function() {
                        return JSON.stringify(u.sort())
                    }), [u]);
                return Object(a.useEffect)((function() {
                    var t;
                    if (i && r && o) {
                        var n = JSON.parse(p);
                        if (0 !== n.length) {
                            var a, s, l = n.map((function(e) {
                                    return Object(B.d)(e)
                                })),
                                u = function(e, t) {
                                    if (t < 1) throw new Error("maxChunkSize must be gte 1");
                                    if (e.length <= t) return [e];
                                    var n = Math.ceil(e.length / t),
                                        a = Math.ceil(e.length / n);
                                    return Object(R.a)(Array(n).keys()).map((function(t) {
                                        return e.slice(t * a, t * a + a)
                                    }))
                                }(l, 500);
                            if ((null === (t = c.current) || void 0 === t ? void 0 : t.blockNumber) !== i) null === (a = c.current) || void 0 === a || null === (s = a.cancellations) || void 0 === s || s.forEach((function(e) {
                                return e()
                            }));
                            e(Object(B.c)({
                                calls: l,
                                chainId: r,
                                fetchingBlockNumber: i
                            })), c.current = {
                                blockNumber: i,
                                cancellations: u.map((function(t, a) {
                                    var s = function(e, t) {
                                            var n, a = t.n,
                                                i = t.minWait,
                                                r = t.maxWait,
                                                o = !1;
                                            return {
                                                promise: new Promise(function() {
                                                    var t = Object(w.a)(O.a.mark((function t(s, c) {
                                                        var l;
                                                        return O.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    n = c;
                                                                case 1:
                                                                    return l = void 0, t.prev = 3, t.next = 6, e();
                                                                case 6:
                                                                    return l = t.sent, o || (s(l), o = !0), t.abrupt("break", 25);
                                                                case 11:
                                                                    if (t.prev = 11, t.t0 = t.catch(3), console.error(t.t0), !o) {
                                                                        t.next = 16;
                                                                        break
                                                                    }
                                                                    return t.abrupt("break", 25);
                                                                case 16:
                                                                    if (!(a <= 0) && t.t0 instanceof N) {
                                                                        t.next = 20;
                                                                        break
                                                                    }
                                                                    return c(t.t0), o = !0, t.abrupt("break", 25);
                                                                case 20:
                                                                    a--;
                                                                case 21:
                                                                    return t.next = 23, I(i, r);
                                                                case 23:
                                                                    t.next = 1;
                                                                    break;
                                                                case 25:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [3, 11]
                                                        ])
                                                    })));
                                                    return function(e, n) {
                                                        return t.apply(this, arguments)
                                                    }
                                                }()),
                                                cancel: function() {
                                                    o || (o = !0, n(new P))
                                                }
                                            }
                                        }((function() {
                                            return F(o, t, i)
                                        }), {
                                            n: 1 / 0,
                                            minWait: 2500,
                                            maxWait: 3500
                                        }),
                                        l = s.cancel;
                                    return s.promise.then((function(t) {
                                        var o = t.results,
                                            s = t.blockNumber;
                                        c.current = {
                                            cancellations: [],
                                            blockNumber: i
                                        };
                                        var l = u.slice(0, a).reduce((function(e, t) {
                                                return e + t.length
                                            }), 0),
                                            d = l + o.length;
                                        e(Object(B.g)({
                                            chainId: r,
                                            results: n.slice(l, d).reduce((function(e, t, n) {
                                                var a;
                                                return e[t] = null !== (a = o[n]) && void 0 !== a ? a : null, e
                                            }), {}),
                                            blockNumber: s
                                        }))
                                    })).catch((function(n) {
                                        n instanceof P ? console.debug("Cancelled fetch for blockNumber", i) : (console.error("Failed to fetch multicall chunk", t, r, n), e(Object(B.b)({
                                            calls: t,
                                            chainId: r,
                                            fetchingBlockNumber: i
                                        })))
                                    })), l
                                }))
                            }
                        }
                    }
                }), [r, o, e, p, i]), null
            }
            var D = n(2),
                L = n(23),
                Y = n(30),
                K = n(160),
                _ = n(76),
                W = n(1);

            function z() {
                var e = Object(s.a)(),
                    t = e.library,
                    n = e.chainId,
                    i = Object(L.b)().t,
                    r = Object(x.a)().currentBlock,
                    o = Object(d.b)(),
                    c = Object(d.c)((function(e) {
                        return e.transactions
                    })),
                    l = Object(a.useMemo)((function() {
                        var e;
                        return n && null !== (e = c[n]) && void 0 !== e ? e : {}
                    }), [n, c]),
                    u = Object(K.a)(),
                    p = u.toastError,
                    b = u.toastSuccess;
                return Object(a.useEffect)((function() {
                    n && t && r && Object.keys(l).filter((function(e) {
                        return function(e, t) {
                            if (t.receipt) return !1;
                            if (!t.lastCheckedBlockNumber) return !0;
                            var n = e - t.lastCheckedBlockNumber;
                            if (n < 1) return !1;
                            var a = ((new Date).getTime() - t.addedTime) / 1e3 / 60;
                            return a > 60 ? n > 9 : !(a > 5) || n > 2
                        }(r, l[e])
                    })).forEach((function(e) {
                        t.getTransactionReceipt(e).then((function(t) {
                            var a, s;
                            t ? (o(Object(_.d)({
                                chainId: n,
                                hash: e,
                                receipt: {
                                    blockHash: t.blockHash,
                                    blockNumber: t.blockNumber,
                                    contractAddress: t.contractAddress,
                                    from: t.from,
                                    status: t.status,
                                    to: t.to,
                                    transactionHash: t.transactionHash,
                                    transactionIndex: t.transactionIndex
                                }
                            })), (1 === t.status ? b : p)(i("Transaction receipt"), Object(W.jsxs)(D.A, {
                                flexDirection: "column",
                                children: [Object(W.jsx)(D.eb, {
                                    children: null !== (a = null === (s = l[e]) || void 0 === s ? void 0 : s.summary) && void 0 !== a ? a : "Hash: ".concat(e.slice(0, 8), "...").concat(e.slice(58, 65))
                                }), n && Object(W.jsx)(D.H, {
                                    external: !0,
                                    href: Object(Y.e)(e, "transaction", n),
                                    children: i("View on Subview")
                                })]
                            }))) : o(Object(_.b)({
                                chainId: n,
                                hash: e,
                                blockNumber: r
                            }))
                        })).catch((function(t) {
                            console.error("failed to check transaction hash: ".concat(e), t)
                        }))
                    }))
                }), [n, t, l, r, o, b, p, i]), null
            }
            var q, V, H, G, $, J, Q, Z, X, ee, te, ne, ae, ie, re = n(56),
                oe = n(73),
                se = n(84),
                ce = n.n(se),
                le = n(138),
                ue = function() {
                    var e = Object(w.a)(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) {
                                        return Object.defineProperty(window, "BinanceChain", {
                                            get: function() {
                                                return this.bsc
                                            },
                                            set: function(t) {
                                                this.bsc = t, e()
                                            }
                                        })
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                de = function() {
                    var e = Object(le.a)().login;
                    Object(a.useEffect)((function() {
                        var t = window.localStorage.getItem(D.ob);
                        if (t) {
                            var n = t === D.w.BSC,
                                a = Reflect.has(window, "BinanceChain");
                            if (n && !a) return void ue().then((function() {
                                return e(t)
                            }));
                            e(t)
                        }
                    }), [e])
                },
                pe = function() {
                    Object(a.useEffect)((function() {
                        document.documentElement.setAttribute("data-useragent", navigator.userAgent)
                    }), [])
                },
                be = n(88),
                ye = Object(be.b)(),
                me = function() {
                    Object(a.useEffect)((function() {
                        var e = ye.listen((function(e) {
                            "" === e.hash && setTimeout((function() {
                                window.scroll({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                })
                            }), 50)
                        }));
                        return function() {
                            return e()
                        }
                    }), [])
                },
                fe = n(9),
                he = n(52),
                je = (n(406), n(588), n(10)),
                ve = n(4),
                Oe = ve.e.div(q || (q = Object(je.a)(["\n  .react-datepicker-wrapper,\n  .react-datepicker__input-container {\n    display: block;\n  }\n\n  .react-datepicker {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    font-family: 'Kanit', sans-serif;\n  }\n\n  .react-datepicker__header {\n    background: ", ";\n    border-color: ", ";\n  }\n\n  .react-datepicker__current-month,\n  .react-datepicker-time__header,\n  .react-datepicker-year-header,\n  .react-datepicker__day-name,\n  .react-datepicker__day,\n  .react-datepicker__time-name {\n    color: ", ";\n  }\n\n  .react-datepicker__day:hover,\n  .react-datepicker__month-text:hover,\n  .react-datepicker__quarter-text:hover,\n  .react-datepicker__year-text:hover {\n    background-color: ", ";\n  }\n\n  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,\n  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::after {\n    border-bottom-color: ", ";\n  }\n\n  .react-datepicker__day--selected,\n  .react-datepicker__day--in-selecting-range,\n  .react-datepicker__day--in-range,\n  .react-datepicker__month-text--selected,\n  .react-datepicker__month-text--in-selecting-range,\n  .react-datepicker__month-text--in-range,\n  .react-datepicker__quarter-text--selected,\n  .react-datepicker__quarter-text--in-selecting-range,\n  .react-datepicker__quarter-text--in-range,\n  .react-datepicker__year-text--selected,\n  .react-datepicker__year-text--in-selecting-range,\n  .react-datepicker__year-text--in-range {\n    background-color: ", ";\n  }\n\n  .react-datepicker__day--selected:hover,\n  .react-datepicker__day--in-selecting-range:hover,\n  .react-datepicker__day--in-range:hover,\n  .react-datepicker__month-text--selected:hover,\n  .react-datepicker__month-text--in-selecting-range:hover,\n  .react-datepicker__month-text--in-range:hover,\n  .react-datepicker__quarter-text--selected:hover,\n  .react-datepicker__quarter-text--in-selecting-range:hover,\n  .react-datepicker__quarter-text--in-range:hover,\n  .react-datepicker__year-text--selected:hover,\n  .react-datepicker__year-text--in-selecting-range:hover,\n  .react-datepicker__year-text--in-range:hover {\n    background-color: ", ";\n  }\n\n  .react-datepicker__day--keyboard-selected,\n  .react-datepicker__month-text--keyboard-selected,\n  .react-datepicker__quarter-text--keyboard-selected,\n  .react-datepicker__year-text--keyboard-selected {\n    background-color: ", ";\n    color: #ffffff;\n  }\n\n  .react-datepicker__day--keyboard-selected:hover,\n  .react-datepicker__month-text--keyboard-selected:hover,\n  .react-datepicker__quarter-text--keyboard-selected:hover,\n  .react-datepicker__year-text--keyboard-selected:hover {\n    background-color: ", ";\n    color: #ffffff;\n  }\n\n  .react-datepicker__time-container,\n  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n    width: 120px;\n  }\n\n  .react-datepicker__header--time {\n    padding: 8px;\n  }\n\n  .react-datepicker__time-container\n    .react-datepicker__time\n    .react-datepicker__time-box\n    ul.react-datepicker__time-list\n    li.react-datepicker__time-list-item {\n    height: auto;\n    padding: 8px;\n  }\n"])), (function(e) {
                    return e.theme.card.background
                }), (function(e) {
                    return e.theme.colors.cardBorder
                }), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.colors.cardBorder
                }), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.cardBorder
                }), (function(e) {
                    return e.theme.colors.cardBorder
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.primaryBright
                }), (function(e) {
                    return e.theme.colors.secondary
                }), (function(e) {
                    return e.theme.colors.secondary
                })),
                ge = function() {
                    return Object(W.jsx)(Oe, {
                        id: "reactDatePicker"
                    })
                },
                we = Object(ve.c)(V || (V = Object(je.a)(["\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) {
                    return e.theme.colors.background
                })),
                xe = n(91),
                ke = n(35),
                Te = Object(ve.e)(D.A)(H || (H = Object(je.a)(["\n  overflow: hidden;\n  height: 100%;\n  padding: 12px;\n  align-items: center;\n  background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),\n    linear-gradient(180deg, #8051d6 0%, #492286 100%);\n  ", " {\n    padding: 0px;\n    background: linear-gradient(180deg, #8051d6 0%, #492286 100%);\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.md
                })),
                Ce = Object(ve.e)(D.A)(G || (G = Object(je.a)(["\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),
                Ae = ve.e.div($ || ($ = Object(je.a)(["\n  background: rgba(39, 38, 44, 0.4);\n  border-radius: 16px;\n  padding: 8px;\n  width: 60%;\n  height: 80%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  & ", " {\n    flex-shrink: 0;\n    margin-right: 4px;\n  }\n"])), D.eb),
                Se = function() {
                    var e = Object(L.b)().t,
                        t = Object(ke.j)(),
                        n = Object(g.a)(t, 2)[1],
                        a = Object(D.tb)(),
                        i = a.isMobile,
                        r = a.isMd,
                        o = e("please make sure you're visiting https://snowswap.xyz - check the URL carefully.").split(/(https:\/\/pancakeswap.finance)/g),
                        s = Object(W.jsxs)(W.Fragment, {
                            children: [Object(W.jsx)(D.eb, {
                                as: "span",
                                color: "warning",
                                small: !0,
                                bold: !0,
                                textTransform: "uppercase",
                                children: e("Phishing warning: ")
                            }), o.map((function(e, t) {
                                return Object(W.jsx)(D.eb, {
                                    small: !0,
                                    as: "span",
                                    bold: "https://snowswap.xyz" === e,
                                    color: "https://snowswap.xyz" === e ? "#FFFFFF" : "#BDC2C4",
                                    children: e
                                }, t)
                            }))]
                        });
                    return Object(W.jsx)(Te, {
                        children: i || r ? Object(W.jsxs)(W.Fragment, {
                            children: [Object(W.jsx)(D.h, {
                                children: s
                            }), Object(W.jsx)(D.F, {
                                onClick: n,
                                variant: "text",
                                children: Object(W.jsx)(D.u, {
                                    color: "#FFFFFF"
                                })
                            })]
                        }) : Object(W.jsxs)(W.Fragment, {
                            children: [Object(W.jsx)(Ce, {
                                children: Object(W.jsx)(Ae, {
                                    children: s
                                })
                            }), Object(W.jsx)(D.F, {
                                onClick: n,
                                variant: "text",
                                children: Object(W.jsx)(D.u, {
                                    color: "#FFFFFF"
                                })
                            })]
                        })
                    })
                },
                Ee = n(139),
                Ie = function(e) {
                    return [{
                        label: e("Trade"),
                        icon: "Swap",
                        href: "/swap",
                        showItemsOnMobile: !1,
                        items: [{
                            label: e("Exchange"),
                            href: "/swap"
                        }, {
                            label: e("Liquidity"),
                            href: "/liquidity"
                        }]
                    }, {
                        label: e("Earn"),
                        href: "/farms",
                        icon: "Earn",
                        showItemsOnMobile: !1,
                        items: [{
                            label: e("Farms"),
                            href: "/farms"
                        }]
                    }]
                },
                Pe = n(131),
                Ne = n(120),
                Be = n(74),
                Re = n(374),
                Fe = ["account"],
                Me = Object(ve.e)(D.A)(J || (J = Object(je.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 16px;\n  position: relative;\n"])), (function(e) {
                    return e.theme.colors.dropdown
                })),
                Ue = ve.e.div(Q || (Q = Object(je.a)(["\n  flex: 1;\n  position: relative;\n  padding-left: 16px;\n\n  & > input {\n    background: transparent;\n    border: 0;\n    color: ", ";\n    display: block;\n    font-weight: 600;\n    font-size: 16px;\n    padding: 0;\n    width: 100%;\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  &:after {\n    background: linear-gradient(\n      to right,\n      ", "00,\n      ", "E6\n    );\n    content: '';\n    height: 100%;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 40px;\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.colors.background
                })),
                De = ve.e.div(Z || (Z = Object(je.a)(["\n  display: ", ";\n  position: absolute;\n  padding: 8px;\n  top: -38px;\n  right: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n  width: 100px;\n"])), (function(e) {
                    return e.isTooltipDisplayed ? "inline-block" : "none"
                }), (function(e) {
                    return e.theme.colors.contrast
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                Le = function(e) {
                    var t = e.account,
                        n = Object(he.a)(e, Fe),
                        i = Object(a.useState)(!1),
                        r = Object(g.a)(i, 2),
                        o = r[0],
                        s = r[1],
                        c = Object(L.b)().t;

                    function l() {
                        s(!0), setTimeout((function() {
                            s(!1)
                        }), 1e3)
                    }
                    return Object(W.jsxs)(D.h, Object(fe.a)(Object(fe.a)({
                        position: "relative"
                    }, n), {}, {
                        children: [Object(W.jsxs)(Me, {
                            children: [Object(W.jsx)(Ue, {
                                title: t,
                                children: Object(W.jsx)("input", {
                                    type: "text",
                                    readOnly: !0,
                                    value: t
                                })
                            }), Object(W.jsx)(D.F, {
                                variant: "text",
                                onClick: function() {
                                    if (navigator.clipboard && navigator.permissions) navigator.clipboard.writeText(t).then((function() {
                                        return l()
                                    }));
                                    else if (document.queryCommandSupported("copy")) {
                                        var e = document.createElement("textarea");
                                        e.value = t, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), l()
                                    }
                                },
                                children: Object(W.jsx)(D.x, {
                                    color: "primary",
                                    width: "24px"
                                })
                            })]
                        }), Object(W.jsx)(De, {
                            isTooltipDisplayed: o,
                            children: c("Copied")
                        })]
                    }))
                },
                Ye = function(e) {
                    var t = e.hasLowBnbBalance,
                        n = e.onDismiss,
                        a = Object(L.b)().t,
                        i = Object(oe.c)().account,
                        r = Object(Ne.c)(),
                        o = r.balance,
                        s = r.fetchStatus,
                        c = Object(le.a)().logout;
                    return Object(W.jsxs)(W.Fragment, {
                        children: [Object(W.jsx)(D.eb, {
                            color: "secondary",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            mb: "8px",
                            children: a("Your Address")
                        }), Object(W.jsx)(Le, {
                            account: i,
                            mb: "24px"
                        }), t && Object(W.jsx)(D.M, {
                            variant: "warning",
                            mb: "24px",
                            children: Object(W.jsxs)(D.h, {
                                children: [Object(W.jsx)(D.eb, {
                                    fontWeight: "bold",
                                    children: a("CRAB Balance Low")
                                }), Object(W.jsx)(D.eb, {
                                    as: "p",
                                    children: a("You need CRAB for transaction fees.")
                                })]
                            })
                        }), Object(W.jsxs)(D.A, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [Object(W.jsx)(D.eb, {
                                color: "textSubtle",
                                children: a("CRAB Balance")
                            }), s !== Ne.a.SUCCESS ? Object(W.jsx)(D.ab, {
                                height: "22px",
                                width: "60px"
                            }) : Object(W.jsx)(D.eb, {
                                children: Object(Re.a)(o, 6)
                            })]
                        }), Object(W.jsx)(D.A, {
                            alignItems: "center",
                            justifyContent: "end",
                            mb: "24px",
                            children: Object(W.jsx)(D.I, {
                                href: Object(Y.e)(i, "address"),
                                children: a("View on Subview")
                            })
                        }), Object(W.jsx)(D.i, {
                            variant: "secondary",
                            width: "100%",
                            onClick: function() {
                                n(), c()
                            },
                            children: a("Disconnect Wallet")
                        })]
                    })
                },
                Ke = n(82),
                _e = n(95),
                We = Object(ve.e)(D.A)(X || (X = Object(je.a)(["\n  align-items: center;\n  flex: none;\n  width: 24px;\n"]))),
                ze = ve.e.div(ee || (ee = Object(je.a)(["\n  flex: 1;\n  padding: 0 8px;\n"]))),
                qe = Object(ve.e)(D.H)(te || (te = Object(je.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  margin-bottom: 16px;\n  width: 100%;\n\n  &:hover {\n    text-decoration: none;\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                })),
                Ve = function(e) {
                    var t, n;
                    return e.receipt ? 1 === (null === (t = e.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof(null === (n = e.receipt) || void 0 === n ? void 0 : n.status) ? Object(W.jsx)(D.p, {
                        color: "success",
                        width: "24px"
                    }) : Object(W.jsx)(D.g, {
                        color: "failure",
                        width: "24px"
                    }) : Object(W.jsx)(D.Y, {
                        spin: !0,
                        width: "24px"
                    })
                },
                He = function(e) {
                    var t, n = e.txn,
                        a = Object(s.a)().chainId;
                    return n ? Object(W.jsxs)(qe, {
                        href: Object(Y.e)(n.hash, "transaction", a),
                        external: !0,
                        children: [Object(W.jsx)(We, {
                            children: Ve(n)
                        }), Object(W.jsx)(ze, {
                            children: null !== (t = n.summary) && void 0 !== t ? t : n.hash
                        }), Object(W.jsx)(We, {
                            children: Object(W.jsx)(D.X, {
                                width: "24px",
                                color: "primary"
                            })
                        })]
                    }) : null
                },
                Ge = function() {
                    var e = Object(s.a)().chainId,
                        t = Object(d.b)(),
                        n = Object(L.b)().t,
                        a = Object(Ke.b)(),
                        i = Object(_e.orderBy)(Object.values(a).filter(Ke.a), "addedTime", "desc");
                    return Object(W.jsxs)(D.h, {
                        minHeight: "120px",
                        children: [Object(W.jsxs)(D.A, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: "24px",
                            children: [Object(W.jsx)(D.eb, {
                                color: "secondary",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                                children: n("Recent Transactions")
                            }), i.length > 0 && Object(W.jsx)(D.i, {
                                scale: "sm",
                                onClick: function() {
                                    e && t(Object(_.c)({
                                        chainId: e
                                    }))
                                },
                                variant: "text",
                                px: "0",
                                children: n("Clear all")
                            })]
                        }), i.length > 0 ? i.map((function(e) {
                            return Object(W.jsx)(He, {
                                txn: e
                            }, e.hash)
                        })) : Object(W.jsx)(D.eb, {
                            textAlign: "center",
                            children: n("No recent transactions")
                        })]
                    })
                };
            ! function(e) {
                e[e.WALLET_INFO = 0] = "WALLET_INFO", e[e.TRANSACTIONS = 1] = "TRANSACTIONS"
            }(ie || (ie = {}));
            var $e, Je, Qe, Ze, Xe, et = Object(Be.parseUnits)("2", "gwei"),
                tt = Object(ve.e)(D.T)(ne || (ne = Object(je.a)(["\n  background: ", ";\n"])), (function(e) {
                    return e.theme.colors.gradients.bubblegum
                })),
                nt = ve.e.div(ae || (ae = Object(je.a)(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 16px 24px;\n"])), (function(e) {
                    return e.theme.colors.dropdown
                }), (function(e) {
                    return e.theme.colors.cardBorder
                })),
                at = function(e) {
                    var t = e.initialView,
                        n = void 0 === t ? ie.WALLET_INFO : t,
                        i = e.onDismiss,
                        r = Object(a.useState)(n),
                        o = Object(g.a)(r, 2),
                        s = o[0],
                        c = o[1],
                        l = Object(L.b)().t,
                        u = Object(Ne.c)(),
                        d = u.balance,
                        p = u.fetchStatus === Ne.a.SUCCESS && d.lte(et);
                    return Object(W.jsxs)(D.S, {
                        title: l("Welcome!"),
                        minWidth: "320px",
                        children: [Object(W.jsxs)(tt, {
                            children: [Object(W.jsx)(D.V, {
                                children: Object(W.jsx)(D.C, {
                                    children: l("Your Wallet")
                                })
                            }), Object(W.jsx)(D.F, {
                                variant: "text",
                                onClick: i,
                                children: Object(W.jsx)(D.u, {
                                    width: "24px",
                                    color: "text"
                                })
                            })]
                        }), Object(W.jsx)(nt, {
                            children: Object(W.jsxs)(D.j, {
                                scale: "sm",
                                variant: "subtle",
                                onItemClick: function(e) {
                                    c(e)
                                },
                                activeIndex: s,
                                fullWidth: !0,
                                children: [Object(W.jsx)(D.k, {
                                    children: l("Wallet")
                                }), Object(W.jsx)(D.k, {
                                    children: l("Transactions")
                                })]
                            })
                        }), Object(W.jsxs)(D.Q, {
                            p: "24px",
                            maxWidth: "400px",
                            width: "100%",
                            children: [s === ie.WALLET_INFO && Object(W.jsx)(Ye, {
                                hasLowBnbBalance: p,
                                onDismiss: i
                            }), s === ie.TRANSACTIONS && Object(W.jsx)(Ge, {})]
                        })]
                    })
                },
                it = function(e) {
                    var t = e.hasLowBnbBalance,
                        n = e.onPresentWalletModal,
                        a = Object(L.b)().t;
                    return Object(W.jsx)(D.lb, {
                        as: "button",
                        onClick: n,
                        children: Object(W.jsxs)(D.A, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            children: [a("Wallet"), t && Object(W.jsx)(D.mb, {
                                color: "warning",
                                width: "24px"
                            })]
                        })
                    })
                },
                rt = function() {
                    var e = Object(L.b)().t,
                        t = Object(oe.c)().account,
                        n = Object(le.a)().logout,
                        a = Object(Ne.c)(),
                        i = a.balance,
                        r = a.fetchStatus,
                        o = Object(D.ub)(Object(W.jsx)(at, {
                            initialView: ie.WALLET_INFO
                        })),
                        s = Object(g.a)(o, 1)[0],
                        c = Object(D.ub)(Object(W.jsx)(at, {
                            initialView: ie.TRANSACTIONS
                        })),
                        l = Object(g.a)(c, 1)[0],
                        u = r === Ne.a.SUCCESS && i.lte(et);
                    return t ? Object(W.jsxs)(D.jb, {
                        account: t,
                        avatarSrc: null,
                        children: [Object(W.jsx)(it, {
                            hasLowBnbBalance: u,
                            onPresentWalletModal: s
                        }), Object(W.jsx)(D.lb, {
                            as: "button",
                            onClick: l,
                            children: e("Transactions")
                        }), Object(W.jsx)(D.kb, {}), Object(W.jsx)(D.kb, {}), Object(W.jsx)(D.lb, {
                            as: "button",
                            onClick: n,
                            children: Object(W.jsxs)(D.A, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                children: [e("Disconnect"), Object(W.jsx)(D.K, {})]
                            })
                        })]
                    }) : Object(W.jsx)(Pe.a, {
                        scale: "sm"
                    })
                },
                ot = n(168),
                st = function(e) {
                    var t, n = e.pathname,
                        a = e.menuItem,
                        i = null !== (t = null === a || void 0 === a ? void 0 : a.items.filter((function(e) {
                            return n.startsWith(e.href)
                        }))) && void 0 !== t ? t : [];
                    if (i && 0 !== i.length) return 1 === i.length ? i[0] : i.sort((function(e, t) {
                        return t.href.length - e.href.length
                    }))[0]
                },
                ct = function(e) {
                    var t = Object(Ee.a)(),
                        n = t.isDark,
                        a = t.toggleTheme,
                        i = Object(L.b)(),
                        r = i.currentLanguage,
                        o = i.setLanguage,
                        s = i.t,
                        c = Object(re.g)().pathname,
                        l = Object(ke.j)(),
                        u = Object(g.a)(l, 1)[0],
                        d = function(e) {
                            var t = e.pathname;
                            return e.menuConfig.find((function(e) {
                                return t.startsWith(e.href) || st({
                                    menuItem: e,
                                    pathname: t
                                })
                            }))
                        }({
                            menuConfig: Ie(s),
                            pathname: c
                        }),
                        p = st({
                            menuItem: d,
                            pathname: c
                        });
                    return Object(W.jsx)(D.L, Object(fe.a)({
                        userMenu: Object(W.jsx)(rt, {}),
                        globalMenu: Object(W.jsx)(ot.a, {}),
                        banner: u && Object(W.jsx)(Se, {}),
                        isDark: n,
                        toggleTheme: a,
                        currentLang: r.code,
                        langs: xe.b,
                        setLang: o,
                        cakePriceUsd: 0,
                        links: Ie(s),
                        subLinks: (null === d || void 0 === d ? void 0 : d.hideSubNav) ? [] : null === d || void 0 === d ? void 0 : d.items,
                        activeItem: null === d || void 0 === d ? void 0 : d.href,
                        activeSubItem: null === p || void 0 === p ? void 0 : p.href,
                        buyCakeLabel: s("Buy CAKE")
                    }, e))
                },
                lt = n(14),
                ut = function(e) {
                    Object(A.a)(n, e);
                    var t = Object(S.a)(n);

                    function n(e) {
                        var a;
                        return Object(C.a)(this, n), (a = t.call(this, e)).state = {
                            hasError: !1
                        }, a
                    }
                    return Object(lt.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            var t, n = "ChunkLoadError" === e.name,
                                a = "CSS_CHUNK_LOAD_FAILED" === e.code,
                                i = n || a,
                                r = !!(null === (t = window.history.state) || void 0 === t ? void 0 : t.isRecoveringFromChunkError);
                            if (i && !r) {
                                var o = Object(fe.a)(Object(fe.a)({}, window.history.state), {}, {
                                    isRecoveringFromChunkError: !0
                                });
                                return window.history.replaceState(o, ""), void window.location.reload()
                            }
                            throw e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.hasError,
                                t = this.props.fallback;
                            return e ? t : Object(W.jsx)(a.Suspense, Object(fe.a)({}, this.props))
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function() {
                            return {
                                hasError: !0
                            }
                        }
                    }]), n
                }(i.a.Component),
                dt = n(170),
                pt = n(200),
                bt = Object(ve.e)(pt.b)($e || ($e = Object(je.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                yt = function() {
                    return Object(W.jsx)(bt, {
                        children: Object(W.jsx)(D.cb, {})
                    })
                },
                mt = function(e) {
                    var t = Object(a.useState)(!1),
                        n = Object(g.a)(t, 2),
                        i = n[0],
                        r = n[1],
                        o = Object(a.useCallback)((function() {
                            return r(!0)
                        }), [r]);
                    return Object(D.sb)(o), i ? Object(W.jsx)("div", {
                        onAnimationEnd: function() {
                            return r(!1)
                        },
                        children: Object(W.jsx)(D.z, Object(fe.a)({}, e))
                    }) : null
                },
                ft = i.a.memo(mt),
                ht = n(16),
                jt = n(7),
                vt = n(123),
                Ot = n(245),
                gt = n(247),
                wt = n(47),
                xt = (wt.a.bondly, wt.a.safemoon, wt.a.ring, {}),
                kt = n(154),
                Tt = n(29),
                Ct = n(21),
                At = ve.e.div(Je || (Je = Object(je.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), (function(e) {
                    return e.theme.colors.backgroundAlt
                })),
                St = ve.e.div(Qe || (Qe = Object(je.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"])), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.colors.failure : n.colors.background
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.theme.colors.backgroundAlt
                })),
                Et = ve.e.div(Ze || (Ze = Object(je.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))),
                It = ve.e.input(Xe || (Xe = Object(je.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) {
                    return e.theme.colors.backgroundAlt
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.colors.failure : n.colors.primary
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }));

            function Pt(e) {
                var t = e.id,
                    n = e.value,
                    i = e.onChange,
                    r = Object(s.a)().chainId,
                    o = Object(L.b)().t,
                    c = Object(kt.a)(n),
                    l = c.address,
                    u = c.loading,
                    d = c.name,
                    p = Object(a.useCallback)((function(e) {
                        var t = e.target.value.replace(/\s+/g, "");
                        i(t)
                    }), [i]),
                    b = Boolean(n.length > 0 && !u && !l);
                return Object(W.jsx)(At, {
                    id: t,
                    children: Object(W.jsx)(St, {
                        error: b,
                        children: Object(W.jsx)(Et, {
                            children: Object(W.jsxs)(Tt.a, {
                                gap: "md",
                                children: [Object(W.jsxs)(Ct.b, {
                                    children: [Object(W.jsx)(D.eb, {
                                        children: o("Recipient")
                                    }), l && r && Object(W.jsxs)(D.H, {
                                        external: !0,
                                        small: !0,
                                        href: Object(Y.e)(null !== d && void 0 !== d ? d : l, "address", r),
                                        children: ["(", o("View on Subview"), ")"]
                                    })]
                                }), Object(W.jsx)(It, {
                                    className: "recipient-address-input",
                                    type: "text",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    placeholder: o("Wallet Address or ENS name"),
                                    error: b,
                                    pattern: "^(0x[a-fA-F0-9]{40})$",
                                    onChange: p,
                                    value: n
                                })]
                            })
                        })
                    })
                })
            }
            var Nt, Bt, Rt, Ft, Mt, Ut, Dt, Lt, Yt, Kt = n(89),
                _t = n(152),
                Wt = n(17),
                zt = n(69),
                qt = n(60),
                Vt = ve.e.div(Nt || (Nt = Object(je.a)(["\n  position: relative;\n  padding: 1rem;\n"]))),
                Ht = ve.e.div(Bt || (Bt = Object(je.a)(["\n  padding: 2px;\n\n  ", "\n"])), (function(e) {
                    return e.clickable ? Object(ve.d)(Rt || (Rt = Object(je.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null
                })),
                Gt = Object(ve.e)(D.eb)(Ft || (Ft = Object(je.a)(["\n  color: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.severity;
                    return 3 === n || 4 === n ? t.colors.failure : 2 === n ? t.colors.warning : 1 === n ? t.colors.text : t.colors.success
                })),
                $t = ve.e.button(Mt || (Mt = Object(je.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.dropdown
                }), (function(e) {
                    return e.theme.colors.dropdown
                })),
                Jt = Object(ve.e)(D.eb).attrs({
                    ellipsis: !0
                })(Ut || (Ut = Object(je.a)(["\n  width: 220px;\n"]))),
                Qt = ve.e.div(Dt || (Dt = Object(je.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])), (function(e) {
                    var t = e.theme;
                    return "".concat(t.colors.failure, "33")
                }), (function(e) {
                    return e.theme.colors.failure
                })),
                Zt = ve.e.div(Lt || (Lt = Object(je.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])), (function(e) {
                    var t = e.theme;
                    return "".concat(t.colors.failure, "33")
                }));

            function Xt(e) {
                var t = e.error;
                return Object(W.jsxs)(Qt, {
                    children: [Object(W.jsx)(Zt, {
                        children: Object(W.jsx)(D.y, {
                            width: "24px"
                        })
                    }), Object(W.jsx)("p", {
                        children: t
                    })]
                })
            }
            var en, tn = Object(ve.e)(Tt.a)(Yt || (Yt = Object(je.a)(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])), (function(e) {
                var t = e.theme;
                return "".concat(t.colors.warning, "33")
            }));

            function nn(e) {
                var t = e.priceImpact;
                return Object(W.jsx)(Gt, {
                    fontSize: "14px",
                    severity: Object(zt.d)(t),
                    children: t ? t.lessThan(c.p) ? "<0.01%" : "".concat(t.toFixed(2), "%") : "-"
                })
            }
            var an = Object(ve.e)(Tt.a)(en || (en = Object(je.a)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) {
                return e.theme.radii.default
            }), (function(e) {
                return e.theme.colors.cardBorder
            }), (function(e) {
                return e.theme.colors.background
            }));

            function rn(e) {
                var t, n, i, r, o = e.trade,
                    s = e.onConfirm,
                    c = e.allowedSlippage,
                    l = e.swapErrorMessage,
                    u = e.disabledConfirm,
                    d = Object(L.b)().t,
                    p = Object(a.useState)(!1),
                    b = Object(g.a)(p, 2),
                    y = b[0],
                    m = b[1],
                    f = Object(a.useMemo)((function() {
                        return Object(zt.a)(o, c)
                    }), [c, o]),
                    h = Object(a.useMemo)((function() {
                        return Object(zt.b)(o)
                    }), [o]),
                    j = h.priceImpactWithoutFee,
                    v = h.realizedLPFee,
                    O = Object(zt.d)(j);
                return Object(W.jsxs)(W.Fragment, {
                    children: [Object(W.jsxs)(an, {
                        children: [Object(W.jsxs)(Ct.b, {
                            align: "center",
                            children: [Object(W.jsx)(D.eb, {
                                fontSize: "14px",
                                children: d("Price")
                            }), Object(W.jsxs)(D.eb, {
                                fontSize: "14px",
                                style: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    textAlign: "right",
                                    paddingLeft: "10px"
                                },
                                children: [Object(zt.c)(o, y), Object(W.jsx)($t, {
                                    onClick: function() {
                                        return m(!y)
                                    },
                                    children: Object(W.jsx)(D.f, {
                                        width: "14px"
                                    })
                                })]
                            })]
                        }), Object(W.jsxs)(Ct.b, {
                            children: [Object(W.jsxs)(Ct.c, {
                                children: [Object(W.jsx)(D.eb, {
                                    fontSize: "14px",
                                    children: o.tradeType === jt.m.EXACT_INPUT ? d("Minimum received") : d("Maximum sold")
                                }), Object(W.jsx)(qt.a, {
                                    text: d("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
                                    ml: "4px"
                                })]
                            }), Object(W.jsxs)(Ct.c, {
                                children: [Object(W.jsx)(D.eb, {
                                    fontSize: "14px",
                                    children: o.tradeType === jt.m.EXACT_INPUT ? null !== (t = null === (n = f[Wt.a.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== t ? t : "-" : null !== (i = null === (r = f[Wt.a.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4)) && void 0 !== i ? i : "-"
                                }), Object(W.jsx)(D.eb, {
                                    fontSize: "14px",
                                    marginLeft: "4px",
                                    children: o.tradeType === jt.m.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol
                                })]
                            })]
                        }), Object(W.jsxs)(Ct.b, {
                            children: [Object(W.jsxs)(Ct.c, {
                                children: [Object(W.jsx)(D.eb, {
                                    fontSize: "14px",
                                    children: d("Price Impact")
                                }), Object(W.jsx)(qt.a, {
                                    text: d("The difference between the market price and your price due to trade size."),
                                    ml: "4px"
                                })]
                            }), Object(W.jsx)(nn, {
                                priceImpact: j
                            })]
                        }), Object(W.jsxs)(Ct.b, {
                            children: [Object(W.jsxs)(Ct.c, {
                                children: [Object(W.jsx)(D.eb, {
                                    fontSize: "14px",
                                    children: d("Liquidity Provider Fee")
                                }), Object(W.jsx)(qt.a, {
                                    text: Object(W.jsxs)(W.Fragment, {
                                        children: [Object(W.jsx)(D.eb, {
                                            mb: "12px",
                                            children: d("For each trade a %amount% fee is paid", {
                                                amount: "0.25%"
                                            })
                                        }), Object(W.jsxs)(D.eb, {
                                            children: ["- ", d("%amount% to LP token holders", {
                                                amount: "0.17%"
                                            })]
                                        }), Object(W.jsxs)(D.eb, {
                                            children: ["- ", d("%amount% to the Treasury", {
                                                amount: "0.03%"
                                            })]
                                        }), Object(W.jsxs)(D.eb, {
                                            children: ["- ", d("%amount% towards Community", {
                                                amount: "0.05%"
                                            })]
                                        })]
                                    }),
                                    ml: "4px"
                                })]
                            }), Object(W.jsx)(D.eb, {
                                fontSize: "14px",
                                children: v ? "".concat(null === v || void 0 === v ? void 0 : v.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-"
                            })]
                        })]
                    }), Object(W.jsxs)(Ct.a, {
                        children: [Object(W.jsx)(D.i, {
                            variant: O > 2 ? "danger" : "primary",
                            onClick: s,
                            disabled: u,
                            mt: "12px",
                            id: "confirm-swap-or-send",
                            width: "100%",
                            children: d(O > 2 ? "Swap Anyway" : "Confirm Swap")
                        }), l ? Object(W.jsx)(Xt, {
                            error: l
                        }) : null]
                    })]
                })
            }
            var on = n(46),
                sn = n(137);

            function cn(e) {
                var t, n, i = e.trade,
                    r = e.allowedSlippage,
                    o = e.recipient,
                    s = e.showAcceptChanges,
                    c = e.onAcceptChanges,
                    l = Object(L.b)().t,
                    u = Object(a.useMemo)((function() {
                        return Object(zt.a)(i, r)
                    }), [i, r]),
                    d = Object(a.useMemo)((function() {
                        return Object(zt.b)(i)
                    }), [i]).priceImpactWithoutFee,
                    p = Object(zt.d)(d),
                    b = i.tradeType === jt.m.EXACT_INPUT ? null === (t = u[Wt.a.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(6) : null === (n = u[Wt.a.INPUT]) || void 0 === n ? void 0 : n.toSignificant(6),
                    y = i.tradeType === jt.m.EXACT_INPUT ? i.outputAmount.currency.symbol : i.inputAmount.currency.symbol,
                    m = (i.tradeType === jt.m.EXACT_INPUT ? l("Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.", {
                        amount: b,
                        symbol: y
                    }) : l("Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.", {
                        amount: b,
                        symbol: y
                    })).split("".concat(b, " ").concat(y)),
                    f = Object(g.a)(m, 2),
                    h = f[0],
                    j = f[1],
                    v = o ? Object(sn.a)(o) : "",
                    O = l("Output will be sent to %recipient%", {
                        recipient: v
                    }).split(v),
                    w = Object(g.a)(O, 2),
                    x = w[0],
                    k = w[1];
                return Object(W.jsxs)(Tt.a, {
                    gap: "md",
                    children: [Object(W.jsxs)(Ct.b, {
                        align: "flex-end",
                        children: [Object(W.jsxs)(Ct.c, {
                            gap: "0px",
                            children: [Object(W.jsx)(on.a, {
                                currency: i.inputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), Object(W.jsx)(Jt, {
                                fontSize: "24px",
                                color: s && i.tradeType === jt.m.EXACT_OUTPUT ? "primary" : "text",
                                children: i.inputAmount.toSignificant(6)
                            })]
                        }), Object(W.jsx)(Ct.c, {
                            gap: "0px",
                            children: Object(W.jsx)(D.eb, {
                                fontSize: "24px",
                                ml: "10px",
                                children: i.inputAmount.currency.symbol
                            })
                        })]
                    }), Object(W.jsx)(Ct.c, {
                        children: Object(W.jsx)(D.d, {
                            width: "16px",
                            ml: "4px"
                        })
                    }), Object(W.jsxs)(Ct.b, {
                        align: "flex-end",
                        children: [Object(W.jsxs)(Ct.c, {
                            gap: "0px",
                            children: [Object(W.jsx)(on.a, {
                                currency: i.outputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), Object(W.jsx)(Jt, {
                                fontSize: "24px",
                                color: p > 2 ? "failure" : s && i.tradeType === jt.m.EXACT_INPUT ? "primary" : "text",
                                children: i.outputAmount.toSignificant(6)
                            })]
                        }), Object(W.jsx)(Ct.c, {
                            gap: "0px",
                            children: Object(W.jsx)(D.eb, {
                                fontSize: "24px",
                                ml: "10px",
                                children: i.outputAmount.currency.symbol
                            })
                        })]
                    }), s ? Object(W.jsx)(tn, {
                        justify: "flex-start",
                        gap: "0px",
                        children: Object(W.jsxs)(Ct.b, {
                            children: [Object(W.jsxs)(Ct.c, {
                                children: [Object(W.jsx)(D.y, {
                                    mr: "8px"
                                }), Object(W.jsxs)(D.eb, {
                                    bold: !0,
                                    children: [" ", l("Price Updated")]
                                })]
                            }), Object(W.jsx)(D.i, {
                                onClick: c,
                                children: l("Accept")
                            })]
                        })
                    }) : null, Object(W.jsx)(Tt.a, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "24px 0 0 0px"
                        },
                        children: Object(W.jsxs)(D.eb, {
                            small: !0,
                            color: "textSubtle",
                            textAlign: "left",
                            style: {
                                width: "100%"
                            },
                            children: [h, Object(W.jsxs)("b", {
                                children: [b, " ", y]
                            }), j]
                        })
                    }), null !== o ? Object(W.jsx)(Tt.a, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "12px 0 0 0px"
                        },
                        children: Object(W.jsxs)(D.eb, {
                            color: "textSubtle",
                            children: [x, Object(W.jsx)("b", {
                                title: o,
                                children: v
                            }), k]
                        })
                    }) : null]
                })
            }
            var ln = function(e) {
                    var t, n, i, r, o, s, c, l, u, d, p = e.trade,
                        b = e.originalTrade,
                        y = e.onAcceptChanges,
                        m = e.allowedSlippage,
                        f = e.onConfirm,
                        h = e.onDismiss,
                        j = e.customOnDismiss,
                        v = e.recipient,
                        O = e.swapErrorMessage,
                        g = e.attemptingTxn,
                        w = e.txHash,
                        x = Object(a.useMemo)((function() {
                            return Boolean(p && b && (t = b, (e = p).tradeType !== t.tradeType || !Object(jt.o)(e.inputAmount.currency, t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !Object(jt.o)(e.outputAmount.currency, t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount)));
                            var e, t
                        }), [b, p]),
                        k = Object(L.b)().t,
                        T = Object(a.useCallback)((function() {
                            return p ? Object(W.jsx)(cn, {
                                trade: p,
                                allowedSlippage: m,
                                recipient: v,
                                showAcceptChanges: x,
                                onAcceptChanges: y
                            }) : null
                        }), [m, y, v, x, p]),
                        C = Object(a.useCallback)((function() {
                            return p ? Object(W.jsx)(rn, {
                                onConfirm: f,
                                trade: p,
                                disabledConfirm: x,
                                swapErrorMessage: O,
                                allowedSlippage: m
                            }) : null
                        }), [m, f, x, O, p]),
                        A = k("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
                            amountA: null !== (t = null === p || void 0 === p || null === (n = p.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : "",
                            symbolA: null !== (i = null === p || void 0 === p || null === (r = p.inputAmount) || void 0 === r || null === (o = r.currency) || void 0 === o ? void 0 : o.symbol) && void 0 !== i ? i : "",
                            amountB: null !== (s = null === p || void 0 === p || null === (c = p.outputAmount) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== s ? s : "",
                            symbolB: null !== (l = null === p || void 0 === p || null === (u = p.outputAmount) || void 0 === u || null === (d = u.currency) || void 0 === d ? void 0 : d.symbol) && void 0 !== l ? l : ""
                        }),
                        S = Object(a.useCallback)((function() {
                            return O ? Object(W.jsx)(_t.b, {
                                onDismiss: h,
                                message: O
                            }) : Object(W.jsx)(_t.a, {
                                topContent: T,
                                bottomContent: C
                            })
                        }), [h, C, T, O]);
                    return Object(W.jsx)(_t.c, {
                        title: k("Confirm Swap"),
                        onDismiss: h,
                        customOnDismiss: j,
                        attemptingTxn: g,
                        hash: w,
                        content: S,
                        pendingText: A,
                        currencyToAdd: null === p || void 0 === p ? void 0 : p.outputAmount.currency
                    })
                },
                un = n(171);

            function dn(e) {
                return null !== e && void 0 !== e
            }
            var pn = function(e) {
                    return function(e, t) {
                        var n = Object(a.useState)(t && t(e) ? e : void 0),
                            i = Object(g.a)(n, 2),
                            r = i[0],
                            o = i[1];
                        return Object(a.useEffect)((function() {
                            o((function(n) {
                                return !t || t(e) ? e : n
                            }))
                        }), [t, e]), r
                    }(e, dn)
                },
                bn = n(48),
                yn = Object(a.memo)((function(e) {
                    var t = e.trade;
                    return Object(W.jsx)(D.A, {
                        flexWrap: "wrap",
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        children: t.route.path.map((function(e, t, n) {
                            var i = t === n.length - 1,
                                r = Object(bn.a)(e);
                            return Object(W.jsxs)(a.Fragment, {
                                children: [Object(W.jsx)(D.A, {
                                    alignItems: "end",
                                    children: Object(W.jsx)(D.eb, {
                                        fontSize: "14px",
                                        ml: "0.125rem",
                                        mr: "0.125rem",
                                        children: r.symbol
                                    })
                                }), !i && Object(W.jsx)(D.s, {
                                    width: "12px"
                                })]
                            }, t)
                        }))
                    })
                }));

            function mn(e) {
                var t, n, a, i, r = e.trade,
                    o = e.allowedSlippage,
                    s = Object(L.b)().t,
                    c = Object(zt.b)(r),
                    l = c.priceImpactWithoutFee,
                    u = c.realizedLPFee,
                    d = r.tradeType === jt.m.EXACT_INPUT,
                    p = Object(zt.a)(r, o);
                return Object(W.jsxs)(Tt.a, {
                    style: {
                        padding: "0 16px"
                    },
                    children: [Object(W.jsxs)(Ct.b, {
                        children: [Object(W.jsxs)(Ct.c, {
                            children: [Object(W.jsx)(D.eb, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: s(d ? "Minimum received" : "Maximum sold")
                            }), Object(W.jsx)(qt.a, {
                                text: s("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
                                ml: "4px",
                                placement: "top-start"
                            })]
                        }), Object(W.jsx)(Ct.c, {
                            children: Object(W.jsx)(D.eb, {
                                fontSize: "14px",
                                children: d ? null !== (t = "".concat(null === (n = p[Wt.a.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(r.outputAmount.currency.symbol)) && void 0 !== t ? t : "-" : null !== (a = "".concat(null === (i = p[Wt.a.INPUT]) || void 0 === i ? void 0 : i.toSignificant(4), " ").concat(r.inputAmount.currency.symbol)) && void 0 !== a ? a : "-"
                            })
                        })]
                    }), Object(W.jsxs)(Ct.b, {
                        children: [Object(W.jsxs)(Ct.c, {
                            children: [Object(W.jsx)(D.eb, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: s("Price Impact")
                            }), Object(W.jsx)(qt.a, {
                                text: s("The difference between the market price and estimated price due to trade size."),
                                ml: "4px",
                                placement: "top-start"
                            })]
                        }), Object(W.jsx)(nn, {
                            priceImpact: l
                        })]
                    }), Object(W.jsxs)(Ct.b, {
                        children: [Object(W.jsxs)(Ct.c, {
                            children: [Object(W.jsx)(D.eb, {
                                fontSize: "14px",
                                color: "textSubtle",
                                children: s("Liquidity Provider Fee")
                            }), Object(W.jsx)(qt.a, {
                                text: Object(W.jsxs)(W.Fragment, {
                                    children: [Object(W.jsx)(D.eb, {
                                        mb: "12px",
                                        children: s("For each trade a %amount% fee is paid", {
                                            amount: "0.25%"
                                        })
                                    }), Object(W.jsxs)(D.eb, {
                                        children: ["- ", s("%amount% to LP token holders", {
                                            amount: "0.17%"
                                        })]
                                    }), Object(W.jsxs)(D.eb, {
                                        children: ["- ", s("%amount% to the Treasury", {
                                            amount: "0.03%"
                                        })]
                                    }), Object(W.jsxs)(D.eb, {
                                        children: ["- ", s("%amount% towards Community", {
                                            amount: "0.05%"
                                        })]
                                    })]
                                }),
                                ml: "4px",
                                placement: "top-start"
                            })]
                        }), Object(W.jsx)(D.eb, {
                            fontSize: "14px",
                            children: u ? "".concat(u.toSignificant(4), " ").concat(r.inputAmount.currency.symbol) : "-"
                        })]
                    })]
                })
            }

            function fn(e) {
                var t = e.trade,
                    n = Object(L.b)().t,
                    a = Object(ke.p)(),
                    i = Object(g.a)(a, 1)[0],
                    r = Boolean(t && t.route.path.length > 2);
                return Object(W.jsx)(Tt.a, {
                    gap: "0px",
                    children: t && Object(W.jsxs)(W.Fragment, {
                        children: [Object(W.jsx)(mn, {
                            trade: t,
                            allowedSlippage: i
                        }), r && Object(W.jsx)(W.Fragment, {
                            children: Object(W.jsxs)(Ct.b, {
                                style: {
                                    padding: "0 16px"
                                },
                                children: [Object(W.jsxs)("span", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [Object(W.jsx)(D.eb, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        children: n("Route")
                                    }), Object(W.jsx)(qt.a, {
                                        text: n("Routing through these tokens resulted in the best price for your trade."),
                                        ml: "4px",
                                        placement: "top-start"
                                    })]
                                }), Object(W.jsx)(yn, {
                                    trade: t
                                })]
                            })
                        })]
                    })
                })
            }
            var hn, jn = ["trade"],
                vn = ve.e.div(hn || (hn = Object(je.a)(["\n  margin-top: ", ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 20px;\n  background-color: ", ";\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"])), (function(e) {
                    return e.show ? "16px" : 0
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.show ? "translateY(0%)" : "translateY(-100%)"
                }));

            function On(e) {
                var t, n = e.trade,
                    a = Object(he.a)(e, jn),
                    i = pn(n);
                return Object(W.jsx)(vn, {
                    show: Boolean(n),
                    children: Object(W.jsx)(fn, Object(fe.a)(Object(fe.a)({}, a), {}, {
                        trade: null !== (t = null !== n && void 0 !== n ? n : i) && void 0 !== t ? t : void 0
                    }))
                })
            }

            function gn(e) {
                var t, n, a, i, r, o = e.price,
                    s = e.showInverted,
                    c = e.setShowInverted,
                    l = s ? null === o || void 0 === o ? void 0 : o.toSignificant(6) : null === o || void 0 === o || null === (t = o.invert()) || void 0 === t ? void 0 : t.toSignificant(6),
                    u = Boolean((null === o || void 0 === o ? void 0 : o.baseCurrency) && (null === o || void 0 === o ? void 0 : o.quoteCurrency)),
                    d = s ? "".concat(null === o || void 0 === o || null === (n = o.quoteCurrency) || void 0 === n ? void 0 : n.symbol, " per ").concat(null === o || void 0 === o || null === (a = o.baseCurrency) || void 0 === a ? void 0 : a.symbol) : "".concat(null === o || void 0 === o || null === (i = o.baseCurrency) || void 0 === i ? void 0 : i.symbol, " per ").concat(null === o || void 0 === o || null === (r = o.quoteCurrency) || void 0 === r ? void 0 : r.symbol);
                return Object(W.jsx)(D.eb, {
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    },
                    children: u ? Object(W.jsxs)(W.Fragment, {
                        children: [null !== l && void 0 !== l ? l : "-", " ", d, Object(W.jsx)($t, {
                            onClick: function() {
                                return c(!s)
                            },
                            children: Object(W.jsx)(D.f, {
                                width: "14px"
                            })
                        })]
                    }) : "-"
                })
            }
            var wn, xn, kn, Tn, Cn = n(248),
                An = function(e) {
                    var t = e.tokens,
                        n = e.onDismiss,
                        a = e.onCancel,
                        i = Object(L.b)().t;
                    return Object(W.jsx)(D.O, {
                        title: i("Import Token"),
                        onDismiss: function() {
                            n && n(), a()
                        },
                        style: {
                            maxWidth: "420px"
                        },
                        children: Object(W.jsx)(Cn.a, {
                            tokens: t,
                            handleCurrencySelect: n
                        })
                    })
                },
                Sn = ["steps", "disabled"],
                En = Object(ve.e)(Ct.b)(wn || (wn = Object(je.a)(["\n  width: 50%;\n"]))),
                In = ve.e.div(xn || (xn = Object(je.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.confirmed;
                    return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
                })),
                Pn = ve.e.div(kn || (kn = Object(je.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]))),
                Nn = ve.e.div(Tn || (Tn = Object(je.a)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.prevConfirmed;
                    return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
                }), (function(e) {
                    var t = e.theme,
                        n = e.prevConfirmed;
                    return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.primary : t.colors.backgroundDisabled
                }));

            function Bn(e) {
                var t = e.steps,
                    n = e.disabled,
                    a = void 0 !== n && n,
                    i = Object(he.a)(e, Sn);
                return Object(W.jsx)(Tt.a, Object(fe.a)(Object(fe.a)({
                    justify: "center"
                }, i), {}, {
                    children: Object(W.jsxs)(En, {
                        children: [t.map((function(e, n) {
                            return Object(W.jsxs)(Pn, {
                                children: [Object(W.jsx)(In, {
                                    confirmed: e,
                                    disabled: a || !t[n - 1] && 0 !== n,
                                    children: e ? "\u2713" : n + 1
                                }), Object(W.jsx)(Nn, {
                                    prevConfirmed: e,
                                    disabled: a
                                })]
                            }, n)
                        })), Object(W.jsx)(In, {
                            disabled: a || !t[t.length - 1],
                            children: t.length + 1
                        })]
                    })
                }))
            }
            var Rn, Fn = n(182),
                Mn = n(51),
                Un = n(119),
                Dn = n(217);

            function Ln(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.n,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = Object(s.a)(),
                    r = i.account,
                    o = i.chainId,
                    l = i.library,
                    u = Object(kt.a)(n),
                    d = u.address,
                    p = null === n ? r : d,
                    b = Object(Dn.a)();
                return Object(a.useMemo)((function() {
                    if (!e || !p || !l || !r || !o || !b) return [];
                    var n = Object(Y.h)(o, l, r);
                    if (!n) return [];
                    var a = [];
                    return a.push(jt.i.swapCallParameters(e, {
                        feeOnTransfer: !1,
                        allowedSlippage: new jt.g(jt.e.BigInt(t), c.i),
                        recipient: p,
                        deadline: b.toNumber()
                    })), e.tradeType === jt.m.EXACT_INPUT && a.push(jt.i.swapCallParameters(e, {
                        feeOnTransfer: !0,
                        allowedSlippage: new jt.g(jt.e.BigInt(t), c.i),
                        recipient: p,
                        deadline: b.toNumber()
                    })), a.map((function(e) {
                        return {
                            parameters: e,
                            contract: n
                        }
                    }))
                }), [r, t, o, b, l, p, e])
            }! function(e) {
                e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
            }(Rn || (Rn = {}));
            var Yn, Kn = n(85),
                _n = n(79),
                Wn = n(215);
            ! function(e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
            }(Yn || (Yn = {}));
            var zn = {
                wrapType: Yn.NOT_APPLICABLE
            };
            var qn, Vn, Hn, Gn, $n, Jn, Qn, Zn = n(249),
                Xn = n(167),
                ea = n(199),
                ta = function(e) {
                    var t = e.handleContinueClick,
                        n = Object(L.b)().t,
                        i = Object(a.useState)(!1),
                        r = Object(g.a)(i, 2),
                        o = r[0],
                        s = r[1];
                    return Object(W.jsx)(W.Fragment, {
                        children: Object(W.jsxs)(D.A, {
                            justifyContent: "space-between",
                            children: [Object(W.jsxs)(D.A, {
                                alignItems: "center",
                                children: [Object(W.jsx)(D.o, {
                                    name: "confirmed",
                                    type: "checkbox",
                                    checked: o,
                                    onChange: function() {
                                        return s(!o)
                                    },
                                    scale: "sm"
                                }), Object(W.jsx)(D.eb, {
                                    ml: "10px",
                                    style: {
                                        userSelect: "none"
                                    },
                                    children: n("I understand")
                                })]
                            }), Object(W.jsx)(D.i, {
                                disabled: !o,
                                onClick: t,
                                children: n("Continue")
                            })]
                        })
                    })
                },
                na = Object(ve.e)(D.S)(qn || (qn = Object(je.a)(["\n  max-width: 440px;\n"]))),
                aa = Object(ve.e)(D.M)(Vn || (Vn = Object(je.a)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]))),
                ia = function(e) {
                    var t = e.swapCurrency,
                        n = e.onDismiss,
                        i = Object(L.b)().t,
                        r = Object(Ee.a)().theme;
                    Object(a.useEffect)((function() {
                        var e = function(e) {
                            return e.stopPropagation(), e.preventDefault(), !1
                        };
                        return document.querySelectorAll('[role="presentation"]').forEach((function(t) {
                                t.addEventListener("click", e, !0)
                            })),
                            function() {
                                document.querySelectorAll('[role="presentation"]').forEach((function(t) {
                                    t.removeEventListener("click", e, !0)
                                }))
                            }
                    }), []);
                    var o = {}[t.address];
                    return Object(W.jsxs)(na, {
                        minWidth: "280px",
                        children: [Object(W.jsx)(D.T, {
                            background: r.colors.gradients.cardHeader,
                            children: Object(W.jsx)(D.C, {
                                p: "12px 24px",
                                children: i("Notice for trading %symbol%", {
                                    symbol: o.symbol
                                })
                            })
                        }), Object(W.jsxs)(D.Q, {
                            p: "24px",
                            children: [Object(W.jsx)(aa, {
                                variant: "warning",
                                mb: "24px",
                                children: Object(W.jsx)(D.h, {
                                    children: o.component
                                })
                            }), Object(W.jsx)(ta, {
                                handleContinueClick: n
                            })]
                        })]
                    })
                },
                ra = Object(ve.e)(D.A)(Hn || (Hn = Object(je.a)(["\n  flex-shrink: 0;\n  height: fit-content;\n  padding: 0 24px;\n\n  ", " {\n    padding: 0 40px;\n  }\n\n  ", " {\n    ", ";\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.lg
                }), (function(e) {
                    return e.theme.mediaQueries.xxl
                }), (function(e) {
                    return e.$isChartExpanded ? "padding: 0 120px" : "padding: 0 40px"
                })),
                oa = Object(ve.e)(D.h)(Gn || (Gn = Object(je.a)(["\n  width: 328px;\n"]))),
                sa = n(251),
                ca = Object(ve.e)(D.A)($n || ($n = Object(je.a)(["\n  align-items: center;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"])), (function(e) {
                    return e.theme.colors.cardBorder
                })),
                la = (Object(ve.e)(D.F)(Jn || (Jn = Object(je.a)(["\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })), function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        a = (e.setIsChartDisplayed, e.isChartDisplayed, Object(ke.e)()),
                        i = Object(g.a)(a, 1)[0],
                        r = Object(D.ub)(Object(W.jsx)(sa.a, {})),
                        o = Object(g.a)(r, 1)[0];
                    return Object(W.jsx)(ca, {
                        children: Object(W.jsxs)(D.A, {
                            width: "100%",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            children: [Object(W.jsx)(D.F, {
                                onClick: o,
                                variant: "text",
                                scale: "sm",
                                children: Object(W.jsx)(D.E, {
                                    color: "textSubtle",
                                    width: "24px"
                                })
                            }), Object(W.jsxs)(D.A, {
                                flexDirection: "column",
                                alignItems: "center",
                                children: [Object(W.jsx)(D.C, {
                                    as: "h2",
                                    mb: "8px",
                                    children: t
                                }), Object(W.jsx)(D.A, {
                                    alignItems: "center",
                                    children: Object(W.jsx)(D.eb, {
                                        color: "textSubtle",
                                        fontSize: "14px",
                                        children: n
                                    })
                                })]
                            }), Object(W.jsx)(D.A, {
                                children: Object(W.jsx)(D.W, {
                                    show: i,
                                    children: Object(W.jsx)(ot.a, {
                                        color: "textSubtle",
                                        mr: "0"
                                    })
                                })
                            })]
                        })
                    })
                }),
                ua = Object(ve.e)(D.eb)(Qn || (Qn = Object(je.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.secondary
                }));

            function da(e) {
                var t, n, i, r, o, l, u, d, b, y, m, f = e.history,
                    h = Object(Kn.b)(),
                    j = Object(L.b)().t,
                    v = Object(D.tb)().isMobile,
                    x = Object(a.useState)(!1),
                    T = Object(g.a)(x, 2),
                    C = T[0],
                    A = (T[1], Object(ke.d)(v)),
                    S = Object(g.a)(A, 2),
                    E = S[0],
                    I = S[1],
                    P = Object(a.useState)(E),
                    N = Object(g.a)(P, 2),
                    B = N[0],
                    F = N[1];
                Object(a.useEffect)((function() {
                    I(B)
                }), [B, I]);
                var M = [Object(p.c)(null === h || void 0 === h ? void 0 : h.inputCurrencyId), Object(p.c)(null === h || void 0 === h ? void 0 : h.outputCurrencyId)],
                    U = M[0],
                    K = M[1],
                    _ = Object(a.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = [U, K]) || void 0 === t ? void 0 : t.filter((function(e) {
                            return e instanceof jt.j
                        }))) && void 0 !== e ? e : []
                    }), [U, K]),
                    z = Object(p.b)(),
                    q = _ && _.filter((function(e) {
                        return !(e.address in z)
                    })),
                    V = Object(s.a)().account,
                    H = Object(ke.e)(),
                    G = Object(g.a)(H, 1)[0],
                    $ = Object(ke.p)(),
                    J = Object(g.a)($, 1)[0],
                    Q = Object(Kn.g)(),
                    Z = Q.independentField,
                    X = Q.typedValue,
                    ee = Q.recipient,
                    te = Object(Kn.c)(),
                    ne = te.v2Trade,
                    ae = te.currencyBalances,
                    ie = te.parsedAmount,
                    re = te.currencies,
                    oe = te.inputError,
                    se = Object(Kn.g)(),
                    ce = (se[Wt.a.INPUT].currencyId, se[Wt.a.OUTPUT].currencyId, function(e, t, n) {
                        var i = Object(s.a)(),
                            r = i.chainId,
                            o = i.account,
                            c = Object(Wn.a)().callWithGasPrice,
                            l = Object(k.h)(),
                            u = Object(_n.b)(null !== o && void 0 !== o ? o : void 0, e),
                            d = Object(a.useMemo)((function() {
                                return Object(Kn.a)(n, e)
                            }), [e, n]),
                            p = Object(Ke.d)();
                        return Object(a.useMemo)((function() {
                            if (!l || !r || !e || !t) return zn;
                            var n = d && u && !u.lessThan(d);
                            return e === jt.d && Object(jt.o)(jt.n[r], t) ? {
                                wrapType: Yn.WRAP,
                                execute: n && d ? Object(w.a)(O.a.mark((function e() {
                                    var t;
                                    return O.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c(l, "deposit", void 0, {
                                                    value: "0x".concat(d.raw.toString(16))
                                                });
                                            case 3:
                                                t = e.sent, p(t, {
                                                    summary: "Wrap ".concat(d.toSignificant(6), " CRAB to WCRAB")
                                                }), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))) : void 0,
                                inputError: n ? void 0 : "Insufficient CRAB Balance"
                            } : Object(jt.o)(jt.n[r], e) && t === jt.d ? {
                                wrapType: Yn.UNWRAP,
                                execute: n && d ? Object(w.a)(O.a.mark((function e() {
                                    var t;
                                    return O.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, c(l, "withdraw", ["0x".concat(d.raw.toString(16))]);
                                            case 3:
                                                t = e.sent, p(t, {
                                                    summary: "Unwrap ".concat(d.toSignificant(6), " WCRAB to CRAB")
                                                }), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                }))) : void 0,
                                inputError: n ? void 0 : "Insufficient WCRAB Balance"
                            } : zn
                        }), [l, r, e, t, d, u, p, c])
                    }(re[Wt.a.INPUT], re[Wt.a.OUTPUT], X)),
                    le = ce.wrapType,
                    ue = ce.execute,
                    de = ce.inputError,
                    pe = le !== Yn.NOT_APPLICABLE,
                    be = pe ? void 0 : ne,
                    ye = (Object(Kn.d)(), pe ? (t = {}, Object(ht.a)(t, Wt.a.INPUT, ie), Object(ht.a)(t, Wt.a.OUTPUT, ie), t) : (n = {}, Object(ht.a)(n, Wt.a.INPUT, Z === Wt.a.INPUT ? ie : null === be || void 0 === be ? void 0 : be.inputAmount), Object(ht.a)(n, Wt.a.OUTPUT, Z === Wt.a.OUTPUT ? ie : null === be || void 0 === be ? void 0 : be.outputAmount), n)),
                    me = Object(Kn.f)(),
                    he = me.onSwitchTokens,
                    je = me.onCurrencySelection,
                    ve = me.onUserInput,
                    Oe = me.onChangeRecipient,
                    ge = !oe,
                    we = Z === Wt.a.INPUT ? Wt.a.OUTPUT : Wt.a.INPUT,
                    xe = Object(a.useCallback)((function(e) {
                        ve(Wt.a.INPUT, e)
                    }), [ve]),
                    Te = Object(a.useCallback)((function(e) {
                        ve(Wt.a.OUTPUT, e)
                    }), [ve]),
                    Ce = Object(a.useState)({
                        tradeToConfirm: void 0,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        txHash: void 0
                    }),
                    Ae = Object(g.a)(Ce, 2),
                    Se = Ae[0],
                    Ee = Se.tradeToConfirm,
                    Ie = Se.swapErrorMessage,
                    Ne = Se.attemptingTxn,
                    Be = Se.txHash,
                    Re = Ae[1],
                    Fe = (u = {}, Object(ht.a)(u, Z, X), Object(ht.a)(u, we, pe ? null !== (i = null === (r = ye[Z]) || void 0 === r ? void 0 : r.toExact()) && void 0 !== i ? i : "" : null !== (o = null === (l = ye[we]) || void 0 === l ? void 0 : l.toSignificant(6)) && void 0 !== o ? o : ""), u),
                    Me = null === be || void 0 === be ? void 0 : be.route,
                    Ue = Boolean(re[Wt.a.INPUT] && re[Wt.a.OUTPUT] && (null === (d = ye[Z]) || void 0 === d ? void 0 : d.greaterThan(jt.e.BigInt(0)))),
                    De = !Me,
                    Le = Object(Mn.c)(be, J),
                    Ye = Object(g.a)(Le, 2),
                    _e = Ye[0],
                    We = Ye[1],
                    ze = Object(a.useState)(!1),
                    qe = Object(g.a)(ze, 2),
                    Ve = qe[0],
                    He = qe[1];
                Object(a.useEffect)((function() {
                    _e === Mn.a.PENDING && He(!0)
                }), [_e, Ve]);
                var Ge = Object(Zn.a)(ae[Wt.a.INPUT]),
                    $e = Boolean(Ge && (null === (b = ye[Wt.a.INPUT]) || void 0 === b ? void 0 : b.equalTo(Ge))),
                    Je = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.n,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = Object(s.a)(),
                            r = i.account,
                            o = i.chainId,
                            l = i.library,
                            u = Object(ke.f)(),
                            d = Ln(e, t, n),
                            p = Object(Ke.d)(),
                            b = Object(kt.a)(n).address,
                            y = null === n ? r : b;
                        return Object(a.useMemo)((function() {
                            return e && l && r && o ? y ? {
                                state: Rn.VALID,
                                callback: function() {
                                    var t = Object(w.a)(O.a.mark((function t() {
                                        var a, i, o, s, c, l, b, m, f, h;
                                        return O.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, Promise.all(d.map((function(e) {
                                                        var t, n = e.parameters,
                                                            a = n.methodName,
                                                            i = n.args,
                                                            r = n.value,
                                                            o = e.contract,
                                                            s = !r || Object(Un.a)(r) ? {} : {
                                                                value: r
                                                            };
                                                        return (t = o.estimateGas)[a].apply(t, Object(R.a)(i).concat([s])).then((function(t) {
                                                            return {
                                                                call: e,
                                                                gasEstimate: t
                                                            }
                                                        })).catch((function(t) {
                                                            var n;
                                                            return console.error("Gas estimate failed, trying eth_call to extract error", e), (n = o.callStatic)[a].apply(n, Object(R.a)(i).concat([s])).then((function(n) {
                                                                return console.error("Unexpected successful call after failed estimate gas", e, t, n), {
                                                                    call: e,
                                                                    error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                                }
                                                            })).catch((function(t) {
                                                                var n;
                                                                console.error("Call threw error", e, t);
                                                                var a = t.reason || (null === (n = t.data) || void 0 === n ? void 0 : n.message) || t.message,
                                                                    i = "The transaction cannot succeed due to error: ".concat(null !== a && void 0 !== a ? a : "Unknown error, check the logs", ".");
                                                                return {
                                                                    call: e,
                                                                    error: new Error(i)
                                                                }
                                                            }))
                                                        }))
                                                    })));
                                                case 2:
                                                    if (a = t.sent, i = a.find((function(e, t, n) {
                                                            return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1])
                                                        }))) {
                                                        t.next = 9;
                                                        break
                                                    }
                                                    if (!((o = a.filter((function(e) {
                                                            return "error" in e
                                                        }))).length > 0)) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    throw o[o.length - 1].error;
                                                case 8:
                                                    throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                case 9:
                                                    return s = i.call, c = s.contract, l = s.parameters, b = l.methodName, m = l.args, f = l.value, h = i.gasEstimate, t.abrupt("return", c[b].apply(c, Object(R.a)(m).concat([Object(fe.a)({
                                                        gasLimit: Object(Y.b)(h),
                                                        gasPrice: u
                                                    }, f && !Object(Un.a)(f) ? {
                                                        value: f,
                                                        from: r
                                                    } : {
                                                        from: r
                                                    })])).then((function(t) {
                                                        var a = e.inputAmount.currency.symbol,
                                                            i = e.outputAmount.currency.symbol,
                                                            o = e.inputAmount.toSignificant(3),
                                                            s = e.outputAmount.toSignificant(3),
                                                            c = "Swap ".concat(o, " ").concat(a, " for ").concat(s, " ").concat(i),
                                                            l = y === r ? c : "".concat(c, " to ").concat(n && Object(Y.i)(n) ? Object(sn.a)(n) : n);
                                                        return p(t, {
                                                            summary: l
                                                        }), t.hash
                                                    })).catch((function(e) {
                                                        throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, b, m, f), new Error("Swap failed: ".concat(e.message)))
                                                    })));
                                                case 11:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                error: null
                            } : null !== n ? {
                                state: Rn.INVALID,
                                callback: null,
                                error: "Invalid recipient"
                            } : {
                                state: Rn.LOADING,
                                callback: null,
                                error: null
                            } : {
                                state: Rn.INVALID,
                                callback: null,
                                error: "Missing dependencies"
                            }
                        }), [e, l, r, o, y, n, d, p, u])
                    }(be, J, ee),
                    Qe = Je.callback,
                    Ze = Je.error,
                    Xe = Object(zt.b)(be).priceImpactWithoutFee,
                    et = Object(ke.o)(),
                    tt = Object(g.a)(et, 1)[0],
                    nt = Object(a.useCallback)((function() {
                        Xe && ! function(e, t) {
                            if (!e.lessThan(c.s)) {
                                var n = "confirm";
                                return window.prompt(t('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', {
                                    amount: c.s.toFixed(0),
                                    word: n
                                })) === n
                            }
                            return !!e.lessThan(c.b) || window.confirm(t("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", {
                                amount: c.b.toFixed(0)
                            }))
                        }(Xe, j) || Qe && (Re({
                            attemptingTxn: !0,
                            tradeToConfirm: Ee,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }), Qe().then((function(e) {
                            Re({
                                attemptingTxn: !1,
                                tradeToConfirm: Ee,
                                swapErrorMessage: void 0,
                                txHash: e
                            })
                        })).catch((function(e) {
                            Re({
                                attemptingTxn: !1,
                                tradeToConfirm: Ee,
                                swapErrorMessage: e.message,
                                txHash: void 0
                            })
                        })))
                    }), [Xe, Qe, Ee, j]),
                    at = Object(a.useState)(!1),
                    it = Object(g.a)(at, 2),
                    rt = it[0],
                    ot = it[1],
                    st = Object(zt.d)(Xe),
                    ct = !oe && (_e === Mn.a.NOT_APPROVED || _e === Mn.a.PENDING || Ve && _e === Mn.a.APPROVED) && !(st > 3 && !G),
                    lt = Object(a.useCallback)((function() {
                        Re({
                            tradeToConfirm: Ee,
                            attemptingTxn: Ne,
                            swapErrorMessage: Ie,
                            txHash: Be
                        }), Be && ve(Wt.a.INPUT, "")
                    }), [Ne, ve, Ie, Ee, Be]),
                    ut = Object(a.useCallback)((function() {
                        Re({
                            tradeToConfirm: be,
                            swapErrorMessage: Ie,
                            txHash: Be,
                            attemptingTxn: Ne
                        })
                    }), [Ne, Ie, be, Be]),
                    dt = Object(a.useState)(null),
                    pt = Object(g.a)(dt, 2),
                    bt = pt[0],
                    yt = pt[1],
                    mt = Object(D.ub)(Object(W.jsx)(ia, {
                        swapCurrency: bt
                    })),
                    ft = Object(g.a)(mt, 1)[0],
                    wt = function(e) {
                        var t = Object.entries(xt).find((function(t) {
                            var n = t[1];
                            return e.address === n.address
                        }));
                        return Boolean(t)
                    };
                Object(a.useEffect)((function() {
                    bt && ft()
                }), [bt]);
                var At = Object(a.useCallback)((function(e) {
                        He(!1), je(Wt.a.INPUT, e);
                        var t = wt(e);
                        yt(t ? e : null)
                    }), [je]),
                    St = Object(a.useCallback)((function() {
                        Ge && ve(Wt.a.INPUT, Ge.toExact())
                    }), [Ge, ve]),
                    Et = Object(a.useCallback)((function(e) {
                        je(Wt.a.OUTPUT, e);
                        var t = wt(e);
                        yt(t ? e : null)
                    }), [je]),
                    It = Object(vt.a)(null === re || void 0 === re ? void 0 : re.INPUT, null === re || void 0 === re ? void 0 : re.OUTPUT),
                    Nt = Object(D.ub)(Object(W.jsx)(An, {
                        tokens: q,
                        onCancel: function() {
                            return f.push("/swap/")
                        }
                    })),
                    Bt = Object(g.a)(Nt, 1)[0];
                Object(a.useEffect)((function() {
                    q.length > 0 && Bt()
                }), [q.length]);
                var Rt = Object(D.ub)(Object(W.jsx)(ln, {
                        trade: be,
                        originalTrade: Ee,
                        onAcceptChanges: ut,
                        attemptingTxn: Ne,
                        txHash: Be,
                        recipient: ee,
                        allowedSlippage: J,
                        onConfirm: nt,
                        swapErrorMessage: Ie,
                        customOnDismiss: lt
                    }), !0, !0, "confirmSwapModal"),
                    Ft = Object(g.a)(Rt, 1)[0];
                return Object(W.jsx)(ea.a, {
                    removePadding: C,
                    hideFooterOnDesktop: C,
                    children: Object(W.jsx)(D.A, {
                        width: "100%",
                        justifyContent: "center",
                        position: "relative",
                        children: Object(W.jsxs)(D.A, {
                            flexDirection: "column",
                            children: [Object(W.jsx)(ra, {
                                $isChartExpanded: C,
                                children: Object(W.jsxs)(oa, {
                                    mt: C ? "24px" : "0",
                                    mr: "0",
                                    children: [Object(W.jsxs)(Fn.a, {
                                        children: [Object(W.jsx)(la, {
                                            title: j("Swap"),
                                            subtitle: j("Trade tokens in an instant"),
                                            setIsChartDisplayed: F,
                                            isChartDisplayed: B
                                        }), Object(W.jsxs)(Vt, {
                                            id: "swap-page",
                                            children: [Object(W.jsxs)(Tt.a, {
                                                gap: "md",
                                                children: [Object(W.jsx)(un.a, {
                                                    label: Z === Wt.a.OUTPUT && !pe && be ? j("From (estimated)") : j("From"),
                                                    value: Fe[Wt.a.INPUT],
                                                    showMaxButton: !$e,
                                                    currency: re[Wt.a.INPUT],
                                                    onUserInput: xe,
                                                    onMax: St,
                                                    onCurrencySelect: At,
                                                    otherCurrency: re[Wt.a.OUTPUT],
                                                    id: "swap-currency-input"
                                                }), Object(W.jsx)(Tt.a, {
                                                    justify: "space-between",
                                                    children: Object(W.jsxs)(Ct.a, {
                                                        justify: G ? "space-between" : "center",
                                                        style: {
                                                            padding: "0 1rem"
                                                        },
                                                        children: [Object(W.jsx)(D.F, {
                                                            variant: "light",
                                                            scale: "sm",
                                                            children: Object(W.jsx)(D.d, {
                                                                width: "16px",
                                                                onClick: function() {
                                                                    He(!1), he()
                                                                },
                                                                color: re[Wt.a.INPUT] && re[Wt.a.OUTPUT] ? "primary" : "text"
                                                            })
                                                        }), null === ee && !pe && G ? Object(W.jsx)(D.i, {
                                                            variant: "text",
                                                            id: "add-recipient-button",
                                                            onClick: function() {
                                                                return Oe("")
                                                            },
                                                            children: j("+ Add a send (optional)")
                                                        }) : null]
                                                    })
                                                }), Object(W.jsx)(un.a, {
                                                    value: Fe[Wt.a.OUTPUT],
                                                    onUserInput: Te,
                                                    label: Z === Wt.a.INPUT && !pe && be ? j("To (estimated)") : j("To"),
                                                    showMaxButton: !1,
                                                    currency: re[Wt.a.OUTPUT],
                                                    onCurrencySelect: Et,
                                                    otherCurrency: re[Wt.a.INPUT],
                                                    id: "swap-currency-output"
                                                }), G && null !== ee && !pe ? Object(W.jsxs)(W.Fragment, {
                                                    children: [Object(W.jsxs)(Ct.a, {
                                                        justify: "space-between",
                                                        style: {
                                                            padding: "0 1rem"
                                                        },
                                                        children: [Object(W.jsx)(Ht, {
                                                            clickable: !1,
                                                            children: Object(W.jsx)(D.d, {
                                                                width: "16px"
                                                            })
                                                        }), Object(W.jsx)(D.i, {
                                                            variant: "text",
                                                            id: "remove-recipient-button",
                                                            onClick: function() {
                                                                return Oe(null)
                                                            },
                                                            children: j("- Remove send")
                                                        })]
                                                    }), Object(W.jsx)(Pt, {
                                                        id: "recipient",
                                                        value: ee,
                                                        onChange: Oe
                                                    })]
                                                }) : null, pe ? null : Object(W.jsxs)(Tt.a, {
                                                    gap: "8px",
                                                    style: {
                                                        padding: "0 16px"
                                                    },
                                                    children: [Boolean(be) && Object(W.jsxs)(Ct.b, {
                                                        align: "center",
                                                        children: [Object(W.jsx)(ua, {
                                                            children: j("Price")
                                                        }), Object(W.jsx)(gn, {
                                                            price: null === be || void 0 === be ? void 0 : be.executionPrice,
                                                            showInverted: rt,
                                                            setShowInverted: ot
                                                        })]
                                                    }), J !== c.n && Object(W.jsxs)(Ct.b, {
                                                        align: "center",
                                                        children: [Object(W.jsx)(ua, {
                                                            children: j("Slippage Tolerance")
                                                        }), Object(W.jsxs)(D.eb, {
                                                            bold: !0,
                                                            color: "primary",
                                                            children: [J / 100, "%"]
                                                        })]
                                                    })]
                                                })]
                                            }), Object(W.jsxs)(D.h, {
                                                mt: "1rem",
                                                children: [It ? Object(W.jsx)(D.i, {
                                                    width: "100%",
                                                    disabled: !0,
                                                    mb: "4px",
                                                    children: j("Unsupported Asset")
                                                }) : V ? pe ? Object(W.jsx)(D.i, {
                                                    width: "100%",
                                                    disabled: Boolean(de),
                                                    onClick: ue,
                                                    children: null !== de && void 0 !== de ? de : le === Yn.WRAP ? "Wrap" : le === Yn.UNWRAP ? "Unwrap" : null
                                                }) : De && Ue ? Object(W.jsxs)(Kt.a, {
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [Object(W.jsx)(D.eb, {
                                                        color: "textSubtle",
                                                        mb: "4px",
                                                        children: j("Insufficient liquidity for this trade.")
                                                    }), tt && Object(W.jsx)(D.eb, {
                                                        color: "textSubtle",
                                                        mb: "4px",
                                                        children: j("Try enabling multi-hop trades.")
                                                    })]
                                                }) : ct ? Object(W.jsxs)(Ct.b, {
                                                    children: [Object(W.jsx)(D.i, {
                                                        variant: _e === Mn.a.APPROVED ? "success" : "primary",
                                                        onClick: We,
                                                        disabled: _e !== Mn.a.NOT_APPROVED || Ve,
                                                        width: "48%",
                                                        children: _e === Mn.a.PENDING ? Object(W.jsxs)(Ct.a, {
                                                            gap: "6px",
                                                            justify: "center",
                                                            children: [j("Enabling"), " ", Object(W.jsx)(Xn.a, {
                                                                stroke: "white"
                                                            })]
                                                        }) : Ve && _e === Mn.a.APPROVED ? j("Enabled") : j("Enable %asset%", {
                                                            asset: null !== (y = null === (m = re[Wt.a.INPUT]) || void 0 === m ? void 0 : m.symbol) && void 0 !== y ? y : ""
                                                        })
                                                    }), Object(W.jsx)(D.i, {
                                                        variant: ge && st > 2 ? "danger" : "primary",
                                                        onClick: function() {
                                                            G ? nt() : (Re({
                                                                tradeToConfirm: be,
                                                                attemptingTxn: !1,
                                                                swapErrorMessage: void 0,
                                                                txHash: void 0
                                                            }), Ft())
                                                        },
                                                        width: "48%",
                                                        id: "swap-button",
                                                        disabled: !ge || _e !== Mn.a.APPROVED || st > 3 && !G,
                                                        children: j(st > 3 && !G ? "Price Impact High" : st > 2 ? "Swap Anyway" : "Swap")
                                                    })]
                                                }) : Object(W.jsx)(D.i, {
                                                    variant: ge && st > 2 && !Ze ? "danger" : "primary",
                                                    onClick: function() {
                                                        G ? nt() : (Re({
                                                            tradeToConfirm: be,
                                                            attemptingTxn: !1,
                                                            swapErrorMessage: void 0,
                                                            txHash: void 0
                                                        }), Ft())
                                                    },
                                                    id: "swap-button",
                                                    width: "100%",
                                                    disabled: !ge || st > 3 && !G || !!Ze,
                                                    children: oe || j(st > 3 && !G ? "Price Impact Too High" : st > 2 ? "Swap Anyway" : "Swap")
                                                }) : Object(W.jsx)(Pe.a, {
                                                    width: "100%"
                                                }), ct && Object(W.jsx)(Tt.c, {
                                                    style: {
                                                        marginTop: "1rem"
                                                    },
                                                    children: Object(W.jsx)(Bn, {
                                                        steps: [_e === Mn.a.APPROVED]
                                                    })
                                                }), G && Ie ? Object(W.jsx)(Xt, {
                                                    error: Ie
                                                }) : null]
                                            })]
                                        })]
                                    }), It ? Object(W.jsx)(Ot.a, {
                                        currencies: [re.INPUT, re.OUTPUT]
                                    }) : be && Object(W.jsx)(On, {
                                        trade: be
                                    })]
                                })
                            }), C && Object(W.jsx)(D.h, {
                                display: ["none", null, null, "block"],
                                width: "100%",
                                height: "100%",
                                children: Object(W.jsx)(gt.a, {
                                    variant: "side"
                                })
                            })]
                        })
                    })
                })
            }
            var pa = n(317);

            function ba() {
                return Object(W.jsx)(re.a, {
                    to: "/add/"
                })
            }
            var ya = /^(0x[a-fA-F0-9]{40}|CRAB)-(0x[a-fA-F0-9]{40}|CRAB)$/;

            function ma(e) {
                var t = e.match.params.currencyIdA.match(ya);
                return (null === t || void 0 === t ? void 0 : t.length) ? Object(W.jsx)(re.a, {
                    to: "/add/".concat(t[1], "/").concat(t[2])
                }) : Object(W.jsx)(pa.default, Object(fe.a)({}, e))
            }

            function fa(e) {
                var t = e.match.params,
                    n = t.currencyIdA,
                    a = t.currencyIdB;
                return n.toLowerCase() === a.toLowerCase() ? Object(W.jsx)(re.a, {
                    to: "/add/".concat(n)
                }) : Object(W.jsx)(pa.default, Object(fe.a)({}, e))
            }
            var ha = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
            var ja = function(e) {
                var t = e.match.params.tokens;
                if (!ha.test(t)) return Object(W.jsx)(re.a, {
                    to: "/pool"
                });
                var n = t.split("-"),
                    a = Object(g.a)(n, 2),
                    i = a[0],
                    r = a[1];
                return Object(W.jsx)(re.a, {
                    to: "/remove/".concat(i, "/").concat(r)
                })
            };

            function va(e) {
                var t = e.location;
                return Object(W.jsx)(re.a, {
                    to: Object(fe.a)(Object(fe.a)({}, t), {}, {
                        pathname: "/swap"
                    })
                })
            }

            function Oa(e) {
                var t = e.location,
                    n = e.location.search,
                    a = e.match.params.outputCurrency;
                return Object(W.jsx)(re.a, {
                    to: Object(fe.a)(Object(fe.a)({}, t), {}, {
                        pathname: "/swap",
                        search: n && n.length > 1 ? "".concat(n, "&outputCurrency=").concat(a) : "?outputCurrency=".concat(a)
                    })
                })
            }
            var ga = n(132),
                wa = n(122),
                xa = Object(a.lazy)((function() {
                    return n.e(10).then(n.bind(null, 1013))
                })),
                ka = Object(a.lazy)((function() {
                    return n.e(7).then(n.bind(null, 1017))
                })),
                Ta = Object(a.lazy)((function() {
                    return n.e(8).then(n.bind(null, 1014))
                })),
                Ca = Object(a.lazy)((function() {
                    return Promise.resolve().then(n.bind(null, 317))
                })),
                Aa = Object(a.lazy)((function() {
                    return n.e(9).then(n.bind(null, 1015))
                })),
                Sa = Object(a.lazy)((function() {
                    return n.e(5).then(n.bind(null, 1016))
                })),
                Ea = Object(a.lazy)((function() {
                    return n.e(6).then(n.bind(null, 1018))
                }));
            ce.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var Ia = function() {
                    Object(oe.c)().account;
                    return Object(x.b)(), de(), me(), pe(),
                        function() {
                            var e = Object(oe.c)(),
                                t = e.account,
                                n = e.chainId,
                                i = e.connector,
                                r = Object(ga.b)();
                            Object(a.useEffect)((function() {
                                if (t && i) {
                                    var e = function() {
                                        window.localStorage.getItem("walletconnect") && (wa.a.walletconnect.close(), wa.a.walletconnect.walletConnectProvider = null), window.localStorage.removeItem(D.ob), n && r(Object(_.c)({
                                            chainId: n
                                        }))
                                    };
                                    return i.addListener("Web3ReactDeactivate", e),
                                        function() {
                                            i.removeListener("Web3ReactDeactivate", e)
                                        }
                                }
                            }), [t, n, r, i])
                        }(), Object(W.jsxs)(re.c, {
                            history: ye,
                            children: [Object(W.jsx)(D.Z, {}), Object(W.jsx)(we, {}), Object(W.jsx)(ct, {
                                children: Object(W.jsx)(ut, {
                                    fallback: Object(W.jsx)(yt, {}),
                                    children: Object(W.jsxs)(re.d, {
                                        children: [Object(W.jsx)(re.b, {
                                            path: "/",
                                            exact: !0,
                                            children: Object(W.jsx)(xa, {})
                                        }), Object(W.jsx)(re.b, {
                                            path: "/farms",
                                            exact: !0,
                                            children: Object(W.jsx)(ka, {})
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/swap",
                                            component: da
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/swap/:outputCurrency",
                                            component: Oa
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/send",
                                            component: va
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/find",
                                            component: Sa
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/liquidity",
                                            component: Aa
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/create",
                                            component: ba
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            path: "/add",
                                            component: Ca
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            path: "/add/:currencyIdA",
                                            component: ma
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            path: "/add/:currencyIdA/:currencyIdB",
                                            component: fa
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            path: "/create",
                                            component: Ca
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            path: "/create/:currencyIdA",
                                            component: ma
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            path: "/create/:currencyIdA/:currencyIdB",
                                            component: fa
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/remove/:tokens",
                                            component: ja
                                        }), Object(W.jsx)(re.b, {
                                            exact: !0,
                                            strict: !0,
                                            path: "/remove/:currencyIdA/:currencyIdB",
                                            component: Ea
                                        }), Object(W.jsx)(re.b, {
                                            path: "/pool",
                                            children: Object(W.jsx)(re.a, {
                                                to: "/liquidity"
                                            })
                                        }), Object(W.jsx)(re.b, {
                                            component: Ta
                                        })]
                                    })
                                })
                            }), Object(W.jsx)(ft, {
                                iterations: 2
                            }), Object(W.jsx)(dt.a, {}), Object(W.jsx)(ge, {})]
                        })
                },
                Pa = i.a.memo(Ia),
                Na = n(244),
                Ba = n(242),
                Ra = function(e) {
                    var t = Object(ke.l)(),
                        n = Object(g.a)(t, 1)[0];
                    return Object(W.jsx)(ve.b, Object(fe.a)({
                        theme: n ? D.pb : D.qb
                    }, e))
                },
                Fa = function(e) {
                    var t = e.children;
                    return Object(W.jsx)(oe.b, {
                        getLibrary: wa.b,
                        children: Object(W.jsx)(d.a, {
                            store: ga.a,
                            children: Object(W.jsx)(dt.c, {
                                children: Object(W.jsx)(Na.b, {
                                    children: Object(W.jsx)(Ra, {
                                        children: Object(W.jsx)(L.a, {
                                            children: Object(W.jsx)(Ba.b, {
                                                children: Object(W.jsx)(D.U, {
                                                    children: t
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };

            function Ma() {
                return Object(W.jsxs)(W.Fragment, {
                    children: [Object(W.jsx)(j, {}), Object(W.jsx)(z, {}), Object(W.jsx)(U, {})]
                })
            }

            function Ua(e) {
                var t = e.children,
                    n = Object(s.a)().account;
                return Object(a.useMemo)((function() {
                    return Boolean(n && -1 !== c.j.indexOf(n))
                }), [n]) ? Object(W.jsx)("div", {
                    children: "Blocked address"
                }) : Object(W.jsx)(W.Fragment, {
                    children: t
                })
            }
            o.a.render(Object(W.jsx)(i.a.StrictMode, {
                children: Object(W.jsx)(Ua, {
                    children: Object(W.jsxs)(Fa, {
                        children: [Object(W.jsx)(Ma, {}), Object(W.jsx)(Pa, {})]
                    })
                })
            }), document.getElementById("root"))
        },
        69: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "c", (function() {
                return y
            }));
            var a = n(16),
                i = n(7),
                r = n(34),
                o = n(17),
                s = n(30),
                c = new i.g(i.e.BigInt(25), i.e.BigInt(1e4)),
                l = new i.g(i.e.BigInt(1e4), i.e.BigInt(1e4)),
                u = l.subtract(c);

            function d(e) {
                var t = e ? l.subtract(e.route.pairs.reduce((function(e) {
                        return e.multiply(u)
                    }), l)) : void 0,
                    n = e && t ? e.priceImpact.subtract(t) : void 0;
                return {
                    priceImpactWithoutFee: n ? new i.g(null === n || void 0 === n ? void 0 : n.numerator, null === n || void 0 === n ? void 0 : n.denominator) : void 0,
                    realizedLPFee: t && e && (e.inputAmount instanceof i.k ? new i.k(e.inputAmount.token, t.multiply(e.inputAmount.raw).quotient) : i.c.ether(t.multiply(e.inputAmount.raw).quotient))
                }
            }

            function p(e, t) {
                var n, i = Object(s.a)(t);
                return n = {}, Object(a.a)(n, o.a.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(i)), Object(a.a)(n, o.a.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(i)), n
            }

            function b(e) {
                return (null === e || void 0 === e ? void 0 : e.lessThan(r.k)) ? (null === e || void 0 === e ? void 0 : e.lessThan(r.b)) ? (null === e || void 0 === e ? void 0 : e.lessThan(r.d)) ? (null === e || void 0 === e ? void 0 : e.lessThan(r.c)) ? 0 : 1 : 2 : 3 : 4
            }

            function y(e, t) {
                return e ? t ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
            }
        },
        70: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return o
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "g", (function() {
                return p
            }));
            var a = n(24),
                i = /^0x[a-fA-F0-9]{40}$/,
                r = /^0x[a-f0-9]*$/;

            function o(e) {
                if (!i.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!r.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData)
            }

            function s(e) {
                var t = e.split("-");
                if (2 !== t.length) throw new Error("Invalid call key: ".concat(e));
                return {
                    address: t[0],
                    callData: t[1]
                }
            }
            var c = Object(a.b)("multicall/addMulticallListeners"),
                l = Object(a.b)("multicall/removeMulticallListeners"),
                u = Object(a.b)("multicall/fetchingMulticallResults"),
                d = Object(a.b)("multicall/errorFetchingMulticallResults"),
                p = Object(a.b)("multicall/updateMulticallResults")
        },
        76: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            }));
            var a = n(24),
                i = Object(a.b)("transactions/addTransaction"),
                r = Object(a.b)("transactions/clearAllTransactions"),
                o = Object(a.b)("transactions/finalizeTransaction"),
                s = Object(a.b)("transactions/checkedTransaction")
        },
        79: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return d
            })), n.d(t, "e", (function() {
                return p
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "c", (function() {
                return y
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return f
            }));
            var a = n(7),
                i = n(0),
                r = n(73),
                o = n(230),
                s = n(42),
                c = n(55),
                l = n(30),
                u = n(49);

            function d(e, t) {
                var n = Object(i.useMemo)((function() {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                            return !1 !== Object(l.i)(null === e || void 0 === e ? void 0 : e.address)
                        }))) && void 0 !== e ? e : []
                    }), [t]),
                    r = Object(i.useMemo)((function() {
                        return n.map((function(e) {
                            return e.address
                        }))
                    }), [n]),
                    s = Object(u.b)(r, o.b, "balanceOf", [e]),
                    c = Object(i.useMemo)((function() {
                        return s.some((function(e) {
                            return e.loading
                        }))
                    }), [s]);
                return [Object(i.useMemo)((function() {
                    return e && n.length > 0 ? n.reduce((function(e, t, n) {
                        var i, r, o = null === s || void 0 === s || null === (i = s[n]) || void 0 === i || null === (r = i.result) || void 0 === r ? void 0 : r[0],
                            c = o ? a.e.BigInt(o.toString()) : void 0;
                        return c && (e[t.address] = new a.k(t, c)), e
                    }), {}) : {}
                }), [e, n, s]), c]
            }

            function p(e, t) {
                return d(e, t)[0]
            }

            function b(e, t) {
                var n = p(e, [t]);
                if (t) return n[t.address]
            }

            function y(e, t) {
                var n = Object(i.useMemo)((function() {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                            return e instanceof a.j
                        }))) && void 0 !== e ? e : []
                    }), [t]),
                    r = p(e, n),
                    o = function(e) {
                        var t = Object(c.e)(),
                            n = Object(i.useMemo)((function() {
                                return e ? e.map(l.i).filter((function(e) {
                                    return !1 !== e
                                })).sort() : []
                            }), [e]),
                            r = Object(u.d)(t, "getEthBalance", n.map((function(e) {
                                return [e]
                            })));
                        return Object(i.useMemo)((function() {
                            return n.reduce((function(e, t, n) {
                                var i, o, s = null === r || void 0 === r || null === (i = r[n]) || void 0 === i || null === (o = i.result) || void 0 === o ? void 0 : o[0];
                                return s && (e[t] = a.c.ether(a.e.BigInt(s.toString()))), e
                            }), {})
                        }), [n, r])
                    }(Object(i.useMemo)((function() {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.some((function(e) {
                            return e === a.d
                        }))) && void 0 !== e && e
                    }), [t]) ? [e] : []);
                return Object(i.useMemo)((function() {
                    var n;
                    return null !== (n = null === t || void 0 === t ? void 0 : t.map((function(t) {
                        if (e && t) return t instanceof a.j ? r[t.address] : t === a.d ? o[e] : void 0
                    }))) && void 0 !== n ? n : []
                }), [e, t, o, r])
            }

            function m(e, t) {
                return y(e, [t])[0]
            }

            function f() {
                var e = Object(r.c)().account,
                    t = Object(s.b)(),
                    n = p(null !== e && void 0 !== e ? e : void 0, Object(i.useMemo)((function() {
                        return Object.values(null !== t && void 0 !== t ? t : {})
                    }), [t]));
                return null !== n && void 0 !== n ? n : {}
            }
        },
        82: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return s
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "c", (function() {
                return u
            }));
            var a = n(0),
                i = n(25),
                r = n(26),
                o = n(76);

            function s() {
                var e = Object(r.a)(),
                    t = e.chainId,
                    n = e.account,
                    s = Object(i.b)();
                return Object(a.useCallback)((function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = a.summary,
                        r = a.approval,
                        c = a.claim;
                    if (n && t) {
                        var l = e.hash;
                        if (!l) throw Error("No transaction hash found.");
                        s(Object(o.a)({
                            hash: l,
                            from: n,
                            chainId: t,
                            approval: r,
                            summary: i,
                            claim: c
                        }))
                    }
                }), [s, t, n])
            }

            function c() {
                var e, t = Object(r.a)().chainId,
                    n = Object(i.c)((function(e) {
                        return e.transactions
                    }));
                return t && null !== (e = n[t]) && void 0 !== e ? e : {}
            }

            function l(e) {
                return (new Date).getTime() - e.addedTime < 864e5
            }

            function u(e, t) {
                var n = c();
                return Object(a.useMemo)((function() {
                    return "string" === typeof e && "string" === typeof t && Object.keys(n).some((function(a) {
                        var i = n[a];
                        if (!i) return !1;
                        if (i.receipt) return !1;
                        var r = i.approval;
                        return !!r && (r.spender === t && r.tokenAddress === e && l(i))
                    }))
                }), [n, t, e])
            }
        },
        85: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return R
            })), n.d(t, "f", (function() {
                return F
            })), n.d(t, "a", (function() {
                return M
            })), n.d(t, "d", (function() {
                return L
            })), n.d(t, "e", (function() {
                return Y
            })), n.d(t, "c", (function() {
                return K
            })), n.d(t, "b", (function() {
                return V
            }));
            n(40), n(5), n(31);
            var a = n(11),
                i = n(16),
                r = n(117),
                o = n(7),
                s = n(0),
                c = n(25),
                l = n(154),
                u = n(26),
                d = n(42),
                p = n(123),
                b = n(408),
                y = n(56);
            var m, f, h, j, v, O, g = n(23),
                w = n(30),
                x = n(69),
                k = function(e) {
                    if (!e) return "";
                    var t = e.toLowerCase();
                    return "crab" === t ? "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" : t
                },
                T = n(79),
                C = n(17),
                A = n(35),
                S = "https://hub.snapshot.org",
                E = ("".concat(S, "/graphql"), "".concat(S, "/api/message"), n(72)),
                I = n(10);
            Object(E.gql)(m || (m = Object(I.a)(["\n  query lastPairDayId($pairId: String) {\n    pairDayDatas(first: 1, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n    }\n  }\n"]))), Object(E.gql)(f || (f = Object(I.a)(["\n  query pairHourDatas($pairId: String, $first: Int) {\n    pairHourDatas(first: $first, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"]))), Object(E.gql)(h || (h = Object(I.a)(["\n  query pairDayDatasByIdsQuery($pairIds: [String]) {\n    pairDayDatas(where: { id_in: $pairIds }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n      pairAddress {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"])));
            ! function(e) {
                e[e.DAY = 0] = "DAY", e[e.WEEK = 1] = "WEEK", e[e.MONTH = 2] = "MONTH", e[e.YEAR = 3] = "YEAR"
            }(j || (j = {}));
            var P, N, B;
            v = {}, Object(i.a)(v, j.DAY, 24), Object(i.a)(v, j.WEEK, 28), Object(i.a)(v, j.MONTH, 30), Object(i.a)(v, j.YEAR, 24), O = {}, Object(i.a)(O, j.DAY, null), Object(i.a)(O, j.WEEK, 6), Object(i.a)(O, j.MONTH, 1), Object(i.a)(O, j.YEAR, 15), n(409), Object(E.gql)(P || (P = Object(I.a)(["\n  query pairDayDatas($pairId: String, $first: Int) {\n    pairDayDatas(first: $first, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n      pairAddress {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"]))), Object(E.gql)(N || (N = Object(I.a)(["\n  query pairHourDatasByIds($pairIds: [String]) {\n    pairHourDatas(where: { id_in: $pairIds }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"]))), Object(E.gql)(B || (B = Object(I.a)(["\n  query lastPairHourId($pairId: String) {\n    pairHourDatas(first: 1, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n    }\n  }\n"]))), n(688), n(144), n(689), n(691), n(692), n(9), n(690), n(305), n(593);

            function R() {
                return Object(c.c)((function(e) {
                    return e.swap
                }))
            }

            function F() {
                var e = Object(c.b)(),
                    t = Object(s.useCallback)((function(t, n) {
                        e(Object(C.c)({
                            field: t,
                            currencyId: n instanceof o.j ? n.address : n === o.d ? "CRAB" : ""
                        }))
                    }), [e]);
                return {
                    onSwitchTokens: Object(s.useCallback)((function() {
                        e(Object(C.e)())
                    }), [e]),
                    onCurrencySelection: t,
                    onUserInput: Object(s.useCallback)((function(t, n) {
                        e(Object(C.f)({
                            field: t,
                            typedValue: n
                        }))
                    }), [e]),
                    onChangeRecipient: Object(s.useCallback)((function(t) {
                        e(Object(C.d)({
                            recipient: t
                        }))
                    }), [e])
                }
            }

            function M(e, t) {
                if (e && t) try {
                    var n = Object(r.parseUnits)(e, t.decimals).toString();
                    if ("0" !== n) return t instanceof o.j ? new o.k(t, o.e.BigInt(n)) : o.c.ether(o.e.BigInt(n))
                } catch (a) {
                    console.debug('Failed to parse input amount: "'.concat(e, '"'), a)
                }
            }
            var U = ["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];

            function D(e, t) {
                return e.route.path.some((function(e) {
                    return e.address === t
                })) || e.route.pairs.some((function(e) {
                    return e.liquidityToken.address === t
                }))
            }

            function L() {
                var e, t, n = R(),
                    a = n[C.a.INPUT].currencyId,
                    r = n[C.a.OUTPUT].currencyId,
                    o = Object(d.c)(a),
                    s = Object(d.c)(r),
                    c = k(a),
                    l = k(r),
                    u = M("1", null !== o && void 0 !== o ? o : void 0),
                    b = Object(p.b)(u, null !== s && void 0 !== s ? s : void 0);
                if (!o || !s || !b) return null;
                var y = parseFloat(null === b || void 0 === b || null === (e = b.executionPrice) || void 0 === e ? void 0 : e.toSignificant(6)),
                    m = 1 / y;
                return t = {}, Object(i.a)(t, c, y), Object(i.a)(t, l, m), t
            }

            function Y(e, t) {
                var n, a, r = Object(d.c)(e),
                    o = Object(d.c)(t),
                    s = k(e),
                    c = k(t),
                    l = M("1", null !== r && void 0 !== r ? r : void 0),
                    u = Object(p.b)(l, null !== o && void 0 !== o ? o : void 0);
                if (!r || !o || !u) return null;
                var b = parseFloat(null === u || void 0 === u || null === (n = u.executionPrice) || void 0 === n ? void 0 : n.toSignificant(6)),
                    y = 1 / b;
                return a = {}, Object(i.a)(a, s, b), Object(i.a)(a, c, y), a
            }

            function K() {
                var e, t, n, r, o, s, c, b = Object(u.a)().account,
                    y = Object(g.b)().t,
                    m = R(),
                    f = m.independentField,
                    h = m.typedValue,
                    j = m[C.a.INPUT].currencyId,
                    v = m[C.a.OUTPUT].currencyId,
                    O = m.recipient,
                    k = Object(d.c)(j),
                    S = Object(d.c)(v),
                    E = Object(l.a)(null !== O && void 0 !== O ? O : void 0),
                    I = null !== (e = null === O ? b : E.address) && void 0 !== e ? e : null,
                    P = Object(T.c)(null !== b && void 0 !== b ? b : void 0, [null !== k && void 0 !== k ? k : void 0, null !== S && void 0 !== S ? S : void 0]),
                    N = f === C.a.INPUT,
                    B = M(h, null !== (t = N ? k : S) && void 0 !== t ? t : void 0),
                    F = Object(p.b)(N ? B : void 0, null !== S && void 0 !== S ? S : void 0),
                    L = Object(p.c)(null !== k && void 0 !== k ? k : void 0, N ? void 0 : B),
                    Y = N ? F : L,
                    K = (n = {}, Object(i.a)(n, C.a.INPUT, P[0]), Object(i.a)(n, C.a.OUTPUT, P[1]), n),
                    _ = (r = {}, Object(i.a)(r, C.a.INPUT, null !== k && void 0 !== k ? k : void 0), Object(i.a)(r, C.a.OUTPUT, null !== S && void 0 !== S ? S : void 0), r);
                (b || (o = y("Connect Wallet")), B) || (o = null !== (s = o) && void 0 !== s ? s : y("Enter an amount"));
                _[C.a.INPUT] && _[C.a.OUTPUT] || (o = null !== (c = o) && void 0 !== c ? c : y("Select a token"));
                var W, z = Object(w.i)(I);
                if (I && z) {
                    if (-1 !== U.indexOf(z) || F && D(F, z) || L && D(L, z)) {
                        var q;
                        o = null !== (q = o) && void 0 !== q ? q : y("Invalid recipient")
                    }
                } else o = null !== (W = o) && void 0 !== W ? W : y("Enter a recipient");
                var V = Object(A.p)(),
                    H = Object(a.a)(V, 1)[0],
                    G = Y && H && Object(x.a)(Y, H),
                    $ = [K[C.a.INPUT], G ? G[C.a.INPUT] : null],
                    J = $[0],
                    Q = $[1];
                return J && Q && J.lessThan(Q) && (o = y("Insufficient %symbol% balance", {
                    symbol: Q.currency.symbol
                })), {
                    currencies: _,
                    currencyBalances: K,
                    parsedAmount: B,
                    v2Trade: null !== Y && void 0 !== Y ? Y : void 0,
                    inputError: o
                }
            }

            function _(e) {
                if ("string" === typeof e) {
                    var t = Object(w.i)(e);
                    if (t) return t;
                    if ("CRAB" === e.toUpperCase()) return "CRAB";
                    if (!1 === t) return "CRAB"
                }
                return ""
            }
            var W = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                z = /^0x[a-fA-F0-9]{40}$/;

            function q(e) {
                var t, n = _(e.inputCurrency) || "CRAB",
                    a = _(e.outputCurrency) || "0x7399Ea6C9d35124d893B8d9808930e9d3F211501";
                n === a && ("string" === typeof e.outputCurrency ? n = "" : a = "");
                var r, o = function(e) {
                    return "string" !== typeof e ? null : Object(w.i)(e) || (W.test(e) || z.test(e) ? e : null)
                }(e.recipient);
                return t = {}, Object(i.a)(t, C.a.INPUT, {
                    currencyId: n
                }), Object(i.a)(t, C.a.OUTPUT, {
                    currencyId: a
                }), Object(i.a)(t, "typedValue", "string" !== typeof(r = e.exactAmount) || isNaN(parseFloat(r)) ? "" : r), Object(i.a)(t, "independentField", function(e) {
                    return "string" === typeof e && "output" === e.toLowerCase() ? C.a.OUTPUT : C.a.INPUT
                }(e.exactField)), Object(i.a)(t, "recipient", o), Object(i.a)(t, "pairDataById", {}), Object(i.a)(t, "derivedPairDataById", {}), t
            }

            function V() {
                var e = Object(u.a)().chainId,
                    t = Object(c.b)(),
                    n = function() {
                        var e = Object(y.g)().search;
                        return Object(s.useMemo)((function() {
                            return e && e.length > 1 ? Object(b.parse)(e, {
                                parseArrays: !1,
                                ignoreQueryPrefix: !0
                            }) : {}
                        }), [e])
                    }(),
                    i = Object(s.useState)(),
                    r = Object(a.a)(i, 2),
                    o = r[0],
                    l = r[1];
                return Object(s.useEffect)((function() {
                    if (e) {
                        var a = q(n);
                        t(Object(C.b)({
                            typedValue: a.typedValue,
                            field: a.independentField,
                            inputCurrencyId: a[C.a.INPUT].currencyId,
                            outputCurrencyId: a[C.a.OUTPUT].currencyId,
                            recipient: null
                        })), l({
                            inputCurrencyId: a[C.a.INPUT].currencyId,
                            outputCurrencyId: a[C.a.OUTPUT].currencyId
                        })
                    }
                }), [t, e]), o
            }
        },
        89: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return d
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            }));
            var a, i, r, o, s = n(10),
                c = n(4),
                l = n(2),
                u = Object(c.e)(l.h)(a || (a = Object(s.a)(["\n  width: ", ";\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n"])), (function(e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                }), (function(e) {
                    return e.theme.colors.background
                }));
            t.d = u;
            var d = Object(c.e)(u)(i || (i = Object(s.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.colors.backgroundAlt
                })),
                p = Object(c.e)(u)(r || (r = Object(s.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) {
                    return e.theme.colors.cardBorder
                }), (function(e) {
                    return e.theme.colors.background
                })),
                b = Object(c.e)(u)(o || (o = Object(s.a)(["\n  background-color: ", ";\n"])), (function(e) {
                    return e.theme.colors.dropdown
                }))
        },
        91: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "b", (function() {
                return r
            }));
            var a = {
                    locale: "en-US",
                    language: "English",
                    code: "en"
                },
                i = {
                    "en-US": a,
                    "zh-TW": {
                        locale: "zh-TW",
                        language: "\u7e41\u9ad4\u4e2d\u6587",
                        code: "zh-tw"
                    }
                },
                r = Object.values(i)
        },
        96: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            })), n.d(t, "d", (function() {
                return h
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "f", (function() {
                return v
            })), n.d(t, "g", (function() {
                return O
            })), n.d(t, "b", (function() {
                return g
            })), n.d(t, "c", (function() {
                return w
            })), n.d(t, "e", (function() {
                return x
            }));
            var a = n(86),
                i = n(101),
                r = n(47),
                o = n(188),
                s = n(150),
                c = n(390),
                l = n(391),
                u = n(392),
                d = n(393),
                p = n(394),
                b = (n(227), n(395)),
                y = (n(228), n(396)),
                m = function(e, t, n) {
                    var r = null !== n && void 0 !== n ? n : i.a;
                    return new a.a.Contract(t, e, r)
                },
                f = function(e, t) {
                    return m(s, e, t)
                },
                h = function(e, t) {
                    return m(c, e, t)
                },
                j = function(e, t) {
                    return m(l, e, t)
                },
                v = function(e, t) {
                    return m(d, e, t)
                },
                O = function(e, t) {
                    return m(p, e, t)
                },
                g = function(e) {
                    return m(u, r.a.cake.address, e)
                },
                w = function(e, t) {
                    return m(b, t, e)
                },
                x = function(e) {
                    return m(y, Object(o.b)(), e)
                }
        }
    },
    [
        [677, 1, 2]
    ]
]);
