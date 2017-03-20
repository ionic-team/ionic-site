---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "google-plus"
title: "Google Plus"
header_sub_title: "Class in module "
doc: "Google Plus"
docType: "class"
---







<h1 class="api-title">
  
  Google Plus
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/google-plus/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>
  $ ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid
  $ npm install --save @ionic-native/window.plugins.googleplus
</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-googleplus">
    https://github.com/EddyVerbruggen/cordova-plugin-googleplus
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Web</li><li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { GooglePlus } from &#39;@ionic-native/google-plus&#39;;

constructor(private googlePlus: GooglePlus) { }

...

this.googlePlus.login()
  .then(res =&gt; console.log(res))
  .catch(err =&gt; console.error(err));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="login"></div>
<h3>
  <code>login(options)</code>
  

</h3>
The login function walks the user through the Google Auth process.
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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="trySilentLogin"></div>
<h3>
  <code>trySilentLogin(options)</code>
  

</h3>
You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="logout"></div>
<h3>
  <code>logout()</code>
  

</h3>
This will clear the OAuth2 token.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="disconnect"></div>
<h3>
  <code>disconnect()</code>
  

</h3>
This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

