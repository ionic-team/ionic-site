var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var ionic_1 = require('ionic/ionic');
var helpers_1 = require('../../helpers');
var BasicPage = (function () {
    function BasicPage() {
        this.form = new common_1.ControlGroup({
            firstName: new common_1.Control("", common_1.Validators.required),
            lastName: new common_1.Control("", common_1.Validators.required)
        });
    }
    BasicPage.prototype.processForm = function (event) {
        // TODO: display input in a popup
        console.log(event);
    };
    BasicPage = __decorate([
        ionic_1.Page({
            templateUrl: 'labels/basic/template.html',
            providers: [common_1.FormBuilder],
            directives: [core_1.forwardRef(function () { return helpers_1.AndroidAttribute; })]
        }), 
        __metadata('design:paramtypes', [])
    ], BasicPage);
    return BasicPage;
})();
exports.BasicPage = BasicPage;