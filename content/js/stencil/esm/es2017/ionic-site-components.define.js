
// IonicSiteComponents: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './ionic-site-components.core.js';
import { COMPONENTS } from './ionic-site-components.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
