define(["require", "exports", '../Subject', './multicast'], function (require, exports, Subject_1, multicast_1) {
    function subjectFactory() {
        return new Subject_1.default();
    }
    function publish() {
        return multicast_1.default.call(this, subjectFactory);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = publish;
});
//# sourceMappingURL=publish.js.map