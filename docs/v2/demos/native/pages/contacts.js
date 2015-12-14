"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
                return d && d(target, key), void 0;
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
var ContactsPage = function ContactsPage() {
    _classCallCheck(this, ContactsPage);
};
exports.ContactsPage = ContactsPage;
exports.ContactsPage = ContactsPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar>\n    <button menu-toggle>\n      <icon menu></icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Contacts</h2>\n    <div>\n    </div>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], ContactsPage);