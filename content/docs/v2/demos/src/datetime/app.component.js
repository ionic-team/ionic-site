import { Component } from '@angular/core';
export var ApiDemoPage = (function () {
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
        if (this.dst(new Date())) {
            this.parisTime = this.calculateTime('+2');
            this.madisonTime = this.calculateTime('-5');
        }
    }
    ApiDemoPage.prototype.calculateTime = function (offset) {
        var d = new Date();
        var nd = new Date(d.getTime() + (3600000 * offset));
        return nd.toISOString();
    };
    ApiDemoPage.prototype.stdTimezoneOffset = function (today) {
        var jan = new Date(today.getFullYear(), 0, 1);
        var jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };
    ApiDemoPage.prototype.dst = function (today) {
        return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html'
                },] },
    ];
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
    ApiDemoApp.ctorParameters = [];
    return ApiDemoApp;
}());
