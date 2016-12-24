var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Attribute, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
import { isTrueProperty } from '../../util/util';
/**
  * @name Button
  * @module ionic
  * @description
  * Buttons are simple components in Ionic. They can consist of text and icons
  * and be enhanced by a wide range of attributes.
  *
  * @usage
  *
  * ```html
  *
  *  <!-- Colors -->
  *  <button ion-button>Default</button>
  *
  *  <button ion-button color="secondary">Secondary</button>
  *
  *  <button ion-button color="danger">Danger</button>
  *
  *  <button ion-button color="light">Light</button>
  *
  *  <button ion-button color="dark">Dark</button>
  *
  *  <!-- Shapes -->
  *  <button ion-button full>Full Button</button>
  *
  *  <button ion-button block>Block Button</button>
  *
  *  <button ion-button round>Round Button</button>
  *
  *  <!-- Outline -->
  *  <button ion-button full outline>Outline + Full</button>
  *
  *  <button ion-button block outline>Outline + Block</button>
  *
  *  <button ion-button round outline>Outline + Round</button>
  *
  *  <!-- Icons -->
  *  <button ion-button icon-left>
  *    <ion-icon name="star"></ion-icon>
  *    Left Icon
  *  </button>
  *
  *  <button ion-button icon-right>
  *    Right Icon
  *    <ion-icon name="star"></ion-icon>
  *  </button>
  *
  *  <button ion-button icon-only>
  *    <ion-icon name="star"></ion-icon>
  *  </button>
  *
  *  <!-- Sizes -->
  *  <button ion-button large>Large</button>
  *
  *  <button ion-button>Default</button>
  *
  *  <button ion-button small>Small</button>
  * ```
  *
  * @advanced
  *
  * ```html
  *
  * <!-- Bind the color and outline inputs to an expression -->
  * <button ion-button [color]="isDanger ? 'danger' : 'primary'" [outline]="isOutline">
  *   Danger (Solid)
  * </button>
  *
  * <!-- Bind the color and round inputs to an expression -->
  * <button ion-button [color]="myColor" [round]="isRound">
  *   Secondary (Round)
  * </button>
  *
  * <!-- Bind the color and clear inputs to an expression -->
  * <button ion-button [color]="isSecondary ? 'secondary' : 'primary'"  [clear]="isClear">
  *   Primary (Clear)
  * </button>
  *
  * <!-- Bind the color, outline and round inputs to an expression -->
  * <button ion-button [color]="myColor2" [outline]="isOutline" [round]="isRound">
  *   Dark (Solid + Round)
  * </button>
  *
  * <!-- Bind the click event to a method -->
  * <button ion-button (click)="logEvent($event)">
  *   Click me!
  * </button>
  * ```
  *
  * ```ts
  * @Component({
  *   templateUrl: 'main.html'
  * })
  * class E2EPage {
  *   isDanger: boolean = true;
  *   isSecondary: boolean = false;
  *   isRound: boolean = true;
  *   isOutline: boolean = false;
  *   isClear: boolean = true;
  *   myColor: string = 'secondary';
  *   myColor2: string = 'dark';
  *
  *   logEvent(event) {
  *     console.log(event)
  *   }
  * }
  *
  * ```
  *
  * @demo /docs/v2/demos/src/button/
  * @see {@link /docs/v2/components#buttons Button Component Docs}
  * @see {@link /docs/v2/components#fabs FabButton Docs}
  * @see {@link ../../fab/FabButton FabButton API Docs}
  * @see {@link ../../fab/FabContainer FabContainer API Docs}
 */
