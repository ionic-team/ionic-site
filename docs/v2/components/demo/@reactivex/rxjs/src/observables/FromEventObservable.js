System.register('rxjs/src/observables/FromEventObservable', ['../Observable', '../util/tryCatch', '../util/errorObject', '../Subscription'], function (_export) {
    'use strict';

    var Observable, tryCatch, errorObject, Subscription, FromEventObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }],
        execute: function () {
            FromEventObservable = (function (_Observable) {
                _inherits(FromEventObservable, _Observable);

                function FromEventObservable(sourceObj, eventName, selector) {
                    _classCallCheck(this, FromEventObservable);

                    _get(Object.getPrototypeOf(FromEventObservable.prototype), 'constructor', this).call(this);
                    this.sourceObj = sourceObj;
                    this.eventName = eventName;
                    this.selector = selector;
                }

                _createClass(FromEventObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var sourceObj = this.sourceObj;
                        var eventName = this.eventName;
                        var selector = this.selector;
                        var handler = selector ? function (e) {
                            var result = tryCatch(selector)(e);
                            if (result === errorObject) {
                                subscriber.error(result.e);
                            } else {
                                subscriber.next(result);
                            }
                        } : function (e) {
                            return subscriber.next(e);
                        };
                        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
                    }
                }], [{
                    key: 'create',
                    value: function create(sourceObj, eventName, selector) {
                        return new FromEventObservable(sourceObj, eventName, selector);
                    }
                }, {
                    key: 'setupSubscription',
                    value: function setupSubscription(sourceObj, eventName, handler, subscriber) {
                        var unsubscribe = undefined;
                        var tag = sourceObj.toString();
                        if (tag === '[object NodeList]' || tag === '[object HTMLCollection]') {
                            for (var i = 0, len = sourceObj.length; i < len; i++) {
                                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
                            }
                        } else if (typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function') {
                            sourceObj.addEventListener(eventName, handler);
                            unsubscribe = function () {
                                return sourceObj.removeEventListener(eventName, handler);
                            };
                        } else if (typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function') {
                            sourceObj.on(eventName, handler);
                            unsubscribe = function () {
                                return sourceObj.off(eventName, handler);
                            };
                        } else if (typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function') {
                            sourceObj.addListener(eventName, handler);
                            unsubscribe = function () {
                                return sourceObj.removeListener(eventName, handler);
                            };
                        }
                        subscriber.add(new Subscription(unsubscribe));
                    }
                }]);

                return FromEventObservable;
            })(Observable);

            _export('default', FromEventObservable);
        }
    };
});