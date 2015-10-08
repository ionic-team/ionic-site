System.register('rxjs/src/observables/RangeObservable', ['../Observable'], function (_export) {
    'use strict';

    var Observable, RangeObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }],
        execute: function () {
            RangeObservable = (function (_Observable) {
                _inherits(RangeObservable, _Observable);

                function RangeObservable(start, end, scheduler) {
                    _classCallCheck(this, RangeObservable);

                    _get(Object.getPrototypeOf(RangeObservable.prototype), 'constructor', this).call(this);
                    this.start = start;
                    this.end = end;
                    this.scheduler = scheduler;
                }

                _createClass(RangeObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var index = 0;
                        var start = this.start;
                        var end = this.end;
                        var scheduler = this.scheduler;
                        if (scheduler) {
                            subscriber.add(scheduler.schedule(RangeObservable.dispatch, 0, {
                                index: index, end: end, start: start, subscriber: subscriber
                            }));
                        } else {
                            do {
                                if (index++ >= end) {
                                    subscriber.complete();
                                    break;
                                }
                                subscriber.next(start++);
                                if (subscriber.isUnsubscribed) {
                                    break;
                                }
                            } while (true);
                        }
                    }
                }], [{
                    key: 'create',
                    value: function create(start, end, scheduler) {
                        if (start === undefined) start = 0;
                        if (end === undefined) end = 0;

                        return new RangeObservable(start, end, scheduler);
                    }
                }, {
                    key: 'dispatch',
                    value: function dispatch(state) {
                        var start = state.start;
                        var index = state.index;
                        var end = state.end;
                        var subscriber = state.subscriber;

                        if (index >= end) {
                            subscriber.complete();
                            return;
                        }
                        subscriber.next(start);
                        if (subscriber.isUnsubscribed) {
                            return;
                        }
                        state.index = index + 1;
                        state.start = start + 1;
                        this.schedule(state);
                    }
                }]);

                return RangeObservable;
            })(Observable);

            _export('default', RangeObservable);
        }
    };
});