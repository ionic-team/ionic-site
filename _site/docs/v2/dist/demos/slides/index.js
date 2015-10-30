"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyApp = (function () {
    function MyApp(app) {
        var _this = this;

        _classCallCheck(this, MyApp);

        this.app = app;
        this.extraOptions = {
            loop: true
        };
        this.images = [];
        var tags = "amsterdam";
        var FLICKR_API_KEY = '504fd7414f6275eb5b657ddbfba80a2c';
        var baseUrl = 'https://api.flickr.com/services/rest/';
        // TODO: update to use angular2's HTTP Service
        Http.get(baseUrl + '?method=flickr.groups.pools.getPhotos&group_id=1463451@N25&safe_search=1&api_key=' + FLICKR_API_KEY + '&jsoncallback=JSON_CALLBACK&format=json&tags=' + tags, {
            method: 'jsonp'
        }).then(function (val) {
            _this.images = val.photos.photo.slice(0, 20);
            setTimeout(function () {
                _this.slider.update();
            });
        }, function (err) {
            alert('Unable to load images');
            console.error(err);
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
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object])], MyApp);
var _a;