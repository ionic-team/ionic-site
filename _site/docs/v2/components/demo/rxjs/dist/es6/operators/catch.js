import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function _catch(selector) {
    var catchOperator = new CatchOperator(selector);
    var caught = this.lift(catchOperator);
    catchOperator.caught = caught;
    return caught;
}
class CatchOperator {
    constructor(selector) {
        this.selector = selector;
    }
    call(subscriber) {
        return new CatchSubscriber(subscriber, this.selector, this.caught);
    }
}
class CatchSubscriber extends Subscriber {
    constructor(destination, selector, caught) {
        super(destination);
        this.selector = selector;
        this.caught = caught;
    }
    _error(err) {
        const result = tryCatch(this.selector)(err, this.caught);
        if (result === errorObject) {
            this.destination.error(errorObject.e);
        }
        else {
            this.add(result.subscribe(this.destination));
        }
    }
}
