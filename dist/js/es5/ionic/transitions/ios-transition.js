System.register('ionic/transitions/ios-transition', ['./transition', '../animations/animation'], function (_export) {
  'use strict';

  var Transition, Animation, DURATION, EASING, OPACITY, TRANSLATEX, OFF_RIGHT, OFF_LEFT, CENTER, OFF_OPACITY, IOSTransition;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_transition) {
      Transition = _transition.Transition;
    }, function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }],
    execute: function () {
      DURATION = 600;
      EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
      OPACITY = 'opacity';
      TRANSLATEX = 'translateX';
      OFF_RIGHT = '100%';
      OFF_LEFT = '-33%';
      CENTER = '0%';
      OFF_OPACITY = 0.8;

      IOSTransition = (function (_Transition) {
        function IOSTransition(nav, opts) {
          _classCallCheck(this, IOSTransition);

          _get(Object.getPrototypeOf(IOSTransition.prototype), 'constructor', this).call(this, nav, opts);
          this.duration(DURATION);
          this.easing(EASING);
          this.enteringView.to(TRANSLATEX, CENTER).to(OPACITY, 1);
          this.enteringTitle.fadeIn().to(TRANSLATEX, CENTER);
          this.leavingView.from(TRANSLATEX, CENTER).from(OPACITY, 1);
          this.leavingTitle.from(TRANSLATEX, CENTER).from(OPACITY, 1);
          if (opts.direction === 'back') {
            this.enteringView.from(TRANSLATEX, OFF_LEFT).from(OPACITY, OFF_OPACITY).to(OPACITY, 1);
            this.enteringTitle.from(TRANSLATEX, OFF_LEFT);
            this.leavingView.to(TRANSLATEX, OFF_RIGHT).to(OPACITY, 1);
            this.leavingTitle.to(TRANSLATEX, OFF_RIGHT).to(OPACITY, 0);
            if (this.leaving.enableBack() && this.viewWidth() > 200) {
              var leavingBackButtonText = new Animation(this.leaving.backButtonTextElement());
              leavingBackButtonText.fromTo(TRANSLATEX, CENTER, this.viewWidth() / 2 + 'px');
              this.leavingNavbar.add(leavingBackButtonText);
            }
          } else {
            this.enteringView.from(TRANSLATEX, OFF_RIGHT).from(OPACITY, 1);
            this.enteringTitle.from(TRANSLATEX, OFF_RIGHT);
            this.leavingView.to(TRANSLATEX, OFF_LEFT).to(OPACITY, OFF_OPACITY);
            this.leavingTitle.to(TRANSLATEX, OFF_LEFT).to(OPACITY, 0);
            if (this.entering.enableBack() && this.viewWidth() > 200) {
              var enteringBackButtonText = new Animation(this.entering.backButtonTextElement());
              enteringBackButtonText.fromTo(TRANSLATEX, this.viewWidth() / 2 + 'px', CENTER);
              this.enteringNavbar.add(enteringBackButtonText);
            }
          }
        }

        _inherits(IOSTransition, _Transition);

        return IOSTransition;
      })(Transition);

      Transition.register('ios', IOSTransition);
    }
  };
});