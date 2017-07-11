---
layout: "fluid/docs_base"
version: "4.0.0"
versionHref: "/docs/native"
path: ""
category: native
id: "authenticationcontext"
title: "AuthenticationContext"
header_sub_title: "Class in module "
doc: "AuthenticationContext"
docType: "class"
---

<h1 class="api-title">AuthenticationContext</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/ms-adal/index.ts#L106">
  Improve this doc
</a>











<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="authority" href="#authority"></a><code>authority</code></h3>





<h3><a class="anchor" name="validateAuthority" href="#validateAuthority"></a><code>validateAuthority</code></h3>





<h3><a class="anchor" name="tokenCache" href="#tokenCache"></a><code>tokenCache</code></h3>





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





