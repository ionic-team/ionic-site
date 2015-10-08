var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Notification'], function (require, exports, Subscriber_1, Notification_1) {
    function materialize() {
        return this.lift(new MaterializeOperator());
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = materialize;
    var MaterializeOperator = (function () {
        function MaterializeOperator() {
        }
        MaterializeOperator.prototype.call = function (subscriber) {
            return new MaterializeSubscriber(subscriber);
        };
        return MaterializeOperator;
    })();
    var MaterializeSubscriber = (function (_super) {
        __extends(MaterializeSubscriber, _super);
        function MaterializeSubscriber(destination) {
            _super.call(this, destination);
        }
        MaterializeSubscriber.prototype._next = function (value) {
            this.destination.next(Notification_1.default.createNext(value));
        };
        MaterializeSubscriber.prototype._error = function (err) {
            var destination = this.destination;
            destination.next(Notification_1.default.createError(err));
            destination.complete();
        };
        MaterializeSubscriber.prototype._complete = function () {
            var destination = this.destination;
            destination.next(Notification_1.default.createComplete());
            destination.complete();
        };
        return MaterializeSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=materialize.js.map