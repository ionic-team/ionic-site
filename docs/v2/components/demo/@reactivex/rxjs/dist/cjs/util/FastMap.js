"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FastMap = (function () {
    function FastMap() {
        _classCallCheck(this, FastMap);

        this.size = 0;
        this._values = {};
    }

    FastMap.prototype["delete"] = function _delete(key) {
        this._values[key] = null;
        return true;
    };

    FastMap.prototype.set = function set(key, value) {
        this._values[key] = value;
        return this;
    };

    FastMap.prototype.get = function get(key) {
        return this._values[key];
    };

    FastMap.prototype.forEach = function forEach(cb, thisArg) {
        var values = this._values;
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                cb.call(thisArg, values[key], key);
            }
        }
    };

    FastMap.prototype.clear = function clear() {
        this._values = {};
    };

    return FastMap;
})();

exports["default"] = FastMap;
module.exports = exports["default"];