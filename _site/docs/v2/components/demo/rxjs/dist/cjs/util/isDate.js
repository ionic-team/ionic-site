"use strict";

exports.__esModule = true;
exports["default"] = isDate;

function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}

module.exports = exports["default"];