import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Gesture } from '../../gestures/gesture';
import { Ion } from '../ion';
import { Swiper } from './swiper-widget';
/**
 * @name Slides
 * @description
 * The Slides component is a multi-section container. Each section can be swiped
 * or dragged between. It contains any number of [Slide](../Slide) components.
 *
 *
 * ### Creating
 * You should use a template to create slides and listen to slide events. The template
 * should contain the slide container, an `<ion-slides>` element, and any number of
 * [Slide](../Slide) components, written as `<ion-slide>`. Any configuration of the
 * slides should be passed in the `options` property of the `<ion-slides>` element.
 * You can listen to events such as the slide changing by placing the event on the
 * `<ion-slides>` element. See [Usage](#usage) below for more information on
 * creating slides.
 *
 *
 * ### Configuring
 * There are several configuration options that can be passed to Slides. These should
 * be passed in the `options` property of the `<ion-slides>` element upon creation.
 * You can allow the slides to loop around from the last to the first, set autoplay
 * on the slides so it will automatically switch between them, and more.
 *
 * Properties to pass in options:
 *
 * | Property              | Type      | Default        | Description                                                                                |
 * |-----------------------|-----------|----------------|--------------------------------------------------------------------------------------------|
 * | autoplay              | `number`  | -              | Delay between transitions (in ms). If this parameter is not passed, autoplay is disabled.  |
 * | direction             | `string`  | 'horizontal'   | Swipe direction: 'horizontal' or 'vertical'.                                               |
 * | initialSlide          | `number`  | 0              | Index number of initial slide                                                              |
 * | loop                  | `boolean` | false          | Whether to continuously loop from the last slide to the first slide.                       |
 * | pager                 | `boolean` | false          | Show the pagination bullets.                                                               |
 * | speed                 | `number`  | 300            | Duration of transition between slides (in ms).                                             |
 *
 * See [Usage](#usage) below for more information on configuring slides.
 *
 *
 * ### Navigating
 * After creating and configuring the slides, you can navigate between them
 * by swiping or calling methods on the `Slides` instance. You can call `slideTo()` to
 * navigate to a specific slide, or `slideNext()` to change to the slide that follows
 * the active slide. All of the [methods](#instance-members) provided by the `Slides`
 * instance are listed below. See [Usage](#usage) below for more information on
 * navigating between slides.
 *
 *
 * ### Limitations
 * The Slides component wraps the [Swiper](http://www.idangero.us/swiper/) component
 * built by iDangero.us. This means that all of the Swiper API isn't exposed on the
 * Slides component. See the [`getSlider()`](#getSlider) method for information on
 * getting the `Swiper` instance and using its methods directly.
 *
 *
 * @usage
 *
 * You can add slides to a `@Component` using the following template:
 *
 * ```html
 * <ion-slides>
 *   <ion-slide>
 *     <h1>Slide 1</h1>
 *   </ion-slide>
 *   <ion-slide>
 *     <h1>Slide 2</h1>
 *   </ion-slide>
 *   <ion-slide>
 *     <h1>Slide 3</h1>
 *   </ion-slide>
 * </ion-slides>
 * ```
 *
 * To add [options](#configuring), we will define them in `mySlideOptions` in our class `MyPage`:
 *
 * ```ts
 * import { Component } from '@angular/core';
 * import { Slides } from 'ionic-angular';
 *
 * @Component({
 *   templateUrl: 'my-page.html'
 * })
 * class MyPage {
 *   mySlideOptions = {
 *     initialSlide: 1,
 *     loop: true
 *   };
 * }
 * ```
 *
 * This is setting the second slide as the initial slide on load, since
 * the `initialSlide` begins at `0`. We are also setting `loop` to true which
 * allows us to swipe from the last slide to the first continuously. Then,
 * we will pass `mySlideOptions` in the `options` property of the `<ion-slides>`
 * element. We are using [property binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding)
 * on `options` because `mySlideOptions` is an expression:
 *
 * ```html
 * <ion-slides [options]="mySlideOptions">
 * ```
 *
 * To grab a reference to the Slides, we will add a [local template variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#local-vars)
 * to `<ion-slides>` called `mySlider`:
 *
 * ```html
 * <ion-slides #mySlider [options]="mySlideOptions">
 * ```
 *
 * Next, we can use `ViewChild` to assign the Slides instance to `slider`:
 *
 * ```ts
 * import { ViewChild } from '@angular/core';
 *
 * class MyPage {
 *   @ViewChild('mySlider') slider: Slides;
 *
 *   ...
 * }
 * ```
 *
 * Now we can call any of the `Slider` [methods](#instance-members),
 * for example we can use the Slider's `slideTo()` method in order to
 * navigate to a specific slide on a button click. Below we call the
 * `goToSlide()` method and it navigates to the 3rd slide:
 *
 * ```ts
 * class MyPage {
 *   ...
 *
 *   goToSlide() {
 *     this.slider.slideTo(2, 500);
 *   }
 * }
 * ```
 *
 * We can also add events to listen to on the `<ion-slides>` element.
 * Let's add the `ionDidChange` event and call a method when the slide changes:
 *
 * ```html
 * <ion-slides #mySlider (ionDidChange)="onSlideChanged()" [options]="mySlideOptions">
 * ```
 *
 * In our class, we add the `onSlideChanged()` method which gets the active
 * index and prints it:
 *
 * ```ts
 * class MyPage {
 *   ...
 *
 *   onSlideChanged() {
 *     let currentIndex = this.slider.getActiveIndex();
 *     console.log("Current index is", currentIndex);
 *   }
 * }
 * ```
 *
 * For all of the methods you can call on the `Slider` instance, see the
 * [Instance Members](#instance-members).
 *
 * @demo /docs/v2/demos/src/slides/
 * @see {@link /docs/v2/components#slides Slides Component Docs}
 *
 * Swiper.js:
 * The most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 */
