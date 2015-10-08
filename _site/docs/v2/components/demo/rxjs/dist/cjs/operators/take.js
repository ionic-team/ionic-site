'use strict';

exports.__esModule = true;
exports['default'] = take;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function take(total) {
    return this.lift(new TakeOperator(total));
}

var TakeOperator = (function () {
    function TakeOperator(total) {
        _classCallCheck(this, TakeOperator);

        this.total = total;
    }

    TakeOperator.prototype.call = function call(subscriber) {
        return new TakeSubscriber(subscriber, this.total);
    };

    return TakeOperator;
})();

var TakeSubscriber = (function (_Subscriber) {
    _inherits(TakeSubscriber, _Subscriber);

    function TakeSubscriber(destination, total) {
        _classCallCheck(this, TakeSubscriber);

        _Subscriber.call(this, destination);
        this.count = 0;
        this.total = total;
    }

    TakeSubscriber.prototype._next = function _next(x) {
        var total = this.total;
        if (++this.count <= total) {
            this.destination.next(x);
            if (this.count === total) {
                this.destination.complete();
            }
        }
    };

    return TakeSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];