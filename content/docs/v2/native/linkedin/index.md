---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "linkedin"
title: "LinkedIn"
header_sub_title: "Class in module "
doc: "LinkedIn"
docType: "class"
---







<h1 class="api-title">
  
  LinkedIn
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/linkedin/index.ts#L3">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-linkedin --variable APP_ID=YOUR_APP_ID
$ npm install --save @ionic-native/LinkedIn
</code></pre>
<p>Repo:
  <a href="https://github.com/zyramedia/cordova-plugin-linkedin">
    https://github.com/zyramedia/cordova-plugin-linkedin
  </a>
</p>

<!-- description -->

<p>A Cordova plugin that lets you use LinkedIn Native SDKs for Android and iOS.</p>
<p>Please see the <a href="https://github.com/zyramedia/cordova-plugin-linkedin#installation">plugin&#39;s repo</a> for detailed installation steps.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { LinkedIn } from &#39;@ionic-native/linkedin&#39;;

constructor(private linkedin: LinkedIn) { }

...

// check if there is an active session
this.linkedin.hasActiveSession().then((active) =&gt; console.log(&#39;has active session?&#39;, active));

// login
const scopes = [&#39;r_basicprofile&#39;, &#39;r_emailaddress&#39;, &#39;rw_company_admin&#39;, &#39;w_share&#39;];
this.linkedin.login(scopes, true)
  .then(() =&gt; console.log(&#39;Logged in!&#39;)
  .catch(e =&gt; console.log(&#39;Error logging in&#39;, e));


// get connections
this.linkedin.getRequest(&#39;people/~&#39;)
  .then(res =&gt; console.log(res))
  .catch(e =&gt; console.log(e));

// share something on profile
const body = {
  comment: &#39;Hello world!&#39;,
  visibility: {
    code: &#39;anyone&#39;
  }
};

this.linkedin.postRequest(&#39;~/shares&#39;, body)
  .then(res =&gt; console.log(res))
  .catch(e =&gt; console.log(e));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="login"></div>
<h3>
  <code>login(scopes,&nbsp;promptToInstall)</code>
  

</h3>
Login with the LinkedIn App
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
      scopes
      
    </td>
    <td>
      
<code>string[]</code>
    </td>
    <td>
      <p>Scopes to authorize</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      promptToInstall
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>set to true to prompt the user to download the LinkedIn app if it&#39;s not installed</p>

      
      
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
Clears the current session



<div id="getRequest"></div>
<h3>
  <code>getRequest(path)</code>
  

</h3>
Make a get request
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
      path
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>request path</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="postRequest"></div>
<h3>
  <code>postRequest(path,&nbsp;body)</code>
  

</h3>
Make a post request
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
      path
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>request path</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      body
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>request body</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="openProfile"></div>
<h3>
  <code>openProfile(memberId)</code>
  

</h3>
Opens a member's profile
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
      memberId
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Member id</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="hasActiveSession"></div>
<h3>
  <code>hasActiveSession()</code>
  

</h3>
Checks if there is already an existing active session. This should be used to avoid unecessary login.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> returns a promise that resolves with a boolean that indicates whether there is an active session
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

