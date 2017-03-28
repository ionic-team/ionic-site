import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, LoadingController, NavController } from '../';
export var Page1 = (function () {
    function Page1(loadingCtrl, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
    }
    Page1.prototype.presentLoadingIos = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'This is the "ios" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingDots = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'This is the "dots" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingBubbles = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'This is the "bubbles" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingCircles = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'This is the "circles" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingCrescent = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'This is the "crescent" spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'This is the mode specific spinner. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"loading-custom-spinner-container\">\n          <div class=\"loading-custom-spinner-box\"></div>\n        </div>\n        <div>This is a custom spinner. It will dismiss after 3 seconds.</div>",
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.presentLoadingText = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: 'This has no spinner, only text. It will dismiss after 3 seconds.',
            duration: 3000
        });
        loading.present();
    };
    Page1.prototype.goToPage2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'This will navigate to the next page and then dismiss after 3 seconds.'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.push(Page2);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 4000);
    };
    Page1.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: LoadingController, },
        { type: NavController, },
    ];
    return Page1;
}());
export var Page2 = (function () {
    function Page2() {
    }
    Page2.decorators = [
        { type: Component, args: [{
                    template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Page 2</ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>This is another page!</ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [];
    return Page2;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = Page1;
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
                        Page1,
                        Page2
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        Page1,
                        Page2
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map