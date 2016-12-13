import { forwardRef, Inject, Injectable } from '@angular/core';
import { App } from '../components/app/app';
import { assert } from '../util/util';
/** @private */
export var GESTURE_GO_BACK_SWIPE = 'goback-swipe';
/** @private */
export var GESTURE_MENU_SWIPE = 'menu-swipe';
/** @private */
export var GESTURE_ITEM_SWIPE = 'item-swipe';
/** @private */
export var GESTURE_REFRESHER = 'refresher';
/** @private */
export var GESTURE_TOGGLE = 'toggle';
/**
* @private
*/
export var BLOCK_ALL = {
    disable: [GESTURE_MENU_SWIPE, GESTURE_GO_BACK_SWIPE],
    disableScroll: true
};
/**
* @private
*/
export var GestureController = (function () {
    function GestureController(_app) {
        this._app = _app;
        this.id = 1;
        this.requestedStart = {};
        this.disabledGestures = {};
        this.disabledScroll = new Set();
        this.capturedID = null;
    }
    GestureController.prototype.createGesture = function (opts) {
        if (!opts.name) {
            throw new Error('name is undefined');
        }
        return new GestureDelegate(opts.name, this.newID(), this, opts.priority || 0, !!opts.disableScroll);
    };
    GestureController.prototype.createBlocker = function (opts) {
        if (opts === void 0) { opts = {}; }
        return new BlockerDelegate(this.newID(), this, opts.disable, !!opts.disableScroll);
    };
    GestureController.prototype.newID = function () {
        var id = this.id;
        this.id++;
        return id;
    };
    GestureController.prototype.start = function (gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            delete this.requestedStart[id];
            return false;
        }
        this.requestedStart[id] = priority;
        return true;
    };
    GestureController.prototype.capture = function (gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        var requestedStart = this.requestedStart;
        var maxPriority = -10000 /* Minimun */;
        for (var gestureID in requestedStart) {
            maxPriority = Math.max(maxPriority, requestedStart[gestureID]);
        }
        if (maxPriority === priority) {
            this.capturedID = id;
            this.requestedStart = {};
            console.debug(gestureName + " captured!");
            return true;
        }
        delete requestedStart[id];
        console.debug(gestureName + " can not start because it is has lower priority");
        return false;
    };
    GestureController.prototype.release = function (id) {
        delete this.requestedStart[id];
        if (this.capturedID && id === this.capturedID) {
            this.capturedID = null;
        }
    };
    GestureController.prototype.disableGesture = function (gestureName, id) {
        var set = this.disabledGestures[gestureName];
        if (!set) {
            set = new Set();
            this.disabledGestures[gestureName] = set;
        }
        set.add(id);
    };
    GestureController.prototype.enableGesture = function (gestureName, id) {
        var set = this.disabledGestures[gestureName];
        if (set) {
            set.delete(id);
        }
    };
    GestureController.prototype.disableScroll = function (id) {
        var isEnabled = !this.isScrollDisabled();
        this.disabledScroll.add(id);
        if (this._app && isEnabled && this.isScrollDisabled()) {
            console.debug('GestureController: Disabling scrolling');
            this._app._setDisableScroll(true);
        }
    };
    GestureController.prototype.enableScroll = function (id) {
        var isDisabled = this.isScrollDisabled();
        this.disabledScroll.delete(id);
        if (this._app && isDisabled && !this.isScrollDisabled()) {
            console.debug('GestureController: Enabling scrolling');
            this._app._setDisableScroll(false);
        }
    };
    GestureController.prototype.canStart = function (gestureName) {
        if (this.capturedID) {
            console.debug(gestureName + " can not start becuse gesture was already captured");
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            console.debug(gestureName + " is disabled");
            return false;
        }
        return true;
    };
    GestureController.prototype.isCaptured = function () {
        return !!this.capturedID;
    };
    GestureController.prototype.isScrollDisabled = function () {
        return this.disabledScroll.size > 0;
    };
    GestureController.prototype.isDisabled = function (gestureName) {
        var disabled = this.disabledGestures[gestureName];
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    };
    GestureController.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GestureController.ctorParameters = [
        { type: App, decorators: [{ type: Inject, args: [forwardRef(function () { return App; }),] },] },
    ];
    return GestureController;
}());
/**
* @private
*/
export var GestureDelegate = (function () {
    function GestureDelegate(name, id, controller, priority, disableScroll) {
        this.name = name;
        this.id = id;
        this.controller = controller;
        this.priority = priority;
        this.disableScroll = disableScroll;
    }
    GestureDelegate.prototype.canStart = function () {
        if (!this.controller) {
            assert(false, 'delegate was destroyed');
            return false;
        }
        return this.controller.canStart(this.name);
    };
    GestureDelegate.prototype.start = function () {
        if (!this.controller) {
            assert(false, 'delegate was destroyed');
            return false;
        }
        return this.controller.start(this.name, this.id, this.priority);
    };
    GestureDelegate.prototype.capture = function () {
        if (!this.controller) {
            assert(false, 'delegate was destroyed');
            return false;
        }
        var captured = this.controller.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.controller.disableScroll(this.id);
        }
        return captured;
    };
    GestureDelegate.prototype.release = function () {
        if (!this.controller) {
            assert(false, 'delegate was destroyed');
            return;
        }
        this.controller.release(this.id);
        if (this.disableScroll) {
            this.controller.enableScroll(this.id);
        }
    };
    GestureDelegate.prototype.destroy = function () {
        this.release();
        this.controller = null;
    };
    return GestureDelegate;
}());
/**
* @private
*/
export var BlockerDelegate = (function () {
    function BlockerDelegate(id, controller, disable, disableScroll) {
        this.id = id;
        this.controller = controller;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.blocked = false;
    }
    BlockerDelegate.prototype.block = function () {
        var _this = this;
        if (!this.controller) {
            assert(false, 'delegate was destroyed');
            return;
        }
        if (this.disable) {
            this.disable.forEach(function (gesture) {
                _this.controller.disableGesture(gesture, _this.id);
            });
        }
        if (this.disableScroll) {
            this.controller.disableScroll(this.id);
        }
        this.blocked = true;
    };
    BlockerDelegate.prototype.unblock = function () {
        var _this = this;
        if (!this.controller) {
            assert(false, 'delegate was destroyed');
            return;
        }
        if (this.disable) {
            this.disable.forEach(function (gesture) {
                _this.controller.enableGesture(gesture, _this.id);
            });
        }
        if (this.disableScroll) {
            this.controller.enableScroll(this.id);
        }
        this.blocked = false;
    };
    BlockerDelegate.prototype.destroy = function () {
        this.unblock();
        this.controller = null;
    };
    return BlockerDelegate;
}());
//# sourceMappingURL=gesture-controller.js.map