System.register('rxjs/src/observables/IntervalObservable', ['../util/isNumeric', '../Observable', '../schedulers/nextTick'], function (_export) {
    'use strict';

    var isNumeric, Observable, nextTick, IntervalObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

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
            IntervalObservable = (function (_Observable) {
                _inherits(IntervalObservable, _Observable);

                function IntervalObservable() {
                    var period = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? nextTick : arguments[1];

                    _classCallCheck(this, IntervalObservable);

                    _get(Object.getPrototypeOf(IntervalObservable.prototype), 'constructor', this).call(this);
                    this.period = period;
                    this.scheduler = scheduler;
                    if (!isNumeric(period) || period < 0) {
                        this.period = 0;
                    }
                    if (!scheduler || typeof scheduler.schedule !== "function") {
                        this.scheduler = nextTick;
                    }
                }

                _createClass(IntervalObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var index = 0;
                        var period = this.period;
                        var scheduler = this.scheduler;
                        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
                            index: index, subscriber: subscriber, period: period
                        }));
                    }
                }], [{
                    key: 'create',
                    value: function create() {
                        var period = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? nextTick : arguments[1];

                        return new IntervalObservable(period, scheduler);
                    }
                }, {
                    key: 'dispatch',
                    value: function dispatch(state) {
                        var index = state.index;
                        var subscriber = state.subscriber;
                        var period = state.period;

                        subscriber.next(index);
                        if (subscriber.isUnsubscribed) {
                            return;
                        }
                        state.index += 1;
                        this.schedule(state, period);
                    }
                }]);

                return IntervalObservable;
            })(Observable);

            _export('default', IntervalObservable);
        }
    };
});