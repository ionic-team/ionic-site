import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
import bindCallback from '../util/bindCallback';
/**
 * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
 * allowed by a `select` function
 *
 * @param {Function} select a function that is used to select the resulting values
 *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
 * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
 * @returns {Observable} an observable of values allowed by the select function
 */
export default function filter(select, thisArg) {
    return this.lift(new FilterOperator(select, thisArg));
}
class FilterOperator {
    constructor(select, thisArg) {
        this.select = bindCallback(select, thisArg, 2);
    }
    call(subscriber) {
        return new FilterSubscriber(subscriber, this.select);
    }
}
class FilterSubscriber extends Subscriber {
    constructor(destination, select) {
        super(destination);
        this.count = 0;
        this.select = select;
    }
    _next(x) {
        const result = tryCatch(this.select)(x, this.count++);
        if (result === errorObject) {
            this.destination.error(errorObject.e);
        }
        else if (Boolean(result)) {
            this.destination.next(x);
        }
    }
}
