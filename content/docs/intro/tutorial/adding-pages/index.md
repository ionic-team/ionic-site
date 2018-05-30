---
layout: fluid/docs_base
category: intro
id: tutorial
subid: tutorial
title: Adding Pages - Tutorial
header_sub_title: Getting Started with Ionic
prev_page_title: Project Structure
prev_page_link: /docs//intro/tutorial/project-structure
next_page_title: Navigating to Pages
next_page_link: /docs//intro/tutorial/navigation
---

<h1 class="title">Adding Pages</h1>

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/intro/tutorial/adding-pages/index.md'>
  Improve this doc
</a>

Now that we have a basic understanding of the layout of an Ionic app, let's walk through the process of creating and navigating to pages in our app.

Taking a look at `src/app/app.html`, we see this line near the bottom:

```html
<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
```

Pay attention to the `[root]` property binding. This sets what is essentially the first, or "root" page for the `ion-nav` component. When `ion-nav` loads, the component referenced by the variable `rootPage` will be the root page.

In `src/app/app.component.ts`, the `MyApp` component specifies this in its constructor:

```ts
...
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
...

export class MyApp {
  ...

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

    constructor(private platform: Platform, private menu: MenuController, ...) {
      ...
    }
  ...
}

```

We see that `rootPage` is set to `HelloIonicPage`, so `HelloIonicPage` will be the first page loaded in the nav controller. Let's take a look at it.


### Creating a Page

Next, let's check out the `HelloIonicPage` that we are importing. Inside the `src/pages/hello-ionic/` folder, go and open up `hello-ionic.ts`.

> You may have noticed that each page has its own folder that is named after the page. Inside each folder, we also see a `.html` and a `.scss` file with the same name. For example, inside of `hello-ionic/` we will find `hello-ionic.ts`, `hello-ionic.html`, and `hello-ionic.scss`. Although using this pattern is not required, it can be helpful to keep things organized.


Below, we see the `HelloIonicPage` class. This creates a Page - an Angular component with all Ionic directives already provided, to be loaded using Ionic's navigation system.  Notice that because Pages are meant to be loaded dynamically, they don't need to have a selector. However, the selector is useful in order to override the default styles on a specific page (see `hello-ionic.scss`):

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
}
```

All pages have both a class, and an associated template that's being compiled as well. Let's check out `src/pages/hello-ionic/hello-ionic.html` - the template file for this page:

```html
{% raw %}
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Hello Ionic</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>

  <h3>Welcome to your first Ionic app!</h3>

  <p>
    This starter project is our way of helping you get a functional app running in record time.
  </p>
  <p>
    Follow along on the tutorial section of the Ionic docs!
  </p>
  <p>
    <button ion-button color="primary" menuToggle>Toggle Menu</button>
  </p>

</ion-content>
{% endraw %}
```

The `<ion-navbar>` is a template for the [navigation bar](/docs//api/components/toolbar/Navbar/) on this page. As we navigate to this page, the button and title of the navigation bar transition in as part of the page transition.

The rest of the template is standard Ionic code that sets up our content area and prints our welcome message.

### Creating Additional Pages

To create an additional page, we don't need to do much beyond making sure we correctly configure the title and anything else we want the navigation bar to display.

Let's check out the contents of `src/pages/list/list.ts`. Inside, you will see a new page is defined:

```ts
import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
```

This page will create a basic list page containing a number of items.

Overall, this page is very similar to the `HelloIonicPage` we saw earlier. In the next section, we will learn how to navigate to a new page!
