---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "calendar"
title: "Calendar"
header_sub_title: "Class in module "
doc: "Calendar"
docType: "class"
---








<h1 class="api-title">

  
  Calendar
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/calendar.ts#L16'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-calendar</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin
  </a>
</p>

<!-- description -->

<p>This plugin allows you to add events to the Calendar of the mobile device.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-calendar</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin">Calendar plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Methods</h2>
<div id="createCalendar"></div>
<h3><code>createCalendar(nameOrOptions)</code>

</h3>

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
      nameOrOptions
      
      
    </td>
    <td>
      
<code>string</code>|<code>Object</code>
    </td>
    <td>
      <p>either a string name or a options object.
options:
  calendarName: string  the name of the calendar
  calendarColor: string  the hex color of the calendar</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="deleteCalendar"></div>
<h3><code>deleteCalendar(name)</code>

</h3>

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
      name
      
      
    </td>
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
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="getCalendarOptions"></div>
<h3><code>getCalendarOptions()</code>

</h3>



Returns the default calendar options.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an object with the default calendar options:
  firstReminderMinutes: 60,
  secondReminderMinutes: null,
  recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
  recurrenceInterval: 1, // only used when recurrence is set
  recurrenceEndDate: null,
  calendarName: null,
  calendarId: null,
  url: null


</div>



<div id="createEvent"></div>
<h3><code>createEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="createEventWithOptions"></div>
<h3><code>createEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="createEventInteractively"></div>
<h3><code>createEventInteractively(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="createEventInteractivelyWithOptions"></div>
<h3><code>createEventInteractivelyWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="findEvent"></div>
<h3><code>findEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="findEventWithOptions"></div>
<h3><code>findEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;options)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the event, or rejects with an error.


</div>



<div id="listEventsInRange"></div>
<h3><code>listEventsInRange(startDate,&nbsp;endDate)</code>

</h3>

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
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the list of events, or rejects with an error.


</div>



<div id="listCalendars"></div>
<h3><code>listCalendars()</code>

</h3>

Get a list of all calendars.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 A Promise that resolves with the list of calendars, or rejects with an error.


</div>



<div id="findAllEventsInNamedCalendar"></div>
<h3><code>findAllEventsInNamedCalendar()</code>

</h3>

Get a list of all future events in the specified calendar. (iOS only)






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the list of events, or rejects with an error.


</div>



<div id="modifyEvent"></div>
<h3><code>modifyEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;newTitle,&nbsp;newLocation,&nbsp;newNotes,&nbsp;newStartDate,&nbsp;newEndDate)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newTitle
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newLocation
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newNotes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newStartDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newEndDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="modifyEventWithOptions"></div>
<h3><code>modifyEventWithOptions(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;newTitle,&nbsp;newLocation,&nbsp;newNotes,&nbsp;newStartDate,&nbsp;newEndDate,&nbsp;options)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newTitle
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newLocation
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newNotes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The new event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newStartDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newEndDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The new event end date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>CalendarOptions</code>
    </td>
    <td>
      <p>Additional options, see <code>getCalendarOptions</code></p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="deleteEvent"></div>
<h3><code>deleteEvent(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="deleteEventFromNamedCalendar"></div>
<h3><code>deleteEventFromNamedCalendar(title,&nbsp;location,&nbsp;notes,&nbsp;startDate,&nbsp;endDate,&nbsp;calendarName)</code>

</h3>

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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event title</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      location
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notes
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The event notes</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      startDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event start date</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      endDate
      
      
    </td>
    <td>
      
<code>Date</code>
    </td>
    <td>
      <p>The event end date</p>

      
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
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="openCalendar"></div>
<h3><code>openCalendar()</code>

</h3>

Open the calendar at the specified date.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Date</code> date
</div>




<!-- methods on the class -->

<h2>Instance Methods</h2>

<div id="id"></div>

<h3>
  <code>id()</code>


</h3>












<div id="name"></div>

<h3>
  <code>name()</code>


</h3>










<!-- related link --><!-- end content block -->


<!-- end body block -->

