import Subscriber from '../Subscriber';
import Subscription from '../Subscription';
import bindCallback from '../util/bindCallback';
export default function _finally(finallySelector, thisArg) {
    return this.lift(new FinallyOperator(thisArg ?
        bindCallback(finallySelector, thisArg, 2) :
        finallySelector));
}
class FinallyOperator {
    constructor(finallySelector) {
        this.finallySelector = finallySelector;
    }
    call(subscriber) {
        return new FinallySubscriber(subscriber, this.finallySelector);
    }
}
class FinallySubscriber extends Subscriber {
    constructor(destination, finallySelector) {
        super(destination);
        this.add(new Subscription(finallySelector));
    }
}
