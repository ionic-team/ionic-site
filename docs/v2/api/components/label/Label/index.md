---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "label"
title: "Label"
header_sub_title: "Class in module "
doc: "Label"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/label/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Label






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/label/label.ts#L0'>
Improve this doc
</a>






<p>Labels are placed inside of an <code>ion-item</code> element and can be used
to describe an <code>ion-input</code>, <code>ion-toggle</code>, <code>ion-checkbox</code>, and more.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-label</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

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

<h2>Attributes:</h2>
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
a persistant label that sits next the the input
</td>
</tr>

<tr>
<td>
floating
</td>



<td>
a label that will float about the input if the input is empty of looses focus
</td>
</tr>

<tr>
<td>
stacked
</td>



<td>
A stacked label will always appear on top of the input


</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='../../../../components#inputs'>Input Component Docs</a>
<a href='../Input'>Input API Docs</a><!-- end content block -->


<!-- end body block -->

