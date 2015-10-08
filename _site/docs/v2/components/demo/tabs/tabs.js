System.register("tabs/tabs", ["ionic/ionic"], function (_export) {
    "use strict";

    var NavController, NavParams, Page, ViewController, __decorate, __metadata, TabOneCtrl, TabsPage, _a, _b, _c, _d;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            Page = _ionicIonic.Page;
            ViewController = _ionicIonic.ViewController;
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

            TabOneCtrl = function TabOneCtrl(nav, view) {
                _classCallCheck(this, TabOneCtrl);

                this.nav = nav;
                this.view = view;
            };

            TabOneCtrl = __decorate([Page({
                template: 'Hello 1'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof ViewController !== 'undefined' && ViewController) === 'function' && _b || Object])], TabOneCtrl);

            TabsPage = function TabsPage(nav, params) {
                _classCallCheck(this, TabsPage);

                this.nav = nav;
            };

            _export("TabsPage", TabsPage);

            _export("TabsPage", TabsPage = __decorate([Page({
                templateUrl: 'tabs.html'
            }), __metadata('design:paramtypes', [typeof (_c = typeof NavController !== 'undefined' && NavController) === 'function' && _c || Object, typeof (_d = typeof NavParams !== 'undefined' && NavParams) === 'function' && _d || Object])], TabsPage));
        }
    };
});