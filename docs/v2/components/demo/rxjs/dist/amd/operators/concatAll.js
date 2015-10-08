define(["require", "exports", './merge-support'], function (require, exports, merge_support_1) {
    function concatAll() {
        return this.lift(new merge_support_1.MergeOperator(1));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = concatAll;
});
//# sourceMappingURL=concatAll.js.map