export var Button = (function (_super) {
    __extends(Button, _super);
    function Button(ionButton, config, elementRef, renderer) {
        _super.call(this, config, elementRef, renderer);
        /** @private */
        this._role = 'button'; // bar-button
        /** @private */
        this._style = 'default'; // outline/clear/solid
        this._mode = config.get('mode');
        if (config.get('hoverCSS') === false) {
            this.setElementClass('disable-hover', true);
        }
        if (ionButton.trim().length > 0) {
            this.setRole(ionButton);
        }
    }
    Object.defineProperty(Button.prototype, "large", {
        /**
         * @input {boolean} Large button.
         */
        set: function (val) {
            this._attr('_size', 'large', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "small", {
        /**
         * @input {boolean} Small button.
         */
        set: function (val) {
            this._attr('_size', 'small', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "default", {
        /**
         * @input {boolean} Default button.
         */
        set: function (val) {
            this._attr('_size', 'default', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "outline", {
        /**
         * @input {boolean} A transparent button with a border.
         */
        set: function (val) {
            this._attr('_style', 'outline', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "clear", {
        /**
         * @input {boolean} A transparent button without a border.
         */
        set: function (val) {
            this._attr('_style', 'clear', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "solid", {
        /**
         * @input {boolean} Force a solid button. Useful for buttons within an item.
         */
        set: function (val) {
            this._attr('_style', 'solid', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "round", {
        /**
         * @input {boolean} A button with rounded corners.
         */
        set: function (val) {
            this._attr('_shape', 'round', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "block", {
        /**
         * @input {boolean} A button that fills its parent container with a border-radius.
         */
        set: function (val) {
            this._attr('_display', 'block', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "full", {
        /**
         * @input {boolean} A button that fills its parent container without a border-radius or borders on the left/right.
         */
        set: function (val) {
            this._attr('_display', 'full', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "strong", {
        /**
         * @input {boolean} A button that has strong importance, ie. it represents an important action.
         */
        set: function (val) {
            this._attr('_decorator', 'strong', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "mode", {
        /**
         * @input {string} The mode to apply to this component.
         */
        set: function (val) {
            this._assignCss(false);
            this._mode = val;
            this._assignCss(true);
        },
        enumerable: true,
        configurable: true
    });
    /** @private */
    Button.prototype._attr = function (type, attrName, attrValue) {
        if (type === '_style') {
            this._updateColor(this._color, false);
        }
        this._setClass(this[type], false);
        if (isTrueProperty(attrValue)) {
            this[type] = attrName;
            this._setClass(attrName, true);
        }
        else {
            // Special handling for '_style' which defaults to 'default'.
            this[type] = (type === '_style' ? 'default' : null);
            this._setClass(this[type], true);
        }
        if (type === '_style') {
            this._updateColor(this._color, true);
        }
    };
    Object.defineProperty(Button.prototype, "color", {
        /**
         * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
         */
        set: function (val) {
            this._updateColor(this._color, false);
            this._updateColor(val, true);
            this._color = val;
        },
        enumerable: true,
        configurable: true
    });
    /** @private */
    Button.prototype.ngAfterContentInit = function () {
        this._init = true;
        this._assignCss(true);
    };
    /**
     * @private
     */
    Button.prototype.setRole = function (val) {
        this._assignCss(false);
        this._role = val;
        this._assignCss(true);
    };
    /**
     * @private
     */
    Button.prototype._assignCss = function (assignCssClass) {
        var role = this._role;
        if (role) {
            this.setElementClass(role, assignCssClass); // button
            this.setElementClass(role + "-" + this._mode, assignCssClass); // button
            this._setClass(this._style, assignCssClass); // button-clear
            this._setClass(this._shape, assignCssClass); // button-round
            this._setClass(this._display, assignCssClass); // button-full
            this._setClass(this._size, assignCssClass); // button-small
            this._setClass(this._decorator, assignCssClass); // button-strong
            this._updateColor(this._color, assignCssClass); // button-secondary, bar-button-secondary
        }
    };
    /**
     * @private
     */
    Button.prototype._setClass = function (type, assignCssClass) {
        if (type && this._init) {
            type = type.toLocaleLowerCase();
            this.setElementClass(this._role + "-" + type, assignCssClass);
            this.setElementClass(this._role + "-" + type + "-" + this._mode, assignCssClass);
        }
    };
    /**
     * @private
     */
    Button.prototype._updateColor = function (color, isAdd) {
        if (color && this._init) {
            // The class should begin with the button role
            // button, bar-button
            var className = this._role;
            // If the role is not a bar-button, don't apply the solid style
            var style = this._style;
            style = (this._role !== 'bar-button' && style === 'solid' ? 'default' : style);
            className += (style !== null && style !== '' && style !== 'default' ? '-' + style.toLowerCase() : '');
            if (color !== null && color !== '') {
                this.setElementClass(className + "-" + this._mode + "-" + color, isAdd);
            }
        }
    };
    Button.decorators = [
        { type: Component, args: [{
                    selector: '[ion-button]',
                    template: '<span class="button-inner">' +
                        '<ng-content></ng-content>' +
                        '</span>' +
                        '<div class="button-effect"></div>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Button.ctorParameters = [
        { type: undefined, decorators: [{ type: Attribute, args: ['ion-button',] },] },
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Button.propDecorators = {
        'large': [{ type: Input },],
        'small': [{ type: Input },],
        'default': [{ type: Input },],
        'outline': [{ type: Input },],
        'clear': [{ type: Input },],
        'solid': [{ type: Input },],
        'round': [{ type: Input },],
        'block': [{ type: Input },],
        'full': [{ type: Input },],
        'strong': [{ type: Input },],
        'mode': [{ type: Input },],
        'color': [{ type: Input },],
    };
    return Button;
}(Ion));
//# sourceMappingURL=button.js.map