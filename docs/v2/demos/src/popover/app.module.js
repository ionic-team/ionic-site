import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ApiDemoApp, ApiDemoPage, PopoverRadioPage } from './app.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ApiDemoApp,
                        ApiDemoPage,
                        PopoverRadioPage
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        ApiDemoPage,
                        PopoverRadioPage
                    ]
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
