import { ElementRef } from '@angular/core';
/**
 * @name Scroll
 * @description
 * Scroll is a non-flexboxed scroll area that can scroll horizontally or vertically. `ion-Scroll` Can be used in places where you may not need a full page scroller, but a highly customized one, such as image scubber or comment scroller.
 * @usage
 * ```html
 * <ion-scroll scrollX="true">
 * </ion-scroll>
 *
 * <ion-scroll scrollY="true">
 * </ion-scroll>
 *
 * <ion-scroll scrollX="true" scrollY="true">
 * </ion-scroll>
 * ```
 * @demo /docs/v2/demos/src/scroll/
 */
export declare class Scroll {
    private _elementRef;
    _scrollX: boolean;
    _scrollY: boolean;
    _zoom: boolean;
    _maxZoom: number;
    /**
     * @input {boolean} whether to enable scrolling along the X axis
     */
    scrollX: any;
    /**
     * @input {boolean} whether to enable scrolling along the Y axis; requires the following CSS declaration: ion-scroll { white-space: nowrap; }
     */
    scrollY: any;
    /**
     * @input {boolean} whether to enable zooming
     */
    zoom: any;
    /**
     * @input {number} set the max zoom amount for ion-scroll
     */
    maxZoom: any;
    /**
     * @private
     */
    maxScale: number;
    /**
     * @private
     */
    zoomDuration: number;
    /**
     * @private
     */
    scrollElement: HTMLElement;
    constructor(_elementRef: ElementRef);
    /**
     * @private
     */
    ngOnInit(): void;
    /**
     * @private
     * Add a scroll event handler to the scroll element if it exists.
     * @param {Function} handler  The scroll handler to add to the scroll element.
     * @returns {?Function} a function to remove the specified handler, otherwise
     * undefined if the scroll element doesn't exist.
     */
    addScrollEventListener(handler: any): () => void;
}
