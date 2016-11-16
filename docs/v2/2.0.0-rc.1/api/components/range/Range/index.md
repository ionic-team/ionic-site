---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.1"
versionHref: "/docs/v2/2.0.0-rc.1"
path: ""
category: api
id: "range"
title: "Range"
header_sub_title: "Ionic API Documentation"
doc: "Range"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/range/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="range" href="#range"></a>

Range
<h3><code>ion-range</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/range/range.ts#L105">
Improve this doc
</a>






<p>The Range slider lets users select from a range of values by moving
the slider knob. It can accept dual knobs, but by default one knob
controls the value of the range.</p>
<h3 id="range-labels">Range Labels</h3>
<p>Labels can be placed on either side of the range by adding the
<code>range-left</code> or <code>range-right</code> property to the element. The element
doesn&#39;t have to be an <code>ion-label</code>, it can be added to any element
to place it to the left or right of the range. See <a href="#usage">usage</a>
below for examples.</p>
<h3 id="minimum-and-maximum-values">Minimum and Maximum Values</h3>
<p>Minimum and maximum values can be passed to the range through the <code>min</code>
and <code>max</code> properties, respectively. By default, the range sets the <code>min</code>
to <code>0</code> and the <code>max</code> to <code>100</code>.</p>
<h3 id="steps-and-snaps">Steps and Snaps</h3>
<p>The <code>step</code> property specifies the value granularity of the range&#39;s value.
It can be useful to set the <code>step</code> when the value isn&#39;t in increments of <code>1</code>.
Setting the <code>step</code> property will show tick marks on the range for each step.
The <code>snaps</code> property can be set to automatically move the knob to the nearest
tick mark based on the step property value.</p>
<h3 id="dual-knobs">Dual Knobs</h3>
<p>Setting the <code>dualKnobs</code> property to <code>true</code> on the range component will
enable two knobs on the range. If the range has two knobs, the value will
be an object containing two properties: <code>lower</code> and <code>upper</code>.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item&gt;
    &lt;ion-range [(ngModel)]=&quot;singleValue&quot; color=&quot;danger&quot; pin=&quot;true&quot;&gt;&lt;/ion-range&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-range min=&quot;-200&quot; max=&quot;200&quot; [(ngModel)]=&quot;saturation&quot; color=&quot;secondary&quot;&gt;
      &lt;ion-label range-left&gt;-200&lt;/ion-label&gt;
      &lt;ion-label range-right&gt;200&lt;/ion-label&gt;
    &lt;/ion-range&gt;
  &lt;/ion-item&gt;

 &lt;ion-item&gt;
   &lt;ion-range min=&quot;20&quot; max=&quot;80&quot; step=&quot;2&quot; [(ngModel)]=&quot;brightness&quot;&gt;
     &lt;ion-icon small range-left name=&quot;sunny&quot;&gt;&lt;/ion-icon&gt;
     &lt;ion-icon range-right name=&quot;sunny&quot;&gt;&lt;/ion-icon&gt;
   &lt;/ion-range&gt;
 &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;step=100, snaps, {{singleValue4}}&lt;/ion-label&gt;
    &lt;ion-range min=&quot;1000&quot; max=&quot;2000&quot; step=&quot;100&quot; snaps=&quot;true&quot; color=&quot;secondary&quot; [(ngModel)]=&quot;singleValue4&quot;&gt;&lt;/ion-range&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;dual, step=3, snaps, {{dualValue2 | json}}&lt;/ion-label&gt;
    &lt;ion-range dualKnobs=&quot;true&quot; [(ngModel)]=&quot;dualValue2&quot; min=&quot;21&quot; max=&quot;72&quot; step=&quot;3&quot; snaps=&quot;true&quot;&gt;&lt;/ion-range&gt;
  &lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="ratio"></div>

<h3>
<a class="anchor" name="ratio" href="#ratio"></a>
<code>ratio</code>
  

</h3>

Returns the ratio of the knob's is current location, which is a number between `0` and `1`.
If two knobs are used, this property represents the lower value.











<div id="ratioUpper"></div>

<h3>
<a class="anchor" name="ratioUpper" href="#ratioUpper"></a>
<code>ratioUpper</code>
  

</h3>

Returns the ratio of the upper value's is current location, which is a number between `0` and `1`.
If there is only one knob, then this will return `null`.










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
      <td>min</td>
      <td><code>number</code></td>
      <td><p> Minimum integer value of the range. Defaults to <code>0</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>max</td>
      <td><code>number</code></td>
      <td><p> Maximum integer value of the range. Defaults to <code>100</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>step</td>
      <td><code>number</code></td>
      <td><p> Specifies the value granularity. Defaults to <code>1</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>snaps</td>
      <td><code>number</code></td>
      <td><p> If true, the knob snaps to tick marks evenly spaced based on the step property value. Defaults to <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>pin</td>
      <td><code>number</code></td>
      <td><p> If true, a pin with integer value is shown when the knob is pressed. Defaults to <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>debounce</td>
      <td><code>number</code></td>
      <td><p> How long, in milliseconds, to wait to trigger the <code>ionChange</code>
event after each change in the range value. Default <code>0</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>dualKnobs</td>
      <td><code>boolean</code></td>
      <td><p> Show two knobs. Defaults to <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> Whether or not the range is disabled. Defaults to <code>false</code>.</p>
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
      <td><p> Expression to evaluate when the range value changes.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link --><!-- end content block -->


<!-- end body block -->

