System.register('rxjs/src/operators/count', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, CountOperator, CountSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', count);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function count() {
        return this.lift(new CountOperator());
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            CountOperator = (function () {
                function CountOperator() {
                    _classCallCheck(this, CountOperator);
                }

                _createClass(CountOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new CountSubscriber(subscriber);
                    }
                }]);

                return CountOperator;
            })();

            CountSubscriber = (function (_Subscriber) {
                _inherits(CountSubscriber, _Subscriber);

                function CountSubscriber(destination) {
                    _classCallCheck(this, CountSubscriber);

                    _get(Object.getPrototypeOf(CountSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = 0;
                }

                _createClass(CountSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        this.count += 1;
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.destination.next(this.count);
                        this.destination.complete();
                    }
                }]);

                return CountSubscriber;
            })(Subscriber);
        }
    };
});