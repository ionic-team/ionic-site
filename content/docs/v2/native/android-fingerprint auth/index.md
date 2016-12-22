---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "android-fingerprint-auth"
title: "Android Fingerprint Auth"
header_sub_title: "Class in module "
doc: "Android Fingerprint Auth"
docType: "class"
---







<h1 class="api-title">
  
  Android Fingerprint Auth
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/android-fingerprint-auth.ts#L24">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-android-fingerprint-auth</code></pre>
<p>Repo:
  <a href="https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth">
    https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth
  </a>
</p>

<!-- description -->

<p>This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { AndroidFingerprintAuth } from &#39;ionic-native&#39;;

AndroidFingerprintAuth.isAvailable()
  .then((result)=&gt; {
    if(result.isAvailable){
      // it is available

      AndroidFingerprintAuth.show({ clientId: &quot;myAppName&quot;, clientSecret: &quot;so_encrypted_much_secure_very_secret&quot; })
        .then(result =&gt; {
           if(result.withFingerprint) {
             console.log(&#39;Successfully authenticated with fingerprint!&#39;);
           } else if(result.withPassword) {
             console.log(&#39;Successfully authenticated with backup password!&#39;);
           } else console.log(&#39;Didn\&#39;t authenticate!&#39;);
        })
        .catch(error =&gt; console.error(error));

    } else {
      // fingerprint auth isn&#39;t available
    }
  })
  .catch(error =&gt; console.error(error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="show"></div>
<h3><code>show(options)</code>
  
</h3>


Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.


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
      
<code>AndroidFingerprintAuthOptions</code>
    </td>
    <td>
      <p>Options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Check if service is available






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves if fingerprint auth is available on the device
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="AndroidFingerprintAuthOptions" href="#AndroidFingerprintAuthOptions"></a>AndroidFingerprintAuthOptions</h2>


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
      clientId
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used as the alias for your key in the Android Key Store.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      clientSecret
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used to encrypt the token returned upon successful fingerprint authentication.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      disableBackup
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to remove the &quot;USE BACKUP&quot; button</p>

    </td>
  </tr>
  
  <tr>
    <td>
      locale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Change the language. (en_US or es)</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

