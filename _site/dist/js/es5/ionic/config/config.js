System.register('ionic/config/config', ['../util/util'], function (_export) {
  'use strict';

  var isString, isObject, isDefined, extend, IonicConfig;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_utilUtil) {
      isString = _utilUtil.isString;
      isObject = _utilUtil.isObject;
      isDefined = _utilUtil.isDefined;
      extend = _utilUtil.extend;
    }],
    execute: function () {
      IonicConfig = (function () {
        function IonicConfig(settings) {
          _classCallCheck(this, IonicConfig);

          this.setting(settings || {});
        }

        _createClass(IonicConfig, [{
          key: 'setting',
          value: function setting() {
            var args = arguments;
            var arg0 = args[0];
            var arg1 = args[1];
            var s = this._settings;
            switch (args.length) {
              case 0:
                return s;
              case 1:
                if (isObject(arg0)) {
                  this._settings = arg0;
                  return this;
                }
                if (!isDefined(s[arg0])) {
                  s[arg0] = null;
                  var activePlatformKeys = this._platforms;
                  var platformSettings = s.platforms;
                  var platformObj = null;
                  if (platformSettings) {
                    var platformValue = undefined;
                    for (var i = 0; i < activePlatformKeys.length; i++) {
                      platformObj = platformSettings[activePlatformKeys[i]];
                      if (platformObj && isDefined(platformObj[arg0])) {
                        platformValue = platformObj[arg0];
                      }
                    }
                    if (isDefined(platformValue)) {
                      s[arg0] = platformValue;
                    }
                  }
                }
                return s[arg0];
              case 2:
                if (isObject(arg1)) {
                  s.platforms = s.platforms || {};
                  s.platforms[arg0] = arg1;
                } else {
                  s[arg0] = arg1;
                }
                return this;
              case 3:
                s.platforms = s.platforms || {};
                s.platforms[arg0] = s.platforms[arg0] || {};
                s.platforms[arg0][arg1] = args[2];
                return this;
            }
          }
        }, {
          key: 'setPlatform',
          value: function setPlatform(platform) {
            this._platforms = platform.platforms();
            this._settings.platforms = extend(platform.settings(), this._settings.platforms || {});
          }
        }]);

        return IonicConfig;
      })();

      _export('IonicConfig', IonicConfig);
    }
  };
});