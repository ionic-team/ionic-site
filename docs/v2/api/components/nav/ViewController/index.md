---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/nav/view-controller.ts#L5">
Improve this doc
</a>






<p>Access various features and information about the current view.</p>

<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import {Page, ViewController} from &#39;ionic-angular&#39;;
@Page....
export class MyPage{
 constructor(viewCtrl: ViewController){
   this.viewCtrl = viewCtrl;
 }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="componentType"></div>

<h3>
<a class="anchor" name="componentType" href="#componentType"></a>
<code>componentType</code>
  

</h3>












<div id="subscribe"></div>

<h3>
<a class="anchor" name="subscribe" href="#subscribe"></a>
<code>subscribe()</code>
  

</h3>












<div id="onDismiss"></div>

<h3>
<a class="anchor" name="onDismiss" href="#onDismiss"></a>
<code>onDismiss()</code>
  

</h3>












<div id="dismiss"></div>

<h3>
<a class="anchor" name="dismiss" href="#dismiss"></a>
<code>dismiss()</code>
  

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

You can find out the index of the current view is in the current navigation stack.

```typescript
 export class Page1 {
   constructor(view: ViewController){
     this.view = view;
     // Just log out the index
     console.log(this.view.index);
   }
 }
```







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>Returns the index of this page within its NavController.</p>


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

You can find out of the current view has a Navbar or not. Be sure to wrap this in an `onPageWillEnter` method in order to make sure the view has rendered fully.

```typescript
export class Page1 {
 constructor(view: ViewController) {
   this.view = view
 }
 onPageWillEnter(){
   console.log('Do we have a Navbar?', this.view.hasNavbar());
 }
}
```







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

You can change the text of the back button on a view-by-view basis.

```ts
export class MyClass{
 constructor(viewCtrl: ViewController){
   this.viewCtrl = viewCtrl
 }
 onPageWillEnter() {
   this.viewCtrl.setBackButtonText('Previous');
 }
}
```
Make sure you use the view events when calling this method, otherwise the back-button will not have been created



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

Set if the back button for the current view is visible or not. Be sure to wrap this in `onPageWillEnter` to make sure the has been compleltly rendered.


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






<!-- related link --><!-- end content block -->


<!-- end body block -->

