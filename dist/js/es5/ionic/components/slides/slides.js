System.register('ionic/components/slides/slides', ['angular2/angular2', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'ionic/gestures/drag-gesture', 'ionic/util', 'ionic/config/component', 'ionic/gestures/hammer'], function (_export) {
  'use strict';

  var For, ElementRef, Inject, Parent, Ancestor, Component, Directive, onInit, View, DragGesture, util, dom, IonicComponent, IonicDirective, Hammer, Slides, Slide, SlidePager, SlidesGesture;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      For = _angular2Angular2.For;
      ElementRef = _angular2Angular2.ElementRef;
      Inject = _angular2Angular2.Inject;
      Parent = _angular2Angular2.Parent;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicGesturesDragGesture) {
      DragGesture = _ionicGesturesDragGesture.DragGesture;
    }, function (_ionicUtil) {
      util = _ionicUtil;
      dom = _ionicUtil.dom;
    }, function (_ionicConfigComponent) {
      IonicComponent = _ionicConfigComponent.IonicComponent;
      IonicDirective = _ionicConfigComponent.IonicDirective;
    }, function (_ionicGesturesHammer) {
      Hammer = _ionicGesturesHammer.Hammer;
    }],
    execute: function () {
      Slides = (function () {
        function Slides(elementRef) {
          _classCallCheck(this, Slides);

          this.domElement = elementRef.domElement;
          this.slides = [];
          this.currentIndex = 0;
          this.animateSpeed = 300;
          this.slideDelay = 0;
          this.bounce = false;
          this.gesture = new SlidesGesture(this);
          this.gesture.listen();
        }

        _createClass(Slides, [{
          key: 'onInit',
          value: function onInit() {
            this.continuous = util.isDefined(this.loop) && (this.slides.length > 1 ? true : false);
            this.wrapperElement = this.domElement.children[0];
            this.resize();
            if (this.slideDelay) {
              this.startShow();
            }
          }
        }, {
          key: 'startShow',
          value: function startShow() {
            this._showTimeout = setTimeout(this.next.bind(this), this.slideDelay);
          }
        }, {
          key: 'stopShow',
          value: function stopShow() {
            clearTimeout(this._showTimout);
          }
        }, {
          key: 'setPager',
          value: function setPager(pager) {
            this._pager = pager;
          }
        }, {
          key: 'resize',
          value: function resize() {
            this.containerWidth = this.domElement.offsetWidth || this.domElement.getBoundingClientRect().width;
            this.wrapperElement.style.width = this.containerWidth * this.slides.length + 'px';
            this._bump();
          }
        }, {
          key: 'add',
          value: function add(slide) {
            this._append(slide);
          }
        }, {
          key: 'slide',
          value: function slide(to, slideSpeed) {
            var index = this.currentIndex;
            var width = this.containerWidth;
            if (index == to) return;
            var direction = Math.abs(index - to) / (index - to);
            if (this.continuous) {
              var natural_direction = direction;
              direction = -this.slides[this._circle(to)].x / width;
              if (direction !== natural_direction) to = -direction * this.slides.length + to;
            }
            var diff = Math.abs(index - to) - 1;
            while (diff--) this._move(this._circle((to > index ? to : index) - diff - 1), width * direction, 0);
            to = this._circle(to);
            this._move(index, width * direction, slideSpeed || this.animateSpeed);
            this._move(to, 0, slideSpeed || this.animateSpeed);
            if (this.continuous) this._move(this._circle(to - direction), -(width * direction), 0);
            this.currentIndex = to;
          }
        }, {
          key: 'prev',
          value: function prev() {
            if (this.continuous) {
              this.slide(this.currentIndex - 1);
            } else if (this.currentIndex > 0) {
              this.slide(this.currentIndex - 1);
            }
          }
        }, {
          key: 'next',
          value: function next() {
            if (this.continuous) {
              this.slide(this.currentIndex + 1);
            } else if (this.currentIndex < this.slides.length - 1) {
              this.slide(this.currentIndex + 1);
            }
          }
        }, {
          key: '_bump',
          value: function _bump() {
            var slide = undefined;
            var tx = undefined;
            var i = this.slides.length;
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
              var index1 = this._circle(this.currentIndex - 1);
              var index2 = this._circle(this.currentIndex + 1);
              this._move(index1, -this.containerWidth);
              this._move(index2, this.containerWidth);
            }
          }
        }, {
          key: '_dragStart',
          value: function _dragStart(event) {
            this._isScrolling = undefined;
          }
        }, {
          key: '_dragPre',
          value: function _dragPre(event) {
            var dx = event.gesture.deltaX;
            var dy = event.gesture.deltaY;
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
        }, {
          key: '_drag',
          value: function _drag(event) {
            var dx = event.gesture.deltaX;
            var width = this.containerWidth;
            var index = this.currentIndex;
            var shouldRun = this._dragPre(event);
            if (shouldRun === false) {
              return;
            }
            event.preventDefault();
            var index1 = undefined,
                index2 = undefined,
                index3 = undefined;
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
                dx = dx / (!index && dx > 0 || index == this.slides.length - 1 && dx < 0 ? Math.abs(dx) / width + 1 : 1);
              } else if (isPastBounds) {
                var slide = this.slides[index];
                return;
              }
            }
            var s1 = this.slides[index1];
            var s2 = this.slides[index2];
            var s3 = this.slides[index3];
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
        }, {
          key: '_endDrag',
          value: function _endDrag(event, drag) {
            this._finish(event, drag);
          }
        }, {
          key: '_finish',
          value: function _finish(event, drag) {
            var delta = {
              x: event.gesture.deltaX,
              y: event.gesture.deltaY
            };
            var width = this.containerWidth;
            var index = this.currentIndex;
            var slides = this.slides;
            var move = this._move.bind(this);
            var circle = this._circle.bind(this);
            var isScrolling = this._isScrolling;
            var speed = this.animateSpeed;
            var duration = +new Date() - drag.time;
            var isValidSlide = Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width / 3;
            var isPastBounds = !index && delta.x > 0 || index == slides.length - 1 && delta.x < 0;
            if (this.continuous) isPastBounds = false;
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
        }, {
          key: '_move',
          value: function _move(pos, translateX, speed) {
            var slide = this.slides[pos];
            if (!slide) {
              return;
            }
            slide.translate(translateX, speed);
            slide.x = translateX;
          }
        }, {
          key: '_circle',
          value: function _circle(i) {
            return (this.slides.length + i % this.slides.length) % this.slides.length;
          }
        }, {
          key: '_append',
          value: function _append(slide) {
            this.slides.push(slide);
          }
        }, {
          key: '_prepend',
          value: function _prepend(slide) {
            this.slides.unshift(slide);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-slides',
              properties: ['loop', 'index', 'bounce']
            };
          }
        }]);

        return Slides;
      })();

      _export('Slides', Slides);

      Object.defineProperty(Slides, 'annotations', { get: function get() {
          return [new IonicComponent(Slides), new View({
            template: '<div class="slides-view"><content></content></div>',
            directives: [Slide, SlidePager]
          })];
        } });
      Object.defineProperty(Slides, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });

      Slide = (function () {
        function Slide(slides, elementRef) {
          _classCallCheck(this, Slide);

          this.domElement = elementRef.domElement;
          slides.add(this);
        }

        _createClass(Slide, [{
          key: 'translate',
          value: function translate(x, duration) {
            this._translateX = x;
            duration = duration || 0;
            this.domElement.style[dom.CSS.transition + 'Duration'] = duration + 'ms';
            this.domElement.style[dom.CSS.transform] = 'translate3d(' + x + 'px, 0, 0)';
          }
        }, {
          key: 'translateX',
          get: function () {
            return this._translateX;
          }
        }, {
          key: 'left',
          set: function (x) {
            this._left = x;
            this.domElement.style.left = x + 'px';
          },
          get: function () {
            return this._left;
          }
        }, {
          key: 'width',
          set: function (width) {
            this._width = width;
            this.domElement.style.width = width + 'px';
          },
          get: function () {
            return this._width;
          }
        }], [{
          key: 'config',
          get: function () {
            return { selector: 'ion-slide' };
          }
        }]);

        return Slide;
      })();

      _export('Slide', Slide);

      Object.defineProperty(Slide, 'annotations', { get: function get() {
          return [new IonicDirective(Slide)];
        } });
      Object.defineProperty(Slide, 'parameters', { get: function get() {
          return [[Slides, new Ancestor()], [ElementRef]];
        } });

      SlidePager = (function () {
        function SlidePager(slides, elementRef) {
          _classCallCheck(this, SlidePager);

          this.domElement = elementRef.domElement;
          this.slides = slides;
          this.slides.setPager(this);
        }

        _createClass(SlidePager, [{
          key: 'getSlides',
          value: function getSlides() {
            return this.slides.slides;
          }
        }], [{
          key: 'config',
          get: function () {
            return { selector: 'ion-pager' };
          }
        }]);

        return SlidePager;
      })();

      _export('SlidePager', SlidePager);

      Object.defineProperty(SlidePager, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-pager' }), new View({
            template: '<span class="slide-pager-page" *for="#page of getSlides()">{{page.width}}<i class="icon ion-record"></i>X</span>',
            direcitves: [For]
          })];
        } });
      Object.defineProperty(SlidePager, 'parameters', { get: function get() {
          return [[Slides, new Ancestor()], [ElementRef]];
        } });

      SlidesGesture = (function (_DragGesture) {
        function SlidesGesture(slides) {
          _classCallCheck(this, SlidesGesture);

          _get(Object.getPrototypeOf(SlidesGesture.prototype), 'constructor', this).call(this, slides.domElement);
          this.slides = slides;
        }

        _inherits(SlidesGesture, _DragGesture);

        _createClass(SlidesGesture, [{
          key: 'onDrag',
          value: function onDrag(event) {
            var x = event.gesture.center.x;
            var y = event.gesture.center.y;
            this._drag.x = x;
            this._drag.y = y;
            this.slides._drag(event);
          }
        }, {
          key: 'onDragStart',
          value: function onDragStart(event) {
            this._drag = {
              startX: event.gesture.center.x,
              startY: event.gesture.center.y,
              time: +new Date()
            };
            this.slides._dragStart(event, this._drag);
          }
        }, {
          key: 'onDragEnd',
          value: function onDragEnd(event) {
            this.slides._endDrag(event, this._drag);
          }
        }]);

        return SlidesGesture;
      })(DragGesture);

      _export('SlidesGesture', SlidesGesture);
    }
  };
});