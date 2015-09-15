---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Menu
header_title: Menu - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/menu/index.md'>
    Improve this doc
  </a>
</div>

<div class="docs-ui">

<h1 class="title">Menu</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/menu/" demo_name="menu" %}

Menus control side content that slides in or is exposed under a sliding content area.


```html
<ion-view>
  <ion-menu [content]="content" side="left">
    <ion-list inset>
      <div class="list-header">
        Menu
      </div>
      <ion-item>
        About
      </ion-item>
      <ion-item>
        Specials
      </ion-item>
      <ion-item>
        Beer
      </ion-item>
      <ion-item>
        Potatoes
      </ion-item>
    </ion-list>
  </ion-menu>

  <ion-content #content>
    <h2>Main content</h2>
  </ion-content>
</ion-view>
```

</div>
