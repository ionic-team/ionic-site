System.register('rxjs/src/operators/defaultIfEmpty', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, DefaultIfEmptyOperator, DefaultIfEmptySubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', defaultIfEmpty);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function defaultIfEmpty() {
        var defaultValue = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

        return this.lift(new DefaultIfEmptyOperator(defaultValue));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            DefaultIfEmptyOperator = (function () {
                function DefaultIfEmptyOperator(defaultValue) {
                    _classCallCheck(this, DefaultIfEmptyOperator);

                    this.defaultValue = defaultValue;
                }

                _createClass(DefaultIfEmptyOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
                    }
                }]);

                return DefaultIfEmptyOperator;
            })();

            DefaultIfEmptySubscriber = (function (_Subscriber) {
                _inherits(DefaultIfEmptySubscriber, _Subscriber);

                function DefaultIfEmptySubscriber(destination, defaultValue) {
                    _classCallCheck(this, DefaultIfEmptySubscriber);

                    _get(Object.getPrototypeOf(DefaultIfEmptySubscriber.prototype), 'constructor', this).call(this, destination);
                    this.defaultValue = defaultValue;
                    this.isEmpty = true;
                }

                _createClass(DefaultIfEmptySubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        this.isEmpty = false;
                        this.destination.next(x);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        if (this.isEmpty) {
                            this.destination.next(this.defaultValue);
                        }
                        this.destination.complete();
                    }
                }]);

                return DefaultIfEmptySubscriber;
            })(Subscriber);
        }
    };
});