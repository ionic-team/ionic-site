---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "app-rate"
title: "App Rate"
header_sub_title: "Class in module "
doc: "App Rate"
docType: "class"
---

<h1 class="api-title">App Rate</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-rate/index.ts#L125">
  Improve this doc
</a>







<p>The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.</p>
<p>Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the <a href="https://github.com/pushandplay/cordova-plugin-apprate">AppRate plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/pushandplay/cordova-plugin-apprate">
    https://github.com/pushandplay/cordova-plugin-apprate
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-apprate
$ npm install --save @ionic-native/app-rate
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppRate } from &#39;@ionic-native/app-rate&#39;;

constructor(private appRate: AppRate) { }

...
// set certain preferences
this.appRate.preferences.storeAppURL = {
  ios: &#39;&lt;app_id&gt;&#39;,
  android: &#39;market://details?id=&lt;package_name&gt;&#39;,
  windows: &#39;ms-windows-store://review/?ProductId=&lt;store_id&gt;&#39;
};

this.appRate.promptForRating(true);

// or, override the whole preferences object
this.appRate.preferences = {
  usesUntilPrompt: 3,
  storeAppURL: {
   ios: &#39;&lt;app_id&gt;&#39;,
   android: &#39;market://details?id=&lt;package_name&gt;&#39;,
   windows: &#39;ms-windows-store://review/?ProductId=&lt;store_id&gt;&#39;
  }
};

this.appRate.promptForRating(false);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="preferences" href="#preferences"></a><code>preferences</code></h3>


Configure various settings for the Rating View.
See table below for options



<h3><a class="anchor" name="promptForRating" href="#promptForRating"></a><code>promptForRating(immediately)</code></h3>


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
      immediately</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Show the rating prompt immediately.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="navigateToAppStore" href="#navigateToAppStore"></a><code>navigateToAppStore()</code></h3>


Immediately send the user to the app store rating page









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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      simpleMode
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Simple Mode to display the rate dialog directly and bypass negative feedback filtering flow</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      inAppReview
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>leave app or no when application page opened in app store (now supported only for iOS). Defaults to <code>false</code></p>

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      customLocale
    </td>
    <td>
      <code>AppRateCustomLocale</code>
    </td>
    <td>
      <p>Custom locale object</p>

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      handleNegativeFeedback
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>call back function. called when user clicked on negative feedback</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AppRateCustomLocal" href="#AppRateCustomLocal"></a>AppRateCustomLocal</h2>





