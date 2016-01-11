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
var BatteryPage = (function () {
    function BatteryPage() {
    }
    BatteryPage.prototype.doBatteryStatus = function () {
        var _this = this;
        ionic_1.Battery.getStatus().then(function (battery) {
            _this.battery = battery;
        });
    };
    BatteryPage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Battery</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Battery</h2>\n    <button primary outline (click)=\"doBatteryStatus()\">Get Status</button>\n    <div *ngIf=\"battery\">\n      Battery charging: <b>{{battery.charging}}</b><br>\n      Battery level: <b>{{battery.level * 100}}</b>%<br>\n      Battery charging time: <b>{{battery.chargingTime}}</b>s<br>\n      Battery discharging time: <b>{{battery.dischargingTime}}</b>s<br>\n    </div>\n\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BatteryPage);
    return BatteryPage;
})();
exports.BatteryPage = BatteryPage;