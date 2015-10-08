define(["require", "exports", './root'], function (require, exports, root_1) {
    if (!root_1.root.Symbol) {
        root_1.root.Symbol = {};
    }
    if (!root_1.root.Symbol.observable) {
        if (typeof root_1.root.Symbol.for === 'function') {
            root_1.root.Symbol.observable = root_1.root.Symbol.for('observable');
        }
        else {
            root_1.root.Symbol.observable = '@@observable';
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = root_1.root.Symbol.observable;
});
//# sourceMappingURL=Symbol_observable.js.map