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
var E2EPage = (function () {
    function E2EPage(nav, platform) {
        this.nav = nav;
        this.platform = platform;
    }
    E2EPage.prototype.presentLoadingIos = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'ios',
            content: 'This is the "ios" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingDots = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'dots',
            content: 'This is the "dots" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingBubbles = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'bubbles',
            content: 'This is the "bubbles" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingCircles = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'circles',
            content: 'This is the "circles" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingCrescent = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'crescent',
            content: 'This is the "crescent" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingDefault = function () {
        var loading = ionic_angular_1.Loading.create({
            content: 'This is the mode specific spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingCustom = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>\n        <div>This is a custom spinner. It will dismiss after 3 seconds.</div>",
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.presentLoadingText = function () {
        var loading = ionic_angular_1.Loading.create({
            spinner: 'hide',
            content: 'This has no spinner, only text. It will dismiss after 3 seconds.',
            duration: 3000
        });
        this.nav.present(loading);
    };
    E2EPage.prototype.goToPage2 = function () {
        var _this = this;
        var loading = ionic_angular_1.Loading.create({
            content: 'This will navigate to the next page and then dismiss after 3 seconds.'
        });
        this.nav.present(loading);
        setTimeout(function () {
            _this.nav.push(Page2);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 4000);
    };
    E2EPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.Platform !== 'undefined' && ionic_angular_1.Platform) === 'function' && _b) || Object])
    ], E2EPage);
    return E2EPage;
    var _a, _b;
}());
var Page2 = (function () {
    function Page2(nav, platform) {
        this.nav = nav;
        this.platform = platform;
    }
    Page2 = __decorate([
        ionic_angular_1.Page({
            template: "\n    <ion-navbar *navbar>\n      <ion-title>Page 2</ion-title>\n    </ion-navbar>\n    <ion-content padding>This is another page!</ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.Platform !== 'undefined' && ionic_angular_1.Platform) === 'function' && _b) || Object])
    ], Page2);
    return Page2;
    var _a, _b;
}());
var E2EApp = (function () {
    function E2EApp() {
        this.root = E2EPage;
    }
    E2EApp = __decorate([
        ionic_angular_1.App({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], E2EApp);
    return E2EApp;
}());
document.body.innerHTML += '<link href="styles.css" rel="stylesheet">';