---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.1"
versionHref: "/docs/v2/2.0.0-rc.1"
path: ""
category: api
id: "list"
title: "List"
header_sub_title: "Ionic API Documentation"
doc: "List"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/list/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="list" href="#list"></a>

List
<h3><code>ion-list</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/list/list.ts#L6">
Improve this doc
</a>






<p>The List is a widely used interface element in almost any mobile app,
and can include content ranging from basic text all the way to
buttons, toggles, icons, and thumbnails.</p>
<p>Both the list, which contains items, and the list items themselves
can be any HTML element.</p>
<p>Using the List and Item components make it easy to support various
interaction modes such as swipe to edit, drag to reorder, and
removing items.</p>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="closeSlidingItems"></div>

<h3>
<a class="anchor" name="closeSlidingItems" href="#closeSlidingItems"></a>
<code>closeSlidingItems()</code>
  

</h3>

Close any sliding items that are open.










<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode to apply to this component.</p>
</td>
    </tr>
    
    <tr>
      <td>sliding</td>
      <td><code>boolean</code></td>
      <td><p> shouldEnable whether the item-sliding should be enabled or not</p>
</td>
    </tr>
    
  </tbody>
</table><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Enable the sliding items.</p>
<pre><code class="lang-ts">import { Component, ViewChild } from &#39;@angular/core&#39;;
import { List } from &#39;ionic-angular&#39;;

@Component({...})
export class MyClass {
  @ViewChild(List) list: List;

  constructor() { }

  stopSliding() {
    this.list.enableSlidingItems(false);
  }
}
</code></pre>





<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a><!-- end content block -->


<!-- end body block -->

