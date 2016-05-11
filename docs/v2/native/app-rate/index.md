---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/apprate.ts#L2'>
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

<pre><code class="lang-js">import {AppRate} from &#39;ionic-native&#39;;


AppRate.preferences.storeAppURL.ios = &#39;&lt;my_app_id&gt;&#39;;
AppRate.preferences.storeAppURL.android = &#39;market://details?id=&lt;package_name&gt;&#39;;
AppRate.preferences.storeAppURL.blackberry = &#39;appworld://content/[App Id]/&#39;;
AppRate.preferences.storeAppURL.windows8 = &#39;ms-windows-store:Review?name=&lt;the Package Family Name of the application&gt;&#39;;
AppRate.promptForRating();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="preferences"></div>
<h3><code>preferences()</code>

</h3>

Rating dialog preferences

| Option                       | Type       | Default | Description                                                                            |
|------------------------------|------------|---------|----------------------------------------------------------------------------------------|
| useLanguage                  | `String`   | null    | custom BCP 47 language tag                                                             |
| displayAppName               | `String`   | ''      | custom application title                                                               |
| promptAgainForEachNewVersion | `Boolean`  | true    | show dialog again when application version will be updated                             |
| usesUntilPrompt              | `Integer`  | 3       | count of runs of application before dialog will be displayed                           |
| openStoreInApp               | `Boolean`  | false   | leave app or no when application page opened in app store (now supported only for iOS) |
| useCustomRateDialog          | `Boolean`  | false   | use custom view for rate dialog                                                        |
| callbacks.onButtonClicked    | `Function` | null    | call back function. called when user clicked on rate-dialog buttons                    |
| callbacks.onRateDialogShow   | `Function` | null    | call back function. called when rate-dialog showing                                    |
| storeAppURL.ios              | `String`   | null    | application id in AppStore                                                             |
| storeAppURL.android          | `String`   | null    | application URL in GooglePlay                                                          |
| storeAppURL.blackberry       | `String`   | null    | application URL in AppWorld                                                            |
| storeAppURL.windows8         | `String`   | null    | application URL in WindowsStore                                                        |
| customLocale                 | `Object`   | null    | custom locale object                                                                   |








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








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

