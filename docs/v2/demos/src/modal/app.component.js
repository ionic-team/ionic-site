import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
export var ModalFirstPage = (function () {
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
    ModalFirstPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ModalFirstPage.ctorParameters = [
        { type: ModalController, },
    ];
    return ModalFirstPage;
}());
export var ModalContentPage = (function () {
    function ModalContentPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'modal-content.html'
                },] },
    ];
    ModalContentPage.ctorParameters = [
        { type: ViewController, },
        { type: NavParams, },
    ];
    return ModalContentPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ModalFirstPage;
    }
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>'
                },] },
    ];
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
