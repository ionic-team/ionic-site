System.register("menus/menus", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicApp, Page, NavController, Events, __decorate, __metadata, PageOne, PageTwo, PageThree, MenusPage, _a, _b, _c, _d, _e;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            Page = _ionicIonic.Page;
            NavController = _ionicIonic.NavController;
            Events = _ionicIonic.Events;
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
                _classCallCheck(this, PageOne);

                this.nav = nav;
                this.events = events;
            };

            PageOne = __decorate([Page({
                templateUrl: 'menus/menu-home.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof Events !== 'undefined' && Events) === 'function' && _b || Object])], PageOne);

            PageTwo = function PageTwo() {
                _classCallCheck(this, PageTwo);
            };

            PageTwo = __decorate([Page({
                templateUrl: 'menus/menu-friends.html'
            }), __metadata('design:paramtypes', [])], PageTwo);

            PageThree = function PageThree() {
                _classCallCheck(this, PageThree);
            };

            PageThree = __decorate([Page({
                templateUrl: 'menus/menu-events.html'
            }), __metadata('design:paramtypes', [])], PageThree);

            MenusPage = (function () {
                function MenusPage(app, events, nav) {
                    _classCallCheck(this, MenusPage);

                    this.nav = nav;
                    this.app = app;
                    this.rootView = PageOne;
                    this.pages = [{ title: 'Home', component: PageOne }, { title: 'Friends', component: PageTwo }, { title: 'Events', component: PageThree }];
                }

                _createClass(MenusPage, [{
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

                return MenusPage;
            })();

            _export("MenusPage", MenusPage);

            _export("MenusPage", MenusPage = __decorate([Page({
                templateUrl: 'menus/menus.html'
            }), __metadata('design:paramtypes', [typeof (_c = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _c || Object, typeof (_d = typeof Events !== 'undefined' && Events) === 'function' && _d || Object, typeof (_e = typeof NavController !== 'undefined' && NavController) === 'function' && _e || Object])], MenusPage));
        }
    };
});