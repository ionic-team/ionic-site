"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../../helpers');

var helpers = _interopRequireWildcard(_helpers);

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

var TabIconPage = (function () {
    function TabIconPage(platform) {
        _classCallCheck(this, TabIconPage);

        this.platform = platform;
        this.isAndroid = platform.is('android');
    }

    _createClass(TabIconPage, [{
        key: "onPageWillEnter",
        value: function onPageWillEnter() {
            document.getElementById('md-tabs-icon').style.display = "block";
            document.getElementById('md-only').style.display = "none";
        }
    }]);

    return TabIconPage;
})();
TabIconPage = __decorate([(0, _ionicIonic.Page)({
    template: '' + '<ion-navbar *navbar hide-back-button [attr.danger]="isAndroid ? \'\' : null">' + '<ion-title>Tabs</ion-title>' + '</ion-navbar>' + '<ion-content>' + '</ion-content>',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _a || Object])], TabIconPage);
var IconPage = (function () {
    function IconPage() {
        _classCallCheck(this, IconPage);

        this.tabOne = TabIconPage;
        this.tabTwo = TabIconPage;
        this.tabThree = TabIconPage;
        this.tabFour = TabIconPage;
    }

    _createClass(IconPage, [{
        key: "onPageWillLeave",
        value: function onPageWillLeave() {
            document.getElementById('md-tabs-icon').style.display = "none";
            document.getElementById('md-only').style.display = "block";
        }
    }]);

    return IconPage;
})();
exports.IconPage = IconPage;
exports.IconPage = IconPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-tabs class="tabs-icon">' + '<ion-tab tab-icon="contact" [root]="tabOne"></ion-tab>' + '<ion-tab tab-icon="compass" [root]="tabTwo"></ion-tab>' + '<ion-tab tab-icon="analytics" [root]="tabThree"></ion-tab>' + '<ion-tab tab-icon="settings" [root]="tabFour"></ion-tab>' + '</ion-tabs>'
}), __metadata('design:paramtypes', [])], IconPage);
var _a;