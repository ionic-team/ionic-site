System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, ActionSheet, IonicApp, IonicView, __decorate, __metadata, FirstPage, MyApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            ActionSheet = _ionicIonic.ActionSheet;
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            FirstPage = (function () {
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

            _export("FirstPage", FirstPage);

            _export("FirstPage", FirstPage = __decorate([IonicView({
                template: '<ion-navbar *navbar primary>' + '<ion-title>Heading</ion-title>' + '<a menu-toggle="menu">' + '<icon menu></icon>' + '</a>' + '<ion-nav-items secondary>' + '<button><ion-icon md="ion-android-search" ios="ion-ios-search-strong"></i></button>' + '<button (click)="showMoreMenu()"><i class="icon ion-android-more-vertical"></i></button>' + '</ion-nav-items>' + '</ion-navbar>' + '<ion-content>' + "\n    <button md-ripple>Cleeek</button>\n    <ion-list>\n      <ion-item>\n        <h3>All Genres</h3>\n        <h4>Jan 17 2015</h4>\n      </ion-item>\n      <ion-item>\n        Alternative\n      </ion-item>\n      <ion-item>\n        Blues\n      </ion-item>\n    </ion-list>\n\n    <div class=\"padding\">\n      <ion-card>\n        <ion-card-header>\n          New Post\n        </ion-card-header>\n        <div class=\"card-content\">\n          Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </div>\n        <img src=\"http://ionic-io-assets.s3.amazonaws.com/images/p4.png\">\n        <ion-item>\n          Posted 5 days ago\n        </ion-item>\n      </ion-card>\n    </div>\n\n    " + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof ActionSheet !== 'undefined' && ActionSheet || Object])], FirstPage));

            MyApp = function MyApp() {
                _classCallCheck(this, MyApp);
            };

            MyApp = __decorate([App({
                template: "<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700,500' rel='stylesheet' type='text/css'>\n    <ion-menu id=\"menu\" side=\"left\" [content]=\"content\">\n      <ion-toolbar primary><ion-title>Menu</ion-title></ion-toolbar>\n      <ion-list>\n        <ion-item>Your Profile</ion-item>\n        <ion-item>Playlists</ion-item>\n        <ion-item>Artists</ion-item>\n      </ion-list>\n    </ion-menu>\n    <ion-nav #content></ion-nav>",
                routes: [{
                    path: '/first',
                    component: FirstPage,
                    root: true
                }]
            }), __metadata('design:paramtypes', [])], MyApp);
        }
    };
});