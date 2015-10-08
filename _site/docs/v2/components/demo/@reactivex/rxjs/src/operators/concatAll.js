System.register('rxjs/src/operators/concatAll', ['./merge-support'], function (_export) {
    'use strict';

    var MergeOperator;

    _export('default', concatAll);

    function concatAll() {
        return this.lift(new MergeOperator(1));
    }

    return {
        setters: [function (_mergeSupport) {
            MergeOperator = _mergeSupport.MergeOperator;
        }],
        execute: function () {}
    };
});