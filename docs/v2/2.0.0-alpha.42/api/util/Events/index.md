---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.42"
versionHref: "/docs/v2/2.0.0-alpha.42"
path: ""
category: api
id: "{{Events | slugify}}"
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






<!-- description -->
<h2>Description</h2>

<p>Events is a pub/sub style event system for sending and responding to application-level
events across your app.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">// first page (publish an event when a user is created)
function createUser(user) {
  console.log(&#39;User created!&#39;)
  events.publish(&#39;user:created&#39;, user);
}

// second page (listen for the user created event)
events.subscribe(&#39;user:created&#39;, (user) =&gt; {
  console.log(&#39;Welcome&#39;, user); 
});
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="subscribe"></div>

<h3>
<code>subscribe(topic,&nbsp;handler)</code>
  

</h3>

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

<h3>
<code>unsubscribe(topic,&nbsp;handler)</code>
  

</h3>

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

<h3>
<code>publish(topic,&nbsp;eventData)</code>
  

</h3>

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






<!-- related link --><!-- end content block -->


<!-- end body block -->

