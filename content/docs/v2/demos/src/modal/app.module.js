import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ApiDemoApp, ModalContentPage, ModalFirstPage } from './app.component';
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
    AppModule.ctorParameters = [];
    return AppModule;
}());
