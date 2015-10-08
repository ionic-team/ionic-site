define(["require", "exports"], function (require, exports) {
    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = isDate;
});
//# sourceMappingURL=isDate.js.map