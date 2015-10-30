"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

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
var DetailPage = function DetailPage(params) {
    _classCallCheck(this, DetailPage);

    this.post = params.post;
};
exports.DetailPage = DetailPage;
exports.DetailPage = DetailPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'detail.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _a || Object])], DetailPage);
var FeedPage = (function () {
    function FeedPage(nav) {
        _classCallCheck(this, FeedPage);

        this.nav = nav;
        this.filterForm = new _angular2Angular2.ControlGroup({
            filterControl: new _angular2Angular2.Control("")
        });
        this.posts = [{
            text: 'I tried to keep both arts alive, but the camera won. I found that while the camera does not express the soul, perhaps a photograph can!',
            image: 'http://ionic-io-assets.s3.amazonaws.com/images/p.jpg',
            day: 5
        }, {
            text: 'It is good to realize that if love and peace can prevail on earth, and if we can teach our children to honor nature\'s gifts, the joys and beauties of the outdoors will be here forever.',
            image: 'http://ionic-io-assets.s3.amazonaws.com/images/p1.png',
            day: 6
        }, {
            text: 'I see humanity now as one vast plant, needing for its highest fulfillment only love, the natural blessings of the great outdoors, and intelligent crossing and selection.',
            image: 'http://ionic-io-assets.s3.amazonaws.com/images/p2.png',
            day: 7
        }, {
            text: 'You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.',
            image: 'http://ionic-io-assets.s3.amazonaws.com/images/p3.png',
            day: 7
        }, {
            text: 'Keep close to Nature\'s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.',
            image: 'http://ionic-io-assets.s3.amazonaws.com/images/p4.png',
            day: 8
        }];
    }

    _createClass(FeedPage, [{
        key: "postClicked",
        value: function postClicked(event, post) {
            console.log('Post clicked');
            this.nav.push(DetailPage, {
                post: post
            });
            event.preventDefault();
        }
    }]);

    return FeedPage;
})();
exports.FeedPage = FeedPage;
exports.FeedPage = FeedPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'feed.html'
}), __metadata('design:paramtypes', [typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object])], FeedPage);
var IonicApp = (function () {
    function IonicApp(modal) {
        _classCallCheck(this, IonicApp);

        this.modal = modal;
        this.rootView = FeedPage;
    }

    _createClass(IonicApp, [{
        key: "openHeart",
        value: function openHeart() {
            console.log('openHeart');
            this.modal.open(HeartModal, {
                enterAnimation: 'my-fade-in',
                leaveAnimation: 'my-fade-out'
            });
        }
    }, {
        key: "openGear",
        value: function openGear() {
            console.log('openGear');
            this.modal.open(SettingsModal, {
                enterAnimation: 'my-fade-in',
                leaveAnimation: 'my-fade-out'
            });
        }
    }]);

    return IonicApp;
})();
IonicApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_c = typeof _ionicIonic.Modal !== 'undefined' && _ionicIonic.Modal) === 'function' && _c || Object])], IonicApp);
var SettingsModal = function SettingsModal() {
    _classCallCheck(this, SettingsModal);
};
exports.SettingsModal = SettingsModal;
exports.SettingsModal = SettingsModal = __decorate([(0, _ionicIonic.IonicView)({
    template: '<ion-view id="settings-modal"><ion-content padding><button (click)="close()">Close</button></ion-content></ion-view>'
}), __metadata('design:paramtypes', [])], SettingsModal);
var HeartModal = function HeartModal() {
    _classCallCheck(this, HeartModal);
};
exports.HeartModal = HeartModal;
exports.HeartModal = HeartModal = __decorate([(0, _ionicIonic.IonicView)({
    template: '<ion-view id="heart-modal"><button icon (click)="close()"><i class="icon ion-close"></i></button><h2>20</h2><p>You\'re pretty awesome</p></ion-view>'
}), __metadata('design:paramtypes', [])], HeartModal);

var FadeIn = (function (_Animation) {
    _inherits(FadeIn, _Animation);

    function FadeIn(element) {
        _classCallCheck(this, FadeIn);

        _get(Object.getPrototypeOf(FadeIn.prototype), "constructor", this).call(this, element);
        this.easing('ease').duration(250).fadeIn();
    }

    return FadeIn;
})(_ionicIonic.Animation);

_ionicIonic.Animation.register('my-fade-in', FadeIn);

var FadeOut = (function (_Animation2) {
    _inherits(FadeOut, _Animation2);

    function FadeOut(element) {
        _classCallCheck(this, FadeOut);

        _get(Object.getPrototypeOf(FadeOut.prototype), "constructor", this).call(this, element);
        this.easing('ease').duration(250).fadeOut();
    }

    return FadeOut;
})(_ionicIonic.Animation);

_ionicIonic.Animation.register('my-fade-out', FadeOut);
var _a, _b, _c;