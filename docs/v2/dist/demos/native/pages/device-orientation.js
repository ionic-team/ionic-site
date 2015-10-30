"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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
    template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>Device Orientation</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <div style=\"text-align: center\">\n      <img src=\"http://ionic-io-assets.s3.amazonaws.com/ionitron-avatar.png\" [ng-style]=\"imageStyle\">\n    </div>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], DeviceOrientationPage);