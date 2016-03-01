---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.2"
versionHref: "/docs/v2/2.0.0-beta.2"
path: ""
category: api
id: "navbar"
title: "Navbar"
header_sub_title: "Class in module "
doc: "Navbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/navbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Navbar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/navbar/navbar.ts#L59'>
Improve this doc
</a>






<p>Navbar is a global level toolbar that gets updated every time a page gets
loaded. You can pass the navbar a <code>ion-title</code> or any number of buttons.</p>


<h2>Component</h2>
<h3>selector: <code>ion-navbar</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-navbar *navbar&gt;

  &lt;ion-buttons start&gt;
    &lt;button (click)=&quot;toggleItems()&quot;&gt;
      toggle
    &lt;/button&gt;
  &lt;/ion-buttons&gt;

  &lt;ion-title&gt;
    Page Title
  &lt;/ion-title&gt;

  &lt;ion-buttons end&gt;
    &lt;button (click)=&quot;openModal()&quot;&gt;
      Modal
    &lt;/button&gt;
  &lt;/ion-buttons&gt;
&lt;/ion-navbar&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2>Input Properties</h2>
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
</table><!-- related link -->

<h2>Related</h2>

<a href='../../toolbar/Toolbar/'>Toolbar API Docs</a><!-- end content block -->


<!-- end body block -->

