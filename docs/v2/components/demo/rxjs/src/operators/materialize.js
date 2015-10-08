System.register('rxjs/src/operators/materialize', ['../Subscriber', '../Notification'], function (_export) {
    'use strict';

    var Subscriber, Notification, MaterializeOperator, MaterializeSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', materialize);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function materialize() {
        return this.lift(new MaterializeOperator());
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_Notification) {
            Notification = _Notification['default'];
        }],
        execute: function () {
            MaterializeOperator = (function () {
                function MaterializeOperator() {
                    _classCallCheck(this, MaterializeOperator);
                }

                _createClass(MaterializeOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new MaterializeSubscriber(subscriber);
                    }
                }]);

                return MaterializeOperator;
            })();

            MaterializeSubscriber = (function (_Subscriber) {
                _inherits(MaterializeSubscriber, _Subscriber);

                function MaterializeSubscriber(destination) {
                    _classCallCheck(this, MaterializeSubscriber);

                    _get(Object.getPrototypeOf(MaterializeSubscriber.prototype), 'constructor', this).call(this, destination);
                }

                _createClass(MaterializeSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.destination.next(Notification.createNext(value));
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        var destination = this.destination;
                        destination.next(Notification.createError(err));
                        destination.complete();
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var destination = this.destination;
                        destination.next(Notification.createComplete());
                        destination.complete();
                    }
                }]);

                return MaterializeSubscriber;
            })(Subscriber);
        }
    };
});