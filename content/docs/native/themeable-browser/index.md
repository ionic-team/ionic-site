---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "themeable-browser"
title: "Themeable Browser"
header_sub_title: "Class in module "
doc: "Themeable Browser"
docType: "class"
---

<h1 class="api-title">Themeable Browser</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/themeable-browser/index.ts#L134">
  Improve this doc
</a>







<p>In-app browser that allows styling.</p>


<p>Repo:
  <a href="https://github.com/initialxy/cordova-plugin-themeablebrowser">
    https://github.com/initialxy/cordova-plugin-themeablebrowser
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-themeablebrowser
$ npm install --save @ionic-native/themeable-browser
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>Blackberry 10</li><li>Browser</li><li>FirefoxOS</li><li>iOS</li><li>Ubuntu</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from &#39;@ionic-native/themeable-browser&#39;;

constructor(private themeableBrowser: ThemeableBrowser) { }

...

// can add options from the original InAppBrowser in a JavaScript object form (not string)
// This options object also takes additional parameters introduced by the ThemeableBrowser plugin
// This example only shows the additional parameters for ThemeableBrowser
// Note that that `image` and `imagePressed` values refer to resources that are stored in your app
const options: ThemeableBrowserOptions = {
     statusbar: {
         color: &#39;#ffffffff&#39;
     },
     toolbar: {
         height: 44,
         color: &#39;#f0f0f0ff&#39;
     },
     title: {
         color: &#39;#003264ff&#39;,
         showPageTitle: true
     },
     backButton: {
         image: &#39;back&#39;,
         imagePressed: &#39;back_pressed&#39;,
         align: &#39;left&#39;,
         event: &#39;backPressed&#39;
     },
     forwardButton: {
         image: &#39;forward&#39;,
         imagePressed: &#39;forward_pressed&#39;,
         align: &#39;left&#39;,
         event: &#39;forwardPressed&#39;
     },
     closeButton: {
         image: &#39;close&#39;,
         imagePressed: &#39;close_pressed&#39;,
         align: &#39;left&#39;,
         event: &#39;closePressed&#39;
     },
     customButtons: [
         {
             image: &#39;share&#39;,
             imagePressed: &#39;share_pressed&#39;,
             align: &#39;right&#39;,
             event: &#39;sharePressed&#39;
         }
     ],
     menu: {
         image: &#39;menu&#39;,
         imagePressed: &#39;menu_pressed&#39;,
         title: &#39;Test&#39;,
         cancel: &#39;Cancel&#39;,
         align: &#39;right&#39;,
         items: [
             {
                 event: &#39;helloPressed&#39;,
                 label: &#39;Hello World!&#39;
             },
             {
                 event: &#39;testPressed&#39;,
                 label: &#39;Test!&#39;
             }
         ]
     },
     backButtonCanClose: true
};

const browser: ThemeableBrowserObject = this.themeableBrowser.create(&#39;https://ionic.io&#39;, &#39;_blank&#39;, options);
</code></pre>
<p>We suggest that you refer to the plugin&#39;s repository for additional information on usage that may not be covered here.</p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(url,&nbsp;target,&nbsp;styleOptions)</code></h3>

Creates a browser instance
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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL to open</p>
</td>
  </tr>
  
  <tr>
    <td>
      target</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Target</p>
</td>
  </tr>
  
  <tr>
    <td>
      styleOptions</td>
    <td>
      <code>ThemeableBrowserOptions</code>
    </td>
    <td>
      <p>Themeable browser options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>ThemeableBrowserObject</code> 
</div>

<h2><a class="anchor" name="ThemeableBrowserObject" href="#ThemeableBrowserObject"></a>ThemeableBrowserObject</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Displays an browser window that was opened hidden. Calling this has no effect
if the browser was already visible.



<h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>




Closes the browser window.



<h3><a class="anchor" name="reload" href="#reload"></a><code>reload()</code></h3>




Reloads the current page



<h3><a class="anchor" name="executeScript" href="#executeScript"></a><code>executeScript(script)</code></h3>


Injects JavaScript code into the browser window.
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
      script</td>
    <td>
      
    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="insertCss" href="#insertCss"></a><code>insertCss(css)</code></h3>


Injects CSS into the browser window.
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
      css</td>
    <td>
      
    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="on" href="#on"></a><code>on(event)</code></h3>




A method that allows you to listen to events happening in the browser.
Available events are: `ThemeableBrowserError`, `ThemeableBrowserWarning`, `critical`, `loadfail`, `unexpected`, `undefined`
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
      event</td>
    <td>
      
    </td>
    <td>
      <p>Event name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
</div>



<h2><a class="anchor" name="ThemeableBrowserButton" href="#ThemeableBrowserButton"></a>ThemeableBrowserButton</h2>

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
      wwwImage
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      wwwImagePressed
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      imagePressed
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      wwwImageDensity
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      align
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      event
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="ThemeableBrowserOptions" href="#ThemeableBrowserOptions"></a>ThemeableBrowserOptions</h2>

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
      statusbar
    </td>
    <td>
      <code>{
    color: string;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      toolbar
    </td>
    <td>
      <code>{
    height?: number;
    color?: string;
    image?: string;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>{
    color?: string;
    staticText?: string;
    showPageTitle?: boolean;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      backButton
    </td>
    <td>
      <code>ThemeableBrowserButton</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      forwardButton
    </td>
    <td>
      <code>ThemeableBrowserButton</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      closeButton
    </td>
    <td>
      <code>ThemeableBrowserButton</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      customButtons
    </td>
    <td>
      <code>ThemeableBrowserButton[]</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      menu
    </td>
    <td>
      <code>{
    image?: string;
    imagePressed?: string;
    title?: string;
    cancel?: string;
    align?: string;
    items?: {
      event: string;
      label: string;
    }[];
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      backButtonCanClose
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
      disableAnimation
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
      location
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hidden
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
      clearcache
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
      clearsessioncache
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
      zoom
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hardwareback
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      mediaPlaybackRequiresUserAction
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      shouldPauseOnSuspsend
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      closebuttoncaption
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disallowoverscroll
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableViewportScale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      allowInlineMediaPlayback
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      keyboardDisplayRequiresUserAction
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      suppressesIncrementalRendering
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      presentationstyle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      transitionstyle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      toolbarposition
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      fullscreen
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





