var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component, Directive, ElementRef, EventEmitter, Input, Host, Output, Renderer, ViewEncapsulation } from '@angular/core';
import { Animation } from '../../animations/animation';
import { Config } from '../../config/config';
import { Gesture } from '../../gestures/gesture';
import { CSS } from '../../util/dom';
import { debounce, defaults, isTrueProperty, isPresent } from '../../util/util';
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
 * @demo /docs//demos/src/slides/
 * @see {@link /docs//components#slides Slides Component Docs}
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
export var Slides = (function (_super) {
    __extends(Slides, _super);
    function Slides(config, elementRef, renderer) {
        var _this = this;
        _super.call(this, config, elementRef, renderer, 'slides');
        /**
         * @output {any} Expression to evaluate when a slide change starts.
         */
        this.ionWillChange = new EventEmitter();
        /**
         * @output {any} Expression to evaluate when a slide change ends.
         */
        this.ionDidChange = new EventEmitter();
        /**
         * @output {any} Expression to evaluate when a slide moves.
         */
        this.ionDrag = new EventEmitter();
        this.rapidUpdate = debounce(function () {
            _this.update();
        }, 10);
        this.id = ++slidesId;
        this.slideId = 'slides-' + this.id;
        this.setElementClass(this.slideId, true);
    }
    /**
     * @private
     */
    Slides.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.options) {
            this.options = {};
        }
        if (isPresent(this.options.pager)) {
            this.showPager = isTrueProperty(this.options.pager);
        }
        var paginationId = '.' + this.slideId + ' .swiper-pagination';
        var options = defaults({
            pagination: paginationId
        }, this.options);
        options.onTap = function (swiper, e) {
            _this.onTap(swiper, e);
            return _this.options.onTap && _this.options.onTap(swiper, e);
        };
        options.onClick = function (swiper, e) {
            _this.onClick(swiper, e);
            return _this.options.onClick && _this.options.onClick(swiper, e);
        };
        options.onDoubleTap = function (swiper, e) {
            _this.onDoubleTap(swiper, e);
            return _this.options.onDoubleTap && _this.options.onDoubleTap(swiper, e);
        };
        options.onTransitionStart = function (swiper, e) {
            _this.onTransitionStart(swiper, e);
            return _this.options.onTransitionStart && _this.options.onTransitionStart(swiper, e);
        };
        options.onTransitionEnd = function (swiper, e) {
            _this.onTransitionEnd(swiper, e);
            return _this.options.onTransitionEnd && _this.options.onTransitionEnd(swiper, e);
        };
        options.onSlideChangeStart = function (swiper) {
            _this.ionWillChange.emit(swiper);
            return _this.options.onSlideChangeStart && _this.options.onSlideChangeStart(swiper);
        };
        options.onSlideChangeEnd = function (swiper) {
            _this.ionDidChange.emit(swiper);
            return _this.options.onSlideChangeEnd && _this.options.onSlideChangeEnd(swiper);
        };
        options.onLazyImageLoad = function (swiper, slide, img) {
            return _this.options.onLazyImageLoad && _this.options.onLazyImageLoad(swiper, slide, img);
        };
        options.onLazyImageReady = function (swiper, slide, img) {
            return _this.options.onLazyImageReady && _this.options.onLazyImageReady(swiper, slide, img);
        };
        options.onSliderMove = function (swiper, e) {
            _this.ionDrag.emit(swiper);
            return _this.options.onSliderMove && _this.options.onSliderMove(swiper, e);
        };
        setTimeout(function () {
            var swiper = new Swiper(_this.getNativeElement().children[0], options);
            _this.slider = swiper;
        }, 300);
        /*
        * TODO: Finish this
        if (isTrueProperty(this.zoom)) {
          this.enableZoom = true;
          setTimeout(() => {
            this.initZoom();
          })
        }
        */
    };
    /**
     * @private
     */
    Slides.prototype.onTap = function (swiper, e) {
    };
    /**
     * @private
     */
    Slides.prototype.onClick = function (swiper, e) {
    };
    /**
     * @private
     */
    Slides.prototype.onDoubleTap = function (swiper, e) {
        this.toggleZoom(swiper, e);
    };
    /**
     * @private
     */
    Slides.prototype.onLazyImageLoad = function (swiper, slide, img) {
    };
    /**
     * @private
     */
    Slides.prototype.onLazyImageReady = function (swiper, slide, img) {
    };
    /*
    nextButton(swiper: any, e: any) {
    }
    prevButton() {
    }
    indexButton() {
    }
    */
    /**
     * @private
     */
    Slides.prototype.initZoom = function () {
        var _this = this;
        this.zoomDuration = this.zoomDuration || 230;
        this.maxScale = this.zoomMax || 3;
        this.zoomElement = this.getNativeElement().children[0].children[0];
        this.zoomElement && this.zoomElement.classList.add('ion-scroll-zoom');
        this.zoomGesture = new Gesture(this.zoomElement);
        this.zoomGesture.listen();
        this.scale = 1;
        this.zoomLastPosX = 0;
        this.zoomLastPosY = 0;
        var lastScale, zoomRect;
        this.viewportWidth = this.getNativeElement().offsetWidth;
        this.viewportHeight = this.getNativeElement().offsetHeight;
        this.zoomElement.addEventListener('touchstart', function (e) {
            _this.onTouchStart(e);
        });
        this.zoomElement.addEventListener('touchmove', function (e) {
            _this.onTouchMove(e);
        });
        this.zoomElement.addEventListener('touchend', function (e) {
            _this.onTouchEnd(e);
        });
        this.zoomGesture.on('pinchstart', function (e) {
            lastScale = _this.scale;
            console.debug('Last scale', e.scale);
        });
        this.zoomGesture.on('pinch', function (e) {
            _this.scale = Math.max(1, Math.min(lastScale * e.scale, 10));
            console.debug('Scaling', _this.scale);
            _this.zoomElement.style[CSS.transform] = 'scale(' + _this.scale + ')';
            zoomRect = _this.zoomElement.getBoundingClientRect();
        });
        this.zoomGesture.on('pinchend', function () {
            // last_scale = Math.max(1, Math.min(last_scale * e.scale, 10));
            if (_this.scale > _this.maxScale) {
                var za = new Animation(_this.zoomElement)
                    .duration(_this.zoomDuration)
                    .easing('linear')
                    .from('scale', _this.scale)
                    .to('scale', _this.maxScale);
                za.play();
                _this.scale = _this.maxScale;
            }
        });
    };
    /**
     * @private
     */
    Slides.prototype.resetZoom = function () {
        if (this.zoomElement) {
            this.zoomElement.parentElement.style[CSS.transform] = '';
            this.zoomElement.style[CSS.transform] = 'scale(1)';
        }
        this.scale = 1;
        this.zoomLastPosX = 0;
        this.zoomLastPosY = 0;
    };
    /**
     * @private
     */
    Slides.prototype.toggleZoom = function (swiper, e) {
        console.debug('Try toggle zoom');
        if (!this.enableZoom) {
            return;
        }
        console.debug('Toggling zoom', e);
        /*
        let x = e.pointers[0].clientX;
        let y = e.pointers[0].clientY;
    
        let mx = this.viewportWidth / 2;
        let my = this.viewportHeight / 2;
    
        let tx, ty;
    
        if (x > mx) {
          // Greater than half
          tx = -x;
        } else {
          // Less than or equal to half
          tx = (this.viewportWidth - x);
        }
        if (y > my) {
          ty = -y;
        } else {
          ty = y-my;
        }
    
        */
        var zi = new Animation(this.touch.target.children[0])
            .duration(this.zoomDuration)
            .easing('linear');
        // let zw = new Animation(this.touch.target.children[0])
        //   .duration(this.zoomDuration)
        //   .easing('linear');
        var za = new Animation();
        za.add(zi);
        if (this.scale > 1) {
            // zoom out
            // zw.fromTo('translateX', posX + 'px', '0px');
            // zw.fromTo('translateY', posY + 'px', '0px');
            zi.from('scale', this.scale);
            zi.to('scale', 1);
            za.play();
            // posX = 0;
            // posY = 0;
            this.scale = 1;
        }
        else {
            // zoom in
            // zw.fromTo('translateX', posX + 'px', tx + 'px');
            // zw.fromTo('translateY', posY + 'px', ty + 'px');
            zi.from('scale', this.scale);
            zi.to('scale', this.maxScale);
            za.play();
            // posX = tx;
            // posY = ty;
            this.scale = this.maxScale;
        }
    };
    /**
     * @private
     */
    Slides.prototype.onTransitionStart = function (swiper, e) {
    };
    /**
     * @private
     */
    Slides.prototype.onTransitionEnd = function (swiper, e) {
    };
    /**
     * @private
     */
    Slides.prototype.onTouchStart = function (e) {
        console.debug('Touch start', e);
        // TODO: Support mice as well
        var target = e.target.closest('.slide').children[0].children[0];
        this.touch = {
            x: null,
            y: null,
            startX: e.touches[0].clientX,
            startY: e.touches[0].clientY,
            deltaX: 0,
            deltaY: 0,
            lastX: 0,
            lastY: 0,
            target: target.parentElement,
            zoomable: target,
            zoomableWidth: target.offsetWidth,
            zoomableHeight: target.offsetHeight
        };
        console.debug('Target', this.touch.target);
        // TODO: android prevent default
    };
    /**
     * @private
     */
    Slides.prototype.onTouchMove = function (e) {
        this.touch.deltaX = e.touches[0].clientX - this.touch.startX;
        this.touch.deltaY = e.touches[0].clientY - this.touch.startY;
        // TODO: Make sure we need to transform (image is bigger than viewport)
        var zoomableScaledWidth = this.touch.zoomableWidth * this.scale;
        var zoomableScaledHeight = this.touch.zoomableHeight * this.scale;
        var x1 = Math.min((this.viewportWidth / 2) - zoomableScaledWidth / 2, 0);
        var x2 = -x1;
        var y1 = Math.min((this.viewportHeight / 2) - zoomableScaledHeight / 2, 0);
        var y2 = -y1;
        console.debug('BOUNDS', x1, x2, y1, y2);
        if (this.scale <= 1) {
            return;
        }
        console.debug('PAN', e);
        // move image
        this.touch.x = this.touch.deltaX + this.touch.lastX;
        this.touch.y = this.touch.deltaY + this.touch.lastY;
        if (this.touch.x < x1) {
            console.debug('OUT ON LEFT');
        }
        if (this.touch.x > x2) {
            console.debug('OUT ON RIGHT');
        }
        if (this.touch.x > this.viewportWidth) {
        }
        else if (-this.touch.x > this.viewportWidth) {
        }
        else {
            console.debug('TRANSFORM', this.touch.x, this.touch.y, this.touch.target);
            // this.touch.target.style[CSS.transform] = 'translateX(' + this.touch.x + 'px) translateY(' + this.touch.y + 'px)';
            this.touch.target.style[CSS.transform] = 'translateX(' + this.touch.x + 'px) translateY(' + this.touch.y + 'px)';
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    };
    /**
     * @private
     */
    Slides.prototype.onTouchEnd = function (e) {
        console.debug('PANEND', e);
        if (this.scale > 1) {
            if (Math.abs(this.touch.x) > this.viewportWidth) {
                // TODO what is posX?
                var posX = posX > 0 ? this.viewportWidth - 1 : -(this.viewportWidth - 1);
                console.debug('Setting on posx', this.touch.x);
            }
            /*
            if (posY > this.viewportHeight/2) {
              let z = new Animation(this.zoomElement.parentElement);
              z.fromTo('translateY', posY + 'px', Math.min(this.viewportHeight/2 + 30, posY));
              z.play();
            } else {
              let z = new Animation(this.zoomElement.parentElement);
              z.fromTo('translateY', posY + 'px', Math.max(this.viewportHeight/2 - 30, posY));
              z.play();
            }
            */
            this.touch.lastX = this.touch.x;
            this.touch.lastY = this.touch.y;
        }
    };
    /**
     * @private
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    Slides.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            _this.slider.update();
            // Don't allow pager to show with > 10 slides
            if (_this.length() > 10) {
                _this.showPager = false;
            }
        }, 300);
    };
    /**
     * Transition to the specified slide.
     *
     * @param {number} index  The index number of the slide.
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks] Whether or not to emit the `ionWillChange`/`ionDidChange` events. Default true.
     */
    Slides.prototype.slideTo = function (index, speed, runCallbacks) {
        this.slider.slideTo(index, speed, runCallbacks);
    };
    /**
     * Transition to the next slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionWillChange`/`ionDidChange` events. Default true.
     */
    Slides.prototype.slideNext = function (speed, runCallbacks) {
        this.slider.slideNext(runCallbacks, speed);
    };
    /**
     * Transition to the previous slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionWillChange`/`ionDidChange` events. Default true.
     */
    Slides.prototype.slidePrev = function (speed, runCallbacks) {
        this.slider.slidePrev(runCallbacks, speed);
    };
    /**
     * Get the index of the active slide.
     *
     * @returns {number} The index number of the current slide.
     */
    Slides.prototype.getActiveIndex = function () {
        return this.slider.activeIndex;
    };
    /**
     * Get the index of the previous slide.
     *
     * @returns {number} The index number of the previous slide.
     */
    Slides.prototype.getPreviousIndex = function () {
        return this.slider.previousIndex;
    };
    /**
     * Get the total number of slides.
     *
     * @returns {number} The total number of slides.
     */
    Slides.prototype.length = function () {
        return this.slider.slides.length;
    };
    /**
     * Get whether or not the current slide is the last slide.
     *
     * @returns {boolean} If the slide is the last slide or not.
     */
    Slides.prototype.isEnd = function () {
        return this.slider.isEnd;
    };
    /**
     * Get whether or not the current slide is the first slide.
     *
     * @returns {boolean} If the slide is the first slide or not.
     */
    Slides.prototype.isBeginning = function () {
        return this.slider.isBeginning;
    };
    /**
     * Get the `Swiper` instance.
     *
     * The Slides component wraps the `Swiper` component built by iDangero.us. See the
     * [Swiper API Docs](http://idangero.us/swiper/api/) for information on using
     * the `Swiper` instance directly.
     *
     * @returns {Swiper}
     */
    Slides.prototype.getSlider = function () {
        return this.slider;
    };
    Slides.decorators = [
        { type: Component, args: [{
                    selector: 'ion-slides',
                    template: '<div class="swiper-container">' +
                        '<div class="swiper-wrapper">' +
                        '<ng-content></ng-content>' +
                        '</div>' +
                        '<div [class.hide]="!showPager" class="swiper-pagination"></div>' +
                        '</div>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Slides.ctorParameters = [
        { type: Config, },
        { type: ElementRef, },
        { type: Renderer, },
    ];
    Slides.propDecorators = {
        'options': [{ type: Input },],
        'pager': [{ type: Input },],
        'zoom': [{ type: Input },],
        'zoomDuration': [{ type: Input },],
        'zoomMax': [{ type: Input },],
        'ionWillChange': [{ type: Output },],
        'ionDidChange': [{ type: Output },],
        'ionDrag': [{ type: Output },],
    };
    return Slides;
}(Ion));
/**
 * @name Slide
 * @description
 * The Slide component is a child component of [Slides](../Slides). The template
 * should be written as `ion-slide`. Any slide content should be written
 * in this component and it should be used in conjunction with [Slides](../Slides).
 *
 * See the [Slides API Docs](../Slides) for more usage information.
 *
 * @demo /docs//demos/src/slides/
 * @see {@link /docs//api/components/slides/Slides/ Slides API Docs}
 */
export var Slide = (function () {
    function Slide(elementRef, 
        /**
         * @private
         */
        slides) {
        this.slides = slides;
        this.ele = elementRef.nativeElement;
        this.ele.classList.add('swiper-slide');
        slides.rapidUpdate();
    }
    /**
     * @private
     */
    Slide.prototype.ngOnDestroy = function () {
        this.slides.rapidUpdate();
    };
    Slide.decorators = [
        { type: Component, args: [{
                    selector: 'ion-slide',
                    template: '<div class="slide-zoom"><ng-content></ng-content></div>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    Slide.ctorParameters = [
        { type: ElementRef, },
        { type: Slides, decorators: [{ type: Host },] },
    ];
    Slide.propDecorators = {
        'zoom': [{ type: Input },],
    };
    return Slide;
}());
/**
 * @private
 */
export var SlideLazy = (function () {
    function SlideLazy() {
    }
    SlideLazy.decorators = [
        { type: Directive, args: [{
                    selector: 'slide-lazy',
                    host: {
                        'class': 'swiper-lazy'
                    }
                },] },
    ];
    /** @nocollapse */
    SlideLazy.ctorParameters = [];
    return SlideLazy;
}());
var slidesId = -1;
//# sourceMappingURL=slides.js.map