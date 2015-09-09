System.register('ionic/util', ['ionic/util/dom', 'ionic/util/util'], function (_export) {
  'use strict';

  var domUtil, dom;
  return {
    setters: [function (_ionicUtilDom) {
      domUtil = _ionicUtilDom;
    }, function (_ionicUtilUtil) {
      for (var _key in _ionicUtilUtil) {
        _export(_key, _ionicUtilUtil[_key]);
      }
    }],
    execute: function () {
      dom = domUtil;

      _export('dom', dom);
    }
  };
});