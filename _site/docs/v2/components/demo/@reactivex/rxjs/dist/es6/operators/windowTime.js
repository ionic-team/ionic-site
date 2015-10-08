import Subscriber from '../Subscriber';
import Subject from '../Subject';
import nextTick from '../schedulers/nextTick';
export default function windowTime(windowTimeSpan, windowCreationInterval = null, scheduler = nextTick) {
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
}
class WindowTimeOperator {
    constructor(windowTimeSpan, windowCreationInterval, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
    }
}
class WindowTimeSubscriber extends Subscriber {
    constructor(destination, windowTimeSpan, windowCreationInterval, scheduler) {
        super(destination);
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
        this.windows = [];
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            let window = this.openWindow();
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, { subscriber: this, window, context: null }));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, { windowTimeSpan, windowCreationInterval, subscriber: this, scheduler }));
        }
        else {
            let window = this.openWindow();
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, { subscriber: this, window, windowTimeSpan }));
        }
    }
    _next(value) {
        const windows = this.windows;
        const len = windows.length;
        for (let i = 0; i < len; i++) {
            windows[i].next(value);
        }
    }
    _error(err) {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().complete();
        }
        this.destination.complete();
    }
    openWindow() {
        let window = new Subject();
        this.windows.push(window);
        this.destination.next(window);
        return window;
    }
    closeWindow(window) {
        window.complete();
        const windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    }
}
function dispatchWindowTimeSpanOnly(state) {
    const { subscriber, windowTimeSpan, window } = state;
    if (window) {
        window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    let { windowTimeSpan, subscriber, scheduler, windowCreationInterval } = state;
    let window = subscriber.openWindow();
    let action = this;
    let context = { action, subscription: null };
    action.add(context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, { subscriber, window, context }));
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose({ subscriber, window, context }) {
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
