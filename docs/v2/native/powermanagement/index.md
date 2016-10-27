---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "powermanagement"
title: "PowerManagement"
header_sub_title: "Class in module "
doc: "PowerManagement"
docType: "class"
---







<h1 class="api-title">
  
  PowerManagement
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/power-management.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-powermanagement-orig</code></pre>
<p>Repo:
  <a href="https://github.com/Viras-/cordova-plugin-powermanagement">
    https://github.com/Viras-/cordova-plugin-powermanagement
  </a>
</p>

<!-- description -->

<p>The PowerManagement plugin offers access to the devices power-management functionality.
It should be used for applications which keep running for a long time without any user interaction.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {PowerManagement} from &#39;ionic-native&#39;;

PowerManagement.acquire()
  .then(onSuccess)
  .catch(onError);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="acquire"></div>
<h3><code>acquire()</code>
  
</h3>


Acquire a wakelock by calling this.










<div id="dim"></div>
<h3><code>dim()</code>
  
</h3>


This acquires a partial wakelock, allowing the screen to be dimmed.










<div id="release"></div>
<h3><code>release()</code>
  
</h3>


Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.










<div id="setReleaseOnPause"></div>
<h3><code>setReleaseOnPause(set)</code>
  
</h3>


By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.


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
      set
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

