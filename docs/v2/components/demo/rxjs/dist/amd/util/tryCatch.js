define(["require", "exports", './errorObject'], function (require, exports, errorObject_1) {
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = tryCatch;
    ;
});
//# sourceMappingURL=tryCatch.js.map