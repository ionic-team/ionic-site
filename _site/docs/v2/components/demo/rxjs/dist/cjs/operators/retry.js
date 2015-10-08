'use strict';

exports.__esModule = true;
exports['default'] = retry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function retry() {
    var count = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return this.lift(new RetryOperator(count, this));
}

var RetryOperator = (function () {
    function RetryOperator(count, original) {
        _classCallCheck(this, RetryOperator);

        this.count = count;
        this.original = original;
    }

    RetryOperator.prototype.call = function call(subscriber) {
        return new RetrySubscriber(subscriber, this.count, this.original);
    };

    return RetryOperator;
})();

var RetrySubscriber = (function (_Subscriber) {
    _inherits(RetrySubscriber, _Subscriber);

    function RetrySubscriber(destination, count, original) {
        _classCallCheck(this, RetrySubscriber);

        _Subscriber.call(this, destination);
        this.count = count;
        this.original = original;
        this.retries = 0;
    }

    RetrySubscriber.prototype._error = function _error(err) {
        var count = this.count;
        if (count && count === (this.retries += 1)) {
            this.destination.error(err);
        } else {
            this.resubscribe();
        }
    };

    RetrySubscriber.prototype.resubscribe = function resubscribe() {
        this.original.subscribe(this);
    };

    return RetrySubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];