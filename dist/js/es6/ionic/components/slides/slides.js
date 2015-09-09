import {For,
  ElementRef,
  Inject,
  Parent} from 'angular2/angular2';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {Component,
  Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {DragGesture} from 'ionic/gestures/drag-gesture';
import * as util from 'ionic/util';
import {dom} from 'ionic/util';
import {IonicComponent,
  IonicDirective} from 'ionic/config/component';
import {Hammer} from 'ionic/gestures/hammer';
export class Slides {
  static get config() {
    return {
      selector: 'ion-slides',
      properties: ['loop', 'index', 'bounce']
    };
  }
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    this.slides = [];
    this.currentIndex = 0;
    this.animateSpeed = 300;
    this.slideDelay = 0;
    this.bounce = false;
    this.gesture = new SlidesGesture(this);
    this.gesture.listen();
  }
  onInit() {
    this.continuous = util.isDefined(this.loop) && (this.slides.length > 1 ? true : false);
    this.wrapperElement = this.domElement.children[0];
    this.resize();
    if (this.slideDelay) {
      this.startShow();
    }
  }
  startShow() {
    this._showTimeout = setTimeout(this.next.bind(this), this.slideDelay);
  }
  stopShow() {
    clearTimeout(this._showTimout);
  }
  setPager(pager) {
    this._pager = pager;
  }
  resize() {
    this.containerWidth = this.domElement.offsetWidth || this.domElement.getBoundingClientRect().width;
    this.wrapperElement.style.width = ((this.containerWidth * this.slides.length)) + 'px';
    this._bump();
  }
  add(slide) {
    this._append(slide);
  }
  slide(to, slideSpeed) {
    let index = this.currentIndex;
    let width = this.containerWidth;
    if (index == to)
      return;
    var direction = Math.abs(index - to) / (index - to);
    if (this.continuous) {
      var natural_direction = direction;
      direction = -this.slides[this._circle(to)].x / width;
      if (direction !== natural_direction)
        to = -direction * this.slides.length + to;
    }
    var diff = Math.abs(index - to) - 1;
    while (diff--)
      this._move(this._circle((to > index ? to : index) - diff - 1), width * direction, 0);
    to = this._circle(to);
    this._move(index, width * direction, slideSpeed || this.animateSpeed);
    this._move(to, 0, slideSpeed || this.animateSpeed);
    if (this.continuous)
      this._move(this._circle(to - direction), -(width * direction), 0);
    this.currentIndex = to;
  }
  prev() {
    if (this.continuous) {
      this.slide(this.currentIndex - 1);
    } else if (this.currentIndex > 0) {
      this.slide(this.currentIndex - 1);
    }
  }
  next() {
    if (this.continuous) {
      this.slide(this.currentIndex + 1);
    } else if (this.currentIndex < this.slides.length - 1) {
      this.slide(this.currentIndex + 1);
    }
  }
  _bump() {
    let slide;
    let tx;
    let i = this.slides.length;
    while (i--) {
      slide = this.slides[i];
      slide.left = i * -this.containerWidth;
      slide.width = this.containerWidth;
      tx = 0;
      if (this.currentIndex > i) {
        tx = -this.containerWidth;
      } else if (this.currentIndex < i) {
        tx = this.containerWidth;
      }
      this._move(i, tx);
    }
    if (this.continuous) {
      let index1 = this._circle(this.currentIndex - 1);
      let index2 = this._circle(this.currentIndex + 1);
      this._move(index1, -this.containerWidth);
      this._move(index2, this.containerWidth);
    }
  }
  _dragStart(event) {
    this._isScrolling = undefined;
  }
  _dragPre(event) {
    let dx = event.gesture.deltaX;
    let dy = event.gesture.deltaY;
    if (this.disableScroll) {
      event.preventDefault();
    }
    if (typeof this._isScrolling == 'undefined') {
      this._isScrolling = !!(this._isScrolling || Math.abs(dx) < Math.abs(dy));
    }
    if (this._isScrolling) {
      return false;
    }
  }
  _drag(event) {
    let dx = event.gesture.deltaX;
    let width = this.containerWidth;
    let index = this.currentIndex;
    let shouldRun = this._dragPre(event);
    if (shouldRun === false) {
      return;
    }
    event.preventDefault();
    let index1,
        index2,
        index3;
    if (this.continuous) {
      index1 = this._circle(this.currentIndex - 1);
      index2 = this.currentIndex;
      index3 = this._circle(this.currentIndex + 1);
    } else {
      index1 = this.currentIndex - 1;
      index2 = this.currentIndex;
      index3 = this.currentIndex + 1;
      var isPastBounds = index == 0 && dx > 0 || index == this.slides.length - 1 && dx < 0;
      if (this.bounce) {
        dx = dx / ((!index && dx > 0 || index == this.slides.length - 1 && dx < 0) ? (Math.abs(dx) / width + 1) : 1);
      } else if (isPastBounds) {
        let slide = this.slides[index];
        return;
      }
    }
    let s1 = this.slides[index1];
    let s2 = this.slides[index2];
    let s3 = this.slides[index3];
    if (s1) {
      s1.translate(dx + s1.x);
    }
    if (s2) {
      s2.translate(dx + s2.x);
    }
    if (s3) {
      s3.translate(dx + s3.x);
    }
  }
  _endDrag(event, drag) {
    this._finish(event, drag);
  }
  _finish(event, drag) {
    let delta = {
      x: event.gesture.deltaX,
      y: event.gesture.deltaY
    };
    let width = this.containerWidth;
    let index = this.currentIndex;
    let slides = this.slides;
    let move = this._move.bind(this);
    let circle = this._circle.bind(this);
    let isScrolling = this._isScrolling;
    let speed = this.animateSpeed;
    var duration = +new Date - drag.time;
    var isValidSlide = Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width / 3;
    var isPastBounds = !index && delta.x > 0 || index == slides.length - 1 && delta.x < 0;
    if (this.continuous)
      isPastBounds = false;
    var direction = delta.x < 0;
    if (!isScrolling) {
      if (isValidSlide && !isPastBounds) {
        if (direction) {
          if (this.continuous) {
            move(circle(index - 1), -width, 0);
            move(circle(index + 2), width, 0);
          } else {
            move(index - 1, -width, 0);
          }
          move(index, slides[index].x - width, speed);
          move(circle(index + 1), slides[circle(index + 1)].x - width, speed);
          this.currentIndex = circle(index + 1);
        } else {
          if (this.continuous) {
            move(circle(index + 1), width, 0);
            move(circle(index - 2), -width, 0);
          } else {
            move(index + 1, width, 0);
          }
          move(index, slides[index].x + width, speed);
          move(circle(index - 1), slides[circle(index - 1)].x + width, speed);
          this.currentIndex = circle(index - 1);
        }
      } else {
        if (this.continuous) {
          move(circle(index - 1), -width, speed);
          move(index, 0, speed);
          move(circle(index + 1), width, speed);
        } else {
          move(index - 1, -width, speed);
          move(index, 0, speed);
          move(index + 1, width, speed);
        }
      }
    }
  }
  _move(pos, translateX, speed) {
    let slide = this.slides[pos];
    if (!slide) {
      return;
    }
    slide.translate(translateX, speed);
    slide.x = translateX;
  }
  _circle(i) {
    return (this.slides.length + (i % this.slides.length)) % this.slides.length;
  }
  _append(slide) {
    this.slides.push(slide);
  }
  _prepend(slide) {
    this.slides.unshift(slide);
  }
}
Object.defineProperty(Slides, "annotations", {get: function() {
    return [new IonicComponent(Slides), new View({
      template: `<div class="slides-view"><content></content></div>`,
      directives: [Slide, SlidePager]
    })];
  }});
