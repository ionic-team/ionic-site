var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Attribute, Directive, ElementRef, Renderer, Input } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
 * @name Label
 * @description
 * Labels are placed inside of an `ion-item` element and can be used
 * to describe an `ion-input`, `ion-toggle`, `ion-checkbox`, and more.
 *
 * @property [fixed] - A persistent label that sits next the input.
 * @property [floating] - A label that will float above the input if the input is empty or loses focus.
 * @property [stacked] - A stacked label will always appear on top of the input.

 *
 * @usage
 * ```html
 *  <ion-item>
 *    <ion-label>Username</ion-label>
 *    <ion-input></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label fixed>Website</ion-label>
 *    <ion-input type="url"></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label floating>Email</ion-label>
 *    <ion-input type="email"></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label stacked>Phone</ion-label>
 *    <ion-input type="tel"></ion-input>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label>Toggle</ion-label>
 *    <ion-toggle></ion-toggle>
 *  </ion-item>
 *
 *  <ion-item>
 *    <ion-label>Checkbox</ion-label>
 *    <ion-checkbox></ion-checkbox>
 *  </ion-item>
 * ```
 *
 * @demo /docs/v2/demos/src/label/
 * @see {@link ../../../../components#inputs Input Component Docs}
 * @see {@link ../../input/Input Input API Docs}
 *
 */
export var Label = (function (_super) {
    __extends(Label, _super);
    function Label(config, elementRef, renderer, isFloating, isStacked, isFixed, isInset) {
        _super.call(this, config, elementRef, renderer, 'label');
        this.type = (isFloating === '' ? 'floating' : (isStacked === '' ? 'stacked' : (isFixed === '' ? 'fixed' : (isInset === '' ? 'inset' : null))));
    }
    Object.defineProperty(Label.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "id", {
        /**
         * @private
         */
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
            if (val) {
                this.setElementAttribute('id', val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "text", {
        /**
         * @private
         */
        get: function () {
            return this.getNativeElement().textContent || '';
        },
        enumerable: true,
        configurable: true
    });
    Label.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-label'
                },] },
    ];
    /** @nocollapse */
    Label.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: undefined, decorators: [{ type: Attribute, args: ['floating',] },] },
        { type: undefined, decorators: [{ type: Attribute, args: ['stacked',] },] },
        { type: undefined, decorators: [{ type: Attribute, args: ['fixed',] },] },
        { type: undefined, decorators: [{ type: Attribute, args: ['inset',] },] },
    ];
    Label.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
        'id': [{ type: Input },],
    };
    return Label;
}(Ion));
//# sourceMappingURL=label.js.map