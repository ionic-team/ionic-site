---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionTabs/"

title: "ion-tabs"
header_sub_title: "Directive in module ionic"
doc: "ionTabs"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/tabs.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-tabs



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>
</small>

</h1>


{% include codepen.html id="KbrzJ" %}




Powers a multi-tabbed interface with a Tab Bar and a set of "pages" that can be tabbed
through.

Assign any [tabs class](/docs/components#tabs) or
[animation class](/docs/components#animation) to the element to define
its look and feel.

See the <a href="/docs/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on
individual tabs.

Note: do not place ion-tabs inside of an ion-content element; it has been known to cause a
certain CSS bug.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-tabs class="tabs-positive tabs-icon-only">

  <ion-tab title="Home" icon-on="ion-ios7-filing" icon-off="ion-ios7-filing-outline">
    <!-- Tab 1 content -->
  </ion-tab>

  <ion-tab title="About" icon-on="ion-ios7-clock" icon-off="ion-ios7-clock-outline">
    <!-- Tab 2 content -->
  </ion-tab>

  <ion-tab title="Settings" icon-on="ion-ios7-gear" icon-off="ion-ios7-gear-outline">
    <!-- Tab 3 content -->
  </ion-tab>

</ion-tabs>
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
        <p>The handle used to identify these tabs
with <a href="/docs/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





