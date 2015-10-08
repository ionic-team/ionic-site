System.register("rxjs/src/util/isNumeric", [], function (_export) {
    "use strict";

    var is_array;

    _export("default", isNumeric);

    function isNumeric(val) {
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        // adding 1 corrects loss of precision from parseFloat (#15100)
        return !is_array(val) && val - parseFloat(val) + 1 >= 0;
    }

    return {
        setters: [],
        execute: function () {
            is_array = Array.isArray;

            ;
        }
    };
});