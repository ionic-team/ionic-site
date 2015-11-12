"use strict";

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
                return d && d(target, key), void 0;
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

var IonicApp = function IonicApp() {
    _classCallCheck(this, IonicApp);

    this.root = TabsPage;
};
IonicApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [])], IonicApp);
var HomeTabPage = (function () {
    function HomeTabPage(nav) {
        _classCallCheck(this, HomeTabPage);

        this.nav = nav;
    }

    _createClass(HomeTabPage, [{
        key: "push",
        value: function push() {}
    }]);

    return HomeTabPage;
})();
HomeTabPage = __decorate([(0, _ionicIonic.IonicView)({
    template: '' + '<ion-navbar *navbar>' + '<ion-title>Home</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + 'home' + '</ion-content>'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object])], HomeTabPage);
var PeekTabPage = (function () {
    function PeekTabPage(nav) {
        _classCallCheck(this, PeekTabPage);

        this.nav = nav;
    }

    _createClass(PeekTabPage, [{
        key: "push",
        value: function push() {}
    }]);

    return PeekTabPage;
})();
PeekTabPage = __decorate([(0, _ionicIonic.IonicView)({
    template: '' + '<ion-navbar *navbar>' + '<ion-title>Peek</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + 'peek' + '</ion-content>'
}), __metadata('design:paramtypes', [typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object])], PeekTabPage);
var TabsPage = function TabsPage() {
    _classCallCheck(this, TabsPage);

    this.homeTab = HomeTabPage;
    this.peekTab = PeekTabPage;
};
TabsPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'tabs.html'
}), __metadata('design:paramtypes', [])], TabsPage);
var _a, _b;