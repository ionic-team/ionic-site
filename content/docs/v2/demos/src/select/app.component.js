import { Component } from '@angular/core';
export var ApiDemoPage = (function () {
    function ApiDemoPage() {
        this.notifications = 'mute_1';
        this.rating = 2;
        this.gender = 'f';
        this.gaming = 'n64';
        this.petAlertOpts = {
            title: 'Like Pets?',
            subTitle: 'Select your favorite'
        };
        this.toppings = ['bacon', 'xcheese'];
        this.petData = [
            { text: 'Bird', value: 'bird' },
            { text: 'Cat', value: 'cat' },
            { text: 'Dog', value: 'dog' },
            { text: 'Honey Badger', value: 'honeybadger' },
        ];
        this.pets = ['cat', 'dog'];
    }
    ApiDemoPage.prototype.monthChange = function (val) {
        console.log('Month Change:', val);
    };
    ApiDemoPage.prototype.yearChange = function (val) {
        console.log('Year Change:', val);
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
