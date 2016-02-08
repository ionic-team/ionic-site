---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "keyboard"
title: "Keyboard"
header_sub_title: "Class in module "
doc: "Keyboard"
docType: "class"

---









<h1 class="api-title">


Keyboard






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/util/keyboard.ts#L4'>
Improve this doc
</a>






<p>The <code>Keyboard</code> class allows you to work with the keyboard events provide by the Ionic keyboard plugin.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">export class MyClass{
 constructor(keyboard: Keyboard){
   this.keyboard = keyboard;
 }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2>Instance Methods</h2>

<div id="isOpen"></div>

<h3>
<code>isOpen()</code>
  

</h3>

Chech to see if the keyboard is open or not.

```ts
export class MyClass{
 constructor(keyboard: Keyboard){
   this.keyboard = keyboard;
 }
 keyboardCheck(){
   setTimeout(()  => console.log('is the keyboard open ', this.keyboard.isOpen()));
 }
}

```







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Bool</code> returns a true or flase value if the keyboard is open or not
</div>




<div id="onClose"></div>

<h3>
<code>onClose(callback)</code>
  

</h3>

When the keyboard is closed, call any methods you want

```ts
export class MyClass{
 constructor(keyboard: Keyboard){
   this.keyboard = keyboard;
   this.keyboard.onClose(this.closeCallback);
 }
 closeCallback(){
    // call what ever functionality you want on keyboard close
    console.log('Closing time");
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
        
  <code>Function</code>
      </td>
      <td>
        <p>method you want to call when the keyboard has been closed</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Function</code> returns a callback that gets fired when the keyboard is closed
</div>




<div id="close"></div>

<h3>
<code>close()</code>
  

</h3>

Progamatically close they keyboard









<!-- related link --><!-- end content block -->


<!-- end body block -->

