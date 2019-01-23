---
layout: "fluid/docs_base"
version: "3.0.0"
versionHref: "/docs/v3/3.0.0"
path: ""
category: api
id: "refresher"
title: "Refresher"
header_sub_title: "Ionic API Documentation"
doc: "Refresher"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/refresher/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="refresher" href="#refresher"></a>

Refresher
<h3><code>ion-refresher</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/refresher/refresher.ts#L8">
Improve this doc
</a>






<p>The Refresher provides pull-to-refresh functionality on a content component.
Place the <code>ion-refresher</code> as the first child of your <code>ion-content</code> element.</p>
<p>Pages can then listen to the refresher&#39;s various output events. The
<code>refresh</code> output event is fired when the user has pulled down far
enough to kick off the refreshing process. Once the async operation
has completed and the refreshing should end, call <code>complete()</code>.</p>
<p>Note: Do not wrap the <code>ion-refresher</code> in a <code>*ngIf</code>. It will not render
properly this way. Please use the <code>enabled</code> property instead to
display or hide the refresher.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;

  &lt;ion-refresher (ionRefresh)=&quot;doRefresh($event)&quot;&gt;
    &lt;ion-refresher-content&gt;&lt;/ion-refresher-content&gt;
  &lt;/ion-refresher&gt;

&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">@Component({...})
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

  &lt;ion-refresher (ionRefresh)=&quot;doRefresh($event)&quot;&gt;
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

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="cancel"></div>

<h3>
<a class="anchor" name="cancel" href="#cancel"></a>
<code>cancel()</code>


</h3>

Changes the refresher's state from `refreshing` to `cancelling`.










<div id="complete"></div>

<h3>
<a class="anchor" name="complete" href="#complete"></a>
<code>complete()</code>


</h3>

Call `complete()` when your async operation has completed.
For example, the `refreshing` state is while the app is performing
an asynchronous operation, such as receiving more data from an
AJAX request. Once the data has been received, you then call this
method to signify that the refreshing has completed and to close
the refresher. This method also changes the refresher's state from
`refreshing` to `completing`.










<div id="currentY"></div>

<h3>
<a class="anchor" name="currentY" href="#currentY"></a>
<code>currentY</code>


</h3>

The current touch or mouse event's Y coordinate.










<div id="deltaY"></div>

<h3>
<a class="anchor" name="deltaY" href="#deltaY"></a>
<code>deltaY</code>


</h3>

The distance between the start of the pull and the current touch or
mouse event's Y coordinate.










<div id="progress"></div>

<h3>
<a class="anchor" name="progress" href="#progress"></a>
<code>progress</code>


</h3>

A number representing how far down the user has pulled.
The number `0` represents the user hasn't pulled down at all. The
number `1`, and anything greater than `1`, represents that the user
has pulled far enough down that when they let go then the refresh will
happen. If they let go and the number is less than `1`, then the
refresh will not happen, and the content will return to it's original
position.










<div id="startY"></div>

<h3>
<a class="anchor" name="startY" href="#startY"></a>
<code>startY</code>


</h3>

The Y coordinate of where the user started to the pull down the content.










<div id="state"></div>

<h3>
<a class="anchor" name="state" href="#state"></a>
<code>state</code>


</h3>

The current state which the refresher is in. The refresher's states include:

- `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
- `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
- `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
- `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
- `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
- `completing` - The `refreshing` state has finished and the refresher is in the process of closing itself. Once closed, the refresher will go back to the `inactive` state.









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
      <td>closeDuration</td>
      <td><code>number</code></td>
      <td><p> How many milliseconds it takes to close the refresher. Default is <code>280</code>.</p>
</td>
    </tr>

    <tr>
      <td>enabled</td>
      <td><code>boolean</code></td>
      <td><p> If the refresher is enabled or not. This should be used in place of an <code>ngIf</code>. Default is <code>true</code>.</p>
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
      <td>pullMin</td>
      <td><code>number</code></td>
      <td><p> The min distance the user must pull down until the
refresher can go into the <code>refreshing</code> state. Default is <code>60</code>.</p>
</td>
    </tr>

    <tr>
      <td>snapbackDuration</td>
      <td><code>number</code></td>
      <td><p> How many milliseconds it takes the refresher to to snap back to the <code>refreshing</code> state. Default is <code>280</code>.</p>
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
      <td>ionPull</td>
      <td><p> Emitted while the user is pulling down the content and exposing the refresher.</p>
</td>
    </tr>

    <tr>
      <td>ionRefresh</td>
      <td><p> Emitted when the user lets go and has pulled down
far enough, which would be farther than the <code>pullMin</code>, then your refresh hander if
fired and the state is updated to <code>refreshing</code>. From within your refresh handler,
you must call the <code>complete()</code> method when your async operation has completed.</p>
</td>
    </tr>

    <tr>
      <td>ionStart</td>
      <td><p> Emitted when the user begins to start pulling down.</p>
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
        <td><code>$refresher-height</code></td>

          <td><code>60px</code></td>

        <td><p>Height of the refresher</p>
</td>
      </tr>

      <tr>
        <td><code>$refresher-icon-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the refresher icon</p>
</td>
      </tr>

      <tr>
        <td><code>$refresher-icon-font-size</code></td>

          <td><code>30px</code></td>

        <td><p>Font size of the refresher icon</p>
</td>
      </tr>

      <tr>
        <td><code>$refresher-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Text color of the refresher content</p>
</td>
      </tr>

      <tr>
        <td><code>$refresher-text-font-size</code></td>

          <td><code>16px</code></td>

        <td><p>Font size of the refresher content</p>
</td>
      </tr>

      <tr>
        <td><code>$refresher-border-color</code></td>

          <td><code>#ddd</code></td>

        <td><p>Border color of the refresher</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

