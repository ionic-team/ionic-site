System.register('rxjs/src/operators/mapTo', ['../Subscriber'], function (_export) {
    /**
     * Maps every value to the same value every time.
     * @param {any} value the value to map each incoming value to
     * @returns {Observable} an observable of the passed value that emits everytime the source does
     */
    'use strict';

    var Subscriber, MapToOperator, MapToSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', mapTo);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function mapTo(value) {
        return this.lift(new MapToOperator(value));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            MapToOperator = (function () {
                function MapToOperator(value) {
                    _classCallCheck(this, MapToOperator);

                    this.value = value;
                }

                _createClass(MapToOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new MapToSubscriber(subscriber, this.value);
                    }
                }]);

                return MapToOperator;
            })();

            MapToSubscriber = (function (_Subscriber) {
                _inherits(MapToSubscriber, _Subscriber);

                function MapToSubscriber(destination, value) {
                    _classCallCheck(this, MapToSubscriber);

                    _get(Object.getPrototypeOf(MapToSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.value = value;
                }

                _createClass(MapToSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        this.destination.next(this.value);
                    }
                }]);

                return MapToSubscriber;
            })(Subscriber);
        }
    };
});