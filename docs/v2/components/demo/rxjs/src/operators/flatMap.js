System.register('rxjs/src/operators/flatMap', ['./flatMap-support'], function (_export) {
    'use strict';

    var FlatMapOperator;

    _export('default', flatMap);

    function flatMap(project, projectResult, concurrent) {
        return this.lift(new FlatMapOperator(project, projectResult, concurrent));
    }

    return {
        setters: [function (_flatMapSupport) {
            FlatMapOperator = _flatMapSupport.FlatMapOperator;
        }],
        execute: function () {}
    };
});