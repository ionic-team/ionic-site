import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DomController } from '../../util/dom-controller';
import { Img } from '../img/img';
import { Ion } from '../ion';
import { Keyboard } from '../../util/keyboard';
import { ScrollView, ScrollEvent } from '../../util/scroll-view';
import { Tabs } from '../tabs/tabs';
import { ViewController } from '../../navigation/view-controller';
export { ScrollEvent } from '../../util/scroll-view';
/**
 * @name Content
 * @description
 * The Content component provides an easy to use content area with
 * some useful methods to control the scrollable area.
 *
 * The content area can also implement pull-to-refresh with the
 * [Refresher](../../refresher/Refresher) component.
 *
 * @usage
 * ```html
 * <ion-content>
 *   Add your content here!
 * </ion-content>
 * ```
 *
 * To get a reference to the content component from a Page's logic,
 * you can use Angular's `@ViewChild` annotation:
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { Content } from 'ionic-angular';
 *
 * @Component({...})
 * export class MyPage{
 *   @ViewChild(Content) content: Content;
 *
 *   scrollToTop() {
 *     this.content.scrollToTop();
 *   }
 * }
 * ```
 *
 * @advanced
 *
 * Resizing the content
 *
 *
 * ```ts
 * @Component({
 *   template: `
 *     <ion-header>
 *       <ion-navbar>
 *         <ion-title>Main Navbar</ion-title>
 *       </ion-navbar>
 *       <ion-toolbar *ngIf="showToolbar">
 *         <ion-title>Dynamic Toolbar</ion-title>
 *       </ion-toolbar>
 *     </ion-header>
 *     <ion-content>
 *       <button ion-button (click)="toggleToolbar()">Toggle Toolbar</button>
 *     </ion-content>
 * `})
 *
 * class E2EPage {
 *   @ViewChild(Content) content: Content;
 *   showToolbar: boolean = false;
 *
 *   toggleToolbar() {
 *     this.showToolbar = !this.showToolbar;
 *     this.content.resize();
 *   }
 * }
 * ```
 *
 *
 * Scroll to a specific position
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { Content } from 'ionic-angular';
 *
 * @Component({
 *   template: `<ion-content>
 *                <button ion-button (click)="scrollTo()">Down 500px</button>
 *              </ion-content>`
 * )}
 * export class MyPage{
 *   @ViewChild(Content) content: Content;
 *
 *   scrollTo() {
 *     // set the scrollLeft to 0px, and scrollTop to 500px
 *     // the scroll duration should take 200ms
 *     this.content.scrollTo(0, 500, 200);
 *   }
 * }
 * ```
 *
 */
