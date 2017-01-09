---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "slides"
title: "Slides"
header_sub_title: "Ionic API Documentation"
doc: "Slides"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/slides/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="slides" href="#slides"></a>

Slides
<h3><code>ion-slides</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/slides/slides.ts#L12">
Improve this doc
</a>






<p>The Slides component is a multi-section container. Each section can be swiped
or dragged between. It contains any number of <a href="../Slide">Slide</a> components.</p>
<h3 id="creating">Creating</h3>
<p>You should use a template to create slides and listen to slide events. The template
should contain the slide container, an <code>&lt;ion-slides&gt;</code> element, and any number of
<a href="../Slide">Slide</a> components, written as <code>&lt;ion-slide&gt;</code>. Basic configuration
values can be set as input properties, which are listed below. Slides events
can also be listened to such as the slide changing by placing the event on the
<code>&lt;ion-slides&gt;</code> element. See <a href="#usage">Usage</a> below for more information.</p>
<h3 id="navigating">Navigating</h3>
<p>After creating and configuring the slides, you can navigate between them
by swiping or calling methods on the <code>Slides</code> instance. You can call <code>slideTo()</code> to
navigate to a specific slide, or <code>slideNext()</code> to change to the slide that follows
the active slide. All of the <a href="#instance-members">methods</a> provided by the <code>Slides</code>
instance are listed below. See <a href="#usage">Usage</a> below for more information on
navigating between slides.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

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
    console.log(&quot;Current index is&quot;, currentIndex);
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="height"></div>

<h3>
<a class="anchor" name="height" href="#height"></a>
<code>height</code>
  

</h3>

Height of container.











<div id="width"></div>

<h3>
<a class="anchor" name="width" href="#width"></a>
<code>width</code>
  

</h3>

Width of container.











<div id="virtualTranslate"></div>

<h3>
<a class="anchor" name="virtualTranslate" href="#virtualTranslate"></a>
<code>virtualTranslate</code>
  

</h3>

Enabled this option and swiper will be operated as usual except it will
not move, real translate values on wrapper will not be set. Useful when
you may need to create custom slide transition.











<div id="roundLengths"></div>

<h3>
<a class="anchor" name="roundLengths" href="#roundLengths"></a>
<code>roundLengths</code>
  

</h3>

Set to true to round values of slides width and height to prevent blurry
texts on usual resolution screens (if you have such)











<div id="spaceBetween"></div>

<h3>
<a class="anchor" name="spaceBetween" href="#spaceBetween"></a>
<code>spaceBetween</code>
  

</h3>












<div id="slidesPerView"></div>

<h3>
<a class="anchor" name="slidesPerView" href="#slidesPerView"></a>
<code>slidesPerView</code>
  

</h3>












<div id="slidesPerColumn"></div>

<h3>
<a class="anchor" name="slidesPerColumn" href="#slidesPerColumn"></a>
<code>slidesPerColumn</code>
  

</h3>












<div id="slidesPerColumnFill"></div>

<h3>
<a class="anchor" name="slidesPerColumnFill" href="#slidesPerColumnFill"></a>
<code>slidesPerColumnFill</code>
  

</h3>












<div id="slidesPerGroup"></div>

<h3>
<a class="anchor" name="slidesPerGroup" href="#slidesPerGroup"></a>
<code>slidesPerGroup</code>
  

</h3>












<div id="centeredSlides"></div>

<h3>
<a class="anchor" name="centeredSlides" href="#centeredSlides"></a>
<code>centeredSlides</code>
  

</h3>












<div id="slidesOffsetBefore"></div>

<h3>
<a class="anchor" name="slidesOffsetBefore" href="#slidesOffsetBefore"></a>
<code>slidesOffsetBefore</code>
  

</h3>












<div id="slidesOffsetAfter"></div>

<h3>
<a class="anchor" name="slidesOffsetAfter" href="#slidesOffsetAfter"></a>
<code>slidesOffsetAfter</code>
  

</h3>












<div id="touchEventsTarget"></div>

<h3>
<a class="anchor" name="touchEventsTarget" href="#touchEventsTarget"></a>
<code>touchEventsTarget</code>
  

</h3>












<div id="autoplayDisableOnInteraction"></div>

<h3>
<a class="anchor" name="autoplayDisableOnInteraction" href="#autoplayDisableOnInteraction"></a>
<code>autoplayDisableOnInteraction</code>
  

