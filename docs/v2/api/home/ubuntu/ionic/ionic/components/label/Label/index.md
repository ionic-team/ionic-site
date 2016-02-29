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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/label/label.ts#L0'>
Improve this doc
</a>






<p>Labels describe the data that the user should enter in to an input
element. You can give <code>ion-label</code> attributes to tell it how to
handle its display type, which is especially useful for an
<code>ion-item</code> which contains a text input.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-label</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;ion-input&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-labe fixed&gt;Website&lt;/ion-label&gt;
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

