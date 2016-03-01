---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.2"
versionHref: "/docs/v2/2.0.0-beta.2"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/refresher/refresher.ts#L6'>
Improve this doc
</a>






<p>The Refresher provides pull-to-refresh functionality on a content component.
Place the <code>ion-refresher</code> as the first child of your <code>ion-content</code> element.</p>
<p>Pages can then listen to the refresher&#39;s various output events. The
<code>refresh</code> output event is fired when the user has pulled down far
enough to kick off the refreshing process. Once the async operation
has completed and the refreshing should end, call <code>complete()</code>.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-refresher</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;

  &lt;ion-refresher (refresh)=&quot;doRefresh($event)&quot;&gt;
    &lt;ion-refresher-content&gt;&lt;/ion-refresher-content&gt;
  &lt;/ion-refresher&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">@Page({...})
export class NewsFeedPage {

  doRefresh(refresher) {
    console.log(&#39;Begin async operation&#39;, refresher);

    setTimeout(() =&gt; {
      console.log(&#39;Async operation has ended&#39;);
      refresher.complete();
    }, 2000);
  }

}
</code></pre>
<h2 id="refresher-content">Refresher Content</h2>
<p>By default, Ionic provides the pulling icon and refreshing spinner that
looks best for the platform the user is on. However, you can change the
default icon and spinner, along with adding text for each state by
adding properties to the child <code>ion-refresher-content</code> component.</p>
<pre><code class="lang-html">&lt;ion-content&gt;

  &lt;ion-refresher (refresh)=&quot;doRefresh($event)&quot;&gt;
    &lt;ion-refresher-content
      pullingIcon=&quot;arrow-dropdown&quot;
      pullingText=&quot;Pull to refresh&quot;
      refreshingSpinner=&quot;circles&quot;
      refreshingText=&quot;Refreshing...&quot;&gt;
    &lt;/ion-refresher-content&gt;
  &lt;/ion-refresher&gt;

&lt;/ion-content&gt;
</code></pre>
<h2 id="further-customizing-refresher-content">Further Customizing Refresher Content</h2>
<p>The <code>ion-refresher</code> component holds the refresh logic. 
It requires a child component in order to display the content. 
Ionic uses <code>ion-refresher-content</code> by default. This component
displays the refresher and changes the look depending
on the refresher&#39;s state. Separating these components
allows developers to create their own refresher content 
components. You could replace our default content with 
custom SVG or CSS animations.</p>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2>Instance Methods</h2>

<div id="state"></div>

<h3>
<code>state()</code>
  

</h3>

The current state which the refresher is in. The refresher's states include:

- `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
- `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
- `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
- `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
- `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
- `completing` - The `refreshing` state has finished and the refresher is in the process of closing itself. Once closed, the refresher will go back to the `inactive` state.











<div id="startY"></div>

<h3>
<code>startY()</code>
  

</h3>

The Y coordinate of where the user started to the pull down the content.











<div id="currentY"></div>

<h3>
<code>currentY()</code>
  

</h3>

The current touch or mouse event's Y coordinate.











<div id="deltaY"></div>

<h3>
<code>deltaY()</code>
  

</h3>

The distance between the start of the pull and the current touch or
mouse event's Y coordinate.











<div id="progress"></div>

<h3>
<code>progress()</code>
  

</h3>

A number representing how far down the user has pulled.
The number `0` represents the user hasn't pulled down at all. The
number `1`, and anything greater than `1`, represents that the user
has pulled far enough down that when they let go then the refresh will
happen. If they let go and the number is less than `1`, then the
refresh will not happen, and the content will return to it's original
position.











<div id="complete"></div>

<h3>
<code>complete()</code>
  

</h3>

Call `complete()` when your async operation has completed.
For example, the `refreshing` state is while the app is performing
an asynchronous operation, such as receiving more data from an
AJAX request. Once the data has been received, you then call this
method to signify that the refreshing has completed and to close
the refresher. This method also changes the refresher's state from
`refreshing` to `completing`.











<div id="cancel"></div>

<h3>
<code>cancel()</code>
  

</h3>

Changes the refresher's state from `refreshing` to `cancelling`.










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
      <td>pullMin</td>
      <td><code>number</code></td>
      <td><p> The min distance the user must pull down until the
refresher can go into the <code>refreshing</code> state. Default is <code>60</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>pullMax</td>
      <td><code>number</code></td>
      <td><p> The maximum distance of the pull until the refresher
will automatically go into the <code>refreshing</code> state. By default, the pull
maximum will be the result of <code>pullMin + 60</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>closeDuration</td>
      <td><code>number</code></td>
      <td><p> How many milliseconds it takes to close the refresher. Default is <code>280</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>snapbackDuration</td>
      <td><code>number</code></td>
      <td><p> How many milliseconds it takes the refresher to to snap back to the <code>refreshing</code> state. Default is <code>280</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>enabled</td>
      <td><code>boolean</code></td>
      <td><p> If the refresher is enabled or not. Default is <code>true</code>.</p>
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
      <td>refresh</td>
      <td><p> When the user lets go and has pulled down far enough, which would be
farther than the <code>pullMin</code>, then your refresh hander if fired and the state is
updated to <code>refreshing</code>. From within your refresh handler, you must call the
<code>complete()</code> method when your async operation has completed.</p>
</td>
    </tr>
    
    <tr>
      <td>pulling</td>
      <td><p> While the user is pulling down the content and exposing the refresher.</p>
</td>
    </tr>
    
    <tr>
      <td>start</td>
      <td><p> When the user begins to start pulling down.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

