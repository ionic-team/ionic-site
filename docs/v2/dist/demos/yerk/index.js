System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, IonicView, NavController, __decorate, __metadata, IonicApp, HomeTabPage, PeekTabPage, TabsPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
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

            IonicApp = function IonicApp() {
                _classCallCheck(this, IonicApp);

                this.root = TabsPage;
            };

            IonicApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], IonicApp);

            HomeTabPage = (function () {
                function HomeTabPage(nav) {
                    _classCallCheck(this, HomeTabPage);

                    this.nav = nav;
                }

                _createClass(HomeTabPage, [{
                    key: "push",
                    value: function push() {}
                }]);

                return HomeTabPage;
            })();

            HomeTabPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Home</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + 'home' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], HomeTabPage);

            PeekTabPage = (function () {
                function PeekTabPage(nav) {
                    _classCallCheck(this, PeekTabPage);

                    this.nav = nav;
                }

                _createClass(PeekTabPage, [{
                    key: "push",
                    value: function push() {}
                }]);

                return PeekTabPage;
            })();

            PeekTabPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Peek</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + 'peek' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], PeekTabPage);

            TabsPage = function TabsPage() {
                _classCallCheck(this, TabsPage);

                this.homeTab = HomeTabPage;
                this.peekTab = PeekTabPage;
            };

            TabsPage = __decorate([IonicView({
                templateUrl: 'tabs.html'
            }), __metadata('design:paramtypes', [])], TabsPage);
        }
    };
});