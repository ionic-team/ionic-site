---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{Switch | slugify}}"
title: "Switch"
header_sub_title: "Class in module "
doc: "Switch"
docType: "class"
---



<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/switch/switch.ts#L31'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/switch/switch.ts#L31'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">

  Switch



</h1>





<p>A switch technically is the same thing as an HTML checkbox input, except it looks different and is easier to use on a touch device. Ionic prefers to wrap the checkbox input with the <label> in order to make the entire toggle easy to tap or drag.</p>
<p>Toggles can also have colors assigned to them, by adding the <code>toggle-assertive</code> attribute to assign the assertive color.</p>
<p>See the <a href="https://angular.io/docs/js/latest/api/forms/">Angular 2 Docs</a> for more info on forms and input.</p>





<pre><code class="lang-html">// Create a single switch
 &lt;ion-switch checked=&quot;true&quot;&gt;
   Pineapple
 &lt;/ion-switch&gt;

// Create a list of switches:
 &lt;ion-list&gt;

   &lt;ion-switch checked=&quot;true&quot;&gt;
     Apple
   &lt;/ion-switch&gt;

    &lt;ion-switch checked=&quot;false&quot;&gt;
      Banana
    &lt;/ion-switch&gt;

    &lt;ion-switch disabled=&quot;true&quot;&gt;
      Cherry
    &lt;/ion-switch&gt;

 &lt;/ion-list&gt;
</code></pre>




<h1 class="class export">Switch <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/switch/switch.ts#L32-L248">ionic/components/switch/switch.ts (line 32)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-switch</span>

  <span>inputs: value, checked, disabled, id</span>


<h2>Members</h2>

<div id="ngControl"></div>
<h3>
  <code>ngControl()</code>

</h3>












<div id="check"></div>
<h3>
  <code>check(value)</code>

</h3>

Set checked state of this switch.



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Boolean to set this switch&#39;s checked state to.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="toggle"></div>
<h3>
  <code>toggle()</code>

</h3>

Toggle the checked state of this switch.













