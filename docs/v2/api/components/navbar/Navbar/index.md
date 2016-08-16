---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.11"
versionHref: "/docs/v2/2.0.0-beta-11"
path: ""
category: api
id: "navbar"
title: "Navbar"
header_sub_title: "Ionic API Documentation"
doc: "Navbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/navbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="navbar" href="#navbar"></a>

Navbar
<h3><code>ion-navbar</code></h3>






</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/components/navbar/navbar.ts#L59">
Improve this doc
</a>






<p>Navbar acts as the navigational toolbar, which also comes with a back
button. A navbar can contain a <code>ion-title</code>, any number of buttons,
a segment, or a searchbar. Navbars must be placed within an
<code>&lt;ion-header&gt;</code> in order for them to be placed above the content.
It&#39;s important to note that navbar&#39;s are part of the dynamica navigation
stack. If you need a static toolbar, use ion-toolbar.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-header&gt;

  &lt;ion-navbar&gt;
    &lt;button menuToggle&gt;
      &lt;ion-icon name=&quot;menu&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;

    &lt;ion-title&gt;
      Page Title
    &lt;/ion-title&gt;

    &lt;ion-buttons end&gt;
      &lt;button (click)=&quot;openModal()&quot;&gt;
        &lt;ion-icon name=&quot;options&quot;&gt;&lt;/ion-icon&gt;
      &lt;/button&gt;
    &lt;/ion-buttons&gt;
  &lt;/ion-navbar&gt;

&lt;/ion-header&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>hideBackButton</td>
      <td><code>boolean</code></td>
      <td><p> whether the back button should be shown or not</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='../../toolbar/Toolbar/'>Toolbar API Docs</a><!-- end content block -->


<!-- end body block -->

