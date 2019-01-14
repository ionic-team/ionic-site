---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "pinterest"
title: "Pinterest"
header_sub_title: "Class in module "
doc: "Pinterest"
docType: "class"
---

<h1 class="api-title">Pinterest<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/pinterest/index.ts#L131">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/zyramedia/cordova-plugin-pinterest/issues">plugin repo</a>.
</p>




<p>Cordova plugin for Pinterest</p>


<p>Repo:
  <a href="https://github.com/zyramedia/cordova-plugin-pinterest">
    https://github.com/zyramedia/cordova-plugin-pinterest
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID
$ npm install --save @ionic-native/pinterest
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Pinterest, PinterestUser, PinterestPin, PinterestBoard } from &#39;@ionic-native/pinterest&#39;;

constructor(private pinterest: Pinterest) { }

...

const scopes = [
  this.pinterest.SCOPES.READ_PUBLIC,
  this.pinterest.SCOPES.WRITE_PUBLIC,
  this.pinterest.SCOPES.READ_RELATIONSHIPS,
  this.pinterest.SCOPES.WRITE_RELATIONSHIPS
];

this.pinterest.login(scopes)
  .then(res =&gt; console.log(&#39;Logged in!&#39;, res))
  .catch(err =&gt; console.error(&#39;Error loggin in&#39;, err));

this.pinterest.getMyPins()
  .then((pins: Array&lt;PinterestPin&gt;) =&gt; console.log(pins))
  .catch(err =&gt; console.error(err));

this.pinterest.getMe()
  .then((user: PinterestUser) =&gt; console.log(user));

this.pinterest.getMyBoards()
  .then((boards: Array&lt;PinterestBoard&gt;) =&gt; console.log(boards));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="SCOPES" href="#SCOPES"></a><code>SCOPES</code></h3>


Convenience constant for authentication scopes



<h3><a class="anchor" name="login" href="#login"></a><code>login(scopes)</code></h3>


Logs the user in using their Pinterest account.
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
      scopes</td>
    <td>
      <code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>Array of scopes that you need access to. You can use Pinterest.SCOPES constant for convenience.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> The response object will contain the user's profile data, as well as the access token (if you need to use it elsewhere, example: send it to your server and perform actions on behalf of the user).
</div><h3><a class="anchor" name="getMe" href="#getMe"></a><code>getMe(fields)</code></h3>




Gets the authenticated user's profile
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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Fields to retrieve, separated by commas. Defaults to all available fields.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestUser&gt;</code> Returns a promise that resolves with the user's object
</div><h3><a class="anchor" name="getMyPins" href="#getMyPins"></a><code>getMyPins(fields,&nbsp;limit)</code></h3>





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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;PinterestPin&gt;&gt;</code> 
</div><h3><a class="anchor" name="getMyBoards" href="#getMyBoards"></a><code>getMyBoards(fields,&nbsp;limit)</code></h3>





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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;PinterestBoard&gt;&gt;</code> 
</div><h3><a class="anchor" name="getMyLikes" href="#getMyLikes"></a><code>getMyLikes(fields,&nbsp;limit)</code></h3>




Get the authenticated user's likes.
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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;PinterestPin&gt;&gt;</code> 
</div><h3><a class="anchor" name="getMyFollowers" href="#getMyFollowers"></a><code>getMyFollowers(fields,&nbsp;limit)</code></h3>




Get the authenticated user's followers.
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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;PinterestUser&gt;&gt;</code> 
</div><h3><a class="anchor" name="getMyFollowedBoards" href="#getMyFollowedBoards"></a><code>getMyFollowedBoards(fields,&nbsp;limit)</code></h3>




Get the authenticated user's followed boards.
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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;PinterestBoard&gt;&gt;</code> 
</div><h3><a class="anchor" name="getMyFollowedInterests" href="#getMyFollowedInterests"></a><code>getMyFollowedInterests(fields,&nbsp;limit)</code></h3>




Get the authenticated user's followed interests.
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
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getUser" href="#getUser"></a><code>getUser(username,&nbsp;fields)</code></h3>




Get a user's profile.
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
      username</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      fields</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestUser&gt;</code> 
</div><h3><a class="anchor" name="getBoard" href="#getBoard"></a><code>getBoard(boardId,&nbsp;fields)</code></h3>




Get a board's data.
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
      boardId</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      fields</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestBoard&gt;</code> 
</div><h3><a class="anchor" name="getBoardPins" href="#getBoardPins"></a><code>getBoardPins(boardId,&nbsp;fields,&nbsp;limit)</code></h3>




Get Pins of a specific board.
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
      boardId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID of the board</p>
</td>
  </tr>
  
  <tr>
    <td>
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  
  <tr>
    <td>
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Optional limit, defaults to 100, maximum is 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;PinterestPin&gt;&gt;</code> 
</div><h3><a class="anchor" name="deleteBoard" href="#deleteBoard"></a><code>deleteBoard(boardId)</code></h3>


Delete a board.
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
      boardId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID of the board</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestUser&gt;</code> 
</div><h3><a class="anchor" name="createBoard" href="#createBoard"></a><code>createBoard(name,&nbsp;desc)</code></h3>




Create a new board for the authenticated user.
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
      name</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the board</p>
</td>
  </tr>
  
  <tr>
    <td>
      desc</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional description of the board</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestBoard&gt;</code> 
</div><h3><a class="anchor" name="getPin" href="#getPin"></a><code>getPin(pinId,&nbsp;fields)</code></h3>




Get a Pin by ID.
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
      pinId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID of the Pin</p>
</td>
  </tr>
  
  <tr>
    <td>
      fields</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestPin&gt;</code> 
</div><h3><a class="anchor" name="deletePin" href="#deletePin"></a><code>deletePin(pinId)</code></h3>


Deletes a pin
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
      pinId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID of the pin</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createPin" href="#createPin"></a><code>createPin(note,&nbsp;boardId,&nbsp;imageUrl,&nbsp;link)</code></h3>




Creates a Pin
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
      note</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Note/Description of the pin</p>
</td>
  </tr>
  
  <tr>
    <td>
      boardId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Board ID to put the Pin under</p>
</td>
  </tr>
  
  <tr>
    <td>
      imageUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of the image to share</p>
</td>
  </tr>
  
  <tr>
    <td>
      link</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional link to share</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PinterestPin&gt;</code> 
</div>





<h2><a class="anchor" name="PinterestUser" href="#PinterestUser"></a>PinterestUser</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The unique string of numbers and letters that identifies the user on Pinterest.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      username
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user’s Pinterest username.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      first_name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user’s first name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      last_name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user’s last name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bio
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The text in the user’s “About you” section in their profile.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      created_at
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The date the user created their account in ISO 8601 format</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      counts
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The user’s stats, including how many Pins, follows, boards and likes they have.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The user’s profile image. The response returns the image’s URL, width and height.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PinterestBoard" href="#PinterestBoard"></a>PinterestBoard</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The unique string of numbers and letters that identifies the board on Pinterest.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the board.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The link to the board.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      description
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user-entered description of the board.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      creator
    </td>
    <td>
      <code>PinterestUser</code>
    </td>
    <td>
      <p>The first and last name, ID and profile URL of the user who created the board.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      created_at
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The date the user created the board.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      counts
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The board’s stats, including how many Pins, followers, user&#39;s following and collaborators it has.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The user’s profile image. The response returns the image’s URL, width and height.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PinterestPin" href="#PinterestPin"></a>PinterestPin</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The unique string of numbers and letters that identifies the Pin on Pinterest.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      link
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the webpage where the Pin was created.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the Pin on Pinterest.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      creator
    </td>
    <td>
      <code>PinterestUser</code>
    </td>
    <td>
      <p>The first and last name, ID and profile URL of the user who created the board.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      board
    </td>
    <td>
      <code>PinterestBoard</code>
    </td>
    <td>
      <p>The board that the Pin is on.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      created_at
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The date the Pin was created.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      note
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user-entered description of the Pin.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The dominant color of the Pin’s image in hex code format.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      counts
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The Pin’s stats, including the number of repins, comments and likes.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      media
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The media type of the Pin (image or video).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      attribution
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The source data for videos, including the title, URL, provider, author name, author URL and provider name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The Pin’s image. The default response returns the image’s URL, width and height.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      metadata
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Extra information about the Pin for Rich Pins. Includes the Pin type (e.g., article, recipe) and related information (e.g., ingredients, author).</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





