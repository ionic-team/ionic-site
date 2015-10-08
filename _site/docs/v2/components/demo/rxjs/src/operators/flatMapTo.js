System.register('rxjs/src/operators/flatMapTo', ['./flatMapTo-support'], function (_export) {
    'use strict';

    var FlatMapToOperator;

    _export('default', flatMapTo);

    function flatMapTo(observable, projectResult, concurrent) {
        return this.lift(new FlatMapToOperator(observable, projectResult, concurrent));
    }

    return {
        setters: [function (_flatMapToSupport) {
            FlatMapToOperator = _flatMapToSupport.FlatMapToOperator;
        }],
        execute: function () {}
    };
});