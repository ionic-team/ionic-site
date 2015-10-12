"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FormsPage = (function () {
    function FormsPage() {
        _classCallCheck(this, FormsPage);

        this.form = new _angular2Angular2.ControlGroup({
            firstName: new _angular2Angular2.Control("", _angular2Angular2.Validators.required),
            lastName: new _angular2Angular2.Control("", _angular2Angular2.Validators.required)
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
exports.FormsPage = FormsPage;
exports.FormsPage = FormsPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/forms.html',
    bindings: [_angular2Angular2.FormBuilder]
}), __metadata('design:paramtypes', [])], FormsPage);
var FixedInlinePage = function FixedInlinePage() {
    _classCallCheck(this, FixedInlinePage);
};
exports.FixedInlinePage = FixedInlinePage;
exports.FixedInlinePage = FixedInlinePage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/fixed-inline.html'
}), __metadata('design:paramtypes', [])], FixedInlinePage);
var FloatingPage = function FloatingPage() {
    _classCallCheck(this, FloatingPage);
};
exports.FloatingPage = FloatingPage;
exports.FloatingPage = FloatingPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/floating.html'
}), __metadata('design:paramtypes', [])], FloatingPage);
var InlinePage = function InlinePage() {
    _classCallCheck(this, InlinePage);
};
exports.InlinePage = InlinePage;
exports.InlinePage = InlinePage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/inline.html'
}), __metadata('design:paramtypes', [])], InlinePage);
var InsetPage = function InsetPage() {
    _classCallCheck(this, InsetPage);
};
exports.InsetPage = InsetPage;
exports.InsetPage = InsetPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/inset.html'
}), __metadata('design:paramtypes', [])], InsetPage);
var PlaceholderPage = function PlaceholderPage() {
    _classCallCheck(this, PlaceholderPage);
};
exports.PlaceholderPage = PlaceholderPage;
exports.PlaceholderPage = PlaceholderPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/placeholder.html'
}), __metadata('design:paramtypes', [])], PlaceholderPage);
var StackedPage = function StackedPage() {
    _classCallCheck(this, StackedPage);
};
exports.StackedPage = StackedPage;
exports.StackedPage = StackedPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'forms/stacked.html'
}), __metadata('design:paramtypes', [])], StackedPage);