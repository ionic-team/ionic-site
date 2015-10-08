import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function scan(project, acc) {
    return this.lift(new ScanOperator(project));
}
class ScanOperator {
    constructor(project, acc) {
        this.acc = acc;
        this.project = project;
    }
    call(subscriber) {
        return new ScanSubscriber(subscriber, this.project, this.acc);
    }
}
class ScanSubscriber extends Subscriber {
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
                this.destination.next(this.acc = result);
            }
        }
        else {
            return this.destination.next((this.hasValue = true) && (this.acc = x));
        }
    }
    _complete() {
        if (!this.hasValue && this.hasSeed) {
            this.destination.next(this.acc);
        }
        this.destination.complete();
    }
}
