import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {NavController,
  IonicView} from 'ionic/ionic';
import {HackerNews} from './hn';
import {HNSinglePost} from './pages/single';
export class Story {
  constructor() {}
}
Object.defineProperty(Story, "annotations", {get: function() {
    return [new Component({selector: 'story'}), new IonicView({template: '<div class="hn-story"><content></content></div>'})];
  }});
class HNTopStories {
  constructor(nav) {
    this.nav = nav;
    this.stories = [];
    var APIUrl = 'https://hacker-news.firebaseio.com/v0';
    console.log('FIREBASE', window.Firebase);
    this.fb = new window.Firebase(APIUrl);
    this.fb.child('topstories').limitToFirst(20).once('value', (snapshot) => {
      let items = snapshot.val();
      console.log('Fetched', items.length, 'items');
      for (var itemID of items) {
        this.fb.child("item").child(itemID).on('value', (data) => {
          console.log('GOT ITEM', data.val());
          this.stories.push(data.val());
        });
      }
    });
  }
  openStory(story) {
    console.log('Opening story', story);
    this.nav.push(HNSinglePost, story);
  }
}
Object.defineProperty(HNTopStories, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: './pages/top.html'})];
  }});
Object.defineProperty(HNTopStories, "parameters", {get: function() {
    return [[NavController]];
  }});
class IonicApp {
  constructor() {
    this.rootView = HNTopStories;
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({template: '<ion-nav [root]="rootView"></ion-nav>'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
