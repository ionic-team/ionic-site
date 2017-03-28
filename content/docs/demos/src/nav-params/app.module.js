import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, NavController, NavParams } from '../';
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ApiDemoApp,
                        ApiDemoPage,
                        PushPage
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        ApiDemoPage,
                        PushPage
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map