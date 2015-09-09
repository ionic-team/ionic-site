System.register('ionic/components/item/item-swipe-buttons', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'ionic/components/item/item', 'ionic/gestures/slide-gesture'], function (_export) {
  'use strict';

  var ElementRef, Parent, Directive, Item, SlideGesture, ItemPrimarySwipeButtons, ItemSecondarySwipeButtons, ItemSlideGesture;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Parent = _angular2Angular2.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_ionicComponentsItemItem) {
      Item = _ionicComponentsItemItem.Item;
    }, function (_ionicGesturesSlideGesture) {
      SlideGesture = _ionicGesturesSlideGesture.SlideGesture;
    }],
    execute: function () {
      ItemPrimarySwipeButtons = (function () {
        function ItemPrimarySwipeButtons(elementRef, item) {
          _classCallCheck(this, ItemPrimarySwipeButtons);

          item.primarySwipeButtons = this;
          this.domElement = elementRef.domElement;
          this.parentItem = item;
          this.gesture = new ItemSlideGesture(this);
          this.gesture.listen();
        }

        _createClass(ItemPrimarySwipeButtons, [{
          key: 'setOpen',
          value: function setOpen(isOpen) {
            var _this = this;

            if (isOpen !== this.isOpen) {
              this.isOpen = isOpen;
              requestAnimationFrame(function () {
                _this.domElement.classList[isOpen ? 'add' : 'remove'](isOpen);
              });
            }
          }
        }]);

        return ItemPrimarySwipeButtons;
      })();

      _export('ItemPrimarySwipeButtons', ItemPrimarySwipeButtons);

      Object.defineProperty(ItemPrimarySwipeButtons, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-primary-swipe-buttons' })];
        } });
      Object.defineProperty(ItemPrimarySwipeButtons, 'parameters', { get: function get() {
          return [[ElementRef], [Item, new Parent()]];
        } });

      ItemSecondarySwipeButtons = function ItemSecondarySwipeButtons() {
        _classCallCheck(this, ItemSecondarySwipeButtons);
      };

      _export('ItemSecondarySwipeButtons', ItemSecondarySwipeButtons);

      Object.defineProperty(ItemSecondarySwipeButtons, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-secondary-swipe-buttons' })];
        } });

      ItemSlideGesture = (function (_SlideGesture) {
        function ItemSlideGesture(buttons) {
          _classCallCheck(this, ItemSlideGesture);

          _get(Object.getPrototypeOf(ItemSlideGesture.prototype), 'constructor', this).call(this, buttons.parentItem.domElement);
          this.buttons = buttons;
        }

        _inherits(ItemSlideGesture, _SlideGesture);

        _createClass(ItemSlideGesture, [{
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: -this.buttons.domElement.offsetWidth,
              max: 0
            };
          }
        }, {
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.buttons.isOpen ? slide.max : slide.min;
          }
        }, {
          key: 'onSlideBeforeStart',
          value: function onSlideBeforeStart() {
            this.buttons.domElement.classList.add('changing');
            this.buttons.domElement.classList.add('no-transition');
            return new Promise(function (resolve) {
              requestAnimationFrame(resolve);
            });
          }
        }, {
          key: 'onSlide',
          value: function onSlide(slide, ev) {
            this.buttons.domElement.style.transform = 'translate3d(' + slide.distance + 'px,0,0)';
          }
        }, {
          key: 'onSlideEnd',
          value: function onSlideEnd(slide, ev) {
            this.buttons.domElement.style.transform = '';
            this.buttons.domElement.classList.remove('no-transition');
            if (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
              this.buttons.setOpen(!this.buttons.isOpen);
            }
          }
        }]);

        return ItemSlideGesture;
      })(SlideGesture);
    }
  };
});