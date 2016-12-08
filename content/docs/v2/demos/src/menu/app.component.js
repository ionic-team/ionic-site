import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
export var ApiDemoPage = (function () {
    function ApiDemoPage(menu) {
        this.menu = menu;
        this.menu1Active();
    }
    ApiDemoPage.prototype.menu1Active = function () {
        this.activeMenu = 'menu1';
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    ApiDemoPage.prototype.menu2Active = function () {
        this.activeMenu = 'menu2';
        this.menu.enable(false, 'menu1');
        this.menu.enable(true, 'menu2');
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: MenuController, },
    ];
    return ApiDemoPage;
}());
export var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
