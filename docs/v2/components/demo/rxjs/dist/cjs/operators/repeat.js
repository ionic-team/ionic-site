'use strict';

exports.__esModule = true;
exports['default'] = repeat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function repeat(count) {
    return this.lift(new RepeatOperator(count, this));
}

var RepeatOperator = (function () {
    function RepeatOperator(count, original) {
        _classCallCheck(this, RepeatOperator);

        this.count = count;
        this.original = original;
    }

    RepeatOperator.prototype.call = function call(subscriber) {
        return new RepeatSubscriber(subscriber, this.count, this.original);
    };

    return RepeatOperator;
})();

var RepeatSubscriber = (function (_Subscriber) {
    _inherits(RepeatSubscriber, _Subscriber);

    function RepeatSubscriber(destination, count, original) {
        _classCallCheck(this, RepeatSubscriber);

        _Subscriber.call(this, destination);
        this.count = count;
        this.original = original;
        this.repeated = 0;
    }

    RepeatSubscriber.prototype._complete = function _complete() {
        if (this.count === (this.repeated += 1)) {
            this.destination.complete();
        } else {
            this.resubscribe();
        }
    };

    RepeatSubscriber.prototype.resubscribe = function resubscribe() {
        this.original.subscribe(this);
    };

    return RepeatSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];