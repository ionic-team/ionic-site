import { Component, ViewEncapsulation } from '@angular/core';
export var TabPage = (function () {
    function TabPage() {
    }
    TabPage.decorators = [
        { type: Component, args: [{
                    template: '<div>johnny utah</div>',
                    selector: 'tab-page'
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
                    templateUrl: 'page.html',
                    selector: 'api-demo-page',
                    encapsulation: ViewEncapsulation.None,
                    styles: [
                        "\n      ion-tabs {\n        margin-bottom: 20px;\n      }\n    ",
                        "\n      ion-tabs,\n      ion-tabs .tabbar {\n        position: relative;\n        top: auto;\n        height: auto;\n        visibility: visible;\n        opacity: 1;\n      }\n    "
                    ]
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
                    template: '<ion-nav [root]="root"></ion-nav>',
                    selector: 'api-demo-app'
                },] },
    ];
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
