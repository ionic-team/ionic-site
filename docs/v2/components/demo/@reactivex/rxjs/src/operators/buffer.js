System.register('rxjs/src/operators/buffer', ['../Subscriber'], function (_export) {
    /**
     * buffers the incoming observable values until the passed `closingNotifier` emits a value, at which point
     * it emits the buffer on the returned observable and starts a new buffer internally, awaiting the
     * next time `closingNotifier` emits
     *
     * @param {Observable<any>} closingNotifier an observable, that signals the buffer to be emitted from the returned observable
     * @returns {Observable<T[]>} an observable of buffers, which are arrays of values
     */
    'use strict';

    var Subscriber, BufferOperator, BufferSubscriber, BufferClosingNotifierSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', buffer);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function buffer(closingNotifier) {
        return this.lift(new BufferOperator(closingNotifier));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }],
        execute: function () {
            BufferOperator = (function () {
                function BufferOperator(closingNotifier) {
                    _classCallCheck(this, BufferOperator);

                    this.closingNotifier = closingNotifier;
                }

                _createClass(BufferOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new BufferSubscriber(subscriber, this.closingNotifier);
                    }
                }]);

                return BufferOperator;
            })();

            BufferSubscriber = (function (_Subscriber) {
                _inherits(BufferSubscriber, _Subscriber);

                function BufferSubscriber(destination, closingNotifier) {
                    _classCallCheck(this, BufferSubscriber);

                    _get(Object.getPrototypeOf(BufferSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.buffer = [];
                    this.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
                }

                _createClass(BufferSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.buffer.push(value);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.flushBuffer();
                        this.destination.complete();
                    }
                }, {
                    key: 'flushBuffer',
                    value: function flushBuffer() {
                        var buffer = this.buffer;
                        this.buffer = [];
                        this.destination.next(buffer);
                    }
                }]);

                return BufferSubscriber;
            })(Subscriber);

            BufferClosingNotifierSubscriber = (function (_Subscriber2) {
                _inherits(BufferClosingNotifierSubscriber, _Subscriber2);

                function BufferClosingNotifierSubscriber(parent) {
                    _classCallCheck(this, BufferClosingNotifierSubscriber);

                    _get(Object.getPrototypeOf(BufferClosingNotifierSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                }

                _createClass(BufferClosingNotifierSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.parent.flushBuffer();
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.parent.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        // noop
                    }
                }]);

                return BufferClosingNotifierSubscriber;
            })(Subscriber);
        }
    };
});