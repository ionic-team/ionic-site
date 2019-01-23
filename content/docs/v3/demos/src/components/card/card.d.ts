import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
  * @private
  */
export declare class Card extends Ion {
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer);
}
/**
 * @private
 */
export declare class CardContent extends Ion {
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer);
}
/**
 * @private
 */
export declare class CardHeader extends Ion {
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer);
}
/**
 * @private
 */
export declare class CardTitle extends Ion {
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer);
}
