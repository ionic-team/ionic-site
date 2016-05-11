---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/actionsheet.ts#L0'>
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
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {ActionSheet} from &#39;ionic-native&#39;;

let buttonLabels = [&#39;Share via Facebook&#39;, &#39;Share via Twitter&#39;];
ActionSheet.show({
  &#39;title&#39;: &#39;What do you want with this image?&#39;,
  &#39;buttonLabels&#39;: buttonLabels,
  &#39;addCancelButtonWithLabel&#39;: &#39;Cancel&#39;,
  &#39;addDestructiveButtonWithLabel&#39; : &#39;Delete&#39;
}).then(buttonIndex =&gt; {
  console.log(&#39;Button pressed: &#39; + buttonLabels[buttonIndex - 1]);
});
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="show"></div>
<h3><code>show(Options)</code>

</h3>

Show the ActionSheet. The ActionSheet's options is an object with the following propterties.

| Option                        | Type      | Description                                  |
|-------------------------------|-----------|----------------------------------------------|
| title                         |`string`   | The title for the actionsheet                |
| buttonLabels                  |`string[]` | the labels for the buttons. Uses the index x |
| androidTheme                  |`number`   | Theme to be used on Android                  |
| androidEnableCancelButton     |`boolean`  | Enable a cancel on Android                   |
| winphoneEnableCancelButton    |`boolean`  | Enable a cancel on Windows Phone             |
| addCancelButtonWithLabel      |`string`   | Add a cancel button with text                |
| addDestructiveButtonWithLabel |`string`   | Add a destructive button with text           |
| position                      |`number[]` | On an iPad, set the X,Y position             |



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
      <p>See table above</p>

      
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

Hide the ActionSheet.











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

