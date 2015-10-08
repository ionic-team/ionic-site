import Observable from './Observable';
export default class Notification {
    constructor(kind, value, exception) {
        this.kind = kind;
        this.value = value;
        this.exception = exception;
        this.hasValue = kind === 'N';
    }
    observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next(this.value);
            case 'E':
                return observer.error(this.exception);
            case 'C':
                return observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return next(this.value);
            case 'E':
                return error(this.exception);
            case 'C':
                return complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
        const value = this.value;
        switch (kind) {
            case 'N':
                return Observable.of(value);
            case 'E':
                return Observable.throw(value);
            case 'C':
                return Observable.empty();
        }
    }
    static createNext(value) {
        return new Notification('N', value);
    }
    static createError(err) {
        return new Notification('E', undefined, err);
    }
    static createComplete() {
        return new Notification('C');
    }
}
