System.register("modal", ["ionic/ionic", "helpers"], function (_export) {
    "use strict";

    var Modal, NavController, IonicView, Events, helpers, __decorate, __metadata, ModalFirstPage, DemoModal, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            Modal = _ionicIonic.Modal;
            NavController = _ionicIonic.NavController;
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

            ModalFirstPage = (function () {
                function ModalFirstPage(nav, modal, events) {
                    var _this = this;

                    _classCallCheck(this, ModalFirstPage);

                    this.nav = nav;
                    this.modal = modal;
                    window.onmessage = function (e) {
                        zone.run(function () {
                            if (e.data) {
                                var data = JSON.parse(e.data);
                                var componentTitle = helpers.toTitleCase(data.hash.replace('-', ' '));
                                events.publish('page:locationChange', { componentName: componentTitle });
                                _this.closeModal();
                            }
                        });
                    };
                }

                _createClass(ModalFirstPage, [{
                    key: "closeModal",
                    value: function closeModal() {
                        var modal = this.modal.get();
                        if (modal) {
                            modal.close();
                        }
                    }
                }]);

                return ModalFirstPage;
            })();

            ModalFirstPage = __decorate([IonicView({
                templateUrl: 'modal.html'
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof Modal !== 'undefined' && Modal) === 'function' && _b || Object, typeof (_c = typeof Events !== 'undefined' && Events) === 'function' && _c || Object])], ModalFirstPage);

            DemoModal = function DemoModal() {
                _classCallCheck(this, DemoModal);

                this.rootView = ModalFirstPage;
            };

            _export("DemoModal", DemoModal);

            _export("DemoModal", DemoModal = __decorate([IonicView({
                template: '<ion-nav [root]="rootView"></ion-nav>'
            }), __metadata('design:paramtypes', [])], DemoModal));
        }
    };
});