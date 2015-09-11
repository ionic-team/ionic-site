System.register("pages/aside", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicApp, IonicView, SinkPage, __decorate, __metadata, AsidePage;

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

            AsidePage = (function (_SinkPage) {
                _inherits(AsidePage, _SinkPage);

                function AsidePage(app) {
                    _classCallCheck(this, AsidePage);

                    _get(Object.getPrototypeOf(AsidePage.prototype), "constructor", this).call(this, app);
                }

                _createClass(AsidePage, [{
                    key: "openMenu",
                    value: function openMenu() {}
                }]);

                return AsidePage;
            })(SinkPage);

            _export("AsidePage", AsidePage);

            _export("AsidePage", AsidePage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Aside</ion-title></ion-navbar>\n\n  <ion-content class=\"padding\">\n    <h2>Aside</h2>\n    <p>\n      Asides, also known as side menus or \"hamburger\" menus (mmmmm), are menus that slide\n      or swipe in to show menus or information.\n    </p>\n    <p>\n      Try it! Just swipe from the left edge of the screen to the right to expose\n      the app menu, or tap the button to toggle the menu:\n    </p>\n    <p>\n      <div class=\"height: 50px; background-color: E05780; width: 5px; margin-left: -15px\"></div>\n    </p>\n    <p>\n      <button (click)=\"toggleMenu()\">Toggle</button>\n    </p>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], AsidePage));
        }
    };
});