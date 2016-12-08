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
var DeviceOrientationPage = (function () {
    function DeviceOrientationPage() {
        var _this = this;
        this.imageStyle = {
            'max-width': '100%'
        };
        ionic_1.DeviceOrientation.watchHeading().source.subscribe(function (heading) {
            _this.imageStyle['-webkit-transform'] = 'rotate(' + heading.magneticHeading + 'deg)';
        });
    }
    DeviceOrientationPage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Device Orientation</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <div style=\"text-align: center\">\n      <img src=\"http://ionic-io-assets.s3.amazonaws.com/ionitron-avatar.png\" [ng-style]=\"imageStyle\">\n    </div>\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DeviceOrientationPage);
    return DeviceOrientationPage;
})();
exports.DeviceOrientationPage = DeviceOrientationPage;