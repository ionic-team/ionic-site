import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {DirectiveMetadata} from 'angular2/src/render/api';
import * as util from 'ionic/util';
import {Platform} from 'ionic/platform/platform';
import {GlobalIonicConfig} from '../components/app/app';
export class IonicDirective extends Directive {
  constructor(ComponentType) {
    super(appendModeConfig(ComponentType));
  }
}
export class IonicComponent extends Component {
  constructor(ComponentType) {
    super(appendModeConfig(ComponentType));
  }
}
function appendModeConfig(ComponentType) {
  let config = ComponentType.config;
  config.host = config.host || {};
  const defaultProperties = config.defaultProperties;
  config.properties = config.properties || [];
  for (let prop in defaultProperties) {
    config.properties.push(prop);
    config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
  }
  ComponentType.applyConfig = (instance) => {
    for (let prop in defaultProperties) {
      if (instance[prop]) {
        continue;
      }
      let configVal = GlobalIonicConfig.setting(prop);
      if (configVal) {
        instance[prop] = globalPropertyValue;
        continue;
      }
      instance[prop] = defaultProperties[prop];
    }
  };
  if (config.delegates) {
    ComponentType.getDelegate = (instance, delegateName) => {
      let cases = config.delegates[delegateName] || [];
      for (let i = 0; i < cases.length; i++) {
        let delegateCase = cases[i];
        if (util.isArray(delegateCase)) {
          let [check, DelegateConstructor] = delegateCase;
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
  let id = config.classId || (config.selector && config.selector.replace('ion-', ''));
  config.host['class'] = (id + ' ' + id + '-' + platformMode);
  return config;
}
let platformMode = null;
