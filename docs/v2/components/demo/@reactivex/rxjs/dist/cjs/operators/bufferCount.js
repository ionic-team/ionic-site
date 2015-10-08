'use strict';

exports.__esModule = true;
exports['default'] = bufferCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

function bufferCount(bufferSize) {
    var startBufferEvery = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
}

var BufferCountOperator = (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        _classCallCheck(this, BufferCountOperator);

        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
    }

    BufferCountOperator.prototype.call = function call(subscriber) {
        return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
    };

    return BufferCountOperator;
})();

var BufferCountSubscriber = (function (_Subscriber) {
    _inherits(BufferCountSubscriber, _Subscriber);

    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
        _classCallCheck(this, BufferCountSubscriber);

        _Subscriber.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [[]];
        this.count = 0;
    }

    BufferCountSubscriber.prototype._next = function _next(value) {
        var count = this.count += 1;
        var destination = this.destination;
        var bufferSize = this.bufferSize;
        var startBufferEvery = this.startBufferEvery == null ? bufferSize : this.startBufferEvery;
        var buffers = this.buffers;
        var len = buffers.length;
        var remove = -1;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = 0; i < len; i++) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                remove = i;
                this.destination.next(buffer);
            }
        }
        if (remove !== -1) {
            buffers.splice(remove, 1);
        }
    };

    BufferCountSubscriber.prototype._error = function _error(err) {
        this.destination.error(err);
    };

    BufferCountSubscriber.prototype._complete = function _complete() {
        var destination = this.destination;
        var buffers = this.buffers;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        destination.complete();
    };

    return BufferCountSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];