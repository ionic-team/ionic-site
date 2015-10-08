System.register('rxjs/src/operators/switchLatestTo', ['./flatMapTo-support'], function (_export) {
    'use strict';

    var FlatMapToOperator, FlatMapToSubscriber, SwitchLatestToOperator, SwitchLatestToSubscriber;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    _export('default', switchLatestTo);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function switchLatestTo(observable, projectResult) {
        return this.lift(new SwitchLatestToOperator(observable, projectResult));
    }

    return {
        setters: [function (_flatMapToSupport) {
            FlatMapToOperator = _flatMapToSupport.FlatMapToOperator;
            FlatMapToSubscriber = _flatMapToSupport.FlatMapToSubscriber;
        }],
        execute: function () {
            SwitchLatestToOperator = (function (_FlatMapToOperator) {
                _inherits(SwitchLatestToOperator, _FlatMapToOperator);

                function SwitchLatestToOperator(observable, projectResult) {
                    _classCallCheck(this, SwitchLatestToOperator);

                    _get(Object.getPrototypeOf(SwitchLatestToOperator.prototype), 'constructor', this).call(this, observable, projectResult, 1);
                }

                _createClass(SwitchLatestToOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new SwitchLatestToSubscriber(subscriber, this.observable, this.projectResult);
                    }
                }]);

                return SwitchLatestToOperator;
            })(FlatMapToOperator);

            SwitchLatestToSubscriber = (function (_FlatMapToSubscriber) {
                _inherits(SwitchLatestToSubscriber, _FlatMapToSubscriber);

                function SwitchLatestToSubscriber(destination, observable, projectResult) {
                    _classCallCheck(this, SwitchLatestToSubscriber);

                    _get(Object.getPrototypeOf(SwitchLatestToSubscriber.prototype), 'constructor', this).call(this, destination, 1, observable, projectResult);
                }

                _createClass(SwitchLatestToSubscriber, [{
                    key: '_buffer',
                    value: function _buffer(value) {
                        var active = this.active;
                        if (active > 0) {
                            this.active = active - 1;
                            var inner = this.innerSubscription;
                            if (inner) {
                                inner.unsubscribe();
                            }
                        }
                        this._next(value);
                    }
                }, {
                    key: '_subscribeInner',
                    value: function _subscribeInner(observable, value, index) {
                        return this.innerSubscription = _get(Object.getPrototypeOf(SwitchLatestToSubscriber.prototype), '_subscribeInner', this).call(this, observable, value, index);
                    }
                }]);

                return SwitchLatestToSubscriber;
            })(FlatMapToSubscriber);
        }
    };
});