import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
import bindCallback from '../util/bindCallback';
/**
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the returned observable
 *
 * @param {Function} project the function to create projection
 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
 * @returns {Observable} a observable of projected values
 */
export default function map(project, thisArg) {
    return this.lift(new MapOperator(project, thisArg));
}
class MapOperator {
    constructor(project, thisArg) {
        this.project = bindCallback(project, thisArg, 2);
    }
    call(subscriber) {
        return new MapSubscriber(subscriber, this.project);
    }
}
class MapSubscriber extends Subscriber {
    constructor(destination, project) {
        super(destination);
        this.count = 0;
        this.project = project;
    }
    _next(x) {
        const result = tryCatch(this.project)(x, this.count++);
        if (result === errorObject) {
            this.error(errorObject.e);
        }
        else {
            this.destination.next(result);
        }
    }
}
