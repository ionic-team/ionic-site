System.register('ionic/components/app/app', ['angular2/angular2', 'angular2/src/core/compiler/view_manager', 'angular2/src/core/compiler/element_ref', 'angular2/di', 'angular2/src/core/compiler/view_container_ref', '../../config/config', '../../platform/platform', '../../registry', '../../util/util'], function (_export) {
  'use strict';

  var bootstrap, Compiler, AppViewManager, ElementRef, bind, ViewContainerRef, IonicConfig, Platform, Registry, util, IonicApp, GlobalIonicConfig;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  _export('ionicBootstrap', ionicBootstrap);

  _export('load', load);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function ionicBootstrap(ComponentType, config) {
    return new Promise(function (resolve, reject) {
      try {
        (function () {
          var app = initApp(window, document);
          config = config || new IonicConfig();
          config.setPlatform(Platform);
          _export('GlobalIonicConfig', GlobalIonicConfig = config);
          app.applyCss(document.body, Platform, config);
          var injectableBindings = [bind(IonicApp).toValue(app), bind(IonicConfig).toValue(config)];
          bootstrap(ComponentType, injectableBindings).then(function (appRef) {
            app.ref(appRef);
            resolve(app);
          })['catch'](function (err) {
            console.error('ionicBootstrap', err);
            reject(err);
          });
        })();
      } catch (err) {
        console.error('ionicBootstrap', err);
        reject(err);
      }
    });
  }

  function initApp(window, document) {
    var app = new IonicApp();
    app.isRTL(document.documentElement.getAttribute('dir') == 'rtl');
    app.lang(document.documentElement.getAttribute('lang'));
    Platform.url(window.location.href);
    Platform.userAgent(window.navigator.userAgent);
    Platform.width(window.innerWidth);
    Platform.height(window.innerHeight);
    Platform.load();
    return app;
  }

  function load(app) {
    if (!app) {
      console.error('Invalid app module');
    } else if (!app.main) {
      console.error('App module missing main()');
    } else {
      app.main(ionicBootstrap);
    }
  }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerView_manager) {
      AppViewManager = _angular2SrcCoreCompilerView_manager.AppViewManager;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      bind = _angular2Di.bind;
    }, function (_angular2SrcCoreCompilerView_container_ref) {
      ViewContainerRef = _angular2SrcCoreCompilerView_container_ref.ViewContainerRef;
    }, function (_configConfig) {
      IonicConfig = _configConfig.IonicConfig;
    }, function (_platformPlatform) {
      Platform = _platformPlatform.Platform;
    }, function (_registry) {
      Registry = _registry.Registry;
    }, function (_utilUtil) {
      util = _utilUtil;
    }],
    execute: function () {
      IonicApp = (function () {
        function IonicApp() {
          _classCallCheck(this, IonicApp);

          this.overlays = [];
          this.components = {};
        }

        _createClass(IonicApp, [{
          key: 'register',
          value: function register(key, component) {
            this.components[key] = component;
            console.log('App: Registered component', key, component);
          }
        }, {
          key: 'getComponent',
          value: function getComponent(key) {
            return this.components[key];
          }
        }, {
          key: 'config',
          value: function config(val) {
            if (arguments.length) {
              this._config = val;
            }
            return this._config;
          }
        }, {
          key: 'appendComponent',
          value: function appendComponent(ComponentType) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var injector = _this._ref.injector;
              var compiler = injector.get(Compiler);
              var viewMngr = injector.get(AppViewManager);
              var rootComponentRef = _this._ref._hostComponent;
              var viewContainerLocation = rootComponentRef.location;
              compiler.compileInHost(ComponentType).then(function (protoViewRef) {
                var atIndex = 0;
                var context = null;
                var hostViewRef = viewMngr.createViewInContainer(viewContainerLocation, atIndex, protoViewRef, context, injector);
                hostViewRef.elementRef = new ElementRef(hostViewRef, 0);
                hostViewRef.instance = viewMngr.getComponent(hostViewRef.elementRef);
                hostViewRef.dispose = function () {
                  viewMngr.destroyViewInContainer(viewContainerLocation, 0, 0, hostViewRef.viewRef);
                };
                resolve(hostViewRef);
              })['catch'](function (err) {
                console.error('IonicApp appendComponent:', err);
                reject(err);
              });
            });
          }
        }, {
          key: 'ref',
          value: function ref(val) {
            if (arguments.length) {
              this._ref = val;
            }
            return this._ref;
          }
        }, {
          key: 'applyCss',
          value: function applyCss(bodyEle, platform, config) {
            var className = bodyEle.className;
            platform.platforms().forEach(function (platformName) {
              className += ' platform-' + platformName;
            });
            className += ' mode-' + config.setting('mode');
            bodyEle.className = className.trim();
          }
        }, {
          key: 'isRTL',
          value: function isRTL(val) {
            if (arguments.length) {
              this._rtl = val;
            }
            return this._rtl;
          }
        }, {
          key: 'lang',
          value: function lang(val) {
            if (arguments.length) {
              this._lang = val;
            }
            return this._lang;
          }
        }]);

        return IonicApp;
      })();

      _export('IonicApp', IonicApp);

      Object.defineProperty(IonicApp.prototype.appendComponent, 'parameters', { get: function get() {
          return [[Type]];
        } });
      GlobalIonicConfig = null;

      _export('GlobalIonicConfig', GlobalIonicConfig);
    }
  };
});