</h3>












<div id="autoplayStopOnLast"></div>

<h3>
<a class="anchor" name="autoplayStopOnLast" href="#autoplayStopOnLast"></a>
<code>autoplayStopOnLast</code>
  

</h3>












<div id="freeMode"></div>

<h3>
<a class="anchor" name="freeMode" href="#freeMode"></a>
<code>freeMode</code>
  

</h3>












<div id="freeModeMomentum"></div>

<h3>
<a class="anchor" name="freeModeMomentum" href="#freeModeMomentum"></a>
<code>freeModeMomentum</code>
  

</h3>












<div id="freeModeMomentumRatio"></div>

<h3>
<a class="anchor" name="freeModeMomentumRatio" href="#freeModeMomentumRatio"></a>
<code>freeModeMomentumRatio</code>
  

</h3>












<div id="freeModeMomentumBounce"></div>

<h3>
<a class="anchor" name="freeModeMomentumBounce" href="#freeModeMomentumBounce"></a>
<code>freeModeMomentumBounce</code>
  

</h3>












<div id="freeModeMomentumBounceRatio"></div>

<h3>
<a class="anchor" name="freeModeMomentumBounceRatio" href="#freeModeMomentumBounceRatio"></a>
<code>freeModeMomentumBounceRatio</code>
  

</h3>












<div id="freeModeMomentumVelocityRatio"></div>

<h3>
<a class="anchor" name="freeModeMomentumVelocityRatio" href="#freeModeMomentumVelocityRatio"></a>
<code>freeModeMomentumVelocityRatio</code>
  

</h3>












<div id="freeModeSticky"></div>

<h3>
<a class="anchor" name="freeModeSticky" href="#freeModeSticky"></a>
<code>freeModeSticky</code>
  

</h3>












<div id="freeModeMinimumVelocity"></div>

<h3>
<a class="anchor" name="freeModeMinimumVelocity" href="#freeModeMinimumVelocity"></a>
<code>freeModeMinimumVelocity</code>
  

</h3>












<div id="autoHeight"></div>

<h3>
<a class="anchor" name="autoHeight" href="#autoHeight"></a>
<code>autoHeight</code>
  

</h3>












<div id="setWrapperSize"></div>

<h3>
<a class="anchor" name="setWrapperSize" href="#setWrapperSize"></a>
<code>setWrapperSize</code>
  

</h3>












<div id="zoomMax"></div>

<h3>
<a class="anchor" name="zoomMax" href="#zoomMax"></a>
<code>zoomMax</code>
  

</h3>












<div id="zoomMin"></div>

<h3>
<a class="anchor" name="zoomMin" href="#zoomMin"></a>
<code>zoomMin</code>
  

</h3>












<div id="zoomToggle"></div>

<h3>
<a class="anchor" name="zoomToggle" href="#zoomToggle"></a>
<code>zoomToggle</code>
  

</h3>












<div id="touchRatio"></div>

<h3>
<a class="anchor" name="touchRatio" href="#touchRatio"></a>
<code>touchRatio</code>
  

</h3>












<div id="touchAngle"></div>

<h3>
<a class="anchor" name="touchAngle" href="#touchAngle"></a>
<code>touchAngle</code>
  

</h3>












<div id="simulateTouch"></div>

<h3>
<a class="anchor" name="simulateTouch" href="#simulateTouch"></a>
<code>simulateTouch</code>
  

</h3>












<div id="shortSwipes"></div>

<h3>
<a class="anchor" name="shortSwipes" href="#shortSwipes"></a>
<code>shortSwipes</code>
  

</h3>












<div id="longSwipes"></div>

<h3>
<a class="anchor" name="longSwipes" href="#longSwipes"></a>
<code>longSwipes</code>
  

</h3>












<div id="longSwipesRatio"></div>

<h3>
<a class="anchor" name="longSwipesRatio" href="#longSwipesRatio"></a>
<code>longSwipesRatio</code>
  

</h3>












<div id="longSwipesMs"></div>

<h3>
<a class="anchor" name="longSwipesMs" href="#longSwipesMs"></a>
<code>longSwipesMs</code>
  

</h3>












<div id="followFinger"></div>

<h3>
<a class="anchor" name="followFinger" href="#followFinger"></a>
<code>followFinger</code>
  

</h3>












<div id="onlyExternal"></div>

