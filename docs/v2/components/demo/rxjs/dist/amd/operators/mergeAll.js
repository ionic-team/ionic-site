define(["require", "exports", './merge-support'], function (require, exports, merge_support_1) {
    function mergeAll(concurrent) {
        return this.lift(new merge_support_1.MergeOperator(concurrent));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mergeAll;
});
//# sourceMappingURL=mergeAll.js.map