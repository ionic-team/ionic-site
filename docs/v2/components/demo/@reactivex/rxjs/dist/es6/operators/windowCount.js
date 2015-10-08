import Subscriber from '../Subscriber';
import Subject from '../Subject';
export default function windowCount(windowSize, startWindowEvery = 0) {
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
}
class WindowCountOperator {
    constructor(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    call(subscriber) {
        return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
    }
}
class WindowCountSubscriber extends Subscriber {
    constructor(destination, windowSize, startWindowEvery) {
        super(destination);
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [{ count: 0, notified: false, window: new Subject() }];
        this.count = 0;
    }
    _next(value) {
        const count = (this.count += 1);
        const startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        const windowSize = this.windowSize;
        const windows = this.windows;
        const len = windows.length;
        if (count % startWindowEvery === 0) {
            let window = new Subject();
            windows.push({ count: 0, notified: false, window: window });
        }
        for (let i = 0; i < len; i++) {
            let w = windows[i];
            const window = w.window;
            if (!w.notified) {
                w.notified = true;
                this.destination.next(window);
            }
            window.next(value);
            if (windowSize === (w.count += 1)) {
                window.complete();
            }
        }
    }
    _error(err) {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().window.error(err);
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().window.complete();
        }
        this.destination.complete();
    }
}
