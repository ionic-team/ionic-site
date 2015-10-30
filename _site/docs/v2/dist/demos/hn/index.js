"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _ionicIonic = require('ionic/ionic');

var _pagesSingle = require('./pages/single');

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
var Story = function Story() {
    _classCallCheck(this, Story);
};
exports.Story = Story;
exports.Story = Story = __decorate([(0, _angular2Angular2.Component)({
    selector: 'story'
}), (0, _ionicIonic.IonicView)({
    template: '<div class="hn-story"><ng-content></ng-content></div>'
}), __metadata('design:paramtypes', [])], Story);
var HNTopStories = (function () {
    function HNTopStories(nav) {
        var _this = this;

        _classCallCheck(this, HNTopStories);

        this.nav = nav;
        this.stories = [];
        var APIUrl = 'https://hacker-news.firebaseio.com/v0';
        console.log('FIREBASE', window.Firebase);
        this.fb = new window.Firebase(APIUrl);
        this.fb.child('topstories').limitToFirst(20).once('value', function (snapshot) {
            var items = snapshot.val();
            console.log('Fetched', items.length, 'items');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var itemID = _step.value;

                    _this.fb.child("item").child(itemID).on('value', function (data) {
                        console.log('GOT ITEM', data.val());
                        _this.stories.push(data.val());
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        //doStuffEnd
    }

    _createClass(HNTopStories, [{
        key: "openStory",
        value: function openStory(story) {
            console.log('Opening story', story);
            this.nav.push(_pagesSingle.HNSinglePost, story);
        }
    }]);

    return HNTopStories;
})();
HNTopStories = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: './pages/top.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object])], HNTopStories);
var IonicApp = function IonicApp() {
    _classCallCheck(this, IonicApp);

    this.rootView = HNTopStories;
};
IonicApp = __decorate([(0, _ionicIonic.App)({
    template: '<ion-nav [root]="rootView"></ion-nav>'
}), __metadata('design:paramtypes', [])], IonicApp);
var _a;