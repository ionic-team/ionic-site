System.register("navigation/navigation", ["ionic/ionic"], function (_export) {
    "use strict";

    var NavController, NavParams, Page, Events, __decorate, __metadata, NavigationDetailsPage, NavigationPage, _a, _b, _c, _d;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            Page = _ionicIonic.Page;
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

            NavigationDetailsPage = function NavigationDetailsPage(nav, params, events) {
                _classCallCheck(this, NavigationDetailsPage);

                this.nav = nav;
                this.selection = { title: params.data.name };
                var navData = {
                    'Angular': "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
                    'CSS3': "The latest version of cascading stylesheets - the styling language of the web!",
                    'HTML5': "The latest version of the web's markup language.",
                    'Sass': "Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension."
                };
                var navIcons = {
                    'Angular': 'ion-social-angular',
                    'CSS3': 'ion-social-css3',
                    'HTML5': 'ion-social-html5',
                    'Sass': 'ion-social-sass'
                };
                this.selection['content'] = navData[this.selection.title];
                this.selection['icon'] = navIcons[this.selection.title];
            };

            NavigationDetailsPage = __decorate([Page({
                templateUrl: 'navigation/navigation-details.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof NavParams !== 'undefined' && NavParams) === 'function' && _b || Object, typeof (_c = typeof Events !== 'undefined' && Events) === 'function' && _c || Object])], NavigationDetailsPage);

            NavigationPage = (function () {
                function NavigationPage(nav) {
                    _classCallCheck(this, NavigationPage);

                    this.nav = nav;
                }

                _createClass(NavigationPage, [{
                    key: "openNavDetailsPage",
                    value: function openNavDetailsPage(item) {
                        this.nav.push(NavigationDetailsPage, { name: item });
                    }
                }]);

                return NavigationPage;
            })();

            _export("NavigationPage", NavigationPage);

            _export("NavigationPage", NavigationPage = __decorate([Page({
                templateUrl: 'navigation/navigation.html'
            }), __metadata('design:paramtypes', [typeof (_d = typeof NavController !== 'undefined' && NavController) === 'function' && _d || Object])], NavigationPage));
        }
    };
});