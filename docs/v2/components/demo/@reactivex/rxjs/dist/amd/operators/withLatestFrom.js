var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1) {
    function withLatestFrom() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var project = args.pop();
        var observables = args;
        return this.lift(new WithLatestFromOperator(observables, project));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = withLatestFrom;
    var WithLatestFromOperator = (function () {
        function WithLatestFromOperator(observables, project) {
            this.observables = observables;
            this.project = project;
        }
        WithLatestFromOperator.prototype.call = function (subscriber) {
            return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
        };
        return WithLatestFromOperator;
    })();
    var WithLatestFromSubscriber = (function (_super) {
        __extends(WithLatestFromSubscriber, _super);
        function WithLatestFromSubscriber(destination, observables, project) {
            _super.call(this, destination);
            this.observables = observables;
            this.project = project;
            var len = observables.length;
            this.values = new Array(len);
            this.toSet = len;
            for (var i = 0; i < len; i++) {
                this.add(observables[i]._subscribe(new WithLatestInnerSubscriber(this, i)));
            }
        }
        WithLatestFromSubscriber.prototype.notifyValue = function (index, value) {
            this.values[index] = value;
            this.toSet--;
        };
        WithLatestFromSubscriber.prototype._next = function (value) {
            if (this.toSet === 0) {
                var values = this.values;
                var result = tryCatch_1.default(this.project)([value].concat(values));
                if (result === errorObject_1.errorObject) {
                    this.destination.error(result.e);
                }
                else {
                    this.destination.next(result);
                }
            }
        };
        return WithLatestFromSubscriber;
    })(Subscriber_1.default);
    var WithLatestInnerSubscriber = (function (_super) {
        __extends(WithLatestInnerSubscriber, _super);
        function WithLatestInnerSubscriber(parent, valueIndex) {
            _super.call(this, null);
            this.parent = parent;
            this.valueIndex = valueIndex;
        }
        WithLatestInnerSubscriber.prototype._next = function (value) {
            this.parent.notifyValue(this.valueIndex, value);
        };
        WithLatestInnerSubscriber.prototype._error = function (err) {
            this.parent.error(err);
        };
        WithLatestInnerSubscriber.prototype._complete = function () {
            // noop
        };
        return WithLatestInnerSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=withLatestFrom.js.map