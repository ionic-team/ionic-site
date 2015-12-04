---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.38"
versionHref: "/docs/v2/2.0.0-alpha.38"
path: ""
category: api
id: "{{RadioGroup | slugify}}"
title: "RadioGroup"
header_sub_title: "Class in module "
doc: "RadioGroup"
docType: "class"
---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/radio/radio.ts#L4'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/radio/radio.ts#L4'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">


RadioGroup






</h1>






<h2>Description</h2>

<p>A radio group is a group of radio components.</p>
<p>Selecting a radio button in the group unselects all others in the group.</p>
<p>New radios can be registered dynamically.</p>
<p>See the <a href="https://angular.io/docs/js/latest/api/forms/">Angular 2 Docs</a> for more info on forms and input.</p>


<h2>Directive</h2>
<h3>selector: <code>[radio-group]</code></h3>
<h2>Usage</h2>


<pre><code class="lang-html">&lt;ion-list radio-group ng-control=&quot;clientside&quot;&gt;

  &lt;ion-list-header&gt;
    Clientside
  &lt;/ion-list-header&gt;

  &lt;ion-radio value=&quot;ember&quot;&gt;
    Ember
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;angular1&quot;&gt;
    Angular 1
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;angular2&quot; checked=&quot;true&quot;&gt;
    Angular 2
  &lt;/ion-radio&gt;

  &lt;ion-radio value=&quot;react&quot;&gt;
    React
  &lt;/ion-radio&gt;

&lt;/ion-list&gt;
</code></pre>







<h2>Methods</h2>

<div id="radios"></div>

<h3>
<code>radios()</code>

</h3>












<div id="headerQuery"></div>

<h3>
<code>headerQuery()</code>

</h3>










<!-- end content block -->


<!-- end body block -->


