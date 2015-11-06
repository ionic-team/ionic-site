'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _basicPages = require('./basic/pages');

_defaults(exports, _interopExportWildcard(_basicPages, _defaults));

var _iconPages = require('./icon/pages');

_defaults(exports, _interopExportWildcard(_iconPages, _defaults));

var _iconTextPages = require('./icon-text/pages');

_defaults(exports, _interopExportWildcard(_iconTextPages, _defaults));