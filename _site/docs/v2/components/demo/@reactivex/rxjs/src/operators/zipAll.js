System.register('rxjs/src/operators/zipAll', ['./zip-support'], function (_export) {
    'use strict';

    var ZipOperator;

    _export('default', zipAll);

    function zipAll(project) {
        return this.lift(new ZipOperator(project));
    }

    return {
        setters: [function (_zipSupport) {
            ZipOperator = _zipSupport.ZipOperator;
        }],
        execute: function () {}
    };
});