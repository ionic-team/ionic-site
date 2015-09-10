---
layout: "v2/docs_api"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""

title: "ionRadioGroup"
header_sub_title: "Class in module "
doc: "ionRadioGroup"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/#L'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/#L'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionRadioGroup



</h1>





A radio group is a group of radio components.

Selecting a radio button in the group unselects all others in the group.

New radios can be registered dynamically.

See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.

<h1 class="class export">ionRadioGroup <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/radio/radio.ts#L6-L150">ionic/components/radio/radio.ts (line 6)</a>
</p>
<p><p>A radio group is a group of radio components.</p>
<p>Selecting a radio button in the group unselects all others in the group.</p>
<p>New radios can be registered dynamically.</p>
<p>See the <a href="https://angular.io/docs/js/latest/api/forms/">Angular 2 Docs</a> for more info on forms and input.</p>
</p>
## Members

<div id="radios"></div>
<h2>
  <code>radios()</code>

</h2>












<div id="headerQuery"></div>
<h2>
  <code>headerQuery()</code>

</h2>












<div id="onInit"></div>
<h2>
  <code>onInit()</code>

</h2>












<div id="registerRadio"></div>
<h2>
  <code>registerRadio(radio)</code>

</h2>

Register the specified radio button with the radio group.



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
        radio
        
        
      </td>
      <td>
        
  <code>RadioButton</code>
      </td>
      <td>
        <p>The radio button to register.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="update"></div>
<h2>
  <code>update(checkedRadio)</code>

</h2>

Update which radio button in the group is checked, unchecking all others.



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
        checkedRadio
        
        
      </td>
      <td>
        
  <code>RadioButton</code>
      </td>
      <td>
        <p>The radio button to check.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="writeValue"></div>
<h2>
  <code>writeValue()</code>

</h2>











<div id="registerOnChange"></div>
<h2>
  <code>registerOnChange(fn)</code>

</h2>





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
        fn
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>the onChange event handler.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="registerOnTouched"></div>
<h2>
  <code>registerOnTouched(fn)</code>

</h2>





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
        fn
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>onTouched event handler.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









