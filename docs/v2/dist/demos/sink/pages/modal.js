System.register("pages/modal", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicApp, IonicView, Modal, SinkPage, __decorate, __metadata, ModalPage, MyModal;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
            Modal = _ionicIonic.Modal;
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

            ModalPage = (function (_SinkPage) {
                _inherits(ModalPage, _SinkPage);

                function ModalPage(app, modal) {
                    _classCallCheck(this, ModalPage);

                    _get(Object.getPrototypeOf(ModalPage.prototype), "constructor", this).call(this, app);
                    this.modal = modal;
                }

                _createClass(ModalPage, [{
                    key: "openModal",
                    value: function openModal() {
                        console.log('Opening modal');
                        this.modal.open(MyModal);
                    }
                }]);

                return ModalPage;
            })(SinkPage);

            _export("ModalPage", ModalPage);

            _export("ModalPage", ModalPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Modal</ion-title></ion-navbar>\n\n  <ion-content class=\"padding\">\n    <h2>Modal</h2>\n    <p>\n      Modals are entire views that slide in off screen.\n    </p>\n    <p>\n      Modals make it easy to open a new \"context\" for the user, without taking them\n      out of the current context. For example, clicking the \"compose\" button\n      on a mail app might slide up a Compose modal.\n    </p>\n    <button (click)=\"openModal()\">Open Modal</button>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object, typeof Modal !== 'undefined' && Modal || Object])], ModalPage));

            MyModal = function MyModal() {
                _classCallCheck(this, MyModal);
            };

            _export("MyModal", MyModal);

            _export("MyModal", MyModal = __decorate([IonicView({
                template: '<ion-content padding><button (click)="close()" primary>Close Modal</button></ion-content>'
            }), __metadata('design:paramtypes', [])], MyModal));
        }
    };
});