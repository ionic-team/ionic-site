---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "menutoggle"
title: "MenuToggle"
header_sub_title: "Ionic API Documentation"
doc: "MenuToggle"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/menu/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="menu-toggle" href="#menu-toggle"></a>

MenuToggle
<h3><code>[menuToggle]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/menu/menu-toggle.ts#L4">
Improve this doc
</a>






<p>The <code>menuToggle</code> directive can be placed on any button to toggle a menu open or closed.
If it is added to the <a href="../../nav/NavBar">NavBar</a> of a page, the button will only appear
when the page it&#39;s in is currently a root page. See the <a href="../Menu#navigation-bar-behavior">Menu Navigation Bar Behavior</a>
docs for more information.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>A simple <code>menuToggle</code> button can be added using the following markup:</p>
<pre><code class="lang-html">&lt;button ion-button menuToggle&gt;Toggle Menu&lt;/button&gt;
</code></pre>
<p>To toggle a specific menu by its id or side, give the <code>menuToggle</code>
directive a value.</p>
<pre><code class="lang-html">&lt;button ion-button menuToggle=&quot;right&quot;&gt;Toggle Right Menu&lt;/button&gt;
</code></pre>
<p>If placing the <code>menuToggle</code> in a navbar or toolbar, it should be
placed as a child of the <code>&lt;ion-navbar&gt;</code> or <code>&lt;ion-toolbar&gt;</code>, and not in
the <code>&lt;ion-buttons&gt;</code> element:</p>
<pre><code class="lang-html">&lt;ion-header&gt;

  &lt;ion-navbar&gt;
    &lt;ion-buttons start&gt;
      &lt;button ion-button&gt;
        &lt;ion-icon name=&quot;contact&quot;&gt;&lt;/ion-icon&gt;
      &lt;/button&gt;
    &lt;/ion-buttons&gt;
    &lt;button ion-button menuToggle&gt;
      &lt;ion-icon name=&quot;menu&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
    &lt;ion-title&gt;
      Title
    &lt;/ion-title&gt;
    &lt;ion-buttons end&gt;
      &lt;button ion-button (click)=&quot;doClick()&quot;&gt;
        &lt;ion-icon name=&quot;more&quot;&gt;&lt;/ion-icon&gt;
      &lt;/button&gt;
    &lt;/ion-buttons&gt;
  &lt;/ion-navbar&gt;

&lt;/ion-header&gt;
</code></pre>
<p>Similar to <code>&lt;ion-buttons&gt;</code>, the <code>menuToggle</code> can be positioned using
<code>start</code>, <code>end</code>, <code>left</code>, or <code>right</code>:</p>
<pre><code class="lang-html">&lt;ion-toolbar&gt;
  &lt;button ion-button menuToggle right&gt;
    &lt;ion-icon name=&quot;menu&quot;&gt;&lt;/ion-icon&gt;
  &lt;/button&gt;
  &lt;ion-title&gt;
    Title
  &lt;/ion-title&gt;
  &lt;ion-buttons end&gt;
    &lt;button ion-button (click)=&quot;doClick()&quot;&gt;
      &lt;ion-icon name=&quot;more&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
  &lt;/ion-buttons&gt;
&lt;/ion-toolbar&gt;
</code></pre>
<p>See the <a href="../../toolbar/Toolbar">Toolbar API docs</a> for more information
on the different positions.</p>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#menus'>Menu Component Docs</a>,
<a href='../../menu/Menu'>Menu API Docs</a><!-- end content block -->


<!-- end body block -->

