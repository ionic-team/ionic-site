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

var PageOne = function PageOne() {
    _classCallCheck(this, PageOne);
};
PageOne = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/menu-home.html'
}), __metadata('design:paramtypes', [])], PageOne);
var PageTwo = function PageTwo() {
    _classCallCheck(this, PageTwo);
};
PageTwo = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/menu-friends.html'
}), __metadata('design:paramtypes', [])], PageTwo);
var PageThree = function PageThree() {
    _classCallCheck(this, PageThree);
};
PageThree = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/menu-events.html'
}), __metadata('design:paramtypes', [])], PageThree);
var MenusPage = (function () {
    function MenusPage(app) {
        _classCallCheck(this, MenusPage);

        this.app = app;
        this.rootPage = PageOne;
        this.pages = [{ title: 'Home', component: PageOne }, { title: 'Friends', component: PageTwo }, { title: 'Events', component: PageThree }];
    }

    _createClass(MenusPage, [{
        key: "openPage",
        value: function openPage(menu, page) {
            // close the menu when clicking a link from the menu
            this.app.getComponent('leftMenu').close();
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            var nav = this.app.getComponent('menuNav');
            nav.setRoot(page.component);
        }
    }]);

    return MenusPage;
})();
exports.MenusPage = MenusPage;
exports.MenusPage = MenusPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/menus.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object])], MenusPage);
var _a;