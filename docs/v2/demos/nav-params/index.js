"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootPage = InitialPage;
    }
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
var InitialPage = (function () {
    function InitialPage(nav) {
        this.nav = nav;
        this.myParam = '';
    }
    InitialPage.prototype.pushParams = function () {
        this.nav.push(Page2, { 'myParam': this.myParam });
    };
    InitialPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_2.NavController !== 'undefined' && ionic_angular_2.NavController) === 'function' && _a) || Object])
    ], InitialPage);
    return InitialPage;
    var _a;
}());
exports.InitialPage = InitialPage;
var Page2 = (function () {
    function Page2(nav, params) {
        this.nav = nav;
        this.myParam = params.get('myParam');
    }
    Page2 = __decorate([
        ionic_angular_1.Page({
            templateUrl: "page-2.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_2.NavController !== 'undefined' && ionic_angular_2.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_2.NavParams !== 'undefined' && ionic_angular_2.NavParams) === 'function' && _b) || Object])
    ], Page2);
    return Page2;
    var _a, _b;
}());
exports.Page2 = Page2;