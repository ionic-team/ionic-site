---
layout: v2/docs_base
id: getting-started
subid: tutorial
title: Ionic 2 Guide | Navigating
header_title: Navigating - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/navigating/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Navigating to Pages</h1>


We created a new page in the last section, but now we need to navigate to it. Recall we had a function inside our `ListPage` class that looked something like this:

```ts
  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    })
  }
```

Navigation in Ionic 2 works like a simple stack, where we `push` new pages onto the
top of the stack which takes us forwards in the app and shows a back button,
and then we `pop` the top one off to go back to the page before it. Since we set `this.nav`
in the constructor, we can call `this.nav.push()`, and pass it the page we want to navigate to. We can also
pass it an object containing data we would like to pass to the page being navigated to.


<button type="button" class="btn btn-primary btn-sm" data-toggle="collapse" data-target="#v1-changes">
  Navigation model differences from Ionic 1
</button>

<div id="v1-changes" class="collapse well">
When it comes to URLs, Ionic 2 works a bit differently than Ionic 1. Instead of using URLs to navigate, we use them to make sure we can always come back to a page (on app launch, for example), but pages can be navigated to from anywhere which was not possible in v1. For example, we can show the same Playlist page instead of a tab, a side menu, or a modal. This means we don't use `href` to navigate around.
</div>

So, let's go check out how this function gets called. Open up `app/list/list.html`:

```html
<ion-item *ng-for="#item of items" (click)="itemTapped($event, item)">
```

This will add each item to the list, and register a click handler on each of those items. When the item is tapped or clicked, it will call our `itemTapped()` function that navigates to `ItemDetailsPage`.

Also note that we can pass the click handler function the click event, and the item.

Open the app, and navigate to the list page. When we tap on an item, we should be brought to our item details page!

### Next Steps

*Nice job*! You've made it through the tutorial and are on your way towards *Ionic mastery*! If you're looking for an overview on what else is included with Ionic, check out the [Component docs](../../../components). To learn about using device APIs, head over to the [Platform section](../../../platform). If at any point you need help, check out our [developer resources section](../../../resources/), or ask a question on [the forums](http://forum.ionicframework.com/). 


