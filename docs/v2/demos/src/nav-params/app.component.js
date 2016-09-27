import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export var ApiDemoPage = (function () {
    function ApiDemoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.myParam = '';
    }
    ApiDemoPage.prototype.pushParams = function () {
        this.navCtrl.push(PushPage, { 'myParam': this.myParam });
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
    function PushPage(params) {
        this.myParam = params.get('myParam');
    }
    PushPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'push-page.html'
                },] },
    ];
    PushPage.ctorParameters = [
        { type: NavParams, },
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
