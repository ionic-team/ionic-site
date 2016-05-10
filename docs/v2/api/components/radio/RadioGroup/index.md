---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "radiogroup"
title: "RadioGroup"
header_sub_title: "Ionic API Documentation"
doc: "RadioGroup"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/radio/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="radio-group" href="#radio-group"></a>

RadioGroup






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/radio/radio-group.ts#L8">
Improve this doc
</a>






<p>A radio group is a group of <a href="../RadioButton">radio buttons</a>. It allows
a user to select at most one radio button from a set. Checking one radio
button that belongs to a radio group unchecks any previous checked
radio button within the same group.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular Forms Docs</a>
for more information on forms and inputs.</p>


<h2><a class="anchor" name="Directive" href="#Directive"></a>Directive</h2>
<h3>selector: <code>[radio-group]</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list radio-group [(ngModel)]=&quot;autoManufacturers&quot;&gt;

  &lt;ion-list-header&gt;
    Auto Manufacturers
  &lt;/ion-list-header&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Cord&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;cord&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Duesenberg&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;duesenberg&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Hudson&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;hudson&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Packard&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;packard&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Studebaker&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;studebaker&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
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
      <td>change</td>
      <td><p> expression to be evaluated when selection has been changed</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#radio'>Radio Component Docs</a>,
<a href='../RadioButton'>RadioButton API Docs</a><!-- end content block -->


<!-- end body block -->