export declare class Content extends Ion implements OnDestroy, OnInit {
    _app: App;
    _keyboard: Keyboard;
    _zone: NgZone;
    _tabs: Tabs;
    private _dom;
    /** @internal */
    _cTop: number;
    /** @internal */
    _cBottom: number;
    /** @internal */
    _pTop: number;
    /** @internal */
    _pRight: number;
    /** @internal */
    _pBottom: number;
    /** @internal */
    _pLeft: number;
    /** @internal */
    _scrollPadding: number;
    /** @internal */
    _hdrHeight: number;
    /** @internal */
    _ftrHeight: number;
    /** @internal */
    _tabbarHeight: number;
    /** @internal */
    _tabsPlacement: string;
    /** @internal */
    _tTop: number;
    /** @internal */
    _fTop: number;
    /** @internal */
    _fBottom: number;
    /** @internal */
    _inputPolling: boolean;
    /** @internal */
    _scroll: ScrollView;
    /** @internal */
    _scLsn: Function;
    /** @internal */
    _fullscreen: boolean;
    /** @internal */
    _footerEle: HTMLElement;
    /** @internal */
    _dirty: boolean;
    /** @internal */
    _scrollEle: HTMLElement;
    /** @internal */
    _fixedEle: HTMLElement;
    /** @internal */
    _imgs: Img[];
    private _imgReqBfr;
    private _imgRndBfr;
    private _imgVelMax;
    /** @private */
    statusbarPadding: boolean;
    /**
     * Content height of the viewable area. This does not include content
     * which is outside the overflow area, or content area which is under
     * headers and footers. Read-only.
     *
     * @return {number}
     */
    readonly contentHeight: number;
    /**
     * Content width including content which is not visible on the screen
     * due to overflow. Read-only.
     *
     * @return {number}
     */
    readonly contentWidth: number;
    /**
     * A number representing how many pixels the top of the content has been
     * adjusted, which could be by either padding or margin. This adjustment
     * is to account for the space needed for the header.
     *
     * @return {number}
     */
    contentTop: number;
    /**
     * A number representing how many pixels the bottom of the content has been
     * adjusted, which could be by either padding or margin. This adjustment
     * is to account for the space needed for the footer.
     *
     * @return {number}
     */
    contentBottom: number;
    /**
     * Content height including content which is not visible on the screen
     * due to overflow. Read-only.
     *
     * @return {number}
     */
    readonly scrollHeight: number;
    /**
     * Content width including content which is not visible due to
     * overflow. Read-only.
     *
     * @return {number}
     */
    readonly scrollWidth: number;
    /**
     * The distance of the content's top to its topmost visible content.
     *
     * @return {number}
     */
    scrollTop: number;
    /**
     * The distance of the content's left to its leftmost visible content.
     *
     * @return {number}
     */
    scrollLeft: number;
    /**
     * If the content is actively scrolling or not.
     *
     * @return {boolean}
     */
    readonly isScrolling: boolean;
    /**
     * The current, or last known, vertical scroll direction. Possible
     * string values include `down` and `up`.
     *
     * @return {string}
     */
    readonly directionY: string;
    /**
     * The current, or last known, horizontal scroll direction. Possible
     * string values include `right` and `left`.
     *
     * @return {string}
     */
    readonly directionX: string;
    /**
     * @output {ScrollEvent} Emitted when the scrolling first starts.
     */
    ionScrollStart: EventEmitter<ScrollEvent>;
    /**
     * @output {ScrollEvent} Emitted on every scroll event.
     */
    ionScroll: EventEmitter<ScrollEvent>;
    /**
     * @output {ScrollEvent} Emitted when scrolling ends.
     */
    ionScrollEnd: EventEmitter<ScrollEvent>;
    /**
     * @private
     */
    readReady: EventEmitter<any>;
    /**
     * @private
     */
    writeReady: EventEmitter<any>;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer, _app: App, _keyboard: Keyboard, _zone: NgZone, viewCtrl: ViewController, _tabs: Tabs, _dom: DomController);
    /**
     * @private
     */
    ngOnInit(): void;
    /**
     * @private
     */
    ngOnDestroy(): void;
    /**
     * @private
     */
    getScrollElement(): HTMLElement;
    /**
     * @private
     */
    onScrollElementTransitionEnd(callback: Function): void;
    /**
     * Scroll to the specified position.
     *
     * @param {number} x  The x-value to scroll to.
     * @param {number} y  The y-value to scroll to.
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollTo(x: number, y: number, duration?: number, done?: Function): Promise<any>;
    /**
     * Scroll to the top of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollToTop(duration?: number): Promise<any>;
    /**
     * Scroll to the bottom of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    scrollToBottom(duration?: number): Promise<any>;
    /**
     * @private
     */
    enableJsScroll(): void;
    /**
     * @input {boolean} By default, content is positioned between the headers
     * and footers. However, using `fullscreen="true"`, the content will be
     * able to scroll "under" the headers and footers. At first glance the
     * fullscreen option may not look any different than the default, however,
     * by adding a transparency effect to a header then the content can be
     * seen under the header as the user scrolls.
     *
     * @returns {boolean}
     */
    fullscreen: boolean;
    /**
     * @private
     */
    addImg(img: Img): void;
    /**
     * @private
     */
    removeImg(img: Img): void;
    /**
     * @private
     * DOM WRITE
     */
    setScrollElementStyle(prop: string, val: any): void;
    /**
     * Returns the content and scroll elements' dimensions.
     * @returns {object} dimensions  The content and scroll elements' dimensions
     * {number} dimensions.contentHeight  content offsetHeight
     * {number} dimensions.contentTop  content offsetTop
     * {number} dimensions.contentBottom  content offsetTop+offsetHeight
     * {number} dimensions.contentWidth  content offsetWidth
     * {number} dimensions.contentLeft  content offsetLeft
     * {number} dimensions.contentRight  content offsetLeft + offsetWidth
     * {number} dimensions.scrollHeight  scroll scrollHeight
     * {number} dimensions.scrollTop  scroll scrollTop
     * {number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
     * {number} dimensions.scrollWidth  scroll scrollWidth
     * {number} dimensions.scrollLeft  scroll scrollLeft
     * {number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
     */
    getContentDimensions(): ContentDimensions;
    /**
     * @private
     * DOM WRITE
     * Adds padding to the bottom of the scroll element when the keyboard is open
     * so content below the keyboard can be scrolled into view.
     */
    addScrollPadding(newPadding: number): void;
    /**
     * @private
     * DOM WRITE
     */
    clearScrollPaddingFocusOut(): void;
    /**
     * Tell the content to recalculate its dimensions. This should be called
     * after dynamically adding headers, footers, or tabs.
     */
    resize(): void;
    /**
     * @private
     * DOM READ
     */
    readDimensions(): void;
    /**
     * @private
     * DOM WRITE
     */
    writeDimensions(): void;
    /**
     * @private
     */
    imgsUpdate(): void;
    /**
     * @private
     */
    isImgsUpdatable(): boolean;
}
export declare function updateImgs(imgs: Img[], viewableTop: number, contentHeight: number, scrollDirectionY: string, requestableBuffer: number, renderableBuffer: number): void;
export interface ContentDimensions {
    contentHeight: number;
    contentTop: number;
    contentBottom: number;
    contentWidth: number;
    contentLeft: number;
    scrollHeight: number;
    scrollTop: number;
    scrollWidth: number;
    scrollLeft: number;
}
