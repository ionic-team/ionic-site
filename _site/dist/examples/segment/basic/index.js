import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {formDirectives,
  FormBuilder,
  Validators,
  Control,
  ControlGroup} from 'angular2/forms';
import {IonicView} from 'ionic/ionic';
class IonicApp {
  constructor(fb) {
    this.myForm = fb.group({mapStyle: ['hybrid', Validators.required]});
    console.log(this.myForm);
  }
  doSubmit(event) {
    console.log('Submitting form', this.form.value);
    event.preventDefault();
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-app',
      appInjector: [FormBuilder]
    }), new IonicView({
      templateUrl: 'main.html',
      directives: [formDirectives]
    })];
  }});
Object.defineProperty(IonicApp, "parameters", {get: function() {
    return [[FormBuilder]];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
