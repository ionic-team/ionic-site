System.register('rxjs/src/operators/mergeAll', ['./merge-support'], function (_export) {
    'use strict';

    var MergeOperator;

    _export('default', mergeAll);

    function mergeAll(concurrent) {
        return this.lift(new MergeOperator(concurrent));
    }

    return {
        setters: [function (_mergeSupport) {
            MergeOperator = _mergeSupport.MergeOperator;
        }],
        execute: function () {}
    };
});