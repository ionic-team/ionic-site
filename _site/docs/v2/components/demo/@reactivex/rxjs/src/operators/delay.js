System.register('rxjs/src/operators/delay', ['../Subscriber', '../Notification', '../schedulers/immediate'], function (_export) {
    'use strict';

    var Subscriber, Notification, immediate, DelayOperator, DelaySubscriber, DelayMessage;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', delay);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function delay(delay) {
        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? immediate : arguments[1];

        return this.lift(new DelayOperator(delay, scheduler));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_Notification) {
            Notification = _Notification['default'];
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }],
        execute: function () {
            DelayOperator = (function () {
                function DelayOperator(delay, scheduler) {
                    _classCallCheck(this, DelayOperator);

                    this.delay = delay;
                    this.scheduler = scheduler;
                }

                _createClass(DelayOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new DelaySubscriber(subscriber, this.delay, this.scheduler);
                    }
                }]);

                return DelayOperator;
            })();

            DelaySubscriber = (function (_Subscriber) {
                _inherits(DelaySubscriber, _Subscriber);

                function DelaySubscriber(destination, delay, scheduler) {
                    _classCallCheck(this, DelaySubscriber);

                    _get(Object.getPrototypeOf(DelaySubscriber.prototype), 'constructor', this).call(this, destination);
                    this.queue = [];
                    this.active = false;
                    this.errored = false;
                    this.delay = delay;
                    this.scheduler = scheduler;
                }

                _createClass(DelaySubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        if (this.errored) {
                            return;
                        }
                        var scheduler = this.scheduler;
                        this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification.createNext(x)));
                        if (this.active === false) {
                            this._schedule(scheduler);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(e) {
                        var scheduler = this.scheduler;
                        this.errored = true;
                        this.queue = [new DelayMessage(scheduler.now() + this.delay, Notification.createError(e))];
                        if (this.active === false) {
                            this._schedule(scheduler);
                        }
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        if (this.errored) {
                            return;
                        }
                        var scheduler = this.scheduler;
                        this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification.createComplete()));
                        if (this.active === false) {
                            this._schedule(scheduler);
                        }
                    }
                }, {
                    key: '_schedule',
                    value: function _schedule(scheduler) {
                        this.active = true;
                        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                            source: this, destination: this.destination, scheduler: scheduler
                        }));
                    }
                }], [{
                    key: 'dispatch',
                    value: function dispatch(state) {
                        var source = state.source;
                        var queue = source.queue;
                        var scheduler = state.scheduler;
                        var destination = state.destination;
                        while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
                            queue.shift().notification.observe(destination);
                        }
                        if (queue.length > 0) {
                            var _delay = Math.max(0, queue[0].time - scheduler.now());
                            this.schedule(state, _delay);
                        } else {
                            source.active = false;
                        }
                    }
                }]);

                return DelaySubscriber;
            })(Subscriber);

            DelayMessage = function DelayMessage(time, notification) {
                _classCallCheck(this, DelayMessage);

                this.time = time;
                this.notification = notification;
            };
        }
    };
});