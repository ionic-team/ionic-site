---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.1"
versionHref: "/docs/v2/2.0.0-beta.1"
path: ""
category: api
id: "item"
title: "Item"
header_sub_title: "Class in module "
doc: "Item"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/item/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Item






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/item/item.ts#L6'>
Improve this doc
</a>






<p>Creates a list-item that can easily be swiped, deleted, reordered, edited, and more.</p>
<p>There are three common ways to use an item:</p>
<ul>
<li>Use <code>&lt;ion-item&gt;</code> for something that is only non-clickable text.</li>
<li>Use <code>&lt;button ion-item&gt;</code> for something that can be clicked/tapped. Typically this element will also have a <code>(click)</code> handler.</li>
<li>Use <code>&lt;a ion-item&gt;</code> for when the item needs to contain a <code>href</code>.</li>
</ul>
<p>By default, <code>&lt;button ion-item&gt;</code> and <code>&lt;a ion-item&gt;</code> will receive a right arrow icon on iOS to signal that tapping the item will reveal more information.
To hide this icon, add the <code>detail-none</code> attribute to the item (eg: <code>&lt;button ion-item detail-none&gt;</code>). To add the icon when it is not displayed by default,
add the <code>detail-push</code> attribute (eg: <code>&lt;ion-item detail-push&gt;</code>).</p>


<h2>Component</h2>
<h3>selector: <code>ion-item,[ion-item]</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  // default item
  &lt;ion-item&gt;
    {{item.title}}
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#lists'>List Component Docs</a>
<a href='../../list/List'>List API Docs</a><!-- end content block -->


<!-- end body block -->

