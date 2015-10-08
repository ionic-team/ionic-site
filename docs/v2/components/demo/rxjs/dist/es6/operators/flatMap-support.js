import { MergeSubscriber, MergeInnerSubscriber } from './merge-support';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export class FlatMapOperator {
    constructor(project, projectResult, concurrent = Number.POSITIVE_INFINITY) {
        this.project = project;
        this.projectResult = projectResult;
        this.concurrent = concurrent;
    }
    call(subscriber) {
        return new FlatMapSubscriber(subscriber, this.concurrent, this.project, this.projectResult);
    }
}
export class FlatMapSubscriber extends MergeSubscriber {
    constructor(destination, concurrent, project, projectResult) {
        super(destination, concurrent);
        this.project = project;
        this.projectResult = projectResult;
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
        const projectResult = this.projectResult;
        if (projectResult) {
            return observable._subscribe(new FlatMapInnerSubscriber(this.destination, this, value, index, projectResult));
        }
        else if (observable._isScalar) {
            this.destination.next(observable.value);
            this._innerComplete();
        }
        else {
            return observable._subscribe(new MergeInnerSubscriber(this.destination, this));
        }
    }
}
export class FlatMapInnerSubscriber extends MergeInnerSubscriber {
    constructor(destination, parent, value, index, project) {
        super(destination, parent);
        this.count = 0;
        this.value = value;
        this.index = index;
        this.project = project;
    }
    _next(value) {
        let result = value;
        const index = this.count++;
        result = tryCatch(this.project).call(this, this.value, value, this.index, index);
        if (result === errorObject) {
            this.destination.error(errorObject.e);
        }
        else {
            this.destination.next(result);
        }
    }
}
