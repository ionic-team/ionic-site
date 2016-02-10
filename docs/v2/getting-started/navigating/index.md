---
layout: v2_fluid/docs_base
category: getting-started
id: tutorial
title: Ionic 2 Guide | Navigating
header_title: Navigating - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---


<h1 class="title">Navigating to Pages</h1>
<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/getting-started/navigating/index.md'>
Improve this doc
</a>

You created a new page in the last section, and now you need to navigate to it.

Navigation in Ionic 2 works like a simple stack, where you `push` new pages onto the
top of the stack, which takes you forwards in the app and shows a back button,
and then you `pop` the top one off to go back to the page before it.

<strong>Note:</strong> When it comes to URLs, Ionic 2 works a bit differently than Ionic 1. Instead of using URLs to navigate, you use them to make sure you can always come back to a page (on app launch, for example). You can navigate to pages from anywhere, which wasn't possible in v1. For example, you can show the same Playlist page instead of a tab, a side menu, or a modal. This means you don't use `href` to navigate around.

So, take your `PlaylistPage` from the previous example and navigate to it when you tap on a specific play list from the `PlaylistsPage` (note the 's'). Open up `app/playlists/playlists.html`, and find the `<ion-item>` entry:

```html
<ion-item *ng-for="#playlist of playlists" (click)="openPlaylist(playlist)">{{playlist.title}}</ion-item>
```

When the user taps this, the `openPlaylist()` function will be called with a reference to the playlist that was tapped.

Open `app/playlists/playlists.js`, and add a method to `PlaylistsPage` to handle this:

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

Open the app and navigate to the playlists page. When you tap on the page, you should see the new playlist page open with the title set to the playlist you just clicked!
