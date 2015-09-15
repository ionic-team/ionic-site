System.register("pages/device", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, Device, __decorate, __metadata, DevicePage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Device = _ionicIonic.Device;
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

            DevicePage = (function () {
                function DevicePage() {
                    _classCallCheck(this, DevicePage);
                }

                _createClass(DevicePage, [{
                    key: "doDevice",
                    value: function doDevice() {
                        this.device = Device.getDevice();
                        console.log('Got device', this.device);
                    }
                }]);

                return DevicePage;
            })();

            _export("DevicePage", DevicePage);

            _export("DevicePage", DevicePage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>Device</ion-title>\n  </ion-navbar>\n  <ion-content class=\"padding\">\n    <h2>Device</h2>\n    <button primary outline (click)=\"doDevice()\">Get Device</button>\n    <div *ng-if=\"device\">\n      Device name: {{device.name}}\n    </div>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [])], DevicePage));
        }
    };
});