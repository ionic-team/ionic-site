import { Component, ViewChild } from '@angular/core';
import { Events, Nav } from 'ionic-angular';
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
    ApiDemoApp.ctorParameters = [
        { type: Events, },
    ];
    ApiDemoApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return ApiDemoApp;
}());
