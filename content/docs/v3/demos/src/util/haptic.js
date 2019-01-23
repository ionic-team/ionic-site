import { Injectable } from '@angular/core';
import { Platform } from '../platform/platform';
/**
 * @name Haptic
 * @description
 * The `Haptic` class interacts with a haptic engine on the device, if available. Generally,
 * Ionic components use this under the hood, but you're welcome to get a bit crazy with it
 * if you fancy.
 *
 * Currently, this uses the Taptic engine on iOS.
 *
 * @usage
 * ```ts
 * export class MyClass{
 *  constructor(haptic: Haptic){
 *    haptic.selection();
 *  }
 * }
 *
 * ```
 */
export var Haptic = (function () {
    function Haptic(platform) {
        var _this = this;
        if (platform) {
            platform.ready().then(function () {
                _this.plugin = window.TapticEngine;
            });
        }
    }
    /**
     * Check to see if the Haptic Plugin is available
     * @return {boolean} Retuns true or false if the plugin is available
     *
     */
    Haptic.prototype.available = function () {
        return !!this.plugin;
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events (not for gestures)
     */
    Haptic.prototype.selection = function () {
        if (!this.plugin) {
            return;
        }
        this.plugin.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */
    Haptic.prototype.gestureSelectionStart = function () {
        if (!this.plugin) {
            return;
        }
        this.plugin.gestureSelectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */
    Haptic.prototype.gestureSelectionChanged = function () {
        if (!this.plugin) {
            return;
        }
        this.plugin.gestureSelectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */
    Haptic.prototype.gestureSelectionEnd = function () {
        if (!this.plugin) {
            return;
        }
        this.plugin.gestureSelectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ type: 'success' }` (or `warning`/`error`)
     */
    Haptic.prototype.notification = function (options) {
        if (!this.plugin) {
            return;
        }
        this.plugin.notification(options);
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */
    Haptic.prototype.impact = function (options) {
        if (!this.plugin) {
            return;
        }
        this.plugin.impact(options);
    };
    Haptic.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Haptic.ctorParameters = [
        { type: Platform, },
    ];
    return Haptic;
}());
//# sourceMappingURL=haptic.js.map