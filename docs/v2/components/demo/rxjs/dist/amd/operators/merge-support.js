var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    var MergeOperator = (function () {
        function MergeOperator(concurrent) {
            if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
            this.concurrent = concurrent;
        }
        MergeOperator.prototype.call = function (subscriber) {
            return new MergeSubscriber(subscriber, this.concurrent);
        };
        return MergeOperator;
    })();
    exports.MergeOperator = MergeOperator;
    var MergeSubscriber = (function (_super) {
        __extends(MergeSubscriber, _super);
        function MergeSubscriber(destination, concurrent) {
            _super.call(this, destination);
            this.count = 0;
            this.active = 0;
            this.stopped = false;
            this.buffer = [];
            this.concurrent = concurrent;
        }
        MergeSubscriber.prototype._next = function (value) {
            var active = this.active;
            if (active < this.concurrent) {
                var index = this.count;
                var observable = this._project(value, index);
                if (observable) {
                    this.count = index + 1;
                    this.active = active + 1;
                    this.add(this._subscribeInner(observable, value, index));
                }
            }
            else {
                this._buffer(value);
            }
        };
        MergeSubscriber.prototype.complete = function () {
            this.stopped = true;
            if (this.active === 0 && this.buffer.length === 0) {
                _super.prototype.complete.call(this);
            }
        };
        MergeSubscriber.prototype._unsubscribe = function () {
            this.buffer = void 0;
        };
        MergeSubscriber.prototype._project = function (value, index) {
            return value;
        };
        MergeSubscriber.prototype._buffer = function (value) {
            this.buffer.push(value);
        };
        MergeSubscriber.prototype._subscribeInner = function (observable, value, index) {
            var destination = this.destination;
            if (observable._isScalar) {
                destination.next(observable.value);
                this._innerComplete();
            }
            else {
                var subscriber = new MergeInnerSubscriber(destination, this);
                observable._subscribe(subscriber);
                return subscriber;
            }
        };
        MergeSubscriber.prototype._innerComplete = function () {
            var buffer = this.buffer;
            var active = this.active -= 1;
            var stopped = this.stopped;
            var pending = buffer.length;
            if (stopped && active === 0 && pending === 0) {
                _super.prototype.complete.call(this);
            }
            else if (active < this.concurrent && pending > 0) {
                this._next(buffer.shift());
            }
        };
        return MergeSubscriber;
    })(Subscriber_1.default);
    exports.MergeSubscriber = MergeSubscriber;
    var MergeInnerSubscriber = (function (_super) {
        __extends(MergeInnerSubscriber, _super);
        function MergeInnerSubscriber(destination, parent) {
            _super.call(this, destination);
            this.parent = parent;
        }
        MergeInnerSubscriber.prototype._complete = function () {
            this.parent._innerComplete();
        };
        return MergeInnerSubscriber;
    })(Subscriber_1.default);
    exports.MergeInnerSubscriber = MergeInnerSubscriber;
});
//# sourceMappingURL=merge-support.js.map