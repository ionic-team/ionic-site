import Subscriber from '../Subscriber';
import Subject from '../Subject';
import Subscription from '../Subscription';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function window(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
}
class WindowOperator {
    constructor(closingSelector) {
        this.closingSelector = closingSelector;
    }
    call(subscriber) {
        return new WindowSubscriber(subscriber, this.closingSelector);
    }
}
class WindowSubscriber extends Subscriber {
    constructor(destination, closingSelector) {
        super(destination);
        this.closingSelector = closingSelector;
        this.window = new Subject();
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
        const prevClosingNotification = this.closingNotification;
        if (prevClosingNotification) {
            this.remove(prevClosingNotification);
            prevClosingNotification.unsubscribe();
        }
        const prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        this.destination.next(this.window = new Subject());
        let closingNotifier = tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject) {
            const err = closingNotifier.e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            let closingNotification = this.closingNotification = new Subscription();
            this.add(closingNotification.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this))));
        }
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
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
