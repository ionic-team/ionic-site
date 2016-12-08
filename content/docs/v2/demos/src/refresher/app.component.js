import { Component, Injectable } from '@angular/core';
export var MockProvider = (function () {
    function MockProvider() {
        this._data = [
            'Fast Times at Ridgemont High',
            'Peggy Sue Got Married',
            'Raising Arizona',
            'Moonstruck',
            'Fire Birds',
            'Honeymoon in Vegas',
            'Amos & Andrew',
            'It Could Happen to You',
            'Trapped in Paradise',
            'Leaving Las Vegas',
            'The Rock',
            'Con Air',
            'Face/Off',
            'City of Angels',
            'Gone in Sixty Seconds',
            'The Family Man',
            'Windtalkers',
            'Matchstick Men',
            'National Treasure',
            'Ghost Rider',
            'Grindhouse',
            'Next',
            'Kick-Ass',
            'Drive Angry',
        ];
    }
    MockProvider.prototype.getData = function () {
        var data = [];
        for (var i = 0; i < 3; i++) {
            data.push(this._getRandomData());
        }
        return data;
    };
    MockProvider.prototype.getAsyncData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.getData());
            }, 1000);
        });
    };
    MockProvider.prototype._getRandomData = function () {
        var i = Math.floor(Math.random() * this._data.length);
        return this._data[i];
    };
    MockProvider.decorators = [
        { type: Injectable },
    ];
    MockProvider.ctorParameters = [];
    return MockProvider;
}());
export var ApiDemoPage = (function () {
    function ApiDemoPage(mockProvider) {
        this.mockProvider = mockProvider;
        this.items = mockProvider.getData();
    }
    ApiDemoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('DOREFRESH', refresher);
        this.mockProvider.getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.unshift(newData[i]);
            }
            refresher.complete();
        });
    };
    ApiDemoPage.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    ApiDemoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'page.html',
                    providers: [MockProvider]
                },] },
    ];
    ApiDemoPage.ctorParameters = [
        { type: MockProvider, },
    ];
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
