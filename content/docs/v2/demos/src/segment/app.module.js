import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../';
export var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.appType = 'Paid';
        this.safari = 'Shared Links';
        this.weather = 'sunny';
        this.apps = {
            'Paid': [
                {
                    name: 'Monopoly',
                    price: '$0.99'
                },
                {
                    name: 'Angry Birds',
                    price: '$2.99'
                }
            ],
            'Free': [
                {
                    name: 'Snapchat',
                    price: 'GET'
                },
                {
                    name: 'Instagram',
                    price: 'OPEN'
                }
            ],
            'Top': [
                {
                    name: 'Spotify',
                    price: 'OPEN'
                },
                {
                    name: 'Pandora',
                    price: 'GET'
                }
            ]
        };
        this.items = {
            'Bookmarks': [
                {
                    name: 'Favorites',
                    icon: 'ios-star-outline'
                },
                {
                    name: 'History',
                    icon: 'ios-clock-outline'
                }
            ],
            'Reading List': [
                {
                    name: 'Terms of Service',
                    icon: 'create'
                },
                {
                    name: 'User Guide',
                    icon: 'book'
                }
            ],
            'Shared Links': [
                {
                    name: 'Ionic Framework',
                    icon: 'ionic'
                },
                {
                    name: 'Learn Angular',
                    icon: 'logo-angular'
                }
            ]
        };
    }
    ApiDemoPage.prototype.getItems = function (type) {
        return this.apps[type];
    };
    ApiDemoPage.prototype.getSafariItems = function (type) {
        return this.items[type];
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    /** @nocollapse */
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
                        ApiDemoPage
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        ApiDemoPage
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map