var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var DialogsPage = (function () {
    function DialogsPage() {
    }
    DialogsPage.prototype.doAlert = function () {
        ionic_1.Dialogs.alert('Hello');
    };
    DialogsPage.prototype.doConfirm = function () {
        ionic_1.Dialogs.confirm('Do you want to click that?').then(function (resp) {
            console.log(resp);
        });
    };
    DialogsPage.prototype.doPrompt = function () {
        ionic_1.Dialogs.prompt('What is your fav ice cream?').then(function (resp) {
            console.log(resp);
        });
    };
    DialogsPage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Dialogs</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Dialogs</h2>\n    <button primary outline (click)=\"doAlert()\">Do Alert</button>\n    <button primary outline (click)=\"doConfirm()\">Do Confirm</button>\n    <button primary outline (click)=\"doPrompt()\">Do Prompt</button>\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DialogsPage);
    return DialogsPage;
})();
exports.DialogsPage = DialogsPage;