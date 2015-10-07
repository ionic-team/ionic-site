System.register("navigation", ["ionic/ionic", "helpers"], function (_export) {
    "use strict";

    var NavController, NavParams, IonicView, Events, helpers, __decorate, __metadata, NavigationDetailsPage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            NavController = _ionicIonic.NavController;
            NavParams = _ionicIonic.NavParams;
            IonicView = _ionicIonic.IonicView;
            Events = _ionicIonic.Events;
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

            NavigationDetailsPage = function NavigationDetailsPage(nav, params, events) {
                var _this = this;

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
                window.onmessage = function (e) {
                    zone.run(function () {
                        if (e.data) {
                            var data = JSON.parse(e.data);
                            var componentTitle = helpers.toTitleCase(data.hash.replace('-', ' '));
                            events.publish('page:locationChange', { componentName: componentTitle });
                            _this.nav.pop();
                        }
                    });
                };
            };

            _export("NavigationDetailsPage", NavigationDetailsPage);

            _export("NavigationDetailsPage", NavigationDetailsPage = __decorate([IonicView({
                templateUrl: 'navigation.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof NavParams !== 'undefined' && NavParams || Object, typeof Events !== 'undefined' && Events || Object])], NavigationDetailsPage));
        }
    };
});