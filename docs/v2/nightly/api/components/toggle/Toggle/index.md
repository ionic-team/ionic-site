---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "toggle"
title: "Toggle"
header_sub_title: "Ionic API Documentation"
doc: "Toggle"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/toggle/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="toggle" href="#toggle"></a>

Toggle
<h3><code>ion-toggle</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/toggle/toggle.ts#L16">
Improve this doc
</a>






<p>A toggle technically is the same thing as an HTML checkbox input,
except it looks different and is easier to use on a touch device.
Toggles can also have colors assigned to them, by adding any color
attribute.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

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
      <td>color</td>
      <td><code>string</code></td>
      <td><p> The predefined color to use. For example: <code>&quot;primary&quot;</code>, <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode to apply to this component.</p>
</td>
    </tr>
    
    <tr>
      <td>checked</td>
      <td><code>boolean</code></td>
      <td><p> whether the toggle it toggled or not</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> whether the toggle is disabled or not</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>ionChange</td>
      <td><p> expression to evaluate when the toggle value changes</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#toggle'>Toggle Component Docs</a><!-- end content block -->


<!-- end body block -->

