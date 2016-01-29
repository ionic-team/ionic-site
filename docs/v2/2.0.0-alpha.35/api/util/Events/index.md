---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.35"
versionHref: "/docs/v2/2.0.0-alpha.35"
path: ""
category: api
id: "events"
title: "Events"
header_sub_title: "Class in module "
doc: "Events"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/util/events.ts#L0'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/util/events.ts#L0'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Events



</h1>





<p>Events is a pub/sub style event system for sending and responding to application-level
events across your app.</p>


<h1 class="class export">Events <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/util/events.ts#L1-L87">ionic/util/events.ts (line 1)</a>
</p>
## Members

<div id="subscribe"></div>
<h2>
  <code>subscribe(topic, handler)</code>

</h2>

Subscribe to an event topic. Events that get posted to that topic
will trigger the provided handler.




<table class="table" style="margin:0;">
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
        topic
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the topic to subscribe to</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        handler
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the event handler</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="unsubscribe"></div>
<h2>
  <code>unsubscribe(topic, handler)</code>

</h2>

Unsubscribe from the given topic. Your handler will
no longer receive events published to this topic.




<table class="table" style="margin:0;">
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
        topic
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the topic to unsubscribe from</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        handler
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the event handler</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
   true if a handler was removed






<div id="publish"></div>
<h2>
  <code>publish(topic, eventData)</code>

</h2>

Publish an event to the given topic.




<table class="table" style="margin:0;">
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
        topic
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the topic to publish to</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        eventData
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the data to send as the event</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









