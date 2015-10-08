System.register('rxjs/src/operators/publish', ['../Subject', './multicast'], function (_export) {
    'use strict';

    var Subject, multicast;

    _export('default', publish);

    function subjectFactory() {
        return new Subject();
    }

    function publish() {
        return multicast.call(this, subjectFactory);
    }

    return {
        setters: [function (_Subject) {
            Subject = _Subject['default'];
        }, function (_multicast) {
            multicast = _multicast['default'];
        }],
        execute: function () {}
    };
});