import Subscriber from './Subscriber';
import $$observable from './util/Symbol_observable';
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
export default class Observable {
    /**
     * @constructor
     * @param {Function} subscribe the function that is
     * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
     * of a succesful completion.
     */
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * @method lift
     * @param {Operator} the operator defining the operation to take on the observable
     * @returns {Observable} a new observable with the Operator applied
     * @description creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     */
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @method Symbol.observable
     * @returns {Observable} this instance of the observable
     * @description an interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     */
    [$$observable]() {
        return this;
    }
    /**
     * @method subscribe
     * @param {Observer|Function} observerOrNext (optional) either an observer defining all functions to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled
     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
     * @returns {Subscription} a subscription reference to the registered handlers
     * @description registers handlers for handling emitted values, error and completions from the observable, and
     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
     */
    subscribe(observerOrNext, error, complete) {
        let subscriber;
        if (observerOrNext && typeof observerOrNext === "object") {
            if (observerOrNext instanceof Subscriber) {
                subscriber = observerOrNext;
            }
            else {
                subscriber = new Subscriber(observerOrNext);
            }
        }
        else {
            const next = observerOrNext;
            subscriber = Subscriber.create(next, error, complete);
        }
        subscriber.add(this._subscribe(subscriber));
        return subscriber;
    }
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @returns {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    forEach(next) {
        return new Promise((resolve, reject) => {
            this.subscribe(next, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        return this.source._subscribe(this.operator.call(subscriber));
    }
}
// HACK: Since TypeScript inherits static properties too, we have to 
// fight against TypeScript here so Subject can have a different static create signature.
/**
 * @static
 * @method create
 * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
 * @returns {Observable} a new cold observable
 * @description creates a new cold Observable by calling the Observable constructor
 */
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
