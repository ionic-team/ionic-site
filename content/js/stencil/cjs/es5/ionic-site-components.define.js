"use strict";
// IonicSiteComponents: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var ionic_site_components_core_js_1 = require("./ionic-site-components.core.js");
var ionic_site_components_components_js_1 = require("./ionic-site-components.components.js");
function defineCustomElements(win, opts) {
    return ionic_site_components_core_js_1.defineCustomElement(win, ionic_site_components_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