export declare class Slides extends Ion {
    /**
     * @private
     */
    rapidUpdate: Function;
    /**
     * @private
     */
    id: number;
    /**
     * @private
     */
    slideId: string;
    /**
     * @private
     */
    showPager: boolean;
    /**
     * @private
     */
    slider: Swiper;
    /**
     * @private
     */
    maxScale: number;
    /**
     * @private
     */
    zoomElement: HTMLElement;
    /**
     * @private
     */
    zoomGesture: Gesture;
    /**
     * @private
     */
    scale: number;
    /**
     * @private
     */
    zoomLastPosX: number;
    /**
     * @private
     */
    zoomLastPosY: number;
    /**
     * @private
     */
    viewportWidth: number;
    /**
     * @private
     */
    viewportHeight: number;
    /**
     * @private
     */
    enableZoom: boolean;
    /**
     * @private
     */
    touch: {
        x: number;
        y: number;
        startX: number;
        startY: number;
        deltaX: number;
        deltaY: number;
        lastX: number;
        lastY: number;
        target: HTMLElement;
        zoomable: HTMLElement;
        zoomableWidth: number;
        zoomableHeight: number;
    };
    /**
     * @input {Object} Any configuration for the slides
     */
    options: any;
    /**
     * @private Deprecated
     */
    pager: any;
    /**
     * @private Deprecated
     */
    zoom: any;
    /**
     * @private Deprecated
     */
    zoomDuration: any;
    /**
     * @private Deprecated
     */
    zoomMax: any;
    /**
     * @output {any} Expression to evaluate when a slide change starts.
     */
    ionWillChange: EventEmitter<any>;
    /**
     * @output {any} Expression to evaluate when a slide change ends.
     */
    ionDidChange: EventEmitter<any>;
    /**
     * @output {any} Expression to evaluate when a slide moves.
     */
    ionDrag: EventEmitter<any>;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer);
    /**
     * @private
     */
    ngOnInit(): void;
    /**
     * @private
     */
    onTap(swiper: any, e: any): void;
    /**
     * @private
     */
    onClick(swiper: any, e: any): void;
    /**
     * @private
     */
    onDoubleTap(swiper: any, e: any): void;
    /**
     * @private
     */
    onLazyImageLoad(swiper: any, slide: any, img: any): void;
    /**
     * @private
     */
    onLazyImageReady(swiper: any, slide: any, img: any): void;
    /**
     * @private
     */
    initZoom(): void;
    /**
     * @private
     */
    resetZoom(): void;
    /**
     * @private
     */
    toggleZoom(swiper: any, e: any): void;
    /**
     * @private
     */
    onTransitionStart(swiper: any, e: any): void;
    /**
     * @private
     */
    onTransitionEnd(swiper: any, e: any): void;
    /**
     * @private
     */
    onTouchStart(e: any): void;
    /**
     * @private
     */
    onTouchMove(e: any): boolean;
    /**
     * @private
     */
    onTouchEnd(e: UIEvent): void;
    /**
     * @private
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    update(): void;
    /**
     * Transition to the specified slide.
     *
     * @param {number} index  The index number of the slide.
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks] Whether or not to emit the `ionWillChange`/`ionDidChange` events. Default true.
     */
    slideTo(index: number, speed?: number, runCallbacks?: boolean): void;
    /**
     * Transition to the next slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionWillChange`/`ionDidChange` events. Default true.
     */
    slideNext(speed?: number, runCallbacks?: boolean): void;
    /**
     * Transition to the previous slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionWillChange`/`ionDidChange` events. Default true.
     */
    slidePrev(speed?: number, runCallbacks?: boolean): void;
    /**
     * Get the index of the active slide.
     *
     * @returns {number} The index number of the current slide.
     */
    getActiveIndex(): number;
    /**
     * Get the index of the previous slide.
     *
     * @returns {number} The index number of the previous slide.
     */
    getPreviousIndex(): number;
    /**
     * Get the total number of slides.
     *
     * @returns {number} The total number of slides.
     */
    length(): number;
    /**
     * Get whether or not the current slide is the last slide.
     *
     * @returns {boolean} If the slide is the last slide or not.
     */
    isEnd(): boolean;
    /**
     * Get whether or not the current slide is the first slide.
     *
     * @returns {boolean} If the slide is the first slide or not.
     */
    isBeginning(): boolean;
    /**
     * Get the `Swiper` instance.
     *
     * The Slides component wraps the `Swiper` component built by iDangero.us. See the
     * [Swiper API Docs](http://idangero.us/swiper/api/) for information on using
     * the `Swiper` instance directly.
     *
     * @returns {Swiper}
     */
    getSlider(): Swiper;
}
/**
 * @name Slide
 * @description
 * The Slide component is a child component of [Slides](../Slides). The template
 * should be written as `ion-slide`. Any slide content should be written
 * in this component and it should be used in conjunction with [Slides](../Slides).
 *
 * See the [Slides API Docs](../Slides) for more usage information.
 *
 * @demo /docs/v2/demos/src/slides/
 * @see {@link /docs/v2/api/components/slides/Slides/ Slides API Docs}
 */
export declare class Slide {
    /**
     * @private
     */
    slides: Slides;
    /**
     * @private
     */
    ele: HTMLElement;
    /**
     * @private
     */
    zoom: any;
    constructor(elementRef: ElementRef, 
        /**
         * @private
         */
        slides: Slides);
    /**
     * @private
     */
    ngOnDestroy(): void;
}
/**
 * @private
 */
export declare class SlideLazy {
}
