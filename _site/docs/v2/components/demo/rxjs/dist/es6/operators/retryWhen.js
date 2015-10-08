import Subscriber from '../Subscriber';
import Subject from '../Subject';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
}
class RetryWhenOperator {
    constructor(notifier, original) {
        this.notifier = notifier;
        this.original = original;
    }
    call(subscriber) {
        return new RetryWhenSubscriber(subscriber, this.notifier, this.original);
    }
}
class RetryWhenSubscriber extends Subscriber {
    constructor(destination, notifier, original) {
        super(destination);
        this.notifier = notifier;
        this.original = original;
    }
    _error(err) {
        if (!this.retryNotifications) {
            this.errors = new Subject();
            const notifications = tryCatch(this.notifier).call(this, this.errors);
            if (notifications === errorObject) {
                this.destination.error(errorObject.e);
            }
            else {
                this.retryNotifications = notifications;
                this.add(notifications._subscribe(new RetryNotificationSubscriber(this)));
            }
        }
        this.errors.next(err);
    }
    finalError(err) {
        this.destination.error(err);
    }
    resubscribe() {
        this.original.subscribe(this);
    }
}
class RetryNotificationSubscriber extends Subscriber {
    constructor(parent) {
        super(null);
        this.parent = parent;
    }
    _next(value) {
        this.parent.resubscribe();
    }
    _error(err) {
        this.parent.finalError(err);
    }
    _complete() {
        this.parent.complete();
    }
}
