define(["require", "exports"], function (require, exports) {
    function tryOrOnError(target) {
        function tryCatcher() {
            try {
                tryCatcher.target.apply(this, arguments);
            }
            catch (e) {
                this.error(e);
            }
        }
        tryCatcher.target = target;
        return tryCatcher;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = tryOrOnError;
});
//# sourceMappingURL=tryOrOnError.js.map