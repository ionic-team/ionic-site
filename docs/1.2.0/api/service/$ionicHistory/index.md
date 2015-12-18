---
layout: "docs_api"
version: "1.2.0"
versionHref: "/docs"
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





$ionicHistory keeps track of views as the user navigates through an app. Similar to the way a
browser behaves, an Ionic app is able to keep track of the previous view, the current view, and
the forward view (if there is one).  However, a typical web browser only keeps track of one
history stack in a linear fashion.

Unlike a traditional browser environment, apps and webapps have parallel independent histories,
such as with tabs. Should a user navigate few pages deep on one tab, and then switch to a new
tab and back, the back button relates not to the previous tab, but to the previous pages
visited within _that_ tab.

`$ionicHistory` facilitates this parallel history architecture.










  

  
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
  <code>object</code> Returns the back view.




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
  <code>object</code> Returns the forward view.




<div id="currentStateName"></div>
<h2>
  <code>currentStateName()</code>

</h2>

Returns the current state name.






* Returns: 
  <code>string</code> 




<div id="goBack"></div>
<h2>
  <code>goBack([backCount])</code>

</h2>

Navigates the app to the back view, if a back view exists.



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
        backCount
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Optional negative integer setting how many views to go
back. By default it&#39;ll go back one view by using the value <code>-1</code>. To go back two
views you would use <code>-2</code>. If the number goes farther back than the number of views
in the current history&#39;s stack then it&#39;ll go to the first view in the current history&#39;s
stack. If the number is zero or greater then it&#39;ll do nothing. It also does not
cross history stacks, meaning it can only go as far back as the current history.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="clearHistory"></div>
<h2>
  <code>clearHistory()</code>

</h2>

Clears out the app's entire history, except for the current view.









<div id="clearCache"></div>
<h2>
  <code>clearCache()</code>

</h2>

Removes all cached views within every <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a>.
This both removes the view element from the DOM, and destroy it's scope.






* Returns: 
   promise




<div id="nextViewOptions"></div>
<h2>
  <code>nextViewOptions()</code>

</h2>

Sets options for the next view. This method can be useful to override
certain view/transition defaults right before a view transition happens. For example,
the <a href="/docs/api/directive/menuClose/"><code>menuClose</code></a> directive uses this method internally to ensure
an animated view transition does not happen when a side menu is open, and also sets
the next view as the root of its history stack. After the transition these options
are set back to null.

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








  
  






