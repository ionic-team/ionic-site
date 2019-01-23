---
layout: "fluid/docs_base"
version: "3.6.1"
versionHref: "/docs/v3/3.6.1"
path: ""
category: api
id: "slides"
title: "Slides"
header_sub_title: "Ionic API Documentation"
doc: "Slides"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/slides/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="slides" href="#slides"></a>

Slides
<h3><code>ion-slides</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/slides/slides.ts#L21">
Improve this doc
</a>






<p>The Slides component is a multi-section container. Each section can be swiped
or dragged between. It contains any number of <a href="../Slide">Slide</a> components.</p>
<h3><a class="anchor" name="creating" href="#creating">Creating</a></h3>

<p>You should use a template to create slides and listen to slide events. The template
should contain the slide container, an <code>&lt;ion-slides&gt;</code> element, and any number of
<a href="../Slide">Slide</a> components, written as <code>&lt;ion-slide&gt;</code>. Basic configuration
values can be set as input properties, which are listed below. Slides events
can also be listened to such as the slide changing by placing the event on the
<code>&lt;ion-slides&gt;</code> element. See <a href="#usage">Usage</a> below for more information.</p>
<h3><a class="anchor" name="navigating" href="#navigating">Navigating</a></h3>

<p>After creating and configuring the slides, you can navigate between them
by swiping or calling methods on the <code>Slides</code> instance. You can call <code>slideTo()</code> to
navigate to a specific slide, or <code>slideNext()</code> to change to the slide that follows
the active slide. All of the <a href="#instance-members">methods</a> provided by the <code>Slides</code>
instance are listed below. See <a href="#usage">Usage</a> below for more information on
navigating between slides.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<p>You can add slides to a <code>@Component</code> using the following template:</p>
<pre><code class="lang-html">&lt;ion-slides&gt;
  &lt;ion-slide&gt;
    &lt;h1&gt;Slide 1&lt;/h1&gt;
  &lt;/ion-slide&gt;
  &lt;ion-slide&gt;
    &lt;h1&gt;Slide 2&lt;/h1&gt;
  &lt;/ion-slide&gt;
  &lt;ion-slide&gt;
    &lt;h1&gt;Slide 3&lt;/h1&gt;
  &lt;/ion-slide&gt;
&lt;/ion-slides&gt;
</code></pre>
<p>Next, we can use <code>ViewChild</code> to assign the Slides instance to
your <code>slides</code> property. Now we can call any of the <code>Slides</code>
<a href="#instance-members">methods</a>, for example we can use the Slide&#39;s
<code>slideTo()</code> method in order to navigate to a specific slide on
a button click. Below we call the <code>goToSlide()</code> method and it
navigates to the 3rd slide:</p>
<pre><code class="lang-ts">import { ViewChild } from &#39;@angular/core&#39;;
import { Slides } from &#39;ionic-angular&#39;;

