---
layout: post
title:  "Collection Repeat"
date:   "2014-08-13 10:00:00"
categories: ionic, angularjs, html5
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a href="https://twitter.com/mhartington">Mike</a>'
searchable: true
published: true
---

<img class="showcase-image" src="/img/blog/collectionrepeat-header.png">

When developing apps, it’s fair to expect that a large list of data will be needed. Until now, if you were developing a hybrid app and wanted to show the user a list of 100+ items, that was just too bad. The phone’s browser would laugh at you as you scrolled through your list at 10 frames per second. 

After trying to fix this with every trick you knew, your frustration would slowly mount until you sighed, acknowledged that the web was just too limited for realistic apps. Then you would be forced to learn Objective-C or Java, and start building a native app.

Fortunately, developers no longer need to face such dramatic scenarios, because Ionic has a solution.

<!-- more -->

### How Does Native Do It, Anyway?

Native apps render huge lists quite seamlessly. A contacts app, for example, can display thousands of items with no problem at all. Achieving this is actually very simple: Native APIs are only rendering the specific items that should be currently visible, relative to the user's scroll position. 

This means if 10 items can fit in the screen’s viewport, and the user has scrolled halfway down a list of 100 items, only items 50-60 should be rendered.

This _is_ possible to do with web technologies, we just have to game the system a little bit...

### The Basic Concept

We know our end goal: Limit the rendering of items in a large list. So how do we get there?

When figuring this out for Ionic, we were heavily inspired by iOS’s UICollectionView. In our implementation, there are three main components:

1. The `collection-repeat` directive: The developer adds this directive to the element he or she wants to repeat, supplies an array of data, and gives the size (width and height) of each element in that array using a simple expression.

2. The `CollectionRepeatManager`: This takes the size of the scroll view containing the list, the current scroll value, and the size of each item to figure out exactly which items need to be rendered. 

3. The `CollectionDataSource`: The Manager will ask the DataSource for an item at a certain index, and the DataSource will give the Manager a complete DOM element representing that item.

### The Secret Sauce

The biggest piece of the puzzle is how to performantly render new elements as the user scrolls through the list.

While scrolling down, elements that were just at the top of the screen are no longer visible. What should be done with these elements? Our first thought was to remove these from the DOM.

The solution we found to be the most performant, though, is to hide these no longer visible elements and mark them as “available for rendering.” If we were to remove no-longer-visible elements, we would have to append them to the DOM again later, as the user scrolled down. And appending new elements to the DOM while the user scrolls causes noticeable jankiness.

Later, the Manager asks the DataSource, “Give me an element matching data at index 16, so I can render it.” The DataSource then finds an element that’s already in the DOM and marked as available. It assigns item 16’s data to that element’s scope and gives the element to the Manager. 

The Manager then transforms the element into its proper position in the view, using the width and height given by the developer at the start to calculate its position. We use Javascript to transform the elements into their proper positions--again, so that we don’t have to worry about ordering elements in the DOM as the user scrolls. The actual order of elements in the list doesn’t matter: They are transformed into the proper position to look like they’re in the proper order, and the end user can’t tell the difference. 

### Problem Solved. Now What?

What does this mean for developers? It means we are no longer limited by the weaknesses of the DOM and the mobile webview. It means we can finally have as much data as needed, keep scrolling smooth and performant, *and* keep our users happy, all at the same time.

Crazy, huh?

Check out [Collection Repeat’s documentation](http://ionicframework.com/docs/api/directive/collectionRepeat).

<div style="float: right; margin-right: -160px">
  {% include codepen.html id="mFygh" %}
</div>

