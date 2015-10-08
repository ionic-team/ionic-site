'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _utilRoot = require('../util/root');

var _utilSymbol_iterator = require('../util/Symbol_iterator');

var _utilSymbol_iterator2 = _interopRequireDefault(_utilSymbol_iterator);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

var IteratorObservable = (function (_Observable) {
    _inherits(IteratorObservable, _Observable);

    function IteratorObservable(iterator, project, thisArg, scheduler) {
        _classCallCheck(this, IteratorObservable);

        _Observable.call(this);
        this.iterator = iterator;
        this.project = project;
        this.thisArg = thisArg;
        this.scheduler = scheduler;
    }

    IteratorObservable.create = function create(iterator, project, thisArg, scheduler) {
        if (iterator == null) {
            throw new Error('iterator cannot be null.');
        }
        if (project && typeof project !== "function") {
            throw new Error('When provided, `project` must be a function.');
        }
        return new IteratorObservable(iterator, project, thisArg, scheduler);
    };

    IteratorObservable.dispatch = function dispatch(state) {
        var index = state.index;
        var hasError = state.hasError;
        var thisArg = state.thisArg;
        var project = state.project;
        var iterator = state.iterator;
        var subscriber = state.subscriber;

        if (hasError) {
            subscriber.error(state.error);
            return;
        }
        var result = iterator.next();
        if (result.done) {
            subscriber.complete();
            return;
        }
        if (project) {
            result = _utilTryCatch2['default'](project).call(thisArg, result.value, index);
            if (result === _utilErrorObject.errorObject) {
                state.error = _utilErrorObject.errorObject.e;
                state.hasError = true;
            } else {
                subscriber.next(result);
                state.index = index + 1;
            }
        } else {
            subscriber.next(result.value);
            state.index = index + 1;
        }
        if (subscriber.isUnsubscribed) {
            return;
        }
        this.schedule(state);
    };

    IteratorObservable.prototype._subscribe = function _subscribe(subscriber) {
        var index = 0;
        var project = this.project;
        var thisArg = this.thisArg;
        var iterator = getIterator(Object(this.iterator));
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(IteratorObservable.dispatch, 0, {
                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
            }));
        } else {
            do {
                var result = iterator.next();
                if (result.done) {
                    subscriber.complete();
                    break;
                } else if (project) {
                    result = _utilTryCatch2['default'](project).call(thisArg, result.value, index++);
                    if (result === _utilErrorObject.errorObject) {
                        subscriber.error(_utilErrorObject.errorObject.e);
                        break;
                    }
                    subscriber.next(result);
                } else {
                    subscriber.next(result.value);
                }
                if (subscriber.isUnsubscribed) {
                    break;
                }
            } while (true);
        }
    };

    return IteratorObservable;
})(_Observable3['default']);

exports['default'] = IteratorObservable;

var maxSafeInteger = Math.pow(2, 53) - 1;

var StringIterator = (function () {
    function StringIterator(str) {
        var idx = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var len = arguments.length <= 2 || arguments[2] === undefined ? str.length : arguments[2];
        return (function () {
            _classCallCheck(this, StringIterator);

            this.str = str;
            this.idx = idx;
            this.len = len;
        }).apply(this, arguments);
    }

    StringIterator.prototype[_utilSymbol_iterator2['default']] = function () {
        return this;
    };

    StringIterator.prototype.next = function next() {
        return this.idx < this.len ? {
            done: false,
            value: this.str.charAt(this.idx++)
        } : {
            done: true,
            value: undefined
        };
    };

    return StringIterator;
})();

var ArrayIterator = (function () {
    function ArrayIterator(arr) {
        var idx = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var len = arguments.length <= 2 || arguments[2] === undefined ? toLength(arr) : arguments[2];
        return (function () {
            _classCallCheck(this, ArrayIterator);

            this.arr = arr;
            this.idx = idx;
            this.len = len;
        }).apply(this, arguments);
    }

    ArrayIterator.prototype[_utilSymbol_iterator2['default']] = function () {
        return this;
    };

    ArrayIterator.prototype.next = function next() {
        return this.idx < this.len ? {
            done: false,
            value: this.arr[this.idx++]
        } : {
            done: true,
            value: undefined
        };
    };

    return ArrayIterator;
})();

function getIterator(o) {
    var i = o[_utilSymbol_iterator2['default']];
    if (!i && typeof o === 'string') {
        return new StringIterator(o);
    }
    if (!i && o.length !== undefined) {
        return new ArrayIterator(o);
    }
    if (!i) {
        throw new TypeError('Object is not iterable');
    }
    return o[_utilSymbol_iterator2['default']]();
}
function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
        return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
        return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
        return 0;
    }
    if (len > maxSafeInteger) {
        return maxSafeInteger;
    }
    return len;
}
function numberIsFinite(value) {
    return typeof value === 'number' && _utilRoot.root.isFinite(value);
}
function isNan(n) {
    return n !== n;
}
function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
        return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
        return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
}
module.exports = exports['default'];