<h3>
<a class="anchor" name="onlyExternal" href="#onlyExternal"></a>
<code>onlyExternal</code>
  

</h3>












<div id="threshold"></div>

<h3>
<a class="anchor" name="threshold" href="#threshold"></a>
<code>threshold</code>
  

</h3>












<div id="touchMoveStopPropagation"></div>

<h3>
<a class="anchor" name="touchMoveStopPropagation" href="#touchMoveStopPropagation"></a>
<code>touchMoveStopPropagation</code>
  

</h3>












<div id="touchReleaseOnEdges"></div>

<h3>
<a class="anchor" name="touchReleaseOnEdges" href="#touchReleaseOnEdges"></a>
<code>touchReleaseOnEdges</code>
  

</h3>












<div id="iOSEdgeSwipeDetection"></div>

<h3>
<a class="anchor" name="iOSEdgeSwipeDetection" href="#iOSEdgeSwipeDetection"></a>
<code>iOSEdgeSwipeDetection</code>
  

</h3>












<div id="iOSEdgeSwipeThreshold"></div>

<h3>
<a class="anchor" name="iOSEdgeSwipeThreshold" href="#iOSEdgeSwipeThreshold"></a>
<code>iOSEdgeSwipeThreshold</code>
  

</h3>












<div id="paginationClickable"></div>

<h3>
<a class="anchor" name="paginationClickable" href="#paginationClickable"></a>
<code>paginationClickable</code>
  

</h3>












<div id="paginationHide"></div>

<h3>
<a class="anchor" name="paginationHide" href="#paginationHide"></a>
<code>paginationHide</code>
  

</h3>












<div id="resistance"></div>

<h3>
<a class="anchor" name="resistance" href="#resistance"></a>
<code>resistance</code>
  

</h3>












<div id="resistanceRatio"></div>

<h3>
<a class="anchor" name="resistanceRatio" href="#resistanceRatio"></a>
<code>resistanceRatio</code>
  

</h3>












<div id="watchSlidesProgress"></div>

<h3>
<a class="anchor" name="watchSlidesProgress" href="#watchSlidesProgress"></a>
<code>watchSlidesProgress</code>
  

</h3>












<div id="watchSlidesVisibility"></div>

<h3>
<a class="anchor" name="watchSlidesVisibility" href="#watchSlidesVisibility"></a>
<code>watchSlidesVisibility</code>
  

</h3>












<div id="preventClicks"></div>

<h3>
<a class="anchor" name="preventClicks" href="#preventClicks"></a>
<code>preventClicks</code>
  

</h3>












<div id="preventClicksPropagation"></div>

<h3>
<a class="anchor" name="preventClicksPropagation" href="#preventClicksPropagation"></a>
<code>preventClicksPropagation</code>
  

</h3>












<div id="slideToClickedSlide"></div>

<h3>
<a class="anchor" name="slideToClickedSlide" href="#slideToClickedSlide"></a>
<code>slideToClickedSlide</code>
  

</h3>












<div id="loopAdditionalSlides"></div>

<h3>
<a class="anchor" name="loopAdditionalSlides" href="#loopAdditionalSlides"></a>
<code>loopAdditionalSlides</code>
  

</h3>












<div id="loopedSlides"></div>

<h3>
<a class="anchor" name="loopedSlides" href="#loopedSlides"></a>
<code>loopedSlides</code>
  

</h3>












<div id="swipeHandler"></div>

<h3>
<a class="anchor" name="swipeHandler" href="#swipeHandler"></a>
<code>swipeHandler</code>
  

</h3>












<div id="noSwiping"></div>

<h3>
<a class="anchor" name="noSwiping" href="#noSwiping"></a>
<code>noSwiping</code>
  

</h3>












<div id="runCallbacksOnInit"></div>

<h3>
<a class="anchor" name="runCallbacksOnInit" href="#runCallbacksOnInit"></a>
<code>runCallbacksOnInit</code>
  

</h3>












<div id="keyboardControl"></div>

<h3>
<a class="anchor" name="keyboardControl" href="#keyboardControl"></a>
<code>keyboardControl</code>
  

</h3>












<div id="coverflow"></div>

<h3>
<a class="anchor" name="coverflow" href="#coverflow"></a>
<code>coverflow</code>
  

</h3>












<div id="flip"></div>

<h3>
<a class="anchor" name="flip" href="#flip"></a>
<code>flip</code>
  

</h3>












<div id="cube"></div>

