System.register('rxjs/src/operators/observeOn', ['./observeOn-support'], function (_export) {
    'use strict';

    var ObserveOnOperator;

    _export('default', observeOn);

    function observeOn(scheduler) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        return this.lift(new ObserveOnOperator(scheduler, delay));
    }

    return {
        setters: [function (_observeOnSupport) {
            ObserveOnOperator = _observeOnSupport.ObserveOnOperator;
        }],
        execute: function () {}
    };
});