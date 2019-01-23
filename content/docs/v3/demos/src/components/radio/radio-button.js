var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Renderer, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { Form } from '../../util/form';
import { Ion } from '../ion';
import { isBlank, isCheckedProperty, isPresent, isTrueProperty } from '../../util/util';
import { Item } from '../item/item';
import { RadioGroup } from './radio-group';
/**
 * @description
 * A radio button is a button that can be either checked or unchecked. A user can tap
 * the button to check or uncheck it. It can also be checked from the template using
 * the `checked` property.
 *
 * Use an element with a `radio-group` attribute to group a set of radio buttons. When
 * radio buttons are inside a [radio group](../RadioGroup), exactly one radio button
 * in the group can be checked at any time. If a radio button is not placed in a group,
 * they will all have the ability to be checked at the same time.
 *
 * See the [Angular Forms Docs](https://angular.io/docs/ts/latest/guide/forms.html) for
 * more information on forms and input.
 *
 * @usage
 * ```html
 * <ion-list radio-group [(ngModel)]="relationship">
 *   <ion-item>
 *     <ion-label>Friends</ion-label>
 *     <ion-radio value="friends" checked></ion-radio>
 *   </ion-item>
 *   <ion-item>
 *     <ion-label>Family</ion-label>
 *     <ion-radio value="family"></ion-radio>
 *   </ion-item>
 *   <ion-item>
 *     <ion-label>Enemies</ion-label>
 *     <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio>
 *   </ion-item>
 * </ion-list>
 * ```
 * @demo /docs//demos/src/radio/
 * @see {@link /docs//components#radio Radio Component Docs}
 * @see {@link ../RadioGroup RadioGroup API Docs}
 */
export var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(_form, config, elementRef, renderer, _item, _group) {
        _super.call(this, config, elementRef, renderer, 'radio');
        this._form = _form;
        this._item = _item;
        this._group = _group;
        /**
         * @internal
         */
        this._checked = false;
        /**
         * @internal
         */
        this._disabled = false;
        /**
         * @internal
         */
        this._value = null;
        /**
         * @output {any} expression to be evaluated when selected
         */
        this.ionSelect = new EventEmitter();
        _form.register(this);
        if (_group) {
            // register with the radiogroup
            this.id = 'rb-' + _group.add(this);
        }
        if (_item) {
            // register the input inside of the item
            // reset to the item's id instead of the radiogroup id
            this.id = 'rb-' + _item.registerInput('radio');
            this._labelId = 'lbl-' + _item.id;
            this._item.setElementClass('item-radio', true);
        }
    }
    Object.defineProperty(RadioButton.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
            if (this._item) {
                this._item._updateColor(val, 'item-radio');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "value", {
        /**
         * @input {any} The value of the radio button. Defaults to the generated id.
         */
        get: function () {
            // if the value is not defined then use it's unique id
            return isBlank(this._value) ? this.id : this._value;
        },
        set: function (val) {
            this._value = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checked", {
        /**
         * @input {boolean} Whether the radio button should be checked or not. Default false.
         */
        get: function () {
            return this._checked;
        },
        set: function (isChecked) {
            this._checked = isTrueProperty(isChecked);
            if (this._item) {
                this._item.setElementClass('item-radio-checked', this._checked);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "disabled", {
        /**
         * @input {boolean} Whether the radio button should be disabled or not. Default false.
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = isTrueProperty(val);
            this._item && this._item.setElementClass('item-radio-disabled', this._disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    RadioButton.prototype.initFocus = function () {
        this._elementRef.nativeElement.querySelector('button').focus();
    };
    /**
     * @internal
     */
    RadioButton.prototype._click = function (ev) {
        console.debug('radio, select', this.id);
        ev.preventDefault();
        ev.stopPropagation();
        this.checked = true;
        this.ionSelect.emit(this.value);
    };
    /**
     * @internal
     */
    RadioButton.prototype.ngOnInit = function () {
        if (this._group && isPresent(this._group.value)) {
            this.checked = isCheckedProperty(this._group.value, this.value);
        }
    };
    /**
     * @internal
     */
    RadioButton.prototype.ngOnDestroy = function () {
        this._form.deregister(this);
        this._group && this._group.remove(this);
    };
    RadioButton.decorators = [
        { type: Component, args: [{
                    selector: 'ion-radio',
                    template: '<div class="radio-icon" [class.radio-checked]="_checked"> ' +
                        '<div class="radio-inner"></div> ' +
                        '</div> ' +
                        '<button role="radio" ' +
                        'type="button" ' +
                        'ion-button="item-cover" ' +
                        '[id]="id" ' +
                        '[attr.aria-checked]="_checked" ' +
                        '[attr.aria-labelledby]="_labelId" ' +
                        '[attr.aria-disabled]="_disabled" ' +
                        'class="item-cover"> ' +
                        '</button>',
                    host: {
                        '[class.radio-disabled]': '_disabled'
                    },
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    RadioButton.ctorParameters = [
        { type: Form, },
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: Item, decorators: [{ type: Optional },] },
        { type: RadioGroup, decorators: [{ type: Optional },] },
    ];
    RadioButton.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'ionSelect': [{ type: Output },],
        'value': [{ type: Input },],
        'checked': [{ type: Input },],
        'disabled': [{ type: Input },],
        '_click': [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return RadioButton;
}(Ion));
//# sourceMappingURL=radio-button.js.map