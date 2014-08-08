---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionNavBar/"

title: "ion-nav-bar"
header_sub_title: "Directive in module ionic"
doc: "ionNavBar"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navBar.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-bar



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>
</small>

</h1>





If we have an <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a> directive, we can also create an
`<ion-nav-bar>`, which will create a topbar that updates as the application state changes.

We can add a back button by putting an <a href="/docs/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> inside.

We can add buttons depending on the currently visible view using
<a href="/docs/api/directive/ionNavButtons/"><code>ionNavButtons</code></a>.

Assign an [animation class](/docs/components#animations) to the element to
enable animated changing of titles (recommended: 'nav-title-slide-ios7')

Note that the ion-nav-bar element will only work correctly if your content has an
ionView around it.








  
<h2 id="usage">Usage</h2>
  
```html
<body ng-app="starter">
  <!-- The nav bar that will be updated as we navigate -->
  <ion-nav-bar class="bar-positive nav-title-slide-ios7">
  </ion-nav-bar>

  <!-- where the initial view template will be rendered -->
  <ion-nav-view>
    <ion-view>
      <ion-content>Hello!</ion-content>
    </ion-view>
  </ion-nav-view>
</body>
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
        <p>The handle used to identify this navBar
with <a href="/docs/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        align-title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Where to align the title of the navbar.
Available: &#39;left&#39;, &#39;right&#39;, &#39;center&#39;. Defaults to &#39;center&#39;.</p>
<p></table><br/></p>
<h3 id="alternative-usage">Alternative Usage</h3>
<p>Alternatively, you may put ion-nav-bar inside of each individual view&#39;s ion-view element.
This will allow you to have the whole navbar, not just its contents, transition every view change.</p>
<p>This is similar to using a header bar inside your ion-view, except it will has all the power of a navbar.</p>
<p>If you do this, simply put nav buttons inside the navbar itself; do not use <code>&lt;ion-nav-buttons&gt;</code>.</p>
<pre><code class="lang-html">&lt;ion-view title=&quot;myTitle&quot;&gt;
  &lt;ion-nav-bar class=&quot;bar-positive&quot;&gt;
    &lt;ion-nav-back-button&gt;
      Back
    &lt;/ion-nav-back-button&gt;
    &lt;div class=&quot;buttons right-buttons&quot;&gt;
      &lt;button class=&quot;button&quot;&gt;
        Right Button
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/ion-nav-bar&gt;
&lt;/ion-view&gt;</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





