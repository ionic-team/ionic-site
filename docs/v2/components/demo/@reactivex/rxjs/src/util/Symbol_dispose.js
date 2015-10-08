System.register('rxjs/src/util/Symbol_dispose', ['./root'], function (_export) {
    'use strict';

    var root;
    return {
        setters: [function (_root) {
            root = _root.root;
        }],
        execute: function () {
            if (!root.Symbol) {
                root.Symbol = {};
            }
            if (!root.Symbol.dispose) {
                if (typeof root.Symbol['for'] === 'function') {
                    root.Symbol.dispose = root.Symbol['for']('dispose');
                } else {
                    root.Symbol.dispose = '@@dispose';
                }
            }

            _export('default', root.Symbol.dispose);
        }
    };
});