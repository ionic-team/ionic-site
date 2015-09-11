System.register("index", ["ionic/ionic", "pages/camera", "pages/battery", "pages/contacts", "pages/device", "pages/device-motion", "pages/geolocation", "pages/vibration"], function (_export) {
    "use strict";

    var App, CameraPage, BatteryPage, ContactsPage, DevicePage, DeviceMotionPage, GeolocationPage, VibrationPage, __decorate, __metadata, IonicApp;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
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
        }, function (_pagesGeolocation) {
            GeolocationPage = _pagesGeolocation.GeolocationPage;
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

            IonicApp = function IonicApp() {
                _classCallCheck(this, IonicApp);

                this.firstPage = CameraPage;
                console.log('First page', CameraPage);
                this.plugins = [{ title: 'Camera', page: CameraPage }, { title: 'Device', page: DevicePage }, { title: 'Device Motion', page: DeviceMotionPage }, { title: 'Geolocation', page: GeolocationPage }, { title: 'Contacts', page: ContactsPage }, { title: 'Battery', page: BatteryPage }, { title: 'Vibration', page: VibrationPage }];
            };

            IonicApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});