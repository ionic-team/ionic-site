---
layout: v2_fluid/docs_base
category: getting-started
id: tutorial
subid: tutorial
title: Ionic 2 Guide | Adding Pages
header_title: Adding Pages - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Adding Pages</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/getting-started/tutorial/adding-pages/index.md'>
  Improve this doc
</a>

Now that we have a basic understanding of the layout of an Ionic 2 app, let's walk through the process of
creating and navigating to pages in our app.

Taking a look at `app/app.html`, we see this line near the bottom:

```html
<ion-nav #content [root]="rootPage"></ion-nav>
```

Pay attention to the `[root]` property binding. This sets what is essentially the
first, or "root" page for the `ion-nav` controller. When the navigation controller loads, the component referenced by `rootPage` will be the root page.

In `app/app.js`, the `MyApp` root component specifies this in its constructor:

```ts
import {App, IonicApp, Platform} from 'ionic/ionic';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';

class MyApp {

  constructor(app: IonicApp, platform: Platform) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  ...
}

```

We see that `this.rootPage` is set to `HelloIonicPage`, so `HelloIonicPage` will be the first page loaded in the nav controller. Let's take a look at it.

### Creating a Page

Next, let's check out the `HelloIonicPage` that we are importing. Inside the `app/pages/hello-ionic/` folder, let's open up `hello-ionic.js`.

<button type="button" class="btn btn-primary btn-sm" data-toggle="collapse" data-target="#naming-conventions">
  Naming conventions
</button>

<div id="naming-conventions" class="collapse well">
You may have noticed that each page has its own folder that is named after the page. Inside each folder, we also see a <code>.html</code> and a <code>.scss</code> file with the same name. For example, inside of <code>hello-ionic/</code> we will find <code>hello-ionic.js</code>, <code>hello-ionic.html</code>, and <code>hello-ionic.scss</code>. Although using this pattern is not required, it can be helpful to keep things organized.
</div>


Below, you will see the `HelloIonicPage` class which has a `Page` [decorator](../../../resources/what-is/#decorators). This creates a Page - an Angular component and an Angular view configured with all the necessary directives already that is meant to be loaded dynamically, so it does not use a tag selector:

```ts
import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

}
```

Note that we pass in the `nav` object, and set it as a property in the constructor.

All pages have both a class, and an associated template. Let's checkout `app/pages/hello-ionic/hello-ionic.html` - the template file for this page:

```html
{% raw %}
<ion-navbar *navbar>
  <a menu-toggle>
    <icon menu></icon>
  </a>
  <ion-title>Hello Ionic</ion-title>
</ion-navbar>

<ion-content padding class="getting-started">

  <h3>Welcome to your first Ionic app!</h3>

  <p>
    This starter project is our way of helping you get a functional app running in record time.
    ...
  </p>
</ion-content>
{% endraw %}
```

The `<ion-navbar *navbar>` component functions as configuration
data for the navigation bar. As we navigate to the page, the nav bar will be updated with the
various `ion-nav-items` for buttons in the bar, and `<ion-title>` for the title of the bar.

The rest of the template is standard Ionic code that sets up our content area, and then
renders our welcome message.

### Creating Additional Pages

To create an additional page, we don't need to do much beyond making sure we correctly configure the title and anything else we want the navigation bar to display.

Let's check out the contents of `app/pages/list/list.js`. Inside, you will see a new page is being defined:

```ts
{% raw %}
import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    ...
   }
   ...
   itemTapped(event, item) {
     console.log('You selected', item.title);
   }
}
{% endraw %}
```

This page will create a basic list page containing a number of items. Notice that we are also defining an `itemTapped` function that logs the title of an item to the console. Let's go check out how this function gets called. Open up `app/pages/list/list.html`:

```html
<ion-item *ng-for="#item of items" (click)="itemTapped($event, item)">
```

This will add each item to the list, and register a click handler on each of those items. When the item is tapped or clicked, it will call our `itemTapped` function that logs the title of the item to the console. Also note that we pass this function the click event, as well as the item that was tapped.

Overall, this page is very similar to the `HelloIonicPage` we saw earlier. Currently, when you tap an item, our app will log a message to the console. In the next section, we will learn about how we can improve this by navigating to a new page!

<h3 style="text-align:right;">
 <a href="../navigation/">
 Navigation
 </a>
</h3>


