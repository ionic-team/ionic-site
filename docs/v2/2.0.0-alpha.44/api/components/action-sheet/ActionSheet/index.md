---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.44"
versionHref: "/docs/v2/2.0.0-alpha.44"
path: ""
category: api
id: "actionsheet"
title: "ActionSheet"
header_sub_title: "Class in module "
doc: "ActionSheet"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/action-sheet/"
angular_controller: APIDemoCtrl 
---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/action-sheet/action-sheet.ts#L66'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/action-sheet/action-sheet.ts#L66'>
Improve this doc
</a>
</div>





<h1 class="api-title">


ActionSheet






</h1>






<p>The Action Sheet is a slide-up pane that lets the user choose from a set of options. Dangerous options are made obvious.
There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">openMenu() {

  this.actionSheet.open({
    buttons: [
      { text: &#39;Share This&#39; },
      { text: &#39;Move&#39; }
    ],
    destructiveText: &#39;Delete&#39;,
    titleText: &#39;Modify your album&#39;,
    cancelText: &#39;Cancel&#39;,
    cancel: function() {
      console.log(&#39;Canceled&#39;);
    },
    destructiveButtonClicked: () =&gt; {
      console.log(&#39;Destructive clicked&#39;);
    },
    buttonClicked: function(index) {
      console.log(&#39;Button clicked&#39;, index);
      if(index == 1) { return false; }
      return true;
    }

  }).then(actionSheetRef =&gt; {
    this.actionSheetRef = actionSheetRef;
  });

}
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="open"></div>

<h3>
<code>open(opts,&nbsp;opts.enterAnimation,&nbsp;opts.leaveAnimation)</code>
  

</h3>

Create and open a new Action Sheet. This is the
public API, and most often you will only use ActionSheet.open()



<table class="table" style="margin:0;">
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
        opts
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>An object containing optional settings.</p>
<ul>
<li><code>[Object]</code> <code>buttons</code> Which buttons to show.  Each button is an object with a <code>text</code> field.</li>
<li><code>{string}</code> <code>titleText</code> The title to show on the action sheet.</li>
<li><code>{string=}</code> <code>cancelText</code> the text for a &#39;cancel&#39; button on the action sheet.</li>
<li><code>{string=}</code> <code>destructiveText</code> The text for a &#39;danger&#39; on the action sheet.</li>
<li><code>{function=}</code> <code>cancel</code> Called if the cancel button is pressed, the backdrop is tapped or
 the hardware back button is pressed.</li>
<li><code>{function=}</code> <code>buttonClicked</code> Called when one of the non-destructive buttons is clicked,
 with the index of the button that was clicked and the button object. Return true to close
 the action sheet, or false to keep it opened.</li>
<li><code>{function=}</code> <code>destructiveButtonClicked</code> Called when the destructive button is clicked.
 Return true to close the action sheet, or false to keep it opened.</li>
</ul>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts.enterAnimation
        
        
      </td>
      <td>
        
  <code>String</code>
      </td>
      <td>
        <p>The class used to animate an actionSheet that is entering.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts.leaveAnimation
        
        
      </td>
      <td>
        
  <code>String</code>
      </td>
      <td>
        <p>The class used to animate an actionSheet that is leaving.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>Promise</code> Promise that resolves when the action sheet is open.




<div id="get"></div>

<h3>
<code>get(handle)</code>
  

</h3>

Retrieves an actionSheet instance.



<table class="table" style="margin:0;">
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
        handle
        
        
      </td>
      <td>
        
  <code>String</code>
      </td>
      <td>
        <p>The handle used to open the instance to be retrieved.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>ActionSheet</code> An actionSheet instance.


<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#action-sheets'>ActionSheet Component Docs</a><!-- end content block -->


<!-- end body block -->

