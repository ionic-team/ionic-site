define(["require", "exports", './flatMapTo-support'], function (require, exports, flatMapTo_support_1) {
    function concatMapTo(observable, projectResult) {
        return this.lift(new flatMapTo_support_1.FlatMapToOperator(observable, projectResult, 1));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = concatMapTo;
});
//# sourceMappingURL=concatMapTo.js.map