import { Injectable, NgZone } from '@angular/core';
import { Activator } from './activator';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { assert, runInDev } from '../../util/util';
import { hasPointerMoved, pointerCoord } from '../../util/dom';
import { RippleActivator } from './ripple';
import { UIEventManager } from '../../util/ui-event-manager';
import { GestureController } from '../../gestures/gesture-controller';
/**
 * @private
 */
export var TapClick = (function () {
    function TapClick(config, app, zone, gestureCtrl) {
        this.app = app;
        this.gestureCtrl = gestureCtrl;
        this.disableClick = 0;
        this.events = new UIEventManager(false);
        var activator = config.get('activator');
        if (activator === 'ripple') {
            this.activator = new RippleActivator(app, config);
        }
        else if (activator === 'highlight') {
            this.activator = new Activator(app, config);
        }
        this.usePolyfill = config.getBoolean('tapPolyfill');
        console.debug('Using usePolyfill:', this.usePolyfill);
        this.events.listen(document, 'click', this.click.bind(this), true);
        this.pointerEvents = this.events.pointerEvents({
            element: document,
            pointerDown: this.pointerStart.bind(this),
            pointerMove: this.pointerMove.bind(this),
            pointerUp: this.pointerEnd.bind(this),
            passive: true
        });
        this.pointerEvents.mouseWait = DISABLE_NATIVE_CLICK_AMOUNT;
    }
    TapClick.prototype.pointerStart = function (ev) {
        if (this.startCoord) {
            return false;
        }
        if (!this.app.isEnabled()) {
            return false;
        }
        this.lastTouchEnd = 0;
        this.dispatchClick = true;
        var activatableEle = getActivatableTarget(ev.target);
        if (!activatableEle) {
            this.startCoord = null;
            return false;
        }
        this.startCoord = pointerCoord(ev);
        this.activator && this.activator.downAction(ev, activatableEle, this.startCoord);
        return true;
    };
    TapClick.prototype.pointerMove = function (ev) {
        assert(this.startCoord, 'startCoord must be valid');
        assert(this.dispatchClick === true, 'disableClick must be true');
        if (this.shouldCancelEvent(ev)) {
            this.pointerCancel(ev);
        }
    };
    TapClick.prototype.pointerEnd = function (ev, type) {
        var _this = this;
        assert(this.startCoord, 'startCoord must be valid');
        assert(this.dispatchClick === true, 'disableClick must be true');
        runInDev(function () { return _this.lastTouchEnd = Date.now(); });
        if (!this.startCoord) {
            return;
        }
        if (this.activator) {
            var activatableEle = getActivatableTarget(ev.target);
            if (activatableEle) {
                this.activator.upAction(ev, activatableEle, this.startCoord);
            }
        }
        if (this.usePolyfill && type === 2 /* TOUCH */ && this.app.isEnabled()) {
            this.handleTapPolyfill(ev);
        }
        this.startCoord = null;
    };
    TapClick.prototype.pointerCancel = function (ev) {
        console.debug("pointerCancel from " + ev.type + " " + Date.now());
        this.startCoord = null;
        this.dispatchClick = false;
        this.activator && this.activator.clearState(false);
        this.pointerEvents.stop();
    };
    TapClick.prototype.shouldCancelEvent = function (ev) {
        return (this.app.isScrolling() ||
            this.gestureCtrl.isCaptured() ||
            hasPointerMoved(POINTER_TOLERANCE, this.startCoord, pointerCoord(ev)));
    };
    TapClick.prototype.click = function (ev) {
        var _this = this;
        if (this.shouldCancelClick(ev)) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (this.activator) {
            // cool, a click is gonna happen, let's tell the activator
            // so the element can get the given "active" style
            var activatableEle = getActivatableTarget(ev.target);
            if (activatableEle) {
                this.activator.clickAction(ev, activatableEle, this.startCoord);
            }
        }
        runInDev(function () { return _this.profileClickDelay(ev); });
    };
    TapClick.prototype.shouldCancelClick = function (ev) {
        if (this.usePolyfill) {
            if (!ev.isIonicTap && this.isDisabledNativeClick()) {
                console.debug('click prevent: nativeClick');
                return true;
            }
        }
        else if (!this.dispatchClick) {
            console.debug('click prevent: tap-click');
            return true;
        }
        if (!this.app.isEnabled()) {
            console.debug('click prevent: appDisabled');
            return true;
        }
        if (this.gestureCtrl.isCaptured()) {
            console.debug('click prevent: tap-click (gesture is captured)');
            return true;
        }
        return false;
    };
    TapClick.prototype.profileClickDelay = function (ev) {
        if (this.lastTouchEnd) {
            var diff = Date.now() - this.lastTouchEnd;
            if (diff < 100) {
                console.debug("FAST click dispatched. Delay(ms):", diff);
            }
            else {
                console.warn("SLOW click dispatched. Delay(ms):", diff, ev);
            }
            this.lastTouchEnd = null;
        }
        else {
            console.debug('Click dispatched. Unknown delay');
        }
    };
    TapClick.prototype.handleTapPolyfill = function (ev) {
        assert(this.usePolyfill, 'this code should not be used if tapPolyfill is disabled');
        // only dispatch mouse click events from a touchend event
        // when tapPolyfill config is true, and the startCoordand endCoord
        // are not too far off from each other
        var endCoord = pointerCoord(ev);
        if (hasPointerMoved(POINTER_TOLERANCE, this.startCoord, endCoord)) {
            console.debug("click from touch prevented by pointer moved");
            return;
        }
        // prevent native mouse click events for XX amount of time
        this.disableClick = Date.now() + DISABLE_NATIVE_CLICK_AMOUNT;
        if (this.app.isScrolling()) {
            // do not fire off a click event while the app was scrolling
            console.debug("click from touch prevented by scrolling " + Date.now());
        }
        else {
            // dispatch a mouse click event
            console.debug("create click from touch " + Date.now());
            var clickEvent = document.createEvent('MouseEvents');
            clickEvent.initMouseEvent('click', true, true, window, 1, 0, 0, endCoord.x, endCoord.y, false, false, false, false, 0, null);
            clickEvent.isIonicTap = true;
            ev.target.dispatchEvent(clickEvent);
        }
    };
    TapClick.prototype.isDisabledNativeClick = function () {
        return this.disableClick > Date.now();
    };
    TapClick.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TapClick.ctorParameters = [
        { type: Config, },
        { type: App, },
        { type: NgZone, },
        { type: GestureController, },
    ];
    return TapClick;
}());
function getActivatableTarget(ele) {
    var targetEle = ele;
    for (var x = 0; x < 10; x++) {
        if (!targetEle)
            break;
        if (isActivatable(targetEle))
            return targetEle;
        targetEle = targetEle.parentElement;
    }
    return null;
}
/**
 * @private
 */
export var isActivatable = function (ele) {
    if (ACTIVATABLE_ELEMENTS.indexOf(ele.tagName) > -1) {
        return true;
    }
    for (var i = 0, l = ACTIVATABLE_ATTRIBUTES.length; i < l; i++) {
        if (ele.hasAttribute(ACTIVATABLE_ATTRIBUTES[i])) {
            return true;
        }
    }
    return false;
};
var ACTIVATABLE_ELEMENTS = ['A', 'BUTTON'];
var ACTIVATABLE_ATTRIBUTES = ['tappable', 'ion-button'];
var POINTER_TOLERANCE = 100;
var DISABLE_NATIVE_CLICK_AMOUNT = 2500;
export function setupTapClick(config, app, zone, gestureCtrl) {
    return function () {
        return new TapClick(config, app, zone, gestureCtrl);
    };
}
//# sourceMappingURL=tap-click.js.map