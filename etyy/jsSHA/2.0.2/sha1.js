/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-2 as well as the corresponding HMAC implementation
 as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2015
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
'use strict';
(function(E) {
    function t(e, a, c) {
        var g = 0, b = [], d = 0, f, k, l, h, m, w, n, q = !1, r = !1, p = [], t = [], v, u = !1;
        c = c || {};
        f = c.encoding || "UTF8";
        v = c.numRounds || 1;
        l = y(a, f);
        if (v !== parseInt(v, 10) || 1 > v)
            throw Error("numRounds must a integer >= 1");
        if ("SHA-1" === e)
            m = 512,
            w = z,
            n = F,
            h = 160;
        else
            throw Error("Chosen SHA variant is not supported");
        k = x(e);
        this.setHMACKey = function(a, b, d) {
            var c;
            if (!0 === r)
                throw Error("HMAC key already set");
            if (!0 === q)
                throw Error("Cannot set HMAC key after finalizing hash");
            if (!0 === u)
                throw Error("Cannot set HMAC key after calling update");
            f = (d || {}).encoding || "UTF8";
            b = y(b, f)(a);
            a = b.binLen;
            b = b.value;
            c = m >>> 3;
            d = c / 4 - 1;
            if (c < a / 8) {
                for (b = n(b, a, 0, x(e)); b.length <= d; )
                    b.push(0);
                b[d] &= 4294967040
            } else if (c > a / 8) {
                for (; b.length <= d; )
                    b.push(0);
                b[d] &= 4294967040
            }
            for (a = 0; a <= d; a += 1)
                p[a] = b[a] ^ 909522486,
                t[a] = b[a] ^ 1549556828;
            k = w(p, k);
            g = m;
            r = !0
        }
        ;
        this.update = function(a) {
            var e, c, f, h = 0, n = m >>> 5;
            e = l(a, b, d);
            a = e.binLen;
            c = e.value;
            e = a >>> 5;
            for (f = 0; f < e; f += n)
                h + m <= a && (k = w(c.slice(f, f + n), k),
                h += m);
            g += h;
            b = c.slice(h >>> 5);
            d = a % m;
            u = !0
        }
        ;
        this.getHash = function(a, c) {
            var f, l, m;
            if (!0 === r)
                throw Error("Cannot call getHash after setting HMAC key");
            m = A(c);
            switch (a) {
            case "HEX":
                f = function(a) {
                    return B(a, m)
                }
                ;
                break;
            case "B64":
                f = function(a) {
                    return C(a, m)
                }
                ;
                break;
            case "BYTES":
                f = D;
                break;
            default:
                throw Error("format must be HEX, B64, or BYTES");
            }
            if (!1 === q)
                for (k = n(b, d, g, k),
                l = 1; l < v; l += 1)
                    k = n(k, h, 0, x(e));
            q = !0;
            return f(k)
        }
        ;
        this.getHMAC = function(a, c) {
            var f, l, p;
            if (!1 === r)
                throw Error("Cannot call getHMAC without first setting HMAC key");
            p = A(c);
            switch (a) {
            case "HEX":
                f = function(a) {
                    return B(a, p)
                }
                ;
                break;
            case "B64":
                f = function(a) {
                    return C(a, p)
                }
                ;
                break;
            case "BYTES":
                f = D;
                break;
            default:
                throw Error("outputFormat must be HEX, B64, or BYTES");
            }
            !1 === q && (l = n(b, d, g, k),
            k = w(t, x(e)),
            k = n(l, h, m, k));
            q = !0;
            return f(k)
        }
    }
    function G(e, a, c) {
        var g = e.length, b, d, f, k, l;
        a = a || [0];
        c = c || 0;
        l = c >>> 3;
        if (0 !== g % 2)
            throw Error("String of HEX type must be in byte increments");
        for (b = 0; b < g; b += 2) {
            d = parseInt(e.substr(b, 2), 16);
            if (isNaN(d))
                throw Error("String of HEX type contains invalid characters");
            k = (b >>> 1) + l;
            for (f = k >>> 2; a.length <= f; )
                a.push(0);
            a[f] |= d << 8 * (3 - k % 4)
        }
        return {
            value: a,
            binLen: 4 * g + c
        }
    }
    function H(e, a, c) {
        var g = [], b, d, f, k, g = a || [0];
        c = c || 0;
        d = c >>> 3;
        for (b = 0; b < e.length; b += 1)
            a = e.charCodeAt(b),
            k = b + d,
            f = k >>> 2,
            g.length <= f && g.push(0),
            g[f] |= a << 8 * (3 - k % 4);
        return {
            value: g,
            binLen: 8 * e.length + c
        }
    }
    function I(e, a, c) {
        var g = [], b = 0, d, f, k, l, h, m, g = a || [0];
        c = c || 0;
        a = c >>> 3;
        if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/))
            throw Error("Invalid character in base-64 string");
        f = e.indexOf("=");
        e = e.replace(/\=/g, "");
        if (-1 !== f && f < e.length)
            throw Error("Invalid '=' found in base-64 string");
        for (f = 0; f < e.length; f += 4) {
            h = e.substr(f, 4);
            for (k = l = 0; k < h.length; k += 1)
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(h[k]),
                l |= d << 18 - 6 * k;
            for (k = 0; k < h.length - 1; k += 1) {
                m = b + a;
                for (d = m >>> 2; g.length <= d; )
                    g.push(0);
                g[d] |= (l >>> 16 - 8 * k & 255) << 8 * (3 - m % 4);
                b += 1
            }
        }
        return {
            value: g,
            binLen: 8 * b + c
        }
    }
    function B(e, a) {
        var c = "", g = 4 * e.length, b, d;
        for (b = 0; b < g; b += 1)
            d = e[b >>> 2] >>> 8 * (3 - b % 4),
            c += "0123456789abcdef".charAt(d >>> 4 & 15) + "0123456789abcdef".charAt(d & 15);
        return a.outputUpper ? c.toUpperCase() : c
    }
    function C(e, a) {
        var c = "", g = 4 * e.length, b, d, f;
        for (b = 0; b < g; b += 3)
            for (f = b + 1 >>> 2,
            d = e.length <= f ? 0 : e[f],
            f = b + 2 >>> 2,
            f = e.length <= f ? 0 : e[f],
            f = (e[b >>> 2] >>> 8 * (3 - b % 4) & 255) << 16 | (d >>> 8 * (3 - (b + 1) % 4) & 255) << 8 | f >>> 8 * (3 - (b + 2) % 4) & 255,
            d = 0; 4 > d; d += 1)
                8 * b + 6 * d <= 32 * e.length ? c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f >>> 6 * (3 - d) & 63) : c += a.b64Pad;
        return c
    }
    function D(e) {
        var a = "", c = 4 * e.length, g, b;
        for (g = 0; g < c; g += 1)
            b = e[g >>> 2] >>> 8 * (3 - g % 4) & 255,
            a += String.fromCharCode(b);
        return a
    }
    function A(e) {
        var a = {
            outputUpper: !1,
            b64Pad: "="
        };
        e = e || {};
        a.outputUpper = e.outputUpper || !1;
        !0 === e.hasOwnProperty("b64Pad") && (a.b64Pad = e.b64Pad);
        if ("boolean" !== typeof a.outputUpper)
            throw Error("Invalid outputUpper formatting option");
        if ("string" !== typeof a.b64Pad)
            throw Error("Invalid b64Pad formatting option");
        return a
    }
    function y(e, a) {
        var c;
        switch (a) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
            break;
        default:
            throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        switch (e) {
        case "HEX":
            c = G;
            break;
        case "TEXT":
            c = function(e, b, d) {
                var f = [], c = [], l = 0, h, m, p, n, q, f = b || [0];
                b = d || 0;
                p = b >>> 3;
                if ("UTF8" === a)
                    for (h = 0; h < e.length; h += 1)
                        for (d = e.charCodeAt(h),
                        c = [],
                        128 > d ? c.push(d) : 2048 > d ? (c.push(192 | d >>> 6),
                        c.push(128 | d & 63)) : 55296 > d || 57344 <= d ? c.push(224 | d >>> 12, 128 | d >>> 6 & 63, 128 | d & 63) : (h += 1,
                        d = 65536 + ((d & 1023) << 10 | e.charCodeAt(h) & 1023),
                        c.push(240 | d >>> 18, 128 | d >>> 12 & 63, 128 | d >>> 6 & 63, 128 | d & 63)),
                        m = 0; m < c.length; m += 1) {
                            q = l + p;
                            for (n = q >>> 2; f.length <= n; )
                                f.push(0);
                            f[n] |= c[m] << 8 * (3 - q % 4);
                            l += 1
                        }
                else if ("UTF16BE" === a || "UTF16LE" === a)
                    for (h = 0; h < e.length; h += 1) {
                        d = e.charCodeAt(h);
                        "UTF16LE" === a && (m = d & 255,
                        d = m << 8 | d >>> 8);
                        q = l + p;
                        for (n = q >>> 2; f.length <= n; )
                            f.push(0);
                        f[n] |= d << 8 * (2 - q % 4);
                        l += 2
                    }
                return {
                    value: f,
                    binLen: 8 * l + b
                }
            }
            ;
            break;
        case "B64":
            c = I;
            break;
        case "BYTES":
            c = H;
            break;
        default:
            throw Error("format must be HEX, TEXT, B64, or BYTES");
        }
        return c
    }
    function r(e, a) {
        return e << a | e >>> 32 - a
    }
    function p(e, a) {
        var c = (e & 65535) + (a & 65535);
        return ((e >>> 16) + (a >>> 16) + (c >>> 16) & 65535) << 16 | c & 65535
    }
    function u(e, a, c, g, b) {
        var d = (e & 65535) + (a & 65535) + (c & 65535) + (g & 65535) + (b & 65535);
        return ((e >>> 16) + (a >>> 16) + (c >>> 16) + (g >>> 16) + (b >>> 16) + (d >>> 16) & 65535) << 16 | d & 65535
    }
    function x(e) {
        if ("SHA-1" === e)
            e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        else
            throw Error("No SHA variants supported");
        return e
    }
    function z(e, a) {
        var c = [], g, b, d, f, k, l, h;
        g = a[0];
        b = a[1];
        d = a[2];
        f = a[3];
        k = a[4];
        for (h = 0; 80 > h; h += 1)
            c[h] = 16 > h ? e[h] : r(c[h - 3] ^ c[h - 8] ^ c[h - 14] ^ c[h - 16], 1),
            l = 20 > h ? u(r(g, 5), b & d ^ ~b & f, k, 1518500249, c[h]) : 40 > h ? u(r(g, 5), b ^ d ^ f, k, 1859775393, c[h]) : 60 > h ? u(r(g, 5), b & d ^ b & f ^ d & f, k, 2400959708, c[h]) : u(r(g, 5), b ^ d ^ f, k, 3395469782, c[h]),
            k = f,
            f = d,
            d = r(b, 30),
            b = g,
            g = l;
        a[0] = p(g, a[0]);
        a[1] = p(b, a[1]);
        a[2] = p(d, a[2]);
        a[3] = p(f, a[3]);
        a[4] = p(k, a[4]);
        return a
    }
    function F(e, a, c, g) {
        var b;
        for (b = (a + 65 >>> 9 << 4) + 15; e.length <= b; )
            e.push(0);
        e[a >>> 5] |= 128 << 24 - a % 32;
        e[b] = a + c;
        c = e.length;
        for (a = 0; a < c; a += 16)
            g = z(e.slice(a, a + 16), g);
        return g
    }
    "function" === typeof define && define.amd ? define(function() {
        return t
    }) : "undefined" !== typeof exports ? "undefined" !== typeof module && module.exports ? module.exports = exports = t : exports = t : E.jsSHA = t
}
)(this);
