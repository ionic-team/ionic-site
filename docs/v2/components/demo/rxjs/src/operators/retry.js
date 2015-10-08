System.register('rxjs/src/operators/retry', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, RetryOperator, RetrySubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', retry);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function retry() {
        var count = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        return this.lift(new RetryOperator(count, this));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            RetryOperator = (function () {
                function RetryOperator(count, original) {
                    _classCallCheck(this, RetryOperator);

                    this.count = count;
                    this.original = original;
                }

                _createClass(RetryOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new RetrySubscriber(subscriber, this.count, this.original);
                    }
                }]);

                return RetryOperator;
            })();

            RetrySubscriber = (function (_Subscriber) {
                _inherits(RetrySubscriber, _Subscriber);

                function RetrySubscriber(destination, count, original) {
                    _classCallCheck(this, RetrySubscriber);

                    _get(Object.getPrototypeOf(RetrySubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = count;
                    this.original = original;
                    this.retries = 0;
                }

                _createClass(RetrySubscriber, [{
                    key: '_error',
                    value: function _error(err) {
                        var count = this.count;
                        if (count && count === (this.retries += 1)) {
                            this.destination.error(err);
                        } else {
                            this.resubscribe();
                        }
                    }
                }, {
                    key: 'resubscribe',
                    value: function resubscribe() {
                        this.original.subscribe(this);
                    }
                }]);

                return RetrySubscriber;
            })(Subscriber);
        }
    };
});