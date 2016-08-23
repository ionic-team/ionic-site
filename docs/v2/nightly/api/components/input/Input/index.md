---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "input"
title: "Input"
header_sub_title: "Ionic API Documentation"
doc: "Input"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/input/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="input" href="#input"></a>

Input
<h3><code>ion-input</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/input/input.ts#L13">
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




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot;&gt;Inline Label&lt;/ion-label&gt;
    &lt;ion-input placeholder=&quot;Text Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; fixed&gt;Fixed Label&lt;/ion-label&gt;
    &lt;ion-input type=&quot;tel&quot; placeholder=&quot;Tel Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-input type=&quot;number&quot; placeholder=&quot;Number Input with no label&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; stacked&gt;Stacked Label&lt;/ion-label&gt;
    &lt;ion-input type=&quot;email&quot; placeholder=&quot;Email Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; stacked&gt;Stacked Label&lt;/ion-label&gt;
    &lt;ion-input type=&quot;password&quot; placeholder=&quot;Password Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; floating&gt;Floating Label&lt;/ion-label&gt;
    &lt;ion-input&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-input placeholder=&quot;Clear Input&quot; clearInput&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;
&lt;/ion-list&gt;
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
A clear icon will appear in the input when there is a value. Clicking it clears the input.

</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

