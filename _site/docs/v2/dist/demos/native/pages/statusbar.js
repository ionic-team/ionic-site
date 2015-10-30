"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
var StatusBarPage = (function () {
    function StatusBarPage() {
        _classCallCheck(this, StatusBarPage);

        this.styles = [_ionicIonic.StatusBar.DEFAULT, _ionicIonic.StatusBar.LIGHT_CONTENT, _ionicIonic.StatusBar.BLACK_TRANSLUCENT, _ionicIonic.StatusBar.BLACK_OPAQUE];
        this.currentStyle = 0;
        this.colorHex = '#fff';
    }

    _createClass(StatusBarPage, [{
        key: "hide",
        value: function hide() {
            _ionicIonic.StatusBar.hide();
        }
    }, {
        key: "show",
        value: function show() {
            _ionicIonic.StatusBar.show();
        }
    }, {
        key: "toggleOverlays",
        value: function toggleOverlays() {
            this.doesOverlay = !!!this.doesOverlay;
            _ionicIonic.StatusBar.setOverlays(this.doesOverlay);
        }
    }, {
        key: "setStyle",
        value: function setStyle() {
            _ionicIonic.StatusBar.setStyle(this.styles[++this.currentStyle]);
        }
    }, {
        key: "setColor",
        value: function setColor() {
            console.log('Setting color', this.colorHex);
            _ionicIonic.StatusBar.setHexColor(this.colorHex);
        }
    }]);

    return StatusBarPage;
})();
exports.StatusBarPage = StatusBarPage;
exports.StatusBarPage = StatusBarPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>StatusBar</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>StatusBar</h2>\n    <div>\n      <button primary outline (click)=\"hide()\">Hide</button>\n      <button primary outline (click)=\"show()\">Show</button>\n      <button primary outline (click)=\"toggleOverlays()\">Toggle Overlays</button>\n      <button primary outline (click)=\"setStyle()\">Cycle Style</button>\n    </div>\n    <div>\n      <div>\n        <input [(ng-model)]=\"colorHex\">\n      </div>\n      <button primary outline (click)=\"setColor()\">Set Color</button>\n    </div>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], StatusBarPage);