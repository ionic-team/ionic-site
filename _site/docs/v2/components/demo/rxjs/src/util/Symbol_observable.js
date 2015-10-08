System.register('rxjs/src/util/Symbol_observable', ['./root'], function (_export) {
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
            if (!root.Symbol.observable) {
                if (typeof root.Symbol['for'] === 'function') {
                    root.Symbol.observable = root.Symbol['for']('observable');
                } else {
                    root.Symbol.observable = '@@observable';
                }
            }

            _export('default', root.Symbol.observable);
        }
    };
});