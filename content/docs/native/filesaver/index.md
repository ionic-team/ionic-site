---
layout: "fluid/docs_base"
version: "3.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "filesaver"
title: "FileSaver"
header_sub_title: "Class in module "
doc: "FileSaver"
docType: "class"
---

<h1 class="api-title">FileSaver</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file/index.ts#L348">
  Improve this doc
</a>











<h2>Instance Members</h2>
<h3><a class="anchor" name="abort" href="#abort"></a><code>abort()</code></h3>

When the abort method is called, user agents must run the steps below:
<ol>
<li> If readyState == DONE or readyState == INIT, terminate this overall series of steps without doing anything else. </li>
<li> Set readyState to DONE. </li>
<li> If there are any tasks from the object's FileSaver task source in one of the task queues, then remove those tasks. </li>
<li> Terminate the write algorithm being processed. </li>
<li> Set the error attribute to a DOMError object of type "AbortError". </li>
<li> Fire a progress event called abort </li>
<li> Fire a progress event called writeend </li>
<li> Terminate this algorithm. </li>
</ol>



<h3><a class="anchor" name="INIT" href="#INIT"></a><code>INIT</code></h3>

The blob is being written.


<h3><a class="anchor" name="WRITING" href="#WRITING"></a><code>WRITING</code></h3>

The object has been constructed, but there is no pending write.


<h3><a class="anchor" name="DONE" href="#DONE"></a><code>DONE</code></h3>

The entire Blob has been written to the file, an error occurred during the write, or the write was aborted using abort(). The FileSaver is no longer writing the blob.


<h3><a class="anchor" name="readyState" href="#readyState"></a><code>readyState</code></h3>

The FileSaver object can be in one of 3 states. The readyState attribute, on getting, must return the current state, which must be one of the following values:
<ul>
<li>INIT</li>
<li>WRITING</li>
<li>DONE</li>
<ul>


<h3><a class="anchor" name="error" href="#error"></a><code>error</code></h3>

The last error that occurred on the FileSaver.


<h3><a class="anchor" name="onwritestart" href="#onwritestart"></a><code>onwritestart</code></h3>

Handler for writestart events



<h3><a class="anchor" name="onprogress" href="#onprogress"></a><code>onprogress</code></h3>

Handler for progress events.



<h3><a class="anchor" name="onwrite" href="#onwrite"></a><code>onwrite</code></h3>

Handler for write events.



<h3><a class="anchor" name="onabort" href="#onabort"></a><code>onabort</code></h3>

Handler for abort events.



<h3><a class="anchor" name="onerror" href="#onerror"></a><code>onerror</code></h3>

Handler for error events.



<h3><a class="anchor" name="onwriteend" href="#onwriteend"></a><code>onwriteend</code></h3>

Handler for writeend events.









