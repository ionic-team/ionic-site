---
layout: "v2_fluid/docs_base"
version: "1.0.8"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "actionsheet"
title: "ActionSheet"
header_sub_title: "Class in module "
doc: "ActionSheet"
docType: "class"
---








<h1 class="api-title">


ActionSheet






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/actionsheet.ts#L0'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>The ActionSheet plugin shows a native list of options the user can choose from.</p>

<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Methods</h2>
<div id="show"></div>
<h3><code>show(Available)</code>
  
</h3>

Show the ActionSheet.


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
        Available
        
        
      </td>
      <td>
        
  <code>options</code>
      </td>
      <td>
        <p>options:
  buttonLabels: string[]
  title: string
  androidTheme (Android only): number 1-5
  androidEnableCancelButton (Android only): boolean, default false
  winphoneEnableCancelButton (WP only): boolean, default false
  addCancelButtonWithLabel: string
  addDestructiveButtonWithLabel: string
  position: [x, y] (iPad pass in [x, y] coords of popover)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value" markdown="1">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> returns a promise that resolves with the index of the
  button pressed (1 based, so 1, 2, 3, etc.)
</div>



<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>

Hide the ActionSheet.











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

