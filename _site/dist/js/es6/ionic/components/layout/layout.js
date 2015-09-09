import {NgElement,
  Component,
  View,
  Parent} from 'angular2/angular2';
export class Layout {
  constructor(ngElement) {
    this.domElement = ngElement.domElement;
    this.eqEle = this.domElement.lastElementChild;
    window.requestAnimationFrame(() => {
      this.initLayout();
    });
  }
  initLayout() {
    this.mqs = {};
    for (let x = 0; x < this.domElement.attributes.length; x++) {
      let attr = this.domElement.attributes[x];
      let val = attr.nodeValue;
      let mqClassname = attr.nodeName;
      if (val.indexOf('(') > -1 && val.indexOf(')') > -1) {
        let mql = this.eqEle.contentDocument.defaultView.matchMedia(val);
        if (mql.media !== 'not all') {
          this.mqs[mql.media] = (mql) => {
            console.log(mql.media, mql.matches, mqClassname);
            window.requestAnimationFrame(() => {
              this.domElement.classList[mql.matches ? 'add' : 'remove'](mqClassname);
            });
          };
          this.mqs[mql.media](mql);
          mql.addListener(this.mqs[mql.media]);
        }
      }
    }
  }
}
Object.defineProperty(Layout, "annotations", {get: function() {
    return [new Component({selector: 'layout,[layout]'}), new View({template: `
    <content></content>
    <object class="ele-qry" data="about:blank"></object>
  `})];
  }});
Object.defineProperty(Layout, "parameters", {get: function() {
    return [[NgElement, new NgElement()]];
  }});
