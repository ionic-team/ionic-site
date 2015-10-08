import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function reduce(project, acc) {
    return this.lift(new ReduceOperator(project, acc));
}
class ReduceOperator {
    constructor(project, acc) {
        this.acc = acc;
        this.project = project;
    }
    call(subscriber) {
        return new ReduceSubscriber(subscriber, this.project, this.acc);
    }
}
class ReduceSubscriber extends Subscriber {
    constructor(destination, project, acc) {
        super(destination);
        this.hasValue = false;
        this.acc = acc;
        this.project = project;
        this.hasSeed = typeof acc !== "undefined";
    }
    _next(x) {
        if (this.hasValue || (this.hasValue = this.hasSeed)) {
            const result = tryCatch(this.project).call(this, this.acc, x);
            if (result === errorObject) {
                this.destination.error(errorObject.e);
            }
            else {
                this.acc = result;
            }
        }
        else {
            this.acc = x;
            this.hasValue = true;
        }
    }
    _complete() {
        if (this.hasValue || this.hasSeed) {
            this.destination.next(this.acc);
        }
        this.destination.complete();
    }
}
