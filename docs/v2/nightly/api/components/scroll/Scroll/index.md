---
layout: "v2/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
id: api
title: "Scroll"
header_sub_title: "Class in module "
doc: "Scroll"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/scroll/scroll.ts#L9'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/scroll/scroll.ts#L9'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Scroll



</h1>





<p>ion-scroll is a non-flexboxed scroll area that can
scroll horizontally or vertically.</p>


<h1 class="class export">Scroll <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/scroll/scroll.ts#L10-L61">ionic/components/scroll/scroll.ts (line 10)</a>
</p>
## Members

<div id="onInit"></div>
<h2>
  <code>onInit()</code>

</h2>












<div id="addScrollEventListener"></div>
<h2>
  <code>addScrollEventListener(handler)</code>

</h2>

Add a scroll event handler to the scroll element if it exists.



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
        handler
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>The scroll handler to add to the scroll element.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>?Function</code> a function to remove the specified handler, otherwise
undefined if the scroll element doesn't exist.




