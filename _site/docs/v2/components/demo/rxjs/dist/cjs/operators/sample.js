'use strict';

exports.__esModule = true;
exports['default'] = sample;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
}

var SampleOperator = (function () {
    function SampleOperator(notifier) {
        _classCallCheck(this, SampleOperator);

        this.notifier = notifier;
    }

    SampleOperator.prototype.call = function call(subscriber) {
        return new SampleSubscriber(subscriber, this.notifier);
    };

    return SampleOperator;
})();

var SampleSubscriber = (function (_Subscriber) {
    _inherits(SampleSubscriber, _Subscriber);

    function SampleSubscriber(destination, notifier) {
        _classCallCheck(this, SampleSubscriber);

        _Subscriber.call(this, destination);
        this.notifier = notifier;
        this.hasValue = false;
        this.add(notifier._subscribe(new SampleNoficationSubscriber(this)));
    }

    SampleSubscriber.prototype._next = function _next(value) {
        this.lastValue = value;
        this.hasValue = true;
    };

    SampleSubscriber.prototype.notifyNext = function notifyNext() {
        if (this.hasValue) {
            this.destination.next(this.lastValue);
        }
    };

    return SampleSubscriber;
})(_Subscriber4['default']);

var SampleNoficationSubscriber = (function (_Subscriber2) {
    _inherits(SampleNoficationSubscriber, _Subscriber2);

    function SampleNoficationSubscriber(parent) {
        _classCallCheck(this, SampleNoficationSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
    }

    SampleNoficationSubscriber.prototype._next = function _next() {
        this.parent.notifyNext();
    };

    SampleNoficationSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    SampleNoficationSubscriber.prototype._complete = function _complete() {
        //noop
    };

    return SampleNoficationSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];