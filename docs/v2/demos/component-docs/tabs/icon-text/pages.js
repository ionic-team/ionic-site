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

var TabIconTextPage = (function () {
    function TabIconTextPage(platform) {
        _classCallCheck(this, TabIconTextPage);

        this.platform = platform;
        this.isAndroid = platform.is('android');
    }

    _createClass(TabIconTextPage, [{
        key: "onInit",
        value: function onInit() {
            document.getElementById('md-tabs-icon-text').style.display = "block";
            document.getElementById('md-only').style.display = "none";
        }
    }, {
        key: "onDestroy",
        value: function onDestroy() {
            document.getElementById('md-tabs-icon-text').style.display = "none";
            document.getElementById('md-only').style.display = "block";
        }
    }]);

    return TabIconTextPage;
})();
TabIconTextPage = __decorate([(0, _ionicIonic.Page)({
    template: '' + '<ion-navbar *navbar hide-back-button [attr.royal]="isAndroid ? \'\' : null">' + '<ion-title>Tabs</ion-title>' + '</ion-navbar>' + '<ion-content>' + '</ion-content>',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _a || Object])], TabIconTextPage);
var IconTextPage = function IconTextPage() {
    _classCallCheck(this, IconTextPage);

    this.tabOne = TabIconTextPage;
    this.tabTwo = TabIconTextPage;
    this.tabThree = TabIconTextPage;
    this.tabFour = TabIconTextPage;
};
exports.IconTextPage = IconTextPage;
exports.IconTextPage = IconTextPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-tabs class="tabs-icon-text">' + '<ion-tab tab-icon="water" tab-title="Water" [root]="tabOne"></ion-tab>' + '<ion-tab tab-icon="leaf" tab-title="Life" [root]="tabTwo"></ion-tab>' + '<ion-tab tab-icon="flame" tab-title="Fire" [root]="tabThree"></ion-tab>' + '<ion-tab tab-icon="magnet" tab-title="Force" [root]="tabFour"></ion-tab>' + '</ion-tabs>'
}), __metadata('design:paramtypes', [])], IconTextPage);
var _a;