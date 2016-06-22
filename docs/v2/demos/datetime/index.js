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
var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.wwwReleased = '1991';
        this.netscapeReleased = '1994-12-15T13:47:20.789';
        this.operaReleased = '1995-04-15';
        this.webkitReleased = '1998-11-04T11:06Z';
        this.firefoxReleased = '2002-09-23T15:03:46.789';
        this.chromeReleased = '2008-09-02';
        this.alertTime = '10:15';
        this.operaShortDay = [
            's\u00f8n',
            'man',
            'tir',
            'ons',
            'tor',
            'fre',
            'l\u00f8r'
        ];
        this.tokyoTime = this.calculateTime('+9');
        this.parisTime = this.calculateTime('+1');
        this.madisonTime = this.calculateTime('-6');
        // If it is Daylight Savings Time
        if (this.dst(new Date())) {
            this.parisTime = this.calculateTime('+2');
            this.madisonTime = this.calculateTime('-5');
        }
    }
    ApiDemoPage.prototype.calculateTime = function (offset) {
        // create Date object for current location
        var d = new Date();
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(d.getTime() + (3600000 * offset));
        return nd.toISOString();
    };
    // Determine if the client uses DST
    ApiDemoPage.prototype.stdTimezoneOffset = function (today) {
        var jan = new Date(today.getFullYear(), 0, 1);
        var jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };
    ApiDemoPage.prototype.dst = function (today) {
        return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
    };
    ApiDemoPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html'
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
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp);