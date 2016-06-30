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
var Page1 = (function () {
    function Page1(loadingCtrl, nav) {
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
    }
    Page1.prototype.presentLoadingIos = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'This is the "ios" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingDots = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'This is the "dots" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingBubbles = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'This is the "bubbles" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingCircles = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'This is the "circles" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingCrescent = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'This is the "crescent" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'This is the mode specific spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\"></div>\n        </div>\n        <div>This is a custom spinner. It will dismiss after 3 seconds.</div>",
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingText = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'This has no spinner, only text. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.goToPage2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'This will navigate to the next page and then dismiss after 3 seconds.'
        });
        loading.present();
        setTimeout(function () {
            _this.nav.push(Page2);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 4000);
    };
    Page1 = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.LoadingController !== 'undefined' && ionic_angular_1.LoadingController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _b) || Object])
    ], Page1);
    return Page1;
    var _a, _b;
}());
var Page2 = (function () {
    function Page2() {
    }
    Page2 = __decorate([
        core_1.Component({
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Page 2</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>This is another page!</ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Page2);
    return Page2;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = Page1;
    }
    ApiDemoApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="root"></ion-nav>',
            styleUrls: ['styles.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp);