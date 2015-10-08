import Subscriber from '../Subscriber';
import nextTick from '../schedulers/nextTick';
export default function sampleTime(delay, scheduler = nextTick) {
    return this.lift(new SampleTimeOperator(delay, scheduler));
}
class SampleTimeOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
    }
}
class SampleTimeSubscriber extends Subscriber {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay }));
    }
    _next(value) {
        this.lastValue = value;
        this.hasValue = true;
    }
    notifyNext() {
        if (this.hasValue) {
            this.destination.next(this.lastValue);
        }
    }
}
function dispatchNotification(state) {
    let { subscriber, delay } = state;
    subscriber.notifyNext();
    this.schedule(state, delay);
}
