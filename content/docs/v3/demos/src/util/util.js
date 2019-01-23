/**
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
export function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
/**
 * The assign() method is used to copy the values of all enumerable own
 * properties from one or more source objects to a target object. It will
 * return the target object. When available, this method will use
 * `Object.assign()` under-the-hood.
 * @param target  The target object
 * @param source(s)  The source object
 */
export function assign() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    if (typeof Object.assign !== 'function') {
        // use the old-school shallow extend method
        return _baseExtend(args[0], [].slice.call(args, 1), false);
    }
    // use the built in ES6 Object.assign method
    return Object.assign.apply(null, args);
}
/**
 * Do a deep extend (merge).
 * @param dst the destination
 * @param ... the param objects
 */
export function merge(dst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return _baseExtend(dst, [].slice.call(arguments, 1), true);
}
function _baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!obj || !isObject(obj) && !isFunction(obj))
            continue;
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (deep && isObject(src)) {
                if (!isObject(dst[key]))
                    dst[key] = isArray(src) ? [] : {};
                _baseExtend(dst[key], [src], true);
            }
            else {
                dst[key] = src;
            }
        }
    }
    return dst;
}
export function debounce(fn, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout, args, context, timestamp, result;
    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var later = function () {
            var last = Date.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate)
                    result = fn.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow)
            result = fn.apply(context, args);
        return result;
    };
}
/**
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */
export function defaults(dest) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i];
        if (source) {
            for (var key in source) {
                if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
export var isBoolean = function (val) { return typeof val === 'boolean'; };
export var isString = function (val) { return typeof val === 'string'; };
export var isNumber = function (val) { return typeof val === 'number'; };
export var isFunction = function (val) { return typeof val === 'function'; };
export var isDefined = function (val) { return typeof val !== 'undefined'; };
export var isUndefined = function (val) { return typeof val === 'undefined'; };
export var isPresent = function (val) { return val !== undefined && val !== null; };
export var isBlank = function (val) { return val === undefined || val === null; };
export var isObject = function (val) { return typeof val === 'object'; };
export var isArray = Array.isArray;
export var isPrimitive = function (val) {
    return isString(val) || isBoolean(val) || (isNumber(val) && !isNaN(val));
};
export var isTrueProperty = function (val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
};
export var isCheckedProperty = function (a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
};
/**
 * @private
 */
export function reorderArray(array, indexes) {
    var element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
}
/**
 * @private
 */
export function removeArrayItem(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}
/**
 * @private
 */
export function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    var shouldClose = (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
    return shouldClose;
}
var ASSERT_ENABLED = true;
/**
 * @private
 */
function _runInDev(fn) {
    if (ASSERT_ENABLED === true) {
        return fn();
    }
}
function _assert(actual, reason) {
    if (!actual && ASSERT_ENABLED === true) {
        var message = 'IONIC ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}
export { _assert as assert };
export { _runInDev as runInDev };
//# sourceMappingURL=util.js.map