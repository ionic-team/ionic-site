---
layout: post
title:  "Refreshing our Pull-to-Refresh"
date:   "2014-09-25 3:00:00"
categories: angularjs, ionic
author: '<img src="https://en.gravatar.com/userimage/4492737/bd46f8f2d8d12133c4df6c0441bc7ef1.jpg" class="author-icon"><a href="http://twitter.com/perrygovier" target="_blank">@perrygovier</a>'
published: true
---

For a while now, we’ve wanted to update Pull To Refresh in Ionic. It worked, but it wasn’t exciting, and since it’s a goal of ours at Ionic to make every component as enjoyable to use as it can be, we decided it was time for a change. Here's some of the lessons in semiotics and UX that we learned...

<!-- more -->

Wanting to make it fun and playful, we started by binding the rotation of the arrow icon to how far you pull down the view. It was fun. [Ben](https://twitter.com/benjsperry) and I spent a good ten minutes each just playing with pulling the view down. We quickly realized a problem, though: While it was fun, it was not practical. 

Most users don’t sit and play with the pull to refresh animation on their phones; they “use” their phones. They “use” pull to refresh to get the information they want, and they want it now. That means they swipe up quickly and expect the pull to refresh to trigger and update. They swipe so fast, the animation doesn’t even happen.

So we went back to a regular fixed-time animation, updated the default icons to be something more visually appealing, and moved on. 

The next thing we noticed was that most API calls are pretty fast, perhaps too fast. Our refresher would return to the home position as soon as it was told the information requested was received. This meant that as soon as you let go of the refresher when swiping up, it wouldn’t spin; instead, it would return immediately to the home position. We have an internal Hacker News app we were using to test this (more info on that soon). The front page of Hacker News doesn’t update every five seconds, so most of the time, a refresh does nothing. We were left unsure if an update actually fired. 

Setting up console logs allows developers to make sure the refresh actually happened. Users don’t get the reassurance of a console log, though, so your UI must be reassuring enough on its own.

We decided to force 400ms of the refreshing spinner animation. If the data came back sooner, we’d still apply it immediately, but we’d show the spinner for a bit, so the user would know a refresh had happened. To a developer, this may feel misleading. The refresh is already complete, so why are we still showing the animation?

**Users don’t care about what’s going on under the hood.** A big part of UX is keeping a user in familiar territory and reassuring him or her that the app is working properly. The user’s confidence that the refresh happened trumps its technical representation. In our updated pull to refresh, if an update takes longer than 400ms, it will continue to spin until the data is available. 

I think you’ll agree, the end result is a pull to refresh that’s enjoyable to use and communicates its function clearly. I greatly enjoyed going into this level of critical thinking on just one component. It’s a standard to which I’m proud to say we hold ourselves with every new Ionic feature. 
