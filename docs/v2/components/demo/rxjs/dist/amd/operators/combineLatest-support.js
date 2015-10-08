var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../observables/ArrayObservable', './zip-support'], function (require, exports, ArrayObservable_1, zip_support_1) {
    function combineLatest() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var project = observables[observables.length - 1];
        if (typeof project === "function") {
            observables.pop();
        }
        return new ArrayObservable_1.default(observables).lift(new CombineLatestOperator(project));
    }
    exports.combineLatest = combineLatest;
    function combineLatestProto() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observables[_i - 0] = arguments[_i];
        }
        var project = observables[observables.length - 1];
        if (typeof project === "function") {
            observables.pop();
        }
        observables.unshift(this);
        return new ArrayObservable_1.default(observables).lift(new CombineLatestOperator(project));
    }
    exports.combineLatestProto = combineLatestProto;
    var CombineLatestOperator = (function () {
        function CombineLatestOperator(project) {
            this.project = project;
        }
        CombineLatestOperator.prototype.call = function (subscriber) {
            return new CombineLatestSubscriber(subscriber, this.project);
        };
        return CombineLatestOperator;
    })();
    exports.CombineLatestOperator = CombineLatestOperator;
    var CombineLatestSubscriber = (function (_super) {
        __extends(CombineLatestSubscriber, _super);
        function CombineLatestSubscriber(destination, project) {
            _super.call(this, destination, project, []);
            this.limit = 0;
        }
        CombineLatestSubscriber.prototype._subscribeInner = function (observable, values, index, total) {
            return observable._subscribe(new CombineLatestInnerSubscriber(this.destination, this, values, index, total));
        };
        CombineLatestSubscriber.prototype._innerComplete = function (innerSubscriber) {
            if ((this.active -= 1) === 0) {
                this.destination.complete();
            }
        };
        return CombineLatestSubscriber;
    })(zip_support_1.ZipSubscriber);
    exports.CombineLatestSubscriber = CombineLatestSubscriber;
    var CombineLatestInnerSubscriber = (function (_super) {
        __extends(CombineLatestInnerSubscriber, _super);
        function CombineLatestInnerSubscriber(destination, parent, values, index, total) {
            _super.call(this, destination, parent, values, index, total);
        }
        CombineLatestInnerSubscriber.prototype._next = function (x) {
            var index = this.index;
            var total = this.total;
            var parent = this.parent;
            var values = this.values;
            var valueBox = values[index];
            var limit;
            if (valueBox) {
                valueBox[0] = x;
                limit = parent.limit;
            }
            else {
                limit = parent.limit += 1;
                values[index] = [x];
            }
            if (limit >= total) {
                this._projectNext(values, parent.project);
            }
        };
        return CombineLatestInnerSubscriber;
    })(zip_support_1.ZipInnerSubscriber);
    exports.CombineLatestInnerSubscriber = CombineLatestInnerSubscriber;
});
//# sourceMappingURL=combineLatest-support.js.map