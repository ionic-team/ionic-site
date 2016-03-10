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
var ionic_angular_2 = require('ionic-angular');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = MainPage;
    }
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
var MainPage = (function () {
    function MainPage() {
        this.local = new ionic_angular_2.Storage(ionic_angular_2.LocalStorage);
        this.localStorageDemo = '{}';
        window.localStorage.clear();
        this.myItem = {
            key: 'username',
            value: 'admin'
        };
        this.keys = ['username', 'name', 'email', 'address'];
        this.values = ['admin', 'Administrator', 'admin@administrator.com', '123 Admin St'];
        this.addedKeys = [];
    }
    MainPage.prototype.set = function () {
        if (this.myItem.key) {
            var added = false;
            for (var i = 0; i < this.addedKeys.length; i++) {
                if (this.addedKeys[i] == this.myItem.key)
                    added = true;
            }
            if (added == false) {
                console.log("Adding key", this.myItem.key);
                this.addedKeys.push(this.myItem.key);
                this.delKey = this.myItem.key;
                this.local.set(this.myItem.key, this.myItem.value);
                this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
            }
        }
    };
    MainPage.prototype.remove = function () {
        this.local.remove(this.delKey);
        this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
        var index = this.addedKeys.indexOf(this.delKey);
        if (index > -1) {
            this.addedKeys.splice(index, 1);
        }
    };
    MainPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MainPage);
    return MainPage;
}());