System.register('rxjs/src/operators/merge-support', ['../Subscriber'], function (_export) {
    'use strict';

    var Subscriber, MergeOperator, MergeSubscriber, MergeInnerSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }],
        execute: function () {
            MergeOperator = (function () {
                function MergeOperator() {
                    var concurrent = arguments.length <= 0 || arguments[0] === undefined ? Number.POSITIVE_INFINITY : arguments[0];

                    _classCallCheck(this, MergeOperator);

                    this.concurrent = concurrent;
                }

                _createClass(MergeOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new MergeSubscriber(subscriber, this.concurrent);
                    }
                }]);

                return MergeOperator;
            })();

            _export('MergeOperator', MergeOperator);

            MergeSubscriber = (function (_Subscriber) {
                _inherits(MergeSubscriber, _Subscriber);

                function MergeSubscriber(destination, concurrent) {
                    _classCallCheck(this, MergeSubscriber);

                    _get(Object.getPrototypeOf(MergeSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.count = 0;
                    this.active = 0;
                    this.stopped = false;
                    this.buffer = [];
                    this.concurrent = concurrent;
                }

                _createClass(MergeSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var active = this.active;
                        if (active < this.concurrent) {
                            var index = this.count;
                            var observable = this._project(value, index);
                            if (observable) {
                                this.count = index + 1;
                                this.active = active + 1;
                                this.add(this._subscribeInner(observable, value, index));
                            }
                        } else {
                            this._buffer(value);
                        }
                    }
                }, {
                    key: 'complete',
                    value: function complete() {
                        this.stopped = true;
                        if (this.active === 0 && this.buffer.length === 0) {
                            _get(Object.getPrototypeOf(MergeSubscriber.prototype), 'complete', this).call(this);
                        }
                    }
                }, {
                    key: '_unsubscribe',
                    value: function _unsubscribe() {
                        this.buffer = void 0;
                    }
                }, {
                    key: '_project',
                    value: function _project(value, index) {
                        return value;
                    }
                }, {
                    key: '_buffer',
                    value: function _buffer(value) {
                        this.buffer.push(value);
                    }
                }, {
                    key: '_subscribeInner',
                    value: function _subscribeInner(observable, value, index) {
                        var destination = this.destination;
                        if (observable._isScalar) {
                            destination.next(observable.value);
                            this._innerComplete();
                        } else {
                            var subscriber = new MergeInnerSubscriber(destination, this);
                            observable._subscribe(subscriber);
                            return subscriber;
                        }
                    }
                }, {
                    key: '_innerComplete',
                    value: function _innerComplete() {
                        var buffer = this.buffer;
                        var active = this.active -= 1;
                        var stopped = this.stopped;
                        var pending = buffer.length;
                        if (stopped && active === 0 && pending === 0) {
                            _get(Object.getPrototypeOf(MergeSubscriber.prototype), 'complete', this).call(this);
                        } else if (active < this.concurrent && pending > 0) {
                            this._next(buffer.shift());
                        }
                    }
                }]);

                return MergeSubscriber;
            })(Subscriber);

            _export('MergeSubscriber', MergeSubscriber);

            MergeInnerSubscriber = (function (_Subscriber2) {
                _inherits(MergeInnerSubscriber, _Subscriber2);

                function MergeInnerSubscriber(destination, parent) {
                    _classCallCheck(this, MergeInnerSubscriber);

                    _get(Object.getPrototypeOf(MergeInnerSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.parent = parent;
                }

                _createClass(MergeInnerSubscriber, [{
                    key: '_complete',
                    value: function _complete() {
                        this.parent._innerComplete();
                    }
                }]);

                return MergeInnerSubscriber;
            })(Subscriber);

            _export('MergeInnerSubscriber', MergeInnerSubscriber);
        }
    };
});