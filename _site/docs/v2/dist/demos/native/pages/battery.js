System.register("pages/battery", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, Battery, __decorate, __metadata, BatteryPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Battery = _ionicIonic.Battery;
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

            BatteryPage = (function () {
                function BatteryPage() {
                    _classCallCheck(this, BatteryPage);
                }

                _createClass(BatteryPage, [{
                    key: "doBatteryStatus",
                    value: function doBatteryStatus() {
                        var _this = this;

                        Battery.getStatus().then(function (battery) {
                            _this.battery = battery;
                        });
                    }
                }]);

                return BatteryPage;
            })();

            _export("BatteryPage", BatteryPage);

            _export("BatteryPage", BatteryPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>Battery</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Battery</h2>\n    <button primary outline (click)=\"doBatteryStatus()\">Get Status</button>\n    <div *ng-if=\"battery\">\n      Battery charging: <b>{{battery.charging}}</b><br>\n      Battery level: <b>{{battery.level * 100}}</b>%<br>\n      Battery charging time: <b>{{battery.chargingTime}}</b>s<br>\n      Battery discharging time: <b>{{battery.dischargingTime}}</b>s<br>\n    </div>\n\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [])], BatteryPage));
        }
    };
});