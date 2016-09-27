import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var pageNum = 2;
export var ApiDemoPage = (function () {
    function ApiDemoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ApiDemoPage.prototype.push = function () {
        this.navCtrl.push(PushPage);
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: NavController, },
    ];
    return ApiDemoPage;
}());
export var PushPage = (function () {
    function PushPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pageNum = pageNum;
    }
    PushPage.prototype.push = function () {
        pageNum++;
        this.navCtrl.push(PushPage);
    };
    PushPage.prototype.pop = function () {
        if (pageNum > 2) {
            pageNum--;
        }
        this.navCtrl.pop();
    };
    PushPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'push-page.html'
                },] },
    ];
    PushPage.ctorParameters = [
        { type: NavController, },
    ];
    return PushPage;
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
