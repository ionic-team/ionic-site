define(["require", "exports", './combineLatest-support'], function (require, exports, combineLatest_support_1) {
    function combineAll(project) {
        return this.lift(new combineLatest_support_1.CombineLatestOperator(project));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = combineAll;
});
//# sourceMappingURL=combineAll.js.map