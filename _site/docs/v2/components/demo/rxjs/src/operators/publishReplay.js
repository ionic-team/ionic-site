System.register('rxjs/src/operators/publishReplay', ['../subjects/ReplaySubject', './multicast'], function (_export) {
    'use strict';

    var ReplaySubject, multicast;

    _export('default', publishReplay);

    function publishReplay(bufferSize, windowTime, scheduler) {
        if (bufferSize === undefined) bufferSize = Number.POSITIVE_INFINITY;
        if (windowTime === undefined) windowTime = Number.POSITIVE_INFINITY;

        return multicast.call(this, function () {
            return new ReplaySubject(bufferSize, windowTime, scheduler);
        });
    }

    return {
        setters: [function (_subjectsReplaySubject) {
            ReplaySubject = _subjectsReplaySubject['default'];
        }, function (_multicast) {
            multicast = _multicast['default'];
        }],
        execute: function () {}
    };
});