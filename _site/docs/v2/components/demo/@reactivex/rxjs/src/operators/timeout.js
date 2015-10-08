System.register('rxjs/src/operators/timeout', ['../Subscriber', '../schedulers/immediate', '../util/isDate'], function (_export) {
    'use strict';

    var Subscriber, immediate, isDate, TimeoutOperator, TimeoutSubscriber;

    var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', timeout);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function timeout(due) {
        var errorToSend = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? immediate : arguments[2];

        var waitFor = isDate(due) ? +due - Date.now() : due;
        return this.lift(new TimeoutOperator(waitFor, errorToSend, scheduler));
    }

    function dispatchTimeout(state) {
        var subscriber = state.subscriber;
        subscriber.sendTimeoutError();
    }
    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }, function (_utilIsDate) {
            isDate = _utilIsDate['default'];
        }],
        execute: function () {
            TimeoutOperator = (function () {
                function TimeoutOperator(waitFor, errorToSend, scheduler) {
                    _classCallCheck(this, TimeoutOperator);

                    this.waitFor = waitFor;
                    this.errorToSend = errorToSend;
                    this.scheduler = scheduler;
                }

                _createClass(TimeoutOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new TimeoutSubscriber(subscriber, this.waitFor, this.errorToSend, this.scheduler);
                    }
                }]);

                return TimeoutOperator;
            })();

            TimeoutSubscriber = (function (_Subscriber) {
                _inherits(TimeoutSubscriber, _Subscriber);

                function TimeoutSubscriber(destination, waitFor, errorToSend, scheduler) {
                    _classCallCheck(this, TimeoutSubscriber);

                    _get(Object.getPrototypeOf(TimeoutSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.waitFor = waitFor;
                    this.errorToSend = errorToSend;
                    this.scheduler = scheduler;
                    var delay = waitFor;
                    scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
                }

                _createClass(TimeoutSubscriber, [{
                    key: 'sendTimeoutError',
                    value: function sendTimeoutError() {
                        this.error(this.errorToSend || new Error('timeout'));
                    }
                }]);

                return TimeoutSubscriber;
            })(Subscriber);
        }
    };
});