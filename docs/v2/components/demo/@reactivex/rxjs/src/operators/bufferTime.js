System.register('rxjs/src/operators/bufferTime', ['../Subscriber', '../schedulers/nextTick'], function (_export) {
    'use strict';

    var Subscriber, nextTick, BufferTimeOperator, BufferTimeSubscriber;

    var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', bufferTime);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function bufferTime(bufferTimeSpan) {
        var bufferCreationInterval = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? nextTick : arguments[2];

        return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
    }

    function dispatchBufferTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var prevBuffer = state.buffer;
        if (prevBuffer) {
            subscriber.closeBuffer(prevBuffer);
        }
        state.buffer = subscriber.openBuffer();
        this.schedule(state, state.bufferTimeSpan);
    }
    function dispatchBufferCreation(state) {
        var bufferCreationInterval = state.bufferCreationInterval;
        var bufferTimeSpan = state.bufferTimeSpan;
        var subscriber = state.subscriber;
        var scheduler = state.scheduler;

        var buffer = subscriber.openBuffer();
        var action = this;
        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
        action.schedule(state, bufferCreationInterval);
    }
    function dispatchBufferClose(_ref) {
        var subscriber = _ref.subscriber;
        var buffer = _ref.buffer;

        subscriber.closeBuffer(buffer);
    }
    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_schedulersNextTick) {
            nextTick = _schedulersNextTick['default'];
        }],
        execute: function () {
            BufferTimeOperator = (function () {
                function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
                    _classCallCheck(this, BufferTimeOperator);

                    this.bufferTimeSpan = bufferTimeSpan;
                    this.bufferCreationInterval = bufferCreationInterval;
                    this.scheduler = scheduler;
                }

                _createClass(BufferTimeOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
                    }
                }]);

                return BufferTimeOperator;
            })();

            BufferTimeSubscriber = (function (_Subscriber) {
                _inherits(BufferTimeSubscriber, _Subscriber);

                function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
                    _classCallCheck(this, BufferTimeSubscriber);

                    _get(Object.getPrototypeOf(BufferTimeSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.bufferTimeSpan = bufferTimeSpan;
                    this.bufferCreationInterval = bufferCreationInterval;
                    this.scheduler = scheduler;
                    this.buffers = [];
                    var buffer = this.openBuffer();
                    if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
                        this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: this, buffer: buffer }));
                        this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler }));
                    } else {
                        this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan }));
                    }
                }

                _createClass(BufferTimeSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var buffers = this.buffers;
                        var len = buffers.length;
                        for (var i = 0; i < len; i++) {
                            buffers[i].push(value);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.buffers.length = 0;
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var buffers = this.buffers;
                        while (buffers.length > 0) {
                            this.destination.next(buffers.shift());
                        }
                        this.destination.complete();
                    }
                }, {
                    key: 'openBuffer',
                    value: function openBuffer() {
                        var buffer = [];
                        this.buffers.push(buffer);
                        return buffer;
                    }
                }, {
                    key: 'closeBuffer',
                    value: function closeBuffer(buffer) {
                        this.destination.next(buffer);
                        var buffers = this.buffers;
                        buffers.splice(buffers.indexOf(buffer), 1);
                    }
                }]);

                return BufferTimeSubscriber;
            })(Subscriber);
        }
    };
});