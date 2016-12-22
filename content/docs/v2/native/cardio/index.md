---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "cardio"
title: "CardIO"
header_sub_title: "Class in module "
doc: "CardIO"
docType: "class"
---







<h1 class="api-title">
  
  CardIO
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/card-io.ts#L129">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add card.io.cordova.mobilesdk</code></pre>
<p>Repo:
  <a href="https://github.com/card-io/card.io-Cordova-Plugin">
    https://github.com/card-io/card.io-Cordova-Plugin
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { CardIO } from &#39;ionic-native&#39;;


CardIO.canScan()
  .then(
    (res: boolean) =&gt; {
      if(res){
        let options = {
          requireExpiry: true,
          requireCCV: false,
          requirePostalCode: false
        };
        CardIO.scan(options);
      }
    }
  );
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="canScan"></div>
<h3><code>canScan()</code>
  
</h3>


Check whether card scanning is currently available. (May vary by
device, OS version, network connectivity, etc.)







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="scan"></div>
<h3><code>scan(options)</code>
  
</h3>


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
      options
      
      
    </td>
    <td>
      
<code>CardIOOptions</code>
    </td>
    <td>
      <p>Options for configuring the plugin</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="version"></div>
<h3><code>version()</code>
  
</h3>


Retrieve the version of the card.io library. Useful when contacting support.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to require expiry date</p>

    </td>
  </tr>
  
  <tr>
    <td>
      requireCVV
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will be prompted for the card CVV</p>

    </td>
  </tr>
  
  <tr>
    <td>
      requirePostalCode
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will be prompted for the card billing postal code.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      supressManual
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Removes the keyboard button from the scan screen.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      restrictPostalCodeToNumericOnly
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The postal code will only collect numeric input. Set this if you know the expected country&#39;s postal code has only numeric postal codes.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      keepApplicationTheme
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The theme for the card.io Activity&#39;s will be set to the theme of the application.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      requireCardholderName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will be prompted for the cardholder name</p>

    </td>
  </tr>
  
  <tr>
    <td>
      scanInstructions
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Used to display instructions to the user while they are scanning their card.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      noCamera
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set, the card will not be scanned with the camera.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      scanExpiry
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If scanExpiry is true, an attempt to extract the expiry from the card image will be made.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      languageOrLocale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The preferred language for all strings appearing in the user interface. If not set, or if set to null, defaults to the device&#39;s current language setting.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      guideColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Changes the color of the guide overlay on the camera. The color is provided in hexadecimal format (e.g. <code>#FFFFFF</code>)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      supressConfirmation
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The user will not be prompted to confirm their card number after processing.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      hideCardIOLogo
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The card.io logo will not be shown overlaid on the camera.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      useCardIOLogo
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The card.io logo will be shown instead of the PayPal logo.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      supressScan
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Once a card image has been captured but before it has been processed, this value will determine whether to continue processing as usual.</p>

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





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

