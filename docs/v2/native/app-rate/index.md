---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "app-rate"
title: "App Rate"
header_sub_title: "Class in module "
doc: "App Rate"
docType: "class"
---








<h1 class="api-title">

  
  App Rate
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/apprate.ts#L3">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-apprate</code></pre>
<p>Repo:
  <a href="https://github.com/pushandplay/cordova-plugin-apprate">
    https://github.com/pushandplay/cordova-plugin-apprate
  </a>
</p>

<!-- description -->

<p>The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.</p>
<p>Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the <a href="https://github.com/pushandplay/cordova-plugin-apprate">AppRate plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { AppRate } from &#39;ionic-native&#39;;

 AppRate.preferences.storeAppURL = {
   ios: &#39;&lt;my_app_id&gt;&#39;,
   android: &#39;market://details?id=&lt;package_name&gt;&#39;,
 };

AppRate.promptForRating();
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="preferences"></div>
<h3><code>preferences()</code>
  
</h3>

Configure various settings for the Rating View.
See table below for options










<div id="promptForRating"></div>
<h3><code>promptForRating(immediately)</code>
  
</h3>

Prompts the user for rating


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
      immediately
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>Show the rating prompt immediately.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Rating dialog preferences</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>useLanguage</td>
<td><code>String</code></td>
<td>null</td>
<td>custom BCP 47 language tag</td>
</tr>
<tr>
<td>displayAppName</td>
<td><code>String</code></td>
<td>&#39;&#39;</td>
<td>custom application title</td>
</tr>
<tr>
<td>promptAgainForEachNewVersion</td>
<td><code>Boolean</code></td>
<td>true</td>
<td>show dialog again when application version will be updated</td>
</tr>
<tr>
<td>usesUntilPrompt</td>
<td><code>Integer</code></td>
<td>3</td>
<td>count of runs of application before dialog will be displayed</td>
</tr>
<tr>
<td>openStoreInApp</td>
<td><code>Boolean</code></td>
<td>false</td>
<td>leave app or no when application page opened in app store (now supported only for iOS)</td>
</tr>
<tr>
<td>useCustomRateDialog</td>
<td><code>Boolean</code></td>
<td>false</td>
<td>use custom view for rate dialog</td>
</tr>
<tr>
<td>callbacks.onButtonClicked</td>
<td><code>Function</code></td>
<td>null</td>
<td>call back function. called when user clicked on rate-dialog buttons</td>
</tr>
<tr>
<td>callbacks.onRateDialogShow</td>
<td><code>Function</code></td>
<td>null</td>
<td>call back function. called when rate-dialog showing</td>
</tr>
<tr>
<td>storeAppURL.ios</td>
<td><code>String</code></td>
<td>null</td>
<td>application id in AppStore</td>
</tr>
<tr>
<td>storeAppURL.android</td>
<td><code>String</code></td>
<td>null</td>
<td>application URL in GooglePlay</td>
</tr>
<tr>
<td>storeAppURL.blackberry</td>
<td><code>String</code></td>
<td>null</td>
<td>application URL in AppWorld</td>
</tr>
<tr>
<td>storeAppURL.windows8</td>
<td><code>String</code></td>
<td>null</td>
<td>application URL in WindowsStore</td>
</tr>
<tr>
<td>customLocale</td>
<td><code>Object</code></td>
<td>null</td>
<td>custom locale object</td>
</tr>
</tbody>
</table>


<!-- related link --><!-- end content block -->


<!-- end body block -->

