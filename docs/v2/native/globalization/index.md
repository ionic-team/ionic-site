---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "globalization"
title: "Globalization"
header_sub_title: "Class in module "
doc: "Globalization"
docType: "class"
---







<h1 class="api-title">
  
  Globalization
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/globalization.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-globalization</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-globalization">
    https://github.com/apache/cordova-plugin-globalization
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Globalization } from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="getPreferredLanguage"></div>
<h3><code>getPreferredLanguage()</code>
  
</h3>


Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> 
</div>



<div id="getLocaleName"></div>
<h3><code>getLocaleName()</code>
  
</h3>


Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> 
</div>



<div id="dateToString"></div>
<h3><code>dateToString(date,&nbsp;options)</code>
  
</h3>




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
      date
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>Date you wish to convert</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> Returns a promise when the date has been converted.
</div>



<div id="stringToDate"></div>
<h3><code>stringToDate(dateString,&nbsp;options)</code>
  
</h3>




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
      dateString
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Date as a string to be converted</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> Returns a promise when the date has been converted.
</div>



<div id="getDatePattern"></div>
<h3><code>getDatePattern(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> Returns a promise.
</div>



<div id="getDateNames"></div>
<h3><code>getDateNames(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> Returns a promise.
</div>



<div id="isDayLightSavingsTime"></div>
<h3><code>isDayLightSavingsTime(date)</code>
  
</h3>


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
      date
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;dst&gt;</code> reutrns a promise with the value
</div>



<div id="getFirstDayOfWeek"></div>
<h3><code>getFirstDayOfWeek()</code>
  
</h3>


Returns the first day of the week according to the client's user preferences and calendar.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;value&gt;</code> reutrns a promise with the value
</div>



<div id="numberToString"></div>
<h3><code>numberToString(options)</code>
  
</h3>




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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="stringToNumber"></div>
<h3><code>stringToNumber(stringToConvert,&nbsp;options)</code>
  
</h3>







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
      stringToConvert
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>String you want to conver to a number</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise</code> Returns a promise with the value.
</div>



<div id="getNumberPattern"></div>
<h3><code>getNumberPattern(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise</code> returns a promise with the value.
</div>



<div id="getCurrencyPattern"></div>
<h3><code>getCurrencyPattern(currencyCode)</code>
  
</h3>


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
      currencyCode
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise</code> returns a promise with the value
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

