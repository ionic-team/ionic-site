System.register("slides/slides", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, __decorate, __metadata, SlidesPage;

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

            SlidesPage = function SlidesPage() {
                _classCallCheck(this, SlidesPage);
            };

            _export("SlidesPage", SlidesPage);

            _export("SlidesPage", SlidesPage = __decorate([IonicView({
                templateUrl: 'slides/slides.html'
            }), __metadata('design:paramtypes', [])], SlidesPage));
        }
    };
});