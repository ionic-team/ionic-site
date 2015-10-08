var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function takeUntil(observable) {
        return this.lift(new TakeUntilOperator(observable));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = takeUntil;
    var TakeUntilOperator = (function () {
        function TakeUntilOperator(observable) {
            this.observable = observable;
        }
        TakeUntilOperator.prototype.call = function (subscriber) {
            return new TakeUntilSubscriber(subscriber, this.observable);
        };
        return TakeUntilOperator;
    })();
    var TakeUntilSubscriber = (function (_super) {
        __extends(TakeUntilSubscriber, _super);
        function TakeUntilSubscriber(destination, observable) {
            _super.call(this, destination);
            this.add(observable._subscribe(new TakeUntilInnerSubscriber(destination)));
        }
        return TakeUntilSubscriber;
    })(Subscriber_1.default);
    var TakeUntilInnerSubscriber = (function (_super) {
        __extends(TakeUntilInnerSubscriber, _super);
        function TakeUntilInnerSubscriber(destination) {
            _super.call(this, destination);
        }
        TakeUntilInnerSubscriber.prototype._next = function () {
            this.destination.complete();
        };
        TakeUntilInnerSubscriber.prototype._error = function (e) {
            this.destination.error(e);
        };
        TakeUntilInnerSubscriber.prototype._complete = function () {
        };
        return TakeUntilInnerSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=takeUntil.js.map