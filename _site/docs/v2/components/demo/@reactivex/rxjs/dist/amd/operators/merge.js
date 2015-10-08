define(["require", "exports", './merge-static'], function (require, exports, merge_static_1) {
    function merge() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        observables.unshift(this);
        return merge_static_1.default.apply(this, observables);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = merge;
});
//# sourceMappingURL=merge.js.map