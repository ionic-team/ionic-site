var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var ionic_2 = require('ionic/ionic');
var camera_1 = require('pages/camera');
var battery_1 = require('pages/battery');
var contacts_1 = require('pages/contacts');
var device_1 = require('pages/device');
var device_motion_1 = require('pages/device-motion');
var device_orientation_1 = require('pages/device-orientation');
var dialogs_1 = require('pages/dialogs');
var geolocation_1 = require('pages/geolocation');
var statusbar_1 = require('pages/statusbar');
var vibration_1 = require('pages/vibration');
var MyApp = (function () {
    function MyApp(app, events) {
        this.app = app;
        console.log('Events', events);
        var handler = function (user) {
            console.log('User created', user);
            return {
                what: 'what'
            };
        };
        var handler2 = function (user) {
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
        this.firstPage = camera_1.CameraPage;
        this.plugins = [
            { title: 'Camera', page: camera_1.CameraPage },
            { title: 'Device', page: device_1.DevicePage },
            { title: 'Device Motion', page: device_motion_1.DeviceMotionPage },
            { title: 'Device Orientation', page: device_orientation_1.DeviceOrientationPage },
            { title: 'Dialogs', page: dialogs_1.DialogsPage },
            { title: 'Geolocation', page: geolocation_1.GeolocationPage },
            { title: 'Contacts', page: contacts_1.ContactsPage },
            { title: 'Battery', page: battery_1.BatteryPage },
            { title: 'StatusBar', page: statusbar_1.StatusBarPage },
            { title: 'Vibration', page: vibration_1.VibrationPage },
        ];
    }
    MyApp.prototype.openPage = function (menu, page) {
        menu.close();
        var nav = this.app.getComponent('myNav');
        nav.setRoot(page.page);
    };
    MyApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ionic_2.Events !== 'undefined' && ionic_2.Events) === 'function' && _b) || Object])
    ], MyApp);
    return MyApp;
    var _a, _b;
})();