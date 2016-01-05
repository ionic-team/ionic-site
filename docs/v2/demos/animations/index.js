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
var IonicApp = (function () {
    function IonicApp() {
        this.animation = new ionic_1.Animation();
        this.animation
            .duration(2000);
        var ionitronSpin = new ionic_1.Animation(document.querySelector('#ionitron'));
        ionitronSpin
            .from('transform', 'rotate(0deg)')
            .to('transform', 'rotate(360deg)');
        this.animation.add(ionitronSpin);
        this.animation.onReady(function (animation) {
            console.log('onReady', animation);
        });
        this.animation.onPlay(function (animation) {
            console.log('onPlay', animation);
        });
        this.animation.onFinish(function (animation) {
            console.log('onFinish', animation);
        });
    }
    IonicApp.prototype.play = function () {
        this.animation.play();
    };
    IonicApp.prototype.pause = function () {
        this.animation.pause();
    };
    IonicApp.prototype.progress = function (ev) {
        this.animation.progress(parseFloat(ev.srcElement.value));
    };
    IonicApp = __decorate([
        ionic_1.App({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], IonicApp);
    return IonicApp;
})();