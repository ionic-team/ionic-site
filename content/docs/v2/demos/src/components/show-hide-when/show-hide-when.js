var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Attribute, Directive, NgZone } from '@angular/core';
import { Platform } from '../../platform/platform';
/**
 * @private
 */
export var DisplayWhen = (function () {
    function DisplayWhen(conditions, platform, zone) {
        var _this = this;
        this.platform = platform;
        this.zone = zone;
        this.isMatch = false;
        this.platform = platform;
        if (!conditions)
            return;
        this.conditions = conditions.split(',');
        // check if its one of the matching platforms first
        // a platform does not change during the life of an app
        for (var i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i] && platform.is(this.conditions[i])) {
                this.isMatch = true;
                return;
            }
        }
        if (this.orientation()) {
            // add window resize listener
            platform.onResize(function () {
                zone.run(function () {
                    _this.orientation();
                });
            });
            return;
        }
    }
    DisplayWhen.prototype.orientation = function () {
        for (var i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i] === 'portrait') {
                this.isMatch = this.platform.isPortrait();
                return true;
            }
            if (this.conditions[i] === 'landscape') {
                this.isMatch = this.platform.isLandscape();
                return true;
            }
        }
    };
    return DisplayWhen;
}());
/**
 *
 * @name ShowWhen
 * @description
 * The `showWhen` attribute takes a string that represents a platform or screen orientation.
 * The element the attribute is added to will only be shown when that platform or screen orientation is active.
 *
 * Complements the [hideWhen attribute](../HideWhen). If the `showWhen` attribute is used on an
 * element that also has the `hideWhen` attribute, the element will not show if `hideWhen` evaluates
 * to `true` or `showWhen` evaluates to `false`. If the `hidden` attribute is also added, the element
 * will not show if `hidden` evaluates to `true`.
 *
 * View the [Platform API docs](../../../platform/Platform) for more information on the different
 * platforms you can use.
 *
 * @usage
 * ```html
 * <div showWhen="android">
 *  I am visible on Android!
 * </div>
 *
 * <div showWhen="ios">
 *  I am visible on iOS!
 * </div>
 *
 * <div showWhen="android,ios">
 *  I am visible on Android and iOS!
 * </div>
 *
 * <div showWhen="portrait">
 *  I am visible on Portrait!
 * </div>
 *
 * <div showWhen="landscape">
 *  I am visible on Landscape!
 * </div>
 * ```
 * @demo /docs/v2/demos/src/show-when/
 * @see {@link ../HideWhen HideWhen API Docs}
 * @see {@link ../../../platform/Platform Platform API Docs}
 */
export var ShowWhen = (function (_super) {
    __extends(ShowWhen, _super);
    function ShowWhen(showWhen, platform, zone) {
        _super.call(this, showWhen, platform, zone);
    }
    ShowWhen.decorators = [
        { type: Directive, args: [{
                    selector: '[showWhen]',
                    host: {
                        '[class.hidden-show-when]': '!isMatch'
                    }
                },] },
    ];
    /** @nocollapse */
    ShowWhen.ctorParameters = [
        { type: undefined, decorators: [{ type: Attribute, args: ['showWhen',] },] },
        { type: Platform, },
        { type: NgZone, },
    ];
    return ShowWhen;
}(DisplayWhen));
/**
 * @name HideWhen
 * @description
 * The `hideWhen` attribute takes a string that represents a plaform or screen orientation.
 * The element the attribute is added to will only be hidden when that platform or screen orientation is active.
 *
 * Complements the [showWhen attribute](../ShowWhen). If the `hideWhen` attribute is used on an
 * element that also has the `showWhen` attribute, the element will not show if `hideWhen` evaluates
 * to `true` or `showWhen` evaluates to `false`. If the `hidden` attribute is also added, the element
 * will not show if `hidden` evaluates to `true`.
 *
 * View the [Platform API docs](../../../platform/Platform) for more information on the different
 * platforms you can use.
 *
 * @usage
 * ```html
 * <div hideWhen="android">
 *  I am hidden on Android!
 * </div>
 *
 * <div hideWhen="ios">
 *  I am hidden on iOS!
 * </div>
 *
 * <div hideWhen="android,ios">
 *  I am hidden on Android and iOS!
 * </div>
 *
 * <div hideWhen="portrait">
 *  I am hidden on Portrait!
 * </div>
 *
 * <div hideWhen="landscape">
 *  I am hidden on Landscape!
 * </div>
 * ```
 *
 * @demo /docs/v2/demos/src/hide-when/
 * @see {@link ../ShowWhen ShowWhen API Docs}
 * @see {@link ../../../platform/Platform Platform API Docs}
*/
export var HideWhen = (function (_super) {
    __extends(HideWhen, _super);
    function HideWhen(hideWhen, platform, zone) {
        _super.call(this, hideWhen, platform, zone);
    }
    HideWhen.decorators = [
        { type: Directive, args: [{
                    selector: '[hideWhen]',
                    host: {
                        '[class.hidden-hide-when]': 'isMatch'
                    }
                },] },
    ];
    /** @nocollapse */
    HideWhen.ctorParameters = [
        { type: undefined, decorators: [{ type: Attribute, args: ['hideWhen',] },] },
        { type: Platform, },
        { type: NgZone, },
    ];
    return HideWhen;
}(DisplayWhen));
//# sourceMappingURL=show-hide-when.js.map