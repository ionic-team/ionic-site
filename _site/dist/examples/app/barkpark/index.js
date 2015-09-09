import {For,
  Parent} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {FormBuilder,
  Validators,
  FormDirectives,
  ControlGroup} from 'angular2/forms';
import {Log} from 'ionic/util';
import {Router,
  Routable,
  IonicView,
  NavController} from 'ionic/ionic';
class LoginPage {
  constructor(nav) {
    this.nav = nav;
    Log.log('LOGIN PAGE', this);
    var fb = new FormBuilder();
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  doLogin(event) {
    Log.log('Doing login');
    event.preventDefault();
    console.log(this.loginForm.value);
  }
  doSignup(event) {
    this.nav.push(SignupPage);
  }
}
Object.defineProperty(LoginPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/login.html'})];
  }});
Object.defineProperty(LoginPage, "parameters", {get: function() {
    return [[NavController]];
  }});
new Routable(LoginPage, {
  url: '/login',
  tag: 'login'
});
export class SignupPage {
  constructor(nav) {
    this.nav = nav;
    Log.log('SIGNUP PAGE');
    var fb = new FormBuilder();
    this.signupForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  doLogin(event) {
    this.nav.pop();
  }
  doSignup(event) {
    Log.log('Doing signup');
    event.preventDefault();
    console.log(this.signupForm.value);
    this.nav.push(AppPage);
  }
}
Object.defineProperty(SignupPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/signup.html'})];
  }});
Object.defineProperty(SignupPage, "parameters", {get: function() {
    return [[NavController]];
  }});
export class AppPage {
  constructor(nav) {
    this.nav = nav;
    this.streamTab = StreamTab;
  }
}
Object.defineProperty(AppPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/app.html'})];
  }});
Object.defineProperty(AppPage, "parameters", {get: function() {
    return [[NavController]];
  }});
class StreamTab {
  constructor(nav) {
    this.nav = nav;
    this.posts = [{'title': 'Just barked my first bark'}, {'title': 'Went poopy'}];
  }
  selectPost(post) {
    console.log('Select post', post);
    this.nav.push(PostDetail, {post}, {transition: '3dflip'});
  }
}
Object.defineProperty(StreamTab, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/tabs/home.html'})];
  }});
Object.defineProperty(StreamTab, "parameters", {get: function() {
    return [[NavController]];
  }});
class PostDetail {
  constructor(nav) {
    this.nav = nav;
    this.title = 'Hello';
  }
  selectItem() {
    this.nav.push(PostDetailTab);
  }
}
Object.defineProperty(PostDetail, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/post/detail.html'})];
  }});
Object.defineProperty(PostDetail, "parameters", {get: function() {
    return [[NavController]];
  }});
class SplashPage {
  constructor(nav) {
    this.nav = nav;
    window.nav = nav;
  }
  doLogin() {
    this.nav.push(LoginPage);
  }
}
Object.defineProperty(SplashPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/splash.html'})];
  }});
Object.defineProperty(SplashPage, "parameters", {get: function() {
    return [[NavController]];
  }});
class IonicApp {
  constructor() {
    this.rootView = SplashPage;
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({template: '<ion-nav [root]="rootView"></ion-nav>'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
