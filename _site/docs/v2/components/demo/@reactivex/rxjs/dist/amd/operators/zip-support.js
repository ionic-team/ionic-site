var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1) {
    var ZipOperator = (function () {
        function ZipOperator(project) {
            this.project = project;
        }
        ZipOperator.prototype.call = function (subscriber) {
            return new ZipSubscriber(subscriber, this.project);
        };
        return ZipOperator;
    })();
    exports.ZipOperator = ZipOperator;
    var ZipSubscriber = (function (_super) {
        __extends(ZipSubscriber, _super);
        function ZipSubscriber(destination, project, values) {
            if (values === void 0) { values = Object.create(null); }
            _super.call(this, destination);
            this.active = 0;
            this.observables = [];
            this.limit = Number.POSITIVE_INFINITY;
            this.project = (typeof project === "function") ? project : null;
            this.values = values;
        }
        ZipSubscriber.prototype._next = function (observable) {
            this.observables.push(observable);
        };
        ZipSubscriber.prototype._complete = function () {
            var values = this.values;
            var observables = this.observables;
            var index = -1;
            var len = observables.length;
            this.active = len;
            while (++index < len) {
                this.add(this._subscribeInner(observables[index], values, index, len));
            }
        };
        ZipSubscriber.prototype._subscribeInner = function (observable, values, index, total) {
            return observable._subscribe(new ZipInnerSubscriber(this.destination, this, values, index, total));
        };
        ZipSubscriber.prototype._innerComplete = function (innerSubscriber) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
            else {
                this.limit = innerSubscriber.events;
            }
        };
        return ZipSubscriber;
    })(Subscriber_1.default);
    exports.ZipSubscriber = ZipSubscriber;
    function arrayInitialize(length) {
        var arr = Array(length);
        for (var i = 0; i < length; i++) {
            arr[i] = null;
        }
        return arr;
    }
    var ZipInnerSubscriber = (function (_super) {
        __extends(ZipInnerSubscriber, _super);
        function ZipInnerSubscriber(destination, parent, values, index, total) {
            _super.call(this, destination);
            this.events = 0;
            this.parent = parent;
            this.values = values;
            this.index = index;
            this.total = total;
        }
        ZipInnerSubscriber.prototype._next = function (x) {
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
        };
        ZipInnerSubscriber.prototype._projectNext = function (values, project) {
            if (project && typeof project === "function") {
                var result = tryCatch_1.default(project).apply(null, values.map(mapValue));
                if (result === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                    return;
                }
                else {
                    this.destination.next(result);
                }
            }
            else {
                this.destination.next(values.map(mapValue));
            }
        };
        ZipInnerSubscriber.prototype._complete = function () {
            this.parent._innerComplete(this);
        };
        return ZipInnerSubscriber;
    })(Subscriber_1.default);
    exports.ZipInnerSubscriber = ZipInnerSubscriber;
    function mapValue(xs) { return xs[0]; }
    exports.mapValue = mapValue;
    function hasValue(xs) { return xs && xs.length === 1; }
    exports.hasValue = hasValue;
});
//# sourceMappingURL=zip-support.js.map