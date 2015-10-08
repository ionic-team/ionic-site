System.register('rxjs/src/operators/repeat', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, RepeatOperator, RepeatSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', repeat);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function repeat(count) {
        return this.lift(new RepeatOperator(count, this));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            RepeatOperator = (function () {
                function RepeatOperator(count, original) {
                    _classCallCheck(this, RepeatOperator);

                    this.count = count;
                    this.original = original;
                }

                _createClass(RepeatOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new RepeatSubscriber(subscriber, this.count, this.original);
                    }
                }]);

                return RepeatOperator;
            })();

            RepeatSubscriber = (function (_Subscriber) {
                _inherits(RepeatSubscriber, _Subscriber);

                function RepeatSubscriber(destination, count, original) {
                    _classCallCheck(this, RepeatSubscriber);

                    _get(Object.getPrototypeOf(RepeatSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = count;
                    this.original = original;
                    this.repeated = 0;
                }

                _createClass(RepeatSubscriber, [{
                    key: '_complete',
                    value: function _complete() {
                        if (this.count === (this.repeated += 1)) {
                            this.destination.complete();
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

                return RepeatSubscriber;
            })(Subscriber);
        }
    };
});