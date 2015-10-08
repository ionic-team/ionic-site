System.register('rxjs/src/operators/withLatestFrom', ['../Subscriber', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, tryCatch, errorObject, WithLatestFromOperator, WithLatestFromSubscriber, WithLatestInnerSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', withLatestFrom);

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function withLatestFrom() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var project = args.pop();
        var observables = args;
        return this.lift(new WithLatestFromOperator(observables, project));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            WithLatestFromOperator = (function () {
                function WithLatestFromOperator(observables, project) {
                    _classCallCheck(this, WithLatestFromOperator);

                    this.observables = observables;
                    this.project = project;
                }

                _createClass(WithLatestFromOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
                    }
                }]);

                return WithLatestFromOperator;
            })();

            WithLatestFromSubscriber = (function (_Subscriber) {
                _inherits(WithLatestFromSubscriber, _Subscriber);

                function WithLatestFromSubscriber(destination, observables, project) {
                    _classCallCheck(this, WithLatestFromSubscriber);

                    _get(Object.getPrototypeOf(WithLatestFromSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.observables = observables;
                    this.project = project;
                    var len = observables.length;
                    this.values = new Array(len);
                    this.toSet = len;
                    for (var i = 0; i < len; i++) {
                        this.add(observables[i]._subscribe(new WithLatestInnerSubscriber(this, i)));
                    }
                }

                _createClass(WithLatestFromSubscriber, [{
                    key: 'notifyValue',
                    value: function notifyValue(index, value) {
                        this.values[index] = value;
                        this.toSet--;
                    }
                }, {
                    key: '_next',
                    value: function _next(value) {
                        if (this.toSet === 0) {
                            var values = this.values;
                            var result = tryCatch(this.project)([value].concat(_toConsumableArray(values)));
                            if (result === errorObject) {
                                this.destination.error(result.e);
                            } else {
                                this.destination.next(result);
                            }
                        }
                    }
                }]);

                return WithLatestFromSubscriber;
            })(Subscriber);

            WithLatestInnerSubscriber = (function (_Subscriber2) {
                _inherits(WithLatestInnerSubscriber, _Subscriber2);

                function WithLatestInnerSubscriber(parent, valueIndex) {
                    _classCallCheck(this, WithLatestInnerSubscriber);

                    _get(Object.getPrototypeOf(WithLatestInnerSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                    this.valueIndex = valueIndex;
                }

                _createClass(WithLatestInnerSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.parent.notifyValue(this.valueIndex, value);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.parent.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        // noop
                    }
                }]);

                return WithLatestInnerSubscriber;
            })(Subscriber);
        }
    };
});