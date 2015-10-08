System.register('rxjs/src/operators/debounce', ['../Subscriber', '../schedulers/nextTick'], function (_export) {
    'use strict';

    var Subscriber, nextTick, DebounceOperator, DebounceSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', debounce);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function debounce(dueTime) {
        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? nextTick : arguments[1];

        return this.lift(new DebounceOperator(dueTime, scheduler));
    }

    function dispatchNext(_ref) {
        var value = _ref.value;
        var subscriber = _ref.subscriber;

        subscriber.debouncedNext(value);
    }
    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_schedulersNextTick) {
            nextTick = _schedulersNextTick['default'];
        }],
        execute: function () {
            DebounceOperator = (function () {
                function DebounceOperator(dueTime, scheduler) {
                    _classCallCheck(this, DebounceOperator);

                    this.dueTime = dueTime;
                    this.scheduler = scheduler;
                }

                _createClass(DebounceOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new DebounceSubscriber(subscriber, this.dueTime, this.scheduler);
                    }
                }]);

                return DebounceOperator;
            })();

            DebounceSubscriber = (function (_Subscriber) {
                _inherits(DebounceSubscriber, _Subscriber);

                function DebounceSubscriber(destination, dueTime, scheduler) {
                    _classCallCheck(this, DebounceSubscriber);

                    _get(Object.getPrototypeOf(DebounceSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.dueTime = dueTime;
                    this.scheduler = scheduler;
                }

                _createClass(DebounceSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        if (!this.debounced) {
                            this.add(this.debounced = this.scheduler.schedule(dispatchNext, this.dueTime, { value: value, subscriber: this }));
                        }
                    }
                }, {
                    key: 'clearDebounce',
                    value: function clearDebounce() {
                        var debounced = this.debounced;
                        if (debounced) {
                            debounced.unsubscribe();
                            this.remove(debounced);
                        }
                    }
                }, {
                    key: 'debouncedNext',
                    value: function debouncedNext(value) {
                        this.clearDebounce();
                        this.destination.next(value);
                    }
                }]);

                return DebounceSubscriber;
            })(Subscriber);
        }
    };
});