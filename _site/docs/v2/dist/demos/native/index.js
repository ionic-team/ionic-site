System.register("index", ["ionic/ionic", "pages/camera", "pages/battery", "pages/contacts", "pages/device", "pages/device-motion", "pages/device-orientation", "pages/dialogs", "pages/geolocation", "pages/statusbar", "pages/vibration"], function (_export) {
    "use strict";

    var IonicApp, App, Events, CameraPage, BatteryPage, ContactsPage, DevicePage, DeviceMotionPage, DeviceOrientationPage, DialogsPage, GeolocationPage, StatusBarPage, VibrationPage, __decorate, __metadata, MyApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            App = _ionicIonic.App;
            Events = _ionicIonic.Events;
        }, function (_pagesCamera) {
            CameraPage = _pagesCamera.CameraPage;
        }, function (_pagesBattery) {
            BatteryPage = _pagesBattery.BatteryPage;
        }, function (_pagesContacts) {
            ContactsPage = _pagesContacts.ContactsPage;
        }, function (_pagesDevice) {
            DevicePage = _pagesDevice.DevicePage;
        }, function (_pagesDeviceMotion) {
            DeviceMotionPage = _pagesDeviceMotion.DeviceMotionPage;
        }, function (_pagesDeviceOrientation) {
            DeviceOrientationPage = _pagesDeviceOrientation.DeviceOrientationPage;
        }, function (_pagesDialogs) {
            DialogsPage = _pagesDialogs.DialogsPage;
        }, function (_pagesGeolocation) {
            GeolocationPage = _pagesGeolocation.GeolocationPage;
        }, function (_pagesStatusbar) {
            StatusBarPage = _pagesStatusbar.StatusBarPage;
        }, function (_pagesVibration) {
            VibrationPage = _pagesVibration.VibrationPage;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            MyApp = (function () {
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
                    this.firstPage = CameraPage;
                    this.plugins = [{ title: 'Camera', page: CameraPage }, { title: 'Device', page: DevicePage }, { title: 'Device Motion', page: DeviceMotionPage }, { title: 'Device Orientation', page: DeviceOrientationPage }, { title: 'Dialogs', page: DialogsPage }, { title: 'Geolocation', page: GeolocationPage }, { title: 'Contacts', page: ContactsPage }, { title: 'Battery', page: BatteryPage }, { title: 'StatusBar', page: StatusBarPage }, { title: 'Vibration', page: VibrationPage }];
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

            MyApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof Events !== 'undefined' && Events || Object])], MyApp);
        }
    };
});