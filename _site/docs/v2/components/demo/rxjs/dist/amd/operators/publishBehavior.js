define(["require", "exports", '../subjects/BehaviorSubject', './multicast'], function (require, exports, BehaviorSubject_1, multicast_1) {
    function publishBehavior(value) {
        return multicast_1.default.call(this, function () { return new BehaviorSubject_1.default(value); });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = publishBehavior;
});
//# sourceMappingURL=publishBehavior.js.map