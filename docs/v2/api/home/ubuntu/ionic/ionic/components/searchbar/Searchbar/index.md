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
<a class="anchor" name="searchbar" href="#searchbar"></a>

Searchbar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/searchbar/searchbar.ts#L28'>
Improve this doc
</a>






<p>Manages the display of a Searchbar which can be used to search or filter items.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-searchbar</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-searchbar
  [(ngModel)]=&quot;myInput&quot;
  [hideCancelButton]=&quot;shouldHideCancel&quot;
  (input)=&quot;onInput($event)&quot;
  (cancel)=&quot;onCancel($event)&quot;&gt;
&lt;/ion-searchbar&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
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
      <td>debounce</td>
      <td><code>number</code></td>
      <td><p> How long, in milliseconds, to wait to trigger the <code>input</code> event after each keystroke. Default <code>250</code>.</p>
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
      <td><code>any</code></td>
      <td><p> Expression to evaluate when the Searchbar input has changed including cleared</p>
</td>
    </tr>
    
  </tbody>
</table>
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

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#searchbar'>Searchbar Component Docs</a><!-- end content block -->


<!-- end body block -->

