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
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var CleanLocalDataPipe = (function () {
    function CleanLocalDataPipe() {
    }
    CleanLocalDataPipe.prototype.transform = function (obj) {
        this.validKeys = ['username', 'name', 'email', 'address'];
        this.output = {};
        this.data = JSON.parse(obj);
        for (var i = 0; i < Object.keys(this.data).length; i++) {
            if (this.validKeys.indexOf(Object.keys(this.data)[i]) > -1) {
                this.output[Object.keys(this.data)[i]] = this.data[Object.keys(this.data)[i]];
            }
        }
        return JSON.stringify(this.output, null, 2);
    };
    CleanLocalDataPipe = __decorate([
        core_1.Pipe({
            name: 'cleanLocalData'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CleanLocalDataPipe);
    return CleanLocalDataPipe;
}());
var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.keys = ['username', 'name', 'email', 'address'];
        this.values = ['admin', 'Administrator', 'admin@administrator.com', '123 Admin St'];
        this.addedKeys = [];
        this.local = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.localStorageDemo = '{}';
        window.localStorage.clear();
        this.myItem = {
            key: 'username',
            value: 'admin'
        };
    }
    ApiDemoPage.prototype.set = function () {
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
    ApiDemoPage.prototype.remove = function () {
        this.local.remove(this.delKey);
        this.localStorageDemo = JSON.stringify(window.localStorage, null, 2);
        var index = this.addedKeys.indexOf(this.delKey);
        if (index > -1) {
            this.addedKeys.splice(index, 1);
        }
    };
    ApiDemoPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html',
            pipes: [CleanLocalDataPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoPage);
    return ApiDemoPage;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="root"></ion-nav>',
            pipes: [CleanLocalDataPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp);