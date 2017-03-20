---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "pinterest"
title: "Pinterest"
header_sub_title: "Class in module "
doc: "Pinterest"
docType: "class"
---







<h1 class="api-title">
  
  Pinterest
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/pinterest/index.ts#L126">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/zyramedia/cordova-plugin-pinterest/issues">plugin repo</a>.
</p>


<pre><code>
  $ ionic plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID
  $ npm install --save @ionic-native/cordova.plugins.Pinterest
</code></pre>
<p>Repo:
  <a href="https://github.com/zyramedia/cordova-plugin-pinterest">
    https://github.com/zyramedia/cordova-plugin-pinterest
  </a>
</p>

<!-- description -->

<p>Cordova plugin for Pinterest</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Pinterest, PinterestUser, PinterestPin, PinterestBoard } from &#39;@ionic-native/pinterest&#39;;

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




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="SCOPES"></div>
<h3>
  <code>SCOPES</code>
  

</h3>
Convenience constant for authentication scopes



<div id="login"></div>
<h3>
  <code>login(scopes)</code>
  

</h3>
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
      scopes
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> The response object will contain the user's profile data, as well as the access token (if you need to use it elsewhere, example: send it to your server and perform actions on behalf of the user).
</div><div id="getMe"></div>
<h3>
  <code>getMe(fields)</code>
  

</h3>
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
      fields
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;PinterestUser&gt;</code> Returns a promise that resolves with the user's object
</div><div id="getMyPins"></div>
<h3>
  <code>getMyPins(fields,&nbsp;limit)</code>
  

</h3>

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
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;PinterestPin&gt;&gt;</code> 
</div><div id="getMyBoards"></div>
<h3>
  <code>getMyBoards(fields,&nbsp;limit)</code>
  

</h3>

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
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;PinterestBoard&gt;&gt;</code> 
</div><div id="getMyLikes"></div>
<h3>
  <code>getMyLikes(fields,&nbsp;limit)</code>
  

</h3>
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
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;PinterestPin&gt;&gt;</code> 
</div><div id="getMyFollowers"></div>
<h3>
  <code>getMyFollowers(fields,&nbsp;limit)</code>
  

</h3>
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
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;PinterestUser&gt;&gt;</code> 
</div><div id="getMyFollowedBoards"></div>
<h3>
  <code>getMyFollowedBoards(fields,&nbsp;limit)</code>
  

</h3>
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
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;PinterestBoard&gt;&gt;</code> 
</div><div id="getMyFollowedInterests"></div>
<h3>
  <code>getMyFollowedInterests(fields,&nbsp;limit)</code>
  

</h3>
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
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getUser"></div>
<h3>
  <code>getUser(username,&nbsp;fields)</code>
  

</h3>
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
      username
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      fields
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;PinterestUser&gt;</code> 
</div><div id="getBoard"></div>
<h3>
  <code>getBoard(boardId,&nbsp;fields)</code>
  

</h3>
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
      boardId
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      fields
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;PinterestBoard&gt;</code> 
</div><div id="getBoardPins"></div>
<h3>
  <code>getBoardPins(boardId,&nbsp;fields,&nbsp;limit)</code>
  

</h3>
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
      boardId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The ID of the board</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fields
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Optional fields separated by comma</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      limit
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;PinterestPin&gt;&gt;</code> 
</div><div id="deleteBoard"></div>
<h3>
  <code>deleteBoard(boardId)</code>
  

</h3>
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
      boardId
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;PinterestUser&gt;</code> 
</div><div id="createBoard"></div>
<h3>
  <code>createBoard(name,&nbsp;desc)</code>
  

</h3>
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
      name
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of the board</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      desc
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;PinterestBoard&gt;</code> 
</div><div id="getPin"></div>
<h3>
  <code>getPin(pinId,&nbsp;fields)</code>
  

</h3>
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
      pinId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The ID of the Pin</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fields
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;PinterestPin&gt;</code> 
</div><div id="deletePin"></div>
<h3>
  <code>deletePin(pinId)</code>
  

</h3>
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
      pinId
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="createPin"></div>
<h3>
  <code>createPin(note,&nbsp;boardId,&nbsp;imageUrl,&nbsp;link)</code>
  

</h3>
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
      note
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Note/Description of the pin</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      boardId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Board ID to put the Pin under</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      imageUrl
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>URL of the image to share</p>

      
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
      <p>Optional link to share</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;PinterestPin&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The unique string of numbers and letters that identifies the user on Pinterest.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      username
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user’s Pinterest username.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      first_name
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user’s first name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      last_name
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user’s last name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      bio
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The text in the user’s “About you” section in their profile.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      created_at
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The date the user created their account in ISO 8601 format</p>

    </td>
  </tr>
  
  <tr>
    <td>
      counts
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The user’s stats, including how many Pins, follows, boards and likes they have.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      image
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The user’s profile image. The response returns the image’s URL, width and height.</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The unique string of numbers and letters that identifies the board on Pinterest.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      name
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the board.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The link to the board.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      description
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user-entered description of the board.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      creator
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>PinterestUser</code>
    </td>
    <td>
      <p>The first and last name, ID and profile URL of the user who created the board.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      created_at
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The date the user created the board.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      counts
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The board’s stats, including how many Pins, followers, user&#39;s following and collaborators it has.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      image
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The user’s profile image. The response returns the image’s URL, width and height.</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The unique string of numbers and letters that identifies the Pin on Pinterest.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      link
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the webpage where the Pin was created.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URL of the Pin on Pinterest.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      creator
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>PinterestUser</code>
    </td>
    <td>
      <p>The first and last name, ID and profile URL of the user who created the board.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      board
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>PinterestBoard</code>
    </td>
    <td>
      <p>The board that the Pin is on.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      created_at
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The date the Pin was created.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      note
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The user-entered description of the Pin.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      color
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The dominant color of the Pin’s image in hex code format.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      counts
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The Pin’s stats, including the number of repins, comments and likes.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      media
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The media type of the Pin (image or video).</p>

    </td>
  </tr>
  
  <tr>
    <td>
      attribution
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The source data for videos, including the title, URL, provider, author name, author URL and provider name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      image
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The Pin’s image. The default response returns the image’s URL, width and height.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      metadata
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Extra information about the Pin for Rich Pins. Includes the Pin type (e.g., article, recipe) and related information (e.g., ingredients, author).</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

