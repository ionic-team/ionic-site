System.register('ionic/config/component', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/render/api', 'ionic/util', 'ionic/platform/platform', '../components/app/app'], function (_export) {
  'use strict';

  var Component, Directive, DirectiveMetadata, util, Platform, GlobalIonicConfig, IonicDirective, IonicComponent, platformMode;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function appendModeConfig(ComponentType) {
    var config = ComponentType.config;
    config.host = config.host || {};
    var defaultProperties = config.defaultProperties;
    config.properties = config.properties || [];
    for (var prop in defaultProperties) {
      config.properties.push(prop);
      config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
    }
    ComponentType.applyConfig = function (instance) {
      for (var prop in defaultProperties) {
        if (instance[prop]) {
          continue;
        }
        var configVal = GlobalIonicConfig.setting(prop);
        if (configVal) {
          instance[prop] = globalPropertyValue;
          continue;
        }
        instance[prop] = defaultProperties[prop];
      }
    };
    if (config.delegates) {
      ComponentType.getDelegate = function (instance, delegateName) {
        var cases = config.delegates[delegateName] || [];
        for (var i = 0; i < cases.length; i++) {
          var delegateCase = cases[i];
          if (util.isArray(delegateCase)) {
            var _delegateCase = _slicedToArray(delegateCase, 2);

            var check = _delegateCase[0];
            var DelegateConstructor = _delegateCase[1];

            if (check(instance)) {
              return new DelegateConstructor(instance);
            }
          } else {
            return new delegateCase(instance);
          }
        }
      };
    }
    if (!platformMode) {
      platformMode = GlobalIonicConfig.setting('mode');
    }
    var id = config.classId || config.selector && config.selector.replace('ion-', '');
    config.host['class'] = id + ' ' + id + '-' + platformMode;
    return config;
  }
  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcRenderApi) {
      DirectiveMetadata = _angular2SrcRenderApi.DirectiveMetadata;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_ionicPlatformPlatform) {
      Platform = _ionicPlatformPlatform.Platform;
    }, function (_componentsAppApp) {
      GlobalIonicConfig = _componentsAppApp.GlobalIonicConfig;
    }],
    execute: function () {
      IonicDirective = (function (_Directive) {
        function IonicDirective(ComponentType) {
          _classCallCheck(this, IonicDirective);

          _get(Object.getPrototypeOf(IonicDirective.prototype), 'constructor', this).call(this, appendModeConfig(ComponentType));
        }

        _inherits(IonicDirective, _Directive);

        return IonicDirective;
      })(Directive);

      _export('IonicDirective', IonicDirective);

      IonicComponent = (function (_Component) {
        function IonicComponent(ComponentType) {
          _classCallCheck(this, IonicComponent);

          _get(Object.getPrototypeOf(IonicComponent.prototype), 'constructor', this).call(this, appendModeConfig(ComponentType));
        }

        _inherits(IonicComponent, _Component);

        return IonicComponent;
      })(Component);

      _export('IonicComponent', IonicComponent);

      platformMode = null;
    }
  };
});