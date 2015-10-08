'use strict';

exports.__esModule = true;
exports['default'] = bufferWhen;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
}

var BufferWhenOperator = (function () {
    function BufferWhenOperator(closingSelector) {
        _classCallCheck(this, BufferWhenOperator);

        this.closingSelector = closingSelector;
    }

    BufferWhenOperator.prototype.call = function call(subscriber) {
        return new BufferWhenSubscriber(subscriber, this.closingSelector);
    };

    return BufferWhenOperator;
})();

var BufferWhenSubscriber = (function (_Subscriber) {
    _inherits(BufferWhenSubscriber, _Subscriber);

    function BufferWhenSubscriber(destination, closingSelector) {
        _classCallCheck(this, BufferWhenSubscriber);

        _Subscriber.call(this, destination);
        this.closingSelector = closingSelector;
        this.openBuffer();
    }

    BufferWhenSubscriber.prototype._next = function _next(value) {
        this.buffer.push(value);
    };

    BufferWhenSubscriber.prototype._error = function _error(err) {
        this.buffer = null;
        this.destination.error(err);
    };

    BufferWhenSubscriber.prototype._complete = function _complete() {
        var buffer = this.buffer;
        this.destination.next(buffer);
        this.buffer = null;
        this.destination.complete();
    };

    BufferWhenSubscriber.prototype.openBuffer = function openBuffer() {
        var prevClosingNotification = this.closingNotification;
        if (prevClosingNotification) {
            this.remove(prevClosingNotification);
            prevClosingNotification.unsubscribe();
        }
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = _utilTryCatch2['default'](this.closingSelector)();
        if (closingNotifier === _utilErrorObject.errorObject) {
            var err = closingNotifier.e;
            this.buffer = null;
            this.destination.error(err);
        } else {
            this.add(this.closingNotification = closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
        }
    };

    return BufferWhenSubscriber;
})(_Subscriber4['default']);

var BufferClosingNotifierSubscriber = (function (_Subscriber2) {
    _inherits(BufferClosingNotifierSubscriber, _Subscriber2);

    function BufferClosingNotifierSubscriber(parent) {
        _classCallCheck(this, BufferClosingNotifierSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
    }

    BufferClosingNotifierSubscriber.prototype._next = function _next() {
        this.parent.openBuffer();
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