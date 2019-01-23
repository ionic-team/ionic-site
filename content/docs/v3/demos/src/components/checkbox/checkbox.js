var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, Optional, Output, Renderer, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Config } from '../../config/config';
import { Form } from '../../util/form';
import { Ion } from '../ion';
import { isTrueProperty } from '../../util/util';
import { Item } from '../item/item';
export var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Checkbox; }),
    multi: true
};
/**
 * @name Checkbox
 * @module ionic
 *
 * @description
 * The Checkbox is a simple component styled based on the mode. It can be
 * placed in an `ion-item` or used as a stand-alone checkbox.
 *
 * See the [Angular 2 Docs](https://angular.io/docs/ts/latest/guide/forms.html)
 * for more info on forms and inputs.
 *
 *
 * @usage
 * ```html
 *
 *  <ion-list>
 *
 *    <ion-item>
 *      <ion-label>Pepperoni</ion-label>
 *      <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Sausage</ion-label>
 *      <ion-checkbox [(ngModel)]="sausage" disabled="true"></ion-checkbox>
 *    </ion-item>
 *
 *    <ion-item>
 *      <ion-label>Mushrooms</ion-label>
 *      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>
 *    </ion-item>
 *
 *  </ion-list>
 * ```
 *
 * @demo /docs//demos/src/checkbox/
 * @see {@link /docs//components#checkbox Checkbox Component Docs}
 */
export var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(config, _form, _item, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'checkbox');
        this._form = _form;
        this._item = _item;
        /** @private */
        this._checked = false;
        /** @private */
        this._disabled = false;
        /**
         * @output {Checkbox} expression to evaluate when the checkbox value changes
         */
        this.ionChange = new EventEmitter();
        _form.register(this);
        if (_item) {
            this.id = 'chk-' + _item.registerInput('checkbox');
            this._labelId = 'lbl-' + _item.id;
            this._item.setElementClass('item-checkbox', true);
        }
    }
    Object.defineProperty(Checkbox.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Checkbox.prototype._click = function (ev) {
        console.debug('checkbox, checked');
        ev.preventDefault();
        ev.stopPropagation();
        this.onChange(!this._checked);
    };
    Object.defineProperty(Checkbox.prototype, "checked", {
        /**
         * @input {boolean} whether or not the checkbox is checked (defaults to false)
         */
        get: function () {
            return this._checked;
        },
        set: function (val) {
            this._setChecked(isTrueProperty(val));
            this.onChange(this._checked);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Checkbox.prototype._setChecked = function (isChecked) {
        if (!this._disabled && isChecked !== this._checked) {
            this._checked = isChecked;
            if (this._init) {
                this.ionChange.emit(this);
            }
            this._item && this._item.setElementClass('item-checkbox-checked', isChecked);
        }
    };
    /**
     * @private
     */
    Checkbox.prototype.writeValue = function (val) {
        this._setChecked(isTrueProperty(val));
    };
    /**
     * @private
     */
    Checkbox.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function (isChecked) {
            console.debug('checkbox, onChange', isChecked);
            fn(isChecked);
            _this._setChecked(isChecked);
            _this.onTouched();
        };
    };
    /**
     * @private
     */
    Checkbox.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(Checkbox.prototype, "disabled", {
        /**
         * @input {boolean} whether or not the checkbox is disabled or not.
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = isTrueProperty(val);
            this._item && this._item.setElementClass('item-checkbox-disabled', this._disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Checkbox.prototype.onChange = function (isChecked) {
        // used when this input does not have an ngModel or formControlName
        console.debug('checkbox, onChange (no ngModel)', isChecked);
        this._setChecked(isChecked);
        this.onTouched();
    };
    /**
     * @private
     */
    Checkbox.prototype.initFocus = function () {
        this._elementRef.nativeElement.querySelector('button').focus();
    };
    /**
     * @private
     */
    Checkbox.prototype.onTouched = function () { };
    /**
     * @private
     */
    Checkbox.prototype.ngAfterContentInit = function () {
        this._init = true;
    };
    /**
     * @private
     */
    Checkbox.prototype.ngOnDestroy = function () {
        this._form.deregister(this);
    };
    Checkbox.decorators = [
        { type: Component, args: [{
                    selector: 'ion-checkbox',
                    template: '<div class="checkbox-icon" [class.checkbox-checked]="_checked">' +
                        '<div class="checkbox-inner"></div>' +
                        '</div>' +
                        '<button role="checkbox" ' +
                        'type="button" ' +
                        'ion-button="item-cover" ' +
                        '[id]="id" ' +
                        '[attr.aria-checked]="_checked" ' +
                        '[attr.aria-labelledby]="_labelId" ' +
                        '[attr.aria-disabled]="_disabled" ' +
                        'class="item-cover"> ' +
                        '</button>',
                    host: {
                        '[class.checkbox-disabled]': '_disabled'
                    },
                    providers: [CHECKBOX_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Checkbox.ctorParameters = [
        { type: Config, },
        { type: Form, },
        { type: Item, decorators: [{ type: Optional },] },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Checkbox.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'ionChange': [{ type: Output },],
        '_click': [{ type: HostListener, args: ['click', ['$event'],] },],
        'checked': [{ type: Input },],
        'disabled': [{ type: Input },],
    };
    return Checkbox;
}(Ion));
//# sourceMappingURL=checkbox.js.map