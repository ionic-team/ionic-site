define(["require", "exports", '../util/not', './filter'], function (require, exports, not_1, filter_1) {
    function partition(predicate, thisArg) {
        return [
            filter_1.default.call(this, predicate),
            filter_1.default.call(this, not_1.default(predicate, thisArg))
        ];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = partition;
});
//# sourceMappingURL=partition.js.map