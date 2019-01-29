---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase-dynamic-links"
title: "Firebase Dynamic Links"
header_sub_title: "Class in module "
doc: "Firebase Dynamic Links"
docType: "class"
---

<h1 class="api-title">Firebase Dynamic Links<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase-dynamic-links/index.ts#L7">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks/issues">plugin repo</a>.
</p>




<p>Cordova plugin for Firebase Dynamic Links</p>
<p>Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.</p>
<p>Preferences:</p>
<p>Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).</p>
<p>config.xml:</p>
<pre><code class="lang-xml">&lt;platform name=&quot;ios&quot;&gt;
    &lt;preference name=&quot;GoogleIOSClientId&quot; value=&quot;...&quot; /&gt;
&lt;/platform&gt;
&lt;platform name=&quot;android&quot;&gt;
    &lt;preference name=&quot;GoogleAndroidClientId&quot; value=&quot;...&quot; /&gt;
&lt;/platform&gt;
</code></pre>


<p>Repo:
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks">
    https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"
$ npm install --save @ionic-native/firebase-dynamic-links@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FirebaseDynamicLinks } from &#39;@ionic-native/firebase-dynamic-links&#39;;


constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }

...
// Handle the logic here after opening the app with the Dynamic link
this.firebaseDynamicLinks.onDynamicLink()
  .subscribe((res: any) =&gt; console.log(res), (error:any) =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="onDynamicLink" href="#onDynamicLink"></a><code>onDynamicLink()</code></h3>




Registers callback that is triggered on each dynamic link click.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;IDynamicLink&gt;</code> Returns an observable
</div>





<h2><a class="anchor" name="DynamicLinksOptions" href="#DynamicLinksOptions"></a>DynamicLinksOptions</h2>





