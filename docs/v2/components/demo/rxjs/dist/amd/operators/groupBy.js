var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/Map', '../util/FastMap', '../subjects/GroupSubject', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, Map_1, FastMap_1, GroupSubject_1, tryCatch_1, errorObject_1) {
    function groupBy(keySelector, elementSelector, durationSelector) {
        return this.lift(new GroupByOperator(keySelector, durationSelector, elementSelector));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = groupBy;
    var GroupByOperator = (function () {
        function GroupByOperator(keySelector, durationSelector, elementSelector) {
            this.keySelector = keySelector;
            this.durationSelector = durationSelector;
            this.elementSelector = elementSelector;
        }
        GroupByOperator.prototype.call = function (subscriber) {
            return new GroupBySubscriber(subscriber, this.keySelector, this.durationSelector, this.elementSelector);
        };
        return GroupByOperator;
    })();
    var GroupBySubscriber = (function (_super) {
        __extends(GroupBySubscriber, _super);
        function GroupBySubscriber(destination, keySelector, durationSelector, elementSelector) {
            _super.call(this, destination);
            this.keySelector = keySelector;
            this.durationSelector = durationSelector;
            this.elementSelector = elementSelector;
            this.groups = null;
        }
        GroupBySubscriber.prototype._next = function (x) {
            var key = tryCatch_1.default(this.keySelector)(x);
            if (key === errorObject_1.errorObject) {
                this.error(key.e);
            }
            else {
                var groups = this.groups;
                var elementSelector = this.elementSelector;
                var durationSelector = this.durationSelector;
                if (!groups) {
                    groups = this.groups = typeof key === 'string' ? new FastMap_1.default() : new Map_1.default();
                }
                var group = groups.get(key);
                if (!group) {
                    groups.set(key, group = new GroupSubject_1.default(key));
                    if (durationSelector) {
                        var duration = tryCatch_1.default(durationSelector)(group);
                        if (duration === errorObject_1.errorObject) {
                            this.error(duration.e);
                        }
                        else {
                            this.add(duration._subscribe(new GroupDurationSubscriber(group, this)));
                        }
                    }
                    this.destination.next(group);
                }
                if (elementSelector) {
                    var value = tryCatch_1.default(elementSelector)(x);
                    if (value === errorObject_1.errorObject) {
                        group.error(value.e);
                    }
                    else {
                        group.next(value);
                    }
                }
                else {
                    group.next(x);
                }
            }
        };
        GroupBySubscriber.prototype._error = function (err) {
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
        GroupBySubscriber.prototype._complete = function () {
            var _this = this;
            var groups = this.groups;
            if (groups) {
                groups.forEach(function (group, key) {
                    group.complete();
                    _this.removeGroup(group);
                });
            }
            this.destination.complete();
        };
        GroupBySubscriber.prototype.removeGroup = function (key) {
            this.groups[key] = null;
        };
        return GroupBySubscriber;
    })(Subscriber_1.default);
    var GroupDurationSubscriber = (function (_super) {
        __extends(GroupDurationSubscriber, _super);
        function GroupDurationSubscriber(group, parent) {
            _super.call(this, null);
            this.group = group;
            this.parent = parent;
        }
        GroupDurationSubscriber.prototype._next = function (value) {
            var group = this.group;
            group.complete();
            this.parent.removeGroup(group.key);
        };
        GroupDurationSubscriber.prototype._error = function (err) {
            var group = this.group;
            group.error(err);
            this.parent.removeGroup(group.key);
        };
        GroupDurationSubscriber.prototype._complete = function () {
            var group = this.group;
            group.complete();
            this.parent.removeGroup(group.key);
        };
        return GroupDurationSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=groupBy.js.map