---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase-authentication"
title: "Firebase Authentication"
header_sub_title: "Class in module "
doc: "Firebase Authentication"
docType: "class"
---

<h1 class="api-title">Firebase Authentication</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase-authentication/index.ts#L2">
  Improve this doc
</a>







<p>Cordova plugin for Firebase Authentication</p>


<p>Repo:
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-authentication">
    https://github.com/chemerisuk/cordova-plugin-firebase-authentication
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version
$ npm install --save @ionic-native/firebase-authentication
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FirebaseAuthentication } from &#39;@ionic-native/firebase-authentication&#39;;


constructor(private firebaseAuthentication: FirebaseAuthentication) { }

...


this.firebaseAuthentication.createUserWithEmailAndPassword(&#39;test@gmail.com&#39;, &#39;123&#39;)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getIdToken" href="#getIdToken"></a><code>getIdToken(forceRefresh)</code></h3>




Returns a JWT token used to identify the user to a Firebase service.
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
      forceRefresh</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Force Refresh</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns the id token
</div><h3><a class="anchor" name="createUserWithEmailAndPassword" href="#createUserWithEmailAndPassword"></a><code>createUserWithEmailAndPassword(email,&nbsp;password)</code></h3>




Tries to create a new user account with the given email address and password.
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
      email</td>
    <td>
      
    </td>
    <td>
      <p>Email</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      
    </td>
    <td>
      <p>Password</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendEmailVerification" href="#sendEmailVerification"></a><code>sendEmailVerification()</code></h3>




Initiates email verification for the current user.



<h3><a class="anchor" name="sendPasswordResetEmail" href="#sendPasswordResetEmail"></a><code>sendPasswordResetEmail(email)</code></h3>




Triggers the Firebase Authentication backend to send a password-reset email to the given email address,
which must correspond to an existing user of your app.
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
      email</td>
    <td>
      
    </td>
    <td>
      <p>Email</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="signInWithEmailAndPassword" href="#signInWithEmailAndPassword"></a><code>signInWithEmailAndPassword(email,&nbsp;password)</code></h3>




Asynchronously signs in using an email and password.
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
      email</td>
    <td>
      
    </td>
    <td>
      <p>Email</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      
    </td>
    <td>
      <p>Password</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="verifyPhoneNumber" href="#verifyPhoneNumber"></a><code>verifyPhoneNumber(phoneNumber,&nbsp;timeout)</code></h3>




Starts the phone number verification process for the given phone number.
NOTE: Android supports auto-verify and instant device verification.
Therefore in that cases it doesn't make sense to ask for sms code.
It's recommended to register onAuthStateChanged callback to be notified on auto sign-in.
timeout [milliseconds] is the maximum amount of time you are willing to wait for SMS auto-retrieval
to be completed by the library. Maximum allowed value is 2 minutes. Use 0 to disable SMS-auto-retrieval.
If you specify a positive value less than 30 seconds, library will default to 30 seconds.
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
      phoneNumber</td>
    <td>
      
    </td>
    <td>
      <p>Phone number</p>
</td>
  </tr>
  
  <tr>
    <td>
      timeout</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Timeout</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="signInWithVerificationId" href="#signInWithVerificationId"></a><code>signInWithVerificationId(verificationId,&nbsp;smsCode)</code></h3>




Asynchronously signs in using verificationId and 6-digit SMS code.
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
      verificationId</td>
    <td>
      
    </td>
    <td>
      <p>Verification ID</p>
</td>
  </tr>
  
  <tr>
    <td>
      smsCode</td>
    <td>
      
    </td>
    <td>
      <p>SMS code</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="signInAnonymously" href="#signInAnonymously"></a><code>signInAnonymously()</code></h3>




Create and use temporary anonymous account to authenticate with Firebase.



<h3><a class="anchor" name="signInWithGoogle" href="#signInWithGoogle"></a><code>signInWithGoogle(idToken,&nbsp;accessToken)</code></h3>




Uses Google's idToken and accessToken to sign-in into firebase account. In order to retrieve those tokens follow instructions for Android and iOS
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
      idToken</td>
    <td>
      
    </td>
    <td>
      <p>ID Token</p>
</td>
  </tr>
  
  <tr>
    <td>
      accessToken</td>
    <td>
      
    </td>
    <td>
      <p>Access Token</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="signInWithFacebook" href="#signInWithFacebook"></a><code>signInWithFacebook(accessToken)</code></h3>




Uses Facebook's accessToken to sign-in into firebase account. In order to retrieve those tokens follow instructions for Android and iOS.
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
      accessToken</td>
    <td>
      
    </td>
    <td>
      <p>Access Token</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="signInWithTwitter" href="#signInWithTwitter"></a><code>signInWithTwitter(token,&nbsp;secret)</code></h3>




Uses Twitter's token and secret to sign-in into firebase account. In order to retrieve those tokens follow instructions for Android and iOS.
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
      token</td>
    <td>
      
    </td>
    <td>
      <p>Token</p>
</td>
  </tr>
  
  <tr>
    <td>
      secret</td>
    <td>
      
    </td>
    <td>
      <p>Secret</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="onAuthStateChanged" href="#onAuthStateChanged"></a><code>onAuthStateChanged()</code></h3>




Registers a block as an auth state did change listener. To be invoked when:
   - The block is registered as a listener,
   - A user with a different UID from the current user has signed in, or
   - The current user has signed out.



<h3><a class="anchor" name="setLanguageCode" href="#setLanguageCode"></a><code>setLanguageCode(languageCode)</code></h3>




Set's the current user language code. The string used to set this property must be a language code that follows BCP 47.
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
      languageCode</td>
    <td>
      
    </td>
    <td>
      <p>Language Code</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="useAppLanguage" href="#useAppLanguage"></a><code>useAppLanguage()</code></h3>




Sets languageCode to the app’s current language.



<h3><a class="anchor" name="signOut" href="#signOut"></a><code>signOut()</code></h3>




Signs out the current user and clears it from the disk cache.









