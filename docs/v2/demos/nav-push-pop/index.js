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

var PAGE_NUM = 2;
var ApiDemoApp = function ApiDemoApp() {
    _classCallCheck(this, ApiDemoApp);

    this.rootPage = InitialPage;
};
ApiDemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html'
}), __metadata('design:paramtypes', [])], ApiDemoApp);
var InitialPage = (function () {
    function InitialPage(nav) {
        _classCallCheck(this, InitialPage);

        this.nav = nav;
    }

    _createClass(InitialPage, [{
        key: "push",
        value: function push() {
            this.nav.push(_Page2);
        }
    }]);

    return InitialPage;
})();
exports.InitialPage = InitialPage;
exports.InitialPage = InitialPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object])], InitialPage);
var _Page2 = (function () {
    function Page2(nav) {
        _classCallCheck(this, Page2);

        this.nav = nav;
        this.pageNum = PAGE_NUM;
    }

    _createClass(Page2, [{
        key: "push",
        value: function push() {
            PAGE_NUM++;
            this.nav.push(_Page2);
        }
    }, {
        key: "pop",
        value: function pop() {
            if (PAGE_NUM > 2) {
                PAGE_NUM--;
            }
            this.nav.pop();
        }
    }]);

    return Page2;
})();
exports.Page2 = _Page2;
_Page2 = __decorate([(0, _ionicIonic.Page)({
    templateUrl: "page-2.html"
}), __metadata('design:paramtypes', [typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object])], _Page2);
var _a, _b;