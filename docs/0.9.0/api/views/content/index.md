---
layout: "api_0.9.0"
title: "Content"
header_sub_title: "Content and scrollable areas"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>


Content
===

Ionic provides easy to use content area directives for use in AngularJS projects that can be configured to use Ionic's custom Scroll View, or use the built in overflow scrolling of the browser.

While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser's native overflow scrolling will suffice, and so we've made it easy to toggle between the Ionic scroll implementation and overflow scrolling.

When using the Ionic scroll features, you'll get pull-to-refresh, customizable scroll mechanics (like bounce easing, momentum acceleration, etc.) which aligns Ionic with native SDKs that give you access to scroll behavior. You'll also get events while in a momentum scroll, which `-webkit-overflow-scrolling: touch` will not, making it of limited use in real applications.

Also, we are working on virtual list rendering which will only work when using Ionic's scroll view. That is on the upcoming roadmap.

## Ionic-Angular Usage

The `<content>` directive can be used whenever a scrollable content area is desired.

```html
<body>
  <header-bar title="'Header'">
  </header-bar>

  <!-- content area -->
  <content
    has-header="true"
    has-footer="true"
    on-refresh="onRefresh()"
    on-refresh-opening="onRefreshOpening(amount)"
    >

    <!-- for pull to refresh -->
    <refresher></refresher>
    
    <!-- content -->
  </content>

  <footer-bar>
    <h1 class="title">Footer</h1>
  </footer-bar>
</body>
```
