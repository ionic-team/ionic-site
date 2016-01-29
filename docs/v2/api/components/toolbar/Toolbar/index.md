---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "toolbar"
title: "Toolbar"
header_sub_title: "Class in module "
doc: "Toolbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toolbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Toolbar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/toolbar/toolbar.ts#L59'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>The toolbar is generic bar that sits above or below content.
Unlike an <code>Navbar</code>, <code>Toolbar</code> can be used for a subheader as well.
Since it&#39;s based on flexbox, you can place the toolbar where you
need it and flexbox will handle everything else. Toolbars will automatically
assume they should be placed before an <code>ion-content</code>, so to specify that you want it
below, you can add the property <code>placement=&quot;bottom&quot;</code>. This will change the flex order
property.</p>


<h2>Component</h2>
<h3>selector: <code>ion-toolbar</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-toolbar&gt;
  &lt;ion-title&gt;My Toolbar Title&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;

&lt;ion-toolbar&gt;
  &lt;ion-title&gt;I&#39;m a subheader&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;

 &lt;ion-content&gt;&lt;/ion-content&gt;

&lt;ion-toolbar position=&quot;bottom&gt;
  &lt;ion-title&gt;I&#39;m a subfooter&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;

&lt;ion-toolbar position=&quot;bottom&gt;
  &lt;ion-title&gt;I&#39;m a footer&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;
</code></pre>




<!-- @property tags -->

<h2>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>








<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
placement
</td>


<td>
any
</td>


<td>
set position of the toolbar, top or bottom
</td>
</tr>

</tbody>
</table>


<!-- methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='../../navbar/Navbar/'>Navbar API Docs</a><!-- end content block -->


<!-- end body block -->

