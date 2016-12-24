import { Component, NgModule, ViewChild } from '@angular/core';
import { Events, IonicApp, IonicModule, Nav } from '../';
export var Login = (function () {
    function Login(events) {
        this.events = events;
        this.user = {
            name: 'Administrator',
            username: 'admin'
        };
    }
    Login.prototype.login = function () {
        this.events.publish('user:login');
    };
    Login.decorators = [
        { type: Component, args: [{
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    Login.ctorParameters = [
        { type: Events, },
    ];
    return Login;
}());
export var Logout = (function () {
    function Logout(events) {
        this.events = events;
    }
    Logout.prototype.logout = function () {
        this.events.publish('user:logout');
    };
    Logout.decorators = [
        { type: Component, args: [{
                    templateUrl: 'logout.html'
                },] },
    ];
    /** @nocollapse */
    Logout.ctorParameters = [
        { type: Events, },
    ];
    return Logout;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp(events) {
        this.events = events;
        this.root = Login;
        this.loggedIn = false;
        this.loggedInPages = [
            { title: 'Logout', component: Logout }
        ];
        this.loggedOutPages = [
            { title: 'Login', component: Login }
        ];
        this.listenToLoginEvents();
    }
    ApiDemoApp.prototype.openPage = function (menu, page) {
        // find the nav component and set what the root page should be
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    ApiDemoApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.loggedIn = true;
        });
        this.events.subscribe('user:logout', function () {
            _this.loggedIn = false;
        });
    };
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    ApiDemoApp.ctorParameters = [
        { type: Events, },
    ];
    ApiDemoApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return ApiDemoApp;
}());
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ApiDemoApp,
                        Login,
                        Logout
                    ],
                    imports: [
                        IonicModule.forRoot(ApiDemoApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        Login,
                        Logout
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map