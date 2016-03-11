---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "infinitescroll"
title: "InfiniteScroll"
header_sub_title: "Class in module "
doc: "InfiniteScroll"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/infinite-scroll/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a name="infinite-scroll"></a>

InfiniteScroll






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/infinite-scroll/infinite-scroll.ts#L2'>
Improve this doc
</a>






<p>The Infinite Scroll allows you to perform an action when the user
scrolls a specified distance from the bottom of the page.</p>
<p>The expression assigned to the <code>infinite</code> event is called when
the user scrolls to the specified distance. When this expression
has finished its tasks, it should call the <code>complete()</code> method
on the infinite scroll instance.</p>


<h2><a name="Directive"></a>Directive</h2>
<h3>selector: <code>ion-infinite-scroll</code></h3>
<!-- @usage tag -->

<h2><a name="usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;

 &lt;ion-list&gt;
   &lt;ion-item *ngFor=&quot;#i of items&quot;&gt;{{i}}&lt;/ion-item&gt;
 &lt;/ion-list&gt;

 &lt;ion-infinite-scroll (infinite)=&quot;doInfinite($event)&quot;&gt;
   &lt;ion-infinite-scroll-content&gt;&lt;/ion-infinite-scroll-content&gt;
 &lt;/ion-infinite-scroll&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">@Page({...})
export class NewsFeedPage {

  constructor() {
    this.items = [];
    for (var i = 0; i &lt; 30; i++) {
      this.items.push( this.items.length );
    }
  }

  doInfinite(infiniteScroll) {
    console.log(&#39;Begin async operation&#39;);

    setTimeout(() =&gt; {
      for (var i = 0; i &lt; 30; i++) {
        this.items.push( this.items.length );
      }

      console.log(&#39;Async operation has ended&#39;);
      infiniteScroll.complete();
    }, 500);
  }

}
</code></pre>
<h2 id="infinite-scroll-content">Infinite Scroll Content</h2>
<p>By default, Ionic uses the infinite scroll spinner that looks
best for the platform the user is on. However, you can change the
default spinner or add text by adding properties to the
<code>ion-infinite-scroll-content</code> component.</p>
<pre><code class="lang-html">&lt;ion-content&gt;

  &lt;ion-infinite-scroll (infinite)=&quot;doInfinite($event)&quot;&gt;
    &lt;ion-infinite-scroll-content
      loadingSpinner=&quot;bubbles&quot;
      loadingText=&quot;Loading more data...&quot;&gt;
    &lt;/ion-infinite-scroll-content&gt;
  &lt;/ion-infinite-scroll&gt;

&lt;/ion-content&gt;
</code></pre>
<h2 id="further-customizing-infinite-scroll-content">Further Customizing Infinite Scroll Content</h2>
<p>The <code>ion-infinite-scroll</code> component holds the infinite scroll logic.
It requires a child component in order to display the content.
Ionic uses <code>ion-infinite-scroll-content</code> by default. This component
displays the infinite scroll and changes the look depending
on the infinite scroll&#39;s state. Separating these components allows
developers to create their own infinite scroll content components.
You could replace our default content with custom SVG or CSS animations.</p>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a name="instance-methods"></a>Instance Methods</h2>

<div id="state"></div>

<h3>
<code>state()</code>
  

</h3>












<div id="complete"></div>

<h3>
<code>complete()</code>
  

</h3>

Call `complete()` within the `infinite` output event handler when
your async operation has completed. For example, the `loading`
state is while the app is performing an asynchronous operation,
such as receiving more data from an AJAX request to add more items
to a data list. Once the data has been received and UI updated, you
then call this method to signify that the loading has completed.
This method will change the infinite scroll's state from `loading`
to `enabled`.











<div id="enable"></div>

<h3>
<code>enable(shouldEnable)</code>
  

</h3>

Call `enable(false)` to disable the infinite scroll from actively
trying to receive new data while scrolling. This method is useful
when it is known that there is no more data that can be added, and
the infinite scroll is no longer needed.


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
        shouldEnable
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>If the infinite scroll should be enabled or not. Setting to <code>false</code> will remove scroll event listeners and hide the display.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>







<!-- input methods on the class -->
<h2><a name="input-properties"></a>Input Properties</h2>
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
      <td>threshold</td>
      <td><code>string</code></td>
      <td><p> The threshold distance from the bottom
of the content to call the <code>infinite</code> output event when scrolled.
The threshold value can be either a percent, or
in pixels. For example, use the value of <code>10%</code> for the <code>infinite</code>
output event to get called when the user has scrolled 10%
from the bottom of the page. Use the value <code>100px</code> when the
scroll is within 100 pixels from the bottom of the page.
Default is <code>15%</code>.</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a name="output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>infinite</td>
      <td><p> The expression to call when the scroll reaches
the threshold distance. From within your infinite handler,
you must call the infinite scroll&#39;s <code>complete()</code> method when
your async operation has completed.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

