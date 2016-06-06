---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "itemsliding"
title: "ItemSliding"
header_sub_title: "Ionic API Documentation"
doc: "ItemSliding"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/item-sliding/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="item-sliding" href="#item-sliding"></a>

ItemSliding






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/item/item-sliding.ts#L2">
Improve this doc
</a>






<p>A sliding item is a list item that can be swiped to reveal buttons. It requires
an <a href="../Item">Item</a> component as a child and a <a href="../../list/List">List</a> component as
a parent. All buttons to reveal can be placed in the <code>&lt;ion-item-options&gt;</code> element.</p>
<h3 id="button-layout">Button Layout</h3>
<p>If an icon is placed with text in the option button, by default it will
display the icon on top of the text. This can be changed to display the icon
to the left of the text by setting <code>icon-left</code> as an attribute on the
<code>&lt;ion-item-options&gt;</code> element.</p>
<pre><code class="lang-html">&lt;ion-item-options icon-left&gt;
  &lt;button (click)=&quot;archive(item)&quot;&gt;
    &lt;ion-icon name=&quot;archive&quot;&gt;&lt;/ion-icon&gt;
    Archive
  &lt;/button&gt;
&lt;/ion-item-options&gt;
</code></pre>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-item-sliding</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item-sliding&gt;
    &lt;ion-item&gt;
      Item
    &lt;/ion-item&gt;
    &lt;ion-item-options&gt;
      &lt;button (click)=&quot;favorite(item)&quot;&gt;Favorite&lt;/button&gt;
      &lt;button danger (click)=&quot;share(item)&quot;&gt;Share&lt;/button&gt;
    &lt;/ion-item-options&gt;
  &lt;/ion-item-sliding&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="close"></div>

<h3>
<a class="anchor" name="close" href="#close"></a>
<code>close()</code>
  

</h3>

Close the sliding item. Items can also be closed from the [List](../../list/List).

The sliding item can be closed by garbbing a reference to `ItemSliding`. In the
below example, the template reference variable `slidingItem` is placed on the element
and passed to the `share` method.

```html
<ion-list>
  <ion-item-sliding #slidingItem>
    <ion-item>
      Item
    </ion-item>
    <ion-item-options>
      <button (click)="share(slidingItem)">Share</button>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```

```ts
import {Component} from '@angular/core';
import {ItemSliding} from 'ionic-angular';

@Component({...})
export class MyClass {
  constructor() { }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }
}
```












<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a>,
<a href='../Item'>Item API Docs</a>,
<a href='../../list/List'>List API Docs</a><!-- end content block -->


<!-- end body block -->

