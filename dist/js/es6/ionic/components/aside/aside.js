import {EventEmitter,
  ElementRef} from 'angular2/angular2';
import {onInit} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {IonicComponent} from '../../config/component';
import * as types from './extensions/types';
import * as gestures from './extensions/gestures';
import {dom} from 'ionic/util';
export class Aside {
  static get config() {
    return {
      selector: 'ion-aside',
      properties: ['content', 'dragThreshold'],
      defaultProperties: {
        'side': 'left',
        'type': 'reveal'
      },
      delegates: {
        gesture: [[(instance) => instance.side == 'top', gestures.TopAsideGesture], [(instance) => instance.side == 'bottom', gestures.BottomAsideGesture], [(instance) => instance.side == 'right', gestures.RightAsideGesture], [(instance) => instance.side == 'left', gestures.LeftAsideGesture]],
        type: [[(instance) => instance.type == 'overlay', types.AsideTypeOverlay], [(instance) => instance.type == 'reveal', types.AsideTypeReveal], [(instance) => instance.type == 'push', types.AsideTypePush]]
      },
      events: ['opening']
    };
  }
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    this.opening = new EventEmitter('opening');
    this.domElement.addEventListener('transitionend', (ev) => {
      this.setChanging(false);
    });
  }
  onInit() {
    console.log('Aside content', this.content);
    this.contentElement = (this.content instanceof Node) ? this.content : this.content.domElement;
    Aside.applyConfig(this);
    this.gestureDelegate = Aside.getDelegate(this, 'gesture');
    this.typeDelegate = Aside.getDelegate(this, 'type');
  }
  getContentElement() {
    return this.contentElement;
  }
  setOpenAmt(v) {
    this.opening.next(v);
  }
  setTransform(transform) {
    this.typeDelegate.setTransform(transform);
  }
  setSliding(isSliding) {
    if (isSliding !== this.isSliding) {
      this.typeDelegate.setSliding(isSliding);
    }
  }
  setChanging(isChanging) {
    if (isChanging !== this.isChanging) {
      this.isChanging = isChanging;
      this.domElement.classList[isChanging ? 'add' : 'remove']('changing');
    }
  }
  setOpen(isOpen) {
    if (isOpen !== this.isOpen) {
      this.isOpen = isOpen;
      this.setChanging(true);
      this.setOpenAmt(isOpen ? 1 : 0);
      return dom.rafPromise().then(() => {
        this.typeDelegate.setOpen(isOpen);
      });
    }
  }
  open() {
    return this.setOpen(true);
  }
  close() {
    return this.setOpen(false);
  }
}
Object.defineProperty(Aside, "annotations", {get: function() {
    return [new IonicComponent(Aside), new View({template: `<content></content>`})];
  }});
Object.defineProperty(Aside, "parameters", {get: function() {
    return [[ElementRef]];
  }});
