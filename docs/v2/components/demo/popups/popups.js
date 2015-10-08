System.register("popups/popups", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, Popup, __decorate, __metadata, PopupsPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Popup = _ionicIonic.Popup;
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

            PopupsPage = (function () {
                function PopupsPage(popup) {
                    _classCallCheck(this, PopupsPage);

                    this.popup = popup;
                }

                _createClass(PopupsPage, [{
                    key: "showPopup",
                    value: function showPopup() {
                        this.popup.alert("Popup Title").then(function () {});
                    }
                }]);

                return PopupsPage;
            })();

            _export("PopupsPage", PopupsPage);

            _export("PopupsPage", PopupsPage = __decorate([IonicView({
                templateUrl: 'popups/popups.html'
            }), __metadata('design:paramtypes', [typeof Popup !== 'undefined' && Popup || Object])], PopupsPage));
        }
    };
});