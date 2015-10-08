define(["require", "exports", './merge-static'], function (require, exports, merge_static_1) {
    function concatProto() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        observables.unshift(this);
        observables.push(1);
        return merge_static_1.default.apply(this, observables);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = concatProto;
});
//# sourceMappingURL=concat.js.map