class MyPage {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
}
</code></pre>
<p>We can also add events to listen to on the <code>&lt;ion-slides&gt;</code> element.
Let&#39;s add the <code>ionSlideDidChange</code> event and call a method when the slide changes:</p>
<pre><code class="lang-html">&lt;ion-slides (ionSlideDidChange)=&quot;slideChanged()&quot;&gt;
</code></pre>
<p>In our class, we add the <code>slideChanged()</code> method which gets the active
index and prints it:</p>
<pre><code class="lang-ts">class MyPage {
  ...

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log(&#39;Current index is&#39;, currentIndex);
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="controlBy"></div>

<h3>
<a class="anchor" name="controlBy" href="#controlBy">
<code>controlBy</code>


</a>
</h3>











<div id="controlInverse"></div>

<h3>
<a class="anchor" name="controlInverse" href="#controlInverse">
<code>controlInverse</code>


</a>
</h3>











<div id="enableKeyboardControl"></div>

<h3>
<a class="anchor" name="enableKeyboardControl" href="#enableKeyboardControl">
<code>enableKeyboardControl(shouldEnableKeyboard)</code>


</a>
</h3>

Enable or disable keyboard control.


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
        shouldEnableKeyboard


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>If set to true the slider can be controled by a keyboard.</p>


      </td>
    </tr>

  </tbody>
</table>








<div id="getActiveIndex"></div>

<h3>
<a class="anchor" name="getActiveIndex" href="#getActiveIndex">
<code>getActiveIndex()</code>


</a>
</h3>

Get the index of the active slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code> <p>The index number of the current slide.</p>


</div>




<div id="getPreviousIndex"></div>

<h3>
<a class="anchor" name="getPreviousIndex" href="#getPreviousIndex">
<code>getPreviousIndex()</code>


</a>
</h3>

Get the index of the previous slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code> <p>The index number of the previous slide.</p>


</div>




<div id="isBeginning"></div>

<h3>
<a class="anchor" name="isBeginning" href="#isBeginning">
<code>isBeginning()</code>


</a>
</h3>

Get whether or not the current slide is the first slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>boolean</code> <p>If the slide is the first slide or not.</p>


</div>




<div id="isEnd"></div>

<h3>
<a class="anchor" name="isEnd" href="#isEnd">
<code>isEnd()</code>


</a>
</h3>

Get whether or not the current slide is the last slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>boolean</code> <p>If the slide is the last slide or not.</p>


</div>




<div id="length"></div>

<h3>
<a class="anchor" name="length" href="#length">
<code>length()</code>


</a>
</h3>

Get the total number of slides.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>number</code> <p>The total number of slides.</p>


</div>




<div id="lockSwipeToNext"></div>

<h3>
<a class="anchor" name="lockSwipeToNext" href="#lockSwipeToNext">
<code>lockSwipeToNext(shouldLockSwipeToNext)</code>


</a>
</h3>

Lock or unlock the ability to slide to the next slides.


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
        shouldLockSwipeToNext


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>If set to true the user will not be able to swipe to the next slide.
Set to false to unlock this behaviour.</p>


      </td>
    </tr>

  </tbody>
</table>








<div id="lockSwipeToPrev"></div>

<h3>
<a class="anchor" name="lockSwipeToPrev" href="#lockSwipeToPrev">
<code>lockSwipeToPrev(shouldLockSwipeToPrev)</code>


</a>
</h3>

Lock or unlock the ability to slide to the previous slides.


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
        shouldLockSwipeToPrev


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>If set to true the user will not be able to swipe to the previous slide.
Set to false to unlock this behaviour.</p>


      </td>
    </tr>

  </tbody>
</table>








<div id="lockSwipes"></div>

<h3>
<a class="anchor" name="lockSwipes" href="#lockSwipes">
<code>lockSwipes(shouldLockSwipes)</code>


</a>
</h3>

Lock or unlock the ability to slide to change slides.


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
        shouldLockSwipes


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>If set to true user can not swipe in either direction on slide.
False allows swiping in both directions.</p>


      </td>
    </tr>

  </tbody>
</table>








<div id="resize"></div>

<h3>
<a class="anchor" name="resize" href="#resize">
<code>resize()</code>


</a>
</h3>











<div id="slideNext"></div>

<h3>
<a class="anchor" name="slideNext" href="#slideNext">
<code>slideNext(speed,&nbsp;runCallbacks)</code>


</a>
</h3>

Transition to the next slide.



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
        speed


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>Transition duration (in ms).<strong class="tag">Optional</strong></p>


      </td>
    </tr>

    <tr>
      <td>
        runCallbacks


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to emit the <code>ionSlideWillChange</code>/<code>ionSlideDidChange</code> events. Default true.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>








<div id="slidePrev"></div>

<h3>
<a class="anchor" name="slidePrev" href="#slidePrev">
<code>slidePrev(speed,&nbsp;runCallbacks)</code>


</a>
</h3>

Transition to the previous slide.



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
        speed


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>Transition duration (in ms).<strong class="tag">Optional</strong></p>


      </td>
    </tr>

    <tr>
      <td>
        runCallbacks


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to emit the <code>ionSlideWillChange</code>/<code>ionSlideDidChange</code> events. Default true.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>








<div id="slideTo"></div>

<h3>
<a class="anchor" name="slideTo" href="#slideTo">
<code>slideTo(index,&nbsp;speed,&nbsp;runCallbacks)</code>


</a>
</h3>

Transition to the specified slide.



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
        index


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>The index number of the slide.</p>


      </td>
    </tr>

    <tr>
      <td>
        speed


      </td>
      <td>

  <code>number</code>
      </td>
      <td>
        <p>Transition duration (in ms).<strong class="tag">Optional</strong></p>


      </td>
    </tr>

    <tr>
      <td>
        runCallbacks


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to emit the <code>ionSlideWillChange</code>/<code>ionSlideDidChange</code> events. Default true.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>








<div id="startAutoplay"></div>

<h3>
<a class="anchor" name="startAutoplay" href="#startAutoplay">
<code>startAutoplay()</code>


</a>
</h3>

Start auto play.










<div id="stopAutoplay"></div>

<h3>
<a class="anchor" name="stopAutoplay" href="#stopAutoplay">
<code>stopAutoplay()</code>


</a>
</h3>

Stop auto play.










<div id="update"></div>

<h3>
<a class="anchor" name="update" href="#update">
<code>update()</code>


</a>
</h3>

Update the underlying slider implementation. Call this if you've added or removed
child slides.









<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties">Input Properties</a></h2>
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
      <td>autoplay</td>
      <td><code>number</code></td>
      <td><p> Delay between transitions (in milliseconds). If this
parameter is not passed, autoplay is disabled. Default does
not have a value and does not autoplay.
Default: <code>null</code>.</p>
</td>
    </tr>

    <tr>
      <td>centeredSlides</td>
      <td><code>boolean</code></td>
      <td><p> Center a slide in the middle of the screen.</p>
</td>
    </tr>

    <tr>
      <td>control</td>
      <td><code>Slides</code></td>
      <td><p> Pass another Slides instance or array of Slides instances
that should be controlled by this Slides instance.
Default: <code>null</code>.</p>
</td>
    </tr>

    <tr>
      <td>dir</td>
      <td><code>string</code></td>
      <td><p> If dir attribute is equal to rtl, set interal _rtl to true;</p>
</td>
    </tr>

    <tr>
      <td>direction</td>
      <td><code>string</code></td>
      <td><p>  Swipe direction: &#39;horizontal&#39; or &#39;vertical&#39;.
Default: <code>horizontal</code>.</p>
</td>
    </tr>

    <tr>
      <td>effect</td>
      <td><code>string</code></td>
      <td><p> The animation effect of the slides.
Possible values are: <code>slide</code>, <code>fade</code>, <code>cube</code>, <code>coverflow</code> or <code>flip</code>.
Default: <code>slide</code>.</p>
</td>
    </tr>

    <tr>
      <td>initialSlide</td>
      <td><code>number</code></td>
      <td><p>  Index number of initial slide. Default: <code>0</code>.</p>
</td>
    </tr>

    <tr>
      <td>loop</td>
      <td><code>boolean</code></td>
      <td><p> If true, continuously loop from the last slide to the
first slide.</p>
</td>
    </tr>

    <tr>
      <td>pager</td>
      <td><code>boolean</code></td>
      <td><p>  If true, show the pager.</p>
</td>
    </tr>

    <tr>
      <td>paginationType</td>
      <td><code>string</code></td>
      <td><p>  Type of pagination. Possible values are:
<code>bullets</code>, <code>fraction</code>, <code>progress</code>. Default: <code>bullets</code>.
(Note that the pager will not show unless <code>pager</code> input
is set to true).</p>
</td>
    </tr>

    <tr>
      <td>parallax</td>
      <td><code>boolean</code></td>
      <td><p> If true, allows you to use &quot;parallaxed&quot; elements inside of
slider.</p>
</td>
    </tr>

    <tr>
      <td>slidesPerView</td>
      <td><code>number</code></td>
      <td><p> Slides per view. Slides visible at the same time. Default: <code>1</code>.</p>
</td>
    </tr>

    <tr>
      <td>spaceBetween</td>
      <td><code>number</code></td>
      <td><p> Distance between slides in px. Default: <code>0</code>.</p>
</td>
    </tr>

    <tr>
      <td>speed</td>
      <td><code>number</code></td>
      <td><p> Duration of transition between slides
(in milliseconds). Default: <code>300</code>.</p>
</td>
    </tr>

    <tr>
      <td>zoom</td>
      <td><code>boolean</code></td>
      <td><p> If true, enables zooming functionality.</p>
</td>
    </tr>

  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events">Output Events</a></h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>ionSlideAutoplay</td>
      <td><p> Emitted when a slide moves.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideAutoplayStart</td>
      <td><p> Emitted when a autoplay starts.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideAutoplayStop</td>
      <td><p> Emitted when a autoplay stops.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideDidChange</td>
      <td><p> Emitted when a slide change ends.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideDoubleTap</td>
      <td><p> Emitted when the user double taps on the slide&#39;s container.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideDrag</td>
      <td><p> Emitted when a slide moves.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideNextEnd</td>
      <td><p> Emitted when a slide change ends with the &quot;forward&quot; direction.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideNextStart</td>
      <td><p> Emitted when a slide change starts with the &quot;forward&quot; direction.</p>
</td>
    </tr>

    <tr>
      <td>ionSlidePrevEnd</td>
      <td><p> Emitted when a slide change ends with the &quot;backward&quot; direction.</p>
</td>
    </tr>

    <tr>
      <td>ionSlidePrevStart</td>
      <td><p> Emitted when a slide change starts with the &quot;backward&quot; direction.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideReachEnd</td>
      <td><p> Emitted when slides reaches its last slide.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideReachStart</td>
      <td><p> Emitted when slides reaches its beginning (initial position).</p>
</td>
    </tr>

    <tr>
      <td>ionSlideTap</td>
      <td><p> Emitted when the user taps/clicks on the slide&#39;s container.</p>
</td>
    </tr>

    <tr>
      <td>ionSlideWillChange</td>
      <td><p> Emitted when a slide change starts.</p>
</td>
    </tr>

  </tbody>
</table><h2><a class="anchor" name="advanced" href="#advanced">Advanced</a></h2>
<p>There are several options available to create customized slides. Ionic exposes
the most commonly used options as <a href="http://learnangular2.com/inputs/">inputs</a>.
In order to use an option that isn&#39;t exposed as an input the following code
should be used, where <code>freeMode</code> is the option to change:</p>
<pre><code class="lang-ts">import { ViewChild } from &#39;@angular/core&#39;;
import { Slides } from &#39;ionic-angular&#39;;

class MyPage {
  @ViewChild(Slides) slides: Slides;

  ngAfterViewInit() {
    this.slides.freeMode = true;
  }
}
</code></pre>
<p>To see all of the available options, take a look at the
<a href="https://github.com/ionic-team/ionic/blob/master/src/components/slides/slides.ts">source for slides</a>.</p>





<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/v3/components#slides">Slides Component Docs</a>

Adopted from Swiper.js:
The most modern mobile touch slider and framework with
hardware accelerated transitions.

http://www.idangero.us/swiper/

Copyright 2016, Vladimir Kharlampidi
The iDangero.us
http://www.idangero.us/

Licensed under MIT<!-- end content block -->


<!-- end body block -->

