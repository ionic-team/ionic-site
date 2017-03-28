var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { CSS } from '../../util/dom';
import { isTrueProperty } from '../../util/util';
/**
 * @name Spinner
 * @description
 * The `ion-spinner` component provides a variety of animated SVG spinners.
 * Spinners enables you to give users feedback that the app is actively
 * processing/thinking/waiting/chillin’ out, or whatever you’d like it to indicate.
 * By default, the `ion-refresher` feature uses this spinner component while it's
 * the refresher is in the `refreshing` state.
 *
 * Ionic offers a handful of spinners out of the box, and by default, it will use
 * the appropriate spinner for the platform on which it’s running.
 *
 * <table class="table spinner-table">
 *  <tr>
 *    <th>
 *      <code>ios</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="ios"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>ios-small</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="ios-small"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>bubbles</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="bubbles"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>circles</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="circles"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>crescent</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="crescent"></ion-spinner>
 *    </td>
 *  </tr>
 *  <tr>
 *    <th>
 *      <code>dots</code>
 *    </th>
 *    <td>
 *      <ion-spinner name="dots"></ion-spinner>
 *    </td>
 *  </tr>
 * </table>
 *
 * @usage
 * The following code would use the default spinner for the platform it's
 * running from. If it's neither iOS or Android, it'll default to use `ios`.
 *
 * ```html
 * <ion-spinner></ion-spinner>
 * ```
 *
 * By setting the `name` property, you can specify which predefined spinner to
 * use, no matter what the platform is.
 *
 * ```html
 * <ion-spinner name="bubbles"></ion-spinner>
 * ```
 *
 * ## Styling SVG with CSS
 * One cool thing about SVG is its ability to be styled with CSS! One thing to note
 * is that some of the CSS properties on an SVG element have different names. For
 * example, SVG uses the term `stroke` instead of `border`, and `fill` instead
 * of `background-color`.
 *
 * ```css
 * ion-spinner * {
 *   width: 28px;
 *   height: 28px;
 *   stroke: #444;
 *   fill: #222;
 * }
 * ```
 */
export var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'spinner');
        this._dur = null;
        this._paused = false;
    }
    Object.defineProperty(Spinner.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._setColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "name", {
        /**
         * @input {string} SVG spinner name.
         */
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
            this.load();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "duration", {
        /**
         * @input {string} How long it takes it to do one loop.
         */
        get: function () {
            return this._dur;
        },
        set: function (val) {
            this._dur = val;
            this.load();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner.prototype, "paused", {
        /**
         * @input {boolean} If the animation is paused or not. Defaults to `false`.
         */
        get: function () {
            return this._paused;
        },
        set: function (val) {
            this._paused = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Spinner.prototype.ngOnInit = function () {
        this._init = true;
        this.load();
    };
    /**
     * @private
     */
    Spinner.prototype.load = function () {
        if (this._init) {
            this._l = [];
            this._c = [];
            var name = this._name || this._config.get('spinner', 'ios');
            var spinner = SPINNERS[name];
            if (spinner) {
                if (spinner.lines) {
                    for (var i = 0, l = spinner.lines; i < l; i++) {
                        this._l.push(this._loadEle(spinner, i, l));
                    }
                }
                else if (spinner.circles) {
                    for (var i = 0, l = spinner.circles; i < l; i++) {
                        this._c.push(this._loadEle(spinner, i, l));
                    }
                }
                this.setElementClass("spinner-" + name, true);
                this.setElementClass("spinner-" + this._mode + "-" + name, true);
            }
        }
    };
    Spinner.prototype._loadEle = function (spinner, index, total) {
        var duration = this._dur || spinner.dur;
        var data = spinner.fn(duration, index, total);
        data.style.animationDuration = duration + 'ms';
        return data;
    };
    Spinner.decorators = [
        { type: Component, args: [{
                    selector: 'ion-spinner',
                    template: '<svg viewBox="0 0 64 64" *ngFor="let i of _c" [ngStyle]="i.style">' +
                        '<circle [attr.r]="i.r" transform="translate(32,32)"></circle>' +
                        '</svg>' +
                        '<svg viewBox="0 0 64 64" *ngFor="let i of _l" [ngStyle]="i.style">' +
                        '<line [attr.y1]="i.y1" [attr.y2]="i.y2" transform="translate(32,32)"></line>' +
                        '</svg>',
                    host: {
                        '[class.spinner-paused]': '_paused'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Spinner.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Spinner.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'name': [{ type: Input },],
        'duration': [{ type: Input },],
        'paused': [{ type: Input },],
    };
    return Spinner;
}(Ion));
var SPINNERS = {
    ios: {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            return {
                y1: 17,
                y2: 29,
                style: (_a = {},
                    _a[CSS.transform] = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)',
                    _a[CSS.animationDelay] = -(dur - ((dur / total) * index)) + 'ms',
                    _a
                )
            };
            var _a;
        }
    },
    'ios-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            return {
                y1: 12,
                y2: 20,
                style: (_a = {},
                    _a[CSS.transform] = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)',
                    _a[CSS.animationDelay] = -(dur - ((dur / total) * index)) + 'ms',
                    _a
                )
            };
            var _a;
        }
    },
    bubbles: {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            return {
                r: 5,
                style: (_a = {
                        top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                        left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px'
                    },
                    _a[CSS.animationDelay] = -(dur - ((dur / total) * index)) + 'ms',
                    _a
                )
            };
            var _a;
        }
    },
    circles: {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            return {
                r: 5,
                style: (_a = {
                        top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                        left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px'
                    },
                    _a[CSS.animationDelay] = -(dur - ((dur / total) * index)) + 'ms',
                    _a
                )
            };
            var _a;
        }
    },
    crescent: {
        dur: 750,
        circles: 1,
        fn: function (dur) {
            return {
                r: 26,
                style: {}
            };
        }
    },
    dots: {
        dur: 750,
        circles: 3,
        fn: function (dur, index, total) {
            return {
                r: 6,
                style: (_a = {
                        left: (9 - (9 * index)) + 'px'
                    },
                    _a[CSS.animationDelay] = -(110 * index) + 'ms',
                    _a
                )
            };
            var _a;
        }
    }
};
//# sourceMappingURL=spinner.js.map