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
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var PAGE_NUM = 2;
var ApiDemoPage = (function () {
    function ApiDemoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ApiDemoPage.prototype.push = function () {
        this.navCtrl.push(PushPage);
    };
    ApiDemoPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object])
    ], ApiDemoPage);
    return ApiDemoPage;
    var _a;
}());
exports.ApiDemoPage = ApiDemoPage;
var PushPage = (function () {
    function PushPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pageNum = PAGE_NUM;
    }
    PushPage.prototype.push = function () {
        PAGE_NUM++;
        this.navCtrl.push(PushPage);
    };
    PushPage.prototype.pop = function () {
        if (PAGE_NUM > 2) {
            PAGE_NUM--;
        }
        this.navCtrl.pop();
    };
    PushPage = __decorate([
        core_1.Component({
            templateUrl: "page.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object])
    ], PushPage);
    return PushPage;
    var _a;
}());
exports.PushPage = PushPage;
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp);