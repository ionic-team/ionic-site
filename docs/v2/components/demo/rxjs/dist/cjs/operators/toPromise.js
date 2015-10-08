"use strict";

exports.__esModule = true;
exports["default"] = toPromise;

function toPromise() {
    var _this = this;

    var PromiseCtor = arguments.length <= 0 || arguments[0] === undefined ? Promise : arguments[0];

    return new PromiseCtor(function (resolve, reject) {
        var value = undefined;
        _this.subscribe(function (x) {
            return value = x;
        }, function (err) {
            return reject(err);
        }, function () {
            return resolve(value);
        });
    });
}

module.exports = exports["default"];