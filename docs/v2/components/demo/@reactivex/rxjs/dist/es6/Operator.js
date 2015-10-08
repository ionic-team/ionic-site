import Subscriber from './Subscriber';
export function defaultCallFn(observer) {
    return new Subscriber(observer);
}
