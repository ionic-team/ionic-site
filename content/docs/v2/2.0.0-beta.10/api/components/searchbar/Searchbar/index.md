---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.10"
versionHref: "/docs/v2/2.0.0-beta.10"
path: ""
category: api
id: "searchbar"
title: "Searchbar"
header_sub_title: "Ionic API Documentation"
doc: "Searchbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/searchbar/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="searchbar" href="#searchbar"></a>

Searchbar
<h3><code>ion-searchbar</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/searchbar/searchbar.ts#L5">
Improve this doc
</a>






<p>Manages the display of a Searchbar which can be used to search or filter items.</p>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-searchbar
  [(ngModel)]=&quot;myInput&quot;
  [showCancelButton]=&quot;shouldShowCancel&quot;
  (ionInput)=&quot;onInput($event)&quot;
  (ionCancel)=&quot;onCancel($event)&quot;&gt;
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
      <td><p> Set the the cancel button text. Default: <code>&quot;Cancel&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>showCancelButton</td>
      <td><code>boolean</code></td>
      <td><p> Whether to show the cancel button or not. Default: <code>&quot;false&quot;</code>.</p>
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
      <td><p> Set the input&#39;s placeholder. Default <code>&quot;Search&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>autocomplete</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s autocomplete property. Values: <code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>. Default <code>&quot;off&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>autocorrect</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s autocorrect property. Values: <code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>. Default <code>&quot;off&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>spellcheck</td>
      <td><code>string|boolean</code></td>
      <td><p> Set the input&#39;s spellcheck property. Values: <code>true</code>, <code>false</code>. Default <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>type</td>
      <td><code>string</code></td>
      <td><p> Set the type of the input. Values: <code>&quot;text&quot;</code>, <code>&quot;password&quot;</code>, <code>&quot;email&quot;</code>, <code>&quot;number&quot;</code>, <code>&quot;search&quot;</code>, <code>&quot;tel&quot;</code>, <code>&quot;url&quot;</code>. Default <code>&quot;search&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>value</td>
      <td><code>string</code></td>
      <td><p> Set the input value.</p>
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
      <td>ionInput</td>
      <td><p> When the Searchbar input has changed including cleared.</p>
</td>
    </tr>
    
    <tr>
      <td>ionBlur</td>
      <td><p> When the Searchbar input has blurred.</p>
</td>
    </tr>
    
    <tr>
      <td>ionFocus</td>
      <td><p> When the Searchbar input has focused.</p>
</td>
    </tr>
    
    <tr>
      <td>ionCancel</td>
      <td><p> When the cancel button is clicked.</p>
</td>
    </tr>
    
    <tr>
      <td>ionClear</td>
      <td><p> When the clear input button is clicked.</p>
</td>
    </tr>
    
  </tbody>
</table>


<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#searchbar'>Searchbar Component Docs</a><!-- end content block -->


<!-- end body block -->

