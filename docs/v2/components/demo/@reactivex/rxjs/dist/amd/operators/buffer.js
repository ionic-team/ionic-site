var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = buffer;
    var BufferOperator = (function () {
        function BufferOperator(closingNotifier) {
            this.closingNotifier = closingNotifier;
        }
        BufferOperator.prototype.call = function (subscriber) {
            return new BufferSubscriber(subscriber, this.closingNotifier);
        };
        return BufferOperator;
    })();
    var BufferSubscriber = (function (_super) {
        __extends(BufferSubscriber, _super);
        function BufferSubscriber(destination, closingNotifier) {
            _super.call(this, destination);
            this.buffer = [];
            this.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
        }
        BufferSubscriber.prototype._next = function (value) {
            this.buffer.push(value);
        };
        BufferSubscriber.prototype._error = function (err) {
            this.destination.error(err);
        };
        BufferSubscriber.prototype._complete = function () {
            this.flushBuffer();
            this.destination.complete();
        };
        BufferSubscriber.prototype.flushBuffer = function () {
            var buffer = this.buffer;
            this.buffer = [];
            this.destination.next(buffer);
        };
        return BufferSubscriber;
    })(Subscriber_1.default);
    var BufferClosingNotifierSubscriber = (function (_super) {
        __extends(BufferClosingNotifierSubscriber, _super);
        function BufferClosingNotifierSubscriber(parent) {
            _super.call(this, null);
            this.parent = parent;
        }
        BufferClosingNotifierSubscriber.prototype._next = function (value) {
            this.parent.flushBuffer();
        };
        BufferClosingNotifierSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        BufferClosingNotifierSubscriber.prototype._complete = function () {
            // noop
        };
        return BufferClosingNotifierSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=buffer.js.map