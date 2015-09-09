System.register('ionic/gestures/drag-gesture', ['ionic/gestures/gesture', 'ionic/util'], function (_export) {
  'use strict';

  var Gesture, util, DragGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicGesturesGesture) {
      Gesture = _ionicGesturesGesture.Gesture;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      DragGesture = (function (_Gesture) {
        function DragGesture(element) {
          var opts = arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, DragGesture);

          util.defaults(opts, {});
          _get(Object.getPrototypeOf(DragGesture.prototype), 'constructor', this).call(this, element, opts);
        }

        _inherits(DragGesture, _Gesture);

        _createClass(DragGesture, [{
          key: 'listen',
          value: function listen() {
            var _this = this;

            _get(Object.getPrototypeOf(DragGesture.prototype), 'listen', this).call(this);
            this.on('panstart', function (ev) {
              if (_this.onDragStart(ev) !== false) {
                _this.dragging = true;
              }
            });
            this.on('panmove', function (ev) {
              if (!_this.dragging) return;
              if (_this.onDrag(ev) === false) {
                _this.dragging = false;
              }
            });
            this.on('panend', function (ev) {
              if (!_this.dragging) return;
              _this.onDragEnd(ev);
              _this.dragging = false;
            });
          }
        }, {
          key: 'onDrag',
          value: function onDrag() {}
        }, {
          key: 'onDragStart',
          value: function onDragStart() {}
        }, {
          key: 'onDragEnd',
          value: function onDragEnd() {}
        }]);

        return DragGesture;
      })(Gesture);

      _export('DragGesture', DragGesture);
    }
  };
});