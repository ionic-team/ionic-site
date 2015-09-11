---
layout: v2/docs_ui
title: Ionic 2 UI | Cards
header_title: Cards - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/cards/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Cards</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/cards/" demo_name="cards" %}

<p>
  Cards are a great way to display important pieces of content, and are quickly emerging as a core design pattern for apps. They're are a great way to contain and organize information, while also setting up predictable expectations for the user. With so much content to display at once, and often so little screen realestate, cards have fast become the design pattern of choice for many companies, including the likes of <a href="http://www.google.com/landing/now/" target="_blank">Google</a>, <a href="https://dev.twitter.com/docs/cards" target="_blank">Twitter</a>, and <a href="https://play.spotify.com/discover" target="_blank">Spotify</a>.
</p>
<p>
  For mobile experiences, Cards make it easy to display the same information visually across many different screen sizes. They allow for more control, are flexible, and can even be animated. Cards are usually placed on top of one another, but they can also be used like a "page" and swiped between, left and right.
</p>

Cards are primarily a CSS component. To use them, follow this structure:

```html
<ion-card>

  <ion-card-header>
    Card Header
  </ion-card-header>

  <ion-card-content>
    <!-- Add card content here! -->
  </ion-card-content>

</ion-card>
```
