---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.39"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{ActionSheet | slugify}}"
title: "ActionSheet"
header_sub_title: "Class in module "
doc: "ActionSheet"
docType: "class"
---



<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/action-sheet/action-sheet.ts#L70'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/action-sheet/action-sheet.ts#L70'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">

  ActionSheet



</h1>





<p>The Action Sheet is a slide-up pane that lets the user choose from a set of options. Dangerous options are made obvious.
There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.</p>





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




<h1 class="class export">ActionSheet <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/action-sheet/action-sheet.ts#L71-L153">ionic/components/action-sheet/action-sheet.ts (line 71)</a>
</p>
<h2>Members</h2>

<div id="open"></div>
<h3>
  <code>open(opts, opts.pageType, opts.enterAnimation, opts.leaveAnimation)</code>

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

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts.pageType
        
        
      </td>
      <td>
        
  <code>String</code>
      </td>
      <td>
        <p>The page type that determines how the page renders and animates.</p>

        
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






