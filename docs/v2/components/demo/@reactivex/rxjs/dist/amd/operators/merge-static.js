define(["require", "exports", '../observables/ArrayObservable', './merge-support', '../schedulers/immediate'], function (require, exports, ArrayObservable_1, merge_support_1, immediate_1) {
    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = immediate_1.default;
        var last = observables[observables.length - 1];
        if (typeof last.schedule === 'function') {
            scheduler = observables.pop();
            if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
                concurrent = observables.pop();
            }
        }
        else if (typeof last === 'number') {
            concurrent = observables.pop();
        }
        if (observables.length === 1) {
            return observables[0];
        }
        return new ArrayObservable_1.default(observables, scheduler).lift(new merge_support_1.MergeOperator(concurrent));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = merge;
});
//# sourceMappingURL=merge-static.js.map