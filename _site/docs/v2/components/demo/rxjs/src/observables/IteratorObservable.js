System.register('rxjs/src/observables/IteratorObservable', ['../Observable', '../util/root', '../util/Symbol_iterator', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Observable, root, $$iterator, tryCatch, errorObject, IteratorObservable, maxSafeInteger, StringIterator, ArrayIterator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function getIterator(o) {
        var i = o[$$iterator];
        if (!i && typeof o === 'string') {
            return new StringIterator(o);
        }
        if (!i && o.length !== undefined) {
            return new ArrayIterator(o);
        }
        if (!i) {
            throw new TypeError('Object is not iterable');
        }
        return o[$$iterator]();
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
        return typeof value === 'number' && root.isFinite(value);
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
    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_utilRoot) {
            root = _utilRoot.root;
        }, function (_utilSymbol_iterator) {
            $$iterator = _utilSymbol_iterator['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            IteratorObservable = (function (_Observable) {
                _inherits(IteratorObservable, _Observable);

                function IteratorObservable(iterator, project, thisArg, scheduler) {
                    _classCallCheck(this, IteratorObservable);

                    _get(Object.getPrototypeOf(IteratorObservable.prototype), 'constructor', this).call(this);
                    this.iterator = iterator;
                    this.project = project;
                    this.thisArg = thisArg;
                    this.scheduler = scheduler;
                }

                _createClass(IteratorObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
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
                                    result = tryCatch(project).call(thisArg, result.value, index++);
                                    if (result === errorObject) {
                                        subscriber.error(errorObject.e);
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
                    }
                }], [{
                    key: 'create',
                    value: function create(iterator, project, thisArg, scheduler) {
                        if (iterator == null) {
                            throw new Error('iterator cannot be null.');
                        }
                        if (project && typeof project !== "function") {
                            throw new Error('When provided, `project` must be a function.');
                        }
                        return new IteratorObservable(iterator, project, thisArg, scheduler);
                    }
                }, {
                    key: 'dispatch',
                    value: function dispatch(state) {
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
                            result = tryCatch(project).call(thisArg, result.value, index);
                            if (result === errorObject) {
                                state.error = errorObject.e;
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
                    }
                }]);

                return IteratorObservable;
            })(Observable);

            _export('default', IteratorObservable);

            maxSafeInteger = Math.pow(2, 53) - 1;

            StringIterator = (function () {
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

                _createClass(StringIterator, [{
                    key: $$iterator,
                    value: function value() {
                        return this;
                    }
                }, {
                    key: 'next',
                    value: function next() {
                        return this.idx < this.len ? {
                            done: false,
                            value: this.str.charAt(this.idx++)
                        } : {
                            done: true,
                            value: undefined
                        };
                    }
                }]);

                return StringIterator;
            })();

            ArrayIterator = (function () {
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

                _createClass(ArrayIterator, [{
                    key: $$iterator,
                    value: function value() {
                        return this;
                    }
                }, {
                    key: 'next',
                    value: function next() {
                        return this.idx < this.len ? {
                            done: false,
                            value: this.arr[this.idx++]
                        } : {
                            done: true,
                            value: undefined
                        };
                    }
                }]);

                return ArrayIterator;
            })();
        }
    };
});