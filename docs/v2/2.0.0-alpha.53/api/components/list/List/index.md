---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.53"
versionHref: "/docs/v2/2.0.0-alpha.53"
path: ""
category: api
id: "{{List | slugify}}"
title: "List"
header_sub_title: "Class in module "
doc: "List"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/list/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


List






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/list/list.ts#L5'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>The List is a widely used interface element in almost any mobile app, and can include
content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.</p>
<p>Both the list, which contains items, and the list items themselves can be any HTML
element.</p>
<p>Using the List and Item components make it easy to support various
interaction modes such as swipe to edit, drag to reorder, and removing items.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-list</code></h3>
<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="ele"></div>

<h3>
<code>ele()</code>
  

</h3>












<div id="itemTemplate"></div>

<h3>
<code>itemTemplate()</code>
  

</h3>












<div id="slidingGesture"></div>

<h3>
<code>slidingGesture()</code>
  

</h3>












<div id="items"></div>

<h3>
<code>items()</code>
  

</h3>












<div id="virtual"></div>

<h3>
<code>virtual()</code>
  

</h3>












<div id="content"></div>

<h3>
<code>content()</code>
  

</h3>












<div id="zone"></div>

<h3>
<code>zone()</code>
  

</h3>












<div id="enableSlidingItems"></div>

<h3>
<code>enableSlidingItems(shouldEnable)</code>
  

</h3>

Enable sliding items if your page has them

```ts
export class MyClass {
   constructor(app: IonicApp){
     this.app = app;
     this.list = this.app.getComponent('my-list');
   }
   stopSliding(){
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
        
  <code>Boolean</code>
      </td>
      <td>
        <p>whether the item-sliding should be enabled or not</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="closeSlidingItems"></div>

<h3>
<code>closeSlidingItems()</code>
  

</h3>

Enable sliding items if your page has

```ts
export class MyClass {
   constructor(app: IonicApp){
     this.app = app;
     this.list = this.app.getComponent('my-list');
   }
   // Here we have some method that will close the items
   // when called
   closeItmes(){
     this.list.closeSlidingItems();
   }
}
```









<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a><!-- end content block -->


<!-- end body block -->

