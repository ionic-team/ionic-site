System.register("helpers", [], function (_export) {
    "use strict";

    _export("toTitleCase", toTitleCase);

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    return {
        setters: [],
        execute: function () {}
    };
});