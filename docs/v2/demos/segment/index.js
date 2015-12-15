"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoApp = function DemoApp(platform) {
    _classCallCheck(this, DemoApp);

    this.platform = platform;
    this.pet = "puppies";
    this.isAndroid = platform.is('android');
};
DemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _a || Object])], DemoApp);
var _a;