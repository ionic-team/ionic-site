System.register('ionic/components/nav/nav-params', ['ionic/util'], function (_export) {
  'use strict';

  var util, NavParams;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      NavParams = function NavParams(params) {
        _classCallCheck(this, NavParams);

        util.extend(this, params);
      };

      _export('NavParams', NavParams);
    }
  };
});