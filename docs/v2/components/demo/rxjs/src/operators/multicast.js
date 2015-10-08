System.register('rxjs/src/operators/multicast', ['../observables/ConnectableObservable'], function (_export) {
    'use strict';

    var ConnectableObservable;

    _export('default', multicast);

    function multicast(subjectFactory) {
        return new ConnectableObservable(this, subjectFactory);
    }

    return {
        setters: [function (_observablesConnectableObservable) {
            ConnectableObservable = _observablesConnectableObservable['default'];
        }],
        execute: function () {}
    };
});