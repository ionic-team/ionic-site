---
layout: "fluid/docs_base"
version: "3.5.0"
versionHref: "/docs/v3/3.5.0"
path: ""
category: api
id: "content"
title: "Content"
header_sub_title: "Ionic API Documentation"
doc: "Content"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="content" href="#content"></a>

Content
<h3><code>ion-content</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/content/content.ts#L25">
Improve this doc
</a>






<p>The Content component provides an easy to use content area with
some useful methods to control the scrollable area. There should
only be one content in a single view component. If additional scrollable
elements are need, use <a href="../../scroll/Scroll">ionScroll</a>.</p>
<p>The content area can also implement pull-to-refresh with the
<a href="../../refresher/Refresher">Refresher</a> component.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;
  Add your content here!
&lt;/ion-content&gt;
</code></pre>
<p>To get a reference to the content component from a Page&#39;s logic,
you can use Angular&#39;s <code>@ViewChild</code> annotation:</p>
<pre><code class="lang-ts">import { Component, ViewChild } from &#39;@angular/core&#39;;
import { Content } from &#39;ionic-angular&#39;;

@Component({...})
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="addImg"></div>

<h3>
<a class="anchor" name="addImg" href="#addImg"></a>
<code>addImg()</code>


</h3>











<div id="contentBottom"></div>

<h3>
<a class="anchor" name="contentBottom" href="#contentBottom"></a>
<code>contentBottom</code>


</h3>

A number representing how many pixels the bottom of the content has been
adjusted, which could be by either padding or margin. This adjustment
is to account for the space needed for the footer.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="contentHeight"></div>

<h3>
<a class="anchor" name="contentHeight" href="#contentHeight"></a>
<code>contentHeight</code>


</h3>

Content height of the viewable area. This does not include content
which is outside the overflow area, or content area which is under
headers and footers. Read-only.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="contentTop"></div>

<h3>
<a class="anchor" name="contentTop" href="#contentTop"></a>
<code>contentTop</code>


</h3>

A number representing how many pixels the top of the content has been
adjusted, which could be by either padding or margin. This adjustment
is to account for the space needed for the header.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="contentWidth"></div>

<h3>
<a class="anchor" name="contentWidth" href="#contentWidth"></a>
<code>contentWidth</code>


</h3>

Content width including content which is not visible on the screen
due to overflow. Read-only.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="directionX"></div>

<h3>
<a class="anchor" name="directionX" href="#directionX"></a>
<code>directionX</code>


</h3>

The current, or last known, horizontal scroll direction. Possible
string values include `right` and `left`.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>string</code>

</div>




<div id="directionY"></div>

<h3>
<a class="anchor" name="directionY" href="#directionY"></a>
<code>directionY</code>


</h3>

The current, or last known, vertical scroll direction. Possible
string values include `down` and `up`.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>string</code>

</div>




<div id="getContentDimensions"></div>

<h3>
<a class="anchor" name="getContentDimensions" href="#getContentDimensions"></a>
<code>getContentDimensions()</code>


</h3>

Returns the content and scroll elements' dimensions.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>object</code> <p><span class="fixed-width">dimensions</span>  The content and scroll elements&#39; dimensions</p>


<table class="table returns-object-table param-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td class="fixed-width">
            dimensions.contentHeight
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>content offsetHeight</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.contentTop
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>content offsetTop</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.contentBottom
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>content offsetTop+offsetHeight</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.contentWidth
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>content offsetWidth</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.contentLeft
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>content offsetLeft</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.contentRight
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>content offsetLeft + offsetWidth</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.scrollHeight
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>scroll scrollHeight</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.scrollTop
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>scroll scrollTop</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.scrollBottom
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>scroll scrollTop + scrollHeight</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.scrollWidth
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>scroll scrollWidth</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.scrollLeft
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>scroll scrollLeft</p>

          </td>
        </tr>

        <tr>
          <td class="fixed-width">
            dimensions.scrollRight
          </td>
          <td>
            <code>number</code>
          </td>
          <td>
            <p>scroll scrollLeft + scrollWidth</p>

          </td>
        </tr>

      </tbody>
    </table>

</div>




<div id="getFixedElement"></div>

<h3>
<a class="anchor" name="getFixedElement" href="#getFixedElement"></a>
<code>getFixedElement()</code>


</h3>











<div id="isScrolling"></div>

<h3>
<a class="anchor" name="isScrolling" href="#isScrolling"></a>
<code>isScrolling</code>


</h3>

If the content is actively scrolling or not.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>boolean</code>

</div>




<div id="resize"></div>

<h3>
<a class="anchor" name="resize" href="#resize"></a>
<code>resize()</code>


</h3>

Tell the content to recalculate its dimensions. This should be called
after dynamically adding/removing headers, footers, or tabs.










<div id="scrollHeight"></div>

<h3>
<a class="anchor" name="scrollHeight" href="#scrollHeight"></a>
<code>scrollHeight</code>


</h3>

Content height including content which is not visible on the screen
due to overflow. Read-only.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="scrollLeft"></div>

<h3>
<a class="anchor" name="scrollLeft" href="#scrollLeft"></a>
<code>scrollLeft</code>


</h3>

The distance of the content's left to its leftmost visible content.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="scrollTo"></div>

<h3>
<a class="anchor" name="scrollTo" href="#scrollTo"></a>
<code>scrollTo(x,&nbsp;y,&nbsp;duration)</code>


</h3>

Scroll to the specified position.



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
        x


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>The x-value to scroll to.</p>


      </td>
    </tr>

    <tr>
      <td>
        y


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>The y-value to scroll to.</p>


      </td>
    </tr>

    <tr>
      <td>
        duration


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Promise</code> <p>Returns a promise which is resolved when the scroll has completed.</p>


