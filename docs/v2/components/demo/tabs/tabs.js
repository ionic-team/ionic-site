System.register("tabs/tabs", ["ionic/ionic"], function (_export) {
    "use strict";

    var NavController, NavParams, IonicView, ViewController, __decorate, __metadata, TabOneCtrl, TabsPage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            IonicView = _ionicIonic.IonicView;
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

            TabOneCtrl = __decorate([IonicView({
                template: 'Hello 1'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof ViewController !== 'undefined' && ViewController || Object])], TabOneCtrl);

            TabsPage = function TabsPage(nav, params) {
                _classCallCheck(this, TabsPage);

                this.nav = nav;
            };

            _export("TabsPage", TabsPage);

            _export("TabsPage", TabsPage = __decorate([IonicView({
                templateUrl: 'tabs.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof NavParams !== 'undefined' && NavParams || Object])], TabsPage));
        }
    };
});