var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
  * @name Badge
  * @module ionic
  * @description
  * Badges are simple components in Ionic containing numbers or text. You can display a badge to indicate that there is new information associated with the item it is on.
  * @see {@link /docs/v2/components/#badges Badges Component Docs}
 */
export var Badge = (function (_super) {
    __extends(Badge, _super);
    function Badge(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'badge');
    }
    Object.defineProperty(Badge.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Badge.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-badge'
                },] },
    ];
    /** @nocollapse */
    Badge.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Badge.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return Badge;
}(Ion));
//# sourceMappingURL=badge.js.map