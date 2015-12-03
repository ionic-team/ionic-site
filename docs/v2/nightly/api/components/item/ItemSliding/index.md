---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{ItemSliding | slugify}}"
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

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">

  ItemSliding



</h1>





<p>Creates a list-item that can easily be swiped,
deleted, reordered, edited, and more.</p>





<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item-sliding *ng-for=&quot;#item of items&quot;&gt;
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



<h2>Component</h2>
  <span>selector: ion-item-sliding</span>


<h2>Members</h2>

<div id="list"></div>
<h3>
  <code>list()</code>

</h3>












<div id="close"></div>
<h3>
  <code>close()</code>

</h3>














