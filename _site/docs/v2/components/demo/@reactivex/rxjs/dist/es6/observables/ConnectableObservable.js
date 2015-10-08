import Observable from '../Observable';
import Subscription from '../Subscription';
export default class ConnectableObservable extends Observable {
    constructor(source, subjectFactory) {
        super();
        this.source = source;
        this.subjectFactory = subjectFactory;
    }
    _subscribe(subscriber) {
        return this._getSubject().subscribe(subscriber);
    }
    _getSubject() {
        const subject = this.subject;
        if (subject && !subject.isUnsubscribed) {
            return subject;
        }
        return (this.subject = this.subjectFactory());
    }
    connect() {
        const source = this.source;
        let subscription = this.subscription;
        if (subscription && !subscription.isUnsubscribed) {
            return subscription;
        }
        subscription = source.subscribe(this._getSubject());
        subscription.add(new ConnectableSubscription(this));
        return (this.subscription = subscription);
    }
    refCount() {
        return new RefCountObservable(this);
    }
}
class ConnectableSubscription extends Subscription {
    constructor(connectable) {
        super();
        this.connectable = connectable;
    }
    _unsubscribe() {
        const connectable = this.connectable;
        connectable.subject = void 0;
        connectable.subscription = void 0;
        this.connectable = void 0;
    }
}
class RefCountObservable extends Observable {
    constructor(connectable, refCount = 0) {
        super();
        this.connectable = connectable;
        this.refCount = refCount;
    }
    _subscribe(subscriber) {
        const connectable = this.connectable;
        const subscription = connectable.subscribe(subscriber);
        if (++this.refCount === 1) {
            this.connection = connectable.connect();
        }
        subscription.add(new RefCountSubscription(this));
        return subscription;
    }
}
class RefCountSubscription extends Subscription {
    constructor(refCountObservable) {
        super();
        this.refCountObservable = refCountObservable;
    }
    _unsubscribe() {
        const observable = this.refCountObservable;
        if (--observable.refCount === 0) {
            observable.connection.unsubscribe();
            observable.connection = void 0;
        }
    }
}
