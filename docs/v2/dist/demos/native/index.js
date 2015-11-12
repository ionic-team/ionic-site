"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _pagesCamera = require('pages/camera');

var _pagesBattery = require('pages/battery');

var _pagesContacts = require('pages/contacts');

var _pagesDevice = require('pages/device');

var _pagesDeviceMotion = require('pages/device-motion');

var _pagesDeviceOrientation = require('pages/device-orientation');

var _pagesDialogs = require('pages/dialogs');

var _pagesGeolocation = require('pages/geolocation');

var _pagesStatusbar = require('pages/statusbar');

var _pagesVibration = require('pages/vibration');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyApp = (function () {
    function MyApp(app, events) {
        _classCallCheck(this, MyApp);

        this.app = app;
        console.log('Events', events);
        var handler = function handler(user) {
            console.log('User created', user);
            return {
                what: 'what'
            };
        };
        var handler2 = function handler2(user) {
            console.log('2User created', user);
            return {
                things: 'yes'
            };
        };
        events.subscribe('user:created', handler);
        events.subscribe('user:created', handler2);
        setInterval(function () {
            var results = events.publish('user:created', {
                name: 'Max Lynch',
                id: 1
            });
            console.log('Got results', results);
        }, 2000);
        setTimeout(function () {
            events.unsubscribe('user:created');
            console.log(events.channels);
        }, 6000);
        this.firstPage = _pagesCamera.CameraPage;
        this.plugins = [{ title: 'Camera', page: _pagesCamera.CameraPage }, { title: 'Device', page: _pagesDevice.DevicePage }, { title: 'Device Motion', page: _pagesDeviceMotion.DeviceMotionPage }, { title: 'Device Orientation', page: _pagesDeviceOrientation.DeviceOrientationPage }, { title: 'Dialogs', page: _pagesDialogs.DialogsPage }, { title: 'Geolocation', page: _pagesGeolocation.GeolocationPage }, { title: 'Contacts', page: _pagesContacts.ContactsPage }, { title: 'Battery', page: _pagesBattery.BatteryPage }, { title: 'StatusBar', page: _pagesStatusbar.StatusBarPage }, { title: 'Vibration', page: _pagesVibration.VibrationPage }];
    }

    _createClass(MyApp, [{
        key: "openPage",
        value: function openPage(menu, page) {
            menu.close();
            var nav = this.app.getComponent('myNav');
            nav.setRoot(page.page);
        }
    }]);

    return MyApp;
})();
MyApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Events !== 'undefined' && _ionicIonic.Events) === 'function' && _b || Object])], MyApp);
var _a, _b;