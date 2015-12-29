---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionRadio/"

title: "ion-radio"
header_sub_title: "Directive in module ionic"
doc: "ionRadio"
docType: "directive"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/radio.js#L1'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/radio.js#L1'>
Improve this doc
</a>
</div>




<h1 class="api-title">

ion-radio



</h1>


{% include codepen.html id="saoBG" %}




The radio directive is no different than the HTML radio input, except it's styled differently.

Radio behaves like [AngularJS radio](http://docs.angularjs.org/api/ng/input/input[radio]).









<h2 id="usage">Usage</h2>

```html
<ion-radio ng-model="choice" ng-value="'A'">Choose A</ion-radio>
<ion-radio ng-model="choice" ng-value="'B'">Choose B</ion-radio>
<ion-radio ng-model="choice" ng-value="'C'">Choose C</ion-radio>
```


<h2 id="api" style="clear:both;">API</h2>

<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        name
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The name of the radio input.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The value of the radio input.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        disabled
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>The state of the radio input.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to use when the radio input is selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        ng-value
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Angular equivalent of the value attribute.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        ng-model
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The angular model for the radio input.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        ng-disabled
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Angular equivalent of the disabled attribute.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        ng-change
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Triggers given expression when radio input&#39;s model changes</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