</div>




<div id="scrollToBottom"></div>

<h3>
<a class="anchor" name="scrollToBottom" href="#scrollToBottom"></a>
<code>scrollToBottom(duration)</code>


</h3>

Scroll to the bottom of the content component.



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
        duration


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Promise</code> <p>Returns a promise which is resolved when the scroll has completed.</p>


</div>




<div id="scrollToTop"></div>

<h3>
<a class="anchor" name="scrollToTop" href="#scrollToTop"></a>
<code>scrollToTop(duration)</code>


</h3>

Scroll to the top of the content component.



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
        duration


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Promise</code> <p>Returns a promise which is resolved when the scroll has completed.</p>


</div>




<div id="scrollTop"></div>

<h3>
<a class="anchor" name="scrollTop" href="#scrollTop"></a>
<code>scrollTop</code>


</h3>

The distance of the content's top to its topmost visible content.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>




<div id="scrollWidth"></div>

<h3>
<a class="anchor" name="scrollWidth" href="#scrollWidth"></a>
<code>scrollWidth</code>


</h3>

Content width including content which is not visible due to
overflow. Read-only.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code>

</div>



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
      <td>fullscreen</td>
      <td><code>boolean</code></td>
      <td><p> If true, the content will scroll behind the headers
and footers. This effect can easily be seen by setting the toolbar
to transparent.</p>
</td>
    </tr>

    <tr>
      <td>scrollDownOnLoad</td>
      <td><code>boolean</code></td>
      <td><p> If true, the content will scroll down on load.</p>
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
      <td>ionScroll</td>
      <td><p> Emitted on every scroll event.</p>
</td>
    </tr>

    <tr>
      <td>ionScrollEnd</td>
      <td><p> Emitted when scrolling ends.</p>
</td>
    </tr>

    <tr>
      <td>ionScrollStart</td>
      <td><p> Emitted when the scrolling first starts.</p>
</td>
    </tr>

  </tbody>
</table><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<h3 id="sroll-events">Sroll Events</h3>
<p>Scroll events happen outside of Angular&#39;s Zones. This is for performance reasons. So
if you&#39;re trying to bind a value to any scroll event, it will need to be wrapped in
a <code>zone.run()</code></p>
<pre><code class="lang-ts">import { Component, NgZone } from &#39;@angular/core&#39;;
@Component({
  template: `
    &lt;ion-header&gt;
      &lt;ion-navbar&gt;
        &lt;ion-title&gt;{{scrollAmount}}&lt;/ion-title&gt;
      &lt;/ion-navbar&gt;
    &lt;/ion-header&gt;
    &lt;ion-content (ionScroll)=&quot;scrollHandler($event)&quot;&gt;
       &lt;p&gt; Some realllllllly long content &lt;/p&gt;
    &lt;/ion-content&gt;
`})
class E2EPage {
 public scrollAmount = 0;
 constructor( public zone: NgZone){}
 scrollHandler(event) {
   console.log(`ScrollEvent: ${event}`)
   this.zone.run(()=&gt;{
     // since scrollAmount is data-binded,
     // the update needs to happen in zone
     this.scrollAmount++
   })
 }
}
</code></pre>
<p>This goes for any scroll event, not just <code>ionScroll</code>.</p>
<h3 id="resizing-the-content">Resizing the content</h3>
<p>If the height of <code>ion-header</code>, <code>ion-footer</code> or <code>ion-tabbar</code>
changes dynamically, <code>content.resize()</code> has to be called in order to update the
layout of <code>Content</code>.</p>
<pre><code class="lang-ts">@Component({
  template: `
    &lt;ion-header&gt;
      &lt;ion-navbar&gt;
        &lt;ion-title&gt;Main Navbar&lt;/ion-title&gt;
      &lt;/ion-navbar&gt;
      &lt;ion-toolbar *ngIf=&quot;showToolbar&quot;&gt;
        &lt;ion-title&gt;Dynamic Toolbar&lt;/ion-title&gt;
      &lt;/ion-toolbar&gt;
    &lt;/ion-header&gt;
    &lt;ion-content&gt;
      &lt;button ion-button (click)=&quot;toggleToolbar()&quot;&gt;Toggle Toolbar&lt;/button&gt;
    &lt;/ion-content&gt;
`})

class E2EPage {
  @ViewChild(Content) content: Content;
  showToolbar: boolean = false;

  toggleToolbar() {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }
}
</code></pre>
<p>Scroll to a specific position</p>
<pre><code class="lang-ts">import { Component, ViewChild } from &#39;@angular/core&#39;;
import { Content } from &#39;ionic-angular&#39;;

@Component({
  template: `&lt;ion-content&gt;
               &lt;button ion-button (click)=&quot;scrollTo()&quot;&gt;Down 500px&lt;/button&gt;
             &lt;/ion-content&gt;`
)}
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollTo() {
    // set the scrollLeft to 0px, and scrollTop to 500px
    // the scroll duration should take 200ms
    this.content.scrollTo(0, 500, 200);
  }
}
</code></pre>



  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">

    <h3 ng-init="setSassPlatform('ios')">iOS</h3>

  </div>



  <table ng-show="active === 'ios'" id="sass-ios" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><code>$content-ios-outer-background</code></td>

          <td><code>#efeff4</code></td>

        <td><p>Background color of the outer content</p>
</td>
      </tr>

      <tr>
        <td><code>$content-ios-transition-background</code></td>

          <td><code>#000</code></td>

        <td><p>Background color of the content when making transition</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

