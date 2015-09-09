import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {ElementRef} from 'angular2/angular2';
import {Directive} from 'angular2/src/core/annotations_impl/annotations';
import {Optional} from 'angular2/src/di/annotations_impl';
import {ViewController} from '../view/view-controller';
import {Pane} from './pane';
import {Gesture} from 'ionic/gestures/gesture';
export class SwipeHandle {
  constructor(viewCtrl, pane, elementRef) {
    if (!viewCtrl || !pane)
      return;
    const self = this;
    self.pane = pane;
    self.viewCtrl = viewCtrl;
    let gesture = self.gesture = new Gesture(elementRef.domElement);
    gesture.listen();
    function dragHorizontal(ev) {
      self.onDragHorizontal(ev);
    }
    gesture.on('panend', (ev) => {
      self.onDragEnd(ev);
    });
    gesture.on('panleft', dragHorizontal);
    gesture.on('panright', dragHorizontal);
    self.startX = null;
    self.width = null;
  }
  onDragEnd(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let progress = (ev.gesture.center.x - this.startX) / this.width;
    let completeSwipeBack = (progress > 0.5);
    let playbackRate = 4;
    if (completeSwipeBack) {
      if (progress > 0.9) {
        playbackRate = 1;
      } else if (progress > 0.8) {
        playbackRate = 2;
      } else if (progress > 0.7) {
        playbackRate = 3;
      }
    } else {
      if (progress < 0.1) {
        playbackRate = 1;
      } else if (progress < 0.2) {
        playbackRate = 2;
      } else if (progress < 0.3) {
        playbackRate = 3;
      }
    }
    this.viewCtrl.swipeBackEnd(completeSwipeBack, progress, playbackRate);
    this.startX = null;
  }
  onDragHorizontal(ev) {
    if (this.startX === null) {
      ev.preventDefault();
      ev.stopPropagation();
      this.startX = ev.gesture.center.x;
      this.width = this.pane.width() - this.startX;
      this.viewCtrl.swipeBackStart();
    }
    this.viewCtrl.swipeBackProgress((ev.gesture.center.x - this.startX) / this.width);
  }
  showHandle() {
    return (this.viewCtrl ? this.viewCtrl.swipeBackEnabled() : false);
  }
}
Object.defineProperty(SwipeHandle, "annotations", {get: function() {
    return [new Directive({
      selector: '.swipe-handle',
      host: {'[class.show-handle]': 'showHandle()'}
    })];
  }});
Object.defineProperty(SwipeHandle, "parameters", {get: function() {
    return [[ViewController, new Optional()], [Pane, new Parent()], [ElementRef]];
  }});
