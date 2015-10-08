import Subscriber from '../Subscriber';
import Subject from '../Subject';
import Subscription from '../Subscription';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
}
class WindowToggleOperator {
    constructor(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    call(subscriber) {
        return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
    }
}
class WindowToggleSubscriber extends Subscriber {
    constructor(destination, openings, closingSelector) {
        super(destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.windows = [];
        this.add(this.openings._subscribe(new WindowToggleOpeningsSubscriber(this)));
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
    openWindow(value) {
        const window = new Subject();
        this.windows.push(window);
        this.destination.next(window);
        let windowContext = {
            window,
            subscription: new Subscription()
        };
        const closingSelector = this.closingSelector;
        let closingNotifier = tryCatch(closingSelector)(value);
        if (closingNotifier === errorObject) {
            this.error(closingNotifier.e);
        }
        else {
            this.add(windowContext.subscription.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this, windowContext))));
        }
    }
    closeWindow(windowContext) {
        const { window, subscription } = windowContext;
        const windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
        window.complete();
        this.remove(subscription);
    }
}
class WindowClosingNotifierSubscriber extends Subscriber {
    constructor(parent, windowContext) {
        super(null);
        this.parent = parent;
        this.windowContext = windowContext;
    }
    _next() {
        this.parent.closeWindow(this.windowContext);
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
class WindowToggleOpeningsSubscriber extends Subscriber {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    _next(value) {
        this.parent.openWindow(value);
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
