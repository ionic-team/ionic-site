---
layout: "v2_fluid/docs_base"
version: "1.0.9"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "actionsheet"
title: "ActionSheet"
header_sub_title: "Class in module "
doc: "ActionSheet"
docType: "class"
---








<h1 class="api-title">


ActionSheet






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/actionsheet.ts#L0'>
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
<p>Requires Cordova plugin: <code>cordova-plugin-actionsheet</code>. For more info, please see the <a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">ActionSheet plugin docs</a>.</p>

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
<h3><code>show(options)</code>
  
</h3>

Show the ActionSheet.


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
        options
        
        
      </td>
      <td>
        
  <code>options</code>
      </td>
      <td>
        <p><code>buttonLabels</code>: string[]
  <code>title</code>: string
  <code>androidTheme</code> (Android only): number 1-5
  <code>androidEnableCancelButton</code> (Android only): boolean, default false
  <code>winphoneEnableCancelButton</code> (WP only): boolean, default false
  <code>addCancelButtonWithLabel</code>: string
  <code>addDestructiveButtonWithLabel</code>: string
  <code>position</code>: [x, y] (iPad pass in [x, y] coords of popover)</p>

        
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

