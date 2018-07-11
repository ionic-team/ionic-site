---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "card-io"
title: "Card IO"
header_sub_title: "Class in module "
doc: "Card IO"
docType: "class"
---

<h1 class="api-title">Card IO</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/card-io/index.ts#L125">
  Improve this doc
</a>









<p>Repo:
  <a href="https://github.com/card-io/card.io-Cordova-Plugin">
    https://github.com/card-io/card.io-Cordova-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add card.io.cordova.mobilesdk
$ npm install --save @ionic-native/card-io
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>This plug-in exposes card.io credit card scanning.</p>
<p><strong>NOTE</strong>: If you would like to actually process a credit card charge, you might be interested in the <a href="https://github.com/paypal/PayPal-Cordova-Plugin">PayPal Cordova Plug-in</a>.</p>
<p>Requires Cordova plugin: <code>card.io.cordova.mobilesdk</code>. For more info, please see the <a href="https://github.com/card-io/card.io-Cordova-Plugin">Card IO plugin docs</a>.</p>
<p>Note: For use with iOS 10 + When building your app with the iOS 10 SDK +, you have to add some info to the info.plist file. This is due to increased security in iOS 10. Go to your app directory and search for the <your app name>Info.plist file. Add the following lines in the main <dict> element.</p>
<pre><code class="lang-xml">&lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;To scan credit cards.&lt;/string&gt;
</code></pre>
<pre><code class="lang-typescript">import { CardIO } from &#39;@ionic-native/card-io&#39;;

constructor(private cardIO: CardIO) { }

...


this.cardIO.canScan()
  .then(
    (res: boolean) =&gt; {
      if(res){
        let options = {
          requireExpiry: true,
          requireCVV: false,
          requirePostalCode: false
        };
        this.cardIO.scan(options);
      }
    }
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="canScan" href="#canScan"></a><code>canScan()</code></h3>


Check whether card scanning is currently available. (May vary by
device, OS version, network connectivity, etc.)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="scan" href="#scan"></a><code>scan(options)</code></h3>


Scan a credit card with card.io.
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
      <code>CardIOOptions</code>
    </td>
    <td>
      <p>Options for configuring the plugin<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="version" href="#version"></a><code>version()</code></h3>


Retrieve the version of the card.io library. Useful when contacting support.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





<h2><a class="anchor" name="CardIOOptions" href="#CardIOOptions"></a>CardIOOptions</h2>

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
      requireExpiry
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to require expiry date</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      requireCVV
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will be prompted for the card CVV</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      requirePostalCode
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will be prompted for the card billing postal code.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      suppressManual
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Removes the keyboard button from the scan screen.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      restrictPostalCodeToNumericOnly
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The postal code will only collect numeric input. Set this if you know the expected country&#39;s postal code has only numeric postal codes.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      keepApplicationTheme
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The theme for the card.io Activity&#39;s will be set to the theme of the application.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      requireCardholderName
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will be prompted for the cardholder name</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      scanInstructions
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used to display instructions to the user while they are scanning their card.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      noCamera
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set, the card will not be scanned with the camera.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      scanExpiry
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If scanExpiry is true, an attempt to extract the expiry from the card image will be made.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      languageOrLocale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The preferred language for all strings appearing in the user interface. If not set, or if set to null, defaults to the device&#39;s current language setting.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      guideColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Changes the color of the guide overlay on the camera. The color is provided in hexadecimal format (e.g. <code>#FFFFFF</code>)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      supressConfirmation
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will not be prompted to confirm their card number after processing.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hideCardIOLogo
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The card.io logo will not be shown overlaid on the camera.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      useCardIOLogo
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The card.io logo will be shown instead of the PayPal logo.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      supressScan
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Once a card image has been captured but before it has been processed, this value will determine whether to continue processing as usual.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CardIOResponse" href="#CardIOResponse"></a>CardIOResponse</h2>

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
      cardType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Card type</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      redactedCardNumber
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Masked card number, showing only last 4 digits</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      cardNumber
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Full card number</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      expiryMonth
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Expiry month</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      expiryYear
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Expiry year</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      cvv
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>CVV</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      postalCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Postal code</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      cardholderName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Cardholder name</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





