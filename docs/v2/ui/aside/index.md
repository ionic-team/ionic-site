---
layout: v2/docs_ui
title: Ionic 2 UI | Aside
header_title: Aside - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Aside</h1>

Aside's (also known as Side Menus) control side content that slides in
or is exposed under a sliding content area.

{% include demo.html demo_url="/docs/v2/dist/demos/aside/" demo_name="aside" %}


```html
<ion-view>
  <ion-aside [content]="content">
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
  </ion-aside>

  <ion-content #content>
    <h2>Main content</h2>
  </ion-content>
</ion-view>
```
