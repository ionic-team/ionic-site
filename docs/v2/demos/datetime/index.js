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
var MainPage = (function () {
    function MainPage() {
        this.wwwInvented = '1989';
        this.time = '13:47';
        this.netscapeRelease = '1994-12-15T13:47:20.789';
        this.operaRelease = '1995-04-15';
        this.firefoxRelease = '2002-09-23T15:03:46.789';
        this.webkitOpenSourced = '2005-06-17T11:06Z';
        this.chromeReleased = '2008-09-02';
        this.leapYearsSummerMonths = '';
        this.leapYearsArray = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customShortDay = [
            'Dom',
            'Lun',
            'Mar',
            'Mié',
            'Jue',
            'Vie',
            'Sáb'
        ];
    }
    MainPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MainPage);
    return MainPage;
}());
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