---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.2"
versionHref: "/docs/v2/2.0.0-beta.2"
path: ""
category: api
id: "itemsliding"
title: "ItemSliding"
header_sub_title: "Class in module "
doc: "ItemSliding"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/item-sliding/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


ItemSliding






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/item/item-sliding.ts#L2'>
Improve this doc
</a>






<p>Creates a list-item that can easily be swiped, deleted, reordered, edited, and more.</p>


<h2>Component</h2>
<h3>selector: <code>ion-item-sliding</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item-sliding *ngFor=&quot;#item of items&quot;&gt;
    &lt;button ion-item (click)=&quot;itemTapped(item)&quot;&gt;
      {{item.title}}
    &lt;/button&gt;
    &lt;ion-item-options&gt;
      &lt;button (click)=&quot;favorite(item)&quot;&gt;Favorite&lt;/button&gt;
      &lt;button (click)=&quot;share(item)&quot;&gt;Share&lt;/button&gt;
    &lt;/ion-item-options&gt;
  &lt;/ion-item-sliding&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a>
<a href='../../list/List'>List API Docs</a><!-- end content block -->


<!-- end body block -->

