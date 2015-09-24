System.register("pages/pull-to-refresh", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicApp, IonicView, SinkPage, __decorate, __metadata, PullToRefreshPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
        }, function (_sinkPage) {
            SinkPage = _sinkPage.SinkPage;
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

            PullToRefreshPage = (function (_SinkPage) {
                _inherits(PullToRefreshPage, _SinkPage);

                function PullToRefreshPage(app) {
                    _classCallCheck(this, PullToRefreshPage);

                    _get(Object.getPrototypeOf(PullToRefreshPage.prototype), "constructor", this).call(this, app);
                    this.items = [];
                    for (var i = 90; i < 100; i++) {
                        this.items.push({
                            title: i
                        });
                    }
                    this.i = 90;
                }

                _createClass(PullToRefreshPage, [{
                    key: "doRefresh",
                    value: function doRefresh(refresher) {
                        console.log('DOREFRESH', refresher);
                        this.items.unshift({
                            title: --this.i
                        });
                        setTimeout(function () {
                            refresher.complete();
                        }, 1500);
                    }
                }, {
                    key: "doStarting",
                    value: function doStarting() {
                        console.log('DOSTARTING');
                    }
                }, {
                    key: "doPulling",
                    value: function doPulling(amt) {
                        console.log('DOPULLING', amt);
                    }
                }]);

                return PullToRefreshPage;
            })(SinkPage);

            _export("PullToRefreshPage", PullToRefreshPage);

            _export("PullToRefreshPage", PullToRefreshPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Pull to Refresh</ion-title></ion-navbar>\n\n  <ion-content>\n    <ion-refresher (starting)=\"doStarting()\" (refresh)=\"doRefresh($event, refresher)\" (pulling)=\"doPulling($event, amt)\">\n    </ion-refresher>\n    <ion-list inset>\n      <ion-item *ng-for=\"#item of items\">\n        {{item.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], PullToRefreshPage));
        }
    };
});