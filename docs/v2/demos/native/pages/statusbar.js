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
var StatusBarPage = (function () {
    function StatusBarPage() {
        this.styles = [
            ionic_2.StatusBar.DEFAULT,
            ionic_2.StatusBar.LIGHT_CONTENT,
            ionic_2.StatusBar.BLACK_TRANSLUCENT,
            ionic_2.StatusBar.BLACK_OPAQUE
        ];
        this.currentStyle = 0;
        this.colorHex = '#fff';
    }
    StatusBarPage.prototype.hide = function () { ionic_2.StatusBar.hide(); };
    StatusBarPage.prototype.show = function () { ionic_2.StatusBar.show(); };
    StatusBarPage.prototype.toggleOverlays = function () {
        this.doesOverlay = !!!this.doesOverlay;
        ionic_2.StatusBar.setOverlays(this.doesOverlay);
    };
    StatusBarPage.prototype.setStyle = function () {
        ionic_2.StatusBar.setStyle(this.styles[++this.currentStyle]);
    };
    StatusBarPage.prototype.setColor = function () {
        console.log('Setting color', this.colorHex);
        ionic_2.StatusBar.setHexColor(this.colorHex);
    };
    StatusBarPage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>StatusBar</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>StatusBar</h2>\n    <div>\n      <button primary outline (click)=\"hide()\">Hide</button>\n      <button primary outline (click)=\"show()\">Show</button>\n      <button primary outline (click)=\"toggleOverlays()\">Toggle Overlays</button>\n      <button primary outline (click)=\"setStyle()\">Cycle Style</button>\n    </div>\n    <div>\n      <div>\n        <input [(ngModel)]=\"colorHex\">\n      </div>\n      <button primary outline (click)=\"setColor()\">Set Color</button>\n    </div>\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], StatusBarPage);
    return StatusBarPage;
})();
exports.StatusBarPage = StatusBarPage;