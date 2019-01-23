---
layout: "fluid/docs_base"
version: "3.7.1"
versionHref: "/docs/v3/3.7.1"
path: ""
category: api
id: "keyboard"
title: "Keyboard"
header_sub_title: "Ionic API Documentation"
doc: "Keyboard"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="keyboard" href="#keyboard"></a>

Keyboard





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/platform/keyboard.ts#L6">
Improve this doc
</a>






<p>The <code>Keyboard</code> class allows you to work with the keyboard events provided
by the Ionic keyboard plugin.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">export class MyClass {

  constructor(public keyboard: Keyboard) { }

}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="close"></div>

<h3>
<a class="anchor" name="close" href="#close">
<code>close()</code>
  

</a>
</h3>

Programmatically close the keyboard.










<div id="didHide"></div>

<h3>
<a class="anchor" name="didHide" href="#didHide">
<code>didHide</code>
  

</a>
</h3>











<div id="didShow"></div>

<h3>
<a class="anchor" name="didShow" href="#didShow">
<code>didShow</code>
  

</a>
</h3>











<div id="eventsAvailable"></div>

<h3>
<a class="anchor" name="eventsAvailable" href="#eventsAvailable">
<code>eventsAvailable</code>
  

</a>
</h3>











<div id="hasFocusedTextInput"></div>

<h3>
<a class="anchor" name="hasFocusedTextInput" href="#hasFocusedTextInput">
<code>hasFocusedTextInput()</code>
  

</a>
</h3>











<div id="isOpen"></div>

<h3>
<a class="anchor" name="isOpen" href="#isOpen">
<code>isOpen()</code>
  

</a>
</h3>

Check to see if the keyboard is open or not.

```ts
export class MyClass {
  constructor(public keyboard: Keyboard) {

  }

  keyboardCheck() {
    console.log('The keyboard is open:', this.keyboard.isOpen());
  }
}
```







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>returns a true or false value if the keyboard is open or not.</p>


</div>




<div id="onClose"></div>

<h3>
<a class="anchor" name="onClose" href="#onClose">
<code>onClose(callback)</code>
  

</a>
</h3>

When the keyboard is closed, call any methods you want.

```ts
export class MyClass {
  constructor(public keyboard: Keyboard) {
    this.keyboard.onClose(this.closeCallback);
  }
  closeCallback() {
    // call what ever functionality you want on keyboard close
    console.log('Closing time');
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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>method you want to call when the keyboard has been closed.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>function</code> <p>returns a callback that gets fired when the keyboard is closed.</p>


</div>




<div id="willHide"></div>

<h3>
<a class="anchor" name="willHide" href="#willHide">
<code>willHide</code>
  

</a>
</h3>











<div id="willShow"></div>

<h3>
<a class="anchor" name="willShow" href="#willShow">
<code>willShow</code>
  

</a>
</h3>












  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">
    
      
      
      <a ng-init="setSassPlatform('base')" ng-class="{ active: active === 'base' }" ng-click="setSassPlatform('base')" >All</a>
      
      
      
      <a ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')">iOS</a>
      
      
      
      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>
      
      
      
      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>
      
      
    
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
        <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
          <td><code>767px</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
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
        <td><code>$cordova-ios-statusbar-padding</code></td>
        
          <td><code>20px</code></td>
        
        <td><p>Height of the Statusbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$cordova-ios-statusbar-padding-modal-max-width</code></td>
        
          <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
  <table ng-show="active === 'md'" id="sass-md" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$cordova-md-statusbar-padding</code></td>
        
          <td><code>20px</code></td>
        
        <td><p>Height of the Statusbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$cordova-md-statusbar-padding-modal-max-width</code></td>
        
          <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
  <table ng-show="active === 'wp'" id="sass-wp" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$cordova-wp-statusbar-padding</code></td>
        
          <td><code>20px</code></td>
        
        <td><p>Height of the Statusbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$cordova-wp-statusbar-padding-modal-max-width</code></td>
        
          <td><code>$cordova-statusbar-padding-modal-max-width</code></td>
        
        <td><p>The breakpoint when a modal becomes inset</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

