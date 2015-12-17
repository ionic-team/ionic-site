---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.43"
versionHref: "/docs/v2/2.0.0-alpha.43"
path: ""
category: api
id: "{{Input | slugify}}"
title: "Input"
header_sub_title: "Class in module ionic"
doc: "Input"
docType: "class"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/text-input/text-input.ts#L10'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/text-input/text-input.ts#L10'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Input






</h1>






<!-- description -->
<h2>Description</h2>

<p><code>ionInput</code> is a generic wrapper for both inputs and textareas. You can give <code>ion-input</code> to tell it how to handle a chile <code>ion-label</code> component</p>


<h2>Component</h2>
<h3>selector: <code>ion-input</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-input&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;input type=&quot;text&quot; value=&quot;&quot;&gt;
&lt;/ion-input&gt;

&lt;ion-input&gt;
  &lt;input type=&quot;text&quot; placeholder=&quot;Username&quot;&gt;
&lt;/ion-input&gt;

&lt;ion-input fixed-label&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;input type=&quot;text&quot; value=&quot;&quot;&gt;
&lt;/ion-input&gt;

&lt;ion-input floating-label&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;input type=&quot;text&quot; value=&quot;&quot;&gt;
&lt;/ion-input&gt;
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
fixed-labels
</td>



<td>
a persistant label that sits next the the input
</td>
</tr>

<tr>
<td>
floating-labels
</td>



<td>
a label that will float about the input if the input is empty of looses focus
</td>
</tr>

<tr>
<td>
stacked-labels
</td>



<td>
A stacked label will always appear on top of the input
</td>
</tr>

</tbody>
</table>


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

