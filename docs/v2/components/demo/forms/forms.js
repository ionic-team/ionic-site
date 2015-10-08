System.register("forms/forms", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var FormBuilder, Validators, Control, ControlGroup, Page, __decorate, __metadata, FormsPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            FormBuilder = _angular2Angular2.FormBuilder;
            Validators = _angular2Angular2.Validators;
            Control = _angular2Angular2.Control;
            ControlGroup = _angular2Angular2.ControlGroup;
        }, function (_ionicIonic) {
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

            FormsPage = (function () {
                function FormsPage() {
                    _classCallCheck(this, FormsPage);

                    this.form = new ControlGroup({
                        firstName: new Control("", Validators.required),
                        lastName: new Control("", Validators.required)
                    });
                }

                _createClass(FormsPage, [{
                    key: "processForm",
                    value: function processForm(event) {
                        // TODO: display input in a popup
                        console.log(event);
                    }
                }]);

                return FormsPage;
            })();

            _export("FormsPage", FormsPage);

            _export("FormsPage", FormsPage = __decorate([Page({
                templateUrl: 'forms/forms.html',
                bindings: [FormBuilder]
            }), __metadata('design:paramtypes', [])], FormsPage));
        }
    };
});