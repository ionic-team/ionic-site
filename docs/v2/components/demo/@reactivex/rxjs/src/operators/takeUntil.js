System.register('rxjs/src/operators/takeUntil', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, TakeUntilOperator, TakeUntilSubscriber, TakeUntilInnerSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', takeUntil);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function takeUntil(observable) {
        return this.lift(new TakeUntilOperator(observable));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }],
        execute: function () {
            TakeUntilOperator = (function () {
                function TakeUntilOperator(observable) {
                    _classCallCheck(this, TakeUntilOperator);

                    this.observable = observable;
                }

                _createClass(TakeUntilOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new TakeUntilSubscriber(subscriber, this.observable);
                    }
                }]);

                return TakeUntilOperator;
            })();

            TakeUntilSubscriber = (function (_Subscriber) {
                _inherits(TakeUntilSubscriber, _Subscriber);

                function TakeUntilSubscriber(destination, observable) {
                    _classCallCheck(this, TakeUntilSubscriber);

                    _get(Object.getPrototypeOf(TakeUntilSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.add(observable._subscribe(new TakeUntilInnerSubscriber(destination)));
                }

                return TakeUntilSubscriber;
            })(Subscriber);

            TakeUntilInnerSubscriber = (function (_Subscriber2) {
                _inherits(TakeUntilInnerSubscriber, _Subscriber2);

                function TakeUntilInnerSubscriber(destination) {
                    _classCallCheck(this, TakeUntilInnerSubscriber);

                    _get(Object.getPrototypeOf(TakeUntilInnerSubscriber.prototype), 'constructor', this).call(this, destination);
                }

                _createClass(TakeUntilInnerSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.destination.complete();
                    }
                }, {
                    key: '_error',
                    value: function _error(e) {
                        this.destination.error(e);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {}
                }]);

                return TakeUntilInnerSubscriber;
            })(Subscriber);
        }
    };
});