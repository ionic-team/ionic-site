---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "toolbar"
title: "Toolbar"
header_sub_title: "Ionic API Documentation"
doc: "Toolbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toolbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="toolbar" href="#toolbar"></a>

Toolbar






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/toolbar/toolbar.ts#L61">
Improve this doc
</a>






<p>A Toolbar is a generic bar that is positioned above or below content.
Unlike a <a href="../../nav/Navbar">Navbar</a>, a toolbar can be used as a subheader.
Toolbars are positioned automatically at the <code>top</code>, but they can be
positioned at the bottom by setting <code>position=&quot;bottom&quot;</code> on the component.</p>
<h3 id="buttons-in-a-toolbar">Buttons in a Toolbar</h3>
<p>Buttons placed in a toolbar should be placed inside of the <code>&lt;ion-buttons&gt;</code>
element. An exception to this is a <a href="../../menu/MenuToggle">menuToggle</a> button.
It should not be placed inside of the <code>&lt;ion-buttons&gt;</code> element. Both the
<code>&lt;ion-buttons&gt;</code> element and the <code>menuToggle</code> can be positioned inside of the
toolbar using different properties. The below chart has a description of each
property.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>start</code></td>
<td>Positions element to the left of the content in <code>ios</code> mode, and directly to the right in <code>md</code> and <code>wp</code> mode.</td>
</tr>
<tr>
<td><code>end</code></td>
<td>Positions element to the right of the content in <code>ios</code> mode, and to the far right in <code>md</code> and <code>wp</code> mode.</td>
</tr>
<tr>
<td><code>left</code></td>
<td>Positions element to the left of all other elements.</td>
</tr>
<tr>
<td><code>right</code></td>
<td>Positions element to the right of all other elements.</td>
</tr>
</tbody>
</table>
<p>See <a href="#usage">usage</a> below for some examples.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-toolbar</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-toolbar&gt;
  &lt;ion-buttons start&gt;
    &lt;button&gt;
      &lt;ion-icon name=&quot;contact&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
    &lt;button&gt;
      &lt;ion-icon name=&quot;search&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
  &lt;/ion-buttons&gt;
  &lt;ion-title&gt;My Toolbar Title&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;

&lt;ion-toolbar&gt;
  &lt;ion-title&gt;I&#39;m a subheader&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;

&lt;ion-content&gt;&lt;/ion-content&gt;

&lt;ion-toolbar position=&quot;bottom&quot;&gt;
  &lt;ion-title&gt;I&#39;m a subfooter&lt;/ion-title&gt;
  &lt;ion-buttons right&gt;
    &lt;button&gt;
      &lt;ion-icon name=&quot;menu&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
  &lt;/ion-buttons&gt;
&lt;/ion-toolbar&gt;

&lt;ion-toolbar position=&quot;bottom&quot;&gt;
  &lt;ion-title&gt;I&#39;m a footer&lt;/ion-title&gt;
  &lt;ion-buttons end&gt;
    &lt;button&gt;
      &lt;ion-icon name=&quot;more&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
    &lt;button&gt;
      &lt;ion-icon name=&quot;options&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
  &lt;/ion-buttons&gt;
&lt;/ion-toolbar&gt;
</code></pre>




<!-- @property tags -->

<h2><a class="anchor" name="attributes" href="#attributes"></a>Attributes:</h2>
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
position
</td>


<td>
any
</td>


<td>
set position of the toolbar, `top` or `bottom`.
Default `top`.
</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class -->


<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='../../navbar/Navbar/'>Navbar API Docs</a><!-- end content block -->


<!-- end body block -->

