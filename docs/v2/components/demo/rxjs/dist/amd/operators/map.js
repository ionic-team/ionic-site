var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject', '../util/bindCallback'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1, bindCallback_1) {
    /**
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the returned observable
     *
     * @param {Function} project the function to create projection
     * @param {any} [thisArg] an optional argument to define what `this` is in the project function
     * @returns {Observable} a observable of projected values
     */
    function map(project, thisArg) {
        return this.lift(new MapOperator(project, thisArg));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = map;
    var MapOperator = (function () {
        function MapOperator(project, thisArg) {
            this.project = bindCallback_1.default(project, thisArg, 2);
        }
        MapOperator.prototype.call = function (subscriber) {
            return new MapSubscriber(subscriber, this.project);
        };
        return MapOperator;
    })();
    var MapSubscriber = (function (_super) {
        __extends(MapSubscriber, _super);
        function MapSubscriber(destination, project) {
            _super.call(this, destination);
            this.count = 0;
            this.project = project;
        }
        MapSubscriber.prototype._next = function (x) {
            var result = tryCatch_1.default(this.project)(x, this.count++);
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
            }
            else {
                this.destination.next(result);
            }
        };
        return MapSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=map.js.map