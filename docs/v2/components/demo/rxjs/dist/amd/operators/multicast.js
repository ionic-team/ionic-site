define(["require", "exports", '../observables/ConnectableObservable'], function (require, exports, ConnectableObservable_1) {
    function multicast(subjectFactory) {
        return new ConnectableObservable_1.default(this, subjectFactory);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = multicast;
});
//# sourceMappingURL=multicast.js.map