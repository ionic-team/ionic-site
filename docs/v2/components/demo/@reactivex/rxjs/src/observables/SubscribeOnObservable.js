System.register('rxjs/src/observables/SubscribeOnObservable', ['../Observable', '../schedulers/nextTick'], function (_export) {
    'use strict';

    var Observable, nextTick, SubscribeOnObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_schedulersNextTick) {
            nextTick = _schedulersNextTick['default'];
        }],
        execute: function () {
            SubscribeOnObservable = (function (_Observable) {
                _inherits(SubscribeOnObservable, _Observable);

                function SubscribeOnObservable(source) {
                    var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
                    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? nextTick : arguments[2];

                    _classCallCheck(this, SubscribeOnObservable);

                    _get(Object.getPrototypeOf(SubscribeOnObservable.prototype), 'constructor', this).call(this);
                    this.source = source;
                    this.delayTime = delay;
                    this.scheduler = scheduler;
                }

                _createClass(SubscribeOnObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var delay = this.delayTime;
                        var source = this.source;
                        var scheduler = this.scheduler;
                        subscriber.add(scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                            source: source, subscriber: subscriber
                        }));
                    }
                }], [{
                    key: 'create',
                    value: function create(source) {
                        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
                        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? nextTick : arguments[2];

                        return new SubscribeOnObservable(source, delay, scheduler);
                    }
                }, {
                    key: 'dispatch',
                    value: function dispatch(_ref) {
                        var source = _ref.source;
                        var subscriber = _ref.subscriber;

                        return source.subscribe(subscriber);
                    }
                }]);

                return SubscribeOnObservable;
            })(Observable);

            _export('default', SubscribeOnObservable);
        }
    };
});