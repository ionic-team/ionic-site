---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic2/edit/master/ionic/components/radio/radio.ts#L90'>
Improve this doc
</a> 






<!-- description -->
<h2>Description</h2>

<p>A radio group is a group of radio components.</p>
<p>Selecting a radio button in the group unselects all others in the group.</p>
<p>New radios can be registered dynamically.</p>
<p>See the <a href="https://angular.io/docs/js/latest/api/forms/">Angular 2 Docs</a> for more info on forms and input.</p>


<h2>Directive</h2>
<h3>selector: <code>[radio-group]</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-list radio-group ngControl=&quot;autoManufacturers&quot;&gt;

  &lt;ion-list-header&gt;
    Auto Manufacturers
  &lt;/ion-list-header&gt;

  &lt;ion-radio value=&quot;cord&quot;&gt;
    Cord
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;duesenberg&quot; checked=&quot;true&quot;&gt;
    Duesenberg
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;hudson&quot;&gt;
    Hudson
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;packard&quot;&gt;
    Packard
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;studebaker&quot;&gt;
    Studebaker
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;tucker&quot;&gt;
    Tucker
  &lt;/ion-radio&gt;

&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="change"></div>

<h3>
<code>change()</code>
  

</h3>












<div id="id"></div>

<h3>
<code>id()</code>
  

</h3>












<div id="value"></div>

<h3>
<code>value()</code>
  

</h3>












<div id="onChange"></div>

<h3>
<code>onChange()</code>
  

</h3>












<div id="onTouched"></div>

<h3>
<code>onTouched()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#radio'>Radio Component Docs</a><!-- end content block -->


<!-- end body block -->

