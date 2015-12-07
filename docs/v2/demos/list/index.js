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

var ApiDemoApp = (function () {
    function ApiDemoApp(app, platform) {
        _classCallCheck(this, ApiDemoApp);

        this.app = app;
        this.platform = platform;
        this.rootPage = PageOne;
        this.pages = [{ title: 'Basic List', component: PageOne }, { title: 'Inset List', component: PageTwo }, { title: 'No-lines List', component: PageThree }, { title: 'List Headers', component: PageFour }, { title: 'Sliding Items', component: PageFive }];
    }

    _createClass(ApiDemoApp, [{
        key: "openPage",
        value: function openPage(page) {
            this.app.getComponent('leftMenu').close();
            var nav = this.app.getComponent('nav');
            nav.setRoot(page.component);
        }
    }]);

    return ApiDemoApp;
})();
ApiDemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _b || Object])], ApiDemoApp);
var PageOne = function PageOne() {
    _classCallCheck(this, PageOne);
};
exports.PageOne = PageOne;
exports.PageOne = PageOne = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'basic-list.html'
}), __metadata('design:paramtypes', [])], PageOne);
var PageTwo = function PageTwo() {
    _classCallCheck(this, PageTwo);
};
exports.PageTwo = PageTwo;
exports.PageTwo = PageTwo = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inset-list.html'
}), __metadata('design:paramtypes', [])], PageTwo);
var PageThree = function PageThree() {
    _classCallCheck(this, PageThree);
};
exports.PageThree = PageThree;
exports.PageThree = PageThree = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'no-lines-list.html'
}), __metadata('design:paramtypes', [])], PageThree);
var PageFour = function PageFour() {
    _classCallCheck(this, PageFour);
};
exports.PageFour = PageFour;
exports.PageFour = PageFour = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'list-headers.html'
}), __metadata('design:paramtypes', [])], PageFour);
var PageFive = function PageFive() {
    _classCallCheck(this, PageFive);
};
exports.PageFive = PageFive;
exports.PageFive = PageFive = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'sliding-items.html'
}), __metadata('design:paramtypes', [])], PageFive);
var _a, _b;