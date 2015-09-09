System.register('ionic/engine/cordova/cordova', ['../engine'], function (_export) {
  'use strict';

  var Engine;
  return {
    setters: [function (_engine) {
      Engine = _engine.Engine;
    }],
    execute: function () {
      Engine.register({
        name: 'cordova',
        isMatch: function isMatch() {
          return !(!window.cordova && !window.PhoneGap && !window.phonegap);
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