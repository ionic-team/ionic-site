---
layout: "v2_fluid/docs_base"
version: "2.5.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "browsertab"
title: "BrowserTab"
header_sub_title: "Class in module "
doc: "BrowserTab"
docType: "class"
---







<h1 class="api-title">
  
  BrowserTab
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/browser-tab.ts#L0">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-browsertab</code></pre>
<p>Repo:
  <a href="https://github.com/google/cordova-plugin-browsertab">
    https://github.com/google/cordova-plugin-browsertab
  </a>
</p>

<!-- description -->

<p>This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically <a href="http://developer.android.com/tools/support-library/features.html#custom-tabs">Custom Tabs</a> on Android (including the <a href="https://developer.chrome.com/multidevice/android/customtabs">Chrome Custom Tabs</a> implementation), and <a href="https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/">SFSafariViewController</a> on iOS.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { BrowserTab } from &#39;ionic-native&#39;;

BrowserTab.isAvailable()
  .then((isAvailable: boolean) =&gt; {

    if (isAvailable) {

      BrowserTab.openUrl(&#39;https://ionic.io&#39;);

    } else {
      // open url with InAppBrowser instead
    }

  });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Check if BrowserTab option is available






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when check is successful and returns true or false
</div>



<div id="openUrl"></div>
<h3><code>openUrl(url)</code>
  
</h3>


Opens the provided URL using a browser tab


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
      url
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The URL you want to open</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when check open was successful
</div>



<div id="close"></div>
<h3><code>close()</code>
  
</h3>


Closes browser tab






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when close was finished
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

