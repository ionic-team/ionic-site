---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "class-kit"
title: "Class Kit"
header_sub_title: "Class in module "
doc: "Class Kit"
docType: "class"
---

<h1 class="api-title">Class Kit</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/class-kit/index.ts#L125">
  Improve this doc
</a>







<p>Plugin for using Apple&#39;s ClassKit framework.</p>
<p>Prerequisites:
Only works with Xcode 9.4 and iOS 11.4. Your Provisioning Profile must include the ClassKit capability. Read more about how to Request ClassKit Resources (<a href="https://developer.apple.com/contact/classkit/">https://developer.apple.com/contact/classkit/</a>) in here: <a href="https://developer.apple.com/documentation/classkit/enabling_classkit_in_your_app">https://developer.apple.com/documentation/classkit/enabling_classkit_in_your_app</a>.
Also note that you can’t test ClassKit behavior in Simulator because Schoolwork isn’t available in that environment.</p>


<p>Repo:
  <a href="https://github.com/sebastianbaar/cordova-plugin-classkit.git">
    https://github.com/sebastianbaar/cordova-plugin-classkit.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-classkit
$ npm install --save @ionic-native/class-kit
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ClassKit, CCKContext, CCKBinaryItem, CCKQuantityItem, CCKScoreItem, CCKContextTopic, CCKContextType, CCKBinaryType } from &#39;@ionic-native/class-kit&#39;;

// Init contexts defined in XML file &#39;CCK-contexts.xml&#39;
constructor( ..., private classKit: ClassKit) {
  platform.ready().then(() =&gt; {
    classKit.initContextsFromXml(&quot;classkitplugin://&quot;)
      .then(() =&gt; console.log(&quot;success&quot;))
      .catch(e =&gt; console.log(&quot;error: &quot;, e));
  });
}

...

// Init context with identifier path
const context: CCKContext = {
  identifierPath: [&quot;parent_title_one&quot;, &quot;child_one&quot;, &quot;child_one_correct_quiz&quot;],
  title: &quot;child one correct quiz&quot;,
  type: CCKContextType.exercise,
  topic: CCKContextTopic.science,
  displayOrder: 0
};

this.classKit.addContext(&quot;classkitplugin://&quot;, context)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Remove all contexts
this.classKit.removeContexts()
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Remove context with identifier path
this.classKit.removeContext([&quot;parent_title_one&quot;, &quot;child_one&quot;, &quot;child_one_correct_quiz&quot;])
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Begin a new activity or restart an activity for a given context
this.classKit.beginActivity([&quot;parent_title_one&quot;, &quot;child_two&quot;, &quot;child_two_quiz&quot;], false)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Adds a progress range to the active given activity
this.classKit.setProgressRange(0, 0.66)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Adds a progress to the active given activity
this.classKit.setProgress(0.66)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Adds activity information that is true or false, pass or fail, yes or no
const binaryItem: CCKBinaryItem = {
  identifier: &quot;child_two_quiz_IDENTIFIER_1&quot;,
  title: &quot;CHILD TWO QUIZ 1&quot;,
  type: CCKBinaryType.trueFalse,
  isCorrect: isCorrect,
  isPrimaryActivityItem: false
};

this.classKit.setBinaryItem(binaryItem)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Adds activity information that signifies a score out of a possible maximum
const scoreItem: CCKScoreItem = {
  identifier: &quot;total_score&quot;,
  title: &quot;Total Score :-)&quot;,
  score: 0.66,
  maxScore: 1.0,
  isPrimaryActivityItem: true
};

this.classKit.setScoreItem(scoreItem)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));


// Activity information that signifies a quantity
const quantityItem: CCKQuantityItem = {
   identifier: &quot;quantity_item_hints&quot;,
   title: &quot;Hints&quot;,
   quantity: 12,
   isPrimaryActivityItem: false
};

