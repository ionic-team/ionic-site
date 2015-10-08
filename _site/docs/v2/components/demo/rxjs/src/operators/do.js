System.register('rxjs/src/operators/do', ['../Subscriber', '../util/noop', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, noop, tryCatch, errorObject, DoOperator, DoSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', _do);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _do(next, error, complete) {
        return this.lift(new DoOperator(next || noop, error || noop, complete || noop));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_utilNoop) {
            noop = _utilNoop['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            DoOperator = (function () {
                function DoOperator(next, error, complete) {
                    _classCallCheck(this, DoOperator);

                    this.next = next;
                    this.error = error;
                    this.complete = complete;
                }

                _createClass(DoOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new DoSubscriber(subscriber, this.next, this.error, this.complete);
                    }
                }]);

                return DoOperator;
            })();

            DoSubscriber = (function (_Subscriber) {
                _inherits(DoSubscriber, _Subscriber);

                function DoSubscriber(destination, next, error, complete) {
                    _classCallCheck(this, DoSubscriber);

                    _get(Object.getPrototypeOf(DoSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.__next = next;
                    this.__error = error;
                    this.__complete = complete;
                }

                _createClass(DoSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var result = tryCatch(this.__next)(x);
                        if (result === errorObject) {
                            this.destination.error(errorObject.e);
                        } else {
                            this.destination.next(x);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(e) {
                        var result = tryCatch(this.__error)(e);
                        if (result === errorObject) {
                            this.destination.error(errorObject.e);
                        } else {
                            this.destination.error(e);
                        }
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var result = tryCatch(this.__complete)();
                        if (result === errorObject) {
                            this.destination.error(errorObject.e);
                        } else {
                            this.destination.complete();
                        }
                    }
                }]);

                return DoSubscriber;
            })(Subscriber);
        }
    };
});