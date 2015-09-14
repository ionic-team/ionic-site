---
layout: v2/docs_guide
title: Ionic 2 Guide
header_title: Navigating - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/navigating/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Navigating to Pages</h1>


We created a new page in the last section, but now we need to navigate to it.

Navigation in Ionic 2 works like a simple stack, where we `push` new pages onto the
top of the stack which takes us forwards in the app and shows a back button,
and then we `pop` the top one off to go back to the page before it.

<strong>Note:</strong> When it comes to URLs, Ionic 2 works a bit differently than Ionic 1. Instead of using URLs to navigate, we use them to make sure we can always come back to a page (on app launch, for example), but pages can be navigated to from anywhere which was not possible in v1. For example, we can show the same Playlist page instead of a tab, a side menu, or a modal. This means we don't use `href` to navigate around.

So, let's take our `PlaylistPage` from the previous example and navigate to it when we tap on a specific play list from the `PlaylistsPage` (note the 's'). Open up `app/playlists/playlists.html`, and find the `<ion-item>` entry:

```html
<ion-item *ng-for="#playlist of playlists" (^click)="openPlaylist(playlist)">{{playlist.title}}</ion-item>
```

When the user taps this, the `openPlaylist()` function will be called with a reference to the playlist that was tapped.

Open `app/playlists/playlists.js`, and let's add a method to `PlaylistsPage` to handle this:

```ts
export class PlaylistsPage {
  // constructor and other methods above here...

  openPlaylist(playlist) {
    this.nav.push(PlaylistPage, {
      playlist: playlist
    })
  }
}
```

Open the app, and navigate to the playlists page. When we tap on the page, we should see the new playlist page open with the title set to the playlist we just clicked!
