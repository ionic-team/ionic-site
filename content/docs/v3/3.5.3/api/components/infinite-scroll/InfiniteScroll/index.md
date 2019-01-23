---
layout: "fluid/docs_base"
version: "3.5.3"
versionHref: "/docs/v3/3.5.3"
path: ""
category: api
id: "infinitescroll"
title: "InfiniteScroll"
header_sub_title: "Ionic API Documentation"
doc: "InfiniteScroll"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/infinite-scroll/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="infinite-scroll" href="#infinite-scroll"></a>

InfiniteScroll
<h3><code>ion-infinite-scroll</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/infinite-scroll/infinite-scroll.ts#L4">
Improve this doc
</a>






<p>The Infinite Scroll allows you to perform an action when the user
scrolls a specified distance from the bottom or top of the page.</p>
<p>The expression assigned to the <code>infinite</code> event is called when
the user scrolls to the specified distance. When this expression
has finished its tasks, it should call the <code>complete()</code> method
on the infinite scroll instance.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;

 &lt;ion-list&gt;
   &lt;ion-item *ngFor=&quot;let i of items&quot;&gt;{% raw %}{{i}}{% endraw %}&lt;/ion-item&gt;
 &lt;/ion-list&gt;

 &lt;ion-infinite-scroll (ionInfinite)=&quot;doInfinite($event)&quot;&gt;
   &lt;ion-infinite-scroll-content&gt;&lt;/ion-infinite-scroll-content&gt;
 &lt;/ion-infinite-scroll&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">@Component({...})
export class NewsFeedPage {
  items = [];

  constructor() {
    for (let i = 0; i &lt; 30; i++) {
      this.items.push( this.items.length );
    }
  }

  doInfinite(infiniteScroll) {
    console.log(&#39;Begin async operation&#39;);

    setTimeout(() =&gt; {
      for (let i = 0; i &lt; 30; i++) {
        this.items.push( this.items.length );
      }

      console.log(&#39;Async operation has ended&#39;);
      infiniteScroll.complete();
    }, 500);
  }

}
</code></pre>
<h2 id="-waitfor-method-of-infinitescroll"><code>waitFor</code> method of InfiniteScroll</h2>
<p>In case if your async operation returns promise you can utilize
<code>waitFor</code> method inside your template.</p>
<pre><code class="lang-html">&lt;ion-content&gt;

 &lt;ion-list&gt;
   &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{{item}}&lt;/ion-item&gt;
 &lt;/ion-list&gt;

 &lt;ion-infinite-scroll (ionInfinite)=&quot;$event.waitFor(doInfinite())&quot;&gt;
   &lt;ion-infinite-scroll-content&gt;&lt;/ion-infinite-scroll-content&gt;
 &lt;/ion-infinite-scroll&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">@Component({...})
export class NewsFeedPage {
  items = [];

  constructor() {
    for (var i = 0; i &lt; 30; i++) {
      this.items.push( this.items.length );
    }
  }

  doInfinite(): Promise&lt;any&gt; {
    console.log(&#39;Begin async operation&#39;);

    return new Promise((resolve) =&gt; {
      setTimeout(() =&gt; {
        for (var i = 0; i &lt; 30; i++) {
          this.items.push( this.items.length );
        }

        console.log(&#39;Async operation has ended&#39;);
        resolve();
      }, 500);
    })
  }
}
</code></pre>
<h2 id="infinite-scroll-content">Infinite Scroll Content</h2>
<p>By default, Ionic uses the infinite scroll spinner that looks
best for the platform the user is on. However, you can change the
default spinner or add text by adding properties to the
<code>ion-infinite-scroll-content</code> component.</p>
<pre><code class="lang-html">&lt;ion-content&gt;

  &lt;ion-infinite-scroll (ionInfinite)=&quot;doInfinite($event)&quot;&gt;
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

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="complete"></div>

<h3>
<a class="anchor" name="complete" href="#complete"></a>
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
<a class="anchor" name="enable" href="#enable"></a>
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
        <p>If the infinite scroll should be
enabled or not. Setting to <code>false</code> will remove scroll event listeners
and hide the display.</p>


      </td>
    </tr>

  </tbody>
</table>








<div id="waitFor"></div>

<h3>
<a class="anchor" name="waitFor" href="#waitFor"></a>
<code>waitFor()</code>


</h3>

Pass a promise inside `waitFor()` within the `infinite` output event handler in order to
change state of infiniteScroll to "complete"









<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
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
      <td>enabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, Whether or not the infinite scroll should be
enabled or not. Setting to <code>false</code> will remove scroll event listeners
and hide the display.</p>
</td>
    </tr>

    <tr>
      <td>position</td>
      <td><code>string</code></td>
      <td><p> The position of the infinite scroll element.
The value can be either <code>top</code> or <code>bottom</code>.
Default is <code>bottom</code>.</p>
</td>
    </tr>

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
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>ionInfinite</td>
      <td><p> Emitted when the scroll reaches
the threshold distance. From within your infinite handler,
you must call the infinite scroll&#39;s <code>complete()</code> method when
your async operation has completed.</p>
</td>
    </tr>

  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">

    <h3 ng-init="setSassPlatform('base')">All</h3>

  </div>



  <table ng-show="active === 'base'" id="sass-base" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><code>$infinite-scroll-loading-margin-top</code></td>

          <td><code>0</code></td>

        <td><p>Margin top of the infinite scroll loading icon</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-margin-end</code></td>

          <td><code>0</code></td>

        <td><p>Margin end of the infinite scroll loading icon</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-margin-bottom</code></td>

          <td><code>32px</code></td>

        <td><p>Margin bottom of the infinite scroll loading icon</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-margin-start</code></td>

          <td><code>0</code></td>

        <td><p>Margin start of the infinite scroll loading icon</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-color</code></td>

          <td><code>#666</code></td>

        <td><p>Color of the infinite scroll loading indicator</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-text-color</code></td>

          <td><code>$infinite-scroll-loading-color</code></td>

        <td><p>Text color of the infinite scroll loading indicator</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-text-margin-top</code></td>

          <td><code>4px</code></td>

        <td><p>Margin top of the infinite scroll loading text</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-text-margin-end</code></td>

          <td><code>32px</code></td>

        <td><p>Margin end of the infinite scroll loading text</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-text-margin-bottom</code></td>

          <td><code>0</code></td>

        <td><p>Margin bottom of the infinite scroll loading text</p>
</td>
      </tr>

      <tr>
        <td><code>$infinite-scroll-loading-text-margin-start</code></td>

          <td><code>32px</code></td>

        <td><p>Margin start of the infinite scroll loading text</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

