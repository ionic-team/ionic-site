---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "calendar"
title: "Calendar"
header_sub_title: "Class in module "
doc: "Calendar"
docType: "class"
---

<h1 class="api-title">Calendar</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/calendar/index.ts#L56">
  Improve this doc
</a>







<p>This plugin allows you to add events to the Calendar of the mobile device.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-calendar</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin">Calendar plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-calendar
$ npm install --save @ionic-native/calendar
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Calendar } from &#39;@ionic-native/calendar&#39;;

constructor(private calendar: Calendar) { }


this.calendar.createCalendar(&#39;MyCalendar&#39;).then(
  (msg) =&gt; { console.log(msg); },
  (err) =&gt; { console.log(err); }
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="hasReadWritePermission" href="#hasReadWritePermission"></a><code>hasReadWritePermission()</code></h3>


This function checks if we have permission to read/write from/to the calendar.
The promise will resolve with `true` when:
- You're running on iOS, or
- You're targeting API level lower than 23, or
- You're using Android < 6, or
- You've already granted permission

If this returns false, you should call the `requestReadWritePermission` function


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasReadPermission" href="#hasReadPermission"></a><code>hasReadPermission()</code></h3>


Check if we have read permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasWritePermission" href="#hasWritePermission"></a><code>hasWritePermission()</code></h3>


Check if we have write permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="requestWritePermission" href="#requestWritePermission"></a><code>requestWritePermission()</code></h3>


Request write permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestReadPermission" href="#requestReadPermission"></a><code>requestReadPermission()</code></h3>


Request read permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestReadWritePermission" href="#requestReadWritePermission"></a><code>requestReadWritePermission()</code></h3>


Requests read/write permissions


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createCalendar" href="#createCalendar"></a><code>createCalendar(nameOrOptions)</code></h3>


Create a calendar. (iOS only)

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
      nameOrOptions</td>
    <td>
      <code>string</code>|<code>NameOrOptions</code>
    </td>
    <td>
      <p>either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="deleteCalendar" href="#deleteCalendar"></a><code>deleteCalendar(name)</code></h3>


Delete a calendar. (iOS only)
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
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the calendar to delete.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="getCalendarOptions" href="#getCalendarOptions"></a><code>getCalendarOptions()</code></h3>




Returns the default calendar options.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>CalendarOptions</code> Returns an object with the default calendar options
</div><h3><a class="anchor" name="getCreateCalendarOptions" href="#getCreateCalendarOptions"></a><code>getCreateCalendarOptions()</code></h3>




Returns options for a custom calender with specific color



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>NameOrOptions</code> Returns an object with the default options
</div><h3><a class="anchor" name="createEvent" href="#createEvent"></a><code>createEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code></h3>


Silently create an event.
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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="createEventWithOptions" href="#createEventWithOptions"></a><code>createEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code></h3>


Silently create an event with additional options.

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="createEventInteractively" href="#createEventInteractively"></a><code>createEventInteractively(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code></h3>


Interactively create an event.

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="createEventInteractivelyWithOptions" href="#createEventInteractivelyWithOptions"></a><code>createEventInteractivelyWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code></h3>


Interactively create an event with additional options.

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="findEvent" href="#findEvent"></a><code>findEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code></h3>


Find an event.

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="findEventWithOptions" href="#findEventWithOptions"></a><code>findEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code></h3>


Find an event with additional options.
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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the event, or rejects with an error.
</div><h3><a class="anchor" name="listEventsInRange" href="#listEventsInRange"></a><code>listEventsInRange(startDate,&nbsp;endDate)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Find a list of events within the specified date range. (Android only)

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
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the list of events, or rejects with an error.
</div><h3><a class="anchor" name="listCalendars" href="#listCalendars"></a><code>listCalendars()</code></h3>


Get a list of all calendars.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> A Promise that resolves with the list of calendars, or rejects with an error.
</div><h3><a class="anchor" name="findAllEventsInNamedCalendar" href="#findAllEventsInNamedCalendar"></a><code>findAllEventsInNamedCalendar()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Get a list of all future events in the specified calendar. (iOS only)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the list of events, or rejects with an error.
</div><h3><a class="anchor" name="modifyEvent" href="#modifyEvent"></a><code>modifyEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;newTitle,&nbsp;newLocation,&nbsp;newNotes,&nbsp;newStartDate,&nbsp;newEndDate)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Modify an event. (iOS only)

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newTitle</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The new event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newLocation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The new event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newNotes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The new event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newStartDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The new event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newEndDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The new event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Returns a Promise

</div><h3><a class="anchor" name="modifyEventWithOptions" href="#modifyEventWithOptions"></a><code>modifyEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;newTitle,&nbsp;newLocation,&nbsp;newNotes,&nbsp;newStartDate,&nbsp;newEndDate,&nbsp;filterOptions,&nbsp;newOptions)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Modify an event with additional options. (iOS only)

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newTitle</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The new event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newLocation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The new event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newNotes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The new event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newStartDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The new event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newEndDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The new event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      filterOptions</td>
    <td>
      <code>CalendarOptions</code>
    </td>
    <td>
      <p>Event Options, see <code>getCalendarOptions</code><strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      newOptions</td>
    <td>
      <code>CalendarOptions</code>
    </td>
    <td>
      <p>New event options, see <code>getCalendarOptions</code><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Returns a Promise

</div><h3><a class="anchor" name="deleteEvent" href="#deleteEvent"></a><code>deleteEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code></h3>


Delete an event.

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Returns a Promise

</div><h3><a class="anchor" name="deleteEventFromNamedCalendar" href="#deleteEventFromNamedCalendar"></a><code>deleteEventFromNamedCalendar(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;calendarName)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Delete an event from the specified Calendar. (iOS only)

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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event title<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event location<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      notes</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The event notes<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      startDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event start date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      endDate</td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The event end date<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      calendarName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  Returns a Promise

</div><h3><a class="anchor" name="openCalendar" href="#openCalendar"></a><code>openCalendar(date)</code></h3>


Open the calendar at the specified date.
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
      <p>The date you want to open the calendar on</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Promise returns a promise
</div>





<h2><a class="anchor" name="CalendarOptions" href="#CalendarOptions"></a>CalendarOptions</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Id</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      firstReminderMinutes
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      secondReminderMinutes
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      recurrence
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Recurrence. Can be set to <code>daily</code>, <code>weekly</code>, <code>monthly</code> or <code>yearly</code></p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      recurrenceInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Recurrence interval. Valid only when <code>recurrence</code> option is set.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      recurrenceEndDate
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>Recurrence end date. Valid only when <code>recurrence</code> option is set.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      calendarName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Calendar name. Ths is supported by <code>iOS</code> only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      calendarId
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Calendar id</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NameOrOptions" href="#NameOrOptions"></a>NameOrOptions</h2>

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
      calendarName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Calendar name</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      calendarColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Calendar color as a HEX string</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





