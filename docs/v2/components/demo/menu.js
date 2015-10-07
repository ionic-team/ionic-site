System.register("menu", ["ionic/ionic", "index", "helpers"], function (_export) {
    "use strict";

    var IonicApp, IonicView, NavController, Events, MainPage, helpers, __decorate, __metadata, PageOne, PageTwo, PageThree, MenuPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
            Events = _ionicIonic.Events;
        }, function (_index) {
            MainPage = _index.MainPage;
        }, function (_helpers) {
            helpers = _helpers;
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

            PageOne = function PageOne(nav, events) {
                var _this = this;

                _classCallCheck(this, PageOne);

                this.nav = nav;
                this.events = events;
                window.onmessage = function (e) {
                    zone.run(function () {
                        if (e.data) {
                            var data = JSON.parse(e.data);
                            var componentTitle = helpers.toTitleCase(data.hash.replace('-', ' '));
                            console.log('Switching section to', componentTitle);
                            _this.nav.setRoot(MainPage, { location: componentTitle });
                            events.publish('page:locationChange', { componentName: componentTitle });
                        }
                    });
                };
            };

            PageOne = __decorate([IonicView({
                templateUrl: 'menu-home.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof Events !== 'undefined' && Events || Object])], PageOne);

            PageTwo = function PageTwo() {
                _classCallCheck(this, PageTwo);
            };

            PageTwo = __decorate([IonicView({
                templateUrl: 'menu-friends.html'
            }), __metadata('design:paramtypes', [])], PageTwo);

            PageThree = function PageThree() {
                _classCallCheck(this, PageThree);
            };

            PageThree = __decorate([IonicView({
                templateUrl: 'menu-events.html'
            }), __metadata('design:paramtypes', [])], PageThree);

            MenuPage = (function () {
                function MenuPage(app, events, nav) {
                    _classCallCheck(this, MenuPage);

                    this.nav = nav;
                    this.app = app;
                    this.rootView = PageOne;
                    this.pages = [{ title: 'Home', component: PageOne }, { title: 'Friends', component: PageTwo }, { title: 'Events', component: PageThree }];
                }

                _createClass(MenuPage, [{
                    key: "onViewWillUnload",
                    value: function onViewWillUnload() {}
                }, {
                    key: "openPage",
                    value: function openPage(menu, page) {
                        // close the menu when clicking a link from the menu
                        menu.close();
                        // Reset the content nav to have just this page
                        // we wouldn't want the back button to show in this scenario
                        // let nav = this.app.getComponent('nav');
                        this.nav.setRoot(page.component);
                    }
                }]);

                return MenuPage;
            })();

            _export("MenuPage", MenuPage);

            _export("MenuPage", MenuPage = __decorate([IonicView({
                templateUrl: 'menu.html'
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof Events !== 'undefined' && Events || Object, typeof NavController !== 'undefined' && NavController || Object])], MenuPage));
        }
    };
});