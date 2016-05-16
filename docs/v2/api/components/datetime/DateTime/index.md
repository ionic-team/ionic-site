---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "datetime"
title: "DateTime"
header_sub_title: "Ionic API Documentation"
doc: "DateTime"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/datetime/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="date-time" href="#date-time"></a>

DateTime






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/datetime/datetime.ts#L12">
Improve this doc
</a>






<p>The DateTime component can be added to a template using the <code>&lt;ion-datetime&gt;</code> element.
Tapping on the <code>&lt;ion-datetime&gt;</code> element will display a dialog that slides up from the
bottom of the page. The dialog displays scrollable columns that can be used to select
date and time values.</p>
<p>It is similar to the native <code>&lt;input type=&quot;datetime-local&quot;&gt;</code> element, however, Ionic&#39;s
DateTime component makes it easy for developers to display the date in their preferred
format and manage the date from their JavaScript.</p>
<h2 id="display-and-picker-formats">Display and Picker Formats</h2>
<p>The DateTime component displays the date/time in two places: in the <code>&lt;ion-datetime&gt;</code>
element, and in the dialog that presents from the bottom of the screen. These both
can be customized to display in many different formats. The following chart lists
all of the formats that can be passed to the different inputs.</p>
<table>
<thead>
<tr>
<th>Format</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>YYYY</code></td>
<td>Year, 4 digits</td>
<td><code>2018</code></td>
</tr>
<tr>
<td><code>YY</code></td>
<td>Year, 2 digits</td>
<td><code>18</code></td>
</tr>
<tr>
<td><code>M</code></td>
<td>Month</td>
<td><code>1</code> ... <code>12</code></td>
</tr>
<tr>
<td><code>MM</code></td>
<td>Month, leading zero</td>
<td><code>01</code> ... <code>12</code></td>
</tr>
<tr>
<td><code>MMM</code></td>
<td>Month, short name</td>
<td><code>Jan</code></td>
</tr>
<tr>
<td><code>MMMM</code></td>
<td>Month, full name</td>
<td><code>January</code></td>
</tr>
<tr>
<td><code>D</code></td>
<td>Day</td>
<td><code>1</code> ... <code>31</code></td>
</tr>
<tr>
<td><code>DD</code></td>
<td>Day, leading zero</td>
<td><code>01</code> ... <code>31</code></td>
</tr>
<tr>
<td><code>DDD</code></td>
<td>Day, short name</td>
<td><code>Fri</code></td>
</tr>
<tr>
<td><code>DDDD</code></td>
<td>Day, full name</td>
<td><code>Friday</code></td>
</tr>
<tr>
<td><code>H</code></td>
<td>Hour, 24-hour</td>
<td><code>0</code> ... <code>23</code></td>
</tr>
<tr>
<td><code>HH</code></td>
<td>Hour, 24-hour, leading zero</td>
<td><code>00</code> ... <code>23</code></td>
</tr>
<tr>
<td><code>h</code></td>
<td>Hour, 12-hour</td>
<td><code>1</code> ... <code>12</code></td>
</tr>
<tr>
<td><code>hh</code></td>
<td>Hour, 12-hour, leading zero</td>
<td><code>01</code> ... <code>12</code></td>
</tr>
<tr>
<td><code>a</code></td>
<td>12-hour time period, lowercase</td>
<td><code>am</code> <code>pm</code></td>
</tr>
<tr>
<td><code>A</code></td>
<td>12-hour time period, uppercase</td>
<td><code>AM</code> <code>PM</code></td>
</tr>
<tr>
<td><code>m</code></td>
<td>Minute</td>
<td><code>1</code> ... <code>59</code></td>
</tr>
<tr>
<td><code>mm</code></td>
<td>Minute, leading zero</td>
<td><code>01</code> ... <code>59</code></td>
</tr>
<tr>
<td><code>s</code></td>
<td>Second</td>
<td><code>1</code> ... <code>59</code></td>
</tr>
<tr>
<td><code>ss</code></td>
<td>Second, leading zero</td>
<td><code>01</code> ... <code>59</code></td>
</tr>
<tr>
<td><code>Z</code></td>
<td>UTC Timezone Offset</td>
<td><code>Z or +HH:mm or -HH:mm</code></td>
</tr>
</tbody>
</table>
<p><strong>Important</strong>: See the <a href="#month-names-and-day-of-the-week-names">Month Names and Day of the Week Names</a>
section below on how to use different names for the month and day.</p>
<h3 id="display-format">Display Format</h3>
<p>The <code>displayFormat</code> input specifies how a date&#39;s value should be displayed
within the <code>ion-datetime</code> element.</p>
<p>In the following example, the display in the <code>&lt;ion-datetime&gt;</code> will use the
month&#39;s short name, the numerical day with a leading zero, a comma and the
4 digit year. In addition to the date, it will display the time with the hours
in the 24-hour format and the minutes. Both the hour and minutes will be displayed
with a leading zero, and they are separated by a <code>:</code> character. Any character
can be used as a separator. An example display using this format is: <code>Jun 17, 2005 11:06</code>.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Date&lt;/ion-label&gt;
  &lt;ion-datetime displayFormat=&quot;MMM DD, YYYY HH:mm&quot; [(ngModel)]=&quot;myDate&quot;&gt;
  &lt;/ion-datetime&gt;
