System.register("pages/dialogs", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, Dialogs, __decorate, __metadata, DialogsPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Dialogs = _ionicIonic.Dialogs;
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

            DialogsPage = (function () {
                function DialogsPage() {
                    _classCallCheck(this, DialogsPage);
                }

                _createClass(DialogsPage, [{
                    key: "doAlert",
                    value: function doAlert() {
                        Dialogs.alert('Hello');
                    }
                }, {
                    key: "doConfirm",
                    value: function doConfirm() {
                        Dialogs.confirm('Do you want to click that?').then(function (resp) {
                            console.log(resp);
                        });
                    }
                }, {
                    key: "doPrompt",
                    value: function doPrompt() {
                        Dialogs.prompt('What is your fav ice cream?').then(function (resp) {
                            console.log(resp);
                        });
                    }
                }]);

                return DialogsPage;
            })();

            _export("DialogsPage", DialogsPage);

            _export("DialogsPage", DialogsPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>Dialogs</ion-title>\n  </ion-navbar>\n  <ion-content class=\"padding\">\n    <h2>Dialogs</h2>\n    <button primary outline (click)=\"doAlert()\">Do Alert</button>\n    <button primary outline (click)=\"doConfirm()\">Do Confirm</button>\n    <button primary outline (click)=\"doPrompt()\">Do Prompt</button>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [])], DialogsPage));
        }
    };
});