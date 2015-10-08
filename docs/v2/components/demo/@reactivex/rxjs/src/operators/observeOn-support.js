System.register('rxjs/src/operators/observeOn-support', ['../Subscriber', '../Notification'], function (_export) {
    'use strict';

    var Subscriber, Notification, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage;

    var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_Notification) {
            Notification = _Notification['default'];
        }],
        execute: function () {
            ObserveOnOperator = (function () {
                function ObserveOnOperator(scheduler) {
                    var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                    _classCallCheck(this, ObserveOnOperator);

                    this.delay = delay;
                    this.scheduler = scheduler;
                }

                _createClass(ObserveOnOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
                    }
                }]);

                return ObserveOnOperator;
            })();

            _export('ObserveOnOperator', ObserveOnOperator);

            ObserveOnSubscriber = (function (_Subscriber) {
                _inherits(ObserveOnSubscriber, _Subscriber);

                function ObserveOnSubscriber(destination, scheduler) {
                    var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

                    _classCallCheck(this, ObserveOnSubscriber);

                    _get(Object.getPrototypeOf(ObserveOnSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                }

                _createClass(ObserveOnSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification.createNext(x), this.destination)));
                    }
                }, {
                    key: '_error',
                    value: function _error(e) {
                        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification.createError(e), this.destination)));
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification.createComplete(), this.destination)));
                    }
                }], [{
                    key: 'dispatch',
                    value: function dispatch(_ref) {
                        var notification = _ref.notification;
                        var destination = _ref.destination;

                        notification.observe(destination);
                    }
                }]);

                return ObserveOnSubscriber;
            })(Subscriber);

            _export('ObserveOnSubscriber', ObserveOnSubscriber);

            ObserveOnMessage = function ObserveOnMessage(notification, destination) {
                _classCallCheck(this, ObserveOnMessage);

                this.notification = notification;
                this.destination = destination;
            };
        }
    };
});