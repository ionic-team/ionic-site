---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionTab/"

title: "ion-tab"
header_sub_title: "Directive in module ionic"
doc: "ionTab"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/tab.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-tab


<br />
<small>
  Child of <a href="/docs/api/directive/ionTabs/"><code>ionTabs</code></a>
</small>


</h1>





Contains a tab's content.  The content only exists while the given tab is selected.

Each ionTab has its own view history.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-tab
  title="Tab!"
  icon="my-icon"
  href="#/tab/tab-link"
  on-select="onTabSelected()"
  on-deselect="onTabDeselected()">
</ion-tab>
```
For a complete, working tab bar example, see the <a href="/docs/api/directive/ionTabs/"><code>ionTabs</code></a> documentation.
  
  
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
        title
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The title of the tab.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        href
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The link that this tab will navigate to when tapped.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon of the tab. If given, this will become the default for icon-on and icon-off.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon-on
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon of the tab while it is selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon-off
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon of the tab while it is not selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        badge
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The badge to put on this tab (usually a number).</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        badge-style
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The style of badge to put on this tab (eg tabs-positive).</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-select
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when this tab is selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-deselect
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when this tab is deselected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        ng-click
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>By default, the tab will be selected on click. If ngClick is set, it will not.  You can explicitly switch tabs using <a href="/docs/api/service/$ionicTabsDelegate/#select">$ionicTabsDelegate.select()</a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





