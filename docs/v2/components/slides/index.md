---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Slides
header_title: Slides - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/slides/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Slides</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/slides/" demo_name="slides" %}

Slides make it easy to create galleries, tutorials, and page-based layouts.

```html
<ion-slides>

  <ion-slide style="background-color: blue">
    <h2>Page 1</h2>
  </ion-slide>

  <ion-slide style="background-color: yellow">
    <h2>Page 2</h2>
  </ion-slide>

  <ion-slide style="background-color: pink">
    <h2>Page 3</h2>
  </ion-slide>

  <ion-pager>
  </ion-pager>

</ion-slides>
```

Slides take a number of configuration options on the `<ion-slides>` element:

<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Details</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        loop
      </td>
      <td>
        boolean
      </td>
      <td>
        Whether to loop at the beginning and end of the slides for a continuous experience.
      </td>
      <td>false</td>
    </tr>
    <tr>
      <td>
        index
      </td>
      <td>
        number
      </td>
      <td>
        The index to start on
      </td>
      <td>0</td>
    </tr>
    <tr>
      <td>
        bounce
      </td>
      <td>
        boolean
      </td>
      <td>
        Whether to slow down and bounce when reaching the beginning/end of the slides
      </td>
      <td>false</td>
    </tr>
  </tbody>
</table>
