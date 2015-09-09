import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Query,
  QueryList,
  NgFor} from 'angular2/angular2';
import {Control,
  ControlGroup,
  NgForm,
  formDirectives,
  Validators,
  NgControl,
  ControlValueAccessor,
  NgControlName,
  NgFormModel,
  FormBuilder} from 'angular2/forms';
import {Checkbox,
  Content,
  List} from 'ionic/ionic';
class IonicApp {
  constructor() {
    this.fruitsForm = new ControlGroup({
      "appleCtrl": new Control("APPLE", isChecked),
      "bananaCtrl": new Control("BANANA", isChecked),
      "grapeCtrl": new Control("GRAPE", isChecked),
      "cherryCtrl": new Control("CHERRY", isChecked)
    });
    this.appleCtrl = "appleCtrl";
    this.bananaCtrl = "bananaCtrl";
    this.grapeCtrl = "grapeCtrl";
    this.cherryCtrl = "cherryCtrl";
    function isChecked(ctrl) {
      if (ctrl.checked) {
        return null;
      } else {
        return {'notChecked': true};
      }
    }
  }
  doSubmit(event) {
    console.log('Submitting form', this.fruitsForm.value);
    event.preventDefault();
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new View({
      templateUrl: 'main.html',
      directives: [Checkbox, List, Content, NgControlName, NgFormModel]
    })];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
