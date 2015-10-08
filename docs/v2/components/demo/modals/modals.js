System.register("modals/modals", ["ionic/ionic"], function (_export) {
    "use strict";

    var Animation, Modal, NavController, IonicView, Events, __decorate, __metadata, ModalsFirstPage, ModalsContentPage, ModalsPage, FadeIn, FadeOut;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            Animation = _ionicIonic.Animation;
            Modal = _ionicIonic.Modal;
            NavController = _ionicIonic.NavController;
            IonicView = _ionicIonic.IonicView;
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

            ModalsFirstPage = (function () {
                function ModalsFirstPage(nav, modal, events) {
                    _classCallCheck(this, ModalsFirstPage);

                    this.nav = nav;
                    this.modal = modal;
                }

                _createClass(ModalsFirstPage, [{
                    key: "openModal",
                    value: function openModal() {
                        this.modal.open(ModalsContentPage, {
                            handle: 'my-awesome-modal',
                            enterAnimation: 'my-fade-in',
                            leaveAnimation: 'my-fade-out'
                        });
                    }
                }]);

                return ModalsFirstPage;
            })();

            ModalsFirstPage = __decorate([IonicView({
                templateUrl: 'modals/modals.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object, typeof Modal !== 'undefined' && Modal || Object, typeof Events !== 'undefined' && Events || Object])], ModalsFirstPage);

            ModalsContentPage = (function () {
                function ModalsContentPage(modal, events) {
                    _classCallCheck(this, ModalsContentPage);

                    this.modal = modal;
                }

                _createClass(ModalsContentPage, [{
                    key: "closeModal",
                    value: function closeModal() {
                        var modal = this.modal.get();
                        if (modal) {
                            modal.close();
                        }
                    }
                }]);

                return ModalsContentPage;
            })();

            ModalsContentPage = __decorate([IonicView({
                templateUrl: 'modals/modals-content.html'
            }), __metadata('design:paramtypes', [typeof Modal !== 'undefined' && Modal || Object, typeof Events !== 'undefined' && Events || Object])], ModalsContentPage);

            ModalsPage = function ModalsPage() {
                _classCallCheck(this, ModalsPage);

                this.rootView = ModalsFirstPage;
            };

            _export("ModalsPage", ModalsPage);

            _export("ModalsPage", ModalsPage = __decorate([IonicView({
                template: '<ion-nav [root]="rootView"></ion-nav>'
            }), __metadata('design:paramtypes', [])], ModalsPage));

            FadeIn = (function (_Animation) {
                _inherits(FadeIn, _Animation);

                function FadeIn(element) {
                    _classCallCheck(this, FadeIn);

                    _get(Object.getPrototypeOf(FadeIn.prototype), "constructor", this).call(this, element);
                    this.easing('ease').duration(450).fadeIn();
                }

                return FadeIn;
            })(Animation);

            Animation.register('my-fade-in', FadeIn);

            FadeOut = (function (_Animation2) {
                _inherits(FadeOut, _Animation2);

                function FadeOut(element) {
                    _classCallCheck(this, FadeOut);

                    _get(Object.getPrototypeOf(FadeOut.prototype), "constructor", this).call(this, element);
                    this.easing('ease').duration(250).fadeOut();
                }

                return FadeOut;
            })(Animation);

            Animation.register('my-fade-out', FadeOut);
        }
    };
});