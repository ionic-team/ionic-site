--- 
layout: post
title:  "Collection Repeat: Estimate, Iterate, Improve"
date: "2015-03-02 12:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e65d670a976d22edf1327b9519556a9e?s=128" class="author-icon"><a href="http://twitter.com/andrewtjoslin" target="_blank">@andrewtjoslin</a>'
published: false
---

Collection repeat is Ionic's solution for scrolling huge lists. Inspired by [iOS's UITableView](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITableViewDelegate_Protocol/index.html), we switch out elements as the user scrolls so that only the minimum necessary elements are rendered. We released our first version of collection repeat [last year](http://ionicframework.com/blog/collection-repeat/) have been improving it since then. Recently, we identified some huge potential performance increases and decided a complete refactor was necessary.

Before we dive into the details, let’s talk about how collection repeat works at the most basic level.

### The Essentials

Say there are four items on the screen, matching items 1-4 in the user's array of data: As the user scrolls down, item 1 will move up and out of view. Once it's fully out of view, its element will move to the bottom of the screen to the space where item 5 should be, as item 5 moves up and into view.

Additionally, we take the Angular scope that just represented item 1, assign item 5's data to it, and trigger a digest on that scope to make the element represent item 5.

To follow the above strategy and position every element properly, we need every item's exact width and height.

### The Old and the New

In our first iteration of collection-repeat, we required developers to provide dimension stats for every item, because we assumed that every item might have a unique width and height:

```html
<ion-list>
  <ion-item collection-repeat="item in items"
    collection-item-height="75"
    collection-item-width="'100%'">
    {{item}}
  </ion-item>
</ion-list>
```

With the new syntax, height and width are optional:

```html
<ion-list>
  <ion-item collection-repeat="item in items">
    {{item}}
  </ion-item>
</ion-list>
```

As you can see, in the common case where every item is the same size, you don't have to provide dimensions at all. Here, collection repeat now shines as a drop-in replacement for ngRepeat.

See [the documentation](http://ionicframework.com/docs/nightly/api/directive/collectionRepeat) for more information.

### The Problems With the First Iteration

The old collection repeat assumed that every item could have unique dimensions. This required us to recalculate every single item's width and height whenever the scroll view resized. This expensive operation caused unacceptable lag when loading or rotating the phone.

When we took another look at UITableView, we hit upon a better solution. UITableView accepts an 'estimatedHeight' for every element in the list and uses that to estimate the size of the scrollView. Then, while the user scrolls down, each item's dimensions are calculated on demand, and the size of the scrollView adjusts to reflect the actual dimensions.

We realized how much this could help performance and went into refactor mode.

### Improvements In the New

Instead of requiring the user to input estimatedHeight, we compute the dimensions of the first element in the list with getComputedStyle() and use that for the estimatedHeight and estimatedWidth.

This lets us calculate dimensions lazily. We estimate that `scrollView.height === estimatedHeight * items.length` at the start, and as the user scrolls, we calculate the actual height of every element.

However, we went even further with optimization.

In short, the new collection repeat has four possible 'modes' it enters, the first being the most performant, and the last being the least performant:

1. **[Static](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L731) [List](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L719-L729) Mode**: This mode is entered when the height is given as a constant or not given at all, and the width is 100%. Here, we assume the height of every element is equal to the estimatedHeight. The math for this mode is simple and easy because every item has the same dimensions.

2. **[Static](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L731-L759) [Grid](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L706-L717) Mode**: Similar to static list mode, except there are multiple items per row. This is still simple because every item has the same dimensions.

3. **[Dynamic](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L761-L917) [List](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L719-L729) Mode**: This mode is entered when height is given as a dynamic expression, but width is still 100%. In this mode, every item potentially has a unique height. We get the computed height of the first item and use that to calculate the estimated size of the scrollView. Then, as the user scrolls, we lazily calculate the dimensions of the next items that should be shown.

4. **[Dynamic](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L719-L729) [Grid](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L706-L717) Mode**: This is the most complicated mode and is entered when both height and width are dynamic expressions. It's the same as dynamic list mode, except we also have to account for a potentially unique number of items appearing in each row.

Finally, each of the four modes can be entered in either [vertical](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L665-L684) or [horizontal](https://github.com/driftyco/ionic/blob/864b46aa818c3a230e77225ab704c16acbc93ac5/js/angular/directive/collectionRepeat.js#L684-L704) scrolling.

The problem with the old repeater was that it was *always* in Dynamic Grid Mode and calculated all dimensions up front. This led to worse performance while scrolling, loading, **and** resizing.

And now, even in the worst case of dynamic grid mode, collection repeat is more performant than before.

## More Performance Opportunities

The biggest remaining opportunity for more performance gain is in the iOS browser’s rendering of images.

Whenever you set the `src` of an `img` on iOS to a non-cached value, there is a freeze of anywhere from 50-150ms--even on an iPhone 6. In our tests, an Android 4.1 device with images in collection repeat outperforms an iPhone 6. It's that bad.

Images are very commonly used with collection repeat, and we change the `src` of those images often as the user scrolls. This is immensely smooth on Android, but less so on iOS.

We tried [creating a web worker](https://github.com/driftyco/ionic/blob/e18e30fce379875c78e51fb6bf1445d9419153ce/js/workers/binaryToBase64.js) that fetches the image, converts it, and sends its base64 representation back to the UI thread. The image is then set to this base64 representation as a [data-uri](https://css-tricks.com/data-uris/). This fixes half of the problem. If you set an `img src` to a data-uri that has been set before, it instantly gets the rendered image from the cache and shows it without lag. However, the first time a unique data-uri is set, there is a similar delay to that of a a normal `src`.

This is still an improvement from normal src, which just doesn't cache well at all.

We're experimenting with [a few more tricks](https://github.com/driftyco/ionic/issues/3194) to help iOS, and plan to release them as a simple-to-use solution soon. We welcome your ideas!

### Where We Are

The new collection repeat is better than ever, and easier to use than ever. Give it a try.

View the documentation at http://ionicframework.com/docs/nightly/api/directive/collectionRepeat.

Enjoy!




