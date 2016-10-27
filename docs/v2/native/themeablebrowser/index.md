---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "themeablebrowser"
title: "ThemeableBrowser"
header_sub_title: "Class in module "
doc: "ThemeableBrowser"
docType: "class"
---







<h1 class="api-title">
  
  ThemeableBrowser
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/themeable-browser.ts#L67">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-themeablebrowser</code></pre>
<p>Repo:
  <a href="https://github.com/initialxy/cordova-plugin-themeablebrowser">
    https://github.com/initialxy/cordova-plugin-themeablebrowser
  </a>
</p>

<!-- description -->

<p>In-app browser that allows styling.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { ThemeableBrowser } from &#39;ionic-native&#39;;

// can add options from the original InAppBrowser in a JavaScript object form (not string)
// This options object also takes additional parameters introduced by the ThemeableBrowser plugin
// This example only shows the additional parameters for ThemeableBrowser
// Note that that `image` and `imagePressed` values refer to resources that are stored in your app
let options = {
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

let browser = new ThemeableBrowser(&#39;https://ionic.io&#39;, &#39;_blank&#39;, options);
</code></pre>
<p>We suggest that you refer to the plugin&#39;s repository for additional information on usage that may not be covered here.</p>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="show"></div>
<h3>
  <code>show()</code>
  

</h3>
Displays an browser window that was opened hidden. Calling this has no effect
if the browser was already visible.




<div id="close"></div>
<h3>
  <code>close()</code>
  

</h3>
Closes the browser window.




<div id="reload"></div>
<h3>
  <code>reload()</code>
  

</h3>
Reloads the current page




<div id="executeScript"></div>
<h3>
  <code>executeScript(script)</code>
  

</h3>
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
      script
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="insertCss"></div>
<h3>
  <code>insertCss(css)</code>
  

</h3>
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
      css
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Details of the script to run, specifying either a file or code key.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="on"></div>
<h3>
  <code>on(event)</code>
  

</h3>
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
      event
      
      
    </td>
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
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

