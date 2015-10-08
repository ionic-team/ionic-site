'use strict';

exports.__esModule = true;
exports['default'] = toArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function toArray() {
    return this.lift(new ToArrayOperator());
}

var ToArrayOperator = (function () {
    function ToArrayOperator() {
        _classCallCheck(this, ToArrayOperator);
    }

    ToArrayOperator.prototype.call = function call(subscriber) {
        return new ToArraySubscriber(subscriber);
    };

    return ToArrayOperator;
})();

var ToArraySubscriber = (function (_Subscriber) {
    _inherits(ToArraySubscriber, _Subscriber);

    function ToArraySubscriber(destination) {
        _classCallCheck(this, ToArraySubscriber);

        _Subscriber.call(this, destination);
        this.array = [];
    }

    ToArraySubscriber.prototype._next = function _next(x) {
        this.array.push(x);
    };

    ToArraySubscriber.prototype._complete = function _complete() {
        this.destination.next(this.array);
        this.destination.complete();
    };

    return ToArraySubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];