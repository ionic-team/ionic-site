var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Subject'], function (require, exports, Subscriber_1, Subject_1) {
    function windowCount(windowSize, startWindowEvery) {
        if (startWindowEvery === void 0) { startWindowEvery = 0; }
        return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = windowCount;
    var WindowCountOperator = (function () {
        function WindowCountOperator(windowSize, startWindowEvery) {
            this.windowSize = windowSize;
            this.startWindowEvery = startWindowEvery;
        }
        WindowCountOperator.prototype.call = function (subscriber) {
            return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
        };
        return WindowCountOperator;
    })();
    var WindowCountSubscriber = (function (_super) {
        __extends(WindowCountSubscriber, _super);
        function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
            _super.call(this, destination);
            this.windowSize = windowSize;
            this.startWindowEvery = startWindowEvery;
            this.windows = [{ count: 0, notified: false, window: new Subject_1.default() }];
            this.count = 0;
        }
        WindowCountSubscriber.prototype._next = function (value) {
            var count = (this.count += 1);
            var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
            var windowSize = this.windowSize;
            var windows = this.windows;
            var len = windows.length;
            if (count % startWindowEvery === 0) {
                var window_1 = new Subject_1.default();
                windows.push({ count: 0, notified: false, window: window_1 });
            }
            for (var i = 0; i < len; i++) {
                var w = windows[i];
                var window_2 = w.window;
                if (!w.notified) {
                    w.notified = true;
                    this.destination.next(window_2);
                }
                window_2.next(value);
                if (windowSize === (w.count += 1)) {
                    window_2.complete();
                }
            }
        };
        WindowCountSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().window.error(err);
            }
            this.destination.error(err);
        };
        WindowCountSubscriber.prototype._complete = function () {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().window.complete();
            }
            this.destination.complete();
        };
        return WindowCountSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=windowCount.js.map