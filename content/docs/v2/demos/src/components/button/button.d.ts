import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
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
export declare class Button extends Ion {
    /** @private */
    _role: string;
    /** @private */
    _size: string;
    /** @private */
    _style: string;
    /** @private */
    _shape: string;
    /** @private */
    _display: string;
    /** @private */
    _decorator: string;
    /** @private */
    _init: boolean;
    /**
     * @input {boolean} Large button.
     */
    large: boolean;
    /**
     * @input {boolean} Small button.
     */
    small: boolean;
    /**
     * @input {boolean} Default button.
     */
    default: boolean;
    /**
     * @input {boolean} A transparent button with a border.
     */
    outline: boolean;
    /**
     * @input {boolean} A transparent button without a border.
     */
    clear: boolean;
    /**
     * @input {boolean} Force a solid button. Useful for buttons within an item.
     */
    solid: boolean;
    /**
     * @input {boolean} A button with rounded corners.
     */
    round: boolean;
    /**
     * @input {boolean} A button that fills its parent container with a border-radius.
     */
    block: boolean;
    /**
     * @input {boolean} A button that fills its parent container without a border-radius or borders on the left/right.
     */
    full: boolean;
    /**
     * @input {boolean} A button that has strong importance, ie. it represents an important action.
     */
    strong: boolean;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    /** @private */
    _attr(type: string, attrName: string, attrValue: boolean): void;
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    constructor(ionButton: string, config: Config, elementRef: ElementRef, renderer: Renderer);
    /** @private */
    ngAfterContentInit(): void;
    /**
     * @private
     */
    setRole(val: string): void;
    /**
     * @private
     */
    _assignCss(assignCssClass: boolean): void;
    /**
     * @private
     */
    _setClass(type: string, assignCssClass: boolean): void;
    /**
     * @private
     */
    _updateColor(color: string, isAdd: boolean): void;
}
