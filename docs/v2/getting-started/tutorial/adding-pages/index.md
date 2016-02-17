---
layout: v2_fluid/docs_base
category: getting-started
id: tutorial
subid: tutorial
title: Ionic 2 Guide | Adding Pages
header_title: Adding Pages - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
prev_page_title: Project Structure
prev_page_link: /docs/v2/getting-started/tutorial/project-structure
next_page_title: Navigating to Pages
next_page_link: /docs/v2/getting-started/tutorial/navigation
---

<h1 class="title">Adding Pages</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/getting-started/tutorial/adding-pages/index.md'>
  Improve this doc
</a>

Now that we have a basic understanding of the layout of an Ionic 2 app, let's walk through the process of creating and navigating to pages in our app.

Taking a look at `app/app.html`, we see this line near the bottom:

```html
<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>
```

Pay attention to the `[root]` property binding. This sets what is essentially the first, or "root" page for the `ion-nav` controller. When the navigation controller loads, the component referenced by `rootPage` will be the root page.

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

> You may have noticed that each page has its own folder that is named after the page. Inside each folder, we also see a `.html` and a `.scss` file with the same name. For example, inside of `hello-ionic/` we will find`hello-ionic.js`, `hello-ionic.html`, and `hello-ionic.scss`. Although using this pattern is not required, it can be helpful to keep things organized.


Below, you will see the `HelloIonicPage` class which has a `Page` [decorator](../../../resources/what-is/#decorators). This creates a Page - an Angular component and an Angular view configured with all the necessary directives already that is meant to be loaded dynamically, so it does not use a tag selector:

```ts
import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
  }

}
```

All pages have both a class, and an associated template that's being compiled as well. Let's checkout `app/pages/hello-ionic/hello-ionic.html` - the template file for this page:

```html
{% raw %}
<ion-navbar *navbar>
  <button menuToggle>
    <ion-icon name="menu"></ion-icon>
  </button>
  <ion-title>Hello Ionic</ion-title>
</ion-navbar>


<ion-content padding class="getting-started">

  <h3>Welcome to your first Ionic app!</h3>

  <p>
    This starter project is our way of helping you get a functional app running in record time.
  </p>
  <p>
    Follow along on the tutorial section of the Ionic docs!
  </p>
  <p>
    <button primary menuToggle>Toggle Menu</button>
  </p>

</ion-content>
{% endraw %}
```

The `<ion-navbar *navbar>` component functions as configuration data for the navigation bar. As we navigate to the page, the nav bar will be updated with the various `ion-nav-items` for buttons in the bar, and `<ion-title>` for the title of the bar.

The rest of the template is standard Ionic code that sets up our content area, and then renders our welcome message.

### Creating Additional Pages

To create an additional page, we don't need to do much beyond making sure we correctly configure the title and anything else we want the navigation bar to display.

Let's check out the contents of `app/list/list.js`. Inside, you will see a new page is being defined:

```ts
{% raw %}
import {Page, NavController, NavParams} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
{% endraw %}
```

This page will create a basic list page containing a number of items.


Overall, this page is very similar to the `HelloIonicPage` we saw earlier. In the next section, we will learn about how this wiring up our navigation to a new page!
