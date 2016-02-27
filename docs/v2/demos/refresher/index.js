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
var mock_provider_1 = require('./mock-provider');
var ApiDemoApp = (function () {
    function ApiDemoApp(mockProvider) {
        this.mockProvider = mockProvider;
        this.items = mockProvider.getData();
    }
    ApiDemoApp.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('DOREFRESH', refresher);
        this.mockProvider.getAsyncData().then(function (newData) {
            for (var i = 0; i < newData.length; i++) {
                _this.items.unshift(newData[i]);
            }
            refresher.endRefreshing();
        });
    };
    ApiDemoApp.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    ApiDemoApp = __decorate([
        ionic_angular_1.App({
            templateUrl: 'main.html',
            providers: [mock_provider_1.MockProvider]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof mock_provider_1.MockProvider !== 'undefined' && mock_provider_1.MockProvider) === 'function' && _a) || Object])
    ], ApiDemoApp);
    return ApiDemoApp;
    var _a;
})();