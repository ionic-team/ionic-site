---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "input"
title: "Input"
header_sub_title: "Class in module "
doc: "Input"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/input/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="input" href="#input"></a>

Input






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/input/input.ts#L13'>
Improve this doc
</a>






<p><code>ion-input</code> is meant for text type inputs only, such as <code>text</code>,
<code>password</code>, <code>email</code>, <code>number</code>, <code>search</code>, <code>tel</code>, and <code>url</code>. Ionic
still uses an actual <code>&lt;input type=&quot;text&quot;&gt;</code> HTML element within the
component, however, with Ionic wrapping the native HTML input
element it&#39;s able to better handle the user experience and
interactivity.</p>
<p>Similarily, <code>&lt;ion-textarea&gt;</code> should be used in place of <code>&lt;textarea&gt;</code>.</p>
<p>An <code>ion-input</code> is <strong>not</strong> used for non-text type inputs, such as a
<code>checkbox</code>, <code>radio</code>, <code>toggle</code>, <code>range</code>, <code>select</code>, etc.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-input</code></h3>
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

&lt;ion-item clearInput&gt;
  &lt;ion-input placeholder=&quot;Username&quot;&gt;&lt;/ion-input&gt;
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
type
</td>



<td>
The HTML input type (text, password, email, number, search, tel, or url)
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



<!-- instance methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

