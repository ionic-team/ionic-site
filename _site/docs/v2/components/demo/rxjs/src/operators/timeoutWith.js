System.register('rxjs/src/operators/timeoutWith', ['../Subscriber', '../schedulers/immediate', '../util/isDate'], function (_export) {
    'use strict';

    var Subscriber, immediate, isDate, TimeoutWithOperator, TimeoutWithSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', timeoutWith);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function timeoutWith(due, withObservable) {
        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? immediate : arguments[2];

        var waitFor = isDate(due) ? +due - Date.now() : due;
        return this.lift(new TimeoutWithOperator(waitFor, withObservable, scheduler));
    }

    function dispatchTimeout(state) {
        var subscriber = state.subscriber;
        subscriber.handleTimeout();
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
            TimeoutWithOperator = (function () {
                function TimeoutWithOperator(waitFor, withObservable, scheduler) {
                    _classCallCheck(this, TimeoutWithOperator);

                    this.waitFor = waitFor;
                    this.withObservable = withObservable;
                    this.scheduler = scheduler;
                }

                _createClass(TimeoutWithOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new TimeoutWithSubscriber(subscriber, this.waitFor, this.withObservable, this.scheduler);
                    }
                }]);

                return TimeoutWithOperator;
            })();

            TimeoutWithSubscriber = (function (_Subscriber) {
                _inherits(TimeoutWithSubscriber, _Subscriber);

                function TimeoutWithSubscriber(destination, waitFor, withObservable, scheduler) {
                    _classCallCheck(this, TimeoutWithSubscriber);

                    _get(Object.getPrototypeOf(TimeoutWithSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.waitFor = waitFor;
                    this.withObservable = withObservable;
                    this.scheduler = scheduler;
                    var delay = waitFor;
                    scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
                }

                _createClass(TimeoutWithSubscriber, [{
                    key: 'handleTimeout',
                    value: function handleTimeout() {
                        var withObservable = this.withObservable;
                        this.add(withObservable.subscribe(this));
                    }
                }]);

                return TimeoutWithSubscriber;
            })(Subscriber);
        }
    };
});