var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, EventEmitter, forwardRef, Input, Inject, Optional, Output, Renderer, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { clamp, isNumber, isPresent, isString, isTrueProperty } from '../../util/util';
import { Config } from '../../config/config';
import { TimeoutDebouncer } from '../../util/debouncer';
import { Form } from '../../util/form';
import { Ion } from '../ion';
import { Item } from '../item/item';
import { pointerCoord, raf } from '../../util/dom';
import { Haptic } from '../../util/haptic';
import { UIEventManager } from '../../util/ui-event-manager';
export var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Range; }),
    multi: true
};
/**
 * @private
 */
export var RangeKnob = (function () {
    function RangeKnob(range) {
        this.range = range;
        this._upper = false;
    }
    Object.defineProperty(RangeKnob.prototype, "upper", {
        get: function () {
            return this._upper;
        },
        set: function (val) {
            this._upper = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeKnob.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        set: function (ratio) {
            this._ratio = clamp(0, ratio, 1);
            this._val = this.range.ratioToValue(this._ratio);
            if (this.range.snaps) {
                this._ratio = this.range.valueToRatio(this._val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeKnob.prototype, "value", {
        get: function () {
            return this._val;
        },
        set: function (val) {
            if (isString(val)) {
                val = Math.round(val);
            }
            if (isNumber(val) && !isNaN(val)) {
                this._ratio = this.range.valueToRatio(val);
                this._val = this.range.ratioToValue(this._ratio);
            }
        },
        enumerable: true,
        configurable: true
    });
    RangeKnob.prototype.position = function () {
        this._x = this._ratio * 100 + "%";
    };
    RangeKnob.prototype.ngOnInit = function () {
        if (isPresent(this.range.value)) {
            // we already have a value
            if (this.range.dualKnobs) {
                // we have a value and there are two knobs
                if (this._upper) {
                    // this is the upper knob
                    this.value = this.range.value.upper;
                }
                else {
                    // this is the lower knob
                    this.value = this.range.value.lower;
                }
            }
            else {
                // we have a value and there is only one knob
                this.value = this.range.value;
            }
        }
        else {
            // we do not have a value so set defaults
            this.ratio = ((this.range.dualKnobs && this.upper) ? 1 : 0);
        }
        this.position();
    };
    RangeKnob.decorators = [
        { type: Component, args: [{
                    selector: '.range-knob-handle',
                    template: '<div class="range-pin" *ngIf="range.pin">{{_val}}</div>' +
                        '<div class="range-knob"></div>',
                    host: {
                        '[class.range-knob-pressed]': 'pressed',
                        '[class.range-knob-min]': '_val===range.min',
                        '[class.range-knob-max]': '_val===range.max',
                        '[style.left]': '_x',
                        '[attr.aria-valuenow]': '_val',
                        '[attr.aria-valuemin]': 'range.min',
                        '[attr.aria-valuemax]': 'range.max',
                        'role': 'slider',
                        'tabindex': '0'
                    }
                },] },
    ];
    /** @nocollapse */
    RangeKnob.ctorParameters = [
        { type: Range, decorators: [{ type: Inject, args: [forwardRef(function () { return Range; }),] },] },
    ];
    RangeKnob.propDecorators = {
        'upper': [{ type: Input },],
    };
    return RangeKnob;
}());
/**
 * @name Range
 * @description
 * The Range slider lets users select from a range of values by moving
 * the slider knob. It can accept dual knobs, but by default one knob
 * controls the value of the range.
 *
 * ### Range Labels
 * Labels can be placed on either side of the range by adding the
 * `range-left` or `range-right` property to the element. The element
 * doesn't have to be an `ion-label`, it can be added to any element
 * to place it to the left or right of the range. See [usage](#usage)
 * below for examples.
 *
 *
 * ### Minimum and Maximum Values
 * Minimum and maximum values can be passed to the range through the `min`
 * and `max` properties, respectively. By default, the range sets the `min`
 * to `0` and the `max` to `100`.
 *
 *
 * ### Steps and Snaps
 * The `step` property specifies the value granularity of the range's value.
 * It can be useful to set the `step` when the value isn't in increments of `1`.
 * Setting the `step` property will show tick marks on the range for each step.
 * The `snaps` property can be set to automatically move the knob to the nearest
 * tick mark based on the step property value.
 *
 *
 * ### Dual Knobs
 * Setting the `dualKnobs` property to `true` on the range component will
 * enable two knobs on the range. If the range has two knobs, the value will
 * be an object containing two properties: `lower` and `upper`.
 *
 *
 * @usage
 * ```html
 * <ion-list>
 *   <ion-item>
 *     <ion-range [(ngModel)]="singleValue" color="danger" pin="true"></ion-range>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-range min="-200" max="200" [(ngModel)]="saturation" color="secondary">
 *       <ion-label range-left>-200</ion-label>
 *       <ion-label range-right>200</ion-label>
 *     </ion-range>
 *   </ion-item>
 *
 *  <ion-item>
 *    <ion-range min="20" max="80" step="2" [(ngModel)]="brightness">
 *      <ion-icon small range-left name="sunny"></ion-icon>
 *      <ion-icon range-right name="sunny"></ion-icon>
 *    </ion-range>
 *  </ion-item>
 *
 *   <ion-item>
 *     <ion-label>step=100, snaps, {{singleValue4}}</ion-label>
 *     <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary" [(ngModel)]="singleValue4"></ion-range>
 *   </ion-item>
 *
 *   <ion-item>
 *     <ion-label>dual, step=3, snaps, {{dualValue2 | json}}</ion-label>
 *     <ion-range dualKnobs="true" [(ngModel)]="dualValue2" min="21" max="72" step="3" snaps="true"></ion-range>
 *   </ion-item>
 * </ion-list>
 * ```
 *
 *
 * @demo /docs//demos/src/range/
 */
export var Range = (function (_super) {
    __extends(Range, _super);
    function Range(_form, _haptic, _item, config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'range');
        this._form = _form;
        this._haptic = _haptic;
        this._item = _item;
        this._dual = false;
        this._disabled = false;
        this._start = null;
        this._min = 0;
        this._max = 100;
        this._step = 1;
        this._snaps = false;
        this._debouncer = new TimeoutDebouncer(0);
        this._events = new UIEventManager();
        /**
         * @output {Range} Expression to evaluate when the range value changes.
         */
        this.ionChange = new EventEmitter();
        _form.register(this);
        if (_item) {
            this.id = 'rng-' + _item.registerInput('range');
            this._labelId = 'lbl-' + _item.id;
            _item.setElementClass('item-range', true);
        }
    }
    Object.defineProperty(Range.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "min", {
        /**
         * @input {number} Minimum integer value of the range. Defaults to `0`.
         */
        get: function () {
            return this._min;
        },
        set: function (val) {
            val = Math.round(val);
            if (!isNaN(val)) {
                this._min = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "max", {
        /**
         * @input {number} Maximum integer value of the range. Defaults to `100`.
         */
        get: function () {
            return this._max;
        },
        set: function (val) {
            val = Math.round(val);
            if (!isNaN(val)) {
                this._max = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "step", {
        /**
         * @input {number} Specifies the value granularity. Defaults to `1`.
         */
        get: function () {
            return this._step;
        },
        set: function (val) {
            val = Math.round(val);
            if (!isNaN(val) && val > 0) {
                this._step = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "snaps", {
        /**
         * @input {number} If true, the knob snaps to tick marks evenly spaced based on the step property value. Defaults to `false`.
         */
        get: function () {
            return this._snaps;
        },
        set: function (val) {
            this._snaps = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "pin", {
        /**
         * @input {number} If true, a pin with integer value is shown when the knob is pressed. Defaults to `false`.
         */
        get: function () {
            return this._pin;
        },
        set: function (val) {
            this._pin = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "debounce", {
        /**
         * @input {number} How long, in milliseconds, to wait to trigger the `ionChange`
         * event after each change in the range value. Default `0`.
         */
        get: function () {
            return this._debouncer.wait;
        },
        set: function (val) {
            this._debouncer.wait = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "dualKnobs", {
        /**
         * @input {boolean} Show two knobs. Defaults to `false`.
         */
        get: function () {
            return this._dual;
        },
        set: function (val) {
            this._dual = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Range.prototype.ngAfterViewInit = function () {
        var barL = '';
        var barR = '';
        var firstRatio = this._knobs.first.ratio;
        if (this._dual) {
            var lastRatio = this._knobs.last.ratio;
            barL = (Math.min(firstRatio, lastRatio) * 100) + "%";
            barR = (100 - (Math.max(firstRatio, lastRatio) * 100)) + "%";
        }
        else {
            barR = (100 - (firstRatio * 100)) + "%";
        }
        this._renderer.setElementStyle(this._bar.nativeElement, 'left', barL);
        this._renderer.setElementStyle(this._bar.nativeElement, 'right', barR);
        // add touchstart/mousedown listeners
        this._events.pointerEvents({
            elementRef: this._slider,
            pointerDown: this.pointerDown.bind(this),
            pointerMove: this.pointerMove.bind(this),
            pointerUp: this.pointerUp.bind(this)
        });
        this.createTicks();
    };
    /**
     * @private
     */
    Range.prototype.pointerDown = function (ev) {
        // TODO: we could stop listening for events instead of checking this._disabled.
        // since there are a lot of events involved, this solution is
        // enough for the moment
        if (this._disabled) {
            return false;
        }
        console.debug("range, " + ev.type);
        // prevent default so scrolling does not happen
        ev.preventDefault();
        ev.stopPropagation();
        // get the start coordinates
        this._start = pointerCoord(ev);
        // get the full dimensions of the slider element
        var rect = this._rect = this._slider.nativeElement.getBoundingClientRect();
        // figure out the offset
        // the start of the pointer could actually
        // have been left or right of the slider bar
        if (this._start.x < rect.left) {
            rect.xOffset = (this._start.x - rect.left);
        }
        else if (this._start.x > rect.right) {
            rect.xOffset = (this._start.x - rect.right);
        }
        else {
            rect.xOffset = 0;
        }
        // figure out which knob we're interacting with
        this.setActiveKnob(this._start, rect);
        // update the ratio for the active knob
        this.updateKnob(this._start, rect);
        // update the active knob's position
        this._active.position();
        this._pressed = this._active.pressed = true;
        this._haptic.gestureSelectionStart();
        return true;
    };
    /**
     * @private
     */
    Range.prototype.pointerMove = function (ev) {
        console.debug("range, " + ev.type);
        // prevent default so scrolling does not happen
        ev.preventDefault();
        ev.stopPropagation();
        // update the ratio for the active knob
        this.updateKnob(pointerCoord(ev), this._rect);
        // update the active knob's position
        this._active.position();
        this._pressed = this._active.pressed = true;
    };
    /**
     * @private
     */
    Range.prototype.pointerUp = function (ev) {
        console.debug("range, " + ev.type);
        // prevent default so scrolling does not happen
        ev.preventDefault();
        ev.stopPropagation();
        // update the ratio for the active knob
        this.updateKnob(pointerCoord(ev), this._rect);
        // update the active knob's position
        this._active.position();
        this._haptic.gestureSelectionEnd();
        // clear the start coordinates and active knob
        this._start = this._active = null;
        this._pressed = this._knobs.first.pressed = this._knobs.last.pressed = false;
    };
    /**
     * @private
     */
    Range.prototype.setActiveKnob = function (current, rect) {
        // figure out which knob is the closest one to the pointer
        var ratio = (current.x - rect.left) / (rect.width);
        if (this._dual && Math.abs(ratio - this._knobs.first.ratio) > Math.abs(ratio - this._knobs.last.ratio)) {
            this._active = this._knobs.last;
        }
        else {
            this._active = this._knobs.first;
        }
    };
    /**
     * @private
     */
    Range.prototype.updateKnob = function (current, rect) {
        var _this = this;
        // figure out where the pointer is currently at
        // update the knob being interacted with
        if (this._active) {
            var oldVal = this._active.value;
            this._active.ratio = (current.x - rect.left) / (rect.width);
            var newVal = this._active.value;
            if (oldVal !== newVal) {
                // Trigger a haptic selection changed event if this is
                // a snap range
                if (this.snaps) {
                    this._haptic.gestureSelectionChanged();
                }
                // value has been updated
                if (this._dual) {
                    this.value = {
                        lower: Math.min(this._knobs.first.value, this._knobs.last.value),
                        upper: Math.max(this._knobs.first.value, this._knobs.last.value),
                    };
                }
                else {
                    this.value = newVal;
                }
                this._debouncer.debounce(function () {
                    _this.onChange(_this.value);
                    _this.ionChange.emit(_this);
                });
            }
            this.updateBar();
        }
    };
    /**
     * @private
     */
    Range.prototype.updateBar = function () {
        var firstRatio = this._knobs.first.ratio;
        if (this._dual) {
            var lastRatio = this._knobs.last.ratio;
            this._barL = (Math.min(firstRatio, lastRatio) * 100) + "%";
            this._barR = (100 - (Math.max(firstRatio, lastRatio) * 100)) + "%";
        }
        else {
            this._barL = '';
            this._barR = (100 - (firstRatio * 100)) + "%";
        }
        this.updateTicks();
    };
    /**
     * @private
     */
    Range.prototype.createTicks = function () {
        var _this = this;
        if (this._snaps) {
            raf(function () {
                // TODO: Fix to not use RAF
                _this._ticks = [];
                for (var value = _this._min; value <= _this._max; value += _this._step) {
                    var ratio = _this.valueToRatio(value);
                    _this._ticks.push({
                        ratio: ratio,
                        left: ratio * 100 + "%",
                    });
                }
                _this.updateTicks();
            });
        }
    };
    /**
     * @private
     */
    Range.prototype.updateTicks = function () {
        var ticks = this._ticks;
        if (this._snaps && ticks) {
            var ratio = this.ratio;
            if (this._dual) {
                var upperRatio = this.ratioUpper;
                ticks.forEach(function (t) {
                    t.active = (t.ratio >= ratio && t.ratio <= upperRatio);
                });
            }
            else {
                ticks.forEach(function (t) {
                    t.active = (t.ratio <= ratio);
                });
            }
        }
    };
    /**
     * @private
     */
    Range.prototype.ratioToValue = function (ratio) {
        ratio = Math.round(((this._max - this._min) * ratio));
        ratio = Math.round(ratio / this._step) * this._step + this._min;
        return clamp(this._min, ratio, this._max);
    };
    /**
     * @private
     */
    Range.prototype.valueToRatio = function (value) {
        value = Math.round((value - this._min) / this._step) * this._step;
        value = value / (this._max - this._min);
        return clamp(0, value, 1);
    };
    /**
     * @private
     */
    Range.prototype.writeValue = function (val) {
        if (isPresent(val)) {
            var knobs = this._knobs;
            this.value = val;
            if (this._knobs) {
                if (this._dual) {
                    knobs.first.value = val.lower;
                    knobs.last.value = val.upper;
                    knobs.last.position();
                }
                else {
                    knobs.first.value = val;
                }
                knobs.first.position();
                this.updateBar();
            }
        }
    };
    /**
     * @private
     */
    Range.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function (val) {
            fn(val);
            _this.onTouched();
        };
    };
    /**
     * @private
     */
    Range.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(Range.prototype, "disabled", {
        /**
         * @input {boolean} Whether or not the range is disabled. Defaults to `false`.
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = isTrueProperty(val);
            this._item && this._item.setElementClass('item-range-disabled', this._disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "ratio", {
        /**
         * Returns the ratio of the knob's is current location, which is a number between `0` and `1`.
         * If two knobs are used, this property represents the lower value.
         */
        get: function () {
            if (this._dual) {
                return Math.min(this._knobs.first.ratio, this._knobs.last.ratio);
            }
            return this._knobs.first.ratio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "ratioUpper", {
        /**
         * Returns the ratio of the upper value's is current location, which is a number between `0` and `1`.
         * If there is only one knob, then this will return `null`.
         */
        get: function () {
            if (this._dual) {
                return Math.max(this._knobs.first.ratio, this._knobs.last.ratio);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Range.prototype.onChange = function (val) {
        // used when this input does not have an ngModel or formControlName
        this.onTouched();
    };
    /**
     * @private
     */
    Range.prototype.onTouched = function () { };
    /**
     * @private
     */
    Range.prototype.ngOnDestroy = function () {
        this._form.deregister(this);
        this._events.unlistenAll();
    };
    Range.decorators = [
        { type: Component, args: [{
                    selector: 'ion-range',
                    template: '<ng-content select="[range-left]"></ng-content>' +
                        '<div class="range-slider" #slider>' +
                        '<div class="range-tick" *ngFor="let t of _ticks" [style.left]="t.left" [class.range-tick-active]="t.active"></div>' +
                        '<div class="range-bar"></div>' +
                        '<div class="range-bar range-bar-active" [style.left]="_barL" [style.right]="_barR" #bar></div>' +
                        '<div class="range-knob-handle"></div>' +
                        '<div class="range-knob-handle" [upper]="true" *ngIf="_dual"></div>' +
                        '</div>' +
                        '<ng-content select="[range-right]"></ng-content>',
                    host: {
                        '[class.range-disabled]': '_disabled',
                        '[class.range-pressed]': '_pressed',
                        '[class.range-has-pin]': '_pin'
                    },
                    providers: [RANGE_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Range.ctorParameters = [
        { type: Form, },
        { type: Haptic, },
        { type: Item, decorators: [{ type: Optional },] },
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Range.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        '_bar': [{ type: ViewChild, args: ['bar',] },],
        '_slider': [{ type: ViewChild, args: ['slider',] },],
        '_knobs': [{ type: ViewChildren, args: [RangeKnob,] },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'step': [{ type: Input },],
        'snaps': [{ type: Input },],
        'pin': [{ type: Input },],
        'debounce': [{ type: Input },],
        'dualKnobs': [{ type: Input },],
        'ionChange': [{ type: Output },],
        'disabled': [{ type: Input },],
    };
    return Range;
}(Ion));
//# sourceMappingURL=range.js.map