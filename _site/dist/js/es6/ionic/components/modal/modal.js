import {Injectable} from 'angular2/di';
import {Overlay} from '../overlay/overlay';
import {Animation} from '../../animations/animation';
import {IonicApp} from '../app/app';
export class Modal extends Overlay {
  static get config() {
    return {
      selector: 'ion-modal',
      host: {'[style.z-index]': 'zIndex'}
    };
  }
  constructor(app) {
    super(app);
    this.extendOptions({
      enterAnimation: 'modal-slide-in',
      leaveAnimation: 'modal-slide-out'
    });
  }
  open(ComponentType, opts) {
    return this.create(OVERLAY_TYPE, ComponentType, opts);
  }
  get() {
    return this.getByType(OVERLAY_TYPE);
  }
}
Object.defineProperty(Modal, "annotations", {get: function() {
    return [new Injectable()];
  }});
Object.defineProperty(Modal, "parameters", {get: function() {
    return [[IonicApp]];
  }});
Object.defineProperty(Modal.prototype.open, "parameters", {get: function() {
    return [[Type], []];
  }});
const OVERLAY_TYPE = 'modal';
class ModalSlideIn extends Animation {
  constructor(element) {
    super(element);
    this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).fromTo('translateY', '100%', '0%');
  }
}
Animation.register('modal-slide-in', ModalSlideIn);
class ModalSlideOut extends Animation {
  constructor(element) {
    super(element);
    this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
  }
}
Animation.register('modal-slide-out', ModalSlideOut);
