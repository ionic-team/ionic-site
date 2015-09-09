import {Renderer,
  ElementRef,
  EventEmitter} from 'angular2/angular2';
import {Component,
  Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Control,
  NgControl,
  NgFormControl} from 'angular2/forms';
import {ControlGroup,
  ControlDirective} from 'angular2/forms';
import {dom} from 'ionic/util';
import {IonicComponent} from 'ionic/config/component';
export class SegmentControlValueAccessor {
  constructor(cd, renderer, elementRef, segment) {
    this.onChange = (_) => {};
    this.onTouched = (_) => {};
    this.cd = cd;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.segment = segment;
    cd.valueAccessor = this;
  }
  writeValue(value) {
    this.value = !value ? '' : value;
    this.renderer.setElementProperty(this.elementRef.parentView.render, this.elementRef.boundElementIndex, 'value', this.value);
    this.segment.value = this.value;
    this.segment.selectFromValue(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
Object.defineProperty(SegmentControlValueAccessor, "annotations", {get: function() {
    return [new Directive({
      selector: 'ion-segment',
      host: {
        '(change)': 'onChange($event.target.value)',
        '(input)': 'onChange($event.target.value)',
        '(blur)': 'onTouched()',
        '[value]': 'value',
        '[class.ng-untouched]': 'cd.control?.untouched == true',
        '[class.ng-touched]': 'cd.control?.touched == true',
        '[class.ng-pristine]': 'cd.control?.pristine == true',
        '[class.ng-dirty]': 'cd.control?.dirty == true',
        '[class.ng-valid]': 'cd.control?.valid == true',
        '[class.ng-invalid]': 'cd.control?.valid == false'
      }
    })];
  }});
Object.defineProperty(SegmentControlValueAccessor, "parameters", {get: function() {
    return [[NgControl], [Renderer], [ElementRef], [Segment]];
  }});
export class Segment {
  static get config() {
    return {
      selector: 'ion-segment',
      appInjector: [NgControl],
      properties: ['value'],
      lifecycle: [onInit],
      host: {
        '(click)': 'buttonClicked($event)',
        '(change)': 'onChange($event)',
        '[value]': 'value',
        '[class.ng-untouched]': 'cd.control?.untouched == true',
        '[class.ng-touched]': 'cd.control?.touched == true',
        '[class.ng-pristine]': 'cd.control?.pristine == true',
        '[class.ng-dirty]': 'cd.control?.dirty == true',
        '[class.ng-valid]': 'cd.control?.valid == true',
        '[class.ng-invalid]': 'cd.control?.valid == false'
      }
    };
  }
  constructor(cd, elementRef, renderer) {
    this.domElement = elementRef.domElement;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.change = new EventEmitter('change');
    this.input = new EventEmitter('input');
    this.cd = cd;
    this.buttons = [];
  }
  onInit() {
    Segment.applyConfig(this);
  }
  register(segmentButton) {
    this.buttons.push(segmentButton);
    if (this.value == segmentButton.value) {
      this.selected(segmentButton);
    }
  }
  selectFromValue(value) {
    for (let button of this.buttons) {
      if (button.value === value) {
        button.isActive = true;
      }
    }
  }
  selected(segmentButton) {
    for (let button of this.buttons) {
      button.isActive = false;
    }
    segmentButton.isActive = true;
    setTimeout(() => {
      this.value = segmentButton.value;
      this.cd.valueAccessor.writeValue(segmentButton.value);
      this.selectFromValue(segmentButton.value);
      this.cd.control.updateValue(segmentButton.value);
      this.change.next();
    });
  }
}
Object.defineProperty(Segment, "annotations", {get: function() {
    return [new IonicComponent(Segment), new View({
      template: `<div class="ion-segment">
    <content></content>
  </div>
  `,
      directives: [SegmentButton]
    })];
  }});
Object.defineProperty(Segment, "parameters", {get: function() {
    return [[NgControl], [ElementRef], [Renderer]];
  }});
export class SegmentButton {
  constructor(segment, elementRef) {
    this.domElement = elementRef.domElement;
    this.segment = segment;
  }
  onInit() {
    this.segment.register(this);
  }
  buttonClicked(event) {
    this.segment.selected(this, event);
    event.preventDefault();
  }
}
Object.defineProperty(SegmentButton, "annotations", {get: function() {
    return [new Directive({
      selector: 'ion-segment-button',
      properties: ['value'],
      host: {
        '(click)': 'buttonClicked($event)',
        '[class.active]': 'isActive'
      },
      lifecycle: [onInit]
    })];
  }});
Object.defineProperty(SegmentButton, "parameters", {get: function() {
    return [[Segment, new Ancestor()], [ElementRef]];
  }});
