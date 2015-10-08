import Subscriber from '../Subscriber';
import Notification from '../Notification';
import immediate from '../schedulers/immediate';
export default function delay(delay, scheduler = immediate) {
    return this.lift(new DelayOperator(delay, scheduler));
}
class DelayOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new DelaySubscriber(subscriber, this.delay, this.scheduler);
    }
}
class DelaySubscriber extends Subscriber {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.queue = [];
        this.active = false;
        this.errored = false;
        this.delay = delay;
        this.scheduler = scheduler;
    }
    static dispatch(state) {
        const source = state.source;
        const queue = source.queue;
        const scheduler = state.scheduler;
        const destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            let delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay);
        }
        else {
            source.active = false;
        }
    }
    _next(x) {
        if (this.errored) {
            return;
        }
        const scheduler = this.scheduler;
        this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification.createNext(x)));
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _error(e) {
        const scheduler = this.scheduler;
        this.errored = true;
        this.queue = [new DelayMessage(scheduler.now() + this.delay, Notification.createError(e))];
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _complete() {
        if (this.errored) {
            return;
        }
        const scheduler = this.scheduler;
        this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification.createComplete()));
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _schedule(scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    }
}
class DelayMessage {
    constructor(time, notification) {
        this.time = time;
        this.notification = notification;
    }
}
