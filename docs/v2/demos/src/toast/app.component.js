import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
export var ApiDemoPage = (function () {
    function ApiDemoPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ApiDemoPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'User was created successfully',
            position: position,
            duration: 3000
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ApiDemoPage.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
            duration: 3000
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ApiDemoPage.prototype.showDismissDurationToast = function () {
        var toast = this.toastCtrl.create({
            message: 'I am dismissed after 1.5 seconds',
            duration: 1500
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ApiDemoPage.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Your internet connection appears to be offline. Data integrity is not guaranteed.',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.onDidDismiss(this.dismissHandler);
        toast.present();
    };
    ApiDemoPage.prototype.dismissHandler = function () {
        console.info('Toast onDidDismiss()');
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: ToastController, },
    ];
    return ApiDemoPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    template: '<ion-nav [root]="root"></ion-nav>'
                },] },
    ];
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
