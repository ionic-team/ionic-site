System.register('rxjs/src/observables/ArrayObservable', ['../Observable', './ScalarObservable', './EmptyObservable'], function (_export) {
    'use strict';

    var Observable, ScalarObservable, EmptyObservable, ArrayObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_ScalarObservable) {
            ScalarObservable = _ScalarObservable['default'];
        }, function (_EmptyObservable) {
            EmptyObservable = _EmptyObservable['default'];
        }],
        execute: function () {
            ArrayObservable = (function (_Observable) {
                _inherits(ArrayObservable, _Observable);

                function ArrayObservable(array, scheduler) {
                    _classCallCheck(this, ArrayObservable);

                    _get(Object.getPrototypeOf(ArrayObservable.prototype), 'constructor', this).call(this);
                    this.array = array;
                    this.scheduler = scheduler;
                }

                _createClass(ArrayObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var index = 0;
                        var array = this.array;
                        var count = array.length;
                        var scheduler = this.scheduler;
                        if (scheduler) {
                            subscriber.add(scheduler.schedule(ArrayObservable.dispatch, 0, {
                                array: array, index: index, count: count, subscriber: subscriber
                            }));
                        } else {
                            do {
                                if (index >= count) {
                                    subscriber.complete();
                                    break;
                                }
                                subscriber.next(array[index++]);
                                if (subscriber.isUnsubscribed) {
                                    break;
                                }
                            } while (true);
                        }
                    }
                }], [{
                    key: 'create',
                    value: function create(array, scheduler) {
                        return new ArrayObservable(array, scheduler);
                    }
                }, {
                    key: 'of',
                    value: function of() {
                        for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
                            array[_key] = arguments[_key];
                        }

                        var scheduler = array[array.length - 1];
                        if (scheduler && typeof scheduler.schedule === "function") {
                            array.pop();
                        } else {
                            scheduler = void 0;
                        }
                        var len = array.length;
                        if (len > 1) {
                            return new ArrayObservable(array, scheduler);
                        } else if (len === 1) {
                            return new ScalarObservable(array[0], scheduler);
                        } else {
                            return new EmptyObservable(scheduler);
                        }
                    }
                }, {
                    key: 'dispatch',
                    value: function dispatch(state) {
                        var array = state.array;
                        var index = state.index;
                        var count = state.count;
                        var subscriber = state.subscriber;

                        if (index >= count) {
                            subscriber.complete();
                            return;
                        }
                        subscriber.next(array[index]);
                        if (subscriber.isUnsubscribed) {
                            return;
                        }
                        state.index = index + 1;
                        this.schedule(state);
                    }
                }]);

                return ArrayObservable;
            })(Observable);

            _export('default', ArrayObservable);
        }
    };
});