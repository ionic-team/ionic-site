---
layout: "docs_api"
version: "1.0.0-rc.5"
versionHref: "/docs"
path: "api/directive/ionTabs/"

title: "ion-tabs"
header_sub_title: "Directive in module ionic"
doc: "ionTabs"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/tabs.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/tabs.js#L1'>
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


{% include codepen.html id="odqCz" %}




Powers a multi-tabbed interface with a Tab Bar and a set of "pages" that can be tabbed
through.

Assign any [tabs class](/docs/components#tabs) to the element to define
its look and feel.

For iOS, tabs will appear at the bottom of the screen. For Android, tabs will be at the top
of the screen, below the nav-bar. This follows each OS's design specification, but can be
configured with the <a href="/docs/api/provider/$ionicConfigProvider/"><code>$ionicConfigProvider</code></a>.

See the <a href="/docs/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on
individual tabs.

Note: do not place ion-tabs inside of an ion-content element; it has been known to cause a
certain CSS bug.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-tabs class="tabs-positive tabs-icon-only">

  <ion-tab title="Home" icon-on="ion-ios-filing" icon-off="ion-ios-filing-outline">
    <!-- Tab 1 content -->
  </ion-tab>

  <ion-tab title="About" icon-on="ion-ios-clock" icon-off="ion-ios-clock-outline">
    <!-- Tab 2 content -->
  </ion-tab>

  <ion-tab title="Settings" icon-on="ion-ios-gear" icon-off="ion-ios-gear-outline">
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

  

  





