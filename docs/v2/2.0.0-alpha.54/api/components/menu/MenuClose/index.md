---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.54"
versionHref: "/docs/v2/2.0.0-alpha.54"
path: ""
category: api
id: "menuclose"
title: "MenuClose"
header_sub_title: "Class in module "
doc: "MenuClose"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/menu/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


MenuClose






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/menu/menu-close.ts#L3'>
Improve this doc
</a>






<p>Place <code>menuClose</code> on a button to automatically close an open menu. Note that the menu&#39;s id must be either
<code>leftMenu</code> or <code>rightMenu</code></p>


<h2>Directive</h2>
<h3>selector: <code>[menuClose]</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot; id=&quot;leftMenu&quot;&gt;
  &lt;ion-content&gt;
    &lt;ion-list&gt;
    &lt;ion-item menuClose&gt;Close the menu&lt;/ion-item&gt;
    &lt;/ion-list&gt;
  &lt;/ion-content&gt;
&lt;/ion-menu&gt;

&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>




<!-- @property tags -->


<!-- methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#menus'>Menu Component Docs</a>
<a href='../../menu/Menu'>Menu API Docs</a><!-- end content block -->


<!-- end body block -->

