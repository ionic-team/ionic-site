---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionList/"

title: "ion-list"
header_sub_title: "Directive in module ionic"
doc: "ionList"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/list.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-list



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>
</small>

</h1>


{% include codepen.html id="JsHjf" %}




The List is a widely used interface element in almost any mobile app, and can include
content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.

Both the list, which contains items, and the list items themselves can be any HTML
element. The containing element requires the `list` class and each list item requires
the `item` class.

However, using the ionList and ionItem directives make it easy to support various
interaction modes such as swipe to edit, drag to reorder, and removing items.

Related: <a href="/docs/api/directive/ionItem/"><code>ionItem</code></a>, <a href="/docs/api/directive/ionOptionButton/"><code>ionOptionButton</code></a>
<a href="/docs/api/directive/ionReorderButton/"><code>ionReorderButton</code></a>, <a href="/docs/api/directive/ionDeleteButton/"><code>ionDeleteButton</code></a>, [`list CSS documentation`](/docs/components/#list).








  
<h2 id="usage">Usage</h2>
  
Basic Usage:

```html
<ion-list>
  <ion-item ng-repeat="item in items">
    {% raw %}Hello, {{item}}!{% endraw %}
  </ion-item>
</ion-list>
```

Advanced Usage: Thumbnails, Delete buttons, Reordering, Swiping

```html
<ion-list ng-controller="MyCtrl"
          show-delete="shouldShowDelete"
          show-reorder="shouldShowReorder"
          can-swipe="listCanSwipe">
  <ion-item ng-repeat="item in items"
            class="item-thumbnail-left">

    {% raw %}<img ng-src="{{item.img}}">
    <h2>{{item.title}}</h2>
    <p>{{item.description}}</p>{% endraw %}
    <ion-option-button class="button-positive"
                       ng-click="share(item)">
      Share
    </ion-option-button>
    <ion-option-button class="button-info"
                       ng-click="edit(item)">
      Edit
    </ion-option-button>
    <ion-delete-button class="ion-minus-circled"
                       ng-click="items.splice($index, 1)">
    </ion-delete-button>
    <ion-reorder-button class="ion-navicon"
                        on-reorder="reorderItem(item, $fromIndex, $toIndex)">
    </ion-reorder-button>

  </ion-item>
</ion-list>
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
        delegate-handle
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The handle used to identify this list with
<a href="/docs/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-delete
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the delete buttons for the items in the list are
currently shown or hidden.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-reorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the reorder buttons for the items in the list are
currently shown or hidden.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        can-swipe
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the items in the list are allowed to be swiped to reveal
option buttons. Default: true.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





