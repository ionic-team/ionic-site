---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.11"
versionHref: "/docs/v2/2.0.0-beta-11"
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
<h3><code>ion-toolbar</code></h3>






</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/components/toolbar/toolbar.ts#L131">
Improve this doc
</a>






<p>A Toolbar is a generic bar that is positioned above or below content.
Unlike a <a href="../../nav/Navbar">Navbar</a>, a toolbar can be used as a subheader.
When toolbars are placed within an <code>&lt;ion-header&gt;</code> or <code>&lt;ion-footer&gt;</code>,
the toolbars stay fixed in their respective location. When placed within
<code>&lt;ion-content&gt;</code>, toolbars will scroll with the content.</p>
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
<h3 id="header-footer-box-shadow">Header / Footer Box Shadow</h3>
<p>In <code>md</code> mode, the <code>ion-header</code> will receive a box-shadow on the bottom, and the
<code>ion-footer</code> will receive a box-shadow on the top. This can be removed by adding
the <code>no-shadow</code> attribute to the element.</p>
<pre><code class="lang-html">&lt;ion-header no-shadow&gt;
  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Header&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
&lt;/ion-header&gt;

&lt;ion-content&gt;
&lt;/ion-content&gt;

&lt;ion-footer no-shadow&gt;
  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Footer&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
&lt;/ion-footer&gt;
</code></pre>
<h3 id="toolbar-borders">Toolbar Borders</h3>
<p>Toolbars can be stacked up vertically in <code>&lt;ion-header&gt;</code>, <code>&lt;ion-content&gt;</code>, and
<code>&lt;ion-footer&gt;</code> elements. In <code>ios</code> mode, toolbars have borders on the top and
bottom. To hide both borders, the <code>no-border</code> attribute should be used on the
<code>ion-toolbar</code>. To hide the top or bottom border, the <code>no-border-top</code> and
<code>no-border-bottom</code> attribute should be used.</p>
<pre><code class="lang-html">&lt;ion-header no-shadow&gt;
  &lt;ion-toolbar no-border-bottom&gt;
    &lt;ion-title&gt;Header&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
  &lt;ion-toolbar no-border&gt;
    &lt;ion-title&gt;Subheader&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
  &lt;ion-toolbar no-border-top&gt;
    &lt;ion-title&gt;Another Header&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
&lt;/ion-header&gt;

&lt;ion-content&gt;
&lt;/ion-content&gt;
</code></pre>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-header no-shadow&gt;

  &lt;ion-toolbar no-border-bottom&gt;
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

  &lt;ion-toolbar no-border-top&gt;
    &lt;ion-title&gt;I&#39;m a subheader&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

&lt;ion-header&gt;


&lt;ion-content&gt;

  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Scrolls with the content&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

&lt;/ion-content&gt;


&lt;ion-footer&gt;

  &lt;ion-toolbar no-border&gt;
    &lt;ion-title&gt;I&#39;m a subfooter&lt;/ion-title&gt;
    &lt;ion-buttons right&gt;
      &lt;button&gt;
        &lt;ion-icon name=&quot;menu&quot;&gt;&lt;/ion-icon&gt;
      &lt;/button&gt;
    &lt;/ion-buttons&gt;
  &lt;/ion-toolbar&gt;

  &lt;ion-toolbar no-border-top&gt;
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

&lt;/ion-footer&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='../../navbar/Navbar/'>Navbar API Docs</a><!-- end content block -->


<!-- end body block -->

