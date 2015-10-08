'use strict';

exports.__esModule = true;
exports['default'] = buffer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

/**
 * buffers the incoming observable values until the passed `closingNotifier` emits a value, at which point
 * it emits the buffer on the returned observable and starts a new buffer internally, awaiting the
 * next time `closingNotifier` emits
 *
 * @param {Observable<any>} closingNotifier an observable, that signals the buffer to be emitted from the returned observable
 * @returns {Observable<T[]>} an observable of buffers, which are arrays of values
 */

function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
}

var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        _classCallCheck(this, BufferOperator);

        this.closingNotifier = closingNotifier;
    }

    BufferOperator.prototype.call = function call(subscriber) {
        return new BufferSubscriber(subscriber, this.closingNotifier);
    };

    return BufferOperator;
})();

var BufferSubscriber = (function (_Subscriber) {
    _inherits(BufferSubscriber, _Subscriber);

    function BufferSubscriber(destination, closingNotifier) {
        _classCallCheck(this, BufferSubscriber);

        _Subscriber.call(this, destination);
        this.buffer = [];
        this.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
    }

    BufferSubscriber.prototype._next = function _next(value) {
        this.buffer.push(value);
    };

    BufferSubscriber.prototype._error = function _error(err) {
        this.destination.error(err);
    };

    BufferSubscriber.prototype._complete = function _complete() {
        this.flushBuffer();
        this.destination.complete();
    };

    BufferSubscriber.prototype.flushBuffer = function flushBuffer() {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };

    return BufferSubscriber;
})(_Subscriber4['default']);

var BufferClosingNotifierSubscriber = (function (_Subscriber2) {
    _inherits(BufferClosingNotifierSubscriber, _Subscriber2);

    function BufferClosingNotifierSubscriber(parent) {
        _classCallCheck(this, BufferClosingNotifierSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
    }

    BufferClosingNotifierSubscriber.prototype._next = function _next(value) {
        this.parent.flushBuffer();
    };

    BufferClosingNotifierSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    BufferClosingNotifierSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return BufferClosingNotifierSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];