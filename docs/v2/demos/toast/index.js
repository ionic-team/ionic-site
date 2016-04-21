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
var ApiPage = (function () {
    function ApiPage(nav) {
        this.nav = nav;
    }
    ApiPage.prototype.showToast = function () {
        var toast = ionic_angular_1.Toast.create({
            message: 'User was created successfully',
        });
        toast.onDismiss(this.dismissHandler);
        this.nav.present(toast);
    };
    ApiPage.prototype.showLongToast = function () {
        var toast = ionic_angular_1.Toast.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
        });
        toast.onDismiss(this.dismissHandler);
        this.nav.present(toast);
    };
    ApiPage.prototype.showDismissDurationToast = function () {
        var toast = ionic_angular_1.Toast.create({
            message: 'I am dismissed after 1.5 seconds',
            duration: 1500
        });
        toast.onDismiss(this.dismissHandler);
        this.nav.present(toast);
    };
    ApiPage.prototype.showToastWithCloseButton = function () {
        var toast = ionic_angular_1.Toast.create({
            message: 'Your internet connection appears to be offline. Data integrity is not guaranteed.',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.onDismiss(this.dismissHandler);
        this.nav.present(toast);
    };
    ApiPage.prototype.dismissHandler = function (toast) {
        console.info('Toast onDismiss()');
    };
    ApiPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object])
    ], ApiPage);
    return ApiPage;
    var _a;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiPage;
    }
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());