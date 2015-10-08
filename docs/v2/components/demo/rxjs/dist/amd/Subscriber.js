var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './util/noop', './util/throwError', './util/tryOrOnError', './Subscription'], function (require, exports, noop_1, throwError_1, tryOrOnError_1, Subscription_1) {
    var Subscriber = (function (_super) {
        __extends(Subscriber, _super);
        function Subscriber(destination) {
            _super.call(this);
            this._isUnsubscribed = false;
            this.destination = destination;
            if (!destination) {
                return;
            }
            var subscription = destination._subscription;
            if (subscription) {
                this._subscription = subscription;
            }
            else if (destination instanceof Subscriber) {
                this._subscription = destination;
            }
        }
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber();
            subscriber._next = (typeof next === "function") && tryOrOnError_1.default(next) || noop_1.default;
            subscriber._error = (typeof error === "function") && error || throwError_1.default;
            subscriber._complete = (typeof complete === "function") && complete || noop_1.default;
            return subscriber;
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
        };
        Object.defineProperty(Subscriber.prototype, "isUnsubscribed", {
            get: function () {
                var subscription = this._subscription;
                if (subscription) {
                    // route to the shared Subscription if it exists
                    return this._isUnsubscribed || subscription.isUnsubscribed;
                }
                else {
                    return this._isUnsubscribed;
                }
            },
            set: function (value) {
                var subscription = this._subscription;
                if (subscription) {
                    // route to the shared Subscription if it exists
                    subscription.isUnsubscribed = Boolean(value);
                }
                else {
                    this._isUnsubscribed = Boolean(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Subscriber.prototype.add = function (sub) {
            // route add to the shared Subscription if it exists
            var _subscription = this._subscription;
            if (_subscription) {
                _subscription.add(sub);
            }
            else {
                _super.prototype.add.call(this, sub);
            }
        };
        Subscriber.prototype.remove = function (sub) {
            // route remove to the shared Subscription if it exists
            if (this._subscription) {
                this._subscription.remove(sub);
            }
            else {
                _super.prototype.remove.call(this, sub);
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this._isUnsubscribed) {
                return;
            }
            else if (this._subscription) {
                this._isUnsubscribed = true;
            }
            else {
                _super.prototype.unsubscribe.call(this);
            }
        };
        Subscriber.prototype.next = function (value) {
            if (!this.isUnsubscribed) {
                this._next(value);
            }
        };
        Subscriber.prototype.error = function (error) {
            if (!this.isUnsubscribed) {
                this._error(error);
                this.unsubscribe();
            }
        };
        Subscriber.prototype.complete = function () {
            if (!this.isUnsubscribed) {
                this._complete();
                this.unsubscribe();
            }
        };
        return Subscriber;
    })(Subscription_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Subscriber;
});
//# sourceMappingURL=Subscriber.js.map