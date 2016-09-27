import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ApiDemoApp, ApiDemoPage, PushPage, TabPage } from './app.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ApiDemoApp,
                        ApiDemoPage,
                        PushPage,
                        TabPage
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        ApiDemoPage,
                        PushPage,
                        TabPage
                    ]
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
