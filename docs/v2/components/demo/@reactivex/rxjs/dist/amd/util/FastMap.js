define(["require", "exports"], function (require, exports) {
    var FastMap = (function () {
        function FastMap() {
            this.size = 0;
            this._values = {};
        }
        FastMap.prototype.delete = function (key) {
            this._values[key] = null;
            return true;
        };
        FastMap.prototype.set = function (key, value) {
            this._values[key] = value;
            return this;
        };
        FastMap.prototype.get = function (key) {
            return this._values[key];
        };
        FastMap.prototype.forEach = function (cb, thisArg) {
            var values = this._values;
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    cb.call(thisArg, values[key], key);
                }
            }
        };
        FastMap.prototype.clear = function () {
            this._values = {};
        };
        return FastMap;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FastMap;
});
//# sourceMappingURL=FastMap.js.map