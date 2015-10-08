define(["require", "exports", './zip-support'], function (require, exports, zip_support_1) {
    function zipAll(project) {
        return this.lift(new zip_support_1.ZipOperator(project));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = zipAll;
});
//# sourceMappingURL=zipAll.js.map