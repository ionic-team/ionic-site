'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var MergeOperator = (function () {
    function MergeOperator() {
        var concurrent = arguments.length <= 0 || arguments[0] === undefined ? Number.POSITIVE_INFINITY : arguments[0];

        _classCallCheck(this, MergeOperator);

        this.concurrent = concurrent;
    }

    MergeOperator.prototype.call = function call(subscriber) {
        return new MergeSubscriber(subscriber, this.concurrent);
    };

    return MergeOperator;
})();

exports.MergeOperator = MergeOperator;

var MergeSubscriber = (function (_Subscriber) {
    _inherits(MergeSubscriber, _Subscriber);

    function MergeSubscriber(destination, concurrent) {
        _classCallCheck(this, MergeSubscriber);

        _Subscriber.call(this, destination);
        this.count = 0;
        this.active = 0;
        this.stopped = false;
        this.buffer = [];
        this.concurrent = concurrent;
    }

    MergeSubscriber.prototype._next = function _next(value) {
        var active = this.active;
        if (active < this.concurrent) {
            var index = this.count;
            var observable = this._project(value, index);
            if (observable) {
                this.count = index + 1;
                this.active = active + 1;
                this.add(this._subscribeInner(observable, value, index));
            }
        } else {
            this._buffer(value);
        }
    };

    MergeSubscriber.prototype.complete = function complete() {
        this.stopped = true;
        if (this.active === 0 && this.buffer.length === 0) {
            _Subscriber.prototype.complete.call(this);
        }
    };

    MergeSubscriber.prototype._unsubscribe = function _unsubscribe() {
        this.buffer = void 0;
    };

    MergeSubscriber.prototype._project = function _project(value, index) {
        return value;
    };

    MergeSubscriber.prototype._buffer = function _buffer(value) {
        this.buffer.push(value);
    };

    MergeSubscriber.prototype._subscribeInner = function _subscribeInner(observable, value, index) {
        var destination = this.destination;
        if (observable._isScalar) {
            destination.next(observable.value);
            this._innerComplete();
        } else {
            var subscriber = new MergeInnerSubscriber(destination, this);
            observable._subscribe(subscriber);
            return subscriber;
        }
    };

    MergeSubscriber.prototype._innerComplete = function _innerComplete() {
        var buffer = this.buffer;
        var active = this.active -= 1;
        var stopped = this.stopped;
        var pending = buffer.length;
        if (stopped && active === 0 && pending === 0) {
            _Subscriber.prototype.complete.call(this);
        } else if (active < this.concurrent && pending > 0) {
            this._next(buffer.shift());
        }
    };

    return MergeSubscriber;
})(_Subscriber4['default']);

exports.MergeSubscriber = MergeSubscriber;

var MergeInnerSubscriber = (function (_Subscriber2) {
    _inherits(MergeInnerSubscriber, _Subscriber2);

    function MergeInnerSubscriber(destination, parent) {
        _classCallCheck(this, MergeInnerSubscriber);

        _Subscriber2.call(this, destination);
        this.parent = parent;
    }

    MergeInnerSubscriber.prototype._complete = function _complete() {
        this.parent._innerComplete();
    };

    return MergeInnerSubscriber;
})(_Subscriber4['default']);

exports.MergeInnerSubscriber = MergeInnerSubscriber;