import { Component } from '@angular/core';
export var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.data = {
            frodo: true,
            sam: false,
            eowyn: true,
            legolas: true,
            gimli: false,
            saruman: true,
            gandalf: true,
            arwen: false,
            boromir: false,
            gollum: true,
            galadriel: false
        };
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
