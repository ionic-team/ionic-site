var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Optional, Output, Renderer, ViewEncapsulation } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DomController } from '../../util/dom-controller';
import { Ion } from '../ion';
import { isTrueProperty, assert, removeArrayItem } from '../../util/util';
import { Keyboard } from '../../util/keyboard';
import { ScrollView } from '../../util/scroll-view';
import { Tabs } from '../tabs/tabs';
import { transitionEnd } from '../../util/dom';
import { ViewController } from '../../navigation/view-controller';
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
export var Content = (function (_super) {
    __extends(Content, _super);
    function Content(config, elementRef, renderer, _app, _keyboard, _zone, viewCtrl, _tabs, _dom) {
        _super.call(this, config, elementRef, renderer, 'content');
        this._app = _app;
        this._keyboard = _keyboard;
        this._zone = _zone;
        this._tabs = _tabs;
        this._dom = _dom;
        /** @internal */
        this._scrollPadding = 0;
        /** @internal */
        this._inputPolling = false;
        /** @internal */
        this._imgs = [];
        /**
         * @output {ScrollEvent} Emitted when the scrolling first starts.
         */
        this.ionScrollStart = new EventEmitter();
        /**
         * @output {ScrollEvent} Emitted on every scroll event.
         */
        this.ionScroll = new EventEmitter();
        /**
         * @output {ScrollEvent} Emitted when scrolling ends.
         */
        this.ionScrollEnd = new EventEmitter();
        /**
         * @private
         */
        this.readReady = new EventEmitter();
        /**
         * @private
         */
        this.writeReady = new EventEmitter();
        this.statusbarPadding = config.getBoolean('statusbarPadding', false);
        this._imgReqBfr = config.getNumber('imgRequestBuffer', 1400);
        this._imgRndBfr = config.getNumber('imgRenderBuffer', 400);
        this._imgVelMax = config.getNumber('imgVelocityMax', 3);
        if (viewCtrl) {
            viewCtrl._setIONContent(this);
            viewCtrl._setIONContentRef(elementRef);
        }
        this._scroll = new ScrollView(_dom);
    }
    Object.defineProperty(Content.prototype, "contentHeight", {
        /**
         * Content height of the viewable area. This does not include content
         * which is outside the overflow area, or content area which is under
         * headers and footers. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this._scroll.ev.contentHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "contentWidth", {
        /**
         * Content width including content which is not visible on the screen
         * due to overflow. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this._scroll.ev.contentWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "scrollHeight", {
        /**
         * Content height including content which is not visible on the screen
         * due to overflow. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this._scroll.ev.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "scrollWidth", {
        /**
         * Content width including content which is not visible due to
         * overflow. Read-only.
         *
         * @return {number}
         */
        get: function () {
            return this._scroll.ev.scrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "scrollTop", {
        /**
         * The distance of the content's top to its topmost visible content.
         *
         * @return {number}
         */
        get: function () {
            return this._scroll.ev.scrollTop;
        },
        set: function (top) {
            this._scroll.setTop(top);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "scrollLeft", {
        /**
         * The distance of the content's left to its leftmost visible content.
         *
         * @return {number}
         */
        get: function () {
            return this._scroll.ev.scrollLeft;
        },
        set: function (top) {
            this._scroll.setLeft(top);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "isScrolling", {
        /**
         * If the content is actively scrolling or not.
         *
         * @return {boolean}
         */
        get: function () {
            return this._scroll.isScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "directionY", {
        /**
         * The current, or last known, vertical scroll direction. Possible
         * string values include `down` and `up`.
         *
         * @return {string}
         */
        get: function () {
            return this._scroll.ev.directionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content.prototype, "directionX", {
        /**
         * The current, or last known, horizontal scroll direction. Possible
         * string values include `right` and `left`.
         *
         * @return {string}
         */
        get: function () {
            return this._scroll.ev.directionX;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Content.prototype.ngOnInit = function () {
        var _this = this;
        if (this._scrollEle)
            return;
        var children = this._elementRef.nativeElement.children;
        assert(children && children.length >= 2, 'content needs at least two children');
        var scroll = this._scroll;
        scroll.ev.fixedElement = this._fixedEle = children[0];
        scroll.ev.scrollElement = this._scrollEle = children[1];
        // subscribe to the scroll start
        scroll.scrollStart.subscribe(function (ev) {
            _this.ionScrollStart.emit(ev);
        });
        // subscribe to every scroll move
        scroll.scroll.subscribe(function (ev) {
            // remind the app that it's currently scrolling
            _this._app.setScrolling();
            // emit to all of our other friends things be scrolling
            _this.ionScroll.emit(ev);
            _this.imgsUpdate();
        });
        // subscribe to the scroll end
        scroll.scrollEnd.subscribe(function (ev) {
            _this.ionScrollEnd.emit(ev);
            _this.imgsUpdate();
        });
    };
    /**
     * @private
     */
    Content.prototype.ngOnDestroy = function () {
        this._scLsn && this._scLsn();
        this._scroll && this._scroll.destroy();
        this._scrollEle = this._fixedEle = this._footerEle = this._scLsn = this._scroll = null;
    };
    /**
     * @private
     */
    Content.prototype.getScrollElement = function () {
        return this._scrollEle;
    };
    /**
     * @private
     */
    Content.prototype.onScrollElementTransitionEnd = function (callback) {
        transitionEnd(this._scrollEle, callback);
    };
    /**
     * Scroll to the specified position.
     *
     * @param {number} x  The x-value to scroll to.
     * @param {number} y  The y-value to scroll to.
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollTo = function (x, y, duration, done) {
        if (duration === void 0) { duration = 300; }
        console.debug("content, scrollTo started, y: " + y + ", duration: " + duration);
        return this._scroll.scrollTo(x, y, duration, done);
    };
    /**
     * Scroll to the top of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 300; }
        console.debug("content, scrollToTop, duration: " + duration);
        return this._scroll.scrollToTop(duration);
    };
    /**
     * Scroll to the bottom of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 300; }
        console.debug("content, scrollToBottom, duration: " + duration);
        return this._scroll.scrollToBottom(duration);
    };
    /**
     * @private
     */
    Content.prototype.enableJsScroll = function () {
        this._scroll.enableJsScroll(this._cTop, this._cBottom);
    };
    Object.defineProperty(Content.prototype, "fullscreen", {
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
        get: function () {
            return !!this._fullscreen;
        },
        set: function (val) {
            this._fullscreen = isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     */
    Content.prototype.addImg = function (img) {
        this._imgs.push(img);
    };
    /**
     * @private
     */
    Content.prototype.removeImg = function (img) {
        removeArrayItem(this._imgs, img);
    };
    /**
     * @private
     * DOM WRITE
     */
    Content.prototype.setScrollElementStyle = function (prop, val) {
        var _this = this;
        this._dom.write(function () {
            _this._scrollEle.style[prop] = val;
        });
    };
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
    Content.prototype.getContentDimensions = function () {
        var scrollEle = this._scrollEle;
        var parentElement = scrollEle.parentElement;
        return {
            contentHeight: parentElement.offsetHeight - this._cTop - this._cBottom,
            contentTop: this._cTop,
            contentBottom: this._cBottom,
            contentWidth: parentElement.offsetWidth,
            contentLeft: parentElement.offsetLeft,
            scrollHeight: scrollEle.scrollHeight,
            scrollTop: scrollEle.scrollTop,
            scrollWidth: scrollEle.scrollWidth,
            scrollLeft: scrollEle.scrollLeft,
        };
    };
    /**
     * @private
     * DOM WRITE
     * Adds padding to the bottom of the scroll element when the keyboard is open
     * so content below the keyboard can be scrolled into view.
     */
    Content.prototype.addScrollPadding = function (newPadding) {
        var _this = this;
        assert(typeof this._scrollPadding === 'number', '_scrollPadding must be a number');
        if (newPadding > this._scrollPadding) {
            console.debug("content, addScrollPadding, newPadding: " + newPadding + ", this._scrollPadding: " + this._scrollPadding);
            this._scrollPadding = newPadding;
            if (this._scrollEle) {
                this._dom.write(function () {
                    if (_this._scrollEle) {
                        _this._scrollEle.style.paddingBottom = (newPadding > 0) ? newPadding + 'px' : '';
                    }
                });
            }
        }
    };
    /**
     * @private
     * DOM WRITE
     */
    Content.prototype.clearScrollPaddingFocusOut = function () {
        var _this = this;
        if (!this._inputPolling) {
            console.debug("content, clearScrollPaddingFocusOut begin");
            this._inputPolling = true;
            this._keyboard.onClose(function () {
                console.debug("content, clearScrollPaddingFocusOut _keyboard.onClose");
                _this._inputPolling = false;
                _this._scrollPadding = -1;
                _this.addScrollPadding(0);
            }, 200, 3000);
        }
    };
    /**
     * Tell the content to recalculate its dimensions. This should be called
     * after dynamically adding headers, footers, or tabs.
     */
    Content.prototype.resize = function () {
        this._dom.read(this.readDimensions, this);
        this._dom.write(this.writeDimensions, this);
    };
    /**
     * @private
     * DOM READ
     */
    Content.prototype.readDimensions = function () {
        var cachePaddingTop = this._pTop;
        var cachePaddingRight = this._pRight;
        var cachePaddingBottom = this._pBottom;
        var cachePaddingLeft = this._pLeft;
        var cacheHeaderHeight = this._hdrHeight;
        var cacheFooterHeight = this._ftrHeight;
        var cacheTabsPlacement = this._tabsPlacement;
        var tabsTop = 0;
        this._pTop = 0;
        this._pRight = 0;
        this._pBottom = 0;
        this._pLeft = 0;
        this._hdrHeight = 0;
        this._ftrHeight = 0;
        this._tabsPlacement = null;
        this._tTop = 0;
        this._fTop = 0;
        this._fBottom = 0;
        var scrollEvent = this._scroll.ev;
        var ele = this._elementRef.nativeElement;
        if (!ele) {
            assert(false, 'ele should be valid');
            return;
        }
        var computedStyle;
        var tagName;
        var parentEle = ele.parentElement;
        var children = parentEle.children;
        for (var i = children.length - 1; i >= 0; i--) {
            ele = children[i];
            tagName = ele.tagName;
            if (tagName === 'ION-CONTENT') {
                scrollEvent.contentElement = ele;
                if (this._fullscreen) {
                    // ******** DOM READ ****************
                    computedStyle = getComputedStyle(ele);
                    this._pTop = parsePxUnit(computedStyle.paddingTop);
                    this._pBottom = parsePxUnit(computedStyle.paddingBottom);
                    this._pRight = parsePxUnit(computedStyle.paddingRight);
                    this._pLeft = parsePxUnit(computedStyle.paddingLeft);
                }
            }
            else if (tagName === 'ION-HEADER') {
                scrollEvent.headerElement = ele;
                // ******** DOM READ ****************
                this._hdrHeight = ele.clientHeight;
            }
            else if (tagName === 'ION-FOOTER') {
                scrollEvent.footerElement = ele;
                // ******** DOM READ ****************
                this._ftrHeight = ele.clientHeight;
                this._footerEle = ele;
            }
        }
        ele = parentEle;
        var tabbarEle;
        while (ele && ele.tagName !== 'ION-MODAL' && !ele.classList.contains('tab-subpage')) {
            if (ele.tagName === 'ION-TABS') {
                tabbarEle = ele.firstElementChild;
                // ******** DOM READ ****************
                this._tabbarHeight = tabbarEle.clientHeight;
                if (this._tabsPlacement === null) {
                    // this is the first tabbar found, remember it's position
                    this._tabsPlacement = ele.getAttribute('tabsplacement');
                }
            }
            ele = ele.parentElement;
        }
        // Tabs top
        if (this._tabs && this._tabsPlacement === 'top') {
            this._tTop = this._hdrHeight;
            tabsTop = this._tabs._top;
        }
        // Toolbar height
        this._cTop = this._hdrHeight;
        this._cBottom = this._ftrHeight;
        // Tabs height
        if (this._tabsPlacement === 'top') {
            this._cTop += this._tabbarHeight;
        }
        else if (this._tabsPlacement === 'bottom') {
            this._cBottom += this._tabbarHeight;
        }
        // Fixed content shouldn't include content padding
        this._fTop = this._cTop;
        this._fBottom = this._cBottom;
        // Handle fullscreen viewport (padding vs margin)
        if (this._fullscreen) {
            this._cTop += this._pTop;
            this._cBottom += this._pBottom;
        }
        // ******** DOM READ ****************
        var contentDimensions = this.getContentDimensions();
        scrollEvent.scrollHeight = contentDimensions.scrollHeight;
        scrollEvent.scrollWidth = contentDimensions.scrollWidth;
        scrollEvent.contentHeight = contentDimensions.contentHeight;
        scrollEvent.contentWidth = contentDimensions.contentWidth;
        scrollEvent.contentTop = contentDimensions.contentTop;
        scrollEvent.contentBottom = contentDimensions.contentBottom;
        this._dirty = (cachePaddingTop !== this._pTop ||
            cachePaddingBottom !== this._pBottom ||
            cachePaddingLeft !== this._pLeft ||
            cachePaddingRight !== this._pRight ||
            cacheHeaderHeight !== this._hdrHeight ||
            cacheFooterHeight !== this._ftrHeight ||
            cacheTabsPlacement !== this._tabsPlacement ||
            tabsTop !== this._tTop ||
            this._cTop !== this.contentTop ||
            this._cBottom !== this.contentBottom);
        this._scroll.init(this._scrollEle, this._cTop, this._cBottom);
        // initial imgs refresh
        this.imgsUpdate();
        this.readReady.emit();
    };
    /**
     * @private
     * DOM WRITE
     */
    Content.prototype.writeDimensions = function () {
        if (!this._dirty) {
            console.debug('Skipping writeDimensions');
            return;
        }
        var scrollEle = this._scrollEle;
        if (!scrollEle) {
            assert(false, 'this._scrollEle should be valid');
            return;
        }
        var fixedEle = this._fixedEle;
        if (!fixedEle) {
            assert(false, 'this._fixedEle should be valid');
            return;
        }
        // Tabs height
        if (this._tabsPlacement === 'bottom' && this._cBottom > 0 && this._footerEle) {
            var footerPos = this._cBottom - this._ftrHeight;
            assert(footerPos >= 0, 'footerPos has to be positive');
            // ******** DOM WRITE ****************
            this._footerEle.style.bottom = cssFormat(footerPos);
        }
        // Handle fullscreen viewport (padding vs margin)
        var topProperty = 'marginTop';
        var bottomProperty = 'marginBottom';
        var fixedTop = this._fTop;
        var fixedBottom = this._fBottom;
        if (this._fullscreen) {
            assert(this._pTop >= 0, '_paddingTop has to be positive');
            assert(this._pBottom >= 0, '_paddingBottom has to be positive');
            // adjust the content with padding, allowing content to scroll under headers/footers
            // however, on iOS you cannot control the margins of the scrollbar (last tested iOS9.2)
            // only add inline padding styles if the computed padding value, which would
            // have come from the app's css, is different than the new padding value
            topProperty = 'paddingTop';
            bottomProperty = 'paddingBottom';
        }
        // Only update top margin if value changed
        if (this._cTop !== this.contentTop) {
            assert(this._cTop >= 0, 'contentTop has to be positive');
            assert(fixedTop >= 0, 'fixedTop has to be positive');
            // ******** DOM WRITE ****************
            scrollEle.style[topProperty] = cssFormat(this._cTop);
            // ******** DOM WRITE ****************
            fixedEle.style.marginTop = cssFormat(fixedTop);
            this.contentTop = this._cTop;
        }
        // Only update bottom margin if value changed
        if (this._cBottom !== this.contentBottom) {
            assert(this._cBottom >= 0, 'contentBottom has to be positive');
            assert(fixedBottom >= 0, 'fixedBottom has to be positive');
            // ******** DOM WRITE ****************
            scrollEle.style[bottomProperty] = cssFormat(this._cBottom);
            // ******** DOM WRITE ****************
            fixedEle.style.marginBottom = cssFormat(fixedBottom);
            this.contentBottom = this._cBottom;
        }
        if (this._tabsPlacement !== null && this._tabs) {
            // set the position of the tabbar
            if (this._tabsPlacement === 'top') {
                // ******** DOM WRITE ****************
                this._tabs.setTabbarPosition(this._tTop, -1);
            }
            else {
                assert(this._tabsPlacement === 'bottom', 'tabsPlacement should be bottom');
                // ******** DOM WRITE ****************
                this._tabs.setTabbarPosition(-1, 0);
            }
        }
        this.writeReady.emit();
    };
    /**
     * @private
     */
    Content.prototype.imgsUpdate = function () {
        if (this._scroll.initialized && this._imgs.length && this.isImgsUpdatable()) {
            updateImgs(this._imgs, this.scrollTop, this.contentHeight, this.directionY, this._imgReqBfr, this._imgRndBfr);
        }
    };
    /**
     * @private
     */
    Content.prototype.isImgsUpdatable = function () {
        // an image is only "updatable" if the content isn't scrolling too fast
        // if scroll speed is above the maximum velocity, then let current
        // requests finish, but do not start new requets or render anything
        // if scroll speed is below the maximum velocity, then it's ok
        // to start new requests and render images
        return Math.abs(this._scroll.ev.velocityY) < this._imgVelMax;
    };
    Content.decorators = [
        { type: Component, args: [{
                    selector: 'ion-content',
                    template: '<div class="fixed-content">' +
                        '<ng-content select="[ion-fixed],ion-fab"></ng-content>' +
                        '</div>' +
                        '<div class="scroll-content">' +
                        '<ng-content></ng-content>' +
                        '</div>' +
                        '<ng-content select="ion-refresher"></ng-content>',
                    host: {
                        '[class.statusbar-padding]': 'statusbarPadding'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    Content.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: App, },
        { type: Keyboard, },
        { type: NgZone, },
        { type: ViewController, decorators: [{ type: Optional },] },
        { type: Tabs, decorators: [{ type: Optional },] },
        { type: DomController, },
    ];
    Content.propDecorators = {
        'ionScrollStart': [{ type: Output },],
        'ionScroll': [{ type: Output },],
        'ionScrollEnd': [{ type: Output },],
        'readReady': [{ type: Output },],
        'writeReady': [{ type: Output },],
        'fullscreen': [{ type: Input },],
    };
    return Content;
}(Ion));
export function updateImgs(imgs, viewableTop, contentHeight, scrollDirectionY, requestableBuffer, renderableBuffer) {
    // ok, so it's time to see which images, if any, should be requested and rendered
    // ultimately, if we're scrolling fast then don't bother requesting or rendering
    // when scrolling is done, then it needs to do a check to see which images are
    // important to request and render, and which image requests should be aborted.
    // Additionally, images which are not near the viewable area should not be
    // rendered at all in order to save browser resources.
    var viewableBottom = (viewableTop + contentHeight);
    var priority1 = [];
    var priority2 = [];
    var img;
    // all images should be paused
    for (var i = 0, ilen = imgs.length; i < ilen; i++) {
        img = imgs[i];
        if (scrollDirectionY === 'up') {
            // scrolling up
            if (img.top < viewableBottom && img.bottom > viewableTop - renderableBuffer) {
                // scrolling up, img is within viewable area
                // or about to be viewable area
                img.canRequest = img.canRender = true;
                priority1.push(img);
                continue;
            }
            if (img.bottom <= viewableTop && img.bottom > viewableTop - requestableBuffer) {
                // scrolling up, img is within requestable area
                img.canRequest = true;
                img.canRender = false;
                priority2.push(img);
                continue;
            }
            if (img.top >= viewableBottom && img.top < viewableBottom + renderableBuffer) {
                // scrolling up, img below viewable area
                // but it's still within renderable area
                // don't allow a reset
                img.canRequest = img.canRender = false;
                continue;
            }
        }
        else {
            // scrolling down
            if (img.bottom > viewableTop && img.top < viewableBottom + renderableBuffer) {
                // scrolling down, img is within viewable area
                // or about to be viewable area
                img.canRequest = img.canRender = true;
                priority1.push(img);
                continue;
            }
            if (img.top >= viewableBottom && img.top < viewableBottom + requestableBuffer) {
                // scrolling down, img is within requestable area
                img.canRequest = true;
                img.canRender = false;
                priority2.push(img);
                continue;
            }
            if (img.bottom <= viewableTop && img.bottom > viewableTop - renderableBuffer) {
                // scrolling down, img above viewable area
                // but it's still within renderable area
                // don't allow a reset
                img.canRequest = img.canRender = false;
                continue;
            }
        }
        img.canRequest = img.canRender = false;
        img.reset();
    }
    // update all imgs which are viewable
    priority1.sort(sortTopToBottom).forEach(function (i) { return i.update(); });
    if (scrollDirectionY === 'up') {
        // scrolling up
        priority2.sort(sortTopToBottom).reverse().forEach(function (i) { return i.update(); });
    }
    else {
        // scrolling down
        priority2.sort(sortTopToBottom).forEach(function (i) { return i.update(); });
    }
}
function sortTopToBottom(a, b) {
    if (a.top < b.top) {
        return -1;
    }
    if (a.top > b.top) {
        return 1;
    }
    return 0;
}
function parsePxUnit(val) {
    return (val.indexOf('px') > 0) ? parseInt(val, 10) : 0;
}
function cssFormat(val) {
    return (val > 0 ? val + 'px' : '');
}
//# sourceMappingURL=content.js.map