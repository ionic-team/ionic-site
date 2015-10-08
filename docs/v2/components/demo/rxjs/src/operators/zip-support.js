System.register('rxjs/src/operators/zip-support', ['../Subscriber', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, tryCatch, errorObject, ZipOperator, ZipSubscriber, ZipInnerSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('mapValue', mapValue);

    _export('hasValue', hasValue);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function arrayInitialize(length) {
        var arr = Array(length);
        for (var i = 0; i < length; i++) {
            arr[i] = null;
        }
        return arr;
    }

    function mapValue(xs) {
        return xs[0];
    }

    function hasValue(xs) {
        return xs && xs.length === 1;
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            ZipOperator = (function () {
                function ZipOperator(project) {
                    _classCallCheck(this, ZipOperator);

                    this.project = project;
                }

                _createClass(ZipOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new ZipSubscriber(subscriber, this.project);
                    }
                }]);

                return ZipOperator;
            })();

            _export('ZipOperator', ZipOperator);

            ZipSubscriber = (function (_Subscriber) {
                _inherits(ZipSubscriber, _Subscriber);

                function ZipSubscriber(destination, project) {
                    var values = arguments.length <= 2 || arguments[2] === undefined ? Object.create(null) : arguments[2];

                    _classCallCheck(this, ZipSubscriber);

                    _get(Object.getPrototypeOf(ZipSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.active = 0;
                    this.observables = [];
                    this.limit = Number.POSITIVE_INFINITY;
                    this.project = typeof project === "function" ? project : null;
                    this.values = values;
                }

                _createClass(ZipSubscriber, [{
                    key: '_next',
                    value: function _next(observable) {
                        this.observables.push(observable);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var values = this.values;
                        var observables = this.observables;
                        var index = -1;
                        var len = observables.length;
                        this.active = len;
                        while (++index < len) {
                            this.add(this._subscribeInner(observables[index], values, index, len));
                        }
                    }
                }, {
                    key: '_subscribeInner',
                    value: function _subscribeInner(observable, values, index, total) {
                        return observable._subscribe(new ZipInnerSubscriber(this.destination, this, values, index, total));
                    }
                }, {
                    key: '_innerComplete',
                    value: function _innerComplete(innerSubscriber) {
                        if ((this.active -= 1) === 0) {
                            this.destination.complete();
                        } else {
                            this.limit = innerSubscriber.events;
                        }
                    }
                }]);

                return ZipSubscriber;
            })(Subscriber);

            _export('ZipSubscriber', ZipSubscriber);

            ZipInnerSubscriber = (function (_Subscriber2) {
                _inherits(ZipInnerSubscriber, _Subscriber2);

                function ZipInnerSubscriber(destination, parent, values, index, total) {
                    _classCallCheck(this, ZipInnerSubscriber);

                    _get(Object.getPrototypeOf(ZipInnerSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.events = 0;
                    this.parent = parent;
                    this.values = values;
                    this.index = index;
                    this.total = total;
                }

                _createClass(ZipInnerSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var parent = this.parent;
                        var events = this.events;
                        var total = this.total;
                        var limit = parent.limit;
                        if (events >= limit) {
                            this.destination.complete();
                            return;
                        }
                        var index = this.index;
                        var values = this.values;
                        var zipped = values[events] || (values[events] = arrayInitialize(total));
                        zipped[index] = [x];
                        if (zipped.every(hasValue)) {
                            this._projectNext(zipped, parent.project);
                            values[events] = undefined;
                        }
                        this.events = events + 1;
                    }
                }, {
                    key: '_projectNext',
                    value: function _projectNext(values, project) {
                        if (project && typeof project === "function") {
                            var result = tryCatch(project).apply(null, values.map(mapValue));
                            if (result === errorObject) {
                                this.destination.error(errorObject.e);
                                return;
                            } else {
                                this.destination.next(result);
                            }
                        } else {
                            this.destination.next(values.map(mapValue));
                        }
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.parent._innerComplete(this);
                    }
                }]);

                return ZipInnerSubscriber;
            })(Subscriber);

            _export('ZipInnerSubscriber', ZipInnerSubscriber);
        }
    };
});