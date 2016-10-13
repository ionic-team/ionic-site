---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.1"
versionHref: "/docs/v2/2.0.0-rc.1"
path: ""
category: api
id: "label"
title: "Label"
header_sub_title: "Ionic API Documentation"
doc: "Label"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/label/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="label" href="#label"></a>

Label
<h3><code>ion-label</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/label/label.ts#L3">
Improve this doc
</a>






<p>Labels are placed inside of an <code>ion-item</code> element and can be used
to describe an <code>ion-input</code>, <code>ion-toggle</code>, <code>ion-checkbox</code>, and more.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;ion-input&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label fixed&gt;Website&lt;/ion-label&gt;
  &lt;ion-input type=&quot;url&quot;&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label floating&gt;Email&lt;/ion-label&gt;
  &lt;ion-input type=&quot;email&quot;&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label stacked&gt;Phone&lt;/ion-label&gt;
  &lt;ion-input type=&quot;tel&quot;&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label&gt;Toggle&lt;/ion-label&gt;
  &lt;ion-toggle&gt;&lt;/ion-toggle&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label&gt;Checkbox&lt;/ion-label&gt;
  &lt;ion-checkbox&gt;&lt;/ion-checkbox&gt;
&lt;/ion-item&gt;
</code></pre>




<!-- @property tags -->

<h2><a class="anchor" name="attributes" href="#attributes"></a>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>











<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
fixed
</td>



<td>
A persistent label that sits next the input.
</td>
</tr>

<tr>
<td>
floating
</td>



<td>
A label that will float above the input if the input is empty or loses focus.
</td>
</tr>

<tr>
<td>
stacked
</td>



<td>
A stacked label will always appear on top of the input.


</td>
</tr>

</tbody>
</table>



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
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='../../../../components#inputs'>Input Component Docs</a>,
<a href='../../input/Input'>Input API Docs</a><!-- end content block -->


<!-- end body block -->

