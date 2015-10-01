System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, NavController, IonicView, IonicConfig, IonicApp, NavParams, __decorate, __metadata, FirstPage, SecondPage, ThirdPage, DemoApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            NavController = _ionicIonic.NavController;
            IonicView = _ionicIonic.IonicView;
            IonicConfig = _ionicIonic.IonicConfig;
            IonicApp = _ionicIonic.IonicApp;
            NavParams = _ionicIonic.NavParams;
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
                function FirstPage(nav, app, config) {
                    _classCallCheck(this, FirstPage);

                    this.nav = nav;
                    this.title = 'First Page';
                    this.pushPage = SecondPage;
                    this.pushData = {
                        id: 420
                    };
                }

                _createClass(FirstPage, [{
                    key: "setViews",
                    value: function setViews() {
                        var items = [ThirdPage];
                        this.nav.setViews(items);
                    }
                }, {
                    key: "push",
                    value: function push() {
                        this.nav.push(SecondPage, { id: 8675309, myData: [1, 2, 3, 4] });
                    }
                }]);

                return FirstPage;
            })();

            FirstPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar primary>' + '<ion-title>{{title}}</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '<h1>{{title}}</h1>' + '<p><button id="from1To2" secondary (click)="push()">(Push) Go to Second Page</button></p>' + '<p><button secondary [nav-push]="pushPage" [nav-params]="pushData">(Nav-Push) Go to Second Page</button></p>' + '<p><button danger (click)="setViews()">(setViews) Go to Third Page</button></p>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof IonicApp !== 'undefined' && IonicApp || Object, typeof IonicConfig !== 'undefined' && IonicConfig || Object])], FirstPage);

            SecondPage = (function () {
                function SecondPage(nav, params) {
                    _classCallCheck(this, SecondPage);

                    this.nav = nav;
                    this.params = params;
                    console.log('Second page params:', params);
                }

                _createClass(SecondPage, [{
                    key: "setViews",
                    value: function setViews() {
                        var items = [FirstPage, ThirdPage];
                        this.nav.setViews(items);
                    }
                }, {
                    key: "pop",
                    value: function pop() {
                        this.nav.pop();
                    }
                }, {
                    key: "push",
                    value: function push() {
                        this.nav.push(ThirdPage);
                    }
                }]);

                return SecondPage;
            })();

            SecondPage = __decorate([IonicView({
                template: "\n    <ion-navbar secondary *navbar>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <h1>Second page</h1>\n      <p><button (click)=\"pop()\">(Pop) Go back to First Page</button></p>\n      <p><button id=\"from2To1\" nav-pop>(NavPop) Go back to First Page</button></p>\n      <p><button danger id=\"from2To3\" (click)=\"push()\">(Push) Go to Third Page</button></p>\n      <p><button danger (click)=\"setViews()\">(setViews) Go to Third Page</button></p>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof NavParams !== 'undefined' && NavParams || Object])], SecondPage);

            ThirdPage = (function () {
                function ThirdPage(nav) {
                    _classCallCheck(this, ThirdPage);

                    this.nav = nav;
                }

                _createClass(ThirdPage, [{
                    key: "pop",
                    value: function pop() {
                        this.nav.pop();
                    }
                }]);

                return ThirdPage;
            })();

            ThirdPage = __decorate([IonicView({
                template: "\n    <ion-navbar danger *navbar>\n      <ion-title>Third Page Header</ion-title>\n    </ion-navbar>\n    <ion-content padding>\n      <p>\n        <button secondary id=\"from3To2\" (click)=\"pop()\">(Pop) Go back to Second Page</button>\n      </p>\n    </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], ThirdPage);

            DemoApp = function DemoApp() {
                _classCallCheck(this, DemoApp);

                this.root = FirstPage;
            };

            DemoApp = __decorate([App({
                template: '<ion-nav [root]="root"></ion-nav>'
            }), __metadata('design:paramtypes', [])], DemoApp);
        }
    };
});