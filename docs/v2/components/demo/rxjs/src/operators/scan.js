System.register('rxjs/src/operators/scan', ['../Subscriber', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, tryCatch, errorObject, ScanOperator, ScanSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', scan);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function scan(project, acc) {
        return this.lift(new ScanOperator(project));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            ScanOperator = (function () {
                function ScanOperator(project, acc) {
                    _classCallCheck(this, ScanOperator);

                    this.acc = acc;
                    this.project = project;
                }

                _createClass(ScanOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new ScanSubscriber(subscriber, this.project, this.acc);
                    }
                }]);

                return ScanOperator;
            })();

            ScanSubscriber = (function (_Subscriber) {
                _inherits(ScanSubscriber, _Subscriber);

                function ScanSubscriber(destination, project, acc) {
                    _classCallCheck(this, ScanSubscriber);

                    _get(Object.getPrototypeOf(ScanSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.hasValue = false;
                    this.acc = acc;
                    this.project = project;
                    this.hasSeed = typeof acc !== "undefined";
                }

                _createClass(ScanSubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        if (this.hasValue || (this.hasValue = this.hasSeed)) {
                            var result = tryCatch(this.project).call(this, this.acc, x);
                            if (result === errorObject) {
                                this.destination.error(errorObject.e);
                            } else {
                                this.destination.next(this.acc = result);
                            }
                        } else {
                            return this.destination.next((this.hasValue = true) && (this.acc = x));
                        }
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        if (!this.hasValue && this.hasSeed) {
                            this.destination.next(this.acc);
                        }
                        this.destination.complete();
                    }
                }]);

                return ScanSubscriber;
            })(Subscriber);
        }
    };
});