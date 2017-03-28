export declare const nativeRaf: any;
export declare const raf: any;
export declare const cancelRaf: any;
export declare const nativeTimeout: any;
export declare const clearNativeTimeout: any;
/**
 * Run a function in an animation frame after waiting `framesToWait` frames.
 *
 * @param framesToWait number how many frames to wait
 * @param callback Function the function call to defer
 * @return Function a function to call to cancel the wait
 */
export declare function rafFrames(framesToWait: number, callback: Function): () => void;
export declare function zoneRafFrames(framesToWait: number, callback: Function): void;
export declare const CSS: {
    transform?: string;
    transition?: string;
    transitionDuration?: string;
    transitionDelay?: string;
    transitionTimingFn?: string;
    transitionStart?: string;
    transitionEnd?: string;
    transformOrigin?: string;
    animationDelay?: string;
};
export declare function transitionEnd(el: HTMLElement, callback: Function): () => void;
export declare function ready(callback?: Function): Promise<any>;
export declare function windowLoad(callback?: Function): Promise<any>;
export declare function pointerCoord(ev: any): PointerCoordinates;
export declare function hasPointerMoved(threshold: number, startCoord: PointerCoordinates, endCoord: PointerCoordinates): boolean;
export declare function isActive(ele: HTMLElement): boolean;
export declare function hasFocus(ele: HTMLElement): boolean;
export declare function isTextInput(ele: any): boolean;
export declare const NON_TEXT_INPUT_REGEX: RegExp;
export declare function hasFocusedTextInput(): boolean;
export declare function focusOutActiveElement(): void;
export declare function copyInputAttributes(srcElement: HTMLElement, destElement: HTMLElement): void;
/**
 * Get the element offsetWidth and offsetHeight. Values are cached
 * to reduce DOM reads. Cache is cleared on a window resize.
 */
export declare function getDimensions(ele: HTMLElement, id: string): {
    width: number;
    height: number;
    left: number;
    top: number;
};
export declare function clearDimensions(id: string): void;
export declare function windowDimensions(): {
    width: number;
    height: number;
};
export declare function flushDimensionCache(): void;
export interface PointerCoordinates {
    x?: number;
    y?: number;
}
