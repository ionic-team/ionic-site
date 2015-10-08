'use strict';

exports.__esModule = true;
exports['default'] = defaultIfEmpty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function defaultIfEmpty() {
    var defaultValue = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    return this.lift(new DefaultIfEmptyOperator(defaultValue));
}

var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        _classCallCheck(this, DefaultIfEmptyOperator);

        this.defaultValue = defaultValue;
    }

    DefaultIfEmptyOperator.prototype.call = function call(subscriber) {
        return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
    };

    return DefaultIfEmptyOperator;
})();

var DefaultIfEmptySubscriber = (function (_Subscriber) {
    _inherits(DefaultIfEmptySubscriber, _Subscriber);

    function DefaultIfEmptySubscriber(destination, defaultValue) {
        _classCallCheck(this, DefaultIfEmptySubscriber);

        _Subscriber.call(this, destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }

    DefaultIfEmptySubscriber.prototype._next = function _next(x) {
        this.isEmpty = false;
        this.destination.next(x);
    };

    DefaultIfEmptySubscriber.prototype._complete = function _complete() {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };

    return DefaultIfEmptySubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];