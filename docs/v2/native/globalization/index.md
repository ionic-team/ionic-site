---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/globalization.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-globalization</code></pre>
<p>Repo:
  <a href="https: //github.com/apache/cordova-plugin-globalization">
    https: //github.com/apache/cordova-plugin-globalization
  </a>
</p>

<!-- description -->




<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Globalization} from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;{value: string}&gt;</code> 
</div>



<div id="stringToDate"></div>
<h3><code>stringToDate(dateString,&nbsp;options)</code>

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
      dateString
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
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







<div id="getDatePattern"></div>
<h3><code>getDatePattern(options)</code>

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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getDateNames"></div>
<h3><code>getDateNames(options)</code>

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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isDayLightSavingsTime"></div>
<h3><code>isDayLightSavingsTime(date)</code>

</h3>

Check if day light saving is active


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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getFirstDayOfWeek"></div>
<h3><code>getFirstDayOfWeek()</code>

</h3>

Get first day of week










<div id="numberToString"></div>
<h3><code>numberToString(options)</code>

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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
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







<div id="getNumberPattern"></div>
<h3><code>getNumberPattern(options)</code>

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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getCurrencyPattern"></div>
<h3><code>getCurrencyPattern(currencyCode)</code>

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
      currencyCode
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

