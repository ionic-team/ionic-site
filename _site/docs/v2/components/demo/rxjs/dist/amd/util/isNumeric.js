define(["require", "exports"], function (require, exports) {
    var is_array = Array.isArray;
    function isNumeric(val) {
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        // adding 1 corrects loss of precision from parseFloat (#15100)
        return !is_array(val) && (val - parseFloat(val) + 1) >= 0;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = isNumeric;
    ;
});
//# sourceMappingURL=isNumeric.js.map