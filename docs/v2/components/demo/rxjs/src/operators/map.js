System.register('rxjs/src/operators/map', ['../Subscriber', '../util/tryCatch', '../util/errorObject', '../util/bindCallback'], function (_export) {
    /**
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the returned observable
     *
     * @param {Function} project the function to create projection
     * @param {any} [thisArg] an optional argument to define what `this` is in the project function
     * @returns {Observable} a observable of projected values
     */
    'use strict';

    var Subscriber, tryCatch, errorObject, bindCallback, MapOperator, MapSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', map);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function map(project, thisArg) {
        return this.lift(new MapOperator(project, thisArg));
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
            MapOperator = (function () {
                function MapOperator(project, thisArg) {
                    _classCallCheck(this, MapOperator);

                    this.project = bindCallback(project, thisArg, 2);
                }

                _createClass(MapOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new MapSubscriber(subscriber, this.project);
                    }
                }]);

                return MapOperator;
            })();

            MapSubscriber = (function (_Subscriber) {
                _inherits(MapSubscriber, _Subscriber);

                function MapSubscriber(destination, project) {
                    _classCallCheck(this, MapSubscriber);

                    _get(Object.getPrototypeOf(MapSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = 0;
                    this.project = project;
                }

                _createClass(MapSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var result = tryCatch(this.project)(x, this.count++);
                        if (result === errorObject) {
                            this.error(errorObject.e);
                        } else {
                            this.destination.next(result);
                        }
                    }
                }]);

                return MapSubscriber;
            })(Subscriber);
        }
    };
});