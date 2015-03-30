---
layout: "docs_api"
version: "1.0.0-rc.2"
versionHref: "/docs"
path: "api/directive/ionSideMenuContent/"

title: "ion-side-menu-content"
header_sub_title: "Directive in module ionic"
doc: "ionSideMenuContent"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/sideMenuContent.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/sideMenuContent.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-side-menu-content


<br />
<small>
  Child of <a href="/docs/api/directive/ionSideMenus/"><code>ionSideMenus</code></a>
</small>


</h1>





A container for the main visible content, sibling to one or more
<a href="/docs/api/directive/ionSideMenu/"><code>ionSideMenu</code></a> directives.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-side-menu-content
  edge-drag-threshold="true"
  drag-content="true">
</ion-side-menu-content>
```
For a complete side menu example, see the
<a href="/docs/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.
  
  
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
        drag-content
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the content can be dragged. Default true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        edge-drag-threshold
        
        
      </td>
      <td>
        
  <code>boolean</code>|<code>number</code>
      </td>
      <td>
        <p>Whether the content drag can only start if it is below a certain threshold distance from the edge of the screen.  Default false. Accepts three types of values:</p>
<ul>
<li>If a non-zero number is given, that many pixels is used as the maximum allowed distance from the edge that starts dragging the side menu.</li>
<li>If true is given, the default number of pixels (25) is used as the maximum allowed distance.</li>
<li>If false or 0 is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





