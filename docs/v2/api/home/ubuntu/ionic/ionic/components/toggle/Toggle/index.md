---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "toggle"
title: "Toggle"
header_sub_title: "Class in module "
doc: "Toggle"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toggle/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a name="toggle"></a>

Toggle






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/toggle/toggle.ts#L10'>
Improve this doc
</a>






<p>A toggle technically is the same thing as an HTML checkbox input,
except it looks different and is easier to use on a touch device.
Toggles can also have colors assigned to them, by adding any color
attribute.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>


<h2><a name="Component"></a>Component</h2>
<h3>selector: <code>ion-toggle</code></h3>
<!-- @usage tag -->

<h2><a name="usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Pepperoni&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;pepperoni&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Sausage&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;sausage&quot; disabled=&quot;true&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Mushrooms&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;mushrooms&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->

<h2><a name="attributes"></a>Attributes:</h2>
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
checked
</td>


<td>
boolean
</td>


<td>
whether the toggle it toggled or not
</td>
</tr>

<tr>
<td>
disabled
</td>


<td>
boolean
</td>


<td>
whether the toggle is disabled or not
</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a name="input-properties"></a>Input Properties</h2>
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
      <td><code></code></td>
      <td></td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code></code></td>
      <td></td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a name="output-events"></a>Output Events</h2>
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
      <td><p> expression to evaluate when the toggle value changes</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a name="related"></a>Related</h2>

<a href='/docs/v2/components#toggle'>Toggle Component Docs</a><!-- end content block -->


<!-- end body block -->

