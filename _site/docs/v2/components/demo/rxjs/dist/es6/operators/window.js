import Subscriber from '../Subscriber';
import Subject from '../Subject';
export default function window(closingNotifier) {
    return this.lift(new WindowOperator(closingNotifier));
}
class WindowOperator {
    constructor(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    call(subscriber) {
        return new WindowSubscriber(subscriber, this.closingNotifier);
    }
}
class WindowSubscriber extends Subscriber {
    constructor(destination, closingNotifier) {
        super(destination);
        this.closingNotifier = closingNotifier;
        this.window = new Subject();
        this.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this)));
        this.openWindow();
    }
    _next(value) {
        this.window.next(value);
    }
    _error(err) {
        this.window.error(err);
        this.destination.error(err);
    }
    _complete() {
        this.window.complete();
        this.destination.complete();
    }
    openWindow() {
        const prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        this.destination.next(this.window = new Subject());
    }
}
class WindowClosingNotifierSubscriber extends Subscriber {
    constructor(parent) {
        super(null);
        this.parent = parent;
    }
    _next() {
        this.parent.openWindow();
    }
}
