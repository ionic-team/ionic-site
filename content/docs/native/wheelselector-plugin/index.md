---
layout: "fluid/docs_base"
version: "3.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "wheelselector-plugin"
title: "WheelSelector Plugin"
header_sub_title: "Class in module "
doc: "WheelSelector Plugin"
docType: "class"
---

<h1 class="api-title">WheelSelector Plugin<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/wheel-selector/index.ts#L50">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/jasonmamy/cordova-wheel-selector-plugin/issues">plugin repo</a>.
</p>



<pre><code class="nohighlight">$ ionic cordova plugin add cordova-wheel-selector-plugin
$ npm install --save @ionic-native/wheel-selector
</code></pre>
<p>Repo:
  <a href="https://github.com/jasonmamy/cordova-wheel-selector-plugin">
    https://github.com/jasonmamy/cordova-wheel-selector-plugin
  </a>
</p>


<p>Native wheel selector for Cordova (Android/iOS).</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code>import { WheelSelector } from &#39;@ionic-native/wheel-selector&#39;;


constructor(private selector: WheelSelector) { }

...

let jsonData = {
    numbers: [
     { description: &quot;1&quot; },
      { description: &quot;2&quot; },
      { description: &quot;3&quot; }
    ],
    fruits: [
      { description: &quot;Apple&quot; },
      { description: &quot;Banana&quot; },
      { description: &quot;Tangerine&quot; }
    ],
  };

  //use most of the default values
  this.selector.show({
    title: &quot;Select some Fruit&quot;,
    items: [
      jsonData.numbers,
      jsonData.fruits
    ]
  }).then(
    result =&gt; {
      console.log(&#39;Selected: &#39; + result[0].description + &#39; at index: &#39; + result[0].index
        + &#39; and &#39; + result[1].description + &#39; at index: &#39; + result[1].index);
    },
    err =&gt; console.log(&#39;Error occurred while getting result: &#39;, err)
    );

  ...

  //set some initial default values to display: &quot;2&quot;, &quot;Tangerine&quot;
  this.selector.show({
    title: &quot;Select some Fruit&quot;,
    items: [
      jsonData.numbers,
      jsonData.fruits
    ],
    defaultItems: [
      jsonData.numbers[1],
      jsonData.fruits[2]
    ]
  }).then(
    result =&gt; {
      console.log(&#39;Selected: &#39; + result[0].description + &#39; at index: &#39; + result[0].index
        + &#39; and &#39; + result[1].description + &#39; at index: &#39; + result[1].index);
    },
    err =&gt; console.log(&#39;Error occurred while getting result: &#39;, err)
    );
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show(options)</code></h3>


Shows the wheel selector
<table class="table param-table" style="margin:0;">
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
      options</td>
    <td>
      <code>WheelSelectorOptions</code>
    </td>
    <td>
      <p>Options for the wheel selector</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;WheelSelectorData&gt;</code> Returns a promise that resolves with the selected items, or an error.
</div><h3><a class="anchor" name="hideSelector" href="#hideSelector"></a><code>hideSelector()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Hide the selector


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





<h2><a class="anchor" name="WheelSelectorOptions" href="#WheelSelectorOptions"></a>WheelSelectorOptions</h2>

<table class="table param-table" style="margin:0;">
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
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The title of the selector&#39;s input box</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      items
    </td>
    <td>
      <code>Array&lt;Array&lt;WheelSelectorItem&gt;&gt;</code>
    </td>
    <td>
      <p>The items to display (array of items).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      defaultItems
    </td>
    <td>
      <code>Array&lt;WheelSelectorItem&gt;</code>
    </td>
    <td>
      <p>Which items to display by default, example [&quot;2&quot;,&quot;Apple&quot;] (if items.length is 2 for instance)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      positiveButtonText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The &#39;ok&#39; button text
Default: Done</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      negativeButtonText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The &#39;cancel&#39; button text
Default: Cancel</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      theme
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Android only - theme color, &#39;light&#39; or &#39;dark&#39;.
Default: light</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      wrapWheelText
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Whether to have the wheels &#39;wrap&#39; (Android only)
Default: false</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





