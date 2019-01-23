import { ElementRef, Renderer } from '@angular/core';
import { App } from '../components/app/app';
import { Config } from '../config/config';
/**
 * @private
 */
export declare class ClickBlock {
    private elementRef;
    private renderer;
    private _tmr;
    private _showing;
    isEnabled: boolean;
    constructor(app: App, config: Config, elementRef: ElementRef, renderer: Renderer);
    activate(shouldShow: boolean, expire?: number): void;
    /** @internal */
    _activate(shouldShow: boolean): void;
    private _setElementClass(className, add);
}
