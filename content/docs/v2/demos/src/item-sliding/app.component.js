import { Component, ViewEncapsulation } from '@angular/core';
import { ToastController } from 'ionic-angular';
export var ApiDemoPage = (function () {
    function ApiDemoPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
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
    ApiDemoPage.prototype.more = function (item) {
        console.log('More');
        item.close();
    };
    ApiDemoPage.prototype.delete = function (item) {
        console.log('Delete');
        item.close();
    };
    ApiDemoPage.prototype.mute = function (item) {
        console.log('Mute');
        item.close();
    };
    ApiDemoPage.prototype.archive = function (item) {
        this.expandAction(item, 'archiving', 'Chat was archived.');
    };
    ApiDemoPage.prototype.download = function (item) {
        this.expandAction(item, 'downloading', 'Login was downloaded.');
    };
    ApiDemoPage.prototype.expandAction = function (item, action, text) {
        var _this = this;
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: text
            });
            toast.present();
            item.close();
            setTimeout(function () { return toast.dismiss(); }, 2000);
        }, 1500);
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html',
                    encapsulation: ViewEncapsulation.None
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
