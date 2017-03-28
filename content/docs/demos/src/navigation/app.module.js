import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, NavController } from '../';
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
    /** @nocollapse */
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
    /** @nocollapse */
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