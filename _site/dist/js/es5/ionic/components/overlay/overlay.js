System.register('ionic/components/overlay/overlay', ['../app/app', '../../animations/animation', '../../util/click-block', 'ionic/util'], function (_export) {
  'use strict';

  var IonicApp, Animation, ClickBlock, util, Overlay, ROOT_Z_INDEX;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }, function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }, function (_utilClickBlock) {
      ClickBlock = _utilClickBlock.ClickBlock;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      Overlay = (function () {
        function Overlay(app) {
          _classCallCheck(this, Overlay);

          this.setApp(app);
        }

        _createClass(Overlay, [{
          key: 'setApp',
          value: function setApp(app) {
            this.app = app;
          }
        }, {
          key: 'create',
          value: function create(overlayType, ComponentType, opts) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var app = _this.app;
              app.appendComponent(ComponentType).then(function (ref) {
                var overlay = ref.instance;
                overlay._dispose = ref.dispose;
                overlay.setApp(app);
                overlay._type = overlayType;
                overlay._handle = opts && opts.handle;
                overlay._domElement = ref.elementRef.domElement;
                overlay.extendOptions(opts);
                overlay.zIndex = ROOT_Z_INDEX;
                for (var i = 0; i < app.overlays.length; i++) {
                  if (app.overlays[i].zIndex >= overlay.zIndex) {
                    overlay.zIndex = app.overlays[i].zIndex + 1;
                  }
                }
                app.overlays.push(overlay);
                overlay._open(opts);
                resolve(overlay);
              })['catch'](function (err) {
                console.error('Overlay create:', err);
                reject(err);
              });
            });
          }
        }, {
          key: '_open',
          value: function _open(opts) {
            var animationName = opts && opts.animation || this.options.enterAnimation;
            var enterAnimation = Animation.create(this._domElement, animationName);
            enterAnimation.before.addClass('ion-app');
            enterAnimation.before.addClass('show-overlay');
            ClickBlock(true, enterAnimation.duration() + 200);
            return new Promise(function (resolve) {
              enterAnimation.play().then(function () {
                ClickBlock(false);
                enterAnimation.dispose();
                resolve();
              });
            });
          }
        }, {
          key: 'close',
          value: function close(opts) {
            var _this2 = this;

            return new Promise(function (resolve) {
              var animationName = opts && opts.animation || _this2.options.leaveAnimation;
              var leavingAnimation = Animation.create(_this2._domElement, animationName);
              leavingAnimation.after.removeClass('show-overlay');
              ClickBlock(true, leavingAnimation.duration() + 200);
              leavingAnimation.play().then(function () {
                _this2.dispose();
                ClickBlock(false);
                leavingAnimation.dispose();
                resolve();
              });
            });
          }
        }, {
          key: 'getByType',
          value: function getByType(overlayType) {
            if (this.app) {
              for (var i = this.app.overlays.length - 1; i >= 0; i--) {
                if (overlayType === this.app.overlays[i]._type) {
                  return this.app.overlays[i];
                }
              }
            }
            return null;
          }
        }, {
          key: 'getByHandle',
          value: function getByHandle(handle) {
            if (this.app) {
              for (var i = this.app.overlays.length - 1; i >= 0; i--) {
                if (handle === this.app.overlays[i]._handle) {
                  return this.app.overlays[i];
                }
              }
            }
            return null;
          }
        }, {
          key: 'extendOptions',
          value: function extendOptions(opts) {
            if (!this.options) this.options = {};
            util.extend(this.options, opts);
          }
        }, {
          key: 'dispose',
          value: function dispose() {
            this._dispose && this._dispose();
            if (this.app) {
              util.array.remove(this.app.overlays, this);
            }
          }
        }]);

        return Overlay;
      })();

      _export('Overlay', Overlay);

      Object.defineProperty(Overlay, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
      Object.defineProperty(Overlay.prototype.create, 'parameters', { get: function get() {
          return [[], [Type], []];
        } });
      ROOT_Z_INDEX = 1000;
    }
  };
});