---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "globalization"
title: "Globalization"
header_sub_title: "Class in module "
doc: "Globalization"
docType: "class"
---

<h1 class="api-title">Globalization</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/globalization/index.ts#L6">
  Improve this doc
</a>







<p>This plugin obtains information and performs operations specific to the user&#39;s locale, language, and timezone.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-globalization">
    https://github.com/apache/cordova-plugin-globalization
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-globalization
$ npm install --save @ionic-native/globalization
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Globalization } from &#39;@ionic-native/globalization&#39;;

constructor(private globalization: Globalization) { }


...


this.globalization.getPreferredLanguage()
  .then(res =&gt; console.log(res))
  .catch(e =&gt; console.log(e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getPreferredLanguage" href="#getPreferredLanguage"></a><code>getPreferredLanguage()</code></h3>


Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{value: string}&gt;</code> 
</div><h3><a class="anchor" name="getLocaleName" href="#getLocaleName"></a><code>getLocaleName()</code></h3>


Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{value: string}&gt;</code> 
</div><h3><a class="anchor" name="dateToString" href="#dateToString"></a><code>dateToString(date,&nbsp;options)</code></h3>




Converts date to string
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
      date</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>Date you wish to convert</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      
    </td>
    <td>
      <p>Options for the converted date. Length, selector.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{value: string}&gt;</code> Returns a promise when the date has been converted.
</div><h3><a class="anchor" name="stringToDate" href="#stringToDate"></a><code>stringToDate(dateString,&nbsp;options)</code></h3>




Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
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
      dateString</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Date as a string to be converted</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      
    </td>
    <td>
      <p>Options for the converted date. Length, selector.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number }&gt;</code> Returns a promise when the date has been converted.
</div><h3><a class="anchor" name="getDatePattern" href="#getDatePattern"></a><code>getDatePattern(options)</code></h3>




Returns a pattern string to format and parse dates according to the client's user preferences.
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
      <p>Object with the format length and selector</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ pattern: string, timezone: string, utc_offset: number, dst_offset: number }&gt;</code> Returns a promise.
</div><h3><a class="anchor" name="getDateNames" href="#getDateNames"></a><code>getDateNames(options)</code></h3>




Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
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
      <p>Object with type (narrow or wide) and item (month or days).</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{value: Array&lt;string&gt;}&gt;</code> Returns a promise.
</div><h3><a class="anchor" name="isDayLightSavingsTime" href="#isDayLightSavingsTime"></a><code>isDayLightSavingsTime(date)</code></h3>


Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
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
      date</td>
    <td>
      <code>data</code>
    </td>
    <td>
      <p>Date to process</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{dst: string}&gt;</code> reutrns a promise with the value
</div><h3><a class="anchor" name="getFirstDayOfWeek" href="#getFirstDayOfWeek"></a><code>getFirstDayOfWeek()</code></h3>


Returns the first day of the week according to the client's user preferences and calendar.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{value: string}&gt;</code> returns a promise with the value
</div><h3><a class="anchor" name="numberToString" href="#numberToString"></a><code>numberToString(numberToConvert,&nbsp;options)</code></h3>




Returns a number formatted as a string according to the client's user preferences.
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
      numberToConvert</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>The number to convert</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Object with property <code>type</code> that can be set to: decimal, percent, or currency.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="stringToNumber" href="#stringToNumber"></a><code>stringToNumber(stringToConvert,&nbsp;options)</code></h3>





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
      stringToConvert</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>String you want to conver to a number</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      
    </td>
    <td>
      <p>The type of number you want to return. Can be decimal, percent, or currency.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ value: number | string }&gt;</code> Returns a promise with the value.
</div><h3><a class="anchor" name="getNumberPattern" href="#getNumberPattern"></a><code>getNumberPattern(options)</code></h3>




Returns a pattern string to format and parse numbers according to the client's user preferences.
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
      <p>Can be decimal, percent, or currency.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string }&gt;</code> 
</div><h3><a class="anchor" name="getCurrencyPattern" href="#getCurrencyPattern"></a><code>getCurrencyPattern(currencyCode)</code></h3>


Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
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
      currencyCode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Currency Code.A</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string }&gt;</code> 
</div>





<h2><a class="anchor" name="GlobalizationOptions" href="#GlobalizationOptions"></a>GlobalizationOptions</h2>

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
      formatLength
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      selector
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





