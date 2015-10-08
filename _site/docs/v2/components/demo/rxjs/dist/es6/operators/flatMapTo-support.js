import { FlatMapSubscriber } from './flatMap-support';
export class FlatMapToOperator {
    constructor(observable, projectResult, concurrent = Number.POSITIVE_INFINITY) {
        this.observable = observable;
        this.projectResult = projectResult;
        this.concurrent = concurrent;
    }
    call(subscriber) {
        return new FlatMapToSubscriber(subscriber, this.concurrent, this.observable, this.projectResult);
    }
}
export class FlatMapToSubscriber extends FlatMapSubscriber {
    constructor(destination, concurrent, observable, projectResult) {
        super(destination, concurrent, null, projectResult);
        this.observable = observable;
    }
    _project(value, index) {
        return this.observable;
    }
}
