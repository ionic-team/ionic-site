define(["require", "exports"], function (require, exports) {
    function not(pred, thisArg) {
        function notPred() {
            return !(notPred.pred.apply(notPred.thisArg, arguments));
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = not;
});
//# sourceMappingURL=not.js.map