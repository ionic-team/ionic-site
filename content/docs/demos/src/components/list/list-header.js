var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Attribute, Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
 * @private
 */
export var ListHeader = (function (_super) {
    __extends(ListHeader, _super);
    function ListHeader(config, renderer, elementRef, _id) {
        _super.call(this, config, elementRef, renderer, 'list-header');
        this._id = _id;
    }
    Object.defineProperty(ListHeader.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListHeader.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListHeader.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
            this.setElementAttribute('id', val);
        },
        enumerable: true,
        configurable: true
    });
    ListHeader.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-list-header'
                },] },
    ];
    /** @nocollapse */
    ListHeader.ctorParameters = [
        { type: Config, },
        { type: Renderer, },
        { type: ElementRef, },
        { type: undefined, decorators: [{ type: Attribute, args: ['id',] },] },
    ];
    ListHeader.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return ListHeader;
}(Ion));
//# sourceMappingURL=list-header.js.map