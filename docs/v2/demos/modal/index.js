"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var ModalFirstPage = (function () {
    function ModalFirstPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.myParam = '';
    }
    ModalFirstPage.prototype.openBasicModal = function () {
        var myModal = this.modalCtrl.create(ModalContentPage);
        myModal.present();
    };
    ModalFirstPage.prototype.openModalWithParams = function () {
        var myModal = this.modalCtrl.create(ModalContentPage, { 'myParam': this.myParam });
        myModal.present();
    };
    ModalFirstPage.prototype.openCustomAnimationModal = function () {
        var myModal = this.modalCtrl.create(ModalContentPage, {
            animation: 'my-fade-in',
        });
        myModal.present();
    };
    ModalFirstPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.ModalController !== 'undefined' && ionic_angular_1.ModalController) === 'function' && _a) || Object])
    ], ModalFirstPage);
    return ModalFirstPage;
    var _a;
}());
exports.ModalFirstPage = ModalFirstPage;
var ModalContentPage = (function () {
    function ModalContentPage(nav, viewCtrl, params) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        core_1.Component({
            templateUrl: "modal-content.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.ViewController !== 'undefined' && ionic_angular_1.ViewController) === 'function' && _b) || Object, (typeof (_c = typeof ionic_angular_1.NavParams !== 'undefined' && ionic_angular_1.NavParams) === 'function' && _c) || Object])
    ], ModalContentPage);
    return ModalContentPage;
    var _a, _b, _c;
}());
exports.ModalContentPage = ModalContentPage;
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ModalFirstPage;
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
var FadeIn = (function (_super) {
    __extends(FadeIn, _super);
    function FadeIn(enteringView, leavingView) {
        _super.call(this, enteringView.pageRef());
        this
            .easing('ease')
            .duration(1000)
            .fromTo('translateY', '0%', '0%')
            .fromTo('opacity', 0, 1)
            .before.addClass('show-page');
    }
    return FadeIn;
}(ionic_angular_1.Animation));
ionic_angular_1.Animation.register('my-fade-in', FadeIn);
var FadeOut = (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut(enteringView, leavingView) {
        _super.call(this, leavingView.pageRef());
        this
            .easing('ease')
            .duration(500)
            .fromTo('opacity', 1, 0)
            .before.addClass('show-page');
    }
    return FadeOut;
}(ionic_angular_1.Animation));
ionic_angular_1.Animation.register('my-fade-out', FadeOut);