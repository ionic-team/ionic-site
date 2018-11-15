---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "line-login"
title: "Line Login"
header_sub_title: "Class in module "
doc: "Line Login"
docType: "class"
---

<h1 class="api-title">Line Login</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/line-login/index.ts#L37">
  Improve this doc
</a>







<p>The function login, logs out, acquires, verifies, and refreshes the access token. The version of LineSDK you are using is as follows.</p>


<p>Repo:
  <a href="https://github.com/nrikiji/cordova-line-login-plugin">
    https://github.com/nrikiji/cordova-line-login-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID="your_line_channel_id"
$ npm install --save @ionic-native/line-login
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { LineLogin } from &#39;@ionic-native/line-login&#39;;


constructor(private lineLogin: LineLogin) { }

...


this.lineLogin.initialize({ channel_id: &quot;xxxxxxxxxx&quot; })

this.lineLogin.login()
  .then(result =&gt; console.log(result))
  .catch(error =&gt; console.log(error))
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="initialize" href="#initialize"></a><code>initialize(param)</code></h3>


Initialize
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
      param</td>
    <td>
      
    </td>
    <td>
      <p>LineLoginParams</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="login" href="#login"></a><code>login()</code></h3>




Login


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;LineLoginProfile&gt;</code> 
</div><h3><a class="anchor" name="loginWeb" href="#loginWeb"></a><code>loginWeb()</code></h3>




Login with Web
(iOS only)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;LineLoginProfile&gt;</code> 
</div><h3><a class="anchor" name="logout" href="#logout"></a><code>logout()</code></h3>


Logout


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getAccessToken" href="#getAccessToken"></a><code>getAccessToken()</code></h3>


Get Access Token


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;LineLoginAccessToken&gt;</code> 
</div><h3><a class="anchor" name="verifyAccessToken" href="#verifyAccessToken"></a><code>verifyAccessToken()</code></h3>


Verify AccessToken


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="refreshAccessToken" href="#refreshAccessToken"></a><code>refreshAccessToken()</code></h3>


Refresh Access Token


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="LineLoginParams" href="#LineLoginParams"></a>LineLoginParams</h2>

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
      channel_id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Line Channel ID</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="LineLoginProfile" href="#LineLoginProfile"></a>LineLoginProfile</h2>

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
      userID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Line User ID</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      pictureURL
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Line Profile Image URL</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      displayName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Line Profile Name</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="LineLoginAccessToken" href="#LineLoginAccessToken"></a>LineLoginAccessToken</h2>

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
      accessToken
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Line Access Token</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      expireTime
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Line Access Token Expire Time</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





