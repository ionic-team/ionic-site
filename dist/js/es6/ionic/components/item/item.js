import {Renderer,
  ElementRef} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ItemPrimaryOptions,
  ItemSecondaryOptions} from './item-options';
import {ItemPrimarySwipeButtons,
  ItemSecondarySwipeButtons} from './item-swipe-buttons';
import {IonicComponent} from '../../config/component';
import {dom} from 'ionic/util';
export class Item {
  static get config() {
    return {
      selector: 'ion-item',
      properties: []
    };
  }
  onInit() {
    Item.applyConfig(this);
  }
  constructor(elementRef) {
    this._isOpen = false;
    this._isSlideActive = false;
    this._isTransitioning = false;
    this._transform = '';
    this.domElement = elementRef.domElement;
    this.swipeButtons = {};
    this.optionButtons = {};
  }
}
Object.defineProperty(Item, "annotations", {get: function() {
    return [new IonicComponent(Item), new View({template: `
    <!--
    <content select="ion-primary-options"></content>
    <content select="ion-primary-swipe-buttons"></content>
    -->
    <div class="item-content">
      <div class="item-media">
      </div>
      <div class="item-accessory">
        <!--<content select="ion-item-accessory"></content>-->
      </div>
      <div class="item-label">
        <content></content>
      </div>
    </div>
    <!--
    <content select="ion-secondary-options"></content>
    <content select="ion-secondary-swipe-buttons"></content>
    -->
  `})];
  }});
Object.defineProperty(Item, "parameters", {get: function() {
    return [[ElementRef]];
  }});
class Slideable {
  constructor(slideElement) {}
  onTransform(str) {}
  onTransitionActive(active) {}
  onSlideActive(active) {}
  transform(str) {
    if (arguments.length && str !== this._transform) {
      this.onTransform();
    }
  }
  isTransitionActive(active) {
    if (arguments.length && active !== this._isTransitionActive) {
      this._isTransitionActive = active;
      this.onSetTransitionActive(active);
    }
    return this._isTransitioning;
  }
  isSlideActive(active) {
    if (arguments.length && active !== this._isSlideActive) {
      this._isSlideActive = active;
      this.onSetDragActive(active);
    }
    return this._isSlideActive;
  }
  isOpen(open) {
    if (arguments.length && open !== this._isOpen) {
      this.isTransitionActive(true);
      dom.raf(() => {
        this.isOpen = isOpen;
        this.onSetIsOpen(open);
      });
    }
  }
}
Object.defineProperty(Slideable, "parameters", {get: function() {
    return [[Element]];
  }});
Object.defineProperty(Slideable.prototype.onTransform, "parameters", {get: function() {
    return [[String]];
  }});
Object.defineProperty(Slideable.prototype.onTransitionActive, "parameters", {get: function() {
    return [[Boolean]];
  }});
Object.defineProperty(Slideable.prototype.onSlideActive, "parameters", {get: function() {
    return [[boolean]];
  }});
Object.defineProperty(Slideable.prototype.transform, "parameters", {get: function() {
    return [[String]];
  }});
Object.defineProperty(Slideable.prototype.isTransitionActive, "parameters", {get: function() {
    return [[Boolean]];
  }});
Object.defineProperty(Slideable.prototype.isSlideActive, "parameters", {get: function() {
    return [[Boolean]];
  }});
Object.defineProperty(Slideable.prototype.isOpen, "parameters", {get: function() {
    return [[Boolean]];
  }});
class ItemSlideGesture {}
