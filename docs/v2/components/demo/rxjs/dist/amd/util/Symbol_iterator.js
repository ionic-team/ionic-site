define(["require", "exports", './root'], function (require, exports, root_1) {
    if (!root_1.root.Symbol) {
        root_1.root.Symbol = {};
    }
    if (!root_1.root.Symbol.iterator) {
        if (typeof root_1.root.Symbol.for === 'function') {
            root_1.root.Symbol.iterator = root_1.root.Symbol.for('iterator');
        }
        else if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
            root_1.root.Symbol.iterator = '@@iterator';
        }
        else {
            root_1.root.Symbol.iterator = '_es6shim_iterator_';
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = root_1.root.Symbol.iterator;
});
// // Shim in iterator support
// export var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
// // Bug for mozilla version
// if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
//     $iterator$ = '@@iterator';
// }
//# sourceMappingURL=Symbol_iterator.js.map