var win = window;
// RequestAnimationFrame Polyfill (Android 4.3 and below)
/*! @author Paul Irish */
/*! @source https://gist.github.com/paulirish/1579671 */
(function () {
    var rafLastTime = 0;
    if (!win.requestAnimationFrame) {
        win.requestAnimationFrame = function (callback) {
            var currTime = Date.now();
            var timeToCall = Math.max(0, 16 - (currTime - rafLastTime));
            var id = win.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            rafLastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!win.cancelAnimationFrame) {
        win.cancelAnimationFrame = function (id) { clearTimeout(id); };
    }
})();
// use native raf rather than the zone wrapped one
var originalRaf = (win[win['Zone']['__symbol__']('requestAnimationFrame')] || win[win['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
// if the originalRaf from the Zone symbol is not available, we need to provide the polyfilled version
export var nativeRaf = originalRaf !== undefined ? originalRaf['bind'](win) : win.requestAnimationFrame.bind(win);
// zone wrapped raf
export var raf = win.requestAnimationFrame.bind(win);
export var cancelRaf = win.cancelAnimationFrame.bind(win);
export var nativeTimeout = win[win['Zone']['__symbol__']('setTimeout')]['bind'](win);
export var clearNativeTimeout = win[win['Zone']['__symbol__']('clearTimeout')]['bind'](win);
/**
 * Run a function in an animation frame after waiting `framesToWait` frames.
 *
 * @param framesToWait number how many frames to wait
 * @param callback Function the function call to defer
 * @return Function a function to call to cancel the wait
 */
export function rafFrames(framesToWait, callback) {
    framesToWait = Math.ceil(framesToWait);
    var rafId;
    var timeoutId;
    if (framesToWait === 0) {
        callback();
    }
    else if (framesToWait < 2) {
        rafId = nativeRaf(callback);
    }
    else {
        timeoutId = nativeTimeout(function () {
            rafId = nativeRaf(callback);
        }, (framesToWait - 1) * 16.6667);
    }
    return function () {
        clearNativeTimeout(timeoutId);
        cancelRaf(raf);
    };
}
// TODO: DRY rafFrames and zoneRafFrames
export function zoneRafFrames(framesToWait, callback) {
    framesToWait = Math.ceil(framesToWait);
    if (framesToWait === 0) {
        callback();
    }
    else if (framesToWait < 2) {
        raf(callback);
    }
    else {
        setTimeout(function () {
            raf(callback);
        }, (framesToWait - 1) * 16.6667);
    }
}
export var CSS = {};
(function () {
    // transform
    var i;
    var keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform',
        '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'];
    for (i = 0; i < keys.length; i++) {
        if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transform = keys[i];
            break;
        }
    }
    // transition
    keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
    for (i = 0; i < keys.length; i++) {
        if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transition = keys[i];
            break;
        }
    }
    // The only prefix we care about is webkit for transitions.
    var isWebkit = CSS.transition.indexOf('webkit') > -1;
    // transition duration
    CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';
    // transition timing function
    CSS.transitionTimingFn = (isWebkit ? '-webkit-' : '') + 'transition-timing-function';
    // transition delay
    CSS.transitionDelay = (isWebkit ? '-webkit-' : '') + 'transition-delay';
    // To be sure transitionend works everywhere, include *both* the webkit and non-webkit events
    CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';
    // transform origin
    CSS.transformOrigin = (isWebkit ? '-webkit-' : '') + 'transform-origin';
    // animation delay
    CSS.animationDelay = (isWebkit ? 'webkitAnimationDelay' : 'animationDelay');
})();
export function transitionEnd(el, callback) {
    if (el) {
        CSS.transitionEnd.split(' ').forEach(function (eventName) {
            el.addEventListener(eventName, onEvent);
        });
        return unregister;
    }
    function unregister() {
        CSS.transitionEnd.split(' ').forEach(function (eventName) {
            el.removeEventListener(eventName, onEvent);
        });
    }
    function onEvent(ev) {
        if (el === ev.target) {
            unregister();
            callback(ev);
        }
    }
}
export function ready(callback) {
    var promise = null;
    if (!callback) {
        // a callback wasn't provided, so let's return a promise instead
        promise = new Promise(function (resolve) { callback = resolve; });
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        callback();
    }
    else {
        document.addEventListener('DOMContentLoaded', completed, false);
        win.addEventListener('load', completed, false);
    }
    return promise;
    function completed() {
        document.removeEventListener('DOMContentLoaded', completed, false);
        win.removeEventListener('load', completed, false);
        callback();
    }
}
export function windowLoad(callback) {
    var promise = null;
    if (!callback) {
        // a callback wasn't provided, so let's return a promise instead
        promise = new Promise(function (resolve) { callback = resolve; });
    }
    if (document.readyState === 'complete') {
        callback();
    }
    else {
        win.addEventListener('load', completed, false);
    }
    return promise;
    function completed() {
        win.removeEventListener('load', completed, false);
        callback();
    }
}
export function pointerCoord(ev) {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        var pageX = ev.pageX;
        if (pageX !== undefined) {
            return { x: pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
export function hasPointerMoved(threshold, startCoord, endCoord) {
    if (startCoord && endCoord) {
        var deltaX = (startCoord.x - endCoord.x);
        var deltaY = (startCoord.y - endCoord.y);
        var distance = deltaX * deltaX + deltaY * deltaY;
        return distance > (threshold * threshold);
    }
    return false;
}
export function isActive(ele) {
    return !!(ele && (document.activeElement === ele));
}
export function hasFocus(ele) {
    return isActive(ele) && (ele.parentElement.querySelector(':focus') === ele);
}
export function isTextInput(ele) {
    return !!ele &&
        (ele.tagName === 'TEXTAREA' ||
            ele.contentEditable === 'true' ||
            (ele.tagName === 'INPUT' && !(NON_TEXT_INPUT_REGEX.test(ele.type))));
}
export var NON_TEXT_INPUT_REGEX = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i;
export function hasFocusedTextInput() {
    var ele = document.activeElement;
    if (isTextInput(ele)) {
        return (ele.parentElement.querySelector(':focus') === ele);
    }
    return false;
}
export function focusOutActiveElement() {
    var activeElement = document.activeElement;
    activeElement && activeElement.blur && activeElement.blur();
}
var skipInputAttrsReg = /^(value|checked|disabled|type|class|style|id|autofocus|autocomplete|autocorrect)$/i;
export function copyInputAttributes(srcElement, destElement) {
    // copy attributes from one element to another
    // however, skip over a few of them as they're already
    // handled in the angular world
    var attrs = srcElement.attributes;
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!skipInputAttrsReg.test(attr.name)) {
            destElement.setAttribute(attr.name, attr.value);
        }
    }
}
/**
 * Get the element offsetWidth and offsetHeight. Values are cached
 * to reduce DOM reads. Cache is cleared on a window resize.
 */
export function getDimensions(ele, id) {
    var dimensions = dimensionCache[id];
    if (!dimensions) {
        // make sure we got good values before caching
        if (ele.offsetWidth && ele.offsetHeight) {
            dimensions = dimensionCache[id] = {
                width: ele.offsetWidth,
                height: ele.offsetHeight,
                left: ele.offsetLeft,
                top: ele.offsetTop
            };
        }
        else {
            // do not cache bad values
            return { width: 0, height: 0, left: 0, top: 0 };
        }
    }
    return dimensions;
}
export function clearDimensions(id) {
    delete dimensionCache[id];
}
export function windowDimensions() {
    if (!dimensionCache.win) {
        // make sure we got good values before caching
        if (win.innerWidth && win.innerHeight) {
            dimensionCache.win = {
                width: win.innerWidth,
                height: win.innerHeight
            };
        }
        else {
            // do not cache bad values
            return { width: 0, height: 0 };
        }
    }
    return dimensionCache.win;
}
export function flushDimensionCache() {
    dimensionCache = {};
}
var dimensionCache = {};
//# sourceMappingURL=dom.js.map