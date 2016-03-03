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

Pay attention to the `[root]` property binding. This sets what is essentially the first, or "root" page for the `ion-nav` component. When `ion-nav` loads, the component referenced by the variable `rootPage` will be the root page.

In `app/app.js`, the `MyApp` component specifies this in its constructor:

```ts
...
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
...

class MyApp {
  ...

  constructor(app, platform, menu) {
    ...

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  ...
}

```

We see that `this.rootPage` is set to `HelloIonicPage`, so `HelloIonicPage` will be the first page loaded in the nav controller. Let's take a look at it.


### Creating a Page

Next, let's check out the `HelloIonicPage` that we are importing. Inside the `app/pages/hello-ionic/` folder, go and open up `hello-ionic.js`.

> You may have noticed that each page has its own folder that is named after the page. Inside each folder, we also see a `.html` and a `.scss` file with the same name. For example, inside of `hello-ionic/` we will find `hello-ionic.js`, `hello-ionic.html`, and `hello-ionic.scss`. Although using this pattern is not required, it can be helpful to keep things organized.


Below, we see the `HelloIonicPage` class which has the `@Page` [decorator](../../../resources/what-is/#decorators). This creates a Page - an Angular component with all Ionic directives already provided, to be loaded using Ionic's navigation system.  Notice that because Pages are meant to be loaded dynamically, they don't have a selector:

```ts
import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {}
```

All pages have both a class, and an associated template that's being compiled as well. Let's check out `app/pages/hello-ionic/hello-ionic.html` - the template file for this page:

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

The `<ion-navbar *navbar>` is a template for the navigation bar on this page. As we navigate to this page, the button and title of the navigation bar transition in as part of the page transition.

The rest of the template is standard Ionic code that sets up our content area and prints our welcome message.

### Creating Additional Pages

To create an additional page, we don't need to do much beyond making sure we correctly configure the title and anything else we want the navigation bar to display.

Let's check out the contents of `app/list/list.js`. Inside, you will see a new page is defined:

```ts
import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  // provide Angular with metadata about things it should inject in the constructor
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
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
```

This page will create a basic list page containing a number of items.

> What the heck is that `static get parameters()`? Angular2 is written in TypeScript, and normally depends on [types](http://www.typescriptlang.org/Handbook#basic-types) to know what kind of objects to inject into class constructors as part of its [dependency injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html) framework.  Since these examples are in JavaScript and not TypeScript, we need a way to tell Angular what "types" of objects should be injected, without actually using types. The way we do this is with the static getter `parameters` which attaches this type information to the class.

Overall, this page is very similar to the `HelloIonicPage` we saw earlier. In the next section, we will learn how to navigate to a new page!
