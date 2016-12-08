System.register("ionic/config", ["./platform", "./util"], function($__export) {
  "use strict";
  var __moduleName = "ionic/config";
  var Platform,
      util,
      ConfigCondition;
  function IonConfig(name) {
    function Config(instance, element) {
      var platformName = Platform.getPlatform();
      (element.domElement || element).classList.add((name + "-" + platformName));
      util.defaults(instance, Config._defaults || {});
      var conditions = Config._conditions;
      for (var i = 0,
          ii = conditions.length; i < ii; i++) {
        if (conditions[i]._callback(instance)) {
          for (var j = 0,
              jj = conditions[i]._mixins.length; j < jj; j++) {
            conditions[i]._mixins[j].call(instance);
          }
        }
      }
    }
    Config._conditions = [];
    Config.defaults = function(defaults) {
      Config._defaults = defaults;
    };
    Config.when = function when(callback) {
      var condition = new ConfigCondition(callback);
      Config._conditions.push(condition);
      return condition;
    };
    Config.platform = function platform(name) {
      return Config.when((function() {
        return Platform.getPlatform() === name;
      }));
    };
    return Config;
  }
  $__export("IonConfig", IonConfig);
  return {
    setters: [function($__m) {
      Platform = $__m;
    }, function($__m) {
      util = $__m;
    }],
    execute: function() {
      ConfigCondition = (function() {
        var ConfigCondition = function ConfigCondition(callback) {
          var mixins = arguments[1] !== (void 0) ? arguments[1] : [];
          var template = arguments[2] !== (void 0) ? arguments[2] : '';
          this._callback = callback;
          this._mixins = mixins;
          this._template = template;
        };
        return ($traceurRuntime.createClass)(ConfigCondition, {
          mixin: function(mixinFn) {
            this._mixins.push(mixinFn);
            return this;
          },
          template: function(url) {
            this._template = url;
            return this;
          }
        }, {});
      }());
    }
  };
});
