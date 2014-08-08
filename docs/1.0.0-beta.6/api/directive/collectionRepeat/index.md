---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/collectionRepeat/"

title: "collection-repeat"
header_sub_title: "Directive in module ionic"
doc: "collectionRepeat"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/collectionRepeat.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  collection-repeat



</h1>


{% include codepen.html id="mFygh" %}




`collection-repeat` is a directive that allows you to render lists with
thousands of items in them, and experience little to no performance penalty.

Demo:

The directive renders onto the screen only the items that should be currently visible.
So if you have 1,000 items in your list but only ten fit on your screen,
collection-repeat will only render into the DOM the ten that are in the current
scroll position.

Here are a few things to keep in mind while using collection-repeat:

1. The data supplied to collection-repeat must be an array.
2. You must explicitly tell the directive what size your items will be in the DOM, using directive attributes. Pixel amounts or percentages are allowed (see below).
3. The elements rendered will be absolutely positioned: be sure to let your CSS work with
this (see below).
4. Keep the HTML of your repeated elements as simple as possible. As the user scrolls down,
elements will be lazily compiled. Resultingly, the more complicated your elements, the more
likely it is that the on-demand compilation will cause some jerkiness in the user's scrolling.
5. The more elements you render on the screen per row, the more likelihood for scrolling to
slow down. It is recommended to keep grids of collection-repeat list elements at 3-wide or less.
For example, if you have a gallery of images just set their width to 33%.
6. Each collection-repeat list will take up all of its parent scrollView's space.
If you wish to have multiple lists on one page, put each list within its own
<a href="/docs/api/directive/ionScroll/">ionScroll</a> container.
7. You should not use the ng-show and ng-hide directives on your ion-content/ion-scroll elements that have a collection-repeat inside.  ng-show and ng-hide apply the `display: none` css rule to the content's style, causing the scrollView to read the width and height of the content as 0.  Resultingly, collection-repeat will render elements that have just been un-hidden incorrectly.








  
<h2 id="usage">Usage</h2>
  
#### Basic Usage (single rows of items)

Notice two things here: we use ng-style to set the height of the item to match
what the repeater thinks our item height is.  Additionally, we add a css rule
to make our item stretch to fit the full screen (since it will be absolutely
positioned).

```html
<ion-content ng-controller="ContentCtrl">
  <div class="list">
    <div class="item my-item"
      collection-repeat="item in items"
      collection-item-width="'100%'"
      collection-item-height="getItemHeight(item, $index)"
      ng-style="{height: getItemHeight(item, $index)}">
      {% raw %}{{item}}{% endraw %}
    </div>
  </div>
</div>
```
```js
function ContentCtrl($scope) {
  $scope.items = [];
  for (var i = 0; i < 1000; i++) {
    $scope.items.push('Item ' + i);
  }

  $scope.getItemHeight = function(item, index) {
    //Make evenly indexed items be 10px taller, for the sake of example
    return (index % 2) === 0 ? 50 : 60;
  };
}
```
```css
.my-item {
  left: 0;
  right: 0;
}
```

#### Grid Usage (three items per row)

```html
<ion-content>
  <div class="item item-avatar my-image-item"
    collection-repeat="image in images"
    collection-item-width="'33%'"
    collection-item-height="'33%'">
    <img ng-src="{{image.src}}">
  </div>
</ion-content>
```
```css
.my-image-item {
  height: 33%;
  width: 33%;
}
```
  
  
<h2 id="api" style="clear:both;">API</h2>

<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        collection-repeat
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The expression indicating how to enumerate a collection. These
  formats are currently supported:</p>
<ul>
<li><p><code>variable in expression</code> – where variable is the user defined loop variable and <code>expression</code>
is a scope expression giving the collection to enumerate.</p>
<p>For example: <code>album in artist.albums</code>.</p>
</li>
<li><p><code>variable in expression track by tracking_expression</code> – You can also provide an optional tracking function
which can be used to associate the objects in the collection with the DOM elements. If no tracking function
is specified the collection-repeat associates elements by identity in the collection. It is an error to have
more than one tracking function to resolve to the same key. (This would mean that two distinct objects are
mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression,
before specifying a tracking expression.</p>
<p>For example: <code>item in items</code> is equivalent to `item in items track by $id(item)&#39;. This implies that the DOM elements
will be associated by item identity in the array.</p>
<p>For example: <code>item in items track by $id(item)</code>. A built in <code>$id()</code> function can be used to assign a unique
<code>$$hashKey</code> property to each item in the array. This property is then used as a key to associated DOM elements
with the corresponding item in the array by identity. Moving the same object in array would move the DOM
element in the same way in the DOM.</p>
<p>For example: <code>item in items track by item.id</code> is a typical pattern when the items come from the database. In this
case the object identity does not matter. Two objects are considered equivalent as long as their <code>id</code>
property is same.</p>
<p>For example: <code>item in items | filter:searchText track by item.id</code> is a pattern that might be used to apply a filter
to items in conjunction with a tracking expression.</p>
</li>
</ul>

        
      </td>
    </tr>
    
    <tr>
      <td>
        collection-item-width
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The width of the repeated element.  Can be a number (in pixels) or a percentage.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        collection-item-height
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The height of the repeated element.  Can be a number (in pixels), or a percentage.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





