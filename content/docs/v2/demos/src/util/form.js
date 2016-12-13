import { Injectable } from '@angular/core';
import { removeArrayItem } from './util';
/**
 * @private
 */
export var Form = (function () {
    function Form() {
        this._focused = null;
        this._ids = -1;
        this._inputs = [];
    }
    Form.prototype.register = function (input) {
        this._inputs.push(input);
    };
    Form.prototype.deregister = function (input) {
        removeArrayItem(this._inputs, input);
        if (input === this._focused) {
            this._focused = null;
        }
    };
    Form.prototype.setAsFocused = function (input) {
        this._focused = input;
    };
    /**
     * Focuses the next input element, if it exists.
     */
    Form.prototype.tabFocus = function (currentInput) {
        var index = this._inputs.indexOf(currentInput);
        if (index > -1 && (index + 1) < this._inputs.length) {
            var nextInput = this._inputs[index + 1];
            if (nextInput !== this._focused) {
                console.debug('tabFocus, next');
                return nextInput.initFocus();
            }
        }
        index = this._inputs.indexOf(this._focused);
        if (index > 0) {
            var previousInput = this._inputs[index - 1];
            if (previousInput) {
                console.debug('tabFocus, previous');
                previousInput.initFocus();
            }
        }
    };
    Form.prototype.nextId = function () {
        return ++this._ids;
    };
    Form.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Form.ctorParameters = [];
    return Form;
}());
export var IonicTapInput = (function () {
    function IonicTapInput() {
    }
    Object.defineProperty(IonicTapInput.prototype, "checked", {
        get: function () { },
        set: function (val) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicTapInput.prototype, "disabled", {
        get: function () { },
        set: function (val) { },
        enumerable: true,
        configurable: true
    });
    return IonicTapInput;
}());
export var IonicFormInput = (function () {
    function IonicFormInput() {
    }
    return IonicFormInput;
}());
//# sourceMappingURL=form.js.map