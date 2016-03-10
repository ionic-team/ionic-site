"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var Login = (function () {
    function Login(events) {
        this.events = events;
        this.user = {
            name: "Administrator",
            username: "admin"
        };
    }
    Login.prototype.login = function () {
        this.events.publish('user:login');
    };
    Login = __decorate([
        ionic_angular_1.Page({ templateUrl: 'login.html' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.Events !== 'undefined' && ionic_angular_1.Events) === 'function' && _a) || Object])
    ], Login);
    return Login;
    var _a;
}());
var Logout = (function () {
    function Logout(events) {
        this.events = events;
    }
    Logout.prototype.logout = function () {
        this.events.publish('user:logout');
    };
    Logout = __decorate([
        ionic_angular_1.Page({ templateUrl: 'logout.html' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.Events !== 'undefined' && ionic_angular_1.Events) === 'function' && _a) || Object])
    ], Logout);
    return Logout;
    var _a;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp(app, events) {
        this.app = app;
        this.events = events;
        this.rootView = Login;
        this.loggedIn = false;
        this.pages = [
            { title: 'Logout', component: Logout, showLoggedIn: true },
            { title: 'Login', component: Login, showLoggedIn: false },
        ];
        this.listenToLoginEvents();
    }
    ApiDemoApp.prototype.openPage = function (menu, page) {
        // find the nav component and set what the root page should be
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
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
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.IonicApp !== 'undefined' && ionic_angular_1.IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ionic_angular_1.Events !== 'undefined' && ionic_angular_1.Events) === 'function' && _b) || Object])
    ], ApiDemoApp);
    return ApiDemoApp;
    var _a, _b;
}());