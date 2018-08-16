---
layout: "fluid/docs_base"
version: "4.11.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/wheel-selector/index.ts#L62">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/jasonmamy/cordova-wheel-selector-plugin/issues">plugin repo</a>.
</p>




<p>Native wheel selector for Cordova (Android/iOS).</p>


<p>Repo:
  <a href="https://github.com/jasonmamy/cordova-wheel-selector-plugin">
    https://github.com/jasonmamy/cordova-wheel-selector-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-wheel-selector-plugin
$ npm install --save @ionic-native/wheel-selector
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { WheelSelector } from &#39;@ionic-native/wheel-selector&#39;;


constructor(private selector: WheelSelector) { }

...

const jsonData = {
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
  firstNames: [
    { name: &quot;Fred&quot;, id: &#39;1&#39; },
    { name: &quot;Jane&quot;, id: &#39;2&#39; },
    { name: &quot;Bob&quot;, id: &#39;3&#39; },
    { name: &quot;Earl&quot;, id: &#39;4&#39; },
    { name: &quot;Eunice&quot;, id: &#39;5&#39; }
  ],
  lastNames: [
    { name: &quot;Johnson&quot;, id: &#39;100&#39; },
    { name: &quot;Doe&quot;, id: &#39;101&#39; },
    { name: &quot;Kinishiwa&quot;, id: &#39;102&#39; },
    { name: &quot;Gordon&quot;, id: &#39;103&#39; },
    { name: &quot;Smith&quot;, id: &#39;104&#39; }
  ]
};

...

// basic number selection, index is always returned in the result
 selectANumber() {
   this.selector.show({
     title: &quot;How Many?&quot;,
     items: [
       this.jsonData.numbers
     ],
   }).then(
     result =&gt; {
       console.log(result[0].description + &#39; at index: &#39; + result[0].index);
     },
     err =&gt; console.log(&#39;Error: &#39;, err)
     );
 }

 ...

 // basic selection, setting initial displayed default values: &#39;3&#39; &#39;Banana&#39;
 selectFruit() {
   this.selector.show({
     title: &quot;How Much?&quot;,
     items: [
       this.jsonData.numbers, this.jsonData.fruits
     ],
     positiveButtonText: &quot;Ok&quot;,
     negativeButtonText: &quot;Nope&quot;,
     defaultItems: [
       {index:0, value: this.jsonData.numbers[2].description},
       {index: 1, value: this.jsonData.fruits[3].description}
     ]
   }).then(
     result =&gt; {
       console.log(result[0].description + &#39; &#39; + result[1].description);
     },
     err =&gt; console.log(&#39;Error: &#39; + JSON.stringify(err))
     );
 }

 ...

 // more complex as overrides which key to display
 // then retrieve properties from original data
 selectNamesUsingDisplayKey() {
   this.selector.show({
     title: &quot;Who?&quot;,
     items: [
       this.jsonData.firstNames, this.jsonData.lastNames
     ],
     displayKey: &#39;name&#39;,
     defaultItems: [
       {index:0, value: this.jsonData.firstNames[2].name}, 
       {index: 0, value: this.jsonData.lastNames[3].name}
     ]
   }).then(
     result =&gt; {
       console.log(result[0].name + &#39; (id= &#39; + this.jsonData.firstNames[result[0].index].id + &#39;), &#39; +
         result[1].name + &#39; (id=&#39; + this.jsonData.lastNames[result[1].index].id + &#39;)&#39;);
     },
     err =&gt; console.log(&#39;Error: &#39; + JSON.stringify(err))
     );
 }
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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
      <code>Array&lt;DefaultItem&gt;</code>
    </td>
    <td>
      <p>Which items to display by default.</p>

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
      <code>&#39;light&#39; | &#39;dark&#39;</code>
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
  
  <tr>
    <td>
      displayKey
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The json key to display, by default it is description, this allows for setting any
key/value to be displayed
Default: description</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





