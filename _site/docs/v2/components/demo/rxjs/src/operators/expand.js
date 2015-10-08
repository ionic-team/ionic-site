System.register('rxjs/src/operators/expand', ['./merge-support', '../observables/EmptyObservable', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var MergeSubscriber, MergeInnerSubscriber, EmptyObservable, tryCatch, errorObject, ExpandOperator, ExpandSubscriber, ExpandInnerSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', expand);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function expand(project) {
        return this.lift(new ExpandOperator(project));
    }

    return {
        setters: [function (_mergeSupport) {
            MergeSubscriber = _mergeSupport.MergeSubscriber;
            MergeInnerSubscriber = _mergeSupport.MergeInnerSubscriber;
        }, function (_observablesEmptyObservable) {
            EmptyObservable = _observablesEmptyObservable['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            ExpandOperator = (function () {
                function ExpandOperator(project) {
                    _classCallCheck(this, ExpandOperator);

                    this.project = project;
                }

                _createClass(ExpandOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new ExpandSubscriber(subscriber, this.project);
                    }
                }]);

                return ExpandOperator;
            })();

            ExpandSubscriber = (function (_MergeSubscriber) {
                _inherits(ExpandSubscriber, _MergeSubscriber);

                function ExpandSubscriber(destination, project) {
                    _classCallCheck(this, ExpandSubscriber);

                    _get(Object.getPrototypeOf(ExpandSubscriber.prototype), 'constructor', this).call(this, destination, Number.POSITIVE_INFINITY);
                    this.project = project;
                }

                _createClass(ExpandSubscriber, [{
                    key: '_project',
                    value: function _project(value, index) {
                        var observable = tryCatch(this.project).call(this, value, index);
                        if (observable === errorObject) {
                            this.error(errorObject.e);
                            return null;
                        }
                        return observable;
                    }
                }, {
                    key: '_subscribeInner',
                    value: function _subscribeInner(observable, value, index) {
                        if (observable._isScalar) {
                            this.destination.next(observable.value);
                            this._innerComplete();
                            this._next(observable.value);
                        } else if (observable instanceof EmptyObservable) {
                            this._innerComplete();
                        } else {
                            return observable._subscribe(new ExpandInnerSubscriber(this.destination, this));
                        }
                    }
                }]);

                return ExpandSubscriber;
            })(MergeSubscriber);

            ExpandInnerSubscriber = (function (_MergeInnerSubscriber) {
                _inherits(ExpandInnerSubscriber, _MergeInnerSubscriber);

                function ExpandInnerSubscriber(destination, parent) {
                    _classCallCheck(this, ExpandInnerSubscriber);

                    _get(Object.getPrototypeOf(ExpandInnerSubscriber.prototype), 'constructor', this).call(this, destination, parent);
                }

                _createClass(ExpandInnerSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.destination.next(value);
                        this.parent.next(value);
                    }
                }]);

                return ExpandInnerSubscriber;
            })(MergeInnerSubscriber);
        }
    };
});