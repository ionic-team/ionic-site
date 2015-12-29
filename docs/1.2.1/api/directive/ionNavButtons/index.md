---
layout: "docs_api"
version: "1.2.1"
versionHref: "/docs"
path: "api/directive/ionNavButtons/"

title: "ion-nav-buttons"
header_sub_title: "Directive in module ionic"
doc: "ionNavButtons"
docType: "directive"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/navButtons.js#L1'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navButtons.js#L1'>
Improve this doc
</a>
</div>




<h1 class="api-title">

ion-nav-buttons


<br />
<small>
Child of <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





Use nav buttons to set the buttons on your <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>
from within an <a href="/docs/api/directive/ionView/"><code>ionView</code></a>. This gives each
view template the ability to specify which buttons should show in the nav bar,
overriding any default buttons already placed in the nav bar.

Any buttons you declare will be positioned on the navbar's corresponding side. Primary
buttons generally map to the left side of the header, and secondary buttons are
generally on the right side. However, their exact locations are platform-specific.
For example, in iOS, the primary buttons are on the far left of the header, and
secondary buttons are on the far right, with the header title centered between them.
For Android, however, both groups of buttons are on the far right of the header,
with the header title aligned left.

We recommend always using `primary` and `secondary`, so the buttons correctly map
to the side familiar to users of each platform. However, in cases where buttons should
always be on an exact side, both `left` and `right` sides are still available. For
example, a toggle button for a left side menu should be on the left side; in this case,
we'd recommend using `side="left"`, so it's always on the left, no matter the platform.

***Note*** that `ion-nav-buttons` must be immediate descendants of the `ion-view` or
`ion-nav-bar` element (basically, don't wrap it in another div).









<h2 id="usage">Usage</h2>

```html
<ion-nav-bar>
</ion-nav-bar>
<ion-nav-view>
  <ion-view>
    <ion-nav-buttons side="primary">
      <button class="button" ng-click="doSomething()">
        I'm a button on the primary of the navbar!
      </button>
    </ion-nav-buttons>
    <ion-content>
      Some super content here!
    </ion-content>
  </ion-view>
</ion-nav-view>
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
        side
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The side to place the buttons in the
<a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available sides: <code>primary</code>, <code>secondary</code>, <code>left</code>, and <code>right</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









