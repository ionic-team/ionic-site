---
layout: post
title:  "Popup Support Just Landed"
date:   "2014-03-13 08:00:00"
hide_date: true
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

<div style="float: right; margin-right: -160px">
{% include codepen.html id="zkmhJ" %}
</div>

One great thing about native SDKs is the control they give developers when it comes to common tasks like 
prompting the user for input, or showing a modal dialog.

Unfortunately, the browser built-ins `alert()`, `confirm()`, and `prompt()`, while convenient, are too limiting for
those that wish to build a really custom mobile app experience.

Based on all the requests and feedback we've gotten from Ionic developers, we knew more powerful popup support was important to you. You want the ability to do things like
prompt for a password, or have two inputs in a popup. Things that just aren't possible with the built-in browser prompts.

So today we are releasing the first implementation of popup (or "dialog") support in Ionic. Check out the live demo on the right to get a feel for how it works.

We designed the popup experience off of how they function in iOS, meaning the modals can stack and will "pop" off after the most recent one is dismissed.

Since the native browser popups are the only functions that can block the executing Javascript that opens it, our implementation had to make it easy to asynchronously 
return prompt data to your code. We do this through Angular promises.

<!-- more -->

A call to prompt a user for a password looks like this with the new popup system (make sure to inject `$ionicPopup` into your controller):

```javascript
$ionicPopup.prompt({
  title: 'Enter your password',
  inputType: 'password'
}).then(function(password) {
  // You have the password now
});
```

Or, you can get a little wild and use an arbitrary template that binds to your scope, and completely control the buttons in the popup:

```javascript
  $scope.data = {}

  $ionicPopup.show({
    templateUrl: 'popup-template.html',
    title: 'Enter Wi-Fi Password',
    scope: $scope,
    buttons: [
      { text: 'Cancel', onTap: function(e) { return true; } },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          return $scope.data.wifi;
        }
      },
    ]
    }).then(function(password) {
      console.log('Got wifi password', password);
    });
```

See the full [Demo](http://codepen.io/ionic/pen/zkmhJ) for an example of how to use each type of popup we support.

Oh, and coming soon are some really great API docs that go into detail all the features of the popup system and all of our other controllers. Expect more on that in a week or so.

Have a great weekend!
