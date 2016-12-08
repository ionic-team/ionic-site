import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
export var ApiDemoPage = (function () {
    function ApiDemoPage(platform) {
        this.isIos = platform.is('ios');
        this.isAndroid = platform.is('android');
        this.isWindows = platform.is('windows');
    }
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: Platform, },
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
