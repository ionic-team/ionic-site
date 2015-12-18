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

var ApiDemoApp = function ApiDemoApp() {
    _classCallCheck(this, ApiDemoApp);

    this.rootPage = TabPage;
};
ApiDemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html',
    config: CONFIG_DEMO || {}
}), __metadata('design:paramtypes', [])], ApiDemoApp);
var TabPage = function TabPage() {
    _classCallCheck(this, TabPage);

    this.tabOne = InitialPage;
};
exports.TabPage = TabPage;
exports.TabPage = TabPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'tabs.html'
}), __metadata('design:paramtypes', [])], TabPage);
var InitialPage = (function () {
    function InitialPage(platform) {
        _classCallCheck(this, InitialPage);

        this.platform = platform;
        if (window.localStorage.getItem('configDemo') !== null) {
            this.config = JSON.parse(window.localStorage.getItem('configDemo'));
        } else if (platform.is('ios')) {
            this.config = {
                'backButtonIcon': 'ion-ios-arrow-back',
                'iconMode': 'ios',
                'tabbarPlacement': 'bottom'
            };
        } else {
            this.config = {
                'backButtonIcon': 'ion-md-arrow-back',
                'iconMode': 'md',
                'tabbarPlacement': 'top'
            };
        }
    }

    _createClass(InitialPage, [{
        key: "load",
        value: function load() {
            window.localStorage.setItem('configDemo', JSON.stringify(this.config));
            window.location.reload();
        }
    }]);

    return InitialPage;
})();
exports.InitialPage = InitialPage;
exports.InitialPage = InitialPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _a || Object])], InitialPage);
var _a;