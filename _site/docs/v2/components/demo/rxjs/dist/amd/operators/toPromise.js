define(["require", "exports"], function (require, exports) {
    function toPromise(PromiseCtor) {
        var _this = this;
        if (PromiseCtor === void 0) { PromiseCtor = Promise; }
        return new PromiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = toPromise;
});
//# sourceMappingURL=toPromise.js.map