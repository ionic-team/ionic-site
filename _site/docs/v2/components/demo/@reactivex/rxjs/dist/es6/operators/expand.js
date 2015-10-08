import { MergeSubscriber, MergeInnerSubscriber } from './merge-support';
import EmptyObservable from '../observables/EmptyObservable';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default function expand(project) {
    return this.lift(new ExpandOperator(project));
}
class ExpandOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber) {
        return new ExpandSubscriber(subscriber, this.project);
    }
}
class ExpandSubscriber extends MergeSubscriber {
    constructor(destination, project) {
        super(destination, Number.POSITIVE_INFINITY);
        this.project = project;
    }
    _project(value, index) {
        const observable = tryCatch(this.project).call(this, value, index);
        if (observable === errorObject) {
            this.error(errorObject.e);
            return null;
        }
        return observable;
    }
    _subscribeInner(observable, value, index) {
        if (observable._isScalar) {
            this.destination.next(observable.value);
            this._innerComplete();
            this._next(observable.value);
        }
        else if (observable instanceof EmptyObservable) {
            this._innerComplete();
        }
        else {
            return observable._subscribe(new ExpandInnerSubscriber(this.destination, this));
        }
    }
}
class ExpandInnerSubscriber extends MergeInnerSubscriber {
    constructor(destination, parent) {
        super(destination, parent);
    }
    _next(value) {
        this.destination.next(value);
        this.parent.next(value);
    }
}
