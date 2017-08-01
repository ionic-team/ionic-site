var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Optional, Renderer, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { isPresent, isTrueProperty } from '../../util/util';
/**
 * @name SegmentButton
 * @description
 * The child buttons of the `ion-segment` component. Each `ion-segment-button` must have a value.
 *
 * @usage
 *
 * ```html
 * <ion-content>
 *   <!-- Segment buttons with icons -->
 *   <ion-segment [(ngModel)]="icons" color="secondary">
 *     <ion-segment-button value="camera">
 *       <ion-icon name="camera"></ion-icon>
 *     </ion-segment-button>
 *     <ion-segment-button value="bookmark">
 *       <ion-icon name="bookmark"></ion-icon>
 *     </ion-segment-button>
 *   </ion-segment>
 *
 *   <!-- Segment buttons with text -->
 *   <ion-segment [(ngModel)]="relationship" color="primary">
 *     <ion-segment-button value="friends" (ionSelect)="selectedFriends()">
 *       Friends
 *     </ion-segment-button>
 *     <ion-segment-button value="enemies" (ionSelect)="selectedEnemies()">
 *       Enemies
 *     </ion-segment-button>
 *   </ion-segment>
 * </ion-content>
 * ```
 *
 *
 * @demo /docs/demos/src/segment/
 * @see {@link /docs/components#segment Segment Component Docs}
 * @see {@link /docs/api/components/segment/Segment/ Segment API Docs}
 */
export var SegmentButton = (function () {
    function SegmentButton(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._disabled = false;
        /**
         * @output {SegmentButton} expression to evaluate when a segment button has been clicked
         */
        this.ionSelect = new EventEmitter();
    }
    Object.defineProperty(SegmentButton.prototype, "disabled", {
        /**
         * @private
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = isTrueProperty(val);
            this._setElementClass('segment-button-disabled', this._disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    SegmentButton.prototype._setElementClass = function (cssClass, shouldAdd) {
        this._renderer.setElementClass(this._elementRef.nativeElement, cssClass, shouldAdd);
    };
    /**
     * @private
     * On click of a SegmentButton
     */
    SegmentButton.prototype.onClick = function () {
        console.debug('SegmentButton, select', this.value);
        this.ionSelect.emit(this);
    };
    /**
     * @private
     */
    SegmentButton.prototype.ngOnInit = function () {
        if (!isPresent(this.value)) {
            console.warn('<ion-segment-button> requires a "value" attribute');
        }
    };
    Object.defineProperty(SegmentButton.prototype, "isActive", {
        /**
         * @private
         */
        set: function (isActive) {
            this._renderer.setElementClass(this._elementRef.nativeElement, 'segment-activated', isActive);
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-pressed', isActive);
        },
        enumerable: true,
        configurable: true
    });
    SegmentButton.decorators = [
        { type: Component, args: [{
                    selector: 'ion-segment-button',
                    template: '<ng-content></ng-content>' +
                        '<div class="button-effect"></div>',
                    host: {
                        'tappable': '',
                        'class': 'segment-button',
                        'role': 'button'
                    },
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    SegmentButton.ctorParameters = [
        { type: Renderer, },
        { type: ElementRef, },
    ];
    SegmentButton.propDecorators = {
        'value': [{ type: Input },],
        'ionSelect': [{ type: Output },],
        'disabled': [{ type: Input },],
        'onClick': [{ type: HostListener, args: ['click',] },],
    };
    return SegmentButton;
}());
/**
 * @name Segment
 * @description
 * A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.
 * Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.
 * You could use Angular 2's `ngModel` or `FormBuilder` API. For an overview on how `FormBuilder` works, checkout [Angular 2 Forms](http://learnangular2.com/forms/), or [Angular FormBuilder](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
 *
 *
 * ```html
 * <!-- Segment in a header -->
 * <ion-header>
 *   <ion-toolbar>
 *     <ion-segment [(ngModel)]="icons" color="secondary">
 *       <ion-segment-button value="camera">
 *         <ion-icon name="camera"></ion-icon>
 *       </ion-segment-button>
 *       <ion-segment-button value="bookmark">
 *         <ion-icon name="bookmark"></ion-icon>
 *       </ion-segment-button>
 *     </ion-segment>
 *   </ion-toolbar>
 * </ion-header>
 *
 * <ion-content>
 *   <!-- Segment in content -->
 *   <ion-segment [(ngModel)]="relationship" color="primary">
 *     <ion-segment-button value="friends" (ionSelect)="selectedFriends()">
 *       Friends
 *     </ion-segment-button>
 *     <ion-segment-button value="enemies" (ionSelect)="selectedEnemies()">
 *       Enemies
 *     </ion-segment-button>
 *   </ion-segment>
 *
 *   <!-- Segment in a form -->
 *   <form [formGroup]="myForm">
 *     <ion-segment formControlName="mapStyle" color="danger">
 *       <ion-segment-button value="standard">
 *         Standard
 *       </ion-segment-button>
 *       <ion-segment-button value="hybrid">
 *         Hybrid
 *       </ion-segment-button>
 *       <ion-segment-button value="sat">
 *         Satellite
 *       </ion-segment-button>
 *     </ion-segment>
 *   </form>
 * </ion-content>
 * ```
 *
 *
 * @demo /docs/demos/src/segment/
 * @see {@link /docs/components#segment Segment Component Docs}
 * @see [Angular 2 Forms](http://learnangular2.com/forms/)
 */
export var Segment = (function (_super) {
    __extends(Segment, _super);
    function Segment(config, elementRef, renderer, ngControl) {
        _super.call(this, config, elementRef, renderer, 'segment');
        this._disabled = false;
        /**
         * @output {Any}  expression to evaluate when a segment button has been changed
         */
        this.ionChange = new EventEmitter();
        /**
         * @private
         */
        this.onChange = function (_) { };
        /**
         * @private
         */
        this.onTouched = function (_) { };
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(Segment.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "disabled", {
        /**
         * @private
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            var _this = this;
            this._disabled = isTrueProperty(val);
            if (this._buttons) {
                this._buttons.forEach(function (button) {
                    button._setElementClass('segment-button-disabled', _this._disabled);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * Write a new value to the element.
     */
    Segment.prototype.writeValue = function (value) {
        this.value = isPresent(value) ? value : '';
        if (this._buttons) {
            var buttons = this._buttons.toArray();
            for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                var button = buttons_1[_i];
                button.isActive = (button.value === this.value);
            }
        }
    };
    /**
     * @private
     */
    Segment.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._buttons.forEach(function (button) {
            button.ionSelect.subscribe(function (selectedButton) {
                _this.writeValue(selectedButton.value);
                _this.onChange(selectedButton.value);
                _this.ionChange.emit(selectedButton);
            });
            if (isPresent(_this.value)) {
                button.isActive = (button.value === _this.value);
            }
            if (isTrueProperty(_this._disabled)) {
                button._setElementClass('segment-button-disabled', _this._disabled);
            }
        });
    };
    /**
     * @private
     * Set the function to be called when the control receives a change event.
     */
    Segment.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @private
     * Set the function to be called when the control receives a touch event.
     */
    Segment.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Segment.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-segment'
                },] },
    ];
    /** @nocollapse */
    Segment.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: NgControl, decorators: [{ type: Optional },] },
    ];
    Segment.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'ionChange': [{ type: Output },],
        '_buttons': [{ type: ContentChildren, args: [SegmentButton,] },],
        'disabled': [{ type: Input },],
    };
    return Segment;
}(Ion));
//# sourceMappingURL=segment.js.map