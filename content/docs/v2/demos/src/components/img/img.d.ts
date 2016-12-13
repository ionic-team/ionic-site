import { ElementRef, NgZone, OnDestroy, Renderer } from '@angular/core';
import { Content } from '../content/content';
import { DomController } from '../../util/dom-controller';
import { ImgLoader, ImgLoadCallback } from './img-loader';
import { Platform } from '../../platform/platform';
/**
 * @name Img
 * @description
 * Two of the biggest cuprits of scroll jank is starting up a new HTTP
 * request, and rendering images. These two reasons is largely why
 * `ion-img` was created. The standard HTML `img` element is often a large
 * source of these problems, and what makes matters worse is that the app
 * does not have fine-grained control of requests and rendering for each
 * `img` element.
 *
 * The `ion-img` component is similar to the standard `img` element,
 * but it also adds features in order to provide improved performance.
 * Features include only loading images which are visible, using web workers
 * for HTTP requests, preventing jank while scrolling and in-memory caching.
 *
 * Note that `ion-img` also comes with a few more restrictions in comparison
 * to the standard `img` element. A good rule is, if there are only a few
 * images to be rendered on a page, then the standard `img` is probably
 * best. However, if a page has the potential for hundreds or even thousands
 * of images within a scrollable area, then `ion-img` would be better suited
 * for the job.
 *
 *
 * ### Lazy Loading
 *
 * Lazy loading images refers to only loading images which are actually
 * visible within the user's viewport. This also means that images which are
 * not viewable on the initial load would not be downloaded or rendered. Next,
 * as the user scrolls, each image which becomes visible is then requested
 * then rendered on-demand.
 *
 * The benefits of this approach is that unnecessary and resource intensive
 * HTTP requests are not started, valuable bandwidth isn't wasted, and this
 * allows the browser to free up resources which would be wasted on images
 * which are not even viewable. For example, animated GIFs are enourmous
 * performance drains, however, with `ion-img` the app is able to dedicate
 * resources to just the viewable images. But again, if the problems listed
 * above are not problems within your app, then the standard `img` element
 * may be best.
 *
 *
 * ### Image Dimensions
 *
 * By providing image dimensions up front, Ionic is able to accurately size
 * up the image's location within the viewport, which helps lazy load only
 * images which are viewable. Image dimensions can either by set as
 * properties, inline styles, or external stylesheets. It doesn't matter
 * which method of setting dimensions is used, but it's important that somehow
 * each `ion-img` has been given an exact size.
 *
 * For example, by default `<ion-avatar>` and `<ion-thumbnail>` already come
 * with exact sizes when placed within an `<ion-item>`. By giving each image
 * an exact size, this then further locks in the size of each `ion-item`,
 * which again helps improve scroll performance.
 *
 * ```html
 * <!-- dimensions set using attributes -->
 * <ion-img width="80" height="80" src="..."></ion-img>
 *
 * <!-- dimensions set using input properties -->
 * <ion-img [width]="imgWidth" [height]="imgHeight" src="..."></ion-img>
 *
 * <!-- dimensions set using inline styles -->
 * <ion-img style="width: 80px; height: 80px;" src="..."></ion-img>
 * ```
 *
 * Additionally, each `ion-img` uses the `object-fit: cover` CSS property.
 * What this means is that the actual rendered image will center itself within
 * it's container. Or to really get detailed: The image is sized to maintain
 * its aspect ratio while filling the containing element’s entire content box.
 * Its concrete object size is resolved as a cover constraint against the
 * element’s used width and height.
 *
 *
 * ### Web Worker and XHR Requests
 *
 * Another big cause of scroll jank is kicking off a new HTTP request,
 * which is exactly what images do. Normally, this isn't a problem for
 * something like a blog since all image HTTP requests are started immediately
 * as HTML parses. However, Ionic has the ability to include hundreds, or even
 * thousands of images within one page, but its not actually loading all of
 * the images at the same time.
 *
 * Imagine an app where users can scroll slowly, or very quickly, through
 * thousands of images. If they're scrolling extremely fast, ideally the app
 * wouldn't want to start all of those image requests, but if they're scrolling
 * slowly they would. Additionally, most browsers can only have six requests at
 * one time for the same domain, so it's extemely important that we're managing
 * exacctly which images we should downloading. Basically we want to ensure
 * that the app is requesting the most important images, and aborting
 * unnecessary requests, which is another benefit of using `ion-img`.
 *
 * Next, by running the image request within a web worker, we're able to pass
 * off the heavy lifting to another thread. Not only are able to take the load
 * of the main thread, but we're also able to accurately control exactly which
 * images should be downloading, along with the ability to abort unnecessary
 * requests. Aborting requets is just as important so that Ionic can free up
 * connections for the most important images which are visible.
 *
 * One restriction however, is that all image requests must work with
 * [cross-origin HTTP requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).
 * Traditionally, the `img` element does not have this issue, but because
 * `ion-img` uses `XMLHttpRequest` within a web worker, then requests for
 * images must be served from the same domain, or the image server's response
 * must set the `Access-Control-Allow-Origin` HTTP header. Again, if your app
 * does not have the same problems which `ion-img` is solving, then it's
 * recommended to just use the standard `img` HTML element instead.
 *
 */
