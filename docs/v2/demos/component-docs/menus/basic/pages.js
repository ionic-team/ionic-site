var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var core_1 = require('angular2/core');
var helpers = require('../../helpers');
var BasicPage = (function () {
    function BasicPage(app) {
        this.app = app;
        this.app.getComponent('leftMenu').enable(true);
    }
    BasicPage = __decorate([
        ionic_1.Page({
            templateUrl: 'menus/basic/menu-home.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object])
    ], BasicPage);
    return BasicPage;
    var _a;
})();
exports.BasicPage = BasicPage;
var PageOne = (function () {
    function PageOne() {
    }
    PageOne = __decorate([
        ionic_1.Page({
            templateUrl: 'menus/basic/menu-home.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [])
    ], PageOne);
    return PageOne;
})();
exports.PageOne = PageOne;
var PageTwo = (function () {
    function PageTwo() {
    }
    PageTwo = __decorate([
        ionic_1.Page({
            templateUrl: 'menus/basic/menu-friends.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [])
    ], PageTwo);
    return PageTwo;
})();
exports.PageTwo = PageTwo;
var PageThree = (function () {
    function PageThree() {
    }
    PageThree = __decorate([
        ionic_1.Page({
            templateUrl: 'menus/basic/menu-events.html',
            directives: [core_1.forwardRef(function () { return helpers.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [])
    ], PageThree);
    return PageThree;
})();
exports.PageThree = PageThree;