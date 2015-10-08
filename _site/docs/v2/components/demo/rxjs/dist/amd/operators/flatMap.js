define(["require", "exports", './flatMap-support'], function (require, exports, flatMap_support_1) {
    function flatMap(project, projectResult, concurrent) {
        return this.lift(new flatMap_support_1.FlatMapOperator(project, projectResult, concurrent));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = flatMap;
});
//# sourceMappingURL=flatMap.js.map