export declare class Img implements OnDestroy {
    private _ldr;
    private _elementRef;
    private _renderer;
    private _platform;
    private _zone;
    private _content;
    private _dom;
    /** @internal */
    _src: string;
    /** @internal */
    _requestingSrc: string;
    /** @internal */
    _renderedSrc: string;
    /** @internal */
    _tmpDataUri: string;
    /** @internal */
    _cache: boolean;
    /** @internal */
    _cb: ImgLoadCallback;
    /** @internal */
    _bounds: any;
    /** @internal */
    _rect: any;
    /** @internal */
    _w: string;
    /** @internal */
    _h: string;
    /** @internal */
    _wQ: string;
    /** @internal */
    _hQ: string;
    /** @private */
    canRequest: boolean;
    /** @private */
    canRender: boolean;
    constructor(_ldr: ImgLoader, _elementRef: ElementRef, _renderer: Renderer, _platform: Platform, _zone: NgZone, _content: Content, _dom: DomController);
    /**
     * @input {string} Image src.
     */
    src: string;
    /**
     * @private
     */
    reset(): void;
    /**
     * @private
     */
    update(): void;
    private _loadResponse(status, msg, datauri);
    /**
     * @internal
     */
    _isLoaded(isLoaded: boolean): void;
    /**
     * @internal
     */
    _srcAttr(srcAttr: string): void;
    /**
     * @private
     */
    readonly top: number;
    /**
     * @private
     */
    readonly bottom: number;
    private _getBounds();
    /**
     * @input {any}  Sets the bounding rectangle of the element relative to the viewport.
     * When using `VirtualScroll`, each virtual item should pass its bounds to each
     * `ion-img`. The passed in data object should include `top` and `bottom` properties.
     */
    bounds: any;
    /**
     * @input {boolean}  After an image has been successfully downloaded, it can be cached
     * in-memory. This is useful for `VirtualScroll` by allowing image responses to be
     * cached, and not rendered, until after scrolling has completed, which allows for
     * smoother scrolling.
     */
    cache: boolean;
    /**
     * @input {string}  Image width. If this property is not set it's important that
     * the dimensions are still set using CSS. If the dimension is just a number it
     * will assume the `px` unit.
     */
    width: string | number;
    /**
     * @input {string}  Image height. If this property is not set it's important that
     * the dimensions are still set using CSS. If the dimension is just a number it
     * will assume the `px` unit.
     */
    height: string | number;
    private _setDims();
    /**
     * @input {string}  Set the `alt` attribute which gets assigned to
     * the inner `img` element.
     */
    alt: string;
    /**
     * @private
     */
    ngOnDestroy(): void;
}
