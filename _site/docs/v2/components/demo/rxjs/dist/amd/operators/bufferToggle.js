var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Subscription', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, Subscription_1, tryCatch_1, errorObject_1) {
    function bufferToggle(openings, closingSelector) {
        return this.lift(new BufferToggleOperator(openings, closingSelector));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = bufferToggle;
    var BufferToggleOperator = (function () {
        function BufferToggleOperator(openings, closingSelector) {
            this.openings = openings;
            this.closingSelector = closingSelector;
        }
        BufferToggleOperator.prototype.call = function (subscriber) {
            return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
        };
        return BufferToggleOperator;
    })();
    var BufferToggleSubscriber = (function (_super) {
        __extends(BufferToggleSubscriber, _super);
        function BufferToggleSubscriber(destination, openings, closingSelector) {
            _super.call(this, destination);
            this.openings = openings;
            this.closingSelector = closingSelector;
            this.buffers = [];
            this.add(this.openings._subscribe(new BufferToggleOpeningsSubscriber(this)));
        }
        BufferToggleSubscriber.prototype._next = function (value) {
            var buffers = this.buffers;
            var len = buffers.length;
            for (var i = 0; i < len; i++) {
                buffers[i].push(value);
            }
        };
        BufferToggleSubscriber.prototype._error = function (err) {
            this.buffers = null;
            this.destination.error(err);
        };
        BufferToggleSubscriber.prototype._complete = function () {
            var buffers = this.buffers;
            while (buffers.length > 0) {
                this.destination.next(buffers.shift());
            }
            this.destination.complete();
        };
        BufferToggleSubscriber.prototype.openBuffer = function (value) {
            var closingSelector = this.closingSelector;
            var buffers = this.buffers;
            var closingNotifier = tryCatch_1.default(closingSelector)(value);
            if (closingNotifier === errorObject_1.errorObject) {
                var err = closingNotifier.e;
                this.buffers = null;
                this.destination.error(err);
            }
            else {
                var buffer = [];
                var context = {
                    buffer: buffer,
                    subscription: new Subscription_1.default()
                };
                buffers.push(buffer);
                this.add(context.subscription.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this, context))));
            }
        };
        BufferToggleSubscriber.prototype.closeBuffer = function (context) {
            var buffer = context.buffer, subscription = context.subscription;
            var buffers = this.buffers;
            this.destination.next(buffer);
            buffers.splice(buffers.indexOf(buffer), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        };
        return BufferToggleSubscriber;
    })(Subscriber_1.default);
    var BufferClosingNotifierSubscriber = (function (_super) {
        __extends(BufferClosingNotifierSubscriber, _super);
        function BufferClosingNotifierSubscriber(parent, context) {
            _super.call(this, null);
            this.parent = parent;
            this.context = context;
        }
        BufferClosingNotifierSubscriber.prototype._next = function () {
            this.parent.closeBuffer(this.context);
        };
        BufferClosingNotifierSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        BufferClosingNotifierSubscriber.prototype._complete = function () {
            // noop
        };
        return BufferClosingNotifierSubscriber;
    })(Subscriber_1.default);
    var BufferToggleOpeningsSubscriber = (function (_super) {
        __extends(BufferToggleOpeningsSubscriber, _super);
        function BufferToggleOpeningsSubscriber(parent) {
            _super.call(this, null);
            this.parent = parent;
        }
        BufferToggleOpeningsSubscriber.prototype._next = function (value) {
            this.parent.openBuffer(value);
        };
        BufferToggleOpeningsSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        BufferToggleOpeningsSubscriber.prototype._complete = function () {
            // noop
        };
        return BufferToggleOpeningsSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=bufferToggle.js.map