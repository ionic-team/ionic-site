---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "viewcontroller"
title: "ViewController"
header_sub_title: "Ionic API Documentation"
doc: "ViewController"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="view-controller" href="#view-controller"></a>

ViewController





</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/components/nav/view-controller.ts#L7">
Improve this doc
</a>






<p>Access various features and information about the current view.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { ViewController } from &#39;ionic-angular&#39;;

@Component({...})
export class MyPage{

  constructor(public viewCtrl: ViewController) {}

}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="willEnter"></div>

<h3>
<a class="anchor" name="willEnter" href="#willEnter"></a>
<code>willEnter</code>
  

</h3>

Observable to be subscribed to when the current component will become active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="didEnter"></div>

<h3>
<a class="anchor" name="didEnter" href="#didEnter"></a>
<code>didEnter</code>
  

</h3>

Observable to be subscribed to when the current component has become active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="willLeave"></div>

<h3>
<a class="anchor" name="willLeave" href="#willLeave"></a>
<code>willLeave</code>
  

</h3>

Observable to be subscribed to when the current component will no longer be active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="didLeave"></div>

<h3>
<a class="anchor" name="didLeave" href="#didLeave"></a>
<code>didLeave</code>
  

</h3>

Observable to be subscribed to when the current component is no long active






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="willUnload"></div>

<h3>
<a class="anchor" name="willUnload" href="#willUnload"></a>
<code>willUnload</code>
  

</h3>

Observable to be subscribed to when the current component will be destroyed






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="didUnload"></div>

<h3>
<a class="anchor" name="didUnload" href="#didUnload"></a>
<code>didUnload</code>
  

</h3>

Observable to be subscribed to when the current component has been destroyed






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="componentType"></div>

<h3>
<a class="anchor" name="componentType" href="#componentType"></a>
<code>componentType</code>
  

</h3>












<div id="enableBack"></div>

<h3>
<a class="anchor" name="enableBack" href="#enableBack"></a>
<code>enableBack(Check)</code>
  

</h3>

Check to see if you can go back in the navigation stack.


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
        Check
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>whether or not you can go back from this page</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns if it&#39;s possible to go back from this Page.</p>


</div>




<div id="index"></div>

<h3>
<a class="anchor" name="index" href="#index"></a>
<code>index</code>
  

</h3>

Get the index of the current component in the current navigation stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>Returns the index of this page within its <code>NavController</code>.</p>


</div>




<div id="isFirst"></div>

<h3>
<a class="anchor" name="isFirst" href="#isFirst"></a>
<code>isFirst()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns if this Page is the first in the stack of pages within its NavController.</p>


</div>




<div id="isLast"></div>

<h3>
<a class="anchor" name="isLast" href="#isLast"></a>
<code>isLast()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns if this Page is the last in the stack of pages within its NavController.</p>


</div>




<div id="hasNavbar"></div>

<h3>
<a class="anchor" name="hasNavbar" href="#hasNavbar"></a>
<code>hasNavbar()</code>
  

</h3>

Find out if the current component has a NavBar or not. Be sure
to wrap this in an `ionViewWillEnter` method in order to make sure
the view has rendered fully.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>Returns a boolean if this Page has a navbar or not.</p>


</div>




<div id="setBackButtonText"></div>

<h3>
<a class="anchor" name="setBackButtonText" href="#setBackButtonText"></a>
<code>setBackButtonText(backButtonText)</code>
  

</h3>

Change the title of the back-button. Be sure to call this
after `ionViewWillEnter` to make sure the  DOM has been rendered.


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
        backButtonText
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Set the back button text.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="showBackButton"></div>

<h3>
<a class="anchor" name="showBackButton" href="#showBackButton"></a>
<code>showBackButton(Set)</code>
  

</h3>

Set if the back button for the current view is visible or not. Be sure to call this
after `ionViewWillEnter` to make sure the  DOM has been rendered.


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
        Set
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>if this Page&#39;s back button should show or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="loaded"></div>

<h3>
<a class="anchor" name="loaded" href="#loaded"></a>
<code>loaded(done)</code>
  

</h3>

The loaded method is used to load any dynamic content/components
into the dom before proceeding with the transition.  If a component
needs dynamic component loading, extending ViewController and
overriding this method is a good option


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
        done
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>is a callback that must be called when async
loading/actions are completed</p>

        
      </td>
    </tr>
    
  </tbody>
</table>











<!-- related link --><!-- end content block -->


<!-- end body block -->

