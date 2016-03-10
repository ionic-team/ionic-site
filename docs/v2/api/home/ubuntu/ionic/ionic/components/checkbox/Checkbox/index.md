---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "checkbox"
title: "Checkbox"
header_sub_title: "Class in module ionic"
doc: "Checkbox"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/checkbox/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Checkbox






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/checkbox/checkbox.ts#L8'>
Improve this doc
</a>






<p>The Checkbox is a simple component styled based on the mode. It can be
placed in an <code>ion-item</code> or used as a stand-alone checkbox.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>


<h2>Component</h2>
<h3>selector: <code>ion-checkbox</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Pepperoni&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;pepperoni&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Sausage&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;sausage&quot; disabled=&quot;true&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Mushrooms&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;mushrooms&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
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
      <td>checked</td>
      <td><code>boolean</code></td>
      <td><p> whether or not the checkbox is checked (defaults to false)</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> whether or not the checkbox is disabled or not.</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>change</td>
      <td><p> expression to evaluate when the checkbox value changes</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#checkbox'>Checkbox Component Docs</a><!-- end content block -->


<!-- end body block -->

