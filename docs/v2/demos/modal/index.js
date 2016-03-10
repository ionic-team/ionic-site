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
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootPage = ModalFirstPage;
    }
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
var ModalFirstPage = (function () {
    function ModalFirstPage(nav) {
        this.nav = nav;
        this.myParam = '';
    }
    ModalFirstPage.prototype.openBasicModal = function () {
        var myModal = ionic_angular_2.Modal.create(ModalContentPage);
        this.nav.present(myModal);
    };
    ModalFirstPage.prototype.openModalWithParams = function () {
        var myModal = ionic_angular_2.Modal.create(ModalContentPage, { 'myParam': this.myParam });
        this.nav.present(myModal);
    };
    ModalFirstPage.prototype.openCustomAnimationModal = function () {
        var myModal = ionic_angular_2.Modal.create(ModalContentPage, {
            animation: 'my-fade-in',
        });
        this.nav.present(myModal);
    };
    ModalFirstPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_2.NavController !== 'undefined' && ionic_angular_2.NavController) === 'function' && _a) || Object])
    ], ModalFirstPage);
    return ModalFirstPage;
    var _a;
}());
exports.ModalFirstPage = ModalFirstPage;
var ModalContentPage = (function () {
    function ModalContentPage(nav, params, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: "modal-content.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_2.NavController !== 'undefined' && ionic_angular_2.NavController) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_2.NavParams !== 'undefined' && ionic_angular_2.NavParams) === 'function' && _b) || Object, (typeof (_c = typeof ionic_angular_1.ViewController !== 'undefined' && ionic_angular_1.ViewController) === 'function' && _c) || Object])
    ], ModalContentPage);
    return ModalContentPage;
    var _a, _b, _c;
}());
exports.ModalContentPage = ModalContentPage;
var FadeIn = (function (_super) {
    __extends(FadeIn, _super);
    function FadeIn(enteringView, leavingView) {
        _super.call(this, enteringView.pageRef());
        this
            .easing('ease')
            .duration(1000)
            .fromTo('translateY', '0%', '0%')
            .fadeIn()
            .before.addClass('show-page');
    }
    return FadeIn;
}(ionic_angular_2.Animation));
ionic_angular_2.Animation.register('my-fade-in', FadeIn);
var FadeOut = (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut(enteringView, leavingView) {
        _super.call(this, leavingView.pageRef());
        this
            .easing('ease')
            .duration(500)
            .fadeOut()
            .before.addClass('show-page');
    }
    return FadeOut;
}(ionic_angular_2.Animation));
ionic_angular_2.Animation.register('my-fade-out', FadeOut);