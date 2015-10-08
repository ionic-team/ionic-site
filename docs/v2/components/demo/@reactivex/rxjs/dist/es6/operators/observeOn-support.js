import Subscriber from '../Subscriber';
import Notification from '../Notification';
export class ObserveOnOperator {
    constructor(scheduler, delay = 0) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
    }
}
export class ObserveOnSubscriber extends Subscriber {
    constructor(destination, scheduler, delay = 0) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
    }
    static dispatch({ notification, destination }) {
        notification.observe(destination);
    }
    _next(x) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification.createNext(x), this.destination)));
    }
    _error(e) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification.createError(e), this.destination)));
    }
    _complete() {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification.createComplete(), this.destination)));
    }
}
class ObserveOnMessage {
    constructor(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
}
