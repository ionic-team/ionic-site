System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, Animation, __decorate, __metadata, opacity, rotateZ, translateX, scale, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            Animation = _ionicIonic.Animation;
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

            opacity = 0.2;
            rotateZ = '180deg';
            translateX = '100px';
            scale = 0.6;

            IonicApp = (function () {
                function IonicApp() {
                    _classCallCheck(this, IonicApp);

                    this.animation = new Animation();
                    this.animation.duration(2000).easing('spring', { damping: 6, elasticity: 10 });
                    var ball = new Animation(document.querySelector('.ball'));
                    ball.from('translateX', '0px').to('translateX', '250px');
                    this.animation.add(ball);
                    var row1 = new Animation(document.querySelectorAll('.square'));
                    row1.from('opacity', 0.8).to('opacity', 0.2);
                    this.animation.add(row1);
                    var row2 = new Animation(document.querySelectorAll('.square2'));
                    row2.from('rotate', '0deg').from('scale', '1').to('rotate', '90deg').to('scale', '0.5').before.addClass('added-before-play').after.addClass('added-after-finish');
                    this.animation.add(row1, row2);
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

                _createClass(IonicApp, [{
                    key: "play",
                    value: function play() {
                        this.animation.play();
                    }
                }, {
                    key: "pause",
                    value: function pause() {
                        this.animation.pause();
                    }
                }, {
                    key: "progress",
                    value: function progress(ev) {
                        this.animation.progress(parseFloat(ev.srcElement.value));
                    }
                }]);

                return IonicApp;
            })();

            IonicApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});