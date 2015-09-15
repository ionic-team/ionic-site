---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Navigation
header_title: Navigation - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Navigation</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/navigation/" demo_name="navigation" %}

Navigation in Ionic 2 is much more "native like" and is heavily modeled off of the navigation
features in iOS.

To move between pages, we decide which view we want to show, and then
`push` it into our navigation stack. To go back, we `pop` the current view.
