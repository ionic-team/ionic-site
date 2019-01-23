var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
  * @private
  */
export var Card = (function (_super) {
    __extends(Card, _super);
    function Card(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'card');
    }
    Object.defineProperty(Card.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    Card.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-card'
                },] },
    ];
    /** @nocollapse */
    Card.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Card.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return Card;
}(Ion));
/**
 * @private
 */
export var CardContent = (function (_super) {
    __extends(CardContent, _super);
    function CardContent(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'card-content');
    }
    Object.defineProperty(CardContent.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardContent.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    CardContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-card-content'
                },] },
    ];
    /** @nocollapse */
    CardContent.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    CardContent.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return CardContent;
}(Ion));
/**
 * @private
 */
export var CardHeader = (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'card-header');
    }
    Object.defineProperty(CardHeader.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardHeader.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    CardHeader.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-card-header'
                },] },
    ];
    /** @nocollapse */
    CardHeader.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    CardHeader.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return CardHeader;
}(Ion));
/**
 * @private
 */
export var CardTitle = (function (_super) {
    __extends(CardTitle, _super);
    function CardTitle(config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer, 'card-title');
    }
    Object.defineProperty(CardTitle.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._setColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardTitle.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._setMode(val);
        },
        enumerable: true,
        configurable: true
    });
    CardTitle.decorators = [
        { type: Directive, args: [{
                    selector: 'ion-card-title'
                },] },
    ];
    /** @nocollapse */
    CardTitle.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    CardTitle.propDecorators = {
        'color': [{ type: Input },],
        'mode': [{ type: Input },],
    };
    return CardTitle;
}(Ion));
//# sourceMappingURL=card.js.map