---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
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






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/content/content.ts#L8">
Improve this doc
</a>






<p>The Content component provides an easy to use content area with
some useful methods to control the scrollable area.</p>
<p>The content area can also implement pull-to-refresh with the
<a href="../../refresher/Refresher">Refresher</a> component.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-content</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;
  Add your content here!
&lt;/ion-content&gt;
</code></pre>
<p>To get a reference to the content component from a Page&#39;s logic,
you can use Angular&#39;s <code>@ViewChild</code> annotation:</p>
<pre><code class="lang-ts">import {ViewChild} from &#39;@angular/core&#39;;
import {Content} from &#39;ionic-angular&#39;;

@Page({...}
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

<div id="scrollTo"></div>

<h3>
<a class="anchor" name="scrollTo" href="#scrollTo"></a>
<code>scrollTo(x,&nbsp;y,&nbsp;duration)</code>
  

</h3>

Scroll to the specified position.

```ts
import {ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Page({
  template: `<ion-content>
               <button (click)="scrollTo()">Down 500px</button>
             </ion-content>`
)}
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollTo() {
    // set the scrollLeft to 0px, and scrollTop to 500px
    // the scroll duration should take 200ms
    this.content.scrollTo(0, 500, 200);
  }
}
```


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
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.</p>

        
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

```ts
import {ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Page({
  template: `<ion-content>
               <button (click)="scrollToTop()">Scroll to top</button>
             </ion-content>`
)}
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
```


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
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the scroll has completed.</p>


</div>




<div id="getScrollTop"></div>

<h3>
<a class="anchor" name="getScrollTop" href="#getScrollTop"></a>
<code>getScrollTop()</code>
  

</h3>

Get the `scrollTop` property of the content's scrollable element.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> 

</div>




<div id="setScrollTop"></div>

<h3>
<a class="anchor" name="setScrollTop" href="#setScrollTop"></a>
<code>setScrollTop(top)</code>
  

</h3>

Set the `scrollTop` property of the content's scrollable element.


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
        top
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>








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
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the scroll has completed.</p>


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


<!-- related link --><!-- end content block -->


<!-- end body block -->

