System.register('rxjs/src/observables/FromObservable', ['./PromiseObservable', './IteratorObservable', './ArrayObservable', '../util/Symbol_observable', '../util/Symbol_iterator', '../Observable', '../operators/observeOn-support', '../schedulers/immediate'], function (_export) {
    'use strict';

    var PromiseObservable, IteratorObservable, ArrayObservable, $$observable, $$iterator, Observable, ObserveOnSubscriber, immediate, isArray, FromObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_PromiseObservable) {
            PromiseObservable = _PromiseObservable['default'];
        }, function (_IteratorObservable) {
            IteratorObservable = _IteratorObservable['default'];
        }, function (_ArrayObservable) {
            ArrayObservable = _ArrayObservable['default'];
        }, function (_utilSymbol_observable) {
            $$observable = _utilSymbol_observable['default'];
        }, function (_utilSymbol_iterator) {
            $$iterator = _utilSymbol_iterator['default'];
        }, function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_operatorsObserveOnSupport) {
            ObserveOnSubscriber = _operatorsObserveOnSupport.ObserveOnSubscriber;
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }],
        execute: function () {
            isArray = Array.isArray;

            FromObservable = (function (_Observable) {
                _inherits(FromObservable, _Observable);

                function FromObservable(ish, scheduler) {
                    _classCallCheck(this, FromObservable);

                    _get(Object.getPrototypeOf(FromObservable.prototype), 'constructor', this).call(this, null);
                    this.ish = ish;
                    this.scheduler = scheduler;
                }

                _createClass(FromObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var ish = this.ish;
                        var scheduler = this.scheduler;
                        if (scheduler === immediate) {
                            return this.ish[$$observable]().subscribe(subscriber);
                        } else {
                            return this.ish[$$observable]().subscribe(new ObserveOnSubscriber(subscriber, scheduler, 0));
                        }
                    }
                }], [{
                    key: 'create',
                    value: function create(ish) {
                        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? immediate : arguments[1];

                        if (ish) {
                            if (isArray(ish)) {
                                return new ArrayObservable(ish, scheduler);
                            } else if (typeof ish.then === 'function') {
                                return new PromiseObservable(ish, scheduler);
                            } else if (typeof ish[$$observable] === 'function') {
                                if (ish instanceof Observable) {
                                    return ish;
                                }
                                return new FromObservable(ish, scheduler);
                            } else if (typeof ish[$$iterator] === 'function') {
                                return new IteratorObservable(ish, null, null, scheduler);
                            }
                        }
                        throw new TypeError(typeof ish + ' is not observable');
                    }
                }]);

                return FromObservable;
            })(Observable);

            _export('default', FromObservable);
        }
    };
});