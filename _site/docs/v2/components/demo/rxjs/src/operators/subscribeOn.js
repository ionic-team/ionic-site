System.register('rxjs/src/operators/subscribeOn', ['../observables/SubscribeOnObservable'], function (_export) {
    'use strict';

    var SubscribeOnObservable;

    _export('default', subscribeOn);

    function subscribeOn(scheduler) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        return new SubscribeOnObservable(this, delay, scheduler);
    }

    return {
        setters: [function (_observablesSubscribeOnObservable) {
            SubscribeOnObservable = _observablesSubscribeOnObservable['default'];
        }],
        execute: function () {}
    };
});