<h3>
<a class="anchor" name="cube" href="#cube"></a>
<code>cube</code>
  

</h3>












<div id="fade"></div>

<h3>
<a class="anchor" name="fade" href="#fade"></a>
<code>fade</code>
  

</h3>












<div id="prevSlideMessage"></div>

<h3>
<a class="anchor" name="prevSlideMessage" href="#prevSlideMessage"></a>
<code>prevSlideMessage</code>
  

</h3>












<div id="nextSlideMessage"></div>

<h3>
<a class="anchor" name="nextSlideMessage" href="#nextSlideMessage"></a>
<code>nextSlideMessage</code>
  

</h3>












<div id="firstSlideMessage"></div>

<h3>
<a class="anchor" name="firstSlideMessage" href="#firstSlideMessage"></a>
<code>firstSlideMessage</code>
  

</h3>












<div id="lastSlideMessage"></div>

<h3>
<a class="anchor" name="lastSlideMessage" href="#lastSlideMessage"></a>
<code>lastSlideMessage</code>
  

</h3>












<div id="originalEvent"></div>

<h3>
<a class="anchor" name="originalEvent" href="#originalEvent"></a>
<code>originalEvent</code>
  

</h3>












<div id="nextButton"></div>

<h3>
<a class="anchor" name="nextButton" href="#nextButton"></a>
<code>nextButton</code>
  

</h3>












<div id="prevButton"></div>

<h3>
<a class="anchor" name="prevButton" href="#prevButton"></a>
<code>prevButton</code>
  

</h3>












<div id="slideTo"></div>

<h3>
<a class="anchor" name="slideTo" href="#slideTo"></a>
<code>slideTo(index,&nbsp;speed,&nbsp;runCallbacks)</code>
  

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
        <p>Whether or not to emit the <code>ionWillChange</code>/<code>ionDidChange</code> events. Default true.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="slideNext"></div>

<h3>
<a class="anchor" name="slideNext" href="#slideNext"></a>
<code>slideNext(speed,&nbsp;runCallbacks)</code>
  

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
        <p>Whether or not to emit the <code>ionWillChange</code>/<code>ionDidChange</code> events. Default true.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="slidePrev"></div>

<h3>
<a class="anchor" name="slidePrev" href="#slidePrev"></a>
<code>slidePrev(speed,&nbsp;runCallbacks)</code>
  

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
        <p>Whether or not to emit the <code>ionWillChange</code>/<code>ionDidChange</code> events. Default true.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getActiveIndex"></div>

<h3>
<a class="anchor" name="getActiveIndex" href="#getActiveIndex"></a>
<code>getActiveIndex()</code>
  

</h3>

Get the index of the active slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The index number of the current slide.</p>


</div>




<div id="getPreviousIndex"></div>

<h3>
<a class="anchor" name="getPreviousIndex" href="#getPreviousIndex"></a>
<code>getPreviousIndex()</code>
  

</h3>

Get the index of the previous slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The index number of the previous slide.</p>


</div>




<div id="length"></div>

<h3>
<a class="anchor" name="length" href="#length"></a>
<code>length()</code>
  

</h3>

Get the total number of slides.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The total number of slides.</p>


</div>




<div id="isEnd"></div>

<h3>
<a class="anchor" name="isEnd" href="#isEnd"></a>
<code>isEnd()</code>
  

</h3>

Get whether or not the current slide is the last slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>If the slide is the last slide or not.</p>


</div>




<div id="isBeginning"></div>

<h3>
<a class="anchor" name="isBeginning" href="#isBeginning"></a>
<code>isBeginning()</code>
  

</h3>

Get whether or not the current slide is the first slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>If the slide is the first slide or not.</p>


</div>




<div id="startAutoplay"></div>

<h3>
<a class="anchor" name="startAutoplay" href="#startAutoplay"></a>
<code>startAutoplay()</code>
  

</h3>

Start auto play.











<div id="stopAutoplay"></div>

<h3>
<a class="anchor" name="stopAutoplay" href="#stopAutoplay"></a>
<code>stopAutoplay()</code>
  

</h3>

Stop auto play.











<div id="lockSwipeToNext"></div>

<h3>
<a class="anchor" name="lockSwipeToNext" href="#lockSwipeToNext"></a>
<code>lockSwipeToNext()</code>
  

</h3>

Lock or unlock the ability to slide to the next slides.











