import * as util from '../util/util';
import * as dom from '../util/dom';
export class PlatformCtrl {
  constructor() {
    this._settings = {};
    this._platforms = [];
    this._registry = {};
    this._default = null;
    this._vMajor = 0;
    this._vMinor = 0;
  }
  is(platformName) {
    return (this._platforms.indexOf(platformName) > -1);
  }
  platforms() {
    return this._platforms;
  }
  version(asObject) {
    let version = parseFloat(this._vMajor + '.' + this._vMinor);
    if (asObject) {
      return {
        version: version,
        major: this._vMajor,
        minor: this._vMinor
      };
    }
    return version;
  }
  ready() {
    return dom.ready();
  }
  domReady() {
    return dom.ready();
  }
  windowLoad() {
    return dom.windowLoad();
  }
  on() {}
  onHardwareBackButton() {}
  registerBackButtonAction() {}
  exitApp() {}
  fullScreen() {}
  showStatusBar() {}
  url(val) {
    if (arguments.length) {
      this._url = val;
      this._qs = util.getQuerystring(val);
    }
    return this._url;
  }
  query(key) {
    return (this._qs || {})[key];
  }
  userAgent(val) {
    if (arguments.length) {
      this._ua = val;
    }
    return this._ua;
  }
  matchQuery(queryValue) {
    let val = this.query('ionicplatform');
    if (val) {
      let valueSplit = val.toLowerCase().split(';');
      for (let i = 0; i < valueSplit.length; i++) {
        if (valueSplit[i] == queryValue) {
          return true;
        }
      }
    }
    return false;
  }
  matchUserAgent(userAgentExpression) {
    if (this._ua) {
      let rx = new RegExp(userAgentExpression, 'i');
      return rx.exec(this._ua);
    }
  }
  width(val) {
    if (arguments.length) {
      this._w = val;
    }
    return this._w || 0;
  }
  height(val) {
    if (arguments.length) {
      this._h = val;
    }
    return this._h || 0;
  }
  register(platformConfig) {
    this._registry[platformConfig.name] = platformConfig;
  }
  registry() {
    return this._registry;
  }
  setDefault(platformName) {
    this._default = platformName;
  }
  isPlatform(queryValue, userAgentExpression) {
    if (!userAgentExpression) {
      userAgentExpression = queryValue;
    }
    return (this.matchQuery(queryValue)) || (this.matchUserAgent(userAgentExpression) !== null);
  }
  load() {
    let rootPlatformNode = null;
    let engineNode = null;
    let self = this;
    let tmpPlatform = null;
    for (let platformName in this._registry) {
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
      let platformNode = rootPlatformNode;
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
  settings(val) {
    if (arguments.length) {
      this._settings = val;
    }
    return this._settings;
  }
  get(platformName) {
    return this._registry[platformName] || {};
  }
}
function matchPlatform(platformName, platform) {
  let platformNode = new PlatformNode(platformName);
  let tmpPlatform = platformNode.getRoot(platform, 0);
  if (tmpPlatform) {
    tmpPlatform.depth = 0;
    let childPlatform = tmpPlatform.child();
    while (childPlatform) {
      tmpPlatform.depth++;
      childPlatform = childPlatform.child();
    }
  }
  return tmpPlatform;
}
function insertSuperset(platformNode) {
  let supersetPlaformName = platformNode.superset();
  if (supersetPlaformName) {
    let supersetPlatform = new PlatformNode(supersetPlaformName);
    supersetPlatform.parent(platformNode.parent());
    supersetPlatform.child(platformNode);
    if (supersetPlatform.parent()) {
      supersetPlatform.parent().child(supersetPlatform);
    }
    platformNode.parent(supersetPlatform);
  }
}
class PlatformNode {
  constructor(platformName) {
    this.c = Platform.get(platformName);
    this.isEngine = this.c.isEngine;
  }
  name() {
    return this.c.name;
  }
  settings() {
    return this.c.settings || {};
  }
  superset() {
    return this.c.superset;
  }
  methods() {
    return this.c.methods || {};
  }
  parent(val) {
    if (arguments.length) {
      this._parent = val;
    }
    return this._parent;
  }
  child(val) {
    if (arguments.length) {
      this._child = val;
    }
    return this._child;
  }
  isMatch(p) {
    if (typeof this.c.isMatched !== 'boolean') {
      if (!this.c.isMatch) {
        this.c.isMatched = false;
      } else {
        this.c.isMatched = this.c.isMatch(p);
      }
    }
    return this.c.isMatched;
  }
  getRoot(p) {
    if (this.isMatch(p)) {
      let parents = this.getSubsetParents(this.name());
      if (!parents.length) {
        return this;
      }
      let platform = null;
      let rootPlatform = null;
      for (let i = 0; i < parents.length; i++) {
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
  getSubsetParents(subsetPlatformName) {
    let registry = Platform.registry();
    let parentPlatformNames = [];
    let platform = null;
    for (let platformName in registry) {
      platform = registry[platformName];
      if (platform.subsets && platform.subsets.indexOf(subsetPlatformName) > -1) {
        parentPlatformNames.push(platformName);
      }
    }
    return parentPlatformNames;
  }
}
export let Platform = new PlatformCtrl();
