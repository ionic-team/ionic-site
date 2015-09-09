System.register('ionic/transitions/transition', ['../animations/animation'], function (_export) {
  'use strict';

  var Animation, SHOW_NAVBAR_CSS, SHOW_VIEW_CSS, SHOW_BACK_BUTTON, TransitionRegistry, Transition;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }],
    execute: function () {
      SHOW_NAVBAR_CSS = 'show-navbar';
      SHOW_VIEW_CSS = 'show-view';
      SHOW_BACK_BUTTON = 'show-back-button';
      TransitionRegistry = {};

      Transition = (function (_Animation) {
        function Transition(nav, opts) {
          _classCallCheck(this, Transition);

          _get(Object.getPrototypeOf(Transition.prototype), 'constructor', this).call(this);
          var enteringItem = this.entering = nav.getStagedEnteringItem();
          var leavingItem = this.leaving = nav.getStagedLeavingItem();
          this.enteringView = new Animation(enteringItem.viewElement());
          this.enteringView.before.addClass(SHOW_VIEW_CSS);
          this.enteringView.onPlay(function () {
            enteringItem.postRender();
          });
          this.add(this.enteringView);
          if (opts.navbar !== false) {
            var enteringNavbar = this.enteringNavbar = new Animation(enteringItem.navbarElement());
            enteringNavbar.before.addClass(SHOW_NAVBAR_CSS);
            if (enteringItem.enableBack()) {
              var enteringBackButton = this.enteringBackButton = new Animation(enteringItem.backButtonElement());
              enteringBackButton.before.addClass(SHOW_BACK_BUTTON).fadeIn();
              enteringNavbar.add(enteringBackButton);
            }
            this.enteringTitle = new Animation(enteringItem.titleElement());
            enteringNavbar.add(this.enteringTitle);
            this.add(enteringNavbar);
            this.enteringNavbarItems = new Animation(enteringItem.navbarItemElements());
            this.enteringNavbarItems.fadeIn();
            enteringNavbar.add(this.enteringNavbarItems);
          }
          if (leavingItem) {
            this.leavingView = new Animation(leavingItem.viewElement());
            this.leavingView.after.removeClass(SHOW_VIEW_CSS);
            var leavingNavbar = this.leavingNavbar = new Animation(leavingItem.navbarElement());
            leavingNavbar.after.removeClass(SHOW_NAVBAR_CSS);
            var leavingBackButton = this.leavingBackButton = new Animation(leavingItem.backButtonElement());
            leavingBackButton.after.removeClass(SHOW_BACK_BUTTON).fadeOut();
            leavingNavbar.add(leavingBackButton);
            this.leavingTitle = new Animation(leavingItem.titleElement());
            leavingNavbar.add(this.leavingTitle);
            this.leavingNavbarItems = new Animation(leavingItem.navbarItemElements());
            this.leavingNavbarItems.fadeOut();
            leavingNavbar.add(this.leavingNavbarItems);
            this.add(this.leavingView, leavingNavbar);
          }
        }

        _inherits(Transition, _Animation);

        _createClass(Transition, [{
          key: 'viewWidth',
          value: function viewWidth() {
            return this._w || (this._w = this.leaving && this.leaving.viewElement().offsetWidth);
          }
        }], [{
          key: 'create',
          value: function create(nav) {
            var opts = arguments[1] === undefined ? {} : arguments[1];

            var name = opts.animation || 'ios';
            var TransitionClass = TransitionRegistry[name];
            if (!TransitionClass) {
              TransitionClass = Transition;
            }
            return new TransitionClass(nav, opts);
          }
        }, {
          key: 'register',
          value: function register(name, TransitionClass) {
            TransitionRegistry[name] = TransitionClass;
          }
        }]);

        return Transition;
      })(Animation);

      _export('Transition', Transition);
    }
  };
});