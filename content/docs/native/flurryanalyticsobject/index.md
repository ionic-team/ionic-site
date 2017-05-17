---
layout: "fluid/docs_base"
version: "3.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "flurryanalyticsobject"
title: "FlurryAnalyticsObject"
header_sub_title: "Class in module "
doc: "FlurryAnalyticsObject"
docType: "class"
---

<h1 class="api-title">FlurryAnalyticsObject</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/flurry-analytics/index.ts#L72">
  Improve this doc
</a>











<h2>Instance Members</h2>
<h3><a class="anchor" name="logEvent" href="#logEvent"></a><code>logEvent(eventName,&nbsp;params)</code></h3>




This function set the Event
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the event</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Optional params<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when event is sent
</div><h3><a class="anchor" name="startTimedEvent" href="#startTimedEvent"></a><code>startTimedEvent(eventName,&nbsp;params)</code></h3>




Start a timed event
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the event</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Optional params<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when timed event is started tracking
</div><h3><a class="anchor" name="endTimedEvent" href="#endTimedEvent"></a><code>endTimedEvent(eventName,&nbsp;params)</code></h3>




Complete a timed event
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the event</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      <p>Optional params<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when timed event is ended tracking
</div><h3><a class="anchor" name="logError" href="#logError"></a><code>logError(code,&nbsp;message)</code></h3>


This function log an error
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
      code</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="logPageView" href="#logPageView"></a><code>logPageView()</code></h3>


This function log a page view


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setLocation" href="#setLocation"></a><code>setLocation(location,&nbsp;message)</code></h3>


This function set the location for the event
(this is will only be used for very course grained statistics like city)
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
      location</td>
    <td>
      <code>FlurryAnalyticsLocation</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      message</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startSession" href="#startSession"></a><code>startSession()</code></h3>


This function start the session
Only needed for older versions of Android


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="endSession" href="#endSession"></a><code>endSession()</code></h3>


This function end the session
Only needed for older versions of Android


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





