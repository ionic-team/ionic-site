System.register('rxjs/src/observables/DeferObservable', ['../Observable', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Observable, tryCatch, errorObject, DeferObservable;

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
        }],
        execute: function () {
            DeferObservable = (function (_Observable) {
                _inherits(DeferObservable, _Observable);

                function DeferObservable(observableFactory) {
                    _classCallCheck(this, DeferObservable);

                    _get(Object.getPrototypeOf(DeferObservable.prototype), 'constructor', this).call(this);
                    this.observableFactory = observableFactory;
                }

                _createClass(DeferObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var result = tryCatch(this.observableFactory)();
                        if (result === errorObject) {
                            subscriber.error(errorObject.e);
                        } else {
                            result.subscribe(subscriber);
                        }
                    }
                }], [{
                    key: 'create',
                    value: function create(observableFactory) {
                        return new DeferObservable(observableFactory);
                    }
                }]);

                return DeferObservable;
            })(Observable);

            _export('default', DeferObservable);
        }
    };
});