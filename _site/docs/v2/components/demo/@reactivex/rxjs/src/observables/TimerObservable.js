System.register('rxjs/src/observables/TimerObservable', ['../util/isNumeric', '../Observable', '../schedulers/nextTick'], function (_export) {
    'use strict';

    var isNumeric, Observable, nextTick, TimerObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_utilIsNumeric) {
            isNumeric = _utilIsNumeric['default'];
        }, function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_schedulersNextTick) {
            nextTick = _schedulersNextTick['default'];
        }],
        execute: function () {
            TimerObservable = (function (_Observable) {
                _inherits(TimerObservable, _Observable);

                function TimerObservable(dueTime, period, scheduler) {
                    if (dueTime === undefined) dueTime = 0;

                    _classCallCheck(this, TimerObservable);

                    _get(Object.getPrototypeOf(TimerObservable.prototype), 'constructor', this).call(this);
                    this.dueTime = dueTime;
                    this.period = period;
                    this.scheduler = scheduler;
                    if (isNumeric(period)) {
                        this._period = Number(period) < 1 && 1 || Number(period);
                    } else if (period && typeof period.schedule === "function") {
                        scheduler = period;
                    }
                    if (!scheduler || typeof scheduler.schedule !== "function") {
                        scheduler = nextTick;
                    }
                    this.scheduler = scheduler;
                }

                _createClass(TimerObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var index = 0;
                        var period = this._period;
                        var dueTime = this.dueTime;
                        var scheduler = this.scheduler;
                        subscriber.add(scheduler.schedule(TimerObservable.dispatch, dueTime, { index: index, period: period, subscriber: subscriber }));
                    }
                }], [{
                    key: 'create',
                    value: function create(dueTime, period, scheduler) {
                        if (dueTime === undefined) dueTime = 0;

                        return new TimerObservable(dueTime, period, scheduler);
                    }
                }, {
                    key: 'dispatch',
                    value: function dispatch(state) {
                        var index = state.index;
                        var period = state.period;
                        var subscriber = state.subscriber;

                        var action = this;
                        subscriber.next(index);
                        if (typeof period === "undefined") {
                            subscriber.complete();
                            return;
                        } else if (subscriber.isUnsubscribed) {
                            return;
                        }
                        if (typeof action.delay === 'undefined') {
                            action.add(action.scheduler.schedule(TimerObservable.dispatch, period, {
                                index: index + 1, period: period, subscriber: subscriber
                            }));
                        } else {
                            state.index = index + 1;
                            action.schedule(state, period);
                        }
                    }
                }]);

                return TimerObservable;
            })(Observable);

            _export('default', TimerObservable);
        }
    };
});