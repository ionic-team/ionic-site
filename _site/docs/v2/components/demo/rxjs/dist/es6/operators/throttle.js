import Subscriber from '../Subscriber';
import nextTick from '../schedulers/nextTick';
export default function throttle(delay, scheduler = nextTick) {
    return this.lift(new ThrottleOperator(delay, scheduler));
}
class ThrottleOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new ThrottleSubscriber(subscriber, this.delay, this.scheduler);
    }
}
class ThrottleSubscriber extends Subscriber {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
    }
    _next(x) {
        this.clearThrottle();
        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { value: x, subscriber: this }));
    }
    throttledNext(x) {
        this.clearThrottle();
        this.destination.next(x);
    }
    clearThrottle() {
        const throttled = this.throttled;
        if (throttled) {
            this.remove(throttled);
            throttled.unsubscribe();
            this.throttled = null;
        }
    }
}
function dispatchNext({ value, subscriber }) {
    subscriber.throttledNext(value);
}
