---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Input | slugify}}"
title: "Input"
header_sub_title: "Class in module ionic"
doc: "Input"
docType: "class"

---









<h1 class="api-title">


Input






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic2/edit/master/ionic/components/input/input.ts#L13'>
Improve this doc
</a> 






<!-- description -->
<h2>Description</h2>

<p><code>ion-input</code> is a generic wrapper for both inputs and textareas. You can give <code>ion-input</code> attributes to tell it how to handle a child <code>ion-label</code> component.</p>


<h2>Component</h2>
<h3>selector: <code>ion-input</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-input&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;input type=&quot;text&quot; value=&quot;&quot;&gt;
&lt;/ion-input&gt;

&lt;ion-input clearInput&gt;
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
fixed-label
</td>



<td>
a persistant label that sits next the the input
</td>
</tr>

<tr>
<td>
floating-label
</td>



<td>
a label that will float about the input if the input is empty of looses focus
</td>
</tr>

<tr>
<td>
stacked-label
</td>



<td>
A stacked label will always appear on top of the input
</td>
</tr>

<tr>
<td>
inset
</td>



<td>
The input will be inset
</td>
</tr>

<tr>
<td>
clearInput
</td>



<td>
A clear icon will appear in the input which clears it

</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>










<!-- related link --><!-- end content block -->


<!-- end body block -->

