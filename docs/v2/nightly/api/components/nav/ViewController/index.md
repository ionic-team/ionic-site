---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{ViewController | slugify}}"
title: "ViewController"
header_sub_title: "Class in module "
doc: "ViewController"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/view-controller.ts#L0'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/view-controller.ts#L0'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ViewController



</h1>





<p>TODO</p>


<h1 class="class export">ViewController <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/nav/view-controller.ts#L1-L218">ionic/components/nav/view-controller.ts (line 1)</a>
</p>
<h2>Members</h2>

<div id="enableBack"></div>
<h3>
  <code>enableBack()</code>

</h3>

TODO






* Returns: 
  <code>boolean</code> TODO




<div id="setInstance"></div>
<h3>
  <code>setInstance()</code>

</h3>












<div id="index"></div>
<h3>
  <code>index()</code>

</h3>












<div id="isRoot"></div>
<h3>
  <code>isRoot()</code>

</h3>












<div id="addDestroy"></div>
<h3>
  <code>addDestroy()</code>

</h3>












<div id="destroy"></div>
<h3>
  <code>destroy()</code>

</h3>












<div id="setNavbarTemplateRef"></div>
<h3>
  <code>setNavbarTemplateRef()</code>

</h3>












<div id="getNavbarTemplateRef"></div>
<h3>
  <code>getNavbarTemplateRef()</code>

</h3>












<div id="getNavbarViewRef"></div>
<h3>
  <code>getNavbarViewRef()</code>

</h3>












<div id="setNavbarViewRef"></div>
<h3>
  <code>setNavbarViewRef()</code>

</h3>












<div id="setPageRef"></div>
<h3>
  <code>setPageRef()</code>

</h3>












<div id="pageRef"></div>
<h3>
  <code>pageRef()</code>

</h3>












<div id="setContentRef"></div>
<h3>
  <code>setContentRef()</code>

</h3>












<div id="contentRef"></div>
<h3>
  <code>contentRef()</code>

</h3>












<div id="setContent"></div>
<h3>
  <code>setContent()</code>

</h3>












<div id="getContent"></div>
<h3>
  <code>getContent()</code>

</h3>












<div id="setNavbar"></div>
<h3>
  <code>setNavbar()</code>

</h3>












<div id="getNavbar"></div>
<h3>
  <code>getNavbar()</code>

</h3>












<div id="hasNavbar"></div>
<h3>
  <code>hasNavbar()</code>

</h3>












<div id="navbarRef"></div>
<h3>
  <code>navbarRef()</code>

</h3>












<div id="titleRef"></div>
<h3>
  <code>titleRef()</code>

</h3>












<div id="navbarItemRefs"></div>
<h3>
  <code>navbarItemRefs()</code>

</h3>












<div id="backBtnRef"></div>
<h3>
  <code>backBtnRef()</code>

</h3>












<div id="backBtnTextRef"></div>
<h3>
  <code>backBtnTextRef()</code>

</h3>












<div id="navbarBgRef"></div>
<h3>
  <code>navbarBgRef()</code>

</h3>












<div id="hideBackButton"></div>
<h3>
  <code>hideBackButton()</code>

</h3>












<div id="isLoaded"></div>
<h3>
  <code>isLoaded()</code>

</h3>












<div id="loaded"></div>
<h3>
  <code>loaded()</code>

</h3>

The view has loaded. This event only happens once per view being
created. If a view leaves but is cached, then this will not
fire again on a subsequent viewing. This method is a good place
to put your setup code for the view; however, it is not the
recommended method to use when a view becomes active.











<div id="postRender"></div>
<h3>
  <code>postRender()</code>

</h3>












<div id="willEnter"></div>
<h3>
  <code>willEnter()</code>

</h3>

The view is about to enter and become the active view.











<div id="didEnter"></div>
<h3>
  <code>didEnter()</code>

</h3>

The view has fully entered and is now the active view. This
will fire, whether it was the first load or loaded from the cache.











<div id="willLeave"></div>
<h3>
  <code>willLeave()</code>

</h3>

The view has is about to leave and no longer be the active view.











<div id="didLeave"></div>
<h3>
  <code>didLeave()</code>

</h3>

The view has finished leaving and is no longer the active view. This
will fire, whether it is cached or unloaded.











<div id="willUnload"></div>
<h3>
  <code>willUnload()</code>

</h3>

The view is about to be destroyed and have its elements removed.











<div id="didUnload"></div>
<h3>
  <code>didUnload()</code>

</h3>

The view has been destroyed and its elements have been removed.











