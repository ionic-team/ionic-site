---
layout: "docs_api"
version: "1.0.0-beta.1"
versionHref: "/docs"
path: "api/directive/ionList"

title: "ion-list"
header_sub_title: "Directive in module ionic"
doc: "ionList"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/directive/ionicList.js#L152'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-list



</h1>


{% include codepen.html id="jsHjf" %}




The List is a widely used interface element in almost any mobile app,
and can include content ranging from basic text all the way to buttons,
toggles, icons, and thumbnails.

Both the list, which contains items, and the list items themselves can be
any HTML element. The containing element requires the list class and each
list item requires the item class. Ionic also comes with pre-built Angular
directives to make it easier to create a complex list.

Using the ionList and <a href="/docs/api/directive/ionItem"><code>ionItem</code></a> directives
make it easy to support various interaction modes such as swipe to edit,
drag to reorder, and removing items.

However, if you need just a simple list you won't be required to use the
directives, but rather just use the classnames.
This demo is a simple list without using the directives.

See the <a href="/docs/api/directive/ionItem"><code>ionItem</code></a> documentation for more information on list items.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-list>
  <ion-item ng-repeat="item in items" item="item">
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
        item-type
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The type of this item.  See <a href="/docs/components/#list">the list CSS page</a> for available item types.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-delete
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when a child item is deleted.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-reorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when a child item is reordered.</p>

        
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
        <p>Whether to show each item delete button.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-reoder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show each item&#39;s reorder button.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        can-delete
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether child items are able to be deleted or not.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        can-reorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether child items can be reordered or not.</p>

        
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
        <p>Whether child items can be swiped to reveal option buttons.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        delete-icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The class name of the icon to show on child items while deleting.  Defaults to <code>ion-minus-circled</code>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        reorder-icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The class name to show on child items while reordering. Defaults to <code>ion-navicon</code>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        animation
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>An animation class to apply to the list for animating when child items enter or exit the list. See <a href="/docs/components/#animations">the animation CSS page</a> for available animation classes.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





