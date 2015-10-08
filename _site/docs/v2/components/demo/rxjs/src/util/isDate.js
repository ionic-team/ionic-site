System.register("rxjs/src/util/isDate", [], function (_export) {
    "use strict";

    _export("default", isDate);

    function isDate(value) {
        return value instanceof Date && !isNaN(+value);
    }

    return {
        setters: [],
        execute: function () {}
    };
});