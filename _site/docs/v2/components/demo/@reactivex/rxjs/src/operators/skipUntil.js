System.register('rxjs/src/operators/skipUntil', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, SkipUntilOperator, SkipUntilSubscriber, NotificationSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', skipUntil);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function skipUntil(total) {
        return this.lift(new SkipUntilOperator(total));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }],
        execute: function () {
            SkipUntilOperator = (function () {
                function SkipUntilOperator(notifier) {
                    _classCallCheck(this, SkipUntilOperator);

                    this.notifier = notifier;
                }

                _createClass(SkipUntilOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new SkipUntilSubscriber(subscriber, this.notifier);
                    }
                }]);

                return SkipUntilOperator;
            })();

            SkipUntilSubscriber = (function (_Subscriber) {
                _inherits(SkipUntilSubscriber, _Subscriber);

                function SkipUntilSubscriber(destination, notifier) {
                    _classCallCheck(this, SkipUntilSubscriber);

                    _get(Object.getPrototypeOf(SkipUntilSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.notifier = notifier;
                    this.notificationSubscriber = new NotificationSubscriber();
                    this.add(this.notifier.subscribe(this.notificationSubscriber));
                }

                _createClass(SkipUntilSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        if (this.notificationSubscriber.hasNotified) {
                            this.destination.next(x);
                        }
                    }
                }]);

                return SkipUntilSubscriber;
            })(Subscriber);

            NotificationSubscriber = (function (_Subscriber2) {
                _inherits(NotificationSubscriber, _Subscriber2);

                function NotificationSubscriber() {
                    _classCallCheck(this, NotificationSubscriber);

                    _get(Object.getPrototypeOf(NotificationSubscriber.prototype), 'constructor', this).call(this, null);
                    this.hasNotified = false;
                }

                _createClass(NotificationSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.hasNotified = true;
                        this.unsubscribe();
                    }
                }]);

                return NotificationSubscriber;
            })(Subscriber);
        }
    };
});