import { Component } from '@angular/core';
export var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.data = {
            jon: true,
            daenerys: true,
            arya: false,
            tyroin: false,
            sansa: true,
            khal: false,
            cersei: true,
            stannis: true,
            petyr: false,
            hodor: true,
            catelyn: true,
            bronn: false
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
