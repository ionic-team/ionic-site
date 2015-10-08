'use strict';

exports.__esModule = true;
exports['default'] = count;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function count() {
    return this.lift(new CountOperator());
}

var CountOperator = (function () {
    function CountOperator() {
        _classCallCheck(this, CountOperator);
    }

    CountOperator.prototype.call = function call(subscriber) {
        return new CountSubscriber(subscriber);
    };

    return CountOperator;
})();

var CountSubscriber = (function (_Subscriber) {
    _inherits(CountSubscriber, _Subscriber);

    function CountSubscriber(destination) {
        _classCallCheck(this, CountSubscriber);

        _Subscriber.call(this, destination);
        this.count = 0;
    }

    CountSubscriber.prototype._next = function _next(x) {
        this.count += 1;
    };

    CountSubscriber.prototype._complete = function _complete() {
        this.destination.next(this.count);
        this.destination.complete();
    };

    return CountSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];