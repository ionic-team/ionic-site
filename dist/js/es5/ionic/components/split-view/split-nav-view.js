System.register("ionic/components/split-view/split-nav-view", [], function (_export) {
  "use strict";

  var SplitNavView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [],
    execute: function () {
      SplitNavView = (function (_NavView) {
        function SplitNavView() {
          _classCallCheck(this, SplitNavView);

          if (_NavView != null) {
            _NavView.apply(this, arguments);
          }
        }

        _inherits(SplitNavView, _NavView);

        return SplitNavView;
      })(NavView);

      _export("SplitNavView", SplitNavView);
    }
  };
});