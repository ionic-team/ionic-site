var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable'], function (require, exports, Observable_1) {
    var InfiniteObservable = (function (_super) {
        __extends(InfiniteObservable, _super);
        function InfiniteObservable() {
            _super.call(this);
        }
        InfiniteObservable.create = function () {
            return new InfiniteObservable();
        };
        InfiniteObservable.prototype._subscribe = function (subscriber) {
        };
        return InfiniteObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = InfiniteObservable;
});
//# sourceMappingURL=InfiniteObservable.js.map