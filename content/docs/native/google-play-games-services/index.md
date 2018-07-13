---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "google-play-games-services"
title: "Google Play Games Services"
header_sub_title: "Class in module "
doc: "Google Play Games Services"
docType: "class"
---

<h1 class="api-title">Google Play Games Services</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/google-play-games-services/index.ts#L83">
  Improve this doc
</a>







<p>A Cordova plugin that let&#39;s you interact with Google Play Games Services.</p>


<p>Repo:
  <a href="https://github.com/artberri/cordova-plugin-play-games-services">
    https://github.com/artberri/cordova-plugin-play-games-services
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-play-games-services --variable APP_ID="YOUR_APP_ID
$ npm install --save @ionic-native/google-play-games-services
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { GooglePlayGamesServices } from &#39;@ionic-native/google-play-games-services&#39;;


constructor(private googlePlayGamesServices: GooglePlayGamesServices) { }

...

// Authenticate with Play Games Services
this.googlePlayGamesServices.auth()
    .then(() =&gt; console.log(&#39;Logged in to Play Games Services&#39;))
    .catch(e) =&gt; console.log(&#39;Error logging in Play Games Services&#39;, e);

// Sign out of Play Games Services.
this.googlePlayGamesServices.signOut()
    .then(() =&gt; console.log(&#39;Logged out of Play Games Services&#39;))
    .catch(e =&gt; console.log(&#39;Error logging out of Play Games Services&#39;, e);

// Check auth status.
this.googlePlayGamesServices.isSignedIn()
    .then((signedIn: SignedInResponse) =&gt; {
        if (signedIn.isSignedIn) {
            hideLoginButton();
        }
    });

// Fetch currently authenticated user&#39;s data.
this.googlePlayGamesServices.showPlayer().then((data: Player) =&gt; {
   console.log(&#39;Player data&#39;, data);
});

// Submit a score.
this.googlePlayGamesServices.submitScore({
    score: 100,
    leaderboardId: &#39;SomeLeaderboardId&#39;
});

// Show the native leaderboards window.
this.googlePlayGamesServices.showAllLeaderboards()
    .then(() =&gt; console.log(&#39;The leaderboard window is visible.&#39;));

// Show a signle native leaderboard window.
this.googlePlayGamesServices.showLeaderboard({
    leaderboardId: &#39;SomeLeaderBoardId&#39;
}).then(() =&gt; console.log(&#39;The leaderboard window is visible.&#39;));

// Unlock an achievement.
this.googlePlayGamesServices.unlockAchievement({
    achievementId: &#39;SomeAchievementId&#39;
}).then(() =&gt; console.log(&#39;Achievement unlocked&#39;));

// Incremement an achievement.
this.googlePlayGamesServices.incrementAchievement({
    step: 1,
    achievementId: &#39;SomeAchievementId&#39;
}).then(() =&gt; console.log(&#39;Achievement incremented&#39;));

// Show the native achievements window.
this.googlePlayGamesServices.showAchivements()
   .then(() =&gt; console.log(&#39;The achievements window is visible.&#39;));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="auth" href="#auth"></a><code>auth()</code></h3>


Initialise native Play Games Service login procedure.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the player
is authenticated with Play Games Services.
</div><h3><a class="anchor" name="signOut" href="#signOut"></a><code>signOut()</code></h3>


Sign out of Google Play Games Services.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolve when the player
successfully signs out.
</div><h3><a class="anchor" name="isSignedIn" href="#isSignedIn"></a><code>isSignedIn()</code></h3>


Check if the user is signed in.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;SignedInResponse&gt;</code> Returns a promise that resolves with
the signed in response.
</div><h3><a class="anchor" name="showPlayer" href="#showPlayer"></a><code>showPlayer()</code></h3>


Show the currently authenticated player.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Player&gt;</code> Returns a promise that resolves when Play 
Games Services returns the authenticated player.
</div><h3><a class="anchor" name="submitScore" href="#submitScore"></a><code>submitScore(data)</code></h3>


Submit a score to a leaderboard. You should ensure that you have a
successful return from auth() before submitting a score.

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
      data</td>
    <td>
      <code>ScoreData</code>
    </td>
    <td>
      <p>The score data you want to submit.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the
score is submitted.
</div><h3><a class="anchor" name="showAllLeaderboards" href="#showAllLeaderboards"></a><code>showAllLeaderboards()</code></h3>


Launches the native Play Games leaderboard view controller to show all the
leaderboards.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the native
leaderboards window opens.
</div><h3><a class="anchor" name="showLeaderboard" href="#showLeaderboard"></a><code>showLeaderboard(data)</code></h3>


Launches the native Play Games leaderboard view controll to show the
specified leaderboard.

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
      data</td>
    <td>
      <code>LeaderboardData</code>
    </td>
    <td>
      <p>The leaderboard you want to show.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the native
leaderboard window opens.
</div><h3><a class="anchor" name="unlockAchievement" href="#unlockAchievement"></a><code>unlockAchievement(data)</code></h3>


Unlock an achievement.

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
      data</td>
    <td>
      <code>AchievementData</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the
achievement is unlocked.
</div><h3><a class="anchor" name="incrementAchievement" href="#incrementAchievement"></a><code>incrementAchievement(data)</code></h3>


Increment an achievement.

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
      data</td>
    <td>
      <code>IncrementableAchievementData</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the
achievement is incremented.
</div><h3><a class="anchor" name="showAchievements" href="#showAchievements"></a><code>showAchievements()</code></h3>


Lauches the native Play Games achievements view controller to show
achievements.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the
achievement window opens.
</div>





