import { assert } from './util';
// Test via a getter in the options object to see if the passive property is accessed
var supportsOptions = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            supportsOptions = true;
        }
    });
    window.addEventListener('test', null, opts);
}
catch (e) { }
export function eventOptions(useCapture, usePassive) {
    if (useCapture === void 0) { useCapture = false; }
    if (usePassive === void 0) { usePassive = false; }
    if (supportsOptions && usePassive) {
        return {
            capture: useCapture,
            passive: usePassive
        };
    }
    return useCapture;
}
/**
 * @private
 */
export var PointerEvents = (function () {
    function PointerEvents(ele, pointerDown, pointerMove, pointerUp, zone, option) {
        this.ele = ele;
        this.pointerDown = pointerDown;
        this.pointerMove = pointerMove;
        this.pointerUp = pointerUp;
        this.zone = zone;
        this.option = option;
        this.rmTouchStart = null;
        this.rmTouchMove = null;
        this.rmTouchEnd = null;
        this.rmTouchCancel = null;
        this.rmMouseStart = null;
        this.rmMouseMove = null;
        this.rmMouseUp = null;
        this.lastTouchEvent = 0;
        this.mouseWait = 2 * 1000;
        this.lastEventType = 0 /* UNDEFINED */;
        assert(ele, 'element can not be null');
        assert(pointerDown, 'pointerDown can not be null');
        this.bindTouchEnd = this.handleTouchEnd.bind(this);
        this.bindMouseUp = this.handleMouseUp.bind(this);
        this.rmTouchStart = listenEvent(ele, 'touchstart', zone, option, this.handleTouchStart.bind(this));
        this.rmMouseStart = listenEvent(ele, 'mousedown', zone, option, this.handleMouseDown.bind(this));
    }
    PointerEvents.prototype.handleTouchStart = function (ev) {
        assert(this.ele, 'element can not be null');
        assert(this.pointerDown, 'pointerDown can not be null');
        this.lastTouchEvent = Date.now() + this.mouseWait;
        this.lastEventType = 2 /* TOUCH */;
        if (!this.pointerDown(ev, 2 /* TOUCH */)) {
            return;
        }
        if (!this.rmTouchMove && this.pointerMove) {
            this.rmTouchMove = listenEvent(this.ele, 'touchmove', this.zone, this.option, this.pointerMove);
        }
        if (!this.rmTouchEnd) {
            this.rmTouchEnd = listenEvent(this.ele, 'touchend', this.zone, this.option, this.bindTouchEnd);
        }
        if (!this.rmTouchCancel) {
            this.rmTouchCancel = listenEvent(this.ele, 'touchcancel', this.zone, this.option, this.bindTouchEnd);
        }
    };
    PointerEvents.prototype.handleMouseDown = function (ev) {
        assert(this.ele, 'element can not be null');
        assert(this.pointerDown, 'pointerDown can not be null');
        if (this.lastTouchEvent > Date.now()) {
            console.debug('mousedown event dropped because of previous touch');
            return;
        }
        this.lastEventType = 1 /* MOUSE */;
        if (!this.pointerDown(ev, 1 /* MOUSE */)) {
            return;
        }
        if (!this.rmMouseMove && this.pointerMove) {
            this.rmMouseMove = listenEvent(document, 'mousemove', this.zone, this.option, this.pointerMove);
        }
        if (!this.rmMouseUp) {
            this.rmMouseUp = listenEvent(document, 'mouseup', this.zone, this.option, this.bindMouseUp);
        }
    };
    PointerEvents.prototype.handleTouchEnd = function (ev) {
        this.stopTouch();
        this.pointerUp && this.pointerUp(ev, 2 /* TOUCH */);
    };
    PointerEvents.prototype.handleMouseUp = function (ev) {
        this.stopMouse();
        this.pointerUp && this.pointerUp(ev, 1 /* MOUSE */);
    };
    PointerEvents.prototype.stopTouch = function () {
        this.rmTouchMove && this.rmTouchMove();
        this.rmTouchEnd && this.rmTouchEnd();
        this.rmTouchCancel && this.rmTouchCancel();
        this.rmTouchMove = null;
        this.rmTouchEnd = null;
        this.rmTouchCancel = null;
    };
    PointerEvents.prototype.stopMouse = function () {
        this.rmMouseMove && this.rmMouseMove();
        this.rmMouseUp && this.rmMouseUp();
        this.rmMouseMove = null;
        this.rmMouseUp = null;
    };
    PointerEvents.prototype.stop = function () {
        this.stopTouch();
        this.stopMouse();
    };
    PointerEvents.prototype.destroy = function () {
        this.rmTouchStart && this.rmTouchStart();
        this.rmTouchStart = null;
        this.rmMouseStart && this.rmMouseStart();
        this.rmMouseStart = null;
        this.stop();
        this.pointerDown = null;
        this.pointerMove = null;
        this.pointerUp = null;
        this.ele = null;
    };
    return PointerEvents;
}());
/**
 * @private
 */
export var UIEventManager = (function () {
    function UIEventManager(zoneWrapped) {
        if (zoneWrapped === void 0) { zoneWrapped = true; }
        this.zoneWrapped = zoneWrapped;
        this.events = [];
    }
    UIEventManager.prototype.pointerEvents = function (config) {
        var element = config.element;
        if (!element) {
            element = config.elementRef.nativeElement;
        }
        if (!element || !config.pointerDown) {
            console.error('PointerEvents config is invalid');
            return;
        }
        var zone = config.zone || this.zoneWrapped;
        var opts;
        if (supportsOptions) {
            opts = {};
            if (config.passive === true) {
                opts.passive = true;
            }
            if (config.capture === true) {
                opts.capture = true;
            }
        }
        else {
            if (config.passive === true) {
                console.debug('passive event listeners are not supported by this browser');
            }
            if (config.capture === true) {
                opts = true;
            }
        }
        var pointerEvents = new PointerEvents(element, config.pointerDown, config.pointerMove, config.pointerUp, zone, opts);
        var removeFunc = function () { return pointerEvents.destroy(); };
        this.events.push(removeFunc);
        return pointerEvents;
    };
    UIEventManager.prototype.listenRef = function (ref, eventName, callback, option) {
        return this.listen(ref.nativeElement, eventName, callback, option);
    };
    UIEventManager.prototype.listen = function (element, eventName, callback, option) {
        if (option === void 0) { option = false; }
        if (!element) {
            return;
        }
        var removeFunc = listenEvent(element, eventName, this.zoneWrapped, option, callback);
        this.events.push(removeFunc);
        return removeFunc;
    };
    UIEventManager.prototype.unlistenAll = function () {
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            event_1();
        }
        this.events.length = 0;
    };
    return UIEventManager;
}());
export function listenEvent(ele, eventName, zoneWrapped, option, callback) {
    var rawEvent = (!zoneWrapped && !!ele.__zone_symbol__addEventListener);
    if (rawEvent) {
        ele.__zone_symbol__addEventListener(eventName, callback, option);
        assert(!!ele.__zone_symbol__removeEventListener, 'native removeEventListener does not exist');
        return function () { return ele.__zone_symbol__removeEventListener(eventName, callback, option); };
    }
    ele.addEventListener(eventName, callback, option);
    return function () { return ele.removeEventListener(eventName, callback, option); };
}
//# sourceMappingURL=ui-event-manager.js.map