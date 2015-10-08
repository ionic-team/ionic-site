'use strict';

exports.__esModule = true;

var _root = require('./root');

if (!_root.root.Symbol) {
    _root.root.Symbol = {};
}
if (!_root.root.Symbol.iterator) {
    if (typeof _root.root.Symbol['for'] === 'function') {
        _root.root.Symbol.iterator = _root.root.Symbol['for']('iterator');
    } else if (_root.root.Set && typeof new _root.root.Set()['@@iterator'] === 'function') {
        _root.root.Symbol.iterator = '@@iterator';
    } else {
        _root.root.Symbol.iterator = '_es6shim_iterator_';
    }
}
exports['default'] = _root.root.Symbol.iterator;

// // Shim in iterator support
// export var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
// // Bug for mozilla version
// if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
//     $iterator$ = '@@iterator';
// }
module.exports = exports['default'];