var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Subject', '../Subscription', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, Subject_1, Subscription_1, tryCatch_1, errorObject_1) {
    function windowToggle(openings, closingSelector) {
        return this.lift(new WindowToggleOperator(openings, closingSelector));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = windowToggle;
    var WindowToggleOperator = (function () {
        function WindowToggleOperator(openings, closingSelector) {
            this.openings = openings;
            this.closingSelector = closingSelector;
        }
        WindowToggleOperator.prototype.call = function (subscriber) {
            return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
        };
        return WindowToggleOperator;
    })();
    var WindowToggleSubscriber = (function (_super) {
        __extends(WindowToggleSubscriber, _super);
        function WindowToggleSubscriber(destination, openings, closingSelector) {
            _super.call(this, destination);
            this.openings = openings;
            this.closingSelector = closingSelector;
            this.windows = [];
            this.add(this.openings._subscribe(new WindowToggleOpeningsSubscriber(this)));
        }
        WindowToggleSubscriber.prototype._next = function (value) {
            var windows = this.windows;
            var len = windows.length;
            for (var i = 0; i < len; i++) {
                windows[i].next(value);
            }
        };
        WindowToggleSubscriber.prototype._error = function (err) {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            this.destination.error(err);
        };
        WindowToggleSubscriber.prototype._complete = function () {
            var windows = this.windows;
            while (windows.length > 0) {
                windows.shift().complete();
            }
            this.destination.complete();
        };
        WindowToggleSubscriber.prototype.openWindow = function (value) {
            var window = new Subject_1.default();
            this.windows.push(window);
            this.destination.next(window);
            var windowContext = {
                window: window,
                subscription: new Subscription_1.default()
            };
            var closingSelector = this.closingSelector;
            var closingNotifier = tryCatch_1.default(closingSelector)(value);
            if (closingNotifier === errorObject_1.errorObject) {
                this.error(closingNotifier.e);
            }
            else {
                this.add(windowContext.subscription.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this, windowContext))));
            }
        };
        WindowToggleSubscriber.prototype.closeWindow = function (windowContext) {
            var window = windowContext.window, subscription = windowContext.subscription;
            var windows = this.windows;
            windows.splice(windows.indexOf(window), 1);
            window.complete();
            this.remove(subscription);
        };
        return WindowToggleSubscriber;
    })(Subscriber_1.default);
    var WindowClosingNotifierSubscriber = (function (_super) {
        __extends(WindowClosingNotifierSubscriber, _super);
        function WindowClosingNotifierSubscriber(parent, windowContext) {
            _super.call(this, null);
            this.parent = parent;
            this.windowContext = windowContext;
        }
        WindowClosingNotifierSubscriber.prototype._next = function () {
            this.parent.closeWindow(this.windowContext);
        };
        WindowClosingNotifierSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        WindowClosingNotifierSubscriber.prototype._complete = function () {
            // noop
        };
        return WindowClosingNotifierSubscriber;
    })(Subscriber_1.default);
    var WindowToggleOpeningsSubscriber = (function (_super) {
        __extends(WindowToggleOpeningsSubscriber, _super);
        function WindowToggleOpeningsSubscriber(parent) {
            _super.call(this);
            this.parent = parent;
        }
        WindowToggleOpeningsSubscriber.prototype._next = function (value) {
            this.parent.openWindow(value);
        };
        WindowToggleOpeningsSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        WindowToggleOpeningsSubscriber.prototype._complete = function () {
            // noop
        };
        return WindowToggleOpeningsSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=windowToggle.js.map