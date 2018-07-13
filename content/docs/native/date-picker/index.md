---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "date-picker"
title: "Date Picker"
header_sub_title: "Class in module "
doc: "Date Picker"
docType: "class"
---

<h1 class="api-title">Date Picker</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/date-picker/index.ts#L118">
  Improve this doc
</a>







<p>The DatePicker plugin allows the user to fetch date or time using native dialogs.</p>


<p>Repo:
  <a href="https://github.com/VitaliiBlagodir/cordova-plugin-datepicker">
    https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-datepicker
$ npm install --save @ionic-native/date-picker
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DatePicker } from &#39;@ionic-native/date-picker&#39;;

constructor(private datePicker: DatePicker) { }


...


this.datePicker.show({
  date: new Date(),
  mode: &#39;date&#39;,
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
}).then(
  date =&gt; console.log(&#39;Got date: &#39;, date),
  err =&gt; console.log(&#39;Error occurred while getting date: &#39;, err)
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;Date&gt;</code> Returns a promise that resolves with the picked date and/or time, or rejects with an error.
</div>





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
    </td>
    <td>
      <code>Date | string | number</code>
    </td>
    <td>
      <p>Minimum date
Default: empty String</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      maxDate
    </td>
    <td>
      <code>Date | string | number</code>
    </td>
    <td>
      <p>Maximum date
Default: empty String</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      titleText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label for the dialog title. If empty, uses android default (Set date/Set time).
Default: empty String</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      okText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of BUTTON_POSITIVE (done button) on Android</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cancelText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of BUTTON_NEGATIVE (cancel button). If empty, uses android.R.string.cancel.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      todayText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of today button. If empty, doesn&#39;t show the option to select current date.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      nowText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of now button. If empty, doesn&#39;t show the option to select current time.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      is24Hour
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Shows time dialog in 24 hours format.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      androidTheme
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Choose the Android theme for the picker. You can use the DatePicker.ANDROID_THEMES property.
Values: 1: THEME_TRADITIONAL | 2: THEME_HOLO_DARK | 3: THEME_HOLO_LIGHT | 4: THEME_DEVICE_DEFAULT_DARK | 5: THEME_DEVICE_DEFAULT_LIGHT</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      allowOldDates
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Shows or hide dates earlier then selected date.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      allowFutureDates
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Shows or hide dates after selected date.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      doneButtonLabel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of done button.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      doneButtonColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Hex color of done button.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cancelButtonLabel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Label of cancel button.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cancelButtonColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Hex color of cancel button.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>X position of date picker. The position is absolute to the root view of the application.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Y position of date picker. The position is absolute to the root view of the application.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      minuteInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Interval between options in the minute section of the date picker.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      popoverArrowDirection
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Force the UIPopoverArrowDirection enum. The value any will revert to default UIPopoverArrowDirectionAny and let the app choose the proper direction itself.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      locale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Force locale for datePicker.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





