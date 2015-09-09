System.register('ionic/components/aside/extensions/types', ['ionic/components/aside/aside', 'ionic/util/dom'], function (_export) {
  'use strict';

  var Aside, CSS, asideManipulator, contentManipulator, AsideType, AsideTypeOverlay, AsideTypePush, AsideTypeReveal;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicComponentsAsideAside) {
      Aside = _ionicComponentsAsideAside.Aside;
    }, function (_ionicUtilDom) {
      CSS = _ionicUtilDom.CSS;
    }],
    execute: function () {
      asideManipulator = {
        setSliding: function setSliding(sliding) {
          this.aside.domElement.classList[sliding ? 'add' : 'remove']('no-transition');
        },
        setOpen: function setOpen(open) {
          this.aside.domElement.classList[open ? 'add' : 'remove']('open');
        },
        setTransform: function setTransform(t) {
          this.aside.domElement.style[CSS.transform] = t;
        }
      };
      contentManipulator = {
        setSliding: function setSliding(sliding) {
          this.aside.contentElement.classList[sliding ? 'add' : 'remove']('no-transition');
        },
        setOpen: function setOpen(open) {
          this.aside.contentElement.classList[open ? 'add' : 'remove']('aside-open-' + this.aside.side);
        },
        setTransform: function setTransform(t) {
          this.aside.contentElement.style[CSS.transform] = t;
        }
      };

      AsideType = function AsideType(aside) {
        _classCallCheck(this, AsideType);

        this.aside = aside;
        setTimeout(function () {
          aside.contentElement.classList.add('aside-content');
        });
      };

      _export('AsideType', AsideType);

      Object.defineProperty(AsideType, 'parameters', { get: function get() {
          return [[Aside]];
        } });

      AsideTypeOverlay = (function (_AsideType) {
        function AsideTypeOverlay() {
          _classCallCheck(this, AsideTypeOverlay);

          if (_AsideType != null) {
            _AsideType.apply(this, arguments);
          }
        }

        _inherits(AsideTypeOverlay, _AsideType);

        _createClass(AsideTypeOverlay, [{
          key: 'setSliding',
          value: function setSliding(sliding) {
            asideManipulator.setSliding.call(this, sliding);
          }
        }, {
          key: 'setOpen',
          value: function setOpen(open) {
            asideManipulator.setOpen.call(this, open);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(t) {
            asideManipulator.setTransform.call(this, t);
          }
        }]);

        return AsideTypeOverlay;
      })(AsideType);

      _export('AsideTypeOverlay', AsideTypeOverlay);

      AsideTypePush = (function (_AsideType2) {
        function AsideTypePush() {
          _classCallCheck(this, AsideTypePush);

          if (_AsideType2 != null) {
            _AsideType2.apply(this, arguments);
          }
        }

        _inherits(AsideTypePush, _AsideType2);

        _createClass(AsideTypePush, [{
          key: 'setSliding',
          value: function setSliding(sliding) {
            asideManipulator.setSliding.call(this, sliding);
            contentManipulator.setSliding.call(this, sliding);
          }
        }, {
          key: 'setOpen',
          value: function setOpen(open) {
            asideManipulator.setOpen.call(this, open);
            contentManipulator.setOpen.call(this, open);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(t) {
            asideManipulator.setTransform.call(this, t);
            contentManipulator.setTransform.call(this, t);
          }
        }]);

        return AsideTypePush;
      })(AsideType);

      _export('AsideTypePush', AsideTypePush);

      AsideTypeReveal = (function (_AsideType3) {
        function AsideTypeReveal() {
          _classCallCheck(this, AsideTypeReveal);

          if (_AsideType3 != null) {
            _AsideType3.apply(this, arguments);
          }
        }

        _inherits(AsideTypeReveal, _AsideType3);

        _createClass(AsideTypeReveal, [{
          key: 'setSliding',
          value: function setSliding(sliding) {
            contentManipulator.setSliding.call(this, sliding);
          }
        }, {
          key: 'setOpen',
          value: function setOpen(sliding) {
            contentManipulator.setOpen.call(this, sliding);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(t) {
            contentManipulator.setTransform.call(this, t);
          }
        }]);

        return AsideTypeReveal;
      })(AsideType);

      _export('AsideTypeReveal', AsideTypeReveal);
    }
  };
});