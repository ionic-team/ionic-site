---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.43"
versionHref: "/docs/v2/2.0.0-alpha.43"
path: ""
category: api
id: "toggle"
title: "Toggle"
header_sub_title: "Class in module "
doc: "Toggle"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toggle/"
angular_controller: APIDemoCtrl 
---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/toggle/toggle.ts#L32'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/toggle/toggle.ts#L32'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Toggle






</h1>






<p>A toggle technically is the same thing as an HTML checkbox input, except it looks different and is easier to use on a touch device. Ionic prefers to wrap the checkbox input with the <code>&lt;label&gt;</code> in order to make the entire toggle easy to tap or drag.
Togglees can also have colors assigned to them, by adding any color attribute to them.</p>
<p>See the <a href="https://angular.io/docs/js/latest/api/forms/">Angular 2 Docs</a> for more info on forms and input.</p>


<h2>Component</h2>
<h3>selector: <code>ion-toggle,ion-switch</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">// Create a single toggle
 &lt;ion-toggle checked=&quot;true&quot;&gt;
   Pineapple
 &lt;/ion-toggle&gt;

// Create a list of togglees:
 &lt;ion-list&gt;

   &lt;ion-toggle checked=&quot;true&quot;&gt;
     Apple
   &lt;/ion-toggle&gt;

    &lt;ion-toggle checked=&quot;false&quot;&gt;
      Banana
    &lt;/ion-toggle&gt;

    &lt;ion-toggle disabled=&quot;true&quot;&gt;
      Cherry
    &lt;/ion-toggle&gt;

 &lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->

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
any
</td>


<td>
the inital value of the toggle
</td>
</tr>

<tr>
<td>
checked
</td>


<td>
boolean
</td>


<td>
whether the toggle it toggled or not
</td>
</tr>

<tr>
<td>
disabled
</td>


<td>
boolean
</td>


<td>
whether the toggle is disabled or not
</td>
</tr>

<tr>
<td>
id
</td>


<td>
string
</td>


<td>
a unique ID for a toggle
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="ngControl"></div>

<h3>
<code>ngControl()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#toggle'>Toggle Component Docs</a><!-- end content block -->


<!-- end body block -->

