---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionItem"

title: "ion-item"
header_sub_title: "Directive in module ionic"
doc: "ionItem"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/directive/ionicList.js#L6'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-item


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionList"><code>ionList</code></a>
</small>


</h1>





The ionItem directive creates a list-item that can easily be swiped,
deleted, reordered, edited, and more.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-list>
  <ion-item ng-repeat="item in items"
    item="item"
    can-swipe="true"
    left-buttons="myItemButtons">
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
        option-buttons
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The option buttons to show when swiping the item to the left (if swiping is enabled).  Defaults to the ionList parent&#39;s option-buttons setting.  The format of each button object is:</p>
<pre><code class="lang-js">  {
    text: &#39;Edit&#39;,
    type: &#39;Button&#39;,
    onTap: function(item) {}
  }</code></pre>

        
      </td>
    </tr>
    
    <tr>
      <td>
        item
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The &#39;object&#39; representing this item, to be passed in to swipe, delete, and reorder callbacks.</p>

        
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
        <p>Whether or not this item can be swiped. Defaults ot hte ionList parent&#39;s can-swipe setting.</p>

        
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
        <p>Whether or not this item can be deleted. Defaults to the ionList parent&#39;s can-delete setting.</p>

        
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
        <p>Whether or not this item can be reordered. Defaults to the ionList parent&#39;s can-reorder setting.</p>

        
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
        <p>The expression to call when this item is deleted.</p>

        
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
        <p>The class name of the icon to show on this item while deleting. Defaults to the ionList parent&#39;s delete-icon setting.</p>

        
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
        <p>The class name of the icon to show on this item while reordering. Defaults to the ionList parent&#39;s reorder-icon setting.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





