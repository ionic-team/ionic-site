import { Component } from '@angular/core';
export var TabPage = (function () {
    function TabPage() {
    }
    TabPage.decorators = [
        { type: Component, args: [{
                    template: '<div>johnny utah</div>',
                },] },
    ];
    TabPage.ctorParameters = [];
    return TabPage;
}());
export var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.root = TabPage;
    }
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [];
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
