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

---









<h1 class="api-title">


InfiniteScroll






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/infinite-scroll/infinite-scroll.ts#L2'>
Improve this doc
</a>






<p>The infinite scroll allows you to call a method whenever the user
gets to the bottom of the page or near the bottom of the page.</p>
<p>The expression you add to the <code>infinite</code> output event is called when
the user scrolls greater than distance away from the bottom of the
content. Once your <code>infinite</code> handler is done loading new data, it
should call the <code>endLoading()</code> method on the infinite scroll instance.</p>


<h2>Directive</h2>
<h3>selector: <code>ion-infinite</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;

 &lt;ion-list&gt;
   &lt;ion-item *ngFor=&quot;#i of items&quot;&gt;{{i}}&lt;/ion-item&gt;
 &lt;/ion-list&gt;

 &lt;ion-infinite (infinite)=&quot;doInfinite($event)&quot;&gt;
   &lt;ion-infinite-content&gt;&lt;/ion-infinite-content&gt;
 &lt;/ion-infinite&gt;

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
      infiniteScroll.endLoading();
    }, 500);
  }

}
</code></pre>
<h2 id="infinite-scroll-content">Infinite Scroll Content</h2>
<p>By default, Ionic provides the infinite scroll spinner that looks
best for the platform the user is on. However, you can change the
default spinner, along with adding text by adding properties to
the child <code>ion-infinite-content</code> component.</p>
<pre><code class="lang-html">&lt;ion-content&gt;

  &lt;ion-infinite (infinite)=&quot;doInfinite($event)&quot;&gt;
    &lt;ion-infinite-content
      loadingSpinner=&quot;bubbles&quot;
      loadingText=&quot;Loading more data...&quot;&gt;
    &lt;/ion-infinite-content&gt;
  &lt;/ion-infinite&gt;

&lt;/ion-content&gt;
</code></pre>
<h2 id="further-customizing-infinite-scroll-content">Further Customizing Infinite Scroll Content</h2>
<p>The <code>ion-infinite</code> component holds the infinite scroll logic, and it
requires a child infinite scroll content component for its display.
The <code>ion-infinite-content</code> component is Ionic&#39;s default that shows
the actual display of the infinite scroll and changes its look depending
on the infinite scroll&#39;s state. With this separation, it also allows
developers to create their own infinite scroll content components.
Ideas include having some cool SVG or CSS animations that are
customized to your app and animates to your liking.</p>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2>Instance Methods</h2>

<div id="state"></div>

<h3>
<code>state()</code>
  

</h3>












<div id="endLoading"></div>

<h3>
<code>endLoading()</code>
  

</h3>

Call `endLoading()` within the `infinite` output event handler when
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
      <td>threshold</td>
      <td><code>string</code></td>
      <td><p> The threshold distance from the bottom
of the content to call the <code>infinite</code> output event when scrolled.
The threshold input value can be either a percent, or
in pixels. For example, use the value of <code>10%</code> for the <code>infinite</code>
output event to get called when the scroll has 10% of the scroll
left until it reaches the bottom. Use the value <code>100px</code> when the
scroll is within 100 pixels from the bottom of the content.
Default is <code>15%</code>.</p>
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
      <td>infinite</td>
      <td><p> The expression to call when the scroll reaches
the threshold input distance. From within your infinite handler,
you must call the infinite scroll&#39;s <code>endLoading()</code> method when
your async operation has completed.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

