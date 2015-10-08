import Observable from '../Observable';
import Subscriber from '../Subscriber';
export default class ForkJoinObservable extends Observable {
    constructor(observables) {
        super();
        this.observables = observables;
    }
    static create(...observables) {
        return new ForkJoinObservable(observables);
    }
    _subscribe(subscriber) {
        const observables = this.observables;
        const len = observables.length;
        let context = { complete: 0, total: len, values: emptyArray(len) };
        for (let i = 0; i < len; i++) {
            observables[i].subscribe(new AllSubscriber(subscriber, this, i, context));
        }
    }
}
class AllSubscriber extends Subscriber {
    constructor(destination, parent, index, context) {
        super(destination);
        this.parent = parent;
        this.index = index;
        this.context = context;
    }
    _next(value) {
        this._value = value;
    }
    _complete() {
        const context = this.context;
        context.values[this.index] = this._value;
        if (context.values.every(hasValue)) {
            this.destination.next(context.values);
            this.destination.complete();
        }
    }
}
function hasValue(x) {
    return x !== null;
}
function emptyArray(len) {
    var arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(null);
    }
    return arr;
}
