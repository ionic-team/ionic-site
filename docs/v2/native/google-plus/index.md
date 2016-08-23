---
layout: "v2_fluid/docs_base"
version: "1.3.17"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/google-plus.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-googleplus">
    https://github.com/EddyVerbruggen/cordova-plugin-googleplus
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Web</li>
  
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { GooglePlus } from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="login"></div>
<h3><code>login(options)</code>
  
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







<div id="trySilentLogin"></div>
<h3><code>trySilentLogin(options)</code>
  
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







<div id="logout"></div>
<h3><code>logout()</code>
  
</h3>

This will clear the OAuth2 token.










<div id="disconnect"></div>
<h3><code>disconnect()</code>
  
</h3>

This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.











<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