<div id="lockSwipeToPrev"></div>

<h3>
<a class="anchor" name="lockSwipeToPrev" href="#lockSwipeToPrev"></a>
<code>lockSwipeToPrev()</code>
  

</h3>

Lock or unlock the ability to slide to the previous slides.











<div id="lockSwipes"></div>

<h3>
<a class="anchor" name="lockSwipes" href="#lockSwipes"></a>
<code>lockSwipes()</code>
  

</h3>

Lock or unlock the ability to slide to change slides.











<div id="enableKeyboardControl"></div>

<h3>
<a class="anchor" name="enableKeyboardControl" href="#enableKeyboardControl"></a>
<code>enableKeyboardControl()</code>
  

</h3>

Enable or disable keyboard control.










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
      <td>autoplay</td>
      <td><code>number</code></td>
      <td><p>  Delay between transitions (in milliseconds). If this
parameter is not passed, autoplay is disabled. Default does
not have a value and does not autoplay.</p>
</td>
    </tr>
    
    <tr>
      <td>effect</td>
      <td><code>string</code></td>
      <td><p> Could be <code>slide</code>, <code>fade</code>, <code>cube</code>, <code>coverflow</code> or <code>flip</code>.
Default: <code>slide</code>.</p>
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
      <td>initialSlide</td>
      <td><code>number</code></td>
      <td><p>  Index number of initial slide. Default: <code>0</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>loop</td>
      <td><code>boolean</code></td>
      <td><p>  Whether to continuously loop from the last slide to the
first slide. Default: <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>pager</td>
      <td><code>boolean</code></td>
      <td><p>  String with type of pagination. Can be
<code>bullets</code>, <code>fraction</code>, <code>progress</code>. Default does not have
pagination set.</p>
</td>
    </tr>
    
    <tr>
      <td>paginationType</td>
      <td><code>boolean</code></td>
      <td><p>  String with type of pagination. Can be
<code>bullets</code>, <code>fraction</code>, <code>progress</code>. Default: <code>bullets</code>.
(Note that the pager will not show unless <code>pager</code> input
is set to true).</p>
</td>
    </tr>
    
    <tr>
      <td>parallax</td>
      <td><code></code></td>
      <td><p>Enable, if you want to use &quot;parallaxed&quot; elements inside of
slider. Default: <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>speed</td>
      <td><code>number</code></td>
      <td><p>  Duration of transition between slides
(in milliseconds). Default: <code>300</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>zoom</td>
      <td><code>boolean</code></td>
      <td><p>  Set to <code>true</code> to enable zooming functionality.
Default: <code>false</code>.</p>
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
      <td>ionSlideWillChange</td>
      <td><p> Expression to evaluate when a slide change starts.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideDidChange</td>
      <td><p> Expression to evaluate when a slide change ends.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideDrag</td>
      <td><p> Expression to evaluate when a slide moves.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideReachStart</td>
      <td><p> When slides reach its beginning (initial position).</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideReachEnd</td>
      <td><p> When slides reach its last slide.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideAutoplay</td>
      <td><p> Expression to evaluate when a slide moves.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideAutoplayStart</td>
      <td><p> Same as <code>ionWillChange</code> but caused by autoplay.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideAutoplayStop</td>
      <td><p> Expression to evaluate when a autoplay stops.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideNextStart</td>
      <td><p> Same as <code>ionWillChange</code> but for &quot;forward&quot; direction only.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlidePrevStart</td>
      <td><p> Same as <code>ionWillChange</code> but for &quot;backward&quot; direction only.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideNextEnd</td>
      <td><p> Same as <code>ionDidChange</code> but for &quot;forward&quot; direction only.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlidePrevEnd</td>
      <td><p> Same as <code>ionDidChange</code> but for &quot;backward&quot; direction only.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideTap</td>
      <td><p> When the user taps/clicks on the slide&#39;s container.</p>
</td>
    </tr>
    
    <tr>
      <td>ionSlideDoubleTap</td>
      <td><p> When the user double taps on the slide&#39;s container.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#slides'>Slides Component Docs</a>

Adopted from Swiper.js:
The most modern mobile touch slider and framework with
hardware accelerated transitions.

http://www.idangero.us/swiper/

Copyright 2016, Vladimir Kharlampidi
The iDangero.us
http://www.idangero.us/

Licensed under MIT<!-- end content block -->


<!-- end body block -->

