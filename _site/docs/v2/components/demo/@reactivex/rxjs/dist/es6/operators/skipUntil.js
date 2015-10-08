import Subscriber from '../Subscriber';
export default function skipUntil(total) {
    return this.lift(new SkipUntilOperator(total));
}
class SkipUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber) {
        return new SkipUntilSubscriber(subscriber, this.notifier);
    }
}
class SkipUntilSubscriber extends Subscriber {
    constructor(destination, notifier) {
        super(destination);
        this.notifier = notifier;
        this.notificationSubscriber = new NotificationSubscriber();
        this.add(this.notifier.subscribe(this.notificationSubscriber));
    }
    _next(x) {
        if (this.notificationSubscriber.hasNotified) {
            this.destination.next(x);
        }
    }
}
class NotificationSubscriber extends Subscriber {
    constructor() {
        super(null);
        this.hasNotified = false;
    }
    _next() {
        this.hasNotified = true;
        this.unsubscribe();
    }
}
