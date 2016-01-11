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
var ionic_2 = require('ionic/ionic');
var CameraPage = (function () {
    function CameraPage() {
    }
    CameraPage.prototype.getPicture = function () {
        ionic_2.Camera.getPicture({}).then(function (data) {
            console.log('Data', data);
        }, function (err) {
            alert('Unable to take picture');
        });
    };
    CameraPage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Camera</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Camera</h2>\n    <button primary outline (click)=\"getPicture()\">Get Picture</button>\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CameraPage);
    return CameraPage;
})();
exports.CameraPage = CameraPage;