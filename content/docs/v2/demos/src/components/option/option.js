import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { isPresent, isTrueProperty } from '../../util/util';
/**
 * @name Option
 * @description
 * `ion-option` is a child component of `ion-select`. Similar to the native option element, `ion-option` can take a value and a selected property.
 *
 * @demo /docs/v2/demos/src/select/
 */
export var Option = (function () {
    function Option(_elementRef) {
        this._elementRef = _elementRef;
        this._selected = false;
        this._disabled = false;
        /**
         * @input {any} Event to evaluate when option is selected
         */
        this.ionSelect = new EventEmitter();
    }
    Object.defineProperty(Option.prototype, "selected", {
        /**
         * @input {boolean} Whether or not the option is already selected
         */
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "value", {
        /**
         * @input {any} The value of the option
         */
        get: function () {
            if (isPresent(this._value)) {
                return this._value;
            }
            return this.text;
        },
        set: function (val) {
            this._value = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "disabled", {
        /**
         * @input {boolean} Whether or not the option is disabled
         */
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "text", {
        /**
         * @private
         */
        get: function () {
            return this._elementRef.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    Option.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-option'
                },] },
    ];
    /** @nocollapse */
    Option.ctorParameters = [
        { type: ElementRef, },
    ];
    Option.propDecorators = {
        'ionSelect': [{ type: Output },],
        'selected': [{ type: Input },],
        'value': [{ type: Input },],
        'disabled': [{ type: Input },],
    };
    return Option;
}());
//# sourceMappingURL=option.js.map