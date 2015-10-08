'use strict';

exports.__esModule = true;
exports['default'] = skip;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function skip(total) {
    return this.lift(new SkipOperator(total));
}

var SkipOperator = (function () {
    function SkipOperator(total) {
        _classCallCheck(this, SkipOperator);

        this.total = total;
    }

    SkipOperator.prototype.call = function call(subscriber) {
        return new SkipSubscriber(subscriber, this.total);
    };

    return SkipOperator;
})();

var SkipSubscriber = (function (_Subscriber) {
    _inherits(SkipSubscriber, _Subscriber);

    function SkipSubscriber(destination, total) {
        _classCallCheck(this, SkipSubscriber);

        _Subscriber.call(this, destination);
        this.count = 0;
        this.total = total;
    }

    SkipSubscriber.prototype._next = function _next(x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };

    return SkipSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];