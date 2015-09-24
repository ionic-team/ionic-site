System.register("index", ["angular2/angular2", "ionic/ionic", "ionic/util"], function (_export) {
    "use strict";

    var ElementRef, Directive, App, Content, dom, __decorate, __metadata, ParallaxEffect, IonicApp;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            ElementRef = _angular2Angular2.ElementRef;
            Directive = _angular2Angular2.Directive;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            Content = _ionicIonic.Content;
        }, function (_ionicUtil) {
            dom = _ionicUtil.dom;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            ParallaxEffect = function ParallaxEffect(content, elementRef) {
                var _this = this;

                _classCallCheck(this, ParallaxEffect);

                this.ele = elementRef.nativeElement;
                this.scroller = this.ele.querySelector('scroll-content');
                this.scroller.addEventListener('scroll', function (e) {
                    //this.counter.innerHTML = e.target.scrollTop;
                    dom.raf(function () {
                        _this.parallax.style[dom.CSS.transform] = 'translateY(' + -Math.min(300, e.target.scrollTop / 4) + 'px) scale(1)';
                        if (e.target.scrollTop < 0) {
                            _this.parallax.style[dom.CSS.transform] = 'translateY(0) scale(' + (1 + Math.abs(e.target.scrollTop / 500)) + ')';
                        }
                    });
                });
                setTimeout(function () {
                    console.log('Watching', _this.target, _this.counter);
                });
            };

            _export("ParallaxEffect", ParallaxEffect);

            _export("ParallaxEffect", ParallaxEffect = __decorate([Directive({
                selector: '[parallax]',
                properties: ['parallax', 'counter']
            }), __metadata('design:paramtypes', [typeof Content !== 'undefined' && Content || Object, typeof ElementRef !== 'undefined' && ElementRef || Object])], ParallaxEffect));

            IonicApp = function IonicApp() {
                _classCallCheck(this, IonicApp);

                this.items = [];
                for (var i = 0; i < 100; i++) {
                    this.items.push({
                        title: 'Item ' + i
                    });
                }
            };

            IonicApp = __decorate([App({
                templateUrl: 'main.html',
                directives: [ParallaxEffect]
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});