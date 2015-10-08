import Subscriber from '../Subscriber';
import nextTick from '../schedulers/nextTick';
export default function debounce(dueTime, scheduler = nextTick) {
    return this.lift(new DebounceOperator(dueTime, scheduler));
}
class DebounceOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new DebounceSubscriber(subscriber, this.dueTime, this.scheduler);
    }
}
class DebounceSubscriber extends Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    _next(value) {
        if (!this.debounced) {
            this.add(this.debounced = this.scheduler.schedule(dispatchNext, this.dueTime, { value, subscriber: this }));
        }
    }
    clearDebounce() {
        const debounced = this.debounced;
        if (debounced) {
            debounced.unsubscribe();
            this.remove(debounced);
        }
    }
    debouncedNext(value) {
        this.clearDebounce();
        this.destination.next(value);
    }
}
function dispatchNext({ value, subscriber }) {
    subscriber.debouncedNext(value);
}
