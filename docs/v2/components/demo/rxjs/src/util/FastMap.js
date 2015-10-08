System.register("rxjs/src/util/FastMap", [], function (_export) {
    "use strict";

    var FastMap;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            FastMap = (function () {
                function FastMap() {
                    _classCallCheck(this, FastMap);

                    this.size = 0;
                    this._values = {};
                }

                _createClass(FastMap, [{
                    key: "delete",
                    value: function _delete(key) {
                        this._values[key] = null;
                        return true;
                    }
                }, {
                    key: "set",
                    value: function set(key, value) {
                        this._values[key] = value;
                        return this;
                    }
                }, {
                    key: "get",
                    value: function get(key) {
                        return this._values[key];
                    }
                }, {
                    key: "forEach",
                    value: function forEach(cb, thisArg) {
                        var values = this._values;
                        for (var key in values) {
                            if (values.hasOwnProperty(key)) {
                                cb.call(thisArg, values[key], key);
                            }
                        }
                    }
                }, {
                    key: "clear",
                    value: function clear() {
                        this._values = {};
                    }
                }]);

                return FastMap;
            })();

            _export("default", FastMap);
        }
    };
});