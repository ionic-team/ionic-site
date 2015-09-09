import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {FormBuilder,
  Validators,
  formDirectives,
  ControlGroup} from 'angular2/forms';
class IonicApp {
  constructor() {
    var fb = new FormBuilder();
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required]
    });
  }
  deleteClicked() {
    alert('Deleting');
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new View({templateUrl: 'main.html'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
