System.register('rxjs/src/operators/concatMapTo', ['./flatMapTo-support'], function (_export) {
    'use strict';

    var FlatMapToOperator;

    _export('default', concatMapTo);

    function concatMapTo(observable, projectResult) {
        return this.lift(new FlatMapToOperator(observable, projectResult, 1));
    }

    return {
        setters: [function (_flatMapToSupport) {
            FlatMapToOperator = _flatMapToSupport.FlatMapToOperator;
        }],
        execute: function () {}
    };
});