System.register("pages/camera", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, Camera, __decorate, __metadata, CameraPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Camera = _ionicIonic.Camera;
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

            CameraPage = (function () {
                function CameraPage() {
                    _classCallCheck(this, CameraPage);
                }

                _createClass(CameraPage, [{
                    key: "getPicture",
                    value: function getPicture() {
                        Camera.getPicture({}).then(function (data) {
                            console.log('Data', data);
                        }, function (err) {
                            alert('Unable to take picture');
                        });
                    }
                }]);

                return CameraPage;
            })();

            _export("CameraPage", CameraPage);

            _export("CameraPage", CameraPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>Camera</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Camera</h2>\n    <button primary outline (click)=\"getPicture()\">Get Picture</button>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [])], CameraPage));
        }
    };
});