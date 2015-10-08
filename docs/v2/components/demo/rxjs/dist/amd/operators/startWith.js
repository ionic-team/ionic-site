define(["require", "exports", '../observables/ScalarObservable', './concat-static'], function (require, exports, ScalarObservable_1, concat_static_1) {
    function startWith(x) {
        return concat_static_1.default(new ScalarObservable_1.default(x), this);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = startWith;
});
//# sourceMappingURL=startWith.js.map