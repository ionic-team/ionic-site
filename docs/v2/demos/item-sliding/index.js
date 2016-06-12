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
var InitialPage = (function () {
    function InitialPage(nav) {
        this.nav = nav;
        this.chats = [
            {
                img: './avatar-cher.png',
                name: 'Cher',
                message: 'Ugh. As if.',
                time: '9:38 pm'
            }, {
                img: './avatar-dionne.png',
                name: 'Dionne',
                message: 'Mr. Hall was way harsh.',
                time: '8:59 pm'
            }, {
                img: './avatar-murray.png',
                name: 'Murray',
                message: 'Excuse me, "Ms. Dione."',
                time: 'Wed'
            }];
        this.logins = [
            {
                icon: 'logo-twitter',
                name: 'Twitter',
                username: 'admin',
            }, {
                icon: 'logo-github',
                name: 'GitHub',
                username: 'admin37',
            }, {
                icon: 'logo-instagram',
                name: 'Instagram',
                username: 'imanadmin',
            }, {
                icon: 'logo-codepen',
                name: 'Codepen',
                username: 'administrator',
            }];
    }
    InitialPage.prototype.more = function (item) {
        console.log('More');
        item.close();
    };
    InitialPage.prototype.delete = function (item) {
        console.log('Delete');
        item.close();
    };
    InitialPage.prototype.mute = function (item) {
        console.log('Mute');
        item.close();
    };
    InitialPage.prototype.archive = function (item) {
        console.log('Archive');
        item.close();
    };
    InitialPage.prototype.download = function (item) {
        var _this = this;
        item.setClass('downloading', true);
        setTimeout(function () {
            var toast = ionic_angular_1.Toast.create({
                message: 'Item was downloaded!'
            });
            _this.nav.present(toast);
            item.setClass('downloading', false);
            item.close();
            // Wait 2s to close toast
            setTimeout(function () { return toast.dismiss(); }, 2000);
        }, 1500);
    };
    InitialPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object])
    ], InitialPage);
    return InitialPage;
    var _a;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = InitialPage;
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