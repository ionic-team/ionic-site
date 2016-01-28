---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.53"
versionHref: "/docs/v2/2.0.0-alpha.53"
path: ""
category: api
id: "{{RadioGroup | slugify}}"
title: "RadioGroup"
header_sub_title: "Class in module "
doc: "RadioGroup"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/radio/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


RadioGroup






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/radio/radio-group.ts#L5'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>A radio group is a group of radio components, and its value comes
from the selected radio button&#39;s value. Selecting a radio button
in the group unselects all others in the group.</p>
<p>See the <a href="https://angular.io/docs/js/latest/api/forms/">Angular 2 Docs</a> for more info on forms and input.</p>


<h2>Directive</h2>
<h3>selector: <code>[radio-group]</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

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
    &lt;ion-radio value=&quot;duesenberg&quot; checked=&quot;true&quot;&gt;&lt;/ion-radio&gt;
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


<!-- methods on the class -->

<h2>Methods</h2>

<div id="id"></div>

<h3>
<code>id()</code>
  

</h3>












<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>












<div id="change"></div>

<h3>
<code>change()</code>
  

</h3>












<div id="ngAfterContentInit"></div>

<h3>
<code>ngAfterContentInit()</code>
  

</h3>












<div id="updateValue"></div>

<h3>
<code>updateValue()</code>
  

</h3>












<div id="register"></div>

<h3>
<code>register()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#radio'>Radio Component Docs</a><!-- end content block -->


<!-- end body block -->

