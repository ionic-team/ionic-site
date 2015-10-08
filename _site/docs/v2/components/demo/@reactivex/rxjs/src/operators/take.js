System.register('rxjs/src/operators/take', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, TakeOperator, TakeSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', take);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function take(total) {
        return this.lift(new TakeOperator(total));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            TakeOperator = (function () {
                function TakeOperator(total) {
                    _classCallCheck(this, TakeOperator);

                    this.total = total;
                }

                _createClass(TakeOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new TakeSubscriber(subscriber, this.total);
                    }
                }]);

                return TakeOperator;
            })();

            TakeSubscriber = (function (_Subscriber) {
                _inherits(TakeSubscriber, _Subscriber);

                function TakeSubscriber(destination, total) {
                    _classCallCheck(this, TakeSubscriber);

                    _get(Object.getPrototypeOf(TakeSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = 0;
                    this.total = total;
                }

                _createClass(TakeSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var total = this.total;
                        if (++this.count <= total) {
                            this.destination.next(x);
                            if (this.count === total) {
                                this.destination.complete();
                            }
                        }
                    }
                }]);

                return TakeSubscriber;
            })(Subscriber);
        }
    };
});