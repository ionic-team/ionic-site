---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "action-sheet"
title: "Action Sheet"
header_sub_title: "Class in module "
doc: "Action Sheet"
docType: "class"
---







<h1 class="api-title">
  
  Action Sheet
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/actionsheet.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-actionsheet</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet">
    https://github.com/EddyVerbruggen/cordova-plugin-actionsheet
  </a>
</p>

<!-- description -->

<p>The ActionSheet plugin shows a native list of options the user can choose from.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-actionsheet</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet">ActionSheet plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { ActionSheet } from &#39;ionic-native&#39;;


let buttonLabels = [&#39;Share via Facebook&#39;, &#39;Share via Twitter&#39;];
ActionSheet.show({
  &#39;title&#39;: &#39;What do you want with this image?&#39;,
  &#39;buttonLabels&#39;: buttonLabels,
  &#39;addCancelButtonWithLabel&#39;: &#39;Cancel&#39;,
  &#39;addDestructiveButtonWithLabel&#39; : &#39;Delete&#39;
}).then((buttonIndex: number) =&gt; {
  console.log(&#39;Button pressed: &#39; + buttonIndex);
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="show"></div>
<h3><code>show(Options)</code>
  
</h3>


Show a native ActionSheet component. See below for options.


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
      Options
      
      
    </td>
    <td>
      
<code>options</code>
    </td>
    <td>
      <p>See table below</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves with the index of the
  button pressed (1 based, so 1, 2, 3, etc.)
</div>



<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>


Progamtically hide the native ActionSheet






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves when the actionsheet is closed
</div>




<!-- methods on the class -->

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>ActionSheet options</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td><code>string</code></td>
<td>The title for the actionsheet</td>
</tr>
<tr>
<td>buttonLabels</td>
<td><code>string[]</code></td>
<td>the labels for the buttons. Uses the index x</td>
</tr>
<tr>
<td>androidTheme</td>
<td><code>number</code></td>
<td>Theme to be used on Android</td>
</tr>
<tr>
<td>androidEnableCancelButton</td>
<td><code>boolean</code></td>
<td>Enable a cancel on Android</td>
</tr>
<tr>
<td>winphoneEnableCancelButton</td>
<td><code>boolean</code></td>
<td>Enable a cancel on Windows Phone</td>
</tr>
<tr>
<td>addCancelButtonWithLabel</td>
<td><code>string</code></td>
<td>Add a cancel button with text</td>
</tr>
<tr>
<td>addDestructiveButtonWithLabel</td>
<td><code>string</code></td>
<td>Add a destructive button with text</td>
</tr>
<tr>
<td>position</td>
<td><code>number[]</code></td>
<td>On an iPad, set the X,Y position</td>
</tr>
</tbody>
</table>


<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

