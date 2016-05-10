---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "radiobutton"
title: "RadioButton"
header_sub_title: "Ionic API Documentation"
doc: "RadioButton"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/radio/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="radio-button" href="#radio-button"></a>

RadioButton






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/radio/radio-button.ts#L6">
Improve this doc
</a>






<p>A radio button is a button that can be either checked or unchecked. A user can tap
the button to check or uncheck it. It can also be checked from the template using
the <code>checked</code> property.</p>
<p>Use an element with a <code>radio-group</code> attribute to group a set of radio buttons. When
radio buttons are inside a <a href="../RadioGroup">radio group</a>, exactly one radio button
in the group can be checked at any time. If a radio button is not placed in a group,
they will all have the ability to be checked at the same time.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular Forms Docs</a> for
more information on forms and input.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-radio</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list radio-group [(ngModel)]=&quot;relationship&quot;&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;Friends&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;friends&quot; checked&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;Family&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;family&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;
  &lt;ion-item&gt;
    &lt;ion-label&gt;Enemies&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;enemies&quot; [disabled]=&quot;isDisabled&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



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
      <td>value</td>
      <td><code>any</code></td>
      <td><p> The value of the radio button. Defaults to the generated id.</p>
</td>
    </tr>
    
    <tr>
      <td>checked</td>
      <td><code>boolean</code></td>
      <td><p> Whether the radio button should be checked or not. Default false.</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> Whether the radio button should be disabled or not. Default false.</p>
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
      <td>select</td>
      <td><p> expression to be evaluated when selected</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#radio'>Radio Component Docs</a>,
<a href='../RadioGroup'>RadioGroup API Docs</a><!-- end content block -->


<!-- end body block -->

