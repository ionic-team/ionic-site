---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "ms-adal"
title: "MS ADAL"
header_sub_title: "Class in module "
doc: "MS ADAL"
docType: "class"
---

<h1 class="api-title">MS ADAL</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/ms-adal/index.ts#L50">
  Improve this doc
</a>







<p>Active Directory Authentication Library (ADAL) plugin.
Active Directory Authentication Library (<a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.identitymodel.clients.activedirectory?view=azure-dotnet">ADAL</a>)
plugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of
Windows Server Active Directory and Windows Azure Active Directory. Here you can find the source code for the library.</p>


<p>Repo:
  <a href="https://github.com/AzureAD/azure-activedirectory-library-for-cordova">
    https://github.com/AzureAD/azure-activedirectory-library-for-cordova
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-ms-adal
$ npm install --save @ionic-native/ms-adal
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { MSAdal, AuthenticationContext, AuthenticationResult } from &#39;@ionic-native/ms-adal&#39;;


constructor(private msAdal: MSAdal) {}

...

let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext(&#39;https://login.windows.net/common&#39;);

authContext.acquireTokenAsync(&#39;https://graph.windows.net&#39;, &#39;a5d92493-ae5a-4a9f-bcbf-9f1d354067d3&#39;, &#39;http://MyDirectorySearcherApp&#39;)
  .then((authResponse: AuthenticationResult) =&gt; {
    console.log(&#39;Token is&#39; , authResponse.accessToken);
    console.log(&#39;Token will expire on&#39;, authResponse.expiresOn);
  })
  .catch((e: any) =&gt; console.log(&#39;Authentication failed&#39;, e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="createAuthenticationContext" href="#createAuthenticationContext"></a><code>createAuthenticationContext()</code></h3>






<h2><a class="anchor" name="AuthenticationContext" href="#AuthenticationContext"></a>AuthenticationContext</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="authority" href="#authority"></a><code>authority()</code></h3>





<h3><a class="anchor" name="validateAuthority" href="#validateAuthority"></a><code>validateAuthority()</code></h3>





<h3><a class="anchor" name="tokenCache" href="#tokenCache"></a><code>tokenCache()</code></h3>





<h3><a class="anchor" name="acquireTokenAsync" href="#acquireTokenAsync"></a><code>acquireTokenAsync(resourceUrl,&nbsp;clientId,&nbsp;redirectUrl,&nbsp;userId,&nbsp;extraQueryParameters)</code></h3>




Acquires token using interactive flow. It always shows UI and skips token from cache.

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
      resourceUrl</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Resource identifier</p>
</td>
  </tr>
  
  <tr>
    <td>
      clientId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Client (application) identifier</p>
</td>
  </tr>
  
  <tr>
    <td>
      redirectUrl</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Redirect url for this application</p>
</td>
  </tr>
  
  <tr>
    <td>
      userId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User identifier (optional)</p>
</td>
  </tr>
  
  <tr>
    <td>
      extraQueryParameters</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Extra query parameters (optional)
                               Parameters should be escaped before passing to this method (e.g. using &#39;encodeURI()&#39;)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise</code> Promise either fulfilled with AuthenticationResult object or rejected with error
</div><h3><a class="anchor" name="acquireTokenSilentAsync" href="#acquireTokenSilentAsync"></a><code>acquireTokenSilentAsync(resourceUrl,&nbsp;clientId,&nbsp;userId)</code></h3>




Acquires token WITHOUT using interactive flow. It checks the cache to return existing result
if not expired. It tries to use refresh token if available. If it fails to get token without
displaying UI it will fail. This method guarantees that no UI will be shown to user.

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
      resourceUrl</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Resource identifier</p>
</td>
  </tr>
  
  <tr>
    <td>
      clientId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Client (application) identifier</p>
</td>
  </tr>
  
  <tr>
    <td>
      userId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User identifier (optional)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise</code> Promise either fulfilled with AuthenticationResult object or rejected with error
</div>



<h2><a class="anchor" name="AuthenticationResult" href="#AuthenticationResult"></a>AuthenticationResult</h2>

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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      accesSTokenType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      expiresOn
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      idToken
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      isMultipleResourceRefreshToken
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      status
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      statusCode
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      tenantId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      userInfo
    </td>
    <td>
      <code>UserInfo</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      createAuthorizationHeader
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Creates authorization header for web requests.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="TokenCache" href="#TokenCache"></a>TokenCache</h2>

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
      clear
    </td>
    <td>
      <code>void</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      readItems
    </td>
    <td>
      <code>Promise&lt;TokenCacheItem[]&gt;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      deleteItem
    </td>
    <td>
      <code>void</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="TokenCacheItem" href="#TokenCacheItem"></a>TokenCacheItem</h2>

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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      authority
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      clientId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      displayableId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      expiresOn
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      isMultipleResourceRefreshToken
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      resource
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      tenantId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      userInfo
    </td>
    <td>
      <code>UserInfo</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="UserInfo" href="#UserInfo"></a>UserInfo</h2>

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
      displayableId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      familyName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      givenName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      identityProvider
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      passwordChangeUrl
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      passwordExpiresOn
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      uniqueId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





