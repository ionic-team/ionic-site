System.register('rxjs/src/operators/switchLatest', ['../Subscription', './flatMap-support'], function (_export) {
    'use strict';

    var Subscription, FlatMapOperator, FlatMapSubscriber, SwitchLatestOperator, SwitchLatestSubscriber;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    _export('default', switchLatest);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function switchLatest(project, projectResult) {
        return this.lift(new SwitchLatestOperator(project, projectResult));
    }

    return {
        setters: [function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_flatMapSupport) {
            FlatMapOperator = _flatMapSupport.FlatMapOperator;
            FlatMapSubscriber = _flatMapSupport.FlatMapSubscriber;
        }],
        execute: function () {
            SwitchLatestOperator = (function (_FlatMapOperator) {
                _inherits(SwitchLatestOperator, _FlatMapOperator);

                function SwitchLatestOperator(project, projectResult) {
                    _classCallCheck(this, SwitchLatestOperator);

                    _get(Object.getPrototypeOf(SwitchLatestOperator.prototype), 'constructor', this).call(this, project, projectResult, 1);
                }

                _createClass(SwitchLatestOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new SwitchLatestSubscriber(subscriber, this.project, this.projectResult);
                    }
                }]);

                return SwitchLatestOperator;
            })(FlatMapOperator);

            SwitchLatestSubscriber = (function (_FlatMapSubscriber) {
                _inherits(SwitchLatestSubscriber, _FlatMapSubscriber);

                function SwitchLatestSubscriber(destination, project, projectResult) {
                    _classCallCheck(this, SwitchLatestSubscriber);

                    _get(Object.getPrototypeOf(SwitchLatestSubscriber.prototype), 'constructor', this).call(this, destination, 1, project, projectResult);
                }

                _createClass(SwitchLatestSubscriber, [{
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
                        this.innerSubscription = new Subscription();
                        this.innerSubscription.add(_get(Object.getPrototypeOf(SwitchLatestSubscriber.prototype), '_subscribeInner', this).call(this, observable, value, index));
                        return this.innerSubscription;
                    }
                }]);

                return SwitchLatestSubscriber;
            })(FlatMapSubscriber);
        }
    };
});