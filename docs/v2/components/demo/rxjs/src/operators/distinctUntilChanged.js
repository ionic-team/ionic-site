System.register('rxjs/src/operators/distinctUntilChanged', ['../Subscriber', '../util/tryCatch', '../util/errorObject', '../util/bindCallback'], function (_export) {
    'use strict';

    var Subscriber, tryCatch, errorObject, bindCallback, DistinctUntilChangedOperator, DistinctUntilChangedSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', distinctUntilChanged);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function distinctUntilChanged(compare, thisArg) {
        return this.lift(new DistinctUntilChangedOperator(thisArg ? bindCallback(compare, thisArg, 2) : compare));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }, function (_utilBindCallback) {
            bindCallback = _utilBindCallback['default'];
        }],
        execute: function () {
            DistinctUntilChangedOperator = (function () {
                function DistinctUntilChangedOperator(compare) {
                    _classCallCheck(this, DistinctUntilChangedOperator);

                    this.compare = compare;
                }

                _createClass(DistinctUntilChangedOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new DistinctUntilChangedSubscriber(subscriber, this.compare);
                    }
                }]);

                return DistinctUntilChangedOperator;
            })();

            DistinctUntilChangedSubscriber = (function (_Subscriber) {
                _inherits(DistinctUntilChangedSubscriber, _Subscriber);

                function DistinctUntilChangedSubscriber(destination, compare) {
                    _classCallCheck(this, DistinctUntilChangedSubscriber);

                    _get(Object.getPrototypeOf(DistinctUntilChangedSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.hasValue = false;
                    if (typeof compare === "function") {
                        this.compare = compare;
                    }
                }

                _createClass(DistinctUntilChangedSubscriber, [{
                    key: 'compare',
                    value: function compare(x, y) {
                        return x === y;
                    }
                }, {
                    key: '_next',
                    value: function _next(x) {
                        var result = false;
                        if (this.hasValue) {
                            result = tryCatch(this.compare)(this.value, x);
                            if (result === errorObject) {
                                this.destination.error(errorObject.e);
                                return;
                            }
                        } else {
                            this.hasValue = true;
                        }
                        if (Boolean(result) === false) {
                            this.value = x;
                            this.destination.next(x);
                        }
                    }
                }]);

                return DistinctUntilChangedSubscriber;
            })(Subscriber);
        }
    };
});