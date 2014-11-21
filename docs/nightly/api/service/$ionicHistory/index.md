---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/service/$ionicHistory/"

title: "$ionicHistory"
header_sub_title: "Service in module ionic"
doc: "$ionicHistory"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/history.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/history.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicHistory



</h1>





$ionicHistory is what keeps track of an app's views as the user navigates. Like browser,
an Ionic app is able to know what the previous view was, the current view, and what the
forward view was (if there was one). However, a typical web browser only keeps track of one
history stack in a linear fashion.

Ionic's `$ionicHistory` is able to keep track of multiple histories, and persist where the
user is as they navigate between different views, and different histories. For example, an
app with tabs has it's own history stack for each tab. This meaning you can navigate a few
views in Tab A, then navigate a few in Tab B, and when you return to Tab A, the existing
stack is maintained.










  

  
## Methods

<div id="viewHistory"></div>
<h2>
  <code>viewHistory()</code>

</h2>

The app's view history data, such as all the views and histories, along
with how they are ordered and linked together within the navigation stack.






* Returns: 
  <code>object</code> Returns an object containing the apps view history data.




<div id="currentView"></div>
<h2>
  <code>currentView()</code>

</h2>

The app's current view.






* Returns: 
  <code>object</code> Returns the current view.




<div id="currentHistoryId"></div>
<h2>
  <code>currentHistoryId()</code>

</h2>

The ID of the history stack which is the parent container of the current view.






* Returns: 
  <code>string</code> Returns the current history ID.




<div id="currentTitle"></div>
<h2>
  <code>currentTitle([val])</code>

</h2>

Gets and sets the current view's title.



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
        val
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The title to update the current view with.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> Returns the current view's title.




<div id="backView"></div>
<h2>
  <code>backView()</code>

</h2>

Returns the view that was before the current view in the history stack.
If the user navigated from View A to View B, then View A would be the back view, and
View B would be the current view.






* Returns: 
  <code>string</code> Returns the back view.




<div id="backTitle"></div>
<h2>
  <code>backTitle()</code>

</h2>

Gets the back view's title.






* Returns: 
  <code>string</code> Returns the back view's title.




<div id="forwardView"></div>
<h2>
  <code>forwardView()</code>

</h2>

Returns the view that was in front of the current view in the history stack.
A forward view would exist if the user navigated from View A to View B, then
navigated back to View A. At this point then View B would be the forward view, and View
A would be the current view.






* Returns: 
  <code>string</code> Returns the back view.




<div id="currentStateName"></div>
<h2>
  <code>currentStateName()</code>

</h2>

Returns the current state name.






* Returns: 
  <code>string</code> 




<div id="goBack"></div>
<h2>
  <code>goBack()</code>

</h2>

Navigates the app to the back view, if a back view exists.









<div id="clearHistory"></div>
<h2>
  <code>clearHistory()</code>

</h2>

Clears out the app's entire history, except for the current view.









<div id="clearCache"></div>
<h2>
  <code>clearCache()</code>

</h2>

Removes all cached views within every <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>.
This both removes the view element from the DOM, and destroy it's scope.









<div id="nextViewOptions"></div>
<h2>
  <code>nextViewOptions()</code>

</h2>

Sets options for the next view. This method can be useful to override
certain view/transition defaults right before a view transition happens. For example,
the <a href="/docs/nightly/api/directive/menuClose/"><code>menuClose</code></a> directive uses this methond internally to ensure
an animated view transition does not happen when a menu is closed, and also sets that
the next view should become this root of its history stack. After the next view has
entered then these options are set back to null.

Available options:

* `disableAnimate`: Do not animate the next transition.
* `disableBack`: The next view should forget its back view, and set it to null.
* `historyRoot`: The next view should become the root view in its history stack.

```js
$ionicHistory.nextViewOptions({
  disableAnimate: true,
  disableBack: true
});
```








  
  






