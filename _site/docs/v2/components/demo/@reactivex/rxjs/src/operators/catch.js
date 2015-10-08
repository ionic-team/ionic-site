System.register('rxjs/src/operators/catch', ['../Subscriber', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, tryCatch, errorObject, CatchOperator, CatchSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', _catch);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _catch(selector) {
        var catchOperator = new CatchOperator(selector);
        var caught = this.lift(catchOperator);
        catchOperator.caught = caught;
        return caught;
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            CatchOperator = (function () {
                function CatchOperator(selector) {
                    _classCallCheck(this, CatchOperator);

                    this.selector = selector;
                }

                _createClass(CatchOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new CatchSubscriber(subscriber, this.selector, this.caught);
                    }
                }]);

                return CatchOperator;
            })();

            CatchSubscriber = (function (_Subscriber) {
                _inherits(CatchSubscriber, _Subscriber);

                function CatchSubscriber(destination, selector, caught) {
                    _classCallCheck(this, CatchSubscriber);

                    _get(Object.getPrototypeOf(CatchSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.selector = selector;
                    this.caught = caught;
                }

                _createClass(CatchSubscriber, [{
                    key: '_error',
                    value: function _error(err) {
                        var result = tryCatch(this.selector)(err, this.caught);
                        if (result === errorObject) {
                            this.destination.error(errorObject.e);
                        } else {
                            this.add(result.subscribe(this.destination));
                        }
                    }
                }]);

                return CatchSubscriber;
            })(Subscriber);
        }
    };
});