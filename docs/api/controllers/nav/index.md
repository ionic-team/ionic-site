---
layout: "api_0.9.0"
title: "Nav Controller"
header_sub_title: "Navigation stack"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>

Nav Controller
===

The Nav Controller provides a stack of "pages" that can be pushed or popped. The API was designed after common native solutions such as UINavigationController.


## Ionic-Angular Usage

To use the Side Menu Controller with Ionic-Angular, use the `<navigation>` top level directive, adding a `<nav-bar>` directive which will render a header bar that updates as we navigate through the navigation stack.

```html
<navigation first="page.html">
  <!-- Center content -->
  <nav-bar>
  </nav-bar>
</navigation>
```

This will load the navigation controller and then push the first page onto the stack specified by `first="page.html"`

In the navigation controller, pages are loaded by URLs referencing a template like many common AngularJS operations. One simple way to create templates in Angular is to put them directly into your HTML file and use the `<script type="text/ng-template">` syntax. So, if we want to push `page.html` to the stack, we can define the template and then push it:

```html
<script id="page.html" type="text/ng-template">
  <!-- The title of the page gets shown in the header nav-bar. -->
  <div title="title" class="nav-page">

    <!-- your controller might go here -->
    <div ng-controller="PageCtrl">
      <content has-header="true">
        <!-- The content of the page -->
      </content>
    </div>

  </div>
</script>
```

This is nice because the template will be cached for very fast loading, instead of loading it off of the network.

We can push on to or pop pages from the stack using `nav-push` and `nav-pop` which work much like `ng-click`. Updating the `page.html` template from above we get:

```html
  <!-- your controller might go here -->
  <div ng-controller="PageCtrl">
    <content has-header="true">
      <button class="button button-assertive" ng-push="cats.html">More cats!</button>
      <button class="button button-pure" ng-pop>Go back</button>
    </content>
  </div>
```

`ng-push` loads a template given the URL and pushes it onto the stack. `ng-pop` simply pops a page off of the stack and animates back to it.
