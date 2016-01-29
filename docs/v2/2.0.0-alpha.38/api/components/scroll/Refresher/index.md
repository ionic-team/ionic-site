---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.38"
versionHref: "/docs/v2/2.0.0-alpha.38"
path: ""
category: api
id: "refresher"
title: "Refresher"
header_sub_title: "Class in module "
doc: "Refresher"
docType: "class"
---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/scroll/pull-to-refresh.ts#L4'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/scroll/pull-to-refresh.ts#L4'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">


Refresher






</h1>






<h2>Description</h2>

<p>Allows you to add pull-to-refresh to an Content component.</p>
<p>Place it as the first child of your Content or Scroll element.</p>
<p>When refreshing is complete, call <code>refresher.complete()</code> from your controller.</p>


<h2>Component</h2>
<h3>selector: <code>ion-refresher</code></h3>
<h2>Usage</h2>


<pre><code class="lang-ts">&lt;ion-refresher (starting)=&quot;doStarting()&quot; (refresh)=&quot;doRefresh($event, refresher)&quot; (pulling)=&quot;doPulling($event, amt)&quot;&gt;


doRefresh(refresher) {
  console.log(&#39;Refreshing!&#39;, refresher);

  setTimeout(() =&gt; {
    console.log(&#39;Pull to refresh complete!&#39;, refresher);
    refresher.complete();
  })
}

doStarting() {
  console.log(&#39;Pull started!&#39;);
}

doPulling(amt) {
  console.log(&#39;You have pulled&#39;, amt);
}
</code></pre>







<h2>Methods</h2>

<div id="onInit"></div>

<h3>
<code>onInit()</code>

</h3>












<div id="initEvents"></div>

<h3>
<code>initEvents()</code>

</h3>

Initialize touch and scroll event listeners.











<div id="onDehydrate"></div>

<h3>
<code>onDehydrate()</code>

</h3>












<div id="overscroll"></div>

<h3>
<code>overscroll(val)</code>

</h3>

TODO



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
        val
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="nativescroll"></div>

<h3>
<code>nativescroll(target, newScrollTop)</code>

</h3>

TODO



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
        target
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        newScrollTop
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="setScrollLock"></div>

<h3>
<code>setScrollLock(enabled)</code>

</h3>

TODO



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
        enabled
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="activate"></div>

<h3>
<code>activate()</code>

</h3>

TODO











<div id="deactivate"></div>

<h3>
<code>deactivate()</code>

</h3>

TODO











<div id="start"></div>

<h3>
<code>start()</code>

</h3>












<div id="show"></div>

<h3>
<code>show()</code>

</h3>

TODO











<div id="hide"></div>

<h3>
<code>hide()</code>

</h3>

TODO











<div id="tail"></div>

<h3>
<code>tail()</code>

</h3>

TODO











<div id="complete"></div>

<h3>
<code>complete()</code>

</h3>

TODO











<div id="scrollTo"></div>

<h3>
<code>scrollTo(Y, duration, callback)</code>

</h3>

TODO



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
        Y
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        duration
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>







<!-- end content block -->


<!-- end body block -->


