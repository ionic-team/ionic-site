---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.9"
versionHref: "/docs/v2/2.0.0-beta.9"
path: ""
category: api
id: "list"
title: "List"
header_sub_title: "Ionic API Documentation"
doc: "List"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/list/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="list" href="#list"></a>

List
<h3><code>ion-list</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/list/list.ts#L7">
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

<div id="enableSlidingItems"></div>

<h3>
<a class="anchor" name="enableSlidingItems" href="#enableSlidingItems"></a>
<code>enableSlidingItems(shouldEnable)</code>
  

</h3>

Enable the sliding items.

```ts
import {Component, ViewChild} from '@angular/core';
import {List} from 'ionic-angular';

@Component({...})
export class MyClass {
  @ViewChild(List) list: List;

  constructor() { }

  stopSliding() {
    this.list.enableSlidingItems(false);
  }
}
```


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        shouldEnable
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>whether the item-sliding should be enabled or not</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="closeSlidingItems"></div>

<h3>
<a class="anchor" name="closeSlidingItems" href="#closeSlidingItems"></a>
<code>closeSlidingItems()</code>
  

</h3>

Close the open sliding item.

```ts
import {Component, ViewChild} from '@angular/core';
import {List} from 'ionic-angular';

@Component({...})
export class MyClass {
  @ViewChild(List) list: List;

  constructor() { }

  closeItems() {
    this.list.closeSlidingItems();
  }
}
```










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
      <td>reorder</td>
      <td><code></code></td>
      <td></td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>ionItemReorder</td>
      <td></td>
    </tr>
    
  </tbody>
</table>


<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a><!-- end content block -->


<!-- end body block -->

