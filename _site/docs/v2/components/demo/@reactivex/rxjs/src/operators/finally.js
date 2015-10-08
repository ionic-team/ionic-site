System.register('rxjs/src/operators/finally', ['../Subscriber', '../Subscription', '../util/bindCallback'], function (_export) {
    'use strict';

    var Subscriber, Subscription, bindCallback, FinallyOperator, FinallySubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', _finally);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _finally(finallySelector, thisArg) {
        return this.lift(new FinallyOperator(thisArg ? bindCallback(finallySelector, thisArg, 2) : finallySelector));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_utilBindCallback) {
            bindCallback = _utilBindCallback['default'];
        }],
        execute: function () {
            FinallyOperator = (function () {
                function FinallyOperator(finallySelector) {
                    _classCallCheck(this, FinallyOperator);

                    this.finallySelector = finallySelector;
                }

                _createClass(FinallyOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new FinallySubscriber(subscriber, this.finallySelector);
                    }
                }]);

                return FinallyOperator;
            })();

            FinallySubscriber = (function (_Subscriber) {
                _inherits(FinallySubscriber, _Subscriber);

                function FinallySubscriber(destination, finallySelector) {
                    _classCallCheck(this, FinallySubscriber);

                    _get(Object.getPrototypeOf(FinallySubscriber.prototype), 'constructor', this).call(this, destination);
                    this.add(new Subscription(finallySelector));
                }

                return FinallySubscriber;
            })(Subscriber);
        }
    };
});