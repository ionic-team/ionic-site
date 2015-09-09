import {ElementRef,
  Pipe} from 'angular2/angular2';
import {Component,
  Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {IonicComponent} from 'ionic/config/component';
export class SearchBar {
  static get config() {
    return {
      selector: 'ion-search-bar',
      properties: ['list', 'query'],
      defaultProperties: {
        'cancelText': 'Cancel',
        'placeholder': 'Search'
      }
    };
  }
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    this.query = '';
  }
  onInit() {
    SearchBar.applyConfig(this);
  }
  writeValue(value) {
    this.value = value;
  }
  inputChanged(event) {
    this.value = event.target.value;
    console.log('Search changed', this.value);
    this.controlDirective._control().updateValue(event.target.value);
  }
  inputFocused() {
    this.isFocused = true;
    this.shouldLeftAlign = true;
  }
  inputBlurred() {
    this.isFocused = false;
    this.shouldLeftAlign = this.value.trim() != '';
  }
}
Object.defineProperty(SearchBar, "annotations", {get: function() {
    return [new IonicComponent(SearchBar), new View({template: `
  <div class="search-bar-input-container" [class.left-align]="shouldLeftAlign">
    <div class="search-bar-icon"></div>
    <input (focus)="inputFocused()" (blur)="inputBlurred()"
    (input)="inputChanged($event)" class="search-bar-input" type="search" [attr.placeholder]="placeholder">
  </div>
  <button class="search-bar-cancel">{{ cancelText }}</button>`})];
  }});
Object.defineProperty(SearchBar, "parameters", {get: function() {
    return [[ElementRef]];
  }});