&lt;/ion-item&gt;
</code></pre>
<h3 id="picker-format">Picker Format</h3>
<p>The <code>pickerFormat</code> input determines which columns should be shown in the dialog,
the order of the columns, and which format to use to display the value. If the
<code>pickerFormat</code> input is not provided then it will use the <code>displayFormat</code>.</p>
<p>In the following example, the display in the <code>&lt;ion-datetime&gt;</code> will use the
numerical month with a leading zero, followed by a forward slash <code>/</code> and the
4 digit year. An example display using this format is: <code>06/2020</code>. The dialog
will display two columns: the month&#39;s long name, and the 4 digit year.</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Date&lt;/ion-label&gt;
  &lt;ion-datetime displayFormat=&quot;MM/YYYY&quot; pickerFormat=&quot;MMMM YYYY&quot; [(ngModel)]=&quot;myDate&quot;&gt;&lt;/ion-datetime&gt;
&lt;/ion-item&gt;
</code></pre>
<h3 id="datetime-data">Datetime Data</h3>
<p>Historically, handling datetime data within JavaScript, or even within HTML
inputs, has always been a challenge. Specifically, JavaScript&#39;s <code>Date</code> object is
notoriously difficult to correctly parse apart datetime strings or to format
datetime values. Even worse is how different browsers and JavaScript versions
parse various datetime strings differently, especially per locale. Additional,
developers face even more challenges when dealing with timezones using
JavaScript&#39;s core <code>Date</code> object.</p>
<p>But no worries, all is not lost! Ionic&#39;s datetime input has been designed so
developers can avoid the common pitfalls, allowing developers to easily format
datetime data within the input, and give the user a simple datetime picker for a
great user experience. Oddly enough, one of the best ways to work with datetime
values in JavaScript is to not use the <code>Date</code> object at all.</p>
<h5 id="iso-8601-datetime-format-yyyy-mm-ddthh-mmz">ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ</h5>
<p>For all the reasons above, and how datetime data is commonly saved within databases,
Ionic uses the <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601 datetime format</a>
for both its input value, and output value. The value is simply a string, rather
than using JavaScript&#39;s <code>Date</code> object, and it strictly follows the standardized
ISO 8601 format. Additionally, when using the ISO datetime string format, it makes
it easier on developers when passing data within JSON objects, and sending databases
a standardized datetime format which it can be easily parse apart and formatted.
Because of the strict adherence to the ISO 8601 format, and not involving the hundreds
of other format possibilities and locales, this approach actually makes it easier
for Ionic apps and backend-services to manage datetime data.</p>
<p>An ISO format can be used as a simple year, or just the hour and minute, or get more
detailed down to the millisecond and timezone. Any of the ISO formats below can be used,
and after a user selects a new date, Ionic will continue to use the same ISO format
which datetime value was originally given as.</p>
<table>
<thead>
<tr>
<th>Description</th>
<th>Format</th>
<th>Datetime Value Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Year</td>
<td>YYYY</td>
<td>1994</td>
</tr>
<tr>
<td>Year and Month</td>
<td>YYYY-MM</td>
<td>1994-12</td>
</tr>
<tr>
<td>Complete Date</td>
<td>YYYY-MM-DD</td>
<td>1994-12-15</td>
</tr>
<tr>
<td>Date and Time</td>
<td>YYYY-MM-DDTHH:mm</td>
<td>1994-12-15T13:47</td>
</tr>
<tr>
<td>UTC Timezone</td>
<td>YYYY-MM-DDTHH:mm:ssTZD</td>
<td>1994-12-15T13:47:20.789Z</td>
</tr>
<tr>
<td>Timezone Offset</td>
<td>YYYY-MM-DDTHH:mm:ssTZD</td>
<td>1994-12-15T13:47:20.789+5:00</td>
</tr>
<tr>
<td>Hour and Minute</td>
<td>HH:mm</td>
<td>13:47</td>
</tr>
<tr>
<td>Hour, Minute, Second</td>
<td>HH:mm:ss</td>
<td>13:47:20</td>
</tr>
</tbody>
</table>
<p>Note that the year is always four-digits, milliseconds (if it&#39;s added) is always
three-digits, and all others are always two-digits. So the number representing
January always has a leading zero, such as <code>01</code>. Additionally, the hour is always
in the 24-hour format, so <code>00</code> is <code>12am</code> on a 12-hour clock, <code>13</code> means <code>1pm</code>,
and <code>23</code> means <code>11pm</code>.</p>
<p>It&#39;s also important to note that neither the <code>displayFormat</code> or <code>pickerFormat</code> can
set the datetime value&#39;s output, which is the value that sent the the component&#39;s
<code>ngModel</code>. The format&#39;s are merely for displaying the value as text and the picker&#39;s
interface, but the datetime&#39;s value is always persisted as a valid ISO 8601 datetime
string.</p>
<h2 id="min-and-max-datetimes">Min and Max Datetimes</h2>
<p>Dates are infinite in either direction, so for a user selection there should be at
least some form of restricting the dates can be selected. Be default, the maximum
date is to the end of the current year, and the minimum date is from the beginning
of the year that was 100 years ago.</p>
<p>To customize the minimum and maximum datetime values, the <code>min</code> and <code>max</code> component
inputs can be provided which may make more sense for the app&#39;s use-case, rather
than the default of the last 100 years. Following the same IS0 8601 format listed
in the table above, each component can restrict which dates can be selected by the
user. Below is an example of restricting the date selection between the beginning
of 2016, and October 31st of 2020:</p>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Date&lt;/ion-label&gt;
  &lt;ion-datetime displayFormat=&quot;MMMM YYYY&quot; min=&quot;2016&quot; max=&quot;2020-10-31&quot; [(ngModel)]=&quot;myDate&quot;&gt;
  &lt;/ion-datetime&gt;
&lt;/ion-item&gt;
</code></pre>
<h2 id="month-names-and-day-of-the-week-names">Month Names and Day of the Week Names</h2>
<p>At this time, there is no one-size-fits-all standard to automatically choose the correct
language/spelling for a month name, or day of the week name, depending on the language
or locale. Good news is that there is an
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat">Intl.DateTimeFormat</a>
standard which <em>most</em> browsers have adopted. However, at this time the standard has not
been fully implemented by all popular browsers so Ionic is unavailable to take advantage
of it <em>yet</em>. Additionally, Angular also provides an internationalization service, but it
is still under heavy development so Ionic does not depend on it at this time.</p>
<p>All things considered, the by far easiest solution is to just provide an array of names
if the app needs to use names other than the default English version of month and day
names. The month names and day names can be either configured at the app level, or
individual <code>ion-datetime</code> level.</p>
<h3 id="app-config-level">App Config Level</h3>
<pre><code class="lang-ts">@App({
  config: {
    monthNames: [&#39;janeiro, &#39;fevereiro&#39;, &#39;mar\u00e7o&#39;, ... ],
    monthShortNames: [&#39;jan&#39;, &#39;fev&#39;, &#39;mar&#39;, ... ],
    dayNames: [&#39;domingo&#39;, &#39;segunda-feira&#39;, &#39;ter\u00e7a-feira&#39;, ... ],
    dayShortNames: [&#39;dom&#39;, &#39;seg&#39;, &#39;ter&#39;, ... ],
  }
})
</code></pre>
<h3 id="component-input-level">Component Input Level</h3>
<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Período&lt;/ion-label&gt;
  &lt;ion-datetime displayFormat=&quot;DDDD MMM D, YYYY&quot;
    [(ngModel)]=&quot;myDate&quot;
    monthNames=&quot;[&#39;janeiro, &#39;fevereiro&#39;, &#39;mar\u00e7o&#39;, ... ]&quot;
    monthShortNames=&quot;[&#39;jan&#39;, &#39;fev&#39;, &#39;mar&#39;, ... ]&quot;
    dayNames=&quot;[&#39;domingo&#39;, &#39;segunda-feira&#39;, &#39;ter\u00e7a-feira&#39;, ... ]&quot;
    dayShortNames=&quot;[&#39;dom&#39;, &#39;seg&#39;, &#39;ter&#39;, ... ]&quot;
    &gt;&lt;/ion-datetime&gt;
&lt;/ion-item&gt;
</code></pre>
<h3 id="advanced-datetime-validation-and-manipulation">Advanced Datetime Validation and Manipulation</h3>
<p>The datetime picker provides the simplicity of selecting an exact format, and persists
the datetime values as a string using the standardized
<a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601 datetime format</a>.
However, it&#39;s important to note that <code>ion-datetime</code> does not attempt to solve all
situtations when validating and manipulating datetime values. If datetime values need
to be parsed from a certain format, or manipulated (such as adding 5 days to a date,
subtracting 30 minutes), or even formatting data to a specific locale, then we highly
recommend using <a href="http://momentjs.com/">moment.js</a> to &quot;Parse, validate, manipulate, and
display dates in JavaScript&quot;. <a href="http://momentjs.com/">Moment.js</a> has quickly become
our goto standard when dealing with datetimes within JavaScript, but Ionic does not
prepackage this dependency since most apps will not require it, and its locale
configuration should be decided by the end-developer.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-datetime</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Date&lt;/ion-label&gt;
  &lt;ion-datetime displayFormat=&quot;MM/DD/YYYY&quot; [(ngModel)]=&quot;myDate&quot;&gt;
  &lt;/ion-datetime&gt;
&lt;/ion-item&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>min</td>
      <td><code>string</code></td>
      <td><p> The minimum datetime allowed. Value must be a date string
following the
<a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601 datetime format standard</a>,
such as <code>1996-12-19</code>. The format does not have to be specific to an exact
datetime. For example, the minimum could just be the year, such as <code>1994</code>.
Defaults to the beginning of the year, 100 years ago from today.</p>
</td>
    </tr>
    
    <tr>
      <td>max</td>
      <td><code>string</code></td>
      <td><p> The maximum datetime allowed. Value must be a date string
following the
<a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601 datetime format standard</a>,
<code>1996-12-19</code>. The format does not have to be specific to an exact
datetime. For example, the maximum could just be the year, such as <code>1994</code>.
Defaults to the end of this year.</p>
</td>
    </tr>
    
    <tr>
      <td>displayFormat</td>
      <td><code>string</code></td>
      <td><p> The display format of the date and time as text that shows
within the item. When the <code>pickerFormat</code> input is not used, then the
<code>displayFormat</code> is used for both display the formatted text, and determining
the datetime picker&#39;s columns. See the <code>pickerFormat</code> input description for
more info. Defaults to <code>MMM D, YYYY</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>pickerFormat</td>
      <td><code>string</code></td>
      <td><p> The format of the date and time picker columns the user selects.
A datetime input can have one or many datetime parts, each getting their
own column which allow individual selection of that particular datetime part. For
example, year and month columns are two individually selectable columns which help
choose an exact date from the datetime picker. Each column follows the string
parse format. Defaults to use <code>displayFormat</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>cancelText</td>
      <td><code>string</code></td>
      <td><p> The text to display on the picker&#39;s cancel button. Default: <code>Cancel</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>doneText</td>
      <td><code>string</code></td>
      <td><p> The text to display on the picker&#39;s &quot;Done&quot; button. Default: <code>Done</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>yearValues</td>
      <td><code>array | string</code></td>
      <td><p> Values used to create the list of selectable years. By default
the year values range between the <code>min</code> and <code>max</code> datetime inputs. However, to
control exactly which years to display, the <code>yearValues</code> input can take either an array
of numbers, or string of comma separated numbers. For example, to show upcoming and
recent leap years, then this input&#39;s value would be <code>yearValues=&quot;2024,2020,2016,2012,2008&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>monthValues</td>
      <td><code>array | string</code></td>
      <td><p> Values used to create the list of selectable months. By default
the month values range from <code>1</code> to <code>12</code>. However, to control exactly which months to
display, the <code>monthValues</code> input can take either an array of numbers, or string of
comma separated numbers. For example, if only summer months should be shown, then this
input value would be <code>monthValues=&quot;6,7,8&quot;</code>. Note that month numbers do <em>not</em> have a
zero-based index, meaning January&#39;s value is <code>1</code>, and December&#39;s is <code>12</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>dayValues</td>
      <td><code>array | string</code></td>
      <td><p> Values used to create the list of selectable days. By default
every day is shown for the given month. However, to control exactly which days of
the month to display, the <code>dayValues</code> input can take either an array of numbers, or
string of comma separated numbers. Note that even if the array days have an invalid
number for the selected month, like <code>31</code> in February, it will correctly not show
days which are not valid for the selected month.</p>
</td>
    </tr>
    
    <tr>
      <td>hourValues</td>
      <td><code>array | string</code></td>
      <td><p> Values used to create the list of selectable hours. By default
the hour values range from <code>1</code> to <code>23</code> for 24-hour, or <code>1</code> to <code>12</code> for 12-hour. However,
to control exactly which hours to display, the <code>hourValues</code> input can take either an
array of numbers, or string of comma separated numbers.</p>
</td>
    </tr>
    
    <tr>
      <td>minuteValues</td>
      <td><code>array | string</code></td>
      <td><p> Values used to create the list of selectable minutes. By default
the mintues range from <code>1</code> to <code>59</code>. However, to control exactly which minutes to display,
the <code>minuteValues</code> input can take either an array of numbers, or string of comma separated
numbers. For example, if the minute selections should only be every 15 minutes, then
this input value would be <code>minuteValues=&quot;0,15,30,45&quot;</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>monthNames</td>
      <td><code>array</code></td>
      <td><p> Full names for each month name. This can be used to provide
locale month names. Defaults to English.</p>
</td>
    </tr>
    
    <tr>
      <td>monthShortNames</td>
      <td><code>array</code></td>
      <td><p> Short abbreviated names for each month name. This can be used to provide
locale month names. Defaults to English.</p>
</td>
    </tr>
    
    <tr>
      <td>dayNames</td>
      <td><code>array</code></td>
      <td><p> Full day of the week names. This can be used to provide
locale names for each day in the week. Defaults to English.</p>
</td>
    </tr>
    
    <tr>
      <td>dayShortNames</td>
      <td><code>array</code></td>
      <td><p> Short abbreviated day of the week names. This can be used to provide
locale names for each day in the week. Defaults to English.</p>
</td>
    </tr>
    
    <tr>
      <td>pickerOptions</td>
      <td><code>any</code></td>
      <td><p> Any addition options that the picker interface can accept.
See the <a href="../../picker/Picker">Picker API docs</a> for the picker options.</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> Whether or not the datetime component is disabled. Default <code>false</code>.</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>change</td>
      <td><p> Any expression to evaluate when the datetime selection has changed.</p>
</td>
    </tr>
    
    <tr>
      <td>cancel</td>
      <td><p> Any expression to evaluate when the datetime selection was cancelled.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

