System.register('rxjs/src/operators/groupBy', ['../Subscriber', '../util/Map', '../util/FastMap', '../subjects/GroupSubject', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, Map, FastMap, GroupSubject, tryCatch, errorObject, GroupByOperator, GroupBySubscriber, GroupDurationSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', groupBy);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function groupBy(keySelector, elementSelector, durationSelector) {
        return this.lift(new GroupByOperator(keySelector, durationSelector, elementSelector));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }, function (_utilMap) {
            Map = _utilMap['default'];
        }, function (_utilFastMap) {
            FastMap = _utilFastMap['default'];
        }, function (_subjectsGroupSubject) {
            GroupSubject = _subjectsGroupSubject['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            GroupByOperator = (function () {
                function GroupByOperator(keySelector, durationSelector, elementSelector) {
                    _classCallCheck(this, GroupByOperator);

                    this.keySelector = keySelector;
                    this.durationSelector = durationSelector;
                    this.elementSelector = elementSelector;
                }

                _createClass(GroupByOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new GroupBySubscriber(subscriber, this.keySelector, this.durationSelector, this.elementSelector);
                    }
                }]);

                return GroupByOperator;
            })();

            GroupBySubscriber = (function (_Subscriber) {
                _inherits(GroupBySubscriber, _Subscriber);

                function GroupBySubscriber(destination, keySelector, durationSelector, elementSelector) {
                    _classCallCheck(this, GroupBySubscriber);

                    _get(Object.getPrototypeOf(GroupBySubscriber.prototype), 'constructor', this).call(this, destination);
                    this.keySelector = keySelector;
                    this.durationSelector = durationSelector;
                    this.elementSelector = elementSelector;
                    this.groups = null;
                }

                _createClass(GroupBySubscriber, [{
                    key: '_next',
                    value: function _next(x) {
                        var key = tryCatch(this.keySelector)(x);
                        if (key === errorObject) {
                            this.error(key.e);
                        } else {
                            var groups = this.groups;
                            var elementSelector = this.elementSelector;
                            var durationSelector = this.durationSelector;
                            if (!groups) {
                                groups = this.groups = typeof key === 'string' ? new FastMap() : new Map();
                            }
                            var group = groups.get(key);
                            if (!group) {
                                groups.set(key, group = new GroupSubject(key));
                                if (durationSelector) {
                                    var duration = tryCatch(durationSelector)(group);
                                    if (duration === errorObject) {
                                        this.error(duration.e);
                                    } else {
                                        this.add(duration._subscribe(new GroupDurationSubscriber(group, this)));
                                    }
                                }
                                this.destination.next(group);
                            }
                            if (elementSelector) {
                                var value = tryCatch(elementSelector)(x);
                                if (value === errorObject) {
                                    group.error(value.e);
                                } else {
                                    group.next(value);
                                }
                            } else {
                                group.next(x);
                            }
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        var _this = this;

                        var groups = this.groups;
                        if (groups) {
                            groups.forEach(function (group, key) {
                                group.error(err);
                                _this.removeGroup(key);
                            });
                        }
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var _this2 = this;

                        var groups = this.groups;
                        if (groups) {
                            groups.forEach(function (group, key) {
                                group.complete();
                                _this2.removeGroup(group);
                            });
                        }
                        this.destination.complete();
                    }
                }, {
                    key: 'removeGroup',
                    value: function removeGroup(key) {
                        this.groups[key] = null;
                    }
                }]);

                return GroupBySubscriber;
            })(Subscriber);

            GroupDurationSubscriber = (function (_Subscriber2) {
                _inherits(GroupDurationSubscriber, _Subscriber2);

                function GroupDurationSubscriber(group, parent) {
                    _classCallCheck(this, GroupDurationSubscriber);

                    _get(Object.getPrototypeOf(GroupDurationSubscriber.prototype), 'constructor', this).call(this, null);
                    this.group = group;
                    this.parent = parent;
                }

                _createClass(GroupDurationSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var group = this.group;
                        group.complete();
                        this.parent.removeGroup(group.key);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        var group = this.group;
                        group.error(err);
                        this.parent.removeGroup(group.key);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var group = this.group;
                        group.complete();
                        this.parent.removeGroup(group.key);
                    }
                }]);

                return GroupDurationSubscriber;
            })(Subscriber);
        }
    };
});