var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var http_1 = require('angular2/http');
var ApiDemoApp = (function () {
    function ApiDemoApp(app, http) {
        var _this = this;
        this.app = app;
        this.http = http;
        this.extraOptions = {
            loop: true
        };
        this.images = [];
        var tags = "amsterdam";
        var FLICKR_API_KEY = '504fd7414f6275eb5b657ddbfba80a2c';
        var baseUrl = 'https://api.flickr.com/services/rest/';
        this.http.get(baseUrl + '?method=flickr.groups.pools.getPhotos&group_id=1463451@N25&safe_search=1&api_key=' + FLICKR_API_KEY + '&format=json&nojsoncallback=1&tags=' + tags).subscribe(function (data) {
            var val = data.json();
            _this.images = val.photos.photo.slice(0, 20);
            setTimeout(function () {
                _this.slider.update();
            });
        }, function (err) { return console.log(err); }, function () { return console.log('complete'); });
    }
    ApiDemoApp.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.slider = _this.app.getComponent('slider');
            console.log('Got slider', _this.slider);
        });
    };
    ApiDemoApp.prototype.getImageUrl = function (item) {
        return "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_z.jpg";
    };
    ApiDemoApp.prototype.doRefresh = function () {
        console.log('DOREFRESH');
    };
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object])
    ], ApiDemoApp);
    return ApiDemoApp;
    var _a, _b;
})();