System.register("buttons/buttons", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, __decorate, __metadata, ButtonsPage, BlockButtonsPage, FullButtonsPage, OutlineButtonsPage, RoundButtonsPage, FabPage, ButtonSizesPage, IconButtonsPage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
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

            ButtonsPage = function ButtonsPage() {
                _classCallCheck(this, ButtonsPage);
            };

            _export("ButtonsPage", ButtonsPage);

            _export("ButtonsPage", ButtonsPage = __decorate([IonicView({
                templateUrl: 'buttons/buttons.html'
            }), __metadata('design:paramtypes', [])], ButtonsPage));

            BlockButtonsPage = function BlockButtonsPage() {
                _classCallCheck(this, BlockButtonsPage);
            };

            _export("BlockButtonsPage", BlockButtonsPage);

            _export("BlockButtonsPage", BlockButtonsPage = __decorate([IonicView({
                templateUrl: 'buttons/block.html'
            }), __metadata('design:paramtypes', [])], BlockButtonsPage));

            FullButtonsPage = function FullButtonsPage() {
                _classCallCheck(this, FullButtonsPage);
            };

            _export("FullButtonsPage", FullButtonsPage);

            _export("FullButtonsPage", FullButtonsPage = __decorate([IonicView({
                templateUrl: 'buttons/full.html'
            }), __metadata('design:paramtypes', [])], FullButtonsPage));

            OutlineButtonsPage = function OutlineButtonsPage() {
                _classCallCheck(this, OutlineButtonsPage);
            };

            _export("OutlineButtonsPage", OutlineButtonsPage);

            _export("OutlineButtonsPage", OutlineButtonsPage = __decorate([IonicView({
                templateUrl: 'buttons/outline.html'
            }), __metadata('design:paramtypes', [])], OutlineButtonsPage));

            RoundButtonsPage = function RoundButtonsPage() {
                _classCallCheck(this, RoundButtonsPage);
            };

            _export("RoundButtonsPage", RoundButtonsPage);

            _export("RoundButtonsPage", RoundButtonsPage = __decorate([IonicView({
                templateUrl: 'buttons/round.html'
            }), __metadata('design:paramtypes', [])], RoundButtonsPage));

            FabPage = function FabPage() {
                _classCallCheck(this, FabPage);
            };

            _export("FabPage", FabPage);

            _export("FabPage", FabPage = __decorate([IonicView({
                templateUrl: 'buttons/fab.html'
            }), __metadata('design:paramtypes', [])], FabPage));

            ButtonSizesPage = function ButtonSizesPage() {
                _classCallCheck(this, ButtonSizesPage);
            };

            _export("ButtonSizesPage", ButtonSizesPage);

            _export("ButtonSizesPage", ButtonSizesPage = __decorate([IonicView({
                templateUrl: 'buttons/sizes.html'
            }), __metadata('design:paramtypes', [])], ButtonSizesPage));

            IconButtonsPage = function IconButtonsPage() {
                _classCallCheck(this, IconButtonsPage);
            };

            _export("IconButtonsPage", IconButtonsPage);

            _export("IconButtonsPage", IconButtonsPage = __decorate([IonicView({
                templateUrl: 'buttons/icons.html'
            }), __metadata('design:paramtypes', [])], IconButtonsPage));
        }
    };
});