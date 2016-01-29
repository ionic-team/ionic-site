---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.42"
versionHref: "/docs/v2/2.0.0-alpha.42"
path: ""
category: api
id: "itemsliding"
title: "ItemSliding"
header_sub_title: "Class in module "
doc: "ItemSliding"
docType: "class"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/item/item-sliding.ts#L2'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/item/item-sliding.ts#L2'>
Improve this doc
</a>
</div>





<h1 class="api-title">


ItemSliding






</h1>






<!-- description -->
<h2>Description</h2>

<p>Creates a list-item that can easily be swiped, deleted, reordered, edited, and more.</p>


<h2>Component</h2>
<h3>selector: <code>ion-item-sliding</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item-sliding *ngFor=&quot;#item of items&quot;&gt;
    &lt;ion-item (click)=&quot;itemTapped(item)&quot;&gt;
      {{item.title}}
    &lt;/ion-item&gt;
    &lt;ion-item-options&gt;
      &lt;button (click)=&quot;favorite(item)&quot;&gt;Favorite&lt;/button&gt;
      &lt;button (click)=&quot;share(item)&quot;&gt;Share&lt;/button&gt;
    &lt;/ion-item-options&gt;
  &lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="list"></div>

<h3>
<code>list()</code>
  

</h3>












<div id="close"></div>

<h3>
<code>close()</code>
  

</h3>










<!-- related link --><!-- end content block -->


<!-- end body block -->

