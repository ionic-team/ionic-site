---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "facebook"
title: "Facebook"
header_sub_title: "Class in module "
doc: "Facebook"
docType: "class"
---

<h1 class="api-title">Facebook</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/facebook/index.ts#L23">
  Improve this doc
</a>







<p>Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-facebook4</code>. For more info, please see the <a href="https://github.com/jeduan/cordova-plugin-facebook4">Facebook Connect</a>.</p>
<h4 id="installation">Installation</h4>
<p> To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at <a href="https://developers.facebook.com/apps">https://developers.facebook.com/apps</a>.</p>
<p><a href="https://developers.facebook.com/apps/"><img src="/img/docs/native/Facebook/1.png" alt="fb-getstarted-1"></a></p>
<p>Retrieve the <code>App ID</code> and <code>App Name</code>.</p>
<p><a href="https://developers.facebook.com/apps/"><img src="/img/docs/native/Facebook/2.png" alt="fb-getstarted-2"></a></p>
<p>Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.</p>
<pre><code class="lang-bash">ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID=&quot;123456789&quot; --variable APP_NAME=&quot;myApplication&quot;
</code></pre>
<p>After, you&#39;ll need to add the native platforms you&#39;ll be using to your app in the Facebook Developer portal under your app&#39;s Settings:</p>
<p><a href="https://developers.facebook.com/apps/"><img src="/img/docs/native/Facebook/3.png" alt="fb-getstarted-3"></a></p>
<p>Click <code>&#39;Add Platform&#39;</code>.</p>
<p><a href="https://developers.facebook.com/apps/"><img src="/img/docs/native/Facebook/4.png" alt="fb-getstarted-4"></a></p>
<p>At this point you&#39;ll need to open your project&#39;s <a href="https://cordova.apache.org/docs/en/latest/config_ref/index.html"><code>config.xml</code></a> file, found in the root directory of your project.</p>
<p>Take note of the <code>id</code> for the next step:</p>
<pre><code>&lt;widget id=&quot;com.mycompany.testapp&quot; version=&quot;0.0.1&quot; xmlns=&quot;http://www.w3.org/ns/widgets&quot; xmlns:cdv=&quot;http://cordova.apache.org/ns/1.0&quot;&gt;
</code></pre>
<p>You can also edit the <code>id</code> to whatever you&#39;d like it to be.</p>
<h4 id="ios-install">iOS Install</h4>
<p>Under &#39;Bundle ID&#39;, add the <code>id</code> from your <code>config.xml</code> file:</p>
<p><a href="https://developers.facebook.com/apps/"><img src="/img/docs/native/Facebook/5.png" alt="fb-getstarted-5"></a></p>
<h4 id="android-install">Android Install</h4>
<p>Under &#39;Google Play Package Name&#39;, add the <code>id</code> from your <code>config.xml</code> file:</p>
<p><a href="https://developers.facebook.com/apps/"><img src="/img/docs/native/Facebook/6.png" alt="fb-getstarted-6"></a></p>
<p>And that&#39;s it! You can now make calls to Facebook using the plugin.</p>
<h2 id="events">Events</h2>
<p>App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.</p>
<ul>
<li>[iOS] <a href="https://developers.facebook.com/docs/ios/app-events">https://developers.facebook.com/docs/ios/app-events</a></li>
<li>[Android] <a href="https://developers.facebook.com/docs/android/app-events">https://developers.facebook.com/docs/android/app-events</a></li>
<li>[JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success</li>
</ul>
<p>Activation events are automatically tracked for you in the plugin.</p>
<p>Events are listed on the <a href="https://www.facebook.com/insights/">insights page</a>.</p>
<p>For tracking events, see <code>logEvent</code> and <code>logPurchase</code>.</p>


<p>Repo:
  <a href="https://github.com/jeduan/cordova-plugin-facebook4">
    https://github.com/jeduan/cordova-plugin-facebook4
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
$ npm install --save @ionic-native/facebook
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Browser</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Facebook, FacebookLoginResponse } from &#39;@ionic-native/facebook&#39;;

constructor(private fb: Facebook) { }

...

this.fb.login([&#39;public_profile&#39;, &#39;user_friends&#39;, &#39;email&#39;])
  .then((res: FacebookLoginResponse) =&gt; console.log(&#39;Logged into Facebook!&#39;, res))
  .catch(e =&gt; console.log(&#39;Error logging into Facebook&#39;, e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="EVENTS" href="#EVENTS"></a><code>EVENTS</code></h3>




<h3><a class="anchor" name="login" href="#login"></a><code>login(permissions)</code></h3>


Login to Facebook to authenticate this app.

```typescript
{
  status: 'connected',
  authResponse: {
    session_key: true,
    accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
    expiresIn: 5183979,
    sig: '...',
    secret: '...',
    userID: '634565435'
  }
}

```

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
      permissions</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of <a href="https://developers.facebook.com/docs/facebook-login/permissions">permissions</a> this app has upon logging in.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;FacebookLoginResponse&gt;</code> Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
</div><h3><a class="anchor" name="logout" href="#logout"></a><code>logout()</code></h3>


Logout of Facebook.

For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves on a successful logout, and rejects if logout fails.
</div><h3><a class="anchor" name="getLoginStatus" href="#getLoginStatus"></a><code>getLoginStatus()</code></h3>


Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:

1) the user is logged into Facebook and has authenticated your application (connected)
2) the user is logged into Facebook but has not authenticated your application (not_authorized)
3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)

Resolves with a response like:

```
{
  authResponse: {
    userID: '12345678912345',
    accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
    session_Key: true,
    expiresIn: '5183738',
    sig: '...'
  },
  status: 'connected'
}
```

For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with a status, or rejects with an error
</div><h3><a class="anchor" name="getAccessToken" href="#getAccessToken"></a><code>getAccessToken()</code></h3>


Get a Facebook access token for using Facebook services.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves with an access token, or rejects with an error
</div><h3><a class="anchor" name="showDialog" href="#showDialog"></a><code>showDialog(options)</code></h3>


Show one of various Facebook dialogs. Example of options for a Share dialog:

```
{
  method: 'share',
  href: 'http://example.com',
  caption: 'Such caption, very feed.',
  description: 'Much description',
  picture: 'http://example.com/image.png'
}
```

For more options see the [Cordova plugin docs](https://github.com/jeduan/cordova-plugin-facebook4#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
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
      options</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>The dialog options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with success data, or rejects with an error
</div><h3><a class="anchor" name="api" href="#api"></a><code>api(requestPath,&nbsp;permissions)</code></h3>


Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.

For more information see:

 Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
 Graph Explorer - https://developers.facebook.com/tools/explorer
 Graph API - https://developers.facebook.com/docs/graph-api

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
      requestPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Graph API endpoint you want to call</p>
</td>
  </tr>
  
  <tr>
    <td>
      permissions</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of <a href="https://developers.facebook.com/docs/facebook-login/permissions">permissions</a> for this request.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the result of the request, or rejects with an error
</div><h3><a class="anchor" name="logEvent" href="#logEvent"></a><code>logEvent(name,&nbsp;params,&nbsp;valueToSum)</code></h3>




Log an event.  For more information see the Events section above.

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
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the event</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>An object containing extra data to log with the event<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      valueToSum</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>any value to be added to added to a sum on each event<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="logPurchase" href="#logPurchase"></a><code>logPurchase(value,&nbsp;currency)</code></h3>


Log a purchase. For more information see the Events section above.

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
      value</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Value of the purchase.</p>
</td>
  </tr>
  
  <tr>
    <td>
      currency</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The currency, as an <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency code</a></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





