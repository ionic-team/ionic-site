import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, ModalController, NavParams, ViewController } from '../';
export var ModalFirstPage = (function () {
    function ModalFirstPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.myParam = '';
    }
    ModalFirstPage.prototype.openBasicModal = function () {
        var myModal = this.modalCtrl.create(ModalContentPage);
        myModal.present();
    };
    ModalFirstPage.prototype.openModalWithParams = function () {
        var myModal = this.modalCtrl.create(ModalContentPage, { 'myParam': this.myParam });
        myModal.present();
    };
    ModalFirstPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    /** @nocollapse */
    ModalFirstPage.ctorParameters = [
        { type: ModalController, },
    ];
    return ModalFirstPage;
}());
export var ModalContentPage = (function () {
    function ModalContentPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'modal-content.html'
                },] },
    ];
    /** @nocollapse */
    ModalContentPage.ctorParameters = [
        { type: ViewController, },
        { type: NavParams, },
    ];
    return ModalContentPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ModalFirstPage;
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
                        ModalFirstPage,
                        ModalContentPage
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        ModalFirstPage,
                        ModalContentPage
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map