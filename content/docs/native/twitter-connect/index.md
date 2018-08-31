---
layout: "fluid/docs_base"
version: "4.12.1"
versionHref: "/docs/native"
path: ""
category: native
id: "twitter-connect"
title: "Twitter Connect"
header_sub_title: "Class in module "
doc: "Twitter Connect"
docType: "class"
---

<h1 class="api-title">Twitter Connect</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/twitter-connect/index.ts#L20">
  Improve this doc
</a>







<p>Plugin to use Twitter Single Sign On
Uses Twitter&#39;s Fabric SDK</p>
<pre><code class="lang-typescript">import { TwitterConnect } from &#39;@ionic-native/twitter-connect&#39;;

constructor(private twitter: TwitterConnect) { }

...

function onSuccess(response) {
  console.log(response);

  // Will console log something like:
  // {
  //   userName: &#39;myuser&#39;,
  //   userId: &#39;12358102&#39;,
  //   secret: &#39;tokenSecret&#39;
  //   token: &#39;accessTokenHere&#39;
  // }
}

this.twitter.login().then(onSuccess, onError);

this.twitter.logout().then(onLogoutSuccess, onLogoutError);
</code></pre>


<p>Repo:
  <a href="https://github.com/chroa/twitter-connect-plugin">
    https://github.com/chroa/twitter-connect-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key&gt; --variable TWITTER_KEY=<Twitter Consumer Key&gt; --variable TWITTER_SECRET=<Twitter Consumer Secret&gt;
$ npm install --save @ionic-native/twitter-connect
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>












<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="login" href="#login"></a><code>login()</code></h3>


Logs in


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;TwitterConnectResponse&gt;</code> returns a promise that resolves if logged in and rejects if failed to login
</div><h3><a class="anchor" name="logout" href="#logout"></a><code>logout()</code></h3>


Logs out


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that resolves if logged out and rejects if failed to logout
</div><h3><a class="anchor" name="showUser" href="#showUser"></a><code>showUser()</code></h3>


Returns user's profile information


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
</div>





<h2><a class="anchor" name="TwitterConnectResponse" href="#TwitterConnectResponse"></a>TwitterConnectResponse</h2>

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
      userName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Twitter Username</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      userId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Twitter User ID</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      secret
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Twitter OAuth Secret</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      token
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Twitter OAuth Token</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





