import Observable from '../Observable';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default class DeferObservable extends Observable {
    constructor(observableFactory) {
        super();
        this.observableFactory = observableFactory;
    }
    static create(observableFactory) {
        return new DeferObservable(observableFactory);
    }
    _subscribe(subscriber) {
        const result = tryCatch(this.observableFactory)();
        if (result === errorObject) {
            subscriber.error(errorObject.e);
        }
        else {
            result.subscribe(subscriber);
        }
    }
}
