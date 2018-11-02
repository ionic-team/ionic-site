---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "open-native-settings"
title: "Open Native Settings"
header_sub_title: "Class in module "
doc: "Open Native Settings"
docType: "class"
---

<h1 class="api-title">Open Native Settings</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/open-native-settings/index.ts#L1">
  Improve this doc
</a>







<p>Plugin to open native screens of iOS/android settings</p>


<p>Repo:
  <a href="https://github.com/guyromb/Cordova-open-native-settings">
    https://github.com/guyromb/Cordova-open-native-settings
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-open-native-settings
$ npm install --save @ionic-native/open-native-settings
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>You can open any of these settings:</p>
<pre><code> &quot;about&quot;, // ios
 &quot;accessibility&quot;, // ios, android
 &quot;account&quot;, // ios, android
 &quot;airplane_mode&quot;, // ios, android
 &quot;apn&quot;, // android
 &quot;application_details&quot;, // ios, android
 &quot;application_development&quot;, // android
 &quot;application&quot;, // android
 &quot;autolock&quot;, // ios
 &quot;battery_optimization&quot;, // android
 &quot;bluetooth&quot;, // ios, android
 &quot;castle&quot;, // ios
 &quot;captioning&quot;, // android
 &quot;cast&quot;, // android
 &quot;cellular_usage&quot;, // ios
 &quot;configuration_list&quot;, // ios
 &quot;data_roaming&quot;, // android
 &quot;date&quot;, // ios, android
 &quot;display&quot;, // ios, android
 &quot;dream&quot;, // android
 &quot;facetime&quot;, // ios
 &quot;home&quot;, // android
 &quot;keyboard&quot;, // ios, android
 &quot;keyboard_subtype&quot;, // android
 &quot;locale&quot;, // ios, android
&quot;location&quot;, // ios, android
&quot;locations&quot;, // ios
&quot;manage_all_applications&quot;, // android
&quot;manage_applications&quot;, // android
&quot;memory_card&quot;, // android
&quot;music&quot;, // ios
&quot;music_equalizer&quot;, // ios
&quot;music_volume&quot;, // ios
&quot;network&quot;, // ios, android
&quot;nike_ipod&quot;, // ios
&quot;nfcsharing&quot;, // android
&quot;nfc_payment&quot;, // android
&quot;nfc_settings&quot;, // android
&quot;notes&quot;, // ios
&quot;notification_id&quot;, // ios
&quot;passbook&quot;, // ios
&quot;phone&quot;, // ios
&quot;photos&quot;, // ios
&quot;print&quot;, // android
&quot;privacy&quot;, // android
&quot;quick_launch&quot;, // android
&quot;reset&quot;, // ios
&quot;ringtone&quot;, // ios
&quot;browser&quot;, // ios
&quot;search&quot;, // ios, android
&quot;security&quot;, // android
&quot;settings&quot;, // ios, android
&quot;show_regulatory_info&quot;,
&quot;sound&quot;, // ios, android
&quot;software_update&quot;, // ios
&quot;storage&quot;, // ios, android
&quot;store&quot;, // ios, android
&quot;sync&quot;, // android
&quot;tethering&quot;, // ios
&quot;twitter&quot;, // ios
&quot;touch&quot;, // ios
&quot;usage&quot;, // ios, android
&quot;user_dictionary&quot;, // android
&quot;video&quot;, // ios
&quot;voice_input&quot;, // android
&quot;vpn&quot;, // ios
&quot;wallpaper&quot;, // ios
&quot;wifi_ip&quot;, // android
&quot;wifi&quot;, // ios, android
&quot;wireless&quot; // android
</code></pre>
<pre><code class="lang-typescript">import { OpenNativeSettings } from &#39;@ionic-native/open-native-settings&#39;;


constructor(private openNativeSettings: OpenNativeSettings) { }

...
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="open" href="#open"></a><code>open(setting)</code></h3>


Opens a setting dialog
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
      setting</td>
    <td>
      <code>string</code>|<code>array</code>
    </td>
    <td>
      <p>setting name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





