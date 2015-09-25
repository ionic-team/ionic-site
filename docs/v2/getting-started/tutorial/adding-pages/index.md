---
layout: v2/docs_base
id: getting-started
subid: tutorial
title: Ionic 2 Guide | Adding Pages
header_title: Adding Pages - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/adding-pages/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Adding Pages</h1>


Now that we have a basic understanding of the layout of an Ionic 2 app, let's walk through the process of
creating and navigating to views, also known as "pages" in our app.

Taking a look at `app/app.html`, we see this line near the bottom:

```html
<ion-nav #content [root]="rootPage"></ion-nav>
```

Pay attention to the `[root]` property binding. This sets what is essentially the
first, or "root" page for the `ion-nav` controller. When the navigation controller loads, the component referenced by `rootPage` will be the root view.

In `app/app.js`, the `MyApp` root component specifies this in its constructor:

```ts
import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {HelloIonicPage} from './hello-ionic/hello-ionic';
import {ListPage} from './list/list';

class MyApp {

  constructor(app: IonicApp, platform: IonicPlatform) {

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

We see that `this.rootPage` is set to `HelloIonicPage`, so `HelloIonicPage` will be the first view loaded in the nav controller. Let's take a look at it.

### Creating a Page

Next, we need to create the `HelloIonicPage` the we are importing. Inside the `app/hello-ionic/` folder, let's open up `hello-ionic.js`.

<button type="button" class="btn btn-primary btn-sm" data-toggle="collapse" data-target="#naming-conventions">
  Naming conventions
</button>

<div id="naming-conventions" class="collapse well">
You may have noticed that each page has its own folder that is named after the page. Inside each folder, we also see a <code>.html</code> and a <code>.scss</code> file with the same name. For example, inside of <code>hello-ionic/</code> we will find <code>hello-ionic.js</code>, <code>hello-ionic.html</code>, and <code>hello-ionic.scss</code>. Although using this pattern is not required, it can be helpful to keep things organized.
</div>
 

Below, you will see the `HelloIonicPage` class which has an `IonicView` [decorator](../../../resources/what-is/#decorators). This creates an IonicView - an Angular component and an Angular view configured with all the necessary directives already that is meant to be loaded dynamically, so it does not use a tag selector:

```ts
import {IonicView, NavController} from 'ionic/ionic';

@IonicView({
  templateUrl: 'app/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

}
```

Note that we pass in the `nav` object, and set it as a property in the constructor.

All views have both a class, and an associated template. Let's checkout out `app/hello-ionic/hello-ionic.html` - the template file for this page:

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

The `<ion-navbar *navbar>` is what we call a template, and functions as configuration
data for the navigation bar. As we navigate to the page, the nav bar will be updated with the
various `ion-nav-items` for buttons in the bar, and `<ion-title>` for the title of the bar.

The rest of the template is standard Ionic code that sets up our content area, and then
renders our welcome message.

### Creating Additional Pages

To create an additional pages, we don't need to do much beyond making sure we correctly configure the title and anything else we want the
navigation bar to display.

Let's check out the contents of `app/list/list.js`. Inside, you will see a new page is being created:

```ts
{% raw %}
import {IonicApp, IonicView, NavController, NavParams} from 'ionic/ionic';

import {ItemDetailsPage} from '../item-details/item-details';

@IonicView({
  templateUrl: 'app/list/list.html'
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    ...
   }
   ...
   itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
      })
   }
}
{% endraw %}
```

This page is very similar to the `HelloIonicPage` we saw earlier. However, it is important to note that we are importing `ItemDetailsPage` and using it inside the `itemTapped` function. In the next section, we will go over navigation, and learn about how this function works.

<a href="../navigation/" class="btn btn-primary">Navigating</a>
