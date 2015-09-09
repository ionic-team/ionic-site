System.register('ionic/engine/engine', ['ionic/util'], function (_export) {
  'use strict';

  var util, registry, defaultEngine, activeEngine, EngineController, Engine;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      registry = {};
      defaultEngine = undefined;
      activeEngine = undefined;

      EngineController = (function () {
        function EngineController() {
          var _this = this;

          _classCallCheck(this, EngineController);

          var self = this;
          var proxyMethods = 'ready fullScreen showStatusBar exitApp'.split(' ');

          var _loop = function (x) {
            _this[proxyMethods[x]] = function () {
              return self.proxy(proxyMethods[x], arguments);
            };
          };

          for (var x = 0; x < proxyMethods.length; x++) {
            _loop(x);
          }
        }

        _createClass(EngineController, [{
          key: 'proxy',
          value: function proxy(target, args) {
            var eng = this.get();
            if (eng && eng[target]) {
              return eng[target].apply(this, args);
            }
            return new Promise(function (resolve) {}, function (reject) {
              reject();
            });
          }
        }, {
          key: 'is',
          value: function is(name) {
            return this.name === name;
          }
        }, {
          key: 'getName',
          value: function getName() {
            return this.get().name;
          }
        }, {
          key: 'get',
          value: function get() {
            if (util.isUndefined(activeEngine)) {
              this.set(this.detect());
            }
            return activeEngine || defaultEngine;
          }
        }, {
          key: 'set',
          value: function set(engine) {
            activeEngine = engine;
          }
        }, {
          key: 'setDefault',
          value: function setDefault(engine) {
            defaultEngine = engine;
          }
        }, {
          key: 'register',
          value: function register(engine) {
            registry[engine.name] = engine;
          }
        }, {
          key: 'detect',
          value: function detect() {
            for (var _name in registry) {
              if (registry[_name].isMatch()) {
                return registry[_name];
              }
            }
            return null;
          }
        }]);

        return EngineController;
      })();

      Engine = new EngineController();

      _export('Engine', Engine);

      Engine.setDefault({
        name: 'default',
        ready: util.dom.windowLoad
      });
    }
  };
});