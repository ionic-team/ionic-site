"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _ionicIonic = require('ionic/ionic');

var _ionicUtil = require('ionic/util');

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
var ParallaxEffect = function ParallaxEffect(content, elementRef) {
    var _this = this;

    _classCallCheck(this, ParallaxEffect);

    this.ele = elementRef.nativeElement;
    this.scroller = this.ele.querySelector('scroll-content');
    this.scroller.addEventListener('scroll', function (e) {
        //this.counter.innerHTML = e.target.scrollTop;
        _ionicUtil.dom.raf(function () {
            _this.parallax.style[_ionicUtil.dom.CSS.transform] = 'translateY(' + -Math.min(300, e.target.scrollTop / 4) + 'px) scale(1)';
            if (e.target.scrollTop < 0) {
                _this.parallax.style[_ionicUtil.dom.CSS.transform] = 'translateY(0) scale(' + (1 + Math.abs(e.target.scrollTop / 500)) + ')';
            }
        });
    });
    setTimeout(function () {
        console.log('Watching', _this.target, _this.counter);
    });
};
exports.ParallaxEffect = ParallaxEffect;
exports.ParallaxEffect = ParallaxEffect = __decorate([(0, _angular2Angular2.Directive)({
    selector: '[parallax]',
    inputs: ['parallax', 'counter']
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Content !== 'undefined' && _ionicIonic.Content) === 'function' && _a || Object, typeof (_b = typeof _angular2Angular2.ElementRef !== 'undefined' && _angular2Angular2.ElementRef) === 'function' && _b || Object])], ParallaxEffect);
var IonicApp = function IonicApp() {
    _classCallCheck(this, IonicApp);

    this.items = [];
    for (var i = 0; i < 100; i++) {
        this.items.push({
            title: 'Item ' + i
        });
    }
};
IonicApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html',
    directives: [ParallaxEffect]
}), __metadata('design:paramtypes', [])], IonicApp);
var _a, _b;