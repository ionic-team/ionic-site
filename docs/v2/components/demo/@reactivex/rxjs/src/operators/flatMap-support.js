System.register('rxjs/src/operators/flatMap-support', ['./merge-support', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var MergeSubscriber, MergeInnerSubscriber, tryCatch, errorObject, FlatMapOperator, FlatMapSubscriber, FlatMapInnerSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_mergeSupport) {
            MergeSubscriber = _mergeSupport.MergeSubscriber;
            MergeInnerSubscriber = _mergeSupport.MergeInnerSubscriber;
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            FlatMapOperator = (function () {
                function FlatMapOperator(project, projectResult) {
                    var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

                    _classCallCheck(this, FlatMapOperator);

                    this.project = project;
                    this.projectResult = projectResult;
                    this.concurrent = concurrent;
                }

                _createClass(FlatMapOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new FlatMapSubscriber(subscriber, this.concurrent, this.project, this.projectResult);
                    }
                }]);

                return FlatMapOperator;
            })();

            _export('FlatMapOperator', FlatMapOperator);

            FlatMapSubscriber = (function (_MergeSubscriber) {
                _inherits(FlatMapSubscriber, _MergeSubscriber);

                function FlatMapSubscriber(destination, concurrent, project, projectResult) {
                    _classCallCheck(this, FlatMapSubscriber);

                    _get(Object.getPrototypeOf(FlatMapSubscriber.prototype), 'constructor', this).call(this, destination, concurrent);
                    this.project = project;
                    this.projectResult = projectResult;
                }

                _createClass(FlatMapSubscriber, [{
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
                        var projectResult = this.projectResult;
                        if (projectResult) {
                            return observable._subscribe(new FlatMapInnerSubscriber(this.destination, this, value, index, projectResult));
                        } else if (observable._isScalar) {
                            this.destination.next(observable.value);
                            this._innerComplete();
                        } else {
                            return observable._subscribe(new MergeInnerSubscriber(this.destination, this));
                        }
                    }
                }]);

                return FlatMapSubscriber;
            })(MergeSubscriber);

            _export('FlatMapSubscriber', FlatMapSubscriber);

            FlatMapInnerSubscriber = (function (_MergeInnerSubscriber) {
                _inherits(FlatMapInnerSubscriber, _MergeInnerSubscriber);

                function FlatMapInnerSubscriber(destination, parent, value, index, project) {
                    _classCallCheck(this, FlatMapInnerSubscriber);

                    _get(Object.getPrototypeOf(FlatMapInnerSubscriber.prototype), 'constructor', this).call(this, destination, parent);
                    this.count = 0;
                    this.value = value;
                    this.index = index;
                    this.project = project;
                }

                _createClass(FlatMapInnerSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var result = value;
                        var index = this.count++;
                        result = tryCatch(this.project).call(this, this.value, value, this.index, index);
                        if (result === errorObject) {
                            this.destination.error(errorObject.e);
                        } else {
                            this.destination.next(result);
                        }
                    }
                }]);

                return FlatMapInnerSubscriber;
            })(MergeInnerSubscriber);

            _export('FlatMapInnerSubscriber', FlatMapInnerSubscriber);
        }
    };
});