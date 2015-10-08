System.register('rxjs/src/Operator', ['./Subscriber'], function (_export) {
    'use strict';

    var Subscriber;

    _export('defaultCallFn', defaultCallFn);

    function defaultCallFn(observer) {
        return new Subscriber(observer);
    }

    return {
        setters: [function (_Subscriber) {
            Subscriber = _Subscriber['default'];
        }],
        execute: function () {}
    };
});