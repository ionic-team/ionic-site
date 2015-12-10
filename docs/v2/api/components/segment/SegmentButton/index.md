---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{SegmentButton | slugify}}"
title: "SegmentButton"
header_sub_title: "Class in module "
doc: "SegmentButton"
docType: "class"

---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/segment/segment.ts#L134'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/segment/segment.ts#L134'>
    Improve this doc
  </a>

</div>




<h1 class="api-title">


SegmentButton






</h1>






<h2>Description</h2>

<p>The child buttons of the <code>ion-segment</code> component. Each <code>ion-segment-button</code> must have a value.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-segment-button</code></h3>

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-segment [(ng-model)]=&quot;relationship&quot; primary&gt;
  &lt;ion-segment-button value=&quot;friends&quot;&gt;
    Friends
  &lt;/ion-segment-button&gt;
  &lt;ion-segment-button value=&quot;enemies&quot;&gt;
    Enemies
  &lt;/ion-segment-button&gt;
&lt;/ion-segment&gt;
</code></pre>
<p>Or with <code>FormBuilder</code></p>
<pre><code class="lang-html">&lt;form [ng-form-model]=&quot;myForm&quot;&gt;
  &lt;ion-segment ng-control=&quot;mapStyle&quot; danger&gt;
    &lt;ion-segment-button value=&quot;standard&quot;&gt;
      Standard
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;hybrid&quot;&gt;
      Hybrid
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;sat&quot;&gt;
      Satellite
    &lt;/ion-segment-button&gt;
  &lt;/ion-segment&gt;
&lt;/form&gt;
</code></pre>






<h2>Attributes:</h2>
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
value
</td>


<td>
string
</td>


<td>
the value of the segment-button.
</td>
</tr>

</tbody>
</table>


<h2>Related</h2>

<a href='/docs/v2/components#segment'>Segment Component Docs</a>
<a href='/docs/v2/api/components/segment/Segment/'>Segment API Docs</a><!-- end content block -->


<!-- end body block -->

