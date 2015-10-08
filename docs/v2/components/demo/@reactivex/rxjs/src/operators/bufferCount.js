System.register('rxjs/src/operators/bufferCount', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, BufferCountOperator, BufferCountSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', bufferCount);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function bufferCount(bufferSize) {
        var startBufferEvery = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }],
        execute: function () {
            BufferCountOperator = (function () {
                function BufferCountOperator(bufferSize, startBufferEvery) {
                    _classCallCheck(this, BufferCountOperator);

                    this.bufferSize = bufferSize;
                    this.startBufferEvery = startBufferEvery;
                }

                _createClass(BufferCountOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
                    }
                }]);

                return BufferCountOperator;
            })();

            BufferCountSubscriber = (function (_Subscriber) {
                _inherits(BufferCountSubscriber, _Subscriber);

                function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
                    _classCallCheck(this, BufferCountSubscriber);

                    _get(Object.getPrototypeOf(BufferCountSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.bufferSize = bufferSize;
                    this.startBufferEvery = startBufferEvery;
                    this.buffers = [[]];
                    this.count = 0;
                }

                _createClass(BufferCountSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var count = this.count += 1;
                        var destination = this.destination;
                        var bufferSize = this.bufferSize;
                        var startBufferEvery = this.startBufferEvery == null ? bufferSize : this.startBufferEvery;
                        var buffers = this.buffers;
                        var len = buffers.length;
                        var remove = -1;
                        if (count % startBufferEvery === 0) {
                            buffers.push([]);
                        }
                        for (var i = 0; i < len; i++) {
                            var buffer = buffers[i];
                            buffer.push(value);
                            if (buffer.length === bufferSize) {
                                remove = i;
                                this.destination.next(buffer);
                            }
                        }
                        if (remove !== -1) {
                            buffers.splice(remove, 1);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var destination = this.destination;
                        var buffers = this.buffers;
                        while (buffers.length > 0) {
                            var buffer = buffers.shift();
                            if (buffer.length > 0) {
                                destination.next(buffer);
                            }
                        }
                        destination.complete();
                    }
                }]);

                return BufferCountSubscriber;
            })(Subscriber);
        }
    };
});