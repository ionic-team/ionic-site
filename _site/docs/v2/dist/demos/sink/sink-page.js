System.register('sink-page', [], function (_export) {
    /**
     * Simple wrapper page for the side menu toggle.
     */
    'use strict';

    var SinkPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            SinkPage = (function () {
                function SinkPage(app) {
                    _classCallCheck(this, SinkPage);

                    this.app = app;
                }

                _createClass(SinkPage, [{
                    key: 'toggleMenu',
                    value: function toggleMenu() {
                        var aside = this.app.getComponent('mainMenu');
                        aside.toggle();
                    }
                }]);

                return SinkPage;
            })();

            _export('SinkPage', SinkPage);
        }
    };
});