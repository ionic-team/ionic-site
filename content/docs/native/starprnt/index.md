---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "starprnt"
title: "StarPRNT"
header_sub_title: "Class in module "
doc: "StarPRNT"
docType: "class"
---

<h1 class="api-title">StarPRNT</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/star-prnt/index.ts#L621">
  Improve this doc
</a>







<ul>
<li>Ionic Native wrappers for the starprnt cordova plugin for Star Micronics Bluetooth/LAN printers</li>
</ul>


<p>Repo:
  <a href="https://github.com/auctifera-josed/starprnt">
    https://github.com/auctifera-josed/starprnt
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-starprnt
$ npm install --save @ionic-native/star-prnt
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { StarPRNT } from &#39;@ionic-native/star-prnt&#39;;


constructor(private starprnt: StarPRNT) { }

...


this.starprnt.portDiscovery(&#39;all&#39;)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="Emulation" href="#Emulation"></a><code>Emulation</code></h3>

Constant for Emulation



<h3><a class="anchor" name="Encoding" href="#Encoding"></a><code>Encoding</code></h3>

Constant for possible Encoding



<h3><a class="anchor" name="CodePageType" href="#CodePageType"></a><code>CodePageType</code></h3>

CodePageType constants



<h3><a class="anchor" name="InternationalType" href="#InternationalType"></a><code>InternationalType</code></h3>

Constant for possible InternationalType



<h3><a class="anchor" name="FontStyleType" href="#FontStyleType"></a><code>FontStyleType</code></h3>

Constant for possible FontStyleType



<h3><a class="anchor" name="CutPaperAction" href="#CutPaperAction"></a><code>CutPaperAction</code></h3>

Constant for possible CutPaperAction



<h3><a class="anchor" name="BlackMarkType" href="#BlackMarkType"></a><code>BlackMarkType</code></h3>

Constant for possible BlackMarkType



<h3><a class="anchor" name="AlignmentPosition" href="#AlignmentPosition"></a><code>AlignmentPosition</code></h3>

Constant for possible AlignmentPosition



<h3><a class="anchor" name="LogoSize" href="#LogoSize"></a><code>LogoSize</code></h3>

Constant for possible LogoSize



<h3><a class="anchor" name="BarcodeSymbology" href="#BarcodeSymbology"></a><code>BarcodeSymbology</code></h3>

Constant for possible BarcodeSymbology



<h3><a class="anchor" name="BarcodeWidth" href="#BarcodeWidth"></a><code>BarcodeWidth</code></h3>

Constant for possible BarcodeWidth



<h3><a class="anchor" name="QrCodeModel" href="#QrCodeModel"></a><code>QrCodeModel</code></h3>

Constant for possible QrCodeModel



<h3><a class="anchor" name="QrCodeLevel" href="#QrCodeLevel"></a><code>QrCodeLevel</code></h3>

Constant for possible QrCodeLevel



<h3><a class="anchor" name="BitmapConverterRotation" href="#BitmapConverterRotation"></a><code>BitmapConverterRotation</code></h3>

Constant for possible BitmapConverterRotation



<h3><a class="anchor" name="portDiscovery" href="#portDiscovery"></a><code>portDiscovery(type)</code></h3>


Find available printers
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Interface Type: All, LAN, Bluetooth, USB</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Printers&gt;</code> Returns a promise that resolves with an array of printers
</div><h3><a class="anchor" name="checkStatus" href="#checkStatus"></a><code>checkStatus(port,&nbsp;emulation)</code></h3>


Checks the status of the printer
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Printer name i.e BT:StarMicronics</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PrinterStatus&gt;</code> Returns a promise that resolves with the PrinterStatus object
</div><h3><a class="anchor" name="printRawText" href="#printRawText"></a><code>printRawText(port,&nbsp;emulation,&nbsp;printObj)</code></h3>


Prints plain text
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  
  <tr>
    <td>
      printObj</td>
    <td>
      <code>PrintObj</code>
    </td>
    <td>
      <p>text:string, cutReceipt?:boolean, openCashDrawer?:boolean</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Success! if printed correctly or error message string returned by the SDK.
</div><h3><a class="anchor" name="printRasterReceipt" href="#printRasterReceipt"></a><code>printRasterReceipt(port,&nbsp;emulation,&nbsp;rasterObj)</code></h3>


Converts the text into a bitmap image and sends it to the printer
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  
  <tr>
    <td>
      rasterObj</td>
    <td>
      <code>RasterObj</code>
    </td>
    <td>
      <p>text:string, cutReceipt?:boolean, openCashDrawer?:boolean, fontSize:number, paperWidth:number</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Success! if printed correctly or error message string returned by the SDK.
</div><h3><a class="anchor" name="printImage" href="#printImage"></a><code>printImage(port,&nbsp;emulation,&nbsp;imageObj)</code></h3>


Gets an image from a string URI and converts it to bitmap to send it to the printer
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  
  <tr>
    <td>
      imageObj</td>
    <td>
      <code>ImageObj</code>
    </td>
    <td>
      <p>uri:string, paperWidth?:number, cutReceipt?:boolean, openCashDrawer?:boolean</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Success! if printed correctly or error message string returned by the SDK.
</div><h3><a class="anchor" name="openCashDrawer" href="#openCashDrawer"></a><code>openCashDrawer(port,&nbsp;emulation)</code></h3>


sends an appendPeripheral command to the printer for channels No1 and No2
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Success! if opened or error message string returned by the SDK.
</div><h3><a class="anchor" name="print" href="#print"></a><code>print(port,&nbsp;emulation,&nbsp;commandsArray)</code></h3>


Sends an Array of commands to the command buffer using the Android ICommandBuilderInterface or iOS ISCBBuilderInterface
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  
  <tr>
    <td>
      commandsArray</td>
    <td>
      <code>CommandsArray</code>
    </td>
    <td>
      <p>each command in the array should be an instance of the PrintCommand object. Example [{append:&quot;text&quot;}, {&quot;openCashDrawer: 1&quot;}]</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Success! if printed correctly or error message string returned by the SDK.
</div><h3><a class="anchor" name="connect" href="#connect"></a><code>connect(port,&nbsp;emulation,&nbsp;hasBarcodeReader)</code></h3>




Allows you to connect to the printer, keep the connection alive and receive status updates through an observable
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
      port</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>printer name i.e BT:StarMicronics.</p>
</td>
  </tr>
  
  <tr>
    <td>
      emulation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>StarPrinter Emulation type: &quot;StarPRNT&quot;, &quot;StarPRNTL&quot;, &quot;StarLine&quot;, &quot;StarGraphic&quot;, &quot;EscPos&quot;, &quot;EscPosMobile&quot;, &quot;StarDotImpact&quot;</p>
</td>
  </tr>
  
  <tr>
    <td>
      hasBarcodeReader</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if the device has a barcode reader (e.g. mPop)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Success! if connected or error message string returned by the SDK.
</div><h3><a class="anchor" name="getStatus" href="#getStatus"></a><code>getStatus()</code></h3>




Returns an observable with the device status events. Only fires when a printer is connnected through the connect() function


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> dataType: printerOnline, printerOffline, printerImpossible, printerPaperEmpty, printerPaperNearEmpty, printerPaperReady, printerCoverOpen, printerCoverClose, cashDrawerOpen, cashDrawerClose
</div><h3><a class="anchor" name="disconnect" href="#disconnect"></a><code>disconnect()</code></h3>


Allows to disconnect (close the connection to the peripherals), this is useful to avoid keeping alive a connection when not in the app to save device battery
(energy consumption). You should call this function when the app is paused or closed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Success! if connected or error message string returned by the SDK.
</div>





