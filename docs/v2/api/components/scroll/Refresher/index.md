---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "refresher"
title: "Refresher"
header_sub_title: "Class in module "
doc: "Refresher"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/refresher/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Refresher






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/scroll/pull-to-refresh.ts#L6'>
Improve this doc
</a>






<p>Allows you to add pull-to-refresh to an Content component.
Place it as the first child of your Content or Scroll element.</p>
<p>When refreshing is complete, call <code>refresher.complete()</code> from your controller.</p>


<h2>Component</h2>
<h3>selector: <code>ion-refresher</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;
  &lt;ion-refresher (start)=&quot;doStart($event)&quot;
                 (refresh)=&quot;doRefresh($event)&quot;
                 (pulling)=&quot;doPulling($event)&quot;&gt;
  &lt;/ion-refresher&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">export class MyClass {

  doRefresh(refresher) {
    console.log(&#39;Doing Refresh&#39;, refresher)

    setTimeout(() =&gt; {
      refresher.complete();
      console.log(&quot;Complete&quot;);
    }, 5000);
  }

  doStart(refresher) {
    console.log(&#39;Doing Start&#39;, refresher);
  }

  doPulling(refresher) {
    console.log(&#39;Pulling&#39;, refresher);
  }

}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2>Input Properties</h2>
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
      <td>pullingIcon</td>
      <td><code>string</code></td>
      <td><p> the icon you want to display when you begin to pull down</p>
</td>
    </tr>
    
    <tr>
      <td>pullingText</td>
      <td><code>string</code></td>
      <td><p> the text you want to display when you begin to pull down</p>
</td>
    </tr>
    
    <tr>
      <td>refreshingIcon</td>
      <td><code>string</code></td>
      <td><p> the icon you want to display when performing a refresh</p>
</td>
    </tr>
    
    <tr>
      <td>refreshingText</td>
      <td><code>string</code></td>
      <td><p> the text you want to display when performing a refresh</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>pulling</td>
      <td><p> When you are pulling down</p>
</td>
    </tr>
    
    <tr>
      <td>refresh</td>
      <td><p> When you are refreshing</p>
</td>
    </tr>
    
    <tr>
      <td>start</td>
      <td><p> When you start pulling down</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

