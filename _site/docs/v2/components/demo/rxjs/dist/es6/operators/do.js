import Subscriber from '../Subscriber';
import noop from '../util/noop';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function _do(next, error, complete) {
    return this.lift(new DoOperator(next || noop, error || noop, complete || noop));
}
class DoOperator {
    constructor(next, error, complete) {
        this.next = next;
        this.error = error;
        this.complete = complete;
    }
    call(subscriber) {
        return new DoSubscriber(subscriber, this.next, this.error, this.complete);
    }
}
class DoSubscriber extends Subscriber {
    constructor(destination, next, error, complete) {
        super(destination);
        this.__next = next;
        this.__error = error;
        this.__complete = complete;
    }
    _next(x) {
        const result = tryCatch(this.__next)(x);
        if (result === errorObject) {
            this.destination.error(errorObject.e);
        }
        else {
            this.destination.next(x);
        }
    }
    _error(e) {
        const result = tryCatch(this.__error)(e);
        if (result === errorObject) {
            this.destination.error(errorObject.e);
        }
        else {
            this.destination.error(e);
        }
    }
    _complete() {
        const result = tryCatch(this.__complete)();
        if (result === errorObject) {
            this.destination.error(errorObject.e);
        }
        else {
            this.destination.complete();
        }
    }
}
