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
show_preview_device: true
preview_device_url: "/docs/v2/demos/segment/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


SegmentButton






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/segment/segment.ts#L3'>
Improve this doc
</a>






<!-- description -->

<p>The child buttons of the <code>ion-segment</code> component. Each <code>ion-segment-button</code> must have a value.</p>


<h3>Directive</h3>
<h3>selector: <code>ion-segment-button</code></h3>
<!-- @usage tag -->

<h3 style="margin-bottom: 7px">Usage</h3>


<pre><code class="lang-html">&lt;ion-segment [(ngModel)]=&quot;relationship&quot; primary&gt;
  &lt;ion-segment-button value=&quot;friends&quot; (select)=&quot;selectedFriends()&quot;&gt;
    Friends
  &lt;/ion-segment-button&gt;
  &lt;ion-segment-button value=&quot;enemies&quot; (select)=&quot;selectedEnemies()&quot;&gt;
    Enemies
  &lt;/ion-segment-button&gt;
&lt;/ion-segment&gt;
</code></pre>
<p>Or with <code>FormBuilder</code></p>
<pre><code class="lang-html">&lt;form [ngFormModel]=&quot;myForm&quot;&gt;
  &lt;ion-segment ngControl=&quot;mapStyle&quot; danger&gt;
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




<!-- @property tags -->

<h3>Attributes:</h3>
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
the value of the segment-button. Required.
</td>
</tr>

<tr>
<td>
click
</td>


<td>
Any
</td>


<td>
expression to evaluate when a segment button has been clicked
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h3>Methods</h3>

<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>












<div id="select"></div>

<h3>
<code>select()</code>
  

</h3>












<div id="ngOnInit"></div>

<h3>
<code>ngOnInit()</code>
  

</h3>












<div id="isActive"></div>

<h3>
<code>isActive()</code>
  

</h3>










<!-- related link -->

<h3>Related</h3>

<a href='/docs/v2/components#segment'>Segment Component Docs</a>
<a href='/docs/v2/api/components/segment/Segment/'>Segment API Docs</a><!-- end content block -->


<!-- end body block -->

