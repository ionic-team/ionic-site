define(["require", "exports", './merge-static', '../schedulers/immediate'], function (require, exports, merge_static_1, immediate_1) {
    function concat() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var scheduler = immediate_1.default;
        var len = observables.length;
        if (typeof observables[observables.length - 1].schedule === 'function') {
            scheduler = observables.pop();
            observables.push(1, scheduler);
        }
        return merge_static_1.default.apply(this, observables);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = concat;
});
//# sourceMappingURL=concat-static.js.map