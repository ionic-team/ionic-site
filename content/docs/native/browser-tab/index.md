---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "browser-tab"
title: "Browser Tab"
header_sub_title: "Class in module "
doc: "Browser Tab"
docType: "class"
---

<h1 class="api-title">Browser Tab</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/browser-tab/index.ts#L1">
  Improve this doc
</a>







<p>This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically <a href="http://developer.android.com/tools/support-library/features.html#custom-tabs">Custom Tabs</a> on Android (including the <a href="https://developer.chrome.com/multidevice/android/customtabs">Chrome Custom Tabs</a> implementation), and <a href="https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/">SFSafariViewController</a> on iOS.</p>


<p>Repo:
  <a href="https://github.com/google/cordova-plugin-browsertab">
    https://github.com/google/cordova-plugin-browsertab
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-browsertab
$ npm install --save @ionic-native/browser-tab
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BrowserTab } from &#39;@ionic-native/browser-tab&#39;;

constructor(private browserTab: BrowserTab) {

  browserTab.isAvailable()
    .then(isAvailable =&gt; {
      if (isAvailable) {
        browserTab.openUrl(&#39;https://ionic.io&#39;);
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Check if BrowserTab option is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when check is successful and returns true or false
</div><h3><a class="anchor" name="openUrl" href="#openUrl"></a><code>openUrl(url)</code></h3>


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
      url</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when check open was successful
</div><h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>


Closes browser tab


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when close was finished
</div>





