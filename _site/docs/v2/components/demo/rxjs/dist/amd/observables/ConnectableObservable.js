var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../Subscription'], function (require, exports, Observable_1, Subscription_1) {
    var ConnectableObservable = (function (_super) {
        __extends(ConnectableObservable, _super);
        function ConnectableObservable(source, subjectFactory) {
            _super.call(this);
            this.source = source;
            this.subjectFactory = subjectFactory;
        }
        ConnectableObservable.prototype._subscribe = function (subscriber) {
            return this._getSubject().subscribe(subscriber);
        };
        ConnectableObservable.prototype._getSubject = function () {
            var subject = this.subject;
            if (subject && !subject.isUnsubscribed) {
                return subject;
            }
            return (this.subject = this.subjectFactory());
        };
        ConnectableObservable.prototype.connect = function () {
            var source = this.source;
            var subscription = this.subscription;
            if (subscription && !subscription.isUnsubscribed) {
                return subscription;
            }
            subscription = source.subscribe(this._getSubject());
            subscription.add(new ConnectableSubscription(this));
            return (this.subscription = subscription);
        };
        ConnectableObservable.prototype.refCount = function () {
            return new RefCountObservable(this);
        };
        return ConnectableObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ConnectableObservable;
    var ConnectableSubscription = (function (_super) {
        __extends(ConnectableSubscription, _super);
        function ConnectableSubscription(connectable) {
            _super.call(this);
            this.connectable = connectable;
        }
        ConnectableSubscription.prototype._unsubscribe = function () {
            var connectable = this.connectable;
            connectable.subject = void 0;
            connectable.subscription = void 0;
            this.connectable = void 0;
        };
        return ConnectableSubscription;
    })(Subscription_1.default);
    var RefCountObservable = (function (_super) {
        __extends(RefCountObservable, _super);
        function RefCountObservable(connectable, refCount) {
            if (refCount === void 0) { refCount = 0; }
            _super.call(this);
            this.connectable = connectable;
            this.refCount = refCount;
        }
        RefCountObservable.prototype._subscribe = function (subscriber) {
            var connectable = this.connectable;
            var subscription = connectable.subscribe(subscriber);
            if (++this.refCount === 1) {
                this.connection = connectable.connect();
            }
            subscription.add(new RefCountSubscription(this));
            return subscription;
        };
        return RefCountObservable;
    })(Observable_1.default);
    var RefCountSubscription = (function (_super) {
        __extends(RefCountSubscription, _super);
        function RefCountSubscription(refCountObservable) {
            _super.call(this);
            this.refCountObservable = refCountObservable;
        }
        RefCountSubscription.prototype._unsubscribe = function () {
            var observable = this.refCountObservable;
            if (--observable.refCount === 0) {
                observable.connection.unsubscribe();
                observable.connection = void 0;
            }
        };
        return RefCountSubscription;
    })(Subscription_1.default);
});
//# sourceMappingURL=ConnectableObservable.js.map