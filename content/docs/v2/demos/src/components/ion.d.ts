import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../config/config';
/**
 * Base class for all Ionic components. Exposes some common functionality
 * that all Ionic components need, such as accessing underlying native elements and
 * sending/receiving app-level events.
 */
export declare class Ion {
    private _ionId;
    /** @private */
    _config: Config;
    /** @private */
    _elementRef: ElementRef;
    /** @private */
    _renderer: Renderer;
    /** @private */
    _color: string;
    /** @private */
    _mode: string;
    /** @private */
    _componentName: string;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer, componentName?: string);
    /** @private */
    setElementClass(className: string, isAdd: boolean): void;
    /** @private */
    setElementAttribute(attributeName: string, attributeValue: any): void;
    /** @private */
    setElementStyle(property: string, value: string): void;
    /** @private */
    _setColor(newColor: string, componentName?: string): void;
    /** @private */
    _setMode(newMode: string): void;
    /** @private */
    _setComponentName(): void;
    /** @private */
    getElementRef(): ElementRef;
    /** @private */
    getNativeElement(): any;
    /** @private */
    getDimensions(): {
        width: number;
        height: number;
        left: number;
        top: number;
    };
    /** @private */
    width(): number;
    /** @private */
    height(): number;
    /** @private */
    destroy(): void;
    /** internal */
    _getId(): string;
}
