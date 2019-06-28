"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ionic_site_components_core_js_1 = require("../ionic-site-components.core.js");
var _gsScope = "undefined" != typeof window ? window : "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : {}, TweenLite = function (t) { var e = {}, i = t.document, s = t.GreenSockGlobals = t.GreenSockGlobals || t; if (s.TweenLite)
    return s.TweenLite; var n, r, a, o, l, h, _, c = function (t) { var e, i = t.split("."), n = s; for (e = 0; e < i.length; e++)
    n[i[e]] = n = n[i[e]] || {}; return n; }, u = c("com.greensock"), f = function (t) { var e, i = [], s = t.length; for (e = 0; e !== s; i.push(t[e++]))
    ; return i; }, p = function () { }, m = (h = Object.prototype.toString, _ = h.call([]), function (t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && h.call(t) === _); }), d = {}, v = function (t, i, n, r) { this.sc = d[t] ? d[t].sc : [], d[t] = this, this.gsClass = null, this.func = n; var a = []; this.check = function (o) { for (var l, h, _, u, f = i.length, p = f; --f > -1;)
    (l = d[i[f]] || new v(i[f], [])).gsClass ? (a[f] = l.gsClass, p--) : o && l.sc.push(this); if (0 === p && n)
    for (_ = (h = ("com.greensock." + t).split(".")).pop(), u = c(h.join("."))[_] = this.gsClass = n.apply(n, a), r && (s[_] = e[_] = u), f = 0; f < this.sc.length; f++)
        this.sc[f].check(); }, this.check(!0); }, g = t._gsDefine = function (t, e, i, s) { return new v(t, e, i, s); }, T = u._class = function (t, e, i) { return e = e || function () { }, g(t, [], function () { return e; }, i), e; }; g.globals = s; var y = [0, 0, 1, 1], w = T("easing.Ease", function (t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? y.concat(e) : y; }, !0), P = w.map = {}, b = w.register = function (t, e, i, s) { for (var n, r, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
    for (r = l[h], n = s ? T("easing." + r, null, !0) : u.easing[r] || {}, a = _.length; --a > -1;)
        P[r + "." + (o = _[a])] = P[o + r] = n[o] = t.getRatio ? t : t[o] || new t; }; for ((a = w.prototype)._calcEnd = !1, a.getRatio = function (t) { if (this._func)
    return this._params[0] = t, this._func.apply(null, this._params); var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2; }, r = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --r > -1;)
    a = n[r] + ",Power" + r, b(new w(null, null, 1, r), a, "easeOut", !0), b(new w(null, null, 2, r), a, "easeIn" + (0 === r ? ",easeNone" : "")), b(new w(null, null, 3, r), a, "easeInOut"); P.linear = u.easing.Linear.easeIn, P.swing = u.easing.Quad.easeInOut; var S = T("events.EventDispatcher", function (t) { this._listeners = {}, this._eventTarget = t || this; }); (a = S.prototype).addEventListener = function (t, e, i, s, n) { n = n || 0; var r, a, h = this._listeners[t], _ = 0; for (this !== o || l || o.wake(), null == h && (this._listeners[t] = h = []), a = h.length; --a > -1;)
    (r = h[a]).c === e && r.s === i ? h.splice(a, 1) : 0 === _ && r.pr < n && (_ = a + 1); h.splice(_, 0, { c: e, s: i, up: s, pr: n }); }, a.removeEventListener = function (t, e) { var i, s = this._listeners[t]; if (s)
    for (i = s.length; --i > -1;)
        if (s[i].c === e)
            return void s.splice(i, 1); }, a.dispatchEvent = function (t) { var e, i, s, n = this._listeners[t]; if (n)
    for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)
        (s = n[e]) && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i)); }; var k = t.requestAnimationFrame, A = t.cancelAnimationFrame, C = Date.now || function () { return (new Date).getTime(); }, x = C(); for (r = (n = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !k;)
    k = t[n[r] + "RequestAnimationFrame"], A = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"]; T("Ticker", function (t, e) { var s, n, r, a, h, _ = this, c = C(), u = !(!1 === e || !k) && "auto", f = 500, m = 33, d = function (t) { var e, i, o = C() - x; o > f && (c += o - m), _.time = ((x += o) - c) / 1e3, e = _.time - h, (!s || e > 0 || !0 === t) && (_.frame++, h += e + (e >= a ? .004 : a - e), i = !0), !0 !== t && (r = n(d)), i && _.dispatchEvent("tick"); }; S.call(_), _.time = _.frame = 0, _.tick = function () { d(!0); }, _.lagSmoothing = function (t, e) { if (!arguments.length)
    return f < 1e8; f = t || 1e8, m = Math.min(e, f, 0); }, _.sleep = function () { null != r && (u && A ? A(r) : clearTimeout(r), n = p, r = null, _ === o && (l = !1)); }, _.wake = function (t) { null !== r ? _.sleep() : t ? c += -x + (x = C()) : _.frame > 10 && (x = C() - f + 5), n = 0 === s ? p : u && k ? k : function (t) { return setTimeout(t, 1e3 * (h - _.time) + 1 | 0); }, _ === o && (l = !0), d(2); }, _.fps = function (t) { if (!arguments.length)
    return s; h = this.time + (a = 1 / ((s = t) || 60)), _.wake(); }, _.useRAF = function (t) { if (!arguments.length)
    return u; _.sleep(), u = t, _.fps(s); }, _.fps(t), setTimeout(function () { "auto" === u && _.frame < 5 && "hidden" !== (i || {}).visibilityState && _.useRAF(!1); }, 1500); }), (a = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker; var R = T("core.Animation", function (t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, J) {
    l || o.wake();
    var i = this.vars.useFrames ? H : J;
    i.add(this, i._time), this.vars.paused && this.paused(!0);
} }); o = R.ticker = new u.Ticker, (a = R.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1; var D = function () { l && C() - x > 2e3 && ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) && o.wake(); var t = setTimeout(D, 2e3); t.unref && t.unref(); }; D(), a.play = function (t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1); }, a.pause = function (t, e) { return null != t && this.seek(t, e), this.paused(!0); }, a.resume = function (t, e) { return null != t && this.seek(t, e), this.paused(!1); }, a.seek = function (t, e) { return this.totalTime(Number(t), !1 !== e); }, a.restart = function (t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0); }, a.reverse = function (t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1); }, a.render = function (t, e, i) { }, a.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this; }, a.isActive = function () { var t, e = this._timeline, i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8; }, a._enabled = function (t, e) { return l || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1; }, a._kill = function (t, e) { return this._enabled(!1, !1); }, a.kill = function (t, e) { return this._kill(t, e), this; }, a._uncache = function (t) { for (var e = t ? this : this.timeline; e;)
    e._dirty = !0, e = e.timeline; return this; }, a._swapSelfInParams = function (t) { for (var e = t.length, i = t.concat(); --e > -1;)
    "{self}" === t[e] && (i[e] = this); return i; }, a._callback = function (t) { var e = this.vars, i = e[t], s = e[t + "Params"], n = e[t + "Scope"] || e.callbackScope || this; switch (s ? s.length : 0) {
    case 0:
        i.call(n);
        break;
    case 1:
        i.call(n, s[0]);
        break;
    case 2:
        i.call(n, s[0], s[1]);
        break;
    default: i.apply(n, s);
} }, a.eventCallback = function (t, e, i, s) { if ("on" === (t || "").substr(0, 2)) {
    var n = this.vars;
    if (1 === arguments.length)
        return n[t];
    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
} return this; }, a.delay = function (t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay; }, a.duration = function (t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration); }, a.totalDuration = function (t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration; }, a.time = function (t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time; }, a.totalTime = function (t, e, i) { if (l || o.wake(), !arguments.length)
    return this._totalTime; if (this._timeline) {
    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
        this._dirty && this.totalDuration();
        var s = this._totalDuration, n = this._timeline;
        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
            for (; n._timeline;)
                n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline;
    }
    this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && W(), this.render(t, e, !1), I.length && W());
} return this; }, a.progress = a.totalProgress = function (t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio; }, a.startTime = function (t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime; }, a.endTime = function (t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale; }, a.timeScale = function (t) { if (!arguments.length)
    return this._timeScale; var e, i; for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;)
    i._dirty = !0, i.totalDuration(), i = i.timeline; return this; }, a.reversed = function (t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed; }, a.paused = function (t) { if (!arguments.length)
    return this._paused; var e, i, s = this._timeline; return t != this._paused && s && (l || t || o.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, e === this._totalTime, !0)), this._gc && !t && this._enabled(!0, !1), this; }; var E = T("core.SimpleTimeline", function (t) { R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0; }); (a = E.prototype = new R).constructor = E, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (t, e, i, s) { var n, r; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
    for (r = t._startTime; n && n._startTime > r;)
        n = n._prev; return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this; }, a._remove = function (t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this; }, a.render = function (t, e, i) { var s, n = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; n;)
    s = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i), n = s; }, a.rawTime = function () { return l || o.wake(), this._totalTime; }; var L = T("TweenLite", function (e, i, s) { if (R.call(this, i, s), this.render = L.prototype.render, null == e)
    throw "Cannot tween a null target."; this.target = e = "string" != typeof e ? e : L.selector(e) || e; var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite; if (this._overwrite = l = null == l ? Y[L.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
    for (this._targets = a = f(e), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++)
        (r = a[n]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(f(r))) : (this._siblings[n] = X(r, this, !1), 1 === l && this._siblings[n].length > 1 && tt(r, this, null, 1, this._siblings[n])) : "string" == typeof (r = a[n--] = L.selector(r)) && a.splice(n + 1, 1) : a.splice(n--, 1);
else
    this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay))); }, !0), O = function (e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType); }; (a = L.prototype = new R).constructor = L, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, L.version = "2.1.2", L.defaultEase = a._ease = new w(null, null, 1, 1), L.defaultOverwrite = "auto", L.ticker = o, L.autoSleep = 120, L.lagSmoothing = function (t, e) { o.lagSmoothing(t, e); }, L.selector = t.$ || t.jQuery || function (e) { var s = t.$ || t.jQuery; return s ? (L.selector = s, s(e)) : (i || (i = t.document), i ? i.querySelectorAll ? i.querySelectorAll(e) : i.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e); }; var I = [], z = {}, F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, $ = /[\+-]=-?[\.\d]/, U = function (t) { for (var e, i = this._firstPT; i;)
    e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next; }, N = function (t) { return (1e3 * t | 0) / 1e3 + ""; }, j = function (t, e, i, s) { var n, r, a, o, l, h, _, c = [], u = 0, f = "", p = 0; for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, n = t.match(F) || [], r = e.match(F) || [], s && (s._next = null, s.blob = 1, c._firstPT = c._applyPT = s), l = r.length, o = 0; o < l; o++)
    f += (h = e.substr(u, e.indexOf(_ = r[o], u) - u)) || !o ? h : ",", u += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === n[o] || n.length <= o ? f += _ : (f && (c.push(f), f = ""), a = parseFloat(n[o]), c.push(a), c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: a, c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0, f: 0, m: p && p < 4 ? Math.round : N }), u += _.length; return (f += e.substr(u)) && c.push(f), c.setRatio = U, $.test(e) && (c.end = null), c; }, G = function (t, e, i, s, n, r, a, o, l) { "function" == typeof s && (s = s(l || 0, t)); var h = typeof t[e], _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), c = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e], u = "string" == typeof s && "=" === s.charAt(1), f = { t: t, p: e, s: c, f: "function" === h, pg: 0, n: n || e, m: r ? "function" == typeof r ? r : Math.round : 0, pr: 0, c: u ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - c || 0 }; if (("number" != typeof c || "number" != typeof s && !u) && (a || isNaN(c) || !u && isNaN(s) || "boolean" == typeof c || "boolean" == typeof s ? (f.fp = a, f = { t: j(c, u ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : s, o || L.defaultStringFilter, f), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }) : (f.s = parseFloat(c), u || (f.c = parseFloat(s) - f.s || 0))), f.c)
    return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f; }, q = L._internals = { isArray: m, isSelector: O, lazyTweens: I, blobDif: j }, M = L._plugins = {}, Q = q.tweenLookup = {}, B = 0, K = q.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 }, Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 }, H = R._rootFramesTimeline = new E, J = R._rootTimeline = new E, V = 30, W = q.lazyRender = function () { var t, e, i = I.length; for (z = {}, t = 0; t < i; t++)
    (e = I[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1); I.length = 0; }; J._startTime = o.time, H._startTime = o.frame, J._active = H._active = !0, setTimeout(W, 1), R._updateRoot = L.render = function () { var t, e, i; if (I.length && W(), J.render((o.time - J._startTime) * J._timeScale, !1, !1), H.render((o.frame - H._startTime) * H._timeScale, !1, !1), I.length && W(), o.frame >= V) {
    for (i in V = o.frame + (parseInt(L.autoSleep, 10) || 120), Q) {
        for (t = (e = Q[i].tweens).length; --t > -1;)
            e[t]._gc && e.splice(t, 1);
        0 === e.length && delete Q[i];
    }
    if ((!(i = J._first) || i._paused) && L.autoSleep && !H._first && 1 === o._listeners.tick.length) {
        for (; i && i._paused;)
            i = i._next;
        i || o.sleep();
    }
} }, o.addEventListener("tick", R._updateRoot); var X = function (t, e, i) { var s, n, r = t._gsTweenID; if (Q[r || (t._gsTweenID = r = "t" + B++)] || (Q[r] = { target: t, tweens: [] }), e && ((s = Q[r].tweens)[n = s.length] = e, i))
    for (; --n > -1;)
        s[n] === e && s.splice(n, 1); return Q[r].tweens; }, Z = function (t, e, i, s) { var n, r, a = t.vars.onOverwrite; return a && (n = a(t, e, i, s)), (a = L.onOverwrite) && (r = a(t, e, i, s)), !1 !== n && !1 !== r; }, tt = function (t, e, i, s, n) { var r, a, o, l; if (1 === s || s >= 4) {
    for (l = n.length, r = 0; r < l; r++)
        if ((o = n[r]) !== e)
            o._gc || o._kill(null, t, e) && (a = !0);
        else if (5 === s)
            break;
    return a;
} var h, _ = e._startTime + 1e-8, c = [], u = 0, f = 0 === e._duration; for (r = n.length; --r > -1;)
    (o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || et(e, 0, f), 0 === et(o, h, f) && (c[u++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((f || !o._initted) && _ - o._startTime <= 2e-8 || (c[u++] = o))); for (r = u; --r > -1;)
    if (l = (o = c[r])._firstPT, 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted && l) {
        if (2 !== s && !Z(o, e))
            continue;
        o._enabled(!1, !1) && (a = !0);
    } return a; }, et = function (t, e, i) { for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
    if (r += s._startTime, n *= s._timeScale, s._paused)
        return -100;
    s = s._timeline;
} return (r /= n) > e ? r - e : i && r === e || !t._initted && r - e < 2e-8 ? 1e-8 : (r += t.totalDuration() / t._timeScale / n) > e + 1e-8 ? 0 : r - e - 1e-8; }; a._init = function () { var t, e, i, s, n, r, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, _ = a.ease, c = this._startAt; if (a.startAt) {
    for (s in c && (c.render(-1, !0), c.kill()), n = {}, a.startAt)
        n[s] = a.startAt[s];
    if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== a.lazy, n.startAt = n.delay = null, n.onUpdate = a.onUpdate, n.onUpdateParams = a.onUpdateParams, n.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = L.to(this.target || {}, 0, n), h)
        if (this._time > 0)
            this._startAt = null;
        else if (0 !== l)
            return;
}
else if (a.runBackwards && 0 !== l)
    if (c)
        c.render(-1, !0), c.kill(), this._startAt = null;
    else {
        for (s in 0 !== this._time && (h = !1), i = {}, a)
            K[s] && "autoCSS" !== s || (i[s] = a[s]);
        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = L.to(this.target, 0, i), h) {
            if (0 === this._time)
                return;
        }
        else
            this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
    } if (this._ease = _ = _ ? _ instanceof w ? _ : "function" == typeof _ ? new w(_, a.easeParams) : P[_] || L.defaultEase : L.defaultEase, a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
    for (r = this._targets.length, t = 0; t < r; t++)
        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
else
    e = this._initProps(this.target, this._propLookup, this._siblings, o, 0); if (e && L._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
    for (i = this._firstPT; i;)
        i.s += i.c, i.c = -i.c, i = i._next; this._onUpdate = a.onUpdate, this._initted = !0; }, a._initProps = function (e, i, s, n, r) { var a, o, l, h, _, c; if (null == e)
    return !1; for (a in z[e._gsTweenID] && W(), this.vars.css || e.style && e !== t && e.nodeType && M.css && !1 !== this.vars.autoCSS && function (t, e) { var i, s = {}; for (i in t)
    K[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!M[i] || M[i] && M[i]._autoCSS) || (s[i] = t[i], delete t[i]); t.css = s; }(this.vars, e), this.vars)
    if (c = this.vars[a], K[a])
        c && (c instanceof Array || c.push && m(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
    else if (M[a] && (h = new M[a])._onInitTween(e, this.vars[a], this, r)) {
        for (this._firstPT = _ = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: h._priority, m: 0 }, o = h._overwriteProps.length; --o > -1;)
            i[h._overwriteProps[o]] = this._firstPT;
        (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), _._next && (_._next._prev = _);
    }
    else
        i[a] = G.call(this, e, a, "get", c, a, 0, null, this.vars.stringFilter, r); return n && this._kill(n, e) ? this._initProps(e, i, s, n, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && tt(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), l); }, a.render = function (t, e, i) { var s, n, r, a, o = this._time, l = this._duration, h = this._rawPrevTime; if (t >= l - 1e-8 && t >= 0)
    this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-8 && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
else if (t < 1e-8)
    this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
else if (this._totalTime = this._time = t, this._easeType) {
    var _ = t / l, c = this._easeType, u = this._easePower;
    (1 === c || 3 === c && _ >= .5) && (_ = 1 - _), 3 === c && (_ *= 2), 1 === u ? _ *= _ : 2 === u ? _ *= _ * _ : 3 === u ? _ *= _ * _ * _ : 4 === u && (_ *= _ * _ * _ * _), this.ratio = 1 === c ? 1 - _ : 2 === c ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2;
}
else
    this.ratio = this._ease.getRatio(t / l); if (this._time !== o || i) {
    if (!this._initted) {
        if (this._init(), !this._initted || this._gc)
            return;
        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
            return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void (this._lazy = [t, e]);
        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
    }
    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), r = this._firstPT; r;)
        r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), n && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)));
} }, a._kill = function (t, e, i) { if ("all" === t && (t = null), null == t && (null == e || e === this.target))
    return this._lazy = !1, this._enabled(!1, !1); e = "string" != typeof e ? e || this._targets || this.target : L.selector(e) || e; var s, n, r, a, o, l, h, _, c, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, f = this._firstPT; if ((m(e) || O(e)) && "number" != typeof e[0])
    for (s = e.length; --s > -1;)
        this._kill(t, e[s], i) && (l = !0);
else {
    if (this._targets) {
        for (s = this._targets.length; --s > -1;)
            if (e === this._targets[s]) {
                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                break;
            }
    }
    else {
        if (e !== this.target)
            return !1;
        o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
    }
    if (o) {
        if (h = t || o, _ = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (L.onOverwrite || this.vars.onOverwrite)) {
            for (r in h)
                o[r] && (c || (c = []), c.push(r));
            if ((c || !t) && !Z(this, i, e, c))
                return !1;
        }
        for (r in h)
            (a = o[r]) && (u && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), _ && (n[r] = 1);
        !this._firstPT && this._initted && f && this._enabled(!1, !1);
    }
} return l; }, a.invalidate = function () { this._notifyPluginsOfEnabled && L._onPluginEvent("_onDisable", this); var t = this._time; return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this; }, a._enabled = function (t, e) { if (l || o.wake(), t && this._gc) {
    var i, s = this._targets;
    if (s)
        for (i = s.length; --i > -1;)
            this._siblings[i] = X(s[i], this, !0);
    else
        this._siblings = X(this.target, this, !0);
} return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && L._onPluginEvent(t ? "_onEnable" : "_onDisable", this); }, L.to = function (t, e, i) { return new L(t, e, i); }, L.from = function (t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new L(t, e, i); }, L.fromTo = function (t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new L(t, e, s); }, L.delayedCall = function (t, e, i, s, n) { return new L(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: s, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }); }, L.set = function (t, e) { return new L(t, 0, e); }, L.getTweensOf = function (t, e) { if (null == t)
    return []; var i, s, n, r; if (t = "string" != typeof t ? t : L.selector(t) || t, (m(t) || O(t)) && "number" != typeof t[0]) {
    for (i = t.length, s = []; --i > -1;)
        s = s.concat(L.getTweensOf(t[i], e));
    for (i = s.length; --i > -1;)
        for (r = s[i], n = i; --n > -1;)
            r === s[n] && s.splice(i, 1);
}
else if (t._gsTweenID)
    for (i = (s = X(t).concat()).length; --i > -1;)
        (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1); return s || []; }, L.killTweensOf = L.killDelayedCallsTo = function (t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = L.getTweensOf(t, e), n = s.length; --n > -1;)
    s[n]._kill(i, t); }; var it = T("plugins.TweenPlugin", function (t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype; }, !0); if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = G, a.setRatio = U, a._kill = function (t) { var e, i = this._overwriteProps, s = this._firstPT; if (null != t[this._propName])
    this._overwriteProps = [];
else
    for (e = i.length; --e > -1;)
        null != t[i[e]] && i.splice(e, 1); for (; s;)
    null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next; return !1; }, a._mod = a._roundProps = function (t) { for (var e, i = this._firstPT; i;)
    (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next; }, L._onPluginEvent = function (t, e) { var i, s, n, r, a, o = e._firstPT; if ("_onInitAllProps" === t) {
    for (; o;) {
        for (a = o._next, s = n; s && s.pr > o.pr;)
            s = s._next;
        (o._prev = s ? s._prev : r) ? o._prev._next = o : n = o, (o._next = s) ? s._prev = o : r = o, o = a;
    }
    o = e._firstPT = n;
} for (; o;)
    o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next; return i; }, it.activate = function (t) { for (var e = t.length; --e > -1;)
    t[e].API === it.API && (M[(new t[e])._propName] = t[e]); return !0; }, g.plugin = function (t) { if (!(t && t.propName && t.init && t.API))
    throw "illegal plugin definition."; var e, i = t.propName, s = t.priority || 0, n = t.overwriteProps, r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, a = T("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () { it.call(this, i, s), this._overwriteProps = n || []; }, !0 === t.global), o = a.prototype = new it(i); for (e in o.constructor = a, a.API = t.API, r)
    "function" == typeof t[e] && (o[r[e]] = t[e]); return a.version = t.version, it.activate([a]), a; }, n = t._gsQueue) {
    for (r = 0; r < n.length; r++)
        n[r]();
    for (a in d)
        d[a].func || t.console.log("GSAP encountered missing dependency: " + a);
} return l = !1, L; }(_gsScope), globals = _gsScope.GreenSockGlobals, nonGlobals = globals.com.greensock, SimpleTimeline = nonGlobals.core.SimpleTimeline, Animation = nonGlobals.core.Animation, Ease = globals.Ease, Linear = globals.Linear, Power1 = globals.Power1, Power2 = globals.Power2, Power3 = globals.Power3, Power4 = globals.Power4, TweenPlugin = globals.TweenPlugin, EventDispatcher = nonGlobals.events.EventDispatcher, IonicAppflowActivator = function () { function t() { this.$circles = [], this.$lis = [], this.screenshots = [], this.active = null, this.duration = 6, this.quickDuration = .25, this.r = 31, this.gsRefs = [], this.scrollPause = null, this.circumference = 2 * this.r * Math.PI, this.animationSelect = this.animationSelect.bind(this), this.animationStart = this.animationStart.bind(this); } return t.prototype.componentDidLoad = function () { var t = this; setTimeout(this.animationStart, 2e3, 0); var e = function (i, s) { t.$lis[s] = i, t.$circles[s] = i.querySelector(".progress-ring__circle"), t.screenshots[s] = i.querySelector("a").dataset.screenshot, i.nextElementSibling && "LI" === i.nextElementSibling.nodeName && e(i.nextElementSibling, s + 1); }; e(this.el.querySelector("li:nth-child(1)"), 0), this.active = 0; }, t.prototype.animationStart = function (t) { var e = this; if (console.log("starting"), window.pageYOffset > 1e3)
    return console.log("pausing"), void (this.scrollPause = setTimeout(this.animationStart, 5e3, 0)); this.active = t, this.$lis[t].classList.add("active"), TweenLite.to(this.$circles[t], .4, { opacity: 1 }), TweenLite.to(this.$circles[t], this.duration, { strokeDashoffset: 0, onCompleteScope: this, onComplete: function () { e.animationStart(t >= e.$circles.length - 1 ? 0 : t + 1), e.$lis[t].classList.remove("active"), TweenLite.to(e.$circles[t], .2, { opacity: 0, onCompleteScope: e, onComplete: function () { TweenLite.to(e.$circles[t], 0, { strokeDashoffset: e.circumference, lazy: !0 }); } }); } }); }, t.prototype.animationSelect = function (t) { var e = this; this.$lis[t].classList.add("active"), this.active = t, this.scrollPause && clearTimeout(this.scrollPause), this.animationStopOthers(t), TweenLite.to(this.$circles[t], this.quickDuration, { strokeDashoffset: 0, opacity: 1, onCompleteScope: this, onComplete: function () { e.animationStopOthers(t); } }); }, t.prototype.animationRestart = function (t) { var e = this; this.animationStopOthers(t), TweenLite.to(this.$circles[t], .5, { strokeDashoffset: -1 * this.circumference, lazy: !0, onCompleteScope: this, onComplete: function () { TweenLite.to(e.$circles[t], 0, { strokeDashoffset: e.circumference, opacity: 0, lazy: !0, onCompleteScope: e, onComplete: function () { e.animationStart(t); } }); } }); }, t.prototype.animationStopOthers = function (t) { var e = this, i = []; this.$circles.forEach(function (s, n) { n != t && (i.push(s), e.$lis[n].classList.remove("active")); }), TweenLite.to(i, .2, { opacity: 0, lazy: !0, onCompleteScope: this, onComplete: function () { TweenLite.to(i, 0, { strokeDashoffset: e.circumference, opacity: 0, lazy: !0 }); } }); }, t.prototype.circle = function (t) { return void 0 === t && (t = 0), ionic_site_components_core_js_1.h("svg", { class: "progress-ring", height: "64", width: "64" }, ionic_site_components_core_js_1.h("circle", { class: "progress-ring__circle", stroke: "#6C89F7", "stroke-width": "2", fill: "transparent", r: this.r, cx: "32", cy: "32", style: { strokeDasharray: this.circumference + " " + this.circumference, strokeDashoffset: this.circumference - t / 100 * this.circumference } })); }, t.prototype.render = function () { var t = this; return [ionic_site_components_core_js_1.h("div", { class: "app-screenshot" }, this.screenshots.map(function (e, i) { return ionic_site_components_core_js_1.h("img", { class: i === t.active ? "active" : "inactive", src: e }); })), ionic_site_components_core_js_1.h("nav", null, ionic_site_components_core_js_1.h("ul", null, ionic_site_components_core_js_1.h("li", { onMouseEnter: function () { return t.animationSelect(0); }, onMouseLeave: function () { return t.animationRestart(0); } }, this.circle(), ionic_site_components_core_js_1.h("slot", { name: "1" })), ionic_site_components_core_js_1.h("li", { onMouseEnter: function () { return t.animationSelect(1); }, onMouseLeave: function () { return t.animationRestart(1); } }, this.circle(), ionic_site_components_core_js_1.h("slot", { name: "2" })), ionic_site_components_core_js_1.h("li", { onMouseEnter: function () { return t.animationSelect(2); }, onMouseLeave: function () { return t.animationRestart(2); } }, this.circle(), ionic_site_components_core_js_1.h("slot", { name: "3" }))))]; }, Object.defineProperty(t, "is", { get: function () { return "ionic-appflow-activator"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { $circles: { state: !0 }, $lis: { state: !0 }, active: { state: !0 }, el: { elementRef: !0 }, screenshots: { state: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return "ionic-appflow-activator nav{background:#fff;position:-webkit-sticky;position:sticky;top:100px;width:100%;margin-top:100px}ionic-appflow-activator ul{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;width:600px;padding-left:10px;padding-right:10px;margin-top:-44px;margin-right:auto;margin-left:auto}ionic-appflow-activator li{width:120px;position:relative;list-style:none}ionic-appflow-activator .progress-ring{position:absolute;top:0;left:calc(50% - 32px);pointer-events:none}ionic-appflow-activator .progress-ring__circle{opacity:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}ionic-appflow-activator a{text-align:center;display:block;padding-top:64px;cursor:pointer}ionic-appflow-activator a .icon,ionic-appflow-activator a .icon-active{position:absolute;border-radius:50%;height:56px;width:56px;top:4px;left:calc(50% - 28px);-webkit-transition:opacity .2s ease,transform .2s ease;transition:opacity .2s ease,transform .2s ease}ionic-appflow-activator a .icon-active{opacity:0;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:opacity .2s ease,transform .2s ease;transition:opacity .2s ease,transform .2s ease}ionic-appflow-activator a span{font-size:14px;line-height:22px;text-align:center;letter-spacing:.06em;text-transform:uppercase;font-weight:600;color:#92a1b3;-webkit-transition:color .2s ease;transition:color .2s ease}ionic-appflow-activator .active .icon{-webkit-transform:scale(1.1);transform:scale(1.1);opacity:0}ionic-appflow-activator .active .icon-active{opacity:1;-webkit-transform:scale(1);transform:scale(1)}ionic-appflow-activator .active span{color:#6c89f7}ionic-appflow-activator .app-screenshot{position:relative}ionic-appflow-activator .app-screenshot img{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;-webkit-transform:scale(1.01);transform:scale(1.01);-webkit-transition:opacity .2s ease,transform .2s ease;transition:opacity .2s ease,transform .2s ease}ionic-appflow-activator .app-screenshot img.active{opacity:1;-webkit-transform:none;transform:none}\@-webkit-keyframes full-circle{to{stroke-dashoffset:0}}\@keyframes full-circle{to{stroke-dashoffset:0}}"; }, enumerable: !0, configurable: !0 }), t; }();
exports.IonicAppflowActivator = IonicAppflowActivator;
