import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {ProtoViewRef} from 'angular2/src/core/compiler/view_ref';
import {NgZone} from 'angular2/src/core/zone/ng_zone';
import {Platform} from 'ionic/platform/platform';
import * as dom from '../../util/dom';
export class Toolbar {
  constructor(elementRef, ngZone) {
    this.domElement = elementRef.domElement;
    Toolbar.config.invoke(this);
  }
  alignTitle() {
    const toolbarEle = this.domElement;
    const innerTitleEle = this._innerTitleEle || (this._innerTitleEle = toolbarEle.querySelector('.toolbar-inner-title'));
    const titleEle = this._titleEle || (this._titleEle = innerTitleEle.querySelector('ion-title'));
    const style = this._style || (this._style = window.getComputedStyle(titleEle));
    const titleOffsetWidth = titleEle.offsetWidth;
    const titleOffsetLeft = titleEle.offsetLeft;
    const titleScrollWidth = titleEle.scrollWidth;
    const toolbarOffsetWidth = toolbarEle.offsetWidth;
    if (window.getComputedStyle(innerTitleEle).margin !== '0px') {
      this._showTitle();
      return;
    }
    if (style.textAlign !== 'center' || titleOffsetWidth < titleScrollWidth) {
      this._showTitle();
    } else {
      let rightMargin = toolbarOffsetWidth - (titleOffsetLeft + titleOffsetWidth);
      let centerMargin = titleOffsetLeft - rightMargin;
      innerTitleEle.style.margin = `0 ${centerMargin}px 0 0`;
      dom.raf(() => {
        if (titleEle.offsetWidth < titleEle.scrollWidth) {
          innerTitleEle.style.margin = '';
          innerTitleEle.style.textAlign = 'left';
        }
        this._showTitle();
      });
    }
  }
  _showTitle() {
    if (!this._shown) {
      this._shown = true;
      this._innerTitleEle.classList.remove('toolbar-title-hide');
    }
  }
}
Object.defineProperty(Toolbar, "annotations", {get: function() {
    return [new Component({selector: 'ion-toolbar'}), new View({
      template: `<div class="toolbar-inner"><content></content></div>`,
      directives: []
    })];
  }});
Object.defineProperty(Toolbar, "parameters", {get: function() {
    return [[ElementRef], [NgZone]];
  }});
export class ToolbarTemplate {
  constructor(item, protoViewRef) {
    item.addProtoViewRef('toolbar', protoViewRef);
  }
}
Object.defineProperty(ToolbarTemplate, "annotations", {get: function() {
    return [new Directive({selector: 'template[toolbar]'})];
  }});
Object.defineProperty(ToolbarTemplate, "parameters", {get: function() {
    return [[ViewItem], [ProtoViewRef]];
  }});
