System.register('ionic/components/aside/extensions/gestures', ['ionic/components/aside/aside', 'ionic/gestures/slide-edge-gesture'], function (_export) {
  'use strict';

  var Aside, SlideEdgeGesture, AsideGesture, LeftAsideGesture, RightAsideGesture, TopAsideGesture, BottomAsideGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicComponentsAsideAside) {
      Aside = _ionicComponentsAsideAside.Aside;
    }, function (_ionicGesturesSlideEdgeGesture) {
      SlideEdgeGesture = _ionicGesturesSlideEdgeGesture.SlideEdgeGesture;
    }],
    execute: function () {
      AsideGesture = (function (_SlideEdgeGesture) {
        function AsideGesture(aside) {
          _classCallCheck(this, AsideGesture);

          var slideElement = aside.getContentElement();
          _get(Object.getPrototypeOf(AsideGesture.prototype), 'constructor', this).call(this, slideElement, {
            direction: aside.side === 'left' || aside.side === 'right' ? 'x' : 'y',
            edge: aside.side,
            threshold: 75
          });
          this.aside = aside;
          this.slideElement = slideElement;
          this.listen();
        }

        _inherits(AsideGesture, _SlideEdgeGesture);

        _createClass(AsideGesture, [{
          key: 'canStart',
          value: function canStart(ev) {
            return this.aside.isOpen ? true : _get(Object.getPrototypeOf(AsideGesture.prototype), 'canStart', this).call(this, ev);
          }
        }, {
          key: 'onSlideBeforeStart',
          value: function onSlideBeforeStart(slide, ev) {
            this.aside.setSliding(true);
            this.aside.setChanging(true);
            return new Promise(function (resolve) {
              requestAnimationFrame(resolve);
            });
          }
        }, {
          key: 'onSlide',
          value: function onSlide(slide, ev) {
            this.aside.setOpenAmt(slide.distance / slide.max);
            this.aside.setTransform('translate3d(' + slide.distance + 'px,0,0)');
          }
        }, {
          key: 'onSlideEnd',
          value: function onSlideEnd(slide, ev) {
            this.aside.setTransform('');
            this.aside.setSliding(false);
            if (Math.abs(ev.gesture.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
              this.aside.setOpen(!this.aside.isOpen);
            }
          }
        }, {
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.max : slide.min;
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: 0,
              max: this.aside.domElement.offsetWidth
            };
          }
        }]);

        return AsideGesture;
      })(SlideEdgeGesture);

      Object.defineProperty(AsideGesture, 'parameters', { get: function get() {
          return [[Aside]];
        } });

      LeftAsideGesture = (function (_AsideGesture) {
        function LeftAsideGesture() {
          _classCallCheck(this, LeftAsideGesture);

          if (_AsideGesture != null) {
            _AsideGesture.apply(this, arguments);
          }
        }

        _inherits(LeftAsideGesture, _AsideGesture);

        return LeftAsideGesture;
      })(AsideGesture);

      _export('LeftAsideGesture', LeftAsideGesture);

      RightAsideGesture = (function (_LeftAsideGesture) {
        function RightAsideGesture() {
          _classCallCheck(this, RightAsideGesture);

          if (_LeftAsideGesture != null) {
            _LeftAsideGesture.apply(this, arguments);
          }
        }

        _inherits(RightAsideGesture, _LeftAsideGesture);

        _createClass(RightAsideGesture, [{
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.min : slide.max;
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: -this.aside.domElement.offsetWidth,
              max: 0
            };
          }
        }]);

        return RightAsideGesture;
      })(LeftAsideGesture);

      _export('RightAsideGesture', RightAsideGesture);

      TopAsideGesture = (function (_AsideGesture2) {
        function TopAsideGesture() {
          _classCallCheck(this, TopAsideGesture);

          if (_AsideGesture2 != null) {
            _AsideGesture2.apply(this, arguments);
          }
        }

        _inherits(TopAsideGesture, _AsideGesture2);

        _createClass(TopAsideGesture, [{
          key: 'onSlide',
          value: function onSlide(slide, ev) {
            this.aside.setTransform('translate3d(0,' + slide.distance + 'px,0)');
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: 0,
              max: this.aside.domElement.offsetHeight
            };
          }
        }]);

        return TopAsideGesture;
      })(AsideGesture);

      _export('TopAsideGesture', TopAsideGesture);

      BottomAsideGesture = (function (_TopAsideGesture) {
        function BottomAsideGesture() {
          _classCallCheck(this, BottomAsideGesture);

          if (_TopAsideGesture != null) {
            _TopAsideGesture.apply(this, arguments);
          }
        }

        _inherits(BottomAsideGesture, _TopAsideGesture);

        _createClass(BottomAsideGesture, [{
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.min : slide.max;
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: -this.aside.domElement.offsetHeight,
              max: 0
            };
          }
        }]);

        return BottomAsideGesture;
      })(TopAsideGesture);

      _export('BottomAsideGesture', BottomAsideGesture);
    }
  };
});