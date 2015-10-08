import Subject from '../Subject';
export default class BehaviorSubject extends Subject {
    constructor(value) {
        super();
        this.value = value;
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        if (!subscription) {
            return;
        }
        else if (!subscription.isUnsubscribed) {
            subscriber.next(this.value);
        }
        return subscription;
    }
    _next(value) {
        super._next(this.value = value);
    }
}
