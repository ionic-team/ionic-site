'use strict';

exports.__esModule = true;
exports['default'] = mapTo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

/**
 * Maps every value to the same value every time.
 * @param {any} value the value to map each incoming value to
 * @returns {Observable} an observable of the passed value that emits everytime the source does
 */

function mapTo(value) {
    return this.lift(new MapToOperator(value));
}

var MapToOperator = (function () {
    function MapToOperator(value) {
        _classCallCheck(this, MapToOperator);

        this.value = value;
    }

    MapToOperator.prototype.call = function call(subscriber) {
        return new MapToSubscriber(subscriber, this.value);
    };

    return MapToOperator;
})();

var MapToSubscriber = (function (_Subscriber) {
    _inherits(MapToSubscriber, _Subscriber);

    function MapToSubscriber(destination, value) {
        _classCallCheck(this, MapToSubscriber);

        _Subscriber.call(this, destination);
        this.value = value;
    }

    MapToSubscriber.prototype._next = function _next(x) {
        this.destination.next(this.value);
    };

    return MapToSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];