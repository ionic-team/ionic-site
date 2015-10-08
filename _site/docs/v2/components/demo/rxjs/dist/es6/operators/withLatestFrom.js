import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function withLatestFrom(...args) {
    const project = args.pop();
    const observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
}
class WithLatestFromOperator {
    constructor(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    call(subscriber) {
        return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
    }
}
class WithLatestFromSubscriber extends Subscriber {
    constructor(destination, observables, project) {
        super(destination);
        this.observables = observables;
        this.project = project;
        const len = observables.length;
        this.values = new Array(len);
        this.toSet = len;
        for (let i = 0; i < len; i++) {
            this.add(observables[i]._subscribe(new WithLatestInnerSubscriber(this, i)));
        }
    }
    notifyValue(index, value) {
        this.values[index] = value;
        this.toSet--;
    }
    _next(value) {
        if (this.toSet === 0) {
            const values = this.values;
            let result = tryCatch(this.project)([value, ...values]);
            if (result === errorObject) {
                this.destination.error(result.e);
            }
            else {
                this.destination.next(result);
            }
        }
    }
}
class WithLatestInnerSubscriber extends Subscriber {
    constructor(parent, valueIndex) {
        super(null);
        this.parent = parent;
        this.valueIndex = valueIndex;
    }
    _next(value) {
        this.parent.notifyValue(this.valueIndex, value);
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