this.classKit.setQuantityItem(quantityItem)
   .then(() =&gt; console.log(&quot;success&quot;))
   .catch(e =&gt; console.log(&quot;error: &quot;, e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="initContextsFromXml" href="#initContextsFromXml"></a><code>initContextsFromXml(urlPrefix)</code></h3>


Init contexts defined in XML file 'CCK-contexts.xml'
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
      urlPrefix</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL prefix to use for custom URLs to locate activities (deeplink).</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addContext" href="#addContext"></a><code>addContext(urlPrefix,&nbsp;context)</code></h3>


Init context with identifier path
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
      urlPrefix</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL prefix to use for custom URLs to locate activities (deeplink).</p>
</td>
  </tr>
  
  <tr>
    <td>
      context</td>
    <td>
      <code>CCKContext</code>
    </td>
    <td>
      <p>Context to initialize.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="removeContexts" href="#removeContexts"></a><code>removeContexts()</code></h3>


Remove all contexts


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="removeContext" href="#removeContext"></a><code>removeContext(identifierPath)</code></h3>


Remove context with identifier path
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
      identifierPath</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Full identifier path from root, including the context identifier itself.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="beginActivity" href="#beginActivity"></a><code>beginActivity(identifierPath,&nbsp;asNew)</code></h3>


Begin a new activity or restart an activity for a given context
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
      identifierPath</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Full identifier path from root, including the context identifier itself.</p>
</td>
  </tr>
  
  <tr>
    <td>
      asNew</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Should a new activity be created (or an old activity be restarted).</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="endActivity" href="#endActivity"></a><code>endActivity()</code></h3>


End the active activity


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setProgressRange" href="#setProgressRange"></a><code>setProgressRange(fromStart,&nbsp;toEnd)</code></h3>


Adds a progress range to the active given activity
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
      fromStart</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beginning of the new range to add. This should be fractional value between 0 and 1, inclusive.</p>
</td>
  </tr>
  
  <tr>
    <td>
      toEnd</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The end of the new range to add. This should be larger than the start value and less than or equal to one.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setProgress" href="#setProgress"></a><code>setProgress(progress)</code></h3>


Adds a progress to the active given activity
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
      progress</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A measure of progress through the task, given as a fraction in the range [0, 1].</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setBinaryItem" href="#setBinaryItem"></a><code>setBinaryItem(binaryItem)</code></h3>


Adds activity information that is true or false, pass or fail, yes or no
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
      binaryItem</td>
    <td>
      <code>CCKBinaryItem</code>
    </td>
    <td>
      <p>The binary item to add to the activity.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setScoreItem" href="#setScoreItem"></a><code>setScoreItem(scoreItem)</code></h3>


Adds activity information that signifies a score out of a possible maximum
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
      scoreItem</td>
    <td>
      <code>CCKScoreItem</code>
    </td>
    <td>
      <p>The score item to add to the activity.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setQuantityItem" href="#setQuantityItem"></a><code>setQuantityItem(quantityItem)</code></h3>


Activity information that signifies a quantity.
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
      quantityItem</td>
    <td>
      <code>CCKQuantityItem</code>
    </td>
    <td>
      <p>The quantity item to add to the activity.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="CCKContext" href="#CCKContext"></a>CCKContext</h2>

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
      identifierPath
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Full identifier path from root, including the context identifier itself..</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Title of the context.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>CCKContextType</code>
    </td>
    <td>
      <p>Optional. Type value for the context.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      topic
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional. Topic value of the context.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      displayOrder
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional. Display order of the context.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CCKContextType" href="#CCKContextType"></a>CCKContextType</h2>

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
      none
    </td>
    <td>
      <code>0</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      app
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      chapter
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      section
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      level
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      page
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      task
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      challenge
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      quiz
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      exercise
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      lesson
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      book
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      game
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      document
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      audio
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      video
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CCKContextTopic" href="#CCKContextTopic"></a>CCKContextTopic</h2>

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
      math
    </td>
    <td>
      <code>&#39;math&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      science
    </td>
    <td>
      <code>&#39;science&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      literacyAndWriting
    </td>
    <td>
      <code>&#39;literacyAndWriting&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      worldLanguage
    </td>
    <td>
      <code>&#39;worldLanguage&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      socialScience
    </td>
    <td>
      <code>&#39;socialScience&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      computerScienceAndEngineering
    </td>
    <td>
      <code>&#39;computerScienceAndEngineering&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      artsAndMusic
    </td>
    <td>
      <code>&#39;artsAndMusic&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      healthAndFitness
    </td>
    <td>
      <code>&#39;healthAndFitness&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CCKBinaryItem" href="#CCKBinaryItem"></a>CCKBinaryItem</h2>

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
      identifier
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A unique string identifier for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A human readable name for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>CCKBinaryType</code>
    </td>
    <td>
      <p>A type value for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isCorrect
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The value that the binary activity item takes.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isPrimaryActivityItem
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Optional. Should the activity item be added as the primary activity item.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CCKBinaryType" href="#CCKBinaryType"></a>CCKBinaryType</h2>

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
      trueFalse
    </td>
    <td>
      <code>0</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      passFail
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      yesNo
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CCKScoreItem" href="#CCKScoreItem"></a>CCKScoreItem</h2>

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
      identifier
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A unique string identifier for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A human readable name for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      score
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The score earned during completion of a task.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      maxScore
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The maximum possible score, against which the reported score should be judged.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isPrimaryActivityItem
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Optional. Should the activity item be added as the primary activity item.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CCKQuantityItem" href="#CCKQuantityItem"></a>CCKQuantityItem</h2>

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
      identifier
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A unique string identifier for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A human readable name for the activity item.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      quantity
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A quantity associated with the task.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isPrimaryActivityItem
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Optional. Should the activity item be added as the primary activity item.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





