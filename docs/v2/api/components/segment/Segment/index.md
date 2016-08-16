---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.11"
versionHref: "/docs/v2/2.0.0-beta-11"
path: ""
category: api
id: "segment"
title: "Segment"
header_sub_title: "Ionic API Documentation"
doc: "Segment"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/segment/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="segment" href="#segment"></a>

Segment
<h3><code>ion-segment</code></h3>






</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/components/segment/segment.ts#L117">
Improve this doc
</a>






<p>A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.
Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.
You could use Angular 2&#39;s <code>ngModel</code> or <code>FormBuilder</code> API. For an overview on how <code>FormBuilder</code> works, checkout <a href="http://learnangular2.com/forms/">Angular 2 Forms</a>, or <a href="https://angular.io/docs/ts/latest/api/common/FormBuilder-class.html">Angular FormBuilder</a></p>
<pre><code class="lang-html">&lt;!-- Segment in a header --&gt;
&lt;ion-header&gt;
  &lt;ion-toolbar&gt;
    &lt;ion-segment [(ngModel)]=&quot;icons&quot; secondary&gt;
      &lt;ion-segment-button value=&quot;camera&quot;&gt;
        &lt;ion-icon name=&quot;camera&quot;&gt;&lt;/ion-icon&gt;
      &lt;/ion-segment-button&gt;
      &lt;ion-segment-button value=&quot;bookmark&quot;&gt;
        &lt;ion-icon name=&quot;bookmark&quot;&gt;&lt;/ion-icon&gt;
      &lt;/ion-segment-button&gt;
    &lt;/ion-segment&gt;
  &lt;/ion-toolbar&gt;
&lt;/ion-header&gt;

&lt;ion-content&gt;
  &lt;!-- Segment in content --&gt;
  &lt;ion-segment [(ngModel)]=&quot;relationship&quot; primary&gt;
    &lt;ion-segment-button value=&quot;friends&quot; (ionSelect)=&quot;selectedFriends()&quot;&gt;
      Friends
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;enemies&quot; (ionSelect)=&quot;selectedEnemies()&quot;&gt;
      Enemies
    &lt;/ion-segment-button&gt;
  &lt;/ion-segment&gt;

  &lt;!-- Segment in a form --&gt;
  &lt;form [formGroup]=&quot;myForm&quot;&gt;
    &lt;ion-segment formControlName=&quot;mapStyle&quot; danger&gt;
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
&lt;/ion-content&gt;
</code></pre>




<!-- @usage tag -->


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
      <td>ionChange</td>
      <td><p>  expression to evaluate when a segment button has been changed</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#segment'>Segment Component Docs</a>,
[Angular 2 Forms](http://learnangular2.com/forms/)<!-- end content block -->


<!-- end body block -->

