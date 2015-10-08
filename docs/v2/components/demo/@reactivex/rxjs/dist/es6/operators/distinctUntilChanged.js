import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
import bindCallback from '../util/bindCallback';
export default function distinctUntilChanged(compare, thisArg) {
    return this.lift(new DistinctUntilChangedOperator(thisArg ?
        bindCallback(compare, thisArg, 2) :
        compare));
}
class DistinctUntilChangedOperator {
    constructor(compare) {
        this.compare = compare;
    }
    call(subscriber) {
        return new DistinctUntilChangedSubscriber(subscriber, this.compare);
    }
}
class DistinctUntilChangedSubscriber extends Subscriber {
    constructor(destination, compare) {
        super(destination);
        this.hasValue = false;
        if (typeof compare === "function") {
            this.compare = compare;
        }
    }
    compare(x, y) {
        return x === y;
    }
    _next(x) {
        let result = false;
        if (this.hasValue) {
            result = tryCatch(this.compare)(this.value, x);
            if (result === errorObject) {
                this.destination.error(errorObject.e);
                return;
            }
        }
        else {
            this.hasValue = true;
        }
        if (Boolean(result) === false) {
            this.value = x;
            this.destination.next(x);
        }
    }
}
