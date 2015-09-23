---
layout: v2/docs_base
id: getting-started
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
<ion-nav #content [root]="firstPage"></ion-nav>
```

Pay attention to the `[root]` property binding. This sets what is essentially the
first, or "root" page for the `ion-nav` controller. When the navigation controller loads, the component referenced
by `firstPage` will be the root view.

In `app/app.js`, the `MyApp` root component specifies this in its constructor:

```ts
import {SongsPage} from './songs/songs';

export class MyApp {
  constructor() {
    this.firstPage = SongsPage
  }
}
```

We see that `this.firstPage` is set to `SongsPage`, so `SongsPage` will be the
first view loaded in the nav controller. Let's take a look at it.

### SongsPage

Inside the `app/songs` folder, we see `songs.js`, let's open that up.

You should see these most relevant parts, which create a new View in Ionic. An IonicView is
  an Angular component and an Angular view configured with all the necessary directives already that is meant
  to be loaded dynamically, so it does not use a tag selector:

```ts
import {IonicView} from 'ionic/ionic';

@IonicView({
  templateUrl: '_app/songs/songs.html'
})
export class SongsPage {
  constructor(app: IonicApp, nav: NavController) {
    this.songs = [
      // Songs {title: blah}
    ];
  }
}
```

And then inside the `app/songs/songs.html` file we see the template for this page:

```html
<ion-navbar *navbar>
  <ion-nav-items primary>
    <button icon (^click)="toggleMenu()"><i class="icon ion-navicon"></i></button>
  </ion-nav-items>
  <ion-title>Songs</ion-title>
</ion-navbar>

<ion-content>
  <ion-list inset>
    <ion-item *ng-for="#song of songs" (^click)="openSong(song)">{{song.title}}</ion-item>
  </ion-list>
</ion-content>
```

The `<ion-navbar *navbar>` is what we call a template, and functions as configuration
data for the navigation bar. As we navigate to the page, the nav bar will be updated with the
various `ion-nav-items` for buttons in the bar, and `<ion-title>` for the title of the bar.

The rest of the template is standard Ionic code that sets up our content area, and then
renders the list of our songs.

### Making new pages

To create a page that can be navigated to, we don't need to do much beyond
making sure we correctly configure the title and anything else we want the
navigation bar to display.

Let's create a page to display a single playlist. Inside of the `app/` folder,
create the `playlist/` directory and a file called `playlists.js` in it. Put this code
into that file:

```ts
{% raw %}
import {IonicView} from 'ionic/ionic';

@IonicView({
  templateUrl: '_app/playlist/playlist.html'
})
export class PlaylistPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
{% endraw %}
```

And then let's put this in our `app/playlist/playlist.html` file:

```html
<ion-navbar *navbar>
  <ion-nav-items primary>
    <button icon (^click)="openMenu()"><i class="icon ion-navicon"></i></button>
  </ion-nav-items>
  <ion-title>{{playlist.title}}</ion-title>
</ion-navbar>

<ion-content class="padding">
</ion-content>
```

Now that we have our page constructed, let's continue to see how to navigate to it.

<a href="/docs/v2/guide/navigating/" button primary>Navigating</a>