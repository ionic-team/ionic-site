import Subscription from '../Subscription';
export default class SubjectSubscription extends Subscription {
    constructor(subject, observer) {
        super();
        this.subject = subject;
        this.observer = observer;
        this.isUnsubscribed = false;
    }
    unsubscribe() {
        if (this.isUnsubscribed) {
            return;
        }
        this.isUnsubscribed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = void 0;
        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.observer);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}
