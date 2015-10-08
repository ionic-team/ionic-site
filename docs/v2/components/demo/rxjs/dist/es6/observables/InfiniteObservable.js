import Observable from '../Observable';
export default class InfiniteObservable extends Observable {
    constructor() {
        super();
    }
    static create() {
        return new InfiniteObservable();
    }
    _subscribe(subscriber) {
    }
}
