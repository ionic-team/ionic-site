define(["require", "exports", './flatMap-support'], function (require, exports, flatMap_support_1) {
    function concatMap(project, projectResult) {
        return this.lift(new flatMap_support_1.FlatMapOperator(project, projectResult, 1));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = concatMap;
});
//# sourceMappingURL=concatMap.js.map