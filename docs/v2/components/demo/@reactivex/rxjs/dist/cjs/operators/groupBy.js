'use strict';

exports.__esModule = true;
exports['default'] = groupBy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var _utilMap = require('../util/Map');

var _utilMap2 = _interopRequireDefault(_utilMap);

var _utilFastMap = require('../util/FastMap');

var _utilFastMap2 = _interopRequireDefault(_utilFastMap);

var _subjectsGroupSubject = require('../subjects/GroupSubject');

var _subjectsGroupSubject2 = _interopRequireDefault(_subjectsGroupSubject);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(keySelector, durationSelector, elementSelector));
}

var GroupByOperator = (function () {
    function GroupByOperator(keySelector, durationSelector, elementSelector) {
        _classCallCheck(this, GroupByOperator);

        this.keySelector = keySelector;
        this.durationSelector = durationSelector;
        this.elementSelector = elementSelector;
    }

    GroupByOperator.prototype.call = function call(subscriber) {
        return new GroupBySubscriber(subscriber, this.keySelector, this.durationSelector, this.elementSelector);
    };

    return GroupByOperator;
})();

var GroupBySubscriber = (function (_Subscriber) {
    _inherits(GroupBySubscriber, _Subscriber);

    function GroupBySubscriber(destination, keySelector, durationSelector, elementSelector) {
        _classCallCheck(this, GroupBySubscriber);

        _Subscriber.call(this, destination);
        this.keySelector = keySelector;
        this.durationSelector = durationSelector;
        this.elementSelector = elementSelector;
        this.groups = null;
    }

    GroupBySubscriber.prototype._next = function _next(x) {
        var key = _utilTryCatch2['default'](this.keySelector)(x);
        if (key === _utilErrorObject.errorObject) {
            this.error(key.e);
        } else {
            var groups = this.groups;
            var elementSelector = this.elementSelector;
            var durationSelector = this.durationSelector;
            if (!groups) {
                groups = this.groups = typeof key === 'string' ? new _utilFastMap2['default']() : new _utilMap2['default']();
            }
            var group = groups.get(key);
            if (!group) {
                groups.set(key, group = new _subjectsGroupSubject2['default'](key));
                if (durationSelector) {
                    var duration = _utilTryCatch2['default'](durationSelector)(group);
                    if (duration === _utilErrorObject.errorObject) {
                        this.error(duration.e);
                    } else {
                        this.add(duration._subscribe(new GroupDurationSubscriber(group, this)));
                    }
                }
                this.destination.next(group);
            }
            if (elementSelector) {
                var value = _utilTryCatch2['default'](elementSelector)(x);
                if (value === _utilErrorObject.errorObject) {
                    group.error(value.e);
                } else {
                    group.next(value);
                }
            } else {
                group.next(x);
            }
        }
    };

    GroupBySubscriber.prototype._error = function _error(err) {
        var _this = this;

        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
                _this.removeGroup(key);
            });
        }
        this.destination.error(err);
    };

    GroupBySubscriber.prototype._complete = function _complete() {
        var _this2 = this;

        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
                _this2.removeGroup(group);
            });
        }
        this.destination.complete();
    };

    GroupBySubscriber.prototype.removeGroup = function removeGroup(key) {
        this.groups[key] = null;
    };

    return GroupBySubscriber;
})(_Subscriber4['default']);

var GroupDurationSubscriber = (function (_Subscriber2) {
    _inherits(GroupDurationSubscriber, _Subscriber2);

    function GroupDurationSubscriber(group, parent) {
        _classCallCheck(this, GroupDurationSubscriber);

        _Subscriber2.call(this, null);
        this.group = group;
        this.parent = parent;
    }

    GroupDurationSubscriber.prototype._next = function _next(value) {
        var group = this.group;
        group.complete();
        this.parent.removeGroup(group.key);
    };

    GroupDurationSubscriber.prototype._error = function _error(err) {
        var group = this.group;
        group.error(err);
        this.parent.removeGroup(group.key);
    };

    GroupDurationSubscriber.prototype._complete = function _complete() {
        var group = this.group;
        group.complete();
        this.parent.removeGroup(group.key);
    };

    return GroupDurationSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];