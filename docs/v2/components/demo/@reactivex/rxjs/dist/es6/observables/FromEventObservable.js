import Observable from '../Observable';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
import Subscription from '../Subscription';
export default class FromEventObservable extends Observable {
    constructor(sourceObj, eventName, selector) {
        super();
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
    }
    static create(sourceObj, eventName, selector) {
        return new FromEventObservable(sourceObj, eventName, selector);
    }
    static setupSubscription(sourceObj, eventName, handler, subscriber) {
        let unsubscribe;
        let tag = sourceObj.toString();
        if (tag === '[object NodeList]' || tag === '[object HTMLCollection]') {
            for (let i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
            }
        }
        else if (typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function') {
            sourceObj.addEventListener(eventName, handler);
            unsubscribe = () => sourceObj.removeEventListener(eventName, handler);
        }
        else if (typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function') {
            sourceObj.on(eventName, handler);
            unsubscribe = () => sourceObj.off(eventName, handler);
        }
        else if (typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function') {
            sourceObj.addListener(eventName, handler);
            unsubscribe = () => sourceObj.removeListener(eventName, handler);
        }
        subscriber.add(new Subscription(unsubscribe));
    }
    _subscribe(subscriber) {
        const sourceObj = this.sourceObj;
        const eventName = this.eventName;
        const selector = this.selector;
        let handler = selector ? (e) => {
            let result = tryCatch(selector)(e);
            if (result === errorObject) {
                subscriber.error(result.e);
            }
            else {
                subscriber.next(result);
            }
        } : (e) => subscriber.next(e);
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
    }
}
