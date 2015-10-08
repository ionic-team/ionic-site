System.register('rxjs/src/operators/combineAll', ['./combineLatest-support'], function (_export) {
    'use strict';

    var CombineLatestOperator;

    _export('default', combineAll);

    function combineAll(project) {
        return this.lift(new CombineLatestOperator(project));
    }

    return {
        setters: [function (_combineLatestSupport) {
            CombineLatestOperator = _combineLatestSupport.CombineLatestOperator;
        }],
        execute: function () {}
    };
});