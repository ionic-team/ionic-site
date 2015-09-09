import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {ProtoViewRef} from 'angular2/src/core/compiler/view_ref';
import {NgZone} from 'angular2/src/core/zone/ng_zone';
import {ViewItem} from '../view/view-item';
import * as dom from '../../util/dom';
export class Navbar {
  constructor(item, elementRef) {
    this._ele = elementRef.domElement;
    this._itmEles = [];
    item.navbarView(this);
    this.bbDefault = 'Back';
    this.bbText = '';
  }
  element() {
    return this._ele;
  }
  backButtonElement() {
    if (arguments.length) {
      this._bbEle = arguments[0];
    }
    return this._bbEle;
  }
  backButtonTextElement() {
    if (arguments.length) {
      this._bbTxEle = arguments[0];
    }
    return this._bbTxEle;
  }
  titleElement() {
    if (arguments.length) {
      this._nbTlEle = arguments[0];
    }
    return this._nbTlEle;
  }
  itemElements() {
    if (arguments.length) {
      this._itmEles.push(arguments[0]);
    }
    return this._itmEles;
  }
  titleText() {
    if (arguments.length) {
      this._ttTxt.push(arguments[0]);
    }
    return this._ttTxt;
  }
  alignTitle() {
    const navbarEle = this._ele;
    const titleEle = this._ttEle || (this._ttEle = navbarEle.querySelector('ion-title'));
    if (!titleEle)
      return;
    const titleStyle = this._ttStyle || (this._ttStyle = window.getComputedStyle(titleEle));
    if (titleStyle.textAlign !== 'center')
      return;
    const titleOffsetLeft = titleEle.offsetLeft;
    const titleOffsetRight = navbarEle.offsetWidth - (titleOffsetLeft + titleEle.offsetWidth);
    let marginLeft = 0;
    let marginRight = 0;
    if (titleOffsetLeft < titleOffsetRight) {
      marginLeft = (titleOffsetRight - titleOffsetLeft) + 5;
    } else if (titleOffsetLeft > titleOffsetRight) {
      marginRight = (titleOffsetLeft - titleOffsetRight) - 5;
    }
    let margin = `0 ${marginRight}px 0 ${marginLeft}px`;
    if ((marginLeft || marginRight) && margin !== this._ttMargin) {
      const innerTitleEle = this._innerTtEle || (this._innerTtEle = navbarEle.querySelector('.navbar-inner-title'));
      innerTitleEle.style.margin = this._ttMargin = margin;
    }
  }
  didEnter() {
    setTimeout(() => {
      const titleEle = this._ttEle || (this._ttEle = this._ele.querySelector('ion-title'));
    }, 32);
  }
}
Object.defineProperty(Navbar, "annotations", {get: function() {
    return [new Component({selector: 'ion-navbar'}), new View({
      template: `
    <div class="navbar-inner">
      <button class="back-button button">
        <icon class="back-button-icon ion-ios-arrow-back"></icon>
        <span class="back-button-text">
          <span class="back-default" [inner-text]="bbDefault"></span>
          <span class="back-title" [inner-text]="bbText"></span>
        </span>
      </button>
      <div class="navbar-title">
        <div class="navbar-inner-title">
          <content select="ion-title"></content>
        </div>
      </div>
      <div class="navbar-item navbar-primary-item">
        <content select="[primary]"></content>
      </div>
      <div class="navbar-item navbar-secondary-item">
        <content select="[secondary]"></content>
      </div>
    </div>
  `,
      directives: [BackButton, BackButtonText, Title, NavbarItem]
    })];
  }});
Object.defineProperty(Navbar, "parameters", {get: function() {
    return [[ViewItem], [ElementRef]];
  }});
class BackButton {
  constructor(navbar, item, elementRef) {
    this.item = item;
    navbar.backButtonElement(elementRef.domElement);
  }
  goBack(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.item.viewCtrl.pop();
  }
}
Object.defineProperty(BackButton, "annotations", {get: function() {
    return [new Directive({
      selector: '.back-button',
      host: {'(^click)': 'goBack($event)'}
    })];
  }});
Object.defineProperty(BackButton, "parameters", {get: function() {
    return [[Navbar, new Parent()], [ViewItem], [ElementRef]];
  }});
class BackButtonText {
  constructor(navbar, elementRef) {
    navbar.backButtonTextElement(elementRef.domElement);
  }
}
Object.defineProperty(BackButtonText, "annotations", {get: function() {
    return [new Directive({selector: '.back-button-text'})];
  }});
Object.defineProperty(BackButtonText, "parameters", {get: function() {
    return [[Navbar, new Parent()], [ElementRef]];
  }});
class Title {
  constructor(navbar, elementRef) {
    navbar.titleElement(elementRef.domElement);
  }
}
Object.defineProperty(Title, "annotations", {get: function() {
    return [new Directive({selector: '.navbar-title'})];
  }});
Object.defineProperty(Title, "parameters", {get: function() {
    return [[Navbar, new Parent()], [ElementRef]];
  }});
class NavbarItem {
  constructor(navbar, elementRef) {
    navbar.itemElements(elementRef.domElement);
  }
}
Object.defineProperty(NavbarItem, "annotations", {get: function() {
    return [new Directive({selector: '.navbar-item'})];
  }});
Object.defineProperty(NavbarItem, "parameters", {get: function() {
    return [[Navbar, new Parent()], [ElementRef]];
  }});
export class NavbarTemplate {
  constructor(item, protoViewRef) {
    item.addProtoViewRef('navbar', protoViewRef);
  }
}
Object.defineProperty(NavbarTemplate, "annotations", {get: function() {
    return [new Directive({selector: 'template[navbar]'})];
  }});
Object.defineProperty(NavbarTemplate, "parameters", {get: function() {
    return [[ViewItem], [ProtoViewRef]];
  }});
