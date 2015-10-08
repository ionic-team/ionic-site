System.register('rxjs/src/observables/FromEventPatternObservable', ['../Observable', '../Subscription', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Observable, Subscription, tryCatch, errorObject, FromEventPatternObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            FromEventPatternObservable = (function (_Observable) {
                _inherits(FromEventPatternObservable, _Observable);

                function FromEventPatternObservable(addHandler, removeHandler, selector) {
                    _classCallCheck(this, FromEventPatternObservable);

                    _get(Object.getPrototypeOf(FromEventPatternObservable.prototype), 'constructor', this).call(this);
                    this.addHandler = addHandler;
                    this.removeHandler = removeHandler;
                    this.selector = selector;
                }

                _createClass(FromEventPatternObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var addHandler = this.addHandler;
                        var removeHandler = this.removeHandler;
                        var selector = this.selector;
                        var handler = selector ? function (e) {
                            var result = tryCatch(selector).apply(null, arguments);
                            if (result === errorObject) {
                                subscriber.error(result.e);
                            } else {
                                subscriber.next(result);
                            }
                        } : function (e) {
                            subscriber.next(e);
                        };
                        var result = tryCatch(addHandler)(handler);
                        if (result === errorObject) {
                            subscriber.error(result.e);
                        }
                        subscriber.add(new Subscription(function () {
                            //TODO: determine whether or not to forward to error handler
                            removeHandler(handler);
                        }));
                    }
                }], [{
                    key: 'create',
                    value: function create(addHandler, removeHandler, selector) {
                        return new FromEventPatternObservable(addHandler, removeHandler, selector);
                        ;
                    }
                }]);

                return FromEventPatternObservable;
            })(Observable);

            _export('default', FromEventPatternObservable);
        }
    };
});