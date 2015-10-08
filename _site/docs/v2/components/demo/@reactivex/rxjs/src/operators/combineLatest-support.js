System.register('rxjs/src/operators/combineLatest-support', ['../observables/ArrayObservable', './zip-support'], function (_export) {
    'use strict';

    var ArrayObservable, ZipSubscriber, ZipInnerSubscriber, CombineLatestOperator, CombineLatestSubscriber, CombineLatestInnerSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('combineLatest', combineLatest);

    _export('combineLatestProto', combineLatestProto);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function combineLatest() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        var project = observables[observables.length - 1];
        if (typeof project === "function") {
            observables.pop();
        }
        return new ArrayObservable(observables).lift(new CombineLatestOperator(project));
    }

    function combineLatestProto() {
        for (var _len2 = arguments.length, observables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            observables[_key2] = arguments[_key2];
        }

        var project = observables[observables.length - 1];
        if (typeof project === "function") {
            observables.pop();
        }
        observables.unshift(this);
        return new ArrayObservable(observables).lift(new CombineLatestOperator(project));
    }

    return {
        setters: [function (_observablesArrayObservable) {
            ArrayObservable = _observablesArrayObservable['default'];
        }, function (_zipSupport) {
            ZipSubscriber = _zipSupport.ZipSubscriber;
            ZipInnerSubscriber = _zipSupport.ZipInnerSubscriber;
        }],
        execute: function () {
            CombineLatestOperator = (function () {
                function CombineLatestOperator(project) {
                    _classCallCheck(this, CombineLatestOperator);

                    this.project = project;
                }

                _createClass(CombineLatestOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new CombineLatestSubscriber(subscriber, this.project);
                    }
                }]);

                return CombineLatestOperator;
            })();

            _export('CombineLatestOperator', CombineLatestOperator);

            CombineLatestSubscriber = (function (_ZipSubscriber) {
                _inherits(CombineLatestSubscriber, _ZipSubscriber);

                function CombineLatestSubscriber(destination, project) {
                    _classCallCheck(this, CombineLatestSubscriber);

                    _get(Object.getPrototypeOf(CombineLatestSubscriber.prototype), 'constructor', this).call(this, destination, project, []);
                    this.limit = 0;
                }

                _createClass(CombineLatestSubscriber, [{
                    key: '_subscribeInner',
                    value: function _subscribeInner(observable, values, index, total) {
                        return observable._subscribe(new CombineLatestInnerSubscriber(this.destination, this, values, index, total));
                    }
                }, {
                    key: '_innerComplete',
                    value: function _innerComplete(innerSubscriber) {
                        if ((this.active -= 1) === 0) {
                            this.destination.complete();
                        }
                    }
                }]);

                return CombineLatestSubscriber;
            })(ZipSubscriber);

            _export('CombineLatestSubscriber', CombineLatestSubscriber);

            CombineLatestInnerSubscriber = (function (_ZipInnerSubscriber) {
                _inherits(CombineLatestInnerSubscriber, _ZipInnerSubscriber);

                function CombineLatestInnerSubscriber(destination, parent, values, index, total) {
                    _classCallCheck(this, CombineLatestInnerSubscriber);

                    _get(Object.getPrototypeOf(CombineLatestInnerSubscriber.prototype), 'constructor', this).call(this, destination, parent, values, index, total);
                }

                _createClass(CombineLatestInnerSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var index = this.index;
                        var total = this.total;
                        var parent = this.parent;
                        var values = this.values;
                        var valueBox = values[index];
                        var limit = undefined;
                        if (valueBox) {
                            valueBox[0] = x;
                            limit = parent.limit;
                        } else {
                            limit = parent.limit += 1;
                            values[index] = [x];
                        }
                        if (limit >= total) {
                            this._projectNext(values, parent.project);
                        }
                    }
                }]);

                return CombineLatestInnerSubscriber;
            })(ZipInnerSubscriber);

            _export('CombineLatestInnerSubscriber', CombineLatestInnerSubscriber);
        }
    };
});