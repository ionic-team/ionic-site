System.register('rxjs/src/operators/filter', ['../Subscriber', '../util/tryCatch', '../util/errorObject', '../util/bindCallback'], function (_export) {
    /**
     * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
     * allowed by a `select` function
     *
     * @param {Function} select a function that is used to select the resulting values
     *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
     * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
     * @returns {Observable} an observable of values allowed by the select function
     */
    'use strict';

    var Subscriber, tryCatch, errorObject, bindCallback, FilterOperator, FilterSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', filter);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function filter(select, thisArg) {
        return this.lift(new FilterOperator(select, thisArg));
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
            FilterOperator = (function () {
                function FilterOperator(select, thisArg) {
                    _classCallCheck(this, FilterOperator);

                    this.select = bindCallback(select, thisArg, 2);
                }

                _createClass(FilterOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new FilterSubscriber(subscriber, this.select);
                    }
                }]);

                return FilterOperator;
            })();

            FilterSubscriber = (function (_Subscriber) {
                _inherits(FilterSubscriber, _Subscriber);

                function FilterSubscriber(destination, select) {
                    _classCallCheck(this, FilterSubscriber);

                    _get(Object.getPrototypeOf(FilterSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = 0;
                    this.select = select;
                }

                _createClass(FilterSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var result = tryCatch(this.select)(x, this.count++);
                        if (result === errorObject) {
                            this.destination.error(errorObject.e);
                        } else if (Boolean(result)) {
                            this.destination.next(x);
                        }
                    }
                }]);

                return FilterSubscriber;
            })(Subscriber);
        }
    };
});