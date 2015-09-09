System.register('ionic/platform/platform', ['../util/util', '../util/dom'], function (_export) {
  'use strict';

  var util, dom, PlatformCtrl, PlatformNode, Platform;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function matchPlatform(platformName, platform) {
    var platformNode = new PlatformNode(platformName);
    var tmpPlatform = platformNode.getRoot(platform, 0);
    if (tmpPlatform) {
      tmpPlatform.depth = 0;
      var childPlatform = tmpPlatform.child();
      while (childPlatform) {
        tmpPlatform.depth++;
        childPlatform = childPlatform.child();
      }
    }
    return tmpPlatform;
  }
  function insertSuperset(platformNode) {
    var supersetPlaformName = platformNode.superset();
    if (supersetPlaformName) {
      var supersetPlatform = new PlatformNode(supersetPlaformName);
      supersetPlatform.parent(platformNode.parent());
      supersetPlatform.child(platformNode);
      if (supersetPlatform.parent()) {
        supersetPlatform.parent().child(supersetPlatform);
      }
      platformNode.parent(supersetPlatform);
    }
  }
  return {
    setters: [function (_utilUtil) {
      util = _utilUtil;
    }, function (_utilDom) {
      dom = _utilDom;
    }],
    execute: function () {
      PlatformCtrl = (function () {
        function PlatformCtrl() {
          _classCallCheck(this, PlatformCtrl);

          this._settings = {};
          this._platforms = [];
          this._registry = {};
          this._default = null;
          this._vMajor = 0;
          this._vMinor = 0;
        }

        _createClass(PlatformCtrl, [{
          key: 'is',
          value: function is(platformName) {
            return this._platforms.indexOf(platformName) > -1;
          }
        }, {
          key: 'platforms',
          value: function platforms() {
            return this._platforms;
          }
        }, {
          key: 'version',
          value: function version(asObject) {
            var version = parseFloat(this._vMajor + '.' + this._vMinor);
            if (asObject) {
              return {
                version: version,
                major: this._vMajor,
                minor: this._vMinor
              };
            }
            return version;
          }
        }, {
          key: 'ready',
          value: function ready() {
            return dom.ready();
          }
        }, {
          key: 'domReady',
          value: function domReady() {
            return dom.ready();
          }
        }, {
          key: 'windowLoad',
          value: function windowLoad() {
            return dom.windowLoad();
          }
        }, {
          key: 'on',
          value: function on() {}
        }, {
          key: 'onHardwareBackButton',
          value: function onHardwareBackButton() {}
        }, {
          key: 'registerBackButtonAction',
          value: function registerBackButtonAction() {}
        }, {
          key: 'exitApp',
          value: function exitApp() {}
        }, {
          key: 'fullScreen',
          value: function fullScreen() {}
        }, {
          key: 'showStatusBar',
          value: function showStatusBar() {}
        }, {
          key: 'url',
          value: function url(val) {
            if (arguments.length) {
              this._url = val;
              this._qs = util.getQuerystring(val);
            }
            return this._url;
          }
        }, {
          key: 'query',
          value: function query(key) {
            return (this._qs || {})[key];
          }
        }, {
          key: 'userAgent',
          value: function userAgent(val) {
            if (arguments.length) {
              this._ua = val;
            }
            return this._ua;
          }
        }, {
          key: 'matchQuery',
          value: function matchQuery(queryValue) {
            var val = this.query('ionicplatform');
            if (val) {
              var valueSplit = val.toLowerCase().split(';');
              for (var i = 0; i < valueSplit.length; i++) {
                if (valueSplit[i] == queryValue) {
                  return true;
                }
              }
            }
            return false;
          }
        }, {
          key: 'matchUserAgent',
          value: function matchUserAgent(userAgentExpression) {
            if (this._ua) {
              var rx = new RegExp(userAgentExpression, 'i');
              return rx.exec(this._ua);
            }
          }
        }, {
          key: 'width',
          value: function width(val) {
            if (arguments.length) {
              this._w = val;
            }
            return this._w || 0;
          }
        }, {
          key: 'height',
          value: function height(val) {
            if (arguments.length) {
              this._h = val;
            }
            return this._h || 0;
          }
        }, {
          key: 'register',
          value: function register(platformConfig) {
            this._registry[platformConfig.name] = platformConfig;
          }
        }, {
          key: 'registry',
          value: function registry() {
            return this._registry;
          }
        }, {
          key: 'setDefault',
          value: function setDefault(platformName) {
            this._default = platformName;
          }
        }, {
          key: 'isPlatform',
          value: function isPlatform(queryValue, userAgentExpression) {
            if (!userAgentExpression) {
              userAgentExpression = queryValue;
            }
            return this.matchQuery(queryValue) || this.matchUserAgent(userAgentExpression) !== null;
          }
        }, {
          key: 'load',
          value: function load() {
            var rootPlatformNode = null;
            var engineNode = null;
            var self = this;
            var tmpPlatform = null;
            for (var platformName in this._registry) {
              tmpPlatform = matchPlatform(platformName, this);
              if (tmpPlatform) {
                if (tmpPlatform.isEngine) {
                  engineNode = tmpPlatform;
                } else if (!rootPlatformNode || tmpPlatform.depth > rootPlatformNode.depth) {
                  rootPlatformNode = tmpPlatform;
                }
              }
            }
            if (!rootPlatformNode) {
              rootPlatformNode = new PlatformNode(this._default);
            }
            if (rootPlatformNode) {
              if (engineNode) {
                engineNode.child(rootPlatformNode);
                rootPlatformNode.parent(engineNode);
                rootPlatformNode = engineNode;
                util.extend(this, engineNode.methods());
              }
              var platformNode = rootPlatformNode;
              while (platformNode) {
                insertSuperset(platformNode);
                platformNode = platformNode.child();
              }
              platformNode = rootPlatformNode.parent();
              while (platformNode) {
                rootPlatformNode = platformNode;
                platformNode = platformNode.parent();
              }
              platformNode = rootPlatformNode;
              while (platformNode) {
                this._platforms.push(platformNode.name());
                this._settings[platformNode.name()] = util.extend({}, platformNode.settings());
                platformNode = platformNode.child();
              }
            }
            return this;
          }
        }, {
          key: 'settings',
          value: function settings(val) {
            if (arguments.length) {
              this._settings = val;
            }
            return this._settings;
          }
        }, {
          key: 'get',
          value: function get(platformName) {
            return this._registry[platformName] || {};
          }
        }]);

        return PlatformCtrl;
      })();

      _export('PlatformCtrl', PlatformCtrl);

      PlatformNode = (function () {
        function PlatformNode(platformName) {
          _classCallCheck(this, PlatformNode);

          this.c = Platform.get(platformName);
          this.isEngine = this.c.isEngine;
        }

        _createClass(PlatformNode, [{
          key: 'name',
          value: function name() {
            return this.c.name;
          }
        }, {
          key: 'settings',
          value: function settings() {
            return this.c.settings || {};
          }
        }, {
          key: 'superset',
          value: function superset() {
            return this.c.superset;
          }
        }, {
          key: 'methods',
          value: function methods() {
            return this.c.methods || {};
          }
        }, {
          key: 'parent',
          value: function parent(val) {
            if (arguments.length) {
              this._parent = val;
            }
            return this._parent;
          }
        }, {
          key: 'child',
          value: function child(val) {
            if (arguments.length) {
              this._child = val;
            }
            return this._child;
          }
        }, {
          key: 'isMatch',
          value: function isMatch(p) {
            if (typeof this.c.isMatched !== 'boolean') {
              if (!this.c.isMatch) {
                this.c.isMatched = false;
              } else {
                this.c.isMatched = this.c.isMatch(p);
              }
            }
            return this.c.isMatched;
          }
        }, {
          key: 'getRoot',
          value: function getRoot(p) {
            if (this.isMatch(p)) {
              var parents = this.getSubsetParents(this.name());
              if (!parents.length) {
                return this;
              }
              var platform = null;
              var rootPlatform = null;
              for (var i = 0; i < parents.length; i++) {
                platform = new PlatformNode(parents[i]);
                platform.child(this);
                rootPlatform = platform.getRoot(p);
                if (rootPlatform) {
                  this.parent(platform);
                  return rootPlatform;
                }
              }
            }
            return null;
          }
        }, {
          key: 'getSubsetParents',
          value: function getSubsetParents(subsetPlatformName) {
            var registry = Platform.registry();
            var parentPlatformNames = [];
            var platform = null;
            for (var platformName in registry) {
              platform = registry[platformName];
              if (platform.subsets && platform.subsets.indexOf(subsetPlatformName) > -1) {
                parentPlatformNames.push(platformName);
              }
            }
            return parentPlatformNames;
          }
        }]);

        return PlatformNode;
      })();

      Platform = new PlatformCtrl();

      _export('Platform', Platform);
    }
  };
});