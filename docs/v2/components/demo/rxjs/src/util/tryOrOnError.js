System.register("rxjs/src/util/tryOrOnError", [], function (_export) {
    "use strict";

    _export("default", tryOrOnError);

    function tryOrOnError(target) {
        function tryCatcher() {
            try {
                tryCatcher.target.apply(this, arguments);
            } catch (e) {
                this.error(e);
            }
        }
        tryCatcher.target = target;
        return tryCatcher;
    }

    return {
        setters: [],
        execute: function () {}
    };
});