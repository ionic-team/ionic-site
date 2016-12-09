---
layout: v2_fluid/docs_base
category: navigation
id: advanced_cases
title: Navigation - Advanced Cases
header_sub_title: Ionic Navigation
---

<h3 id="advanced_navigation">Tabbed Navigation</h3>

Navigation can be nested and used inside of complex components like Tabs. Unlike traditional routing systems, Ionic's navigation makes it easy to navigate to a given Page from anywhere in the app without specifying a specific route to it. To use the App Store app on iOS as an example, we can easily navigate to the AppDetailPage that shows info about a specific app from any tab (try it yourself to see!). Take a look at the [Tabs](#tabs) docs for more info on how to easily achieve this.

<h3 id="navigating_from_root">Navigating from the Root Component</h3>
What if you want to control navigation from your root app component? You can't inject `NavController` because any components that are navigation controllers are _children_ of the root component so they aren't available to be injected.

By adding a reference variable to the `ion-nav`, you can use `@ViewChild` to get an instance of the `Nav` component, which is a navigation controller (it extends `NavController`):

```typescript
@Component({
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  @ViewChild('myNav') nav
  rootPage = TabsPage;

  // Wait for the components in MyApp's template to be initialized
  // In this case, we are waiting for the Nav identified by
  // the template reference variable #myNav
  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    this.nav.push(LoginPage);
  }
}
```
 
 ### Navigating from an Overlay Component
 What if you wanted to navigate from an overlay component (popover, modal, alert, etc)?
 In this example, we've displayed a popover in our app. From the popover, we'll get a
 reference of the root `NavController` in our app, using the `getRootNav()` method.
 
 
 ```typescript
 import { Component } from '@angular/core';
 import { App, ViewController } from 'ionic-angular';
 
 @Component({
     template: `
     <ion-content>
       <h1>My PopoverPage</h1>
       <button ion-button (click)="pushPage()">Call pushPage</button>
      </ion-content>
     `
   })
   class PopoverPage {
     constructor(
       public viewCtrl: ViewController
       public appCtrl: App
     ) {}
 
     pushPage() {
       this.viewCtrl.dismiss();
       this.appCtrl.getRootNav().push(SecondPage);
     }
   }
 ```