import Subscriber from '../Subscriber';
import Subscription from '../Subscription';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
}
class BufferToggleOperator {
    constructor(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    call(subscriber) {
        return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
    }
}
class BufferToggleSubscriber extends Subscriber {
    constructor(destination, openings, closingSelector) {
        super(destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.buffers = [];
        this.add(this.openings._subscribe(new BufferToggleOpeningsSubscriber(this)));
    }
    _next(value) {
        const buffers = this.buffers;
        const len = buffers.length;
        for (let i = 0; i < len; i++) {
            buffers[i].push(value);
        }
    }
    _error(err) {
        this.buffers = null;
        this.destination.error(err);
    }
    _complete() {
        const buffers = this.buffers;
        while (buffers.length > 0) {
            this.destination.next(buffers.shift());
        }
        this.destination.complete();
    }
    openBuffer(value) {
        const closingSelector = this.closingSelector;
        const buffers = this.buffers;
        let closingNotifier = tryCatch(closingSelector)(value);
        if (closingNotifier === errorObject) {
            const err = closingNotifier.e;
            this.buffers = null;
            this.destination.error(err);
        }
        else {
            let buffer = [];
            let context = {
                buffer,
                subscription: new Subscription()
            };
            buffers.push(buffer);
            this.add(context.subscription.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this, context))));
        }
    }
    closeBuffer(context) {
        const { buffer, subscription } = context;
        const buffers = this.buffers;
        this.destination.next(buffer);
        buffers.splice(buffers.indexOf(buffer), 1);
        this.remove(subscription);
        subscription.unsubscribe();
    }
}
class BufferClosingNotifierSubscriber extends Subscriber {
    constructor(parent, context) {
        super(null);
        this.parent = parent;
        this.context = context;
    }
    _next() {
        this.parent.closeBuffer(this.context);
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
class BufferToggleOpeningsSubscriber extends Subscriber {
    constructor(parent) {
        super(null);
        this.parent = parent;
    }
    _next(value) {
        this.parent.openBuffer(value);
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
