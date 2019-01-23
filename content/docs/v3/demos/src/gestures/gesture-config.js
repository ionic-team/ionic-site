var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
/**
 * @private
 * This class overrides the default Angular gesture config.
 */
export var IonicGestureConfig = (function (_super) {
    __extends(IonicGestureConfig, _super);
    function IonicGestureConfig() {
        _super.apply(this, arguments);
    }
    IonicGestureConfig.prototype.buildHammer = function (element) {
        var mc = new window.Hammer(element);
        for (var eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    };
    IonicGestureConfig.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    IonicGestureConfig.ctorParameters = [];
    return IonicGestureConfig;
}(HammerGestureConfig));
//# sourceMappingURL=gesture-config.js.map