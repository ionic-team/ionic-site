System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, IonicApp, IonicView, __decorate, __metadata, Page1, Page2, E2EApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
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

            Page1 = function Page1() {
                _classCallCheck(this, Page1);
            };

            Page1 = __decorate([IonicView({ templateUrl: 'page1.html' }), __metadata('design:paramtypes', [])], Page1);

            Page2 = function Page2() {
                _classCallCheck(this, Page2);
            };

            Page2 = __decorate([IonicView({ templateUrl: 'page2.html' }), __metadata('design:paramtypes', [])], Page2);

            E2EApp = (function () {
                function E2EApp(app) {
                    _classCallCheck(this, E2EApp);

                    this.app = app;
                    this.rootView = Page1;
                    this.pages = [{ title: 'Page 1', component: Page1 }, { title: 'Page 2', component: Page2 }];
                }

                _createClass(E2EApp, [{
                    key: "openPage",
                    value: function openPage(aside, page) {
                        // close the menu when clicking a link from the aside
                        aside.close();
                        // Reset the content nav to have just this page
                        // we wouldn't want the back button to show in this scenario
                        var nav = this.app.getComponent('nav');
                        nav.setRoot(page.component);
                    }
                }]);

                return E2EApp;
            })();

            E2EApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], E2EApp);
        }
    };
});