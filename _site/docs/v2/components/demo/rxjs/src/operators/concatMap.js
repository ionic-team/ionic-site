System.register('rxjs/src/operators/concatMap', ['./flatMap-support'], function (_export) {
    'use strict';

    var FlatMapOperator;

    _export('default', concatMap);

    function concatMap(project, projectResult) {
        return this.lift(new FlatMapOperator(project, projectResult, 1));
    }

    return {
        setters: [function (_flatMapSupport) {
            FlatMapOperator = _flatMapSupport.FlatMapOperator;
        }],
        execute: function () {}
    };
});