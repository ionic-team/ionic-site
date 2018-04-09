---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "native-keyboard"
title: "Native Keyboard"
header_sub_title: "Class in module "
doc: "Native Keyboard"
docType: "class"
---

<h1 class="api-title">Native Keyboard<span class="paid" title="paid">Paid</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/native-keyboard/index.ts#L171">
  Improve this doc
</a>





<p class="paid-notice">
  This plugin might require a paid license, or might take a share of your app's earnings.
  Check the <a target="_blank" rel="nofollow" href="https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard">plugin's repo</a> for more information.
</p>



<p>A cross platform WhatsApp / Messenger / Slack -style keyboard even. For your Cordova app.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard">
    https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-native-keyboard
$ npm install --save @ionic-native/native-keyboard
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code>import { NativeKeyboard } from &#39;@ionic-native/native-keyboard&#39;;


constructor(private nativeKeyboard: NativeKeyboard) { }

...
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="showMessenger" href="#showMessenger"></a><code>showMessenger(options)</code></h3>




Show messenger
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
      <code>NativeKeyboardOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="hideMessenger" href="#hideMessenger"></a><code>hideMessenger(options)</code></h3>




Hide messenger
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
      <code>NativeKeyboardOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="showMessengerKeyboard" href="#showMessengerKeyboard"></a><code>showMessengerKeyboard()</code></h3>


Programmatically pop up the keyboard again if the user dismissed it.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hideMessengerKeyboard" href="#hideMessengerKeyboard"></a><code>hideMessengerKeyboard()</code></h3>


Programmatically hide the keyboard (but not the messenger bar)



<h3><a class="anchor" name="updateMessenger" href="#updateMessenger"></a><code>updateMessenger(options)</code></h3>


Manipulate the messenger while it's open. For instance if you want to update the text programmatically based on what the user typed.
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>







<h2><a class="anchor" name="NativeKeyboardOptions" href="#NativeKeyboardOptions"></a>NativeKeyboardOptions</h2>

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
      onSubmit
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when the user submits his input. Receives the text as a single property. Make sure your page is UTF-8 encoded so Chinese and Emoji are rendered OK.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onKeyboardWillShow
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when the keyboard is about to pop up. Receives the height as a single property. (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onKeyboardDidShow
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when the keyboard popped up. Receives the height as a single property.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onKeyboardWillHide
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when the keyboard is about to close. (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onKeyboardDidHide
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when the keyboard closed.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onTextChanged
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when any key is pressed, sends the entire text as response.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      autoscrollElement
    </td>
    <td>
      <code>HTMLElement</code>
    </td>
    <td>
      <p>Highly recommended to pass in if you want to replicate the behavior of the video&#39;s above (scroll down when the keyboard opens). Pass in the scrollable DOM element containing the messages.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      scrollToBottomAfterMessengerShows
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If <code>autoscrollElement</code> was set you can also make the list scroll down initially, when the messenger bar (without the keyboard popping up) is shown.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      keepOpenAfterSubmit
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Setting this to <code>true</code> is like the video&#39;s above: the keyboard doesn&#39;t close upon submit. Defaults to <code>false</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      animated
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Makes the messenger bar slide in from the bottom. Defaults to <code>false</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      showKeyboard
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Open the keyboard when showing the messenger. Defaults to <code>false</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The default text set in the messenger input bar.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      textColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The color of the typed text. Defaults to <code>#444444</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      placeholder
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Like a regular HTML input placeholder.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      placeholderColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The color of the placeholder text. Defaults to <code>#CCCCCC</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      backgroundColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The background color of the messenger bar. Defaults to <code>#F6F6F6</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      textViewBackgroundColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The background color of the textview. Looks nicest on Android if it&#39;s the same color as the <code>backgroundColor</code> property. Defaults to <code>#F6F6F6</code>.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      textViewBorderColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The border color of the textview. Defaults to <code>#666666</code>. (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      maxChars
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Setting this &gt; 0 will make a counter show up on iOS (and ignore superfluous input on Android, for now)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      counterStyle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Options are: <code>&quot;none&quot;</code>, <code>&quot;split&quot;</code>, <code>&quot;countdown&quot;</code>, <code>&quot;countdownreversed&quot;</code>. Note that if <code>maxChars</code> is set, <code>&quot;none&quot;</code> will still show a counter. Defaults to <code>&quot;none&quot;</code>. (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Options are: &quot;default&quot;, &quot;decimalpad&quot;, &quot;phonepad&quot;, &quot;numberpad&quot;, &quot;namephonepad&quot;, &quot;number&quot;, &quot;email&quot;, &quot;twitter&quot;, &quot;url&quot;, &quot;alphabet&quot;, &quot;search&quot;, &quot;ascii&quot;. (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      appearance
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Options are: &quot;light&quot;, &quot;dark&quot;. (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      secure
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Disables things like the Emoji keyboard and the Predicive text entry bar (iOS only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      leftButton
    </td>
    <td>
      <code>NativeKeyboardLeftButton</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      rightButton
    </td>
    <td>
      <code>NativeKeyboardButton</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NativeKeyboardButton" href="#NativeKeyboardButton"></a>NativeKeyboardButton</h2>

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
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Either &quot;text&quot; (Android only currently), &quot;fontawesome&quot; or &quot;ionicon&quot;.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Depends on the type. Examples: for &quot;text&quot; use &quot;Send&quot;, for &quot;fontawesome&quot; use &quot;fa-battery-quarter&quot;, for &quot;ionicon&quot; use &quot;\uf48a&quot; (go to <a href="http://ionicons.com">http://ionicons.com</a>, right-click and inspect the icon and use the value you find in :before). Note that some fonticons are not supported as the embedded fonts in the plugin may lag behind a little. So try one of the older icons first.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      textStyle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>If type is &quot;text&quot; you can set this to either &quot;normal&quot;, &quot;bold&quot; or &quot;italic&quot;.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onPress
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>A function invoked when the button is pressed. Use this button to prompt the user what he wants to do next by for instance rendering an ActionSheet.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NativeKeyboardLeftButton" href="#NativeKeyboardLeftButton"></a>NativeKeyboardLeftButton</h2>

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
      disabledWhenTextEntered
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to <code>true</code> to disable the button once text has been entered.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NativeKeyboardUpdateMessengerOptions" href="#NativeKeyboardUpdateMessengerOptions"></a>NativeKeyboardUpdateMessengerOptions</h2>

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
      text
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Replace the messenger&#39;s text by this. The current text remains if omitted.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      caretIndex
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Position the cursor anywhere in the text range. Defaults to the end of the text.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      showKeyboard
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If <code>false</code> or omitted no changes to the keyboard state are made.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





