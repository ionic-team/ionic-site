"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DeviceOrientationPage = function DeviceOrientationPage() {
    var _this = this;

    _classCallCheck(this, DeviceOrientationPage);

    this.imageStyle = {
        'max-width': '100%'
    };
    _ionicIonic.DeviceOrientation.watchHeading().source.subscribe(function (heading) {
        _this.imageStyle['-webkit-transform'] = 'rotate(' + heading.magneticHeading + 'deg)';
    });
};
exports.DeviceOrientationPage = DeviceOrientationPage;
exports.DeviceOrientationPage = DeviceOrientationPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <icon menu></icon>\n    </button>\n    <ion-title>Device Orientation</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <div style=\"text-align: center\">\n      <img src=\"http://ionic-io-assets.s3.amazonaws.com/ionitron-avatar.png\" [ng-style]=\"imageStyle\">\n    </div>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], DeviceOrientationPage);