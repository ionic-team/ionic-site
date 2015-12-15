"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

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
var FirstPage = (function () {
    function FirstPage(app, actionSheet) {
        _classCallCheck(this, FirstPage);

        this.app = app;
        this.actionSheet = actionSheet;
    }

    _createClass(FirstPage, [{
        key: "showMoreMenu",
        value: function showMoreMenu() {
            var _this = this;

            this.actionSheet.open({
                buttons: [{ icon: 'ion-android-share-alt', text: 'Share' }, { icon: 'ion-arrow-move', text: 'Move' }],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function cancel() {
                    console.log('Canceled');
                },
                destructiveButtonClicked: function destructiveButtonClicked() {
                    console.log('Destructive clicked');
                },
                buttonClicked: function buttonClicked(index) {
                    console.log('Button clicked', index);
                    if (index == 1) {
                        return false;
                    }
                    return true;
                }
            }).then(function (actionSheetRef) {
                _this.actionSheetRef = actionSheetRef;
            });
        }
    }]);

    return FirstPage;
})();
exports.FirstPage = FirstPage;
exports.FirstPage = FirstPage = __decorate([(0, _ionicIonic.IonicView)({
    template: '<ion-navbar *navbar primary>' + '<ion-title>Heading</ion-title>' + '<button menu-toggle="menu">' + '<icon menu></icon>' + '</button>' + '<ion-buttons end>' + '<button><ion-icon md="ion-android-search" ios="ion-ios-search-strong"></i></button>' + '<button (click)="showMoreMenu()"><i class="icon ion-android-more-vertical"></i></button>' + '</ion-buttons>' + '</ion-navbar>' + '<ion-content>' + "\n    <button md-ripple>Cleeek</button>\n    <ion-list>\n      <ion-item>\n        <h3>All Genres</h3>\n        <h4>Jan 17 2015</h4>\n      </ion-item>\n      <ion-item>\n        Alternative\n      </ion-item>\n      <ion-item>\n        Blues\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <ion-card>\n        <ion-card-header>\n          New Post\n        </ion-card-header>\n        <div class=\"card-content\">\n          Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </div>\n        <img src=\"http://ionic-io-assets.s3.amazonaws.com/images/p4.png\">\n        <ion-item>\n          Posted 5 days ago\n        </ion-item>\n      </ion-card>\n    </div>\n\n    " + '</ion-content>'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.ActionSheet !== 'undefined' && _ionicIonic.ActionSheet) === 'function' && _b || Object])], FirstPage);
var MyApp = function MyApp() {
    _classCallCheck(this, MyApp);
};
MyApp = __decorate([(0, _ionicIonic.App)({
    template: "<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700,500' rel='stylesheet' type='text/css'>\n    <ion-menu id=\"menu\" side=\"left\" [content]=\"content\">\n      <ion-toolbar primary><ion-title>Menu</ion-title></ion-toolbar>\n      <ion-list>\n        <ion-item>Your Profile</ion-item>\n        <ion-item>Playlists</ion-item>\n        <ion-item>Artists</ion-item>\n      </ion-list>\n    </ion-menu>\n    <ion-nav #content></ion-nav>",
    routes: [{
        path: '/first',
        component: FirstPage,
        root: true
    }]
}), __metadata('design:paramtypes', [])], MyApp);
var _a, _b;