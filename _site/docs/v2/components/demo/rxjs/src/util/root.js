System.register('rxjs/src/util/root', [], function (_export) {
    'use strict';

    var objectTypes, root, freeExports, freeModule, freeGlobal;
    return {
        setters: [],
        execute: function () {
            objectTypes = {
                'boolean': false,
                'function': true,
                'object': true,
                'number': false,
                'string': false,
                'undefined': false
            };
            root = objectTypes[typeof self] && self || objectTypes[typeof window] && window;

            _export('root', root);

            freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
            freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
            freeGlobal = objectTypes[typeof global] && global;

            if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
                _export('root', root = freeGlobal);
            }
        }
    };
});