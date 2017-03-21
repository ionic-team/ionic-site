---
layout: "v2_fluid/docs_base"
version: "3.1.0"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/app-rate/index.ts#L96">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-apprate
$ npm install --save @ionic-native/app-rate
</code></pre>
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
  <li>Android</li><li>iOS</li><li>Windows (experimental)</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { AppRate } from &#39;@ionic-native/app-rate&#39;;

constructor(private appRate: AppRate) { }

...

 this.appRate.preferences.storeAppURL = {
   ios: &#39;&lt;my_app_id&gt;&#39;,
   android: &#39;market://details?id=&lt;package_name&gt;&#39;,
   windows: &#39;ms-windows-store://review/?ProductId=&lt;Store_ID&gt;&#39;
 };

this.appRate.promptForRating(false);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="preferences"></div>
<h3>
  <code>preferences</code>
  

</h3>
Configure various settings for the Rating View.
See table below for options



<div id="promptForRating"></div>
<h3>
  <code>promptForRating(immediately)</code>
  

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





<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="AppRatePreferences" href="#AppRatePreferences"></a>AppRatePreferences</h2>


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
      useLanguage
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Custom BCP 47 language tag</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      displayAppName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Custom application title</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      promptAgainForEachNewVersion
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Show dialog again when application version will be updated. Defaults to <code>true</code></p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      usesUntilPrompt
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>count of runs of application before dialog will be displayed. Defaults to <code>3</code></p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      openStoreInApp
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>leave app or no when application page opened in app store (now supported only for iOS). Defaults to <code>false</code></p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      useCustomRateDialog
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>use custom view for rate dialog. Defaults to <code>false</code></p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      customLocale
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Custom locale object</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      callbacks
    </td>
    <td>
      <code>AppRateCallbacks</code>
    </td>
    <td>
      <p>Callbacks for events</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      storeAppURL
    </td>
    <td>
      <code>AppUrls</code>
    </td>
    <td>
      <p>App Store URLS</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="AppUrls" href="#AppUrls"></a>AppUrls</h2>


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
      ios
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>application id in AppStore</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>application URL in GooglePlay</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      windows
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>application URL in Windows Store</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      blackberry
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>application URL in AppWorld</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      windows8
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>application URL in WindowsStore</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="AppRateCallbacks" href="#AppRateCallbacks"></a>AppRateCallbacks</h2>


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
      onButtonClicked
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>call back function. called when user clicked on rate-dialog buttons</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      onRateDialogShow
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>call back function. called when rate-dialog showing</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

