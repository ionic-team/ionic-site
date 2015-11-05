'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _basicPages = require('./basic/pages');

_defaults(exports, _interopExportWildcard(_basicPages, _defaults));

var _fixedInlinePages = require('./fixed-inline/pages');

_defaults(exports, _interopExportWildcard(_fixedInlinePages, _defaults));

var _floatingPages = require('./floating/pages');

_defaults(exports, _interopExportWildcard(_floatingPages, _defaults));

var _inlinePages = require('./inline/pages');

_defaults(exports, _interopExportWildcard(_inlinePages, _defaults));

var _insetPages = require('./inset/pages');

_defaults(exports, _interopExportWildcard(_insetPages, _defaults));

var _placeholderPages = require('./placeholder/pages');

_defaults(exports, _interopExportWildcard(_placeholderPages, _defaults));

var _stackedPages = require('./stacked/pages');

_defaults(exports, _interopExportWildcard(_stackedPages, _defaults));