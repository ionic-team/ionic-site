---
layout: "v2_fluid/docs_base"
version: "3.1.0"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/android-fingerprint-auth/index.ts#L96">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-android-fingerprint-auth
$ npm install --save @ionic-native/
</code></pre>
<p>Repo:
  <a href="https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth">
    https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth
  </a>
</p>

<!-- description -->

<p>This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { AndroidFingerprintAuth, AFAAuthOptions } from &#39;@ionic-native/android-fingerprint-auth&#39;;

constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }

...


this.androidFingerprintAuth.isAvailable()
  .then((result)=&gt; {
    if(result.isAvailable){
      // it is available

      this.androidFingerprintAuth.encrypt({ clientId: &quot;myAppName&quot;, username: &quot;myUsername&quot;, password: &quot;myPassword&quot; })
        .then(result =&gt; {
           if (result.withFingerprint) {
               console.log(&quot;Successfully encrypted credentials.&quot;);
               console.log(&quot;Encrypted credentials: &quot; + result.token);
           } else if (result.withBackup) {
             console.log(&#39;Successfully authenticated with backup password!&#39;);
           } else console.log(&#39;Didn\&#39;t authenticate!&#39;);
        })
        .catch(error =&gt; {
           if (error === &quot;Cancelled&quot;) {
             console.log(&quot;Fingerprint authentication cancelled&quot;);
           } else console.error(error)
        });

    } else {
      // fingerprint auth isn&#39;t available
    }
  })
  .catch(error =&gt; console.error(error));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="encrypt"></div>
<h3>
  <code>encrypt(options)</code>
  

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
      
<code>AFAAuthOptions</code>
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
</div><div id="decrypt"></div>
<h3>
  <code>decrypt(options)</code>
  

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
      
<code>AFAAuthOptions</code>
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
</div><div id="isAvailable"></div>
<h3>
  <code>isAvailable()</code>
  

</h3>
Check if service is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves if fingerprint auth is available on the device
</div><div id="delete"></div>
<h3>
  <code>delete()</code>
  

</h3>
Delete the cipher used for encryption and decryption by username


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves if the cipher was successfully deleted
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="AFAAuthOptions" href="#AFAAuthOptions"></a>AFAAuthOptions</h2>


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
      <p>Required
Used as the alias for your key in the Android Key Store.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      username
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used to create credential string for encrypted token and as alias to retrieve the cipher.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      password
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used to create credential string for encrypted token</p>

    </td>
  </tr>
  
  <tr>
    <td>
      token
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Required for decrypt()
Encrypted user credentials to decrypt upon successful authentication.</p>

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
  
  <tr>
    <td>
      maxAttempts
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The device max is 5 attempts. Set this parameter if you want to allow fewer than 5 attempts.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      userAuthRequired
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Require the user to authenticate with a fingerprint to authorize every use of the key.
New fingerprint enrollment will invalidate key and require backup authenticate to
re-enable the fingerprint authentication dialog.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      dialogTitle
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the title of the fingerprint authentication dialog.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      dialogMessage
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the message of the fingerprint authentication dialog.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      dialogHint
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the hint displayed by the fingerprint icon on the fingerprint authentication dialog.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="AFAEncryptResponse" href="#AFAEncryptResponse"></a>AFAEncryptResponse</h2>


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
      withFingerprint
      
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Biometric authentication</p>

    </td>
  </tr>
  
  <tr>
    <td>
      withBackup
      
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Authentication using backup credential activity</p>

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
      <p>base64encoded string representation of user credentials</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="AFADecryptOptions" href="#AFADecryptOptions"></a>AFADecryptOptions</h2>


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
      withFingerprint
      
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Biometric authentication</p>

    </td>
  </tr>
  
  <tr>
    <td>
      withBackup
      
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Authentication using backup credential activity</p>

    </td>
  </tr>
  
  <tr>
    <td>
      password
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>FingerprintAuth.CipherMode.DECRYPT
Decrypted password</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

