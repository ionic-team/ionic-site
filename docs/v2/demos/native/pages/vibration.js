"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
var VibrationPage = (function () {
    function VibrationPage() {
        _classCallCheck(this, VibrationPage);
    }

    _createClass(VibrationPage, [{
        key: "doVibrate",
        value: function doVibrate() {
            _ionicIonic.Vibration.vibrate(1000);
        }
    }]);

    return VibrationPage;
})();
exports.VibrationPage = VibrationPage;
exports.VibrationPage = VibrationPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <icon menu></icon>\n    </button>\n    <ion-title>Vibration</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Vibration</h2>\n    <button primary outline (click)=\"doVibrate()\">Vibrate</button>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], VibrationPage);