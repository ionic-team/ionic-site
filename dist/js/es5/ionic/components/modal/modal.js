System.register('ionic/components/modal/modal', ['angular2/di', '../overlay/overlay', '../../animations/animation', '../app/app'], function (_export) {
  'use strict';

  var Injectable, Overlay, Animation, IonicApp, Modal, OVERLAY_TYPE, ModalSlideIn, ModalSlideOut;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Di) {
      Injectable = _angular2Di.Injectable;
    }, function (_overlayOverlay) {
      Overlay = _overlayOverlay.Overlay;
    }, function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }, function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }],
    execute: function () {
      Modal = (function (_Overlay) {
        function Modal(app) {
          _classCallCheck(this, Modal);

          _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, app);
          this.extendOptions({
            enterAnimation: 'modal-slide-in',
            leaveAnimation: 'modal-slide-out'
          });
        }

        _inherits(Modal, _Overlay);

        _createClass(Modal, [{
          key: 'open',
          value: function open(ComponentType, opts) {
            return this.create(OVERLAY_TYPE, ComponentType, opts);
          }
        }, {
          key: 'get',
          value: function get() {
            return this.getByType(OVERLAY_TYPE);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-modal',
              host: { '[style.z-index]': 'zIndex' }
            };
          }
        }]);

        return Modal;
      })(Overlay);

      _export('Modal', Modal);

      Object.defineProperty(Modal, 'annotations', { get: function get() {
          return [new Injectable()];
        } });
      Object.defineProperty(Modal, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
      Object.defineProperty(Modal.prototype.open, 'parameters', { get: function get() {
          return [[Type], []];
        } });
      OVERLAY_TYPE = 'modal';

      ModalSlideIn = (function (_Animation) {
        function ModalSlideIn(element) {
          _classCallCheck(this, ModalSlideIn);

          _get(Object.getPrototypeOf(ModalSlideIn.prototype), 'constructor', this).call(this, element);
          this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).fromTo('translateY', '100%', '0%');
        }

        _inherits(ModalSlideIn, _Animation);

        return ModalSlideIn;
      })(Animation);

      Animation.register('modal-slide-in', ModalSlideIn);

      ModalSlideOut = (function (_Animation2) {
        function ModalSlideOut(element) {
          _classCallCheck(this, ModalSlideOut);

          _get(Object.getPrototypeOf(ModalSlideOut.prototype), 'constructor', this).call(this, element);
          this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
        }

        _inherits(ModalSlideOut, _Animation2);

        return ModalSlideOut;
      })(Animation);

      Animation.register('modal-slide-out', ModalSlideOut);
    }
  };
});