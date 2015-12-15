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
var CameraPage = (function () {
    function CameraPage() {
        _classCallCheck(this, CameraPage);
    }

    _createClass(CameraPage, [{
        key: "getPicture",
        value: function getPicture() {
            _ionicIonic.Camera.getPicture({}).then(function (data) {
                console.log('Data', data);
            }, function (err) {
                alert('Unable to take picture');
            });
        }
    }]);

    return CameraPage;
})();
exports.CameraPage = CameraPage;
exports.CameraPage = CameraPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar>\n    <button menu-toggle>\n      <icon menu></icon>\n    </button>\n    <ion-title>Camera</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Camera</h2>\n    <button primary outline (click)=\"getPicture()\">Get Picture</button>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], CameraPage);