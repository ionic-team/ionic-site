---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.42"
versionHref: "/docs/v2/2.0.0-alpha.42"
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




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/scroll/pull-to-refresh.ts#L5'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/scroll/pull-to-refresh.ts#L5'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Refresher






</h1>






<!-- description -->
<h2>Description</h2>

<p>Allows you to add pull-to-refresh to an Content component.
Place it as the first child of your Content or Scroll element.</p>
<p>When refreshing is complete, call <code>refresher.complete()</code> from your controller.</p>


<h2>Component</h2>
<h3>selector: <code>ion-refresher</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;
  &lt;ion-refresher (starting)=&quot;doStarting()&quot;
                 (refresh)=&quot;doRefresh($event, refresher)&quot;
                 (pulling)=&quot;doPulling($event, amt)&quot;&gt;
  &lt;/ion-refresher&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">export class MyClass {
constructor(){}
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
}
</code></pre>




<!-- @property tags -->

<h2>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>
































<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
pullingIcon
</td>


<td>
string
</td>


<td>
the icon you want to display when you begin to pull down
</td>
</tr>

<tr>
<td>
pullingText
</td>


<td>
string
</td>


<td>
the text you want to display when you begin to pull down
</td>
</tr>

<tr>
<td>
refreshingIcon
</td>


<td>
string
</td>


<td>
the icon you want to display when performing a refresh
</td>
</tr>

<tr>
<td>
refreshingText
</td>


<td>
string
</td>


<td>
the text you want to display when performing a refresh
</td>
</tr>

<tr>
<td>
(refresh)
</td>


<td>
any
</td>


<td>
the methond on your class you want to perform when you refreshing
</td>
</tr>

<tr>
<td>
(starting)
</td>


<td>
any
</td>


<td>
the methond on your class you want to perform when you start pulling down
</td>
</tr>

<tr>
<td>
(pulling)
</td>


<td>
any
</td>


<td>
the methond on your class you want to perform when you are pulling down
</td>
</tr>

</tbody>
</table>


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

