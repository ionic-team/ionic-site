System.register("cards/cards", ["ionic/ionic"], function (_export) {
    "use strict";

    var Page, __decorate, __metadata, CardsPage;

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

            CardsPage = function CardsPage() {
                _classCallCheck(this, CardsPage);
            };

            _export("CardsPage", CardsPage);

            _export("CardsPage", CardsPage = __decorate([Page({
                templateUrl: 'cards/cards.html'
            }), __metadata('design:paramtypes', [])], CardsPage));
        }
    };
});