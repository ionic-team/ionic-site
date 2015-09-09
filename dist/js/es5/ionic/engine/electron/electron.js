System.register('ionic/engine/electron/electron', ['ionic/util', '../engine'], function (_export) {
  'use strict';

  var util, Engine;
  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_engine) {
      Engine = _engine.Engine;
    }],
    execute: function () {
      Engine.register({
        name: 'electron',
        isMatch: function isMatch() {
          try {
            return util.isDefined(process) && util.isDefined(require) && util.isDefined(require('nw.gui'));
          } catch (e) {}
          return false;
        },
        ready: function ready() {
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        },
        fullScreen: function fullScreen(shouldShow) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(shouldShow);
            }, 1000);
          });
        },
        showStatusBar: function showStatusBar(shouldShow) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(shouldShow);
            }, 1000);
          });
        },
        exitApp: function exitApp() {
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        }
      });
    }
  };
});