Object.defineProperty(Slides, "parameters", {get: function() {
    return [[ElementRef]];
  }});
export class Slide {
  constructor(slides, elementRef) {
    this.domElement = elementRef.domElement;
    slides.add(this);
  }
  static get config() {
    return {selector: 'ion-slide'};
  }
  translate(x, duration) {
    this._translateX = x;
    duration = duration || 0;
    this.domElement.style[dom.CSS.transition + 'Duration'] = duration + 'ms';
    this.domElement.style[dom.CSS.transform] = 'translate3d(' + x + 'px, 0, 0)';
  }
  get translateX() {
    return this._translateX;
  }
  set left(x) {
    this._left = x;
    this.domElement.style.left = x + 'px';
  }
  get left() {
    return this._left;
  }
  set width(width) {
    this._width = width;
    this.domElement.style.width = width + 'px';
  }
  get width() {
    return this._width;
  }
}
Object.defineProperty(Slide, "annotations", {get: function() {
    return [new IonicDirective(Slide)];
  }});
Object.defineProperty(Slide, "parameters", {get: function() {
    return [[Slides, new Ancestor()], [ElementRef]];
  }});
export class SlidePager {
  constructor(slides, elementRef) {
    this.domElement = elementRef.domElement;
    this.slides = slides;
    this.slides.setPager(this);
  }
  static get config() {
    return {selector: 'ion-pager'};
  }
  getSlides() {
    return this.slides.slides;
  }
}
Object.defineProperty(SlidePager, "annotations", {get: function() {
    return [new Component({selector: 'ion-pager'}), new View({
      template: `<span class="slide-pager-page" *for="#page of getSlides()">{{page.width}}<i class="icon ion-record"></i>X</span>`,
      direcitves: [For]
    })];
  }});
Object.defineProperty(SlidePager, "parameters", {get: function() {
    return [[Slides, new Ancestor()], [ElementRef]];
  }});
export class SlidesGesture extends DragGesture {
  constructor(slides) {
    super(slides.domElement);
    this.slides = slides;
  }
  onDrag(event) {
    let x = event.gesture.center.x;
    let y = event.gesture.center.y;
    this._drag.x = x;
    this._drag.y = y;
    this.slides._drag(event);
  }
  onDragStart(event) {
    this._drag = {
      startX: event.gesture.center.x,
      startY: event.gesture.center.y,
      time: +new Date
    };
    this.slides._dragStart(event, this._drag);
  }
  onDragEnd(event) {
    this.slides._endDrag(event, this._drag);
  }
}
