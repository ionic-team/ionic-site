---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "searchbar"
title: "Searchbar"
header_sub_title: "Class in module ionic"
doc: "Searchbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/searchbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Searchbar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/searchbar/searchbar.ts#L30'>
Improve this doc
</a>






<p>Manages the display of a Searchbar which can be used to search or filter items.</p>


<h2>Component</h2>
<h3>selector: <code>ion-searchbar</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-searchbar [(ngModel)]=&quot;defaultSearch&quot; (input)=&quot;triggerInput($event)&quot; (cancel)=&quot;onCancelSearchbar($event)&quot; (clear)=&quot;onClearSearchbar($event)&quot;&gt;&lt;/ion-searchbar&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2>Input Properties</h2>
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
      <td>cancelButtonText</td>
      <td><code>string</code></td>
      <td><p> Sets the cancel button text to the value passed in</p>
</td>
    </tr>
    
    <tr>
      <td>hideCancelButton</td>
      <td><code>boolean</code></td>
      <td><p> Hides the cancel button</p>
</td>
    </tr>
    
    <tr>
      <td>placeholder</td>
      <td><code>string</code></td>
      <td><p> Sets input placeholder to the value passed in</p>
</td>
    </tr>
    
    <tr>
      <td>ngModel</td>
      <td><code>Any</code></td>
      <td><p> Expression to evaluate when the Searchbar input has changed including cleared</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>input</td>
      <td><p> When the Searchbar input has changed including cleared</p>
</td>
    </tr>
    
    <tr>
      <td>blur</td>
      <td><p> When the Searchbar input has blurred</p>
</td>
    </tr>
    
    <tr>
      <td>focus</td>
      <td><p> When the Searchbar input has focused</p>
</td>
    </tr>
    
    <tr>
      <td>cancel</td>
      <td><p> When the cancel button is clicked</p>
</td>
    </tr>
    
    <tr>
      <td>clear</td>
      <td><p> When the clear input button is clicked</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#searchbar'>Searchbar Component Docs</a><!-- end content block -->


<!-- end body block -->

