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
var GeolocationPage = (function () {
    function GeolocationPage() {
    }
    GeolocationPage.prototype.doGetLocation = function () {
        var _this = this;
        console.log('Getting location');
        this.gettingLocation = true;
        ionic_2.Geolocation.getCurrentPosition().then(function (pos) {
            _this.gettingLocation = false;
            console.log('Got location', pos);
            _this.location = pos;
        }, function (err) {
            _this.gettingLocation = false;
            console.error('Unable to get location', err);
        });
    };
    GeolocationPage.prototype.doTrackLocation = function () {
        var _this = this;
        this.gettingTrackLocation = true;
        ionic_2.Geolocation.watchPosition().source.subscribe(function (pos) {
            _this.gettingTrackLocation = false;
            console.log('Got location', pos);
            _this.trackLocation = pos;
        }, function (err) {
            _this.gettingTrackLocation = false;
            console.error('Unable to get location', pos);
        });
    };
    GeolocationPage = __decorate([
        ionic_1.IonicView({
            template: "\n  <ion-navbar *navbar>\n    <button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Geolocation</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Geolocation</h2>\n    <button primary outline (click)=\"doGetLocation()\">Get Location</button>\n    <div>\n      <b *ngIf=\"gettingLocation\">Fetching location...</b>\n      <b *ngIf=\"location\">{{location.coords.latitude}}, {{location.coords.longitude}}</b>\n    </div>\n    <button primary outline (click)=\"doTrackLocation()\">Track Location</button>\n    <div>\n      <b *ngIf=\"gettingTrackLocation\">Fetching location...</b>\n      <b *ngIf=\"trackLocation\">{{trackLocation.coords.latitude}}, {{trackLocation.coords.longitude}}</b>\n    </div>\n  </ion-content>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], GeolocationPage);
    return GeolocationPage;
})();
exports.GeolocationPage = GeolocationPage;