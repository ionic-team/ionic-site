System.register('rxjs/src/operators/flatMapTo-support', ['./flatMap-support'], function (_export) {
    'use strict';

    var FlatMapSubscriber, FlatMapToOperator, FlatMapToSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_flatMapSupport) {
            FlatMapSubscriber = _flatMapSupport.FlatMapSubscriber;
        }],
        execute: function () {
            FlatMapToOperator = (function () {
                function FlatMapToOperator(observable, projectResult) {
                    var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

                    _classCallCheck(this, FlatMapToOperator);

                    this.observable = observable;
                    this.projectResult = projectResult;
                    this.concurrent = concurrent;
                }

                _createClass(FlatMapToOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new FlatMapToSubscriber(subscriber, this.concurrent, this.observable, this.projectResult);
                    }
                }]);

                return FlatMapToOperator;
            })();

            _export('FlatMapToOperator', FlatMapToOperator);

            FlatMapToSubscriber = (function (_FlatMapSubscriber) {
                _inherits(FlatMapToSubscriber, _FlatMapSubscriber);

                function FlatMapToSubscriber(destination, concurrent, observable, projectResult) {
                    _classCallCheck(this, FlatMapToSubscriber);

                    _get(Object.getPrototypeOf(FlatMapToSubscriber.prototype), 'constructor', this).call(this, destination, concurrent, null, projectResult);
                    this.observable = observable;
                }

                _createClass(FlatMapToSubscriber, [{
                    key: '_project',
                    value: function _project(value, index) {
                        return this.observable;
                    }
                }]);

                return FlatMapToSubscriber;
            })(FlatMapSubscriber);

            _export('FlatMapToSubscriber', FlatMapToSubscriber);
        }
    };
});