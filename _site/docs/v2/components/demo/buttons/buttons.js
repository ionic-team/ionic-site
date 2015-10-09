System.register("buttons/buttons", ["ionic/ionic"], function (_export) {
    "use strict";

    var Page, __decorate, __metadata, ButtonsPage, BlockButtonsPage, ClearButtonsPage, FullButtonsPage, OutlineButtonsPage, RoundButtonsPage, FabPage, ButtonSizesPage, IconButtonsPage, ButtonsInComponentsPage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            Page = _ionicIonic.Page;
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

            _export("ButtonsPage", ButtonsPage = __decorate([Page({
                templateUrl: 'buttons/buttons.html'
            }), __metadata('design:paramtypes', [])], ButtonsPage));

            BlockButtonsPage = function BlockButtonsPage() {
                _classCallCheck(this, BlockButtonsPage);
            };

            _export("BlockButtonsPage", BlockButtonsPage);

            _export("BlockButtonsPage", BlockButtonsPage = __decorate([Page({
                templateUrl: 'buttons/block.html'
            }), __metadata('design:paramtypes', [])], BlockButtonsPage));

            ClearButtonsPage = function ClearButtonsPage() {
                _classCallCheck(this, ClearButtonsPage);
            };

            _export("ClearButtonsPage", ClearButtonsPage);

            _export("ClearButtonsPage", ClearButtonsPage = __decorate([Page({
                templateUrl: 'buttons/clear.html'
            }), __metadata('design:paramtypes', [])], ClearButtonsPage));

            FullButtonsPage = function FullButtonsPage() {
                _classCallCheck(this, FullButtonsPage);
            };

            _export("FullButtonsPage", FullButtonsPage);

            _export("FullButtonsPage", FullButtonsPage = __decorate([Page({
                templateUrl: 'buttons/full.html'
            }), __metadata('design:paramtypes', [])], FullButtonsPage));

            OutlineButtonsPage = function OutlineButtonsPage() {
                _classCallCheck(this, OutlineButtonsPage);
            };

            _export("OutlineButtonsPage", OutlineButtonsPage);

            _export("OutlineButtonsPage", OutlineButtonsPage = __decorate([Page({
                templateUrl: 'buttons/outline.html'
            }), __metadata('design:paramtypes', [])], OutlineButtonsPage));

            RoundButtonsPage = function RoundButtonsPage() {
                _classCallCheck(this, RoundButtonsPage);
            };

            _export("RoundButtonsPage", RoundButtonsPage);

            _export("RoundButtonsPage", RoundButtonsPage = __decorate([Page({
                templateUrl: 'buttons/round.html'
            }), __metadata('design:paramtypes', [])], RoundButtonsPage));

            FabPage = function FabPage() {
                _classCallCheck(this, FabPage);
            };

            _export("FabPage", FabPage);

            _export("FabPage", FabPage = __decorate([Page({
                templateUrl: 'buttons/fab.html'
            }), __metadata('design:paramtypes', [])], FabPage));

            ButtonSizesPage = function ButtonSizesPage() {
                _classCallCheck(this, ButtonSizesPage);
            };

            _export("ButtonSizesPage", ButtonSizesPage);

            _export("ButtonSizesPage", ButtonSizesPage = __decorate([Page({
                templateUrl: 'buttons/sizes.html'
            }), __metadata('design:paramtypes', [])], ButtonSizesPage));

            IconButtonsPage = function IconButtonsPage() {
                _classCallCheck(this, IconButtonsPage);
            };

            _export("IconButtonsPage", IconButtonsPage);

            _export("IconButtonsPage", IconButtonsPage = __decorate([Page({
                templateUrl: 'buttons/icons.html'
            }), __metadata('design:paramtypes', [])], IconButtonsPage));

            ButtonsInComponentsPage = function ButtonsInComponentsPage() {
                _classCallCheck(this, ButtonsInComponentsPage);
            };

            _export("ButtonsInComponentsPage", ButtonsInComponentsPage);

            _export("ButtonsInComponentsPage", ButtonsInComponentsPage = __decorate([Page({
                templateUrl: 'buttons/components.html'
            }), __metadata('design:paramtypes', [])], ButtonsInComponentsPage));
        }
    };
});