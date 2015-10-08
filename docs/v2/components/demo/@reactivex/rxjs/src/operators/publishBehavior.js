System.register('rxjs/src/operators/publishBehavior', ['../subjects/BehaviorSubject', './multicast'], function (_export) {
    'use strict';

    var BehaviorSubject, multicast;

    _export('default', publishBehavior);

    function publishBehavior(value) {
        return multicast.call(this, function () {
            return new BehaviorSubject(value);
        });
    }

    return {
        setters: [function (_subjectsBehaviorSubject) {
            BehaviorSubject = _subjectsBehaviorSubject['default'];
        }, function (_multicast) {
            multicast = _multicast['default'];
        }],
        execute: function () {}
    };
});