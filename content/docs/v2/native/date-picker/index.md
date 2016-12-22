---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "date-picker"
title: "Date Picker"
header_sub_title: "Class in module "
doc: "Date Picker"
docType: "class"
---







<h1 class="api-title">
  
  Date Picker
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/datepicker.ts#L118">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-datepicker</code></pre>
<p>Repo:
  <a href="https://github.com/VitaliiBlagodir/cordova-plugin-datepicker">
    https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
  </a>
</p>

<!-- description -->

<p>The DatePicker plugin allows the user to fetch date or time using native dialogs.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { DatePicker } from &#39;ionic-native&#39;;


DatePicker.show({
  date: new Date(),
  mode: &#39;date&#39;
}).then(
  date =&gt; console.log(&#39;Got date: &#39;, date),
  err =&gt; console.log(&#39;Error occurred while getting date: &#39;, err)
);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="show"></div>
<h3><code>show(options)</code>
  
</h3>


Shows the date and/or time picker dialog(s)


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
      
<code>DatePickerOptions</code>
    </td>
    <td>
      <p>Options for the date picker.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Date&gt;</code> Returns a promise that resolves with the picked date and/or time, or rejects with an error.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="DatePickerOptions" href="#DatePickerOptions"></a>DatePickerOptions</h2>


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
      mode
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The mode of the date picker
Values: date | time | datetime</p>

    </td>
  </tr>
  
  <tr>
    <td>
      date
      
    </td>
    <td>
      <code>Date | string | number</code>
    </td>
    <td>
      <p>Selected date</p>

    </td>
  </tr>
  
  <tr>
    <td>
      minDate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Date | string | number</code>
    </td>
    <td>
      <p>Minimum date
Default: empty String</p>

    </td>
  </tr>
  
  <tr>
    <td>
      maxDate
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>Date | string | number</code>
    </td>
    <td>
      <p>Maximum date
Default?: empty String</p>

    </td>
  </tr>
  
  <tr>
    <td>
      titleText
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label for the dialog title. If empty, uses android default (Set date/Set time).
Default?: empty String</p>

    </td>
  </tr>
  
  <tr>
    <td>
      okText
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of BUTTON_POSITIVE (done button) on Android</p>

    </td>
  </tr>
  
  <tr>
    <td>
      cancelText
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of BUTTON_NEGATIVE (cancel button). If empty, uses android.R.string.cancel.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      todayText
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of today button. If empty, doesn&#39;t show the option to select current date.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      nowText
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of now button. If empty, doesn&#39;t show the option to select current time.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      is24Hour
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Shows time dialog in 24 hours format.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      androidTheme
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Choose the Android theme for the picker. You can use the DatePicker.ANDROID_THEMES property.
Values: 1: THEME_TRADITIONAL | 2: THEME_HOLO_DARK | 3: THEME_HOLO_LIGHT | 4: THEME_DEVICE_DEFAULT_DARK | 5: THEME_DEVICE_DEFAULT_LIGHT</p>

    </td>
  </tr>
  
  <tr>
    <td>
      allowOldDates
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Shows or hide dates earlier then selected date.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      allowFutureDates
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Shows or hide dates after selected date.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      doneButtonLabel
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of done button.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      doneButtonColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Hex color of done button.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      cancelButtonLabel
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of cancel button.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      cancelButtonColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Hex color of cancel button.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      x
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>X position of date picker. The position is absolute to the root view of the application.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      y
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Y position of date picker. The position is absolute to the root view of the application.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      minuteInterval
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Interval between options in the minute section of the date picker.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      popoverArrowDirection
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Force the UIPopoverArrowDirection enum. The value any will revert to default UIPopoverArrowDirectionAny and let the app choose the proper direction itself.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      locale
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Force locale for datePicker.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

