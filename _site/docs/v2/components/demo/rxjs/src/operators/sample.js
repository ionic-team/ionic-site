System.register('rxjs/src/operators/sample', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, SampleOperator, SampleSubscriber, SampleNoficationSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', sample);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function sample(notifier) {
        return this.lift(new SampleOperator(notifier));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }],
        execute: function () {
            SampleOperator = (function () {
                function SampleOperator(notifier) {
                    _classCallCheck(this, SampleOperator);

                    this.notifier = notifier;
                }

                _createClass(SampleOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new SampleSubscriber(subscriber, this.notifier);
                    }
                }]);

                return SampleOperator;
            })();

            SampleSubscriber = (function (_Subscriber) {
                _inherits(SampleSubscriber, _Subscriber);

                function SampleSubscriber(destination, notifier) {
                    _classCallCheck(this, SampleSubscriber);

                    _get(Object.getPrototypeOf(SampleSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.notifier = notifier;
                    this.hasValue = false;
                    this.add(notifier._subscribe(new SampleNoficationSubscriber(this)));
                }

                _createClass(SampleSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.lastValue = value;
                        this.hasValue = true;
                    }
                }, {
                    key: 'notifyNext',
                    value: function notifyNext() {
                        if (this.hasValue) {
                            this.destination.next(this.lastValue);
                        }
                    }
                }]);

                return SampleSubscriber;
            })(Subscriber);

            SampleNoficationSubscriber = (function (_Subscriber2) {
                _inherits(SampleNoficationSubscriber, _Subscriber2);

                function SampleNoficationSubscriber(parent) {
                    _classCallCheck(this, SampleNoficationSubscriber);

                    _get(Object.getPrototypeOf(SampleNoficationSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                }

                _createClass(SampleNoficationSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.parent.notifyNext();
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.parent.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        //noop
                    }
                }]);

                return SampleNoficationSubscriber;
            })(Subscriber);
        }
    };
});