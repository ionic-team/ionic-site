---
layout: "fluid/docs_base"
version: "4.12.1"
versionHref: "/docs/native"
path: ""
category: native
id: "siri-shortcuts"
title: "Siri Shortcuts"
header_sub_title: "Class in module "
doc: "Siri Shortcuts"
docType: "class"
---

<h1 class="api-title">Siri Shortcuts<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/siri-shortcuts/index.ts#L13">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/bartwesselink/cordova-plugin-siri-shortcuts/issues">plugin repo</a>.
</p>




<p>This plugin only works when your app is built with XCode 10 Beta. Shortcuts will only appear on iOS-versions &gt;= 12.0</p>
<p>This plugin enables the use of Siri shortcuts in Cordova. Siri Shortcuts enable the user to perform certain actions by adding them to Siri.
After you have donated a shortcut to Siri, it will appear in the settings menu, after which the user is able to add the action. You can check
whether the user launched your app through a shortcut by calling <code>getActivatedShortcut()</code> when the app is resumed. It will return <code>null</code>
if it has not been launched by Siri, and if it did, it will return an object with <code>SiriShortcut</code> properties.</p>


<p>Repo:
  <a href="https://github.com/bartwesselink/cordova-plugin-siri-shortcuts">
    https://github.com/bartwesselink/cordova-plugin-siri-shortcuts
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-siri-shortcuts
$ npm install --save @ionic-native/siri-shortcuts
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SiriShortcuts } from &#39;@ionic-native/siri-shortcuts&#39;;


constructor(private siriShortcuts: SiriShortcuts) { }

...


this.siriShortcuts.donate({
      persistentIdentifier: &#39;open-my-app&#39;,
      title: &#39;Open my app&#39;,
      suggestedInvocationPhrase: &#39;Open my app&#39;,
      userInfo: { username: &#39;username&#39; },
      isEligibleForSearch: true,
      isEligibleForPrediction: true,
  })
  .then(() =&gt; console.log(&#39;Shortcut donated.&#39;))
  .catch((error: any) =&gt; console.error(error));

this.siriShortcuts.present({
      persistentIdentifier: &#39;open-my-app&#39;,
      title: &#39;Open my app&#39;,
      suggestedInvocationPhrase: &#39;Open my app&#39;,
      userInfo: { username: &#39;username&#39; },
  })
  .then(() =&gt; console.log(&#39;Shortcut added.&#39;))
  .catch((error: any) =&gt; console.error(error));

this.siriShortcuts.remove(&#39;open-my-app&#39;)
  .then(() =&gt; console.log(&#39;Shortcut removed.&#39;))
  .catch((error: any) =&gt; console.error(error));

this.siriShortcuts.removeAll()
  .then(() =&gt; console.log(&#39;All shortcuts removed removed.&#39;))
  .catch((error: any) =&gt; console.error(error));

this.siriShortcuts.getActivatedShortcut()
  .then((data: SiriShortcut|null) =&gt; console.log(data))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="donate" href="#donate"></a><code>donate(options,&nbsp;options.persistentIdentifier,&nbsp;options.title,&nbsp;options.suggestedInvocationPhrase,&nbsp;options.userInfo,&nbsp;options.isEligibleForSearch,&nbsp;options.isEligibleForPrediction)</code></h3>


Donate shortcut to Siri
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
      <code>SiriShortcutOptions</code>
    </td>
    <td>
      <p>Options to specify for the donation</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.persistentIdentifier</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify an identifier to uniquely identify the shortcut, in order to be able to remove it</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify a title for the shortcut, which is visible to the user as the name of the shortcut</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.suggestedInvocationPhrase</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify the phrase to give the user some inspiration on what the shortcut to call</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.userInfo</td>
    <td>
      <code>object</code>
    </td>
    <td>
      <p>Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.isEligibleForSearch</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>This value defaults to true, set this value to make it searchable in Siri</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.isEligibleForPrediction</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>This value defaults to true, set this value to set whether the shortcut eligible for prediction</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Promise<void>

</div><h3><a class="anchor" name="present" href="#present"></a><code>present(options,&nbsp;options.persistentIdentifier,&nbsp;options.title,&nbsp;options.suggestedInvocationPhrase,&nbsp;options.userInfo,&nbsp;options.isEligibleForSearch,&nbsp;options.isEligibleForPrediction)</code></h3>


Present shortcut to the user, will popup a view controller asking the user to add it to Siri
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
      <code>SiriShortcutOptions</code>
    </td>
    <td>
      <p>Options to specify for the donation</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.persistentIdentifier</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify an identifier to uniquely identify the shortcut, in order to be able to remove it</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify a title for the shortcut, which is visible to the user as the name of the shortcut</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.suggestedInvocationPhrase</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify the phrase to give the user some inspiration on what the shortcut to call</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.userInfo</td>
    <td>
      <code>object</code>
    </td>
    <td>
      <p>Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.isEligibleForSearch</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>This value defaults to true, set this value to make it searchable in Siri</p>
</td>
  </tr>
  
  <tr>
    <td>
      options.isEligibleForPrediction</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>This value defaults to true, set this value to set whether the shortcut eligible for prediction</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Promise<void>

</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove(persistentIdentifiers)</code></h3>


Remove shortcuts based on identifiers
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
      persistentIdentifiers</td>
    <td>
      <code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>Specify which shortcut(s) to delete by their persistent identifiers</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Promise<void>

</div><h3><a class="anchor" name="removeAll" href="#removeAll"></a><code>removeAll()</code></h3>


Remove all shortcuts from the application


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Promise<void>

</div><h3><a class="anchor" name="getActivatedShortcut" href="#getActivatedShortcut"></a><code>getActivatedShortcut()</code></h3>


Get the current clicked user activity, and return `null` if none


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Promise<SiriShortcut|null>

</div>





<h2><a class="anchor" name="SiriShortcut" href="#SiriShortcut"></a>SiriShortcut</h2>

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
      persistentIdentifier
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      title
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
      <code>{ [key: string]: string; }</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      suggestedInvocationPhrase
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="SiriShortcutOptions" href="#SiriShortcutOptions"></a>SiriShortcutOptions</h2>

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
      isEligibleForSearch
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isEligibleForPrediction
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





