"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Http = require('angular2/http');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyApp = (function () {
    function MyApp(app, http) {
        var _this = this;

        _classCallCheck(this, MyApp);

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
        }, function (err) {
            return console.log(err);
        }, function () {
            return console.log('complete');
        });
    }

    _createClass(MyApp, [{
        key: "onInit",
        value: function onInit() {
            var _this2 = this;

            setTimeout(function () {
                _this2.slider = _this2.app.getComponent('slider');
                console.log('Got slider', _this2.slider);
            });
        }
    }, {
        key: "getImageUrl",
        value: function getImageUrl(item) {
            return "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_z.jpg";
        }
    }, {
        key: "doRefresh",
        value: function doRefresh() {
            console.log('DOREFRESH');
        }
    }]);

    return MyApp;
})();
MyApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _angular2Http.Http !== 'undefined' && _angular2Http.Http) === 'function' && _b || Object])], MyApp);
var _a, _b;