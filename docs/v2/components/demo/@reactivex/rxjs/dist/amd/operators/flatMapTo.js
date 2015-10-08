define(["require", "exports", './flatMapTo-support'], function (require, exports, flatMapTo_support_1) {
    function flatMapTo(observable, projectResult, concurrent) {
        return this.lift(new flatMapTo_support_1.FlatMapToOperator(observable, projectResult, concurrent));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = flatMapTo;
});
//# sourceMappingURL=flatMapTo.js.map