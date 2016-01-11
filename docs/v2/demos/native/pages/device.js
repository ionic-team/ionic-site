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
var DevicePage = (function () {
    function DevicePage() {
    }
    DevicePage.prototype.doDevice = function () {
        this.device = ionic_1.Device.getDevice();
        console.log('Got device', this.device);
    };
    DevicePage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Device</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Device</h2>\n    <button primary outline (click)=\"doDevice()\">Get Device</button>\n    <div *ngIf=\"device\">\n      Device name: {{device.name}}\n    </div>\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DevicePage);
    return DevicePage;
})();
exports.DevicePage = DevicePage;