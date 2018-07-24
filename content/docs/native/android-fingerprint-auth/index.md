---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "android-fingerprint-auth"
title: "Android Fingerprint Auth"
header_sub_title: "Class in module "
doc: "Android Fingerprint Auth"
docType: "class"
---

<h1 class="api-title">Android Fingerprint Auth</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/android-fingerprint-auth/index.ts#L104">
  Improve this doc
</a>







<p>This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.</p>


<p>Repo:
  <a href="https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth">
    https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-android-fingerprint-auth
$ npm install --save @ionic-native/android-fingerprint-auth
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AndroidFingerprintAuth } from &#39;@ionic-native/android-fingerprint-auth&#39;;

constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }

...


this.androidFingerprintAuth.isAvailable()
  .then((result)=&gt; {
    if(result.isAvailable){
      // it is available

      this.androidFingerprintAuth.encrypt({ clientId: &#39;myAppName&#39;, username: &#39;myUsername&#39;, password: &#39;myPassword&#39; })
        .then(result =&gt; {
           if (result.withFingerprint) {
               console.log(&#39;Successfully encrypted credentials.&#39;);
               console.log(&#39;Encrypted credentials: &#39; + result.token);
           } else if (result.withBackup) {
             console.log(&#39;Successfully authenticated with backup password!&#39;);
           } else console.log(&#39;Didn\&#39;t authenticate!&#39;);
        })
        .catch(error =&gt; {
           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
             console.log(&#39;Fingerprint authentication cancelled&#39;);
           } else console.error(error)
        });

    } else {
      // fingerprint auth isn&#39;t available
    }
  })
  .catch(error =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="ERRORS" href="#ERRORS"></a><code>ERRORS</code></h3>

Convenience property containing all possible errors



<h3><a class="anchor" name="encrypt" href="#encrypt"></a><code>encrypt(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;AFAEncryptResponse&gt;</code> 
</div><h3><a class="anchor" name="decrypt" href="#decrypt"></a><code>decrypt(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;AFADecryptOptions&gt;</code> 
</div><h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Check if service is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AFAAvailableResponse&gt;</code> Returns a Promise that resolves if fingerprint auth is available on the device
</div><h3><a class="anchor" name="delete" href="#delete"></a><code>delete(options)</code></h3>


Delete the cipher used for encryption and decryption by username
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
      <code>AFADeleteOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ deleted: boolean }&gt;</code> Returns a Promise that resolves if the cipher was successfully deleted
</div>





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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used to create credential string for encrypted token and as alias to retrieve the cipher.</p>

      <em>(optional)</em>
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
      <p>Used to create credential string for encrypted token</p>

      <em>(optional)</em>
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
      <p>Required for decrypt()
Encrypted user credentials to decrypt upon successful authentication.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disableBackup
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to remove the &quot;USE BACKUP&quot; button</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      locale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Change the language. (en_US or es)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      maxAttempts
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The device max is 5 attempts. Set this parameter if you want to allow fewer than 5 attempts.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      userAuthRequired
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Require the user to authenticate with a fingerprint to authorize every use of the key.
New fingerprint enrollment will invalidate key and require backup authenticate to
re-enable the fingerprint authentication dialog.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      dialogTitle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the title of the fingerprint authentication dialog.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      dialogMessage
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the message of the fingerprint authentication dialog.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      dialogHint
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the hint displayed by the fingerprint icon on the fingerprint authentication dialog.</p>

      <em>(optional)</em>
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


<h2><a class="anchor" name="AFAAvailableResponse" href="#AFAAvailableResponse"></a>AFAAvailableResponse</h2>

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
      isAvailable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      isHardwareDetected
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      hasEnrolledFingerprints
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AFADeleteOptions" href="#AFADeleteOptions"></a>AFADeleteOptions</h2>

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
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      username
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





