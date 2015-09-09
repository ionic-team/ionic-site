System.register('ionic/components/action-menu/action-menu', ['angular2/angular2', 'angular2/src/core/annotations_impl/view', 'angular2/di', 'ionic/ionic', '../app/app', 'ionic/util', '../overlay/overlay', '../../config/component', 'ionic/animations/animation'], function (_export) {
  'use strict';

  var NgIf, NgFor, View, Injectable, Icon, IonicApp, util, Overlay, IonicComponent, Animation, ActionMenu, OVERLAY_TYPE, ActionMenuAnimation, ActionMenuSlideIn, ActionMenuSlideOut;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Angular2) {
      NgIf = _angular2Angular2.NgIf;
      NgFor = _angular2Angular2.NgFor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Di) {
      Injectable = _angular2Di.Injectable;
    }, function (_ionicIonic) {
      Icon = _ionicIonic.Icon;
    }, function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_overlayOverlay) {
      Overlay = _overlayOverlay.Overlay;
    }, function (_configComponent) {
      IonicComponent = _configComponent.IonicComponent;
    }, function (_ionicAnimationsAnimation) {
      Animation = _ionicAnimationsAnimation.Animation;
    }],
    execute: function () {
      ActionMenu = (function (_Overlay) {
        function ActionMenu(app) {
          _classCallCheck(this, ActionMenu);

          _get(Object.getPrototypeOf(ActionMenu.prototype), 'constructor', this).call(this, app);
          this.extendOptions({
            destructiveButtonClicked: util.noop,
            buttonClicked: util.noop,
            cancel: util.noop,
            enterAnimation: 'action-menu-slide-in',
            leaveAnimation: 'action-menu-slide-out'
          });
        }

        _inherits(ActionMenu, _Overlay);

        _createClass(ActionMenu, [{
          key: 'cancel',
          value: function cancel() {
            this.options.cancel();
            this.close();
          }
        }, {
          key: '_destructiveButtonClicked',
          value: function _destructiveButtonClicked() {
            var shouldClose = this.options.destructiveButtonClicked();
            if (shouldClose === true) {
              return this.close();
            }
          }
        }, {
          key: '_buttonClicked',
          value: function _buttonClicked(index) {
            var shouldClose = this.options.buttonClicked(index);
            if (shouldClose === true) {
              return this.close();
            }
          }
        }, {
          key: 'open',
          value: function open(opts) {
            return this.create(OVERLAY_TYPE, ActionMenu, opts);
          }
        }, {
          key: 'get',
          value: function get() {
            return Modal.getByType(OVERLAY_TYPE);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-action-menu',
              host: { '[style.z-index]': 'zIndex' }
            };
          }
        }]);

        return ActionMenu;
      })(Overlay);

      _export('ActionMenu', ActionMenu);

      Object.defineProperty(ActionMenu, 'annotations', { get: function get() {
          return [new IonicComponent(ActionMenu), new View({
            template: '\n    <div class="action-menu-backdrop" (click)="cancel()"></div>\n    <div class="action-menu-wrapper">\n      <div class="action-menu-container">\n        <div class="action-menu-group action-menu-options">\n          <div class="action-menu-title" *ng-if="options.titleText">{{options.titleText}}</div>\n          <button (click)="_buttonClicked(index)" *ng-for="#b of options.buttons; #index = index" class="action-menu-option">{{b.text}}</button>\n          <button *ng-if="options.destructiveText" (click)="_destructiveButtonClicked()" class="destructive action-menu-destructive">{{options.destructiveText}}</button>\n        </div>\n        <div class="action-menu-group action-menu-cancel" *ng-if="options.cancelText">\n          <button (click)="cancel()">{{options.cancelText}}</button>\n        </div>\n      </div>\n    </div>',
            directives: [Icon, NgIf, NgFor]
          }), new Injectable()];
        } });
      Object.defineProperty(ActionMenu, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
      OVERLAY_TYPE = 'actionmenu';

      ActionMenuAnimation = (function (_Animation) {
        function ActionMenuAnimation(element) {
          _classCallCheck(this, ActionMenuAnimation);

          _get(Object.getPrototypeOf(ActionMenuAnimation.prototype), 'constructor', this).call(this, element);
          this.easing('cubic-bezier(.36, .66, .04, 1)').duration(400);
          this.backdrop = new Animation(element.querySelector('.action-menu-backdrop'));
          this.wrapper = new Animation(element.querySelector('.action-menu-wrapper'));
          this.add(this.backdrop, this.wrapper);
        }

        _inherits(ActionMenuAnimation, _Animation);

        return ActionMenuAnimation;
      })(Animation);

      ActionMenuSlideIn = (function (_ActionMenuAnimation) {
        function ActionMenuSlideIn(element) {
          _classCallCheck(this, ActionMenuSlideIn);

          _get(Object.getPrototypeOf(ActionMenuSlideIn.prototype), 'constructor', this).call(this, element);
          this.backdrop.fromTo('opacity', 0, 0.4);
          this.wrapper.fromTo('translateY', '100%', '0%');
        }

        _inherits(ActionMenuSlideIn, _ActionMenuAnimation);

        return ActionMenuSlideIn;
      })(ActionMenuAnimation);

      Animation.register('action-menu-slide-in', ActionMenuSlideIn);

      ActionMenuSlideOut = (function (_ActionMenuAnimation2) {
        function ActionMenuSlideOut(element) {
          _classCallCheck(this, ActionMenuSlideOut);

          _get(Object.getPrototypeOf(ActionMenuSlideOut.prototype), 'constructor', this).call(this, element);
          this.backdrop.fromTo('opacity', 0.4, 0);
          this.wrapper.fromTo('translateY', '0%', '100%');
        }

        _inherits(ActionMenuSlideOut, _ActionMenuAnimation2);

        return ActionMenuSlideOut;
      })(ActionMenuAnimation);

      Animation.register('action-menu-slide-out', ActionMenuSlideOut);
    }
  };
});