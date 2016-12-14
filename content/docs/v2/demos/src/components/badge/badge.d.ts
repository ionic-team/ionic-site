import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
  * @name Badge
  * @module ionic
  * @description
  * Badges are simple components in Ionic containing numbers or text. You can display a badge to indicate that there is new information associated with the item it is on.
  * @see {@link /docs/v2/components/#badges Badges Component Docs}
 */
export declare class Badge extends Ion {
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
