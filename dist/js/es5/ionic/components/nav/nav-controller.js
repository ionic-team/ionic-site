System.register("ionic/components/nav/nav-controller", [], function (_export) {
  "use strict";

  var NavController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      NavController = (function () {
        function NavController(nav) {
          _classCallCheck(this, NavController);

          this._nav = nav;
        }

        _createClass(NavController, [{
          key: "setItems",
          value: function setItems(items) {
            return this._nav.setItems(items);
          }
        }, {
          key: "clear",
          value: function clear() {
            return this._nav.clear();
          }
        }, {
          key: "push",
          value: function push() {
            return this._nav.push.apply(this._nav, arguments);
          }
        }, {
          key: "pop",
          value: function pop() {
            return this._nav.pop.apply(this._nav, arguments);
          }
        }]);

        return NavController;
      })();

      _export("NavController", NavController);
    }
  };
});